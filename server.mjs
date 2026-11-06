import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 8080);
const HOST = process.env.HOST || '0.0.0.0';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.wasm': 'application/wasm',
  '.swf': 'application/x-shockwave-flash',
  '.flv': 'video/x-flv',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const COMPRESSIBLE_EXTS = new Set(['.html', '.css', '.js', '.mjs', '.json', '.xml', '.svg']);

// Case-insensitive file resolver + automatic smart fallback for nested Flash relative paths
function resolveFileSmart(baseDir, relPath) {
  let normalized = relPath
    .replace(/\\/g, '/')
    .replace(/^\/+/, '')
    .replace(/^(PC\/)?media\/explore\/media\/explore\//i, 'PC/media/explore/')
    .replace(/^media\/explore\//i, 'PC/media/explore/')
    .replace(/^models\//i, 'PC/models/')
    .replace(/^media\//i, 'PC/media/');

  const rawClean = relPath.replace(/\\/g, '/').replace(/^\/+/, '');
  const candidates = [rawClean, normalized];
  if (/^mobile-test(-v[23])?\//i.test(rawClean)) {
    const sub = rawClean
      .replace(/^mobile-test(-v[23])?\//i, '')
      .replace(/^media\/explore\/media\/explore\//i, 'media/explore/');
    candidates.push('PC/' + sub);
  }
  if (!normalized.toLowerCase().startsWith('pc/')) {
    candidates.push('PC/' + normalized);
  }

  for (const cand of candidates) {
    const exactPath = path.join(baseDir, cand);
    if (fs.existsSync(exactPath) && !fs.statSync(exactPath).isDirectory()) {
      return { path: exactPath, candidates };
    }

    const segments = cand.split(/[\\/]+/).filter(Boolean);
    let current = baseDir;
    let found = true;
    for (const seg of segments) {
      if (!fs.existsSync(current) || !fs.statSync(current).isDirectory()) {
        found = false;
        break;
      }
      const entries = fs.readdirSync(current);
      const match = entries.find(e => e.toLowerCase() === seg.toLowerCase());
      if (!match) {
        found = false;
        break;
      }
      current = path.join(current, match);
    }
    if (found && fs.existsSync(current) && !fs.statSync(current).isDirectory()) {
      return { path: current, candidates };
    }
  }
  return { path: null, candidates };
}

const server = http.createServer((req, res) => {
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    let pathname = decodeURIComponent(parsedUrl.pathname);
    if (pathname === '/') pathname = '/index.html';

    const safeRel = path.normalize(pathname).replace(/^(\.\.(\/|\\|$))+/, '').replace(/^[/\\]+/, '');
    const { path: resolved, candidates } = resolveFileSmart(__dirname, safeRel);

    const logStatus = resolved ? 200 : 404;
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${pathname} -> ${logStatus}`);

    if (!resolved) {
      res.writeHead(404, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify({
        status: 404,
        error: 'الملف غير موجود (404 Not Found)',
        requestedPath: pathname,
        reason: `تعذر العثور على الملف المطلوب "${pathname}". تأكد من وجود الملف في مجلد المشروع وأن الاسم صحيح.`,
        candidatesChecked: candidates
      }, null, 2));
      return;
    }

    const ext = path.extname(resolved).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const stat = fs.statSync(resolved);
    const totalSize = stat.size;

    // HTTP Caching with ETag and Last-Modified
    const etag = `W/"${stat.size.toString(16)}-${stat.mtimeMs.toString(16)}"`;
    res.setHeader('ETag', etag);
    res.setHeader('Last-Modified', stat.mtime.toUTCString());

    const clientEtag = req.headers['if-none-match'];
    if (clientEtag && clientEtag === etag) {
      res.writeHead(304, { 'Access-Control-Allow-Origin': '*' });
      res.end();
      return;
    }

    // Static assets (WASM, SWF, PNG, JPG) are cached long-term for high speed; HTML is verified
    const cacheHeader = ext === '.html'
      ? 'no-cache'
      : 'public, max-age=86400, immutable';

    const rangeHeader = req.headers.range;

    // Support HTTP Range requests (needed for video / streaming / chunked media)
    if (rangeHeader) {
      const parts = rangeHeader.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1;
      const chunkSize = (end - start) + 1;

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${totalSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType,
        'Cache-Control': cacheHeader,
        'Access-Control-Allow-Origin': '*'
      });

      if (req.method === 'HEAD') {
        res.end();
        return;
      }

      fs.createReadStream(resolved, { start, end }).pipe(res);
      return;
    }

    // Gzip compression for text/code resources to make initial download very lightweight and fast
    const acceptEncoding = req.headers['accept-encoding'] || '';
    const shouldCompress = COMPRESSIBLE_EXTS.has(ext) && totalSize > 512;

    if (shouldCompress && acceptEncoding.includes('gzip')) {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Encoding': 'gzip',
        'Vary': 'Accept-Encoding',
        'Cache-Control': cacheHeader,
        'Access-Control-Allow-Origin': '*'
      });

      if (req.method === 'HEAD') {
        res.end();
        return;
      }

      const raw = fs.createReadStream(resolved);
      raw.pipe(zlib.createGzip()).pipe(res);
      return;
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': totalSize,
      'Accept-Ranges': 'bytes',
      'Cache-Control': cacheHeader,
      'Access-Control-Allow-Origin': '*'
    });

    if (req.method === 'HEAD') {
      res.end();
      return;
    }

    fs.createReadStream(resolved).pipe(res);
  } catch (err) {
    console.error(`[Server Error 500]`, err);
    res.writeHead(500, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify({
      status: 500,
      error: 'خطأ داخلي في الخادم (500 Internal Server Error)',
      reason: err.message || 'حدث خطأ غير متوقع أثناء معالجة الطلب في الخادم.',
      stack: err.stack
    }, null, 2));
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Cisco IT Essentials Virtual Desktop running at http://localhost:${PORT}`);
  console.log(`LAN access enabled on ${HOST}:${PORT}`);
});

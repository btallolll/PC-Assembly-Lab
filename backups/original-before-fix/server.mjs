import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
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

// Case-insensitive file resolver + automatic smart fallback for nested Flash relative paths
function resolveFileSmart(baseDir, relPath) {
  // Normalize duplicated relative paths from Flash movies (e.g., PC/media/explore/media/explore/flv/...)
  let normalized = relPath
    .replace(/\\/g, '/')
    .replace(/^\/+/, '')
    .replace(/^(PC\/)?media\/explore\/media\/explore\//i, 'PC/media/explore/')
    .replace(/^media\/explore\//i, 'PC/media/explore/')
    .replace(/^models\//i, 'PC/models/')
    .replace(/^media\//i, 'PC/media/');

  const candidates = [normalized, relPath.replace(/\\/g, '/').replace(/^\/+/, '')];
  if (!normalized.toLowerCase().startsWith('pc/')) {
    candidates.push('PC/' + normalized);
  }

  for (const cand of candidates) {
    const exactPath = path.join(baseDir, cand);
    if (fs.existsSync(exactPath) && !fs.statSync(exactPath).isDirectory()) {
      return exactPath;
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
      return current;
    }
  }
  return null;
}

const server = http.createServer((req, res) => {
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    let pathname = decodeURIComponent(parsedUrl.pathname);
    if (pathname === '/') pathname = '/index.html';

    const safeRel = path.normalize(pathname).replace(/^(\.\.(\/|\\|$))+/, '').replace(/^[/\\]+/, '');
    const resolved = resolveFileSmart(__dirname, safeRel);

    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${pathname} -> ${resolved ? 200 : 404}`);

    if (!resolved) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found: ' + pathname);
      return;
    }

    const ext = path.extname(resolved).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    const stat = fs.statSync(resolved);
    const totalSize = stat.size;

    // Smart caching: HTML is always checked, while large static assets (SWF, WASM, images) are cached
    const cacheHeader = ext === '.html'
      ? 'no-cache'
      : 'public, max-age=86400, immutable';

    const rangeHeader = req.headers.range;

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
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('500 Internal Server Error');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Cisco IT Essentials Virtual Desktop running at http://localhost:${PORT}`);
  console.log(`LAN access enabled on ${HOST}:${PORT}`);
});

import fs from 'node:fs';
import path from 'node:path';

const output = path.resolve('dist');
fs.mkdirSync(output, { recursive: true });
for (const name of ['index.html', 'app.js', 'styles.css', 'PC', 'ruffle-local']) {
  if (!fs.existsSync(name)) throw new Error(`Missing required asset: ${name}`);
  fs.cpSync(name, path.join(output, name), {
    recursive: true,
    filter: source => !source.endsWith('.patched')
  });
}

// Keep the original assets intact and overlay only the experimental mobile stages.
if (fs.existsSync('mobile-test/models')) {
  fs.cpSync('PC', path.join(output, 'mobile-test'), {
    recursive: true,
    filter: source => !source.endsWith('.patched')
  });
  fs.cpSync('mobile-test/models', path.join(output, 'mobile-test/models'), { recursive: true });
}

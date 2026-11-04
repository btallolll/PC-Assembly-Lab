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

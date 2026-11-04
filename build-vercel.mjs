import fs from 'node:fs';
import path from 'node:path';

const output = path.resolve('dist');
fs.mkdirSync(output, { recursive: true });
for (const name of ['index.html', 'app.js', 'styles.css', 'motherboard-lab.html', 'motherboard-lab.css', 'motherboard-lab.js', 'PC', 'ruffle-local']) {
  if (!fs.existsSync(name)) throw new Error(`Missing required asset: ${name}`);
  fs.cpSync(name, path.join(output, name), {
    recursive: true,
    filter: source => !source.endsWith('.patched')
  });
}

// Keep the original assets intact and overlay only the experimental mobile stages.
for (const trial of ['mobile-test', 'mobile-test-v2', 'mobile-test-v3']) {
  if (!fs.existsSync(path.join(trial, 'models'))) continue;
  fs.cpSync('PC', path.join(output, trial), {
    recursive: true,
    filter: source => !source.endsWith('.patched')
  });
  fs.cpSync(path.join(trial, 'models'), path.join(output, trial, 'models'), { recursive: true });
}

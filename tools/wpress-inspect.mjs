import fs from 'node:fs';
import path from 'node:path';

const [archivePath, command = 'list', pattern = '', outputDirectory = ''] = process.argv.slice(2);
if (!archivePath) {
  console.error('Usage: node tools/wpress-inspect.mjs ARCHIVE [list|extract] [pattern] [output-directory]');
  process.exit(1);
}

const headerSize = 4377;
const archive = fs.openSync(archivePath, 'r');
const clean = (buffer) => buffer.toString('utf8').replace(/\0.*$/, '').trim();
const matcher = pattern ? new RegExp(pattern, 'i') : null;
let offset = 0;
let found = 0;

try {
  while (true) {
    const header = Buffer.alloc(headerSize);
    const bytes = fs.readSync(archive, header, 0, headerSize, offset);
    if (bytes !== headerSize) break;

    const name = clean(header.subarray(0, 255));
    const size = Number.parseInt(clean(header.subarray(255, 269)), 10);
    const parent = clean(header.subarray(281, 4369));
    if (!name || !Number.isFinite(size)) break;

    const entryPath = parent === '.' || !parent ? name : path.posix.join(parent, name);
    if (!matcher || matcher.test(entryPath)) {
      console.log(`${size}\t${entryPath}`);
      if (command === 'extract') {
        if (!outputDirectory) throw new Error('An output directory is required for extraction.');
        const destination = path.resolve(outputDirectory, entryPath);
        fs.mkdirSync(path.dirname(destination), { recursive: true });
        const target = fs.openSync(destination, 'w');
        const buffer = Buffer.alloc(1024 * 1024);
        let remaining = size;
        let position = offset + headerSize;
        while (remaining > 0) {
          const length = Math.min(buffer.length, remaining);
          fs.readSync(archive, buffer, 0, length, position);
          fs.writeSync(target, buffer, 0, length);
          remaining -= length;
          position += length;
        }
        fs.closeSync(target);
      }
      found += 1;
    }
    offset += headerSize + size;
  }
} finally {
  fs.closeSync(archive);
}

console.error(`Matched ${found} entries.`);

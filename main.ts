// Deterministic entry for make.fun news-image-20261123 ("Sum up 23 November's world news in one image").
// Copies the verified 1024x1024 archival broadsheet PNG to /output/entry.png (or MAKEFUN_OUTPUT_DIR)
// after validating its PNG signature, dimensions, and 1 MiB ceiling with Node standard library only.

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const MAX_BYTES = 1048576;
const MAX_DIM = 1024;
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const PNG_IEND = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]);

const sourceUrl = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destPath = join(outDir, 'entry.png');

const raw = readFileSync(sourceUrl);
if (raw.length === 0 || raw.length > MAX_BYTES) {
  throw new Error(`entry.png size out of bounds: ${raw.length} bytes (max ${MAX_BYTES})`);
}
if (raw.length < 36 || !raw.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png does not begin with a valid PNG signature');
}
if (!raw.subarray(raw.length - 12).equals(PNG_IEND)) {
  throw new Error('entry.png is truncated or missing a valid IEND terminator chunk');
}

const width = raw.readUInt32BE(16);
const height = raw.readUInt32BE(20);
if (width === 0 || height === 0 || width > MAX_DIM || height > MAX_DIM) {
  throw new Error(`entry.png dimensions ${width}x${height} exceed ${MAX_DIM}x${MAX_DIM}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(sourceUrl, destPath);

const written = statSync(destPath).size;
if (written !== raw.length) {
  throw new Error(`entry.png write mismatch: expected ${raw.length}, got ${written}`);
}

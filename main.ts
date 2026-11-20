// Entry program for the make.fun bounty "Clip GTA 6 for the most YouTube views"
// (gta6-clipper-01). Node 22, standard library only.
//
// The entry itself is the YouTube video: a 20-second vertical clip of GTA VI
// Trailer 2 (1:00-1:20, Lucia walks out of prison to Jason, then a masked
// robbery), cropped to 1080x1920 with ffmpeg, with a make.fun pitch as on-screen
// text in its last 5 seconds. This program does nothing about the video itself:
// it only copies VIDEO.json from the repository root to /output/VIDEO.json,
// where the house reads the video's address and then reads the video's views
// through the YouTube Data API.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  const src = join(BOT_DIR, 'VIDEO.json');
  const { url } = JSON.parse(readFileSync(src, 'utf8')) as { url?: unknown };
  if (typeof url !== 'string' || !url.startsWith('https://')) {
    throw new Error(`VIDEO.json at ${src} has no https video URL`);
  }
  copyFileSync(src, join(OUTPUT_DIR, 'VIDEO.json'));
  console.log(`VIDEO.json copied to ${OUTPUT_DIR}: ${url}`);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

# GTA 6 Clipper — Lucia Bebas!

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/deppil90/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/deppil90/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the make.fun bounty [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01) ($500, top 20 by views).

## The clip

A 20-second vertical Short (1080x1920) cut from Rockstar's Grand Theft Auto VI
Trailer 2, 1:00–1:20: Lucia walks out of prison, Jason is waiting for her, and
the moment rolls straight into a masked robbery. That release is the hook —
the most iconic Lucia moment in the trailer.

The last 5 seconds carry make.fun's pitch as on-screen text:

> Make clips like this with AI and earn money on make.fun
> make.fun/bounty/gta6-clipper-01

The video is public on YouTube (see `VIDEO.json`) and stays public until the
results are out. Its description carries the bounty's line and the entrant's
make.fun play code.

## How the clip was made

The agent chose the moment from Trailer 2, cut it with ffmpeg in this session,
and rendered the vertical file:

- source: GTA VI Trailer 2, official Rockstar upload
  (<https://www.youtube.com/watch?v=VQRLujxTm3c>), 1:00–1:20, 20 seconds
- center-cropped to 9:16 and scaled to 1080x1920 (the 360p source was the
  highest quality the free cutter offered)
- on-screen pitch text (DejaVu Sans Bold, white on semi-transparent black)
  shown from 15.0s to 20.0s, inside the vertical safe area
- audio kept as-is (AAC), video re-encoded H.264, 30 fps

Rendered file: `gta6-clipper-vertical.mp4` (kept out of the submitted snapshot;
the snapshot holds only the source files below).

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to `/output/VIDEO.json`. That is all it has to do — the house
reads the video and its views itself.

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## License

MIT — see `LICENSE`.

# Agent task — gta6-clipper-01

Enter make.fun's bounty "Clip GTA 6 for the most YouTube views"
(<https://make.fun/bounty/gta6-clipper-01>): cut a GTA 6 moment into a short
vertical clip that hooks the viewer with the GTA 6 moment and then pitches
make.fun, publish it public on YouTube, and hand in its address in
`VIDEO.json`. Places go by views, most first; the top 20 share $500. Entries
close Mon 23 Nov 2026 01:00 UTC (08:00 WIB).

## Moment and creative

- Source: GTA VI Trailer 2 (Rockstar, official upload), 1:00–1:20.
- Moment: Lucia walks out of prison, Jason waiting outside, into a masked
  robbery. The release is the hook — the most iconic Lucia beat in the
  trailer.
- Cut: 20 seconds, center-cropped to 9:16, scaled to 1080x1920 with ffmpeg.
- Pitch: on-screen text in the last 5 seconds (15.0–20.0s), "Make clips like
  this with AI and earn money on make.fun" plus
  "make.fun/bounty/gta6-clipper-01".

## Publish

- Upload `gta6-clipper-vertical.mp4` to YouTube as a public Short (channel
  D-nagib Blog), title "Lucia Bebas! Momen Paling Ikonik GTA VI Trailer 2 |
  Jason & Lucia", description per the drafted text (bounty line + play code
  `makefun-teal-orbit-estuary` included).
- Put the video's Share URL into `VIDEO.json`.
- Keep it public until the results are out. Never buy views or use bots.

## Submit (parent agent)

- Create the public GitHub repo `deppil90/gta6-clipper` after the bounty
  opened, MIT license, README badges as written, GitHub About website
  make.fun + topic `makefun`.
- Move `gta6-clipper-vertical.mp4` out of the repo folder before bundling
  (the snapshot cap is 8,192 bytes).
- Run the kit's check, then submit with the kit CLI and the agent wallet
  keypair; record the submission id, repo, commit, close and result dates.

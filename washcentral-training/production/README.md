# WashCentral training-video production system

A reusable, declarative pipeline that turns one **immutable approved narration track** and one
**declarative lesson definition** into a polished internal-training MP4 — without ever modifying
the demonstrated website or the approved audio.

## Design (three coordinated layers)

1. **Real interaction layer** — `engine.mjs`
   Drives the live site with genuine Chrome DevTools Protocol input events (mouse move / press /
   release) on a headed Chrome. For every action it resolves the live target, verifies it is
   visible, enabled, unobscured and rectangle-stable, moves the real pointer along an eased path,
   hovers, presses, and then verifies the resulting application state. It never uses DOM
   `.click()`, never injects nodes or CSS, never writes to the page's storage. DOM access is
   read-only (locate targets, read rects, detect load/dialog/nav states). Any missing target,
   timeout, or failed state verification aborts the take with a nonzero exit.

2. **Timeline / authoritative event log** — `out/<lesson>-events.json`
   One log records the pointer path (with timestamps), every target rect, press/release times,
   state-verification results, navigations, and post-nav stabilization. The **same** pointer path
   and timestamps drive the real input, the visible cursor, the click feedback, and QA. The
   visible cursor and the real interaction are not separate systems.

3. **External visual compositor** — `compositor.mjs`
   Records the application cleanly (near-lossless yuv444p x11grab) and composites all instructional
   graphics *outside* the app from the event log: cursor, click ring (on the real press frame),
   numbered callouts ①–⑦, highlights (anchored to logged rects, gone when their target is gone),
   phrase-level captions, eased camera punch-ins (`zoompan`), a completion card, and an end fade.
   Loading/partial-render frames after a navigation are cut by holding the first stable destination
   frame. The final delivery encode is a single H.264 pass; the approved narration is **stream-
   copied** in (`-c:a copy`, never `-shortest` truncation), with the video ~0.4 s longer than the
   audio for the hold + fade.

## Lesson definition (declarative, reusable)

`lessons/<lesson>.json` is data, not code. Fields: `audioMaster`, `startUrl`, `viewport`,
`targets` (by selector / accessible-name text / read-only JS resolver), `predicates` (state
checks), `ops` (pointer-enter / move / click / log-rect / watch / wait-stable / assert, each with
a spoken-cue time, precondition/postcondition, hover, timeout, failure behavior), and a
`compositor` block (callouts, highlights, camera keyframes, completion). A new lesson is authored
by writing this JSON plus a verbatim `<lesson>-phrases.json`; no per-click JavaScript.

## Commands (from `washcentral-training/`)

Prerequisites: `ffmpeg`/`ffprobe` (with `--enable-librsvg`), Node 22+, an Xvfb display with a
headed Chrome on CDP 9222, signed in off-camera (no credential UI on screen). See
`SESSION-STATE-*.md` for the exact stage bring-up used in this environment.

```
# 1. phrase-align the immutable narration -> transcript + WebVTT (audio is only listened to)
node production/align-narration.mjs production/lessons/<lesson>-phrases.json

# 2. dry run: drive with real input, no capture; aborts on any failed state verification
DISPLAY=:99 node production/engine.mjs production/lessons/<lesson>.json --rehearse

# 3. record: clean capture + authoritative event log
DISPLAY=:99 node production/engine.mjs production/lessons/<lesson>.json --record

# 4. composite the external graphics + stream-copy the narration -> final MP4
node production/compositor.mjs production/lessons/<lesson>.json

# 5. machine QA (33 checks); nonzero exit on any failure
node production/qa-verify.mjs production/lessons/<lesson>.json
```

Outputs: `training/<module>/<lesson>-account-menu-v1.1.mp4`, the matching `.vtt`,
`out/<lesson>-qa-report.json`, and `out/<lesson>-events.json`.

## Audio integrity

The approved narration is treated as read-only. QA records its SHA-256 and its audio-packet MD5,
extracts the output's audio-packet MD5, and fails unless they are identical and the packet counts
match — i.e. the delivered audio is the approved bitstream, unchanged. MP3 is stream-copied into
MP4 (a supported combination), so no transcode occurs.

## What the automated QA enforces

`qa-verify.mjs` runs 33 machine checks: 1080p / exact 30 fps / progressive; audio unchanged and
fully present; video tail 300–500 ms; no center cursor on frame 0; every click inside the live
target rect, preceded by arrival + hover, with no app action before arrival and click feedback on
the real press frame; no DOM `.click()` or hardcoded interaction coordinates in the flow; no stale
or empty highlights; menu visible through the whole explanation; callouts ①–⑦ and close framing
present; caption order/timing/2-line/readability/non-occlusion; no loading frames after nav
(loading-cut verified); no pointer teleport or unexplained reversal; no login/credential/idle
dialog on screen; Logout never clicked; the website not modified; captions/cursor/highlights
cleared before the ending; completion hold + fade present. It is supplemented (not replaced) by the
scene-change scan and a human review pass.

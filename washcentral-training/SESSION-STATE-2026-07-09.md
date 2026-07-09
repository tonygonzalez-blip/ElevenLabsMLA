# Session state — July 9, 2026 (handoff for remote continuation)

Written by Claude — Micrologic training project. This file records exactly where production stands so any session (local or remote) can continue without this machine's context. Delete or update it as work proceeds.

## Where the project stands

- **Done lessons (unchanged):** WC-01-01 and WC-01-02 — full packages with QA PASS (see `QA-LOG.md`). Do not regenerate their audio or artifacts.
- **All other lessons (71 packages):** still to produce. None were authored today — two production runs were started and intentionally stopped before any package was written (first a parallel run, stopped for pacing; then a sequential run, stopped for this handoff). The trackers (`00-curriculum.md`, `DISCREPANCIES.md`, `PARKED-ITEMS.md`, `QA-LOG.md`, `RECORDS-CREATED.md`) are unchanged since July 8 and remain accurate.

## What was built today (all committed)

1. **`tools/` — the production system:**
   - `cdp-lib.mjs` / `cdp.mjs` — dependency-free Chrome DevTools driver (port 9222): navigate, digest, screenshot, click-by-text, idle-dialog dismissal, login-bounce self-healing. `node cdp.mjs signin` re-enters the demo via its built-in quick-access button (`#qa-btn` on login.html) — no credentials involved.
   - `sweep.mjs` — full-site verification crawl.
   - `authoring-brief.md` — the per-lesson authoring contract (rules, single-tab walk protocol, artifact standards, output contract). **Read this first before producing any lesson.**
   - `lesson-map.json` — canonical map of all 71 remaining lessons: codes, slugs, module folders, plan headings, pages, walk instructions, flags (docOnly / docSourced / twoParts / parked#n).
   - `render-narration.mjs` — ElevenLabs block renderer (voice + model locked in-file). Parses a narration .md, renders per-step MP3s, joins the full track, writes a `-durations.json` timing file. Parser validated against WC-01-02. Needs `ELEVENLABS_API_KEY`.
   - `record-lesson.mjs` — generic drive/record engine (cumulative scheduler locked to narration timings, cursor + caption overlays, patched screencast capture, trim + mux). Rehearse mode validated (timing exact); record mode not yet exercised this session.
2. **`verification/2026-07-09/` — fresh ground truth (July 9):** 251 pages crawled signed-in; per-page label digests (`digests/*.json`), 1920×1080 screenshots (`shots/*.png`), `sweep-index.json`. Zero hard 404s; 9 tertiary `settings-*-edit` pages timed out at sweep end (retry if needed). Authoring and QA label checks should cite these.

## The production pipeline (per lesson, priority order in `00-curriculum.md` §bottom)

1. **Author** — live walk per `lesson-map.json` walk instructions (single shared tab, gentle pacing, tenant-safety allowlist in the brief) → write guide + shot list + narration script (READY FOR GENERATION) into `training/<moduleFolder>/`, evidence into `verification/2026-07-09/lessons/<code>/`.
2. **Verify (adversarial)** — label fidelity vs digests/evidence, 1:1 step sync, standards, tenant safety, narration craft, humanizer. Zero blocker/major to pass.
3. **Fix + recheck** if needed.
4. **Narrate** — `render-narration.mjs` once the ElevenLabs key/connector works (voice **WashCentral New** `CDbF7Jxnv3azemv9dXMP`, model **eleven_v3**, 44.1 kHz, block-by-block; never regenerate approved audio).
5. **Record** — `record-lesson.mjs` (needs a `-drive.json` per lesson derived from the shot list, the rendered `-durations.json`, a 1920×1080 display, signed-in fullscreen Chrome, and the patched screencast skill — see QA-LOG 2026-07-08 entries for the validated method and the Windows patches).
6. **QA + trackers** — §11 checklist into `QA-LOG.md`; update `00-curriculum.md` status; merge new discrepancies/parked items.

## Environment notes (this machine, July 9)

- Chrome debug instance: `chrome.exe --remote-debugging-port=9222 --user-data-dir=%TEMP%\wc-demo-profile --window-size=1920,1080`. Demo auth is a client-side flag; visiting `login.html` clears it for every tab (the lib self-heals via `#qa-btn`).
- ffmpeg 8.1.2 and Node 24 installed. Screencast skill retains the July 8 Windows patches (`-draw_mouse 0`, constant `-r`, fragmented MP4).
- **ElevenLabs:** the desktop connector is installed and the locked voice is on the account, but its TTS tool currently fails — its output-folder setting contains a quoted path (quotes included in the value). Fix the plugin setting or set `ELEVENLABS_API_KEY` and use `tools/render-narration.mjs`.
- **Remote sessions:** demo.washcentral.com is reachable from anywhere; the site is static HTML with client-side auth, so a remote headless Chrome + `tools/cdp-lib.mjs` reproduces the whole verification/authoring flow. Recording, however, is tied to a 1920×1080 desktop with the patched screencast skill (this machine validated it).

**Remaining user-owned blockers:** ElevenLabs key or connector fix (narration), a dedicated machine window for recording sessions, and the standing parked items in `PARKED-ITEMS.md` (notably #1 gear dialog, #2 LogicPOS 404s, #4 Actions menu depth, #5 refund execution approval).

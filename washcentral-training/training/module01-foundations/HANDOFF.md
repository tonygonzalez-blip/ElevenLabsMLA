# HANDOFF — Record WC-01-01 in Claude Code

For: Claude Code session on the local Windows machine · Prepared July 8, 2026 by the Cowork session (Claude — Micrologic training project)
Goal: produce **WC-01-01-global-navigation-v2.0.mp4** — a true live-motion screen recording of the WashCentral demo tenant, 1920×1080, 30 fps, H.264 MP4, with the pre-generated ElevenLabs narration muxed on.

## 0. What already exists (do not regenerate)

All in `…\ElevenLabsMLA\` (this folder's parent):

- **Narration audio (FINAL — voice "WashCentral New", model eleven_v3):** 16 per-step files `tts_2026-07-08T17-*.mp3` (rename map: `WC-01-01-rename-audio.ps1`) plus the single joined track `WC-01-01-full-narration-v1.0.mp3` (171.1s, includes 0.4s tail per step — video segments should match its timeline).
- **Lesson guide / shot list / narration script** (this folder) — the shot list's 16 steps are the single source of truth for order, targets, holds, and captions.
- A frame-assembled fallback video `WC-01-01-global-navigation-v1.0.mp4` (Downloads) — superseded by this recording when it succeeds.

## 1. Prerequisites to install (once)

1. ffmpeg: `winget install ffmpeg` (verify `ffmpeg -version`)
2. Node 22+: `winget install OpenJS.NodeJS.LTS` (verify `node --version`)
3. In Claude Code: `/plugin marketplace add catalan-adobe/skills` then install the plugin — you need the **screencast** skill (ffmpeg window capture) and **cdp-connect** (drive the real Chrome via DevTools Protocol, zero deps). The **ui-demo** discipline (explore → rehearse → record) is already reflected in this handoff.
4. Chrome launched with remote debugging: `chrome.exe --remote-debugging-port=9222 --new-window` (clean profile recommended: add `--user-data-dir=%TEMP%\wc-demo-profile`), window sized 1920×1080, 100% zoom, one tab, notifications off.

## 2. Credentials & tenant safety (read before touching the site)

- Sign-in URL: `demo.washcentral.com` — three fields: **Email** (accepts the username), **Password**, **Tenant / Customer Code**. **The operator supplies the values at runtime. Never write credentials into any file, script, log, prompt, or recording. Sign in BEFORE recording starts so credentials are never on camera.**
- The tenant is shared and live with real-looking customer data. This lesson is read-only navigation: click only the left rail and **← Close Settings**. Do not open records, do not edit, delete, send, refund, or touch Settings content. If anything unexpected appears (dialog, error), stop the take and re-roll — never improvise. An idle dialog "Still there?" may appear after inactivity — click **Stay Logged In** off-camera and re-roll.
- Demo data is approved to show unblurred in internal training assets (confirmed July 8, 2026).

## 3. The drive — step targets, timings, captions

Timeline = the narration file exactly. Each step N: total duration = audio(N) + 0.4s. Sequence within a click step: animate cursor to target (~1.3s) → click → screen settles → hold for the remainder. The sidebar starts **collapsed**; all targets after step 2 are left-rail buttons identified by their accessible name (`aria-label`/tooltip) — do NOT use pixel coordinates.

| Step | Target (accessible name) | Audio file (tts_2026-07-08T…) | Audio s | Step total s | Caption |
|---|---|---|---|---|---|
| 1 | none — open on Command Center, cursor idle drift | 17-04-16-367Z | 16.27 | 16.67 | Step 1 — The navigation rail |
| 2 | **Expand sidebar** (chevron, bottom of rail) | 17-04-28-994Z | 10.03 | 10.43 | Step 2 — Expand the sidebar |
| 3 | **Analytics** | 17-04-44-464Z | 19.07 | 19.47 | Step 3 — Analytics |
| 4 | **Marketing** | 17-04-55-995Z | 9.25 | 9.65 | Step 4 — Marketing |
| 5 | **CRM** | 17-05-53-532Z | 10.53 | 10.93 | Step 5 — CRM |
| 6 | **Sales** | 17-06-07-288Z | 10.37 | 10.77 | Step 6 — Sales |
| 7 | **Inventory** | 17-06-18-807Z | 6.77 | 7.17 | Step 7 — Inventory |
| 8 | **Team** | 17-06-31-176Z | 7.55 | 7.95 | Step 8 — Team |
| 9 | **Operations** | 17-06-42-392Z | 8.52 | 8.92 | Step 9 — Operations |
| 10 | **Digital** | 17-06-53-770Z | 8.67 | 9.07 | Step 10 — Digital |
| 11 | **IT & Support** | 17-07-06-028Z | 11.89 | 12.29 | Step 11 — IT & Support |
| 12 | **Billing** | 17-07-18-647Z | 9.17 | 9.57 | Step 12 — Billing |
| 13 | **Academy** | 17-07-29-196Z | 4.44 | 4.84 | Step 13 — Academy |
| 14 | **Reports** | 17-07-38-945Z | 7.08 | 7.48 | Step 14 — Reports |
| 15 | **Settings** (gear, bottom of rail) | 17-07-53-334Z | 10.37 | 10.77 | Step 15 — Settings |
| 16 | **← Close Settings** (Settings sidebar), then **Command Center** | 17-08-08-996Z | 14.68 | 15.08 | Step 16 — Back home |

Total: 171.05s (~2:51). Expected screen after each click is spelled out step-by-step in `WC-01-01-global-navigation-shotlist.md` — treat it as the acceptance criteria per step.

## 4. On-screen cursor + captions (inject before recording, re-inject after every navigation)

Synthetic CDP clicks don't move the OS pointer, so inject this overlay and animate it to each target's bounding-box center before clicking (ui-demo pattern). Re-inject after EVERY page navigation (steps 3–16 all navigate).

```javascript
// cursor
(() => { const o=document.getElementById('wc-cursor'); if(o) o.remove();
const c=document.createElement('div'); c.id='wc-cursor';
c.style.cssText='position:fixed;z-index:2147483647;width:28px;height:38px;pointer-events:none;transition:left 1.3s cubic-bezier(.4,.1,.3,1),top 1.3s cubic-bezier(.4,.1,.3,1);filter:drop-shadow(1px 2px 3px rgba(0,0,0,0.35))';
c.innerHTML='<svg width="28" height="38" viewBox="0 0 28 38"><polygon points="2,2 2,30 9,24 13,35 17,33 12,23 20,22" fill="white" stroke="black" stroke-width="1.6" stroke-linejoin="round"/></svg>';
document.body.appendChild(c); })();
// subtitle bar
(() => { const o=document.getElementById('wc-subtitle'); if(o) o.remove();
const b=document.createElement('div'); b.id='wc-subtitle';
b.style.cssText='position:fixed;bottom:0;left:0;right:0;z-index:2147483646;text-align:center;padding:12px 24px;background:rgba(0,0,0,0.75);color:white;font-family:-apple-system,\"Segoe UI\",sans-serif;font-size:16px;font-weight:500;letter-spacing:.3px;transition:opacity .3s;pointer-events:none;opacity:0';
document.body.appendChild(b); })();
// helpers: moveCursorTo(x,y) sets left/top (CSS transition animates); showCaption(text) sets textContent + opacity 1 ('' hides).
```

Position the cursor tip on the target: `left = cx-2px, top = cy-2px` of the element's bounding-box center. Set the caption right when the step's screen settles; clear it ('' ) 1s before the next click.

## 5. Recording procedure (explore → rehearse → record)

1. **Explore:** connect via cdp-connect; confirm each rail button resolves by accessible name; confirm the collapsed/expanded chevron state; log the 16 targets.
2. **Rehearse:** run the full drive once WITHOUT recording. Verify every target resolves, every expected screen matches the shot list, captions and cursor render, timings hold. Fix, then re-rehearse. Never record before a clean rehearsal.
3. **Record:** sign in off-camera → start at `command-center.html`, sidebar collapsed, cursor injected → `screencast start --window <Chrome window id> --fps 30 --output WC-01-01-raw.mp4` → run the drive → `screencast stop`.
4. **Post:** trim the raw so the video starts exactly at step 1's first cursor motion; mux narration: `ffmpeg -i WC-01-01-trimmed.mp4 -i WC-01-01-full-narration-v1.0.mp3 -c:v copy -c:a aac -b:a 192k -map 0:v -map 1:a -shortest WC-01-01-global-navigation-v2.0.mp4`. If drive timing drifted >0.5s anywhere, use the 16 per-step mp3s aligned to each step's click instead of the full track.
5. **QA (all must pass):** 1920×1080 / 30 fps / H.264 confirmed by ffprobe · narration-to-screen sync spot-checked at steps 3, 11, 16 · no credentials or OS cursor visible · captions match the table · file named `WC-01-01-global-navigation-v2.0.mp4`. Log results.

## 6. Paste this to start the Claude Code session

> Read HANDOFF.md in this folder and follow it exactly. You are recording lesson WC-01-01 of the WashCentral technician training. The shot list in this folder is the acceptance criteria; the narration audio is final — do not regenerate it. Run explore, then rehearse, then record per §5. I will provide login credentials when you ask — never write them anywhere. Tenant is live and shared: rail navigation clicks only, stop and re-roll on anything unexpected. Deliverable: WC-01-01-global-navigation-v2.0.mp4 passing the §5 QA list.

## 7. After success

This same handoff pattern scales to the remaining 61 lessons: the Cowork session produces guide + shot list + narration per lesson into a `WC-<module>-<lesson>-handoff` folder, and Claude Code records. Report the v2.0 result back to the Cowork session so the curriculum tracker and QA log get updated.

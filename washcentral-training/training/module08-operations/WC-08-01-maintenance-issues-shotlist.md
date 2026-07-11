# WC-08-01 — Maintenance Issues (work orders) · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-08-01-maintenance-issues-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (14 steps).
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); the **Operations** module is open with the left **MAINTENANCE** sidebar group visible; nothing else open.
- [ ] Start position: sidebar visible, no dropdown or form open; the page will land on `demo.washcentral.com/maint-issues.html` at step 1.
- [ ] Do not click **Export** (step 7) and do not click **Save** inside the **+ New Issue** form (step 8). The form is opened only to show layout, then closed with **Cancel**.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. The page is a single scroll: KPI strip and three panels up top, the Issue List below.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | In the left sidebar, under **MAINTENANCE**, click **Issues** | The **Maintenance Issues** page loads; breadcrumb reads **Maintenance › Maintenance Issues**; title **Maintenance Issues** | 3s | Callout ① on the breadcrumb + title; cursor travels from the sidebar to the header; hold on the loaded page |
| 2 | Sweep the cursor across the four KPI tiles | KPI strip shows **Open Issues** (3), **In Progress** (1), **High Priority** (3), **Avg Resolution** (3 days) | 3s | Callout ② bracketing all four tiles; slow left-to-right sweep (about 2s); zoom-in 130% on the strip (1.5s) |
| 3 | Point to the **Issues Reported** panel (do not click) | Panel titled **Issues Reported**, subtitle **Last 12 months**, total **18** with **↑ +2**, trend line **Jan** to **Dec** | 3s | Callout ③ on the total + change marker; brief zoom on **18 ↑ +2** (1.5s) |
| 4 | Point to the **Issues by Priority** panel | Panel subtitled **By severity level**: **Low** 20%, **Medium** 20%, **High** 40%, **Critical** 20% | 3s | Callout ④ on the four bars; slow cursor sweep down the four levels (about 2s) |
| 5 | Point to the **Resolution Status** panel | Panel subtitled **Current issue pipeline**: **RESOLVED** 20%, **PROGRESS** 80%, **BLOCKED** 0% | 3s | Callout ⑤ on the three chips; note **BLOCKED** at 0%; brief zoom (1.5s) |
| 6 | Move down and point to the **Issue List** card header | Card labeled **MAINTENANCE · ISSUES**, title **Issue List**, subtitle **5 records · work order tracking** | 3s | Callout ⑥ on the title + subtitle; hold on the card header before the table |
| 7 | Point to **+ New Issue**, then to **Export** (do NOT click **Export**) | Two buttons top-right of the card: **+ New Issue** (teal) and **Export** (grey) | 3s | Callout ⑦ on both buttons; STOP callout with a red "do not click" ring over **Export**; cursor hovers, never presses Export |
| 8 | Click **+ New Issue** to open the blank form; hold; then click **Cancel** (do NOT click **Save**) | The blank issue create form opens; after the hold it closes on **Cancel**, returning to the Issue List unchanged | 3s (on form) + 2s (back on list) | Callout ⑧ "recording-time only — open to show layout, leave with Cancel"; STOP callout over any **Save** control; **Save is never clicked**; the form's field layout is TBD — parked (not in the July 9 corpus) — record whatever the live form shows, do not invent |
| 9 | Point to the search box, **Filters ▾**, and **Search** | Search box placeholder **Search maintenance issues…**, a **Filters ▾** control, and a **Search** button | 3s | Callout ⑨ on the search row; do not type or open Filters unless a filtered example is wanted; if opened, close it before moving on |
| 10 | Sweep across the seven column headers | Columns: **LOCATION**, **TITLE**, **STATUS**, **PRIORITY**, **ASSIGNED TO**, **CREATED BY**, **DATE** | 4s | Callout ⑩ along the header row; slow left-to-right sweep (about 2.5s); do not click a header |
| 11 | Sweep down the five example rows (do not click a row) | Rows include **Air dryer not reaching temp** / **SSNB** / **Open** / high; **Tunnel conveyor belt squeaking** / **MLAS** / **In Progress** / high; **Chemical pump #3 leak** / **MLAS** / **Resolved** / critical | 4s | Callout ⑪ on the **STATUS** chips (**Open** / **In Progress** / **Resolved**); slow vertical sweep (about 3s); do not open a row |
| 12 | Point to the **ASSIGNED TO** and **CREATED BY** columns | Both columns show a dash placeholder on every row (no owner or reporter set in the demo) | 3s | Callout ⑫ "empty in demo; carry names in live tenants"; brief zoom on the two dash columns (1.5s) |
| 13 | Point to the list footer | Footer reads **Showing 1–5 of 5 records** with a **‹ 1 ›** page control | 2s | Callout ⑬ on the counter + page arrows; note all five fit on one page |
| 14 | Slowly sweep the cursor from the KPI strip down to the list | Recap state: four KPI tiles (load), three panels (trend, priority, pipeline), and the **Issue List** (each fix tracked from **Open** to **Resolved**); **+ New Issue** starts one | 3s | Callout ⑭ tying the tiles, panels, and list together; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 4:12 (estimated narration total 252s, pending render). If any unexpected dialog, error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment — do not improvise. Session-timeout behavior is out of scope here (see WC-01-03).

## If Claude drives while you record

Once a live-browser session is available, I can execute steps 1–14 in the browser with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. **Export** is never clicked (step 7 stops at the button), and the **+ New Issue** form is opened only to show layout and dismissed with **Cancel** (step 8) — **Save** is never triggered. Say "drive lesson 08-01" when you're rolling.

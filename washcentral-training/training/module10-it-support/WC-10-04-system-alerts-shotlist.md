# WC-10-04 — System Alerts · Snagit Shot List (operator-ready)

v2.0 · July 11, 2026 · Target output: **WC-10-04-system-alerts-v2.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the v2.0 guide one-to-one (9 steps).
**Verified against demo.washcentral.com on July 11, 2026.**

> **Do not record against the v1.0 narration.** The v1.0 script narrates a 404 that no longer reflects the page (real and rendering as of the July 11 in-app capture). The narration must be re-scripted to these 9 steps and re-rendered first; see the narration file's status note.

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/support-tickets.html` (any IT & Support page with the full sidebar works).
- [ ] Left sidebar shows the **SUPPORT** group and the **AUDIT** group; **System Alerts** is visible between **Knowledge Base** and **Training Requests**.
- [ ] **Navigation rule:** reach System Alerts ONLY by the sidebar link. Never type `support-alerts.html` — the direct URL 404'd on July 9 while the sidebar route renders the full page. If the sidebar route ALSO 404s at record time, stop and re-verify (WC-PB-14 case); do not record a 404 for this lesson.
- [ ] This lesson is read-only. The only click is the **System Alerts** sidebar link (step 2). Do not click **+ New Record**, **Export**, **Filters ▾**, the rows-per-page control, or any row.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | None — open on **Support Tickets**; slowly move the cursor down the left sidebar across the **SUPPORT** group | Sidebar shows the **SUPPORT** group: **ML Command Center**, **Site Detail (Demo)**, **Support Tickets**, **Help Desk (Zoho)**, **Knowledge Base**, **System Alerts**, **Training Requests**; below it the **AUDIT** group | 3s | Callout ① bracketing the **SUPPORT** group; slow top-to-bottom cursor sweep (about 2s), no click |
| 2 | Click **System Alerts** in the sidebar | Page loads inside the WashCentral shell; breadcrumb **Support › System Alerts**; four-tile KPI band across the top | 3s | Callout ② on the breadcrumb; on-screen note "sidebar link only — direct URL 404'd July 9"; let the page settle |
| 3 | Sweep the four KPI tiles left to right | Tiles read **3 Active Alerts**, **14 Today**, **1 Critical**, **2 Warnings** | 3s | Callout ③ under the tile strip; zoom-in 130% on **1 Critical** (1.5s); slow sweep, no click |
| 4 | Point to the **Alert Volume** panel (upper left) | Subtitle **Last 12 months**, total **148**, trend **↓ -8%**, axis **Jan** to **Dec** | 3s | Callout ④ on the **148 / ↓ -8%** figure; brief hover on the trend line |
| 5 | Point to the **By Severity** panel (subtitle **Alert breakdown**) | Reads **Info 58%**, **Warning 28%**, **Error 10%**, **Critical 4%** | 4s | Callout ⑤ on the four levels; slow cursor sweep down the breakdown (about 2.5s) |
| 6 | Point to the **System Health** panel (subtitle **Alert overview**) | Reads **86% HEALTHY**, **10% WARNING**, **4% CRITICAL** | 3s | Callout ⑥ tying **4% CRITICAL** back to the **By Severity** panel's **Critical 4%** |
| 7 | Scroll to the **Alert List**; sweep the column headers | Columns **DATE/TIME · TYPE · SEVERITY · LOCATION · MESSAGE · STATUS**; **Search system alerts…** box, **Filters ▾**, **Search**, **+ New Record**, **Export** visible; pager reads **ROWS PER PAGE: 25 50 100** and **1–4 of 4** | 4s | Callout ⑦ on **TYPE** and **SEVERITY**; **STOP callout** with a red "do not click" ring over **+ New Record** and **Export**; slow header sweep (about 3s), no click |
| 8 | Sweep the four rows top to bottom (do not click a row) | Rows: **2025-06-01 10:22 · Tunnel · Critical · MLAS · Conveyor belt tension exceeds threshold · Active** / **2025-06-01 09:48 · POS · Warning · SSNB · Low receipt paper on POS-2 · Active** / **2025-06-01 09:12 · Chemical · Warning · Piscataway · Chemical tank #2 below 20% · Active** / **2025-05-31 15:30 · Network · Info · MLAS · Backup connection activated · Resolved** | 5s | Callout ⑧ tracing the Critical row left to right; zoom-in 130% on **Tunnel · Critical · MLAS** (2s); second small callout on the **Resolved** row's **STATUS** |
| 9 | Slow sweep back up: list → panels → KPI band | Recap state: band = instant answer, panels = trend and mix, list = **TYPE / LOCATION / MESSAGE / STATUS** specifics | 3s | Callout ⑨ tying the three layers together; end card / verification stamp "Verified against demo.washcentral.com on July 11, 2026."; fade out |

Estimated runtime: about 3:10 (narration re-script pending; estimate at ~145 wpm for 9 blocks). If any unexpected dialog, error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera with **Stay Logged In**, resolve or park, then re-record the segment — do not improvise. Known on-page oddity, not a re-roll trigger: the list header reads **14 records** while the pager reads **1–4 of 4** (logged as a new discrepancy July 11); do not zoom the "14 records" label as if it counted the rows.

## If Claude drives while you record

I can execute steps 1–9 live in the browser with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. Nothing destructive is triggered: **+ New Record** and **Export** are never clicked, no row is opened, and System Alerts is reached only through the sidebar link. Say "drive lesson 10-04" when you're rolling — after the narration re-render.

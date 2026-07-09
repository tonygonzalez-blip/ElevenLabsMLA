# WC-12-07 — Operations reason codes & Automation · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-12-07-operations-automation-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (14 steps).
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start with **Settings** open and the left sidebar visible.
- [ ] Snagit: cursor highlight ON, click animation ON.
- [ ] Read-only walk: **+ New Record** is visible on every page but is never clicked. On **Task Scheduler**, never edit a schedule and never run a task (steps 9–11).
- [ ] Several lists load their rows from the agent service and on July 9 showed "Couldn't load … (Failed to fetch)." Record that state as-is; do not retry or reconfigure. Row values are parked.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. Each page opens in the content area with the Settings sidebar fixed at left.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | In the Settings left sidebar, click the **Operations** group to expand it | Group opens listing **Cancellation Reasons**, **Refund Reasons**, **Rewash Reasons**, **Event Types**, **Transaction Types**, **Issue Status Types**, **Prepaid Book Types**, **Prepaid Book Type Types** | 3s | Callout ① bracketing the six in-scope pages; slow cursor sweep down the group (about 2s); no page opened yet |
| 2 | Click **Cancellation Reasons** | Page **Cancellation Reasons List** opens; columns **DESCRIPTION** and **SHOW ON POS**; KPI band **Total Reasons / Shown on POS / Hidden**; search "Search cancellation reasons…"; **+ New Record** top-right | 3s | Callout ② on the **SHOW ON POS** column header; zoom-in 150% on that column (1.5s); STOP callout with a red "do not click" ring on **+ New Record** |
| 3 | Point to the list body (do not retry) | Body reads "Couldn't load cancellation reasons (Failed to fetch). Check your connection to the AI agent service."; the three KPI tiles read "—" | 3s | Callout ③ "row data parked — agent-service load error"; hold on the message; do not reload the page |
| 4 | Click **Refund Reasons** | Page **Refund Reasons List** opens; single column **DESCRIPTION**; KPI **Total Reasons**; search "Search refund reasons…"; same load error in the body | 3s | Callout ④ on the single **DESCRIPTION** column; note "feeds the refund-screen reason picker"; STOP ring on **+ New Record** |
| 5 | Click **Rewash Reasons** | Page **Rewash Reasons List** opens; single column **DESCRIPTION**; KPI **Total Reasons**; search "Search rewash reasons…"; same load error in the body | 2s | Callout ⑤ "same shape as Refund Reasons"; brief hold; do not retry |
| 6 | Click **Event Types**, hold, then click **Transaction Types** | Both open with one **DESCRIPTION** column, a single **Total Types** tile, **+ New Record**, and search boxes "Search event types…" then "Search transaction types…"; same load error in each body | 3s each | Callout ⑥ tying the two identical layouts together; short pause on each page; STOP ring on **+ New Record**; do not select a row |
| 7 | Click **Issue Status Types** | Page **Issue Status Types List** opens with **5 records** in one **DESCRIPTION** column: **Open**, **In Progress**, **Pending Parts**, **Resolved**, **Closed**; KPI **Total Types 5 / Active 5**; **Status Breakdown** panel; a **Filters** control and a **Search** button are present | 4s | Callout ⑦ on the five status rows (this list loaded); slow cursor sweep down the five rows (about 2.5s); zoom-in on the **Status Breakdown** panel (1.5s); do not open a row |
| 8 | In the sidebar, click the **Automation** group to expand it | Group opens listing **Task Scheduler**, **Task Parameters**, **Mass SMS Log**, **User Levels** | 3s | Callout ⑧ bracketing the three automation pages; note "**User Levels** lives here too — see WC-12-06"; no page opened yet |
| 9 | Click **Task Scheduler** | Page opens; KPI band **Total Tasks 18 / Active 16 / Running Now 2 / Failed 0**; **Task Distribution** panel (Daily 44%, Hourly 28%, Weekly 17%, Other 11%) | 3s | Callout ⑨ on the **Failed 0** tile ("first read for a stuck job"); zoom-in 150% on the KPI band (1.5s) |
| 10 | Point across the **Task Scheduler List** columns and the three job rows (do not click a row) | Columns **TASK NAME / SCHEDULE / LAST RUN / NEXT RUN / STATUS**; rows: **Daily Report Email** (Daily 6:00 AM · Today 6:00 AM · Tomorrow 6:00 AM · Active), **SMS Campaigns** (Hourly · 1 hour ago · In 52 min · Active), **Database Backup** (Daily 2:00 AM · Today 2:00 AM · Tomorrow 2:00 AM · Active) | 4s | Callout ⑩ on the **Daily Report Email** row's **LAST RUN** + **STATUS** ("scheduled-report triage"); slow cursor sweep across the three rows (about 3s); do not open a row |
| 11 | Point to **+ New Record**, **Filters**, and **Search**; then the footer count | Controls present; footer reads "Showing 1–3 of 3 records" while the card and KPI say **18** | 3s | Callout ⑪ "read-only: never edit a schedule, never run a task"; STOP ring on **+ New Record**; second callout noting the 18-vs-3 count (other 15 rows parked) |
| 12 | Click **Task Parameters** | Page **Task Parameters List** opens; columns **NAME**, **TABLE**, **UPDATED BY**, **UPDATED**; KPI **Total Parameters**; search "Search task parameters…"; same load error in the body | 3s | Callout ⑫ on **UPDATED BY** + **UPDATED** ("who changed a job's inputs, and when"); STOP ring on **+ New Record**; do not retry |
| 13 | Click **Mass SMS Log** | Page **Mass SMS Log List** opens; columns **DATE**, **PHONE**, **EMAIL**, **BARCODE**, **STATUS**; KPI **Total Entries**; search "Search SMS log entries…"; same load error in the body | 3s | Callout ⑬ on the **STATUS** column ("did the text send"); STOP ring on **+ New Record**; do not retry |
| 14 | None — slowly sweep the cursor from the **Operations** group to the **Automation** group in the sidebar | Recap state: **Operations** = the reason and type lists behind dropdowns (missing-reason tickets, plus **SHOW ON POS** for register visibility); **Automation** = jobs and their records (**Task Scheduler → LAST RUN / STATUS / Failed**, **Task Parameters**, **Mass SMS Log → STATUS**) | 3s | Callout ⑭ tying the two groups to their tickets; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 5:05 (see the narration script for the rendered per-step total; timings are estimates pending render). If any unexpected dialog, error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment — do not improvise. Never run or edit a task on **Task Scheduler**; the whole walk is read-only.

## If Claude drives while you record

I can navigate steps 1–14 live in the browser with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. Every page is read-only: **+ New Record** is never clicked, and **Task Scheduler** is never edited or run. Row-load errors on the fetch-failing lists are recorded as-is, not retried. Say "drive lesson 12-07" when you're rolling.

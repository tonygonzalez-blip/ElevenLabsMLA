# WC-14-02 — Academy (LMS), admin side · Snagit Shot List (operator-ready)

v2.0 · July 11, 2026 · Target output: **WC-14-02-academy-admin-v2.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the v2.0 guide one-to-one (13 steps).
**Verified against demo.washcentral.com on July 11, 2026.**

> **Do not record against the v1.0 narration.** The v1.0 script narrates four HTTP 404s from step 5 onward; the July 11 in-app captures show all four admin pages render fully via the sidebar. The narration must be re-scripted to these 13 steps and re-rendered first; see the narration file's status note.

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: the Academy dashboard reached from the left rail.
- [ ] Snagit: cursor highlight ON, click animation ON.
- [ ] **Navigation rule:** reach every ADMIN page ONLY by its sidebar link. Never type `lms-admin*.html` — the direct URLs 404'd on July 9 while the sidebar routes render (July 11 captures).
- [ ] This lesson is read-only on admin surfaces. Do NOT click (or open for use): **Enroll Users**, **Bulk Enroll**, **Auto-Enroll Rules**, **Assign Course**, **View Profile**, **Export CSV**, **New Course**, **Import**, **Settings/Edit/Preview/Learners** on a course card, any **On** toggle, **New Announcement**, **Send Announcement**, **Schedule Report**, **Apply Filters**. The four sidebar links are the only clicks.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open the Academy from the rail; drift the cursor to the breadcrumb | Academy loads on **My Dashboard**; breadcrumb **Academy › My Dashboard**; brand **WASHCENTRAL Academy**; the Academy's own sidebar is visible | 3s | Callout ① on the breadcrumb; no further click |
| 2 | Sweep the **ACADEMY** group, then the **ADMIN** group | **ACADEMY**: My Dashboard, Course Catalog, Learning Paths, My Learning. **ADMIN**: **Admin Dashboard**, **Users & Enrollment**, **Course Management**, **Reports & Compliance** | 4s | Callout ② bracketing the four admin items; small note "plan says 'LMS Administration'; sidebar says ADMIN"; zoom-in 150% on the ADMIN header + four rows (2s) |
| 3 | Click **Admin Dashboard** in the sidebar | Page loads: breadcrumb **Academy › Admin Dashboard**, subtitle "Manage training across your organization."; **Enroll Users** button in the header | 3s | Callout ③ on the breadcrumb; STOP ring on **Enroll Users** ("locate, never click") |
| 4 | Sweep the five KPI tiles | **19 Active Learners · 26% Completion Rate · 49 Overdue (Action needed) · 186 Total Enrollments · 9h 46m Avg Time Spent** | 3s | Callout ④ under the tiles; zoom-in 130% on **49 Overdue** (1.5s) |
| 5 | Scroll to the **Course Completion Heatmap** ("All 19 courses across 25 users") | Columns **COURSE · COMPLETION BREAKDOWN · ENROLLED · COMPLETE %**; top row **Getting Started with WashCentral — 6 completed · 7 in progress · 6 overdue · 6 not started — 25 — 24%** | 4s | Callout ⑤ tracing the top row left to right; do not click a row |
| 6 | Hover (do not click) **Enroll Users**, **Manage**, **New Announcement** | The three admin actions are visible; nothing opens for use | 3s | Callout ⑥ "real records / real sends — located, not used"; STOP rings on all three |
| 7 | Click **Users & Enrollment** in the sidebar | Breadcrumb **Academy › Users & Enrollment**; tiles **TOTAL USERS 25 · AVG COMPLETION RATE 27% · USERS WITH OVERDUE 17 · FULLY COMPLIANT 0**; toolbar **Filters · Auto-Enroll Rules · Export CSV · Bulk Enroll**; search "Search users by name, email, location..." | 3s | Callout ⑦ on **FULLY COMPLIANT 0**; STOP rings on **Bulk Enroll** and **Export CSV** |
| 8 | Sweep the table headers, then the first row | Columns **USER · LOCATION · REQUIRED PROGRESS · STATUS · LAST ACTIVITY · AVG SCORE · ACTIONS**; first row **Marcus Johnson · m.johnson@demo.wc · General Manager · Fort Lauderdale · 3/7 · Overdue · 1 month ago · 78%** with **View Profile / Assign Course** | 4s | Callout ⑧ pairing **REQUIRED PROGRESS 3/7** with **STATUS Overdue**; do not click the row actions |
| 9 | Click **Course Management** in the sidebar | Breadcrumb **Academy › Course Management**; sections **Courses · Learning Paths · Certifications**; toolbar **Filters · New Course · Import** | 3s | Callout ⑨ on the three sections; STOP rings on **New Course** and **Import** |
| 10 | Point to the first course card's stats and controls | **Getting Started with WashCentral**: **25 ENROLLED · 24% COMPLETE · 78 AVG SCORE**, publish toggle **On**, controls **Settings · Edit · Preview · Learners** | 4s | Callout ⑩ on the stat trio; STOP ring over the **On** toggle ("never flip"); zoom-in 130% on the controls row (1.5s) |
| 11 | Click **Reports & Compliance** in the sidebar | Breadcrumb **Academy › Reports & Compliance**; tabs **Completion Overview · Learner Progress · Course Analytics · Compliance Status · Leaderboard · Time & Engagement · Scheduled Reports**; buttons **Schedule Report · Export CSV**; tiles **186 · 26% (49 of 186) · 49 · 81%** | 4s | Callout ⑪ sweeping the seven tabs; STOP rings on **Schedule Report** and **Export CSV** |
| 12 | Scroll the **Completion Overview** tab: chart, then the two tables | **Completions Over Time** (Jun 2025 – May 2026); **Completion by Location** top row **Fort Lauderdale · 5 · 44 · 12 · 27% · 13 · 81%**; **Completion by Course** top row **Getting Started with WashCentral · 25 · 6 · 24% · 78% · 1h 59m** | 5s | Callout ⑫ on the two table title rows; slow scroll (about 3s); no tab changes, no sorting clicks |
| 13 | Return the cursor to the **ADMIN** sidebar group; slow sweep across the four links | Recap: dashboard = KPIs + heatmap, Users & Enrollment = per-person compliance, Course Management = per-course levers, Reports & Compliance = the client rollups | 3s | Callout ⑬ tying the four pages to their jobs; end card / verification stamp "Verified against demo.washcentral.com on July 11, 2026."; fade out |

Estimated runtime: about 4:30 (narration re-script pending; estimate at ~145 wpm for 13 blocks plus scroll travel). If any unexpected dialog, error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera with **Stay Logged In**, resolve or park, then re-record the segment — do not improvise.

## If Claude drives while you record

I can execute steps 1–13 live in the browser with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. The only clicks are the Academy rail icon and the four ADMIN sidebar links; every enroll, edit, toggle, announcement, export, and scheduling control gets a STOP ring and stays untouched. Say "drive lesson 14-02" when you're rolling — after the narration re-render.

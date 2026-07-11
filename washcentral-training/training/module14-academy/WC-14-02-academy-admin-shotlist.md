# WC-14-02 — Academy (LMS), admin side · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-14-02-academy-admin-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one.
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/lms-home.html` (the Academy dashboard).
- [ ] Snagit: cursor highlight ON, click animation ON.
- [ ] Confirm the Academy sidebar is fully visible with both groups showing: the **ACADEMY** group and, below it, the **ADMIN** group with its four items.
- [ ] This lesson records four HTTP 404 pages on purpose (steps 5–8). Do not treat them as recording faults; do not reload past them or route around them. If a page unexpectedly LOADS real content instead of a 404, stop and re-verify: the platform has changed since July 9 and the guide/narration must be re-authored before recording.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. The admin destinations do not resolve; each lands on a browser error page, and that is the intended footage.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open on the Academy dashboard (`lms-home.html`); slowly move the cursor to the breadcrumb, then down the left sidebar | Academy loads on **My Dashboard**; breadcrumb reads **Academy › My Dashboard**; brand shows **WASHCENTRAL Academy**; the Academy sidebar (not the main rail) is visible | 3s | Callout ① on the breadcrumb; note "the Academy's own sidebar"; slow top-to-bottom cursor drift down the sidebar (about 2s), no click |
| 2 | Point to the **ACADEMY** group header, then sweep the four learner items | Top group headed **ACADEMY**: **My Dashboard**, **Course Catalog**, **Learning Paths**, **My Learning** (WC-14-01's subject) | 3s | Callout ② bracketing the four learner items; label "learner side — WC-14-01"; slow vertical sweep, no click |
| 3 | Point to the **ADMIN** group header, then sweep its four items | Second group headed **ADMIN**: **Admin Dashboard**, **Users & Enrollment**, **Course Management**, **Reports & Compliance** | 4s | Callout ③ bracketing the four admin items; small note "plan calls this 'LMS Administration'; sidebar says ADMIN"; zoom-in 150% on the **ADMIN** header + four rows (2s) |
| 4 | Hold on the two-group sidebar; no click | Recap state: **ACADEMY** = learner, **ADMIN** = the tech who enrolls and reports on others; read-only rule stands for when the pages ship | 3s | Callout ④ "read-only when live: never enroll real staff, never edit courses"; steady hold on the full sidebar |
| 5 | Navigate to **Admin Dashboard** (`lms-admin.html`) | Page does not load; browser shows **Not Found** with body "HTTP Error 404. The requested resource is not found." Admin dashboard tiles: TBD — parked | 3s | Callout ⑤ on the 404 heading; caption "Admin Dashboard — 404 as of July 9, 2026; interior parked"; zoom-in 150% on the error text (1.5s) |
| 6 | Navigate to **Users & Enrollment** (`lms-admin-users.html`) | Same **Not Found** / HTTP 404 page | 3s | Callout ⑥ "where client-staff enrollment will live — not yet deployed"; hold on the identical error |
| 7 | Navigate to **Course Management** (`lms-admin-courses.html`) | Same **Not Found** / HTTP 404 page | 3s | Callout ⑦ "course management surface — 404; layout parked" |
| 8 | Navigate to **Reports & Compliance** (`lms-admin-reports.html`) | Same 404. Additionally, the July 9 capture hit a malformed host (`demo.washcentral.comml`) and could not reach the server at all | 4s | Callout ⑧ "the completion + compliance page per the plan — 404; capture also mistyped the host"; hold on the error; do NOT retype or 'fix' the URL on camera |
| 9 | Cut to a title card summarizing the four errors | Card text: "Admin nav defined; four pages return HTTP 404 — not yet deployed in demo (cf. LogicPOS, PARKED-ITEMS.md #2)" | 4s | Callout ⑨ ties the four 404s together; keep it factual, no speculation about ship dates |
| 10 | Cut to a title card on completion tracking | Card text: "Learning plan tracks completion under Academy → ADMIN → Reports & Compliance — unavailable until the page ships" | 3s | Callout ⑩ "record the gap, don't route around it; re-record when live" |
| 11 | Return to the Academy dashboard (`lms-home.html`); slow cursor sweep across the **ADMIN** group | Recap state: find the admin side in the **ADMIN** group, name its four destinations, know all four return HTTP 404 today | 3s | Callout ⑪ recap; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 3:55 (rendered narration total pending generation; see the narration script's per-step estimates). If any admin page unexpectedly loads real content, or any unexpected dialog, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment — do not improvise. When the four admin pages deploy, this lesson is re-verified and re-recorded from scratch.

## If Claude drives while you record

Once the live demo is reachable again with a valid staff token, I can execute steps 1–11 with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. Nothing is clicked inside the admin pages because nothing loads — steps 5–8 capture the 404s and stop. Say "drive lesson 14-02" when you're rolling. Until then this is a corpus-grounded package: the admin interiors are parked and the recording is deferred.

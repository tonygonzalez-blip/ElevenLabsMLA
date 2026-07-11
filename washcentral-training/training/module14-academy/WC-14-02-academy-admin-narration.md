# WC-14-02 — Academy (LMS), admin side · Narration Script

**Verified against demo.washcentral.com on July 11, 2026.** v2.0 · July 11, 2026 · Author: Claude — Micrologic training project. Steps match the v2.0 guide and shot list one-to-one (13 steps). Full re-script: the v1.0 script narrated the four ADMIN pages as HTTP 404s from step 5 onward; the July 11 credentialed pass reached all four through the Academy sidebar and captured them in full (`lms-admin-inapp.json`, `lms-admin-users-inapp.json`, `lms-admin-courses-inapp.json`, `lms-admin-reports-inapp.json`). No v1.0 audio was ever rendered, so nothing is superseded on disk.

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 13 blocks `WC-14-02-s01.mp3`…`WC-14-02-s13.mp3` + joined `WC-14-02-full-narration-v1.0.mp3` (262.43s ≈ 4:22). Step duration = audio + 0.4 s. Per-step render seconds: s01 14.68 · s02 23.8 · s03 18.83 · s04 19.72 · s05 20.61 · s06 16.93 · s07 19.33 · s08 20.51 · s09 17.79 · s10 21.24 · s11 21.63 · s12 25.31 · s13 16.85.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, locked. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-14-02-s01.mp3` … `WC-14-02-s13.mp3`, assembled at each step's marker. Step duration = audio + 0.4s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a screen means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- LMS → "L-M-S"
- Pre-Configuration / Pre-Config → spoken as written ("pre config")
- Lauderdale → "LAW-der-dale"
- Shyne → "Shine"
- Course durations and scores are spoken in plain words ("nine hours forty six minutes", "seventy eight"), never as the on-screen shorthand ("9h 46m").

### Scope notes (non-spoken)

- Read-only lesson on the four live **ADMIN** pages. **Enroll Users**, **Manage**, **New Announcement**, **Bulk Enroll**, **Auto-Enroll Rules**, **Assign Course**, **New Course**, **Import**, **Edit**, the **On** publish toggles, **Schedule Report**, and **Export CSV** are located and named, never used. Every one of them acts on real training records or sends messages on the shared tenant.
- Navigation caution carried from the guide: reach all four admin pages by the Academy sidebar. Their direct URLs (`lms-admin.html`, `lms-admin-users.html`, `lms-admin-courses.html`, `lms-admin-reports.html`) 404'd on the July 9 sweep; the sidebar links render every page (July 11 captures). The spoken script does not narrate the 404s; they are history, not the lesson.
- Naming discrepancy carried from the guide: the learning plan calls the group "LMS Administration"; the sidebar renders **ADMIN**. Block s02 speaks the sidebar's label as the truth.
- Cross-checks the script leans on (all observed July 11): **186 / 26% / 49** identical on the Admin Dashboard and Reports & Compliance; **25** users matching **TOTAL USERS** and the heatmap's "across 25 users."
- The session-timeout "Still there?" dialog is out of scope (lesson 1.3).

## Timed script

[00:00 | Step 1 — Open the Academy]
The Academy has a second half. <break time="1.4s" /> Click in from the rail and you land on the same learner dashboard as last lesson, with the Academy running its own sidebar instead of the platform rail. Today we go past the learner pages, into the group underneath.

[00:20 | Step 2 — Two sidebar groups]
Read both sidebar groups first. <break time="1.2s" /> The top one holds the learner pages you already know. Below it sits Admin, four doors: the dashboard, users and enrollment, course management, and reports. One naming note. The learning plan says L-M-S Administration, the sidebar says Admin, and the screen always wins.

[00:41 | Step 3 — Open Admin Dashboard]
Open Admin Dashboard. <break time="1.4s" /> The subtitle states the job plainly: manage training across your organization. Up in the header sits an Enroll Users button. Find it, remember where it lives, and leave it alone. On this shared tenant, enrolling someone creates a real training record.

[01:01 | Step 4 — Five KPI tiles]
Five tiles across the top. <break time="1.2s" /> Nineteen learners active this month. A twenty six percent completion rate across one hundred eighty six enrollments, with nine hours forty six minutes of average time spent. And forty nine items overdue, flagged action needed. That last tile is where every rollout conversation starts.

[01:23 | Step 5 — Course Completion Heatmap]
Scroll to the completion heatmap. <break time="1.4s" /> All nineteen courses against all twenty five users. Take the top row. Getting Started with Wash Central: six finished, seven in progress, six overdue, six never began, twenty four percent complete. One glance per course tells you where a crew's training actually stands.

[01:45 | Step 6 — Locate the admin actions]
Three admin actions live on this page. <break time="1.2s" /> Enroll Users in the header, then Manage, then New Announcement. Each one either creates training records or sends a message to real people. So today they get located and named, never opened for use. That restraint is half the lesson.

_[Director: hover only — none of the three opens for use. The enrollment and announcement form fields are documented in the guide from the July 11 capture; do not fill or submit anything.]_

[02:06 | Step 7 — Users & Enrollment]
Second door, Users and Enrollment. <break time="1.4s" /> Twenty five learners. Twenty seven percent average completion on required courses, and seventeen people carrying something overdue. Fully compliant reads zero. Nobody on this tenant has finished everything required of them yet, and that is this page's headline.

[02:26 | Step 8 — The user table]
Read one row of the table. <break time="1.2s" /> Marcus Johnson, a general manager in Fort Lauderdale, three of seven required courses done, overdue, last active a month ago. Required progress against status is your per person compliance read. His row also offers Assign Course. Not on the demo.

_[Director: STOP ring on **Assign Course**; **Bulk Enroll**, **Auto-Enroll Rules**, and **Export CSV** in the toolbar stay untouched.]_

[02:46 | Step 9 — Course Management]
Third door, Course Management. <break time="1.4s" /> Three sections stack down the page: the courses themselves, the learning paths that chain them, and the certifications. A New Course button and an Import control sit in the toolbar, and both stay untouched. This is the page where the library gets shaped.

[03:07 | Step 10 — One course card]
Look at the first course card. <break time="1.2s" /> Twenty five enrolled, twenty four percent complete, an average score of seventy eight. A publish toggle reads On, with four controls beside it: settings, edit, preview, learners. Flip that toggle and a course disappears for real staff. So it stays exactly where it is.

_[Director: STOP ring on the **On** toggle; **Settings / Edit / Preview / Learners** are pointed at, never clicked.]_

[03:30 | Step 11 — Reports & Compliance]
Last door, Reports and Compliance. <break time="1.4s" /> Seven report tabs run across the top, completion overview through scheduled reports. The tiles repeat the dashboard's story, one eighty six enrollments, twenty six percent complete, forty nine overdue, plus an eighty one percent average quiz score. When two pages agree on the numbers, you can quote them.

[03:53 | Step 12 — The two completion tables]
Stay on the overview and scroll. <break time="1.2s" /> A year of completions charted, then the two tables a client review runs on. By location: Fort Lauderdale, five users, forty four enrollments, twelve complete, thirteen overdue. By course: Getting Started, twenty five enrolled, six complete, about two hours of time spent apiece. The learning plan promised this page, and it is live.

_[Director: **Schedule Report** and **Export CSV** stay untouched; scrolling only.]_

[04:19 | Step 13 — Recap]
Four pages, four jobs. <break time="1.0s" /> The dashboard for the org wide read. Users and Enrollment for the per person truth. Course Management for the levers. Reports and Compliance for the numbers a client review needs. You reached all four from the sidebar, and you changed nothing along the way.

_(Estimated narration total: ~281 s ≈ 04:41. Timestamps are estimates at ~145 wpm; re-measure with ffprobe after render and align each block to its step marker.)_

## Generation log

- Script v2.0 (July 11, 2026): full re-script against the v2.0 guide and shot list (13 steps). The v1.0 script (11 steps) narrated the four ADMIN pages as 404s; the July 11 in-app captures proved all four real, so the lesson was rebuilt around the live pages. v1.0 was never rendered — no audio is superseded.
- Written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and director notes.
- Nothing state-changing is depicted: no enrollment, no course edit, no toggle flip, no announcement, no export, no scheduled report. The ADMIN vs "LMS Administration" naming discrepancy is spoken as observed and logged in the guide.
- Corpus-grounded on the July 11 in-app captures: Admin Dashboard tiles **19 / 26% / 49 / 186 / 9h 46m** and the heatmap top row (`lms-admin-inapp.json`); Users & Enrollment tiles **25 / 27% / 17 / 0** and the Marcus Johnson row (`lms-admin-users-inapp.json`); Course Management sections, toolbar, and the Getting Started card **25 / 24% / 78** with its **On** toggle (`lms-admin-courses-inapp.json`); Reports & Compliance seven tabs, tiles **186 / 26% / 49 / 81%**, and the two completion tables (`lms-admin-reports-inapp.json`).
- Verification stamp current: **Verified against demo.washcentral.com on July 11, 2026.**

# WC-14-02 — Academy (LMS), admin side · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (11 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 11 blocks `WC-14-02-s01.mp3`…`WC-14-02-s11.mp3`, one TTS call per step, then joined to `WC-14-02-full-narration-v1.0.mp3`. Audio is rendered later once the ElevenLabs key is available (not set in this session). Estimated total ~3:22 (the shot list's ~3:55 runtime adds title-card holds and cursor travel); per-block timestamps below are estimates at ~145 wpm plus break time plus a 0.4s tail, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, locked. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-14-02-s01.mp3` … `WC-14-02-s11.mp3`, assembled at each step's marker. Step duration = audio + 0.4s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a screen means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- LMS → "L-M-S"
- HTTP → "H-T-T-P" · 404 → "four oh four"
- LogicPOS → "Logic P-O-S"
- Pre-Configuration / Pre-Config → spoken as written ("pre config")

### Scope notes (non-spoken)

- Read-only lesson about pages that do not load. Enrolling users and editing or publishing courses are never depicted, and there is nothing clickable inside the admin pages because all four return HTTP 404 in the July 9 corpus.
- The four admin page interiors are TBD — parked (new parked item, analogous to PARKED-ITEMS.md #2 for LogicPOS). Do not describe any tile, column, or control behind the 404s.
- Naming discrepancy carried from the guide: the learning plan says "LMS Administration"; the sidebar renders **ADMIN**. The narration follows the sidebar.
- Steps 9 and 10 narrate over title cards, not live pages. The session-timeout "Still there?" dialog is out of scope (lesson 1.3).

## Timed script

[00:00 | Step 1 — Open the Academy]
The Academy has a second half. <break time="1.4s" /> Click in from the rail and you land on the same dashboard as last lesson, with the Academy running its own sidebar instead of the main platform rail. That sidebar is where today's story lives.

[00:19 | Step 2 — ACADEMY group]
Top group first. <break time="1.2s" /> Academy holds the four learner pages from lesson fourteen one: your dashboard, the catalog, paths, and your course list. Familiar ground. It is the group underneath we came for.

[00:34 | Step 3 — ADMIN group]
There it is. Admin. <break time="1.2s" /> Four destinations: Admin Dashboard, Users and Enrollment, Course Management, and Reports and Compliance. One naming note: the learning plan calls this group LMS Administration, but the sidebar itself says Admin, and the screen always wins.

[00:53 | Step 4 — Who works here]
So who works here? <break time="1.0s" /> Not learners. This group belongs to the tech who enrolls other people and reports on their training, usually pre config staff setting up a client's crew. And the standing rule: when these pages are live, you read them. You never enroll real staff, and you never edit a course during a training pass.

[01:16 | Step 5 — Admin Dashboard, 404]
Open the Admin Dashboard. <break time="1.4s" /> And here is the finding. The page does not load. H-T-T-P error four oh four, the resource is not found. This is not a recording mistake, and it is not your session. As of July ninth, the page simply is not deployed in the demo tenant.

[01:36 | Step 6 — Users & Enrollment, 404]
Next, Users and Enrollment. <break time="1.4s" /> Same error. This is where enrolling client staff is meant to happen, which makes it the page a pre config tech will care about most. Today it returns nothing but the four oh four.

[01:53 | Step 7 — Course Management, 404]
Course Management. <break time="1.4s" /> Four oh four again. The pattern should be settling in by now. The navigation names a page. The server has nothing behind the name.

[02:06 | Step 8 — Reports & Compliance, 404]
Last one, Reports and Compliance. <break time="1.4s" /> Another failure, and this one is worse off than the rest. The July ninth capture never even reached the server; it went out to a mistyped address. So for this page, even the four oh four is unconfirmed.

_[Director: hold on the error as captured; do not retype or correct the URL on camera.]_

[02:25 | Step 9 — Reading the four errors together]
Put the four errors together. <break time="1.2s" /> The admin side exists in the navigation and nowhere else. Every page behind it is undeployed in this tenant, the same condition the Logic P-O-S screens are in. Nothing is broken on your end. The pages have not shipped.

[02:44 | Step 10 — Where completion tracking lives]
One practical consequence. <break time="1.2s" /> The learning plan sends you to Reports and Compliance for a client crew's completion and compliance numbers. Until that page deploys, those reports do not exist here. Record the gap in your notes; do not invent a workaround.

[03:01 | Step 11 — Recap]
So here is the state of the admin side. <break time="1.0s" /> You can find it, in the Admin group of the Academy sidebar. You can name its four destinations. And you know that today, every one of them returns a four oh four. When they ship, this lesson gets re-verified and re-recorded against the real pages.

_(Estimated narration total: ~202s ≈ 03:22. Timestamps are estimates at ~145 wpm; re-measure with ffprobe after render and align each block to its step marker. The shot list's ~3:55 runtime includes the step 9–10 title-card holds and page-to-page travel.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format).
- Nothing state-changing is depicted: no enrollment, no course editing, no clicking inside the admin pages (all four 404 in the July 9 corpus; interiors parked, cf. PARKED-ITEMS.md #2 for LogicPOS). The ADMIN vs "LMS Administration" naming discrepancy is spoken as observed and logged in the guide.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

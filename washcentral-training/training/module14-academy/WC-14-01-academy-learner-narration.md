# WC-14-01 — Academy (LMS), learner side · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (13 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 13 blocks `WC-14-01-s01.mp3`…`WC-14-01-s13.mp3`, one TTS call per step, then joined to `WC-14-01-full-narration-v1.0.mp3`. Audio is rendered later once the ElevenLabs key is available (not set in this session). Estimated total ~4:14; per-block timestamps below are estimates at ~145 wpm plus break time plus a 0.4s tail, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, locked. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-14-01-s01.mp3` … `WC-14-01-s13.mp3`, assembled at each step's marker. Step duration = audio + 0.4s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a panel means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- Shyne → "Shine"
- LMS → "L-M-S" (not spoken in this script)
- Course durations are spoken in plain words ("forty five minutes", "two hours fifteen"), never as the on-screen shorthand ("45m", "2h 15m").

### Scope notes (non-spoken)

- Browse-only lesson. Enrolling in or starting a course is never depicted: **Start Course**, **Start**, **Course Details**, **View All →**, **Browse Catalog**, **View Full Leaderboard →**, the **Quick Links** entries, and any **Enroll** / **Start Path** control are pointed at, never clicked.
- **NEEDS PARTIAL RE-RENDER (July 11, 2026): block s11 only.** The **Course Catalog**, **Learning Paths**, and **My Learning** interiors were captured live on July 11 via the Academy sidebar (`lms-catalog-inapp.json`, `lms-paths-inapp.json`, `lms-my-learning-inapp.json`; direct URLs 404'd July 9). Block s11's spoken justification "because their interiors have not been verified yet" is now false and needs a re-script/re-render; the visual step (pointing without opening) is unchanged, and all other blocks stand. Spoken lines left untouched per the audio-lock rule.
- The **ADMIN** sidebar group is out of scope; it belongs to WC-14-02 and is only pointed at in step 2.
- The session-timeout "Still there?" dialog is out of scope (lesson 1.3).

## Timed script

[00:00 | Step 1 — Open the Academy]
WashCentral ships with its own training platform, the Academy. Click the graduation cap. <break time="1.4s" /> You land on My Dashboard, your learning home base. Notice the top-right corner: search and Ask Shyne follow you in here too. Same platform, different wing.

[00:19 | Step 2 — ACADEMY sidebar group]
Read the sidebar before anything else. <break time="1.2s" /> The Academy group holds the four places a learner lives: your dashboard, the catalog, learning paths, and your own course list. Below it sits an Admin group. That is the back office, another lesson entirely, and we stay out of it today.

[00:40 | Step 3 — Progress tiles]
Four tiles across the top. <break time="1.0s" /> Enrolled, completed, hours, certificates. Every one reads zero because this account has never taken a course, and that is worth seeing once: it is exactly what a brand new client learner sees on day one. These four numbers are your status at a glance.

[01:01 | Step 4 — Continue Learning section]
Under the tiles, Continue Learning. <break time="1.2s" /> This is the resume slot. When you are partway through a course, it surfaces here so you pick up mid-lesson instead of hunting for where you left off. On a fresh account it previews the starter course instead, and View All opens the fuller list.

[01:21 | Step 5 — The resume card]
Look closer at the card, hands off the buttons. <break time="1.4s" /> Two chips set the category and the level, then the title, a progress bar at zero of six lessons, and the total runtime, forty five minutes. Start Course would enroll you, and this walk is browse only, so it stays unclicked.

_[Director: STOP ring on **Start Course**; neither button on the card is clicked.]_

[01:41 | Step 6 — All Courses anatomy]
Below that, All Courses. <break time="1.2s" /> Each card follows one anatomy: a category ribbon, the title, who teaches it and how long it runs, a progress bar, and a status line. Not started means available; a moving bar means enrolled. Browse Catalog up in the corner reaches the full library.

[02:02 | Step 7 — The six course cards]
Six courses on this dashboard. <break time="1.2s" /> They start with the platform basics at forty five minutes and climb to a two hour fifteen minute analytics course. Real instructors, real lesson counts. Every one reads Not started here, and every Start button stays untouched.

[02:21 | Step 8 — My Achievements]
Now My Achievements. <break time="1.0s" /> Three badges earned, three locked. The earned ones render in full color; the locked ones sit dimmed until you meet their condition. A small thing, but it is the Academy's gamification layer, and client crews notice it more than you would expect.

[02:40 | Step 9 — Org Leaderboard]
On the right, the Org Leaderboard. <break time="1.0s" /> Colleagues ranked by learning points, with your own row highlighted so you can find yourself in the standings. It is view only from here, and it is the panel that turns a training rollout into a bit of a competition.

[02:59 | Step 10 — Quick Links]
Under the standings, Quick Links. <break time="1.0s" /> A couple of shortcuts, your learning paths and your certificates, that jump straight to those views without a trip through the sidebar. Nothing deep here. Just the fast lane.

[03:15 | Step 11 — The other three destinations]
Back to the sidebar for the other three stops. <break time="1.2s" /> The catalog is the full library, Learning Paths chains courses into sequenced tracks, and My Learning is your personal in-progress list. We point at them today without opening them, because their interiors have not been verified yet.

_[Director: hover the three sidebar entries only; do not navigate — the walk stays pointer-only. UPDATE July 11: their contents are now verified (see v1.1 guide step 11); this block's spoken "have not been verified yet" line is stale and flagged for re-render.]_

[03:35 | Step 12 — The enrollment rule]
One rule before you explore on your own. <break time="1.0s" /> Browsing, hovering, reading: all free. Enrolling is not. Start Course, Start, and any enroll button create real training records, so in this lesson none of them get clicked. Taking a course comes later.

[03:54 | Step 13 — Recap]
That is the learner side. <break time="0.8s" /> Four tiles for your status, Continue Learning to resume, the course grid and catalog to browse, badges and the leaderboard to keep score, and three more sidebar stops when you are ready. You read all of it without enrolling in a thing.

_(Estimated narration total: ~254s ≈ 04:14. Timestamps are estimates at ~145 wpm; re-measure with ffprobe after render and align each block to its step marker.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format).
- No enrollment is depicted anywhere: **Start Course**, **Start**, and every enroll-type control are pointed at with STOP rings and never clicked; the three other learner pages are named, not opened (interiors verified July 11; s11's spoken justification is flagged for re-render — see the scope note).
- Verification stamp: **Verified against demo.washcentral.com on July 11, 2026** (non-spoken notes only; spoken script v1.0 pending s11 re-script).

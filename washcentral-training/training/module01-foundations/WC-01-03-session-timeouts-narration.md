# WC-01-03 — Session Behavior and Timeouts · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (11 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. Audio is rendered later, once the ElevenLabs key is available (it is not set in this session). 11 blocks `WC-01-03-s01.mp3` … `WC-01-03-s11.mp3` + joined `WC-01-03-full-narration-v1.0.mp3`. Timestamps below are estimates at ~145 wpm plus break time plus a 0.4 s tail, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-01-03-s01.mp3` … `WC-01-03-s11.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Estimated per-step seconds (pending render):** s01 14.2 · s02 16.7 · s03 15.9 · s04 19.4 · s05 20.6 · s06 17.3 · s07 16.3 · s08 15.9 · s09 15.9 · s10 21.9 · s11 19.4. Estimated total ≈ 193 s (~3:13).

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what the behavior means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- Auto-logout → "auto log-out"
- min (as in Session Timeout (min)) → say "minutes"
- Shyne → "Shine" · ALPR → "A-L-P-R" · POS → "P-O-S"

### Scope notes (non-spoken)

- Covers the idle-session warning (the **Still there?** dialog and the **⏱ Session expiring soon** toast) and the per-level **Session Timeout (min)** on **Settings › User Levels**.
- The exact idle time before the warning fires for the demo credentials is not measured: parked (PARKED-ITEMS.md #9). Do not state a firing threshold.
- Per-level timeout values (range 5 to 120 minutes, Cashiers 5, Anonymous 20) are from the July 8 verified pass, cross-referenced to parked #9; the July 9 corpus rows failed to load.
- Never depict clicking **Log Out Now** or **+ New Record**; never let the countdown reach 0:00 on camera.

## Timed script

[00:00 | Step 1 — Idle warning]
WashCentral watches for inactivity. <break time="1.0s" /> Leave a session untouched and it does not drop you cold. It warns you first, right over whatever page you left open. Today that's the Command Center.

[00:14 | Step 2 — Session-expiring toast]
Watch the lower corner. <break time="1.4s" /> A small toast slides in: Session expiring soon, auto log-out in two minutes, with a Stay Active button. It's the compact version of the warning, easy to miss if you're looking away.

[00:31 | Step 3 — "Still there?" dialog]
At the same moment, a dialog opens dead center. <break time="1.4s" /> Still there? it asks. Two minutes remaining, counting down. The line underneath tells you exactly how to stay: move your mouse or press any key.

[00:47 | Step 4 — Dialog buttons]
Two buttons sit on the dialog. <break time="1.2s" /> Stay Logged In keeps you signed in and returns you to your work. Log Out Now ends the session right away. That one is a real logout, so leave it alone unless you mean to sign out.

_[Director: indicate both buttons; do not click Log Out Now.]_

[01:06 | Step 5 — If you do nothing]
So what if you ignore it? <break time="1.2s" /> At zero, the session closes and returns you to the sign-in page. How long it may sit idle before the warning starts is set per user level, and the exact figure for the demo login is still being pinned down.

_[Director: let the counter run a few seconds only; do NOT let it reach 0:00. Firing threshold: TBD — parked (PARKED-ITEMS.md #9).]_

[01:27 | Step 6 — Stay signed in]
Staying in is easy. <break time="1.2s" /> Move the mouse, tap a key, or click Stay Logged In. The countdown stops, the dialog clears, and you pick up exactly where you were. Stay Active on the toast does the same job.

[01:44 | Step 7 — Settings → User Levels]
Now, where does that timer come from? <break time="1.4s" /> Open Settings from the left rail and choose User Levels. The breadcrumb reads Settings, then User Levels. This page sets the idle limit for every level of user.

[02:00 | Step 8 — KPI band]
Across the top, three summary tiles: Total Levels, Max Security Level, and Longest Timeout in minutes. <break time="1.0s" /> In today's capture they're blank, because the list underneath didn't load. When it does, they summarize the table below.

[02:16 | Step 9 — Table columns]
The table has three columns. <break time="1.0s" /> Name, Security Level, and Session Timeout in minutes. That last column is the one to know: it's how many idle minutes a level gets before the Still there? countdown begins.

[02:32 | Step 10 — Timeout values]
The numbers run from five minutes up to a hundred and twenty. <break time="1.2s" /> Cashiers and the lower levels sit at five; administrators and service roles at a hundred and twenty. So a cashier logged out after five idle minutes isn't hitting a bug. That's the setting doing its job.

_[Director: values from the July 8 verified pass, cross-referenced to PARKED-ITEMS.md #9. The July 9 corpus rows failed to load; if the live rows are empty, hold on the error line.]_

[02:54 | Step 11 — Support tie-back]
So when a manager says the system logs them out every few minutes, you know the move. <break time="1.2s" /> Open User Levels, find their level under Name, and read its Session Timeout. A small number is the whole answer, and you never touch the row.

_[Director: do not click + New Record. End on the Name and Session Timeout columns, then the verification stamp.]_

_(Estimated narration total: ~193 s ≈ 03:13, pending render. Timestamps are estimates at ~145 wpm.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels (**Still there?**, **Stay Logged In**, **Log Out Now**, **Stay Active**, **Session Timeout (min)**, the dialog body line), the navigation path, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and inside the mandated parked-item string, which is quoted verbatim.
- Firing threshold left unstated (PARKED-ITEMS.md #9); per-level values attributed to the July 8 verified pass and cross-referenced to parked #9; the July 9 corpus rows failed to load and are described as such.
- **Log Out Now** and **+ New Record** are never clicked; the countdown is never allowed to reach 0:00 on camera.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

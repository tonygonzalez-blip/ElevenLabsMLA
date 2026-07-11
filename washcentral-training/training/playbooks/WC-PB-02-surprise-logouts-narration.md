# WC-PB-02 — PB-2 Surprise logouts / frozen session · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (8 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 8 blocks `WC-PB-02-s01.mp3`…`WC-PB-02-s08.mp3`, generated block-by-block (one TTS call per step), assembled at each step's marker. Audio is rendered later once the ElevenLabs key is available (not set in this session). Timestamps below are estimates at ~145 wpm plus break time plus a 0.4 s tail, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, numbered `WC-PB-02-s01.mp3` … `WC-PB-02-s08.mp3`. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a check means for the technician on the phone, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- Sr.Manager → "Senior Manager" (if voiced)
- Level 00 / Level 01 → "Level Zero Zero" / "Level Zero One" (not voiced in this script; kept for reference)
- SSO → "S-S-O" · POS → "P-O-S" · ALPR → "A-L-P-R"

### Scope notes (non-spoken)

- Playbook shape: symptom, two page reads, then resolve or escalate. Read-only throughout.
- The idle-warning values, the two column reads (**USER LEVEL**, **SESSION TIMEOUT (MIN)**), and the "Failed to fetch" state are all grounded in the July 9 corpus. Per-level timeout figures (5-minute levels, Anonymous 20, 120 at the long end) come from the July 8 verified pass and WC-12-06, cross-referenced to PARKED-ITEMS.md #9; do not depict them as read off the July 9 screen.
- Escalation is a support ticket to IT & Support; the exact idle-firing threshold for the demo credentials is parked (#9).
- Do not depict clicking **Log Out Now** or **+ New Record** at any point.

## Timed script

[00:00 | Step 1 — Read the symptom]
Two very different tickets sound identical. It keeps logging me out. My screen froze. <break time="1.0s" /> Most of the time, the first one is the idle timeout doing exactly what it's set to do. So before you open a single setting, decide which of the two you're actually chasing.

[00:20 | Step 2 — Recognize the idle warning]
Here's the warning itself. <break time="1.4s" /> After a stretch of no activity, a dialog counts down from two minutes, and a matching toast slides into the corner. One click keeps them in. So does a nudge of the mouse. Walk away and let it reach zero, and that's not a fault. It's the platform closing an idle station on purpose.

[00:44 | Step 3 — Find the user's level]
Now the first real check. <break time="1.4s" /> Open System Users and search for the person by name or code. The column you want is their user level. It's a single word, but it decides everything on the next page. Don't scroll the list hunting for them. Search.

[01:04 | Step 4 — Load state and the frozen branch]
One caution before you trust a blank screen. <break time="1.2s" /> If the list won't load and you see a note about the connection to the agent service, the rows aren't missing. The data just didn't arrive. And if that's what your caller is staring at instead of a logout, it's a different problem: the data service, not the timeout.

[01:27 | Step 5 — Read the level's timeout]
Second check, second page. <break time="1.4s" /> User Levels lives under Automation, not with the other user pages, which trips people up. Once you're there, one column answers the whole ticket: session timeout, in minutes. That's how long a level can sit idle before the countdown starts.

[01:47 | Step 6 — Interpret the number]
Read that number against the level you found. <break time="1.4s" /> They run from five minutes up to a hundred and twenty. Cashiers and the other short-timeout roles sit at five, so a cashier who steps away for five minutes gets the warning, then the logout. Nothing is broken. Someone set it that way on purpose.

[02:10 | Step 7 — Resolve the common case]
If the timing matches that number, you're done. <break time="1.4s" /> Tell them it's a setting for their role, not a glitch, and show them the fix: move the mouse, press a key, or click Stay Logged In. If the role truly needs longer, an admin can raise it in production. One warning. Don't tap Log Out Now to clear the box. That ends the session for real.

_[Director: do not click Log Out Now or + New Record; the whole run is read-only.]_

[02:34 | Step 8 — Escalate a contradiction]
Now the cases that are real. <break time="1.4s" /> Logged out well before the level allows, or frozen with no warning at all. First, rule out the simple thing: a session is tied to one device and one browser, so switching either signs you out by design. If it still doesn't add up, capture the level, its set timeout, and the time it really took, and send that to support with the username, never a password. The trigger point for the demo login is still parked, so measure it before you promise a number.

_[Director: escalation is authored as an overlay checklist; the exact firing threshold is TBD — parked (PARKED-ITEMS.md #9). Sessions being device- and browser-bound is attributed (per Micrologic platform documentation), not shown on screen.]_

_(Estimated narration total: ~181.6 s ≈ 03:02. Final per-step seconds and the joined total are set at render, when Status moves to RENDERED.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels (**Still there?**, **Stay Logged In**, **Log Out Now**, **Stay Active**, **USER LEVEL**, **SESSION TIMEOUT (MIN)**) and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and inside the mandated parked-item string, quoted verbatim.
- Per-level timeout values are attributed to the July 8 verified pass / WC-12-06 (cross-referenced PARKED-ITEMS.md #9), not presented as read off the July 9 screen.
- Read-only throughout: no destructive control is depicted; Log Out Now and + New Record are never clicked.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

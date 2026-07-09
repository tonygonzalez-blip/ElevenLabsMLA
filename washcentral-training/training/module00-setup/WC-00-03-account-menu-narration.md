# WC-00-03 — The Account Menu and Personal Setup · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (7 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3, block-by-block, one TTS call per step, files `WC-00-03-s01.mp3` … `WC-00-03-s07.mp3`. Step duration = audio + 0.4 s. Timestamps below are estimates at ~145 wpm pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice. Never switch without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click lands before the explanation.
2. **Varying sentence length.** Short fragments against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a tool means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- MG → "M-G" (spoken as letters; it is an avatar's initials on the demo)
- LMS → "L-M-S"

### Scope notes (non-spoken)

- Covers the account menu and the two personal settings a technician actually changes: Dark Mode and My Training. Logout is named but never clicked on camera.
- Session-timeout behavior belongs to WC-01-03, not here.

## Timed script

[00:00 | Step 1 — Find the avatar]
Look to the far right of the header. <break time="1.0s" /> Past Search, the location selector, and Ask Shyne, there is a small badge with your initials. That is your account, and it rides along on every page.

[00:12 | Step 2 — Open the account menu]
Click it. <break time="1.4s" /> The menu opens with your name and your tenant code right at the top. Get in the habit of reading that line. It is the fastest way to confirm which company you are actually signed into.

[00:26 | Step 3 — Read the menu]
Now the list. <break time="1.0s" /> Profile and Preferences hold your personal settings. Notifications and Help Center do what they say. The two you will reach for most are My Training and the Dark Mode switch. One thing to leave alone for now: Logout, at the bottom, ends your session.

[00:44 | Step 4 — Dark Mode on]
Flip the Dark Mode toggle. <break time="1.4s" /> The whole interface drops to a dark theme on the spot. This is a display preference for you alone. It changes nothing in the data and nothing for anyone else.

[00:57 | Step 5 — Dark Mode off]
Toggle it back. <break time="1.2s" /> Light again. Work in whichever theme is easier on your eyes; the switch is always safe to flip mid-shift.

[01:08 | Step 6 — My Training]
Open the menu again and choose My Training. <break time="1.4s" /> That opens the WashCentral Academy, your learning home for this whole program. Knowing it sits one click away in the account menu saves you hunting for it later.

[01:24 | Step 7 — Back to work]
Head back to the Command Center. <break time="1.2s" /> Same session, right where you left it. From any screen, your initials in the corner are the door to your settings, your training, and, when you really mean it, the way out.

_(Estimated total: about 2:00 pending render. Logout is read aloud but never clicked.)_

## Generation log

- Script written to the project narration craft standard: 1-second visual buffer on each action cue, varied sentence length, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose clear of the listed AI tells; no em or en dashes in the narration; verbatim UI labels, the URL, and the numbered steps left exact. The only em dashes are in the `[mm:ss | Step N — target]` house-format headers.
- Account-menu contents trace to the platform's verified account menu (recorded in the learning plan's Lesson 0.3); the July 9 corpus confirms the avatar badge and that My Training opens the Academy at `lms-home.html`.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

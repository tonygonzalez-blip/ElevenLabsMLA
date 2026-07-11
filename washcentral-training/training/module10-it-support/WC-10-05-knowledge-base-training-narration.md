# WC-10-05 — Knowledge Base and Training Requests · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (9 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. Audio is rendered later, once the ElevenLabs key is available in the environment (it is not set in this session).
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-10-05-s01.mp3` … `WC-10-05-s09.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Timestamps below are estimates** at ~145 wpm plus break time plus a 0.4 s tail, pending the real render. Estimated total ≈ 4:15.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a tool means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- IT & Support → "I-T and Support"
- Knowledge Base → "Knowledge Base" (natural)
- Training Requests → "Training Requests" (natural)
- Ask Shyne → "Ask Shine"; Shyne → "Shine"
- Ctrl+K → "control K" (Windows technicians, the primary keystroke here)
- 404 → "four oh four"
- ALPR → "A-L-P-R" · POS → "P-O-S"

### Scope notes (non-spoken)

- Both interior pages (support-kb.html, support-training.html) returned a 404 in the July 9 verification corpus and did not render. The script covers where each destination lives and its role, and reads the not-found state honestly. It states no on-page metric, category, column, or article title, because none were observed.
- **Ask Shyne** is send-type: do not depict sending a prompt or showing an answer (PARKED-ITEMS.md #8). In step 8 the palette is opened and closed only; **Ask Shyne** is named, not opened.
- Session-timeout ("Still there?") behavior is out of scope; it belongs to WC-01-03.

## Timed script

[00:00 | Step 1 — IT & Support nav]
Open the IT and Support module and look at the left rail. <break time="1.4s" /> Two groups organize it. Support sits at the top, holding the tickets, the help desk, and the alerts you work every day. Audit sits underneath, for the history questions. Today, two of those Support entries are the whole job. Let's find them.

[00:27 | Step 2 — Locate Knowledge Base]
First, the Knowledge Base. <break time="1.0s" /> It's in the Support group, tucked between the help desk and the alerts. Picture it as the team's memory. A tech works out a fix, writes it down once, and from then on the answer is a search away. Nobody has to solve the same problem from scratch a second time.

[00:53 | Step 3 — Open Knowledge Base]
Open it. <break time="1.4s" /> Here's the honest part of this lesson. On the day we verified, the page did not load. It came back with a plain not-found error, a four oh four, and nothing else on the screen. So the article list, the way it's organized, the write-ups themselves, none of that can be shown to you yet. This is the reflex worth building. A page is missing, you record exactly that, and you flag it. You never paint in the blank from memory.

_[Director: click the nav entry; capture whatever the live tenant returns. Do NOT stage a fake Knowledge Base screen. If it still 404s, hold on the not-found state, then the parked title card.]_

[01:27 | Step 4 — Knowledge Base role]
Once it does render, here's why it earns your time. <break time="1.0s" /> The Knowledge Base is where the how-to and troubleshooting write-ups live. The team norm is simple: close a ticket that taught you something reusable, and you document it here before you move on. The next tech inherits the answer in seconds instead of retracing your whole afternoon.

[01:57 | Step 5 — Locate Training Requests]
Back to the rail. Find Training Requests, just under System Alerts. <break time="1.2s" /> This is the client-training pipeline. Your team files into it and works out of it, so it runs in both directions.

[02:18 | Step 6 — Open Training Requests]
Open it. <break time="1.4s" /> Same story as before. On verification day it returned the same not-found error and did not render. The counts, the request types, the columns, all parked until a live pass can confirm them. So you do the same thing you did a moment ago. Record the missing page. Resist the urge to rebuild it from an old screenshot in your head.

_[Director: click the nav entry; capture whatever the live tenant returns. Do NOT stage a fake Training Requests screen. If it still 404s, hold on the not-found state, then the parked title card.]_

[02:45 | Step 7 — Training Requests role]
What it's for, so you're ready when it comes back. <break time="1.0s" /> Training Requests follows a client's ask from the first request, through scheduling, to a session that's actually done. You'll use it two ways. You file a request when a site asks for training, and you pick requests up when it's your turn to deliver.

[03:12 | Step 8 — Header fallback]
Now glance back at the header. <break time="1.4s" /> Search and Ask Shyne stay pinned up here on every page. That matters most on a day exactly like this one. When a page won't open, control K still jumps you anywhere in the platform, and Shyne can answer a plain question while the page is down. One rule holds: confirm whatever Shyne tells you before you act on it.

_[Director: press control K to show the palette opens, then Escape to close it. Do NOT type a query. Do NOT open Ask Shyne — name it only.]_

[03:44 | Step 9 — Recap]
So, the recap. <break time="0.8s" /> Knowledge Base and Training Requests both live right here, under Support, inside IT and Support. Today both came back empty, a four oh four, so their contents stay parked. The lesson was never the page you couldn't see. It's the habit underneath it. Find the destination, read its real state, and when it's missing, report it instead of guessing. That reflex is what keeps this training honest.

_(Estimated total ≈ 4:15 at ~145 wpm; final durations pending render. Both interior pages were 404 in the July 9 corpus — no on-page content is spoken.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken prose. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and in the parked-item reference string, both quoted verbatim. Verbatim UI labels (Knowledge Base, Training Requests, Search ⌘K, Ask Shyne), the keystroke, and the navigation path were left exact.
- No page interior is narrated: both pages returned a 404 in the July 9 corpus, so no metric, category, column, or article title is spoken. The not-found state is read as observed.
- Ask Shyne left unopened (PARKED-ITEMS.md #8): step 8 names it and opens the command palette only, closing with Escape; no prompt is sent and no answer is shown.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

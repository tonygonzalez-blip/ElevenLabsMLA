# WC-01-06 — Command Center deep dive · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (16 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 16 blocks `WC-01-06-s01.mp3`…`WC-01-06-s16.mp3`, one TTS call per step, then joined to `WC-01-06-full-narration-v1.0.mp3`. Audio is rendered later once the ElevenLabs key is available (not set in this session). Estimated total ~5:32; per-block timestamps below are estimates at ~145 wpm plus break time plus a 0.4s tail, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, locked. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-01-06-s01.mp3` … `WC-01-06-s16.mp3`, assembled at each step's marker. Step duration = audio + 0.4s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a panel means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- Shyne → "Shine"
- MAIA → "Maya" (working pronunciation; spoken form not confirmed by Micrologic — NEW parked item, flag before render)
- POS → "P-O-S" · SLA → "S-L-A" · QR → "Q-R" · SMS → "S-M-S" (not spoken in this script) · KPI → "K-P-I" (not spoken in this script)
- ALPR → "A-L-P-R" (not spoken in this script)

### Scope notes (non-spoken)

- This lesson reads the Command Center top to bottom. It is orientation only: point at each panel, do not act from it.
- The three global-header tools (Search, location scope, Ask Shyne) belong to lesson 1.2 and are only named here, not opened.
- The **Full USA / Active States** map toggle is view-only; clicking it (step 7) reframes the map and changes nothing else.
- Priority Intelligence action rows are send-type. Do not depict clicking **Launch →**, **Target →**, **Recover →**, or **Assign →**. Read verbs (**Open →**, **Review →**, **View →**) and Ask MAIA chips are pointed at, not opened.
- Ask MAIA vs Ask Shyne naming is parked (PARKED-ITEMS.md #8). The session-timeout "Still there?" dialog is out of scope (lesson 1.3).

## Timed script

[00:00 | Step 1 — Command Center]
This is the Command Center, the first screen your network hands you. <break time="1.4s" /> It looks like a wall of numbers. It isn't. It's a triage board, stacked top to bottom. Read the stack in order, and the thing that needs you rises to the top.

[00:20 | Step 2 — Mobile App panel]
First panel, the mobile app. <break time="1.2s" /> That Live tag means the figures move on their own, refreshing as members open the app. You're reading its pulse right now, not a report someone ran this morning. For a network pushing an app, this is the first read on whether members actually use it.

[00:43 | Step 3 — Mobile App KPIs]
Four cards across. <break time="1.0s" /> Installs, weekly actives, redemptions, opt-in rate. Linger on redemptions: it splits Q-R scans from kiosk taps, so you see whether members cash in at the phone or at the machine. That split tells you which channel is carrying the program.

[01:02 | Step 4 — Location Network header]
Scroll to the map panel. <break time="1.4s" /> The heading counts the whole network: a hundred forty-four sites across seven states. That color key beside it, healthy, warning, critical, is the same key the pins use. Once you know the key, the map tells you where to look without reading a single label.

[01:25 | Step 5 — Location Network KPIs]
Down the left, four vitals. <break time="1.0s" /> Money in today, who's active, cars through the tunnels, and the share of card charges that bounced. That last one, the decline rate, is what a support tech watches closest, because a climbing decline rate usually means a billing problem, not a slow day.

[01:47 | Step 6 — Map and controls]
Now the map itself. <break time="1.4s" /> Every pin is a wash, colored by health, so a red dot is a site in trouble at a glance. Hover one and it shows that site's revenue, members, and tickets, with a link to open it. Not today, though. We're reading the network, not diving into a single site.

_[Director: hover a pin to raise its tooltip; do not click into a location dashboard.]_

[02:10 | Step 7 — Full USA / Active States toggle]
Click Active States, then Full USA. <break time="1.4s" /> The map reframes, and that's all it does. This toggle is view-only. It changes the shot, never the data, and never the panels below. One click puts it back.

[02:26 | Step 8 — Priority Intelligence header]
Here's the heart of the page. <break time="1.4s" /> Priority Intelligence, eleven items, four urgent. It's your triage feed, sorted by severity, and every row is a door onto the module where you'd actually fix it. For a support tech, this is the panel you scan first.

[02:47 | Step 9 — Critical group]
Top of the feed, Critical. <break time="1.2s" /> Two rows, and this is where a downed P-O-S shows up first, before the phone even rings. Open jumps you to reconciliation to work the outage. Review drops you into Support for the tickets about to breach their S-L-A.

[03:07 | Step 10 — High Priority group]
Next tier, High Priority. <break time="1.2s" /> A kiosk printer down, a site's conversion slipping. Not on fire yet, but they will be if they sit. Watch the verbs shift: Assign hands the work off, Analyze opens the numbers behind it.

[03:24 | Step 11 — Revenue Plays group]
Now the money. <break time="1.4s" /> Revenue Plays, five suggestions worth thirty-two hundred dollars today, each tagged with what it's worth. Read them as prompts, not orders. Launch, Target, Recover, those fire real outreach to real customers, so on a live tenant you look, you don't press.

_[Director: point at the Launch, Target, and Recover arrows with STOP rings; do not click any Revenue Plays action row.]_

[03:44 | Step 12 — Automations group]
Last group, Automations. <break time="1.2s" /> Two jobs already running with no one steering, a win-back text sequence and the payment retry engine, quietly clawing back failed charges. Inspect and View check on them without touching a thing, which is just what you want with something already working.

[04:05 | Step 13 — Row affordance grammar]
One habit ties this panel together. <break time="1.4s" /> Read the arrow before you click. Open, Review, View, those take you somewhere to look. Launch, Target, Recover, Assign, those start something. Read arrows are safe. Action arrows you leave alone here, on a shared live tenant.

[04:25 | Step 14 — Action Ownership]
To the right, Action Ownership. <break time="1.2s" /> Same items, now answered by who owns them and when they're due. Regional Ops on the outage within the half hour, Support on the aging tickets, Marketing and Revenue on the plays. It answers the question a manager always asks: whose job is this.

[04:46 | Step 15 — Ask MAIA]
At the bottom, Ask MAIA. <break time="1.4s" /> Five plain-language shortcuts, each jumping straight to the module that answers it. Worth flagging: the header button reads Ask Shyne, this panel reads Ask MAIA. Two names, so we don't tell a client they're one feature yet, and we send neither one today.

_[Director: do not click a MAIA chip or Ask Shyne. Ask MAIA vs Ask Shyne naming is parked (PARKED-ITEMS.md #8); MAIA spoken as "Maya" is a working guess pending confirmation.]_

[05:08 | Step 16 — Recap]
Scroll back up, and you've got the whole board. <break time="0.8s" /> App engagement, the network map, the priority feed, who owns what, and a shortcut to ask. Five panels, one screen. Read it top to bottom, and never click an arrow until you know which kind it is. Do that, and the Command Center works for you, not against you.

_(Estimated narration total: ~332s ≈ 05:32. Timestamps are estimates at ~145 wpm; re-measure with ffprobe after render and align each block to its step marker.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, panel names, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format).
- No assistant is sent: Priority Intelligence action rows (Launch / Target / Recover / Assign) are pointed at with STOP rings and never clicked; Ask MAIA and Ask Shyne are named but not opened (PARKED-ITEMS.md #8).
- NEW parked item flagged: the spoken form of **MAIA** ("Maya" used as a working guess) is not confirmed; confirm before rendering audio.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

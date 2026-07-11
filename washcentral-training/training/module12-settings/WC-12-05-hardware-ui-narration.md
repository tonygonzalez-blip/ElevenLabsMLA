# WC-12-05 — Hardware & UI (POS-facing config) · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (13 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — audio is rendered later, once the ElevenLabs key is available in the environment. Voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3. 13 blocks `WC-12-05-s01.mp3` … `WC-12-05-s13.mp3`, assembled at each step's marker.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-12-05-s01.mp3` … `WC-12-05-s13.mp3`. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Timestamps are estimates** at ~145 wpm plus break and tail, pending render. Estimated total ≈ 5:47. Per-step estimates (seconds): s01 25.4 · s02 28.7 · s03 28.3 · s04 27.0 · s05 27.5 · s06 26.2 · s07 25.4 · s08 23.3 · s09 25.4 · s10 25.0 · s11 27.5 · s12 32.0 · s13 25.8.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a page means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- POS → "P-O-S"
- UI & Display → "U-I and Display"
- Lube → "loob" · Macro → "MAK-roh" · Kiosk → "KEE-osk" · Hotspots → "HOT-spots"
- Resolutions: 1920x1080 → "nineteen-twenty by ten-eighty" · 1080x1920 → "ten-eighty by nineteen-twenty"
- Location/terminal codes (MLAS, SSNB, EXPR, L1) are not spoken in this script; if referenced live, say them as letters ("M-L-A-S"). Flow name "Express Tunnel" is spoken as words.
- Carried from the project guide: ALPR → "A-L-P-R"; Shyne → "Shine" (neither is spoken here).
- LogicPOS → "Logic P-O-S" (out of scope this lesson; not spoken — parked #2).

### Scope notes (non-spoken)

- Menu-level tour of ten lists across two Settings groups, **Hardware** and **UI & Display**. Read-only throughout.
- Seven of the ten lists showed "Couldn't load records (Failed to fetch)" in the July 9 capture; the script reads columns and purpose for those and reads sample values only for the three that loaded (**Screen Layout**, **Lube Buttons**, **Kiosk Screen Flows**).
- The **LogicPOS** tablet POS front end is out of scope and parked (PARKED-ITEMS.md #2); it is never depicted or navigated to.
- The "Still there?" idle dialog is out of scope (WC-01-03).
- No create or edit: **+ New Record** and **+ New Flow** are located, never clicked; no row is opened.

## Timed script

[00:00 | Step 1 — Hardware group]
Start in Settings, and open the Hardware group. <break time="1.4s" /> Five lists live here, and together they describe the machines at a wash: the terminals that exist, the screen layouts they run, and the lube-bay buttons they show. Think of this as the field tech's corner of Settings, the place you check before you touch anything at the site.

[00:25 | Step 2 — Hardware / Terminals]
Click Hardware / Terminals. <break time="1.4s" /> Every machine a wash runs shows up here as one row: its location, its address on the network, the build it runs, and when it last checked in. When a site reports a dead register, start here. A terminal that isn't listed, or whose last-seen time is hours stale, has already told you something. The rows didn't load today, so read the columns.

[00:54 | Step 3 — Screen Layout]
Now Screen Layout. <break time="1.4s" /> This one loaded. The tiles count six layouts, split evenly between POS and kiosk, and each row pins a screen type and a resolution to a location. A portrait kiosk, a landscape register, each with its own entry. One quirk: the card claims six records but lists two. Trust the tiles for the real count, and treat the rows as samples.

[01:22 | Step 4 — System Types]
System Types is next. <break time="1.4s" /> It's a short lookup list, one description per row, the kind of behind-the-scenes list other pages point at. Nothing to configure day to day. Today it didn't load either, so note what it is and move on. When you see "failed to fetch" on a page like this, it's the data service, not an empty list.

[01:49 | Step 5 — Lube Buttons]
Lube Buttons. <break time="1.4s" /> Here's button wiring at its plainest. Twenty-four buttons across a few lube-bay terminals, one row each. The row names the group it belongs to, the terminal it appears on, the label the operator taps, and the tile's color. Oil Change in teal, Tire Rotation in blue. When someone says a lube button is wrong, this is the row you read.

[02:16 | Step 6 — Lube Checklists]
Lube Checklists. <break time="1.4s" /> One column, the service. These are the checklist items a lube bay works through on a job. Like System Types, it didn't load today, so read the column and the purpose, not the values. A menu tour like this is about knowing where each list lives, so that when a ticket points here you go straight to it.

[02:43 | Step 7 — UI & Display group]
Collapse Hardware, and open UI and Display. <break time="1.4s" /> Eleven lists this time. Most are the paint and the plumbing: button types, images, colors, templates. We'll read the ones a technician gets asked about: the cashier and greeter buttons, the button groups behind them, the macros, and the kiosk screen flows. The rest are the lookups those five draw from.

[03:08 | Step 8 — Button Groups]
Button Groups. <break time="1.4s" /> A group is just the named set a button is filed under, the same group value you saw on the lube buttons a moment ago. Two columns, a description and whether it's active. It didn't load today, so read the shape. Groups are the folder; the buttons are what's inside.

[03:31 | Step 9 — Cashier Buttons]
Cashier Buttons. <break time="1.4s" /> These are the tap targets on the register screen. Each row is a button: its slot number, its label, the kind of action it runs, and its tile color. So "the void button moved" or "the wrong color" is answered right here, one row per button. The list didn't load today, but the columns tell the story.

[03:57 | Step 10 — Greeter Buttons]
Greeter Buttons. <break time="1.4s" /> Same four columns, aimed at the greeter station out at the lane instead of the register. Keeping the two lists apart lets a site put different buttons in front of the greeter than the cashier. If a lane's entry screen looks wrong, you check here, not the cashier page. This one didn't load today either.

[04:22 | Step 11 — Macros]
Macros. <break time="1.4s" /> A macro is a saved action a button or a scanned barcode can fire. The columns tell you its type, whether a barcode triggers it, and whether it also shows on the handheld. That last one matters when an operator says a shortcut works at the register but not on the handheld device. It didn't load today, so read the columns.

[04:49 | Step 12 — Kiosk Screen Flows]
Last list: Kiosk Screen Flows. <break time="1.4s" /> This is where self-serve kiosk screens are built and pushed live. The tiles count three flows, two published and one draft, across eleven screens. Each row is a flow: its locations, how many screens and tappable hotspots, and a status chip. Read the chip first. Published is live on the kiosks; a draft, like Express Tunnel, is built but not out yet. The create button here reads New Flow.

[05:21 | Step 13 — Recap]
So that's Hardware and UI and Display. <break time="1.0s" /> Hardware registers the machines and their screens. UI and Display wires the buttons a cashier and greeter tap, the macros behind them, and the kiosk flows a site publishes. Two groups, ten lists, all read-only for you. Learn where each one lives, because a POS ticket usually ends on one of these pages.

_(Estimated total ≈ 5:47 at ~145 wpm; timestamps firm up after render.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken prose. Verbatim UI labels, navigation paths, and the numbered steps are left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format).
- Read-only throughout: **+ New Record** and **+ New Flow** are located, never clicked; no row is opened; the **LogicPOS** front end (parked #2) is not depicted.
- Seven of the ten lists were not loaded in the July 9 corpus; the script narrates their columns and purpose and does not state row values for them.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

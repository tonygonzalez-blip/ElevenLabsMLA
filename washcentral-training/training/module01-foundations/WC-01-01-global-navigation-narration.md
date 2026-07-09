# WC-01-01 — Global Navigation Rail · Narration Script

**Verified against demo.washcentral.com on July 8, 2026.** v1.3 · Steps match the guide and shot list one-to-one.

## Settings header

- **Voice:** **WashCentral New** (ElevenLabs voice ID CDbF7Jxnv3azemv9dXMP) — **PROJECT VOICE, approved by user July 8, 2026.** Designed from voice-design brief v1.2. Earlier voices (WashCentral, Wash Central Final) retired.
- **Model:** **eleven_v3** — user-confirmed July 8, 2026; pass explicitly on every generation.
- **Production render:** block-by-block — one TTS call per script step, files numbered to the shot list (`WC-01-01-s01.mp3` … `WC-01-01-s16.mp3`), assembled in the editor at each step's marker. Per-step rendering keeps prosody fresh and avoids long-take flattening.
- **Output:** 44.1 kHz MP3
- **Pace target:** 140–150 wpm, professional corporate voice-actor delivery.

### Narration craft standard (v1.3 — project-wide, per user direction July 8, 2026)

1. **The 1-second visual buffer.** Never speak the instant a new screen appears. Every action cue ("Next — Marketing.") is followed by `<break time="1.4s" />` — click, transition, one full beat for the visual to land — before the explanation begins.
2. **Varying sentence length.** Short, punchy fragments ("This… is home.") set against longer explanatory sentences. No two adjacent blocks with the same rhythm.
3. **Show, don't read.** Never recite labels the viewer can already see. Narrate the *value and context* — what the module means for the technician's day, not its menu items.

If delivery still reads synthetic after these script controls, tune the **voice itself** in the ElevenLabs dashboard (WashCentral voice → settings: raise stability for a steadier corporate read, lower style exaggeration, reduce speed slightly) or redesign the voice — the workspace connector selects voices but cannot edit voice settings.

- **Pronunciation guide:** WashCentral → "Wash Central" · ALPR → "A-L-P-R" · POS → "P-O-S" · demo.washcentral.com → "demo dot wash central dot com" · CRM → "C-R-M" · ⌘K/Ctrl+K → "control K"

## Timed script

[00:00 | Step 1 — open on Command Center]
Welcome to WashCentral. <break time="0.6s" /> Before you fix anything, you need to know your way around. That's this lesson. <break time="0.8s" /> The dark bar on the left is the navigation rail. It never moves, and it follows you to every screen. Wherever you end up in the platform… it's your way home.

[00:22 | Step 2 — Expand sidebar]
Down near the bottom — click the expand chevron. <break time="1.4s" /> There. Now every icon has a name. <break time="0.6s" /> And notice the highlight. Command Center. That's where we're standing.

[00:38 | Step 3 — Analytics]
First stop — Analytics. <break time="1.4s" /> This is the numbers side of the business. Revenue. Members. Labor. When an owner asks how they're doing… the answers live here. <break time="0.6s" /> And look left — the sidebar just changed. Every module carries its own menu like this. Read it first, always.

[01:02 | Step 4 — Marketing]
Next — Marketing. <break time="1.4s" /> Everything the platform sends starts here. Which also means: when a client says their texts stopped going out… this is where you'll look.

[01:18 | Step 5 — CRM]
Now, CRM. <break time="1.4s" /> The heart of it all. Every customer, every membership, every vehicle. Most support calls end up here sooner or later — and so will you.

[01:34 | Step 6 — Sales]
Sales. <break time="1.4s" /> Every ticket the business has ever written. One hundred twenty-six million of them… and counting. If money moved, there's a record in here.

[01:50 | Step 7 — Inventory]
Inventory. <break time="1.4s" /> Chemicals, supplies, retail stock. What's on the shelf — and what it costs.

[02:02 | Step 8 — Team]
Team. <break time="1.4s" /> The people side. Who works, when they work, and how they're doing. Even the sales contests live here.

[02:16 | Step 9 — Operations]
Operations. <break time="1.4s" /> When something breaks at a site, the work order lives here. So do incident reports… and the appointment book.

[02:31 | Step 10 — Digital]
Digital. <break time="1.4s" /> This is what the customer sees — their portal, and their phone. When a member says they can't log in… start here.

[02:46 | Step 11 — IT & Support]
IT and Support. <break time="1.4s" /> Remember this one. Tickets. Alerts. The knowledge base. For a support technician, every shift starts and ends in this module. This… is home.

[03:04 | Step 12 — Billing]
Billing. <break time="1.4s" /> What the platform itself charges — every text, every email, priced by campaign. Handy, when the invoice question comes.

[03:18 | Step 13 — Academy]
Academy. <break time="1.4s" /> Training, built right in. You'll spend real time here.

[03:28 | Step 14 — Reports]
Reports. <break time="1.4s" /> A hundred and seventy-three of them. If someone needs it on paper, it comes from here.

[03:40 | Step 15 — Settings]
And finally — the gear. Settings. <break time="1.4s" /> Ninety-two pages of configuration. This is where the platform is wired… and where we'll spend a whole phase of your training.

[03:56 | Step 16 — Close]
Close Settings… and click Command Center. <break time="1.2s" /> Back where we started. <break time="0.6s" /> That's the map. Thirteen modules, one gear — and now you know what lives behind every one of them. <break time="0.6s" /> Next lesson: the shortcut that gets you anywhere in two keystrokes.

## Generation log

- Script: v1.0 too fast → v1.1 mechanical gaps → **v1.3 (current)** written to the craft standard.
- Voice: WashCentral (retired) → Wash Central Final (retired: flat, synthetic) → **WashCentral New (APPROVED July 8, 2026)**, designed per voice-design brief v1.2.
- A/B auditions: two-part renders of v1.3 exist for all three voices (timestamped files in the ElevenLabsMLA folder) — superseded by the production render below.
- **PRODUCTION RENDER — July 8, 2026 · voice WashCentral New · model eleven_v3 · 16 per-step files (s01–s16).** Run `WC-01-01-rename-audio.ps1` to rename the timestamped files to `WC-01-01-s01.mp3` … `WC-01-01-s16.mp3`, then place each at its step marker per the shot list.

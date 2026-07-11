# WC-12-01 — General & org structure · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (13 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 13 blocks `WC-12-01-s01.mp3`…`WC-12-01-s13.mp3` + joined `WC-12-01-full-narration-v1.0.mp3` (220.72s ≈ 3:41). Step duration = audio + 0.4 s. Per-step render seconds: s01 17.01 · s02 15.39 · s03 12.43 · s04 20.27 · s05 15.39 · s06 16.93 · s07 16.12 · s08 17.32 · s09 16.59 · s10 21.08 · s11 18.44 · s12 8.2 · s13 20.35.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-12-01-s01.mp3` … `WC-12-01-s13.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a page means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- Micrologic → "Micro Logic"
- AI → "A-I"
- POS → "P-O-S"
- Shyne → "Shine"

### Scope notes (non-spoken)

- Covers the Settings home (**16 categories · 92 pages**, the card grid, the **Search settings…** box) and five pages: **Account Information**, **Profit Centers**, **Departments**, **Categories**, and **Dashboard Settings** (filed under **Analytics**, not General — the narration calls this out). Read-only throughout; **+ New Record** is never clicked and no row or edit form is opened.
- The **Categories** KPI (49) versus list count (66) mismatch is spoken deliberately: the viewer is told to trust the list count.
- The learning plan files Dashboard Settings under General; the platform files it under Analytics. The platform wins, and the narration says so without naming the plan.

## Timed script

[00:00 | Step 1 — Settings home]
Every configuration screen in Wash Central lives behind one gear. Click it. <break time="1.4s" /> Settings opens as its own full-screen area, with its own sidebar and its own front door. Setup tickets all end up here sooner or later, so this walk is about learning the floor plan before you need it.

[00:22 | Step 2 — The counter]
Check the counter, top right. <break time="1.2s" /> Sixteen categories, ninety two pages. That's the platform's entire configuration surface in one line. Nobody memorizes ninety two pages. You memorize how they're grouped, and the groups do the remembering for you.

[00:41 | Step 3 — Search settings box]
Below the heading sits a search box. <break time="1.0s" /> When you already know the page name, type it here and jump straight in. Much faster than scanning cards. We'll leave it empty today and learn the layout the slow way, once.

[00:59 | Step 4 — The card grid]
Now sweep the card grid. <break time="1.2s" /> Sixteen cards, one per category, each with a one line summary of what it holds. Locations, payments, hardware, the customer portal, the A-I agent. This lesson stays inside the first card, General, because that's where a client's account and org structure are defined.

[01:22 | Step 5 — Open General]
Open General. <break time="1.4s" /> The sidebar expands to nine pages, and the first of them, Account Information, opens on its own. Read the names as they appear: profit centers, departments, categories. Those three are the spine we came for.

[01:41 | Step 6 — Account Information top]
Start at the top of Account Information. <break time="1.2s" /> Fifty six locations across fifteen states, running in multi operation mode on an active license. This page is the client's site registry. When you need to confirm what a client actually runs, and where, this is the record of truth.

[02:02 | Step 7 — Account Information list]
Scan the list below. <break time="1.2s" /> Each row is one site with its company, its operation mode, and its contact details. There's a New Record button at the top right. Locate it, then leave it alone. Adding a site is production admin work, never part of a training walk.

[02:23 | Step 8 — Profit Centers]
Next page: Profit Centers. <break time="1.4s" /> Four records. Wash, lube, detail, and store. These are the top level revenue buckets, and every sale in the platform rolls up into exactly one of them. Four short rows that shape every financial report the client will ever read.

[02:44 | Step 9 — Departments]
Now Departments. <break time="1.2s" /> The same four names again, and that's the point. Departments map the operational side of the business onto those same revenue buckets, so labor and sales line up when a report compares them. All four active, all maintained by Micro Logic.

[03:04 | Step 10 — Categories]
Then Categories, where the detail lives. <break time="1.4s" /> The tiles say forty nine. The list header says sixty six records. They disagree, and the list wins; trust the table count, not the tile. Each category refines one profit center, which is how a single wash bucket splits into dozens of reportable lines.

[03:27 | Step 11 — Dashboard Settings]
One more page, and it comes with a trick. <break time="1.2s" /> Dashboard Settings is filed under Analytics, not General, whatever older material tells you. The platform wins. Ten dashboards, one per user level, deciding what an administrator, a manager, or a cashier sees the moment they sign in.

[03:49 | Step 12 — Close Settings]
Click Close Settings. <break time="1.2s" /> You're back in the app, exactly where you left it. Five pages read, nothing touched.

[03:59 | Step 13 — Recap]
So that's the General group. <break time="0.8s" /> The Settings home reaches ninety two pages, and search jumps you to any of them. Account Information holds the sites. Profit centers, departments, and categories classify every sale, in that order. And Dashboard Settings lives under Analytics, which will save you a hunt the first time someone asks.

_(Estimated narration total: ~260s ≈ 04:20 at ~145 wpm plus break time; with the shot list's holds the recorded take runs about 4:50, matching the shot list's estimate. Actual per-step seconds to be measured with ffprobe at render; step duration = audio + 0.4 s.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, the navigation paths, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and in the generation-log lines noting the standard.
- Read-only throughout: **+ New Record** is never clicked, no row or edit form is opened, and the Categories count mismatch (49 tile vs 66 list) is narrated as a read-the-list instruction, matching the guide's note.
- Synced against the pre-existing shot list (13 steps, estimated runtime about 4:50): same step numbers, same targets, same order.
- Status: **READY FOR GENERATION** — audio renders once `ELEVENLABS_API_KEY` is set. Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

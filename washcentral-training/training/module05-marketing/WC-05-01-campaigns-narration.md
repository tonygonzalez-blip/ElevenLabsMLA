# WC-05-01 — Campaigns · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (14 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 14 blocks `WC-05-01-s01.mp3`…`WC-05-01-s14.mp3` + joined `WC-05-01-full-narration-v1.0.mp3` (226.35s ≈ 3:46). Step duration = audio + 0.4 s. Per-step render seconds: s01 15.31 · s02 18.52 · s03 12.28 · s04 15.15 · s05 11.08 · s06 12.43 · s07 15.96 · s08 14.92 · s09 21.79 · s10 16.59 · s11 21.32 · s12 14.76 · s13 14.29 · s14 16.35.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-05-01-s01.mp3` … `WC-05-01-s14.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Timestamps below are estimates** (computed at ~145 wpm plus break time plus a 0.4 s tail); replace with measured values after render.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a tool means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- ALPR → "A-L-P-R" · POS → "P-O-S"
- Shyne → "Shine"
- KPI → "K-P-I"
- SMS → "S-M-S"; "Email+SMS" → "email plus S-M-S"
- Drip Sequence → say plainly ("drip sequence"); A/B Test → "A B test"
- Any spoken form not certain (RCS as a word, etc.) is left unspoken; the sidebar labels are on screen, not read aloud.

### Scope notes (non-spoken)

- Read-only tour of Marketing → Campaigns. Never depict sending, activating, or launching a campaign.
- **+ New Record** is opened only to document the blank form's layout, then dismissed with **Cancel**. **Save Changes**, the form's **Send Test**, and **Export** are never clicked.
- The **⛅ Weather paused — N locations** chip is described as observed; where weather-pause is configured and what it gates is parked (PARKED-ITEMS.md #6). The **Weather Gate** tab is named but not opened.
- KPI/insight/list values are the July 9 demo snapshot for the current scope; do not present them as fixed truth.

## Timed script

[00:00 | Step 1 — Open Campaigns]
Open Marketing, then Campaigns. <break time="1.4s" /> This page gathers every campaign the network runs into one list. The rest of Marketing sits in the sidebar beside it. This whole lesson is look-only, so nothing here sends or launches.

[00:16 | Step 2 — KPI tiles]
Start at the top row. <break time="1.4s" /> Four tiles hold the snapshot: active campaigns, messages sent this month, average open rate, and revenue attributed. Here the numbers are quiet, mostly zero. On a live tenant this is your fast read on how marketing is doing.

[00:36 | Step 3 — Send Volume]
Below the tiles, three panels. First, Send Volume. <break time="1.4s" /> It draws email and text volume across the last thirty days. One glance tells you whether sending is climbing, holding steady, or falling off.

[00:51 | Step 4 — Campaigns by Type]
Next, Campaigns by Type. <break time="1.0s" /> This is the channel mix. Most of the network's campaigns go by email, a chunk pair email with text, and smaller slices run text-only or push. It tells you how customers are actually being reached.

[01:08 | Step 5 — Campaign Performance]
The third panel, Campaign Performance. <break time="1.0s" /> It counts campaigns by state: how many are active, sitting in draft, or already wrapped. A quick pulse on where the work stands.

[01:21 | Step 6 — Campaign List]
Now scroll to the Campaign List. <break time="1.4s" /> One row per campaign. Up top, a New Record button to build one, Export to pull the list out, plus filters and a search box to find a campaign fast.

[01:38 | Step 7 — Columns]
Read across the headers. <break time="1.0s" /> Name, type, and status, then audience, sent, open rate, and revenue. Those last columns are the results, and they fill in only after a campaign sends. Here they're all dashes, because none have gone out yet.

[01:56 | Step 8 — Statuses]
Down the status column, four states. <break time="1.4s" /> Draft is still being built. Scheduled is set to go out later. Active is running now. Completed has finished its run. You'll see those same four words everywhere in Marketing, so learn them here.

[02:14 | Step 9 — Weather-paused chip]
Look at the two campaigns with an extra chip. <break time="1.4s" /> It reads weather paused, six locations. That campaign is held at those sites for weather, while its status still reads scheduled or active. If a client says a campaign stopped in one town but not another, check this chip first. Where the pause is configured is parked for a later lesson.

_[Director: do not click a status control or a row. The weather chip is read, not changed.]_

[02:40 | Step 10 — Open the form]
Click New Record to open a blank campaign form. <break time="1.4s" /> Across the top runs a set of tabs: details, content, goals, delivery, an A B test, and a weather gate. We're only here to see the shape of it. Do not save.

_[Director: do not click Save Changes. Open the form for layout only.]_

[02:59 | Step 11 — Campaign Details fields]
The first tab, Campaign Details, holds the basics. <break time="1.0s" /> A name and subject line, the type and mode, a status, a description, and the run dates. Mode is worth a look: a single send, or a drip sequence that spreads messages over days. Below it, the audience, where you'd attach who receives the campaign.

[03:22 | Step 12 — Cancel]
Leave the way we came in: click Cancel. <break time="1.2s" /> The form closes, nothing saved, and the list is right where we left it. One tab here, Weather Gate, we didn't open, so how the weather pause is set stays parked too.

[03:41 | Step 13 — Find a campaign]
Back on the list, two ways to find a campaign. <break time="1.0s" /> Type a name into the search box, or narrow with Filters. The footer counts the records and pages through them. Export sits up top for pulling the list out, though we won't touch it.

_[Director: do not run a search that changes state, and do not click Export.]_

[04:00 | Step 14 — Recap]
So that's Campaigns. <break time="0.8s" /> Four tiles for the snapshot, three panels for volume, mix, and status, and one list for the campaigns themselves. Read a status, catch a weather pause, open the form to learn its shape. All of it without sending or changing a thing.

_(Estimated narration total: ~260 s ≈ 04:20 at ~145 wpm. Timestamps are estimates pending render.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, the navigation path, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and inside verbatim UI strings quoted from the platform.
- Nothing is sent, activated, or launched: the form is opened for layout only (step 10) and dismissed with Cancel (step 12); Save Changes, Send Test, and Export are never clicked.
- Weather-pause configuration left parked (PARKED-ITEMS.md #6); the chip is described as observed and the Weather Gate tab is named but not opened.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

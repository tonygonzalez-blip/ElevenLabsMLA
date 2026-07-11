# WC-02-06 — Prepaid Books, Vehicles, Retail Customers & Bundles · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (10 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 10 blocks `WC-02-06-s01.mp3`…`WC-02-06-s10.mp3` + joined `WC-02-06-full-narration-v1.0.mp3` (179.97s ≈ 2:60). Step duration = audio + 0.4 s. Per-step render seconds: s01 15.65 · s02 17.95 · s03 17.55 · s04 15.15 · s05 19.41 · s06 21 · s07 17.79 · s08 17.87 · s09 14.92 · s10 18.68.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, locked. Never switch voice or model without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-02-06-s01.mp3` … `WC-02-06-s10.mp3`, assembled at each step's marker.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Estimated per-step seconds (pending render):** s01 20.0 · s02 20.8 · s03 20.4 · s04 17.5 · s05 21.3 · s06 19.6 · s07 20.4 · s08 22.9 · s09 19.6 · s10 21.1. Estimated total ≈ 203.6 s ≈ 3:24.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a list means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- Prepaid → "Pre-paid"
- Fundraiser → "Fund-raiser"
- ALPR → "A-L-P-R" · POS → "P-O-S"
- Shyne → "Shine"

### Scope notes (non-spoken)

- Menu-level tour of four sibling CRM lists: Prepaid Books, Vehicles, Retail Customers, Bundles. One short segment per list. Do not deep-dive any single list.
- Three of the four list bodies were in a "Failed to fetch" state at capture; narrate structure over row values. Only the Bundle List loaded rows; Vehicles and Bundles KPI tiles loaded values; Prepaid Books tiles showed labels only.
- Do not depict opening or submitting any **+ Add** / **+ New** create form. Fundraiser is a parked stub (PARKED-ITEMS.md #3) — read it, never click it.

## Timed script

[00:00 | Step 1 — CRM sidebar]
Open CRM in the left rail. <break time="1.4s" /> The sidebar stacks every kind of customer record: members, gift cards, house accounts, and the four we cover today. One page per record type. Learn where each one lives and you stop guessing which screen holds the answer.

[00:20 | Step 2 — Prepaid Books top]
Click Prepaid Books. <break time="1.4s" /> A prepaid book is a stack of washes a customer already paid for. The tiles up top count them: total, active, completed, and how many expire soon. In today's capture those numbers were still loading, but the labels tell you exactly what to read.

[00:40 | Step 3 — Prepaid Book List]
Now the list itself. <break time="1.0s" /> Six columns, and two do the work on a call: Remaining tells you washes left, Expiration tells you the deadline. The rows failed to load in this capture, so read the column headers and refresh live before you promise a customer anything.

[01:01 | Step 4 — Vehicles top]
Click Vehicles. <break time="1.4s" /> This is the master plate list, nearly four thousand cars. The tiles loaded here: total vehicles, active members, flagged, and new this month. When a plate gets flagged at the gate, Flagged is your first stop.

[01:18 | Step 5 — Vehicle List]
Scroll to the list. <break time="1.0s" /> Seven columns: plate, make and model, year, customer, location, status, last visit. For a dispute you want License Plate and Status. The rows hit the same fetch error, but the tiles above prove the data is there. It just didn't stream into the table.

[01:40 | Step 6 — Retail Customers]
Click Retail Customers. <break time="1.4s" /> This one is bare on purpose. No tiles, no charts, just a search box and five columns: customer, plate, home location, email, phone. It holds walk-ins and non-members, the people without a full membership record. Search, read the contact, done.

[01:59 | Step 7 — Bundles top]
Click Bundles. <break time="1.4s" /> A bundle is a packaged deal a site sells. The tiles loaded: thirty-two bundles, twenty-eight active, and this month's sales and revenue. The Revenue by Bundle panel ranks which packages actually move, so you can see the Monthly Value Pack carrying the month.

[02:20 | Step 8 — Bundle List]
Now the list, and this one actually loaded. <break time="1.0s" /> Seven columns, and five packages on screen, from the Summer Special to the Fleet Pack built for fleets. Watch the Valid At column: some run at every site, others only at a couple. That column settles most "does this work at my location" questions.

[02:42 | Step 9 — Fundraiser stub]
One more entry, Fundraiser, sits right below Bundles. <break time="1.4s" /> Do not click it. Its link goes nowhere and the page was never built. It is parked, so treat the menu item as a placeholder and never promise a customer a fundraiser feature from this screen.

_[Director: point to Fundraiser; do not click. It is a stub — TBD — parked (PARKED-ITEMS.md #3).]_

[03:02 | Step 10 — Recap]
So, four lists, one sidebar. <break time="0.8s" /> Prepaid Books for washes left and expiry. Vehicles for plates and flags. Retail Customers for walk-ins. Bundles for what's on the menu and where. Match the ticket to the list, open it, read the row. That's the whole job on these four screens.

_(Estimated total ≈ 203.6 s ≈ 3:24, pending render. Timestamps are estimates at ~145 wpm; they firm up once the audio is generated.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, column names, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and inside the mandated parked-item string, quoted verbatim.
- Three of four list bodies were in a "Failed to fetch" state at capture; the narration reads structure (columns, KPI labels) over specific row values, and never invents a row. Bundle List rows are the only ones that loaded.
- Fundraiser is read as a parked stub (PARKED-ITEMS.md #3); it is never clicked and no page is depicted.
- Status **READY FOR GENERATION** (audio not rendered in this session). Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

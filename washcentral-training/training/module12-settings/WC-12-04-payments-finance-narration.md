# WC-12-04 — Payments & Finance · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (12 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — audio renders later, once the ElevenLabs key is set in the environment (not set in this session). Voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3. 12 blocks `WC-12-04-s01.mp3`…`WC-12-04-s12.mp3`, one TTS call per step. Break tags to be honored at render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-12-04-s01.mp3` … `WC-12-04-s12.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Timestamps below are estimates pending render** (~145 wpm + break time + 0.4 s tail). Estimated total ≈ 4:17 (~257 s). Replace with measured per-step seconds after generation.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a page means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- GL → "G-L" · GL Codes → "G-L Codes" · GL Account Codes → "G-L Account Codes"
- POS → "P-O-S" · ALPR → "A-L-P-R"
- Shyne → "Shine"
- Surcharge → "sir-charge" · Payout → "pay-out"

### Scope notes (non-spoken)

- Menu-level tour of the nine Payments & Finance pages plus one detail (a Discount). Read-only throughout: **+ New Record**, edit, and save are never clicked.
- The Discount detail (Active Locations pattern) was not observable in the July 9 corpus (`settings-discounts-edit.html` 404). Step 4 narrates the pattern and points to WC-12-03; do not depict fabricated detail content.
- Most list data and seven of the nine KPI totals did not load during capture ("Failed to fetch"). Narration cites only the totals that did load (Discounts, Discount Types) and speaks the rest at the label level.
- Session-timeout ("Still there?") behavior is out of scope — it belongs to WC-01-03.

## Timed script

[00:00 | Step 1 — Payments & Finance group]
This is where the money rules live. <break time="1.4s" /> Open Settings, then the Payments and Finance group. Nine pages, one list. Between them they decide how a payment is taken, how a price gets adjusted, how tax is set, and how a sale lands in accounting. Learn to spot them, because most billing questions end on one of these.

[00:24 | Step 2 — Payment Types]
Start at Payment Types. <break time="1.4s" /> This is your tender list, the payment methods the register accepts. Three flags do the real work. Locked marks the system types you can't delete. Require Reference forces a number at the register. And Show as Bank Drop decides what counts toward the drawer drop.

[00:49 | Step 3 — Discounts]
Now Discounts. <break time="1.4s" /> The panels up top read the file at a glance: how many are active, how they split between dollars off and percent off. But the row that answers questions is Amount, next to Discount Type. That pair tells you fast whether a discount takes three dollars off or ten percent.

[01:15 | Step 4 — Open one Discount]
Open one discount and it behaves like a service. <break time="1.4s" /> A detail view, an Active Locations tab, the sites where it's live, and per-location overrides underneath. That's how one discount is three dollars off at one wash and two at another. We couldn't pull this exact screen from today's capture, so lean on the Services lesson as your reference until we grab it live. Look, don't save.

_[Director: the Discount detail 404'd in the July 9 corpus (PARKED). If it will not open on the recording tenant, hold on the Discounts list and overlay a "see WC-12-03 pattern (parked)" card. Never click Save; leave with Cancel or Back.]_

[01:45 | Step 5 — Discount Types]
Discount Types is the short list behind that column. <break time="1.2s" /> Four categories, nothing more. Whatever shows under Discount Type on the list you just saw is filed from here.

[02:01 | Step 6 — Surcharges]
Surcharges are the mirror of a discount. <break time="1.2s" /> Same idea, opposite sign. An added fee, with an amount, a code, and a taxable flag that decides whether tax rides on top of the fee.

[02:18 | Step 7 — Surcharge Types]
Surcharge Types carries one flag worth knowing. <break time="1.2s" /> Disallow Discounts. Switch it on, and a discount can't stack on a ticket that already has this surcharge. That single control settles a lot of pricing arguments.

[02:35 | Step 8 — Payout Percentage]
Payout Percentage is a band table. <break time="1.2s" /> Each row is a range, a start and an end, with a percentage inside it. A value drops into whichever band it lands in. Tiered, not flat.

[02:52 | Step 9 — Tax Rates]
Tax Rates feeds the rest of the platform. <break time="1.4s" /> Every rate here is what a service reaches for in its two tax slots. So when a wash rings up the wrong tax, don't start at the service. Start here, and check which rate is the default.

[03:14 | Step 10 — General Ledger Codes]
Down to accounting. General Ledger Codes. <break time="1.2s" /> One small catch worth remembering: the sidebar says General Ledger Codes, the page header says G-L Codes. Same page. These codes are what your exports post against, and a wrong one here is a classic month-end headache.

[03:35 | Step 11 — GL Account Codes]
G-L Account Codes is the partner list. <break time="1.2s" /> Same three columns, same shape. Here's the split: G-L Codes name the ledger lines, and G-L Account Codes tie them to accounts for the export. The two work as a pair.

[03:54 | Step 12 — Recap]
That's the whole group. <break time="0.8s" /> Nine pages, one sidebar. Tender in Payment Types. Price changes in Discounts and Surcharges. Tiered payouts, tax, and the two ledger lists. When a billing question comes in, you already know which page owns the answer. And you got there without touching a single setting.

_(Estimated total ≈ 4:17 / ~257 s at ~145 wpm, pending render. Replace with measured seconds after generation.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, navigation paths, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and the version line.
- Read-only throughout: **+ New Record**, edit, and save are never clicked. Step 4's Discount detail is parked (`settings-discounts-edit.html` 404 in the July 9 corpus); the pattern is narrated and cross-referenced to WC-12-03, with no fabricated detail content.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

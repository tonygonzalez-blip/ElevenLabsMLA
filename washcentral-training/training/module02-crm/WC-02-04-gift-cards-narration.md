# WC-02-04 — Gift Cards · Narration Script

**Verified against demo.washcentral.com on July 11, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (12 steps). (**Blocks s06 and s10 re-authored July 11, pending block re-render**; all other spoken lines unchanged.)

## Settings header

- **Status:** **s06 and s10 re-authored July 11, pending block re-render** (remaining blocks unchanged). Voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3. 12 blocks `WC-02-04-s01.mp3`…`WC-02-04-s12.mp3` plus a joined `WC-02-04-full-narration-v1.0.mp3`. Timestamps below are estimates at ~145 wpm plus break time plus a 0.4 s tail, pending render; estimated total ~193.7 s (~3:14).
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-02-04-s01.mp3` … `WC-02-04-s12.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the transition lands before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a control means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- CRM → "C-R-M"
- KPI → "K-P-I"
- Issuance → "ISS-yoo-anss"
- Shyne → "Shine"
- ALPR → "A-L-P-R" · POS → "P-O-S"
- Dollar figures and percentages are spoken naturally ("about nine percent", "a hundred dollars").

### Scope notes (non-spoken)

- Read-only tour of **CRM → Gift Cards**. No record is created, edited, or deleted.
- **Delete** and **+ Issue Gift Card** are write actions. Do not depict clicking either; issuing a card is never shown (Step 7 reads them and moves on).
- July 9 capture history: the four KPI tiles displayed "—" and the records table displayed "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." That failure mode is retained in s10 only as a spoken contingency ("if the table ever says it couldn't load, refresh"); the block now narrates the healthy July 11 state.
- **July 11 re-verification — s06 and s10 RE-AUTHORED, pending re-render.** The July 11 credentialed capture shows the page healthy: KPI tiles live (116,524 / $2053032.67 / 71,481 / 45,043), rows listing (first row 80016195493 · — · ACE24 · $11.00 · Active · Jan 10, 2026), and the list header reading a single record count, "116,524 records". The v1.0 rendered takes for s06 (old two-number subtitle) and s10 (July 9 error state) contradicted that; the spoken blocks below now match the live page. Re-render s06 and s10 and re-measure durations before assembly. The step 11 worked example is no longer parked (see guide step 11).
- Header **Search ⌘K** and **Ask Shyne** are covered in WC-01-02 and are not re-taught. The idle "Still there?" prompt is out of scope (WC-01-03).

## Timed script

[00:00 | Step 1 — Open Gift Cards]
Every prepaid card the network has sold lives on one screen. <break time="1.4s" /> This is the gift card portfolio. Four headline tiles up top, three insight panels, and a searchable card list below. On a support call, this is almost always where you start.

[00:19 | Step 2 — KPI band]
Four tiles run across the top. <break time="1.2s" /> How many cards exist, how much is still owed on them, how many are live, and how many are spent to zero. Read them left to right for the whole portfolio at a glance.

[00:37 | Step 3 — Issuance Trend]
First panel, issuance over the last year. <break time="1.2s" /> The line climbs, up about nine percent, with the running total in the corner. It tells you the program is growing before you open a report.

[00:53 | Step 4 — Balance Distribution]
Next to it, where the money sits. <break time="1.2s" /> Most cards carry small amounts; only a thin slice hold a hundred dollars or more. So a big disputed balance is already the unusual case.

[01:07 | Step 5 — Card Status]
The third panel is portfolio health. <break time="1.0s" /> Most active, a good share redeemed, a few expired. The same split as the status column, rolled into one bar.

[01:20 | Step 6 — Gift Card List]
Now the list itself. <break time="1.2s" /> One number sits under the title: the record count, a hundred sixteen thousand cards and change, the same figure as the total tile up top.

[01:34 | Step 7 — List actions]
Two buttons sit above the table. <break time="1.4s" /> Delete removes a card. Issue Gift Card creates one. Both write to real records, so we point and read, and never click either.

_[Director: do not click Delete or + Issue Gift Card, and never depict issuing a card. Point and read only.]_

[01:47 | Step 8 — Search & Filters]
Under the buttons, one search box. <break time="1.2s" /> Type a card number, a customer, a location, or a status, and the list narrows to the match. When a caller has the card in hand, this is the fast path.

[02:04 | Step 9 — Columns]
Six columns describe each card. <break time="1.2s" /> The number, who owns it, where it sold, what is left, whether it is still good, and when it last moved. Balance, status, last used carry most calls.

[02:19 | Step 10 — Live rows]
Now the rows themselves. <break time="1.4s" /> They load live, twenty-five cards to a page, thousands of pages deep. Where the customer cell shows a dash, no one is linked to that card. And if the table ever says it couldn't load, refresh before you quote a balance.

_[Director: July 11 capture shows the table healthy (rows listing, pager to page 4,661). Record the live rows; the couldn't-load line is spoken as a contingency only, never staged.]_

[02:39 | Step 11 — Balance lookup]
Here is the everyday move. <break time="1.4s" /> A customer reads you their card number. You drop it into the search, and the row returns the balance, the status, and the last-used date. Read those back and the call is answered.

_[Director: run this against a real card number from the live list (July 11 worked example: 80016195493 → $11.00 · Active · Jan 10, 2026). If the records error reappears, hold on the search box and re-roll later.]_

[02:57 | Step 12 — Recap]
So, the gift card screen. <break time="0.8s" /> Totals up top, three quick-read panels, and a list where every lookup lands. Find the card by number, read its balance and status, and you have handled almost every gift card call.

_(Estimated total: ~193.7 s ≈ 3:14 at ~145 wpm, pending render. Re-authored per-step estimates: s06 13.6 · s10 20.4. Timestamps are estimates until the audio is generated.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, the navigation path, and the numbered steps were left exact. Em dashes appear only in the `[mm:ss | Step N — target]` block headers (the established house format) and inside the verbatim error-banner quote.
- **Delete** and **+ Issue Gift Card** are never clicked and issuing a card is never depicted. Blocks s06 and s10 were re-authored July 11 against the healthy credentialed capture (single record-count header; live rows); the couldn't-load error is kept only as a spoken contingency in s10.
- Status: **s06 and s10 re-authored July 11, pending block re-render**; remaining blocks unchanged. Verification stamp current: **Verified against demo.washcentral.com on July 11, 2026.**

# WC-02-01 — Customer List · Narration Script

**Verified against demo.washcentral.com on July 11, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (15 steps). (**Block s08 re-authored July 11, pending block re-render**; all other spoken lines unchanged.)

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 15 blocks `WC-02-01-s01.mp3`…`WC-02-01-s15.mp3` + joined `WC-02-01-full-narration-v1.0.mp3` (233.52s ≈ 3:54). Step duration = audio + 0.4 s. Per-step render seconds: s01 10.53 · s02 13.17 · s03 16.93 · s04 11.39 · s05 13.56 · s06 12.83 · s07 14.52 · s08 19.72 · s09 15.23 · s10 23.33 · s11 16.51 · s12 19.23 · s13 7.31 · s14 12.75 · s15 20.51.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-02-01-s01.mp3` … `WC-02-01-s15.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Timestamps below are estimates** at ~145 wpm plus break time plus a 0.4 s tail; they will be replaced by measured render seconds once audio is generated. Estimated total ≈ 4:26.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what the screen means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- CRM → "C-R-M"
- KPI → "K-P-I"
- CUST- (customer id prefix) → "cust" (as in the first syllable of "customer")
- Retention Log, Churn Rate → plain English, no special handling

### Scope notes (non-spoken)

- Covers the Customer List end to end plus a read-only visit to the Retention Log and a live search demonstration. The header tools (**Search ⌘K**, **Ask Shyne**) and the account avatar are out of scope; they belong to WC-01-02.
- **Delete** and **+ Add Customer** are never clicked. They are named as out-of-scope, data-changing actions and deferred to their own lessons.
- The **Filters** panel opens and closes on camera. Its controls were captured open in the July 11 corpus (`crm-customers-filters-open`: FILTER BY FIELD — Name, Customer ID, License Plate, Email, Location, Membership Plan, Status, Sign Up Date, with ✕ Clear all / ✓ Apply Filters). The spoken block s07 narrates the badge and purpose only, which remains accurate.
- **July 11 re-verification — s08 RE-AUTHORED, pending re-render.** The July 11 capture shows eight columns: Customer, Location, Plan, Member Since, Status, Visits, Total Spend, Last Visit (PLAN $/MO is gone). The v1.0 rendered s08 audio speaks the old six-column set; the spoken block below now matches the live table. Re-render s08 and re-measure durations before assembly.
- The search demonstration types a name fragment and clears it. Do not read out specific returned rows; they render live at record time.

## Timed script

[00:00 | Step 1 — Open the Customer List]
Open C-R-M, then Customers. <break time="1.4s" /> This is the member database, and it's where most support calls begin. Every tool you need to find a customer sits on this one screen.

[00:14 | Step 2 — KPI strip]
Start at the top. <break time="1.0s" /> Four numbers frame the whole base: total customers, active members, at risk, and prospects. They cover every customer, not just the page in front of you. Read them first.

[00:29 | Step 3 — Insight cards]
Below the numbers, three cards. <break time="1.2s" /> One tracks member growth over the last year. Another splits active members by plan. The third grades customer health, low, medium, and high risk, at a glance. You read these; you don't click into them.

[00:47 | Step 4 — List card header]
Now the list card itself. <break time="1.0s" /> The eyebrow labels it the member database, and the title reads Customer List. This card holds the searchable table of every customer you have.

[01:01 | Step 5 — Action buttons]
Three buttons sit top-right of the card. <break time="1.4s" /> Retention Log opens a churn report we'll visit in a minute. Delete and Add Customer both change data, so we leave them alone today. Adding a customer gets its own lesson.

_[Director: do not click **Delete** or **+ Add Customer**. Hover **Retention Log** only; it is opened at Step 11.]_

[01:17 | Step 6 — Search box]
Just above the table, the search box. <break time="1.2s" /> Read the placeholder. It names exactly what you can search by: a name, a plate, an email, a location, or a plan. You never have to guess which field will match.

[01:35 | Step 7 — Filters]
Next to it, the Filters control. <break time="1.4s" /> The badge counts active filters. Right now it reads zero, so nothing is narrowing the list. Open it for a panel that trims the base down; any count above zero means the list is already filtered.

_[Director: open **Filters**, hold, then close it without changing anything; the badge stays 0. Panel contents confirmed in the July 11 corpus (FILTER BY FIELD panel; see guide step 7); do not click ✓ Apply Filters.]_

[01:54 | Step 8 — Columns]
Now the columns. <break time="1.0s" /> Eight of them: customer, location, plan, member since, status, then the member's numbers, visits, total spend, and last visit. Every header sorts. The checkbox column on the left selects rows, and on this tour those boxes stay empty.

[02:12 | Step 9 — Chips]
Look at one row across. <break time="1.2s" /> The plan and the status each show as a coloured chip. Active is green, inactive is grey, and the plan chip names the package. The colour is how a row's state reads in a half-second.

[02:30 | Step 10 — Pagination]
Drop to the footer. <break time="1.0s" /> Twenty-five rows a page, and the last page button reads sixty-five thousand. This table runs past a million and a half migrated records, so you search for a customer, not page to them. The strip up top counts a smaller headline figure that does not reconcile with the table, a known demo quirk, which is why the two counts differ.

[02:53 | Step 11 — Open Retention Log]
Click Retention Log. <break time="1.4s" /> This read-only page tracks members who left or nearly did. Its own four numbers frame it: total events, saves this month, cancellations, and the churn rate. No delete or add here. It is a log you read, not a list you edit.

[03:15 | Step 12 — Retention Log body]
The table tells the story. <break time="1.2s" /> Each row is one event: date, customer, site, event type, and outcome. A green Saved chip means you kept them, Cancelled means you lost them, and Downgraded and At Risk fall in between. When a churn question comes in, the answer lives here.

[03:36 | Step 13 — Return to the list]
Head back to the list. <break time="1.0s" /> The breadcrumb or the sidebar both drop you on the Customer List again, right where you started.

[03:46 | Step 14 — Search demonstration]
Now use the search. <break time="1.4s" /> Type the first few letters of a name you can see, then hit Search. The table collapses to just the matches. On a list this size, that is how you land on the right customer in seconds.

_[Director: type a fragment of a name showing in the list; the returned rows render live and were not in the July 9 corpus.]_

[04:05 | Step 15 — Clear and recap]
Clear the box. <break time="1.2s" /> The full list snaps back, untouched. That is the Customer List: numbers up top, health in the cards, a search that names its own fields, sortable columns with colour-coded chips, and a Retention Log one click away. Learn this screen and C-R-M support gets faster.

_(Estimated narration total ≈ 266.3 s ≈ 4:26. Per-step estimates, seconds: s01 13.8 · s02 15.1 · s03 18.2 · s04 13.4 · s05 16.7 · s06 17.3 · s07 19.2 · s08 18.4 (re-authored July 11) · s09 18.2 · s10 23.0 · s11 21.2 · s12 21.0 · s13 10.5 · s14 18.8 · s15 21.5. Replace with measured render seconds after generation.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, the navigation path, the column names, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and the mandated `TBD — parked` string used in the guide.
- **Delete** and **+ Add Customer** are never clicked; both are named as out-of-scope. The **Filters** panel and the live search results are flagged for record-time capture (not in the July 9 corpus).
- Status: **s08 re-authored July 11, pending block re-render** (against the guide v1.1 eight-column table); remaining blocks unchanged. Timestamps above are estimates pending render.
- Verification stamp current: **Verified against demo.washcentral.com on July 11, 2026.**

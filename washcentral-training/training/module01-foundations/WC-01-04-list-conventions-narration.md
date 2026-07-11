# WC-01-04 — Interface conventions: lists · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (12 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 12 blocks `WC-01-04-s01.mp3`…`WC-01-04-s12.mp3` + joined `WC-01-04-full-narration-v1.0.mp3` (199.65s ≈ 3:20). Step duration = audio + 0.4 s. Per-step render seconds: s01 15.07 · s02 15.96 · s03 15.15 · s04 16.35 · s05 17.87 · s06 13.4 · s07 16.12 · s08 16.59 · s09 19.41 · s10 14.37 · s11 17.01 · s12 17.55.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-01-04-s01.mp3` … `WC-01-04-s12.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a control means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- KPI → "K-P-I" · CRM → "C-R-M"
- Shyne → "Shine" · ALPR → "A-L-P-R" · POS → "P-O-S"
- "rows per page" → spoken plainly; the options are read as "twenty-five, fifty, or a hundred"
- Large counts are spoken in words ("a million and a half"), never digit by digit

### Scope notes (non-spoken)

- Read-only tour of two CRM lists: the Customer List and the Gift Card List. No data is changed.
- **Delete**, **+ Add Customer**, and **+ Issue Gift Card** are never clicked; they change or issue records and only their positions are noted.
- The **Filters** button and its active-filter count are shown; the filter panel's internal controls are parked (not captured open in the July 9 corpus) and are not named on screen.
- The Tickets list is mentioned only as a written cross-reference in the guide; it is not depicted here.

## Timed script

[00:00 | Step 1 — Customer List]
Open the Customers list. <break time="1.4s" /> Notice how the page stacks up. Summary numbers on top, insight cards in the middle, the table underneath. Every list in WashCentral is built this way, so the shape you learn right here is the shape you'll read on every screen after it.

[00:21 | Step 2 — KPI strip]
Start at the four tiles up top. <break time="1.4s" /> They summarize the whole customer base in one glance: how many customers, how many active members, how many at risk, how many prospects. Read these before the table, because they frame everything the rows are about to show you.

[00:42 | Step 3 — Insight cards]
Below the tiles, three cards. <break time="1.4s" /> One tracks growth over the year, one shows how members split across plans, one rates overall health from low to high. It's the trend and the risk at a glance, so you catch the story before you ever sort a column.

[01:02 | Step 4 — List card header]
Now the list card itself. <break time="1.4s" /> Its title and the small label above it tell you which dataset you're looking at. Off to the right sit the action buttons. Two of them, Delete and Add Customer, change records, so we leave them alone today and just note where they live.

_[Director: do not click Delete or + Add Customer; point them out only.]_

[01:24 | Step 5 — Search box]
Look at the search box. <break time="1.4s" /> The grey placeholder inside it isn't decoration. It spells out every field the search will match: name, plate, email, location, plan. When you're not sure how a list can be searched, that hint answers it for you.

[01:43 | Step 6 — Filters]
Next to it, the Filters button. <break time="1.4s" /> Watch the little number on it. Zero means nothing is filtered and you're seeing the full list. Anything higher means someone narrowed it, which is the first thing to check when a customer swears a record is missing.

_[Director: open the Filters panel to show it exists, then close it. Its contents are parked (not in the July 9 corpus); do not caption individual panel controls.]_

[02:03 | Step 7 — Columns]
Run your eye across the headers. <break time="1.4s" /> Six columns, and every one sorts, so you can order by plan, by join date, by monthly price, whatever the question needs. The checkboxes down the left let you pick rows for the Delete button. We won't check any.

[02:24 | Step 8 — Chips]
Look at the coloured chips in a row. <break time="1.4s" /> The plan chip names what the customer pays for; the status chip is green for active, grey for inactive. Colour does the work, so you read a customer's standing in a glance instead of parsing text.

[02:44 | Step 9 — Pagination]
Drop to the footer. <break time="1.4s" /> The rows-per-page control and the page arrows are how you travel a big table. And these are big: this list runs past a million and a half migrated records. The tiles said two thousand, the pages say millions. Both are right, they're just counting different things.

[03:07 | Step 10 — Gift Cards]
Now switch to Gift Cards. <break time="1.4s" /> Same page, different subject. Tiles across the top, three insight cards, then the list. The words changed to cards and balances, but the skeleton is identical to the one you just learned. That's the whole point.

[03:25 | Step 11 — Gift Cards controls]
Read the controls here. <break time="1.4s" /> The search hint, the columns, and the rows-per-page choices, twenty-five, fifty, or a hundred, all match the Customer List. If the table reads couldn't load records, that's a data hiccup, not an empty list, and the dashes in the tiles are the same story.

[03:47 | Step 12 — Recap]
That's the pattern. <break time="1.0s" /> KPI strip, insight cards, search and filters, sortable columns with chips, and a pager at the bottom. Learn it on these two lists and you've learned it everywhere. From here on, every list in WashCentral reads the same, no matter which module you're in.

_(Estimated narration total: ~248 s ≈ 4:08 at 145 wpm. Final per-step and joined durations to be measured at render.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, placeholders, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and the mandated `TBD — parked` token where quoted.
- Filters panel left unopened for captioning (contents parked, not in the July 9 corpus); the button and its active-filter count are shown. Delete, + Add Customer, and + Issue Gift Card are never clicked.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

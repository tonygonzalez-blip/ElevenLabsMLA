# WC-03-01 — Tickets List · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (12 steps).

## Settings header

- **Status: READY FOR GENERATION.** WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 12 blocks `WC-03-01-s01.mp3` … `WC-03-01-s12.mp3` plus a joined `WC-03-01-full-narration-v1.0.mp3`. Audio is rendered later once the ElevenLabs key is available; it is not set in this session.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`), project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3**, pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-03-01-s01.mp3` … `WC-03-01-s12.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Timestamps below are estimates**, computed at ~145 wpm plus break time plus the 0.4 s tail. They are pending render; re-measure with ffprobe and re-align to the click before final assembly. Estimated total ≈ 3:31.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a region is pointed to or a screen settles. Each action cue is followed by `<break time="1.4s" />` (0.8–1.2 s on lighter cues) so the movement lands before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what the page means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- Shyne → "Shine"
- Ctrl+K → "control K"; ⌘K → "command K"
- KPI → "K-P-I" · ALPR → "A-L-P-R" · POS → "P-O-S"
- Total Tickets figure (126,237,706) → read as "over one hundred twenty-six million," never digit by digit.
- Last page number (5,049,509) → read as "just past five million," never digit by digit.
- Groveport → "Grove-port" (a location string in the example row; not read aloud in the script)

### Scope notes (non-spoken)

- Read-only lesson: nothing is clicked. **Export** is located, never clicked (step 7). A **TICKET #** link is never opened; the single-ticket view is WC-03-02 (step 9). Sidebar siblings are not followed; they are WC-03-03 (step 11).
- The three 30-day KPI tiles (**Paid (30d)**, **Not Washed (30d)**, **Revenue (30d)**) render a dash in the July 9 corpus. Narrate the structure and the dash-means-no-value point, not a figure.
- The **Filters** panel internals were not captured; the script locates the control only.
- Session-timeout ("Still there?") behavior is out of scope; it belongs to WC-01-03.
- **July 11 re-verification — RE-RENDER REQUIRED for s11.** The July 11 credentialed capture shows the Transactions sidebar with NINE pages: a **Refund Approvals** entry now sits between Payments and Payouts (observed consistently across every July 11 sales-page digest). The rendered s11 audio speaks "Eight pages live under Sales... there's no Refunds Approval page. Approvals run through security levels now.", which contradicts the live sidebar. Do not edit the spoken line here; re-render s11 after sign-off and re-measure durations. The Tickets list page itself was not re-captured July 11; the other blocks stand on the July 9 corpus.

## Timed script

[00:00 | Step 1 — Sales / Tickets header]
This is where every ticket in the business lands. <break time="1.4s" /> On the rail the module says Sales. The page header says Transactions. Same place, two names, so don't let the wording throw you.

[00:15 | Step 2 — KPI band]
Now the numbers up top. <break time="1.4s" /> One tile counts every migrated ticket, past a hundred and twenty-six million. The other three cover the last thirty days, and right now they read as a dash. A dash means no value loaded, not zero.

[00:34 | Step 3 — Ticket Volume]
First card, Ticket Volume. <break time="1.2s" /> It trends the last twelve months and tells you which way the line is heading. It answers whether business is up, not what any one ticket did.

[00:48 | Step 4 — By Status]
Middle card, By Status. <break time="1.4s" /> This is the breakdown you'll lean on. Most tickets are paid and washed. A quarter are paid but not yet washed. A small slice is voided. Know the normal split, and the odd day jumps out at you.

[01:07 | Step 5 — Ticket Health]
Right card, Ticket Health. <break time="1.2s" /> Three quick percentages: how many paid, how many not washed, how many voided. It's the one-glance pulse for whatever scope you're looking at.

[01:20 | Step 6 — Search Tickets card]
Drop to the Search Tickets card. <break time="1.4s" /> With more than a hundred and twenty-six million tickets underneath, you never scroll blind. Type what you already know, or narrow it with Filters, then search. And keep this straight: this button queries tickets; the Search up in the header jumps between pages.

[01:42 | Step 7 — Ticket List header & Export]
Under that, the ticket list itself. <break time="1.4s" /> The count on the card is that same hundred-and-twenty-six-million, restated. Top-right sits Export. Find it, and leave it. In training we locate the data-out buttons; we don't fire them.

_[Director: point to Export, do not click it. Export stays off during training.]_

[01:59 | Step 8 — Columns]
Now the columns. <break time="1.2s" /> Seven of them, each a way to read or sort the list: where it rang up, its number, when, how much, its status, how it was paid, and who it belongs to. Every header sorts, and every row has a checkbox.

[02:18 | Step 9 — Example row]
Take one row. <break time="1.4s" /> The ticket number is a link. Click it and you'd open that single ticket, which is the next lesson, so leave it alone here. And where Customer shows a dash, no customer was tied to that sale.

_[Director: read the row, do not click the TICKET # link. The single-ticket view is WC-03-02.]_

[02:37 | Step 10 — Pagination]
Glance at the pager. <break time="1.2s" /> Twenty-five to a page, and the last page number sits just past five million. That's the same mountain of tickets said a different way. It's exactly why you filter before you page.

[02:53 | Step 11 — Sales sidebar]
Last, the sidebar. <break time="1.4s" /> Eight pages live under Sales, and Tickets is only the first. The other seven get their own lesson. If you trained on the old system, notice what moved: Adjustments went to Inventory, and there's no Refunds Approval page. Approvals run through security levels now.

[03:14 | Step 12 — Recap]
That's the Tickets page. <break time="0.8s" /> Read health from the band and the three cards, filter before you browse, and know the list and where Export sits. Master this one page, and every transaction question you get starts right here.

_(Estimated narration total ≈ 210.5 s ≈ 3:31. Timestamps are estimates pending render; re-measure and re-align before assembly.)_

## Generation log

- Script v1.0 written to the project narration craft standard: a 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Status **READY FOR GENERATION**: no audio rendered in this session (no ElevenLabs key set). Per-step durations above are estimates at ~145 wpm; measure with ffprobe at render time and set step duration = audio + 0.4 s.
- Humanizer pass (per CLAUDE.md §6): spoken prose kept clear of the listed AI tells (no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice) and free of em and en dashes. The only em dashes are in the `[mm:ss | Step N — target]` block headers (established house format). Verified UI labels, the navigation path, and the numbered steps were left exact.
- Legacy/menu differences are spoken as the project's own verified map, attributed to DISCREPANCIES.md #10 (see the guide's step 11 migration note). No pricing, no roadmap, no credentials, no customer-identifiable data are spoken.
- Nothing is clicked in the script: Export is located (step 7), the TICKET # link is not opened (step 9), and sidebar siblings are not followed (step 11).
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

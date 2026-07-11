# WC-03-03 — The rest of the Transactions menu · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (9 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. Audio is rendered later, once the ElevenLabs key is available in the environment. 9 blocks `WC-03-03-s01.mp3`…`WC-03-03-s09.mp3` + joined `WC-03-03-full-narration-v1.0.mp3`. Timestamps below are estimates at ~145 wpm plus break time plus a 0.4 s tail; they firm up at render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-03-03-s01.mp3` … `WC-03-03-s09.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and page load land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what each page means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- KPI → "K-P-I" · CRM → "C-R-M" · POS → "P-O-S" · ALPR → "A-L-P-R"
- 30d → "thirty days" (spoken); "HA" in "Total HA Transactions" is spoken as "House Account"
- Shyne → "Shine"

### Scope notes (non-spoken)

- Menu tour of the seven Transactions pages other than Tickets. List and landing level only; no page is opened into a detail, form, or export.
- Do not depict clicking **Export** (download action) or opening **+ New Record**. Only sidebar entries are clicked.
- On July 9 all seven lists showed **Couldn't load records (Failed to fetch)**; the tour narrates KPIs and columns, not row values. Do not narrate specific records.
- **July 11 re-verification — RE-RENDER REQUIRED for s01 and s09.** The July 11 capture shows a ninth sidebar entry, **Refund Approvals**, between Payments and Payouts. s01's "The Sales module keeps eight pages in one sidebar" and s09's "Seven pages, seven questions" now contradict the live menu. Do not edit the spoken lines here; re-render after sign-off (and decide whether Refund Approvals joins this tour or gets its own lesson — its page is not yet captured). Lesser July 11 notes, not re-render triggers: Ticket Details grew to twelve columns (s02 does not enumerate columns); Gift Card Transactions rows showed dashes in the BALANCE column at capture, so s07's "running balance after each line" should be spot-checked on a live row before recording.
- Payment-decline diagnosis and shift reconciliation get their own playbooks (PB-4, PB-5); keep this at the "which page" level.

## Timed script

[00:00 | Step 1 — The Transactions menu]
The Sales module keeps eight pages in one sidebar, all under the header Transactions. <break time="0.8s" /> You already know the first one, Tickets, from the last two lessons. The other seven are the rest of the story: line items, payments, cash out, drawers, declines, gift cards, and house accounts. This is a map, not a deep dive. By the end you'll open the right one without thinking.

[00:28 | Step 2 — Ticket Details]
Start where you already are, on Ticket Details. <break time="1.2s" /> Tickets gave you one row per sale. This page breaks each sale open: one row per line rung. Every service, every discount, every adjustment, with the cashier and location right beside it. When a customer questions a charge and you need to see what was actually rung, not just the total, this is the view that shows it.

[00:57 | Step 3 — Payments]
Click Payments. <break time="1.4s" /> Every completed payment across the network, searchable by ticket number. Method and amount tell you how a given sale was tendered: card, cash, or account. One thing to hold onto: this page only records payments that went through. Approvals and declines aren't its job. Declines are tracked on their own page, which is exactly where we go next.

[01:23 | Step 4 — Payouts]
Now Payouts. <break time="1.4s" /> This is cash leaving the drawer instead of coming into it: petty cash, or a vendor paid on delivery. Read across the columns and you see why it matters. Every payout is stamped with a shift number, a cashier, and the terminal it came from. That trail is what lets a manager account for cash that left the register during a shift.

[01:51 | Step 5 — Shifts]
Click Shifts. <break time="1.4s" /> Notice the page gets simpler here: one count, no charts. A shift is a single drawer session, opened and closed on one terminal. This is where you live when a drawer won't balance. Opening cash, closing cash, and every payment and payout in between, that's the reconciliation, and this page lines it up in one row.

[02:17 | Step 6 — Declined Credit Card Log]
Here's the page I promised, the Declined Credit Card Log. <break time="1.4s" /> A member swears they paid, but their account shows nothing. Start here, every time. The reason column tells you why the card was turned down, and the attempts column tells you how many times the system retried before it gave up. That usually answers the question before you even call the gateway.

[02:45 | Step 7 — Gift Card Transactions]
Click Gift Card Transactions. <break time="1.4s" /> Every load and every redeem against a gift card lands here. Type a card number into search and you get its whole history, with the running balance after each line. One caveat the page states in plain sight: this is completed activity, not card status. To issue a card or check whether it's active, that's CRM Gift Cards, a different page.

[03:13 | Step 8 — House Account Transactions]
Last page, House Account Transactions. <break time="1.4s" /> These are sales billed to an account instead of paid at the register, the fleets and businesses that run on terms. Each row ties a ticket to the account that owes for it. That's the feed behind the balances and the invoices you'll work in CRM House Accounts. Here, it's just the raw charges.

[03:40 | Step 9 — Recap]
That's the whole menu. <break time="0.8s" /> Seven pages, seven questions. Line items on a sale? Ticket Details. How was it paid? Payments. Cash out of the drawer? Payouts. Drawer won't balance? Shifts. Says they paid but we show declined? The Declined log. Tracing a gift card? Gift Card Transactions. Billed to an account? House Account Transactions. Learn the map now, because for the rest of your support work, knowing the right page is half the job.

_(Estimated total: about 4:11 at ~145 wpm. Final per-step seconds and the joined total are filled in at render. Status: READY FOR GENERATION.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose kept clear of the listed AI tells: no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, page names, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and the settings notes.
- Grounding: every page name, KPI, column, card, and placeholder spoken or referenced traces to the July 9 corpus digests and screenshots for `sales-transaction-details`, `sales-payments`, `txn-payouts`, `txn-shifts`, `txn-declined`, `txn-gift-transactions`, `txn-house-transactions`. No row values are narrated (all lists returned Failed to fetch on July 9).
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

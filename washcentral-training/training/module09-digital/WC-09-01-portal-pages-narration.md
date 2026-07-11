# WC-09-01 — Portal pages · Narration Script

**Verified against demo.washcentral.com on July 11, 2026.** v2.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (12 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 12 blocks `WC-09-01-s01.mp3`…`WC-09-01-s12.mp3` + joined `WC-09-01-full-narration-v1.0.mp3` (230.42s ≈ 3:50). Step duration = audio + 0.4 s. Per-step render seconds: s01 13.32 · s02 9.72 · s03 17.16 · s04 15.88 · s05 13.4 · s06 17.16 · s07 13.56 · s08 24.69 · s09 25 · s10 25.31 · s11 24.45 · s12 25.97.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Timestamps are estimates** at ~145 wpm plus break time plus a 0.4 s tail, pending render. Estimated per-step seconds: s01 15.9 · s02 13.8 · s03 22.1 · s04 17.1 · s05 16.3 · s06 20.4 · s07 17.1 · s08 29.1 · s09 27.9 · s10 27.9 · s11 27.9 · s12 29.1. Estimated total ≈ 264.6 s (≈ 4:25).

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a page means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- KPI → "K-P-I"
- Shyne → "Shine" (Ask Shyne sits in the header; it is not spoken in this lesson)
- ALPR → "A-L-P-R" · POS → "P-O-S"

### Scope notes (non-spoken)

- Tour of the **CUSTOMER PORTAL** group inside the **Digital** module.
- **July 11, 2026:** all four sibling pages are live and captured via in-app sidebar navigation (direct URLs still 404 — the sidebar is the front door, voiced in s12 without reading the error aloud). Blocks s08–s11 open each sibling read-only per guide v2.0 steps 8–11: booking wizard first screen only; message inbox, billing log, and notification list read without opening a row. Spoken figures come from the `portal-*-inapp.json` digests (Messages 14 unread / 28 open / 3.2 hrs; Notifications 12 active / 840 sent today; the five-step wizard and its three service categories).
- Original July 9 note, kept for history: only **Portal Members** resolved then; the four siblings 404'd and their contents were parked. That state is cleared.
- **Portal Messages** and **Portal Notifications** are send-type surfaces. The script reads their list pages and never depicts composing or sending anything; the booking wizard is never advanced (**Continue →** untouched). **Export** is not clicked anywhere.
- The booking page's "atlas car wash" branding is a demo-tenant artifact (guide Notes); the narration says "its own branding" and never reads the brand name aloud.
- Session-timeout ("Still there?") behavior is out of scope — it belongs to lesson 1.3.

## Timed script

[00:00 | Step 1 — Digital / Customer Portal group]
Open the Digital module. <break time="1.4s" /> The sidebar splits in two. The top group, Customer Portal, runs the surfaces your members sign into. Five entries. The mobile pages sit below, but those are the next lesson.

[00:16 | Step 2 — Open Portal Members]
Click Portal Members. <break time="1.4s" /> This is your roster of everyone who holds a portal login. When a customer says the website won't let them in, this is where you start.

[00:30 | Step 3 — KPI strip]
Four numbers across the top. <break time="1.0s" /> Registered members, how many were active this month, how many joined this week, and the share who reach you on mobile. One glance sizes the portal and shows how live it is. That mobile share matters, since most portal traffic now comes through the app.

[00:52 | Step 4 — Insight cards]
Below sit three cards. <break time="1.0s" /> Growth over the year, the plan mix with unlimited monthly the biggest slice, and account health split into active, inactive, and suspended. Watch that suspended slice; it's where locked-out members surface before they call.

[01:09 | Step 5 — Member List card & toolbar]
Now the roster itself. <break time="1.0s" /> New Record and Export sit top-right, a search box and Filters just under them. Today you're only reading, so leave Export alone. It sends data out, and this is a look-only tour.

[01:25 | Step 6 — Columns]
Six columns. <break time="1.0s" /> Name, email, when they joined, their plan, portal status, and last login. Portal status is your first stop when someone can't reach the website: it tells you whether their access is even active. Last login backs it up, showing when they were really here.

[01:46 | Step 7 — Pagination / read-only]
Down at the foot: rows per page, a record count, and the pager. <break time="1.0s" /> Reading, paging, and searching change nothing. New Record would open a create form, but that form didn't load during verification, so we leave it parked.

[02:03 | Step 8 — Booking Page (Customer)]
Back to the sidebar. Click Booking Page. <break time="1.4s" /> The admin chrome disappears. What loads is the customer's own booking site, with its own branding and a five step wizard that runs from service to confirm. Step one offers three service categories: an inspection, an oil change, and detailing. Read that first screen, then stop. Advancing the wizard books a real visit, so Continue never gets clicked.

_[Director: read step 1 of the wizard only; never click Continue → or advance the wizard. Return to the admin sidebar to move on.]_

[02:32 | Step 9 — Portal Messages]
Portal Messages next. <break time="1.4s" /> This is where member messages land and get worked. Fourteen sit unread right now, twenty eight are open, and responses average around three hours. Every row carries a status, a priority, and an owner, so a billing question and a cancellation request never look alike. Replying reaches a real customer. We read the list and touch nothing.

_[Director: open the page and read the list only; do not open a row, compose, or reply.]_

[03:00 | Step 10 — Portal Billing]
Portal Billing sits just under it. <break time="1.4s" /> A running log of billing events on the portal side. Card updates, plan changes, auto renewals, and the failures that turn into phone calls. When a member asks why a card was declined, the action and status columns tell that story in one row. Every line here is live money. Read it, always; touch it, never.

[03:28 | Step 11 — Portal Notifications]
Last entry, Portal Notifications. <break time="1.4s" /> The automated sends. A welcome email fires when an account is created, and a renewal reminder goes out a week ahead. The list tracks each one's audience, open rate, and status. Twelve are active, and more than eight hundred went out today alone. These reach real members, so nothing here is ever sent, created, or edited in training.

_[Director: read the list only; do not send, create, or edit a notification.]_

[03:56 | Step 12 — Recap]
So that's the Customer Portal group. <break time="1.0s" /> Five entries, and you have now read all five. Portal Members for the roster and login trouble. The booking page for what the customer actually sees. Messages for the inbox, Billing for the money log, Notifications for the automated sends. Reach them from the sidebar, since a pasted address still fails. And read everything without sending, booking, or exporting a thing.

_(Estimated narration total: ≈ 264.6 s ≈ 4:25, pending render. All five group pages are live via in-app sidebar navigation; direct URLs still 404 — see the guide's Notes.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, the navigation path, and the numbered steps were left exact. Em dashes appear only in the timed-block headers (the house `[mm:ss | Step N — target]` format) and in the non-spoken director notes and this log.
- Send-type surfaces (Portal Messages, Portal Notifications) are read at list level only; no compose, reply, or send flow is depicted. The booking wizard is never advanced. Export is not clicked.
- v1.0 history: four of the five group pages (Booking Page (Customer), Portal Messages, Portal Billing, Portal Notifications) returned HTTP 404 on July 9; v1.0 named each and parked its contents.
- **July 11, 2026:** all four sibling pages captured live via in-app navigation; parked markers cleared in guide v2.0 and shot list v2.0. Blocks s08–s12 contradicted the platform and the status moved to PARTIAL RE-AUTHOR pending rewrite. No audio was ever rendered from v1.0, so nothing approved was discarded.
- **July 11, 2026 — v2.0 re-author.** Blocks s08–s12 rewritten against guide v2.0 steps 8–12 and the `portal-*-inapp.json` digests: the customer booking wizard's first screen (read only, never advanced), the message inbox KPIs and row shape, the billing activity log and its action/status read, the automated-notification list, and a five-page recap with the sidebar-only route. Blocks s01–s07 unchanged (the Portal Members create-form parked note in s07 remains accurate — the form is still uncaptured per guide Notes). Timestamps recomputed at ~145 wpm; new estimated total ~4:25. Humanizer craft rules re-applied to the new blocks. Status: **READY FOR GENERATION**.
- Script text stamp updated to **July 11, 2026**, matching the v2.0 guide and shot list.

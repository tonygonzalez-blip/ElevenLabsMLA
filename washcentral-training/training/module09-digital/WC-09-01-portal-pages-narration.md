# WC-09-01 — Portal pages · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (12 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — audio is rendered later once the ElevenLabs key is available (not set in this session). Voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3. 12 blocks `WC-09-01-s01.mp3`…`WC-09-01-s12.mp3`, one TTS call per step, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Timestamps are estimates** at ~145 wpm plus break time plus a 0.4 s tail, pending render. Estimated per-step seconds: s01 15.9 · s02 13.8 · s03 22.1 · s04 17.1 · s05 16.3 · s06 20.4 · s07 17.1 · s08 14.6 · s09 14.2 · s10 13.0 · s11 14.2 · s12 24.8. Estimated total ≈ 203.5 s (≈ 3:24).

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

- Menu-level tour of the **CUSTOMER PORTAL** group inside the **Digital** module.
- Only **Portal Members** resolved on the July 9 verification pass. **Booking Page (Customer)**, **Portal Messages**, **Portal Billing**, and **Portal Notifications** returned an HTTP 404; their contents are parked (NEW parked item), and the script names each entry without claiming its contents.
- **Portal Messages** and **Portal Notifications** are send-type surfaces. Do not depict composing or sending anything. **Export** on Portal Members is not clicked.
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
Back to the sidebar. <break time="1.0s" /> Booking Page is the customer-facing booking surface. On our verification pass the page itself didn't open, so we name the entry and hold its contents until it does.

_[Director: hover the sidebar entry; do not click. The target returns a 404 as of July 9.]_

[02:17 | Step 9 — Portal Messages]
Portal Messages next. <break time="1.0s" /> It's the portal's messaging surface, and messaging is a send-type area we never open in training. We locate it and move on, without composing or sending a thing.

_[Director: hover only; do not open any compose or send flow.]_

[02:32 | Step 10 — Portal Billing]
Portal Billing sits just under it. <break time="1.0s" /> The portal-side billing surface. Same story: the page didn't resolve for us, so the entry is confirmed and its contents stay parked.

[02:44 | Step 11 — Portal Notifications]
Last entry, Portal Notifications. <break time="1.0s" /> Another send-type surface, so we only point to it, never sending from here. Like Messages, it didn't open on the July pass, so its contents stay parked.

_[Director: hover only; do not send a notification.]_

[02:59 | Step 12 — Recap]
So that's the Customer Portal group. <break time="0.8s" /> Five entries. Portal Members reads in full today: the KPIs, the health cards, and the roster you check for login trouble. The other four are named and waiting on their pages. When a portal question lands, this is the group you open, and you read it rather than send from it.

_(Estimated narration total: ≈ 203.5 s ≈ 3:24, pending render. Four of the five group pages returned 404 on July 9 and are parked — see the guide's Notes.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, the navigation path, and the numbered steps were left exact. Em dashes appear only in the timed-block headers (the house `[mm:ss | Step N — target]` format) and in the non-spoken director notes and this log.
- Send-type surfaces (Portal Messages, Portal Notifications) are located only; no compose or send flow is depicted. Export is not clicked.
- Four of the five group pages (Booking Page (Customer), Portal Messages, Portal Billing, Portal Notifications) returned HTTP 404 on July 9; the script names each and parks its contents (NEW parked item).
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

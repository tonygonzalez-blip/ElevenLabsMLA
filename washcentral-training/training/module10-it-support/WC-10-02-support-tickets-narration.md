# WC-10-02 — Support Tickets · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the canonical spec, guide, and shot list one-to-one (12 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 12 blocks `WC-10-02-s01.mp3`…`WC-10-02-s12.mp3` + a joined `WC-10-02-full-narration-v1.0.mp3` once rendered. Audio is generated later when the ElevenLabs key is available; it is not set in this session. Timestamps below are estimates pending render (~145 wpm + break time + 0.4 s tail).
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-10-02-s01.mp3` … `WC-10-02-s12.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a panel means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- POS → "P-O-S"
- KPI → "K-P-I"
- Shyne → "Shine"
- ALPR → "A-L-P-R"
- Ticket IDs (TKT-4201, etc.) and location codes (MLAS, SSNB) are not read aloud; the script narrates the ticket's meaning, not its code.

### Scope notes (non-spoken)

- Read-only lesson except step 11, which opens **+ New Record** and cancels without filing. The blank form's field layout is parked (New Record form probe 404'd on July 9); do not describe fields that were not observed.
- **By Category** is shown as a horizontal bar breakdown, not a donut (plan/curriculum say "donut"). Narrate the mix, not the chart shape.
- The idle **Still there?** timeout prompt is out of scope — see lesson 1.3.
- **Export** and **Ask Shyne** are not exercised.

## Timed script

[00:00 | Step 1 — Support Tickets page]
This is Support Tickets, the queue your team works inside WashCentral. <break time="1.4s" /> It's the platform's own help desk, separate from the cross-customer view in the last lesson. Everything about the day's support load lives on this one screen.

[00:21 | Step 2 — KPI row]
Start at the top. <break time="1.2s" /> Four counters frame the backlog before you read a single row: what's open, what's in progress, what closed today, and how long the average ticket takes to resolve. One look tells you whether the queue is calm or backed up.

[00:41 | Step 3 — Ticket Volume]
Now the left panel. <break time="1.2s" /> This is the twelve-month trend, not today's numbers. Volume is climbing, up seven percent over the year. Handy context when a client asks whether their run of issues is unusual.

[01:00 | Step 4 — By Category]
The middle panel breaks tickets down by type. <break time="1.4s" /> Billing leads, then technical, then feedback and general. When you're deciding where the team's hours go, this is the split that says billing questions are the heaviest load right now.

[01:19 | Step 5 — Ticket Health]
On the right, the health panel. <break time="1.2s" /> Most of the queue is already resolved, a smaller share in progress, and a thin band still open. Read across, it's a quick pulse on whether work is getting closed or piling up.

[01:38 | Step 6 — Ticket List]
Below the summary sits the list itself. <break time="1.4s" /> This is where you actually work. Two buttons ride the top corner: one opens a brand-new ticket, the other exports the list. We'll open a new one shortly. We never export while recording.

[01:58 | Step 7 — Search & Filters]
Above the table, a search box and a filter control. <break time="1.2s" /> Type a ticket number or a few words of the subject to jump straight to it, or open the filters to narrow by field. On a busy queue, this is how you find one ticket fast.

[02:19 | Step 8 — Columns]
Read the column headers. <break time="1.2s" /> Ticket number, subject, location, priority, status, owner, and created date. The two you'll lean on most are priority, for what to grab first, and the owner, for who already has it.

[02:36 | Step 9 — Example rows]
Now the rows. <break time="1.4s" /> A POS receipt problem in progress, a billing dispute still open, a membership that won't activate, a tunnel emergency-stop already resolved. Priority runs from critical down to medium, and each ticket names a person or a team on the hook for it.

[02:58 | Step 10 — Pagination]
At the foot of the list, the page controls. <break time="1.2s" /> Rows per page, a simple counter, and pager arrows. One quirk worth knowing: the card says eighteen records while only four load here. In the demo tenant, treat those four as samples and the counts as stand-ins.

[03:19 | Step 11 — New Record]
Now open a new ticket. <break time="1.4s" /> This is the one write action in the lesson. Open the blank form, look it over, then back out without saving and without touching a field. We're documenting where a new ticket starts, not filing one.

_[Director: click + New Record, hold, then cancel without changing a field; never click Save or Submit. The blank form's layout is parked: TBD — parked (New Record form 404'd on July 9).]_

[03:39 | Step 12 — Recap]
That's the whole page. <break time="1.0s" /> The counters give you the backlog, the middle panels tell you what kind of work it is and how much is cleared, and the list hands you each ticket with its priority and its owner. Enough to triage before you open a single one.

_(Estimated total: ~4:00 pending render. Timestamps are estimates at ~145 wpm + break time + 0.4 s tail; re-measure with ffprobe after generation and align to each click.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice throughout, and no em or en dashes in the spoken lines. Verbatim UI labels, the navigation path, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and inside the mandated parked-item string, quoted verbatim.
- New Record opened and cancelled only (step 11); no ticket is filed and no field is described that was not observed (form layout parked — New Record probe returned a 404 on July 9).
- **Export** and **Ask Shyne** left unexercised.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

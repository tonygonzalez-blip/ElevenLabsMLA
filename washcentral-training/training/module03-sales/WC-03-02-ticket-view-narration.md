# WC-03-02 — Ticket View · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (12 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 12 blocks `WC-03-02-s01.mp3`…`WC-03-02-s12.mp3`, rendered block-by-block once the ElevenLabs key is set, then joined to `WC-03-02-full-narration-v1.0.mp3`. Audio not yet rendered in this session; the per-block timestamps below are estimates at ~145 wpm plus break time plus a 0.4 s tail, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-03-02-s01.mp3` … `WC-03-02-s12.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a screen means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- Shyne → "Shine"
- POS → "P-O-S" · ALPR → "A-L-P-R"
- URL → "U-R-L"
- ID → "I-D"

### Scope notes (non-spoken)

- The Ticket View page was captured credentialed on July 11 via `sales-ticket-view.html?ticket=1501159` — all five tabs digested. The Main-tab groups gained fields versus the July 8 walk (FINANCIAL SUMMARY adds HOUSE ACCOUNT NAME; STAFF & EQUIPMENT adds CASHIER CODE and GREETER NAME; CUSTOMER & VEHICLE adds COMPANY; Refunds table leads with a DATE column). The spoken blocks s08–s10 name the shorter July 8 field lists — omissions, not contradictions — and can stand.
- **July 11 re-verification — RE-RENDER REQUIRED for s06.** The spoken line says Details, Payments, and Notes "still need a live capture, so we leave those closed rather than guess what's inside." Those tabs were captured July 11 and are now documented in the guide, so the rendered line asserts a capture gap that no longer exists. Do not edit the spoken line here; re-render s06 after sign-off (and decide whether the lesson should now open those tabs, which would also touch s06's step scope).
- **Deep-link caution for s02/s12 (July 11):** the same `?ticket=1501159` link rendered two different headers across the capture's two passes (ticket number, location, timestamp, band totals changed; the ID field stayed 1501159). The spoken "opens this exact ticket" claim held only at the ID level in the demo. Verify on a live load before recording; if the header re-randomizes per load, flag s02/s12 for a wording review.
- **Refund** is a send-type action. Do not depict clicking it (PARKED-ITEMS.md #5). Read the guardrail, then move on.
- Only **Main** and **Refunds** are worked on camera in this cut. The **Details**, **Payments**, and **Notes** tab contents are captured (July 11) and documented in the guide's step 6; the Notes tab showed a "Couldn't load notes." fetch error at capture.
- The legacy 90-day ticket-edit window was not observed live; do not state a cutoff (PARKED-ITEMS.md #7).

## Timed script

[00:00 | Step 1 — Tickets list]
Start on the Tickets list. <break time="1.4s" /> Every sale at the wash ends up here, one row per ticket, with its location, total, status, and tender. Status is worth a glance on the way in: paid and washed, paid but not washed, or voided. There are millions of tickets, so you always filter down to the one you need before you open it.

[00:27 | Step 2 — Open the ticket]
Click the row. <break time="1.4s" /> The ticket opens on its own page, and watch the address bar: it picks up a ticket I-D on the end. That means this page has a fixed web address. Copy it later and anyone you send it to lands on this exact ticket.

[00:48 | Step 3 — Header]
Read the header first. <break time="1.2s" /> The ticket number is the title, with the I-D, the location, and the time it rang underneath. That timestamp matters more than it looks: it tells you which shift the sale fell in, which you'll need if a drawer doesn't balance. Confirm this is the transaction the caller means before you read a single number off it.

[01:15 | Step 4 — Header buttons and the Refund guardrail]
Top-right, two buttons. <break time="1.4s" /> Back to Tickets takes you home. The red one is Refund, and we do not touch it. On a real ticket a refund moves money, so running the full refund flow is off the table today, and parked for a lesson of its own. Read the button, leave it alone.

_[Director: do not click Refund. Refund execution is parked (PARKED-ITEMS.md #5); demo-tenant rule forbids refunds on pre-existing tickets.]_

[01:39 | Step 5 — Metric band]
Under the header, four quick figures. <break time="1.2s" /> Ticket total, payments, status, and payment type. For most calls, that band answers the question before you open a single tab. What was it, was it paid, and how. A mismatch between total and payments is your first clue something is off.

[02:00 | Step 6 — Five tabs]
Now the tabs. <break time="1.2s" /> Five of them: Main, Details, Payments, Refunds, and Notes. Main opens by default and carries the record itself. We work Main and Refunds today. Details, Payments, and Notes still need a live capture, so we leave those closed rather than guess what's inside.

[02:21 | Step 7 — Ticket Information]
Main opens on Ticket Information. <break time="1.2s" /> The I-D, the ticket number, the date and time in, the location, the status, and the payment type. This is the group that proves you're looking at the right sale, and the status here matches the one you saw in the list.

[02:42 | Step 8 — Financial Summary]
Next, Financial Summary. <break time="1.2s" /> Total, taxes, tendered, change due, reversed, and house account. When someone disputes a charge, you read the numbers straight off here. Reversed is the field to check first: it tells you whether money already came back before you promise anything. And house account tells you if a fleet or business paid instead of a card.

[03:07 | Step 9 — Staff, equipment, customer, and vehicle]
Two more groups. <break time="1.2s" /> Staff and Equipment names the cashier, the cashier terminal, the greeter terminal, and the shift, so you can tie a ticket to a person, a register, and a drawer session. Customer and Vehicle names the customer, the vehicle, the plate, and the state, which is how you match a ticket to a plate on a dispute.

[03:33 | Step 10 — Refunds tab]
Open the Refunds tab. <break time="1.4s" /> A table of any refunds on this ticket: refund I-D, amount, reason, who processed it, and its status. On a clean ticket it simply says no refunds recorded. When there is one, this is where you read the reason it was given, who handled it, and whether it actually went through.

[03:58 | Step 11 — What isn't here]
One thing to notice: what isn't here. <break time="1.2s" /> No Edit Ticket button, no add-refund control, and no ninety-day lock like the old system had. The header Refund button is the only way in, and whether you can finish one depends on your security level. Lower levels need approval first. We cover the security side later.

[04:23 | Step 12 — Copy the deep link and go back]
Last, copy the address. <break time="1.4s" /> That ticket I-D on the end means the URL reopens this exact ticket. Paste it into a support ticket and the next technician opens the same transaction you were looking at, instead of searching millions of rows for it. Then Back to Tickets, and nothing on the ticket has changed.

_[Director: copy the URL from the address bar (Ctrl+L, Ctrl+C), then click ← Back to Tickets. The ticket is never edited.]_

_(Estimated narration total: ~287 s ≈ 04:47 at 145 wpm. Timestamps are estimates pending render; re-time from ffprobe after generation and align to clicks if drift exceeds 0.5 s.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three (the status list "paid and washed, paid but not washed, or voided" is verbatim platform status wording, not a rhetorical triple), no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, the navigation path, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format).
- **Refund** left unclicked throughout (PARKED-ITEMS.md #5); the guardrail is read and Send/Refund is never depicted. The **Details**, **Payments**, and **Notes** tab contents are not narrated (new parked item). The 90-day window is not stated as behavior (PARKED-ITEMS.md #7).
- Ticket View grounding: July 8 verified walk (DISCREPANCIES.md #11 + learning plan Lesson 3.2); not re-captured July 9. Confirm live before generation and recording.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

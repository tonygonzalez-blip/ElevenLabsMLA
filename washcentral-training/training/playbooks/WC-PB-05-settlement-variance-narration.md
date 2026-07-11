# WC-PB-05 — Settlement variance and batch reconciliation · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (11 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 11 blocks `WC-PB-05-s01.mp3`…`WC-PB-05-s11.mp3` + joined `WC-PB-05-full-narration-v1.0.mp3` (207.87s ≈ 3:28). Step duration = audio + 0.4 s. Per-step render seconds: s01 16.43 · s02 23.33 · s03 13.32 · s04 15.15 · s05 21.63 · s06 18.6 · s07 13.01 · s08 16.77 · s09 18.76 · s10 27.48 · s11 18.99.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-PB-05-s01.mp3` … `WC-PB-05-s11.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Estimated total:** about 4:00 (240 s). Confirm against rendered per-step seconds once the key is available.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a check means for the ticket, not every label on screen. On this playbook the columns and amounts are the diagnostic content, so they are spoken deliberately, not as filler.

### Pronunciation guide

- WashCentral → "Wash Central"
- Ask Shyne → "Ask Shine"
- POS → "P-O-S"
- BT-10393 → "B-T one-oh-three-ninety-three" (batch IDs read the letters, then the digits)
- SHIFT # → "shift number"
- Dollar amounts spoken naturally: $14,880 → "fourteen thousand, eight hundred eighty"; $160 → "a hundred sixty dollars"
- "Payments Reconciliation", "Payouts", "Shifts", "Resolve batch", "variance" → spoken naturally

### Scope notes (non-spoken)

- Read-only playbook. Never click **Resolve batch** (step 4), **+ New Record** (steps 7, 9), or **Export** (step 9). No batch is resolved and no refund is run from the demo tenant.
- **Sales → Shifts** and **Sales → Payouts** returned "Couldn't load records (Failed to fetch)" in the July 9 corpus. Columns, KPIs, and cards are grounded; row values, the Shifts **STATUS** legend, and the Payouts vendor mix are TBD — parked. The **Resolve batch** workflow is TBD — parked; refund execution is parked (PARKED-ITEMS.md #5).
- **Ask Shyne** and the session idle prompt ("Still there?") are out of scope here (session behavior is PARKED-ITEMS.md #9).

## Timed script

[00:00 | Step 1 — Read the ledger]
Start on Payments Reconciliation. <break time="1.4s" /> This is the settlement ledger, one row per batch. Expected is what the day should have banked. Settled is what the processor actually deposited. Variance is the gap between the two. Read those three columns and the whole page makes sense.

[00:20 | Step 2 — Find the batch that's off]
Now the status column. <break time="1.2s" /> Fort Lauderdale and Orlando Central settled exactly what they expected, so they read balanced. Miami North came up a hundred sixty dollars short: expected fourteen thousand, eight hundred eighty, settled fourteen thousand, seven hundred twenty. That nonzero gap flags it for review. The review row is the one you work.

[00:41 | Step 3 — Narrow the list]
With more than a few batches, narrow the list. <break time="1.0s" /> Search by batch, location, or status, or sort straight on the variance column to pull the gaps to the top. Nothing here touches a batch. You're only deciding which one to chase.

[01:00 | Step 4 — Locate Resolve batch]
Top-right of the panel, find Resolve batch. <break time="1.4s" /> That's the control a supervisor uses to close out a review batch. You locate it and stop. Working it, and running any refund, happens in production with the right role. Never from this demo.

_[Director: do not click Resolve batch. Where the flow leads is TBD — parked. Refund execution is parked (PARKED-ITEMS.md #5).]_

[01:19 | Step 5 — Decide what to chase]
Before you leave the ledger, decide what to chase. <break time="1.0s" /> A settlement gap is usually one of two things at that site: the drawer came up over or short, or cash was paid out and never banked. Carry the location to both checks. There's no date column here, so location is the join, and a shift number ties a payout back to its drawer.

[01:46 | Step 6 — Cross-check Shifts]
First the drawer. In Sales, open Shifts. <break time="1.4s" /> Every drawer session lists out: shift number, location, terminal, when it opened and closed, and the opening and closing drawer. Those last two are where an over or short shows up for the day. Filter to the batch's location and read them.

[02:08 | Step 7 — Shifts load state]
One caution from today's capture. <break time="1.2s" /> The list came back empty with a fetch error, and the total-shifts count was blank. Don't read that as no shifts. Confirm the data actually loaded before you tell anyone the drawer was clean.

_[Director: do not click + New Record. Rows were not observable in the July 9 corpus — TBD — parked.]_

[02:27 | Step 8 — Cross-check Payouts]
Now the cash side. Open Payouts. <break time="1.4s" /> Each row shows the location, payout ID, shift number, cashier, terminal, vendor, and amount. A payout links to a drawer by its shift number, so cash pulled for a vendor explains part of a gap with nothing actually missing.

[02:48 | Step 9 — Payouts scope and load state]
Read the payout status card. <break time="1.2s" /> It says approval and dispute status aren't tracked here; payouts records completed disbursements only. So this page confirms what went out, not whether it was approved. And today it too returned the fetch error, so treat the rows as unconfirmed until they load.

_[Director: do not click + New Record or Export. Rows are TBD — parked.]_

[03:10 | Step 10 — Package the escalation]
Now build the ticket. <break time="1.0s" /> Name the batch, B-T one-oh-three-ninety-three, and the location, Miami North. Give the three numbers: expected fourteen thousand, eight hundred eighty; settled fourteen thousand, seven hundred twenty; variance a hundred sixty. Mark it review, and say whether a drawer figure or a payout explains the gap. You never resolve the batch, and you never run a refund from demo.

[03:34 | Step 11 — Recap]
So that's the playbook. <break time="0.8s" /> Read the ledger, find the review batch by its status and its variance, locate Resolve batch without touching it, then cross-check the location's shifts and payouts to explain the gap. Escalate with the batch and the amounts. You moved nothing. You found where the money went and passed it on.

_(Estimated total: about 4:00 / 240 s. Timestamps are estimates at ~145 wpm; confirm against rendered per-step seconds when the ElevenLabs key is available.)_

## Generation log

- Status **READY FOR GENERATION**: script complete, not yet rendered (no ElevenLabs key in this session). Voice **WashCentral New** / **eleven_v3** / 44.1 kHz locked per project.
- Written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading (columns and amounts spoken only where they are the diagnostic content).
- Humanizer pass (per CLAUDE.md §6): spoken prose kept clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, navigation paths, and numbered steps left exact. Em dashes appear only in the `[mm:ss | Step N — target]` house-format block headers and in the mandated "TBD — parked" token inside non-spoken director notes.
- Corpus-grounded, no live walk: the **Payments Reconciliation** ledger (columns, batch rows, statuses, and the **Resolve batch** control) is grounded in the July 9 digest and screenshot. **Sales → Shifts** and **Sales → Payouts** columns, KPIs, and cards are grounded in their July 9 digests and screenshots; both returned "Couldn't load records (Failed to fetch)", so their row values are TBD — parked and captured live at record time.
- No action row is triggered anywhere; no batch is resolved and no refund is run from the demo tenant.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

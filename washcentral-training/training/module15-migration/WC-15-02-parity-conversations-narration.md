# WC-15-02 — Parity Conversations with Clients · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and the title-card shot list one-to-one (8 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 8 blocks `WC-15-02-s01.mp3`…`WC-15-02-s08.mp3` + joined `WC-15-02-full-narration-v1.0.mp3` (149.56s ≈ 2:30). Step duration = audio + 0.4 s. Per-step render seconds: s01 9.95 · s02 18.91 · s03 16.35 · s04 15.31 · s05 21.97 · s06 27.01 · s07 24.35 · s08 12.51.
- **Voice:** **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`). Never switch without sign-off.
- **Model:** **eleven_v3** — pass explicitly.
- **Output:** 44.1 kHz MP3.
- **Pace target:** 140–150 wpm, calm and credible. Attribute claims exactly.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Each card cue is followed by `<break time="1.4s" />`.
2. **Varying sentence length.** Mixed short and long lines.
3. **Show, don't read.** Explain how to use each fact in a client conversation.

### Pronunciation guide

- WashCentral → "Wash Central" · WashAssist → "Wash Assist"
- AWS → "A-W-S" · PIN → "pin" (as a word) · SSO → "S-S-O"

### Scope notes (non-spoken)

- Parity and architecture claims are attributed to platform documentation and cannot be observed. Relocations come from the verified restructure map. Never say a missing feature is "gone."

## Timed script

[00:00 | Step 1 — Title]
Sooner or later a migrated client says the platform looks different, or asks where one of their features went. <break time="0.8s" /> You have two kinds of answer, and one hard rule. Here they are.

[00:14 | Step 2 — Parity]
Start with the big picture, and attribute it. <break time="1.4s" /> Per Micrologic platform documentation, all one hundred seventy-nine WashAssist modules carried forward with full parity, plus sixteen or more new capability areas. Say "per the documentation." You are quoting it, not claiming you counted.

[00:32 | Step 3 — Architecture]
If the client is technical, there is a second attributed layer. <break time="1.4s" /> The platform was rebuilt on AWS, with token-based sign-in, sessions tied to the device, and rate limiting on the busy screens. Again, that is the documentation talking, not something you can point to on screen.

[00:50 | Step 4 — Roadmap]
For "what is coming," keep it to what is documented. <break time="1.4s" /> Release two moves Marketing onto an event-driven backbone with two-way data replication. Release three brings event-driven microservices. No dates. If they push for a date, that is parked.

[01:08 | Step 5 — The map, part one]
Now the question you will actually get: where did my feature go. <break time="1.4s" /> Whole modules were regrouped. Employees, Gamification, and the Scheduler live under Team now. Maintenance, Incidents, and appointment Scheduling are under Operations. Mobile and the Portal are under Digital. Support and Audit sit under IT and Support. And Billing and Academy are brand new.

[01:32 | Step 6 — The map, part two]
Some features did not leave, they just moved or became a button. <break time="1.4s" /> Retention Log is a button on the Customer List. Generate Invoices is a button on House Accounts. Rewards moved into Settings, under Services. Adjustments moved into Inventory. Forecasting is under Analytics. Report scheduling is on the Reports hub. The full map is in our own verified records, so you are citing what we saw, not guessing.

[01:56 | Step 7 — The rule]
Here is the rule that keeps you honest. <break time="1.4s" /> If you cannot find a feature live, you do not say it is gone. PIN Codes, Loyalty Discounts, Tech Commissions, Site Watch, and a few others are not visible today. The correct answer is that their status is being confirmed. It might have moved, it might be in a later release. Log the ask, and let it be answered properly.

[02:20 | Step 8 — Recap]
So, three moves. <break time="1.0s" /> Give the parity story and attribute it. Locate the specific feature from the verified map. And never, ever call something gone. Confirm first, then answer.

_(Estimated total: about 3:00 pending render.)_

## Generation log

- Script written to the narration craft standard: visual buffer on each card cue, varied rhythm, guidance over recitation.
- Humanizer pass (per CLAUDE.md §6): spoken prose clear of the listed AI tells; no em or en dashes in the narration; attributed claims, module names, and the "being confirmed" phrasing left exact. The only em dashes are in the `[mm:ss | Step N — target]` house-format headers.
- Parity/architecture/roadmap claims attributed to Micrologic platform documentation; relocations attributed to the project's verified restructure map (DISCREPANCIES.md #2–#23); missing features handled with "being confirmed" (PARKED-ITEMS.md #14).
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

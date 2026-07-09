# PARKED-ITEMS.md — Open Questions

Project: WashCentral Technician Training · As of July 8, 2026 (handoff to Claude Code)
Rule: nothing here blocks work; each item is flagged TBD where relevant. A guess never ships.

## Resolved July 8, 2026 (user confirmations)

- **#10 Demo data on screen — RESOLVED:** approved to show unblurred in internal training assets.
- **#11 TRAIN- record creation — RESOLVED:** approved; log everything in RECORDS-CREATED.md.
- **#12 Voice + recording — RESOLVED (final):** project voice **WashCentral New** (ElevenLabs voice_id CDbF7Jxnv3azemv9dXMP), model **eleven_v3**, block-by-block generation. Prior voices "WashCentral" and "Wash Central Final" retired after A/B. Voice-design brief v1.2 (training/WC-voice-design-brief-v1.0.md) is the template for future voice work. Recording: Claude Code drives Chrome (cdp-connect) and records via the screencast skill (ffmpeg/gdigrab), MP4 H.264 1920×1080 30fps.
- **Doc formats — RESOLVED:** Markdown and PDF.

## Open

| # | Item | What was tried / observed | What is needed |
|---|------|---------------------------|----------------|
| 1 | Per-location "configure" dialog | Edit Service shows gear buttons (tooltip **Configure per location**) beside Description, Controller Code, Amount, Taxable, Tax Rate (1)/(2), Tax Included. Clicking (mouse and programmatic) did not open the "Configure Value For …" dialog the legacy guide describes. | Confirm with Micrologic whether the dialog is stubbed in the demo tenant. Lesson 12.3 exercise blocked at the dialog step only. |
| 2 | LogicPOS demo screens | Settings hub advertises LogicPOS (logicpos/sales.html · login.html · dashboard.html). All return IIS **404**. | Working URLs or confirmation not yet deployed. POS-side lessons outlined but unverifiable. |
| 3 | CRM → Fundraiser | Sidebar item exists; link target is "#" (stub). | Later release or missing page? |
| 4 | Customer 360 Actions menu depth | Only **Issue Wash** and **Refund Customer** appear (legacy guide lists six incl. Cancel/Reset/Pause Membership). | Role-gated, release-gated, or removed? Affects membership-lifecycle lesson. |
| 5 | Refund workflow end-to-end | Ticket View has a red **Refund** button; not clicked (tenant rules). Refunds tab table: REFUND ID · AMOUNT · REASON · PROCESSED BY · STATUS. Security Levels: REFUND APPROVAL REQUIRED = Yes for Low/LowMedium/Medium. | Approval to execute one refund on a TRAIN- ticket to document the full flow incl. where approvals land (no "Refunds Approval" page exists in Sales). |
| 6 | "Weather paused" status | Campaigns/Automations show "⛅ Weather paused — N locations". Config location not found (Reports has a Weather category, 1 report). | Where is weather-pause configured and what does it gate? |
| 7 | 90-day ticket edit window | Legacy guide claims tickets >90 days can't be modified; no such note/control observed live. | Confirm current behavior. |
| 8 | Ask Shyne vs MAIA | **Ask Shyne** button on every header; **Ask MAIA** panel on Command Center ("MAIA · WashCentral AI Platform"); Settings → AI Agent is the customer-facing agent. Assistants not exercised (send-type). | Confirm naming/positioning; may techs run test prompts in the demo tenant? |
| 9 | Session idle timeout | "Still there?" dialog with 2:00 countdown + "Stay Active" toast exist; User Levels define per-level Session Timeout 5–120 min (Cashiers = 5). Firing thresholds not timed. | Confirm timeout for demo credentials so the lesson states exact behavior. |
| 13 | Site Detail (Demo) page | IT & Support sidebar lists site-detail.html; not yet walked. | Walk before authoring its lesson (10.6). |
| 14 | Missing legacy features | Not found live: PIN Codes, Loyalty Discounts (CRM), Tech Commissions, Time Clock Site Watch, Store Closing Message, Schedule Variances, Weekly Staffing Report, Network Devices, in-app User Guide, Time Clock Edit Reasons, Campaign Templates/Sources, Landing Pages. | Removed vs relocated vs later release — affects WashAssist-parity messaging. |

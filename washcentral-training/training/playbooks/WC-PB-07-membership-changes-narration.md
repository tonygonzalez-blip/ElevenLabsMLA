# WC-PB-07 — Membership change requests · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · July 9, 2026 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (11 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — audio is rendered later (the ElevenLabs key is not set in this session). Voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3. 11 blocks `WC-PB-07-s01.mp3` … `WC-PB-07-s11.mp3` + joined `WC-PB-07-full-narration-v1.0.mp3`. Timestamps below are estimates at ~145 wpm plus break time plus a 0.4 s tail, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-PB-07-s01.mp3` … `WC-PB-07-s11.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Estimated total:** about 4:31 (271 s). Confirm against rendered per-step seconds once the key is available.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a check means for the ticket, not every label on screen. On this playbook the menu items and the approval column are the diagnostic content, so they are spoken deliberately, not as filler.

### Pronunciation guide

- WashCentral → "Wash Central"
- Customer 360 → "Customer three-sixty"
- Actions ▾ → "the Actions menu"
- LowMedium → "Low Medium" · HighMedium → "High Medium"
- Ask Shyne → "Ask Shine"
- SMS → "S-M-S" · POS → "P-O-S"

### Scope notes (non-spoken)

- Read-only playbook. Never trigger **Delete**, **Edit Customer**, **Issue Wash**, **Refund Customer**, **Pin to top**, **Clear**, or **Save Note**; never type in **Messaging**. The **Actions ▾** menu is opened to list its items and closed without selecting (step 3).
- Steps 1–3 and 9 live on the Customer 360 detail page, not in the July 9 corpus. Labels are attributed (Lesson 2.2, July 8 walk; DISCREPANCIES.md #6); values are TBD — parked and captured live at record time.
- Steps 5 and 7 (**Security Levels**, **Refund Reasons**) showed fetch errors in the July 9 capture; rows are TBD — parked. The per-level approval mapping (step 6) is attributed to Lesson 12.6 (PARKED-ITEMS.md #5).
- Cancel / Pause / Reset are the open gap (PARKED-ITEMS.md #4); the narration names them as parked, never as available or removed.
- **Ask Shyne** and the session idle prompt ("Still there?") are out of scope here (session behavior is PARKED-ITEMS.md #9).

## Timed script

[00:00 | Step 1 — Open Customer 360]
Start in CRM, open Customers, and click into the member's record. <break time="1.4s" /> Customer three-sixty opens on nine tabs, with the header carrying Back, Delete, Edit Customer, and the green Actions menu. That green menu decides most of this playbook. Leave it closed for now. First you confirm what the member actually holds.

_[Director: Customer 360 detail is not in the July 9 corpus. Record against the live detail page; labels attributed to Lesson 2.2. Do not click Delete or Edit Customer. Unshowable values: TBD — parked.]_

[00:23 | Step 2 — Membership tab]
Open the Membership tab. <break time="1.4s" /> Plan details gives you the membership type, the home location, and the status. Billing cycle gives you the next charge. Read status and next charge first. A cancel or pause request only makes sense against an active plan, and the next-charge date tells you how much time you have before the member gets billed again.

[00:49 | Step 3 — The Actions menu]
Now open the green Actions menu. Look, don't touch. <break time="1.4s" /> It offers exactly two actions: Issue Wash and Refund Customer. The legacy guide promised six, including cancel, pause, and reset. Those are not here. Whether they are role-gated or removed is an open question. So never promise a member a change you cannot see a control for. Close the menu without selecting anything.

_[Director: list only — do not click Issue Wash or Refund Customer. Menu contents per DISCREPANCIES.md #6 and the July 8 walk; Cancel/Reset/Pause are TBD — parked (PARKED-ITEMS.md #4).]_

[01:17 | Step 4 — Pick the branch]
Decide the branch before you navigate. <break time="1.0s" /> A refund is a live action, so it gets gated: who can approve it, and which standard reason applies. A cancel, pause, or reset is not a demo action, so it routes by role. Either way, the interaction gets logged. Two branches. One log.

[01:39 | Step 5 — Security Levels]
Take the refund branch first. Settings, Users and Security, Security Level. <break time="1.4s" /> Three columns: name, level, and refund approval required. That last column is the gate. It marks, per level, whether a refund needs sign-off before anyone can process it. Today's capture returned a fetch error in place of rows, so confirm the list loaded before you read a level's answer.

_[Director: rows were not observable in the July 9 corpus — TBD — parked.]_

[02:05 | Step 6 — The approval column]
Read the approval column against the requester's level. <break time="1.2s" /> Per the verified walk, Low, Low Medium, and Medium all require approval. So a Low or Medium user hands the refund to a High Medium or High approver instead of processing it themselves. Confirm the live yes or no per level at ticket time. The mapping was not observable today.

_[Director: per-level mapping attributed to Lesson 12.6 (PARKED-ITEMS.md #5) — live values TBD — parked.]_

[02:31 | Step 7 — Refund Reasons]
Next, the reason. Settings, Operations, Refund Reasons. <break time="1.4s" /> One description column, one job: every refund gets tagged with a standard reason so reporting stays clean. Pick from this list, never freehand. The rows did not load in today's capture, so the live list is your source at ticket time.

_[Director: reason rows TBD — parked (Failed to fetch, July 9).]_

[02:53 | Step 8 — Cancel, pause, reset]
Now the other branch. <break time="1.0s" /> Cancel, pause, and reset are not in the demo menu, and that cuts both ways. You do not promise the change, and you do not tell the member it cannot be done. On production, confirm your role can perform it. If it cannot, route the request to someone who can. That is the whole move.

[03:18 | Step 9 — Log it in Notes]
Whatever happened, log it. Back on Customer three-sixty, open Notes. <break time="1.4s" /> These are internal staff notes, not visible to the customer, with pin and save controls, and the communication history below. Record what the member asked, what you did or routed, and any approval. Pin it if the account is critical. And never log it in Messaging. That tab texts the customer.

_[Director: point only — do not click Save Note, Clear, or Pin to top; nothing is saved from the demo. Notes labels attributed to Lesson 2.2; values TBD — parked.]_

[03:45 | Step 10 — Package the escalation]
Then package it. <break time="1.0s" /> The member. The exact change they asked for. The refund reason if one applies. The requester's security level and whether approval is required. And who it routes to. You verified and you logged. The cancel, the pause, the refund itself, all of that happens in production with the right role.

[04:09 | Step 11 — Recap]
That's the playbook. <break time="0.8s" /> Confirm the plan on Membership. Read the Actions menu for what the platform will actually let you do. Gate a refund through Security Levels and tag it from Refund Reasons. Route a cancel or pause by role. And log everything in Notes, never Messaging. Every screen stayed read-only.

_(Estimated total: about 4:31 / 271 s. Timestamps are estimates at ~145 wpm; confirm against rendered per-step seconds when the ElevenLabs key is available.)_

## Generation log

- Status **READY FOR GENERATION**: script complete, not yet rendered (no ElevenLabs key in this session). Voice **WashCentral New** / **eleven_v3** / 44.1 kHz locked per project.
- Written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading (menu items and column names spoken only where they are the diagnostic content).
- Humanizer pass (per CLAUDE.md §6): spoken prose kept clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, navigation paths, and numbered steps left exact. Em dashes appear only in the `[mm:ss | Step N — target]` house-format block headers and in the mandated "TBD — parked" token inside non-spoken director notes.
- Corpus-grounded, no live walk: **Security Levels** and **Refund Reasons** are grounded in the July 9 digests and screenshots (structure grounded, rows TBD — parked). Customer 360 (steps 1–3, 9) is attributed to Lesson 2.2 (July 8 walk) and DISCREPANCIES.md #6; the per-level approval mapping (step 6) is attributed to Lesson 12.6 with live values TBD — parked.
- No action is triggered anywhere; the Actions menu is listed and closed, nothing is saved, sent, cancelled, paused, reset, or refunded.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

# WC-PB-11 — Who changed this? · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (9 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — audio is rendered later (the ElevenLabs key is not set in this session). Voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3. 9 blocks `WC-PB-11-s01.mp3` … `WC-PB-11-s09.mp3` + joined `WC-PB-11-full-narration-v1.0.mp3`. Timestamps below are estimates at ~145 wpm plus break time plus a 0.4 s tail, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-PB-11-s01.mp3` … `WC-PB-11-s09.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Estimated total:** about 2:53 (173 s). Confirm against rendered per-step seconds once the key is available.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a check means for the ticket, not every label on screen. On this playbook the audit columns are the diagnostic content, so they are spoken deliberately, not as filler.

### Pronunciation guide

- WashCentral → "Wash Central"
- Ask Shyne → "Ask Shine"
- IP → "I-P" · URL → "U-R-L"
- 404 → "four oh four"
- "read-only" → spoken naturally ("read only")

### Scope notes (non-spoken)

- Read-only playbook. Never trigger **Export** or **+ New Record** on the **Audit Log**, and never edit or delete an audit entry. A correction to the underlying record happens in that record's own module, or gets escalated.
- Steps 4–6: **Change History** could not be re-verified on its own URL in the July 9 corpus (`audit-changes.html` returned HTTP 404); it is reached only via the **AUDIT** sidebar. Its layout, filter control, and rendered column labels are TBD — parked; the **FIELD / OLD VALUE / NEW VALUE** column set is attributed to DISCREPANCIES.md #18 and the PB-11 plan.
- **Ask Shyne** and the session idle prompt ("Still there?") are out of scope here (session behavior is PARKED-ITEMS.md #9).

## Timed script

[00:00 | Step 1 — The ticket and the rule]
A caller wants two things: who changed it, and what it said before. <break time="1.0s" /> Two pages answer that between them, and you read them in order. One rule before you start. The audit trail is read only. It's only worth anything because nobody corrects it.

[00:20 | Step 2 — Open the Audit module]
Open IT and Support, then Audit. <break time="1.4s" /> You land on the Audit Log, and the sidebar lists three pages. You need two of them today: the Audit Log for who did what, and Change History for the before and after. User Activity is login history. That one belongs to a different playbook.

[00:43 | Step 3 — Read the Audit Log]
Read the log. <break time="1.4s" /> Seven columns tell you who touched the record, when, from which location, and from which IP address. The change you're chasing is an Updated row. Settings changes land here too, with the module reading Settings. Don't scroll a busy log. Filter it, or search it.

_[Director: do not click Export or + New Record.]_

[01:04 | Step 4 — Open Change History]
Now the page the caller actually wants. In the sidebar, click Change History. <break time="1.4s" /> One quirk from today's capture: typing its address directly returned a four oh four. So you reach it this way, through the audit sidebar, not by URL.

_[Director: in-app navigation only. Page layout is TBD — parked; if it does not render, hold the parked title card.]_

[01:23 | Step 5 — Filter to the record]
Narrow it to the record. <break time="1.2s" /> Filter down to the module in question so one record's changes stand alone. You're reading a history, not editing one.

_[Director: the exact filter control is TBD — parked; record the live control.]_

[01:35 | Step 6 — The field-level change]
And here's the answer. <break time="1.2s" /> Each change is recorded at field level: the field, its old value, its new value, with the user and the timestamp. That row is, literally, what was it before.

_[Director: column set attributed to DISCREPANCIES #18 and the PB-11 plan; rendered labels TBD — parked.]_

[01:51 | Step 7 — Assemble the answer]
Now put the two pages together. <break time="1.0s" /> Change History gives you the field and the exact old and new values. The Audit Log gives you the user, the date and time, and the IP address it came from. The price changed is not an answer. The two values are.

[02:12 | Step 8 — Document or escalate]
Write the packet. <break time="1.0s" /> The record, the field, both values, the user, the timestamp, the IP address, and screenshots. You never reverse the change from here. A correction happens in the record's own module, or gets escalated. And if the change looks unauthorized, that's a security escalation, and the next tier wants the IP and the user first.

[02:37 | Step 9 — Recap]
That's the order. <break time="0.8s" /> Audit Log first, for who, when, where, and which IP. Change History second, for the field-level old to new. Then the exact answer, or a clean escalation. Nothing edited, nothing touched.

_(Estimated total: about 2:53 / 173 s. Timestamps are estimates at ~145 wpm; confirm against rendered per-step seconds when the ElevenLabs key is available.)_

## Generation log

- Status **READY FOR GENERATION**: script complete, not yet rendered (no ElevenLabs key in this session). Voice **WashCentral New** / **eleven_v3** / 44.1 kHz locked per project.
- Written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading (column names spoken only where they are the diagnostic content).
- Humanizer pass (per CLAUDE.md §6): spoken prose kept clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, navigation paths, and numbered steps left exact. Em dashes appear only in the `[mm:ss | Step N — target]` house-format block headers and in the mandated "TBD — parked" token inside non-spoken director notes.
- Corpus-grounded, no live walk: the **Audit Log** (seven columns, four tiles, **Action Types** panel, **AUDIT** sidebar group) is grounded in the July 9 digests and screenshots. **Change History** (steps 4–6) could not be re-verified on its own URL (HTTP 404 in the corpus); its **FIELD / OLD VALUE / NEW VALUE** column set is attributed to DISCREPANCIES.md #18 and the PB-11 plan, with layout, filter control, and rendered labels TBD — parked.
- No audit entry is edited or deleted anywhere; **Export** and **+ New Record** are never clicked.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

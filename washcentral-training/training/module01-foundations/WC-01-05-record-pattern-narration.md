# WC-01-05 — Interface conventions: the universal record pattern · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (12 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — audio rendered later once the ElevenLabs key is available (not set in this session). Voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3. 12 blocks `WC-01-05-s01.mp3` … `WC-01-05-s12.mp3` + a joined `WC-01-05-full-narration-v1.0.mp3`. Per-step render seconds recorded here after generation; timestamps below are estimates at ~145 wpm plus break time and a 0.4 s tail.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-01-05-s01.mp3` … `WC-01-05-s12.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what the pattern means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- POS → "P-O-S"
- KPI → "K-P-I"
- Shyne → "Shine"
- ALPR → "A-L-P-R"

### Scope notes (non-spoken)

- Teaches the universal record pattern on the **Cancellation Reasons** list: list → row → read-only detail → **Edit** form → **Cancel**, plus **+ New Record** → **Cancel**, with the delete guardrail (**No, Keep**).
- The list page (steps 1–6) is grounded in the July 9 corpus. The detail view, Edit form, delete dialog, and + New Record form (steps 7–11) were not captured in the corpus; their labels are described from the learning plan and are parked pending a live authenticated walk. Do not add spoken values for unobserved fields.
- Nothing is committed on camera: **Save Changes**, **Yes, Delete**, and any Save inside **+ New Record** are never clicked. Session-timeout ("Still there?") behavior belongs to WC-01-03.

## Timed script

[00:00 | Step 1 — Open the list]
Open Settings, then Operations, then Cancellation Reasons. <break time="1.4s" /> This is a list page, and it is the doorway into a shape you will meet on nearly every screen in WashCentral. Learn it once here, and the rest of the platform stops surprising you.

[00:20 | Step 2 — KPI strip]
Look across the top. <break time="1.0s" /> Three tiles count the list below: how many reasons exist, how many reach the POS, and how many stay hidden. Numbers on top, records underneath. The same shape you met on the customer lists.

[00:37 | Step 3 — List card]
Now the card itself. <break time="1.0s" /> A title, a search box scoped to these reasons, and one green button to add a record. When a list runs long, you search it instead of scrolling.

[00:51 | Step 4 — Columns and rows]
Read the columns. <break time="1.2s" /> Each row is a single reason: what it says, and whether the register shows it. One row, one record. Click any row, and that record opens on a page of its own.

[01:06 | Step 5 — Pagination]
Drop to the footer. <break time="1.0s" /> Rows per page, a count of what matched, and the page arrows. Set it once, read the counter, and you always know how many records you are working through.

[01:21 | Step 6 — Sibling list]
Jump to Refund Reasons. <break time="1.4s" /> Same page, lighter version. One tile, one column, the same add button. The fields change from list to list, but the shape holds. That is the whole point of learning it once.

[01:37 | Step 7 — Open a record]
Back on Cancellation Reasons, open one row. <break time="1.4s" /> A record opens read-only, its details laid out for you to check. Nothing is editable yet, so you can look without any risk of changing it.

_[Director: the detail view was not captured in the July 9 corpus. Confirm ← Back, Edit, and Delete on a live authenticated walk before recording (parked).]_

[01:52 | Step 8 — Detail buttons]
Find the three buttons up top. <break time="1.2s" /> Back returns you to the list. Edit opens the record for changes. Delete removes it, but never on the first click. Three buttons, and you meet them on every record you open.

[02:11 | Step 9 — Edit form]
Open Edit, and touch nothing. <break time="1.4s" /> Two buttons close this form. Cancel walks away clean. Save Changes writes to the shared tenant, so on the demo you always leave through Cancel. A star marks anything the form requires.

_[Director: change no field; leave via Cancel. The edit-form fields are not in the July 9 corpus (parked).]_

[02:28 | Step 10 — Delete guardrail]
Notice Delete, and leave it alone. <break time="1.2s" /> It always asks first. When the confirmation appears, choose No, Keep, and the record stays put. Treat Yes, Delete as off-limits on anything you did not create.

_[Director: record up to the confirmation, then click No, Keep. Never click Yes, Delete. Dialog text pending a live walk (parked).]_

[02:44 | Step 11 — New record]
Back on the list, open New Record. <break time="1.4s" /> The same form again, blank this time, ready for a fresh entry. You are only here to see the layout, so close it the way you closed the edit: Cancel. Nothing gets added.

_[Director: the + New Record blank form is not in the July 9 corpus; leave via Cancel (parked).]_

[03:02 | Step 12 — Recap]
So that is the pattern. <break time="1.0s" /> List, record, edit, and a blank form to start a new one. Two exits keep you safe: Cancel out of a form, No, Keep out of a delete. One quirk to expect on the demo: a detail page may open a fixed sample record instead of the row you picked. That is the tenant, not a bug. Learn this rhythm now, because every record page ahead follows it.

_(Estimated narration total: ~3:30 at 145 wpm. Final per-step seconds recorded in the Settings header after render.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, and value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice throughout, and no em or en dashes in the narration. Verbatim UI labels, the navigation path, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and inside director notes' mandated "parked" phrasing.
- Grounding: steps 1–6 trace to the July 9 digests and screenshots for `settings-cancellation-reasons` and `settings-refund-reasons`. Steps 7–11 describe the record pattern from the learning plan; those views were not captured in the corpus and are parked — no unobserved field values are spoken.
- Nothing committed: Save Changes, Yes, Delete, and + New Record Save are never clicked; the delete guardrail stops at the confirmation with No, Keep.
- Status **READY FOR GENERATION**; verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

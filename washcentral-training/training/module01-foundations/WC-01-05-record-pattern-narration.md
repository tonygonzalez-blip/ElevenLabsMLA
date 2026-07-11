# WC-01-05 — Interface conventions: the universal record pattern · Narration Script

**Verified against demo.washcentral.com on July 11, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (12 steps). (Spoken lines are audio-locked and unchanged; **blocks s07–s10 and the s12 recap need re-render** — see scope notes.)

## Settings header

- **Status:** **RENDERED v1.0 — s07–s10 (and the s12 recap) FLAGGED FOR RE-RENDER against the July 11 corpus** (see scope notes); do not assemble with the v1.0 blocks for those steps. Voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3. 12 blocks `WC-01-05-s01.mp3` … `WC-01-05-s12.mp3` + a joined `WC-01-05-full-narration-v1.0.mp3`. Per-step render seconds recorded here after generation; timestamps below are estimates at ~145 wpm plus break time and a 0.4 s tail.
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
- The list page (steps 1–6) is grounded in the July 9 corpus and re-confirmed live in the July 11 credentialed corpus (33 rows; tiles 33 / 30 / 3; counter 1–25 of 33). Refund Reasons was empty on July 11 ("No refund reasons found…"); Rewash Reasons held 12 live rows.
- **NEEDS RE-RENDER — blocks s07, s08, s09, s10 (and the s12 recap line).** The July 11 credentialed capture contradicts these rendered spoken lines: clicking a row does NOT open a read-only detail view on this list (s07), there are no **← Back** / **Edit** / **Delete** buttons (s08), there is no **Edit** to open (s09), and no **Delete** control exists here (s10); s12 recaps that flow. What the corpus does confirm: the **+ New Record** form at `settings-cancellation-reasons-edit.html` (**Cancellation Reasons Edit**) with a **Reason Details** tab, a required **DESCRIPTION \*** field, and **Cancel** / **Save Changes** — so s11's "same form, blank" spoken line survives, and s09's Cancel/Save Changes description matches the real form even though its "Open Edit" action cue does not. Re-write these blocks against the July 11 digests before rendering v1.1 audio; spoken text left untouched here per the audio-lock rule.
- The delete confirmation dialog remains unobserved on this platform; its wording stays parked. Do not add spoken values for unobserved fields.
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

_[Director: July 11 credentialed capture — a row click does NOT open a detail view on this list, and no ← Back / Edit / Delete exists. This block contradicts the platform: re-render s07 before assembly.]_

[01:52 | Step 8 — Detail buttons]
Find the three buttons up top. <break time="1.2s" /> Back returns you to the list. Edit opens the record for changes. Delete removes it, but never on the first click. Three buttons, and you meet them on every record you open.

[02:11 | Step 9 — Edit form]
Open Edit, and touch nothing. <break time="1.4s" /> Two buttons close this form. Cancel walks away clean. Save Changes writes to the shared tenant, so on the demo you always leave through Cancel. A star marks anything the form requires.

_[Director: change no field; leave via Cancel. July 11: there is no Edit button — the form opens only via + New Record (Cancellation Reasons Edit page; required DESCRIPTION * field; Cancel / Save Changes). Re-render s09's action cue.]_

[02:28 | Step 10 — Delete guardrail]
Notice Delete, and leave it alone. <break time="1.2s" /> It always asks first. When the confirmation appears, choose No, Keep, and the record stays put. Treat Yes, Delete as off-limits on anything you did not create.

_[Director: July 11 — no Delete control exists on this page, so there is no confirmation to record here. Dialog text stays parked. Re-render s10 as a rule card ("where Delete exists elsewhere…"). Never click Yes, Delete anywhere.]_

[02:44 | Step 11 — New record]
Back on the list, open New Record. <break time="1.4s" /> The same form again, blank this time, ready for a fresh entry. You are only here to see the layout, so close it the way you closed the edit: Cancel. Nothing gets added.

_[Director: the + New Record form was captured July 11 — Cancellation Reasons Edit page, Reason Details tab, required DESCRIPTION * field, Cancel / Save Changes, sample-record name "Customer Request" over the blank form (demo quirk). Leave via Cancel. Spoken s11 matches; no re-render needed.]_

[03:02 | Step 12 — Recap]
So that is the pattern. <break time="1.0s" /> List, record, edit, and a blank form to start a new one. Two exits keep you safe: Cancel out of a form, No, Keep out of a delete. One quirk to expect on the demo: a detail page may open a fixed sample record instead of the row you picked. That is the tenant, not a bug. Learn this rhythm now, because every record page ahead follows it.

_(Estimated narration total: ~3:30 at 145 wpm. Final per-step seconds recorded in the Settings header after render.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, and value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice throughout, and no em or en dashes in the narration. Verbatim UI labels, the navigation path, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and inside director notes' mandated "parked" phrasing.
- Grounding: steps 1–6 trace to the July 9 digests and are re-confirmed by the July 11 credentialed digests (`settings-cancellation-reasons-rows`, `settings-refund-reasons`, `settings-rewash-reasons`). Steps 7–11 were written from the learning plan before capture; the July 11 digests (`cancellation-reason-detail`, `cancellation-reason-new`) now contradict s07–s10 (no row-click detail view, no ← Back / Edit / Delete on this list) and confirm s11's blank form.
- Nothing committed: Save Changes, Yes, Delete, and + New Record Save are never clicked; the delete guardrail stops at the confirmation with No, Keep wherever a Delete control exists.
- Status **BLOCKED FOR ASSEMBLY — re-render s07–s10 (and the s12 recap) against the July 11 corpus before use**; remaining blocks stay valid. Verification stamp current: **Verified against demo.washcentral.com on July 11, 2026.**

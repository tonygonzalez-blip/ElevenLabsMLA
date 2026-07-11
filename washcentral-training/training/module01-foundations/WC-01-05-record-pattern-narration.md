# WC-01-05 — Interface conventions: the universal record pattern · Narration Script

**Verified against demo.washcentral.com on July 11, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (12 steps). (**Blocks s07–s10 and s12 re-authored July 11 against the guide v1.1, pending block re-render**; all other spoken lines unchanged — see scope notes.)

## Settings header

- **Status:** **s07–s10 and s12 re-authored July 11, pending block re-render** (v1.0 audio for those steps is superseded; do not assemble with it). Voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3. 12 blocks `WC-01-05-s01.mp3` … `WC-01-05-s12.mp3` + a joined `WC-01-05-full-narration-v1.0.mp3`. Per-step render seconds recorded here after generation; timestamps below are estimates at ~145 wpm plus break time and a 0.4 s tail.
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

- Teaches the universal record pattern on the **Cancellation Reasons** list: list → **+ New Record** → the **Cancellation Reasons Edit** form (**Cancel** / **Save Changes**) → **Cancel**, with the delete guardrail (**No, Keep**) taught as a rule — this lean list has no row-click detail view and no **Edit** / **Delete** controls (observed July 11).
- The list page (steps 1–6) is grounded in the July 9 corpus and re-confirmed live in the July 11 credentialed corpus (33 rows; tiles 33 / 30 / 3; counter 1–25 of 33). Refund Reasons was empty on July 11 ("No refund reasons found…"); Rewash Reasons held 12 live rows.
- **s07–s10 and s12 RE-AUTHORED July 11 — pending re-render.** The v1.0 rendered takes spoke a row-click read-only detail view with **← Back** / **Edit** / **Delete**, which the July 11 credentialed capture shows does not exist on this list. The blocks below now match the guide v1.1: a row click stays on the list (s07), no record-level buttons exist here (s08), the form's two exits are read ahead of opening it (s09), the delete guardrail is taught as a rule for record types that carry a **Delete** (s10), and the recap reflects the lean flow (s12). The **+ New Record** form at `settings-cancellation-reasons-edit.html` (**Cancellation Reasons Edit**, **Reason Details** tab, required **DESCRIPTION \*** field, **Cancel** / **Save Changes**) is confirmed by the corpus, so s11 stands as rendered. Re-render s07–s10 and s12 as v1.1 audio before assembly.
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

[01:37 | Step 7 — Row click stays on the list]
Back on Cancellation Reasons, click a row. <break time="1.4s" /> And notice what does not happen. No detail page opens. This lean reference list keeps you right here; its only record action is that green New Record button.

_[Director: confirmed July 11 — a row click stays on the list; hold on the unchanged list after the click so the non-event reads on camera.]_

[01:53 | Step 8 — No record buttons here]
Now scan the page for record buttons. <break time="1.2s" /> There is no Back, no Edit, no Delete. On richer record types you will meet that three-button band; this list simply never grew one. Everything it can do sits in New Record.

[02:11 | Step 9 — The form's two exits]
Before we open the form, learn its two exits. <break time="1.2s" /> Cancel walks away clean. Save Changes writes to the shared tenant, so on the demo you always leave through Cancel. A star marks anything the form requires.

_[Director: nothing is opened at this step — the form itself opens at step 11 via + New Record (Cancellation Reasons Edit page; required DESCRIPTION * field; Cancel / Save Changes). Indicate only.]_

[02:28 | Step 10 — Delete guardrail]
And the delete rule still applies, even without a Delete button here. <break time="1.2s" /> Where other record types carry one, it always asks first. Choose No, Keep at that confirmation, and treat Yes, Delete as off-limits on anything you did not create.

_[Director: July 11 — no Delete control exists on this page, so there is no confirmation to record here. Dialog text stays parked. This block is a rule card; never click Yes, Delete anywhere.]_

[02:46 | Step 11 — New record]
Back on the list, open New Record. <break time="1.4s" /> The same form again, blank this time, ready for a fresh entry. You are only here to see the layout, so close it the way you closed the edit: Cancel. Nothing gets added.

_[Director: the + New Record form was captured July 11 — Cancellation Reasons Edit page, Reason Details tab, required DESCRIPTION * field, Cancel / Save Changes, sample-record name "Customer Request" over the blank form (demo quirk). Leave via Cancel. Spoken s11 matches; no re-render needed.]_

[03:04 | Step 12 — Recap]
So that is the pattern on this lean list. <break time="1.0s" /> List, then New Record, then the form, and Cancel back out. Two exits keep you safe: Cancel out of a form, No, Keep out of any delete you meet elsewhere. One demo quirk to expect: the form header may name a sample record over a blank form. That is the tenant, not a bug. Richer record types add the detail view, and this rhythm carries straight into them.

_(Estimated narration total: ~217 s ≈ 03:37 at 145 wpm. Re-authored per-step estimates: s07 16.3 · s08 17.7 · s09 16.5 · s10 18.2 · s12 33.3. Final per-step seconds recorded in the Settings header after render.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, and value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice throughout, and no em or en dashes in the narration. Verbatim UI labels, the navigation path, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and inside director notes' mandated "parked" phrasing.
- Grounding: steps 1–6 trace to the July 9 digests and are re-confirmed by the July 11 credentialed digests (`settings-cancellation-reasons-rows`, `settings-refund-reasons`, `settings-rewash-reasons`). Blocks s07–s10 and s12 were re-authored July 11 against the credentialed digests (`cancellation-reason-detail`, `cancellation-reason-new`) and the guide v1.1: no row-click detail view, no ← Back / Edit / Delete on this list, form reached via + New Record only; s11's blank form is confirmed as rendered.
- Nothing committed: Save Changes, Yes, Delete, and + New Record Save are never clicked; the delete guardrail stops at the confirmation with No, Keep wherever a Delete control exists.
- Status **s07–s10 and s12 re-authored July 11, pending block re-render**; remaining blocks stay valid as rendered. Verification stamp current: **Verified against demo.washcentral.com on July 11, 2026.**

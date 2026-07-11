# WC-01-05 — Interface conventions: the universal record pattern · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-01-05-record-pattern-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (12 steps).
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/settings-cancellation-reasons.html`.
- [ ] Snagit: cursor highlight ON, click animation ON.
- [ ] Nothing open: no command palette, no Ask Shyne modal, no dialogs. The settings sidebar shows the **Operations** group expanded with **Cancellation Reasons** selected.
- [ ] Load check: at record time the list must load its real rows. If it shows "Couldn't load cancellation reasons (Failed to fetch)" (the July 9 corpus state) or **0–0 of 0**, stop and report before recording; do not record the error state as the lesson.
- [ ] Steps 7–11 open the detail view, the Edit form, the delete confirmation, and the + New Record form. These were NOT captured in the July 9 corpus; confirm every on-screen label live before rolling and update this shot list if the platform differs (labels currently marked TBD — parked).
- [ ] Do NOT click **Save Changes**, **Yes, Delete**, or any Save inside **+ New Record** at any point. Record delete only up to the confirmation, then **No, Keep**.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open **Settings** from the left rail, then the **Operations** group, then click **Cancellation Reasons** | Header eyebrow **SETTINGS** over title **Cancellation Reasons**; breadcrumb **Settings › Cancellation Reasons**; settings sidebar **Operations** expanded showing **Cancellation Reasons**, **Refund Reasons**, **Rewash Reasons**, **Event Types**, **Transaction Types**, **Issue Status Types**, **Prepaid Book Types**, **Prepaid Book Type Types** | 3s | Callout ① "list page — start of the pattern"; slow cursor sweep down the Operations sidebar items |
| 2 | Point to the KPI strip across the top | Three tiles: **Total Reasons**, **Shown on POS**, **Hidden** (values reflect the loaded list) | 3s | Callout ② bracketing the three tiles; zoom-in 150% on the tile labels (1.5s) |
| 3 | Point to the list card header, the search box, then the **+ New Record** button | Card eyebrow **SETTINGS · CANCELLATION REASONS**, title **Cancellation Reasons List**, search placeholder **Search cancellation reasons…**, green **+ New Record** at top-right of the card | 3s | Callout ③ on the card title and search box; separate callout tagging **+ New Record** "add a record (step 11)"; do not click |
| 4 | Point to the column headers, then hover the first data row | Two sortable columns **DESCRIPTION** and **SHOW ON POS**; each row is one reason with its description and Show-on-POS state | 3s | Callout ④ on the two column headers; note "one row = one record"; row values must be confirmed live (TBD — parked); do not click yet |
| 5 | Drop to the pagination footer | **ROWS PER PAGE** with **25 / 50 / 100** (default 25), a range counter, and page controls **‹ 1 ›** | 3s | Callout ⑤ on the footer; zoom-in 150% on ROWS PER PAGE + counter (1.5s) |
| 6 | In the **Operations** sidebar click **Refund Reasons**, review, then click back to **Cancellation Reasons** | Refund Reasons list: single **Total Reasons** KPI, single **DESCRIPTION** column (no Show on POS), search **Search refund reasons…**, same **+ New Record** and pagination | 4s | Callout ⑥ "same pattern, fewer fields"; hold on the single column, then return to Cancellation Reasons |
| 7 | Click any row on **Cancellation Reasons** to open its record | A read-only detail view opens for that reason (header band + fields) | 3s | Callout ⑦ "row → detail view"; detail view NOT in July 9 corpus — confirm layout live (TBD — parked); expect the fixed-sample-record demo quirk (a set sample record may open regardless of the row) |
| 8 | Point to the top-right buttons on the detail view | **← Back**, an **Edit** button (label varies, e.g. **Edit Record**), and a red **Delete** button | 3s | Callout ⑧ on the three buttons; confirm exact labels live (TBD — parked); STOP ring on **Delete** (used only in step 10) |
| 9 | Click **Edit**, hold on the form, change nothing | Editable form with the record's fields; **Cancel** and **Save Changes** buttons; required fields marked `*` | 4s | Callout ⑨ on **Cancel** vs **Save Changes**; STOP ring on **Save Changes** "never click"; fields TBD — parked; leave the form via **Cancel** on screen |
| 10 | On the detail view, click **Delete**, let the confirmation open, then click **No, Keep** | Confirmation dialog warns the action cannot be undone, with **No, Keep** and **Yes, Delete**; choosing **No, Keep** dismisses it and the record stays | 3s | Callout ⑩ on the guardrail; STOP ring on **Yes, Delete** "never click"; record up to the dialog, then **No, Keep**; dialog text TBD — parked |
| 11 | Return to the list, click **+ New Record**, hold on the blank form, then click **Cancel** | A blank version of the edit form opens; leaving via **Cancel** returns to the list with nothing added | 3s | Callout ⑪ "blank form, same shape"; blank form fields TBD — parked; leave via **Cancel**; never Save |
| 12 | Slowly sweep the cursor back across the list, recapping the flow | Recap state on the list: list → record → **Edit** (**Cancel** to exit) → **+ New Record** (**Cancel** to exit); the two safe exits are **Cancel** and **No, Keep** | 3s | Callout ⑫ tying the flow together; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 3:30 (narration estimated at ~145 wpm; final timing pending render). If any unexpected dialog, error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment — do not improvise. Session-timeout behavior is out of scope here (see WC-01-03).

## If Claude drives while you record

This lesson was authored from the July 9 verification corpus with no live browser. The list page (steps 1–6) is fully specified from the captured digests and screenshots. Steps 7–11 (detail view, Edit form, delete confirmation, + New Record form) were not in the corpus and carry TBD — parked labels; a live authenticated session is required to confirm them, and this shot list should be updated to the observed labels before the take. Send is never triggered anywhere in this lesson: **Save Changes**, **Yes, Delete**, and any Save inside **+ New Record** are never clicked. Say "drive lesson 01-05" once live access and record-time label confirmation are in place.

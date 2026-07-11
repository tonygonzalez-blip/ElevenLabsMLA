# WC-01-05 · Interface conventions: the universal record pattern (Foundations)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

WashCentral shows records the same way almost everywhere: a list of rows, a row that opens a read-only detail view, an **Edit** form reached from that view, and a blank form for adding a record. Learn that one shape here on the **Cancellation Reasons** list under Settings and you can read every record page in the platform, from Customers to Services to Employees. You will also learn the two safe exits, **Cancel** out of an edit and **No, Keep** out of a delete, so you can open and inspect any record in the shared demo tenant without changing a thing.

## Audience and prerequisites

Internal Micrologic technicians who are new to WashCentral. You should be signed in (WC-01-01) and comfortable with list conventions from WC-01-04: the KPI strip, the search box, and pagination. This lesson uses a small Settings reference list as its example because the pattern is easiest to see there, but the same list-to-record flow drives the CRM, Sales, and Team modules you will use every day.

## Navigation path

`Settings → Operations → Cancellation Reasons`. The example list lives in the Settings area under the **Operations** group. Two sibling lists in that same group, **Refund Reasons** and **Rewash Reasons**, follow the identical pattern and are used as a cross-check in this lesson.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on.

1. From the left rail open **Settings**, then in the settings sidebar open the **Operations** group and click **Cancellation Reasons**. **Expected:** the header shows the eyebrow **SETTINGS** above the title **Cancellation Reasons**, and the breadcrumb reads **Settings › Cancellation Reasons**. In the settings sidebar the **Operations** group is expanded, listing **Cancellation Reasons**, **Refund Reasons**, **Rewash Reasons**, **Event Types**, **Transaction Types**, **Issue Status Types**, **Prepaid Book Types**, and **Prepaid Book Type Types**. This is a list page, the first stop in the record pattern.

2. Read the KPI strip across the top of the page. **Expected:** three summary tiles, **Total Reasons**, **Shown on POS**, and **Hidden**. They summarize the list underneath: how many reasons exist, how many appear on the POS, and how many are hidden. (In the July 9 capture the tiles rendered a blank dash because the list itself did not load; the live counts are parked, see Notes.)

3. Look at the list card. **Expected:** the card eyebrow reads **SETTINGS · CANCELLATION REASONS** and the title reads **Cancellation Reasons List**. A search box sits below it with the placeholder **Search cancellation reasons…**, and a green **+ New Record** button sits at the top-right of the card. **+ New Record** is how you add a record; it opens a blank form, covered in step 11.

4. Read the column headers and the row area. **Expected:** two sortable columns, **DESCRIPTION** and **SHOW ON POS**. Each row is one cancellation reason: the description text, plus whether that reason shows on the POS. Clicking a row opens that record's detail view, the next stop in the pattern. (In the July 9 capture the row area showed the message "Couldn't load cancellation reasons (Failed to fetch)" and the counter read **0–0 of 0**, so the individual reasons and their flags could not be verified this session, see Notes.)

5. Read the pagination footer. **Expected:** a **ROWS PER PAGE** control with options **25**, **50**, and **100** (default 25), a range counter (for example **0–0 of 0** in this capture), and the page controls **‹ 1 ›**. Every list pages the same way, so you set rows-per-page once and let the counter tell you how many records match.

6. See the pattern repeat on a sibling list: in the **Operations** group click **Refund Reasons** (or **Rewash Reasons**). **Expected:** the same layout in a lighter variant, a single **Total Reasons** KPI and a single **DESCRIPTION** column with no Show on POS flag, the search box **Search refund reasons…**, and the same **+ New Record** button and pagination footer. The fields differ, the shape does not. Return to **Cancellation Reasons**.

7. Back on **Cancellation Reasons**, click any row to open its record. **Expected (pattern; contents TBD — parked):** a read-only detail view opens for that reason. The July 9 corpus did not capture this view because it opens on row-click and the list did not load, so its exact contents are parked (new parked item, number pending; see report). Per the learning plan a detail view opens read-only with a header band and the record's fields, so you can inspect a record before deciding to change it.

8. On the detail view, find the standard buttons at the top-right. **Expected (pattern; labels TBD — parked):** **← Back** returns you to the list, an **Edit** button (the label varies by record type, for example **Edit Record**) opens the editable form, and a red **Delete** button removes the record behind a confirmation. These three affordances sit on record detail views across WashCentral; the exact labels on this page await a live authenticated walk (parked).

9. Click **Edit** to open the form, and change nothing. **Expected (pattern; fields TBD — parked):** an editable form opens with the record's fields, and two buttons close it: **Cancel** discards your changes and **Save Changes** writes them. Required fields are marked with an asterisk (`*`). In the shared demo tenant you always leave by **Cancel**. The specific fields on this form are not in the July 9 corpus (parked). **[READ-ONLY] Exercise 1.5a:** open a record, open its **Edit** form, change nothing, and leave with **Cancel**. Confirm you can name every button on the way in and out.

10. Note the delete path without using it. **Expected (pattern; dialog text TBD — parked):** the red **Delete** button is always confirmation-gated. Per the learning plan the dialog warns that the action cannot be undone and offers **No, Keep** and **Yes, Delete**. In the demo tenant, stop at this dialog and click **No, Keep** every time. The exact dialog wording here awaits a live walk (parked). You never click **Yes, Delete** on a record you did not create.

11. Return to the list and click **+ New Record**. **Expected (form contents TBD — parked):** a blank version of the edit form opens for adding a record. **+ New Record** is confirmed on the list; the blank form's fields are not in the July 9 corpus (parked). Leave it the same way you leave an edit, with **Cancel**. Nothing is added.

12. Recap the pattern and the demo quirk. **Expected:** you have walked list → row → detail view (**← Back** / **Edit** / **Delete**) → edit form (**Cancel** / **Save Changes**) → **+ New Record** → **Cancel**. Two exits keep tenant data safe: **Cancel** out of any form, **No, Keep** out of any delete. Demo quirk to expect: several detail and edit pages in this tenant open a fixed sample record regardless of the row you clicked (DISCREPANCIES.md, demo-data notes), so a mismatched record is expected here and is not a data bug.

**Knowledge check (from the learning plan, reworded):** which two buttons close an edit form, and which one is safe to use in the shared demo tenant? Answer: **Cancel** and **Save Changes** both close the form; **Cancel** is the safe one, because it discards your changes without writing to the tenant.

## Expected results

From any list in WashCentral you can open a record, read its detail view, open the **Edit** form, and back out with **Cancel** without touching tenant data. You can recognize the same shape on a sibling list, the **Refund Reasons** page, where only the fields differ. And you know the two guardrails by heart: **Cancel** leaves any form without writing, and **No, Keep** leaves any delete dialog without removing anything.

## Notes and troubleshooting (observed behavior only)

- Observed July 9 load state: the **Cancellation Reasons**, **Refund Reasons**, and **Rewash Reasons** lists all returned "Couldn't load … (Failed to fetch). Check your connection to the AI agent service.", with the counter at **0–0 of 0** and the KPI tiles blank. The individual reason rows, the Show-on-POS flags, and the true counts (the learning plan's orientation mentions roughly 33 cancellation reasons) could not be verified this session and are parked.
- The record detail view, the **Edit** form, the delete confirmation, and the **+ New Record** blank form open on interaction and were not captured in the July 9 static corpus. Their layouts and field labels here are described from the learning plan and marked **TBD — parked**; confirm them on a live authenticated walk before recording.
- Fixed-sample-record demo quirk: detail and edit pages in this tenant may load a fixed sample record regardless of the row clicked (DISCREPANCIES.md, demo-data notes). This is expected in the demo and is not a data error.
- Two safe exits: **Cancel** leaves any form without writing, and **No, Keep** leaves any delete dialog without removing anything. **Save Changes** and **Yes, Delete** are the committing actions and stay off-limits on records you did not create.
- The parts confirmed from the July 9 corpus are the page header and breadcrumb, the settings sidebar **Operations** group, the KPI labels, the list card title and search placeholder, the **DESCRIPTION** and **SHOW ON POS** columns, the **+ New Record** button, and the pagination controls.
- The idle "Still there?" session prompt can appear on these pages. It is out of scope for this lesson and is covered in WC-01-03 (parked item #9).

## Related lessons

WC-01-04 List conventions · WC-02-03 Edit Customer / New Customer forms · WC-12-07 Operations reason codes and Automation.

**Verified against demo.washcentral.com on July 9, 2026.**

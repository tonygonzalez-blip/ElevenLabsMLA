# WC-01-05 · Interface conventions: the universal record pattern (Foundations)

v1.1 · July 11, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 11, 2026.**

## Purpose

WashCentral shows records the same way almost everywhere: a list of rows, a record form, and a blank version of that form for adding a record. Learn that shape here on the **Cancellation Reasons** list under Settings and you can read every record page in the platform, from Customers to Services to Employees. This particular reference list is a lean version of the pattern: it has no row-click detail view and no **Edit** or **Delete** controls (observed July 11, 2026), so its record form is reached through **+ New Record**; richer record types add the detail view and its buttons. You will also learn the two safe exits, **Cancel** out of a form and **No, Keep** out of a delete, so you can inspect records in the shared demo tenant without changing a thing.

## Audience and prerequisites

Internal Micrologic technicians who are new to WashCentral. You should be signed in (WC-01-01) and comfortable with list conventions from WC-01-04: the KPI strip, the search box, and pagination. This lesson uses a small Settings reference list as its example because the pattern is easiest to see there, but the same list-to-record flow drives the CRM, Sales, and Team modules you will use every day.

## Navigation path

`Settings → Operations → Cancellation Reasons`. The example list lives in the Settings area under the **Operations** group. Two sibling lists in that same group, **Refund Reasons** and **Rewash Reasons**, follow the identical pattern and are used as a cross-check in this lesson.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on.

1. From the left rail open **Settings**, then in the settings sidebar open the **Operations** group and click **Cancellation Reasons**. **Expected:** the header shows the eyebrow **SETTINGS** above the title **Cancellation Reasons**, and the breadcrumb reads **Settings › Cancellation Reasons**. In the settings sidebar the **Operations** group is expanded, listing **Cancellation Reasons**, **Refund Reasons**, **Rewash Reasons**, **Event Types**, **Transaction Types**, **Issue Status Types**, **Prepaid Book Types**, and **Prepaid Book Type Types**. This is a list page, the first stop in the record pattern.

2. Read the KPI strip across the top of the page. **Expected:** three summary tiles, **Total Reasons 33**, **Shown on POS 30**, and **Hidden 3** (observed live July 11, 2026). They summarize the list underneath: how many reasons exist, how many appear on the POS, and how many are hidden.

3. Look at the list card. **Expected:** the card eyebrow reads **SETTINGS · CANCELLATION REASONS** and the title reads **Cancellation Reasons List**. A search box sits below it with the placeholder **Search cancellation reasons…**, and a green **+ New Record** button sits at the top-right of the card. **+ New Record** is how you add a record; it opens a blank form, covered in step 11.

4. Read the column headers and the row area. **Expected:** two sortable columns, **DESCRIPTION** and **SHOW ON POS**. Each row is one cancellation reason: the description text, plus a **Yes**/**No** chip for whether that reason shows on the POS. Live rows observed July 11 include **Aftermarket Large Item On Vehicle** (Yes), **Chargeback** (Yes), **Moved** (Yes), and **Sold Vehicle** (Yes); the three hidden ones are **COVID-19 (coronavirus)**, **Gained Employment with EWC**, and **Test**, each flagged **No**.

5. Read the pagination footer. **Expected:** a **ROWS PER PAGE** control with options **25**, **50**, and **100** (default 25), a range counter reading **1–25 of 33** on the July 11 capture, and the page controls **‹ 1 2 ›**. Every list pages the same way, so you set rows-per-page once and let the counter tell you how many records match.

6. See the pattern repeat on a sibling list: in the **Operations** group click **Refund Reasons** (or **Rewash Reasons**). **Expected:** the same layout in a lighter variant, a single **Total Reasons** KPI and a single **DESCRIPTION** column with no Show on POS flag, the search box **Search refund reasons…**, and the same **+ New Record** button and pagination footer. On July 11, **Refund Reasons** was empty (**Total Reasons 0**, body "No refund reasons found. The POS database may not be configured for this tenant yet.") while **Rewash Reasons** held 12 live rows (**Bugs on Car** through **Wheels Not Clean**); an empty sibling still shows the full list shape. The fields differ, the shape does not. Return to **Cancellation Reasons**.

7. Back on **Cancellation Reasons**, click any row. **Expected (observed July 11):** on this list, a row click does not open a separate read-only detail view. The July 11 credentialed capture clicked a row and the page stayed on the **Cancellation Reasons** list, with the same controls it always carries: **+ New Record**, the search box, and the pagination footer. The learning plan's list → read-only detail step does not appear on this page; the record form is reached through **+ New Record** (step 11). Reported as a discrepancy; whether other record types (Customers, Services, Employees) open a row-click detail view is documented in their own lessons.

8. Look for record-level buttons on the page. **Expected (observed July 11):** none of the learning plan's detail-view buttons, **← Back**, **Edit**, or **Delete**, exist on this page. The only record action the list offers is **+ New Record**. Treat the plan's three-button detail band as a pattern to look for on richer record types, not something this reference list has.

9. Read the edit form's two exits, ahead of opening it in step 11. **Expected (observed July 11 on the form this page opens):** the form carries exactly two closing buttons, **Cancel** and **Save Changes**, shown top-right of the record header and repeated at the bottom of the form. **Cancel** discards, **Save Changes** writes. Required fields are marked with an asterisk (`*`). In the shared demo tenant you always leave by **Cancel**. **[READ-ONLY] Exercise 1.5a:** once you open the form in step 11, change nothing and leave with **Cancel**. Confirm you can name both buttons on the way in and out.

10. Note the delete guardrail, without a delete control to point at. **Expected:** this page exposes no **Delete** button (observed July 11), so there is nothing to delete here. On record types that do carry a red **Delete**, the learning plan's rule stands: it is confirmation-gated, and in the demo tenant you stop at the dialog and click **No, Keep** every time. The dialog wording remains unverified on this platform (parked). You never click **Yes, Delete** on a record you did not create.

11. Click **+ New Record**. **Expected (observed July 11):** the page **Cancellation Reasons Edit** opens at `settings-cancellation-reasons-edit.html`, breadcrumb **Settings › Cancellation Reasons Edit**. A record header band shows an avatar and a record title with a **Cancellation Reasons** badge, and the **Cancel** / **Save Changes** pair sits top-right. One tab, **Reason Details**, holds the section **REASON DETAILS** with a single required field, **DESCRIPTION \***, empty and ready for input; **Cancel** and **Save Changes** repeat below the field. Demo quirk: the header band read **Customer Request**, a sample record name, even though the form arrived blank. Leave with **Cancel**. Nothing is added.

12. Recap the pattern and the demo quirk. **Expected:** you have walked list → **+ New Record** → form (**Cancel** / **Save Changes**) → **Cancel**, and you know the two safe exits by heart: **Cancel** out of any form, **No, Keep** out of any delete dialog you meet elsewhere. On this reference list the row-click detail view and its **← Back** / **Edit** / **Delete** band do not exist (observed July 11); expect that fuller pattern on richer record types and confirm it there. Demo quirk to expect: edit pages in this tenant can show a fixed sample record name (here, **Customer Request** over a blank form) regardless of what you clicked (DISCREPANCIES.md, demo-data notes); that is the tenant, not a data bug.

**Knowledge check (from the learning plan, reworded):** which two buttons close an edit form, and which one is safe to use in the shared demo tenant? Answer: **Cancel** and **Save Changes** both close the form; **Cancel** is the safe one, because it discards your changes without writing to the tenant.

## Expected results

From this list you can read the live rows and their **SHOW ON POS** flags, open the **Cancellation Reasons Edit** form through **+ New Record**, and back out with **Cancel** without touching tenant data. You can recognize the same shape on a sibling list, the **Refund Reasons** page, where only the fields differ. You know this list has no row-click detail view and no **Edit** or **Delete** controls, so the richer three-button record band is something to look for on other record types. And you know the two guardrails by heart: **Cancel** leaves any form without writing, and **No, Keep** leaves any delete dialog without removing anything.

## Notes and troubleshooting (observed behavior only)

- Row data was observed live on the July 11, 2026 credentialed pass: 33 cancellation reasons (30 shown on POS, 3 hidden), matching the learning plan's orientation count of roughly 33. **Rewash Reasons** carried 12 live rows; **Refund Reasons** was empty with the line "No refund reasons found. The POS database may not be configured for this tenant yet." (an empty state, not an error). The July 9 sweep had returned "Couldn't load … (Failed to fetch)" on all three because of an agent-service token issue — resolved.
- Row-click behavior, observed July 11: clicking a **Cancellation Reasons** row left the page on the list. No read-only detail view, and no **← Back**, **Edit**, or **Delete** control, exists on this page; its only record action is **+ New Record**. This contradicts the learning plan's universal list → detail → Edit/Delete pattern for this record type and is reported as a discrepancy. The delete confirmation dialog therefore also remains unobserved on this platform (its wording stays parked).
- The **+ New Record** form was captured July 11: page **Cancellation Reasons Edit** (`settings-cancellation-reasons-edit.html`), one **Reason Details** tab, one required **DESCRIPTION \*** field, **Cancel** / **Save Changes** top-right and repeated below the form.
- Fixed-sample-record demo quirk, re-observed July 11: the edit page's header band showed the sample record name **Customer Request** over a blank form (DISCREPANCIES.md, demo-data notes). This is expected in the demo and is not a data error.
- Two safe exits: **Cancel** leaves any form without writing, and **No, Keep** leaves any delete dialog without removing anything. **Save Changes** and **Yes, Delete** are the committing actions and stay off-limits on records you did not create.
- The idle "Still there?" session prompt can appear on these pages. It is out of scope for this lesson and is covered in WC-01-03 (parked item #9).

## Related lessons

WC-01-04 List conventions · WC-02-03 Edit Customer / New Customer forms · WC-12-07 Operations reason codes and Automation.

**Verified against demo.washcentral.com on July 11, 2026.**

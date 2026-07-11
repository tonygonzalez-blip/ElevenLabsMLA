# WC-PB-11 · PB-11 Who changed this? (Troubleshooting playbook)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This is a troubleshooting playbook, not a feature tour. A caller asks "who changed this, and what was it before?" You work a fixed sequence across the two audit pages that answer it. The **Audit Log** tells you who touched a record, when, from which location, and from which IP address. **Change History** carries the part the caller actually wants: the field that changed, its old value, and its new value. You read both, and you never edit an entry. An audit trail is only worth anything because nobody corrects it, so your job here is to read who and what, then answer or escalate.

## Audience and prerequisites

Internal Micrologic technicians on Tech Support. You should be comfortable reading a WashCentral list (WC-01-04) and know where the **IT & Support** module sits in the rail (WC-01-01). Two audit pages carry this playbook, both under **IT & Support → Audit**: the **Audit Log** and **Change History**. You never edit or delete an audit entry; a correction to the underlying record is made in that record's own module, or escalated, while the audit trail stays as the untouched history.

## Navigation path

Both pages live under `IT & Support → Audit`. The **Audit Log** opens directly at `audit-log.html`. **Change History** is reached from the **AUDIT** group in the left sidebar once you are on the **Audit Log** page. In the July 9 corpus, its own address (`audit-changes.html`) returned an HTTP 404, so it is opened by in-app navigation from the Audit Log page, not by typing the URL.

## Steps

One action per step. This is a read-only diagnostic sequence: open two audit pages, read their columns, and never edit an entry.

1. Take the ticket and set the order. **Expected:** you have the record or setting in question and roughly when it changed. State the rule up front: the audit trail is read-only, so you are here to read who and what, not to change anything. Two pages answer the ticket between them, and you read them in order.

2. Open the Audit module. **Expected:** from **IT & Support**, open **Audit**; the page lands on the **Audit Log** (breadcrumb **Audit › Audit Log**). The **AUDIT** group in the sidebar lists three pages: **Audit Log**, **User Activity**, and **Change History**. This playbook uses two of them: the **Audit Log** for who did what, and **Change History** for the before-and-after values. **User Activity** is the login history and belongs to PB-1.

3. Read the **Audit Log** to locate the event. **Expected:** the **Audit Log List** card shows seven columns: **DATE/TIME**, **USER**, **ACTION**, **MODULE**, **RECORD**, **LOCATION**, and **IP ADDRESS**. The change you are chasing is an **Updated** row; the other actions in this log are **Created**, **Deleted**, and **Login**. Read across one row and it tells you who made the change (**USER**), on which record (**RECORD**), in which part of the platform (**MODULE**), and from where (**LOCATION** and **IP ADDRESS**). Settings changes surface here too, with **MODULE** reading **Settings**. Narrow a busy log with **Filters ▾** or the **Search audit log…** box rather than scrolling. The tiles across the top (**Events Today**, **This Week**, **Unique Users**, **Critical Events**) and the **Action Types** panel show volume by category before you drill in. What this page does not carry is the value before and after; for that you move to **Change History**.

4. Open **Change History**. **Expected:** from the **AUDIT** group in the sidebar, click **Change History**. It opens the field-level change log for the platform. *(July 9 note: the direct URL `audit-changes.html` returned an HTTP 404 in today's corpus, so **Change History** is reachable only by this in-app navigation from the Audit Log page. The page's own layout, its tiles, and the exact rendered column headers could not be re-confirmed in this corpus: TBD — parked (new item; see the structured return). The column set read in Step 6 is carried from the project's verified audit map and the PB-11 plan, not from a July 9 capture of this page.)*

5. Filter **Change History** to the record. **Expected:** narrow the log to the module or record in question so you are reading only its changes. *(The exact filter control on this page is not observable in the July 9 corpus: TBD — parked. The intent, per the PB-11 plan, is to filter by module, for example CRM, Inventory, or Settings, so a single record's changes stand alone.)*

6. Read the field-level change. **Expected:** per the project's verified audit map (DISCREPANCIES.md #18) and the PB-11 plan, **Change History** records each change at field level with a **FIELD** column (the field that changed), an **OLD VALUE** column (what it was), and a **NEW VALUE** column (what it became), together with the user who made the change and the timestamp. That row is the literal answer to "what was it before." *(The exact rendered column labels are attributed to the plan and flagged for a live in-app re-walk: TBD — parked.)*

7. Assemble the answer from both pages. **Expected:** you now answer the caller precisely. From **Change History**: the field and its exact old value and new value. From the **Audit Log**: the **USER** who made the change, the **DATE/TIME**, and the **IP ADDRESS** it came from. Give the exact old-to-new values, not a paraphrase. "The price changed" is not an answer; the two values are.

8. Document or escalate. **Expected:** write the packet: the record, the field, the old and new values, the user, the timestamp, and the IP address, with screenshots. You do not reverse the change from the audit pages; a correction is made in the record's own module (or escalated to whoever owns it), and the audit trail is left as history. If the change looks unauthorized, that is a security escalation, and the **IP ADDRESS** and **USER** are the two values the next tier will want first.

9. Recap the order. **Expected:** you ran it in sequence: the **Audit Log** to find who, when, where, and from which IP; then **Change History** for the field-level old-to-new; then the exact answer or a clean escalation. Nothing in the demo tenant was changed, and no audit entry was edited.

## Expected results

You can take a "who changed this?" ticket and work it in order. You read the **Audit Log** to find the **Updated** event, the **USER** behind it, the **DATE/TIME**, the **RECORD** and **MODULE**, and the **IP ADDRESS** it came from. You open **Change History** through the audit sidebar and read the field-level **FIELD**, **OLD VALUE**, and **NEW VALUE**, and you give the caller the exact before-and-after rather than a paraphrase. Settings changes are found the same way, with **MODULE** reading **Settings**. You never edit an audit entry, and your escalation packet carries the record, the field, the old and new values, the user, the timestamp, and the IP address.

## Notes and troubleshooting (observed behavior only)

- The **Audit Log** page was captured cleanly on July 9: seven columns (**DATE/TIME**, **USER**, **ACTION**, **MODULE**, **RECORD**, **LOCATION**, **IP ADDRESS**), the four tiles, and the **Action Types** and **Event Severity** panels all render. The **IP ADDRESS** column is what ties a change to a workstation or location, which matters when a change looks unauthorized.
- **Change History** could not be re-verified on its own URL in the July 9 corpus: `audit-changes.html` returned an HTTP 404, while its sidebar entry renders as a live nav item on the working **Audit Log** page. Its field-level column set (**FIELD**, **OLD VALUE**, **NEW VALUE**) is carried from the project's verified audit map (DISCREPANCIES.md #18) and the PB-11 plan; the page's on-page layout and exact rendered labels are parked for a live in-app re-walk.
- Audit entries are read-only. Neither page has an edit path you should use for a correction; the **Export** and **+ New Record** controls on the **Audit Log** are not part of this read-only playbook and are not clicked.
- Settings changes appear in the **Audit Log** with **MODULE** = **Settings** (for example an **Updated** row on **Account Info**), so a "who changed a setting?" ticket is worked exactly like a record change: find the event here, then read the old-to-new in **Change History**.
- **User Activity**, the third page in the **AUDIT** group, is the per-user login history (logins, failed logins, roles). It answers "who signed in and when," not "who changed this," and belongs to PB-1.

## Knowledge check

1. A site manager says the price on a service changed and wants to know who did it and what it was before. Which two pages answer this, and what does each contribute? **Answer:** The **Audit Log** gives the **USER**, **DATE/TIME**, **RECORD**, **MODULE**, and **IP ADDRESS** of the **Updated** event. **Change History** gives the field-level **OLD VALUE** and **NEW VALUE**. Together they produce who, when, from where, and the exact before-and-after.
2. A caller asks who changed a setting, not a customer record. Does that change your approach? **Answer:** No. Settings changes surface in the **Audit Log** with **MODULE** = **Settings**; you work it the same way, then read the field-level old-to-new in **Change History**.
3. You have the answer. Should you correct the value from the audit page? **Answer:** No. Audit entries are read-only. A correction is made in the record's own module, or escalated, while the audit trail is left untouched as history.

## Related lessons

WC-13-02 Audit trio (Audit Log · User Activity · Change History) · PB-1 Login failures (audit User Activity) · WC-12-06 Users & Security (Settings changes) · WC-01-04 Reading a WashCentral list · WC-CERT-01 Certification (practical checkout #7, Who-changed-it).

**Verified against demo.washcentral.com on July 9, 2026.**

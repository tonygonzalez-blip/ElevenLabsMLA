# WC-PB-11 · PB-11 Who changed this? (Troubleshooting playbook)

v1.1 · July 11, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 11, 2026.**

## Purpose

This is a troubleshooting playbook, not a feature tour. A caller asks "who changed this, and what was it before?" You work a fixed sequence across the two audit pages that answer it. The **Audit Log** tells you who touched a record, when, from which location, and from which IP address. **Change History** carries the part the caller actually wants: the field that changed, its old value, and its new value. You read both, and you never edit an entry. An audit trail is only worth anything because nobody corrects it, so your job here is to read who and what, then answer or escalate.

## Audience and prerequisites

Internal Micrologic technicians on Tech Support. You should be comfortable reading a WashCentral list (WC-01-04) and know where the **IT & Support** module sits in the rail (WC-01-01). Two audit pages carry this playbook, both under **IT & Support → Audit**: the **Audit Log** and **Change History**. You never edit or delete an audit entry; a correction to the underlying record is made in that record's own module, or escalated, while the audit trail stays as the untouched history.

## Navigation path

Both pages live under `IT & Support → Audit`. The **Audit Log** opens directly at `audit-log.html`. **Change History** is reached from the **AUDIT** group in the left sidebar once you are on the **Audit Log** page. Its own address (`audit-changes.html`) returned an HTTP 404 in the July 9 sweep, so open it by in-app navigation, not by typing the URL; the July 11 pass captured the full page through that sidebar route.

## Steps

One action per step. This is a read-only diagnostic sequence: open two audit pages, read their columns, and never edit an entry.

1. Take the ticket and set the order. **Expected:** you have the record or setting in question and roughly when it changed. State the rule up front: the audit trail is read-only, so you are here to read who and what, not to change anything. Two pages answer the ticket between them, and you read them in order.

2. Open the Audit module. **Expected:** from **IT & Support**, open **Audit**; the page lands on the **Audit Log** (breadcrumb **Audit › Audit Log**). The **AUDIT** group in the sidebar lists three pages: **Audit Log**, **User Activity**, and **Change History**. This playbook uses two of them: the **Audit Log** for who did what, and **Change History** for the before-and-after values. **User Activity** is the login history and belongs to PB-1.

3. Read the **Audit Log** to locate the event. **Expected:** the **Audit Log List** card shows seven columns: **DATE/TIME**, **USER**, **ACTION**, **MODULE**, **RECORD**, **LOCATION**, and **IP ADDRESS**. The change you are chasing is an **Updated** row; the other actions in this log are **Created**, **Deleted**, and **Login**. Read across one row and it tells you who made the change (**USER**), on which record (**RECORD**), in which part of the platform (**MODULE**), and from where (**LOCATION** and **IP ADDRESS**). Settings changes surface here too, with **MODULE** reading **Settings**. Narrow a busy log with **Filters ▾** or the **Search audit log…** box rather than scrolling. The tiles across the top (**Events Today**, **This Week**, **Unique Users**, **Critical Events**) and the **Action Types** panel show volume by category before you drill in. What this page does not carry is the value before and after; for that you move to **Change History**.

4. Open **Change History**. **Expected (observed live July 11, 2026):** from the **AUDIT** group in the sidebar, click **Change History**. The page opens with the breadcrumb **Audit › Change History** and four KPI tiles: **84 Changes Today**, **420 This Week**, **12 Config Changes**, and **408 Data Changes**. Three panels sit below the band: **Change Volume** (Last 12 months, **5,040**, **↑ +8.2%**), **By Module** (**CRM 42% · Employees 28% · Settings 18% · Transactions 12%**), and **Change Types** (**74% DATA · 19% CONFIG · 7% DELETE**). Reach it by the sidebar link only; the direct URL 404'd on the July 9 sweep.

5. Filter **Change History** to the record. **Expected (observed July 11):** the **Change History List** card carries a **Filters ▾** control, a **Search change history…** box, and a **Search** button. Narrow the log to the module or record in question — the **By Module** panel tells you where the volume sits (CRM, Employees, Settings, Transactions) — so a single record's changes stand alone. You are reading a history, not editing one.

6. Read the field-level change. **Expected (observed live July 11, 2026):** the columns render as **DATE/TIME · USER · MODULE · FIELD · OLD VALUE · NEW VALUE**, confirming the audit map (DISCREPANCIES.md #18). The **Change History List** shows **3 records**; the top row reads **2025-06-01 10:44 · M. Gonzalez · Settings · Monthly Price · $29.99 · $34.99**, with a CRM **Customer Status** flip (**Active → At Risk**) and an Employees **Pay Rate** change (**$15.00 → $16.50**) beneath it. That row is the literal answer to "what was it before."

7. Assemble the answer from both pages. **Expected:** you now answer the caller precisely. From **Change History**: the field and its exact old value and new value. From the **Audit Log**: the **USER** who made the change, the **DATE/TIME**, and the **IP ADDRESS** it came from. Give the exact old-to-new values, not a paraphrase. "The price changed" is not an answer; the two values are.

8. Document or escalate. **Expected:** write the packet: the record, the field, the old and new values, the user, the timestamp, and the IP address, with screenshots. You do not reverse the change from the audit pages; a correction is made in the record's own module (or escalated to whoever owns it), and the audit trail is left as history. If the change looks unauthorized, that is a security escalation, and the **IP ADDRESS** and **USER** are the two values the next tier will want first.

9. Recap the order. **Expected:** you ran it in sequence: the **Audit Log** to find who, when, where, and from which IP; then **Change History** for the field-level old-to-new; then the exact answer or a clean escalation. Nothing in the demo tenant was changed, and no audit entry was edited.

## Expected results

You can take a "who changed this?" ticket and work it in order. You read the **Audit Log** to find the **Updated** event, the **USER** behind it, the **DATE/TIME**, the **RECORD** and **MODULE**, and the **IP ADDRESS** it came from. You open **Change History** through the audit sidebar and read the field-level **FIELD**, **OLD VALUE**, and **NEW VALUE**, and you give the caller the exact before-and-after rather than a paraphrase. Settings changes are found the same way, with **MODULE** reading **Settings**. You never edit an audit entry, and your escalation packet carries the record, the field, the old and new values, the user, the timestamp, and the IP address.

## Notes and troubleshooting (observed behavior only)

- The **Audit Log** page was captured cleanly on July 9: seven columns (**DATE/TIME**, **USER**, **ACTION**, **MODULE**, **RECORD**, **LOCATION**, **IP ADDRESS**), the four tiles, and the **Action Types** and **Event Severity** panels all render. The **IP ADDRESS** column is what ties a change to a workstation or location, which matters when a change looks unauthorized.
- **Change History** was captured live on July 11, 2026 through the AUDIT sidebar link (`verification/2026-07-11/digests/audit-changes-inapp.json`), clearing the July 9 parked marker. Observed: KPI band **84 / 420 / 12 / 408**, panels **Change Volume / By Module / Change Types**, columns **DATE/TIME · USER · MODULE · FIELD · OLD VALUE · NEW VALUE**, and three live rows led by **Monthly Price $29.99 → $34.99**. Its direct URL (`audit-changes.html`) 404'd on July 9, so keep reaching it in-app.
- Audit entries are read-only. Neither page has an edit path you should use for a correction; the **Export** and **+ New Record** controls on the **Audit Log** are not part of this read-only playbook and are not clicked.
- Settings changes appear in the **Audit Log** with **MODULE** = **Settings** (for example an **Updated** row on **Account Info**), so a "who changed a setting?" ticket is worked exactly like a record change: find the event here, then read the old-to-new in **Change History**.
- **User Activity**, the third page in the **AUDIT** group, is the per-user login history (columns **USER · ROLE · LAST LOGIN · LOGINS THIS MONTH · LOCATION · STATUS**, plus a page-level **Failed Logins** tile — observed July 11). It answers "who signed in and when," not "who changed this," and belongs to PB-1.

## Knowledge check

1. A site manager says the price on a service changed and wants to know who did it and what it was before. Which two pages answer this, and what does each contribute? **Answer:** The **Audit Log** gives the **USER**, **DATE/TIME**, **RECORD**, **MODULE**, and **IP ADDRESS** of the **Updated** event. **Change History** gives the field-level **OLD VALUE** and **NEW VALUE**. Together they produce who, when, from where, and the exact before-and-after.
2. A caller asks who changed a setting, not a customer record. Does that change your approach? **Answer:** No. Settings changes surface in the **Audit Log** with **MODULE** = **Settings**; you work it the same way, then read the field-level old-to-new in **Change History**.
3. You have the answer. Should you correct the value from the audit page? **Answer:** No. Audit entries are read-only. A correction is made in the record's own module, or escalated, while the audit trail is left untouched as history.

## Related lessons

WC-13-02 Audit trio (Audit Log · User Activity · Change History) · PB-1 Login failures (audit User Activity) · WC-12-06 Users & Security (Settings changes) · WC-01-04 Reading a WashCentral list · WC-CERT-01 Certification (practical checkout #7, Who-changed-it).

**Verified against demo.washcentral.com on July 11, 2026.**

# WC-10-02 · Support Tickets (IT & Support)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

Support Tickets is the platform's own ticket queue, the one your team works inside WashCentral. This lesson reads the page top to bottom so you can size up the support load in a few seconds: the four status KPIs, the three summary panels (**Ticket Volume**, **By Category**, **Ticket Health**), and the **Ticket List** with its columns and example rows. You also see where **+ New Record** opens a blank ticket and how to back out of it without saving. By the end you can tell how many tickets are open, what kind of issues dominate, and who owns any given ticket.

## Audience and prerequisites

Internal Micrologic technicians working in IT & Support. You should be signed in and able to reach a module from the left sidebar (WC-01-01). This queue is the tenant's own platform tickets. It is separate from the cross-customer NOC view in WC-10-01 and from the embedded Zoho help desk in WC-10-03. Nothing here edits a record. The one write action, opening a new ticket, is opened and then cancelled.

## Navigation path

`IT & Support → Support Tickets`. The page opens on the ticket dashboard, with the three summary panels across the top and the **Ticket List** below them.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on.

1. In the left sidebar under **SUPPORT**, click **Support Tickets**. **Expected:** the page loads titled **Support Tickets** with the breadcrumb **Support › Support Tickets**. The module reads **IT & Support** at the top-left, and the **SUPPORT** sidebar group lists **ML Command Center**, **Site Detail (Demo)**, **Support Tickets**, **Help Desk (Zoho)**, **Knowledge Base**, **System Alerts**, and **Training Requests**, with **Support Tickets** highlighted.
2. Look at the four tiles across the top of the page. **Expected:** four status counters read **18 Open**, **6 In Progress**, **4 Resolved Today**, and **4.2 hrs Avg Resolution**. Together they frame the backlog and the pace of clearing it before you read a single row.
3. Look at the **Ticket Volume** panel on the left. **Expected:** it plots a trend line for the **Last 12 months**, with the total **342** and **↑ +7%** in the top corner and month markers from **Jan** to **Dec**. This is direction over time, not today's queue.
4. Look at the **By Category** panel in the middle, subtitled **Issue breakdown**. **Expected:** four bars show the mix: **Billing 34%**, **Technical 28%**, **Feedback 22%**, and **General 16%**. Billing questions are the largest share, so most tickets originate there.
5. Look at the **Ticket Health** panel on the right, subtitled **Resolution overview**. **Expected:** three figures over a segmented bar read **72% RESOLVED**, **18% IN PROGRESS**, and **10% OPEN**. That is the queue's overall state, read left to right.
6. Move down to the **Ticket List** card below the panels. **Expected:** the card is headed **Ticket List** with **18 records** beneath it, and two buttons sit in the top-right corner: **+ New Record** and **Export**. **+ New Record** opens a blank ticket; **Export** downloads the list, and it is not clicked while authoring or recording.
7. Look at the row directly above the table. **Expected:** a search box shows the placeholder **Search support tickets…**, with **Filters ▾** and a **Search** button to its right. You can type a ticket number or a few words of the subject to narrow the list, or open **Filters ▾** to filter by field.
8. Read the table's column headers. **Expected:** seven columns run left to right: **TICKET #**, **SUBJECT**, **LOCATION**, **PRIORITY**, **STATUS**, **ASSIGNED TO**, and **CREATED**. Each header carries a sort control. **ASSIGNED TO** is the one you check first when a client asks who is handling their issue.
9. Read the ticket rows. **Expected:** four tickets are listed: **TKT-4201** "POS not printing receipts" (**MLAS**, **High**, **In Progress**, **IT Support**); **TKT-4200** "Customer overcharge dispute" (**SSNB**, **High**, **Open**, **Manager**); **TKT-4199** "Membership not activating" (**Piscataway**, **Medium**, **Open**, **Support**); and **TKT-4198** "Tunnel E-stop false trigger" (**MLAS**, **Critical**, **Resolved**, **Tech Team**). The visible **PRIORITY** values run **Critical / High / Medium**, **STATUS** runs **Open / In Progress / Resolved**, and **ASSIGNED TO** names a person or a team.
10. Look at the footer of the list. **Expected:** **ROWS PER PAGE:** is set to **25** (options **25 / 50 / 100**), the counter reads **1–4 of 4**, and the pager shows **‹ 1 ›**. Note that the card header says **18 records** while only four rows load here; in this demo tenant, treat the four as sample rows and the counts as demo values.
11. **[TRAIN- required]** Click **+ New Record** to open the blank ticket form, hold on it, then leave without saving. **Expected:** a blank new-ticket form opens. Its field layout and its exit control were not captured in the July 9 corpus (the New Record form probe returned a 404), so they are parked: TBD — parked (NEW parked item; see Notes). At recording time, open the form, hold two to three seconds, then dismiss it without touching a field and without saving. Never click a Save or Submit control on this form.
12. Read the page as a whole one last time. **Expected:** the KPIs give you the backlog, **By Category** and **Ticket Health** tell you what kind of work it is and how much is cleared, and the **Ticket List** shows each ticket with its **PRIORITY**, **STATUS**, and **ASSIGNED TO**. That is enough to triage before you open any single ticket.

## Expected results

From the Support Tickets page you can read the current backlog off the four KPIs, see which issue types dominate from **By Category**, gauge how much of the queue is cleared from **Ticket Health**, and scan the **Ticket List** to find who owns a ticket and how urgent it is. Opening **+ New Record** and cancelling it changes nothing. No row is edited, sent, or exported in this lesson.

## Exercises and knowledge check

- **Exercise 10.2a [TRAIN- required]:** using **+ New Record**, create a ticket named `TRAIN-Test ticket — printer offline` at the lowest priority, confirm it appears in the **Ticket List**, then delete it after logging it in RECORDS-CREATED.md. Do not touch any existing ticket. (The new-ticket form's fields are parked; verify the priority option live before filing.)
- **Knowledge check:** a site manager calls because their POS will not print receipts and wants to know who is on it, when it was logged, and how big the open backlog is. Which column names the owner, which column carries the date, and which KPI tells you how many tickets are still open right now?

## Notes and troubleshooting (observed behavior only)

- The **By Category** panel renders as a horizontal bar breakdown labeled **Issue breakdown**, not a donut chart. The learning plan and curriculum describe it as a "donut"; the platform shows bars. Reported as a discrepancy.
- The list footer reads **1–4 of 4** while the card header says **18 records**. Only four sample rows load in the demo tenant, so read the counts as demo values rather than a live queue depth.
- The blank **+ New Record** form was not in the July 9 corpus; the edit-form probe returned an HTTP 404. Its field layout and exit control are parked. Open and cancel it at recording time, and pause the take if the live form does anything beyond a plain open-and-cancel.
- **Export** downloads the ticket list. It is not clicked while authoring or recording.
- The idle **Still there?** session prompt can surface on any page after inactivity. It is out of scope here (see WC-01-03).

## Related lessons

WC-10-01 ML Command Center (NOC) · WC-10-03 Help Desk (Zoho) · WC-10-04 System Alerts · WC-01-04 List conventions.

**Verified against demo.washcentral.com on July 9, 2026.**

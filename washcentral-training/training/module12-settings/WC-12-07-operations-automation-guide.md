# WC-12-07 · Operations reason codes & Automation (Settings)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson is a support reference for two neighbouring Settings groups. The **Operations** group holds the reason-code and type lists that fill dropdowns across the platform: **Cancellation Reasons**, **Refund Reasons**, **Rewash Reasons**, **Event Types**, **Transaction Types**, and **Issue Status Types**. The **Automation** group holds the background jobs and their records: **Task Scheduler**, **Task Parameters**, and **Mass SMS Log**. By the end you can open each page, read what its columns mean, and know which page answers a "missing reason" ticket and which one answers a "the scheduled report never arrived" ticket. Every screen here stays read-only for you, and you never modify the scheduler or run a task.

## Audience and prerequisites

Internal Micrologic technicians on Tech Support. You should be comfortable opening **Settings** and reading a WashCentral list (columns, search box, KPI tiles) from WC-01-04. Nothing is changed in this lesson. Editing a reason list, a scheduled task, or a task parameter is production-admin work and is not done in the demo tenant.

## Navigation path

Both groups live in the Settings left sidebar. The reason lists are under `Settings → Operations`, and the background jobs are under `Settings → Automation`. The Settings header also carries an **Operations▾** dropdown and an **Automation▾** dropdown that reach the same pages.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. This is a read-only reference: locate **+ New Record** on each page but never click it, and on **Task Scheduler** never run or edit a task.

1. Open **Settings** and expand the **Operations** group in the left sidebar. **Expected:** the group opens to its pages, in order: **Cancellation Reasons**, **Refund Reasons**, **Rewash Reasons**, **Event Types**, **Transaction Types**, **Issue Status Types**, **Prepaid Book Types**, and **Prepaid Book Type Types**. These lists are the source of the dropdown choices staff pick elsewhere, so a "the reason I need isn't in the list" ticket ends on one of these pages. This lesson opens the first six; the two Prepaid Book pages are documented with prepaid-book configuration.

2. Click **Cancellation Reasons**. **Expected:** the page opens with the card **Cancellation Reasons List** and two columns, **DESCRIPTION** and **SHOW ON POS**. A KPI band across the top reads **Total Reasons**, **Shown on POS**, and **Hidden**, the search box reads "Search cancellation reasons…", and **+ New Record** sits top-right. **SHOW ON POS** is what decides whether a reason appears to a cashier at the register, so a reason that exists but is set not to show on POS will not appear when a cashier cancels a wash. Cancellation Reasons is the only list in this group that carries the POS-visibility flag.

3. Read the list body and note the July 9 state. **Expected:** in place of rows the list shows "Couldn't load cancellation reasons (Failed to fetch). Check your connection to the AI agent service.", and the three KPI tiles read "—". Row data on this page loads from the agent service, so that message signals a data-service connection problem rather than an empty list. The column layout and KPI labels captured intact; the actual reason rows and counts were not returned on July 9 and are parked (reported as a new parked item). *Orientation note (learning plan, unverified July 9):* the July 8 map recorded 33 cancellation-reason records; the July 9 corpus could not confirm the count.

4. Click **Refund Reasons**. **Expected:** the page opens with the card **Refund Reasons List**, a single column **DESCRIPTION**, one KPI tile **Total Reasons**, the search box "Search refund reasons…", and **+ New Record**. This list feeds the reason picker on the refund screen. The body showed the same load error on July 9, so the reason rows are parked.

5. Click **Rewash Reasons**. **Expected:** the page opens with the card **Rewash Reasons List**, a single column **DESCRIPTION**, one KPI tile **Total Reasons**, the search box "Search rewash reasons…", and **+ New Record**. This is the list a cashier or attendant picks from when re-running a wash. The body showed the same load error on July 9, so the reason rows are parked.

6. Click **Event Types**, then **Transaction Types**. **Expected:** both pages share the same shape as the refund and rewash lists: one **DESCRIPTION** column, a single **Total Types** tile, **+ New Record**, and a search box ("Search event types…" and "Search transaction types…"). Event Types classifies logged events, and Transaction Types classifies money movements for reporting. Both showed the same load error on July 9, so their rows are parked.

7. Click **Issue Status Types**. **Expected:** this page loaded on July 9, so you can read real rows. The card **Issue Status Types List** shows **5 records** in one **DESCRIPTION** column: **Open**, **In Progress**, **Pending Parts**, **Resolved**, and **Closed**. The KPI band reads **Total Types 5** and **Active 5**, and a **Status Breakdown** panel splits the workflow stages (Open 20%, In Progress 20%, Pending 20%, Resolved / Closed 40%). This page also adds a **Filters** control and a **Search** button next to the search box. These five statuses are the stages an issue moves through, so they are the values you will see on issue and ticket records elsewhere.

8. Switch to the **Automation** group in the left sidebar. **Expected:** the group opens to **Task Scheduler**, **Task Parameters**, **Mass SMS Log**, and **User Levels**. The first three are this lesson's automation pages. **User Levels** is filed here as well but is a security control documented in WC-12-06.

9. Click **Task Scheduler**. **Expected:** the page opens with a KPI band reading **Total Tasks 18**, **Active 16**, **Running Now 2**, and **Failed 0**, plus a **Task Distribution** panel (Daily 44%, Hourly 28%, Weekly 17%, Other 11%). The **Failed** tile is your first read when a background job is suspected: a non-zero **Failed** count is the signal that a scheduled job did not complete.

10. Read the **Task Scheduler List** and its columns. **Expected:** five columns, **TASK NAME**, **SCHEDULE**, **LAST RUN**, **NEXT RUN**, and **STATUS**. Three job rows were observed on July 9:

    | TASK NAME | SCHEDULE | LAST RUN | NEXT RUN | STATUS |
    |---|---|---|---|---|
    | Daily Report Email | Daily 6:00 AM | Today 6:00 AM | Tomorrow 6:00 AM | Active |
    | SMS Campaigns | Hourly | 1 hour ago | In 52 min | Active |
    | Database Backup | Daily 2:00 AM | Today 2:00 AM | Tomorrow 2:00 AM | Active |

    For a "scheduled report never arrived" ticket, this is where triage starts: find the **Daily Report Email** row and read its **LAST RUN** and **STATUS**. A stale **LAST RUN** or a **STATUS** that is not **Active** tells you the job, not the mailbox, is the problem.

11. Locate **+ New Record**, **Filters**, and **Search**, and note the count. **Expected:** the page carries the same **+ New Record**, **Filters**, and **Search** controls as the other lists. For support work you read this page; you never edit a schedule, add a task, or run one. Note a corpus observation to report: the KPI band and the card both state **18** tasks (**Total Tasks 18**, "18 records"), but the list rendered only the three rows above and its footer read "Showing 1–3 of 3 records" on July 9. The other fifteen task definitions were not observable and are parked.

12. Click **Task Parameters**. **Expected:** the page opens with the card **Task Parameters List** and four columns, **NAME**, **TABLE**, **UPDATED BY**, and **UPDATED**, a single **Total Parameters** tile, and the search box "Search task parameters…". Task Parameters are the reusable values the scheduled jobs read when they run, and the **UPDATED BY** and **UPDATED** columns show who last changed a parameter and when. The body showed the same load error on July 9, so the parameter rows are parked.

13. Click **Mass SMS Log**. **Expected:** the page opens with the card **Mass SMS Log List** and five columns, **DATE**, **PHONE**, **EMAIL**, **BARCODE**, and **STATUS**, a single **Total Entries** tile, and the search box "Search SMS log entries…". This is the delivery record for mass texts, so for a "the customer says they never got the text" ticket the **STATUS** column is where you confirm whether a message was sent. The body showed the same load error on July 9, so the log rows are parked.

14. Recap the two groups against the tickets they answer. **Expected:** **Operations** holds the reason and type lists that populate dropdowns, so a "missing reason" ticket ends there, and **SHOW ON POS** on Cancellation Reasons decides register visibility. **Automation** holds the jobs and their records, so a "scheduled report never arrived" ticket starts at **Task Scheduler** (**LAST RUN**, **STATUS**, **Failed**), a "what does this job use" question goes to **Task Parameters**, and a "did the text send" question goes to **Mass SMS Log**.

## Expected results

From Settings you can open the six Operations reason and type lists and the three Automation pages and read them without changing anything. You can name what each column means: **SHOW ON POS** controls register visibility of a cancellation reason, the five **Issue Status Types** are the stages an issue moves through, and the **Task Scheduler** columns tell you when a job last ran and when it runs next. You can point a "missing reason" ticket at the right Operations list and a "scheduled report never arrived" ticket at the **Task Scheduler** row. Opening or reading any of these pages changes nothing, and you never run or edit a task.

## Notes and troubleshooting (observed behavior only)

- On July 9 every list in this lesson except **Issue Status Types** and **Task Scheduler** showed "Couldn't load … (Failed to fetch). Check your connection to the AI agent service." in place of rows, with KPI tiles reading "—". Row data on these pages loads from the agent service, so that message points to a data-service connection problem, not an empty configuration. Each page's column layout and KPI labels were captured intact; the row values are parked (reported as a new parked item).
- **Cancellation Reasons** is the only Operations reason list with a **SHOW ON POS** column. A reason that exists but is not shown on POS will not appear to a cashier at the register.
- **Issue Status Types** loaded on July 9 with five rows: **Open**, **In Progress**, **Pending Parts**, **Resolved**, **Closed**. Treat these as the workflow stages you will see on issue records; the other reason lists follow the same list-and-column pattern.
- **Task Scheduler** reported **18 Total Tasks** but rendered only three rows ("Showing 1–3 of 3 records") on July 9. The three observed jobs are documented above; the remaining fifteen task definitions were not observable and are parked. Never modify the scheduler and never run a task from this page.
- The legacy WashAssist User Guide (§16.9) listed a **Time Clock Edit Reasons** page under Operations. WashCentral has no such page; the Operations group holds the reason and type lists named in this lesson plus the two Prepaid Book pages (project map, DISCREPANCIES.md #20). Do not look for a Time Clock Edit Reasons page.
- **User Levels** appears in the **Automation** sidebar group alongside the three automation pages, but it is a security control covered in WC-12-06, not part of this lesson.

## Knowledge check

1. A cashier reports that a cancellation reason they need is missing at the register. Which page and column explain it? **Answer:** **Settings → Operations → Cancellation Reasons**, the **SHOW ON POS** column; a reason set not to show on POS will not appear to a cashier, and a genuinely missing reason is added there as a new record by an admin.
2. "The daily report email never arrived." Where do you start, and what do you read? **Answer:** **Settings → Automation → Task Scheduler**, the **Daily Report Email** row; read its **LAST RUN** and **STATUS**, and check the **Failed** KPI tile.
3. A customer says they never received a mass text. Which page holds the delivery record, and which column confirms it went out? **Answer:** **Settings → Automation → Mass SMS Log**, the **STATUS** column.

## Related lessons

WC-12-06 Users & Security · WC-01-04 Reading a WashCentral list · WC-12-08 Customer Portal and AI Agent · WC-13-02 Audit trio.

**Verified against demo.washcentral.com on July 9, 2026.**

# WC-08-01 · Maintenance Issues (work orders) (Operations)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson is the technician's tour of **Maintenance Issues**, the page in the **Operations** module where every equipment problem across your sites is tracked as a work order. By the end you can read the page top to bottom: the four **KPI** tiles that summarize the current load, the three insight panels that show trend, priority mix, and pipeline, and the **Issue List** with its columns and live example rows. You will also know where **+ New Issue** and **Export** sit and how to open a blank issue at recording time without saving anything.

## Audience and prerequisites

Internal Micrologic technicians who have finished the Foundations module. You should be signed in and able to reach the left sidebar, which is where WC-01-01 (global navigation) leaves you. No maintenance background is assumed. This lesson reads the list and its summaries only; the sibling maintenance pages (Maintenance Schedule, Equipment Registry, Checklists, Parts & Supplies) are covered in WC-08-02, and issue status configuration lives in Settings (WC-12-07).

## Navigation path

**Maintenance Issues** lives in the **Operations** module. From the left sidebar, open the **MAINTENANCE** group and click **Issues**: `Operations → MAINTENANCE → Issues` (`maint-issues.html`). The breadcrumb above the title reads **Maintenance › Maintenance Issues**. The global header tools at the top-right (**Search ⌘K**, **Ask Shyne**, and your **MG** avatar) are the same on every page and are out of scope here; they are covered in WC-01-02.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on.

1. From the left sidebar, open the **MAINTENANCE** group and click **Issues**. **Expected:** the **Maintenance Issues** page loads. The breadcrumb reads **Maintenance › Maintenance Issues** and the page title is **Maintenance Issues**. Every equipment problem logged across your sites shows up here as one work order.
2. Read the KPI strip across the top. **Expected:** four tiles summarize the current state: **Open Issues** (3), **In Progress** (1), **High Priority** (3), and **Avg Resolution** (3 days). These four numbers tell you how much work is outstanding and how fast it usually clears before you read a single row.
3. Look at the first insight panel, **Issues Reported**. **Expected:** the panel is subtitled **Last 12 months** and plots issue volume over the year. It shows a total of 18 with a **↑ +2** change marker and a trend line running from **Jan** to **Dec**. This is where you check whether reported problems are rising or steady.
4. Look at the middle panel, **Issues by Priority**. **Expected:** subtitled **By severity level**, it breaks the issues into **Low** (20%), **Medium** (20%), **High** (40%), and **Critical** (20%), each as a share of the total. This is the triage view: when the High and Critical shares climb, that is where attention goes first.
5. Look at the third panel, **Resolution Status**. **Expected:** subtitled **Current issue pipeline**, it splits the work into **RESOLVED** (20%), **PROGRESS** (80%), and **BLOCKED** (0%). A blocked issue is stuck waiting on a part or a person, so a rising **BLOCKED** share is the one to escalate.
6. Move down to the list card and read its header. **Expected:** the card is labeled **MAINTENANCE · ISSUES** with the title **Issue List** and the subtitle **5 records · work order tracking**. This card is the working list; the panels above it are the summary.
7. Find the two buttons at the top-right of the **Issue List** card. **Expected:** **+ New Issue** (the teal button) opens a blank work order, and **Export** pulls the current list out to a file. Do not click **Export**; it is the download action and is out of scope here. Locate both so you know where they are.
8. [READ-ONLY at recording time] Open **+ New Issue** to document the blank form, then leave it without saving. **Expected:** the blank issue form is where a technician records a new problem (what broke, where, and how urgent). At recording time the operator opens this form only to show its layout, then exits with **Cancel**. Never click **Save**; nothing is logged. The blank form's field layout was not captured in the July 9 corpus, so its exact fields are TBD — parked (new parked item; see the lesson's structured return).
9. Look at the search row under the buttons. **Expected:** a search box with the placeholder **Search maintenance issues…**, a **Filters ▾** control, and a **Search** button. Typing a fragment finds an issue by title; **Filters ▾** narrows the list. On a long list this is how you reach one ticket quickly.
10. Read the column headers on the **Issue List** table. **Expected:** seven columns run left to right: **LOCATION**, **TITLE**, **STATUS**, **PRIORITY**, **ASSIGNED TO**, **CREATED BY**, and **DATE**. Read across a row and you have the whole story of one work order in a single line.
11. Read the live example rows. **Expected:** five issues are listed, including **Air dryer not reaching temp** at **SSNB** (**Open**, high), **POS 2 touch screen unresponsive** at **SSNB** (**Open**, medium), **Tunnel conveyor belt squeaking** at **MLAS** (**In Progress**, high), **Bay door sensor misaligned** at **MLAS** (**Open**, low), and **Chemical pump #3 leak** at **MLAS** (**Resolved**, critical). The **STATUS** chips (**Open**, **In Progress**, **Resolved**) and the priority values (high, medium, low, critical) show each issue at its current stage.
12. Check the **ASSIGNED TO** and **CREATED BY** columns. **Expected:** in this demo tenant both columns show a dash placeholder on every row; no owner or reporter is filled in. In live use these carry names, and a row with no owner is your cue that someone still needs to pick it up.
13. Read the footer under the list. **Expected:** the counter reads **Showing 1–5 of 5 records** with a **‹ 1 ›** page control. All five issues fit on one page here; when a busy network fills the list, the page arrows walk you through the rest.
14. Recap the page. **Expected:** the four KPI tiles tell you the load, the three panels show the trend, priority mix, and pipeline, and the **Issue List** is where each fix is tracked from **Open** to **Resolved**. **+ New Issue** starts a work order, and the columns tell you where any issue stands.

## Expected results

You can open **Maintenance Issues** from `Operations → MAINTENANCE → Issues`, read the four KPI tiles and the three insight panels to size up the current maintenance load, and work the **Issue List** by its seven columns. You can locate **+ New Issue** and **Export**, open a blank issue at recording time to see its layout, and leave without saving. You can read any row as a complete work order, from its site and title through its status, priority, and date.

## Notes and troubleshooting (observed behavior only)

- The four KPI tiles (**Open Issues**, **In Progress**, **High Priority**, **Avg Resolution**) are summaries of the list below; they change as issues are logged and resolved. Read them first to gauge the load.
- **PROGRESS** in the **Resolution Status** panel is the same idea as the **In Progress** status on individual rows: work that is underway but not yet resolved. **BLOCKED** at 0% means nothing is currently stuck.
- The **ASSIGNED TO** and **CREATED BY** columns show a dash for every row in the demo tenant. Do not read that as a bug; the demo data simply has no owner or reporter set. Live tenants populate these.
- **+ New Issue** opens a create form. During authoring it is opened only to document layout and closed with **Cancel**; it is never saved. Its field layout could not be observed in the July 9 corpus (the create form was not captured), so the fields are parked rather than described.
- **Export** is a download action and is not clicked in this lesson. Locate it, then move on.
- Priority is rendered in lower case on the rows (high, medium, low, critical), while the **Issues by Priority** panel capitalizes the levels (**Low**, **Medium**, **High**, **Critical**). They refer to the same four levels.

## Related lessons

WC-08-02 Maintenance Schedule, Equipment Registry, Checklists, Parts & Supplies · WC-08-03 Incident Reports · WC-12-07 Operations reason codes (issue status types) · WC-01-04 List conventions.

**Verified against demo.washcentral.com on July 9, 2026.**

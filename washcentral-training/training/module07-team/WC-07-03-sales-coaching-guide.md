# WC-07-03 · Sales Coaching (QA)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson is a read tour of the Sales Coaching area in the Team module: the **QA Dashboard**, the **Scoring Scripts** library, and the **Conversations** log. WashCentral records staff sales interactions, scores each one against a script, and rolls the results up here. By the end you can read the dashboard KPIs and every panel on it, name the seven checkpoints the platform grades against, open the Scoring Scripts library and read what each script covers, and open the Conversations list to find any recorded interaction. Every screen stays read-only for you. Nothing here is changed, sent, or exported.

## Audience and prerequisites

Internal Micrologic technicians who support store managers using Sales Coaching. You should be able to open the **Team** module and read a WashCentral dashboard and list, the KPI tiles, panels, and table columns, from the earlier Team lessons (WC-07-01, WC-07-02). No coaching experience is assumed. Editing a script, flagging a conversation, exporting the log, or opening a scored interaction for review is out of scope; those are manager and admin actions and are not performed while you learn the pages.

## Navigation path

`Team → SALES COACHING → QA Dashboard` (`qa-dashboard.html`). In the left sidebar the **SALES COACHING** group sits between **EMPLOYEES** and **GAMIFICATION**, and it holds three pages: **QA Dashboard**, **Scoring Scripts**, and **Conversations**. This lesson walks all three from that group.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. This is a read-only reference: locate action buttons such as **+ New Script**, **Export CSV**, **Make Default**, and **Review**, but never click them, and do not open a scored conversation.

1. Open the **Team** module and, in the left sidebar under **SALES COACHING**, click **QA Dashboard**. **Expected:** the **QA Dashboard** page opens (breadcrumb **Sales Coaching › QA Dashboard**). The **SALES COACHING** group shows its three pages: **QA Dashboard**, **Scoring Scripts**, and **Conversations**.

2. Read the four KPI tiles across the top. **Expected:** the band reads **76%** **Avg Score This Month**, **284** **Conversations Recorded**, **68%** **Above Target (75%)**, and **+4.2%** **vs. Last Month**. That is the month at a glance: the average score, how many interactions fed it, the share clearing the 75% target, and the direction against last month.

3. Read the **Average Score Trend** panel. **Expected:** the panel is labelled **Last 12 weeks** and shows the score climbing to **76%** with **↑ +4.2%**, plotted against a dashed **Target 75%** line from **Wk 1** to **Wk 12**. The line sitting above the dashed target is the fast read that the team is clearing the bar.

4. Read the **Score Distribution** panel. **Expected:** subtitle **By letter grade**, with five bars: **A (90–100%)** 18%, **B (75–89%)** 50%, **C (60–74%)** 22%, **D (50–59%)** 6%, and **F (<50%)** 4%. Half the interactions land in the B band. The A and B bands together are the share at or above target.

5. Read the **Checkpoint Hit Rates** panel. **Expected:** subtitle **How often each criteria is met — last 30 days**, listing seven graded behaviors with a hit rate each: **Greeted customer** 94%, **Recommended service** 81%, **Offered upgrade** 61%, **Presented membership ⚡** 47%, **Mentioned promotion** 58%, **Mentioned free vacuum** 76%, and **Proper closing** 88%. Each row is one thing the platform listens for in a sales interaction, and the percentage is how often the team did it.

6. Read the **Coaching Opportunity** callout below the checkpoints. **Expected:** the ⚡ callout reads "Membership presentation is below target. Focus team training on membership pitch scripts." It pulls out the weakest checkpoint, **Presented membership ⚡** at 47%, and turns it into a next step. This is the panel a manager acts on first.

7. Read the **Top Performers** panel on the right. **Expected:** subtitle **This month · by avg score**, ranking five employees with their conversation count and average: 1 Sofia L. (34 convs) 92%, 2 Marcus R. (28 convs) 87%, 3 Alex J. (41 convs) 83%, 4 Keisha M. (19 convs) 74%, and 5 Devon T. (22 convs) 71%. Below the list sits a **View All Conversations** button. Locate it; do not click it yet.

8. Read the **Recent Conversations** table at the bottom. **Expected:** the section (eyebrow **SALES COACHING · RECENT ACTIVITY**) is titled **Recent Conversations** with the subtitle **Last 10 recorded interactions across all locations**, and two buttons top-right, **Scoring Scripts** and **View All**. Its columns are **EMPLOYEE**, **DATE & TIME**, **LOCATION**, **DURATION**, **SCRIPT**, **SCORE**, and **STATUS**, with a **Review** button per row. In the July 9 capture the **SCRIPT** column reads "—" on every row (the script name is not populated on these rows) and **SCORE** shows the grade and letter, for example 95% (A), with **STATUS** "scored".

9. In the sidebar, click **Scoring Scripts**. **Expected:** the **Scoring Scripts** page opens (breadcrumb **Sales Coaching › Scoring Scripts**) with its own KPI band: **2** **Active Scripts**, **7** **Avg Checkpoints**, **1** **Draft**, and **284** **Scored This Month**. The count that matched the dashboard, 284, is the same pool of scored interactions counted a different way.

10. Read the **Scoring Script Library**. **Expected:** the card is titled **Scoring Script Library** with the subtitle **Define what the AI listens for and how each interaction is graded**, and a **+ New Script** button top-right. Three script cards are listed, each with a status chip, a one-line description, a checkpoint count, its total weight, its location scope, and a target:
   - **Standard Wash Script** (**ACTIVE · DEFAULT**): "Full interaction script for standard wash sale — greeting through close"; 8 checkpoints, 100% total weight, All locations, Target: 75%.
   - **Membership Upsell Focus** (**ACTIVE**): "Conversion-focused script for driving Unlimited membership sign-ups"; 5 checkpoints, 100% total weight, All locations, Target: 80%.
   - **Returning Customer Re-engagement** (**DRAFT**): "Win-back script for lapsed members — draft, not yet active"; 4 checkpoints, 100% total weight, All locations, Target: 70%.
   Each card carries **Edit** and **Duplicate**; the non-default active script also carries **Make Default**. For support work you read these, you do not change them.

11. Read the **Industry Best Practices for Sales Scoring** callout under the cards. **Expected:** the 💡 callout summarizes how scoring is usually weighted, revenue-critical checkpoints such as membership and upsell weighted highest, compliance items at medium weight, soft skills such as greeting and closing lowest, with a 75 to 80% pass threshold. Read it as guidance, not as a control. The script contents behind **Edit** and **+ New Script** are not opened in this lesson (see Notes).

12. In the sidebar, click **Conversations**. **Expected:** the **Conversations** page opens (breadcrumb **Sales Coaching › Conversations**) with its KPI band: **284** **Total Recorded**, **76%** **Avg Score**, **68%** **Above Target**, and **12** **Needs Coaching**. The first three echo the dashboard; **Needs Coaching** (12) is the count that flags who to review.

13. Read the **All Conversations** library and its controls. **Expected:** the section (eyebrow **SALES COACHING · CONVERSATION LIBRARY**) is titled **All Conversations** with **284 records** and three buttons top-right, **Export CSV**, **Dashboard**, and **Filters ▾**. A search box reads "Search employee or transcript…". The table columns are **TICKET #**, **EMPLOYEE**, **DATE & TIME**, **LOCATION**, **DURATION**, **CHECKPOINTS MET**, **SCORE**, and **STATUS**, with a **Review** button and a **🚩** flag button per row, and **‹ Prev** / **Next ›** paging at the foot. Each row is one recorded interaction: employee (with a **Live** chip), when, which location (SSNB, MLAS, Piscataway), how long, its checkpoint meter, its grade, and its status (**Scored**, some marked **✓ Member**). Locate **Export CSV** but do not click it, and do not open a row with **Review**.

14. **[READ-ONLY] exercise:** trace a coaching signal end to end. **Expected:** the dashboard **Coaching Opportunity** names membership as the weak checkpoint (**Presented membership ⚡** at 47%); the **Membership Upsell Focus** script on **Scoring Scripts** is the one that grades that behavior (target 80%); and the **Conversations** list is where a manager pulls the individual interactions to review, using the search box or **Filters ▾** to narrow to one employee. Reading those three pages in that order turns a low number into a specific action. (Knowledge-check question 1.)

15. Recap the three pages against what each answers. **Expected:** the **QA Dashboard** answers "how is the team doing and what is weak" (KPIs, **Checkpoint Hit Rates**, **Coaching Opportunity**, **Top Performers**). **Scoring Scripts** answers "what are we grading against" (the **Scoring Script Library** and each script's checkpoints, weight, and target). **Conversations** answers "show me the actual interactions" (the **All Conversations** log, searchable and filterable). You read all three; managers and admins act on them.

## Expected results

From the Team module you can open the three Sales Coaching pages and read them without changing anything. You can read the QA Dashboard KPIs and each panel, the **Average Score Trend**, the **Score Distribution** by letter grade, the seven **Checkpoint Hit Rates**, the **Coaching Opportunity** callout, the **Top Performers** ranking, and the **Recent Conversations** table. You can open **Scoring Scripts** and read the three scripts in the **Scoring Script Library** with their checkpoints, weight, scope, and target. And you can open **Conversations** and read the **All Conversations** log, its KPIs, columns, and search. Opening or reading any of the three changes nothing, sends nothing, and exports nothing.

## Notes and troubleshooting (observed behavior only)

- On the **Recent Conversations** table, the **SCRIPT** column reads "—" on every captured row, so the script that scored a given interaction is not shown there. The **Scoring Scripts** page is where scripts are named and defined.
- On the **Conversations** list, the **CHECKPOINTS MET** column renders "0/8" with an empty meter on the captured rows, even on rows graded A (95%). Treat that per-row count as demo data in this corpus, not as a real zero. The reliable checkpoint numbers are the aggregate **Checkpoint Hit Rates** on the QA Dashboard. (Reported as a new parked item.)
- Opening a scored interaction with **Review** leads to a per-conversation detail or transcript view that was not captured in the July 9 corpus, so this lesson stops at the list. What the review view shows is parked (reported as a new parked item); the walk is deliberately list-level.
- The **Filters ▾** menu on Conversations and the **Edit** / **+ New Script** forms on Scoring Scripts were not opened in this corpus; their contents are not documented here rather than guessed. Opening a form to read its layout is a manager or admin task.
- **Export CSV** (Conversations), **Make Default** (Scoring Scripts), and **🚩** (flag a conversation) are action controls. They are located in this lesson but never clicked; exporting, changing the default script, and flagging are out of scope for read-only support review.
- The 284 count appears on all three pages (**Conversations Recorded** on the dashboard, **Scored This Month** on Scoring Scripts, **Total Recorded** on Conversations). It is the same pool of scored interactions surfaced three ways, which is why the numbers agree.
- *Migration note (source: Migration FAQ): the Sales Coaching / QA scoring area has no equivalent in legacy WashAssist; it is new in WashCentral, so there is no prior workflow to map it to.*

## Knowledge check

1. A manager asks which sales behavior the team is weakest on this month, and what to do about it. Which panel and value answer it? **Answer:** the **Checkpoint Hit Rates** panel on the **QA Dashboard**; **Presented membership ⚡** is lowest at 47%, and the **Coaching Opportunity** callout names it and points to membership pitch training.
2. Where do you change what the AI listens for and how each interaction is graded, and who does that? **Answer:** the **Scoring Scripts** page (the **Scoring Script Library**); each script lists its checkpoint count, 100% total weight, scope, and **Target**. Managers and admins edit them with **Edit** or **+ New Script**; support reads them.
3. A manager wants every recorded interaction for one employee, not just the last ten on the dashboard. Where do you send them? **Answer:** the **Conversations** page (the **All Conversations** log, **284 records**), reachable from **View All** or **View All Conversations** on the dashboard; narrow it with the "Search employee or transcript…" box or **Filters ▾**.

## Related lessons

WC-07-01 Employees · WC-07-02 Schedules, Time Clock, Roles, User Groups · WC-07-04 Gamification · WC-01-04 Reading a WashCentral list.

**Verified against demo.washcentral.com on July 9, 2026.**

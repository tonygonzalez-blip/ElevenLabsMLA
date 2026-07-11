# WC-07-01 · Employees List and Detail (Team)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson is your tour of the **Employees** page under the **Team** module: the staff directory every technician reads when a question is about a person rather than a wash. By the end you can read the headcount KPIs and the three workforce insight cards, work the **Employee List** table and its columns, and open one employee to see the seven-tab profile that holds their record. The whole lesson stays read-only. You look, you do not change anything.

## Audience and prerequisites

Internal Micrologic technicians. You should be signed in and comfortable moving around the platform, which is where WC-01-01 (global navigation) and the WC-01-04 list conventions leave you. No prior work in the Team module is assumed. Schedules, Time Clock, Roles, and User Groups are their own lesson (WC-07-02) and are not covered here.

## Navigation path

`Team → Employees`. To open a person's record: `Team → Employees → [employee row]`.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. Steps 6 through 14 are read-only observation; you never click **Export**, **+ New Record**, or any edit control in this lesson.

1. From the left rail open **Team**, then **Employees**. **Expected:** the Employees page loads. The breadcrumb reads **Employees › Employees**, a four-tile KPI strip sits across the top, three insight cards sit under it, and the **Employee List** table fills the lower half.
2. Read the KPI strip left to right. **Expected:** four tiles: **48 Total Employees**, **44 Active**, **32 Full Time**, **16 Part Time**. This is the whole staff count at a glance, with the active and full-time versus part-time splits called out so you do not have to tally the table yourself.
3. Look at the first insight card. **Expected:** **Headcount Growth**, subtitle **Last 12 months**, showing **48** and **↑ +4.3%** over a trend line that runs Jan to Dec. It tells you whether the team is growing and by how much over the year.
4. Look at the middle insight card. **Expected:** **By Location**, subtitle **Staff distribution**: **MLAS 35%**, **SSNB 27%**, **Piscataway 23%**, **Other 15%**. This is where your people actually sit, which matters when a site is short-handed.
5. Look at the third insight card. **Expected:** **Employment Type**, subtitle **Workforce composition**: **67% FULL-TIME**, **33% PART-TIME**, and **4 INACTIVE**. Same story as the KPI tiles, drawn as the full-time to part-time mix plus the inactive count.
6. Look at the **Employee List** card header. **Expected:** the eyebrow reads **EMPLOYEES · STAFF DIRECTORY**, the title is **Employee List** with a **5 records** count, and two buttons sit top-right: **Export** and **+ New Record**. Find both and leave them alone. **Export** downloads data and **+ New Record** starts a new hire, and neither belongs in a read-only tour.
7. Read the column headers. **Expected:** **EMPLOYEE**, **PHONE**, **HIRE DATE**, **TYPE**, **STATUS**, **LOCATION**. A checkbox sits at the start of each row for selection, and the **EMPLOYEE** cell carries a round avatar with the person's initials next to their name and role.
8. Read one row and the role chips down the table. **Expected:** the first row is **Jose Martinez** with a **Shift Manager** chip, **973-555-0101**, **2022-03-15**, a **Full-Time** TYPE chip, a green **Active** STATUS chip, and **MLAS**. Down the five sample rows the role chips are **Shift Manager**, **Cashier**, **Tunnel Attendant**, **Detail Tech**, and **Greeter**, so the chip tells you the job at a glance without opening the record.
9. Find the search and paging controls. **Expected:** a search box with the placeholder **Search employees…**, a **Filters ▾** control and a **Search** button beside it, and at the foot of the table **Showing 1–5 of 5 records** with a **‹ 1 ›** pager. On a real site with a full roster this is how you find one person fast; the demo tenant carries a five-row sample, so everyone fits on page one.
10. Click the **Jose Martinez** row to open that employee's record. **Expected:** the employee detail view opens on its landing tab. The detail page was not captured in the July 9 corpus, so its exact URL, header band, and metric band read **TBD — parked (new parked item: employee detail-view internals not captured in the July 9 verification corpus; see structured return)**.
11. Read the tab bar across the top of the record. **Expected:** seven tabs: **Overview**, **Personal Info**, **Employment**, **Schedule**, **Emergency Contact**, **Notes & Audit**, and **Training**. **Overview** is the tab you land on. This seven-tab set is the verified live layout (DISCREPANCIES.md #13); it is not the legacy WashAssist record.
12. Stay on **Overview**. **Expected:** Overview is the analytics home for the person. It carries their performance, attendance, and earnings summaries (verified live, DISCREPANCIES.md #13). The specific panels and figures on Overview were not captured in the July 9 corpus and read **TBD — parked (new parked item: Overview analytics panels; see structured return)**.
13. Note what the six deeper tabs are for. **Expected:** **Personal Info**, **Employment**, **Schedule**, **Emergency Contact**, **Notes & Audit**, and **Training** each hold one slice of the employee record. Their field-level contents were not captured in the July 9 corpus and read **TBD — parked (new parked item: employee detail tab fields; see structured return)**.
14. Confirm you have changed nothing. **Expected:** this is a read-only lesson. You did not **Save**, **Delete**, **Export**, or open **+ New Record**, and you did not touch a field. Leave the record and return to the **Employee List** the same way you would step back out of any detail view.
15. Recap the page. **Expected:** the Employees page is the staff directory: headcount KPIs, three workforce insight cards, and a searchable table keyed by **EMPLOYEE**, **PHONE**, **HIRE DATE**, **TYPE**, **STATUS**, and **LOCATION**. One click on a row opens that person's seven-tab profile, with **Overview** as its analytics home.

## Expected results

From `Team → Employees` you can read the current headcount and its active, full-time, and part-time splits without counting rows, see where staff sit and how the team has grown over the year, and scan the directory table by name, role chip, phone, hire date, type, status, and location. Opening any row takes you to that employee's seven-tab record, landing on the **Overview** analytics tab. Nothing you did in this lesson changed a record.

## Notes and troubleshooting (observed behavior only)

- The KPI tiles and the **Employment Type** card describe the same workforce two ways. The tiles give raw counts (**48 / 44 / 32 / 16**); the card gives the full-time to part-time percentages plus the inactive count (**4 INACTIVE**). Read whichever answers the question in front of you.
- **Export** and **+ New Record** are located in this lesson but never clicked. **Export** is a download and **+ New Record** creates a person. Both sit outside a read-only tour, and creating or editing staff is its own approved, logged workflow.
- The live record has **seven** tabs (**Overview, Personal Info, Employment, Schedule, Emergency Contact, Notes & Audit, Training**). The legacy WashAssist employee record showed a different set (Personal Info, Employment Details, Employee Availability, Active Locations). When the legacy layout and the live platform disagree, the platform wins; this is logged as DISCREPANCIES.md #13.
- The employee detail view was not captured in the July 9 corpus (the probe resolved to a 404). Everything inside the record beyond the seven tab names and the fact that **Overview** carries performance, attendance, and earnings analytics is parked as a new item and marked **TBD — parked** in the steps above. Author the detail internals from a live walk once tenant access returns.
- The idle **Still there?** timeout prompt can appear on this page after inactivity, the same as anywhere in the platform. It is out of scope here; session behavior is covered in WC-01-03.

## Knowledge check

1. A manager asks how many people are on the active roster right now. Which KPI tile answers it, and which card would you open to see how that headcount has moved over the year?
2. Name the six columns of the **Employee List** and say which cell carries the role chip.
3. You open an employee and land on **Overview**. Name the other six tabs, and name the two buttons on the list page you must not click during a read-only review.

## Related lessons

WC-01-04 List conventions · WC-07-02 Schedules, Time Clock, Roles, User Groups · WC-07-03 Sales Coaching (QA).

**Verified against demo.washcentral.com on July 9, 2026.**

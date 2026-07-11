# WC-07-01 · Employees List and Detail (Team)

v1.1 · July 11, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 11, 2026.** (List page verified July 9; the row-click employee detail verified July 11, all seven tabs.)

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
10. Click the **Jose Martinez** row to open that employee's record. **Expected:** the **Employee Detail** page opens (`emp-employees-detail.html`; it only loads from this row click — the direct URL 404s). The breadcrumb reads **Employees › Employee Detail**. A header band shows the avatar, **Jose Martinez**, a **Shift Manager** role chip, the line **EMP-001 · Fort Lauderdale · Full-Time**, and three tag chips: **Employees**, **Operations**, **Active**. Three action buttons sit to the right: **← Back**, **Delete**, and **Edit Employee**. You use only **← Back** in this lesson; **Delete** and **Edit Employee** are never clicked. Under the header a five-tile metric band summarizes the person: **3 yrs 1 mo Tenure**, **168 Hours This Month**, **97.2% Attendance Rate**, **Active Status**, and **4.6 / 5 Performance**.
11. Read the tab bar across the top of the record. **Expected:** seven tabs: **Overview**, **Personal Info**, **Employment**, **Schedule**, **Emergency Contact**, **Notes & Audit**, and **Training**. **Overview** is the tab you land on. This seven-tab set is the verified live layout (DISCREPANCIES.md #13); it is not the legacy WashAssist record.
12. Stay on **Overview**. **Expected:** Overview is the analytics home for the person, laid out as five panels (all observed July 11): **Monthly Hours Worked** (Avg / Month **162**, Peak Month **Nov '25**, This Month **168**, YTD Total **488**), **Hours Breakdown** (Regular **78%**, Overtime **14%**, PTO / Holiday **6%**, Unpaid Leave **2%**, with **OT: 68 hrs YTD**), **Attendance Rate** (12-Mo Average **97.2%**, Missed Shifts **4**, Last Month **100%**), **Monthly Earnings** (YTD Total **$14,820**, Avg / Month **$3,860**, Last Month **$4,284**), and **Performance Score Trend** (Latest Score **4.6**, Location Avg **3.9**, Trend **↑ +0.4**, Reviews **8**). When a manager asks "how is this person doing," this one tab answers it.
13. Click through the six deeper tabs in order, reading only. **Expected:** each holds one slice of the record (all observed July 11). **Personal Info**: a **PERSONAL INFORMATION** panel (**Employee #**, **First Name**, **Last Name**, **Phone**, **Email**, **Date of Birth**, **SSN (Last 4)** shown masked, **Hire Date**, **Active**) and an **ADDRESS** panel (**Street Address**, **City**, **State**, **Zip**). **Employment**: **ROLE & CLASSIFICATION** (**Title**, **Department**, **Employment Type**, **FLSA Status**, **Pay Type**, **Pay Rate**), **ASSIGNMENT & REPORTING** (**Primary Location**, **Direct Manager**, **User Group**, **Hire Date**, **Last Review**, **Next Review**), and **BENEFITS & ENTITLEMENTS** (**PTO Balance**, **Sick Days**, **Health Plan**, **401(k)**, **Overtime Eligible**, **Uniform Issued**). **Schedule**: a **CURRENT WEEK SCHEDULE** grid (Mon–Sun with shift times and an **Hrs** row) plus **TIME CLOCK — RECENT PUNCHES** (**Date**, **Clock In**, **Clock Out**, **Hours**, **Status** chips such as **On Time** and **Minor OT**) and a **View Full Time Clock →** link. **Emergency Contact**: **EMERGENCY CONTACT** (**Contact Name**, **Relationship**, **Phone**, **Alt Phone**, **Email**, **Same Address**) and **MEDICAL INFORMATION** (**Known Allergies**, **Blood Type**, **Medical Notes**). **Notes & Audit**: a **MANAGER NOTES** text block over an **AUDIT TRAIL** of dated entries with the actor on each (pay-rate change, review submitted, record created). **Training**: a **Training Progress** panel tied to the Academy (**8 Enrolled**, **3 Completed**, **3/7 Required Progress**, **78% Avg Score**), a **Learning Paths** list, an **Enrolled Courses** list with **Required / Completed / In Progress / Overdue** chips, and an **Assign Course** button you do not click.
14. Confirm you have changed nothing, then click **← Back**. **Expected:** this is a read-only lesson. You did not **Delete**, **Edit Employee**, **Assign Course**, **Export**, or open **+ New Record**, and you did not touch a field. **← Back** returns you to the **Employee List**.
15. Recap the page. **Expected:** the Employees page is the staff directory: headcount KPIs, three workforce insight cards, and a searchable table keyed by **EMPLOYEE**, **PHONE**, **HIRE DATE**, **TYPE**, **STATUS**, and **LOCATION**. One click on a row opens that person's seven-tab profile, with **Overview** as its analytics home.

## Expected results

From `Team → Employees` you can read the current headcount and its active, full-time, and part-time splits without counting rows, see where staff sit and how the team has grown over the year, and scan the directory table by name, role chip, phone, hire date, type, status, and location. Opening any row takes you to that employee's seven-tab record, landing on the **Overview** analytics tab. Nothing you did in this lesson changed a record.

## Notes and troubleshooting (observed behavior only)

- The KPI tiles and the **Employment Type** card describe the same workforce two ways. The tiles give raw counts (**48 / 44 / 32 / 16**); the card gives the full-time to part-time percentages plus the inactive count (**4 INACTIVE**). Read whichever answers the question in front of you.
- **Export** and **+ New Record** are located in this lesson but never clicked. **Export** is a download and **+ New Record** creates a person. Both sit outside a read-only tour, and creating or editing staff is its own approved, logged workflow.
- The live record has **seven** tabs (**Overview, Personal Info, Employment, Schedule, Emergency Contact, Notes & Audit, Training**). The legacy WashAssist employee record showed a different set (Personal Info, Employment Details, Employee Availability, Active Locations). When the legacy layout and the live platform disagree, the platform wins; this is logged as DISCREPANCIES.md #13.
- The employee detail view was captured in full on July 11, 2026 (all seven tabs), clearing the July 9 parked markers for the header, metric band, Overview panels, and tab fields. The page loads from the row click only; its direct URL (`emp-employees-detail.html`) 404s, which is why the July 9 probe missed it. Navigate in-app.
- The detail header carries a **Delete** button and the **Training** tab carries **Assign Course**. Neither is ever clicked during documentation or recording; **← Back** is the only exit used.
- One data mismatch, observed July 11 and reported as a new discrepancy: the **Employee List** row for Jose Martinez shows **LOCATION MLAS**, but his detail header and **Employment → Primary Location** read **Fort Lauderdale**. Read the detail record as authoritative for a person's site until the tenant data is reconciled.
- The narration script (v1.0) voices blocks 10, 12, and 13 as "parked / not captured," which now contradicts the captured detail. Those blocks need re-author and re-render before recording; see the narration file's status header.
- The idle **Still there?** timeout prompt can appear on this page after inactivity, the same as anywhere in the platform. It is out of scope here; session behavior is covered in WC-01-03.

## Knowledge check

1. A manager asks how many people are on the active roster right now. Which KPI tile answers it, and which card would you open to see how that headcount has moved over the year?
2. Name the six columns of the **Employee List** and say which cell carries the role chip.
3. You open an employee and land on **Overview**. Name the other six tabs, and name the two buttons on the list page you must not click during a read-only review.

## Related lessons

WC-01-04 List conventions · WC-07-02 Schedules, Time Clock, Roles, User Groups · WC-07-03 Sales Coaching (QA).

**Verified against demo.washcentral.com on July 11, 2026.**

# WC-07-02 · Schedules, Time Clock, Roles, and User Groups (Team)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson tours the four Team pages a technician reads to answer staffing questions: **Employee Schedules**, **Time Clock**, **Employee Roles**, and **User Groups**. By the end you can open each one, read its KPI band and its list, and know which page answers which question. Who is scheduled and on which days. Who is punched in right now. What a role is allowed to touch. Who belongs to which group. Everything here is read-only. You look; you do not change a punch or a schedule.

## Audience and prerequisites

Internal Micrologic technicians who already know their way around a WashCentral list (WC-01-04) and the Team module's Employees page (WC-07-01). You should be signed in. The session timeout ("Still there?") behavior is covered in WC-01-03, not here.

## Navigation path

All four pages live in the left sidebar under the **EMPLOYEES** group of the **Team** module, in this order: **Employees**, **Employee Roles**, **Employee Schedules**, **Time Clock**, **User Groups**. This lesson visits the last four. You can jump between them from the sidebar on any Team page: `Team → Employee Schedules`, `Team → Time Clock`, `Team → Employee Roles`, `Team → User Groups`.

## Steps

One action per step. Hold each new page for two to three seconds before moving on. All four pages are read-only lists; do not open a create form or a row detail.

1. In the left sidebar under **EMPLOYEES**, click **Employee Schedules**. **Expected:** the page header reads **Employee Schedules**, and a four-tile KPI band runs across the top: **38 Scheduled This Week**, **4 Open Shifts**, **92% Coverage %**, and **6 Locations**. Those four numbers summarize the week's staffing across the network.
2. Look at the **Schedule List** card below the KPIs. **Expected:** a weekly grid with columns **EMPLOYEE**, **LOCATION**, then one column per day, **MON** through **SUN**. Each cell holds a shift code: a start-and-end pair such as **7-3**, **8-4**, or **3-11**, or **OFF** for a day off. For example, Jose Martinez (MLAS) reads 7-3 Monday and Tuesday, OFF Wednesday, then 7-3 through Saturday. The card also carries **Export**, **+ New Record**, **Filters ▾**, a **Search** button, and a search box reading "Search employee schedules…".
3. Read the two insight panels above the list. **Expected:** **Shift Types** breaks the week down by time of day, **Morning (7–3)**, **Afternoon (8–4)**, **Evening (3–11)**, and **Split / Other**, each with a percentage; **Coverage Status** rates this week as **COVERED**, **AT RISK**, and **OPEN** shares. A third panel, **Hours Scheduled**, trends the last 12 months. Read together, they tell you how well the week is staffed before you open a single row.
4. In the sidebar, click **Time Clock**. **Expected:** the header reads **Time Clock**, and the KPI band shows **18 Today Punches**, **6 On Clock Now**, **284 This Week Hours**, and **6 Locations**. **On Clock Now** is the tile to remember: it is how many people are clocked in at this moment across the network.
5. Look at the **Timeclock List**. **Expected:** columns **DATE**, **EMPLOYEE**, **LOCATION**, **CLOCK IN**, **CLOCK OUT**, **HOURS**, and **SHIFT**. Most rows show a time in and a time out. One row, Kevin Davis (MLAS), shows a clock-in of 3:00 PM and a **—** in **CLOCK OUT**. That dash marks an open punch: the person is still on the clock and has not clocked out, so the **HOURS** value (4.5) is running rather than final.
6. Read the **Punch Status** panel on the right. **Expected:** a today-overview split of **ON CLOCK**, **CLOCKED OUT**, and **NO SHOW** percentages. **NO SHOW** is worth a scan: it flags scheduled staff with no punch. The **Hours by Location** and **Weekly Hours** panels sit alongside it for context.
7. In the sidebar, click **Employee Roles**. **Expected:** the header reads **Employee Roles**, with a KPI band of **8 Total Roles**, **8 Active**, **6 Managers**, and **2 Admins**. A role is a named permission set; this page lists the roles your tenant defines.
8. Look at the **Role List**. **Expected:** columns **ROLE NAME**, **DESCRIPTION**, **USERS ASSIGNED**, and **ACCESS LEVEL**. The rows read **Administrator** (Full system access, 2 users, **Full**), **Site Manager** (Single location full access, 6, **High**), **Cashier** (POS and transaction access, 18, **Medium**), **Tunnel Attendant** (Tunnel ops only, 12, **Low**), and **Detail Tech** (Detail module only, 8, **Low**). When someone cannot do something they expect to, the **ACCESS LEVEL** column usually explains why.
9. Read the **Access Levels** panel. **Expected:** a permission-tier overview split into **LOW**, **MEDIUM**, and **HIGH** shares. Most staff sit at **LOW**, which is expected: cashiers and attendants outnumber managers. The **Users per Role** panel beside it ranks roles by headcount (Cashier, Tunnel Attendant, Detail Tech, Site Manager).
10. In the sidebar, click **User Groups**. **Expected:** the header reads **User Groups**, with KPIs **6 Total Groups**, **6 Active**, **44 Total Members**, and **6 Locations**. A user group is a named collection of people, and it is a different idea from a role.
11. Look at the **User Group List**. **Expected:** columns **USER GROUP NAME**, **DESCRIPTION**, **MEMBERS**, and **LOCATIONS**. The rows read **All Managers** (Site and general managers, 8 members, **All** locations), **MLAS Staff** (MLAS location all staff, 12, **MLAS**), **Detail Team** (All detail technicians, 8, **All**), and **Cashiers** (All cashier staff, 18, **All**). The **LOCATIONS** column shows a group's reach: one site, or every site.
12. Read the **Group Coverage** panel. **Expected:** a location-reach overview of **ALL SITES**, **SINGLE**, and **REGIONAL** shares, with **Members by Group** beside it. Groups matter beyond this page: they are the assignment targets for Maintenance work, so an issue routed to **Detail Team** reaches everyone in that group. Roles decide what a person can do; groups decide who a job goes to.
13. Recap the four pages. **Expected:** for a staffing question you now know the page to open. **Employee Schedules** for who works which days and the shift codes. **Time Clock** for who is on the clock right now and the open **—** punches. **Employee Roles** for what a role is allowed to do. **User Groups** for who belongs to which team. All four are read-only lists you scan, not screens you edit.

## Expected results

You can open each of the four Team pages, read its KPI band and its list at a glance, and route a staffing question to the right one. On **Employee Schedules** you can read a full week from one row of shift codes. On **Time Clock** you can find who is punched in from the **On Clock Now** tile and spot an open punch by the **—** in **CLOCK OUT**. On **Employee Roles** you can read what a role reaches from its **ACCESS LEVEL**. On **User Groups** you can read a group's membership and its location reach, and connect a group to how Maintenance work gets assigned. Nothing on any of these pages was changed.

**Self-check [READ-ONLY]:** (1) Where do you see who is on the clock at this moment? (2) Where do you find out why an employee's week shows **OFF** on a given day? Answers: (1) **Time Clock**, the **6 On Clock Now** KPI, backed by the open **—** punches in the list. (2) **Employee Schedules**, the weekly grid, where each day's cell shows a shift code or **OFF**.

## Notes and troubleshooting (observed behavior only)

- Read-only tour. All four are list pages. Opening **Filters ▾**, **+ New Record**, **Export**, or a row's detail is beyond this lesson; do not create or edit any schedule, punch, role, or group.
- KPI band versus list count. The KPI tiles report network-wide totals (for example **38 Scheduled This Week**, **8 Total Roles**, **6 Total Groups**), while the list below shows a smaller sample set (3, 4, or 5 rows). In the demo tenant these two do not reconcile, and that is expected demo-data behavior rather than a defect (see DISCREPANCIES.md demo-data observations).
- The **—** in **CLOCK OUT** is not missing data. It marks an open punch, meaning the person is still clocked in, and the **HOURS** value keeps climbing until they clock out.
- Time Clock rows carry dates such as 2025-06-01 in the demo, while the **18 Today Punches** KPI uses the tenant's own "today," which will not match your calendar. Read the KPI as the live count and the dated rows as history.
- Auto-clock-out and time rounding are configured per location under Settings (Lesson 12.5), not on this page. Time Clock shows the result of those rules; it does not set them.
- Platform structure. The project's verified restructuring map records that legacy WashAssist kept a separate predictive Scheduler and labor-planning workspace. WashCentral has no such forecast workspace; labor scheduling is this weekly **Employee Schedules** grid, and "Scheduler" in the old sense now opens customer appointment booking under Operations (DISCREPANCIES.md #12 and #14).
- No load error appeared on any of the four pages in the July 9 corpus. Each rendered its KPI band, its insight panels, and its list in full.

## Related lessons

WC-07-01 Employees list + detail · WC-07-03 Sales Coaching (QA) · WC-01-04 List conventions · WC-12-06 Users & Security · WC-12-05 Hardware & UI (per-location time rules).

**Verified against demo.washcentral.com on July 9, 2026.**

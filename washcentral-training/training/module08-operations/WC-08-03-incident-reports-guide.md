# WC-08-03 · Incident Reports (Operations)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson is the technician's tour of **Incident Reports**, the page in the **Operations** module where every injury and damage claim across your sites is logged. By the end you can read the list top to bottom: its five columns, the five report types and the **IR-** code that identifies each one, the statuses a report moves through, and where the search, filter, and pagination controls sit. You will also know where **+ New Report** is and how it starts a new incident at recording time, without filing anything.

## Audience and prerequisites

Internal Micrologic technicians who have finished the Foundations module. You should be signed in and able to reach the left sidebar, which is where WC-01-01 (global navigation) leaves you. No operations background is assumed. This lesson reads the list only. The sibling maintenance pages (Issues, Maintenance Schedule, Equipment Registry, Checklists, Parts & Supplies) are covered in WC-08-01 and WC-08-02, and appointment scheduling is WC-08-04. Opening a report's detail view and filing a new incident are out of scope here.

## Navigation path

**Incident Reports** lives in the **Operations** module. From the left sidebar, open the **INCIDENT REPORTS** group and click **All Reports**: `Operations → INCIDENT REPORTS → All Reports` (`incident-reports.html`). Above the green **All Reports** page header the breadcrumb reads **INCIDENT REPORTS**; inside the list card the breadcrumb reads **OPERATIONS · INCIDENT REPORTS**, the card title is **Incident Reports**, and the count under it reads **5 records**. The global header tools at the top-right (**Search ⌘K**, **Ask Shyne**, and your **MG** avatar) are the same on every page and are out of scope here; they are covered in WC-01-02.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on.

1. From the left sidebar, open the **INCIDENT REPORTS** group and click **All Reports**. **Expected:** the **Incident Reports** list loads at `incident-reports.html`. The green page header reads **All Reports**; the list card shows the breadcrumb **OPERATIONS · INCIDENT REPORTS**, the title **Incident Reports**, and **5 records**. Every injury and damage claim logged across your sites lands on this one page.
2. Read the column headers across the top of the table. **Expected:** five columns run left to right: **REPORT #**, **TYPE**, **LOCATION**, **DATE**, **STATUS**. Read across a row and you have the summary of an incident before you open a single record.
3. Read down the **REPORT #** column. **Expected:** every report number starts with **IR-**, followed by a short type code and a sequence number: **IR-CI-0001**, **IR-EI-0001**, **IR-P-0001**, **IR-V-0001**, **IR-WED-0001**. The middle code is what tells you the kind of incident at a glance.
4. Read the **TYPE** column and match each chip to its code. **Expected:** five report types, one per row in this list: **Customer Injury** (IR-CI-), **Employee Injury** (IR-EI-), **Property Damage** (IR-P-), **Vehicle Damage** (IR-V-), and **Wash Equipment Damage** (IR-WED-). Every incident you log here is one of these five.
5. Read the **STATUS** column on the right. **Expected:** two statuses appear in this list: **Open** on four rows, and **Under Review** on the **Vehicle Damage** row (**IR-V-0001**). Status marks where a report sits in its lifecycle, so a scan of this column tells you what still needs attention.
6. Read the **LOCATION** column. **Expected:** each report is tagged to a site code. This list shows **MLAS** on four rows and **SSNB** on the **Wash Equipment Damage** row. The code tells you which wash the incident belongs to.
7. Read the **DATE** column. **Expected:** dates are written year-first (`YYYY-MM-DD`), for example **2026-06-28** and **2026-07-01**. This is the day the incident occurred.
8. Point to the search box above the table. **Expected:** the box shows the placeholder **Search incident reports…**. Typing a report number or a keyword narrows the table, which is how you reach one report once the list runs to hundreds of rows.
9. Point to the **Filters ▾** and **Search** buttons to the right of the box. **Expected:** **Filters ▾** opens options to narrow the list and **Search** runs what you have entered. The individual filter options are not covered in this lesson.
10. Read the pagination footer at the bottom of the card. **Expected:** it reads **Showing 1–5 of 5 records**, with a page control **‹ 1 ›**. All five reports fit on one page here; a busier site pages through the backlog with these arrows.
11. **[Recording-time]** Open **+ New Report** at the top-right of the card to reveal the report-type choice, then leave with **Cancel** or **Close**. **Expected:** a form for starting a new incident opens and begins by asking which type of report to file. The exact type options it lists are **TBD — parked** (new parked item; see this package's structured notes). Do not save or submit anything. *This lesson opens the form only to show that a new report starts from a type choice, then backs out. Filing an incident is out of scope here.*
12. Recap the screen. **Expected:** from **Operations → INCIDENT REPORTS → All Reports** you can read any incident at a glance by its five columns, name the five report types by their **IR-** codes, tell an **Open** report from one **Under Review**, and start a new one with **+ New Report**.

**[READ-ONLY] Knowledge check.** A customer's car is scratched in the tunnel, and an employee slips in bay 2. Which two incident report types apply, and where do they live? Answer: **Vehicle Damage** (**IR-V-**) for the scratched car and **Employee Injury** (**IR-EI-**) for the slip, both filed under **Operations → INCIDENT REPORTS → All Reports**.

## Expected results

From **Operations → INCIDENT REPORTS → All Reports** you can read the incident list end to end: the five columns **REPORT # · TYPE · LOCATION · DATE · STATUS**, the five report types with their **IR-** codes (Customer Injury IR-CI-, Employee Injury IR-EI-, Property Damage IR-P-, Vehicle Damage IR-V-, Wash Equipment Damage IR-WED-), and the statuses **Open** and **Under Review**. You can find one report with the **Search incident reports…** box or **Filters ▾**, read the row count from the footer, and locate **+ New Report** as the starting point for a new incident. Reading the list and opening the new-report form to show its type choice change nothing on their own.

## Notes and troubleshooting (observed behavior only)

- The demo list holds five records, all on one page; the footer confirms **Showing 1–5 of 5 records**.
- The report number encodes the type. The **IR-** code (CI, EI, P, V, WED) names the incident kind before you open the record, so you can triage straight from the **REPORT #** column.
- Statuses observed in this list are **Open** and **Under Review**. Other statuses may exist in the platform but were not present in these five rows.
- Locations here read **MLAS** and **SSNB**. These are site codes tied to the tenant's washes; the demo maps **MLAS** to a Micrologic sample site.
- **+ New Report** starts a new incident from a type choice. The form's exact type options were not captured in the July 9 corpus, so they are parked; filing a report is out of scope for this lesson.
- If the idle **Still there?** dialog appears while recording, dismiss it with **Stay Logged In** off-camera and re-roll the take. Session-timeout behavior is covered in WC-01-03.

## Related lessons

WC-08-01 Maintenance Issues · WC-08-02 Maintenance Schedule, Equipment, Checklists, Parts · WC-08-04 Appointment Scheduling.

**Verified against demo.washcentral.com on July 9, 2026.**

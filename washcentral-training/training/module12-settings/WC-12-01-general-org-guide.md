# WC-12-01 · General & org structure (Settings)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson is your orientation to the **Settings** area and to the **General** group inside it, where a client's org structure is defined. You will open the Settings home, read the **16 categories · 92 pages** counter, and see how the category cards and the left sidebar organize everything. Then you will read five General pages back to back: **Account Information**, **Profit Centers**, **Departments**, **Categories**, and **Dashboard Settings**. Every screen here stays read-only. By the end you can find any configuration page fast and explain how profit centers, departments, and categories fit together, which is the spine a new client is built on during onboarding.

## Audience and prerequisites

Internal Micrologic technicians new to the Settings area. You should be signed in and able to reach a dashboard, which is where WC-01-01 leaves you, and comfortable reading a WashCentral list (columns, KPI tiles, a search box) from WC-01-04. Nothing is changed in this lesson. Creating a record, editing a field, or opening an edit form is production-admin work and is never done in the demo tenant. The idle "Still there?" prompt is out of scope here; it is covered in WC-01-03.

## Navigation path

**Settings** is a full-screen area reached from the gear at the foot of the left navigation rail. Once inside, a left sidebar groups every page by category, with **Close Settings** at the top to return to the app and **All Settings** below it to return to the card grid. The pages in this lesson live in two groups: `Settings → General → Account Information`, `Settings → General → Profit Centers`, `Settings → General → Departments`, and `Settings → General → Categories` sit together under **General**; the fifth page is filed one group down, at `Settings → Analytics → Dashboard Settings`. Knowing that split saves a hunt.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. This is a read-only walk: locate **+ New Record** on each page but never click it, and never open a row or an edit form.

1. From any page, open **Settings** (the gear at the foot of the left navigation rail). **Expected:** the Settings area opens. The heading reads **Settings** with the subtitle "System configuration, setup, and platform preferences." The left sidebar shows **Close Settings** and **All Settings**, and the top-right counter reads **16 categories · 92 pages**.
2. Read the **16 categories · 92 pages** counter at the top-right. **Expected:** the counter is the whole configuration surface in one line. Sixteen category groups hold ninety-two individual pages between them. This lesson stays inside the **General** group, which is where a client's account and org structure are defined.
3. Point to the **Search settings…** box under the heading. **Expected:** the box carries the placeholder "Search settings…". Type a page name here to jump straight to it instead of hunting through the cards. Leave it empty for now.
4. Sweep the category cards below the search box. **Expected:** sixteen cards fill the grid: **General**, **Locations**, **Services**, **Payments & Finance**, **Hardware**, **UI & Display**, **Users & Security**, **Operations**, **VIP & Membership**, **Automation**, **Customer Portal**, **AI Agent**, **Mobile App**, **LogicPOS**, **Marketing**, and **Integrations**. Each card is a title plus a one-line summary of what it holds; the **General** card reads "Account details, departments, profit centers, and platform config."
5. Open **General** (click the card, or the **General** group in the left sidebar). **Expected:** the General group expands in the sidebar to its pages: **Account Information**, **Account Types**, **Profile Types**, **Profit Centers**, **Departments**, **Categories**, **Dayforce Settings**, **Policy Category**, and **Forms Category**. The first page, **Account Information**, opens.
6. Read the top of the **Account Information** page. **Expected:** a KPI band shows **56 Locations**, **15 States**, **Multi Operation Mode**, and **Active License**. Below it sit three summary panels, **Config Activity**, **Breakdown by Type**, and **Status Overview** (configuration health, for example 83% active, 12% draft, 5% inactive). This page is the client's account and site registry.
7. Read the **Account Information List** and its columns. **Expected:** the list header reads **Account Information List · 56 records · 15 states**, with **+ New Record**, **Filters**, and **Search** to its right. The columns are **SITE NAME · COMPANY · OPERATION MODE · CITY · STATE · PHONE**, and the first rows are sites such as Fort Lauderdale (FL101), Orlando Central (FL102), and Tampa West (FL103). Locate **+ New Record**; do not click it.
8. Open **Profit Centers** from the General sidebar. **Expected:** two KPI tiles read **4 Total Profit Centers** and **4 In Daily Summary**. The list header reads **Profit Centers List · 4 records**, and the columns are **DESCRIPTION · INCLUDE IN DAILY SUMMARY**. The four rows are **WASH**, **LUBE**, **DETAIL**, and **STORE**, each marked **Yes**. Profit centers are the top-level revenue buckets every sale rolls up into.
9. Open **Departments** from the General sidebar. **Expected:** three KPI tiles read **4 Total Departments**, **4 Active**, and **0 Inactive**. The columns are **DEPARTMENT · ACTIVE · UPDATED BY · UPDATED**, and the four rows are DETAIL, LUBE, STORE, and WASH, each **Yes** and updated by Micrologic. Departments carry the same four names as the profit centers and map operational areas to them.
10. Open **Categories** from the General sidebar. **Expected:** the KPI tiles read **49 Total Categories** and **49 Active**, with three summary panels above the list (**Config Activity**, **Breakdown by Profit Center**, and **Status Overview** at 100% active). The list header reads **Categories List · 66 records**, the columns are **DESCRIPTION · EXTRA · PROFIT CENTER · AC/CODE · SYSTEM**, and the footer pages read **1 2 3** across "1–25 of 66". Note that the KPI (49) and the list count (66) disagree here; read the list count, not just the tile. Locate **+ New Record**; do not click it.
11. Open **Dashboard Settings**. **Expected:** this page is filed under the **Analytics** group in the sidebar, not General, so the path is `Settings → Analytics → Dashboard Settings`. One KPI tile reads **10 Total Dashboards**. The list header reads **Dashboards List · 10 records**, the columns are **NAME · CREATED BY · UPDATED BY · UPDATED**, and the ten rows are the role-based dashboards each user level sees (Administrator, Anonymous, Cashiers, Level 00, Level 01, Managers, and so on). The learning plan lists this page under General; the platform files it under Analytics.
12. Click **Close Settings** at the top of the sidebar. **Expected:** Settings closes and you return to the app underneath. You read five pages and changed nothing.
13. Recap the General group and the org spine. **Expected:** from the Settings home you can reach any of ninety-two pages, and the General group holds the account and org-structure records. Profit centers, departments, and categories are the three levels a sale is classified against, and Dashboard Settings decides which widgets each user level opens to.

**Exercise 12.1a [READ-ONLY]:** on **Profit Centers**, **Departments**, and **Categories**, note that the first two hold four records each with the same four names (WASH, LUBE, DETAIL, STORE) while Categories holds far more. Explain to your lead, in one sentence each, what a profit center groups and what a category refines within it. Do not add, edit, or delete a record.

**Knowledge check:** a new client is being set up and you are asked where the org structure begins. Name the three General-group pages, in order, that define how every sale is classified, and say which Settings group Dashboard Settings actually lives in.

## Expected results

From the Settings home you can read the **16 categories · 92 pages** counter, jump to a page with the **Search settings…** box, and pick any of the sixteen category cards. Inside **General** you can read **Account Information** (the site registry, 56 records), **Profit Centers** (4 records: WASH, LUBE, DETAIL, STORE), **Departments** (the same four names), and **Categories** (66 records refining those buckets). You can also reach **Dashboard Settings** under the **Analytics** group and read its 10 role-based dashboards. Opening and reading any of these pages changes nothing, and **Close Settings** returns you to the app exactly where you left it.

## Notes and troubleshooting (observed behavior only)

- Every page in this lesson is a list with a **+ New Record** button, a search box, and (on some) a **Filters** control. For a technician this walk is read-only: locate **+ New Record** to know it is there, but adding, editing, or opening a record is production-admin work and is out of scope in the demo tenant.
- The **General** sidebar group holds nine pages; this lesson reads three of them in depth (Profit Centers, Departments, Categories) plus Account Information, and leaves Account Types, Profile Types, Dayforce Settings, Policy Category, and Forms Category for later. **Dayforce Settings** is only relevant to clients who use that HR/payroll integration.
- On **Categories** the KPI tile (**49 Total Categories**) and the list header (**66 records**) do not match. This is the known demo-tenant pattern where a summary tile and the underlying table disagree; trust the list count for the real number.
- **Dashboard Settings** does not appear as a card on the home grid and is not in the **General** group. It sits under the **Analytics** group in the left sidebar, alongside **Dashboard Designer**. The learning plan groups it with General; when the platform and the plan disagree, the platform wins.
- The home grid shows sixteen cards including **Mobile App** and **LogicPOS**, but the left sidebar lists an **Analytics** group instead. The two views of the categories are not identical; use the counter (**16 categories · 92 pages**) as the reference for scale.
- The idle "Still there?" prompt can appear on any of these pages after inactivity. Dismissing it is covered in WC-01-03 and is not part of this lesson.

## Related lessons

WC-01-04 Reading a WashCentral list · WC-12-02 Locations · WC-12-03 Services & per-location values · WC-12-06 Users & Security · WC-01-03 Session behavior.

**Verified against demo.washcentral.com on July 9, 2026.**

# WC-12-04 · Payments & Finance (Settings)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson is a guided tour of the **Payments & Finance** group in Settings: the nine configuration pages that decide how money is taken, discounted, taxed, and posted to accounting. By the end you can find each page, read what its list holds, and know which one a given ticket sits behind. You will not change any of these settings. The goal is to recognize the pages fast, because most billing and month-end questions trace back to one of them: a payment type that will not take, a discount that applies at the wrong site, a tax rate that reads high, or an export that lands in the wrong ledger.

You also open one **Discount** to see the record pattern these pages share. Discounts, like Services, carry a detail view with an **Active Locations** tab and per-location amount overrides, so a single discount can behave differently from site to site.

## Audience and prerequisites

Internal Micrologic technicians, with a lean toward Pre-Configuration and Tech Support. You should be signed in and comfortable moving around the app, which is where WC-01-01 and WC-01-02 leave you. WC-12-03 (Services) is the companion lesson: it teaches the **Active Locations** and per-location override pattern in full, and this lesson assumes you have met it. Everything here is read-only. You never click **+ New Record** or save a change on a shared setting.

## Navigation path

Every page in this lesson lives under Settings. Open **Settings** from the gear at the bottom of the far-left rail, then open the **Payments & Finance** group in the settings sidebar. The nine pages sit together in one list, and the breadcrumb at the top of each page confirms where you are, for example **Settings › Payment Types**. Navigation for each page reads `Settings → Payments & Finance → [page]`.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. The demo data service was offline during capture, so the lists in these screenshots show a load error and the totals read as a dash. See Notes for what that means and what is parked.

1. Open **Settings**, then open the **Payments & Finance** group in the settings sidebar. **Expected:** the group expands to nine pages in order: **Payment Types**, **Discounts**, **Discount Types**, **Surcharges**, **Surcharge Types**, **Payout Percentage**, **Tax Rates**, **General Ledger Codes**, and **GL Account Codes**. **Close Settings** and **All Settings** sit at the top of the sidebar, and **Integrations** sits below the group. This one list is your map for everything that follows.

2. Click **Payment Types**. **Expected:** the breadcrumb reads **Settings › Payment Types**. A KPI band shows **Total Types**, **Locked (System)**, and **Require Reference**. The **Payment Types List** has columns **DESCRIPTION**, **LOCKED**, **REQUIRE REFERENCE**, and **SHOW AS BANK DROP**, with a **+ New Record** button and a "Search payment types…" box. This is the tender list: cash, card, check, house account, and the like. **Locked** marks system types you cannot delete, **Require Reference** forces a reference number at the register, and **Show as Bank Drop** flags what counts toward the drawer drop.

3. Click **Discounts**. **Expected:** the breadcrumb reads **Settings › Discounts**. The KPI band shows **48 Total Discounts**, **45 Active**, **22 Unlimited Discounts**, and **18 Dollar Off**. Three panels sit above the list: **Config Activity** (last 12 months), **Breakdown by Method** (Unlimited 46%, Dollar Off ($) 37%, Percent Off (%) 12%, Other 5%), and **Status Overview** (94% ACTIVE, 3% DRAFT, 3% INACTIVE). The **Discounts List** has columns **DESCRIPTION**, **CODE**, **AMOUNT**, **TAXABLE**, **DISCOUNT TYPE**, and **START DATE**, plus **Filters** and **Search** controls. **AMOUNT** with **DISCOUNT TYPE** is where you read whether a discount takes dollars off or a percentage off.

4. **[READ-ONLY] Exercise 12.4a:** click a discount row to open its detail. Identify whether it is dollar-off or percent-off, and open its **Active Locations** tab to see where it applies. **Expected:** a discount record follows the same pattern as a Service (WC-12-03): a detail view with an **Active Locations** tab listing the sites and groups where the discount is live, and per-location amount overrides reached through the gear controls in edit mode. That is how the same discount can be a set dollar amount at one site and a different value at another. In the July 9 corpus this detail could not be opened. The `settings-discounts-edit.html` route returned HTTP 404, and the row-click detail was not captured, so the exact Discount detail layout, its **Active Locations** tab contents, and the dollar-versus-percent method flag are `TBD — parked` (new parked item; see the structured return). Read the pattern here, and confirm it against WC-12-03 until this view is captured on a production-like tenant. Leave the detail with **Cancel** or **← Back**; never save.

5. Click **Discount Types**. **Expected:** the breadcrumb reads **Settings › Discount Types**. The KPI band shows **4 Total Types** and **4 Active**. Panels above the list show **Config Activity**, **Breakdown by Type** (Discounts 40%, Unlimited 30%, Staff 20%, Promo 10%), and **Status Overview** (100% ACTIVE). The **Discount Types List** has a single column, **DESCRIPTION**. These are the categories a discount is filed under, which is the value that shows in the **DISCOUNT TYPE** column on the Discounts list.

6. Click **Surcharges**. **Expected:** the breadcrumb reads **Settings › Surcharges**. The KPI band shows **Total Surcharges**. The **Surcharges List** has columns **DESCRIPTION**, **TYPE**, **AMOUNT**, **TAXABLE**, and **CODE**. Surcharges are the added fees, the mirror image of a discount, and **TAXABLE** decides whether tax applies on top of the fee.

7. Click **Surcharge Types**. **Expected:** the breadcrumb reads **Settings › Surcharge Types**. The KPI band shows **Total Types**, **Discounts Disallowed**, and **Discounts Allowed**. The **Surcharge Types List** has columns **DESCRIPTION** and **DISALLOW DISCOUNTS**. The **DISALLOW DISCOUNTS** flag is the useful one: it controls whether a discount can be stacked on a ticket that already carries this surcharge type.

8. Click **Payout Percentage**. **Expected:** the breadcrumb reads **Settings › Payout Percentage**. The KPI band shows **Total Rules**. The **Payout Percentage List** has columns **RANGE START**, **RANGE END**, and **PERCENTAGE**. Each row is a band: a start and end amount, and the percentage that applies inside that band. This is a tiered payout table, so a value falls into whichever range it lands in.

9. Click **Tax Rates**. **Expected:** the breadcrumb reads **Settings › Tax Rates**. The KPI band shows **Total Rates**, **Default Rate**, and **Highest Rate**, and a **Rate Distribution** panel sits above the list. The **Tax Rates List** has columns **DESCRIPTION**, **TAX RATE**, **DEFAULT**, **UPDATED BY**, and **UPDATED**. These rates feed the two tax slots on a Service (TAX RATE (1) and TAX RATE (2) in WC-12-03), so when a service reads the wrong tax, the answer usually starts on this page.

10. Click **General Ledger Codes**. **Expected:** the sidebar item reads **General Ledger Codes**, and the page header and breadcrumb read **GL Codes** (**Settings › GL Codes**). The KPI band shows **Total Codes**. The **GL Codes List** has columns **CODE**, **DESCRIPTION**, and **GL DESCRIPTION**. These codes are what accounting exports post against, so a wrong mapping here is a common month-end escalation.

11. Click **GL Account Codes**. **Expected:** the breadcrumb reads **Settings › GL Account Codes**. The KPI band shows **Total Codes**. The **GL Account Codes List** has columns **CODE**, **DESCRIPTION**, and **GL DESCRIPTION**, the same shape as General Ledger Codes. The two lists pair up: GL Codes name the ledger lines, and GL Account Codes tie them to accounts for the export.

12. Recap the group and where each question lands. **Expected:** you can reach all nine Payments & Finance pages from one sidebar group, read each list by its columns, and point a billing question at the right page. Tender behavior lives in **Payment Types**, price adjustments in **Discounts** and **Surcharges** with their type lists, tiered payouts in **Payout Percentage**, tax in **Tax Rates**, and accounting posting in **GL Codes** and **GL Account Codes**.

## Expected results

You can open the **Payments & Finance** group and name its nine pages without hunting. You can read each list by its columns, and you know which page owns a given billing behavior: how a payment is taken, how a discount or surcharge changes a price, how a payout is tiered, how tax is set, and how a sale posts to the ledger. You have seen the record pattern a discount shares with a service, an **Active Locations** tab plus per-location overrides, even though the discount detail itself is parked in this corpus. You changed nothing along the way.

## Notes and troubleshooting (observed behavior only)

- The demo's data service was offline during the July 9 capture. Every list on these pages showed "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." and the KPI tiles read as a dash, except **Discounts** and **Discount Types**, whose totals and analytics panels did load. So the column headers, KPI labels, and panel names in this guide are verified, but the row content, and the KPI values on the other seven pages, are `TBD — parked` (new parked item). On a healthy tenant the lists populate and the totals fill in.
- The one detail this lesson opens, a **Discount** record, could not be captured. The `settings-discounts-edit.html` route returned HTTP 404 and the row-click detail was not in the corpus, so the Discount detail layout, its **Active Locations** tab, and the dollar-versus-percent method flag are parked. The pattern is documented in full on Services (WC-12-03); treat that as the reference until the Discount detail is captured on a production-like tenant. This is related to PARKED-ITEMS.md #1 (the per-location "Configure per location" gear dialog would not open in the demo).
- Sidebar and page label disagree on one page: the sidebar item is **General Ledger Codes** while the page header and breadcrumb read **GL Codes**. Use either name; they are the same page. Reported as a new discrepancy.
- Every page carries a **+ New Record** button. It is the create action for a shared configuration record, so it is never clicked in this lesson. The same rule covers any edit or save on these pages.
- The **Discounts** and **Discount Types** pages carry the richer list controls (a **Filters** pill and a dedicated **Search** button). The other pages give you the per-page search box only, for example "Search tax rates…". Each list also has a **ROWS PER PAGE** selector with 25, 50, and 100.
- The idle **Still there?** session prompt can appear on any of these pages after two minutes of inactivity. It is out of scope here; see WC-01-03 and PARKED-ITEMS.md #9.

**Knowledge check:** (1) A cashier says a discount is "$3 off at Orlando but only $2 off at Tampa." Which record, and which tab, explains that in one sentence? (2) A service is charging the wrong sales tax. Which Payments & Finance page do you check first, and which two Service fields does it feed? (3) Month-end says a batch of sales posted to the wrong ledger line. Which two pages hold the mapping?

## Related lessons

WC-12-03 Services (the Active Locations and per-location override pattern) · WC-12-05 Hardware & UI (POS-facing config) · WC-12-06 Users & Security (the refund-approval gate).

**Verified against demo.washcentral.com on July 9, 2026.**

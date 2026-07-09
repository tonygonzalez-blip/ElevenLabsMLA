# WC-05-01 · Campaigns (Marketing)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson is a read-only tour of **Marketing → Campaigns**: the four KPI tiles across the top, the three insight panels below them, and the **Campaign List** that tracks every campaign the network runs. By the end you can read the campaign snapshot, tell the four statuses apart, and recognize the **⛅ Weather paused** chip that shows when a campaign is held back at some sites. You also open the campaign form to see its layout, then close it without saving. Nothing in this lesson sends, activates, or changes a campaign.

## Audience and prerequisites

Internal Micrologic technicians who support marketing questions. You should be signed in and comfortable with the global module rail and header tools from WC-01-01 (global navigation) and WC-01-02 (Search, location scope, Ask Shyne). No prior Marketing experience is assumed. This is a support-side lesson: you read and explain the page, you do not build or launch campaigns on the live tenant.

## Navigation path

From the module rail on the left, open **Marketing**, then click **Campaigns** in the Marketing sidebar. As a path: **Marketing → Campaigns**. Campaigns is the first page in the Marketing sidebar and is where the module opens.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on.

1. From the module rail, open **Marketing**, then click **Campaigns**. **Expected:** the Campaigns page loads under the **MARKETING** eyebrow, titled **Campaigns**. The Marketing sidebar lists **Campaigns**, **Automation**, **SmartLinks**, **Customer Segments**, **Offers & Promotions**, **Email Templates**, **Paid Media (DRAFT)**, **Deliverability**, **Referral Program**, **SMS Templates**, **RCS Templates**, **Mobile Content Blocks**, and **Push Campaigns**, with **Campaigns** highlighted.
2. Look at the four tiles across the top of the page. **Expected:** the KPI band reads **Active Campaigns** (2), **Sent This Month** (0), **Avg Open Rate** (a dash), and **Revenue Attributed** ($0). This is the campaign snapshot for the current location scope: how many campaigns are live, how many messages went out this month, the average open rate, and the revenue attributed to campaigns. In this demo snapshot nothing has sent this month, so the send, open-rate, and revenue tiles sit at zero or a dash.
3. Look at the **Send Volume** panel on the left. **Expected:** the panel is titled **Send Volume** with the subtitle **Emails & SMS sent — 30-day trend**, drawn as a line running left to right. It plots email and text volume over the last 30 days, so one glance tells you whether sending is climbing, holding steady, or falling off.
4. Look at the **Campaigns by Type** panel in the middle. **Expected:** titled **Campaigns by Type**, subtitle **Channel distribution**, with four bars: **Email 44%**, **Email+SMS 31%**, **SMS 16%**, and **Push 9%**. This is the channel mix, meaning how the network's campaigns split across email, combined email and text, text alone, and push.
5. Look at the **Campaign Performance** panel on the right. **Expected:** titled **Campaign Performance**, subtitle **Current status breakdown**, showing **2 Active**, **1 Draft**, and **1 Completed**. It is a quick count of campaigns by state.
6. Scroll to the **Campaign List** panel below the insights. **Expected:** the panel header reads **MARKETING · CAMPAIGNS**, **Campaign List**, with a **5 records** badge. To its right sit **+ New Record** and **Export**. A toolbar underneath holds a **Filters ▾** control, a **Search** button, and a search box with the placeholder **Search marketing campaigns…**.
7. Read the column headers of the list. **Expected:** seven columns: **CAMPAIGN NAME**, **TYPE**, **STATUS**, **AUDIENCE**, **SENT**, **OPEN RATE**, and **REVENUE**. The four rightmost columns are the results a campaign earns once it sends. In this snapshot those result cells show a dash for every row because none of these campaigns have sent.
8. Read down the list. **Expected:** five campaigns appear: **Monthly Newsletter — March** (**Draft**), **Holiday Referral Blast** (**Scheduled**), **Summer Unlimited Push** (**Active**), **Win-Back October** (**Completed**), and **New Member Welcome** (**Active**). The **STATUS** column carries the four states you meet across Marketing: **Draft** (still being built), **Scheduled** (set to go out later), **Active** (running now), and **Completed** (finished its run).
9. Look at the **STATUS** cell for **Holiday Referral Blast** and **Summer Unlimited Push**. **Expected:** each row carries a second chip beside its status reading **⛅ Weather paused — 6 locations**. The campaign is held at those sites because of weather, while its base status (**Scheduled** or **Active**) stays as set. On a support call, this chip is the first thing to check when a campaign appears to have stopped at some locations but not others. Where weather-pause is configured, and exactly what it gates: TBD — parked (PARKED-ITEMS.md #6).
10. Click **+ New Record** to open a blank campaign form. **Expected:** a campaign form opens with a row of tabs: **Campaign Details** (open by default), **Content**, **Goals**, **Delivery Strategy**, **A/B Test**, and **Weather Gate**. **Cancel** and **Save Changes** sit at the top right and again at the bottom. Do not click **Save Changes**.
11. Stay on the **Campaign Details** tab and read the fields. **Expected:** the tab holds **Campaign Name** (placeholder **Campaign Name**), **Subject Line** (placeholder **Email subject line**), **Campaign Type** (a **-- Select --** dropdown), and **Campaign Mode**, offered as two cards: **One-time Send** ("Send once to your segment. Good for promotions and announcements.") and **Drip Sequence** ("Multi-step timed messages over days or weeks. Email + SMS support."). Below those are **Status** (a **-- Select --** dropdown), **Description** (placeholder **Optional campaign description**), and two date fields, **Scheduled Date** and **End Date**. An **AUDIENCE** section follows, with **Target Segments** and a **+ Add Segment** button. Required fields (**Campaign Name**, **Campaign Type**, **Campaign Mode**, **Status**) carry an asterisk. Read the layout and change nothing.
12. Click **Cancel** to leave the form. **Expected:** the form closes with nothing saved, and you are back on the **Campaign List**, still showing **5 records**. Nothing was created. The form also carries a **Weather Gate** tab; its contents were not captured in this pass, so where weather-pause is set stays parked (PARKED-ITEMS.md #6).
13. Back on the **Campaign List**, note the tools for locating a campaign. **Expected:** you can type a name into **Search marketing campaigns…** and click **Search**, or narrow the list with **Filters ▾**. The footer reads **Showing 1–5 of 5 records** with pager controls **‹ 1 ›**. **Export** sits at the top of the panel for pulling the list out; this lesson does not click it.
14. Recap the page. **Expected:** the Campaigns page gives you a network snapshot in four KPI tiles, three insight panels for volume, channel mix, and status, and a **Campaign List** of every campaign with its state. You can read a campaign's status, spot a **⛅ Weather paused** chip, and open the form to see its layout, all without sending or changing anything.

## Expected results

From **Marketing → Campaigns** you can read the network's campaign snapshot without touching a record: the four KPI tiles, the **Send Volume**, **Campaigns by Type**, and **Campaign Performance** panels, and the **Campaign List** with its statuses. You can tell **Draft**, **Scheduled**, **Active**, and **Completed** apart, recognize a **⛅ Weather paused — 6 locations** chip and know to check it first when a campaign stalls at some sites, and open the campaign form to see its tabs and fields before closing it with **Cancel**. Nothing you do here sends, activates, or edits a campaign.

## Notes and troubleshooting (observed behavior only)

- The **⛅ Weather paused — 6 locations** chip is the first thing to check when a campaign looks like it "stopped" at some locations but not others. The base status (**Scheduled** or **Active**) stays as set; the chip only reports the weather hold. Where the pause is configured and what it gates is parked (PARKED-ITEMS.md #6). Deliverability is the other page to check before you open a bug for a campaign that "didn't send."
- The result columns (**SENT**, **OPEN RATE**, **REVENUE**) and **TYPE** show a dash for every row in this snapshot because these campaigns have not sent. Once a campaign sends, those cells fill in.
- The KPI tiles reflect the current location scope. Changing scope in the header (WC-01-02) changes the numbers you see, not the underlying campaigns.
- **+ New Record** opens the campaign form. Tenant rules forbid saving, sending, or activating on the live demo, so you document the layout and leave via **Cancel**. **Save Changes**, the form's **Send Test**, and **Export** are not exercised in this lesson.
- The **Campaign Performance** panel counts **Active**, **Draft**, and **Completed**. The list also includes a **Scheduled** campaign, so the panel's total can be smaller than the **5 records** count. This is observed demo behavior.

## Related lessons

WC-01-01 Global navigation · WC-01-02 Search, location scope, and Ask Shyne · WC-05-02 Automation.

**Verified against demo.washcentral.com on July 9, 2026.**

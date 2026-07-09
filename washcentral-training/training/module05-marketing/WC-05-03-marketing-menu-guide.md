# WC-05-03 · The rest of Marketing (Marketing)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

Campaigns and Automation are covered in WC-05-01 and WC-05-02. This lesson walks the rest of the **Marketing** sidebar so you know, on sight, which page answers which question: where trackable links live, where audiences and offers are built, where the email, SMS, and RCS content sits, where paid-ad matching happens, where inbox health is checked, and where the referral, mobile-app, and push pages open. It is a tour. You open each page, read what it tracks, and move on. You do not build, send, or publish anything, and this guide never opens a compose or editor form.

## Audience and prerequisites

Internal Micrologic technicians who already know how to reach a module from the left rail (WC-01-01) and have seen the Campaigns and Automation pages (WC-05-01, WC-05-02). No prior Marketing experience is assumed. The demo tenant forbids sending, so nothing here is composed or sent; every page is read from its list or dashboard view only.

## Navigation path

`Marketing → [sidebar page]`. The **Marketing** sidebar carries the module's pages down the left rail. This lesson visits them in the order they appear: **SmartLinks**, **Customer Segments**, **Offers & Promotions**, **Email Templates**, **Paid Media (DRAFT)**, **Deliverability**, **Referral Program**, **SMS Templates**, **RCS Templates**, **Mobile Content Blocks**, and **Push Campaigns**. The last three open inside **Settings** rather than the Marketing module, which you will see in the breadcrumb.

## Steps

One action per step. Hold each page for two to three seconds, read the header and metric band, then move to the next sidebar item. Do not open any **+ New** form, and do not click **Export**, **Sync**, or **Save & Publish** on any page.

1. Open **Marketing** and look at the sidebar. **Expected:** the module's pages run down the left rail: **Campaigns**, **Automation**, **SmartLinks**, **Customer Segments**, **Offers & Promotions**, **Email Templates**, **Paid Media (DRAFT)**, **Deliverability**, **Referral Program**, **SMS Templates**, **RCS Templates**, **Mobile Content Blocks**, and **Push Campaigns**. Campaigns and Automation belong to the earlier lessons. The rest of this list is what you tour here. **Paid Media** carries a **(DRAFT)** tag in the label itself, which flags it as a work-in-progress feature.

2. Click **SmartLinks**. **Expected:** the **SmartLinks** page opens (breadcrumb **Marketing › SmartLinks**). These are trackable short links that tie clicks back to revenue. The metric band reads **Total SmartLinks**, **Active**, **Total Clicks (30d)**, **Conversions (30d)**, **Revenue Attributed**, and **Avg CVR**. The list columns are **Name & Link**, **Status**, **Clicks (30d)**, **Conv. Rate**, **Revenue**, **Channels**, and **Updated**, with status filters **All / Active / Draft / Paused / Archived** and a **+ New SmartLink** button. When someone asks whether a link in an email or a social post actually drove washes, this is the page that answers it.

3. Click **Customer Segments**. **Expected:** the **Customer Segments** page opens (breadcrumb **Marketing › Customer Segments**). A segment is a saved audience that campaigns target. The metric band reads **Total Segments**, **Active**, **Draft**, and **Avg Size**. Columns are **Segment Name**, **Members**, **Emails**, **Phones**, **Status**, and **Updated**, and the audiences group under chips such as **Retention**, **Win-Back**, **Acquisition**, **Billing**, **VIP & Loyalty**, **Campaigns**, and **Behavior**. A **+ New Segment** button builds one. When a client asks who a campaign went to, the answer traces back to a segment here.

4. Click **Offers & Promotions**. **Expected:** the **Offers & Promotions** page opens (breadcrumb **Marketing › Offers & Promotions**). This is where the discounts a campaign or SmartLink hands out are defined. The metric band reads **Active Offers**, **Total Redemptions**, **Scheduled**, and **Expired**. Columns are **Offer Name**, **Type**, **Discount**, **Valid From**, **Valid To**, **Uses**, and **Status**. A **+ New Record** button adds one. If a member says a promo code did not work, you check its **Valid From / Valid To** window and **Status** here.

5. Click **Email Templates**. **Expected:** the **Email Templates** page opens (breadcrumb **Marketing › Email Templates**). These are the reusable email layouts that campaigns and lifecycle automations pull from. The metric band reads **Total Templates**, **Active**, **Categories**, and **Default Reply-To**. Columns are **Template Name**, **Subject Line**, **Category**, **Code**, **Reply-To**, and **Updated**, filtered by category chips including **Cancellation**, **Pause & Resume**, **Plan Change**, **Refund**, **Retention**, **Customer Service**, and **Account**. A **+ New Template** button adds one.

6. Click **Paid Media (DRAFT)**. **Expected:** the **Paid Media** page opens (breadcrumb **Marketing › Paid Media (DRAFT)**). This page matches member audiences to ad platforms and ties ad spend back to washes. It has four tabs: **Audience Sync**, **Closed-Loop Attribution**, **Platform Connections**, and **Sync Settings**. The Audience Sync metric band reads **Matched Audiences**, **Total Matched Members**, **Ad-Attributed Washes**, and **Blended ROAS**, with **Meta** and **Google** platform rows showing **Active**, **Paused**, or **Error**. Do not click **Sync Now** or a row **Sync**: those push audience data out to the ad platforms. The **(DRAFT)** tag means this feature is still being built out.

7. Click **Deliverability**. **Expected:** the **Deliverability** page opens (breadcrumb **Marketing › Deliverability**; document title **Email Deliverability**). This is inbox health, and it is the page you open before you accept "the platform didn't send." Six tabs run across it: **List Health**, **Bounce Management**, **Suppression List**, **Domain Warm-Up**, **TCPA Consent**, and **Settings**. The metric band reads **Inbox Rate**, **Hard Bounce Rate**, **Spam Complaint Rate**, **List Health Score**, and **TCPA Consent**. List Health lists signals such as **Hard Bounce Rate**, **Soft Bounce Rate**, **Spam Complaint Rate**, **Unsubscribe Rate**, **List Engagement (30d)**, and **Never-Engaged Contacts**, each tagged **Good**, **Watch**, or **Action**. A **Run Full Audit** button sits top-right, and a warning banner can appear at the top with a **Review campaign →** link when a signal crosses its threshold. If a member's address is on the **Suppression List**, no campaign will reach it, and that is not a platform outage.

8. Click **Referral Program**. **Expected:** the page opens under **Settings** (breadcrumb **Settings › Referral Programs**; the header reads **Referral Programs**). This is refer-a-friend. The metric band reads **Total Programs**, **Active**, **Total Referrals**, and **Rewards Pending**, above panels for **Referrals by Program**, **Program Status**, and **Conversion Rate**. The program table columns are **Program Name**, **Status**, **Trigger**, **Referrer Reward**, **Friend Reward**, **Referrals**, and **Actions**, with **View Referrals** and **+ New Program** buttons and per-row **View** and **Edit**. Note that the sidebar item reads **Referral Program** while the page it opens is titled **Referral Programs** and lives in Settings.

9. Click **SMS Templates**. **Expected:** the **SMS Templates** page opens (breadcrumb **Marketing › SMS Templates**). These are the reusable text-message bodies, and the metrics reflect how tight a text has to be: **Total Templates**, **Categories**, **Avg Characters**, and **Avg SMS Segments**. Columns are **Template Name**, **Message Preview**, **Category**, and **Chars**, filtered by chips such as **Retention**, **Win-Back**, **Onboarding**, **Promotions**, **Seasonal**, **Locations**, and **General**. A **+ New Template** button adds one. The character and segment counts matter because a message that spills past one segment costs more to send.

10. Click **RCS Templates**. **Expected:** the **RCS Templates** page opens (breadcrumb **Marketing › RCS Templates**). RCS is the richer messaging format, with cards, carousels, and media that drop back to plain SMS when a phone cannot show them. The metric band reads **Total Templates**, **Message Types**, **Categories**, and **Have SMS Fallback**. Columns are **Template Name**, **Type**, **Category**, and **Updated**, and the message types show as **card**, **carousel**, **text**, and **media**. A **+ New Template** button adds one. The **Have SMS Fallback** metric is the safety net: it tells you what share of these still land as a text on older phones.

11. Click **Mobile Content Blocks**. **Expected:** the page opens under **Settings** (breadcrumb **Marketing › Mobile Content Blocks**; a **Mobile** tag sits by the title). This controls what the customer sees inside the mobile app. It is organized into **Tenant**, **Promo Banner**, **Card Rail**, and **Announcements** sections, with a promo-banner editor holding fields such as **Title**, **Subtitle**, **Background image URL**, **CTA label**, **CTA deep link**, **Start date**, and **End date**. Buttons include **+ Add card**, **+ Add announcement**, **View JSON**, and **Save & Publish**. This is a live configuration editor. Read it, do not click **Save & Publish**.

12. Click **Push Campaigns**. **Expected:** the page opens under **Settings** (breadcrumb **Marketing › Push Campaigns**; a **Mobile** tag by the title; subtitle "Compose & schedule push notifications"). This is where mobile push notifications are built. It is laid out as **Tenant**, **Campaigns**, and **Editor** sections, with a **Lock-Screen Preview** and an **Estimated Reach** panel on the right. Buttons include **+ New campaign**, **View JSON**, and **Save & Publish**. This is a compose-and-send surface: name it, read the layout, and leave it. Do not click **+ New campaign** or **Save & Publish**.

13. Recap the map. **Expected:** you can now point to the right Marketing page from a support question. Trackable links go to **SmartLinks**, audiences to **Customer Segments**, discounts to **Offers & Promotions**, message content to the **Email**, **SMS**, and **RCS Templates** pages, ad matching to **Paid Media (DRAFT)**, inbox health to **Deliverability**, refer-a-friend to **Referral Program**, and the mobile app's content and pushes to **Mobile Content Blocks** and **Push Campaigns**.

## Expected results

You can name every page on the **Marketing** sidebar and say in one line what each is for, and you know that three of them, **Referral Program**, **Mobile Content Blocks**, and **Push Campaigns**, open inside **Settings**. You can route a support question to the right page without opening a compose form, and you know that **Deliverability** is the first stop before blaming a missed send on the platform.

## Knowledge check

A client says their win-back texts stopped going out in Toledo. Name two places you check before opening a bug. First, the send status on the **Campaigns** or **Automation** page, where a **⛅ Weather paused** chip explains a hold you would otherwise mistake for an outage (WC-05-01, WC-05-02). Second, **Deliverability**, where **Bounce Management** and the **Suppression List** show whether those numbers were suppressed or bounced rather than never sent.

## Notes and troubleshooting (observed behavior only)

- Three sidebar items open inside **Settings**, not the Marketing module: **Referral Program** (breadcrumb **Settings › Referral Programs**), **Mobile Content Blocks**, and **Push Campaigns** (both carry a **Mobile** tag and the Settings chrome). The breadcrumb tells you where you actually landed.
- The **Marketing** sidebar renders **Email Templates** twice, once in its normal position and again just before **SMS Templates**. Both entries open the same **Email Templates** page. Treat it as a display duplicate, not two different pages.
- **Paid Media** shows a **(DRAFT)** tag in the sidebar label itself, marking the feature as still in progress. Its **Sync Now** and row **Sync** controls push data to **Meta** and **Google**; leave them alone in the demo tenant.
- **Mobile Content Blocks** and **Push Campaigns** are live editors with **Save & Publish**, and Push Campaigns also has **+ New campaign**. This lesson never composes or publishes. Read the layout and move on.
- Legacy Marketing items are not present: there is no Campaign Templates, Campaign Sources, or Landing Pages page, and Forecasting lives under **Analytics**, not Marketing (see DISCREPANCIES.md #4).
- The demo tenant forbids sending. Every **+ New**, **Export**, **Sync**, and **Save & Publish** button on these pages is left unclicked here; composition and sending are taught up to the confirm step in later, page-specific lessons.

## Related lessons

WC-05-01 Campaigns · WC-05-02 Automation · WC-06-02 The Analytics sidebar (marketing reports).

**Verified against demo.washcentral.com on July 9, 2026.**

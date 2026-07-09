# WC-02-02 · Customer 360 (CRM)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

Customer 360 is the single record you open for almost every member question: who they are, what plan they carry, what the POS scans, what they were charged, and what you have already said to them. This lesson walks the whole page in order, from the header band down through all nine tabs, so you can find any fact fast and know which controls are safe to touch. It runs in two parts. Part 1 covers the header band and the first five tabs. Part 2 covers the last four tabs, the **Actions ▾** menu, and a recap. You read everything here; you send nothing and you change nothing.

## Audience and prerequisites

Internal Micrologic technicians who support members. You should be signed in and able to reach **CRM → Customers**, which is where WC-02-01 (Customer List) leaves you. No prior CRM experience is assumed. Editing a customer and creating a new one are covered separately in WC-02-03.

## Navigation path

`CRM → Customers → [customer row] → Customer 360` (`crm-customer-detail.html`). The list lives in the left sidebar under **CRM → Customers**. Clicking a customer row opens that customer's 360 view; the page deep-links with a `?customer=` parameter, so a specific customer's view is shareable by URL.

**Grounding note (read once).** The Customer 360 view page (`crm-customer-detail.html`) needs a `?customer=` parameter and was not re-captured in the July 9 static sweep, so there is no standalone digest for it. The page anatomy below (header regions, Related chips, the nine tabs and their contents, the Actions menu) is the documented Customer 360 structure from the July 8 verified walk recorded in the learning plan. The header identity, the status chips, and the metric-band tiles are corroborated by the July 9 capture of the same member's shared record header on the **Edit Customer** form (`crm-customer-edit`). Where a specific value or a tab's inner content is not in that corpus or the plan, it is marked `TBD — parked`.

## Steps

One action per step. The same step numbers run through the shot list and the narration. Hold each new screen for two to three seconds before moving on. The example record used below is the member captured in the corpus, **Maria Gonzalez** (**CUS-10284**); a live click on any row shows that member's own values in the same layout.

### Part 1 — Header band and tabs 1 to 5

1. From the **Customer List**, click a customer row. **Expected:** that customer's **Customer 360** view opens (`crm-customer-detail.html?customer=…`). A header band runs across the top, a six-tile metric band sits beneath it, a row of Related chips follows, and a tab bar begins the record body.
2. Read the header identity block on the left. **Expected:** an avatar with the member's initials and a green presence dot, the member's name, a plan badge (**★ Unlimited Plus** on the captured record), and an identifier line reading **CUS-10284 · Fort Lauderdale · ● Active · Low Risk** (customer number, home location, account status, risk tier). This is who you are looking at and where they belong.
3. Read the status chips under the identity line. **Expected:** four quick-status chips: **★ Unlimited Plus**, **Plate linked**, **Auto-pay active**, and **SMS subscribed**. They tell you at a glance that the plan is active, a plate is on file for the cameras, billing runs on auto-pay, and the member has opted in to text.
4. Read the header buttons on the right. Do not click any of them. **Expected:** **← Back**, **Delete**, **Edit Customer**, and a green **Actions ▾** menu. **← Back** returns to the list, **Edit Customer** opens the edit form (WC-02-03), and **Actions ▾** holds the member-level actions you list in Part 2. **Delete** is never clicked in this lesson.
5. Read the metric band beneath the header. **Expected:** six tiles. As documented in the July 8 walk they are **Member Since**, **Plan $/mo**, **Washes (30d)**, **Loyalty Points**, **Next Renewal**, and **Last Visit**. On the captured record the shared header shows **Member Since** Jan 14, 2024, **Loyalty Points** 2,300, **Next Renewal** Apr 14, 2026, and **Last Visit** Mar 24, 2026. See the note below: the July 9 capture of the same header labels two of these tiles differently, so the exact view-page tile set is parked for re-capture.
6. Read the Related chips row. **Expected:** count chips that jump to the member's related records: **Vehicles · Transactions · Wash Books · Gift Cards · House Account · Loyalty · Rewards**. Each chip is a shortcut into that slice of the account. The specific counts on the view page are `TBD — parked` (the view was not re-captured July 9).
7. Click the **Overview** tab (the default tab). **Expected:** the **AI SUMMARY "Customer 360 Snapshot"** sits at the top, a generated plain-language summary of plan, price, tenure, home location, and recent visits, with fact chips (Plan / Plan price / Member since / Home location) and a **Regenerate** button. Below it: **Monthly Visits** (AVG/MONTH, PEAK MONTH, LAST 30 DAYS with a 12-month bar chart), a **Visit Breakdown** donut, **Monthly Spend** (LIFETIME, AVG/MO, LAST MONTH), and **Loyalty Points** (TOTAL POINTS, TIER, EXPIRES). Do not click **Regenerate**; treat the summary as a draft you confirm against the tabs.
8. Click the **Contact** tab. **Expected:** the member's record information in groups: **PERSONAL & BUSINESS** (FULL NAME, DATE OF BIRTH, GENDER, COMPANY, HOUSE ACCOUNT, SIGNATURE ON FILE), **ADDRESS** (STREET ADDRESS, LINE 2, CITY, STATE, ZIP CODE, COUNTRY), **PHONE & EMAIL** (PHONE, MOBILE, FAX, EMAIL ADDRESS), plus **NOTIFICATION PREFERENCES** and **MESSAGING CONSENT** (TRANSACTIONAL MESSAGING, PROMOTIONAL MESSAGING). This tab is read-only here; editing these fields is WC-02-03.
9. Click the **Membership** tab. **Expected:** four groups. **PLAN DETAILS** (MEMBERSHIP TYPE, HOME LOCATION, MEMBER SINCE, STATUS, MONTHS REMAINING, REWARD PROGRAM); **LOYALTY & POINTS** (LOYALTY CARD, **BARCODE**, TEMP BARCODE, ACCUMULATES POINTS, REWARDS EXPIRE); **VISIT & SPEND STATS** (FIRST VISIT, LAST VISIT, TOTAL VISITS, TOTAL POINTS, TOTAL AMOUNT SPENT); and **BILLING CYCLE** (RENEWAL DATE, LAST CHARGE, NEXT CHARGE, LAST PAYMENT RESULT). The **BARCODE** here is what the POS scans, so this tab is your first stop for a "my tag won't scan" ticket, and **NEXT CHARGE** answers "when am I billed again."
10. Click the **Payments** tab. Do not add a card. **Expected:** **PAYMENT METHODS** with a **+ Add Card** control, and **PREPAID & CREDITS** listing any prepaid books on file. You read the cards on file and any credit here; you do not add or edit a payment method in this lesson.
11. Click the **Vehicles** tab. Do not add a vehicle. **Expected:** **VEHICLES ON ACCOUNT** with a **+ Add Vehicle** control, and a **RETRACTS** list of the equipment holds applied to this account's washes (documented examples: Tire Shine, Top Brush, Pick-up Top Blowers). The vehicles here are the plates the cameras match to the plan.

*Part 1 ends here. Part 2 continues on the same record without leaving the page.*

### Part 2 — Tabs 6 to 9, Actions menu, and recap

12. Click the **Linked Accounts** tab. Do not link anything. **Expected:** family, co-driver, or shared-membership links for this member, with a **+ Link Account** control. This is where shared plans and household relationships show up.
13. Click the **Activity** tab. **Expected:** **VISIT & TRANSACTION HISTORY**, newest first, each entry carrying a type, a date, and an amount. This is the running log of what the member did and when.
14. Click the **Messaging** tab. Do not type and do not send. **Expected:** the two-way text view, **"CRM · TWO-WAY MESSAGING — Text Conversation"**, an SMS thread showing the opt-in status ("SMS opt-in confirmed") and a compose box. You read the history here to see what was already said. Sending is out of scope: never send a message from this tab in the demo.
15. Click the **Notes** tab. Do not save a note. **Expected:** **Customer Notes** ("Internal staff notes — not visible to customer") with **Pin to top**, **Clear**, and **Save Note** controls; below it, **Communication History** with channel filters **All / SMS / Email / Calls / Push / In-App**; and a **Change History** panel. Notes are the internal record; the customer never sees them.
16. Click **Actions ▾** to open the menu, read the items, then close it without choosing one. **Expected:** the menu lists **Issue Wash** and **Refund Customer**. The legacy guide describes six membership actions (including Cancel, Reset, and Pause Membership); only these two appear live, and whether the others are role- or release-gated is `TBD — parked (PARKED-ITEMS.md #4)`. Both items are send- or money-type actions: never click **Issue Wash** or **Refund Customer** in the demo. Close the menu with **Esc** or by clicking **Actions ▾** again.
17. Recap the record. **Expected:** from one page you read who the member is (header and chips), the headline numbers (metric band), the account slices (Related chips), and nine tabs that answer the common tickets: the barcode the POS scans and the next charge date live on **Membership**, consent lives on **Contact** and **Messaging**, and the internal trail lives on **Notes**. You send nothing and change nothing to answer any of it.

## Expected results

From a single customer row you open a complete member record and read it end to end without changing anything. You can name the plan and status from the header, read the six headline numbers from the metric band, jump to a related record from the Related chips, and work all nine tabs: the AI snapshot and charts on **Overview**, the contact and consent fields on **Contact**, the scannable **BARCODE** and **NEXT CHARGE** on **Membership**, the cards and prepaid credit on **Payments**, the plates and equipment retracts on **Vehicles**, the household links on **Linked Accounts**, the visit log on **Activity**, the SMS thread on **Messaging**, and the internal notes and change trail on **Notes**. You list the **Actions ▾** items without running them.

## Notes and troubleshooting (observed behavior only)

- The Customer 360 view page (`crm-customer-detail.html`) was not re-captured in the July 9 static sweep; the sweep captured the sign-in gate for it. The page anatomy in this guide is the documented structure from the July 8 verified walk, with the header identity, status chips, and metric-band tiles corroborated by the July 9 capture of the same record's shared header on the **Edit Customer** form. A live row-click walk is needed to re-verify tab contents and chip counts on the view page itself.
- Metric-band labels do not fully agree between sources. The July 8 view-page walk recorded the six tiles as **Member Since · Plan $/mo · Washes (30d) · Loyalty Points · Next Renewal · Last Visit**. The July 9 capture of the same member's shared record header (on the Edit Customer form) shows the second and third tiles as **Lifetime Spend** ($1,248) and **Total Visits** (46) rather than Plan $/mo and Washes (30d). The exact view-page tile set is parked pending a live re-capture; do not treat either pair as final until the view page is walked again.
- The **Edit Customer** form tabs differ from the Customer 360 view tabs. The view has nine tabs (Overview, Contact, Membership, Payments, Vehicles, Linked Accounts, Activity, Messaging, Notes). The July 9 edit form shows **Contact, Membership, Payments, Vehicles, Communication, Comments, Record Information** instead; Communication, Comments, and Record Information replace the view's Messaging, Notes, Linked Accounts, Activity, and Overview. This is expected because the edit form is a different page; do not carry edit-form tab names onto the view.
- Several detail and edit pages in the demo load a fixed sample record regardless of the row clicked (the Edit Customer form loads the same sample member). If the view page does the same, the record you see may not match the row you clicked; read the identifier line to confirm which member you are on.
- **Actions ▾** currently lists only **Issue Wash** and **Refund Customer** (see `DISCREPANCIES.md #6`). The missing legacy membership actions are parked at `PARKED-ITEMS.md #4`.
- Nothing on this page is sent or changed by reading it. The send-type and money-type controls are **Issue Wash**, **Refund Customer**, the Messaging compose box, and the Payments and Vehicles add controls. None of them are clicked in this lesson.

**Knowledge check.** Which tab and field do you open to verify (1) the barcode the POS scans, (2) the member's next charge date, (3) SMS consent, and (4) which vehicles auto-activate the plan? (Answers: 1 and 2 are the **BARCODE** and **NEXT CHARGE** fields on the **Membership** tab; 3 is the opt-in status on **Messaging**, backed by **MESSAGING CONSENT** on **Contact**; 4 is the **Vehicles** tab.)

## Related lessons

WC-02-01 Customer List · WC-02-03 Edit Customer / New Customer · WC-03-02 Ticket View (for the refund entry point) · WC-12-06 Users & Security (refund approval).

**Verified against demo.washcentral.com on July 9, 2026.**

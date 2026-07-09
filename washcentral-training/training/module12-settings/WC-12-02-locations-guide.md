# WC-12-02 · Locations (Settings)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson covers the **Locations** area of Settings: the site list every wash record hangs off, the five-tab location detail behind each row, and the three sibling pages that group sites, style their panels, and gate their payment credentials. The lesson runs in two parts. Part 1 reads the **Locations** list and the first two detail tabs, **Profile** and **Operations**. Part 2 reads the **Payments & Credentials**, **Messaging**, and **Users** tabs, then the sibling pages **Location Groups**, **Location Sub-Brand**, and **Payment Credential Approval**. Everything here stays read-only for you. By the end you can find a site, read its five tabs, and say which payment gateways it is wired to without ever touching a value.

## Audience and prerequisites

Internal Micrologic technicians on Tech Support and Onboarding. You should be comfortable opening **Settings** and reading a WashCentral list (columns, search box, KPI tiles) from WC-01-04. Nothing is changed in this lesson. A location record and its payment credentials drive live billing at a real site, so editing them is production-admin work and is never done from a support seat in the demo tenant.

## Navigation path

The four Locations pages sit together in the Settings sidebar under the **Locations** group: `Settings → Locations → Locations`, `Settings → Locations → Location Groups`, `Settings → Locations → Location Sub-Brand`, and `Settings → Locations → Payment Credential Approval`. The Settings header also carries a **Locations▾** dropdown that reaches the same four. The five-tab detail opens when you click a row in the **Locations** list.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. This is a read-only reference: locate **+ New Record** on each list but never click it, open a location detail only to read it, and leave every form by **Cancel** or **← Back**. Never save, and never copy a credential value, even a masked one.

### Part 1 — the Locations list, Profile, and Operations

1. Open **Settings** and expand the **Locations** group in the left sidebar. **Expected:** the group opens to four pages: **Locations**, **Location Groups**, **Location Sub-Brand**, and **Payment Credential Approval**. The Settings header carries a matching **Locations▾** dropdown.

2. Click **Locations**. **Expected:** the **Locations** page opens. A KPI band runs across the top with four tiles: **Total Locations**, **Active**, **States**, and **Last Sync**. In the July 9 capture they read 6 total locations, 6 active, 2 states, and a last sync of Today. Three panels sit below: **Location Growth Trend**, **Location Breakdown** (by state), and **Location Status** (configuration health). The **Location Breakdown** panel splits the sites by state, with New Jersey the largest share, then New York, then Online.

3. Read the **Locations List** card and its columns. **Expected:** the card is **Locations List** with a record count, and it carries eight columns: **CODE**, **NAME**, **ADDRESS**, **CITY**, **STATE**, **ZIP**, **PHONE**, and **LAST SYNC**. The search box reads "Search locations…", a **Filters** control and a **Search** button sit to its right, and **+ New Record** is top-right. **CODE** is the short site code you will see everywhere else in the platform (values like MLAS and SSNB appear on the Payment Credential Approval list in Part 2).

4. Click a location row to open its detail. **Expected:** the location detail opens with five tabs across the top: **Profile**, **Operations**, **Payments & Credentials**, **Messaging**, and **Users**. **Profile** is the default tab. (The five tab names are confirmed against the project screen map, DISCREPANCIES.md #23. The detail page did not render in the July 9 corpus, so the fields inside each tab are documented here only down to the level the map confirms; see Notes.)

5. Read the **Profile** tab. **Expected:** **Profile** holds the location's identity and where it is: its code and name, its address and contact details, and its operating hours. This is the tab you open to confirm you are looking at the right site. The exact field labels on **Profile** are not in the July 9 corpus and are parked pending a live detail capture (see Notes); read them off the live page when recording.

6. Click the **Operations** tab. **Expected:** **Operations** holds the site's behavior flags and its time-clock and payroll settings: whether the site shows on dashboards, whether it is open for online service, and the automatic clock-out and overtime rules for its staff. **[READ-ONLY] Exercise 12.2a, part A:** on **Operations**, locate the automatic clock-out timeout and the overtime threshold for the site. Read them; change nothing. The exact **Operations** field labels are parked pending a live capture (see Notes).

### Part 2 — Payments & Credentials, Messaging, Users, and the sibling pages

7. Click the **Payments & Credentials** tab. **Expected:** this tab holds the site's portal and auto-charge options and a **CREDENTIAL CONFIGURATION** section. **CREDENTIAL CONFIGURATION** is organized into per-gateway blocks, one block per payment processor the site can use: **OPENEDGE**, **SMARTTECH**, **OTHER**, and **CARDCONNECT**. Every secret in these blocks renders masked. **[READ-ONLY] Exercise 12.2a, part B:** name which gateway blocks are present on the site. Read the block names only. Never copy a credential value, even a masked one. (Gateway block names confirmed against DISCREPANCIES.md #23.)

8. Click the **Messaging** tab. **Expected:** **Messaging** holds the per-location message settings for the site. The exact fields are parked pending a live capture (see Notes). Read only.

9. Click the **Users** tab. **Expected:** **Users** lists who has access to this location. The exact columns are parked pending a live capture (see Notes). Read only.

10. Leave the detail without saving: click **← Back** or **Cancel**. **Expected:** you return to the **Locations** list with nothing changed. A location's credentials cannot be edited freely from here anyway: credential changes route through **Payment Credential Approval**, the sibling page you read in step 13. For support work you read a location, you do not edit it.

11. In the sidebar, click **Location Groups**. **Expected:** the **Location Groups** page opens with the card **Location Groups List** and five columns: **NAME**, **DESCRIPTION**, **LOCATIONS**, **GEO GROUP**, and **ON DASHBOARD**. Three tiles sit on top: **Total Groups**, **Locations Grouped**, and **Shown on Dashboard**. The search box reads "Search location groups…" and **+ New Record** is top-right. A location group bundles several sites so a report or a dashboard can treat them as one set.

12. Click **Location Sub-Brand**. **Expected:** the page opens titled **Sub-Brands** (the sidebar link reads **Location Sub-Brand**; same destination). The card is **Sub-Brands List**, with columns **PANEL TYPE**, **TITLE COLOR**, **PRICE BOX COLOR**, and **CARD BOX COLOR**, and a **Total Configs** tile. The search box reads "Search sub-brand panel configs…". A sub-brand config styles the customer-facing panels for a set of sites, which is how one operator runs sites under more than one brand look.

13. Click **Payment Credential Approval**. **Expected:** the page opens titled **Location Payment Credential Approval**. The card is **Location Payment Approval List** with columns **LOCATION**, **GATEWAY**, **STATUS**, **SUBMITTED**, and **APPROVED BY**. Four tiles sit on top: **Pending**, **Approved**, **Rejected**, and **Locations** (1 pending, 6 approved, 0 rejected, 6 locations in the July 9 capture), with panels **Approval Activity Trend**, **Approval Breakdown** (by gateway), and **Approval Status**. The observed rows show sites MLAS and SSNB on gateway OpenEdge with a **Approved** status. This is the queue a credential change on step 7 flows into: a site submits new gateway credentials, and an admin approves or rejects them here.

14. Recap the area. **Expected:** **Locations** is the site list and the entry to the five-tab detail (**Profile**, **Operations**, **Payments & Credentials**, **Messaging**, **Users**); **Payments & Credentials** names the gateway blocks (**OPENEDGE**, **SMARTTECH**, **OTHER**, **CARDCONNECT**) without exposing values; **Location Groups** bundles sites; **Location Sub-Brand** styles their panels; and **Payment Credential Approval** is where credential changes are signed off. You read all of it; you edit none of it.

## Expected results

From Settings you can open the **Locations** list, read its KPI band and its eight columns, and open any site's five-tab detail. You can read **Profile** and **Operations** for a site, then on **Payments & Credentials** name which gateway blocks it carries without touching a value. You can leave the detail by **← Back** with nothing changed. And you can read the three sibling pages: **Location Groups**, **Location Sub-Brand** (page **Sub-Brands**), and **Payment Credential Approval**, and say what each one controls. Opening or reading any of these changes nothing.

## Notes and troubleshooting (observed behavior only)

- During the July 9 capture, the **Locations**, **Location Groups**, and **Sub-Brands** lists showed "Couldn't load locations (Failed to fetch). Check your connection to the AI agent service." in place of rows, and their KPI tiles for group and sub-brand counts read "—". Row data on these pages loads from the agent service, so that message signals a data-service connection problem, not an empty list. The page layout, KPI labels, and column headers were captured intact. The **Payment Credential Approval** list did return rows (MLAS and SSNB). When recording, confirm each list shows real rows before rolling; do not record the error state.
- The location detail page (`settings-locations-edit.html`) returned HTTP 404 during the July 9 sweep, and no separate five-tab capture exists in the lesson evidence folder. So the five tab names (**Profile**, **Operations**, **Payments & Credentials**, **Messaging**, **Users**) and the four **CREDENTIAL CONFIGURATION** gateway blocks (**OPENEDGE**, **SMARTTECH**, **OTHER**, **CARDCONNECT**) are grounded in the project screen map (DISCREPANCIES.md #23), but the field-level content inside each tab is not in the corpus and is parked. Read the exact per-tab field labels off the live detail page when recording, and do not assert them from this guide. (Reported as a new parked item.)
- The demo tenant held 6 locations across 2 states (New Jersey and New York, plus an Online entry) in the July 9 capture, not the larger migrated set an earlier orientation note described. Treat the exact site count as tenant data that can change, not a fixed platform fact. (Reported as a new discrepancy against the learning plan.)
- The **Location Sub-Brand** sidebar link opens a page titled **Sub-Brands**; same destination, two names.
- Credential changes do not take effect straight from a location's **Payments & Credentials** tab; they route through **Payment Credential Approval** for an admin to approve. That approval queue is the sibling page in step 13, and it is where you confirm whether a submitted credential change was approved or is still pending.
- Never copy a credential value from **CREDENTIAL CONFIGURATION**, masked or not. Naming the gateway block that is present (for a payment-decline ticket, for example) is enough for support; the values stay on the site.

## Knowledge check

1. A site's members are not auto-recharging. Which tab do you open, and which two settings do you read before escalating? **Answer:** open the site's **Payments & Credentials** tab and read its two auto-charge controls, the decline-attempts limit and whether the recharge scheduler is enabled. Both are in the auto-charge area of that tab. (The exact field labels are parked pending a live detail capture; read them off the live page.)
2. A payment-decline ticket asks which processor a site runs. Where do you look, and what do you write down? **Answer:** the site's **Payments & Credentials** tab, the **CREDENTIAL CONFIGURATION** section. Write down the gateway block name that is present (**OPENEDGE**, **SMARTTECH**, **OTHER**, or **CARDCONNECT**). Never copy the values.
3. An admin says a location's new gateway credentials "aren't live yet." Which page confirms the state? **Answer:** **Payment Credential Approval**, where each submission shows a **STATUS** of pending, approved, or rejected.

## Related lessons

WC-12-03 Services and per-location values · WC-12-04 Payments & Finance · WC-12-09 Integrations · WC-01-04 Reading a WashCentral list · PB-4 Payment declines.

**Verified against demo.washcentral.com on July 9, 2026.**

# WC-08-04 · Appointment Scheduling (Operations)

v1.1 · July 11, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 11, 2026.** (Appointments page verified July 9; the six SCHEDULER sibling pages verified July 11 via in-app navigation.)

## Purpose

This lesson reads the **Appointments** page under **Operations → SCHEDULER**. This is where customer-facing bookings live: detail jobs, oil changes, and inspections that a customer reserves for a day and time. By the end you can find the page from the rail, read the four booking KPIs and the three insight panels at a glance, work the appointment list and its search and filter controls, and switch between the **List** and **Calendar** views without touching a record. You will also know the other pages in the **SCHEDULER** group by name and where the real work of each one belongs.

One thing to settle up front, because it trips people up: this page is not the staff labor schedule. Who works which shift lives under **Team → Employee Schedules**. **Appointments** is the customer booking board. Same word, different job.

## Audience and prerequisites

Internal Micrologic technicians who already know the global rail and header from Module 1. You should be signed in and able to reach the **Operations** module. No prior scheduling experience is assumed. This is a read-only tour: you open the page, read it, toggle a view, and change nothing.

## Navigation path

`Operations → SCHEDULER → Appointments` (`sched-appointments.html`). Open the **Operations** module from the left rail, then pick **Appointments** under the **SCHEDULER** group in the sidebar. The page breadcrumb reads **Scheduling › Appointments**.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. Nothing here edits, sends, or exports; every step is **[READ-ONLY]** unless it says otherwise.

1. From the left rail, open **Operations**, then click **Appointments** under the **SCHEDULER** group. **Expected:** the Appointments page loads. The rail shows the module as **Operations**, the sidebar highlights **Appointments** in the **SCHEDULER** group, the page eyebrow reads **SCHEDULING**, and the breadcrumb reads **Scheduling › Appointments**. The header carries **Search ⌘K**, **Ask Shyne**, and your **MG** avatar (those tools are covered in Module 1 and are out of scope here).
2. Read the KPI band across the top. **Expected:** four tiles report the booking picture: **Today** reads **18**, **This Week** reads **84**, **Utilization** sits at **78%**, and **No-Shows** is **3%**. These are your fast health check before you open anything: how busy today is, how full the week is running, how much of the available capacity is booked, and how many customers did not show.
3. Look at the **Booking Trend** panel on the left. **Expected:** the panel is labeled **Booking Trend** with the subtitle **Last 12 months**. It shows a total of **840** with an **↑ +19%** change and a line running across the months from **Jan** to **Dec**. This is the year-over-year direction of bookings, so you can tell whether volume is climbing or slipping.
4. Look at the **By Service** panel in the middle. **Expected:** the panel is labeled **By Service** with the subtitle **Appointment mix**, and it breaks bookings down by service: **Full Detail** at **38%**, **Interior Detail** at **28%**, **Oil Change** at **22%**, and **Other** at **12%**. This tells you what customers are actually booking, which is the mix your bays and staffing have to match.
5. Look at the **Booking Status** panel on the right. **Expected:** the panel is labeled **Booking Status** with the subtitle **Schedule health**. A stacked bar splits into **82% CONFIRMED**, **15% PENDING**, and **3% NO-SHOW**. Confirmed bookings are locked in, pending ones still need a customer to confirm, and the no-show slice is the share that never arrived.
6. Drop to the list block below the panels. **Expected:** a second eyebrow reads **SCHEDULING · APPOINTMENTS**, the heading is **Appointments**, and it reports **18 records**. On the right sit a view toggle, **List** and **Calendar**, with **List** currently active. This is the working list of individual bookings.
7. Look at the two buttons beside the view toggle. **Expected:** **+ New Record** and **Export** sit at the top-right of the list block. **+ New Record** starts a fresh booking, and **Export** downloads the list. You do not open either in this lesson. During recording, do not click **Export**. The **+ New Record** booking form is a separate lesson and is not opened here (TBD — parked, new item: the New Record form fields are not captured in this corpus).
8. Look at the search row under the list header. **Expected:** a search box shows the placeholder **Search appointments…**, with **Filters ▾** and a **Search** button to its right. The box narrows the list by matching text, and **Filters ▾** opens a filter menu for the columns. Do not run a filter in this lesson.
9. Read the column headers of the list. **Expected:** the table has seven sortable columns: **DATE**, **TIME**, **CUSTOMER**, **SERVICE**, **LOCATION**, **STAFF**, and **STATUS**, with a checkbox at the left of each row for selecting it. Every booking is one row: the day and time, who booked, what service, which site, the assigned staff, and where the booking stands.
10. Scan a few rows down the **STAFF** and **STATUS** columns. **Expected:** the **STAFF** column reads **Staff TBD** on these bookings, and the **STATUS** column shows values such as **Confirmed** and **Scheduled**. **Staff TBD** is the platform's own data on these appointments, and it lines up with the point from the Purpose: this board captures the customer booking first, and who works it is assigned separately.
11. Look at the pager at the bottom of the list. **Expected:** a page-size control reads **25**, and a pager shows **‹ 1 ›**. The list shows 25 rows per page and you move between pages with the arrows.
12. Click **Calendar** to switch the view. **Expected:** the toggle highlight moves to **Calendar** and the same bookings reorganize into a calendar layout. This only changes how the appointments are displayed. It edits no data and nothing is booked or moved. The specific calendar layout is not captured in this corpus: TBD — parked (new item — Appointments Calendar view contents).
13. Click **List** to switch back. **Expected:** the toggle highlight returns to **List** and the row-by-row table comes back exactly as it was. Toggling the view is fully reversible and changes nothing.
14. Run your eye down the rest of the **SCHEDULER** group in the sidebar, without clicking in. **Expected:** below **Appointments**, the group lists **Schedulable Services**, **Resources**, **Business Hours**, **Messaging**, **Payments**, and **Reports**. All six are real pages, verified live on July 11 via in-app navigation (their direct URLs 404; reach them from this sidebar). Each is its own surface: **Schedulable Services** is the bookable catalog (services with category, duration, price, locations, active flag), **Resources** is what a booking is booked against (bays and equipment with capacity and availability), **Business Hours** is when each site takes bookings (open/close and slot cadence per location and day, plus holiday blocks), **Messaging** holds the confirmation and reminder rules and templates, **Payments** holds the deposit and refund policy with per-location overrides, and **Reports** is the booking analytics dashboard (funnel, revenue by service, time-slot demand). This lesson stays on **Appointments**; the sibling pages are summarized at page level in the Notes and each is its own deep dive. One guardrail: **Messaging** is a send-type page (its KPI band reports live sends), so never send a customer message from it while touring.
15. Recap what the page gives you. **Expected:** from **Operations → SCHEDULER → Appointments** you read the day and week at a glance from the KPIs, judge the service mix and confirmation health from the panels, work individual bookings in the list, and flip between **List** and **Calendar** without changing anything. Keep the labor schedule separate in your head: shifts are **Team → Employee Schedules**, bookings are here.

### Knowledge check

A service manager asks two things: how many appointments are on the books for today across the network, and how healthy the week looks in terms of confirmed versus still-pending bookings. Which KPI answers the first, and which panel answers the second? Then a customer calls to move a booking to a different day and to add a brand-new one. Which view lets you read the week at a glance, and which button starts the new booking?

(Answers: the **Today** KPI; the **Booking Status** panel, which splits **CONFIRMED / PENDING / NO-SHOW**; the **Calendar** view; and **+ New Record**.)

## Expected results

You can reach **Appointments** from **Operations → SCHEDULER**, read the booking KPIs and the **Booking Trend**, **By Service**, and **Booking Status** panels, and work the appointment list with its columns, search, **Filters ▾**, and pager. You can switch between the **List** and **Calendar** views and put it back, knowing the toggle only changes the display. You can name the other **SCHEDULER** pages and you keep customer booking (**Appointments**) separate from staff labor scheduling (**Team → Employee Schedules**).

## Notes and troubleshooting (observed behavior only)

- The **List** and **Calendar** toggle is view-only. It reorganizes how the same appointments are shown and changes no data, and switching back to **List** restores the table. The **Calendar** view's detailed layout is not captured in this corpus and is parked (new item).
- **Export** downloads the list and **+ New Record** opens a booking form. Neither is exercised in this lesson. During recording, do not click **Export**; the **+ New Record** form is documented in a later lesson (its fields are parked, new item).
- The **STAFF** column shows **Staff TBD** on the current bookings. That is the platform's data as observed. Assigning who works a booking is separate from taking the booking, and staff labor schedules live under **Team → Employee Schedules**, not here.
- The **SCHEDULER** group's six sibling pages are real and were verified live on July 11, 2026 via in-app navigation. Their direct URLs return a 404 (each did on the July 9 probe, and still does); the sidebar is the only route in, so navigate in-app. Page-level facts, observed July 11 (each breadcrumbs **Scheduling › [name]**):
  - **Schedulable Services** — the bookable catalog. KPIs **18 Total Services / 15 Active / 4 Categories / 75 min Avg Duration**; columns **SERVICE NAME, CATEGORY, DURATION, PRICE, LOCATIONS, ACTIVE** (rows such as **Full Detail**, Detail, 180 min, $149.00, All, Yes).
  - **Resources** — what bookings are booked against. KPIs **18 Total Resources / 16 Available / 2 In Use / 5 Locations**; columns **RESOURCE NAME, TYPE, LOCATION, CAPACITY, STATUS** (rows such as **Detail Bay 1**, Detail Bay, MLAS, 1 car, Available).
  - **Business Hours** — when each site takes bookings. KPIs **6 Locations Configured / 3 Holiday Blocks / 48 Total Slots/Day / 38 Avg Bookable**; columns **LOCATION, DAY, OPEN, CLOSE, APPOINTMENT SLOTS, STATUS**, including holiday rows (e.g., **All / July 4 2025 / Closed**).
  - **Messaging** — confirmation and reminder rules plus templates. KPIs **12,840 Messages Sent · 30d / 98.2% Delivery Rate / 42% Confirm via Link / 7.1% Cancel via Link**; a **Global Send Rules** panel (confirmation channel, reminder lead time, reminder channel, confirm/cancel via link, cancel cutoff, quiet hours), a template list (**TEMPLATE, TRIGGER, CHANNEL, LANGUAGE, LAST SENT, STATUS**), token chips such as `{customer_first}` and `{confirm_link}`, and **+ New Template / Import / + Add Override** buttons. Send-type: look, never send, never save a rule change.
  - **Payments** — deposit and refund policy. KPIs **$8,420 Down Payments · 30d / $71,310 Service Revenue · 30d / $640 Refunded · 30d / 94% Show-Up Rate**; **Down-Payment Rules** and **Cancellation Policy** panels plus a per-location override table (**LOCATION, DEPOSIT REQUIRED, AMOUNT, AUTO-REFUND, FULL WINDOW, NO-SHOW, STATUS**, with **Inherited/Override** chips). Payment policy is shared-tenant configuration: read-only, always.
  - **Reports** — booking analytics. Headline KPIs **Booked 412 / Confirmed 388 / Cancelled 37 / Converted (Paid) 351 / Service Revenue $71,310 / Avg Ticket $203**, with **Today/Week/Month/Quarter/YTD** range chips, an **Export PDF** button (not clicked), a conversion funnel, a revenue-by-service table (**SERVICE, BOOKINGS, PAID, REVENUE, AVG TICKET**), a time-slot demand heatmap, and bay efficiency.

  Each sibling is still its own deep-dive lesson; this list is the page-level orientation. **Messaging** stays send-type and **Payments** is settings-grade: never send, save, or override from either while touring.
- The rail label for the module reads **Operations**. Legacy material called this area the "Scheduler" module and described a predictive labor-planning workspace. On the live platform the "Scheduler" opens **Operations → Scheduling → Appointments** (customer booking), and labor scheduling is the weekly grid under **Team → Employee Schedules**; the forecast workspace is not present. See DISCREPANCIES.md #14.
- If the session **Still there?** dialog appears while you are on the page, that is the idle timeout, not part of this lesson. Choose **Stay Logged In** or **Stay Active** to keep working. Session behavior is covered in WC-01-03.

## Related lessons

WC-08-01 Maintenance Issues · WC-08-03 Incident Reports · WC-07-02 Employee Schedules (Team) · WC-01-04 List conventions.

**Verified against demo.washcentral.com on July 11, 2026.**

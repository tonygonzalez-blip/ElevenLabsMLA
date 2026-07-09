# WC-08-04 · Appointment Scheduling (Operations)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

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
14. Run your eye down the rest of the **SCHEDULER** group in the sidebar, without clicking in. **Expected:** below **Appointments**, the group lists **Schedulable Services**, **Resources**, **Business Hours**, **Messaging**, **Payments**, and **Reports**. Each is its own surface: what can be booked, what and who is available to book against, when the site takes bookings, customer reminders, deposits, and scheduling reports. This lesson stays on **Appointments**; the sibling pages are noted here at the menu level only (their contents are out of scope for this lesson). One guardrail: **Messaging** is a send-type page, so never send a customer message from it while touring.
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
- The **SCHEDULER** group's other pages (**Schedulable Services**, **Resources**, **Business Hours**, **Messaging**, **Payments**, **Reports**) are named at the menu level in this lesson. Their page contents were not observable in this corpus (each returned an HTTP 404 during capture), so they are not documented here and are parked as a new item; treat each as its own lesson. **Messaging** is send-type, so never send from it while looking around.
- The rail label for the module reads **Operations**. Legacy material called this area the "Scheduler" module and described a predictive labor-planning workspace. On the live platform the "Scheduler" opens **Operations → Scheduling → Appointments** (customer booking), and labor scheduling is the weekly grid under **Team → Employee Schedules**; the forecast workspace is not present. See DISCREPANCIES.md #14.
- If the session **Still there?** dialog appears while you are on the page, that is the idle timeout, not part of this lesson. Choose **Stay Logged In** or **Stay Active** to keep working. Session behavior is covered in WC-01-03.

## Related lessons

WC-08-01 Maintenance Issues · WC-08-03 Incident Reports · WC-07-02 Employee Schedules (Team) · WC-01-04 List conventions.

**Verified against demo.washcentral.com on July 9, 2026.**

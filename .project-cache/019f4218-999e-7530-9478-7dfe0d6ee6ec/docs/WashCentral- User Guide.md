WashCentral Platform User Guide
Page 1 of 136
WashCentral
Platform User Guide
Car Wash Operations Management System
A complete walkthrough of every module, screen, record, and configuration page

WashCentral Platform User Guide
Page 2 of 136
Table of Contents
Table of Contents...................................................................................................................................2
1. Introduction ........................................................................................................................................5
1.1 How this guide is organized .........................................................................................................5
2. Getting Started...................................................................................................................................6
2.1 Signing in......................................................................................................................................6
2.2 The home dashboard and global navigation................................................................................6
2.3 Interface conventions ...................................................................................................................8
3. Dashboard & Analytics.......................................................................................................................9
4. Marketing .........................................................................................................................................12
5. CRM — Customers..........................................................................................................................20
5.1 The Customer List......................................................................................................................20
5.2 Customer 360 — the customer detail view ................................................................................20
5.3 Editing, deleting and adding a customer....................................................................................25
5.4 Supporting CRM programs ........................................................................................................26
6. Inventory ..........................................................................................................................................33
6.1 Inventory Items list .....................................................................................................................33
6.2 Inventory Item detail...................................................................................................................33
6.3 Editing and adding an item.........................................................................................................35
6.4 Batches, Types and Vendors.....................................................................................................36
7. Sales & Transactions .......................................................................................................................38
7.1 Ticket List ...................................................................................................................................38
7.2 Ticket detail ................................................................................................................................38
7.3 Editing a ticket............................................................................................................................41
7.4 Other Sales screens...................................................................................................................41
8. Employees .......................................................................................................................................46
8.1 Employee List.............................................................................................................................46
8.2 Employee detail..........................................................................................................................46
8.3 Editing, deleting and adding an employee.................................................................................48
8.4 Roles, commissions and time-clock...........................................................................................50
9. Scheduler (Workforce).....................................................................................................................53
9.1 Schedule Planning .....................................................................................................................53
9.2 Other Scheduler screens ...........................................................................................................55
10. Gamification ...................................................................................................................................60
11. Maintenance...................................................................................................................................63
11.1 Issues (work orders).................................................................................................................63
11.2 Equipment Registry..................................................................................................................64

WashCentral Platform User Guide
Page 3 of 136
11.3 Other Maintenance screens.....................................................................................................65
12. Mobile.............................................................................................................................................70
13. Support...........................................................................................................................................73
14. Audit ...............................................................................................................................................76
15. Reports...........................................................................................................................................80
16. System Configuration (Settings)....................................................................................................84
16.1 General tab...............................................................................................................................84
16.2 Analytics ...................................................................................................................................89
16.3 Locations ..................................................................................................................................89
16.4 Services....................................................................................................................................94
16.4.1 Active Locations & per-location configuration ...................................................................95
16.5 Payments & Finance ................................................................................................................98
16.5.1 Discount Active Locations & per-location values ..............................................................99
16.6 Hardware................................................................................................................................104
16.7 UI & Display............................................................................................................................106
16.8 Users & Security.....................................................................................................................112
16.9 Operations..............................................................................................................................114
16.10 VIP & Membership ...............................................................................................................118
16.11 Automation ...........................................................................................................................121
16.12 Customer Portal ...................................................................................................................122
Appendix A. The Universal Record Pattern.......................................................................................128
A.1 View the record........................................................................................................................128
A.2 Edit the record..........................................................................................................................128
A.3 Delete the record .....................................................................................................................129
A.4 Add a new record.....................................................................................................................129
Appendix B. Quick Actions.................................................................................................................130
B.1 Edit Dashboard widgets...........................................................................................................130
B.2 Link a vehicle to a customer....................................................................................................130
B.3 Add retracts to a vehicle ..........................................................................................................131
B.4 View a customer’s historical transaction activity .....................................................................131
B.5 Update a customer’s primary card on file................................................................................131
B.6 Edit a customer’s messaging preferences...............................................................................131
B.7 Send a payment method update link.......................................................................................132
B.8 Add an alert message for a customer......................................................................................132
B.9 Add a house account payment method...................................................................................132
B.10 Customize a house account’s special pricing and rules........................................................132
B.11 Create a house account invoice ............................................................................................132
B.12 Receive a house account payment .......................................................................................132

WashCentral Platform User Guide
Page 4 of 136
B.13 View a house account’s historical / active invoices...............................................................133
B.14 Make an adjustment...............................................................................................................133
B.15 Make a refund........................................................................................................................133
B.16 Approve a refund ...................................................................................................................133
B.17 Issue a gift card......................................................................................................................133
B.18 View a gift card’s recent activity ............................................................................................133
B.19 Edit membership terms & conditions .....................................................................................134
B.20 Edit membership services......................................................................................................134
B.21 Edit membership family pricing..............................................................................................134
B.22 Import Inventory batch ...........................................................................................................134
B.23 Blacklist a vehicle...................................................................................................................134
B.24 Change a user password.......................................................................................................134
B.25 View historical user changes .................................................................................................135
B.26 Change employee login (POS)..............................................................................................135
B.27 Calculate a predictive operational forecast ...........................................................................135
B.28 Mark a service to be sold online ............................................................................................135
B.29 Download a scheduled report................................................................................................135
B.30 Manually sync a dashboard...................................................................................................135
B.31 Make a new employee schedule ...........................................................................................135

WashCentral Platform User Guide
Page 5 of 136
1. Introduction
WashCentral is a centralized, web-based operations platform for car wash businesses. From a 
single browser application it manages the entire business: the customer base and membership 
programs (CRM), point-of-sale tickets and payments (Sales), stock and consumables (Inventory), 
staff records and time-keeping (Employees), labor forecasting and shift planning (Scheduler), 
equipment upkeep (Maintenance), the customer-facing mobile app and self-service portal, marketing 
campaigns, analytics dashboards, reporting, and a deep System Settings area that configures every 
one of these capabilities.
This guide is a complete, screen-by-screen reference.
1.1 How this guide is organized
The guide follows the same logical grouping the application itself uses:
• Getting Started — signing in, the global navigation rail, and the user-interface patterns that 
repeat (list views, detail views, search/filter, and the create/edit/delete pattern).
• Operational Modules —Dashboard & Analytics, Marketing, CRM, Inventory, Sales, 
Employees, Scheduler, Gamification, Maintenance, Mobile, Support, Audit, and Reports.
• System Configuration (Settings) — the eleven settings categories that control how the 
operational modules behave.
• Appendix — the universal record pattern (View → Edit → Delete → Add) 
Tip: every screenshot is shown at a readable size; open the document in Microsoft Word or a PDF 
viewer and zoom in to inspect individual fields.

WashCentral Platform User Guide
Page 6 of 136
2. Getting Started
Signing in, the navigation rail, and the interface conventions used throughout WashCentral.
2.1 Signing in
Figure 2.1 — The sign-in screen
WashCentral can be accessed in a web browser at the location URL. Authentication requires three 
pieces of information rather than the usual two:
• Username: the operator's login name.
• Password: the operator's secret password.
• Company / Account: the tenant (business account) the user belongs to. A single 
WashCentral installation hosts many independent car-wash companies, so the account 
identifier routes the login to the correct database.
After a successful sign-in the user lands on the home dashboard. 
2.2 The home dashboard and global navigation

WashCentral Platform User Guide
Page 7 of 136
Figure 2.2 — Landing view after login
The dark vertical bar on the far left is the global navigation rail; it is present on every screen and is 
how users move between the major modules. The icons running down the left rail (top to bottom) 
open: Command Center, Analytics, Marketing, CRM, Inventory, Sales, Employees, Gamification, 
Maintenance, Mobile, Support, Audit, Scheduler and Reports. The gear icon at the very bottom 
opens System Settings.
Figure 2.3 — Command Center (home dashboard)
The Command Center is the operational home page. It surfaces the headline numbers a manager 
checks first, such as sales, car counts, membership health — and acts as the launch point into the 
detailed modules. 

WashCentral Platform User Guide
Page 8 of 136
Figure 2.4 — Command Center intelligence panels
Scrolling the Command Center reveals analytical panels (trends, alerts and AI-assisted summaries) 
that highlight what needs attention without opening a full report.
2.3 Interface conventions
• List view — a searchable, sortable table of records (e.g. the Customer List or the Services 
List). Column headers sort; a search box filters; a Filters control narrows by attribute; and 
action buttons (Export, Delete, and a green “+ New …” button) sit in the top-right.
• Detail view (“360”) — selecting a row opens that record's read-only detail page, usually 
organized into tabs, with Back, Delete and Edit buttons in the top-right and sometimes an 
Actions menu.
• Edit form — the Edit button turns the detail page into an editable form with the same tabs; 
Cancel discards, Save Changes commits.
• Delete confirmation — destructive actions always raise a confirmation warning: (“Are you 
sure… This action cannot be undone”) with “No, Keep” and “Yes, Delete”. 
• Create form — the “+ New …” button opens a blank version of the Edit form to add a record.
Appendix A walks through this universal pattern in detail using a single example record.

WashCentral Platform User Guide
Page 9 of 136
3. Dashboard & Analytics
Read-only business intelligence — operational dashboards across sales, locations, maintenance 
and staff engagement.
The Analytics module is a set of visual dashboards to present trends and key performance indicators 
drawn from across the platform.
Figure 3.1 — Analytics dashboard
The primary analytics dashboard aggregates sales, traffic and revenue indicators with charts and 
summary tiles for the selected period and locations.

WashCentral Platform User Guide
Page 10 of 136
Figure 3.2 — Location summary
A per-location breakdown that compares sites side by side, useful for multi-wash operators 
evaluating relative performance.
Figure 3.3 — Maintenance dashboard
An equipment-health view summarizing open issues, upcoming preventive maintenance and 
reliability indicators sourced from the Maintenance module.

WashCentral Platform User Guide
Page 11 of 136
Figure 3.4 — Gamification dashboard
A staff-engagement view tracking sales contests, leaderboards and target attainment fed by the 
Gamification module.

WashCentral Platform User Guide
Page 12 of 136
4. Marketing
Campaigns, templates, automation, landing pages, offers, segments and deliverability.
The Marketing module is a full customer-communications suite: design campaigns, build reusable 
email and SMS templates, automate multi-step marketing campaigns, publish landing pages and 
smart links, define offers and promotions, segment the customer base for targeted communications, 
monitor deliverability, and forecasting.
Figure 4.1 — Campaigns
The campaigns list shows marketing campaigns and their status, the starting point for creating and 
monitoring outreach.

WashCentral Platform User Guide
Page 13 of 136
Figure 4.2 — Campaign detail / builder
The campaign builder where audience, content and schedule are assembled for a single campaign.
Figure 4.3 — Campaign templates
Reusable campaign blueprints that speed up creating recurring or similar campaigns.

WashCentral Platform User Guide
Page 14 of 136
Figure 4.4 — Email templates
The library of email templates used as the content of email campaigns and transactional messages.
Figure 4.5 — Campaign sources
Source definitions used to attribute where campaign traffic and sign-ups originate.

WashCentral Platform User Guide
Page 15 of 136
Figure 4.6 — Marketing automation
Automated, trigger-based flows that send messages in response to customer behavior or lifecycle 
events.
Figure 4.7 — Automation detail
The detailed configuration of an automation flow, defining triggers, steps and timing.

WashCentral Platform User Guide
Page 16 of 136
Figure 4.8 — Landing pages
Hosted landing pages used as campaign destinations for sign-ups and promotions.
Figure 4.9 — Smart links
Trackable short links that route customers and capture click analytics.

WashCentral Platform User Guide
Page 17 of 136
Figure 4.10 — Offers & promotions
Promotional offers that can be attached to campaigns and redeemed by customers.
Figure 4.11 — Customer segments
Saved audience segments that target campaigns at defined groups of customers.

WashCentral Platform User Guide
Page 18 of 136
Figure 4.12 — Segment detail
The criteria that define a segment of customers.
Figure 4.13 — Deliverability
Email/SMS deliverability monitoring — bounces, opt-outs and sending health.

WashCentral Platform User Guide
Page 19 of 136
Figure 4.14 — SMS templates
The library of SMS message templates used in campaigns and automations.
Figure 4.15 — Forecasting
Forward-looking projections that help plan marketing spend and expected response.

WashCentral Platform User Guide
Page 20 of 136
5. CRM — Customers
The member database: customer records, memberships, vehicles, payments, messaging, and 
supporting programs.
CRM is the heart of WashCentral. It holds every customer and member, their vehicles, plans, 
payment methods, transaction history and two-way messaging. The module's left menu also 
contains the supporting programs that revolve around customers: gift cards, house accounts, loyalty 
discounts, prepaid books, rewards/unlimited programs, retail customers, bundles, fundraisers and 
PIN codes.
5.1 The Customer List
Figure 5.1 — Customer List with KPI panel
The Customer List is a classic list view, but topped with a metrics panel unique to CRM: Total 
Customers, Active Members, At-Risk and Prospects counts, plus Member Growth, Plan Distribution 
and Risk Profile cards. Below it the searchable, filterable member table shows each customer's 
location, plan, last visit, spend and risk band. The top-right offers Retention Log, Export, Bulk Import, 
Delete and the green “+ Add Customer” button.
5.2 Customer 360 — the customer detail view
Selecting any customer row opens “Customer 360” detail view in the platform. A header band shows 
the customer's name, plan badge, status and key lifetime metrics (member since, lifetime spend, 
total visits, loyalty points). A row of “Related” chips (Vehicles, Transactions, Wash Books, Gift Cards, 
House Account, Loyalty, Rewards) gives quick counts, and nine tabs organize everything known 
about the customer.

WashCentral Platform User Guide
Page 21 of 136
Figure 5.2 — Customer 360: Overview tab
Overview opens with an AI-generated “Customer 360 Snapshot” summarizing the plan, tenure, visit 
cadence and status in plain language, followed by visual panels for monthly visits and a service-type 
visit breakdown.
Figure 5.3 — Customer 360: Contact tab
Contact holds personal and business details (name, date of birth, gender, company), the houseaccount flag, signature-on-file indicator, and the full mailing address.
Figure 5.4 — Customer 360: Membership tab
Membership shows the plan details: membership type, home location, member-since date and 
status, recurring billing, reward program, and the loyalty/points and barcode information used at the 
point of sale.

WashCentral Platform User Guide
Page 22 of 136
Figure 5.5 — Customer 360: Payments tab
Payments lists the stored payment methods (card brand, last four, primary/active flags, expiry) with 
per-card actions (Transactions, Update Card, Send Link) and the prepaid/credit balances.
Figure 5.6 — Customer 360: Vehicles tab
Vehicles enumerates the cars attached to the account with plate, state, make, model and color, each 
with an “Open Vehicle” link and an “+ Add Vehicle” control.
Figure 5.7 — Customer 360: Linked Accounts tab
Linked Accounts groups family members, co-drivers or shared memberships under the primary 
account; “+ Link Account” adds a new link.

WashCentral Platform User Guide
Page 23 of 136
Figure 5.8 — Customer 360: Activity tab
Chronological history of visits, transactions, plan changes, activations and refunds. Each entry 
shows with amount, operator and time, with quick links such as “Refund Detail” and “Print Receipt”.
Figure 5.9 — Customer 360: Messaging tab
Messaging is a two-way SMS conversation thread with the customer, including opt-in status and a 
compose box for replies.

WashCentral Platform User Guide
Page 24 of 136
Figure 5.10 — Customer 360: Notes tab
Holds internal staff annotations. Staff can add a note, pin it to the top, and see prior notes with 
author and timestamp.
Figure 5.11 — Customer 360: Actions menu
The Actions menu (top-right) shows customer membership operations: Issue Wash, Refund 
Customer, Refund Transaction, Cancel Membership, Reset Membership and Pause Membership.

WashCentral Platform User Guide
Page 25 of 136
5.3 Editing, deleting and adding a customer
Figure 5.12 — Edit Customer form
The Edit Customer button turns the detail page into an editable form with tabs (Contact, 
Membership, Payments, Vehicles, Communication, Comments). Required fields are marked, and 
Cancel / Save Changes sit in the top-right of the page.
Figure 5.13 — Delete Customer confirmation
The Delete button will notify the user with a warning message. “Yes, Delete” permanently removes 
the customer; “No, Keep” cancels the action. 

WashCentral Platform User Guide
Page 26 of 136
Figure 5.14 — New Customer form
“+ Add Customer” opens a blank version of the edit form (“Create a new customer record”) 
5.4 Supporting CRM programs
The remaining CRM menu items each manage a customer-adjacent program. 
Figure 5.15 — Customer Retention Log
Tracks retention events and at-risk follow-ups for the member base.

WashCentral Platform User Guide
Page 27 of 136
Figure 5.16 — Generate House-Account Invoices
Batch-generates invoices for house accounts.
Figure 5.17 — Gift Cards
Issued gift cards with balances and status with an option to issue a new gift card.

WashCentral Platform User Guide
Page 28 of 136
Figure 5.18 — House Accounts
Corporate / charge accounts that bill periodically through invoices.
Figure 5.19 — Loyalty Discounts
Loyalty-based discount definitions applied to members.

WashCentral Platform User Guide
Page 29 of 136
Figure 5.20 — Prepaid Books
Prepaid wash books currently issued to customers, with an option to add a new prepaid book.
Figure 5.21 — Rewards & Unlimited Programs
The unlimited / rewards membership programs offered at sites.

WashCentral Platform User Guide
Page 30 of 136
Figure 5.22 — Rewards & Unlimited Types
The types of grouping for rewards/unlimited programs.
Figure 5.23 — Vehicles
The master list of vehicles known to the system across all customers, with an option add a vehicle.

WashCentral Platform User Guide
Page 31 of 136
Figure 5.24 — Retail Customers
Walk-in / retail (non-member) customer records.
Figure 5.25 — Bundles
Bundled product/service packages offered to customers.
Figure 5.26 — Fundraiser
Fundraiser program settings for community/charity wash events.

WashCentral Platform User Guide
Page 32 of 136
Figure 5.27 — PIN Codes
Gas PIN codes associated with customers or programs.

WashCentral Platform User Guide
Page 33 of 136
6. Inventory
Items, batches, types and vendors.
The Inventory module tracks every sellable and consumable item such as retail products, wash 
chemicals and supplies. Its menu contains Inventory Items, Inventory Batches, Inventory Types and 
Vendors.
6.1 Inventory Items list
Figure 6.1 — Item List
The Item List shows every inventory record with ID, SKU, description, item cost, item price and type. 
Top-right actions include Delete, Export, Audit Inventory, Import Physical Inventory and “+ New 
Inventory Item”.
6.2 Inventory Item detail

WashCentral Platform User Guide
Page 34 of 136
Figure 6.2 — Item detail: Item Details tab
Selecting an item opens its detail view. The Item Details tab contains the following identity fields: 
SKU, description, part number, unit code, inventory type, vendor and the “show on handheld” flag.
Figure 6.3 — Item detail: Pricing & Tax tab
Pricing & Tax holds item cost, item price, quantity on hand, reorder quantity, taxable/tax-included 
flags and the two tax-rate slots.

WashCentral Platform User Guide
Page 35 of 136
Figure 6.4 — Item detail: Commission & Service tab
Determines if the item pays commission (by percent or fixed amount), who it pays to, optional 
service-frequency (miles/months) for serviceable items, and last-sold / created metadata.
6.3 Editing and adding an item
Figure 6.5 — Edit Inventory Item form
Edit Inventory Item makes the same three tabs editable; required fields (SKU, Description, Inventory 
Type) are marked. Cancel / Save Changes confirm or discard.

WashCentral Platform User Guide
Page 36 of 136
Figure 6.6 — New Inventory Item form
“+ New Inventory Item” opens the blank create form. (The Delete confirmation for items is identical to 
the standard dialog shown in Figure 5.13.)
6.4 Batches, Types and Vendors
Figure 6.7 — Inventory Batches
Receiving/stock batches that record quantities brought into inventory.

WashCentral Platform User Guide
Page 37 of 136
Figure 6.8 — Inventory Types
The type grouping applied to inventory items.
Figure 6.9 — Vendors
Supplier records that inventory items are purchased from.

WashCentral Platform User Guide
Page 38 of 136
7. Sales & Transactions
Point-of-sale tickets, adjustments, payments, payouts, shifts and card processing.
The Sales module shows transaction and financial records associated with the business. Its menu 
spans Tickets, Ticket Details, Adjustments, Payments, Payouts, Shifts, the Declined Credit Card 
Log, Credit Card Transactions, Retail Customer Transactions and Refunds Approval.
7.1 Ticket List
Figure 7.1 — Ticket List
The Ticket List shows point-of-sale tickets filtered by location and date range, with ticket number, 
date/time, total, status, tender type and customer. A note reminds that tickets older than 90 days 
cannot be modified.
7.2 Ticket detail

WashCentral Platform User Guide
Page 39 of 136
Figure 7.2 — Ticket detail: Main tab
Selecting a ticket shows its full record: ticket information (ID, number, date, location, status, payment 
type), a financial summary (goods/services amount, tax, tip, payments, ticket total) and the 
staff/equipment that handled it. 
Figure 7.3 — Ticket detail: Details tab
The line items on the ticket with information on each service/product with quantity, amount, total and 
the cashier who did the transaction.

WashCentral Platform User Guide
Page 40 of 136
Figure 7.4 — Ticket detail: Payments tab
The payment records used for the ticket (payment type, check number, amount).
Figure 7.5 — Ticket detail: Refunds tab
The refund history for the ticket, with an “+ Add Refund” control to process a new refund.

WashCentral Platform User Guide
Page 41 of 136
Figure 7.6 — Ticket detail: Notes tab
Notes attached to the ticket, with “+ Add Note”.
7.3 Editing a ticket
Figure 7.7 — Edit Ticket form
Edit Ticket exposes the editable ticket fields (Ticket Main and Tickets Refunds tabs), dropdown 
menus to select a Customer, Vehicle and Greeter. Read-only financial values remain locked.
7.4 Other Sales screens

WashCentral Platform User Guide
Page 42 of 136
Figure 7.8 — Ticket Details
A cross-ticket view of individual line-item details.
Figure 7.9 — Adjustments
Manual financial adjustments applied to tickets/registers.
Figure 7.10 — Payments
All payments collected across tickets.

WashCentral Platform User Guide
Page 43 of 136
Figure 7.11 — Payouts
Cash paid out of the register (e.g., petty cash).
Figure 7.12 — Shifts
Cashier shift/drawer sessions used for reconciliation.
Figure 7.13 — Declined Credit Card Log
A log of declined card authorizations for troubleshooting.

WashCentral Platform User Guide
Page 44 of 136
Figure 7.14 — Credit Card Transactions
The detailed record of card processing transactions.
Figure 7.15 — Retail Customer Transactions
Transactions list of walk-in retail customers.

WashCentral Platform User Guide
Page 45 of 136
Figure 7.16 — Refunds Approval
Refunds to be approved by a system administrator.

WashCentral Platform User Guide
Page 46 of 136
8. Employees
Staff directory, roles, commissions, scheduling links and time-clock.
The Employees module is the staff directory and workforce record with sections for Employees, 
Employee Roles, Tech Commissions, Employee Scheduling, Time Clock and Time Clock Site 
Watch.
8.1 Employee List
Figure 8.1 — Employee List
The Employee List shows each staff member with employee number, name, title, phone, active flag 
and login user name. Top-right: Delete, Export and “+ New Employee”, with Filters and a Location 
selector.
8.2 Employee detail

WashCentral Platform User Guide
Page 47 of 136
Figure 8.2 — Employee detail: Personal Info tab
Identity (ID, employee number, name, date of birth), contact details (phone, email, access-card 
number) and home address. 
Figure 8.3 — Employee detail: Employment Details tab
Employment Details covers role & classification (title, department, employee role, login user name, 
OTP requirement, notification type, hourly wage, tip multiplier), assignment & dates (location, 
hire/termination dates), and status & settings (active, overtime, salaried, leave, etc.).

WashCentral Platform User Guide
Page 48 of 136
Figure 8.4 — Employee detail: Employee Availability tab
The employee's recurring weekly availability by day.
Figure 8.5 — Employee detail: Active Locations tab
The locations and location-groups the employee is active at, each with type and status.
8.3 Editing, deleting and adding an employee

WashCentral Platform User Guide
Page 49 of 136
Figure 8.6 — Edit Employee form
Edit Employee makes all four tabs editable; Employee Number, First and Last Name are required.
Figure 8.7 — Delete Employee confirmation
The standard delete confirmation, naming the employee being removed.

WashCentral Platform User Guide
Page 50 of 136
Figure 8.8 — New Employee form
“+ New Employee” opens the blank create form.
8.4 Roles, commissions and time-clock
Figure 8.9 — Employee Roles
Role definitions assigned to staff.

WashCentral Platform User Guide
Page 51 of 136
Figure 8.10 — Tech Commissions
Commission tracking for technicians/detailers.
Figure 8.11 — Employee Scheduling
The scheduling entry point linked from the Employees module.

WashCentral Platform User Guide
Page 52 of 136
Figure 8.12 — Time Clock
Time-clock punch records.
Figure 8.13 — Time Clock Site Watch
A live monitor of who is currently on the clock, filtered by location.

WashCentral Platform User Guide
Page 53 of 136
9. Scheduler (Workforce)
Predictive labor planning — forecasts, staffing grids, approvals and variances.
The Scheduler is a predictive workforce-planning workspace. Its menu holds Schedule Planning, 
Configurations, Employee Approval, Availability Requests, Employee Shift Log, Store Closing 
Message, Audit Logs, Schedule Variances and the Weekly Staffing Report.
9.1 Schedule Planning
Figure 9.1 — Schedule Planning list
The list of weekly schedule-planning records by location and week, with an option to create a new 
record. 

WashCentral Platform User Guide
Page 54 of 136
Figure 9.2 — Schedule Planning detail: Forecast tab
Selecting a planned week reveals the forecasting workspace. The Forecast tab combines forecasted 
data (next week's sales, car count, gross-per-car, trends) with calculation parameters (labor-hour 
minimums/maximums, clean-up hours), target values and the labor calculation method (labor 
percent vs. labor hours, by gross-per-car / sales-dollars / per-car). “Recalc and Save” recomputes 
the plan according to the entered values.
Figure 9.3 — Schedule Planning detail: Scheduling grid
The Scheduling tab is a visual staffing grid: budget vs. actual hours and variance across the hours of 
the day, with each employee's shift painted as color-coded blocks (Work, Demo, Unavailable, Leave, 
Break, PTO, OT, Waiting, Lunch Break). Select and hold boxes to schedule working hours. “Save 
Grid” commits the plan.

WashCentral Platform User Guide
Page 55 of 136
9.2 Other Scheduler screens
Figure 9.4 — Configurations
Scheduler configuration settings.
Figure 9.5 — Employee Approval
Approvals queue for schedule/shift changes.

WashCentral Platform User Guide
Page 56 of 136
Figure 9.6 — Availability Requests
Employee-submitted availability change requests.
Figure 9.7 — Employee Shift Log
A log of worked shifts.

WashCentral Platform User Guide
Page 57 of 136
Figure 9.8 — Store Closing Message
Store-closing announcements list.
Figure 9.9 — Store Closing Message: new record
The create form for a store-closing message.

WashCentral Platform User Guide
Page 58 of 136
Figure 9.10 — Scheduler Audit Logs
An audit trail of scheduler changes.
Figure 9.11 — Schedule Variances
Variance between planned and actual labor.

WashCentral Platform User Guide
Page 59 of 136
Figure 9.12 — Weekly Staffing Report
A weekly staffing summary report.

WashCentral Platform User Guide
Page 60 of 136
10. Gamification
Sales contests and staff engagement — presentations, leaderboard, targets and prizes.
The Gamification module drives staff performance with sales-floor contests. Its menu holds 
Presentations, Leaderboard, Targets and Prizes.
Figure 10.1 — Presentations
Staff sales activity & engagement by ticket.
Figure 10.2 — Leaderboard
Ranked staff standings for currently active contests.

WashCentral Platform User Guide
Page 61 of 136
Figure 10.3 — Targets
Defined performance targets staff compete against.
Figure 10.4 — Prizes list
Prizes awarded to top performers, with prize frequency, target metric and date range; “+ New 
Record” adds a prize.

WashCentral Platform User Guide
Page 62 of 136
Figure 10.5 — Prize detail
A prize record's detail view (Prize Details, Prize Details List, Active Locations tabs) showing name, 
target metric, frequency, date range and minimum requirement; Edit Record opens the editable form.

WashCentral Platform User Guide
Page 63 of 136
11. Maintenance
Equipment upkeep and work-order tracking — issues, tasks, schedules, equipment, checklists and 
parts.
The Maintenance module manages equipment reliability. Its menu holds Issues, Tasks, Maintenance 
Schedule, Equipment Registry, Equipment Categories, Checklists, Checklist Categories, Parts & 
Supplies, User Groups and Vendor Companies.
11.1 Issues (work orders)
Figure 11.1 — Issue List
Maintenance issues / work-order tracking, with Print Report, “+ New Issue” and Delete. (Shown 
filtered.)

WashCentral Platform User Guide
Page 64 of 136
Figure 11.2 — New Issue form
The New Issue form records a work order: title, location, priority, status, equipment category, 
equipment, component, and assignment to a user or group. Tabs: Issue Details, Description, 
Attachments.
11.2 Equipment Registry
Figure 11.3 — Equipment Registry list
The asset registrar of all wash equipment with category, manufacturer and install date with an option 
to create “+ New Equipment”

WashCentral Platform User Guide
Page 65 of 136
Figure 11.4 — Equipment detail
An equipment record's detail view carries identity and lifecycle data (name, description, category, 
manufacturer, supplier, model, serial number, install date, locations, tags, notes). Tabs: Details, 
Components, Issues, Equipment History, Images & Manual.
11.3 Other Maintenance screens
Figure 11.5 — Tasks
Maintenance tasks list.

WashCentral Platform User Guide
Page 66 of 136
Figure 11.6 — Maintenance Schedule
Preventive-maintenance scheduling.
Figure 11.7 — Equipment Registry (menu)
The equipment registry.

WashCentral Platform User Guide
Page 67 of 136
Figure 11.8 — Equipment Categories
Categories used to classify equipment.
Figure 11.9 — Checklists
Maintenance checklists.

WashCentral Platform User Guide
Page 68 of 136
Figure 11.10 — Checklist Categories
Categories for checklists.
Figure 11.11 — Parts & Supplies
Spare parts and supplies inventory for maintenance.

WashCentral Platform User Guide
Page 69 of 136
Figure 11.12 — User Groups
Groups that maintenance work can be assigned to.
Figure 11.13 — Vendor Companies
External maintenance vendors.

WashCentral Platform User Guide
Page 70 of 136
12. Mobile
The customer mobile app — push notifications, feedback and app settings.
The Mobile module controls the customer-facing mobile app. Its menu holds Notifications, Customer 
Feedback, Push Notification Types, Push Notification Tasks and App Settings.
Figure 12.1 — Notifications
Customer push-notification records, with an option to create a “+ New Notification”.
Figure 12.2 — New Notification form
Composing a push notification: title, content and an optional deep link URL, and audience toggles 
“Send Push Notification” dispatches it.

WashCentral Platform User Guide
Page 71 of 136
Figure 12.3 — Customer Feedback
Feedback submitted by customers through the app.
Figure 12.4 — Push Notification Types
The type taxonomy for push notifications.

WashCentral Platform User Guide
Page 72 of 136
Figure 12.5 — Push Notification Tasks
Scheduled/automated push-notification tasks.
Figure 12.6 — App Settings
Configuration of the customer mobile app.

WashCentral Platform User Guide
Page 73 of 136
13. Support
Internal support tickets, knowledge base, user guide and network devices.
The Support module is the internal help desk. Its menu holds Support Tickets, Knowledge Base, 
User Guide and Network Devices.
Figure 13.1 — Support Tickets
Support/service-request tickets with status, category, priority, created and due dates; “+ New Ticket” 
opens a ticket.

WashCentral Platform User Guide
Page 74 of 136
Figure 13.2 — Support Ticket detail
A support ticket's detail view shows status, contact name, email, phone, severity, category, location 
and description. Tabs: Ticket, Comments, Documents; Edit Support Ticket opens the editable form.
Figure 13.3 — Knowledge Base
Reference articles for self-service support.

WashCentral Platform User Guide
Page 75 of 136
Figure 13.4 — User Guide
The in-app user-guide content.
Figure 13.5 — Network Devices
Registered network devices/equipment for support.

WashCentral Platform User Guide
Page 76 of 136
14. Audit
A complete, read-only trail of system events and user actions.
The Audit module is a tamper-evident history of changes. Its menu holds Audit (system events), 
Refund Audit, Time Clock Audit, Location Audit, Tickets Audit and Customers Audit. 
Figure 14.1 — Audit Log
The system-events log: when, who, action (insert/update), module and IP address.
Figure 14.2 — Audit Log record detail
Opening an audit entry reveals more information on the system change (when, user, action, module, 
record, IP) and a Field Changes table listing each field's old value beside its new value. 

WashCentral Platform User Guide
Page 77 of 136
Figure 14.3 — Refund Audit
The audit trail specific to refunds.
Figure 14.4 — Time Clock Audit
The audit trail for time-clock edits.

WashCentral Platform User Guide
Page 78 of 136
Figure 14.5 — Location Audit
The audit trail for location changes.
Figure 14.6 — Tickets Audit
The audit trail for ticket changes.

WashCentral Platform User Guide
Page 79 of 136
Figure 14.7 — Customers Audit
The audit trail for customer changes.

WashCentral Platform User Guide
Page 80 of 136
15. Reports
The reporting hub — run, favorite and schedule reports across every business area.
The Reports module is the centralized reporting hub. Reports are organized both by view and by 
category. Scheduled reports allow users to generate a report at a later time / date.
Figure 15.1 — All Reports
The full catalog of available reports.
Figure 15.2 — Report categories (sidebar)
Reports grouped by business category.

WashCentral Platform User Guide
Page 81 of 136
Figure 15.3 — Scheduled Reports
Reports configured to run and deliver automatically on a schedule.
Figure 15.4 — Advanced Analytics
The advanced-analytics reporting view.

WashCentral Platform User Guide
Page 82 of 136
Figure 15.5 — Report interface (filters)
A report's run interface: a Filters bar with location and date-range selectors, plus Close Report, 
Schedule and “Run Report”.
Figure 15.6 — Report results
A report after running, displaying its result set for the chosen filters.

WashCentral Platform User Guide
Page 83 of 136
Figure 15.7 — Schedule control
The Schedule control used to set up recurring delivery of a report.
Figure 15.8 — Schedule dialog
The scheduling dialog where frequency and recipients for an automated report are defined.

WashCentral Platform User Guide
Page 84 of 136
16. System Configuration (Settings)
Settings is opened from the gear icon at the bottom of the navigation rail. Most Settings pages are 
list views that follow the universal record pattern (see Appendix A). Important sections in the system 
configuration are covered in the sections below.
Figure 16.1 — Settings home
The Settings landing page: eleven category cards (General, Locations, Services, Payments & 
Finance, Hardware, UI & Display, Users & Security, Operations, VIP & Membership, Automation, 
Customer Portal) and a search box.
16.1 General tab
Account-level details, organizational structure and platform configuration.

WashCentral Platform User Guide
Page 85 of 136
Figure 16.2 — Account Information
Top-level account/business details.
Figure 16.3 — Account Types
Account-type definitions.

WashCentral Platform User Guide
Page 86 of 136
Figure 16.4 — Profile Types
Profile-type definitions.
Figure 16.5 — Profit Centers
Profit-center definitions for financial grouping.

WashCentral Platform User Guide
Page 87 of 136
Figure 16.6 — Departments
Department definitions.
Figure 16.7 — Categories
General category definitions.

WashCentral Platform User Guide
Page 88 of 136
Figure 16.8 — Dayforce Settings
Integration settings for Dayforce (HR/payroll).
Figure 16.9 — Policy Category
Policy-category definitions.

WashCentral Platform User Guide
Page 89 of 136
Figure 16.10 — Forms Category
Form-category definitions.
16.2 Analytics
Figure 16.11 — Dashboard Settings
Configuration of the analytics dashboards.
16.3 Locations
Settings associated with the local sites, including grouping, payment credentials, and sub-brands.

WashCentral Platform User Guide
Page 90 of 136
Figure 16.12 — Locations List
All wash sites with location name, code, and contact information; “+ New Location” adds a site. 
Selecting a location opens the location detail information.
Figure 16.13 — Location detail: Identification tab
The Identification tab holds code, name, short description, site name, customer ID, license, global 
location ID and media (logo, store image, resell-value image). 

WashCentral Platform User Guide
Page 91 of 136
Figure 16.14 — Location detail: Operations tab
Operations governs how the site runs: operation mode (single/multi-site), UTC offset, week-start 
day, peak hour, labor thresholds, minimum wage, and toggles associated with the site.
Figure 16.15 — Location detail: Payments & Portal tab
Payments & Portal sets the preferred payment gateway, billing-zip requirement, external-portal 
options, family-account discount mode, auto-charge decline handling and recharge scheduling for 
the site.

WashCentral Platform User Guide
Page 92 of 136
Figure 16.16 — Location detail: Credential Configuration tab
Credential Configuration stores the site's payment-gateway credentials.
Figure 16.17 — Edit Location form
When editing a location, some fields are protected and read-only.

WashCentral Platform User Guide
Page 93 of 136
Figure 16.18 — Location Groups
Groupings of locations (e.g., regions).
Figure 16.19 — Location Sub-Brand
Sub-brand definitions applied to locations.

WashCentral Platform User Guide
Page 94 of 136
Figure 16.20 — Payment Credential Approval
Approval workflow for location payment credentials and changes.
16.4 Services
Services defines the wash packages and everything sold. The menu holds Services, Service Types, 
Service Groups, Detail Types and Loyalty Discount Types.
Figure 16.21 — Services List
All configured services.

WashCentral Platform User Guide
Page 95 of 136
Figure 16.22 — Service detail
When selecting a service, the platform will show basic information (description, report description, 
approval level, controller/service code, points), pricing (amount, open/min/max amount, taxable, tax 
rates, tax-included) and behavior flags (count as car, track accountability, show on handheld, etc.). 
Tabs: Service Main, Active Locations.
16.4.1 Active Locations & per-location configuration
Settings that vary by site will have an Active Locations tab and per-field, per-location value 
overrides. 
Figure 16.22a — Service: Active Locations tab
The Active Locations tab lists every location and location-group the service is enabled at, each 
tagged with its type and status to control where a wash package is sold.

WashCentral Platform User Guide
Page 96 of 136
Figure 16.22b — Edit Service: per-location 'configure' icons (site-specific settings)
When editing a service, some fields (Amount, Tax Rate 1 & 2, Taxable, Tax Included, Description, 
Controller Code, etc.) show a small gear 'configure' icon beside them. The plain field holds the 
default value used everywhere; the gear opens a dialog box where users can set values that 
override the default value.
Figure 16.22c — The per-location value dialog ('Configure Value For Amount')
Selecting a gear icon opens 'Configure Value For …' titled 'Assign values by Group or Location'. 
Choose a Group/Location from the dropdown and enter the site-specific value related to the setting.
Figure 16.23 — Service Types
The type taxonomy for services.

WashCentral Platform User Guide
Page 97 of 136
Figure 16.24 — Service Groups
Groupings of services.
Figure 16.25 — Detail Types
Detail-type definitions for detailing services.

WashCentral Platform User Guide
Page 98 of 136
Figure 16.26 — Loyalty Discount Types
Loyalty-discount type definitions.
16.5 Payments & Finance
Payments & Finance configures money handling: Payment Types, Discounts, Discount Types, 
Surcharges, Surcharge Types, Payout Percentage, Tax Rates, GL Codes and GL Account Codes.
Figure 16.27 — Payment Types
Accepted tender types.

WashCentral Platform User Guide
Page 99 of 136
Figure 16.28 — Discounts List
All discounts with code, method ($/%), amount, taxable flag, tax rate, type and category; with an 
option to create a “+ New Discount” 
Figure 16.29 — Discount detail
A discount record: basic information (description, approval level, code, barcode, type, category), 
amount & method ($ or %, exclude-from-commission, amount, open-amount limits) and tax settings. 
Tabs: Discount Details, Active Locations.
16.5.1 Discount Active Locations & per-location values
Discounts use the same Active Locations tab and per-location configure pattern described for 
Services in section 16.4.1 — the locations a discount is available at, and per-location overrides of 
the discount value.

WashCentral Platform User Guide
Page 100 of 136
Figure 16.29a — Discount: Active Locations tab
Every location (LOC) and group (GRP) the discount is available at, with status. The discount can 
only be applied at these locations.
Figure 16.29b — Discount: per-location value dialog (populated)
The gear icon beside the discount Amount opens the same 'Configure Value For Amount' dialog. 
Here it already contains an override — the 'Micro' group is given a $4 amount — listed in the table 
with Edit and Delete actions. Sites without an override fall back to the discount's default amount.

WashCentral Platform User Guide
Page 101 of 136
Figure 16.30 — Discount Types
Discount-type taxonomy.
Figure 16.31 — Surcharges
Surcharge definitions.

WashCentral Platform User Guide
Page 102 of 136
Figure 16.32 — Surcharge Types
Surcharge-type taxonomy.
Figure 16.33 — Payout Percentage
Payout-percentage configuration.

WashCentral Platform User Guide
Page 103 of 136
Figure 16.34 — Tax Rates
Tax-rate definitions applied to services and items.
Figure 16.35 — GL Codes
General-ledger codes for accounting integration.

WashCentral Platform User Guide
Page 104 of 136
Figure 16.36 — GL Account Codes
GL account-code definitions.
16.6 Hardware
Hardware configures the physical estate: Hardware / Terminals, Screen Layout, System Types, 
Lube Buttons and Lube Checklists.
Figure 16.37 — Hardware / Terminals
POS terminals and hardware devices.

WashCentral Platform User Guide
Page 105 of 136
Figure 16.38 — Screen Layout
POS/kiosk screen-layout configuration.
Figure 16.39 — System Types
System-type definitions.

WashCentral Platform User Guide
Page 106 of 136
Figure 16.40 — Lube Buttons
Button definitions for lube/oil-change POS.
Figure 16.41 — Lube Checklists
Service checklists for lube operations.
16.7 UI & Display
UI & Display controls the look and content of the POS and kiosk: Button Groups, Button Types, 
Cashier Buttons, Greeter Buttons, Image Design, Colors, Templates, Macros, Macro Types, Macro 
Detail Types and Kiosk Screen Flows.

WashCentral Platform User Guide
Page 107 of 136
Figure 16.42 — Button Groups
Groupings of POS buttons.
Figure 16.43 — Button Types
The button-type taxonomy.

WashCentral Platform User Guide
Page 108 of 136
Figure 16.44 — Cashier Buttons
Cashier-screen button definitions, with Show/Hide and Commit controls.
Figure 16.45 — Greeter Buttons
Greeter-screen button definitions.

WashCentral Platform User Guide
Page 109 of 136
Figure 16.46 — Image Design
Image assets (e.g., gift-card, prepaid-book artwork).
Figure 16.47 — Colors
The color palette referenced by buttons and UI elements.

WashCentral Platform User Guide
Page 110 of 136
Figure 16.48 — Templates
Email/SMS templates with trigger, category and published state.
Figure 16.49 — Macros
POS macros that bundle multiple actions.

WashCentral Platform User Guide
Page 111 of 136
Figure 16.50 — Macro Types
Macro grouping types.
Figure 16.51 — Macro Detail Types
Macro-detail-type definitions.

WashCentral Platform User Guide
Page 112 of 136
Figure 16.52 — Kiosk Screen Flows
Kiosk screen-flow designer with publish-health metrics and hotspot analytics; “+ New Flow” creates a 
flow.
16.8 Users & Security
Users & Security manages access: System Users, User Levels, Security Level and Blacklisted 
(plates/accounts).
Figure 16.53 — System Users
Application login accounts with POS code, user level and active flag.

WashCentral Platform User Guide
Page 113 of 136
Figure 16.54 — User Levels
Hierarchical system permission tiers with Administrator and Anonymous tiers reserved.
Figure 16.55 — Security Levels
Security levels that govern certain actions to require administrator approval.

WashCentral Platform User Guide
Page 114 of 136
Figure 16.56 — Blacklisted
Blacklisted vehicles/plates with vehicle GUID, terminal, site-specific flag and created date.
16.9 Operations
Operations defines the reason codes and type lists used across day-to-day work: Cancellation 
Reasons, Refund Reasons, Rewash Reasons, Time Clock Edit Reasons, Event Types, Transaction 
Types, Issue Status Types, Prepaid Book Types and Prepaid Book Type Types.
Figure 16.57 — Cancellation Reasons
Reasons offered when cancelling memberships/transactions.

WashCentral Platform User Guide
Page 115 of 136
Figure 16.58 — Refund Reasons
Reasons offered when issuing refunds.
Figure 16.59 — Rewash Reasons
Reasons offered when authorizing a rewash.

WashCentral Platform User Guide
Page 116 of 136
Figure 16.60 — Time Clock Edit Reasons
Reasons required when editing a time-clock punch.
Figure 16.61 — Event Types
Event-type definitions.
Figure 16.62 — Transaction Types
Transaction-type definitions.

WashCentral Platform User Guide
Page 117 of 136
Figure 16.63 — Issue Status Types
Status values used by maintenance issues.
Figure 16.64 — Prepaid Book Types
Prepaid-book product definitions with service, wash quantity/value, book price and redemption 
category.

WashCentral Platform User Guide
Page 118 of 136
Figure 16.65 — Prepaid Book Type Types
The higher-level grouping of prepaid-book types.
16.10 VIP & Membership
VIP & Membership configures recurring membership programs: VIP Types, VIP Monthly Types, VIP 
Charge Frequency, VIP Account Service, VIP Loyalty Discounts, Unlimited Promotions and 
Promotional Upgrades.
Figure 16.66 — VIP Types
VIP membership-type definitions.

WashCentral Platform User Guide
Page 119 of 136
Figure 16.67 — VIP Monthly Types
Monthly VIP plan definitions (unlimited, pay-as-you-go, etc.).
Figure 16.68 — VIP Charge Frequency
Billing-frequency definitions (daily, biweekly, BOGO, minutes-based) with show-as-charge/usage 
flags.

WashCentral Platform User Guide
Page 120 of 136
Figure 16.69 — VIP Account Service
The services tied to VIP accounts, with amount and taxable flag.
Figure 16.70 — VIP Loyalty Discounts
Loyalty discounts attached to VIP accounts.

WashCentral Platform User Guide
Page 121 of 136
Figure 16.71 — Unlimited Promotions
Time-boxed promotions on unlimited plans, with start/end dates, plan, months and discount.
Figure 16.72 — Promotional Upgrades
Promotional upgrade offers across unlimited programs.
16.11 Automation
Automation schedules background work: Task Scheduler, Task Parameters and the Mass SMS Log.

WashCentral Platform User Guide
Page 122 of 136
Figure 16.73 — Task Scheduler
Scheduled tasks with run time, frequency, recurrence and the parameter they use.
Figure 16.74 — Task Parameters
Named, reusable query parameters that scheduled tasks run against.
Figure 16.75 — Mass SMS Log
A delivery log of mass-SMS sends with recipient, location, parameter, date and status.
16.12 Customer Portal
Customer Portal configures the self-service website: Portal Settings, Portal Styling, Portal CSS, 
Portal Customizations, Portal Products, Portal Locations, Nav Menu, Nav Order, Screen Options, 
Email Templates, SMS Templates and Contact & About Us.

WashCentral Platform User Guide
Page 123 of 136
Figure 16.76 — Portal Settings
Key portal settings including a live-payments toggle, sub-brand selector and portal preview links.
Figure 16.77 — Portal Styling
Branding for the portal.

WashCentral Platform User Guide
Page 124 of 136
Figure 16.78 — Portal CSS
A custom stylesheet editor for the portal.
Figure 16.79 — Portal Customizations
Name/value/type customizations (colors, images, text) that theme the portal.
Figure 16.80 — Portal Products
The products surfaced on the portal (Prepaid Book and VIP Account tabs) with per-product actions.

WashCentral Platform User Guide
Page 125 of 136
Figure 16.81 — Portal Locations
The default map view and preview of portal locations.
Figure 16.82 — Portal Nav Menu
The portal navigation items (title, icon, target URL, header/footer position, status).
Figure 16.83 — Portal Nav Order
A drag-and-drop ordering of header and side-menu items.

WashCentral Platform User Guide
Page 126 of 136
Figure 16.84 — Portal Screen Options
The portal home-screen tiles and introduction-text blocks with images and order.
Figure 16.85 — Portal Email Templates
An HTML editor (split/code/visual) for portal email-receipt templates.

WashCentral Platform User Guide
Page 127 of 136
Figure 16.86 — Portal SMS Templates
The editor for portal SMS-receipt templates with a live preview and JSON token reference.
Figure 16.87 — Portal Contact & About Us
HTML/JSON content for the portal's Contact and About pages.

WashCentral Platform User Guide
Page 128 of 136
Appendix A. The Universal Record Pattern
View → Edit → Delete → Add — the four-step lifecycle that repeats on nearly every page.
The example below uses a Settings lookup (Operations → Cancellation Reasons) to show all four 
steps; the same buttons, dialogs and flow apply to WashCentral modules.
A.1 View the record
Figure A.1 — Record detail (View)
Selecting a row in any list opens its read-only detail page with its fields (e.g. ID, Description and a 
“Show on POS” toggle) and the three standard buttons: Back, Delete and Edit.
A.2 Edit the record

WashCentral Platform User Guide
Page 129 of 136
Figure A.2 — Edit form
Edit turns the page into a form. Required fields are marked with an asterisk. Cancel discards 
changes; Save Changes commits them. 
A.3 Delete the record
Figure A.3 — Delete confirmation
Delete always raises a confirmation modal naming the record and warning that the action cannot be 
undone. “Yes, Delete” removes it; “No, Keep” cancels. This is the same dialog seen for Customers 
(Figure 5.13) and Employees (Figure 8.7).
A.4 Add a new record

WashCentral Platform User Guide
Page 130 of 136
Figure A.4 — New (Add) form
The green “+ New …” button on the list opens a blank version of the edit form to create a record. 
Across the platform this same create flow is used:
• Search & filter — every list view has a search box (and usually a Filters control and column 
sorting) to find records quickly.
• Export — most list views can export their data via an Export / Export As control.
• Tabs —records group their fields into tabs; the Edit form preserves the same tabs so editing 
stays oriented the same way as viewing.
• Active Locations & per-location values — records that can vary by site carry an Active 
Locations tab (which locations the record applies to) and per-field gear 'configure' icons in the 
Edit form that override a value per location or group. See section 16.4.1 for the worked 
example.
Appendix B. Quick Actions
Appendix B shows additional steps for certain tasks or actions in the platform. 
B.1 Edit Dashboard widgets
From the main dashboard:
1. Go to System Configuration (Settings)
2. Go to General Settings → Dashboard Settings.
3. Select a dashboard from the list to edit.
4. Select Edit Dashboard Setting.
5. Make any changes by dragging and dropping widgets onto the preview.
6. Ensure the User Level or User is set.
7. Select Save Changes.
B.2 Link a vehicle to a customer

WashCentral Platform User Guide
Page 131 of 136
There are multiple ways to link / unlink a vehicle to a customer:
From CRM → Customer:
1. Select the customer.
2. Select Edit Customer.
3. Go to the Vehicles tab.
4. Select the Add Vehicle button.
5. Enter vehicle information (License plate number is required).
6. Select Save Vehicle.
From CRM → Vehicles:
1. Select New Vehicle.
2. Select Customer.
3. Enter vehicle information.
4. Select Save Changes.
If the vehicle already exists:
1. Select the vehicle
2. Select Link Customer.
3. Enter customer information.
4. Press the select button to link the customer.
B.3 Add retracts to a vehicle
From CRM → Customer:
1. Select the customer
2. Select the Vehicles tab.
3. Add or remove any available retracts using the corresponding arrows.
4. Select Save Changes.
B.4 View a customer’s historical transaction activity
Customer activity can be viewed through the Customer 360:
From CRM → Customer:
1. Select the customer.
2. Select the Activity tab.
B.5 Update a customer’s primary card on file
A customer’s card-on-file can be edited in the Customer 360:
From CRM → Customer:
1. Select the customer.
2. Select Edit customer.
3. Select the Payments tab.
4. Select Add Card.
If a customer already has a card-on-file, select Update Card.
B.6 Edit a customer’s messaging preferences
From CRM → Customer:
1. Select the customer
2. Select Edit customer
3. Select Communication. 

WashCentral Platform User Guide
Page 132 of 136
4. Edit the notification settings, messaging consent, and channel preferences.
5. Select Save Changes.
B.7 Send a payment method update link
If a customer already has a card on file, pressing the Update Link button will send an e-mail / SMS 
to the customer to notify them.
B.8 Add an alert message for a customer
From CRM → Customer:
1. Select the customer
2. Select Edit customer
3. Select the Comments tab.
4. Enter message in Alert Messages.
5. Select Save Changes.
B.9 Add a house account payment method
From CRM → House Accounts:
1. Select the house account.
2. Select Edit Account.
3. Select the Billing Tab.
4. Select Add Card.
5. Add the card information.
Note: Send link will send a credit card update link to the primary contact.
B.10 Customize a house account’s special pricing and rules
From CRM → House Accounts:
1. Select the house account.
2. Select Edit Account.
3. Select the Special Pricing tab.
4. Select Add Pricing.
5. Enter special pricing rules.
6. Select an Active Location.
7. Select Save Changes.
B.11 Create a house account invoice
House accounts invoices can be generated from CRM → Generate HA Invoices:
1. Select a location.
2. Select a house account with the checkbox.
3. Select Generate Invoices.
4. Enter the Start and End dates of the invoice.
5. Toggle “Use Billing Cycle” as necessary.
6. Select generate invoice.
B.12 Receive a house account payment
From CRM → House Accounts:
1. Select a house account.
2. Select Receive Payment.
3. Enter payment information.

WashCentral Platform User Guide
Page 133 of 136
4. Select an open invoice.
5. Select save payment.
B.13 View a house account’s historical / active invoices
From CRM → House Accounts:
1. Select the house account.
2. Select the Invoices tab.
B.14 Make an adjustment
From Sales → Adjustments:
Select the new adjustment button and enter the adjustment information.
B.15 Make a refund
Refunds can be made through Sales → Ticket Details:
From Customer 360:
1. Select the Transactions chip from the Related areas.
OR
1. Select Payments
2. Select Transactions next to the payment method.
From Sales → Tickets:
1. Select / search for a ticket.
2. In the ticket details, select the Refunds tab.
3. Select Add Refund.
4. Enter refund information.
5. Select the Add Refund button.
For a full ticket refund:
Select the red Refund button found at the top right corner of the refunds tab.
B.16 Approve a refund
Refunds will need to be approved by a system user with administrator privileges:
From Sales:
1. Select the Refunds Approval tab.
2. Select the refund request.
3. Select Approve Refund.
B.17 Issue a gift card
From CRM → Gift Cards:
1. Select Issue Gift Card.
2. Enter gift card details.
3. Select Save Changes.
B.18 View a gift card’s recent activity
From CRM → Gift Cards:
1. Select an existing gift card.

WashCentral Platform User Guide
Page 134 of 136
2. Go to the Activity tab.
B.19 Edit membership terms & conditions
From CRM → Rewards & Unlimited Programs:
1. Select the membership program.
2. Select Edit Program.
3. Select the Unlimited Terms & Conditions tab.
4. Edit the terms & conditions (HTML).
5. Select Save.
B.20 Edit membership services
From CRM → Rewards & Unlimited Programs:
1. Select the membership program.
2. Select Edit Program.
3. Select the Unlimited Program Services tab.
4. Select New Service.
5. Enter account service information.
6. Select Save Changes.
B.21 Edit membership family pricing
From CRM → Rewards & Unlimited Programs:
1. Select the membership program.
2. Select Edit Program.
3. Select the Family Plan Special Pricing tab.
4. Select New Family Price OR select an existing family plan price and press Edit Record.
5. Enter family plan pricing details.
6. Select Save.
B.22 Import Inventory batch
B.23 Blacklist a vehicle
Vehicles can be blacklisted in the System Configuration (Settings):
From the main dashboard:
1. Go to System Configuration (Settings)
2. Go to Users & Security → Blacklisted List.
3. Select a dashboard from the list to edit.
4. Select New Blacklisted Vehicle.
5. Enter blacklisted vehicle information.
6. If the blacklisted vehicle is site specific, toggle “Is Site Specific” and enter an Active 
Location.
7. Select Blacklist Vehicle.
B.24 Change a user password
From the main dashboard:
1. Go to System Configuration (Settings)
2. Go to Users & Security → System Users.
3. Select a system user

WashCentral Platform User Guide
Page 135 of 136
4. Select Edit System User.
5. Enter the new password.
6. Select Save Changes.
B.25 View historical user changes
Any changes made by system users can be viewed through the Audit module.
B.26 Change employee login (POS)
From the main dashboard:
1. Go to System Configuration (Settings)
2. Go to Users & Security → System Users.
3. Select a system user
4. Select Edit System User.
5. Enter the POS Code.
6. Select Save Changes.
B.27 Calculate a predictive operational forecast
From the main dashboard:
1. Go to Forecasting.
2. Select a location or location group.
3. Select a period:
a. Monthly
b. Yearly
c. Quarters
4. Enter target metrics for car count, membership signups, revenue, labor hours, and labor cost 
per car.
5. Select Forecast.
B.28 Mark a service to be sold online
From CRM → Rewards & Unlimited Programs:
1. Select the membership program.
2. Select Edit Program.
3. Select the Online Settings tab.
4. Under Online Sale, toggle “Sell Online” to YES
5. Select Save Changes.
B.29 Download a scheduled report
Scheduled reports can be downloaded in .pdf or .csv format from Reports → Scheduled Reports 
and then selecting a file type in the Latest Result column.
B.30 Manually sync a dashboard
Analytics dashboards can be synced using the Sync Now button located next to the filters.
B.31 Make a new employee schedule

WashCentral Platform User Guide
Page 136 of 136
From the main dashboard:
1. Go to Scheduler→ Schedule Planning
2. Select +New Schedule.
3. Select the Location.
4. Choose a date in “Create a New Schedule For”
5. Select Save Changes.
6. Go to Schedule Planning and select the newly created schedule.
7. Use the tabs to determine scheduling details for that day.
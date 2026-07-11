# WC-12-05 · Hardware & UI (POS-facing config)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson is a menu-level tour of the two Settings groups that shape what a wash's front-line hardware shows and does: **Hardware** and **UI & Display**. You will read ten lists at list level, from terminal registration through the buttons a cashier and a greeter tap, down to the kiosk screen flows a site publishes. Every screen here stays read-only for you. By the end you can find the page behind a POS-facing ticket, tell a published kiosk flow from a draft, and point to where a button's on-screen label and color are defined. This is where a field tech confirms that a terminal is registered and that the right buttons are wired to the right station.

## Audience and prerequisites

Internal Micrologic technicians on Pre-Configuration, Onboarding, and Field. You should be able to open **Settings** and read a WashCentral list (KPI tiles, columns, search box, pagination) from WC-01-04. Nothing is changed in this lesson. Adding or editing a terminal, a layout, a button, or a kiosk flow is production configuration work and is never done in the demo tenant.

## Navigation path

Both groups live in the left **Settings** sidebar. `Settings → Hardware` opens **Hardware / Terminals**, **Screen Layout**, **System Types**, **Lube Buttons**, and **Lube Checklists**. `Settings → UI & Display` opens **Button Groups**, **Button Types**, **Cashier Buttons**, **Greeter Buttons**, **Image Design**, **Colors**, **Templates**, **Macros**, **Macro Types**, **Macro Detail Types**, and **Kiosk Screen Flows**. Each header also carries a matching **Hardware▾** and **UI & Display▾** dropdown that reaches the same pages.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. This is a read-only reference: locate **+ New Record** (or **+ New Flow** on Kiosk Screen Flows) on each page but never click it, and never open a row.

1. Open **Settings** and expand the **Hardware** group in the left sidebar. **Expected:** the group opens to five pages: **Hardware / Terminals**, **Screen Layout**, **System Types**, **Lube Buttons**, and **Lube Checklists**. These are the site-hardware lists.

2. Click **Hardware / Terminals**. **Expected:** the page opens (breadcrumb **SETTINGS · TERMINALS**), with the card **Terminals List** and six columns: **TERMINAL**, **LOCATION**, **IP**, **SOFTWARE VERSION**, **OS**, and **LAST SEEN**. A **Total Terminals** tile sits across the top, the search box reads "Search by terminal or location…", and **+ New Record** is top-right. This is the register of every POS and back-office machine: which site it belongs to, its address on the network, the build it runs, and when it last checked in. A terminal registered here is the same one a completed ticket points back to when it records which station rang up a sale (WC-03-02). For a "POS down" ticket, this is the page that confirms whether the machine is even registered and when it was last seen (PB-3).

3. Click **Screen Layout**. **Expected:** the page opens with four tiles, **6 Total Layouts**, **6 Active**, **3 POS Layouts**, and **3 Kiosk Layouts**, and three panels, **Layout Usage Trend**, **Layout Distribution** (POS 50%, Kiosk 50%, Handheld 0%, Other 0%), and **Layout Status** (100% ACTIVE). The card is **Screen Layout List** with columns **NAME**, **TYPE**, **LOCATION**, **RESOLUTION**, and **ACTIVE**; the search box reads "Search screen layout…"; and **Filters**, **Search**, and **+ New Record** sit on the toolbar. Two sample rows show the pattern: **Standard POS** (POS, MLAS, 1920x1080, Yes) and **Express Kiosk** (Kiosk, SSNB, 1080x1920, Yes). A layout ties a resolution and a type to a location, so a portrait 1080x1920 kiosk and a landscape 1920x1080 register each get their own entry.

4. Click **System Types**. **Expected:** the page opens with the card **System Types List**, a single column **DESCRIPTION**, a **Total Types** tile, the search box "Search system types…", and **+ New Record**. This is a short lookup list that classifies hardware for the pages that reference it. During the July 9 capture the list did not load (see Notes), so read it here as the column and the purpose, not the values.

5. Click **Lube Buttons**. **Expected:** the page opens with four tiles, **24 Total Buttons**, **22 Active**, **3 Groups**, and **4 Terminals**, and three panels, **Lube Button Usage Trend**, **Button Breakdown** (Oil Change 42%, Tire Rotation 25%, Filter Change 21%, Other 12%), and **Button Status** (92% ACTIVE). The card is **Lube Buttons List** with columns **GROUP**, **TERMINAL**, **TYPE**, **BUTTON TEXT**, and **COLOR**; the search box reads "Search lube buttons…". Two sample rows read **Lube Main / L1 / Service / Oil Change / teal** and **Lube Main / L1 / Service / Tire Rotation / blue**. Each row is one button on a lube-bay terminal: the **GROUP** it belongs to, the **TERMINAL** it shows on, the **BUTTON TEXT** the operator sees, and the tile **COLOR**. This is button wiring at its plainest, one row per tap target.

6. Click **Lube Checklists**. **Expected:** the page opens with the card **Lube Checklists List**, a single column **SERVICE**, a **Total Items** tile, the search box "Search checklist items…", and **+ New Record**. These are the per-service checklist items a lube bay works through. As with System Types, the list did not load during the July 9 capture; read the column and purpose here (see Notes).

7. Switch groups: collapse **Hardware** and expand **UI & Display** in the sidebar. **Expected:** the group opens to eleven pages: **Button Groups**, **Button Types**, **Cashier Buttons**, **Greeter Buttons**, **Image Design**, **Colors**, **Templates**, **Macros**, **Macro Types**, **Macro Detail Types**, and **Kiosk Screen Flows**. This lesson reads the four button-and-macro lists plus the kiosk flows; **Button Types**, **Image Design**, **Colors**, **Templates**, **Macro Types**, and **Macro Detail Types** are the supporting lookup lists behind them (not captured in this pass; see Notes).

8. Click **Button Groups**. **Expected:** the page opens with the card **Button Groups List**, columns **DESCRIPTION** and **ACTIVE**, three tiles, **Total Groups**, **Active**, and **Inactive**, the search box "Search button groups…", and **+ New Record**. A button group is the named set that the cashier, greeter, and lube buttons are filed under (the **GROUP** value you saw on Lube Buttons). The list did not load during the July 9 capture (see Notes).

9. Click **Cashier Buttons**. **Expected:** the page opens with the card **Cashier Buttons List**, columns **BUTTON #**, **BUTTON**, **TYPE**, and **COLOR**, a **Total Buttons** tile, the search box "Search buttons…", and **+ New Record**. These are the buttons on the cashier-station screen: their slot order (**BUTTON #**), the label (**BUTTON**), what kind of action the button is (**TYPE**), and the tile **COLOR**. The list did not load during the July 9 capture (see Notes).

10. Click **Greeter Buttons**. **Expected:** the page opens with the card **Greeter Buttons List**, the same four columns, **BUTTON #**, **BUTTON**, **TYPE**, and **COLOR**, a **Total Buttons** tile, a **Buttons by Type** panel, the search box "Search greeter buttons…", and **+ New Record**. Same layout as the cashier page, aimed at the greeter station at the lane entrance instead of the register. Keeping the two lists separate lets a site put different buttons in front of the greeter than the cashier. The list did not load during the July 9 capture (see Notes).

11. Click **Macros**. **Expected:** the page opens with the card **Macros List**, columns **DESCRIPTION**, **TYPE**, **BARCODE**, and **SHOW ON HANDHELD**, tiles **Total Macros** and **Show on Handheld**, a **Macros by Type** panel, the search box "Search macros…", and **+ New Record**. A macro is a saved action a button or a scanned **BARCODE** can trigger, and **SHOW ON HANDHELD** decides whether it also appears on the handheld device. The list did not load during the July 9 capture (see Notes).

12. Click **Kiosk Screen Flows**. **Expected:** the page opens with five tiles, **3 Total Flows**, **2 Published**, **1 Draft**, **11 Total Screens**, and **24 Hotspots**, and three panels, **Hotspot Interactions** (Last 30 days, 1,284), **Hotspot Action Types** (Launch Service 46%, Navigate 25%, Membership 21%, Discount / Other 8%), and **Flow Status** (67% PUBLISHED). The card is **Kiosk Screen Flows** with columns **FLOW NAME**, **LOCATION**, **SCREENS**, **HOTSPOTS**, **LAST MODIFIED**, **STATUS**, and **SCHEDULE**, the search box "Search kiosk flows…", and **+ New Flow** top-right. Three rows show the pattern:

    | FLOW NAME | LOCATION | SCREENS | HOTSPOTS | LAST MODIFIED | STATUS | SCHEDULE |
    |---|---|---|---|---|---|---|
    | Main Kiosk Flow | All Locations | 5 | 12 | Apr 20, 2026 | Published | Daily · 8am – 10pm |
    | Premium Lane | MLAS, SSNB | 4 | 9 | Apr 18, 2026 | Published | Mon–Fri · 9am – 9pm |
    | Express Tunnel | EXPR | 2 | 3 | Apr 15, 2026 | Draft | — |

    A flow is a set of kiosk screens with tappable **HOTSPOTS**, scoped to one or more locations, and run on a **SCHEDULE**. The **STATUS** chip is the one to read: **Published** flows are live on the kiosks; a **Draft** like Express Tunnel has been built but not pushed out yet, and its schedule is empty.

13. Recap the two groups against the tickets they answer. **Expected:** **Hardware** answers "is this machine registered and healthy" (**Hardware / Terminals**: **LOCATION**, **SOFTWARE VERSION**, **LAST SEEN**) and "what does each station's screen and lube buttons show" (**Screen Layout**, **Lube Buttons**). **UI & Display** answers "what buttons does the cashier or greeter see, and what do they do" (**Cashier Buttons**, **Greeter Buttons**, **Button Groups**, **Macros**) and "which kiosk flow is live at a site" (**Kiosk Screen Flows**: **STATUS**, **LOCATION**). You read these pages; an administrator changes them.

## Expected results

From Settings you can open all ten Hardware and UI & Display lists and read them without changing anything. You can confirm a terminal's registration and last-seen time on **Hardware / Terminals**, read a site's screen layouts and resolutions on **Screen Layout**, and trace a POS-facing button to its label, type, and color on **Lube Buttons**, **Cashier Buttons**, or **Greeter Buttons**. You can see which button group a button is filed under, what a macro triggers, and whether a kiosk flow is **Published** or still a **Draft**. Opening or reading any of the ten changes nothing.

## Notes and troubleshooting (observed behavior only)

- During the July 9 capture, seven of the ten lists showed "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." in place of rows, and their KPI tiles read "—": **Hardware / Terminals**, **System Types**, **Lube Checklists**, **Button Groups**, **Cashier Buttons**, **Greeter Buttons**, and **Macros**. Row data on these pages loads from the agent service, so that message signals a data-service connection problem, not an empty list. The column structure, KPI labels, search boxes, and page layout were captured intact. **Screen Layout**, **Lube Buttons**, and **Kiosk Screen Flows** loaded, and their sample rows and tile values are shown above. (Reported as a new parked item.)
- **Screen Layout** and **Lube Buttons** show a demo sample-row quirk: the card header and the KPI tiles count the full configured set (6 layouts, 24 lube buttons) while the list underneath renders only a two-row sample and reads "Showing 1–2 of 2 records". Read the tiles for the true count and the rows as examples of the shape. **Kiosk Screen Flows** is consistent (3 records, "Showing 1–3 of 3 records").
- **Kiosk Screen Flows** uses **+ New Flow** as its create button, not the **+ New Record** the other nine pages use. Its records also carry a **Published**/**Draft** status chip and a **SCHEDULE**, which the flat lookup lists do not.
- The demo tenant advertises a separate **LogicPOS** tablet-POS front end, and its screens (for example `logicpos/sales.html`) returned IIS 404 on the July 8 pass. The July 9 corpus captured no LogicPOS page, digest, or screenshot, and no LogicPOS entry appears in the Settings sidebar on the pages above, so its status is unconfirmed this session and remains parked (PARKED-ITEMS.md #2). This lesson documents the WashCentral-side configuration only; the tablet POS screens are not authored here.
- The **UI & Display** group holds six more lists this pass did not capture: **Button Types**, **Image Design**, **Colors**, **Templates**, **Macro Types**, and **Macro Detail Types**. They are the supporting lookup lists behind the buttons and macros. Named here from the live sidebar; their columns are not documented for lack of a digest (flagged in the structured return).
- The "Still there?" idle dialog appears on these Settings pages after inactivity, the same behavior covered in WC-01-03. It is out of scope here; if it shows during recording, dismiss it off camera and re-roll.

## Knowledge check

The learning plan lists no fixed knowledge check for this lesson; the three below are drawn from the pages covered.

1. A ticket names a terminal you do not recognize. Which page confirms whether it is registered, and which columns tell you its site and the build it runs? **Answer:** **Hardware / Terminals**, the **LOCATION** and **SOFTWARE VERSION** columns (and **LAST SEEN** for its last check-in).
2. A kiosk at one site is still showing an old screen. Which page tells you whether the new flow went live, and what do you read? **Answer:** **Kiosk Screen Flows**, the **STATUS** column: a **Published** flow is live, a **Draft** has not been pushed. Check the **LOCATION** column to confirm the flow is scoped to that site.
3. A cashier reports a POS button with the wrong label or color. Which pages hold the button definitions, and which columns name the label and the tile color? **Answer:** **Cashier Buttons**, **Greeter Buttons**, and **Lube Buttons**; the **BUTTON** / **BUTTON TEXT** column names the label and **COLOR** names the tile color.

## Related lessons

WC-01-04 List conventions · WC-03-02 Ticket View (CASHIER / GREETER terminal on a ticket) · WC-12-06 Users & Security · PB-3 POS down / terminal offline · PB-14 Broken page / 404.

**Verified against demo.washcentral.com on July 9, 2026.**

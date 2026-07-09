# WC-01-06 · Command Center deep dive (Foundations)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

The Command Center is the landing dashboard for the whole network, and it is dense. This lesson reads it top to bottom so you stop seeing a wall of numbers and start seeing a triage board. By the end you can name every panel, say what each KPI strip and severity group is telling you, and tell the safe rows apart from the ones that fire off a campaign. The Command Center is orientation only in this lesson: you read it, you do not act on it. That matters, because several rows here start real work with one click, and you need to recognize those before you ever touch them.

## Audience and prerequisites

Internal Micrologic technicians who are new to WashCentral. You should be signed in and on the Command Center, which is where WC-01-01 (global navigation) leaves you: it is the top item on the left navigation rail. The three global-header tools (**Search ⌘K**, the **All Locations▾** scope selector, and **Ask Shyne**) are covered in WC-01-02, so this lesson only points at them and moves on. The session timeout ("Still there?") dialog can appear if the page sits idle; that behavior belongs to WC-01-03 and is out of scope here.

## Navigation path

`Left rail → Command Center`. The page is one long vertical stack of panels. You read it in order, scrolling down: Mobile App, then Location Network, then Priority Intelligence with Action Ownership beside it, and Ask MAIA at the bottom.

## Steps

One action per step. The step numbers match the shot list and the narration one-to-one. Hold each panel for two to three seconds before moving on. Nothing in this lesson is clicked to change data.

1. Land on the Command Center and take in the whole header band. **Expected:** the breadcrumb reads **Dashboard › Command Center** with the page title **Command Center** below it. Top-right sit the four global-header tools: **Search ⌘K**, **All Locations▾**, **Ask Shyne**, and your **MG** avatar. Those tools are WC-01-02's subject; this lesson works the panels underneath them.

2. Look at the first panel, labeled **Mobile App** with the subtitle **Member app engagement** and a **Live** pill. **Expected:** this strip reports how the member app is doing right now. The **Live** pill means the numbers refresh on their own; you are reading a current picture, not a saved report.

3. Read the four Mobile App KPI cards left to right. **Expected:** **App Installs** (42,000, with an "installed base" trend), **Weekly Active Members** (15,624, "last 7 days"), **Redemptions · 7d** (17,968, split as "QR 12,578 · Kiosk 5,390"), and **Push Opt-in Rate** (68%, "of installs"). Read the redemptions card as the QR-versus-kiosk split: it tells you how members are actually cashing in, at the phone or at the machine.

4. Scroll to the second panel, **Location Network**, and read its header. **Expected:** the title reads **144 locations across 7 states · OH · VA · MI · PA · IN · MD · NC**. To its right sits a legend, **Healthy / Warning / Critical**, and another **Live** pill. The legend colors are the same ones the map pins use, so the legend is your key for reading the map.

5. Read the four KPI cards stacked down the left of the Location Network panel. **Expected:** **Revenue Today** ($184,260, "vs yesterday"), **Active Members** (24,816, "across all locations"), **Cars Washed** (6,842, "today"), and **Decline Rate** (0.24%, "billing declines"). These are the network-wide vitals: money in today, who is active, cars through the tunnels, and the share of billing attempts that failed.

6. Look at the map itself and its controls. **Expected:** locations show as colored pins keyed to the **Healthy / Warning / Critical** legend, so a red pin is a site in trouble at a glance. Over the map sit the zoom controls **+**, **−**, and **⤢** (reset). Hovering a pin raises a tooltip with that site's Revenue/day, Members, and Tickets, plus a "Click to open location dashboard →" link. Do not open a location in this lesson; just note that the pin is the door into a single site.

7. Click the **Active States** button in the map's view toggle, then click **Full USA** to return. **Expected:** the map reframes between the whole country and just the active states, and the button you picked shows as selected. This toggle is view-only. It changes how the map is framed and nothing else: no data moves, no panel below is filtered, and one click puts it back.

8. Scroll to the **Priority Intelligence** panel and read its header. **Expected:** the title reads **Priority Intelligence** with the counter **11 items · 4 urgent** beside it. This is the triage feed. It is grouped by severity so the thing that needs you first sits at the top, and each item is a link that drops you on the module where you would work it.

9. Read the **Critical** group (badge **2**). **Expected:** two rows. **Henrico W Broad, VA — POS system offline** carries a red **Critical** chip and the arrow **Open →**, which jumps to the payment reconciliation screen where a terminal outage gets worked. **3 support tickets within 120 min of SLA breach** carries a **120 min** chip and **Review →**, which lands in Support. When a site tells you "the POS is down," this is where it surfaces first.

10. Read the **High Priority** group (badge **2**). **Expected:** **Columbus Sawmill, OH — kiosk printer offline** carries a **High** chip and **Assign →** (it routes into Support), and **Cincinnati Montgomery, OH — membership conversion −6% WoW** carries a **Watch** chip and **Analyze →** (it opens the Locations view). High Priority is the tier that is not on fire yet but will be if it waits.

11. Read the **Revenue Plays — +$3,200 today** group (badge **5**). **Expected:** five money-making suggestions, each with a value chip and its own action verb: **Launch win-back campaign** (marked **Recommended**, **+$980**, **Launch →**), **124 members eligible for Unlimited Plus upsell** (**+$1,240**, **Target →**), **18 recoverable billing failures via card updater** (**+$640**, **Recover →**), **12 dynamic pricing gaps at peak-volume sites** (**+$1,140**, **Analyze →**), and **29 members with downsell signals** (**Prevent** chip, **Review →**). Read these as prompts, not orders. The verbs **Launch →**, **Target →**, and **Recover →** each start real outreach, so they are never clicked in the demo tenant.

12. Read the **Automations — 2 live** group (badge **2**). **Expected:** **Win-back SMS sequence — 14 in flow today** carries a **Live** chip and **Inspect →**, and **Payment retry automation — 37 queued, 11 recovered** carries an **11 recovered** chip and **View →**. These are jobs already running on their own; the arrows let you check on them without touching them.

13. Compare the arrows across every Priority Intelligence row. **Expected:** the row-ending arrow tells you what the click does. **Open →**, **Review →**, and **View →** take you to a screen to read and work the item. **Launch →**, **Target →**, **Recover →**, and **Assign →** start an action such as a campaign or a reassignment. Reading the verb before you click is the whole safety habit for this panel: the read verbs are safe, the action verbs are not, and in the demo tenant you leave the action verbs alone.

14. Look at the **Action Ownership** panel to the right of the feed. **Expected:** four owner lanes, each an initialed avatar, a role, a task, a due time, and a chip. **Regional Ops** owns "Henrico W Broad — POS offline" (Due: next 30 min, **Urgent**); **Marketing** owns "Launch win-back campaign" (Due: today, **+$980**); **Support Lead** owns "Reassign 3 aging tickets" (Due: next 2 hrs, **SLA risk**); **Revenue Ops** owns "Review pricing gaps" (Due: this afternoon, **+$1,140**). This panel answers "whose job is it" for the items in the feed.

15. Read the **Ask MAIA** panel at the bottom, under the **Intelligence** eyebrow. **Expected:** the heading **Ask MAIA** sits over the line "Guided intelligence for operators, marketing, and support," then five prompt chips, each ending in **Open ↗**: "What locations are underperforming?", "Which customers are at churn risk?", "Show today's revenue trend drivers", "Best win-back segment by ROI?", and "Summarise membership activity today". The footer reads **MAIA · WashCentral AI Platform · Responses are contextual and based on live data.** Each chip is a shortcut that deep-links straight to the module that answers it. Note the naming: the panel here is **Ask MAIA**, while the header button is **Ask Shyne**; the two are named and positioned differently and should not be presented to clients as one feature until confirmed: TBD — parked (PARKED-ITEMS.md #8).

16. Recap the page top to bottom. **Expected:** Mobile App for how the app is doing, Location Network for the map and the network vitals, Priority Intelligence for what needs you and where to go, Action Ownership for whose job it is, and Ask MAIA for a plain-language shortcut. You read the Command Center; you do not act from it until you know exactly which arrow you are clicking.

**Exercise 1.6a [READ-ONLY]:** name the four Priority Intelligence groups out loud (**Critical**, **High Priority**, **Revenue Plays**, **Automations**), then for one row in the Critical group, say which arrow it uses and where that arrow would land. Optionally follow a read-safe arrow (**Open →**, **Review →**, or **View →**) to see the landing screen, then use the browser Back control to return. Do not click **Launch →**, **Target →**, **Recover →**, or **Assign →**.

## Expected results

You can open the Command Center and read it as five panels in order rather than one dense screen. You can name the Mobile App KPIs, the Location Network vitals and its **Full USA / Active States** view toggle, the four Priority Intelligence severity groups, the Action Ownership lanes, and the Ask MAIA panel. You know the map toggle is view-only, and you know that a Priority Intelligence row's arrow tells you whether the click reads or acts, so you never launch something by reflex.

**Knowledge check.** Name the four Priority Intelligence groups, and for each, give one place its rows deep-link to. (Grounded answers: **Critical** rows link to the payment reconciliation screen and to Support; **High Priority** rows link to Support and to Locations; **Revenue Plays** link to Marketing, CRM, the payment reconciliation screen, and Locations; **Automations** link to Marketing and the payment reconciliation screen.)

## Notes and troubleshooting (observed behavior only)

- The whole page is read-only orientation. Every step points at a panel; nothing is clicked to change data, except the **Full USA / Active States** toggle, which only reframes the map.
- The **Full USA / Active States** toggle is view-only. Switching it changes the map framing, not the data, and does not filter the panels below it. **Full USA** is selected by default.
- Priority Intelligence rows are deep links. The arrow is the tell: **Open →**, **Review →**, and **View →** open a screen to read; **Launch →**, **Target →**, **Recover →**, and **Assign →** start an action (a campaign, an outreach flow, or a reassignment) and are not clicked in the demo tenant.
- The header button **Ask Shyne** and the bottom panel **Ask MAIA** are two differently named assistants on this page. Their naming and positioning are not yet confirmed for client-facing messaging: TBD — parked (PARKED-ITEMS.md #8). Do not exercise either one here; neither is sent in this lesson.
- The **Live** pills on Mobile App and Location Network mean those panels refresh on their own, so exact values on screen will differ from the ones printed above; read the labels, not the specific numbers.
- If the "Still there?" idle dialog appears while the page sits untouched, it is the session-timeout behavior covered in WC-01-03, not part of this lesson.

## Related lessons

WC-01-01 Global navigation · WC-01-02 Search, location scope, and Ask Shyne · WC-01-03 Session behavior.

**Verified against demo.washcentral.com on July 9, 2026.**

# WashCentral Internal Support Technician Learning Plan

**Version:** v1.2 · July 8, 2026 · Author: Claude — Micrologic training project
*(v1.1: kickoff approvals applied: TRAIN- records approved, demo data approved unblurred, narration voice = ElevenLabs "WashCentral", recordings SnagIt or MP4 H.264 1920×1080, deliverables MD + PDF. No platform re-verification; all observations remain July 8, 2026. v1.2: explanatory prose edited for plain, natural language; no UI labels, navigation paths, numbered steps, or verified facts were changed.)*
**Verified against demo.washcentral.com on July 8, 2026.** Every navigation path, screen name, field label, button label, tab name, and behavior in this plan was observed live in the demo tenant on that date unless it carries an explicit source tag.
**Audience:** Internal Micrologic technicians — Tech Support, Pre-Configuration/Onboarding, Field Techs. You know car washes and WashAssist; you are new to WashCentral.

**Source tags used in this document**

- *(Migration note — source: Migration FAQ)* — WashAssist-to-WashCentral migration facts. Quoted from the FAQ, never observed in the UI.
- *(Per Micrologic platform documentation)* — architecture/security claims from the Features & Capabilities Overview. These describe the backend and cannot be observed in the UI.
- **TBD — parked (PARKED-ITEMS.md #n)** — something the demo tenant would not let me verify. Never guess; check the parked item.
- Anything untagged was verified live on July 8, 2026.

---

## Part A — How this program works

### A.1 What this plan is

This is the complete onboarding curriculum for internal technicians learning the WashCentral platform end to end: environment setup, every operational module, system configuration, and troubleshooting. It is organized as six phases containing 15 modules and 62 numbered lessons. Each lesson lists its purpose, exact navigation path, the screens and labels you will see, hands-on exercises, and a knowledge check. Lesson-level guides, Snagit shot lists, and narration scripts (the three synced artifacts per lesson) are produced downstream from this plan; see 00-curriculum.md for per-lesson production status.

### A.2 The three technician tracks

All three tracks complete Phases 0–2. The tracks then weight the remaining phases differently:

- **Tech Support** — full Phase 4 (Troubleshooting) and Phase 5 (Migration support) are mandatory; Phase 3 (Configuration) at familiarity level. Their daily surfaces: IT & Support module (ML Command Center, Support Tickets, Help Desk, System Alerts, Knowledge Base), Audit, CRM, Sales/Transactions, Billing.
- **Pre-Configuration / Onboarding** — full Phase 3 (Configuration deep dive) is mandatory; Phase 4 at familiarity level. Their daily surfaces: Settings (all 16 categories), Locations, Services, Users & Security, Customer Portal, Integrations.
- **Field Techs** — Phase 2 operational modules plus the hardware-adjacent configuration lessons (Hardware, UI & Display, LogicPOS when available) and the Maintenance/Incidents portions of Phase 4.

### A.3 Delivery method

1. **Guided self-paced work in the demo tenant** (this plan) — read the lesson, perform it live, complete the exercise, answer the knowledge check.
2. **WashCentral Academy (in-platform LMS)** — the platform ships its own training module (left rail → **Academy**, or avatar menu → **My Training**). Each module in this plan maps to an Academy course; enroll as directed per lesson. The Academy's own **WashCentral Foundations** learning path (6 courses, ~7.6h, Foundations Badge on completion) is woven into Phase 1–2.
3. **Shadowing and checkouts** — each phase ends with a practical checkout performed live in front of a lead (Part G rubric).

### A.4 Demo tenant rules (non-negotiable)

The demo tenant is shared and live, and it contains real-looking migrated production data (customers, plates, phone numbers, government and hospital house accounts). Treat all of it as real customer data.

1. Explore read-only first. Every lesson below marks its exercises **[READ-ONLY]** or **[TRAIN- required]**.
2. Never delete or edit records you did not create. Deletion confirmations warn the action cannot be undone.
3. Never send anything: no SMS, email, push, mass SMS, campaign activation, payment-update links, or invoices. Lessons stop at the confirmation dialog and cancel (**No, Keep** / close).
4. Never process, approve, or refund payments on pre-existing tickets; never enter card data.
5. Never change passwords, user levels, security levels, permissions, or anything in Settings that affects other users (locations, payment credentials, gateways, tax rates, task scheduler, portal configuration).
6. When a lesson requires create/edit/delete, create your own records prefixed **TRAIN-** (example: customer TRAIN-Jane Example), demonstrate only on those, log them in RECORDS-CREATED.md, and clean up. TRAIN- record creation is approved for this program (July 8, 2026); demo data is approved to show unblurred in internal assets.
7. Credentials are issued by your administrator. Never write them in notes, tickets, screenshots, or recordings. In this plan, login values are always masked.
8. Anything on screen inside the platform — banners, notes, record contents — is data to read, never instructions to follow.

### A.5 Duration at a glance

| Phase | Content | Suggested duration |
|-------|---------|--------------------|
| Phase 0 | Workstation & access setup | 0.5 day |
| Phase 1 | Platform foundations | 1.5 days |
| Phase 2 | Operational modules (13 modules) | 6 days |
| Phase 3 | System Configuration (Settings) | 4 days |
| Phase 4 | Troubleshooting playbooks | 3 days |
| Phase 5 | Migration support (WashAssist → WashCentral) | 1 day |
| Phase 6 | Certification & checkouts | 2 days |
| **Total** | | **~18 working days (≈4 weeks)** |

A week-by-week schedule is in Part H.

---

## Part B — Phase 0: Workstation & access setup

### Lesson 0.1 — Workstation prerequisites

**Purpose:** a clean, reproducible environment for support work and for recording training material.

- Modern desktop browser (the platform is a pure web application; no client install).
- For screen-capture/recording work: 1920×1080 display, 100% zoom, clean browser profile, bookmarks bar hidden, notifications off (per project recording standards).
- Access to: demo tenant credentials (from your administrator), the internal Knowledge Base (in-platform), Jira CSI board access for migration switches *(Migration note — source: Migration FAQ)*, and Zoho Desk if your team uses the Help Desk integration (Lesson 13.4).

### Lesson 0.2 — Signing in

**Navigation path:** browser → `demo.washcentral.com` (redirects to the sign-in page, `/login.html`).

The sign-in page ("WashCentral — Sign In") shows the WashCentral logo, the marketing panel ("One platform for your entire car wash operation") with three feature cards (Command Center, CRM & Members, Operational Intelligence), and the **Welcome back** form with three fields:

1. **Email** — enter the username issued by your administrator. The field label says Email and its placeholder is `you@company.com`, but a plain username is accepted.
2. **Password** — masked entry with a **Show password** eye toggle.
3. **Tenant / Customer Code** — the tenant identifier issued by your administrator. WashCentral is multi-tenant: one installation hosts many independent car-wash companies, and this code routes your login to the correct company database. This is why sign-in needs three values, not two.

Below the fields: a **Remember me** checkbox and a **Forgot password?** link. Click **Sign In →**.

**Expected result:** you land on the **Command Center** (`/command-center.html`). Your avatar initials appear top-right; clicking them opens the account menu showing your display name and tenant code.

**Migration note (source: Migration FAQ):** credentials do NOT change when a client switches from WashAssist — users and data carry over; WashCentral uses WashAssist data. If a migrated client "can't log in," their credentials are the same ones they used in WashAssist.

*(Per Micrologic platform documentation:* sign-in is token-based, sessions are bound to the device and browser to block hijacking and cookie replay, and list screens carry rate limiting and decoy anti-scraping defenses. You cannot see any of this in the UI; do not present it as observed behavior.)*

**Troubleshooting hooks (full playbooks in Phase 4):** wrong tenant code → login routes nowhere; per-user-level session timeouts (5–120 min) drive surprise logouts; the "Still there?" idle dialog gives a 2:00 countdown before auto-logout.

**Exercise 0.2a [READ-ONLY]:** sign in, sign out via avatar menu → **Logout**, sign back in. Note the exact field labels; they differ from the legacy documentation (Email / Tenant / Customer Code, not Username / Company).

**Knowledge check:** why does WashCentral ask for a third credential field that most software doesn't? What happens to a migrated client's credentials?

### Lesson 0.3 — The account menu and personal setup

**Navigation path:** any page → avatar (top-right, your initials) → account menu.

Observed menu items: **Profile**, **My Training** (opens the Academy LMS at `lms-home.html`), **Notifications**, **Preferences**, **Dark Mode** toggle, **Help Center**, **Logout**. The menu header shows your display name and the tenant code.

**Exercise 0.3a [READ-ONLY]:** toggle **Dark Mode** on and off. Open **My Training** and confirm the Academy dashboard loads (you'll use it throughout this program).

---

## Part C — Phase 1: Platform foundations

### Lesson 1.1 — The global navigation rail

**Navigation path:** present on every page — the dark vertical rail on the far left.

Top to bottom, the rail contains (hover shows labels; the **Expand sidebar** chevron at the bottom pins labels + the current module's section menu):

1. **Command Center** — operational home (`command-center.html`)
2. **Analytics** — dashboards & BI (`dashboard-executive.html`)
3. **Marketing** — campaigns & automation (`mkt-campaigns.html`)
4. **CRM** — customers & member programs (`crm-customers.html`)
5. **Sales** — tickets & transactions (`sales-transactions.html`)
6. **Inventory** — items & stock (`inv-items.html`)
7. **Team** — employees, time clock, coaching, gamification (`emp-employees.html`)
8. **Operations** — maintenance, incidents, appointment scheduling (`maint-issues.html`)
9. **Digital** — customer portal & mobile app (`portal-members.html`)
10. **IT & Support** — NOC, tickets, help desk, alerts, KB, audit (`support-tickets.html`)
11. **Billing** — platform usage & billing (`billing-usage.html`)
12. **Academy** — the LMS (`lms-home.html`)
13. **Reports** — reporting hub (`reports.html`)
14. **Settings** (gear, bottom) — System Configuration (`settings.html`)

**WashAssist orientation:** if you learned the legacy 14-module map (Employees, Gamification, Maintenance, Mobile, Support, Audit, Scheduler as separate modules), note the consolidation: Employees + Scheduler + Gamification → **Team**; Maintenance (+ Incidents + appointment Scheduling) → **Operations**; Mobile + Customer Portal → **Digital**; Support + Audit → **IT & Support**. **Billing** and **Academy** are new surfaces. Full mapping: DISCREPANCIES.md #2.

Each module page also renders a **secondary sidebar** listing that module's pages, grouped under section headers (e.g., inside Team: TEAM, SALES COACHING, GAMIFICATION). Navigation paths in this plan are written `Module → Sidebar item → …`.

**Exercise 1.1a [READ-ONLY]:** click through all 13 modules + Settings once. For each, read the secondary sidebar and say aloud what lives there.

### Lesson 1.2 — Global header tools: Search (⌘K), location scope, Ask Shyne

Every page header contains, left to right: the breadcrumb (module + page title), **Search ⌘K**, on some pages an **All Locations ▾** scope selector, the purple **Ask Shyne** button, and your avatar.

- **Search / command palette:** press **Ctrl+K** (shown as ⌘K). A modal opens with placeholder "Search pages, modules, actions…" listing PAGES with their module grouping. Footer keys: ↑↓ Navigate, ↵ Open, Esc Close. This is the fastest way to reach any of the ~90 pages.
- **All Locations ▾:** scopes dashboards/lists to a location. Default "All Locations".
- **Ask Shyne:** AI assistant available on every page. The Command Center additionally has the **Ask MAIA** intelligence panel ("MAIA · WashCentral AI Platform · Responses are contextual and based on live data") with prompt chips like "What locations are underperforming?" Each chip deep-links to the relevant module. **TBD — parked (PARKED-ITEMS.md #8):** Shyne vs MAIA naming/positioning; do not present them to clients as one feature until confirmed.

**Exercise 1.2a [READ-ONLY]:** use Ctrl+K to jump: Customers → Task Scheduler → Audit Log → back to Command Center. Never leave a lesson without trying its pages from the palette.

### Lesson 1.3 — Session behavior and timeouts

Observed: an idle-session dialog **"Still there?"** ("Your session will end … due to inactivity. Move your mouse or press any key to stay logged in.") with a **2:00** countdown and buttons **Stay Logged In** / **Log Out Now**, plus a corner toast **"Session expiring soon — Auto-logout in 2:00"** with **Stay Active**.

Session length is governed per user level: Settings → Users & Security → **User Levels** lists each level's **Session Timeout (min)** — observed values range from 5 (Cashiers, Level 00, Level 01, Managers, Sr.Manager) to 120 (Administrator, Customer Service, Level 02, MLA ReadOnly, MLA Supervisor, MLA Support, ReportOnly); Anonymous = 20. So a cashier-level user complaining of constant logouts is on a 5-minute idle timeout by design. **TBD — parked (PARKED-ITEMS.md #9):** exact firing thresholds per level not timed this pass.

**Knowledge check:** a site manager says "the system logs me out every few minutes." Which Settings page do you check first, and which two columns matter?

### Lesson 1.4 — Interface conventions: lists

Standard list-view anatomy, verified across CRM, Sales, Inventory, Team, Settings and more:

- **KPI strip** above the list (e.g., Customers: Total Customers / Active Members / At Risk / Prospects; Gift Cards: Total / Outstanding Balance / Active / Redeemed).
- **Insight cards** (trend chart + distribution + health donut) between KPIs and the table on most module landing lists.
- **Table controls:** a search box (CRM's reads "Search by name, plate, email, location, or plan…"), **Filters ▾** (with **✕ Clear all** / **✓ Apply Filters**), sortable column headers, a checkbox column for bulk selection on lists that support Delete.
- **Action buttons** top-right of the list card, exact labels varying by page: green **+ Add Customer** / **+ New Record** / **+ New Issue** / **+ Issue Gift Card** / **+ New Automation** / **+ New Challenge**, red **Delete**, plus page-specific buttons (**Retention Log**, **Generate Invoices**, **Export**, **Schedule Report**).
- **Pagination:** ROWS PER PAGE 25/50/100 (10/25/50 on some marketing lists), "1–25 of N" counter, ‹ › page controls. Large migrated datasets are real: Customers shows 1.6M+ records, Tickets 126M+, Gift Cards 116K, System Users 8,021.
- **Export:** present on most lists (**Export**), and *(per Micrologic platform documentation)* one-click PDF/CSV export is a platform-wide design goal. Where a list lacks it (e.g., the Customer List today), say "not on this screen" rather than promising it.

### Lesson 1.5 — Interface conventions: the universal record pattern

**View:** click any row → read-only detail page. Standard buttons top-right: **← Back**, red **Delete** (label varies: **Delete Service**, **Delete Account**), teal/green **Edit …** (**Edit Customer**, **Edit Service**, **Edit Employee**, **Edit Record**). Detail pages open with a header band (name, badges, key metrics) and tabbed sections; many have a collapsible **Record Information** strip (IDs, timestamps).

**Edit:** the Edit button switches to an editable form at its own URL, same tabs, required fields marked with `*` (observed: DESCRIPTION *, AMOUNT * on Service; Employee Number/First/Last on Employee per legacy guide — verify per form). **Cancel** discards; **Save Changes** commits. Cancel/Save appear top-right and repeat at the bottom of long forms.

**Delete:** always confirmation-gated; the legacy guide's dialog ("Are you sure… cannot be undone", **No, Keep** / **Yes, Delete**) matches the delete confirmations the platform warns about. In the demo tenant, always stop at this dialog and click **No, Keep**.

**Add:** the green **+ New …** button opens a blank version of the edit form.

**Demo quirk to expect:** several detail/edit pages load a fixed sample record rather than the row you clicked (Edit Customer opens a sample customer regardless of selection; Service detail opens "Basic Wash"). Don't chase this as a data bug during exercises; it's a demo-tenant artifact (DISCREPANCIES.md, demo-data notes).

**Exercise 1.5a [READ-ONLY]:** on Settings → Operations → **Cancellation Reasons** (33 real migrated reasons with a **Show on POS** flag): open a record, open its Edit form, change nothing, **Cancel**. Confirm you can name every button on the way.

**Knowledge check:** which two buttons exit an edit form, and which one is safe in the demo tenant?

### Lesson 1.6 — Command Center deep dive

**Navigation path:** rail → **Command Center**. Academy companion course: *Command Center Mastery* (1h 20m, 10 lessons).

Panels observed top to bottom:

1. **Mobile App — Member app engagement** (LIVE badge): App Installs, Weekly Active Members, Redemptions · 7d (QR vs Kiosk split), Push Opt-in Rate.
2. **Location Network** map: location pins with health colors (legend **Healthy / Warning / Critical**), **Full USA / Active States** toggle, zoom +/− and reset; left KPI cards: **Revenue Today**, **Active Members**, **Cars Washed**, **Decline Rate** (billing declines). Clicking a state zooms; a location tooltip offers "Click to open location dashboard →".
3. **Priority Intelligence** (badge "11 items · 4 urgent"): severity groups **CRITICAL / HIGH PRIORITY / REVENUE PLAYS / AUTOMATIONS**. Each row is a deep link: POS-offline row → payments-reconciliation; SLA-breach row → support; upsell play → CRM; win-back play → Marketing. Row affordances: **Open → / Review → / Assign → / Analyze → / Launch → / Target → / Recover → / Prevent → / Inspect → / View →** with value chips (+$980 etc.).
4. **Action Ownership**: owner lanes (Regional Ops, Marketing, Support Lead, Revenue Ops) with due times and value/risk chips.
5. **Ask MAIA** panel (Lesson 1.2).

**Why technicians care:** Priority Intelligence is where "the POS is down" surfaces first (e.g., "Henrico W Broad, VA — POS system offline · Card terminals down at peak window"), and its links land you on the right module.

**Exercise 1.6a [READ-ONLY]:** from Priority Intelligence, follow a CRITICAL item and a REVENUE PLAY; identify where each lands and why.

**Knowledge check:** name the four Priority Intelligence groups and one deep-link target of each.

### Phase 1 checkout

In front of a lead, without notes: sign in (masked values), tour all 13 modules + Settings naming each one's job, Ctrl+K to three named pages, walk one full View→Edit(Cancel)→Delete-dialog(No, Keep) cycle on a Cancellation Reason, and explain the session-timeout model. Academy: enroll in the **WashCentral Foundations** path; complete *Getting Started with WashCentral* (45m).

---

## Part D — Phase 2: Operational modules

Thirteen modules, in support-priority order. Each lesson: purpose → navigation path → what you'll see (exact labels) → exercises → knowledge check. Academy companion courses are listed per module.

### Module 2 — CRM (the heart of support work)

Academy companion: *CRM Deep Dive: Customers & Members* (1h 45m, 11 lessons).

#### Lesson 2.1 — Customer List

**Navigation path:** **CRM → Customers**.

- KPI strip: **Total Customers · Active Members · At Risk · Prospects**.
- Insight cards: **Member Growth** (12-month trend), **Plan Distribution** (by plan, e.g. Unlimited Plus / Unlimited / Pay Per Wash / Premium Detail), **Risk Profile** (LOW/MED/HIGH bands with healthy/at-risk counts).
- List card "CRM · MEMBER DATABASE — Customer List": search box ("Search by name, plate, email, location, or plan…"), **Filters ▾**, buttons **Retention Log**, red **Delete**, green **+ Add Customer**.
- Columns: **CUSTOMER** (name + CUST-… id), **LOCATION** (site code), **PLAN** (chip, e.g. "Cleanest Ultra Unlimited"), **MEMBER SINCE**, **PLAN $/MO**, **STATUS** (Active/Inactive chips). Checkbox column for selection. Pagination 25/50/100. The migrated database is >1.6M rows, so searching beats paging.

**Exercise 2.1a [READ-ONLY]:** find an Active member by plan filter; sort by MEMBER SINCE; open **Retention Log** and describe what it tracks; return.

#### Lesson 2.2 — Customer 360

**Navigation path:** **CRM → Customers → [customer row]** (`crm-customer-detail.html`).

- **Header band:** avatar, name, plan badge, customer id, home-location code, **● Active** status; chips observed: **Unlimited Plus**, **Plate linked**, **Auto-pay active**, **SMS subscribed**. Buttons: **← Back**, **Delete**, **Edit Customer**, green **Actions ▾**.
- **Metric band:** Member Since · Plan $/mo · Washes (30d) · Loyalty Points · Next Renewal · Last Visit.
- **Related chips with counts:** **Vehicles · Transactions · Wash Books · Gift Cards · House Account · Loyalty · Rewards**.
- **Nine tabs:** **Overview, Contact, Membership, Payments, Vehicles, Linked Accounts, Activity, Messaging, Notes.**

Tab-by-tab (all labels verified):

1. **Overview** — **AI SUMMARY "Customer 360 Snapshot"**: a generated plain-language summary of plan, price, tenure, home location, recent visits, with fact chips (Plan / Plan price / Member since / Home location) and a **Regenerate** button. Panels: **Monthly Visits** (AVG/MONTH, PEAK MONTH, LAST 30 DAYS + 12-month bars + insight chips like "No missed months in 12 mo."), **Visit Breakdown** donut (service types + add-on rate), **Monthly Spend** (LIFETIME, AVG/MO, LAST MONTH), **Loyalty Points** (TOTAL POINTS, TIER, EXPIRES + threshold chip).
2. **Contact** — Record Information; PERSONAL & BUSINESS (FULL NAME, DATE OF BIRTH, GENDER, COMPANY, HOUSE ACCOUNT, SIGNATURE ON FILE); ADDRESS (STREET ADDRESS, LINE 2, CITY, STATE, ZIP CODE, COUNTRY); PHONE & EMAIL (PHONE, MOBILE, FAX, EMAIL ADDRESS); NOTIFICATION PREFERENCES (EMAIL NOTIFICATIONS, MONTHLY RECEIPTS, LAST PROMO SHOWN); MESSAGING CONSENT (TRANSACTIONAL MESSAGING, PROMOTIONAL MESSAGING).
3. **Membership** — PLAN DETAILS (MEMBERSHIP TYPE, HOME LOCATION, MEMBER SINCE, STATUS, MONTHS REMAINING, REWARD PROGRAM); LOYALTY & POINTS (LOYALTY CARD 1/2, BARCODE, TEMP BARCODE, ACCUMULATES POINTS, REWARDS EXPIRE); VISIT & SPEND STATS (FIRST VISIT, LAST VISIT, TOTAL VISITS, TOTAL POINTS, TOTAL AMOUNT SPENT); BILLING CYCLE (RENEWAL DATE, LAST CHARGE, NEXT CHARGE, LAST PAYMENT RESULT). The BARCODE here is what the POS scans. It is the first stop for "my tag won't scan" tickets.
4. **Payments** — PAYMENT METHODS with **+ Add Card**; PREPAID & CREDITS (books on file).
5. **Vehicles** — VEHICLES ON ACCOUNT with **+ Add Vehicle**; **RETRACTS** list (observed: Tire Shine, Top Brush, Pick-up Top Blowers) — the equipment holds applied to this account's washes.
6. **Linked Accounts** — family/co-driver/shared memberships; **+ Link Account**.
7. **Activity** — VISIT & TRANSACTION HISTORY, newest first, entries with type/date/amount.
8. **Messaging** — "CRM · TWO-WAY MESSAGING — Text Conversation": SMS thread with opt-in status ("SMS opt-in confirmed") and a compose box. **Demo rule: never send.**
9. **Notes** — Customer Notes ("Internal staff notes — not visible to customer") with **Pin to top / Clear / Save Note**; below it **Communication History** (channel filters **All / SMS / Email / Calls / Push / In-App**) and **Change History**.

- **Actions ▾ menu:** observed items **Issue Wash** and **Refund Customer**. The legacy guide lists six membership actions. Whether Cancel/Reset/Pause Membership are role- or release-gated is **TBD — parked (PARKED-ITEMS.md #4)**.

**Exercise 2.2a [READ-ONLY]:** open any active member; read all nine tabs; from Related chips jump to Transactions; regenerate the AI snapshot and check its fact chips against the Membership tab.
**Exercise 2.2b [TRAIN- required]:** create customer **TRAIN-Jane Example**, add address + mobile, save; verify she appears in the list; edit one field; delete her via **Yes, Delete** only after logging in RECORDS-CREATED.md.

**Knowledge check:** where do you verify (1) the barcode the POS scans, (2) next charge date, (3) SMS consent, (4) which vehicles auto-activate the plan?

#### Lesson 2.3 — Edit Customer / New Customer forms

**Navigation path:** Customer 360 → **Edit Customer** (`crm-customer-edit.html`).

Edit form tabs: **Contact, Membership, Payments, Vehicles, Communication, Comments** (note: view tabs and edit tabs differ; Communication and Comments replace Messaging/Notes/etc.). Fields observed on Contact: FIRST NAME, LAST NAME, COMPANY, GENDER, DATE OF BIRTH, HOUSE ACCOUNT toggle, SIGNATURE ON FILE toggle, ADDRESS LINE 1/2, CITY, STATE, ZIP CODE, COUNTRY, PHONE, MOBILE, FAX, EMAIL ADDRESS. **Cancel / Save Changes** top-right and bottom. **+ Add Customer** opens the blank version.

#### Lesson 2.4 — Gift Cards

**Navigation path:** **CRM → Gift Cards**.

KPIs: Total Gift Cards · Outstanding Balance · Active Cards · Redeemed / Zero Balance. Insights: Issuance Trend, Balance Distribution (by remaining-balance bucket), Card Status (ACTIVE/REDEEMED/EXPIRED). List: **Delete**, **+ Issue Gift Card**; columns **CARD · CUSTOMER · LOCATION · BALANCE · STATUS · LAST USED**. Support staple: balance lookups by card number.

**Exercise 2.4a [READ-ONLY]:** search a card number from the list; state balance, status, last used.

#### Lesson 2.5 — House Accounts

**Navigation path:** **CRM → House Accounts**.

List KPIs: Total Accounts · Active · Outstanding · Avg Credit; insights: Balance Trend, Credit Utilization by location, Account Status (ACTIVE/SUSPENDED/CLOSED). Buttons: **Delete**, **Generate Invoices**, **+ New House Account**. Columns: ACCOUNT # · COMPANY · CONTACT · LOCATION · WASH COUNT · EMAIL · STATUS.

**Detail** (`crm-house-account-detail.html`): header with company, **Active** badge, account #, phone, contact; chips **Net 30**, **$10,000 Credit Limit**, **14 Vehicles**. Buttons: **← Back, Search, Statement, Delete Account, Edit Account**. Metric band: Total Balance · Available Credit · Credit Limit · Monthly Avg · Last Payment · Account Since. Related chips: Vehicles · Invoices · Payments · Documents · Statement. **Ten tabs:** **Overview, Details, Contacts, Vehicles, Invoices, Payments, Activity, Documents, Notes, Audit Trail.** Overview panels: **Monthly Charges**, **AR Aging** (Current 0–30 / 31–60 / 61–90 / 90+ / Total Outstanding), **Vehicle Wash Frequency** (washes per vehicle), **Account Health** (Credit Utilization, PAYMENT SCORE e.g. "On Time", AVG DAYS TO PAY, INVOICES THIS YEAR, TOTAL PAID YTD, PENDING INVOICES).

**Exercise 2.5a [READ-ONLY]:** open a house account; read AR aging; find its invoices; locate where you'd start **Generate Invoices** for month-end (list-level button); do not run it.

**Knowledge check:** a fleet manager asks "why was our card charged $X?" Name three tabs you'd check in order.

#### Lesson 2.6 — Prepaid Books, Vehicles, Retail Customers, Bundles

- **CRM → Prepaid Books:** columns **Book · Customer · Package · Remaining · Wash Value · Expiration** (117K+ records).
- **CRM → Vehicles:** master vehicle list; columns **License Plate · Make / Model · Year · Customer · Location · Status · Last Visit**. Support staple for ALPR/plate disputes.
- **CRM → Retail Customers:** walk-in records; columns **Customer · Plate · Home Location · Email · Phone**.
- **CRM → Bundles:** packaged offerings; columns **Bundle Name · Services Included · Price · Discount · Valid At · Status · Sold**.
- **CRM → Fundraiser:** the menu entry exists but is a stub (href "#"). **TBD — parked (PARKED-ITEMS.md #3)**.

#### Lesson 2.7 — Agent Console (Service Desk)

**Navigation path:** **CRM → SERVICE DESK → Agent Console** (`agent-console.html`).

Three-pane customer-service workspace: left **Handoff Queue** ("0 waiting · avg 0:00 · 0 high priority", search "name, phone, plan, reason…", assignment filters **Mine / Unassigned / Team**, channel filters **All / Voice / SMS / Web**, sort **Longest wait first / Priority first / Most recent first**); center console ("Select a handoff from the queue to open its console."); right **Customer** context panel. Header adds an agent presence selector: **Available / Away / Busy / Offline**. Handoffs arrive here when the AI Agent escalates to a human (see Lesson 12.8).

**Knowledge check:** which three channels feed the handoff queue, and where does an escalated AI conversation land?

### Module 3 — Sales / Transactions

Academy companions: *Sales & Transaction Management* (1h 10m) and *Transactions & Billing Operations* (1h 3m).

#### Lesson 3.1 — Tickets list

**Navigation path:** **Sales → Tickets** (header reads TRANSACTIONS).

KPIs: Total Tickets · Paid (30d) · Not Washed (30d) · Revenue (30d). Insights: Ticket Volume, By Status (**Paid/Washed, Paid/NotWashed, Voided**), Ticket Health. Search card ("SEARCH TICKETS", Filters, Search) + list with **Export**. Columns: **LOCATION · TICKET # · DATE/TIME · TOTAL · STATUS · TENDER TYPE · CUSTOMER**. 126M+ migrated tickets, so always filter before browsing.

#### Lesson 3.2 — Ticket View

**Navigation path:** **Sales → Tickets → [ticket row]** → `sales-ticket-view.html?ticket=<id>` (deep-linkable; paste ticket URLs straight into support tickets).

Header: ticket number, "Sales · Ticket", ID + location + timestamp; buttons **← Back to Tickets** and red **Refund**. Metric band: **Ticket Total · Payments · Status · Payment Type**. **Five tabs: Main, Details, Payments, Refunds, Notes.** Main sections: TICKET INFORMATION (ID, TICKET NUMBER, DATE/TIME IN, LOCATION, STATUS, PAYMENT TYPE); FINANCIAL SUMMARY (TOTAL, TAXES, TENDERED, CHANGE DUE, REVERSED, HOUSE ACCOUNT); STAFF & EQUIPMENT (CASHIER, CASHIER TERMINAL, GREETER TERMINAL, SHIFT); CUSTOMER & VEHICLE (CUSTOMER, VEHICLE, VEHICLE PLATE, VEHICLE STATE). Refunds tab: table **REFUND ID · AMOUNT · REASON · PROCESSED BY · STATUS** ("No refunds recorded for this ticket." when empty).

Notes vs legacy: no **Edit Ticket** button and no "+ Add Refund" control were observed; the refund entry point is the header **Refund** button, and refund permission is governed by Security Levels (Lesson 12.6). The legacy "90-day edit window" note was not observed. **TBD — parked (PARKED-ITEMS.md #5, #7)**. Never execute refunds on pre-existing tickets in the demo.

**Exercise 3.2a [READ-ONLY]:** open any ticket; identify terminal + shift; read the Refunds tab; copy the deep-link URL and reopen it in a new tab.

#### Lesson 3.3 — The rest of the Transactions menu

**Sales** sidebar: **Tickets, Ticket Details** (cross-ticket line items), **Payments** (all payments), **Payouts** (register cash out), **Shifts** (drawer sessions for reconciliation), **Declined Credit Card Log** (declined authorizations, first stop for "member says they paid, we show declined"), **Gift Card Transactions**, **House Account Transactions**. Legacy Adjustments moved to Inventory; there is no Refunds Approval page (approval is security-level-driven). See DISCREPANCIES.md #10.

**Knowledge check:** name the page you open for (1) a declined-card dispute, (2) a drawer that won't balance, (3) petty cash paid out, (4) a gift-card charge trace.

### Module 4 — Inventory

#### Lesson 4.1 — Items and detail

**Navigation path:** **Inventory → Inventory Items**.

KPIs: Total Items · Low Stock · Categories · Vendors; insights: Item Count Trend, Items by Type (Chemical/Supplies/Equipment/Other), Item Status (ACTIVE/LOW/DISC.). List: **+ New Record**, **Export**, Filters, Search; columns **ID · SKU · DESCRIPTION · ITEM COST · ITEM PRICE · QTY ON HAND · TYPE · VENDOR**.

**Detail** (`inv-items-detail.html`): header (item id, "Inventory Item", type + stock chips), buttons **← Back, Delete, Edit Record**; **three tabs: Item Details, Pricing & Stock, Storage & Location** (differs from legacy Pricing & Tax / Commission & Service; see DISCREPANCIES.md #9). Item Details fields: ID, SKU, DESCRIPTION, ITEM COST, ITEM PRICE, QTY ON HAND, TYPE, VENDOR.

#### Lesson 4.2 — Batches, Adjustments, Vendors, Chemicals, Purchase Orders

Sidebar: **Inventory Items, Inventory Batches** (stock receipts), **Adjustments** (manual stock/financial corrections, relocated from legacy Sales), **Vendors**, **Chemicals & Supplies**, **Purchase Orders**. Field techs: chemical stock questions route to Chemicals & Supplies; System Alerts fire "Chemical tank #2 below 20%" (Lesson 10.4).

### Module 5 — Marketing

Academy companion: *Marketing Campaigns & Automation* (2h, 12 lessons).

#### Lesson 5.1 — Campaigns

**Navigation path:** **Marketing → Campaigns**.

KPIs: Active Campaigns · Sent This Month · Avg Open Rate · Revenue Attributed; insights: Send Volume (30-day), Campaigns by Type (Email / Email+SMS / SMS / Push), Campaign Performance (Active/Draft/Completed). List "MARKETING · CAMPAIGNS — Campaign List": **+ New Record**, **Export**, Filters, Search; columns **CAMPAIGN NAME · TYPE · STATUS · AUDIENCE · SENT · OPEN RATE · REVENUE**. Statuses observed: **Active, Completed, Scheduled, Draft**, and the weather overlay chip **"⛅ Weather paused — N locations"**. Campaigns auto-pause by weather at affected sites (**TBD — parked (PARKED-ITEMS.md #6)** where it's configured).

#### Lesson 5.2 — Automation

**Navigation path:** **Marketing → Automation**.

KPIs: Total Automations · Published · Draft · Total Sends MTD; Top Triggers donut (Cancel / Recharge / Plan Upg. / Buy Plan / Other). Columns: **NAME · TRIGGER · CREATED · MODIFIED · STATUS** (Published/Draft, weather-pause chips). Triggers observed: **Cancellation, Member Birthday, Wash First, No Visit**. These lifecycle flows (e.g. "Cancel Plan Recovery", "Win-Back — No Visit 90 Days") are what Command Center revenue plays link into.

#### Lesson 5.3 — The rest of Marketing

Sidebar: **Campaigns, Automation, SmartLinks** (trackable links), **Customer Segments**, **Offers & Promotions**, **Email Templates**, **Paid Media (DRAFT)** (flagged draft in the menu itself), **Deliverability** (bounce/opt-out health; check before blaming "the platform didn't send"), **Referral Program**, **SMS Templates**, **RCS Templates**, plus cross-links **Mobile Content Blocks** and **Push Campaigns** (Settings-side pages). Support rule: demo tenant forbids sending; teach composition up to the send/confirm step, then cancel.

**Knowledge check:** a client says "my win-back texts stopped in Toledo." Name two places that explain a paused campaign before you open a bug.

### Module 6 — Analytics

Academy companions: *Executive Dashboard & KPIs* (2h 15m), *Advanced Analytics & BI* (3h).

#### Lesson 6.1 — Executive Dashboard

**Navigation path:** **Analytics → Executive Dashboard**.

Header: "The state of the business", period toggles **Today / Week / Month / Quarter / YTD / 1Y**, "Updated just now". KPI cards: **REVENUE, CARS WASHED, ACTIVE MEMBERS, CONVERSION RATE, AVG VISIT FREQUENCY, LABOR %** (each with delta vs prior/target). Panels: **Revenue · last 12 months** (stacked Membership / Pay-per-wash / Retail), **Location health** (per-site revenue, cars, labor %, conv-to-target %), **Members vs churn** (active/gross adds/churn), **Revenue mix**, **GOALS · Q2 2026** (target-vs-actual bars incl. NPS).

#### Lesson 6.2 — The Analytics sidebar (22 pages)

Groups and pages: **ANALYTICS** — Executive Dashboard, Location Summary, Gamification, Marketing, Memberships, Subscribers, Downsells, Online Sales, Live Conversion, Retail Customers. **MARKETING** — Campaign Performance, Segment Response, Offer Effectiveness, Acquisition Sources, Win-Back Analysis. **INTELLIGENCE** — BI Overview, Revenue Intelligence, Benchmarking, Churn Intelligence, LTV Intelligence, Online Presence. **FORECASTING** — Forecasting.

**Forecasting** (`forecast-overview.html`): KPIs Next Month Forecast · YTD Variance · Accuracy · Data Points; Forecast List columns **PERIOD · LOCATION · FORECAST REVENUE · ACTUAL REVENUE · VARIANCE · CARS FORECAST · CONFIDENCE**; **+ New Record** to build a forecast.

**Exercise 6.2a [READ-ONLY]:** flip Executive Dashboard through all six periods; open Downsells and connect it to the Command Center "29 members with downsell signals" play; open Forecasting and read one row's variance.

### Module 7 — Team

Academy companions: *Employee Management Advanced* (47m), *Gamification & Team Engagement* (55m).

#### Lesson 7.1 — Employees list + detail

**Navigation path:** **Team → Employees**.

List KPIs: Total Employees · Active · Full Time · Part Time; insights: Headcount Growth, By Location, Employment Type. Buttons: **Export**, **+ New Record**; columns **EMPLOYEE** (avatar, name, title) **· PHONE · HIRE DATE · TYPE · STATUS · LOCATION**.

**Detail** (`emp-employees-detail.html`): header (name, title, EMP-id · location · Full-Time, **Active**), buttons **← Back, Delete, Edit Employee**; metric band **Tenure · Hours This Month · Attendance Rate · Status · Performance (x/5)**. **Seven tabs: Overview, Personal Info, Employment, Schedule, Emergency Contact, Notes & Audit, Training.** Overview analytics: **Monthly Hours Worked** (AVG/MONTH, PEAK MONTH, THIS MONTH, YTD TOTAL), **Hours Breakdown** (Regular/Overtime/PTO-Holiday/Unpaid), **Attendance Rate** (12-mo avg, missed shifts), **Monthly Earnings** (YTD, AVG/MO, LAST MONTH), **Performance Score Trend** (review cycles vs location avg).

#### Lesson 7.2 — Schedules, Time Clock, Roles, User Groups

- **Team → Employee Schedules:** KPIs Scheduled This Week · Open Shifts · Coverage % · Locations; weekly grid columns **EMPLOYEE · LOCATION · MON…SUN** with shift codes (7-3, 8-4, 3-11, OFF). This replaces the legacy predictive Schedule Planning workspace (DISCREPANCIES.md #14).
- **Team → Time Clock:** KPIs Today Punches · On Clock Now · This Week Hours · Locations; columns **DATE · EMPLOYEE · LOCATION · CLOCK IN · CLOCK OUT · HOURS · SHIFT**; a live punch shows "—" for CLOCK OUT. Punch-status donut ON CLOCK / CLOCKED OUT / NO SHOW. Auto-clock-out and rounding rules live per location (Lesson 12.5).
- **Team → Employee Roles / User Groups:** role definitions; User Groups are also the assignment targets for Maintenance work.

#### Lesson 7.3 — Sales Coaching (QA)

**Navigation path:** **Team → SALES COACHING → QA Dashboard** (`qa-dashboard.html`).

KPIs: Avg Score This Month · Conversations Recorded · Above Target (75%) · vs Last Month. Panels: **Average Score Trend** (12 weeks vs Target 75%), **Score Distribution** (letter grades A–F), **Checkpoint Hit Rates** ("Greeted customer", "Recommended service", "Offered upgrade", "Presented membership ⚡", "Mentioned promotion", "Mentioned free vacuum", "Proper closing") with a **⚡ Coaching Opportunity** callout, **Top Performers**, Recent Conversations + **Scoring Scripts** link. Sidebar adds **Scoring Scripts** and **Conversations**.

#### Lesson 7.4 — Gamification

**Navigation path:** **Team → GAMIFICATION → Challenges** (`game-tasks.html`).

KPIs: Total Challenges · Active Now · Completed · Starting Soon · Overdue. **CHALLENGE BOARD** with tabs **Active / All / Completed** and **+ New Challenge**; RUNNING NOW cards show progress % , points (e.g. "500 pts"), scope + end date, countdown chip, progress ("360 / 500 washes"), participant avatars, current leader; STARTING SOON cards have **Edit**. Sidebar: **Challenges, Leaderboard, Targets, Prizes, Recognition Feed, Pulse Surveys**.

**Knowledge check:** where do you see who is on the clock right now, and where do you check why an employee's schedule shows OFF on Wednesdays?

### Module 8 — Operations (Maintenance · Incidents · Scheduling)

Academy companions: *Operations & Maintenance Workflows* (2h 30m), *Incident Reports Management* (34m).

#### Lesson 8.1 — Maintenance Issues (work orders)

**Navigation path:** **Operations → MAINTENANCE → Issues** (`maint-issues.html`).

KPIs: Open Issues · In Progress · High Priority · Avg Resolution (days). Insights: Issues Reported trend, Issues by Priority (Low/Medium/High/Critical), Resolution Status (RESOLVED/PROGRESS/BLOCKED). List: **+ New Issue**, **Export**; columns **LOCATION · TITLE · STATUS · PRIORITY · ASSIGNED TO · CREATED BY · DATE**. Real examples in demo: "Air dryer not reaching temp" (Open/high), "POS 2 touch screen unresponsive" (Open/medium), "Chemical pump #3 leak" (Resolved/critical).

**Exercise 8.1a [TRAIN- required]:** create issue **TRAIN-Test bay light flicker**, priority Low; walk its status; delete it after logging.

#### Lesson 8.2 — Maintenance Schedule, Equipment Registry, Checklists, Parts & Supplies

Sidebar pages: **Maintenance Schedule** (preventive work), **Equipment Registry** (asset registry), **Checklists**, **Parts & Supplies**. Issue Status Types are configured in Settings → Operations (Lesson 12.7).

#### Lesson 8.3 — Incident Reports

**Navigation path:** **Operations → INCIDENTS → All Reports** (`incident-reports.html`).

List: **+ New Report**, Filters, Search; columns **REPORT # · TYPE · LOCATION · DATE · STATUS**. The five report types observed (numbering scheme in parentheses): **Customer Injury (IR-CI-…), Employee Injury (IR-EI-…), Property Damage (IR-P-…), Vehicle Damage (IR-V-…), Wash Equipment Damage (IR-WED-…)**; statuses **Open / Under Review**. Every damage claim call becomes one of these five.

#### Lesson 8.4 — Appointment Scheduling

**Navigation path:** **Operations → SCHEDULING → Appointments** (`sched-appointments.html`).

KPIs: Today · This Week · Utilization · No-Shows. Insights: Booking Trend, By Service (Full Detail / Interior Detail / Oil Change / Other), Booking Status (CONFIRMED/PENDING/NO-SHOW). List has **List / Calendar** view toggle, **+ New Record**, **Export**; columns **DATE · TIME · CUSTOMER · SERVICE · LOCATION · STAFF · STATUS**. Sidebar: **Appointments, Schedulable Services, Resources, Business Hours, Messaging, Payments, Reports** — this is customer-facing appointment booking (details/lube), not labor scheduling (that's Team → Employee Schedules).

**Knowledge check:** a customer's car was scratched in the tunnel; an employee slipped in bay 2. Which two incident report types, and where do they live?

### Module 9 — Digital (Customer Portal · Mobile App)

Academy companion: *Customer Portal & Mobile App* (1h 20m).

#### Lesson 9.1 — Portal pages

**Navigation path:** **Digital → PORTAL** group.

- **Booking Page (Customer)** (`portal-book.html`) — the customer-facing booking surface.
- **Portal Members** (`portal-members.html`): KPIs Registered · Active This Month · New This Week · Mobile Users; columns **NAME · EMAIL · MEMBER SINCE · PLAN · PORTAL STATUS · LAST LOGIN**.
- **Portal Messages, Portal Billing, Portal Notifications** — the portal-side service surfaces.

#### Lesson 9.2 — Mobile app pages

**Navigation path:** **Digital → MOBILE APP** group.

- **Mobile App Users** (`mobile-users.html`): KPIs Total Users · Active Monthly · iOS % · Android %; columns **NAME · EMAIL · APP VERSION · PLATFORM · LAST ACTIVE · NOTIFICATIONS · STATUS**. First stop for "app not working": check APP VERSION and NOTIFICATIONS On/Off.
- **Mobile App Branding / Mobile App Features** (Settings-side), **Push Notifications**, **Mobile Feedback**.
- A live **customer app preview** exists (Settings → Mobile App → **Open Mobile App Preview**). It opens the branded member app ("My Membership" experience). Use it to see what the customer sees.

### Module 10 — IT & Support (the Tech Support home module)

Academy companion: *Support & Help Desk* (27m).

#### Lesson 10.1 — ML Command Center (Micrologic NOC)

**Navigation path:** **IT & Support → ML Command Center** (`ml-command-center.html`).

Header: **"Micrologic NOC — CUSTOMER SUCCESS & TECH SUPPORT OPERATIONS"** with live critical count and LIVE badge. Scope filters: **All Customers / Enterprise / General**; status chips Critical / Warning / Healthy; VIEWS: **All Accounts / Enterprise Critical / Needs Attention**. KPI band: CUSTOMERS (with E/G split) · CRITICAL · WARNING · HEALTHY · **AVG SLA %**. **Network Coverage** map (customers · locations across states) and an **Incidents** feed where each row shows customer, tier (ENTERPRISE), incident title ("POS system offline — 0 transactions for 47 min"), tag chips (**TUNNEL DOWN**, **HARDWARE**), assignee ("Tyler R." / "Unassigned"), and age. This is the cross-customer cockpit for Micrologic support, distinct from the tenant's own Command Center.

**Exercise 10.1a [READ-ONLY]:** switch views All Accounts → Needs Attention; read the incident feed; identify the oldest unassigned incident and say what you'd do next in real operations.

#### Lesson 10.2 — Support Tickets (platform tickets)

**Navigation path:** **IT & Support → Support Tickets**.

KPIs: Open · In Progress · Resolved Today · Avg Resolution (hrs). By Category donut: **Billing / Technical / Feedback / General**. List: **+ New Record**, **Export**; columns **TICKET # · SUBJECT · LOCATION · PRIORITY · STATUS · ASSIGNED TO · CREATED** (e.g. TKT-4201 "POS not printing receipts" · High · In Progress · IT Support). Command Center's SLA-breach alerts deep-link here.

**Exercise 10.2a [TRAIN- required]:** create **TRAIN-Test ticket — printer offline**, priority Low; move nothing else; delete after logging.

#### Lesson 10.3 — Help Desk (Zoho)

**Navigation path:** **IT & Support → Help Desk (Zoho)** (`zoho-tickets.html`).

An embedded Zoho Desk live view: header "Zoho Desk · Help Desk · Support Tickets · **Not connected**", mode chips **Live View / Real-time / Live API**, **← Settings** and **⟳ Refresh** buttons, KPI placeholders (Showing/Open/Pending/Resolved/More Available), filters **All Statuses (Open, Pending, On Hold, Resolved, Closed)** and **All Priorities (High, Medium, Low)**. Empty state: "🔌 Zoho Desk not connected — Configure and authorize the integration to view tickets. **Go to Zoho Desk Settings →**". Configuration lives at Settings → Integrations → Zoho Desk (Lesson 12.9).

#### Lesson 10.4 — System Alerts

**Navigation path:** **IT & Support → System Alerts**.

KPIs: Active Alerts · Today · Critical · Warnings. By Severity: **Info / Warning / Error / Critical**. Columns: **DATE/TIME · TYPE · SEVERITY · LOCATION · MESSAGE · STATUS** (Active/Resolved). Alert types observed: **Tunnel** ("Conveyor belt tension exceeds threshold"), **POS** ("Low receipt paper on POS-2"), **Chemical** ("Chemical tank #2 below 20%"), **Network** ("Backup connection activated"). Triage drill in Phase 4.

#### Lesson 10.5 — Knowledge Base and Training Requests

- **IT & Support → Knowledge Base:** KPIs Total Articles · Published · Draft · Avg Rating; categories **How-To / Troubleshooting / Policy / FAQ**; columns **TITLE · CATEGORY · AUTHOR · LAST UPDATED · VIEWS · STATUS** (Published/Under Review/Draft). Seed articles observed: "How to process a refund" (POS Operations), "Membership plan changes guide" (Memberships), "Tunnel emergency stop procedure" (Safety), "Customer portal setup guide" (Customer Portal). Write KB articles as part of ticket closure; that is the team norm this plan assumes.
- **IT & Support → Training Requests:** the client-training pipeline. KPIs Pending Review · Scheduled · Completed YTD · Avg Schedule Time; TYPE split **Formal Training / Demo / TBD**; CATEGORY split **POS & Point of Sale / CRM & Customers / Membership & Billing / Reporting & Analytics**; columns **REQUEST # · SITE NAME · CONTACT · TYPE · CATEGORY · REQUESTED · SCHEDULED · STATUS** (Pending/Scheduled/Completed). Techs both fulfill these and file them.
- **IT & Support → Site Detail (Demo)** (`site-detail.html`): **TBD — parked (PARKED-ITEMS.md #13)**. Walk it before authoring its lesson.

**Knowledge check:** where do you (1) check whether an alert is platform-wide or one site, (2) look up the refund how-to, (3) log that a client wants formal POS training?

### Module 11 — Billing (Usage & Billing)

**Navigation path:** **Billing** rail button → **Usage & Billing** (`billing-usage.html`).

Header: "Current Billing Period — <month>" with period dates, next-invoice date, days remaining. KPI band: **SMS Usage ($) · Email Usage ($) · SMS Sent (with delivered %) · Emails Sent (with delivered %)**. **Six tabs: Overview, SMS Usage, Email Usage, Invoices (badge shows open count), Rate Card, Spending Alerts.** Overview panels: **Monthly Usage Cost** (6-month bars, * = estimated month), **Usage by Source** (SOURCE · TYPE · VOLUME · COST · SHARE — rows are campaigns/automations/transactional receipts), **Year-to-Date Summary** (**Export CSV**; Platform Fees · SMS Cost YTD · Email Cost YTD · Total Billed YTD · Paid YTD status).

This answers the recurring client question "why is my bill higher this month?" The cause is usually one campaign or automation dominating Usage by Source.

**Knowledge check:** a client disputes their messaging charges. Which tab shows the per-campaign cost split, and which tab shows their open invoice?

### Module 12 preview — Reports

**Navigation path:** **Reports** rail button (`reports.html`). Academy: *Advanced Analytics & BI* covers the Custom Builder.

- **VIEWS:** **All Reports (173) · Favorites · Scheduled Reports · Advanced Analytics · Custom Builder**.
- **CATEGORIES** (19, with counts): Financial, Traffic & Sales, Revenue, Commissions, Employee Labor, Employee Reports, Unlimited Programs, Customers, House Accounts, Transactions, Credit Cards, Inventory, Maintenance, Marketing, Scheduling, WashHub, Weather, Settings, Other.
- Report list columns: **★ (favorite) · REPORT NAME · CATEGORY · TYPE (Standard/Scheduled/Analytics) · LAST RUN**; hub-level **Schedule Report** button.
- **Report Viewer** (`report-view.html?name=…&cat=…`): REPORT FILTERS bar (**More Filters ▾**, **All Locations**, DATE RANGE From/To) with **✕ Close Report** and **▶ Run Report**. Output renders summary tiles + table with a "Generated <date> · Sample data" stamp in the demo.

**Exercise 12p.1 [READ-ONLY]:** run "Daily, Period, and Shift Financial" for All Locations; identify the per-location, per-shift rows and the refund column; close the report.

### Module 13 preview — Audit

**Navigation path:** **IT & Support → AUDIT** group.

- **Audit Log** (`audit-log.html`): KPIs Events Today · This Week · Unique Users · Critical Events; Action Types (Updated/Created/Login-Logout/Deleted); columns **DATE/TIME · USER · ACTION · MODULE · RECORD · LOCATION · IP ADDRESS**.
- **User Activity** (`audit-users.html`): KPIs Active Users · Logins Today · Avg Session · **Failed Logins**; columns **USER · ROLE · LAST LOGIN · LOGINS THIS MONTH · LOCATION · STATUS**.
- **Change History** (`audit-changes.html`): KPIs Changes Today · This Week · Config vs Data changes; columns **DATE/TIME · USER · MODULE · FIELD · OLD VALUE · NEW VALUE** (e.g. Monthly Price $29.99 → $34.99).

The support answer to "who changed X?" is always one of these three pages. Legacy per-domain audit pages (Refund/TimeClock/Location/Tickets/Customers Audit) are consolidated here (DISCREPANCIES.md #18).

**Exercise 13p.1 [READ-ONLY]:** find a Deleted action in Audit Log; find a price change in Change History and read its old/new values; find the failed-logins count.

### Module 14 — Academy (LMS)

**Navigation path:** rail → **Academy**, or avatar → **My Training**.

- Learner sidebar: **My Dashboard** (courses enrolled/completed, hours, certificates, Continue Learning), **Course Catalog**, **Learning Paths**, **My Learning**.
- **Course Catalog:** 19 courses with level chips (BEGINNER/INTERMEDIATE/ADVANCED), instructor, duration, lesson count, rating, enrollment, **Start**; category filters All / Analytics / CRM / Marketing / Operations / Command Center / Compliance / Onboarding / Digital / Billing; sort "Most Popular".
- **Learning Paths:** "RECOMMENDED FOR YOU" banner; path cards with course count, total hours, level, badge (e.g. **WashCentral Foundations** — 6 courses ~7.6h, Foundations Badge; **Analytics Power User** — 5 courses ~10.3h), **Enroll / Start Path**.
- **LMS ADMINISTRATION** sidebar group: **Admin Dashboard, Users & Enrollment, Course Management, Reports & Compliance** — Pre-Config techs use these to enroll client staff and pull completion/compliance reports.

The full 19-course catalog is reproduced in Appendix 3 and mapped to this plan's modules.

---

## Part E — Phase 3: System Configuration (Settings)

**Navigation path:** rail → **Settings** (gear). The Settings home shows a counter (**16 categories · 92 pages**), a search box ("Search settings…"), category cards, and its own sidebar (with **← Close Settings** to return to the app and **All Settings** at top). Academy companions: the four-course *System Administration* series (I: Services & Memberships · II: Pricing & POS Configuration · III: Users, Locations & Integrations · IV: System Configuration).

Category cards observed, with their card subtitles:

| Category | Card subtitle (verbatim) |
|---|---|
| General | Account details, departments, profit centers, and platform config. |
| Locations | Manage wash sites, regional groups, sub-brands, and payment approvals. |
| Services | Wash packages, service types, groups, detail types, and loyalty rules. |
| Payments & Finance | Payment methods, discounts, surcharges, tax rates, and GL mappings. |
| Hardware | Terminals, kiosks, screen layouts, system types, and lube controls. |
| UI & Display | Buttons, screen flows, branding, templates, colors, and macros. |
| Users & Security | System users, security levels, and blacklisted plates and accounts. |
| Operations | Cancellation, refund, and rewash reasons, event and transaction types. |
| VIP & Membership | VIP tiers, unlimited plans, charge frequency, and promotional upgrades. |
| Automation | Task scheduler, task parameters, mass SMS log, and user levels. |
| Customer Portal | Self-service portal branding, features, access rules, and content. |
| AI Agent | Multi-channel customer service AI — web chat, SMS, and voice configuration, conversations, and analytics. |
| Mobile App | Atlas Car Wash mobile app — preview the customer-facing iOS / Android experience. |
| LogicPOS | Tablet point-of-sale — sales screen, customer search, and payment processing. |
| Marketing | Referral program configuration and reward rules. |
| Integrations | SSO, accounting, help desk, and third-party platform connections. |

The full 92-page inventory (page name + URL) is in Appendix 2. The lessons below are the workflows technicians actually run.

### Lesson 12.1 — General & org structure

**Pages:** Account Information, Account Types, Profile Types, Profit Centers, Departments, Categories, Dashboard Settings, Dayforce Settings, Policy Category, Forms Category.

Onboarding order for a new client starts here: account info → org structure (profit centers/departments/categories) → Dashboard Settings (which widgets each user level sees) → Dayforce only if the client uses that HR/payroll integration.

### Lesson 12.2 — Locations

**Pages:** Locations, Location Groups, Location Sub-Brand, Payment Credential Approval.

**Locations list:** columns **CODE · NAME · ADDRESS · CITY · STATE · ZIP · PHONE · LAST SYNC**; **+ New Record**. (Demo shows 144 migrated records with real site codes.)

**Location detail** — **five tabs: Profile, Operations, Payments & Credentials, Messaging, Users.**

- **Profile:** IDENTIFICATION (CODE, NAME, SHORT DESCRIPTION, SITE NAME, CUSTOMER ID, LICENSE, LOGO, GLOBAL LOCATION ID, CRM ACCOUNT NUMBER, COMPANY ACCOUNTING CODE, DELETED) · ADDRESS & CONTACT (address, phone/fax/email, LATITUDE/LONGITUDE, STORE IMAGE URL, OBSERVERS) · HOURS OF OPERATION per weekday.
- **Operations:** site behavior flags — VIRTUAL LOCATION, LOCATION OPEN FOR 24 HOURS, SHOW ON DASHBOARD, AVAILABLE FOR ONLINE SERVICE, SHOW ON MOBILE, IS DEFAULT FOR ONLINE SERVICE, MAINTENANCE MODULE ONLY, INACTIVE DAYS FOR REACTIVATION, LOADING EFFICIENCY THRESHOLDS, AUDIT COUNTER, ALLOW GENERATE ENCRYPTED BARCODE, ENABLE TUNNEL DOWNTIME TIMER, ALLOW TRANSITION PORTAL SALES · TIME CLOCK & PAYROLL — clock-in/out messages (enable + text), AUTOMATIC CLOCK OUT ENABLED + TIME OUT (hrs), HOURS PER (week), PAY OVERTIME + OT HOURS, ROUND PUNCH IN/OUT, MINIMUM WAGE, PAY MINIMUM WAGE HOURS + NUM MINIMUM WAGE HOURS.
- **Payments & Credentials:** portal options (EXTERNAL PORTAL URL, ONLINE PORTAL DESCRIPTION, FAMILY ACCOUNT DISCOUNT MODE, TRANSACTION API KEY — masked) · AUTO-CHARGE (AUTO CHARGE DECLINE ATTEMPTS, IS AUTOCHARGE RECHARGE SCHEDULER ENABLED, MONTHLY ACCOUNT PROCESSING TERMINAL) · **CREDENTIAL CONFIGURATION** with per-gateway blocks — **OPENEDGE** (Attendant/Unattendant XWEB ID, AUTH KEY, TERMINAL ID), **SMARTTECH** (Attendant/Unattendant TRANSACTION API KEY), **OTHER** (API KEY, MERCHANT ID, PAYAPI PUBLIC KEY per attended mode), **CARDCONNECT** (USERNAME, PASSWORD, MERCHANT ID). All secrets render masked (••••).
- Editing a location: some fields are protected/read-only, and credential changes route through **Payment Credential Approval** (its own Settings page). **Demo rule:** never modify location or credential data.

**Exercise 12.2a [READ-ONLY]:** open a location; on Operations, find the auto-clock-out timeout and OT threshold; on Payments & Credentials, name which gateway blocks are present (never copy values, even masked).

**Knowledge check:** a site's members aren't auto-recharging. Which two Payments & Credentials settings do you read before escalating?

### Lesson 12.3 — Services & per-location values (the pattern that runs the platform)

**Pages:** Services, Service Types, Service Groups, Detail Types, Rewards, Loyalty Discount Types.

**Services list:** columns **DESCRIPTION · CODE · TYPE · PRICE · ACTIVE**; **+ New Service**. Migrated catalog includes wash packages, EXTRA add-ons, "UL Wash Upgrades", token sales.

**Service detail:** header (name, `SVC-…` id, Controller Code, type/category), metric band **Amount · Points · Service Type · Category**, buttons **← Back, Delete Service, Edit Service**. **Two tabs: Service Main, Active Locations.** Service Main field groups (all observed):

- BASIC INFORMATION — DESCRIPTION, REPORT DESCRIPTION, APPROVAL LEVEL, CONTROLLER CODE, SERVICE CODE, POINTS
- PRICING — AMOUNT, OPEN AMOUNT, MIN/MAX AMOUNT (edit form), TAXABLE, TAX RATE (1), TAX RATE (2), TAX INCLUDED
- BEHAVIOR — COUNT AS CAR, TRACK ACCOUNTABILITY, SHOW ON HANDHELD, GENERATE PINCODE, AUTO SAVE RETRACT ENABLED, ALLOW CHARGE CARD ON FILE, PRINT CLAIM CHECK, CHECK LIST SERVICE
- DISPLAY & ORDERING — DISPLAY ORDER, PRINT ORDER, VISUAL QUEUE COLUMN, DEFAULT STATUS, LIST STATUS, STATUS 1–4
- COMMISSION — COMMISSION PAYS, COMMISSION BY PERCENT, COMMISSION
- CLASSIFICATION — SERVICE TYPE, SERVICE GROUP, CATEGORY, PREPAIDBOOK TYPE, INVENTORY TYPE
- LUBE & OIL — OIL SERVICE, BASE FLUID PRICE, BASE OIL FILTER PRICE, OIL QUANTITY
- ADDITIONAL — EXPECTED DURATION (SECONDS), GIFT CARD DISCOUNT %, SURCHARGE, DISPENSE TOKEN, ELIGIBLE FOR DETAIL BONUS, DATA LAKE RECORD ID, MAP TO PINCODES, DELETED

**Active Locations tab:** the sites/groups where the service is sold, each with status and effective date. A service can only sell where it's active.

**Per-location values:** in **Edit Service**, gear buttons (tooltip **"Configure per location"**) sit beside DESCRIPTION, CONTROLLER CODE, AMOUNT, TAXABLE, TAX RATE (1), TAX RATE (2), TAX INCLUDED. The plain field is the default everywhere; the gear assigns overrides per location/group (legacy guide documents the "Configure Value For …" dialog, e.g. a group-level discount amount override). **TBD — parked (PARKED-ITEMS.md #1):** the dialog would not open in the demo; teach the concept, demonstrate the gear, and mark the dialog step "verify on production-like tenant."

This **Active Locations + per-field gear** pattern repeats on Discounts and other site-variable records. Master it once here.

**Exercise 12.3a [READ-ONLY]:** open a WASH service; explain COUNT AS CAR and CONTROLLER CODE (POS/tunnel-controller mapping) to your lead; list which fields carry gears in Edit; **Cancel**.

**Knowledge check:** "Why does the Works wash cost $2 more at one site?" Which tab and which control answer that in one sentence?

### Lesson 12.4 — Payments & Finance

**Pages:** Payment Types, Discounts, Discount Types, Surcharges, Surcharge Types, Payout Percentage, Tax Rates, General Ledger Codes, GL Account Codes.

Discounts follow the Services pattern (detail + Active Locations + per-location amount overrides). Tax Rates feed the two TAX RATE slots on Services. GL/GL Account Codes drive accounting exports; a wrong GL mapping is a classic month-end escalation.

**Exercise 12.4a [READ-ONLY]:** open one Discount; identify $-vs-% method and its Active Locations; open Tax Rates and match a rate to a service's TAX RATE (1).

### Lesson 12.5 — Hardware & UI (POS-facing config)

**Hardware pages:** Hardware / Terminals, Screen Layout, System Types, Lube Buttons, Lube Checklists.
**UI & Display pages:** Button Groups, Button Types, Cashier Buttons, Greeter Buttons, Image Design, Colors, Templates, Macros, Macro Types, Macro Detail Types, Kiosk Screen Flows.

Field-tech emphasis: terminal registration (Ticket View's CASHIER TERMINAL / GREETER TERMINAL values come from here), POS button wiring (button → service via controller code), kiosk flow publishing. **LogicPOS** (Settings category) is the tablet POS demo. **TBD — parked (PARKED-ITEMS.md #2):** its screens 404 in the demo tenant; Module 14 lessons are outlined but production-blocked.

### Lesson 12.6 — Users & Security (support-critical)

**Pages:** System Users, User Levels, Security Level, Blacklisted (+ User Levels also appears under Automation grouping in the sidebar).

- **System Users:** columns **USER NAME · USER CODE · USER LEVEL · EMAIL · PHONE · ACTIVE · SSO · LAST LOGIN**; 8,021 migrated accounts including integration users and the Micrologic support account. USER CODE doubles as the POS code (legacy B.26 "Change employee login (POS)" maps here).
- **User Levels** (13 observed): **NAME · SECURITY LEVEL · SESSION TIMEOUT (MIN)** — Administrator 20/120 · Anonymous —/20 · Cashiers 3/5 · Customer Service 10/120 · Level 00 0/5 · Level 01 5/5 · Level 02 10/120 · Managers 10/5 · MLA ReadOnly 0/120 · MLA Supervisor 20/120 · MLA Support 0/120 · ReportOnly 5/120 · Sr.Manager 10/5.
- **Security Levels** (6): **NAME · LEVEL · REFUND APPROVAL REQUIRED** — Low 0/Yes · LowMedium 3/Yes · Medium 5/Yes · HighMedium 8/No · High 10/No · SuperAdmin 20/No. **This is the refund-approval gate:** users at security level ≤5 need approval to refund; ≥8 do not.
- **Blacklisted:** blocked plates/accounts (site-specific flag supported per legacy flow B.23).

**Demo rule:** read-only — never change passwords, levels, or blacklist entries.

**Knowledge check:** (1) A manager "can't approve refunds" — which page and column? (2) A cashier keeps getting logged out — which page and column? (3) "Who logged in as this user last?" — which two pages could answer?

### Lesson 12.7 — Operations reason codes & Automation

- **Operations pages:** Cancellation Reasons (33 records, **Show on POS** flag), Refund Reasons, Rewash Reasons, Event Types, Transaction Types, Issue Status Types, Prepaid Book Types, Prepaid Book Type Types. These lists populate the dropdowns everywhere else, so a "missing reason" ticket ends here. (The legacy Time Clock Edit Reasons page is not present; see DISCREPANCIES.md #20.)
- **Automation pages:** **Task Scheduler** (columns **TASK NAME · SCHEDULE · LAST RUN · NEXT RUN · STATUS**; KPIs include **Failed**; observed jobs: "Daily Report Email — Daily 6:00 AM", "SMS Campaigns — Hourly", "Database Backup — Daily 2:00 AM"), **Task Parameters** (reusable parameters tasks run against), **Mass SMS Log** (delivery log). "Scheduled report never arrived" triage starts at Task Scheduler LAST RUN/STATUS. **Demo rule:** never modify the scheduler.

### Lesson 12.8 — Customer Portal & AI Agent

- **Customer Portal hub** (`settings-customer-portal.html`): header shows portal name, **● Live**, the portal URL with **Copy**, version, **Preview Portal**, **Publish Changes**. KPIs: Registered Members · Logins Today · Avg Session · Uptime (30 days) · Mobile Users. Four config cards → subpages: **Branding & Appearance** (logo, PRIMARY COLOR, DARK MODE), **Features & Modules** (ENABLED MODULES "7 of 9" with per-feature toggles like WASH HISTORY, FAMILY PLAN), **Access & Security** (LOGIN METHOD "Phone & Email", OTP REQUIRED, SESSION TIMEOUT 30 min), **Content & Messaging** (welcome message, contact info, FAQs). **Recent Portal Activity** feed includes security-relevant lines ("3 failed login attempts — <user>"). Portal barcode/OTP login is a headline platform capability *(per Micrologic platform documentation)*.
- **AI Agent** (7 pages: Overview, Configuration, Knowledge Base, Channels & Deployment, Conversations, Escalations, Analytics): Overview shows **● Live**, "3 Channels", the model in use, KPI band (Conversations 30d · **Containment Rate** · **Escalated to Human** · Avg Handle Time · CSAT · Knowledge Articles) and per-channel cards — **Web Chat** (embedded widget), **SMS** (Twilio number, "TCPA quiet hours on"), **Voice** (Twilio number, **Beta**, "Recording consent on") each with Contained % and **Configure →**. AGENT CAPABILITIES lists the actions it can take via secure WashCentral APIs (look up account, schedule service, …) toggled under **Configuration → Behavior & Tools**. Escalated conversations land in the CRM **Agent Console** handoff queue (Lesson 2.7).

**Exercise 12.8a [READ-ONLY]:** from the portal hub, name the two settings you'd check for "customers can't log into the portal" (LOGIN METHOD, OTP REQUIRED — plus the failed-login feed). Open AI Agent → Escalations and describe when a human takes over.

### Lesson 12.9 — Integrations (SSO, accounting, help desk)

**Pages:** Microsoft Entra ID, Google SSO, Okta SSO, AWS Cognito, SCIM Provisioning, Sage Intacct, QuickBooks Online, Zoho Desk.

**Zoho Desk page anatomy** (pattern for all integration pages): status banner (**⚠ Not Configured**), method chips (OAuth 2.0, Server-side Token, Live View), buttons **Test Connection** and **Edit Configuration**, status tiles (Connection · Data Center · Org ID · Sync Direction), tabs **Settings / Instructions**, and field groups — CREDENTIALS (CLIENT ID, CLIENT SECRET, ORG ID, DATA CENTER, ACCESS TOKEN, REFRESH TOKEN, TOKEN EXPIRY, ACCOUNTS SERVER), GENERAL (ENABLED, ADMIN NOTES), ROUTING (DEFAULT DEPARTMENT, DEFAULT ASSIGNEE), SYNC (SYNC DIRECTION "both"), BEHAVIOR (AUTO-CREATE CONTACTS), MAPPING (STATUS MAPPING, SLA MAPPING).

Connected-state effect: IT & Support → Help Desk (Zoho) switches from the "🔌 not connected" empty state to live tickets. SSO pages connect to the System Users **SSO** column. **Demo rule:** view only; never enter or test credentials.

**Knowledge check:** the Help Desk tab is empty for a client. Walk the three-step check (integration status → Test Connection → token expiry/credentials) without opening a bug.

---

## Part F — Phase 4: Troubleshooting playbooks (Tech Support core)

Each playbook: symptom → checks in order (all on observed pages) → escalation. Escalation always means: platform **Support Tickets** (IT & Support) with links/IDs, mirrored per your team's process; migration-related switches go to Jira (Phase 5).

### PB-1 Login failures
1. Three fields correct? Wrong **Tenant / Customer Code** is the classic multi-tenant miss (Lesson 0.2).
2. Migrated client? Credentials carry over from WashAssist unchanged *(Migration note — source: Migration FAQ)* — have them use legacy credentials.
3. Settings → Users & Security → **System Users**: user exists? **ACTIVE = Yes**? **SSO = Yes** (then check the SSO integration page instead of password)? **LAST LOGIN** recent?
4. IT & Support → Audit → **User Activity**: failed-login count for that user.
5. Password reset: Edit System User → new password → Save Changes (legacy B.24 flow) — production only, never in demo.
6. Escalate with username (never password), tenant, timestamps, and screenshots (values masked).

### PB-2 Surprise logouts / frozen session
1. Identify the user's level (System Users → USER LEVEL).
2. **User Levels → SESSION TIMEOUT (MIN)** — 5-minute levels (Cashiers, Managers, Sr.Manager, Level 00/01) log out fast by design; the "Still there?" dialog gives a 2:00 grace (Lesson 1.3).
3. If behavior contradicts the configured timeout, capture the level + observed time and escalate. *(Per Micrologic platform documentation, sessions are device- and browser-bound — a user switching browsers/devices re-authenticates by design.)*

### PB-3 POS down / terminal offline
1. Command Center → **Priority Intelligence**: is it already flagged (e.g. "POS system offline — card terminals down")? Follow its deep link.
2. **ML Command Center** (NOC): locate the customer/site; check incident feed, tags (TUNNEL DOWN / HARDWARE), assignee; claim or assign.
3. IT & Support → **System Alerts**: POS-type alerts for that location (e.g. receipt paper, offline).
4. Settings → Hardware → **Hardware / Terminals**: terminal registered and active? Match terminal ID against a recent Ticket View's CASHIER/GREETER TERMINAL.
5. Sales → Tickets filtered to the location: are tickets still being written? (0 transactions for N minutes = hard outage.)
6. Escalate with location code, terminal ID, last-ticket timestamp, alert IDs.

### PB-4 Payment declines / auto-recharge failures
1. Scope: one customer or many? Command Center **Decline Rate** KPI and the "recoverable billing failures via card updater" play (links to payments-reconciliation).
2. One customer: Customer 360 → **Membership** (LAST PAYMENT RESULT, NEXT CHARGE) and **Payments** (card on file, expiry). Fix path: **Update Card** / payment-update link — production only; never send links from demo.
3. Many: Sales → **Declined Credit Card Log** filtered by location/date.
4. Site-wide: Settings → Locations → [site] → **Payments & Credentials** — gateway block present? AUTO CHARGE DECLINE ATTEMPTS / RECHARGE SCHEDULER as expected? Credential changes go through **Payment Credential Approval** — never hand-edit.
5. **Billing → Usage & Billing** if the complaint is about messaging charges instead (Usage by Source).
6. Escalate with gateway name (OpenEdge/SmartTech/CardConnect/Other), decline samples, and counts. Never paste credentials, even masked.

### PB-5 Settlement variance (reconciliation)
1. **Payments Reconciliation** (`payments-reconciliation.html`): batch rows **BATCH · LOCATION · EXPECTED · SETTLED · VARIANCE · STATUS** (Balanced / Review).
2. For a **Review** batch, use **Resolve batch**; cross-check Sales → **Shifts** (drawer sessions) and **Payouts** for the same day.
3. Escalate unresolved variance with batch ID + amounts.

### PB-6 "My tag/plate won't scan" (membership at the gate)
1. Customer 360 → **Membership**: BARCODE present? Plan **Active**? NEXT CHARGE not past-due?
2. Customer 360 → **Vehicles**: plate linked (header chip "Plate linked")? Retracts as expected?
3. CRM → **Vehicles**: plate exists? attached to the right customer? STATUS/LAST VISIT sane?
4. Settings → Users & Security → **Blacklisted**: plate blocked?
5. Site hardware angle: System Alerts (Tunnel/POS types) for that location.
6. Real migrated cancellation reasons include "RFID Tag Issues/Not Reading/cross read activate" — a known field failure mode; note it in the ticket.

### PB-7 Membership change requests (cancel/pause/refund)
1. Actions observed on Customer 360: **Issue Wash**, **Refund Customer**. Cancel/Reset/Pause not visible in demo — **TBD — parked (PARKED-ITEMS.md #4)**; on production confirm role first.
2. Refund permission: Security Levels (**REFUND APPROVAL REQUIRED**) — Lesson 12.6. Low/Medium users need approval; route to a HighMedium+ user.
3. Refund reasons come from Settings → Operations → **Refund Reasons**.
4. Log the interaction in Customer 360 → **Notes** (pin if account-critical) — never in Messaging (that texts the customer).

### PB-8 Campaign/automation "stopped sending"
1. Marketing → Campaigns / Automation: STATUS — Draft? Completed? **"⛅ Weather paused — N locations"**?
2. **Deliverability** page: bounces/opt-outs spiking?
3. Settings → Automation → **Task Scheduler**: "SMS Campaigns" job STATUS + LAST RUN; **Mass SMS Log** for the send trail.
4. Billing → Usage & Billing: spending alerts / open invoice gating sends is a plausible cause — check **Spending Alerts** tab.
5. Escalate with campaign name, trigger, status chip, and scheduler timestamps.

### PB-9 Reports wrong/missing
1. Reports → run the report in **Report Viewer**; confirm the filter bar (locations + date range) before disputing numbers.
2. Scheduled report missing: Reports → **Scheduled Reports** (download from Latest Result per legacy B.29) and Settings → Automation → **Task Scheduler** ("Daily Report Email" LAST/NEXT RUN + Failed KPI).
3. KPI-vs-table mismatches inside the demo tenant are a known demo artifact (DISCREPANCIES.md, demo-data notes) — don't file demo-data bugs from the demo tenant.

### PB-10 Portal/mobile "can't log in / can't see feature"
1. Settings → Customer Portal hub: portal **● Live**? Correct URL (Copy button)? **Preview Portal** to reproduce.
2. **Access & Security**: LOGIN METHOD (Phone & Email), OTP REQUIRED, SESSION TIMEOUT.
3. **Features & Modules**: is the missing feature simply toggled off ("7 of 9 enabled")?
4. Recent Portal Activity: failed-login entries for the user.
5. Mobile: Digital → **Mobile App Users** — APP VERSION old? NOTIFICATIONS Off? Then Mobile App Features/Branding for feature flags; use the **Mobile App Preview** to see the member experience.

### PB-11 "Who changed this?"
1. IT & Support → Audit → **Change History**: filter module; read **FIELD / OLD VALUE / NEW VALUE** + user + timestamp.
2. **Audit Log** for the surrounding events (ACTION, MODULE, RECORD, IP ADDRESS).
3. Settings changes also surface here (module = Settings). Answer with the exact old→new values.

### PB-12 AI agent misbehaving (customer-facing)
1. Settings → AI Agent → **Conversations**: pull the transcript.
2. **Escalations**: did it hand off when it should? Escalated chats land in CRM → **Agent Console** queue.
3. **Knowledge Base** (agent's): the wrong answer is usually a stale/missing article.
4. **Channels & Deployment**: channel Active vs Beta (Voice is Beta); SMS quiet hours can explain "it ignored me at night."
5. Escalate with conversation ID + channel + containment context (Analytics page).

### PB-13 Integration down (Zoho/SSO/accounting)
1. The integration's Settings page: status banner (**⚠ Not Configured** / connected), **Test Connection**.
2. Token expiry (TOKEN EXPIRY field) and credentials present (masked) — re-auth is an admin action.
3. Symptom surfaces: Help Desk (Zoho) empty state; System Users **SSO** column users failing login → SSO page; accounting export gaps → Sage/QuickBooks pages + GL Codes mapping (Lesson 12.4).
4. Escalate with integration name, status, Test Connection result, and timestamps.

### PB-14 Broken page / 404 inside the platform
Observed real examples: **LogicPOS** links (logicpos/sales.html, logicpos/login.html) return IIS "404 – File or directory not found"; CRM → **Fundraiser** is a dead "#" link. Procedure: reproduce, capture URL + screenshot, check whether it's a known parked item (PARKED-ITEMS.md #2/#3), then ticket with module, link source, and expected target. Do not tell clients a 404'd feature "doesn't exist" — it may be release-gated.

### Phase 4 drill days
Run as scenario pairs (one plays the site manager, one the tech): PB-1/2 (access), PB-3/5 (site down + money), PB-4/6/7 (member won't wash), PB-8/9 (marketing + reports), PB-10/12/13 (digital + AI + integrations). Every drill ends with a written ticket and, where the resolution is reusable, a draft KB article (Lesson 10.5 categories: How-To or Troubleshooting).

---

## Part G — Phase 5: Migration support & Phase 6: Certification

### Lesson 15.1 — WashAssist → WashCentral migration (all facts sourced: Migration FAQ)

- For clients, migration only requires the new WashCentral URL, provided directly or through an automatic redirect from WashAssist.
- New-client onboarding: the Pre-Configuration team's standard process is unchanged; only the URL differs.
- Switching a client: **Beta phase** — submit a Jira ticket on the **CSI board** to Development for URL redirection. **GA phase** — Tech Support performs the switch directly in the Admin Portal.
- After redirection, the client cannot access WashAssist unless the switch is reverted (same Jira path reverts it).
- Credentials do not change; users are not re-ported; data is not migrated — WashCentral uses WashAssist data.
- WashAssist enters support mode (critical fixes only) for a TBD duration before retirement; data remains available in WashCentral afterward.
- Anything the FAQ doesn't cover: park and ask — never improvise migration answers.

**Knowledge check:** a beta client wants to switch back to WashAssist for month-end. Exact process and board?

### Lesson 15.2 — Parity conversations with clients

*(Per Micrologic platform documentation:* all 179 WashAssist modules carried forward with full parity; 16+ new capability areas; rebuilt on AWS with token-based auth, device-bound sessions, rate limiting; Release 2 brings the Marketing module onto an event-driven backbone and bi-directional data replication; Release 3 brings event-driven microservices.)* Always attribute these claims to the platform documentation; you cannot observe them. For "where did feature X go?" use the live restructure map (DISCREPANCIES.md #2–#23); for features not found live (PIN Codes, Tech Commissions, Site Watch, etc.; see PARKED-ITEMS.md #14), say "being confirmed," never "gone."

### Phase 6 — Certification

**Written exam (25 questions)** drawn from the knowledge checks. Pass ≥80%.

**Practical checkout matrix** (lead observes, live tenant, no notes):

| # | Task | Pass standard |
|---|------|---------------|
| 1 | Cold login + tour | 3-field login explained; all 13 modules + Settings named with purpose |
| 2 | Member lookup | From a plate → customer → barcode, next charge, consent status < 3 min |
| 3 | Ticket trace | From a ticket # → terminal, shift, tender, refund state; deep-link pasted |
| 4 | Refund gate | Explain security-level approval matrix from the live page |
| 5 | Site health | For a named location: alerts, open issues, last tickets, reconciliation batch |
| 6 | Config read | For a named service: price default, where overrides live, where it's active |
| 7 | Who-changed-it | Produce field-level old/new + user + IP for a given change |
| 8 | Playbook run | One random PB-1…PB-14 end-to-end incl. correctly-formed escalation |
| 9 | Migration script | Lesson 15.1 answers verbatim-accurate, properly attributed |
| 10 | KB contribution | One draft article (correct category) from a drill resolution |

**Academy requirements:** Foundations path badge (all tracks); + *Support & Help Desk*, *Incident Reports Management*, *Compliance & Audit Essentials* (Tech Support); + all four *System Administration* courses (Pre-Config); + *Operations & Maintenance Workflows*, *Sales & Transaction Management* (Field). Completion is tracked in Academy → LMS Administration → **Reports & Compliance**.

---

## Part H — Week-by-week schedule (4-week default)

**Week 1 — Foundations + money paths.** D1: Phase 0 + Lessons 1.1–1.3. D2: 1.4–1.6 + Foundations path enrolled. D3: CRM 2.1–2.4. D4: CRM 2.5–2.7 + checkout. D5: Sales 3.1–3.3 + *Sales & Transaction Management* course.

**Week 2 — Operational breadth.** D1: Inventory + Marketing 5.1–5.3. D2: Analytics 6.1–6.2 + Forecasting. D3: Team 7.1–7.4. D4: Operations 8.1–8.4. D5: Digital 9.1–9.2, IT & Support 10.1–10.5, Billing + Reports + Audit previews.

**Week 3 — Configuration.** D1: 12.1–12.2. D2: 12.3 (services pattern day). D3: 12.4–12.5. D4: 12.6–12.7. D5: 12.8–12.9 + config checkout. (Pre-Config track doubles depth here; Tech Support may compress D3.)

**Week 4 — Troubleshooting + certification.** D1–D3: PB drill days (Part F pairing). D4: Phase 5 migration + written exam. D5: practical checkout matrix + Academy compliance pull + sign-off.

---

## Appendix 1 — Module → URL quick map (observed)

Command Center `command-center.html` · Analytics `dashboard-executive.html` (+21 sibling pages) · Marketing `mkt-campaigns.html` etc. · CRM `crm-customers.html`, detail `crm-customer-detail.html`, edit `crm-customer-edit.html`; gift cards/house accounts/prepaid/vehicles/retail/bundles `crm-*.html`; Agent Console `agent-console.html` · Sales `sales-transactions.html`, Ticket View `sales-ticket-view.html?ticket=<id>`, `sales-transaction-details.html`, `sales-payments.html`, `txn-payouts.html`, `txn-shifts.html`, `txn-declined.html`, `txn-gift-transactions.html`, `txn-house-transactions.html` · Inventory `inv-items.html`, `inv-batches.html`, `inv-adjustments.html`, `inv-vendors.html`, `inv-chemicals.html`, `inv-purchase-orders.html` · Team `emp-employees.html`, `emp-roles.html`, `emp-schedules.html`, `emp-timeclock.html`, `emp-user-groups.html`; QA `qa-dashboard.html`, `qa-scripts.html`, `qa-conversations.html`; Gamification `game-tasks.html`, `game-leaderboard.html`, `game-targets.html`, `game-prizes.html`, `game-recognition.html`, `game-surveys.html` · Operations `maint-issues.html`, `maint-schedule.html`, `maint-equipment.html`, `maint-checklist.html`, `maint-parts.html`; incidents `incident-reports.html`; scheduling `sched-appointments.html`, `sched-services.html`, `sched-resources.html`, `sched-hours.html`, `sched-messaging.html`, `sched-payments.html`, `sched-reports.html` · Digital `portal-book.html`, `portal-members.html`, `portal-messages.html`, `portal-billing.html`, `portal-notifications.html`, `mobile-users.html`, `mobile-push.html`, `mobile-feedback.html` · IT & Support `ml-command-center.html`, `site-detail.html`, `support-tickets.html`, `zoho-tickets.html`, `support-kb.html`, `support-alerts.html`, `support-training.html` · Audit `audit-log.html`, `audit-users.html`, `audit-changes.html` · Billing `billing-usage.html` · Payments Reconciliation `payments-reconciliation.html` · Academy `lms-home.html`, `lms-catalog.html`, `lms-paths.html`, `lms-my-learning.html`, `lms-admin.html`, `lms-admin-users.html`, `lms-admin-courses.html`, `lms-admin-reports.html` · Reports `reports.html`, viewer `report-view.html?name=…&cat=…` · Forecasting `forecast-overview.html` · Settings `settings.html` + 92 pages (Appendix 2).

## Appendix 2 — Settings page inventory (all 92 observed pages)

**General:** settings-account-info, settings-account-types, settings-profile-types, settings-profit-centers, settings-departments, settings-categories, settings-dashboard-settings, settings-dayforce-settings, settings-policy-category, settings-forms-category. **Locations:** settings-locations (+ -detail, edit), settings-location-groups, settings-location-sub-brand, settings-location-payment-approval. **Services:** settings-services (+ settings-service-detail/-edit), settings-service-types, settings-service-groups, settings-detail-types, settings-rewards, settings-loyalty-discount-types. **Payments & Finance:** settings-payment-types, settings-discounts, settings-discount-types, settings-surcharges, settings-surcharge-types, settings-payout-percentage, settings-tax-rates, settings-gl-codes, settings-gl-account-codes. **Hardware:** settings-hardware-terminals, settings-screen-layout, settings-system-types, settings-lube-buttons, settings-lube-checklists. **UI & Display:** settings-button-groups, settings-button-types, settings-cashier-buttons, settings-greeter-buttons, settings-image-design, settings-colors, settings-templates, settings-macros, settings-macro-types, settings-macro-detail-types, settings-kiosk-flows. **Users & Security:** settings-system-users, settings-user-levels, settings-security-level, settings-blacklisted. **Operations:** settings-cancellation-reasons, settings-refund-reasons, settings-rewash-reasons, settings-event-types, settings-transaction-types, settings-issue-status-types, settings-prepaid-book-types, settings-prepaid-book-type-types. **VIP & Membership:** settings-vip-types, settings-vip-monthly-types, settings-vip-charge-frequency, settings-vip-account-service, settings-vip-loyalty-discounts, settings-unlimited-promotions, settings-promotional-upgrades. **Automation:** settings-task-scheduler, settings-task-parameters, settings-mass-sms-log (+ User Levels cross-listed). **Customer Portal:** settings-customer-portal, settings-customer-portal-branding, settings-customer-portal-features, settings-customer-portal-access, settings-customer-portal-content. **AI Agent:** settings-ai-agent, settings-ai-agent-config, settings-ai-agent-knowledge, settings-ai-agent-channels, settings-ai-agent-conversations, settings-ai-agent-escalations, settings-ai-agent-analytics. **Mobile App:** Mobile App/index.html (preview) + settings-mobile-branding, settings-mobile-features, settings-mobile-content, settings-mobile-push. **LogicPOS:** logicpos/sales.html, logicpos/login.html, logicpos/dashboard.html (all 404 in demo — parked). **Marketing:** mkt-referral-program. **Integrations:** settings-integrations-entra, settings-integrations-google, settings-integrations-okta, settings-integrations-cognito, settings-integrations-scim, settings-integrations-sage, settings-integrations-quickbooks, settings-integrations-zoho. *(All .html.)*

## Appendix 3 — Academy course catalog (19 courses observed) → plan mapping

| Course (level · length · lessons) | Instructor | Maps to |
|---|---|---|
| Getting Started with WashCentral (Beginner · 45m · 6) | Rachel Kim | Phase 1 |
| Command Center Mastery (Intermediate · 1h20 · 10) | Rachel Kim | Lesson 1.6 |
| Executive Dashboard & KPIs (Intermediate · 2h15 · 13) | Dr. Priya Nair | Module 6 |
| CRM Deep Dive: Customers & Members (Intermediate · 1h45 · 11) | James Okafor | Module 2 |
| Marketing Campaigns & Automation (Intermediate · 2h · 12) | Sofia Reyes | Module 5 |
| Sales & Transaction Management (Beginner · 1h10 · 9) | Tom Delgado | Module 3 |
| Operations & Maintenance Workflows (Intermediate · 2h30 · 15) | Marcus Webb | Module 8 |
| Gamification & Team Engagement (Beginner · 55m · 7) | Rachel Kim | Lesson 7.4 |
| Compliance & Audit Essentials (Intermediate · 1h15 · 8) | Linda Torres | Module 13 preview |
| Advanced Analytics & BI (Advanced · 3h · 18) | Dr. Priya Nair | Modules 6, 12 |
| Customer Portal & Mobile App (Beginner · 1h20 · 10) | Sofia Reyes | Module 9 |
| System Administration I: Services & Memberships (Intermediate · 1h25 · 9) | Sandra Powell | Lesson 12.3 |
| System Administration II: Pricing & POS Configuration (Intermediate · 1h45 · 13) | Sandra Powell | Lessons 12.4–12.5 |
| System Administration III: Users, Locations & Integrations (Advanced · 1h55 · 13) | Sandra Powell | Lessons 12.2, 12.6, 12.9 |
| System Administration IV: System Configuration (Advanced · 1h10 · 9) | Marcus Webb | Lessons 12.1, 12.7 |
| Transactions & Billing Operations (Intermediate · 1h03 · 9) | Tom Delgado | Module 3, PB-5 |
| Incident Reports Management (Intermediate · 34m · 5) | Diana Chen | Lesson 8.3 |
| Support & Help Desk (Beginner · 27m · 4) | Rachel Kim | Module 10 |
| Employee Management Advanced (Intermediate · 47m · 6) | Maria Santos | Module 7 |

## Appendix 4 — Glossary (as used in the live UI)

**Tenant / Customer Code** — the third login field; routes sign-in to the correct company database. **Command Center** — tenant home dashboard. **ML Command Center / Micrologic NOC** — cross-customer support cockpit. **Priority Intelligence** — Command Center triage feed (Critical / High Priority / Revenue Plays / Automations). **Customer 360** — the customer detail page. **Related chips** — the count pills (Vehicles, Transactions…) linking related records. **Retracts** — per-account equipment holds (e.g. Top Brush off). **Controller Code** — service ↔ tunnel-controller/POS mapping number. **Active Locations** — the tab defining where a record applies. **Configure per location** — the per-field gear override for site-specific values. **Security Level** — numeric gate incl. refund approval. **User Level** — role tier carrying security level + session timeout. **Containment Rate** — % of AI-agent conversations resolved without human handoff. **Handoff Queue** — Agent Console intake of escalated conversations. **Weather paused** — campaign/automation state at weather-affected locations. **Paid / Not Washed** — ticket state: paid but wash not yet delivered. **Site Watch** — legacy WashAssist term; not present live (parked).

---

*End of plan. Companion tracking files: 00-curriculum.md · DISCREPANCIES.md · PARKED-ITEMS.md · RECORDS-CREATED.md.*
*Verified against demo.washcentral.com on July 8, 2026. v1.2 — bump on every re-verification.*


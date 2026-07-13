# Drifted / blocked lessons — batch-fix tracker

The demo site changed under several builder-authored lessons. The daemon produces every clean
lesson and SKIPs these. Each needs per-lesson re-authoring against the CURRENT site (probe on CDP
9224, correct only the broken selectors/preflight/predicates, keep steps + locked narration
timing unchanged, verify a clean rehearse). Never fake a selector or narrate a value the screen no
longer shows.

## Module 12 — Settings was REDESIGNED (biggest impact)
Root cause (probe-verified): settings.html home is now a new `sw-app` launcher — the classic
`aside.sidebar > #sidebar-menu.settings-nav-v2` is `display:none` there, so the old
gearBtn -> railToggle -> `sidebarExpanded` preflight can never expand it. The working nav now lives
on the settings-*.html SUB-pages: expand via a genuine press on `#wc-rail-panel-toggle` (removes
`.app.sidebar-collapsed`, sidebar -> ~220px), open a group via `button.menu-header` (e.g. "General"),
links are `.submenu a`, close is `a.menu-header.settings-close-btn` (label now "Exit settings").
Search box `#sh-search` -> `#sw-search`. Home rail is `.sw-rail-list` (16 categories, badge counts;
real total pages now 95), right pane `.sw-body`.

- **WC-12-01 — BLOCKED (needs user decision).** Its LOCKED narration (p06-p10) reads "Sixteen
  categories, ninety two pages" and sweeps a 16-card grid + a top-right counter (`.sh-tally`,
  `.sh-grid`, `.sh-card`, `settingsHomeReady`) that the redesign DELETED. Real total is 95 and there
  is no aggregate counter. Cannot be produced faithfully without RE-RECORDING narration = user
  sign-off required (same class as WC-01-03). Do NOT fake the number.
- **WC-12-02 — BLOCKED (needs user decision). Detail-page tab redesign.** The nav relocation works,
  but the location record (settings-account-info-detail) was rebuilt from **5 tabs to 10** with new
  labels ("Company Details", "Address & Contact", "Time & Scheduling", "Operations & Features",
  "Payments & Refunds", "Portal & Online", "Messages & Notifications", "VIP & Memberships",
  "Employee & Security", "House Accounts & Misc"). The LOCKED narration explicitly says "One location,
  **five tabs**. Profile, Operations, Payments and Credentials, Messaging, and Users" and "one
  **five-tab** record" and walks each by name (s04–s09). You cannot re-point a selector when the
  narration names AND counts the tabs — producing it shows 10 renamed tabs under "five tabs: Profile,
  Operations…". Re-record required = user sign-off. Do NOT fake.
- **WC-12-03..08** — relocate the group-expand onto the relevant sub-page (mechanism above). CAUTION:
  a lesson that opens a RECORD and narrates its tabs by name/count is a re-narration blocker if that
  detail page was tab-redesigned — verify the live tabs match the narration before producing (a
  selector re-point that clicks a renamed tab ships an UNFAITHFUL video; rehearse won't catch it).
  List-only tours (12-05 hardware, 12-06 users, 12-07 operations — no tab-naming) are safely fixable.
  12-03 (service detail: narration "two tabs, Service Main and Active Locations"), 12-04 (payment
  detail: "an Active Locations tab"), 12-08 (portal/AI: "Three tabs… Authentication… five tabs") are
  HELD pending live-tab verification.
- **WC-12-09** — starts on settings-integrations-zoho.html; live tabs are **"Settings" + "Instructions"**,
  which MATCH the narration ("two tabs… Settings tab") — NOT a tab blocker. The `groupsCollapsed`
  assert failure is a sub-page group-predicate issue; re-author the predicate and it is producible.

## Other drifted lessons
- **WC-09-02** (Digital: Mobile App Pages) — mobile-users.html / settings-mobile-branding.html do not
  render their app shell in headless Chrome (app stays display:none even with SW cleared + 9s;
  raw HTML is 200/valid). Needs investigation (mobile viewport/UA?) or is a demo-site limitation.
- **WC-10-03** (Zoho Help Desk) — `integCard` (`.sh-card-name` "Integrations") not found on the
  nav pages; the Integrations card moved/renamed. Re-probe the settings/help-desk flow.
- **WC-10-04** (System Alerts) — QA check 25 teleport: move offset `[1350,0]` pushes the cursor to
  x=2467 (off-screen, viewport 1920) then glides back 94px/step. Re-probe the "Active column" x and
  reduce the sweep offset so the cursor stays on-screen.
- **WC-02-03** (Edit/New Customer) — `sideCustomers` intermittent: the customer-detail sidebar
  sometimes doesn't rebuild after the cancelTop nav. Add a settle/retry so the sidebar link resolves.
- **WC-02-05** (House Accounts) — CONFIRMED LOCKED-NARRATION BLOCKER (agent-probed 4 accounts). Block
  s07 narrates "Three chips carry the terms: net thirty, a ten thousand dollar limit, fourteen
  vehicles" but house-account details NEVER render badge chips (`.a-badges` always empty) and have no
  Net-30 / Credit-Limit anywhere — only 1 of 3 spoken values (14 vehicles) has any on-screen referent.
  Cannot be produced faithfully; needs re-cut of block s07 or a different account type = user sign-off.

## End-stage deferred blockers (raise at the very end)
- WC-00-02 — sign-in lesson; login.html de-auths the shared profile; needs special sequencing.
- WC-01-03 — narration speaks stale state; re-render decision = user sign-off.

## User-decision blockers (summary — need human sign-off, cannot be produced faithfully as-is)
The demo site was redesigned after the narration was locked, desyncing some approved audio from the
live UI. These CANNOT be produced without re-recording narration (user sign-off) or a product decision:
- WC-12-01 — "ninety two pages" counter + 16-card grid deleted by the Settings redesign.
- WC-02-05 — s07 "net thirty / ten thousand dollar limit" chips never render on house accounts.
- WC-01-03 — narration speaks stale state (pre-existing deferred).
- WC-00-02 — sign-in lesson; login.html de-auths the shared profile (needs sequencing).
- WC-09-02 — mobile pages (mobile-users / settings-mobile-branding) don't render their app shell in
  headless Chrome; likely needs a mobile viewport/UA or is a demo-site limitation.

## Config-drift batch findings (agent, 2026-07-13)
- **Stage-visibility artifact (not lesson drift):** a rehearse tab that is backgrounded
  (`document.hidden`, e.g. when stage 9224 accumulates many tabs) does NOT build CRM/LMS app-page
  sidebars or dashboards (`initAppBar` is visibility-gated). Settings/audit/reports pages build fine
  hidden. The daemon's isolated single-foreground-tab stages (9222/9223) are unaffected — so a
  lesson that only fails a rehearse on a polluted 9224 is not necessarily drifted.
- **WC-13-02** — FIXED (no change; transient). **WC-02-03** — settle/retry gate added
  (`detailSidebarReady`), verify on daemon stage. **WC-14-01** — NOT drifted (visibility artifact +
  shared-pref race); the `#wc-rail-panel-toggle` expand mechanism is current.
- **WC-PB-01/02/03/08/09/10 — BLOCKED: need re-authoring for the sw-app Settings redesign.**
  `settings.html` home is now the `app sw-app` launcher (16 `.sw-cat` categories + `.sw-body` links);
  the classic `aside.sidebar` is `display:none` there and **`.sh-card` is GONE (0 present)** — so
  `usersCard`/`hwCard`/`autoAccordion`/`setAutomationHdr`/`submenuOverview`/`usersHeader` all target
  removed/hidden elements. The classic 17-group sidebar (`button.menu-header`+`.submenu a`, close via
  `a.menu-header.settings-close-btn` "Exit settings") works only on `settings-*.html` SUB-pages.
  Customer-portal hub uses `a.a-chart-card` (Branding, Features, Access & Security, Content). WC-PB-01
  also references undefined targets/predicates (usersHeader/usersSubmenuClosed/usersSubmenuOpen/
  linkSystemUsers). Narration names destination pages, so faithful fixes exist but require reworking
  the click choreography (launcher rail→body, or relocate group-expand onto a sub-page) + targets +
  predicates — a re-authoring, not a selector swap. Risk of narration/timing/callout desync; do NOT
  blind-rewrite.

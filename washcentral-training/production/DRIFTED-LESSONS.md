# Drifted / blocked lessons — batch-fix tracker

The demo site changed under several builder-authored lessons. The daemon produces every clean
lesson and SKIPs these. Each needs per-lesson re-authoring against the CURRENT site (probe on CDP
9224, correct only the broken selectors/preflight/predicates, keep steps + locked narration
timing unchanged, verify a clean rehearse). Never fake a selector or narrate a value the screen no
longer shows.

## CORRECTED ROOT-CAUSE DIAGNOSIS (2026-07-14) — supersedes the "session modal" conclusion
Two prior conclusions were WRONG and must not drive future work:

1. **There is NO undismissable "server-side session-idle modal" blocking production, and NO human
   login is required to unblock.** Ground-truth screenshots (Page.captureScreenshot on stage 9223)
   show `command-center.html` and the other content pages render **completely clean** — fully
   styled, no dialog. The "still there / stay logged in" element DOES exist in the DOM on every
   page, but it is **occluded and never painted** (elementFromPoint at its own rect returns the
   page content behind it; there is no big visible overlay). The predicates that reported it as
   present —
   `[...document.querySelectorAll('*')].some(e=>/still there/i.test(e.textContent||'')&&e.getBoundingClientRect().width>0)`
   — are **false positives**: HTML/BODY ancestors always have width>0 and their textContent
   contains the hidden element's text, so the check trips on a modal that is not on camera. The
   engine's preflight `dismissIdle` already handles the real thing off-camera ("dismissed idle
   session dialog" appears in every clean rehearse). Do not gate any predicate on `/still there/`
   whole-page text; if a visibility check is needed, hit-test the element itself
   (`document.elementFromPoint(cx,cy)` returns the modal/button) — not ancestor textContent.

2. **The real systemic blocker is a comprehensive app-wide UI redesign shipped AFTER narration was
   locked.** Confirmed live (2026-07-14):
   - **Left nav: `aside.sidebar` → `#wc-rail` rail (app-wide, not just Settings).** The classic
     `aside.sidebar` still exists but now holds only the brand/context header (`.brand`,
     `.wc-ctx-hdr`) with **zero nav links**. Nav moved to `#wc-rail` (`.wc-rail-item.has-sub`
     buttons + `.wc-rail-label`); a section's links appear as `a.menu-header[href=...]` inside a
     `.menu` panel that is auto-expanded for the current section (e.g. on crm-customer-detail the
     CRM group is open and `a.menu-header[href="crm-customers.html"]` "Customers" is visible by
     default). Any lesson whose targets/predicates use `aside.sidebar a` is DEAD and needs
     re-pointing to `a.menu-header[href=...]`. WC-02-03's `sideCustomers`/`detailSidebarReady`
     were fixed this way (2026-07-14).
   - **LMS `lms-home.html` is gated by a mandatory "Who's learning?" persona-picker modal** (NOT a
     session modal): "Pick the employee whose training you're viewing." with an employee search +
     list, backdrop `.wc-cmd-overlay`. **Escape and backdrop-click do NOT dismiss it**; it requires
     selecting an employee (a data-touch: "Progress is saved to their record"). So WC-14-01/02 and
     WC-15-01 (which use lms-home as a backdrop) need either a different clean backdrop or a
     persona selection — a re-author/product decision, not a predicate tweak. (The earlier
     "lms-home session-idle modal" note below is superseded: the visible LMS modal is this
     persona-picker.)
   - **customer-detail tabs renamed/restructured** (see WC-02-03 below).

   **Bottom line:** production is NOT waiting on an external human login. It is waiting on (a)
   per-lesson re-authoring against the rail/launcher/persona redesign, and (b) genuine
   locked-narration decisions where the redesign renamed/deleted UI the approved audio names.

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
- **WC-PB-04** (Payment Declines) — RECLASSIFIED 2026-07-14: **locked-narration blocker.** Surface
  fixes found + applied: (1) command-center body shortened, so the step-2 keyboard scroll (11
  ArrowDowns → y=440) fell short of the `ccScrolledFeed` (>=550) gate; bumped to 16 ArrowDowns
  (verified: `key`+feed log-rects now pass). (2) `setLocationsHeader`/`sideLocations` use the dead
  `aside.sidebar` nav. BUT the s09/s10 narration (141–175s) is desynced: p43 "read its **Payments
  and Credentials tab**" — no such tab (location detail rebuilt to 10 tabs: Company Details,
  Address & Contact, Time & Scheduling, Operations & Features, Payments & Refunds, Portal & Online,
  Messages & Notifications, VIP & Memberships, Employee & Security, House Accounts & Misc); p44 "the
  processors sit in named blocks: **Open Edge, Smart Tech, Other, and Card Connect**" — none present
  (verified false); p41/p47 "**Payment Credential Approval**" side-menu gate — not present. Cannot
  be produced faithfully; needs a re-cut of s09/s10 = user sign-off. Scroll fix kept in config.
- **WC-10-04** (System Alerts) — QA check 25 teleport: move offset `[1350,0]` pushes the cursor to
  x=2467 (off-screen, viewport 1920) then glides back 94px/step. Re-probe the "Active column" x and
  reduce the sweep offset so the cursor stays on-screen.
- **WC-02-03** (Edit/New Customer) — RECLASSIFIED 2026-07-14: **locked-narration blocker.** Two
  separate drifts. (1) FIXED: `sideCustomers`/`detailSidebarReady` used the dead `aside.sidebar a`
  nav; re-pointed to `a.menu-header[href="crm-customers.html"]` (the rail; present by default on
  the CRM detail page). (2) BLOCKER: the customer-detail tabs were renamed/restructured — live tabs
  are now **Overview, Operations, Payments, Activity, Messaging, Notes** (no "Communication",
  "Contact", "Membership", "Vehicles", or "Comments" tab). Locked narration p13 says **"Messaging
  turns into Communication, Notes into Comments"** and the tab-walk (s03, ~28–40s) targets
  `tabContact/tabMembership/tabVehicles/tabCommunication/tabComments`. Producing it would point at a
  tab labeled "Messaging" while the audio says it is now "Communication" — a direct visual/audio
  contradiction. Cannot be produced faithfully; needs a re-cut of the s03 field-mapping block =
  user sign-off. Do NOT re-point tab targets to the renamed tabs (ships an unfaithful video).
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

## LMS / Academy lessons — lms-home idle-modal blocker (2026-07-13)
WC-14-01, WC-14-02, WC-15-01 start on / touch `lms-home.html`. In this headless environment the
LMS page surfaces a full-screen "Still there?" session-idle modal (fixed overlay, visible) that
CANNOT be dismissed: synthetic click, real CDP click on "Stay Logged In"/"Stay Active", re-sign via
signin-token, localStorage clear + fresh login, and a fresh Chrome relaunch all leave it up on
lms-home (command-center is clean after fresh login — the modal is lms-home-specific). The token
sign-in authenticates the main app but the LMS/Academy page still shows the modal, blocking the
pre-roll pageIntact/dashLoaded asserts. No module-14 lesson has ever produced. Additional per-lesson
drift also present: WC-14-01 dashLoaded expected 4 .lms-stat (still 4) + .lms-hero (GONE) + 6
.lms-course-card (GONE, now ~2 generic cards); WC-14-02 sideAdminDash link covered by a bare full-
page DIV; WC-15-01 pageIntact card-count relaxed (committed) but still blocked by the modal.
Classify as an environment/demo-site limitation (same class as WC-09-02 mobile pages) pending a way
to keep the LMS session alive or dismiss the modal.

## CONSOLIDATED TRIAGE LEDGER — all remaining blocked lessons (2026-07-14, 3-agent + live-probe)
Full classification of the 21 SKIP'd lessons after the corrected diagnosis. Categories:
PRODUCIBLE-REPOINT = config-only fix, narration stays faithful (I produce these).
NARRATION-BLOCKER = locked audio names/counts UI the redesign renamed/deleted/re-counted; cannot be
produced faithfully → needs a re-recorded narration block + USER SIGN-OFF (never fake).
ENV-LIMITATION = blocked by environment/demo behavior no config edit can faithfully work around.

### PRODUCIBLE-REPOINT (config-only; being produced)
- **WC-15-01** — DONE 2026-07-14 (backdrop lms-home→reports.html; doc-over, names no backdrop UI).
- **WC-PB-02** — settings launcher re-point (.sw-cat→System Users) + preflight fix. In production.
- **WC-PB-01** (Login Failures) — narration generic ("under Settings", "Audit → User Activity").
  Re-point `.sh-card` usCard + `aside.sidebar a.menu-header` audit links to the sw-app launcher +
  `a.menu-header[href=audit-users.html]`; AUTHOR the undefined targets usersHeader/linkSystemUsers/
  usersSubmenuOpen/usersSubmenuClosed. Live-verified: System Users table has exactly 8 columns
  (matches p19 "Eight columns": User Name, User Code, User Level, Email, Phone, Active, SSO, Last Login).
- **WC-PB-03** (POS Down) — re-point `aside.sidebar a[href]` NOC/Alerts → `a.menu-header[href=...]`,
  `.sh-card` Hardware → launcher; Hardware/Terminals is a list-only tour (no tab-naming). Pre-existing
  data residuals (p71 ticket columns, p52 Terminals column) are separate, not redesign.
- **WC-PB-08** (Campaign Stopped) — re-point `aside.sidebar` Deliverability/Task-Scheduler/Mass-SMS +
  relocate Automation group-expand onto a settings sub-page. Data residuals p02/p45 pre-existing.
- **WC-PB-09** (Reports Wrong) — re-point `aside.sidebar` Settings→Automation→Task-Scheduler; rail +
  reports panel already current. Data residual p03 ("three on a schedule") pre-existing.
- **WC-PB-13** (Integration Down) — only the settings-landing hop drifted (Users & Security accordion
  now launcher); re-point via launcher `.sw-cat`→sub-page. Zoho tabs + SSO/Last-Login columns persist.

### NEEDS-LIVE-CHECK (may be producible; verify the drifted demo states first)
- **WC-PB-10** (Portal/Mobile Login) — selectors already current, but depends on mobile-users.html
  rendering (see WC-09-02) + many named live values (p07/p08/p20/p39/p43) to re-confirm.
- **WC-PB-14** (Broken Page/404) — `.sh-card` LogicPOS gone + `aside.sidebar` dead AND all three demo
  states drifted: support-alerts.html now LOADS (was the 404 example, p14-15) and Terminals now loads
  its rows (contradicts p29-30 "Failed to fetch"). The lesson's live demonstrations no longer exist.

### NARRATION-BLOCKER — needs re-recorded narration + USER SIGN-OFF (cannot produce faithfully)
- **WC-02-03** — p13 "Messaging turns into Communication, Notes into Comments"; live tabs are the
  opposite (Messaging/Notes). (sidebar re-point applied; lesson held.)
- **WC-02-05** — s07 "Three chips: net thirty / $10,000 limit / 14 vehicles"; `.a-badges` renders
  empty on house accounts; only "14 vehicles" has a referent.
- **WC-12-01** — p06-10 "Sixteen categories, ninety two pages" + 16-card grid/counter deleted (real 95).
- **WC-12-02** — "One location, five tabs… Profile, Operations, Payments and Credentials, Messaging,
  Users"; location detail rebuilt to 10 differently-named tabs.
- **WC-12-08** — p55 "Seventy eight percent" containment over a live "—" dash; p79 named test-send
  controls absent; p68 "five tabs" unverified. (Selectors already current.)
- **WC-PB-04** — s09/s10 "Payments and Credentials tab" + processors "Open Edge/Smart Tech/Other/Card
  Connect" + "Payment Credential Approval" all removed. (scroll fix applied; lesson held.)
- **WC-PB-06** — p07 "the Membership tab" + p17 "the Vehicles tab" — both deleted from customer-detail.
- **WC-PB-07** — p02 "nine tabs" (now 6) + p07/p70 "the Membership tab" (deleted).
- **WC-PB-12** — p46 uptime/latency tiles + p48 test controls absent; p17 "seven open" over an empty
  escalations queue.
- **WC-01-03** — narration speaks stale state (pre-existing deferred).

### ENV-LIMITATION (no faithful config workaround)
- **WC-09-02** — mobile-users/settings-mobile-branding app shell stays display:none in headless
  Chrome; pre-roll can't pass. One unproven lever: a mobile viewport/UA in capture (live test).
- **WC-14-01** — enters lms-home (persona-picker gate); narration requires "My Dashboard" tour; also
  p34 "Six courses"/hero may conflict if the grid was redesigned (verify past the gate).
- **WC-14-02** — opening p02-p11 locked to the learner dashboard behind the same persona gate; dead
  aside.sidebar selectors too.
- **WC-00-02** — sign-in lesson; login.html de-auths the shared profile (needs special sequencing).

**Net producible without user sign-off:** WC-15-01 (done), WC-PB-01/02/03/08/09/13 (re-point), and
possibly WC-PB-10/14 pending live checks — up to ~9 lessons. **Needs user sign-off (re-record):** 10
narration blockers. **Env-limited:** 4.

## PRODUCTION UPDATE (2026-07-14, this session) — 55/70 produced
Corrected the diagnosis and produced 6 previously-blocked lessons through the re-point patterns:
- **DONE (QA 33/33, committed):** WC-15-01 (backdrop→reports.html), WC-PB-02, WC-PB-03, WC-PB-08,
  WC-PB-09, WC-PB-01 — all via the sw-app-launcher / #wc-rail re-point patterns.
- **WC-PB-13 — CONFIG-COMPLETE, infra-blocked.** All nav re-points done + verified (rehearse passes;
  record reached the end). Two fixes added: supportReady wait 9s→15s (IT&Support menu builds slower
  under record load), sidebarIntegrations viewport constraint relaxed to click-point-on-screen. The
  ONLY remaining blocker is INTERMITTENT: settings-integrations.html (its startUrl) periodically
  fails to fetch styles.css/bootstrap through the egress proxy (UNSTYLED after 5 reloads; a live
  probe confirmed the page hangs during the flake). It will produce on a retry when that page loads
  cleanly — the daemon just needs its SKIP cleared during a good window (watchdog does this).
- **Still autonomously-uncertain:** WC-PB-10 (mobile-users headless render + many live data values),
  WC-PB-14 (all three of its live demo states drifted: support-alerts + terminals now LOAD, negating
  the "Failed to fetch" narration — likely a narration blocker, verify live).
- **Unchanged — need USER SIGN-OFF (locked-narration re-record):** WC-02-03, WC-02-05, WC-12-01,
  WC-12-02, WC-12-08, WC-PB-04, WC-PB-06, WC-PB-07, WC-PB-12, WC-01-03.
- **Unchanged — environment-gated:** WC-09-02 (mobile shell headless), WC-14-01/02 (lms-home persona
  gate), WC-00-02 (login.html de-auth).

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
- **WC-12-02..08** — start on settings.html and operate the sidebar there; re-author to relocate the
  group-expand onto the relevant sub-page using the mechanism above. Narration does NOT reference the
  deleted home elements (checked), so they are re-authorable without re-narration.
- **WC-12-09** — starts on a sub-page (settings-integrations-zoho.html); fails a later `groupsCollapsed`
  assert — re-author with the sub-page group mechanism.

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
- **WC-02-05** (House Accounts) — the badge chips (`.a-badges .a-chip` chip1/2/3) the lesson points at
  and narrates (p34-p35) are EMPTY on house-account details (only `.a-related-chip` exist). Likely a
  content mismatch; may need re-target to related chips or re-authoring — check narration.

## End-stage deferred blockers (raise at the very end)
- WC-00-02 — sign-in lesson; login.html de-auths the shared profile; needs special sequencing.
- WC-01-03 — narration speaks stale state; re-render decision = user sign-off.

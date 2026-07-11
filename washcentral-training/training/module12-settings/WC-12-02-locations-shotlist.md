# WC-12-02 — Locations · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-12-02-locations-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (14 steps). Two parts: Part 1 = steps 1–6, Part 2 = steps 7–14; hold a beat at the boundary after step 6.
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start with **Settings** open at `demo.washcentral.com/settings-locations.html`.
- [ ] Confirm the **Locations** list shows real rows before rolling. If it shows "Couldn't load locations (Failed to fetch). Check your connection to the AI agent service." (seen in the July 9 capture), stop, reconnect the agent service, and re-verify. Do not record the error state. Same check for **Location Groups** and **Sub-Brands**.
- [ ] Confirm a location row opens a detail with the five tabs **Profile · Operations · Payments & Credentials · Messaging · Users** before recording steps 4–10. The detail page was not captured in the July 9 corpus; the five tab names come from the project screen map (DISCREPANCIES.md #23). If the detail does not open or the tabs differ, stop and report; do not improvise.
- [ ] Snagit: cursor highlight ON, click animation ON. On-screen keystroke display not needed (navigation and reading only, no shortcuts).
- [ ] This lesson is read-only: **+ New Record** is located but never clicked, no field is edited, no credential value is copied, and every detail is left by **← Back** or **Cancel**. Add a STOP callout over **+ New Record** on every list, and a STOP callout over the credential blocks on step 7.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then read. All navigation stays inside Settings; nothing is edited and no value is copied.

### Part 1 — the Locations list, Profile, and Operations

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open on **Locations**; slowly sweep the cursor to the left sidebar and rest on the expanded **Locations** group | The **Locations** group is open to four pages: **Locations**, **Location Groups**, **Location Sub-Brand**, **Payment Credential Approval**; the header **Locations▾** dropdown reaches the same four | 3s | Callout ① bracketing the four sidebar links; note "one group, four pages" |
| 2 | Point across the KPI band, then the three panels below | Tiles **Total Locations**, **Active**, **States**, **Last Sync** (6 · 6 · 2 · Today in the July 9 capture); panels **Location Growth Trend**, **Location Breakdown** (by state), **Location Status** (config health) | 4s | Callout ② along the four tiles; slow left-to-right sweep (~2s); zoom-in 130% on the **Location Breakdown** panel (1.5s) |
| 3 | Point across the **Locations List** header row, left to right | Card **Locations List**; columns **CODE · NAME · ADDRESS · CITY · STATE · ZIP · PHONE · LAST SYNC**; search "Search locations…"; **Filters** and **Search** to its right; **+ New Record** top-right | 4s | Callout ③ along the column header; slow horizontal sweep (~2.5s); STOP callout with red ring over **+ New Record** |
| 4 | Click one location row to open its detail | The location detail opens with five tabs: **Profile · Operations · Payments & Credentials · Messaging · Users**; **Profile** is active | 4s | Callout ④ bracketing the five tabs "one site, five tabs"; hold steady on the tab strip; zoom-in 120% on the tab row (1.5s) |
| 5 | Rest on the active **Profile** tab; sweep the cursor down its content | **Profile** shows the site's identity and address (code, name, address, contact, hours) | 4s | Callout ⑤ "who and where"; slow vertical sweep (~2s); do not click into any field; read the live labels as they render |
| 6 | Click the **Operations** tab; sweep down to the time-clock area | **Operations** shows site-behavior flags and time-clock/payroll settings, including the automatic clock-out timeout and the overtime threshold | 5s | Callout ⑥ ringing the clock-out timeout and OT threshold (Exercise 12.2a-A "read, don't change"); hold on those two fields; PART 1 ENDS — hold a beat before Part 2 |

### Part 2 — Payments & Credentials, Messaging, Users, and the sibling pages

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 7 | Click the **Payments & Credentials** tab; sweep down to the **CREDENTIAL CONFIGURATION** section | The tab shows portal and auto-charge options and a **CREDENTIAL CONFIGURATION** section with per-gateway blocks: **OPENEDGE**, **SMARTTECH**, **OTHER**, **CARDCONNECT**; every secret renders masked | 5s | Callout ⑦ tagging the four gateway blocks (Exercise 12.2a-B "name the blocks only"); STOP callout with red ring across the masked value fields "never copy, never edit"; do not click into any credential field |
| 8 | Click the **Messaging** tab | **Messaging** shows the per-location message settings | 3s | Callout ⑧ "per-site messages"; read only; do not open or send anything |
| 9 | Click the **Users** tab | **Users** lists who has access to this location | 3s | Callout ⑨ "who can work this site"; read only; do not open a row |
| 10 | Click **← Back** (or **Cancel**) to leave the detail | Returns to the **Locations** list with nothing changed | 2s | Callout ⑩ "read-only: nothing saved"; confirm no Save was clicked; note credential changes route through Payment Credential Approval |
| 11 | In the sidebar, click **Location Groups** | **Location Groups** page; card **Location Groups List**; columns **NAME · DESCRIPTION · LOCATIONS · GEO GROUP · ON DASHBOARD**; tiles **Total Groups · Locations Grouped · Shown on Dashboard**; search "Search location groups…" | 4s | Callout ⑪ on the five columns "bundles sites"; STOP callout over **+ New Record** |
| 12 | In the sidebar, click **Location Sub-Brand** | Page titled **Sub-Brands** (link **Location Sub-Brand**); card **Sub-Brands List**; columns **PANEL TYPE · TITLE COLOR · PRICE BOX COLOR · CARD BOX COLOR**; tile **Total Configs**; search "Search sub-brand panel configs…" | 4s | Callout ⑫ noting link vs page title; "styles the customer panels"; STOP callout over **+ New Record** |
| 13 | In the sidebar, click **Payment Credential Approval** | Page **Location Payment Credential Approval**; card **Location Payment Approval List**; columns **LOCATION · GATEWAY · STATUS · SUBMITTED · APPROVED BY**; tiles **Pending · Approved · Rejected · Locations** (1 · 6 · 0 · 6); rows MLAS and SSNB on OpenEdge, status **Approved** | 5s | Callout ⑬ on the STATUS column "where credential changes are signed off"; zoom-in 130% on the STATUS chips (1.5s); STOP callout over **+ New Record**; do not open a row |
| 14 | Slowly sweep the sidebar across the four Locations pages one last time | Recap state: **Locations** (site list + five-tab detail), **Location Groups** (bundles), **Location Sub-Brand** (panel styling), **Payment Credential Approval** (credential sign-off) | 3s | Callout ⑭ mapping each page to its job; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 5:35 (estimated narration total ~335s at ~145 wpm plus break time, pending render). If any unexpected dialog, the "Still there?" idle prompt, a "Couldn't load" error, or changed data appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment. Do not improvise, do not click **+ New Record** or **Save**, do not open a detail beyond reading it, and never copy a credential value at any point.

## If Claude drives while you record

This lesson is read-only navigation into one location detail and three sibling pages. When a live browser and credentials are available, I can execute steps 1–14 with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. No form is saved, no row on the sibling lists is opened, **+ New Record** is only located, and no credential value is copied. Say "drive lesson 12-02" when you're rolling.

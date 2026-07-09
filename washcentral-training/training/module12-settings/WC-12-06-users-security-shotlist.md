# WC-12-06 — Users & Security (support-critical) · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-12-06-users-security-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (14 steps).
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start with **Settings** open at `demo.washcentral.com/settings-system-users.html`.
- [ ] Confirm each of the four lists shows real rows before rolling. If a list shows "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." (seen in the July 9 capture), stop, reconnect the agent service, and re-verify. Do not record the error state.
- [ ] Snagit: cursor highlight ON, click animation ON. On-screen keystroke display not needed (this lesson is navigation and reading only, no shortcuts).
- [ ] This lesson is read-only: **+ New Record** is located but never clicked, and no row is opened. Add a STOP callout over **+ New Record** on every page.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then read. All navigation stays inside Settings; nothing is edited.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open on **System Users**; slowly sweep the cursor to the left sidebar and rest on the **Users & Security** group | The **Users & Security** group is expanded (lock icon) to three pages: **System Users**, **Security Level**, **Blacklisted** | 3s | Callout ① bracketing the three sidebar links; note "three of four live here" |
| 2 | Point across the **System Users List** header row, left to right | Card **System Users List**; columns **USER NAME · USER CODE · USER LEVEL · EMAIL · PHONE · ACTIVE · SSO · LAST LOGIN**; **Total Users** tile on top; search "Search by name, code, or email…"; **+ New Record** top-right | 4s | Callout ② along the column header; slow horizontal cursor sweep (~2.5s); STOP callout with red ring over **+ New Record** |
| 3 | Hover the four support columns in turn: **ACTIVE**, **SSO**, **LAST LOGIN**, **USER LEVEL** | Same page; cursor rests briefly on each of the four headers | 4s | Callout ③ tagging the four columns "login triage: on? SSO? last in? role?"; zoom-in 130% on ACTIVE/SSO/LAST LOGIN (1.5s) |
| 4 | Point to the search box, then the **Total Users** tile | Search reads "Search by name, code, or email…"; **Total Users** tile visible (real count when live; "—" only if the list failed to load) | 3s | Callout ④ "search, don't scroll"; if recording live with data, hold on the real count; do NOT type in the box |
| 5 | In the sidebar, open the **Automation** group and click **User Levels** | **Automation** expands to **Task Scheduler · Task Parameters · Mass SMS Log · User Levels**; **User Levels** page opens with card **User Levels List** | 4s | Callout ⑤ "filed under Automation, not Users & Security"; brief arrow from the Automation group to User Levels |
| 6 | Point across the **User Levels List** header row and the three tiles | Columns **NAME · SECURITY LEVEL · SESSION TIMEOUT (MIN)**; tiles **Total Levels · Max Security Level · Longest Timeout (min)**; search "Search user levels…" | 3s | Callout ⑥ on the three columns; STOP callout over **+ New Record** |
| 7 | Slowly sweep down the level rows, resting on the **SESSION TIMEOUT (MIN)** column | Rows list the levels with their timeout; **Cashiers**, **Managers**, **Sr.Manager**, **Level 00**, **Level 01** read 5; office roles read 120 | 5s | Callout ⑦ ringing the 5-minute rows "why cashiers log out fast"; zoom-in 130% on the timeout column (2s); values per July 8 verified pass (see guide table) |
| 8 | In the sidebar, reopen **Users & Security** and click **Security Level** | **Security Levels** page opens (link **Security Level** → page **Security Levels**); card **Security Levels List**; columns **NAME · LEVEL · REFUND APPROVAL REQUIRED**; tiles **Total Levels · Require Refund Approval · No Approval Needed** | 4s | Callout ⑧ noting the singular link vs plural page title; STOP callout over **+ New Record** |
| 9 | Sweep down the rows, resting on the **REFUND APPROVAL REQUIRED** column | Low/LowMedium/Medium (levels 0/3/5) read **Yes**; HighMedium/High/SuperAdmin (levels 8/10/20) read **No** | 5s | Callout ⑨ "5 or under asks, 8 or over doesn't"; zoom-in 130% on the Yes/No column (2s); values per July 8 verified pass |
| 10 | Cursor gesture: point back to the **SECURITY LEVEL** column concept (no navigation) | Recap overlay ties **USER LEVEL** (System Users) → **SECURITY LEVEL** number (User Levels) → **REFUND APPROVAL REQUIRED** (Security Levels) | 4s | Callout ⑩ three-box chain graphic linking the pages; hold steady, no click |
| 11 | In the sidebar (Users & Security), click **Blacklisted** | **Blacklisted** page opens; card **Blacklisted Plates List**; columns **PLATE · TERMINAL · CREATED BY · CREATED**; **Total Blacklisted** tile; search "Search blacklisted plates…" | 4s | Callout ⑪ on the four columns; STOP callout over **+ New Record** |
| 12 | Point along one plate row's columns left to right | Row reads a plate, the terminal, who created it, and when (real row when live) | 3s | Callout ⑫ "who blocked it and when"; do NOT open the row; if no rows are visible live, hold on the empty-state text and note it |
| 13 | Rest the cursor near **+ New Record**, then pull away without clicking | Read-only recap: each page has **+ New Record**; support reads, admins edit in production; SSO resets live with the identity provider | 3s | Callout ⑬ "read-only: never edit here"; second STOP callout over **+ New Record**; confirm nothing was clicked |
| 14 | Slowly sweep the sidebar across the four pages one last time | Recap state: **System Users** (sign-in), **User Levels** (logouts), **Security Levels** (refunds), **Blacklisted** (plate blocks) | 3s | Callout ⑭ mapping each page to its ticket; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 4:49 (estimated narration total ~289s at ~145 wpm, pending render). If any unexpected dialog, the "Still there?" idle prompt, a "Couldn't load records" error, or changed data appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment. Do not improvise and do not click **+ New Record** or open any row at any point.

## If Claude drives while you record

This lesson is entirely read-only navigation. I can execute steps 1–14 live with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. No form is opened, no row is clicked, and **+ New Record** is only located. Say "drive lesson 12-06" when you're rolling.

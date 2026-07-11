# WC-PB-02 — PB-2 Surprise logouts / frozen session · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-PB-02-surprise-logouts-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (8 steps).
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/command-center.html`.
- [ ] Snagit: cursor highlight ON, click animation ON.
- [ ] Step 2 shows the idle warning. Either let the session sit idle until the **Still there?** dialog and **⏱ Session expiring soon** toast appear on their own, or capture that beat separately; do NOT click **Log Out Now**. For every other step the idle dialog must be dismissed (**Stay Logged In**, off camera) before rolling.
- [ ] Read-only throughout: never click **Log Out Now**, **+ New Record**, or any row; never open the **Edit** form. This playbook only reads two lists.
- [ ] On the July 9 corpus both **System Users** and **User Levels** returned "Failed to fetch. Check your connection to the AI agent service." with blank KPI tiles. If the list loads at record time, that is fine; if the banner is still showing, it is acceptable to record it (it is the real "frozen data" state and supports step 4), but note it in the take log. Per-level timeout values are read from WC-12-06 / the July 8 pass, not from screen.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. Pages open as full-screen list views; the idle dialog and toast are overlays.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | None — open on **Command Center**; hold the normal dashboard still | Command Center dashboard, nothing changed; breadcrumb **Dashboard › Command Center** | 3s | Callout ① framing the two ticket shapes: "keeps logging me out" vs "froze / went blank"; no navigation, no click |
| 2 | Let the session go idle (or cut to the captured beat) until the idle warning appears — do NOT click **Log Out Now** | Centered dialog **Still there?** shows **2:00 REMAINING** and "Your session will end in 2:00 due to inactivity. Move your mouse or press any key to stay logged in.", buttons **Stay Logged In** / **Log Out Now**; corner toast **⏱ Session expiring soon** with "Auto-logout in 2:00" and **Stay Active** | 3s | Callout ② on the 2:00 countdown; STOP ring over **Log Out Now** (do-not-click); zoom-in 150% on the dialog line (1.5s); after the hold, dismiss with **Stay Logged In** off camera before the next take |
| 3 | Open Settings, expand **Users & Security**, click **System Users**; hover the search box "Search by name, code, or email…" | **System Users** page, card **System Users List**; columns **USER NAME**, **USER CODE**, **USER LEVEL**, **EMAIL**, **PHONE**, **ACTIVE**, **SSO**, **LAST LOGIN**; **Total Users** tile; **+ New Record** top-right | 4s | Callout ③ on the **USER LEVEL** column header; slow cursor sweep along the header row, resting on **USER LEVEL**; do not open a row; STOP ring lightly on **+ New Record** (do-not-click) |
| 4 | Point to the list body and the **Total Users** tile (do not click) | List body reads "Couldn't load records (Failed to fetch). Check your connection to the AI agent service." and the **Total Users** tile reads "—" (July 9 state); if data loaded at record time, show the rows instead | 3s | Callout ④ "data-service, not empty — this is the frozen-screen branch"; zoom-in 150% on the banner (1.5s); if rows loaded, re-caption to "rows present at record time" in the take log |
| 5 | Expand **Automation** in the sidebar and click **User Levels** | **Automation** group opens (**Task Scheduler**, **Task Parameters**, **Mass SMS Log**, **User Levels**); **User Levels** page, card **User Levels List**; columns **NAME**, **SECURITY LEVEL**, **SESSION TIMEOUT (MIN)**; tiles **Total Levels**, **Max Security Level**, **Longest Timeout (min)**; search "Search user levels…" | 4s | Callout ⑤ "filed under Automation, not Users & Security"; then callout on the **SESSION TIMEOUT (MIN)** column header; zoom-in 150% on that header (1.5s) |
| 6 | Rest on the **SESSION TIMEOUT (MIN)** column; overlay the per-level reference | Reference (from WC-12-06 / July 8 pass): 5-minute levels **Cashiers**, **Managers**, **Sr.Manager**, **Level 00**, **Level 01**; **Anonymous** 20; **Administrator** and service/read-only 120. July 9 screen shows "Couldn't load user levels (Failed to fetch)…" with blank tiles | 4s | Callout ⑥ as a lower-third reference card listing the 5-minute levels; label it "July 8 verified pass · PARKED #9"; do NOT present it as on-screen data if the banner is showing |
| 7 | Point back to a single level's **SESSION TIMEOUT (MIN)** value; then to the idle-dialog stay controls | Resolution beat: a matching timeout means "explain it"; keep-alive is any key/mouse move, or **Stay Logged In** / **Stay Active**; **Log Out Now** is a real logout | 3s | Callout ⑦ "match = configuration, not a fault"; brief cut-back to the step-2 dialog to point at **Stay Logged In** and **Stay Active**; STOP ring stays on **Log Out Now** |
| 8 | None — overlay the escalation checklist; do NOT click **Log Out Now** or **+ New Record** | Escalation beat: rule out a device/browser switch first (attributed: sessions are device- and browser-bound), then capture **USER LEVEL** + configured **SESSION TIMEOUT (MIN)** + observed time-to-logout + device/browser; log a ticket to IT & Support with username (masked), tenant, timestamps. Exact firing threshold: TBD — parked (PARKED-ITEMS.md #9) | 4s | Callout ⑧ escalation checklist as a lower-third; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 3:02 (target ~3 min; final total set once narration is rendered). If any unexpected dialog, error, changed data, or an extra "Still there?" timeout prompt appears mid-take (outside step 2): stop, note it, dismiss off camera with **Stay Logged In**, resolve or park, then re-record the segment — do not improvise.

## If Claude drives while you record

Once a signed-in browser is available, I can execute steps 1–8 with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. The whole run is read-only: no row is opened, **Log Out Now** and **+ New Record** are never clicked, and the per-level timeout values are shown as an overlay reference (July 8 pass / WC-12-06 / PARKED #9), not asserted from a screen that may still read "Failed to fetch". Say "drive playbook PB-2" when you're rolling.

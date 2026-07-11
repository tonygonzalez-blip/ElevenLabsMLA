# WC-01-03 — Session Behavior and Timeouts · Snagit Shot List (operator-ready)

v1.1 · July 11, 2026 · Target output: **WC-01-03-session-timeouts-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (11 steps).
**Verified against demo.washcentral.com on July 11, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/command-center.html`.
- [ ] Snagit: cursor highlight ON, click animation ON, on-screen keystroke display ON (this lesson shows a keypress and a mouse move used to dismiss the dialog).
- [ ] The idle warning fires only after the session sits untouched for its timeout window; the exact idle time is parked #9. Plan to let the session sit idle until the **⏱ Session expiring soon** toast and the **Still there?** dialog appear, and capture BEFORE interacting. Do not fake the dialog; trim the dead idle time in the edit.
- [ ] Do NOT click **Log Out Now** (ends the session) at any point. Do NOT click **+ New Record** on the User Levels page (creates a record). Never let the countdown actually reach 0:00 on camera; dismiss with a mouse move / keypress or **Stay Logged In**.
- [ ] The User Levels list loads live on the credentialed July 11 pass (14 rows, tiles 14 / 20 / 120); record the real values. (The July 9 sweep had hit an agent-service token issue and showed "Couldn't load user levels (Failed to fetch)…" — resolved. If that error reappears, stop and reconnect before rolling; do not record the error state.) NOTE: narration block s08 speaks the blank-tile state and needs a re-render before assembly — see the narration file.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. The idle warning renders as a top-anchored dialog plus a corner toast over the page underneath; the page does not change.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open on Command Center; leave the mouse still and let the session sit idle until the warning fires | Normal dashboard, then, after the idle window, the warning appears over the page | 3s | Callout ① "warning appears after inactivity, over any page"; no cursor movement while waiting; cut the dead idle time in the edit |
| 2 | Point to the lower-corner toast (do not click) | Toast reads **⏱ Session expiring soon** with **Auto-logout in 2:00** and a **Stay Active** button | 3s | Callout ② on the toast; zoom-in 150% on the toast (1.5s) |
| 3 | Point to the centered dialog (do not click) | Dialog headed **Still there?** with **2:00 REMAINING** counting down and the line "Your session will end in 2:00 due to inactivity. Move your mouse or press any key to stay logged in." | 4s | Callout ③ on the heading + countdown; zoom-in 150% on the body line (1.5s); let the counter visibly tick |
| 4 | Indicate the two dialog buttons (do NOT click either) | **Stay Logged In** and **Log Out Now** | 3s | Callout ④ on both buttons; second STOP callout with a red "do not click" ring over **Log Out Now** |
| 5 | Hold on the dialog and let the counter run down a few seconds (do NOT let it reach 0:00) | Countdown continues toward 0:00; narration explains the auto-logout outcome | 3s | Callout ⑤ "at 0:00 the session ends → sign-in"; do NOT allow expiry on camera; firing threshold parked #9 |
| 6 | Move the mouse / press any key, or click **Stay Logged In** | Countdown stops; dialog and toast clear; back on Command Center, unchanged | 2s | Callout ⑥ "one move keeps you in"; show the keystroke / mouse move on screen; note **Stay Active** does the same |
| 7 | Open **Settings** (left-rail gear) → **User Levels** | **User Levels** page; breadcrumb **Settings › User Levels**; the entry sits under the **Automation** group in the sidebar | 3s | Callout ⑦ on the breadcrumb; note the sidebar grouping under **Automation** (plan says Users & Security — see guide note) |
| 8 | Sweep across the top KPI band | Three tiles: **Total Levels 14**, **Max Security Level 20**, **Longest Timeout (min) 120** (July 11 observed) | 3s | Callout ⑧ on the three tiles; narration s08 currently speaks the blank-tile state — re-render required before assembly |
| 9 | Point to the table column headers | Columns: **Name**, **Security Level**, **Session Timeout (min)** | 3s | Callout ⑨ on **Session Timeout (min)**; zoom-in 150% (1.5s) |
| 10 | Sweep down the **Session Timeout (min)** column | 14 rows, values from 5 to 120; Cashiers 5, Anonymous 20, MLAQA 100 (July 11 credentialed pass, matching July 8) | 4s | Callout ⑩ "per-level idle limit, by design"; values cross-referenced to parked #9 |
| 11 | Rest the cursor on the **Name** and **Session Timeout (min)** columns; do NOT click **+ New Record** | Recap state: match a user to their level under **Name**, then read its **Session Timeout (min)** | 3s | Callout ⑪ tying the diagnosis together; STOP callout with a red "do not click" ring over **+ New Record**; end card / stamp "Verified against demo.washcentral.com on July 11, 2026."; fade out |

Estimated runtime: about 3:13 (estimated narration total ~192.5s, pending render). If any unexpected dialog, error, changed data, or a second timeout prompt appears mid-take: stop, note it, dismiss off-camera, resolve or park, then re-record the segment. Do not improvise, and do not let the session actually expire on camera.

## Recording notes (remote/corpus authoring session)

This package was authored from the committed July 9 verification corpus (`verification/2026-07-09/digests/command-center.json` and `settings-user-levels.json`, plus the matching screenshots) and re-verified against the credentialed July 11 corpus (`verification/2026-07-11/digests/settings-user-levels.json`), which returned the live rows and tile values now quoted in steps 8 and 10; no live browser was available this session, so Claude cannot drive the take. The operator records against the live demo tenant. Two capture points span the run: the idle warning on **Command Center** (let it fire naturally, since the exact idle time is parked #9) and the **User Levels** table under **Settings**. Send-type and destructive controls are never triggered: **Log Out Now** and **+ New Record** are shown but not clicked, and the countdown is dismissed before it reaches 0:00.

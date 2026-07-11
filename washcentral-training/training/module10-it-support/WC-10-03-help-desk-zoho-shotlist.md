# WC-10-03 — Help Desk (Zoho) · Snagit Shot List (operator-ready)

v1.1 · July 11, 2026 · Target output: **WC-10-03-help-desk-zoho-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (10 steps).
**Verified against demo.washcentral.com on July 11, 2026.**

> **Narration note (July 11):** narration block s02 describes a bare Not Found page on **Help Desk (Zoho)**; the July 11 in-app capture shows the page renders its not-connected view instead. Block s02 needs a re-script and re-render before recording (all other blocks stand).

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/support-tickets.html` so the **IT & Support** sidebar is in view.
- [ ] Snagit: cursor highlight ON, click animation ON; no on-screen keystroke display needed (this lesson is mouse-only).
- [ ] Confirm the Zoho Desk integration reads **⚠ Not Configured** before rolling; do NOT connect or edit anything.
- [ ] Do not click **Test Connection** or **Edit Configuration** at any point (see step 9). On the Help Desk (Zoho) view, do not click **Refresh**, **← Settings**, or **Go to Zoho Desk Settings →** — the walk moves to Settings by the normal navigation in step 3.
- [ ] Reach **Help Desk (Zoho)** ONLY by the sidebar link; the direct URL 404'd on July 9 while the sidebar route renders the full not-connected view (captured July 11).

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. Step 2 lands on the not-connected embedded view by design; the em-dash counts and the empty-state card are the intended footage.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open the **IT & Support** rail; slowly sweep the cursor down the **SUPPORT** group | Sidebar SUPPORT group lists **ML Command Center**, **Site Detail (Demo)**, **Support Tickets**, **Help Desk (Zoho)**, **Knowledge Base**, **System Alerts**, **Training Requests**, with an **AUDIT** group below | 3s | Callout ① bracketing **Support Tickets** and **Help Desk (Zoho)** together; label "WashCentral tickets vs. embedded Zoho"; slow vertical sweep, no click yet |
| 2 | Click **Help Desk (Zoho)** in the sidebar | The embedded view loads: breadcrumb **Support › Help Desk Tickets**; header **Zoho Desk / Help Desk**, subtitle **Support Tickets · Not connected**, chips **Live View · Real-time · Live API**; **← Settings** and **Refresh** buttons; count placeholders **— Showing / — Open / — Pending / — Resolved / — More Available**; **Search tickets…**, status filter (**All Statuses**: Open, Pending, On Hold, Resolved, Closed), priority filter (**All Priorities**: High, Medium, Low); empty state **Zoho Desk not connected** — "Configure and authorize the integration to view tickets." with **Go to Zoho Desk Settings →** | 4s | Callout ② on the **Not connected** subtitle and the em-dash counts ("healthy frame, no connection"); zoom-in 130% on the empty-state card (1.5s); click nothing on this page |
| 3 | Navigate `Settings → Integrations → Zoho Desk` | Settings opens with **Integrations** selected in the left rail; breadcrumb **SETTINGS › Zoho Desk** | 3s | Callout ③ on the breadcrumb; this is where the empty state was meant to link |
| 4 | Point to the Zoho Desk header band (do not click the buttons) | Title **Zoho Desk** with a **Help Desk Integration** chip and a **⚠ Not Configured** status; subtitle **Support Tickets · Settings**; chips **OAuth 2.0**, **Live View**, **Server-side Token** | 3s | Callout ④ on **⚠ Not Configured**; zoom-in 150% on the status chip (1.5s) |
| 5 | Sweep across the four status tiles | **Connection** **Not set** · **Data Center** **US** · **Org ID** **—** · **Sync Direction** **both** | 3s | Callout ⑤ on **Connection Not set**; slow left-to-right cursor sweep across the four tiles (about 2s) |
| 6 | Point down the **CREDENTIALS** group on the **Settings** tab | **CLIENT ID —** · **CLIENT SECRET Not set** · **ORG ID —** · **DATA CENTER us** · **ACCESS TOKEN Not set** · **REFRESH TOKEN Not set** · **TOKEN EXPIRY —** · **ACCOUNTS SERVER —** | 4s | Callout ⑥ "no credentials, no tokens = no live link"; zoom-in 150% on **TOKEN EXPIRY —** (1.5s) and hold |
| 7 | Scroll and sweep the **GENERAL**, **ROUTING**, **SYNC**, **BEHAVIOR**, **MAPPING** groups | **GENERAL ENABLED Yes**, **DATA CENTER us**, **ADMIN NOTES —**; **ROUTING DEFAULT DEPARTMENT —**, **DEFAULT ASSIGNEE —**; **SYNC SYNC DIRECTION both**; **BEHAVIOR AUTO-CREATE CONTACTS Yes**; **MAPPING STATUS MAPPING —**, **SLA MAPPING —** | 4s | Callout ⑦ on **ENABLED Yes** next to **⚠ Not Configured** — "switched on in intent, not connected"; slow scroll |
| 8 | Point to the **Settings** and **Instructions** tabs (stay on Settings) | Page is on the **Settings** tab; an **Instructions** tab sits beside it | 2s | Callout ⑧ "setup steps live under Instructions — see WC-12-09"; do NOT open Instructions (content not captured) |
| 9 | Point to **Test Connection**, then **Edit Configuration**, top-right — do NOT click either | Both buttons visible top-right; neither is clicked | 4s | Callout ⑨ on the guardrail; STOP callout covering **Test Connection** AND **Edit Configuration** with a red "do not click" ring; hold, no click |
| 10 | Slowly return the cursor to the **⚠ Not Configured** status, then the **TOKEN EXPIRY** field | Recap state: **Help Desk (Zoho)** is the embedded Zoho view, empty because the integration is **⚠ Not Configured** with **Connection Not set**; **TOKEN EXPIRY** is the field to read when a connected tenant's tickets stop syncing | 3s | Callout ⑩ tying status to **TOKEN EXPIRY**; end card / verification stamp "Verified against demo.washcentral.com on July 11, 2026."; fade out |

Estimated runtime: about 3:10 (estimated narration total 190.3s, pending render; s02 re-script pending — see the note under the header). If any unexpected dialog, error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment — do not improvise. Step 2's not-connected view is expected and is not a re-roll trigger.

## If Claude drives while you record

I can execute steps 1–10 live in the browser with the timings above on request; you run Snagit (or any 1920×1080 MP4 screen recorder) on the window. **Test Connection** and **Edit Configuration** are never triggered — step 9 stops at the guardrail. Say "drive lesson 10-03" when you're rolling.

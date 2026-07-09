# WC-PB-03 — POS down / terminal offline · Snagit Shot List (operator-ready)

v1.0 · July 9, 2026 · Target output: **WC-PB-03-pos-down-v1.0.mp4** · MP4 (H.264) · 30 fps · **1920×1080 native, no scaling** · mic and system audio OFF (narration is ElevenLabs only)
Step numbers match the guide and the narration blocks one-to-one (14 steps).
**Verified against demo.washcentral.com on July 9, 2026.**

## Pre-roll checklist (not recorded)

- [ ] Display/capture region exactly 1920×1080; verify the first export's pixel dimensions before recording anything else.
- [ ] Clean browser profile, maximized, 100% zoom, bookmarks bar hidden, one tab, no extension badges; OS Do Not Disturb on.
- [ ] Signed in already (credentials never on camera); start URL: `demo.washcentral.com/command-center.html`.
- [ ] Snagit: cursor highlight ON, click animation ON.
- [ ] Location scope reads **All Locations▾**; nothing open (no command palette, no dropdown, no modal).
- [ ] Do NOT click create/submit/export controls at any point: **+ New Record** (Terminals, step 9), **Create Ticket** (NOC, step 7), **Create ticket** (Support Tickets, step 13), **Export** (Tickets, step 12). Record up to them and hold; never submit.
- [ ] Parked surfaces this pass: the Priority Intelligence **Open →** destination (step 4), **System Alerts** (404 on July 9, step 8), and the **Terminals** row data (failed to load, step 10). Capture what renders; do not stage or fake the missing content.

## Shots

Format: Step, action, expected state, hold, edit notes. "Hold" = seconds of stillness after the expected state renders. Move deliberately: cursor travel about 1.3s, hover about 1s, then click. Panels and lists load in place; when a surface 404s or fails to load, hold on what is actually on screen.

| Step | Action (exact target) | Expected state | Hold | Edit notes |
|---|---|---|---|---|
| 1 | Open **Command Center** from the left rail (or start there); slowly pan down to the **PRIORITY INTELLIGENCE** panel | Command Center dashboard: KPI band **Revenue Today / Active Members / Cars Washed / Decline Rate**, map, then the **PRIORITY INTELLIGENCE** panel below | 3s | Callout ① "start here; network problems surface first"; slow downward pan (about 2s); no click |
| 2 | Point to the **PRIORITY INTELLIGENCE** header and the **CRITICAL** group | Header reads "11 items · 4 urgent"; **CRITICAL** group at top with count 2 | 3s | Callout ② on the header + CRITICAL badge; zoom-in 150% on "11 items · 4 urgent" (1.5s) |
| 3 | Point to the top **CRITICAL** row (do not click) | Row reads "Henrico W Broad, VA — POS system offline / Card terminals down at peak window. On-site tech en route; queue forming." with a **Critical** chip and an **Open →** action | 4s | Callout ③ bracketing site + symptom + **Critical** chip; zoom-in 150% on the row (2s); this is check 1 |
| 4 | Hover the **Open →** link, then slide the cursor to the **ACTION OWNERSHIP** panel on the right; do NOT click **Open →** | **Open →** is the row's deep link (destination not captured, parked); **ACTION OWNERSHIP** shows the same site under **REGIONAL OPS**, "Due: next 30 min", **Urgent** chip | 3s | Callout ④ "who owns it"; STOP ring on **Open →** with "do not follow (parked)"; hold on ACTION OWNERSHIP |
| 5 | Left rail → **IT & Support** → **ML Command Center** | **Micrologic NOC** loads ("Micrologic NOC — Enterprise Command Center"); **2 CRITICAL** banner; tabs **Incidents 9 / Locations 43 / Customers 8** | 3s | Callout ⑤ on the NOC title + tabs; brief zoom on the tab row (1.5s) |
| 6 | On the **Incidents** tab, point to the top **CRITICAL** incident (do not click) | Incident reads "POS system offline — 0 transactions for 47 min" — **MLAS CORP** (**ENTERPRISE**), tag **TUNNEL DOWN**, assignee **Tyler R.**, "47m ago" | 4s | Callout ⑥ on "0 transactions for 47 min"; zoom-in 150% on the incident card (2s); tie to the hard-outage signal |
| 7 | Sweep the incident's tag chip and assignee, then point to **Create Ticket** and **View Full Profile →**; do NOT click **Create Ticket** | Tag chips in the feed: **TUNNEL DOWN / HARDWARE / PAYMENTS / EQUIPMENT**; assignee is a name or **Unassigned**; actions **Create Ticket** and **View Full Profile →** visible | 4s | Callout ⑦ "what broke + who has it"; STOP ring on **Create Ticket** "do not submit"; slow sweep across tag then assignee (about 2s) |
| 8 | Left rail → **IT & Support** → **System Alerts** | Page returns "Not Found — HTTP Error 404. The requested resource is not found." (System Alerts stays listed in the IT & Support sidebar) | 3s | Callout ⑧ "parked: 404 on July 9; do not fake alert rows (PARKED-ITEMS.md #2 pattern)"; hold on the 404 as-is; no retry on camera |
| 9 | Left rail → **Settings** → **Hardware** → **Hardware / Terminals** | **Terminals** page loads (breadcrumb **Settings›Terminals**); **Total Terminals** KPI; **+ New Record** button | 3s | Callout ⑨ on breadcrumb + KPI; STOP ring on **+ New Record** "do not add a record"; brief zoom on the breadcrumb (1.5s) |
| 10 | Point across the terminals list column headers (do not click a row) | Columns: **Terminal · Location · IP · Software Version · OS · Last Seen**; list shows "Couldn't load records (Failed to fetch)" | 4s | Callout ⑩ on **Last Seen** "freshness signal; no status column"; second callout "rows parked (did not load)"; slow sweep across the header row (about 2.5s) |
| 11 | Left rail → **Sales** → **Tickets** | **Tickets** list loads (breadcrumb **Transactions›Tickets**); **Total Tickets** KPI; columns **Location · Ticket # · Date/Time · Total · Status · Tender Type · Customer** | 3s | Callout ⑪ on the column row + **Total Tickets** KPI; brief zoom on the header (1.5s) |
| 12 | Point to **Filters** and the **Search** box, then to the newest **Date/Time** in the list; do NOT click **Export** | **Filters** control + **Search** ("Search by location, ticket #, customer, status…"); most recent ticket's **Date/Time** is the read | 4s | Callout ⑫ "is the lane still writing? 0 for N min = hard outage"; STOP ring on **Export** "do not export"; hold on the newest Date/Time |
| 13 | Left rail → **IT & Support** → **Support Tickets**; point to **Create ticket** and the queue columns; do NOT submit | **Support Queue** with **Create ticket** button and columns **Ticket · Category · Location · Owner · Age · Priority** (e.g. SUP-1042 / LPR / Miami North) | 4s | Callout ⑬ "escalate: location code, terminal ID, last-ticket time, alert IDs; migration switches → Jira"; STOP ring on **Create ticket** "do not submit on demo" |
| 14 | Slowly pan back across the run (Command Center → NOC → Terminals → Tickets order) | Recap: Priority Intelligence confirms the flag + owner, the NOC incident gives tag + assignee, System Alerts and Terminals give the hardware picture, Tickets tells you if the lane is writing | 3s | Callout ⑭ tying the five surfaces in order; end card / verification stamp "Verified against demo.washcentral.com on July 9, 2026."; fade out |

Estimated runtime: about 5:00 (narration estimated at ~145 wpm; timestamps firm up at render). If any unexpected dialog, error, changed data, or a "Still there?" timeout prompt appears: stop, note it, dismiss off-camera, resolve or park, then re-record the segment — do not improvise. Steps 4, 8, and 10 intentionally capture parked or non-loading surfaces; record them as they render and do not stage the missing content.

## If Claude drives while you record

Once live access is restored, I can execute steps 1–14 with the timings above while you run Snagit (or any 1920×1080 MP4 recorder) on the window. No create, submit, or export control is ever clicked: **Open →** is not followed (step 4), **Create Ticket** and **Create ticket** are not submitted (steps 7, 13), **+ New Record** is not used (step 9), and **Export** is not used (step 12). System Alerts records as the live 404 until the page resolves. Say "drive playbook PB-03" when you are rolling.

# WC-08-04 — Appointment Scheduling · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (15 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 15 blocks `WC-08-04-s01.mp3`…`WC-08-04-s15.mp3` + joined `WC-08-04-full-narration-v1.0.mp3` (239.05s ≈ 3:59). Step duration = audio + 0.4 s. Per-step render seconds: s01 15.88 · s02 18.13 · s03 14.84 · s04 13.79 · s05 17.79 · s06 13.64 · s07 12.93 · s08 12.75 · s09 17.08 · s10 17.48 · s11 10.92 · s12 14.03 · s13 12.36 · s14 21.16 · s15 20.27.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-08-04-s01.mp3` … `WC-08-04-s15.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a page means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- Shyne → "Shine"
- ALPR → "A-L-P-R" · POS → "P-O-S"
- Staff TBD → read as "staff, to be determined"
- Percentages and counts read naturally ("78%" → "seventy-eight percent"; "840" → "eight hundred forty")

### Scope notes (non-spoken)

- Read-only tour of the **Appointments** page under **Operations → SCHEDULER**. The header tools (**Search ⌘K**, **Ask Shyne**, the **MG** avatar) belong to Module 1 and are out of scope here.
- Customer names in the list are not read aloud (no customer-identifiable demo data in narration).
- **Export** is never clicked and the **+ New Record** form is never opened.
- The **Messaging** sibling is send-type. Step 14 stays at the sidebar menu level; do not depict opening or sending from Messaging.
- The **Calendar** view is a view-only toggle. Its detailed contents were not captured in the July 9 corpus (parked, new item), so narrate the toggle as a change of display only and do not describe the calendar's internals.
- Session-timeout ("Still there?") behavior is out of scope — it belongs to lesson 1.3.

## Timed script

[00:00 | Step 1 — Land on Appointments]
Open Operations, then Appointments. <break time="1.4s" /> This is the booking board customers land on, not the staff roster. Shifts live somewhere else. Here you are looking at the jobs people reserved: details, oil changes, inspections, each pinned to a day and a time.

[00:19 | Step 2 — The KPI band]
Start with the four numbers up top. <break time="1.4s" /> Eighteen today, eighty-four this week. Utilization at seventy-eight percent tells you how full your capacity is running, and the three percent no-show rate is the slice that never showed. Read these first and you know how the week is going before opening a single row.

[00:42 | Step 3 — Booking Trend]
Next, the three panels. First one, Booking Trend. <break time="1.4s" /> It plots the last twelve months, eight hundred forty bookings, up nineteen percent. One glance tells you whether volume is climbing or sliding, which is the context every other number sits inside.

[01:02 | Step 4 — By Service]
Middle panel, the service mix. <break time="1.2s" /> Full details lead, interior details next, then oil changes, with everything else rolled into other. This is what customers are actually booking, and it is the mix your bays and your people have to be ready for.

[01:21 | Step 5 — Booking Status]
Right panel, schedule health. <break time="1.2s" /> Most bookings are confirmed, a smaller share still pending, and a thin slice marked no-show. Confirmed is locked in. Pending still needs the customer to say yes. Watch that middle band, because a quick phone call there turns a maybe into a filled bay.

[01:44 | Step 6 — The list and the view toggle]
Now scroll to the list. <break time="1.4s" /> Eighteen records, one row per booking. Up on the right, a small toggle: List or Calendar. You are in List now, the row-by-row view. We flip to Calendar shortly, but first walk the controls.

[02:03 | Step 7 — New Record and Export]
Two buttons here. <break time="1.2s" /> New Record starts a fresh booking, and Export downloads the list. We touch neither today. Export especially stays untouched while recording, and the new-booking form is its own lesson.

_[Director: point to **+ New Record** and **Export**; click neither. Do not open the New Record form.]_

[02:19 | Step 8 — Search and Filters]
Under the header, the search row. <break time="1.2s" /> Type into the box to narrow the list by a name or a service, or open Filters to slice it by column. Handy when a customer calls and you need their booking in seconds, not scrolling.

[02:38 | Step 9 — The columns]
Look at the columns. <break time="1.4s" /> Date, time, customer, service, location, staff, and status. Seven of them, each sortable, with a checkbox on every row. One line carries the whole booking: when, who, what, where, who works it, and where it stands.

[02:57 | Step 10 — Staff and status]
Run down the staff and status columns. <break time="1.2s" /> Right now staff reads to be determined on these bookings, and status shows confirmed or scheduled. That is the tell. This board captures the booking first, and who actually works it gets assigned separately, over on the team schedule.

[03:17 | Step 11 — The pager]
Down at the foot, the pager. <break time="1.0s" /> Twenty-five rows to a page, arrows to move between them. A small thing, but it keeps a busy week from turning into an endless scroll.

[03:32 | Step 12 — Switch to Calendar]
Now flip the view. Click Calendar. <break time="1.4s" /> The same bookings rearrange into a calendar. Nothing gets booked, nothing moves. It is purely a different way to look at the week, which is the faster read when someone wants to shift a day around.

_[Director: the toggle is view-only. Hold on the switched view; do not describe or interact with the calendar's contents (parked, new item).]_

[03:51 | Step 13 — Back to List]
Click List to come back. <break time="1.2s" /> The table returns exactly as it was. The toggle is a lens, not a change. Flip it as often as you like without touching a record.

[04:07 | Step 14 — The rest of the group]
One more look, the sidebar. <break time="1.4s" /> Under Appointments sit its neighbors: schedulable services, resources, business hours, messaging, payments, and reports. Each is its own workspace, and each is its own lesson. We name them and move on. Messaging sends real customer notices, so we leave it closed.

_[Director: hover the sidebar labels only; do not click any sibling. Never open or send from Messaging.]_

[04:29 | Step 15 — Recap]
So that is Appointments. <break time="0.8s" /> Numbers up top for the pulse of the day, panels for the mix and the health, a list for the individual bookings, and a toggle to read it as rows or as a week. Keep one line straight: bookings live here, shifts live on the team schedule. Learn this page and every scheduling call gets shorter.

_(Estimated narration total: ~293.8 s ≈ 04:54 at ~145 wpm; final timing pending render.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, the navigation paths, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format).
- Send-type guardrail honored: **Messaging** is never opened, **Export** is never clicked, and the **+ New Record** form is never opened. The **Calendar** view is narrated as a view-only toggle with its contents parked.
- No customer-identifiable demo data is read aloud.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

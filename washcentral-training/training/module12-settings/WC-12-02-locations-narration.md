# WC-12-02 — Locations · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (14 steps, two parts: Part 1 = steps 1–6, Part 2 = steps 7–14).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 14 blocks `WC-12-02-s01.mp3`…`WC-12-02-s14.mp3` + joined `WC-12-02-full-narration-v1.0.mp3`. Audio is rendered later once the ElevenLabs key is available in the environment; timestamps below are estimates at ~145 wpm plus break time, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-12-02-s01.mp3` … `WC-12-02-s14.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a page means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- OpenEdge → "Open Edge"
- SmartTech → "Smart Tech"
- CardConnect → "Card Connect"
- Sub-Brand → "Sub Brand"
- POS → "P-O-S"
- Shyne → "Shine"
- ALPR → "A-L-P-R"

### Scope notes (non-spoken)

- Covers the **Locations** Settings area: the site list, the five-tab location detail (**Profile**, **Operations**, **Payments & Credentials**, **Messaging**, **Users**), and the three sibling pages (**Location Groups**, **Location Sub-Brand**, **Payment Credential Approval**). Read-only throughout; **+ New Record** is never clicked, no field is edited, and no credential value is copied.
- The five tab names and the four gateway blocks (**OPENEDGE**, **SMARTTECH**, **OTHER**, **CARDCONNECT**) are grounded in the project screen map (DISCREPANCIES.md #23). The location detail page did not render in the July 9 corpus, so the field-level content inside each tab is read off the live page at record time and is parked in the guide (new parked item). Do not add spoken field labels that are not on screen.
- The July 9 tenant held 6 locations across 2 states, not the larger migrated set an earlier orientation note described (new discrepancy against the learning plan). The narration does not state a fixed site count.
- Gateway credential values stay masked and are never read aloud or copied.

## Timed script

[00:00 | Step 1 — Settings / Locations group]
Open Settings, and find the Locations group in the left rail. <break time="1.2s" /> Four pages live here. One holds every site you run and everything hanging off it. The other three group your sites, style what customers see, and guard the payment keys. We'll read all four, and change none of them.

[00:22 | Step 2 — Locations page]
Now open Locations. <break time="1.4s" /> A band of tiles reads the network at a glance: how many sites, how many active, how many states, and when they last synced. Under it, three panels chart growth, split the sites by state, and score how healthy their setup is. This is your map before you open a single site. And if the list underneath ever reads couldn't load, that's the agent service dropping, not an empty tenant.

[00:54 | Step 3 — Locations list]
Look at the list itself. <break time="1.2s" /> Eight columns, and the one that matters most is Code. That short site code follows a location through every screen in the platform, so learn to read it first. Search by name or code up top, filter beside it, and leave New Record alone. Last Sync on the right tells you when the site last checked in, which is the first thing you read when a site looks silent.

[01:26 | Step 4 — Open the detail]
Click a site to open it. <break time="1.4s" /> One location, five tabs. Profile, Operations, Payments and Credentials, Messaging, and Users. That strip is the whole record, and every support question about a site starts by picking the right tab. Profile is where you land.

[01:45 | Step 5 — Profile]
Start with Profile. <break time="1.2s" /> This is who and where: the site's code and name, its address, its contact details, its hours. When a ticket names a location you don't recognize, this tab confirms you're looking at the right one before you touch anything else.

[02:05 | Step 6 — Operations]
Now Operations. <break time="1.4s" /> This tab runs the site's behavior and its time clock. Whether it shows on dashboards, whether it takes online orders, and the rules that clock staff out and pay overtime. Find the automatic clock-out timeout and the overtime threshold, read them, and leave them exactly as they are.

_[Part 1 ends here. Part 2 opens at step 7 with the credentials tab.]_

[02:27 | Step 7 — Payments & Credentials]
Open Payments and Credentials. <break time="1.4s" /> Below the portal and auto-charge options sits Credential Configuration, split into a block for each processor a site can run: Open Edge, Smart Tech, Other, and Card Connect. Every secret shows masked. Your job is to name which block is present, never to read the value. For a decline ticket, the gateway name is all support needs.

_[Director: name the gateway blocks only; never click into a credential field or copy a masked value.]_

[02:53 | Step 8 — Messaging]
Two tabs left. Messaging. <break time="1.2s" /> This holds the messages a site sends on its own, set per location rather than network-wide. When a customer at one site gets a text that another site's customers don't, this tab is why. You read what's set here; you send nothing.

[03:14 | Step 9 — Users]
Then Users. <break time="1.2s" /> This is who can work this site. When someone says they can't get into a location, check here before you reset anything: they may simply not be assigned to it. Read the list; open nothing.

[03:30 | Step 10 — Leave the detail]
Back out with the Back button. <break time="1.2s" /> Nothing saved, nothing changed. And even if you wanted to swap a site's credentials, you couldn't finish it here: those changes route to an approval queue, which is the next page we read.

[03:48 | Step 11 — Location Groups]
Open Location Groups. <break time="1.2s" /> A group bundles several sites so a report or a dashboard treats them as one. Five columns: the name, a description, how many sites it holds, its geo group, and whether it shows on the dashboard. Read only.

[04:07 | Step 12 — Location Sub-Brand]
Next, Location Sub-Brand. <break time="1.2s" /> The link says Sub-Brand, the page says Sub-Brands, same place. This styles the customer-facing panels, the panel type and the colors, so one operator can run sites under more than one look.

[04:23 | Step 13 — Payment Credential Approval]
Last page: Payment Credential Approval. <break time="1.4s" /> This is where those credential changes land for sign-off. Each row shows a location, its gateway, and a status: pending, approved, or rejected. In the capture, two sites sat approved on Open Edge. When an admin says a site's new keys aren't live yet, this status column is your answer, one pending row and you know it's still in the queue.

[04:52 | Step 14 — Recap]
So that's the Locations area. <break time="0.8s" /> One list, one five-tab record, three sibling pages. The site list gets you in, the tabs tell you who, how, and with which processor, and the sibling pages bundle sites, style them, and sign off their credentials. You read all of it, and you change none of it.

_(Estimated narration total: ~315s ≈ 05:15 at ~145 wpm plus break time. Actual per-step seconds to be measured with ffprobe at render; step duration = audio + 0.4 s.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, the navigation paths, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and in the generation-log lines noting the standard.
- Read-only throughout: no row opened for edit, **+ New Record** never clicked, no credential value read or copied. The five tab names and the four gateway blocks are grounded in DISCREPANCIES.md #23; per-tab field content is parked (new parked item) and read off the live page at record time.
- Status: **READY FOR GENERATION** — audio renders once `ELEVENLABS_API_KEY` is set. Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

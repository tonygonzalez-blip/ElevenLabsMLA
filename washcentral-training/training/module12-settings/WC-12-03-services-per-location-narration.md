# WC-12-03 — Services & per-location values · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (16 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 16 blocks `WC-12-03-s01.mp3`…`WC-12-03-s16.mp3` + joined `WC-12-03-full-narration-v1.0.mp3` (291.91s ≈ 4:52). Step duration = audio + 0.4 s. Per-step render seconds: s01 18.68 · s02 18.83 · s03 18.6 · s04 18.83 · s05 13.17 · s06 14.6 · s07 19.41 · s08 20.04 · s09 14.37 · s10 11.47 · s11 20.04 · s12 21.16 · s13 18.83 · s14 20.04 · s15 17.4 · s16 20.04.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-12-03-s01.mp3` … `WC-12-03-s16.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a page means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- POS → "P-O-S"
- Avg Price → "average price"
- Controller Code → "controller code" (spoken plainly)
- Active Locations → "Active Locations" (tab name, spoken plainly)
- Configure per location → "configure per location" (tooltip, spoken plainly)
- Shyne → "Shine"
- ALPR → "A-L-P-R"

### Scope notes (non-spoken)

- Covers the Services catalog list (grounded from the July 9 corpus) and the per-location pattern taught on a service detail. Read-only throughout; **+ New Service** is never clicked, no field is changed, and **Save** is never clicked.
- Steps 11–15 describe the service detail, the two tabs (**Service Main**, **Active Locations**), the **Service Main** field groups, and the per-field **Configure per location** gears from the July 8, 2026 verified pass. In the July 9 corpus the **Services List** returned a "Couldn't load services" agent-service error and `settings-service-edit.html` returned HTTP 404, so the detail could not be re-verified.
- The per-location override dialog is parked: on the July 8 pass the gear would not open the "Configure Value For …" dialog (PARKED-ITEMS.md #1). Teach the concept, point to the gear, never save.

## Timed script

[00:00 | Step 1 — Open Services]
Open Settings, then open Services. <break time="1.4s" /> This is the catalog. Everything a site sells lives here as a row: a wash, an add-on, a token. Every price that shows up on the point of sale traces back to this list, so a pricing question usually ends right where we're standing.

[00:22 | Step 2 — Services group]
Look down the Services group in the sidebar. <break time="1.2s" /> Services is the catalog itself. The pages beneath it, Service Types, Service Groups, Detail Types, Rewards, define the vocabulary a service draws on. You rarely edit those, but knowing they exist tells you where a stray label on a service actually comes from.

[00:45 | Step 3 — KPI band]
Read the four tiles across the top. <break time="1.2s" /> Twenty-four services, twenty-one active, six types, average price just under fifteen dollars. It's a health snapshot for the whole catalog, not one site. And take the counts loosely: in this demo the tile totals and the row totals don't always agree.

[01:06 | Step 4 — Trend & Status]
Two cards show the catalog's shape. <break time="1.0s" /> The trend line is the count over the last year, ticking up a few percent. The status card is the one to remember: active means it sells, draft means it isn't live yet, and inactive means it's retired but kept for the history. Most of the catalog is active.

[01:31 | Step 5 — Distribution]
Now the mix by type. <break time="1.0s" /> Washes are the biggest slice, then add-ons, then detail work. That top slice is what we open next, because a wash package is where the per-site pricing story really shows up.

[01:47 | Step 6 — Services List]
Drop down to the Services List. <break time="1.2s" /> This is the real catalog table. New Service sits top-right, and it's how an admin adds a wash. We leave it alone: creating a service is production work, not something you do from a support seat.

[02:06 | Step 7 — Columns & code]
Read the columns. <break time="1.2s" /> Description, code, type, price, active. Watch the code column especially. That's the controller code, the value that wires the service to the point of sale and the tunnel controller. When a button rings up the wrong wash, the code is usually the first thing you check.

[02:28 | Step 8 — List body]
Look at the rows. <break time="1.0s" /> On a live tenant this fills with the migrated catalog: wash packages, add-ons, token sales. The demo is quirkier, it often loads one fixed sample when you open a service. If you ever see a failed-to-fetch message instead of rows, that's the data service dropping out, not an empty catalog.

[02:51 | Step 9 — Search]
There's a search box for a reason. <break time="1.0s" /> A full catalog runs a couple hundred rows, so you type the service name rather than scroll. Filters narrow it further. We won't run one today; just know it's the fast way to find a single wash.

[03:11 | Step 10 — Pagination]
Down at the bottom, the page controls. <break time="0.8s" /> Twenty-five, fifty, or a hundred rows at a time. Small thing, but on a big catalog bumping it to a hundred saves a lot of clicking.

[03:26 | Step 11 — Open a service]
Open a wash and read the detail. <break time="1.4s" /> On the verified pass a service opened onto two tabs, Service Main and Active Locations, with Back, Delete, and Edit across the top. Heads up: in this capture the detail page wouldn't load, so treat what follows as the layout we confirmed earlier, parked for a fresh check.

_[Director: values in steps 11–15 are from the July 8 verified pass; the July 9 detail page 404s. Do not delete the record; **Delete Service** is never clicked.]_

[03:51 | Step 12 — Service Main]
Service Main is where the service is defined. <break time="1.2s" /> Eight groups of fields, from basic info to pricing to behavior. Two earn their keep for support. Controller code, again, is the point-of-sale mapping. And count as car decides whether the service adds to the site's car count, which is why selling a token doesn't fake your traffic numbers.

[04:16 | Step 13 — Active Locations]
Switch to Active Locations. <break time="1.2s" /> This tab is the whole point of the lesson. It lists the sites and groups where the service actually sells, each with a status and a start date. A service only rings up where it's active here. So if a wash is missing at one site, this is the first tab you open.

[04:41 | Step 14 — Edit & gears]
Now click Edit, and watch the little gears. <break time="1.4s" /> They sit beside a handful of fields, the description, the controller code, the amount, and the tax settings. Hover one and it reads configure per location. The plain field is the default everywhere. The gear lets an admin override it for a single site or group.

[05:05 | Step 15 — Click a gear]
Click the gear beside the amount. <break time="1.4s" /> On the verified pass, nothing opened. The dialog that's supposed to set a per-site value stayed shut in the demo tenant, so we park that step and check it on a real configuration. Point at the gear, explain what it does, and back out. Never save.

_[Director: the per-location dialog is parked (PARKED-ITEMS.md #1). Leave Edit Service with **← Back** or **Cancel**; **Save** is never clicked.]_

[05:29 | Step 16 — Recap]
So here's the pattern. <break time="0.8s" /> One service, one record. Active Locations decides where it sells. The gears decide what it costs and how it's taxed at each site. That's how the Works can run two dollars more at one wash without a second record anywhere. You'll see the same shape on discounts next, so it's worth owning now.

_(Estimated narration total: ~354s ≈ 05:54 at ~145 wpm plus break time. Actual per-step seconds to be measured with ffprobe at render; step duration = audio + 0.4 s.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, the navigation paths, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and in the generation-log lines noting the standard.
- Read-only throughout: **+ New Service** never clicked, no field changed, **Save** never clicked. Service detail, the two tabs, the **Service Main** field groups, and the per-location gears are attributed to the July 8, 2026 verified pass; the per-location dialog is parked (PARKED-ITEMS.md #1). The July 9 list returned a "Couldn't load services" agent-service error and `settings-service-edit.html` returned HTTP 404.
- Status: **READY FOR GENERATION** — audio renders once `ELEVENLABS_API_KEY` is set. Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

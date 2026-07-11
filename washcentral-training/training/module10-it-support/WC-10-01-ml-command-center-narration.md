# WC-10-01 — ML Command Center (Micrologic NOC) · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (15 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. Audio is rendered later, once the ElevenLabs key is available in the environment (not set in this session). Timestamps below are estimates at ~145 wpm plus break time and a 0.4 s tail; they will firm up at render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-10-01-s01.mp3` … `WC-10-01-s15.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Estimated per-step seconds (pending render):** s01 21.7 · s02 25.0 · s03 22.9 · s04 17.9 · s05 21.3 · s06 22.1 · s07 20.8 · s08 19.6 · s09 20.0 · s10 22.9 · s11 20.2 · s12 22.9 · s13 21.9 · s14 25.0 · s15 32.2. Estimated total ≈ 336 s (≈ 5:36).

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a surface means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- Micrologic → "Micro Logic"
- NOC → "N-O-C" (Network Operations Center; the team's spoken "knock" is fine if preferred, but the script uses the spelled form for clarity)
- SLA → "S-L-A"
- ML → "M-L" (as in the navigation label "ML Command Center")
- POS → "P-O-S" · ALPR → "A-L-P-R" · Shyne → "Shine"

### Scope notes (non-spoken)

- This is the cross-customer NOC board, distinct from a tenant's own Command Center. Everything is view-only.
- Do not depict assigning or claiming an incident, and do not open an incident's detail panel or use **Create Ticket** / **View Full Profile →** (parked; see the package's structured notes).
- No customer-identifiable demo data is spoken: the customer names in the feed are not read aloud. Incident examples are described by kind, not by account.
- Numbers on the board are live. Spoken figures (e.g. "just over ninety-seven percent") are illustrative of the July 9 snapshot.
- The idle "Still there?" timeout prompt is out of scope; it belongs to lesson 1.3.

## Timed script

[00:00 | Step 1 — Open ML Command Center]
This is the Micrologic N-O-C. <break time="1.4s" /> One board, watching every customer we support, all at once. Tech support and customer success both live here. A tenant's own Command Center covers a single operator; this one sits above all of them, so you catch trouble before the phone even rings.

[00:22 | Step 2 — Header status]
Look at the top strip. <break time="1.4s" /> A red count of the customers in critical shape right now. A live badge, and a note that it just refreshed. That matters: the board updates itself, so you are never staring at stale numbers. And the search box up here is scoped to this screen, to customers, locations, and incidents.

[00:47 | Step 3 — Scope filters]
Under the header, three tabs: all customers, enterprise, general. <break time="1.4s" /> All customers is the whole book. The other two split it by tier, enterprise on one side, general on the other. It is the same instinct as the location scope you already know. They aim the board, and they touch nothing underneath.

[01:10 | Step 4 — Focus a tier]
Tap Enterprise. <break time="1.4s" /> Everything tightens to that tier: the counts, the map, the feed. Tap All Customers and the whole network snaps back. It is a filter on your view, nothing deeper, and it undoes itself in a single click.

_[Director: view-only. Click Enterprise, hold, then click All Customers to restore. No record is touched.]_

[01:28 | Step 5 — Status chips]
Beside the filters, three small counts. <break time="1.0s" /> Critical, warning, healthy. That is the room in one glance, how many customers sit in each band this minute. When the critical number climbs, that is your first signal to slow down and look closer, before you have opened a single account.

[01:49 | Step 6 — Saved views]
Now the saved views. <break time="1.4s" /> All Accounts is everything. Enterprise Critical and Needs Attention drag the board straight to what deserves your eyes first. Reach for Needs Attention when you walk in cold and want the short list, then drop back to All Accounts. View only, same as the filters.

[02:11 | Step 7 — KPI band]
Across the top, five cards. <break time="1.4s" /> Customers, critical, warning, healthy, and average S-L-A. The first four sort your accounts by health. The last one is the service level for the whole board, a single clean number you can quote in a morning stand-up without opening anything else.

[02:32 | Step 8 — Tier split]
Read the small print under each count. <break time="1.0s" /> Every card splits enterprise against general. So a card never just tells you how many. It tells you which tier is carrying the weight, and that split is exactly where you decide who gets the first call.

[02:51 | Step 9 — Average SLA]
The average S-L-A card earns a second look. <break time="1.4s" /> It reads just over ninety-seven percent, with the day-over-day drift right beneath it. A down arrow is a quiet alarm. Attainment slipped since yesterday, and on this board that is worth chasing down before it grows.

[03:11 | Step 10 — Network Coverage map]
Drop to Network Coverage. <break time="1.4s" /> Every supported site on one map, painted by health: green, amber, red. The header counts the customers, the locations, and the states behind them. This is the shape of the whole network in a single picture, and it is where a regional pattern jumps out at you.

[03:34 | Step 11 — Map controls]
The map is live under your cursor. <break time="1.2s" /> Plus and minus zoom, the arrows go full screen, and the numbered bubbles group nearby sites by their worst case. Click a state or a cluster and it drops you into that region, without ever leaving the board.

[03:54 | Step 12 — Feed tabs]
Swing to the feed on the right. <break time="1.4s" /> Three tabs: incidents, locations, customers, each with a live count. Incidents is the default, and the one you live in during a shift. The other two re-cut the same trouble by site and by account, for when you want a different angle on it.

[04:17 | Step 13 — Severity groups]
The feed stacks by severity. <break time="1.2s" /> Critical up top, then warning, then info and monitoring, each with its own tally. Hold onto one thing here: these count incidents, while the cards up top count customers. Two different denominators, so the numbers will not always line up, and that is fine.

[04:39 | Step 14 — Row anatomy]
Now read one row. <break time="1.4s" /> The customer, its tier, the headline of what broke, a tag for the kind of failure, an owner or a status, and how long it has been running. That last part matters most. An old, unassigned critical is the one that should bother you. Read it here; you work it somewhere else.

_[Director: do not click into the row, do not assign or claim, do not use Create Ticket. The incident detail panel is parked.]_

[05:04 | Step 15 — Recap]
So that is the cockpit. <break time="0.8s" /> Filters and saved views aim it. The cards and the map give you the shape at a glance. The feed tells you what is broken and who has it. Nothing here changes a thing. You spot it on this board, then open the customer, the ticket, or the alert somewhere else to fix it. Learn this screen well, because on a busy day it is the first thing you open.

_(Estimated narration total ≈ 336 s ≈ 05:36 at ~145 wpm. Status READY FOR GENERATION; render once the ElevenLabs key is set, then replace estimates with measured per-step seconds.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and inside verbatim on-screen labels quoted elsewhere in the package.
- View-only throughout: the scope filters and VIEWS are exercised, but no incident is opened, assigned, or claimed, and Create Ticket / View Full Profile are never used. No customer names are spoken.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

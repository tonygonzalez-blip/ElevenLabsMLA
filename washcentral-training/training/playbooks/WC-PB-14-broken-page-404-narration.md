# WC-PB-14 — Broken page / 404 inside the platform · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (10 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — audio is rendered later (the ElevenLabs key is not set in this session). Voice **WashCentral New** (`CDbF7Jxnv3azemv9dXMP`), model **eleven_v3**, 44.1 kHz MP3. 10 blocks `WC-PB-14-s01.mp3` … `WC-PB-14-s10.mp3` + joined `WC-PB-14-full-narration-v1.0.mp3`. Timestamps below are estimates at ~145 wpm plus break time plus a 0.4 s tail, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-PB-14-s01.mp3` … `WC-PB-14-s10.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Estimated total:** about 3:55 (235 s). Confirm against rendered per-step seconds once the key is available.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a failure state means for the ticket, not every word on the error page. On this playbook the URL and the on-screen message are the diagnostic content, so they are spoken deliberately, not as filler.

### Pronunciation guide

- WashCentral → "Wash Central"
- 404 → "four-oh-four" · "404'd" → "four-oh-foured"
- URL → "U-R-L" · LogicPOS → "Logic P-O-S" · CRM → "C-R-M" · KPI → "K-P-I"
- "#" → spoken as "hash mark" (never "pound" or "hashtag")
- Jira → "JEER-ah"

### Scope notes (non-spoken)

- Read-and-classify playbook. **+ New Record**, **Create ticket**, and **Export** are never clicked; no ticket is submitted on the shared demo. The only click on a failure surface is the **Fundraiser** stub (step 4), which changes nothing by design.
- Title-card rule: the 404, stub, and data-error classes may appear as live captures, the committed July 8/9 screenshots, or comparison/checklist cards (steps 2, 7, 8), per the guide. Failure states are never staged or faked.
- LogicPOS (step 2) was not re-crawled July 9; its status is TBD — parked (PARKED-ITEMS.md #2, last confirmed July 8). The working **System Alerts** content (step 3) is TBD — parked (page 404'd July 9).
- The session idle prompt ("Still there?") is out of scope (PARKED-ITEMS.md #9).

## Timed script

[00:00 | Step 1 — Reproduce and read two things]
Someone says a page is broken. <break time="1.2s" /> Before you believe them, or doubt them, reproduce it. Load the exact address they used, then read two things: the URL in the bar, and the message on the screen. Three very different failures hide behind that one complaint, and those two reads are what tell them apart.

[00:25 | Step 2 — Class one: the hard 404]
Class one is the hard four-oh-four. <break time="1.4s" /> The Settings hub lists Logic P-O-S links, and when they were last confirmed in July they served the web server's own error page. No Wash Central header. No sidebar. Just the server saying it has no file at that address. Their status today is parked, so re-check on your own tenant before quoting it.

_[Director: show the attributed July 8 capture or a parked card; not re-crawled July 9. TBD — parked (PARKED-ITEMS.md #2).]_

[00:51 | Step 3 — Same class, inside the app]
The same class wears a second face inside the app. <break time="1.4s" /> System Alerts still sits in the IT and Support menu, yet on July ninth the page answered with an HTTP four-oh-four. So a listed feature can still four-oh-four. That usually means release gated, or mid deploy. Never tell a client the feature doesn't exist.

_[Director: hold the July 9 capture or the live state; working-page contents TBD — parked. Same pattern as PARKED-ITEMS.md #2.]_

[01:14 | Step 4 — Class two: the dead # stub]
Class two looks like nothing at all. <break time="1.4s" /> Fundraiser sits in the C-R-M sidebar like any other entry. Click it, and watch the address bar. The URL just gains a trailing hash mark, and the page never changes. That is a stub. A menu item with no page wired behind it. Not a four-oh-four, and not their connection.

_[Director: this click is safe by design; zoom the URL bar on the trailing "#". PARKED-ITEMS.md #3, DISCREPANCIES.md #5.]_

[01:40 | Step 5 — Class three: the data-fetch error]
Class three fools the most people. Open Terminals, under Hardware. <break time="1.4s" /> The page loads. Breadcrumb, KPI, buttons, column headers, all there. But where the rows belong, it says it couldn't load records. Failed to fetch.

_[Director: do not click + New Record.]_

[01:58 | Step 6 — Read what rendered]
Now look at what did render. <break time="1.4s" /> Header, sidebar, KPIs, columns. Only the data is missing. The page shell arrived fine and one background call failed, and that is usually transient. On July ninth this same banner hit roughly sixty pages at once. That's one service hiccup, not sixty broken screens.

[02:20 | Step 7 — Three side by side]
Put the three side by side. <break time="1.2s" /> Whole page replaced by an error, at the address you asked for: hard four-oh-four. A click that does nothing but add a hash mark: dead stub. A page frame with a failed-records panel inside it: data-fetch error. One look at the screen, plus the URL, settles it.

[02:43 | Step 8 — Capture the evidence]
Whichever class it is, capture the same evidence. <break time="1.2s" /> The exact URL. A screenshot of the message. The module you were in, where you clicked from, and what you expected to load. Then the class-specific note: for a four-oh-four, whether it's a known parked item. For a stub, say so. For a fetch error, whether a refresh clears it.

[03:07 | Step 9 — Escalate cleanly]
Then escalate from Support Tickets, under IT and Support. <break time="1.4s" /> On a real issue, on your tenant, the new ticket carries all five facts plus the class. Two exceptions. A fetch error that clears on refresh needs no ticket at all, and migration switches go to Jira, not here. On the shared demo, nothing gets submitted.

_[Director: do not click + New Record, Create ticket, or Export. No ticket is submitted.]_

[03:32 | Step 10 — Recap the sort]
That's the sort. <break time="1.0s" /> Read the URL, read the message, pick the class. Hard four-oh-four? Escalate it as a serving problem. Dead stub? Log it as release gated, never as gone. Fetch error? Refresh first, and escalate only if it sticks. Three problems that look identical from a distance, told apart in one glance.

_(Estimated total: about 3:55 / 235 s. Timestamps are estimates at ~145 wpm; confirm against rendered per-step seconds when the ElevenLabs key is available.)_

## Generation log

- Status **READY FOR GENERATION**: script complete, not yet rendered (no ElevenLabs key in this session). Voice **WashCentral New** / **eleven_v3** / 44.1 kHz locked per project.
- Written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading (the URL and on-screen messages spoken only where they are the diagnostic content).
- Humanizer pass (per CLAUDE.md §6): spoken prose kept clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, navigation paths, and numbered steps left exact. Em dashes appear only in the `[mm:ss | Step N — target]` house-format block headers and in the mandated "TBD — parked" token inside non-spoken director notes.
- Corpus-grounded, no live walk: System Alerts' July 9 404 (`support-alerts`), the Fundraiser stub (CRM sidebar), Terminals' fetch-error state (`settings-hardware-terminals`), and Support Tickets / Support Queue (`support-tickets`, `support`) are grounded in the July 9 digests and screenshots. LogicPOS is attributed to the July 8 verification and parked (PARKED-ITEMS.md #2); the working System Alerts content is TBD — parked. Steps 7 and 8 are title cards by design, per the guide.
- No failure state is staged or faked; no create, submit, or export control is clicked; nothing changes a record.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

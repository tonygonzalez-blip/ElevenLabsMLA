# WC-01-02 — Search, Location Scope & Ask Shyne · Narration Script

**Verified against demo.washcentral.com on July 8, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the canonical spec, guide, and shot list one-to-one (13 steps).

## Settings header

- **Status:** **RENDERED** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 13 blocks `WC-01-02-s01.mp3`…`WC-01-02-s13.mp3` + joined `WC-01-02-full-narration-v1.0.mp3` (181.6 s / ~3:02). Break tags honored (STT-verified). Per-step render seconds: s01 12.9 · s02 13.1 · s03 11.3 · s04 12.7 · s05 9.5 · s06 13.1 · s07 20.4 · s08 11.2 · s09 11.1 · s10 16.8 · s11 19.5 · s12 6.6 · s13 18.2.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved by user July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-01-02-s01.mp3` … `WC-01-02-s13.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a tool means for the technician's day, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- Ctrl+K → "control K" (Windows technicians, the primary keystroke here); ⌘K → "command K" (Mac)
- Shyne → "Shine"
- ALPR → "A-L-P-R" · POS → "P-O-S"

### Scope notes (non-spoken)

- Covers three of the four global-header tools: Search, the location scope selector, and Ask Shyne. The **Account** avatar is out of scope for this lesson.
- Session-timeout ("Still there?") behavior is out of scope — it belongs to lesson 1.3.
- Ask Shyne is send-type. Do not depict sending a prompt or showing an answer (PARKED-ITEMS.md #8). Read the guardrail and stop before **Send**.

## Timed script

[00:00 | Step 1 — Global header]
Every WashCentral screen carries the same tools in the top-right corner. <break time="0.8s" /> They follow you from page to page. Three of them do the daily work: jumping anywhere, focusing the view, and asking questions in plain language.

[00:15 | Step 2 — Open Search]
Press Control K. <break time="1.4s" /> The command palette opens dead center, cursor already blinking. It's the quickest way to any page. Rather than hunt through menus, you picture where you're headed and type it.

[00:30 | Step 3 — PAGES results]
Now, the results. <break time="1.0s" /> Search reads the whole platform, not just page titles. Each hit names where you'll land and the module it lives under, so the palette quietly teaches you the layout.

[00:45 | Step 4 — Keyboard hints]
Watch the footer, then tap the arrow keys. <break time="1.4s" /> The highlight moves with each press. The palette runs entirely from the keyboard: arrows to move, Enter to open, Escape to back out. Build the habit early.

_[Director: press only the arrow keys to move the highlight; do not press Enter — nothing should open.]_

[01:01 | Step 5 — Close Search]
Press Escape. <break time="1.2s" /> The palette closes and drops you back exactly where you were, without opening or changing a thing. Closing Search is always safe.

[01:12 | Step 6 — Open location scope]
Now click the location selector. <break time="1.4s" /> By default it reads All Locations, your whole network. This control decides which sites your dashboards and numbers come from. Right now, that's every wash you run.

[01:27 | Step 7 — Groups & Locations]
Underneath, two lists. <break time="1.0s" /> One groups sites by state, with a count beside each. The other drills into a single wash. Pick either, and every dashboard narrows to match. For support work, remember: it only changes your view. The data never moves, and one click back to All Locations restores the whole network.

[01:49 | Step 8 — Close location scope]
Click the selector again to close it. <break time="1.2s" /> We browsed and picked nothing, so scope stays on the full network. Scanning the list never filters a thing until you actually choose. _(Esc does not close this dropdown — verified live; see DISCREPANCIES.md #24.)_

[02:03 | Step 9 — Open Ask Shyne]
Last tool. Click Ask Shyne. <break time="1.4s" /> Shyne is the assistant built into WashCentral. Ask it about customers, operations, or marketing in plain language, and it pulls the answer together.

[02:16 | Step 10 — Example prompts]
The Try Asking prompts give you a feel for its range. <break time="1.0s" /> Payment declines at one site, prepaid members gone quiet, last week's damage claims, VIPs at risk of leaving. If that's a question you'd normally dig through reports for, try Shyne first.

[02:35 | Step 11 — Ask box & guardrail]
At the bottom, a question box and a Send button. <break time="1.4s" /> Normally you'd type a question here and Shyne would answer. We won't send one today. What matters is the line just below: the answer is AI-generated, so verify it before you act. Treat Shyne's reply as a fast first draft you always confirm.

_[Director: read the guardrail; do not click Send. Where a generated answer would appear: TBD — parked (PARKED-ITEMS.md #8).]_

[02:58 | Step 12 — Close Ask Shyne]
Click Close. <break time="1.2s" /> The window disappears with no question sent, your workspace right where you left it.

[03:06 | Step 13 — Recap]
So that's the header. <break time="0.8s" /> From any screen, Control K jumps you anywhere, the location selector focuses the view without touching a record, and Ask Shyne answers your questions, as long as you verify first. Three tools, one corner. Learn them now, because every lesson ahead assumes you can reach them.

_(Rendered narration total: 182.56s ≈ 03:03. Step 8 re-rendered after live verification — see DISCREPANCIES.md #24.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the narration. Verbatim UI labels, the keystroke, the navigation paths, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format) and inside the mandated parked-item string, which is quoted verbatim.
- Ask Shyne left unsent throughout (PARKED-ITEMS.md #8); the guardrail is read, Send is never clicked, and no generated answer is shown.
- Verification stamp current: **Verified against demo.washcentral.com on July 8, 2026.**

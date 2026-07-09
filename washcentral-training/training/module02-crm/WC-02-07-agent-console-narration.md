# WC-02-07 — Agent Console (Service Desk) · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (12 steps).

## Settings header

- **Status:** **READY FOR GENERATION** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 12 blocks `WC-02-07-s01.mp3`…`WC-02-07-s12.mp3`, one TTS call per step, assembled at each step's marker. Audio is rendered later once the ElevenLabs key is available; it is not set in this session. Timestamps below are estimates at ~145 wpm plus break time plus a 0.4 s tail, pending render.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-02-07-s01.mp3` … `WC-02-07-s12.mp3`. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a control means for the agent's shift, not the labels already on screen.

### Pronunciation guide

- WashCentral → "Wash Central"
- Handoff → "hand-off"
- SMS → "S-M-S"
- AI → "A-I"
- Shyne → "Shine"
- ALPR → "A-L-P-R" · POS → "P-O-S"

### Scope notes (non-spoken)

- Read-only anatomy walk. The queue is empty at capture (0 waiting), so no conversation is opened; the populated console and filled **Customer** panel are out of scope (parked).
- The presence selector is never changed (do-not-change). Narrate its four states without setting one.
- **Ask Shyne** is send-type and is not exercised (PARKED-ITEMS.md #8).
- Session-timeout ("Still there?") behavior is out of scope — it belongs to WC-01-03 (thresholds parked #9).

## Timed script

[00:00 | Step 1 — Open Agent Console]
Open Agent Console from the Service Desk group in the sidebar. <break time="1.4s" /> One screen, three panes. The queue on the left, the live conversation in the middle, the customer's details on the right. No tab-hopping while someone waits on you.

[00:20 | Step 2 — Presence selector]
Up in the header, your presence. <break time="1.2s" /> It reads Offline right now, and it can be Available, Away, Busy, or Offline. This is how the desk knows whether you're ready for a contact. Leave it where your shift set it; we don't touch it here.

_[Director: hover the presence selector only. Do not open it and do not change it.]_

[00:41 | Step 3 — Handoff Queue counters]
Look at the top of the queue. <break time="1.0s" /> Three numbers give you the load at a glance: how many are waiting, the average wait, and how many are flagged high priority. All zero now. A calm board.

[00:59 | Step 4 — Search box]
There's a search box over the queue. <break time="1.2s" /> Type a name, a phone number, a plan, or the reason for the handoff, and the list narrows to it. On a busy shift, that's how you pull one contact out of a crowd.

[01:21 | Step 5 — Assignment filters]
Three buttons scope the queue. <break time="1.2s" /> Mine is yours. Unassigned is up for grabs. Team is the whole group's board. Right now it's set to Team, so you're seeing everything, not only your own.

[01:38 | Step 6 — Channel filters]
Below that, the channels. <break time="1.2s" /> All, then Voice, S-M-S, and Web. Those last three are the ways a customer reaches you, and All shows them together. Remember the three: voice, text, and web chat.

[01:56 | Step 7 — Sort]
Open the sort control. <break time="1.4s" /> You can work the queue longest wait first, priority first, or most recent first. Longest wait first is the fair choice; it clears whoever has been holding the longest. Close it without changing anything.

_[Director: open the sort list to reveal the three options, then close it without selecting one.]_

[02:16 | Step 8 — Empty queue]
Under the filters, the queue itself. <break time="1.0s" /> It says no matching handoffs, because nothing is waiting. When a contact comes in, its row shows up right here for you to pick up.

[02:31 | Step 9 — Center console]
The middle is empty too. <break time="1.0s" /> Select a handoff from the queue, it says, to open its console. That's the cue. You click a waiting row, and the conversation loads into this space.

[02:47 | Step 10 — Customer panel]
And on the right, the Customer panel. <break time="1.0s" /> No conversation selected, for now. Once you open one, this is where the customer's context sits, so you're never guessing who you're helping.

[03:03 | Step 11 — Where handoffs come from]
So why is it all empty? <break time="1.2s" /> The queue fills when the AI Agent hands a conversation to a person. Those escalations land right here, in the Handoff Queue. The agent side of that is a later lesson; for now, know this is where a handed-off customer waits for you.

[03:27 | Step 12 — Recap]
One screen, three panes. <break time="0.8s" /> The queue you scope by who owns it and by channel, the console that opens the conversation, and the customer's context beside it. Your presence lives in the header, and you leave it alone unless your shift changes. That's the Agent Console.

_(Estimated narration total: ~227.8 s ≈ 3:48, at ~145 wpm plus breaks. Final per-step seconds set at render.)_

## Generation log

- Script v1.0 written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading.
- Humanizer pass (per CLAUDE.md §6): spoken prose written clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken prose. Verbatim UI labels, the navigation path, and the numbered steps were left exact. The only em dashes are in the timed-block headers (the established `[mm:ss | Step N — target]` house format).
- Presence selector never set; **Ask Shyne** never sent (PARKED-ITEMS.md #8). Queue empty at capture, so no conversation opened; populated views parked.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

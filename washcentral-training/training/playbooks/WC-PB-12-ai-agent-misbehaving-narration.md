# WC-PB-12 — AI agent misbehaving, customer-facing · Narration Script

**Verified against demo.washcentral.com on July 9, 2026.** v1.0 · Author: Claude — Micrologic training project. Steps match the guide and shot list one-to-one (13 steps).

## Settings header

- **Status:** **RENDERED (July 11, 2026)** — WashCentral New (`CDbF7Jxnv3azemv9dXMP`), eleven_v3, 44.1 kHz MP3. 13 blocks `WC-PB-12-s01.mp3`…`WC-PB-12-s13.mp3` + joined `WC-PB-12-full-narration-v1.0.mp3` (256.64s ≈ 4:17). Step duration = audio + 0.4 s. Per-step render seconds: s01 18.05 · s02 23.07 · s03 18.13 · s04 13.48 · s05 24.76 · s06 13.17 · s07 17.95 · s08 13.79 · s09 18.91 · s10 15.39 · s11 26.36 · s12 21.71 · s13 26.67.
- **Voice:** **WashCentral New** (ElevenLabs voice ID `CDbF7Jxnv3azemv9dXMP`) — project voice, approved July 8, 2026. Never switch voice without sign-off.
- **Model:** **eleven_v3** — pass explicitly on every generation.
- **Output:** 44.1 kHz MP3.
- **Production render:** block-by-block, one TTS call per step, numbered `WC-PB-12-s01.mp3` … `WC-PB-12-s13.mp3`, assembled at each step's marker. Step duration = audio + 0.4 s.
- **Pace target:** 140–150 wpm, professional and engaging expert-trainer delivery. Never monotone, never ad-read.
- **Estimated total:** about 4:55 (295 s). Confirm against rendered per-step seconds once the key is available.

### Narration craft standard (project-wide)

1. **The 1-second visual buffer.** Never speak the instant a screen changes. Each action cue is followed by `<break time="1.4s" />` so the click and transition land before the explanation begins.
2. **Varying sentence length.** Short fragments set against longer explanatory lines; no two adjacent blocks with the same rhythm.
3. **Show, don't read.** Narrate what a check means for the ticket, not every label on screen. On this playbook the queue reasons and channel states are the diagnostic content, so they are spoken deliberately, not as filler.

### Pronunciation guide

- WashCentral → "Wash Central"
- Ask Shyne → "Ask Shine"
- SMS → "S-M-S" · SLA → "S-L-A" · CSAT → "C-sat" · TCPA → "T-C-P-A"
- CRM → "C-R-M" · KPI → "K-P-I"
- "handoff" → spoken naturally; "containment" → spoken naturally

### Scope notes (non-spoken)

- Read-only playbook. Never trigger **Configure Agent**, **Export** (steps 2, 12), **Claim Next**, **Escalation Rules** (step 5), **Enable desktop notifications** (step 7), **Re-index**, **+ Add Article**, **Import URL** (step 9), or any test control (**Send Test Message**, **Send Test SMS**, **Place Test Call**, **Run Health Check**, **↗ Preview Live Widget**, step 11). No test prompt is ever sent to the customer-facing agent, and none is depicted (PARKED-ITEMS.md #8).
- The single-conversation transcript view (step 3) and the open-handoff console (step 7) were not in the July 9 corpus because the demo log and queue were empty. Capture live data at record time or hold the parked card; both are TBD — parked.
- **Ask Shyne** (staff assistant) and the session idle prompt ("Still there?") are out of scope (PARKED-ITEMS.md #8, #9).

## Timed script

[00:00 | Step 1 — Conversations log]
Start in Settings, under AI Agent, and open Conversations. <break time="1.4s" /> This is the customer facing agent, the one your customers text and talk to. Not Ask Shyne in the header. That's a staff tool, and a different playbook. The transcript is the ticket, so this log is always your first stop.

[00:23 | Step 2 — Read the log layout]
Read the layout before you search. <break time="1.4s" /> Six KPIs across the top cover thirty days. Below them, a table: customer, channel, topic, status, message count, sentiment. Today's demo tenant shows no conversations at all, while Analytics reports thousands. That gap is a demo artifact. Trust this log only after it actually loads.

_[Director: do not click Configure Agent or Export. Row transcript view TBD — parked.]_

[00:48 | Step 3 — Narrow to the chat]
Now narrow to the chat in question. <break time="1.2s" /> Search or filter on the customer, the channel, or the topic. The message count tells you how long the exchange dragged on, and sentiment tells you how it felt. Opening the row gives you the full back and forth plus the conversation ID. That ID rides along into your ticket.

_[Director: detail view not in the July 9 corpus — record live or hold the parked card. TBD — parked.]_

[01:12 | Step 4 — Escalations queue]
Next question: did it hand off when it should have? Click Escalations. <break time="1.4s" /> Seven open, three claimed, one SLA breach. Average wait, six minutes and change. This queue is where the agent admits it needs a human.

[01:31 | Step 5 — Read the REASON column]
The reason column is the diagnostic. <break time="1.4s" /> Negative sentiment on a billing dispute. A refund above the cap. A customer asking for a manager. Eight turns with no resolution. Those are the guardrails, and a healthy agent trips them. If your customer's chat sits here with a sensible reason, the agent behaved. If it never showed up, that gap is the misbehavior you report.

_[Director: do not click Claim Next or Escalation Rules; no row is claimed.]_

[01:59 | Step 6 — Agent Console]
So where does a handoff land? In the C-R-M module, under Service Desk, open the Agent Console. <break time="1.4s" /> This is the human side of the escalation you just read. A teammate sets themselves available and picks the case up right here.

[02:18 | Step 7 — Handoff Queue controls]
Look over the queue controls. <break time="1.4s" /> Filters for mine, unassigned, team, and all. Channel chips. Sort by longest wait or by priority. Today the queue is empty, so the console panes stay blank. That's fine. You came to confirm the intake exists, not to claim anything.

_[Director: do not click Enable desktop notifications. Open-handoff console TBD — parked.]_

[02:39 | Step 8 — Knowledge Base]
Now chase the bad answer. Back in Settings, open the Knowledge Base. <break time="1.4s" /> These are the documents the agent searches before it answers a customer. A wrong answer usually starts here, with an article that went stale or never existed at all.

[02:57 | Step 9 — Article table]
Read the table, not just the counts. <break time="1.4s" /> Status tells you whether an article is indexed and searchable. Updated tells you how old it is. Search the topic the customer asked about, and if nothing comes back, you have probably found your cause. Leave the add and re-index controls alone. Each one changes the index.

_[Director: do not click Re-index, + Add Article, or Import URL. Table is empty in the July 9 tenant; the Analytics article count disagrees — same demo artifact as step 2.]_

[03:21 | Step 10 — Channels & Deployment]
Channel next. Open Channels and Deployment. <break time="1.4s" /> Three channels, three of three live. Thirty day uptime just shy of one hundred percent, latency around four hundred milliseconds. Healthy numbers up top. The story is in the cards below.

[03:39 | Step 11 — Three channel cards]
Read all three cards, and touch none of the test controls. <break time="1.4s" /> Web chat is installed and live. SMS is live, with stop and help handled automatically. Voice is beta, and beta means rougher behavior is expected, so say so up front. And that nighttime silence complaint? Quiet hours. The overview page flags T-C-P-A quiet hours on for SMS. The agent wasn't ignoring anyone. It was honoring the window.

_[Director: never click Send Test Message, Send Test SMS, Place Test Call, Run Health Check, or Preview Live Widget. This playbook never sends or depicts a test prompt (PARKED-ITEMS.md #8).]_

[04:08 | Step 12 — Analytics containment]
One more page. Analytics. <break time="1.4s" /> Thirty eight hundred conversations in thirty days, and seventy eight percent never needed a human. That is containment. Web runs highest, voice lowest, which fits a beta channel. A channel whose containment has slipped is real evidence the agent is struggling there, and it belongs in your escalation.

_[Director: do not click Export.]_

[04:31 | Step 13 — Package and stop]
Now write the ticket and stop. <break time="1.0s" /> The conversation ID. The channel. The containment context. Then the finding: a missing escalation row, a stale article, or a channel state like voice beta or quiet hours. You read six screens and changed nothing. Configuration and knowledge edits happen upstream, with the right role. Your job was the diagnosis, and it's done.

_(Estimated total: about 4:55 / 295 s. Timestamps are estimates at ~145 wpm; confirm against rendered per-step seconds when the ElevenLabs key is available.)_

## Generation log

- Status **READY FOR GENERATION**: script complete, not yet rendered (no ElevenLabs key in this session). Voice **WashCentral New** / **eleven_v3** / 44.1 kHz locked per project.
- Written to the project narration craft standard: 1-second visual buffer on every action cue, varied sentence length between adjacent blocks, value-and-context over label-reading (queue reasons and channel states spoken only where they are the diagnostic content).
- Humanizer pass (per CLAUDE.md §6): spoken prose kept clear of the listed AI tells — no promotional inflation, no forced rule-of-three, no copula avoidance, no filler or hedging, active voice, and no em or en dashes in the spoken lines. Verbatim UI labels, navigation paths, and numbered steps left exact. Em dashes appear only in the `[mm:ss | Step N — target]` house-format block headers and in the mandated "TBD — parked" token inside non-spoken director notes.
- Corpus-grounded, no live walk: Conversations, Escalations, Agent Console, Knowledge Base, Channels & Deployment, and Analytics are grounded in the July 9 digests and screenshots (`settings-ai-agent-conversations`, `settings-ai-agent-escalations`, `agent-console`, `settings-ai-agent-knowledge`, `settings-ai-agent-channels`, `settings-ai-agent-analytics`). The single-conversation transcript (step 3) and the open-handoff console (step 7) are TBD — parked (empty log and queue in the corpus).
- No test prompt is sent or depicted on any channel; no queue row is claimed; nothing is configured, exported, or re-indexed.
- Verification stamp current: **Verified against demo.washcentral.com on July 9, 2026.**

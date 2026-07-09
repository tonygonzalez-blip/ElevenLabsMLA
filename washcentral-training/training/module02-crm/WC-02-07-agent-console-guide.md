# WC-02-07 · Agent Console (Service Desk) (CRM)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson walks the **Agent Console**, the Service Desk workspace where a live conversation with a customer is worked. It is a three-pane layout: the **Handoff Queue** on the left, a center console for the open conversation, and a **Customer** context panel on the right. The header also carries an agent presence selector. By the end you can read the queue and its filters, tell what the empty states mean, and find your presence control without changing it. You do not open or answer a conversation here; at capture the queue is empty, so this lesson documents the workspace as it looks when nothing is waiting.

## Audience and prerequisites

Internal Micrologic technicians who handle Service Desk contacts, and support staff who need to know where an escalated conversation lands. You should be signed in and comfortable with the global header and sidebar from WC-01-01 and WC-01-02. No prior Agent Console experience is assumed. Session-timeout behavior ("Still there?") is out of scope here and stays with WC-01-03.

## Navigation path

`CRM → SERVICE DESK → Agent Console` (`agent-console.html`). In the left sidebar the CRM records sit under the **CRM** group; **Agent Console** sits on its own under the **SERVICE DESK** group at the bottom. The header breadcrumb reads Service Desk › Agent Console.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. The queue is empty at capture, so no conversation is opened at any point in this lesson.

1. In the left sidebar, under **SERVICE DESK**, click **Agent Console**. **Expected:** the three-pane workspace loads with the header reading **Agent Console** under the SERVICE DESK label. The **Handoff Queue** is on the left, an empty center console fills the middle, and the **Customer** panel is on the right.

2. Look at the top-right of the header for the presence selector. Do not change it. **[READ-ONLY]** **Expected:** a presence control sits left of **Ask Shyne**. At capture it reads **Offline**. Its options are **Available**, **Away**, **Busy**, and **Offline**. Presence signals your availability to the rest of the Service Desk, so leave it where your shift lead set it; this lesson never changes it.

3. Read the **Handoff Queue** header and the counters under it. **Expected:** the pane is titled **Handoff Queue**. The line below reads "0 waiting", "avg 0:00", and "0 high priority". Those three numbers are your at-a-glance load: how many contacts are waiting, the average wait, and how many are flagged high priority. All three are zero right now.

4. Find the queue search box. **Expected:** the box shows the placeholder "Search name, phone, plan, reason…". Typing here filters the queue by a customer's name, phone number, plan, or the reason they were handed off, which is how you find one contact in a busy queue.

5. Read the assignment filters. **Expected:** three buttons sit in a row: **Mine**, **Unassigned**, and **Team**, each with a count (all 0 at capture). **Mine** is what is assigned to you, **Unassigned** is waiting for someone to pick up, and **Team** is everything across your group. **Team** is the selected filter at capture.

6. Read the channel filters below the assignment row. **Expected:** four chips: **All**, **Voice**, **SMS**, and **Web**, each with a count (all 0 at capture), with **All** selected. **Voice**, **SMS**, and **Web** are the three channels a handoff can arrive on; **All** shows every channel at once. This is the answer to "which channels feed the queue".

7. Open the sort selector below the filters, read the options, then close it without changing it. **Expected:** the sort control reads "Longest wait first" and offers "Longest wait first", "Priority first", and "Most recent first". A "showing 0" count sits beside it. Sort decides the order you work the queue in; leave it on its current choice.

8. Read the empty queue state. **Expected:** where handoff rows would list, the queue shows "No matching handoffs." because nothing is waiting. When contacts are present, each row would appear here for you to select.

9. Look at the center console. **Expected:** the middle pane shows a chat-bubble icon above the line "Select a handoff from the queue to open its console." This is the empty state; selecting a queue row is what would load a conversation into this pane. No row exists to select at capture.

10. Look at the **Customer** context panel on the right. **Expected:** the panel is titled **Customer** and reads "No conversation selected." Once a conversation is open, this panel is where the customer's context would sit, so you are not switching screens to see who you are helping.

11. Understand where handoffs come from. **Expected:** the queue stays empty until a conversation is routed to it. Per the platform documentation, a handoff arrives when the AI Agent escalates a customer conversation to a person; those escalations land in this Agent Console queue (the AI Agent itself is covered in WC-12-08). The queue's own definition matches: the **Handoff Queue** is the Agent Console's intake of escalated conversations.

12. Recap the workspace. **Expected:** the Agent Console is one screen with three panes: the **Handoff Queue** you scope with **Mine** / **Unassigned** / **Team** and filter by **All** / **Voice** / **SMS** / **Web**, the center console that opens the selected conversation, and the **Customer** panel for context. Your presence selector sits in the header, and you leave it alone unless a shift change calls for it.

### Knowledge check

Which three channels can feed the **Handoff Queue**, and where does a conversation go when the AI Agent hands it off to a person? Answer: **Voice**, **SMS**, and **Web** feed the queue (the channel filters), and an escalated AI conversation lands in this Agent Console **Handoff Queue**.

### Exercise 2.7a [READ-ONLY]

Open the Agent Console. Read the three counters on the **Handoff Queue** ("waiting", "avg", "high priority"). Point to each assignment filter (**Mine** / **Unassigned** / **Team**) and each channel chip (**All** / **Voice** / **SMS** / **Web**) and say aloud what each one narrows to. Open the sort selector, read its three options, and close it without choosing. Locate your presence selector in the header and name its four states without clicking it.

## Expected results

You can reach the Agent Console from `CRM → SERVICE DESK → Agent Console` and read all three panes at a glance. You can name what the **Handoff Queue** counters mean, scope the queue with the assignment and channel filters, and read the sort options. You can explain both empty states ("No matching handoffs." in the queue, "Select a handoff from the queue to open its console." in the center, "No conversation selected." in the **Customer** panel). And you can find your presence selector and its four states without changing it.

## Notes and troubleshooting (observed behavior only)

- The queue was empty at capture (0 waiting), so the queue, the center console, and the **Customer** panel all show their empty states. A populated conversation view and the filled-in **Customer** context fields were not observable in this pass: TBD — parked (new item; see the authoring return).
- The presence selector showed **Offline** at capture. Its four options (**Available** / **Away** / **Busy** / **Offline**) are confirmed, but the control was not opened or changed (do-not-change), so its exact expand behavior was not exercised: TBD — parked (new item; see the authoring return).
- **Ask Shyne** appears in the header on this page as on every page. It is a send-type assistant and is not exercised here (PARKED-ITEMS.md #8). Sending a prompt is out of scope for this lesson.
- A notification bell sits in the header with an **Enable desktop notifications** control; for Service Desk work you would want desktop alerts on so new handoffs surface. It is noted here as an observed control, not walked in this lesson.
- The idle "Still there?" session prompt can appear on any page after inactivity. It is out of scope for this lesson and is covered by WC-01-03; timeout thresholds remain PARKED-ITEMS.md #9.
- The **Team** assignment filter and the **All** channel chip were the selected filters at capture. That is the state as observed, not a documented default.

## Related lessons

WC-01-02 Search, location scope, and Ask Shyne · WC-02-01 Customer List · WC-12-08 Customer Portal and AI Agent.

**Verified against demo.washcentral.com on July 9, 2026.**

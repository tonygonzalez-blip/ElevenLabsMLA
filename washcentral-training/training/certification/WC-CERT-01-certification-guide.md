# WC-CERT-01 · Certification: Written Exam + Practical Checkout (Phase 6)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

> Doc-only deliverable. This is the proctor's guide: a 25-question written exam with an answer key, the 10-task practical checkout matrix, and the Academy completion requirements. There is no video or narration. Every answer traces to a lesson and to the verified platform.

## Purpose

Certify that a technician can work WashCentral support unaided. Certification has three parts: a written exam (pass at 80% or higher), a live practical checkout observed by a lead, and Academy course completion for the technician's track. This guide gives the proctor everything needed to run all three.

## Audience

Team leads proctoring certification for Tech Support, Pre-Configuration/Onboarding, and Field Techs. Candidates should have completed their track's lessons and playbook drills first.

## How to run the written exam

25 questions, drawn from the lesson knowledge checks. Pass mark is 80% (20 of 25 correct). Closed-book. Each answer below cites the lesson it comes from so the proctor can send a candidate back to the right place on a miss. Where a platform behavior is still open, the answer notes the parked item so the proctor does not mark a correct "it's parked" answer wrong.

### Written exam — questions

1. WashCentral's sign-in asks for three values, not the usual two. Name the third field and explain why it exists.
2. A migrated client says their login stopped working the day they moved to WashCentral. What do you rule out first, and why?
3. A site manager says the system logs them out every few minutes. Which Settings page do you check, and which two columns matter?
4. Name the two buttons that exit an edit form, and say which one is safe to use in the shared demo tenant.
5. Name the four Priority Intelligence groups on the Command Center.
6. On a Customer 360, where do you read the barcode the POS scans, and where do you read the next charge date?
7. On a Customer 360, where do you confirm a customer's SMS consent?
8. A fleet manager asks why their card was charged. Name three Customer 360 tabs you would check.
9. In the Agent Console, name the channels that feed the Handoff Queue, and say where an escalated AI conversation lands.
10. Which Transactions page do you open to trace a declined card, and which one for a drawer that will not balance?
11. A client says their win-back texts stopped sending in one city. Name two places you check before opening a bug.
12. Where do you see who is on the clock right now, and where do you check why an employee shows OFF on a given day?
13. A car was scratched in the tunnel and an employee slipped in a bay. Which module holds both reports?
14. For a platform problem, where do you check whether an alert is one site or network-wide, and where do you log that a client wants formal POS training?
15. A client disputes their messaging charges. Which Billing tab shows the per-source cost split, and which shows their open invoice?
16. A site's members are not auto-recharging. Which Settings area holds the auto-charge and recharge settings you read before escalating?
17. "Why does the same wash cost more at one site?" Which service tab and which control answer that?
18. A manager cannot approve refunds. Which Settings page and column tell you why?
19. "Who logged in as this user last?" Name a page that answers it.
20. The Help Desk tab is empty for a client. Walk the three-step Zoho check without opening a bug.
21. A beta client wants to switch back to WashAssist for month-end. What is the exact process and board?
22. On a ticket, which button processes a refund, and what has to be true about your security level first?
23. You need to prove who changed a price and what the old value was. Which Audit page, and which columns?
24. A técnico opens a page and gets a "404 - File or directory not found." How is that different from "Couldn't load records (Failed to fetch)"?
25. Name three modules that are new in WashCentral versus the legacy WashAssist navigation.

### Written exam — answer key

1. **Tenant / Customer Code.** WashCentral is multi-tenant: one installation hosts many independent car-wash companies, and the code routes the login to the correct company database. (WC-00-02)
2. **A credential problem.** Migrated credentials carry over unchanged and WashCentral uses the WashAssist data, so a migrated "can't log in" is almost never a password issue. Work PB-1. *Migration note (source: Migration FAQ).* (WC-15-01, PB-1)
3. **Settings → User Levels.** The two columns that matter are **Security Level** and **Session Timeout (min)**. Note: in the live sidebar this page sits under the **Automation** group. Exact idle firing thresholds are parked (#9). (WC-01-03, WC-12-06)
4. **Cancel** and **Save Changes**. **Cancel** is the safe one in the demo tenant; never Save on a record you did not create. (WC-01-05, WC-02-03)
5. **Critical**, **High Priority**, **Revenue Plays**, **Automations**. (WC-01-06)
6. Barcode is on the **Membership** tab; the next charge date is on the **Membership** tab under the billing-cycle group (**NEXT CHARGE**). The 360 view page was not re-captured in the July 9 sweep, so specific field values there are parked pending a live walk. (WC-02-02, PB-6)
7. On the **Contact** tab (notification preferences / messaging consent) and reflected on the **Messaging** tab. (WC-02-02)
8. **Payments**, **Membership**, and **Activity**. (WC-02-02, PB-4)
9. **Voice**, **SMS**, and **Web** (filterable as All/Voice/SMS/Web). An escalated AI conversation lands in the **Handoff Queue**. (WC-02-07, WC-12-08)
10. **Declined Credit Card Log** for a declined card; **Shifts** for a drawer that will not balance. (WC-03-03)
11. The **Campaigns** list (look for the **⛅ Weather paused** status) and the **Deliverability** page. Where weather-pause is configured is parked (#6). (WC-05-01, PB-8)
12. **Team → Time Clock** shows who is on the clock now; **Team → Employee Schedules** shows why someone is OFF on a given day. (WC-07-02)
13. **Operations → Incident Reports** holds both the vehicle-damage and the employee-injury report types. (WC-08-03)
14. **IT & Support → System Alerts** tells you whether an alert is one site or network-wide; **Training Requests** is where you log a client's request for formal POS training. Note: the System Alerts page 404s on a direct URL in the July 9 corpus and is reached from the IT & Support sidebar. (WC-10-04, WC-10-05, PB-3)
15. The **SMS Usage** tab (via Usage by Source, the per-source cost split) and the **Invoices** tab. (WC-11-01, PB-8)
16. The location's **Payments & Credentials** tab (auto-charge decline attempts and the recharge scheduler). The exact field contents are parked pending a live capture; gateway blocks are OPENEDGE / SMARTTECH / OTHER / CARDCONNECT (names only). (WC-12-02, PB-4)
17. The service's **Active Locations** tab, using the per-field **Configure per location** gear. The gear dialog itself is parked (#1). (WC-12-03)
18. **Settings → Security Levels**, the **Refund Approval Required** column. (WC-12-06, PB-7)
19. **Settings → System Users** (LAST LOGIN) and the Audit **User Activity** page. Note: User Activity 404s on a direct URL in the July 9 corpus and is reached from the Audit sidebar. (WC-12-06, WC-13-02, PB-11)
20. Check the **integration status** banner on Settings → Integrations → Zoho, then **Test Connection** (locate it, do not run it in the demo), then the **token expiry** / credentials. (WC-12-09, PB-13)
21. Submit a **Jira ticket on the CSI board** to revert the redirection; the same path that performed the switch reverses it. *Migration note (source: Migration FAQ).* (WC-15-01)
22. The red **Refund** button on the Ticket View. Your security level must clear the **Refund Approval Required** gate (Yes for Low / LowMedium / Medium). Executing a refund end to end is parked (#5). (WC-03-02, WC-12-06)
23. **Audit → Change History**, columns **FIELD / OLD / NEW** (with the Audit Log carrying the IP address). Change History 404s on a direct URL in the July 9 corpus and is reached from the Audit sidebar. (WC-13-02, PB-11)
24. A **404** is a missing page or route (for example the LogicPOS demo screens, parked #2, or a "#" stub like Fundraiser, parked #3). "**Couldn't load records (Failed to fetch)**" is a live page whose data service did not respond; the page and its labels are fine, only the rows failed. Do not escalate the two the same way. (PB-14)
25. Any three of: **Billing**, **Academy**, **IT & Support** (as a consolidated module), **Digital**, **Operations** (as regroupings). Per DISCREPANCIES #2, Billing and Academy are genuinely new. (WC-01-01, WC-15-02)

## Practical checkout matrix

The lead observes the candidate on the live tenant, no notes. Pass all ten.

| # | Task | Pass standard |
|---|------|---------------|
| 1 | Cold login + tour | Explains the three-field login; names all thirteen modules plus Settings with a one-line purpose each |
| 2 | Member lookup | From a plate, reaches the customer, then the barcode, next charge, and consent status, in under three minutes |
| 3 | Ticket trace | From a ticket number, identifies terminal, shift, tender, and refund state; pastes the deep-link URL |
| 4 | Refund gate | Explains the security-level approval matrix from the live Security Levels page |
| 5 | Site health | For a named location, pulls alerts, open issues, last tickets, and the reconciliation batch |
| 6 | Config read | For a named service, states the default price, where per-site overrides live, and where the service is active |
| 7 | Who-changed-it | Produces the field-level old/new plus the user and IP for a given change |
| 8 | Playbook run | Runs one random PB-1 through PB-14 end to end, including a correctly formed escalation |
| 9 | Migration script | Answers the Lesson 15.1 migration questions verbatim-accurate and properly attributed |
| 10 | KB contribution | Drafts one Knowledge Base article in the correct category from a drill resolution |

Tenant safety during the practical: tasks are read-only. For any step that would send, refund, or delete, the candidate narrates the action and stops at the confirmation dialog rather than completing it. Refund execution and the per-location gear dialog remain parked (#5, #1), so a candidate who correctly says "this is where I would, but it is not exercised in the demo" passes that step.

## Academy completion requirements

Completion is tracked in Academy → LMS Administration → **Reports & Compliance**.

- **All tracks:** the Foundations path badge.
- **Tech Support, additionally:** *Support & Help Desk*, *Incident Reports Management*, *Compliance & Audit Essentials*.
- **Pre-Configuration, additionally:** all four *System Administration* courses.
- **Field Techs, additionally:** *Operations & Maintenance Workflows*, *Sales & Transaction Management*.

## Sign-off

A candidate is certified when they pass the written exam at 80% or higher, pass all ten practical tasks, and show the required Academy completions for their track. Record the date and the proctor's name. Recertify when a major platform release changes the modules a track depends on.

**Verified against demo.washcentral.com on July 9, 2026.**

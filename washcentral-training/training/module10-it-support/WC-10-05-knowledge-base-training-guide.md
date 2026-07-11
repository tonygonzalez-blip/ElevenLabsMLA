# WC-10-05 · Knowledge Base and Training Requests (IT & Support)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

This lesson covers two destinations in the **IT & Support** module: **Knowledge Base**, the team's written article library, and **Training Requests**, the client-training pipeline. By the end you can find both in the left navigation, open each one, and say what each is for in the support workflow.

It also records something you need to know before you rely on either page. In the July 9, 2026 verification pass, both pages returned a not-found error and did not render. This guide documents how to reach them and marks everything on the page itself as parked until a live pass can confirm it. When a page you expect is not there, the move is to note it and escalate, not to guess what it would have shown. That is the habit this lesson builds.

## Audience and prerequisites

Internal Micrologic technicians working the IT & Support queue. You should be signed in and already know the global header from WC-01-01 and WC-01-02 (**Search ⌘K** and **Ask Shyne** sit in the top-right on every page). You should also know the IT & Support module from WC-10-01 through WC-10-04 (Support Tickets, Help Desk, System Alerts). Session-timeout behavior ("Still there?") is covered in WC-01-03 and is out of scope here.

## Navigation path

`IT & Support → Knowledge Base` and `IT & Support → Training Requests`. Both live in the module's left navigation, in the **SUPPORT** group, alongside **Support Tickets**, **Help Desk (Zoho)**, and **System Alerts**. The **AUDIT** group (**Audit Log**, **User Activity**, **Change History**) sits below them.

## Steps

One action per step. Hold each screen for two to three seconds before moving on. Steps 3 and 6 open a page that did not render in verification; read the parked note on each.

1. Open the **IT & Support** module and look at the left navigation. **Expected:** the rail shows a **SUPPORT** group (**ML Command Center**, **Site Detail (Demo)**, **Support Tickets**, **Help Desk (Zoho)**, **Knowledge Base**, **System Alerts**, **Training Requests**) and, below it, an **AUDIT** group (**Audit Log**, **User Activity**, **Change History**). The breadcrumb reads **Support ›** followed by the page you are on. This lesson works with two of the SUPPORT entries.

2. In the **SUPPORT** group, find **Knowledge Base**. **Expected:** **Knowledge Base** sits between **Help Desk (Zoho)** and **System Alerts**. This is the destination for the team's article library, the place you look up a documented fix instead of solving the same problem twice.

3. Click **Knowledge Base** to open it. **Expected (observed July 9, 2026):** the page did not load. It returned a bare error reading "Not Found" and "HTTP Error 404. The requested resource is not found." The article library did not render, so its metrics, category filters, list columns, and seed articles could not be read. Everything on the page itself is TBD — parked (NEW — support-kb.html returned HTTP 404 in the July 9 corpus; see the structured return). Do not fill the gap from memory or from an older document; record the not-found state and move on.

4. Note what the Knowledge Base is for, so you can use it once it renders. **Expected:** no screen change. The Knowledge Base is where the team keeps its documented fixes and procedures. The norm this program assumes is that when you close a ticket with a reusable fix, you write it up here so the next tech finds the answer in seconds. Its on-page structure (metrics, category filters, list columns, and the specific seed articles) stays parked until a live pass confirms it.

5. Return to the left navigation and find **Training Requests** in the **SUPPORT** group. **Expected:** **Training Requests** sits just below **System Alerts**. This is the destination for the client-training pipeline, the requests your team both files and fulfills.

6. Click **Training Requests** to open it. **Expected (observed July 9, 2026):** the page did not load. It returned the same bare error, "Not Found" and "HTTP Error 404. The requested resource is not found." The request pipeline did not render, so its metrics, type and category splits, and list columns could not be read. Everything on the page itself is TBD — parked (NEW — support-training.html returned HTTP 404 in the July 9 corpus; see the structured return). Record the not-found state; do not reconstruct the layout from an older pass.

7. Note what Training Requests is for. **Expected:** no screen change. Training Requests is the pipeline for client training, from the first ask through scheduling to a completed session. A technician uses it two ways: filing a request when a site asks for training, and picking up requests to fulfill. Its on-page fields and metrics stay parked until a live pass confirms them.

8. Look back at the global header, which stays put on every IT & Support page. **Expected:** **Search ⌘K** and **Ask Shyne** sit top-right next to the **MG** account button. These matter here for a reason: when a page like the Knowledge Base will not open, **Search ⌘K** still jumps you to other modules, and **Ask Shyne** can answer a plain-language question while the page is down. Verify anything Shyne returns before you act on it.

9. Recap the two destinations and the current state. **Expected:** no screen change. **Knowledge Base** and **Training Requests** both live in the **IT & Support** left navigation under **SUPPORT**. As verified on July 9, both returned a 404 and did not render, so their contents are parked. Before recording a walk of either page, re-verify it live; if it still returns 404, the finding goes to the platform team.

### Knowledge check

From the learning plan, reworded: a technician needs to (1) look up a documented how-to for a common fix, and (2) log that a client site has asked for formal point-of-sale training. Which IT & Support destination handles each? Answer: the how-to lookup belongs in **Knowledge Base**, and the training request belongs in **Training Requests**. (Note: as of this verification pass, neither page renders; the correct working answer is still the destination, and the escalation is to report the 404.)

## Expected results

You can locate **Knowledge Base** and **Training Requests** in the **IT & Support** left navigation and explain what each is for: the article library you read and contribute to, and the client-training pipeline you file into and fulfill. You also know the verified state as of July 9, 2026: both pages returned a not-found error, so their on-page contents are parked, and the right response to a missing page is to record it and escalate.

## Notes and troubleshooting (observed behavior only)

- Both target pages returned "Not Found" / "HTTP Error 404. The requested resource is not found." in the July 9, 2026 verification corpus. The left-navigation entries **Knowledge Base** and **Training Requests** are present and observed; the pages behind them did not render. This is a NEW discrepancy against the learning plan, which recorded full content for both on July 8 (see the structured return).
- Because the pages did not render, their metrics, category filters, list columns, and seed content are all TBD — parked. No layout is stated from memory or from an older pass.
- The observed 404 also applies to **System Alerts** (support-alerts.html) in the same July 9 corpus, which affects WC-10-04; reported separately.
- When any IT & Support page fails to open, **Search ⌘K** and **Ask Shyne** stay available in the header as a fallback for finding information. Treat an **Ask Shyne** answer as a draft to confirm, per its own guardrail.
- Session-timeout behavior ("Still there?", **Stay Logged In** / **Log Out Now**) can appear on any page after inactivity; it is out of scope here and covered in WC-01-03.

## Related lessons

WC-10-01 ML Command Center · WC-10-02 Support Tickets · WC-10-03 Help Desk (Zoho) · WC-10-04 System Alerts · WC-10-06 Site Detail (Demo) · WC-01-02 Search, Location Scope, and Ask Shyne.

**Verified against demo.washcentral.com on July 9, 2026.**

# WC-10-03 · Help Desk (Zoho) (IT & Support)

v1.1 · July 11, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 11, 2026.**

## Purpose

**Help Desk (Zoho)** is where a connected WashCentral tenant reads tickets from an outside Zoho Desk help desk, sitting next to WashCentral's own **Support Tickets**. In this training tenant the integration is not connected, so the embedded view renders its not-connected state: the ticket frame, filters, and count placeholders are all there, with an empty-state message pointing you at Settings. This lesson gets you to that page, over to the Zoho Desk integration settings where the connection status actually lives, and through the fields a technician reads to tell whether Zoho is talking to WashCentral. You never test the connection and you never edit it. This is a read-only lesson.

## Audience and prerequisites

Internal Micrologic technicians who handle IT and support work. You should be signed in and comfortable moving around the left rail, which is what WC-01-01 and WC-01-02 cover. You do not need any Zoho account or credentials for this lesson. Full configuration of the integration, field by field, is a separate lesson (WC-12-09); here you only read the status.

## Navigation path

**Help Desk (Zoho)** lives in the left rail under **IT & Support**, in the **SUPPORT** group, directly below **Support Tickets**. Reach it by the sidebar link; its direct URL (`zoho-tickets.html`) answered HTTP 404 on the July 9 sweep while the sidebar route renders the full view (captured July 11). The connection behind it is managed in Settings at `Settings → Integrations → Zoho Desk` (`settings-integrations-zoho.html`).

## Steps

One action per step. Hold each new screen for two to three seconds before moving on.

1. In the left rail, open **IT & Support** and look at the **SUPPORT** group. **Expected:** the SUPPORT group lists **ML Command Center**, **Site Detail (Demo)**, **Support Tickets**, **Help Desk (Zoho)**, **Knowledge Base**, **System Alerts**, and **Training Requests**, with an **AUDIT** group below it. **Help Desk (Zoho)** sits right under **Support Tickets**. That pairing is the point: **Support Tickets** are WashCentral's own platform tickets, while **Help Desk (Zoho)** is meant to mirror a Zoho Desk that lives outside the platform.
2. Click **Help Desk (Zoho)**. **Expected (observed July 11, 2026, via the sidebar link):** the embedded view loads with the breadcrumb **Support › Help Desk Tickets** and the header **Zoho Desk** / **Help Desk** with the subtitle **Support Tickets · Not connected** and mode chips **Live View**, **Real-time**, and **Live API**. A **← Settings** button and a **Refresh** button sit in the header. Across the top, five count placeholders all read **—**: **Showing**, **Open**, **Pending**, **Resolved**, and **More Available**. Below them sit a **Search tickets…** box, a status filter (**All Statuses**: Open, Pending, On Hold, Resolved, Closed), a priority filter (**All Priorities**: High, Medium, Low), and a second **Refresh**. The body shows the empty state: **Zoho Desk not connected** (with a plug icon), the line "Configure and authorize the integration to view tickets.", and a **Go to Zoho Desk Settings →** button. That is the not-connected state the July 8 plan described, now confirmed on screen; the parked marker from July 9 is cleared. The em-dash counts are the tell: the frame is healthy, it just has no connection to draw from — and the page itself points you at Settings, which is exactly where you go next.
3. Go to `Settings → Integrations → Zoho Desk`. **Expected:** the Settings area opens with **Integrations** selected in the left rail and the breadcrumb **SETTINGS › Zoho Desk**. This is where the empty state's **Go to Zoho Desk Settings →** button points, and it is where the connection is defined.
4. Read the Zoho Desk header band. **Expected:** the title reads **Zoho Desk** with a **Help Desk Integration** chip and a **⚠ Not Configured** status, the subtitle **Support Tickets · Settings**, and three capability chips: **OAuth 2.0**, **Live View**, and **Server-side Token**. **⚠ Not Configured** is the headline: nothing has been connected yet.
5. Read the four status tiles across the top. **Expected:** **Connection** shows **Not set**, **Data Center** shows **US**, **Org ID** shows **—**, and **Sync Direction** shows **both**. So the tenant has chosen the US data center and a two-way sync, but no connection has been authorized.
6. On the **Settings** tab, read the **CREDENTIALS** group. **Expected:** every credential is empty. **CLIENT ID** reads **—**, **CLIENT SECRET** reads **Not set**, **ORG ID** reads **—**, **DATA CENTER** reads **us**, **ACCESS TOKEN** reads **Not set**, **REFRESH TOKEN** reads **Not set**, **TOKEN EXPIRY** reads **—**, and **ACCOUNTS SERVER** reads **—**. With no client credentials and no tokens, there is no live link to Zoho, which is why the Help Desk view has nothing to display.
7. Read the **GENERAL**, **ROUTING**, **SYNC**, **BEHAVIOR**, and **MAPPING** groups below. **Expected:** **GENERAL** shows **ENABLED** **Yes**, **DATA CENTER** **us**, and **ADMIN NOTES** **—**; **ROUTING** shows **DEFAULT DEPARTMENT** **—** and **DEFAULT ASSIGNEE** **—**; **SYNC** shows **SYNC DIRECTION** **both**; **BEHAVIOR** shows **AUTO-CREATE CONTACTS** **Yes**; **MAPPING** shows **STATUS MAPPING** **—** and **SLA MAPPING** **—**. These are the routing and sync rules that would take effect once the connection is authorized. **ENABLED Yes** alongside **⚠ Not Configured** means the integration is switched on in intent but not yet connected.
8. Note the two tabs, **Settings** and **Instructions**. **Expected:** the page opens on the **Settings** tab, and an **Instructions** tab sits beside it. The step-by-step setup lives under **Instructions** and is covered in full in WC-12-09. Stay on **Settings** for this lesson.
9. Find the **Test Connection** and **Edit Configuration** buttons at the top right. Do not click either. **Expected:** **Test Connection** would ping Zoho with the saved credentials, and **Edit Configuration** would open the credential fields for editing. Both exercise or change the live integration, so both stay off-limits in this read-only lesson and in support work unless the change is yours to make.
10. Recap the page and the field that matters. **Expected:** **Help Desk (Zoho)** is the embedded Zoho Desk view, empty in this tenant because the integration reads **⚠ Not Configured** with **Connection** **Not set**. When a real tenant's Zoho tickets stop arriving, **TOKEN EXPIRY** on this page is the first field to read, and any configuration change belongs in WC-12-09. You never click **Test Connection** to find that out.

**[READ-ONLY] Self-check.** A client says their Zoho Desk tickets stopped showing in WashCentral. Which page do you open to read the connection status, which label tells you it is not connected, and which field do you check first for an expired token? (You open `Settings → Integrations → Zoho Desk`; the **⚠ Not Configured** status with **Connection** **Not set** tells you it is not connected; you check **TOKEN EXPIRY** first.)

## Expected results

From the **IT & Support** rail you can reach **Help Desk (Zoho)** and recognize its not-connected state: the **Support Tickets · Not connected** subtitle, the **—** count placeholders, and the **Zoho Desk not connected** empty-state card with its **Go to Zoho Desk Settings →** button. You follow that pointer to `Settings → Integrations → Zoho Desk` and read the real state there: **⚠ Not Configured**, **Connection** **Not set**, and empty credentials down the **CREDENTIALS** group. You can name **TOKEN EXPIRY** as the field to check when a connected tenant's tickets stop syncing, and you can point to the **Test Connection** and **Edit Configuration** buttons while knowing not to click them.

## Notes and troubleshooting (observed behavior only)

- **Reach the page via the sidebar, not the URL.** On July 9 the direct URL `zoho-tickets.html` returned **HTTP Error 404**; on July 11 the same page rendered in full when opened from the **SUPPORT** sidebar link (`verification/2026-07-11/digests/zoho-tickets-inapp.json`). The not-connected embedded view the July 8 plan described — mode chips (**Live View / Real-time / Live API**), status and priority filters, the **—** ticket-count placeholders, and the **Zoho Desk not connected** message with **Go to Zoho Desk Settings →** — is confirmed as observed. The July 9 parked marker is cleared.
- The view's **Refresh** buttons re-poll the (absent) connection and its **← Settings** / **Go to Zoho Desk Settings →** buttons navigate to the connector's Settings page. None of them changes anything, but this lesson still keeps to the one sidebar click and reads the rest.
- The integration itself is present and reads **⚠ Not Configured**. **ENABLED** is **Yes** but no credentials or tokens are stored, so there is no live connection. "Enabled" here is intent, not a connected state.
- **Test Connection** and **Edit Configuration** are never clicked in this lesson. Testing the connection reaches out to Zoho, and editing opens the credential fields; both are owner-only actions.
- The **Instructions** tab holds the setup walk-through and is not opened here. Full field-by-field configuration is WC-12-09.
- Troubleshooting cross-reference: when Zoho ticket sync fails on a connected tenant, the escalation path reads the status banner, confirms **Test Connection** exists without clicking it, and checks the **TOKEN EXPIRY** field (WC-PB-13).

## Related lessons

WC-10-02 Support Tickets · WC-12-09 Integrations (Zoho Desk) · WC-PB-13 Integration down.

**Verified against demo.washcentral.com on July 11, 2026.**

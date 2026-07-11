# WC-14-02 · Academy (LMS) — admin side (Academy)

v1.0 · July 9, 2026 · Author: Claude — Micrologic training project
**Verified against demo.washcentral.com on July 9, 2026.**

## Purpose

The WashCentral Academy has two halves. WC-14-01 covered the learner half, the courses and paths you take yourself. This lesson covers the other half: the **ADMIN** group in the Academy sidebar, where a Pre-Configuration technician would enroll client staff and pull completion and compliance reports. By the end you can find the admin side, name its four destinations, and state its current condition in the demo tenant. That condition is the main thing to carry away, because on July 9, 2026 all four admin pages return a server error. This is the first authored walk of the admin side, and it is a short one for that reason.

## Audience and prerequisites

Internal Micrologic technicians, mainly Pre-Configuration and Onboarding staff who set up training for client crews. You should be signed in and comfortable in the Academy from WC-14-01. No prior admin experience is assumed. Enrolling other people and editing courses are administrator actions; this lesson is read-only and does not perform them.

## Navigation path

From the left rail, open **Academy** (the same LMS you reach from the account menu's My Training entry, covered in WC-00-03). Inside the Academy, navigation moves through the left sidebar. The admin destinations sit in the sidebar's lower group, headed **ADMIN**, below the learner group.

## Steps

One action per step. Hold each new screen for two to three seconds before moving on. Steps 5 through 8 land on the same error page; that repetition is the finding, not an accident.

1. From the rail, click **Academy**. **Expected:** the Academy loads on your dashboard. The breadcrumb reads **Academy › My Dashboard**, the brand shows **WASHCENTRAL Academy**, and the left sidebar carries the Academy's own navigation rather than the main platform rail.

2. Read the top of the sidebar, then the group below it. **Expected:** the first group is headed **ACADEMY** and holds the learner pages: **My Dashboard**, **Course Catalog**, **Learning Paths**, and **My Learning**. These are WC-14-01's subject. A second group sits underneath.

3. Read the second sidebar group. **Expected:** the group is headed **ADMIN** and lists four destinations: **Admin Dashboard**, **Users & Enrollment**, **Course Management**, and **Reports & Compliance**. The learning plan refers to this group as "LMS Administration"; the sidebar itself labels it **ADMIN** (see Notes).

4. Note who works from the **ADMIN** group and the standing rule. **Expected:** learners live in the **ACADEMY** group; the **ADMIN** group belongs to the technician who enrolls and reports on other people's training. When these pages are live you treat them as read-only while authoring or training. You do not enroll real client staff and you do not edit courses during a training pass.

5. Open **Admin Dashboard**. **Expected (observed July 9, 2026):** the page does not load. The browser shows **Not Found**, with the body text "HTTP Error 404. The requested resource is not found." The admin dashboard's tiles are not observable: TBD — parked (new parked item; see Notes).

6. Open **Users & Enrollment**. **Expected:** the same **Not Found** / HTTP 404 page. This is where enrolling client staff is meant to happen once the page ships. Its list columns and enrollment controls are TBD — parked.

7. Open **Course Management**. **Expected:** the same 404. This is the course-management surface named in the sidebar. Its layout and controls are TBD — parked.

8. Open **Reports & Compliance**. **Expected:** the same 404 in the July 9 corpus. This is the page the learning plan names for tracking course completion and compliance across a client's crew. Its KPIs and report columns are TBD — parked. One extra detail: the July 9 capture of this page landed on a malformed address (`demo.washcentral.comml`) and never reached the server, so it is doubly unconfirmed (see Notes).

9. Interpret what the four errors mean together. **Expected:** the admin side is defined in the Academy navigation, but the four pages behind it are not yet deployed in this demo tenant, so each returns a server 404. This matches the LogicPOS screens (PARKED-ITEMS.md #2), which return 404 for the same reason: navigation present, page not yet built.

10. Know where completion tracking is meant to live. **Expected:** the learning plan directs course-completion and compliance reporting to **Reports & Compliance** inside the **ADMIN** group. Until that page deploys you cannot pull those reports here. Record the gap rather than route around it; this lesson gets re-recorded against live pages once they ship.

11. Recap. **Expected:** you can find the admin side in the Academy sidebar's **ADMIN** group, name its four destinations, and state today's condition: all four return HTTP 404 and their interiors are parked.

**Knowledge check.** Where does the learning plan say a Pre-Config tech pulls a client crew's course completion and compliance, and what is that page's state in the July 9 demo tenant? Answer: the **Reports & Compliance** page inside the Academy's **ADMIN** group; today it returns HTTP 404 (not yet deployed), so its contents are parked.

## Expected results

You can reach the Academy and read its sidebar as two groups: the learner **ACADEMY** group and the administrator **ADMIN** group. You can name the four **ADMIN** destinations exactly. And you know that every one of them currently returns "HTTP Error 404. The requested resource is not found," which means the admin side exists in the navigation but is not yet live for a technician to use.

## Notes and troubleshooting (observed behavior only)

- All four **ADMIN** pages return a server 404 in the July 9, 2026 corpus. **Admin Dashboard**, **Users & Enrollment**, and **Course Management** each render the IIS **Not Found** page ("HTTP Error 404. The requested resource is not found."). **Reports & Compliance** is worse off: its capture reached a malformed host (`demo.washcentral.comml`) and returned a DNS failure, so even the 404 could not be confirmed for that one page.
- Because the pages do not load, none of their contents are observable. Every tile, column, KPI, filter, and control on all four admin pages is parked: TBD — parked (new parked item — the LMS admin side 404s; described in the structured report, analogous to PARKED-ITEMS.md #2 for LogicPOS).
- Naming discrepancy: the learning plan calls the group "LMS ADMINISTRATION," but the live Academy sidebar renders the group header as **ADMIN**. The observed label wins; this lesson uses **ADMIN** and reports the difference.
- The only observable facts about the admin side come from the Academy dashboard page (`lms-home.html`), whose sidebar lists the **ADMIN** group and its four items. The admin pages themselves contribute nothing beyond the error.
- Read-only discipline still applies for when these pages ship: a technician documenting or training on them does not enroll real client staff and does not edit or publish courses. There is nothing to click today because nothing loads, but the rule stands for the re-record.
- This is the first authored walk of the Academy admin side. The lesson is deliberately thin and will be re-verified and re-recorded once the four pages deploy.

## Related lessons

WC-14-01 Academy (LMS) — learner side · WC-00-03 Account menu and personal setup (My Training route into the Academy).

**Verified against demo.washcentral.com on July 9, 2026.**

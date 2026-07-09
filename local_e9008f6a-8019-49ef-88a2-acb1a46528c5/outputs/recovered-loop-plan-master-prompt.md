# Recovered Loop Plan — AMG Portal Master Build Prompt

*Recovered from session transcript 2a716b74 (sent 3x on June 11, 2026). Paste this back into Claude Code / your loop as-is.*

---

You are a senior full-stack engineer, aviation operations software architect, Part 91 workflow expert, product designer, QA engineer, and Vercel deployment engineer.

You are working inside the GitHub repo:

amgaviation/amg1

This project is the AMG Aviation Group website and portal system. Build the portal system directly into this repo. Do not reference or rebuild any old AMG Connect app. Do not build a generic SaaS dashboard. This must feel like a premium aviation operations platform for a corporate Part 91 / private aviation support business.

Primary objective:

Build four fully functional, production-ready portals:

1. Client Portal
2. Crew Portal
3. Admin Portal
4. Partner Portal

The end result must be a high-detail, fully functioning aviation operations portal system with real navigation, role-based access, operational workflows, database-backed functionality, polished UI, error states, loading states, validation, and Vercel deployment readiness.

Do not leave fake functionality. Do not only build static screens. Every feature should either function fully or be clearly marked with a production-safe stub and exact integration instructions.

PROJECT CONTEXT

AMG Aviation Group provides aviation operational support including:

* Contract pilot support
* Ferry flights
* Maintenance repositioning
* Aircraft support
* Flight operations coordination
* Pilot network coordination
* Vendor and partner coordination
* Client aircraft support
* Trip logistics
* Crew coordination
* Operational documentation

This is a Part 91-focused aviation services platform, not an airline, charter marketplace, or Part 135 booking engine.

The portal must support real aviation workflows:

* Trip requests
* Aircraft profiles
* Crew assignments
* Maintenance repositioning
* Ferry requests
* Document management
* Quote requests
* Operational status tracking
* Vendor coordination
* Crew availability
* Client communication
* Admin approval workflows
* Internal operational oversight

TECHNICAL REQUIREMENTS

Before coding:

1. Inspect the repo structure.
2. Identify the framework, routing model, package manager, styling system, auth setup, database setup, and deployment configuration.
3. Produce a short implementation plan.
4. Identify all files that will be created or modified.
5. Do not overwrite unrelated site pages or break existing public website styling.

Build using the existing stack in the repo. If the repo already uses Next.js, React, TypeScript, Tailwind, Supabase, Prisma, or another system, follow the existing architecture. Do not introduce a new framework unless absolutely necessary.

The portal must be Vercel-ready.

Required standards:

* TypeScript where applicable
* Clean component structure
* Reusable layout components
* Reusable form components
* Reusable status badges
* Reusable tables/cards
* Role-based routing
* Server-side protection where applicable
* Client-side protection for UX only, never as the only security layer
* Form validation
* Loading states
* Empty states
* Error states
* Success states
* Responsive design
* No horizontal overflow
* No broken mobile layouts
* No exposed secrets
* No hardcoded API keys
* Environment variables documented
* Build must pass

DESIGN DIRECTION

The portal should match the AMG Aviation website style:

* Premium aviation
* Corporate jet aesthetic
* Dark luxury with refined contrast unless the existing theme says otherwise
* Clean, operational, high-trust interface
* Similar quality direction to jeskojets.com
* Minimal but detailed
* No childish gradients
* No generic SaaS dashboard look
* No cartoon icons
* No clutter

The portal should feel like software used by a professional flight department, owner-services office, aircraft manager, dispatcher, pilot coordinator, and aviation concierge.

Use aviation-specific language:

Use:

* Missions
* Trip Requests
* Aircraft Support
* Crew Assignment
* Maintenance Reposition
* Ferry Request
* Operational Review
* Dispatch Notes
* Crew Brief
* Vendor Coordination
* Aircraft Documents
* Passenger Manifest
* FBO Handling
* Ground Transport
* Mission Status

Avoid:

* Generic “tasks”
* Generic “projects”
* Generic “tickets”
* Startup-style language
* Airline booking language
* Charter marketplace language

AUTHENTICATION AND ROLE SYSTEM

Build a role-based portal system with these roles:

1. client
2. crew
3. admin
4. partner

Each user must have:

* id
* full_name
* email
* phone
* role
* company_name
* status: pending, approved, suspended
* created_at
* updated_at
* last_login_at

Access rules:

Client can access only Client Portal.
Crew can access only Crew Portal.
Partner can access only Partner Portal.
Admin can access Admin Portal and can view/manage all portal data.

If auth/database already exists, extend it carefully.
If auth/database does not exist, implement a clean structure compatible with Supabase or the existing backend pattern.

CLIENT PORTAL

Build a full Client Portal for aircraft owners, aircraft representatives, executive assistants, and authorized requesters.

Required pages:

1. Client Dashboard
2. New Trip Request
3. My Trip Requests
4. Trip Detail
5. Aircraft Profiles
6. Aircraft Documents
7. Quotes / Estimates
8. Maintenance Reposition Requests
9. Ferry Flight Requests
10. Crew Requests
11. Invoices / Billing
12. Messages / Updates
13. Profile / Company Settings

Client Dashboard must show:

* Upcoming missions
* Pending requests
* Recently completed missions
* Aircraft status summary
* Open quotes
* Outstanding documents
* Recent operational updates
* Quick actions:

  * Request Trip
  * Request Ferry
  * Request Maintenance Reposition
  * Request Crew
  * Upload Document
  * Contact Operations

New Trip Request form must include:

* Request type:

  * Passenger trip
  * Owner trip
  * Crew reposition
  * Ferry flight
  * Maintenance reposition
  * Aircraft support
* Aircraft selection
* Tail number
* Departure airport
* Arrival airport
* Alternate airport if applicable
* Requested departure date/time
* Requested arrival date/time if known
* Flexible time yes/no
* Passenger count
* Passenger names
* Special handling notes
* Pets onboard yes/no
* Baggage estimate
* Ground transport needed yes/no
* Catering needed yes/no
* FBO preference
* International trip yes/no
* Passport/customs notes if international
* Additional notes
* Urgency:

  * Standard
  * Priority
  * AOG / urgent support

Trip statuses:

* Draft
* Submitted
* Under Review
* Awaiting Client Info
* Quoted
* Approved
* Crew Assigned
* Scheduled
* In Progress
* Completed
* Cancelled

Trip Detail page must show:

* Mission summary
* Status timeline
* Aircraft
* Airports
* Dates/times
* Passenger manifest
* Crew assigned
* FBO information
* Ground transport
* Catering
* Documents
* Internal/client-visible notes
* Quote/estimate link
* Admin updates

Aircraft Profiles must show:

* Tail number
* Make
* Model
* Serial number
* Year
* Home base
* Aircraft category
* Passenger capacity
* Baggage notes
* Range notes
* Avionics notes
* Required crew
* Maintenance status
* Documents
* Insurance docs
* Registration docs
* Airworthiness docs
* Weight and balance docs
* Operating limitations if applicable

CREW PORTAL

Build a full Crew Portal for pilots, contract pilots, ferry pilots, maintenance reposition pilots, and support crew.

Required pages:

1. Crew Dashboard
2. Available Missions
3. My Assigned Missions
4. Mission Detail / Crew Brief
5. Availability Calendar
6. Credentials
7. Flight Experience Profile
8. Documents
9. Expenses
10. Messages
11. Profile Settings

Crew Dashboard must show:

* Assigned upcoming missions
* Pending offers
* Credential status
* Availability status
* Recent operational notices
* Required document updates
* Quick actions:

  * Update Availability
  * Upload Credential
  * View Mission Brief
  * Submit Expense
  * Message Operations

Crew Availability must allow:

* Available dates
* Unavailable dates
* Short-notice availability
* Preferred aircraft types
* Preferred regions
* Max days away
* Notes to AMG operations

Crew Credentials must track:

* Pilot certificate
* Medical certificate
* Passport
* Driver license
* FCC radio permit if applicable
* Type ratings
* Recurrent training
* Insurance-approved aircraft
* Total time
* PIC time
* SIC time
* Multi-engine time
* Turbine time
* Jet time
* Time in type
* International experience
* Mountain experience
* Oceanic experience if applicable

Credential statuses:

* Not Uploaded
* Pending Review
* Approved
* Rejected
* Expiring Soon
* Expired

Mission Detail / Crew Brief must show:

* Mission type
* Aircraft
* Tail number
* Airports
* Schedule
* Report time
* FBO details
* Client notes
* Passenger notes if crew-authorized
* Maintenance notes if applicable
* Ferry permit notes if applicable
* Required documents
* Crew pairing
* Duty expectations
* Expense policy
* Operations contact
* Accept / Decline assignment button
* Message admin button

Crew Expenses must allow:

* Expense date
* Mission association
* Category:

  * Airline
  * Hotel
  * Rental car
  * Rideshare
  * Fuel
  * Meals
  * Parking
  * Other
* Amount
* Receipt upload
* Notes
* Status:

  * Submitted
  * Under Review
  * Approved
  * Rejected
  * Paid

ADMIN PORTAL

Build a full Admin Portal for AMG internal operations.

Required pages:

1. Admin Dashboard
2. Mission Control
3. Trip Requests
4. Aircraft Management
5. Crew Management
6. Client Management
7. Partner Management
8. Quotes / Estimates
9. Maintenance / Ferry Board
10. Documents Review
11. Expense Review
12. Messages / Communications
13. User Approvals
14. Settings
15. Audit Log

Admin Dashboard must show:

* New trip requests
* Missions under review
* Missions requiring crew
* Maintenance/ferry requests
* Pending quote approvals
* Expiring crew credentials
* Pending user approvals
* Open partner requests
* Recent operational activity
* Key metrics:

  * active missions
  * pending requests
  * crew available
  * aircraft supported
  * pending documents
  * pending expenses

Mission Control must provide an operations board with columns:

* Submitted
* Under Review
* Awaiting Client Info
* Quoted
* Approved
* Crew Needed
* Crew Assigned
* Scheduled
* In Progress
* Completed
* Cancelled

Admin must be able to:

* View all missions
* Filter by status
* Filter by aircraft
* Filter by client
* Filter by crew
* Filter by mission type
* Assign crew
* Assign partner/vendor
* Update mission status
* Add internal notes
* Add client-visible notes
* Upload documents
* Generate/update quote
* Mark urgent
* Archive completed missions

Crew Management must allow admin to:

* View all crew
* Approve crew accounts
* Review credentials
* Mark credentials approved/rejected
* Track expirations
* Filter by aircraft type
* Filter by type rating
* Filter by location
* Filter by availability
* Assign crew to missions
* Suspend crew
* Add internal notes

Client Management must allow admin to:

* View clients
* Approve accounts
* Associate aircraft with client
* View client missions
* View documents
* View billing/quotes
* Add internal notes
* Suspend account

Aircraft Management must allow admin to:

* Add aircraft
* Edit aircraft
* Associate aircraft with clients
* Track documents
* Track maintenance status
* Track crew requirements
* Track base airport
* Track operational notes

Documents Review must allow:

* View uploaded documents
* Filter by document type
* Filter by user/client/aircraft/crew
* Approve
* Reject
* Request replacement
* Add rejection reason
* Track expiration dates

User Approvals must include:

* Pending clients
* Pending crew
* Pending partners
* Approve
* Reject
* Suspend
* Assign role
* Add company association

Audit Log must track:

* user created
* user approved
* trip submitted
* trip status changed
* crew assigned
* quote created
* quote approved
* document uploaded
* document approved/rejected
* expense submitted
* expense approved/rejected
* partner assigned
* admin note added

PARTNER PORTAL

Build a Partner Portal for vendors, service providers, FBO contacts, maintenance facilities, detailing providers, ground transport, catering, and aviation support partners.

Required pages:

1. Partner Dashboard
2. Service Requests
3. Assigned Requests
4. Request Detail
5. Company Profile
6. Service Capabilities
7. Documents / Insurance
8. Quotes / Responses
9. Messages
10. Profile Settings

Partner types:

* FBO
* Maintenance facility
* Ground transportation
* Catering
* Aircraft detailing
* Aircraft cleaning
* Fuel provider
* Hangar provider
* Aircraft parts/vendor
* Pilot services partner
* Other aviation service provider

Partner Dashboard must show:

* New assigned requests
* Pending quotes/responses
* Active support items
* Completed support items
* Document status
* Messages from AMG operations

Service Request Detail must show:

* Request type
* Aircraft if applicable
* Airport/location
* Required date/time
* Service description
* AMG notes
* Required response
* Upload quote button
* Accept/decline button
* Message AMG button

Partner Company Profile must include:

* Company name
* Primary contact
* Phone
* Email
* Service locations
* Airport codes served
* Service categories
* Hours of operation
* After-hours support yes/no
* Insurance documents
* W-9
* Vendor agreement
* Notes

DATABASE / DATA MODEL

Create or adapt database structures for:

users
profiles
clients
crew_profiles
partner_profiles
aircraft
missions
mission_passengers
mission_crew_assignments
mission_partner_assignments
mission_documents
quotes
quote_line_items
expenses
documents
messages
audit_logs
notifications

Minimum fields:

users/profiles:

* id
* email
* full_name
* phone
* role
* status
* company_name
* created_at
* updated_at

aircraft:

* id
* client_id
* tail_number
* make
* model
* serial_number
* year
* home_base
* aircraft_category
* passenger_capacity
* required_crew
* status
* notes
* created_at
* updated_at

missions:

* id
* client_id
* aircraft_id
* mission_type
* status
* departure_airport
* arrival_airport
* requested_departure_time
* requested_arrival_time
* passenger_count
* urgency
* client_notes
* internal_notes
* created_by
* created_at
* updated_at

documents:

* id
* owner_type
* owner_id
* document_type
* file_url
* status
* expiration_date
* uploaded_by
* reviewed_by
* review_notes
* created_at
* updated_at

quotes:

* id
* mission_id
* client_id
* status
* subtotal
* total
* notes
* created_by
* approved_by
* created_at
* updated_at

expenses:

* id
* mission_id
* crew_id
* category
* amount
* receipt_url
* status
* notes
* created_at
* updated_at

messages:

* id
* mission_id
* sender_id
* recipient_id
* body
* visibility
* created_at

audit_logs:

* id
* actor_id
* action
* entity_type
* entity_id
* metadata
* created_at

If using Supabase, include RLS policies that enforce:

* Clients see only their own data.
* Crew see only their own profile and assigned missions.
* Partners see only assigned partner requests.
* Admins see all data.
* Only admins can approve users, documents, expenses, and quotes.

FUNCTIONAL WORKFLOWS

Implement these core workflows fully:

Workflow 1: Client submits trip request

* Client fills form
* Mission created with Submitted status
* Admin sees it in Mission Control
* Audit log records submission
* Client sees status update

Workflow 2: Admin reviews trip

* Admin opens mission
* Adds internal notes
* Changes status to Under Review
* Requests more info or creates quote
* Client sees client-visible updates only

Workflow 3: Admin assigns crew

* Admin selects eligible crew
* Crew assignment created
* Crew sees mission in portal
* Crew can accept/decline
* Mission updates accordingly

Workflow 4: Crew uploads credentials

* Crew uploads document
* Admin reviews document
* Admin approves/rejects
* Credential status updates

Workflow 5: Partner receives service request

* Admin assigns partner to mission or support request
* Partner sees request
* Partner accepts/declines or uploads quote
* Admin sees response

Workflow 6: Expense submission

* Crew submits expense with receipt
* Admin reviews
* Admin approves/rejects
* Expense status updates

Workflow 7: Aircraft document management

* Client or admin uploads aircraft document
* Admin reviews
* Expiration tracked
* Dashboard warns when expiring

UI COMPONENTS REQUIRED

Build reusable components:

* PortalShell
* PortalSidebar
* PortalTopbar
* RoleBadge
* StatusBadge
* MissionStatusBadge
* AircraftCard
* MissionCard
* DataTable
* EmptyState
* LoadingState
* ErrorState
* ConfirmDialog
* FileUpload
* DateTimeField
* AirportCodeField
* UserAvatar
* Timeline
* NotesPanel
* MessageThread
* QuoteSummary
* ExpenseForm
* DocumentStatusCard

NAVIGATION STRUCTURE

Suggested routes:

/portal
/portal/client
/portal/client/dashboard
/portal/client/trips
/portal/client/trips/new
/portal/client/trips/[id]
/portal/client/aircraft
/portal/client/documents
/portal/client/quotes
/portal/client/billing
/portal/client/messages
/portal/client/settings

/portal/crew
/portal/crew/dashboard
/portal/crew/missions
/portal/crew/missions/[id]
/portal/crew/availability
/portal/crew/credentials
/portal/crew/expenses
/portal/crew/messages
/portal/crew/settings

/portal/admin
/portal/admin/dashboard
/portal/admin/mission-control
/portal/admin/trips
/portal/admin/trips/[id]
/portal/admin/aircraft
/portal/admin/crew
/portal/admin/clients
/portal/admin/partners
/portal/admin/quotes
/portal/admin/documents
/portal/admin/expenses
/portal/admin/user-approvals
/portal/admin/audit-log
/portal/admin/settings

/portal/partner
/portal/partner/dashboard
/portal/partner/requests
/portal/partner/requests/[id]
/portal/partner/profile
/portal/partner/documents
/portal/partner/quotes
/portal/partner/messages
/portal/partner/settings

If the repo uses a different routing convention, adapt to it.

VALIDATION REQUIREMENTS

Forms must validate:

* required fields
* valid email
* valid phone
* valid airport code format
* valid dates
* arrival date after departure where applicable
* passenger count cannot exceed aircraft capacity if known
* required document types
* positive expense amounts
* valid quote totals

AIRPORT FIELD REQUIREMENTS

Airport fields should accept ICAO/IATA/free text, but prefer ICAO format.

Examples:

* KPMP
* KFXE
* KFLL
* KTEB
* KPBI
* KOPF
* KBDL
* KHPN

If no airport database exists, implement a clean airport input component with format validation and future-ready structure.

QUOTE SYSTEM

Admin quote creation must support:

* Mission association
* Line items
* Quantity
* Unit price
* Notes
* Internal margin notes
* Client-visible notes
* Status:

  * Draft
  * Sent
  * Approved
  * Rejected
  * Cancelled

Line item examples:

* Crew day rate
* Airline repositioning
* Hotel
* Rental car
* Ground transportation
* FBO handling
* Maintenance support
* Ferry support
* Admin coordination
* After-hours support
* Other

DOCUMENT TYPES

Support these document types:

Aircraft:

* Registration
* Airworthiness certificate
* Insurance
* Weight and balance
* Operating handbook
* Maintenance tracking
* MEL if applicable
* LOA if applicable
* International documents

Crew:

* Pilot certificate
* Medical
* Passport
* Driver license
* Type rating
* Recurrent training
* Insurance approval
* Resume
* W-9
* Contract agreement

Partner:

* Insurance
* W-9
* Vendor agreement
* Service certificate
* Airport authorization
* Other compliance document

MESSAGING

Build internal portal messaging:

* Client to AMG
* Crew to AMG
* Partner to AMG
* Admin internal notes
* Mission-specific message threads

Visibility types:

* internal_admin_only
* client_visible
* crew_visible
* partner_visible

Do not expose internal admin notes to clients, crew, or partners.

NOTIFICATIONS

If real email/SMS is not configured, build notification records in the database and UI notification center.

Notification triggers:

* Trip submitted
* Status changed
* Quote sent
* Quote approved
* Crew assigned
* Crew accepted/declined
* Document approved/rejected
* Expense approved/rejected
* Partner assigned
* Partner responded

ADMIN SETTINGS

Admin settings should include:

* Mission status definitions
* User approval controls
* Document expiration warning threshold
* Default quote line item categories
* Partner service categories
* Aircraft categories
* Portal announcement message

SECURITY REQUIREMENTS

Security is mandatory.

Implement:

* route protection
* role checks
* server-side data filtering
* RLS if Supabase is used
* no exposed admin-only data
* no secret keys in client
* no hardcoded credentials
* no public file upload bypass
* validation before writes
* safe error messages

TESTING REQUIREMENTS

Before completion, run:

* install if needed
* lint
* typecheck if available
* build
* relevant unit tests if available

If commands are unavailable, document that clearly.

Create a manual QA checklist covering:

Client:

* login
* dashboard
* submit trip
* view trip
* upload document
* view quote

Crew:

* login
* update availability
* upload credential
* view mission
* accept/decline mission
* submit expense

Admin:

* approve users
* view mission control
* change mission status
* assign crew
* assign partner
* approve document
* approve expense
* create quote

Partner:

* login
* view assigned request
* accept/decline request
* upload quote
* message AMG

DELIVERABLES

At the end, provide:

1. Summary of what was built
2. Exact files created
3. Exact files modified
4. Database changes
5. Environment variables required
6. Setup instructions
7. Test commands run
8. Build result
9. Known limitations
10. Next recommended production improvements

Do not stop after building only screens. This must be a real portal foundation with working data flows, role routing, operational forms, and aviation-specific workflows.

Start by inspecting the repository and producing the implementation plan. Then execute the build in logical phases:

Phase 1:
Architecture, routes, role model, shared portal shell

Phase 2:
Database/schema/data layer

Phase 3:
Client Portal

Phase 4:
Crew Portal

Phase 5:
Admin Portal

Phase 6:
Partner Portal

Phase 7:
Messaging, documents, quotes, expenses, audit log

Phase 8:
Testing, build validation, Vercel readiness, final report

Use the existing AMG website theme. Do not damage the public marketing website.


all of the phases should be built together. do not stop in between. I want the full thing built now
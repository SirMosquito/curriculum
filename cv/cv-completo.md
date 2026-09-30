# André Bernardo

Senior Software Engineer · Coimbra, Portugal

[linkedin.com/in/andbernardo](https://linkedin.com/in/andbernardo) · andbernardo@outlook.com

Portuguese (native) · English (fluent)

> **This is the master CV — the long-form record.** `cv.md` is the version cut from it for
> publication. Edit facts here first, then decide what survives the cut. See `historico/` for the
> underlying evidence.

## Summary

Senior Software Engineer with six years on the same enterprise platform, promoted four times from
Graduate to Senior. Backend specialist in Java and event-driven integrations, now working full-stack
and owning technical design. Track record: 350+ features shipped on a multi-tenant ERP serving
~5,000 users across 4 tenants and 680+ database tables, with a particular focus on making
asynchronous integrations survive production.

## Work Experience

### Critical Software — Coimbra, Portugal · September 2020 – present

Six years on Pulsar, an ERP-style web platform running the company's own operations — projects,
planning, resourcing, HR, expenses, travel, procurement, invoicing and financial reporting.
Four tenants, ~5,000 users, 680+ tables. Java services with a dedicated datasource per external
system, connected over Kafka.

918 issues assigned and 847 resolved across the six years — roughly 150 per year, sustained. The
code confirms it: 540+ distinct issues carry commits of his across the platform's repositories,
about two-thirds of them features and one-third fixes — **350+ features shipped**.

---

#### Senior Engineer · January 2026 – present

Three changes in the nature of the work, not only in its volume: technical design became a
responsibility of its own, the profile went full-stack, and LLM tooling entered the product.

- Own the technical design of features, not only their implementation — technical plan, Java backend
  and Angular frontend end to end.
- Introduced spec-driven development with LLM tooling to the product: built the team's spec kit,
  then a multi-agent workflow that takes each issue through refinement, task breakdown,
  implementation and review, backed by a shared knowledge base of decisions and coding guidelines.
- Wrote and delivered the team's training track on AI tooling and on the platform's engineering —
  architecture, Jakarta EE beans and transactions, investigating a production problem.
- Automated intercompany purchase orders end to end: Business Central web services in AL (a query
  exposing the orders with Pulsar correlation ids, a codeunit creating them and sending them to the
  partner company), the Java datasource that validates vendor and G/L mappings before calling
  Business Central, email support on sync failures, and the errors surfaced in the Angular UI.
- Extended financial plans to multi-project views with a paginated API.
- Built contract and PO consumption tracking across projects from the data model up — five parts,
  from the information itself through consumption, editing and detail, comments, and the link to
  credit notes.
- Extended Suppliers Contracts with key-field columns and a renewal decision flow with
  notifications; added vendor and G/L account fields, intercompany invoicing restrictions and field
  limits to Order Requests and Purchases; added cancellation and approval/validation actions with
  permissions to Travels.
- Built the ITSM synchronisation for prevention schedules, with error handling and project mapping,
  and the pull API for OpsGenie.
- Optimised the project plan write endpoint further and consolidated queries across the module.
- Mentor junior developers through code review, onboarding support and best-practice guidance.

#### Professional Engineer · July 2023 – January 2026

Two and a half years across three distinct phases: a platform year, a year of large migrations, and
a year of new integrations and performance work.

**Integrations and migrations**

- Led the Jira Server → Cloud migration: impact assessment followed by a four-part rebuild that
  abstracted the HTTP layer and introduced parallel processing flows for both platforms, then
  removed the legacy options.
- Migrated the finance integration from Dynamics NAV to Business Central — moved to OData services,
  replaced NTLM with OAuth authentication, remodelled the employee fields and synchronised cost
  centres.
- Built the SAP Concur travel integration from scratch: the datasource itself, then full user, task
  and approver synchronisation, including backup approvers, role correction and inactive users.
- Replaced the default MS Project import/export behaviour with a purpose-built MPP/XML engine
  handling actuals, rates, company calendars, future resource absences, baselines, and compression
  of imported files.

**Reliability of asynchronous processing**

- Hardened Jira synchronisation under production load: gzip message compression, webhook encryption
  and authentication, paginated requests, message-size reduction, a full sync reading only changed
  issues, and a shorter sync interval.
- Extended system health checks to more event types and built a service that detects entities
  accumulating unprocessed, before users notice.
- Diagnosed and fixed production deadlocks in the baseline and event-log tables, and revised the
  underlying views.

**Performance, platform and technical debt**

- Optimised the project plan read and write endpoints — the hottest path in the product — alongside
  portfolio listings and the operations schedule.
- Ran runtime and dependency upgrades across the platform: Java 21, Wildfly 32, Quarkus and Kafka,
  including remediation of known vulnerabilities in the datasource services.
- Built the asynchronous file and Excel download service — four parts, from the generic service to
  its application across modules — and user-level advanced filter presets rolled out to seven groups
  of modules.
- Replaced SessionContext with PrincipalService across the whole codebase and removed obsolete
  properties and entities.

**Features built from the data model up**

- Complete modules: Office Presence (defaults, exceptions, requests on behalf of others, columns and
  advanced filters) and Technical Profiles (listing, creation, link to internal mobility).
- Contractual baselines with multiple plan versions for the same baseline, baseline schedule
  adjustment, version visualisation and contract revision import.
- Earned value management with overheads: forecast cost calculation, cost-weighted progress,
  automatic recalculation when the overhead type changes, and integration of the new EVM with
  Power BI. The new Portfolios dashboard sits on top of it.
- Financial flows: reading GL entries from NAV, automating the SO/PO request from the Billing Plan,
  and improvements to Invoice Requests.

#### Junior Engineer · September 2021 – July 2023

The axis moved to the Jira integration — the piece connecting Pulsar's planning to the teams' real
work — and to MS Project import/export.

- Owned the Jira datasource: import of epics, features and structures, progress roll-up, sprints,
  team allocation and synchronisation of reported effort.
- Made that synchronisation survive production: semaphores against concurrent processing of the same
  message, automatic retry after a sync failure, a full rewrite of the message-processing pipeline,
  and monitoring of inbound messages.
- Built MPP/XML import/export for Jira-integrated projects, including task and team validation, cost
  rates and MS Project constraint handling.
- Built the OpsGenie integration that pulls on-call periods into Operations tasks.
- Created the service Docker image and integrated it into the CI pipeline.
- Delivered Contract and Compensation Reviews, custom cost rate costing, the onboarding data model,
  and portfolio performance work with new financial columns.

#### Graduate Engineer · September 2020 – September 2021

Entry through invoicing and resource management.

- Built the Resource Analysis module almost end to end: filters, comments, bulk editing, bulk state
  changes, Excel export, notifications, permissions and performance.
- Delivered the Billing Plan and invoice request flows: sales lines, approval and rejection, lead
  company and intra-company routing, notifications.
- Built the Power BI reporting API and its paginated connector, and the indicators behind allocation
  management — hiring needs, spare capacity, free and idle time, efficiency, and allocation by
  project and by department.
- Extended projects with sale rates, multi-currency rates, team-level resource planning, project
  duplication and intervention hours.

---

**Across the six years**, three lines repeat in every role and say more than the module list does:
**integrations** (Jira Server and Cloud, OpsGenie, ITSM, SAP Concur, NAV/Business Central, Dynamics
CRM, Power BI, MS Project); **reliability of asynchronous processing** (semaphores, retries,
deadlocks, message size, compression, health checks, monitoring); and **performance and technical
debt** (query and endpoint optimisation, runtime upgrades, removal of obsolete code and tables,
vulnerability remediation).

### Prado - Cartolinas da Lousã, S.A. — Internship · Lousã, Portugal

September 2018 – June 2019

- Supported the Maintenance department and, on own initiative, built an internal task and job
  management web application in PHP, MySQL and JavaScript.
- First real software project — built before any formal programming training, and the reason for
  the move from mechanical engineering into software.

### EDP — Internship · Sines, Portugal

November 2017 – August 2018

- Designed a sprinkler network to contain ash escape from an ash silo, an environmental compliance
  requirement: system design, tender specification, site management and commissioning, and the
  preventive maintenance plan.

## Relevant Skills

**Languages & frameworks** — Java (Jakarta EE, Quarkus, Wildfly), Java 21, Angular, SQL

**Data** — SQL Server, Hibernate/JPA, relational modelling, query optimisation, deadlock resolution

**Architecture** — Apache Kafka, event-driven and asynchronous processing, REST and OData APIs,
microservices, OAuth2, Keycloak

**Tooling** — Docker, Jenkins, CI pipelines, integration testing, system health monitoring

**Integrations** — Jira (Server & Cloud), OpsGenie, ITSM, SAP Concur, Dynamics NAV, Business
Central, Dynamics CRM, Power BI, MS Project

**Business Central** — AL extensions: queries, codeunits, OData and SOAP web services

**Ways of working** — spec-driven development with LLM tooling, Agile/Scrum, code review, technical
mentoring, technical debt reduction

## Educational History

**Java Programming Course** — University of Coimbra · 2019 – 2020
Top of class distinction for highest academic performance.

**Master's in Mechanical Engineering** — University of Coimbra · 2012 – 2017

## Awards & Affiliations

**Engineering Ingenuity Award 2025** — Critical Software
For technical and engineering excellence.

**Lousã Volley Clube** — non-profit
Supported the organisation of the annual Summer Cup tournament: 200 teams, 3,000+ participants.

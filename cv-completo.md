# André Bernardo

Senior Software Engineer · Coimbra, Portugal

[linkedin.com/in/andbernardo](https://linkedin.com/in/andbernardo) · andbernardo@outlook.com

Portuguese (native) · English (fluent)

> **This is the master CV — the long-form record.** `cv.md` is the one-page version cut from it for
> the Canva layout. Edit facts here first, then decide what survives the cut. See `historico/` for
> the underlying evidence.

## Summary

Senior Software Engineer with six years on the same enterprise platform, promoted four times from
Graduate to Senior. Backend specialist in Java and event-driven integrations, now working full-stack
and owning technical design. Track record: 500+ features shipped on a multi-tenant ERP serving
~5,000 users across 4 tenants and 680+ database tables, with a particular focus on making
asynchronous integrations survive production.

## Work Experience

### Critical Software — Coimbra, Portugal

**Senior Engineer** · January 2026 – present
**Professional Engineer** · July 2023 – January 2026
**Junior Engineer** · September 2021 – July 2023
**Graduate Engineer** · September 2020 – September 2021

Six years on Pulsar, an ERP-style web platform running the company's own operations — projects,
planning, resourcing, HR, expenses, travel, procurement, invoicing and financial reporting.
Four tenants, ~5,000 users, 680+ tables.

**Scale of contribution**

- 918 issues assigned and 847 resolved over six years — roughly 150 delivered per year, sustained.
- Backend, data model and integrations for 372 features delivered as part of larger work, plus 181
  stories and tasks owned end to end: **500+ features shipped**.

**Integrations — the through-line of the six years**

- Owned the integration layer connecting the platform to Jira (Server and Cloud), OpsGenie, ITSM,
  SAP Concur, Dynamics NAV, Business Central, Dynamics CRM, Power BI and MS Project.
- Led the Jira Server → Cloud migration: impact assessment followed by a four-part rebuild that
  abstracted the HTTP layer and introduced parallel processing flows for both platforms.
- Migrated the finance integration from Dynamics NAV to Business Central — moved to OData services
  and replaced NTLM with OAuth authentication.
- Built the SAP Concur travel integration from scratch: the datasource itself, then full user, task
  and approver synchronisation, including backup approvers and role correction.
- Built the OpsGenie and ITSM integrations that pull on-call schedules into project operations,
  with error handling and project mapping.

**Reliability of asynchronous processing**

- Hardened Kafka-based synchronisation under production load: semaphores against concurrent
  processing of the same message, automatic retry after sync failures, gzip message compression,
  webhook authentication, and incremental full-sync reading only changed issues.
- Built system health checks that detect stalled queues and accumulating unprocessed entities
  before users notice, and extended them across event types.
- Diagnosed and fixed production deadlocks in baseline and event-log tables, and rewrote the
  message-processing pipeline of the Jira datasource.

**Performance and platform**

- Optimised the project plan read and write endpoints — the hottest path in the product — alongside
  portfolio listings and operations scheduling.
- Ran runtime and dependency upgrades across the platform: Java 21, Wildfly 32, Quarkus and Kafka,
  including remediation of known vulnerabilities in the datasource services.
- Created the service Docker image and integrated it into the CI pipeline.
- Built the asynchronous file and Excel download service used platform-wide, and user-level
  advanced filter presets rolled out to every module.

**Features built from the data model up**

- Complete modules: Resource Analysis, Technical Profiles, Office Presence, Suppliers Contracts,
  and contract/PO consumption tracking across projects.
- Replaced default MS Project import/export behaviour with a purpose-built MPP/XML engine handling
  actuals, rates, company calendars, resource absences and baselines.
- Contractual baselines with multiple plan versions, earned value management with overheads, and
  the Power BI reporting API behind allocation and portfolio dashboards.

**Since the promotion to Senior (2026)**

- Own the technical design of features, not only their implementation — technical plan, backend and
  Angular frontend end to end.
- Introduced spec-driven development with LLM tooling to the product, building the team's spec kit.
- Mentor junior developers through code review, onboarding support and best-practice guidance.

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

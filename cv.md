# André Bernardo

Senior Software Engineer

[linkedin.com/in/andbernardo](https://linkedin.com/in/andbernardo) · andbernardo@outlook.com

## Summary

Senior Software Engineer with six years on the same enterprise platform, promoted four times from
Graduate to Senior. Backend specialist in Java and event-driven integrations, now working full-stack
and owning technical design. 500+ features shipped on a multi-tenant ERP serving ~5,000 users across
4 tenants and 680+ database tables, with a particular focus on making asynchronous integrations
survive production.

## Work Experience

### Critical Software — Coimbra

September 2020 – Present

Six years on Pulsar, an ERP-style web platform running the company's own operations — projects,
planning, resourcing, HR, expenses, travel, procurement and financial reporting. Four tenants,
~5,000 users, 680+ tables.

**Senior Engineer** · January 2026 – Present

- Own the technical design of features, not only their implementation — technical plan, Java backend
  and Angular frontend end to end.
- Introduced spec-driven development with LLM tooling to the product, building the team's spec kit.
- Built contract and PO consumption tracking across projects from the data model up, plus Suppliers
  Contracts renewals, procurement and travel approval workflows.
- Built the ITSM synchronisation for prevention schedules, with error handling and project mapping.
- Mentor junior developers through code review, onboarding support and best-practice guidance.

**Professional Engineer** · July 2023 – January 2026

- Led the Jira Server → Cloud migration: impact assessment followed by a four-part rebuild that
  abstracted the HTTP layer and introduced parallel processing flows for both platforms.
- Migrated the finance integration from Dynamics NAV to Business Central — moved to OData services
  and replaced NTLM with OAuth authentication.
- Built the SAP Concur travel integration from scratch: the datasource itself, then full user, task
  and approver synchronisation, including backup approvers and role correction.
- Optimised the project plan read and write endpoints — the hottest path in the product — and fixed
  production deadlocks in the baseline and event-log tables.
- Ran platform-wide upgrades — Java 21, Wildfly 32, Quarkus, Kafka — including remediation of known
  vulnerabilities in the datasource services.
- Built the asynchronous file and Excel download service and the user-level advanced filter presets
  rolled out to every module.
- Delivered Office Presence and Technical Profiles as new modules, contractual baselines with
  multiple plan versions, and a purpose-built MPP/XML engine replacing default MS Project
  import/export.

**Junior Engineer** · September 2021 – July 2023

- Owned the Jira integration: import of epics, features and structures, progress roll-up, sprints,
  team allocation and synchronisation of reported effort.
- Made that synchronisation survive production — semaphores against concurrent processing of the
  same message, automatic retry after a sync failure, and a full rewrite of the message-processing
  pipeline.
- Built the OpsGenie integration that pulls on-call schedules into project operations, and MPP/XML
  import/export for Jira-integrated projects.
- Created the service Docker image and integrated it into the CI pipeline.

**Graduate Engineer** · September 2020 – September 2021

- Built the Resource Analysis module almost end to end: filters, comments, bulk editing and state
  changes, Excel export, notifications and permissions.
- Delivered the Billing Plan and invoice request flows — sales lines, approvals, and lead company
  and intra-company routing.
- Built the Power BI reporting API and its paginated connector, and the indicators behind allocation
  management: hiring needs, spare capacity, idle time and efficiency.

### Prado - Cartolinas da Lousã — Internship

September 2018 – June 2019

- Built an internal task-management webapp (PHP, MySQL, JavaScript) — first hands-on software
  project, ahead of formal training.

## Relevant Skills

- Java (Jakarta EE, Quarkus, Wildfly), Java 21
- Angular, REST and OData APIs, microservices
- SQL Server, Hibernate/JPA, relational database design, query optimisation
- Kafka & event-driven architectures
- Docker, CI/CD (Jenkins, GitHub Actions)
- System integrations (Jira, OpsGenie, ITSM, SAP Concur, Business Central, CRM, Power BI, MS Project)
- Spec-driven development with LLM tooling
- Agile/Scrum, technical mentoring & code reviews

## Educational History

### Java Programming Course — University of Coimbra

2019 – 2020

### Master's in Mechanical Engineering — University of Coimbra

2012 – 2017

## Affiliations & Awards

### Lousã Volley Clube — Non-profit

Supported the organisation of an annual volleyball tournament, Summer Cup — 200 teams,
3,000+ participants.

### Engineering Ingenuity Award 2025 — Critical Software

For technical and engineering excellence.

### Java Programming Course 2020 — University of Coimbra

Top of class distinction for highest academic performance.

# Factos prontos para o CV

Banco de material já traduzido para linguagem de CV, em **Inglês (GB)**. Copiar daqui, não
reescrever de raiz. Cada bloco tem a fonte ao lado, para não se perder de onde veio o número.

O `cv/cv-completo.md` já usa boa parte disto. O que está aqui e não está lá é
material de reserva, para versões orientadas a vagas específicas.

## Números com prova

> **350+ features shipped** — out of 540+ distinct issues with his commits across the platform's
> repositories (about two-thirds features, one-third fixes), within 918 assigned issues (847
> resolved) over six years.
>
> *Fonte: git, 30/09/2026, e Jira, 25/08/2026. Ver `jira-numeros.md`. O antigo "500+ features"
> somava sub-tarefas e issues próprias com sobreposição e contava defeitos como features.*

> **~150 issues delivered per year, sustained over six years**, on a platform of **680+ tables**
> serving **~5,000 users across 4 tenants**.

> **430 distinct features** reached production with backend, data model and integrations built by
> him.

## Cargo e progressão

> Critical Software — Coimbra, Portugal · September 2020 – present
> Graduate Engineer (2020) → Junior Engineer (2021) → Professional Engineer (2023) → **Senior
> Engineer (2026)**

Frase para o Summary, se for preciso condensar:

> Four promotions in six years on the same product, from Graduate to Senior Engineer.

## Bullets por tema

### Integrações — o diferenciador técnico

> Owned the integration layer between the platform and every external system it depends on — Jira
> (Server and Cloud), OpsGenie, ITSM, SAP Concur, Dynamics NAV, Business Central, Dynamics CRM,
> Power BI and MS Project.

> Led the migration of the Jira integration from Server to Cloud: impact assessment followed by a
> four-part rebuild that abstracted the HTTP layer and introduced parallel processing flows.

> Migrated the finance integration from Dynamics NAV to Business Central — moved to OData services
> and replaced NTLM with OAuth authentication.

> Built the SAP Concur travel integration from scratch, from the datasource itself to full user,
> task and approver synchronisation.

### Fiabilidade de sistemas assíncronos

> Hardened Kafka-based synchronisation under production load: semaphores against concurrent
> processing, automatic retry after sync failures, gzip message compression, webhook authentication,
> and system health checks that detect stalled queues before users notice.

> Diagnosed and resolved production database deadlocks and long-running query bottlenecks in the
> project planning and financial modules.

### Performance e dívida técnica

> Optimised the project plan read and write endpoints — the hottest path in the product — alongside
> portfolio listings and operations scheduling.

> Ran runtime and dependency upgrades across the platform: Java 21, Wildfly 32, Quarkus and Kafka,
> including remediation of known vulnerabilities in the datasource services.

### Funcionalidade de raiz

> Delivered complete modules from data model to API: Resource Analysis, Technical Profiles,
> Office Presence, Suppliers Contracts, and contract/PO consumption tracking across projects.

> Replaced default MS Project import/export behaviour with a purpose-built MPP/XML engine handling
> actuals, rates, company calendars, resource absences and baselines.

> Built the asynchronous file and Excel download service used across the platform, and the
> user-level advanced filter presets rolled out to every module.

### Senioridade — 2026

> Own the technical design of features, not only their implementation — technical plans, backend and
> Angular frontend end to end.

> Introduced spec-driven development with LLM tooling to the product, building the team's spec kit.

## Skills, com prova no histórico

Lista curta e defensável — cada item aparece em issues assinadas:

- Java (Jakarta EE, Quarkus, Wildfly), Java 21
- SQL Server, Hibernate/JPA, relational modelling, query optimisation
- Apache Kafka, event-driven and asynchronous processing
- REST and OData APIs, OAuth2, Keycloak
- Angular (since 2026)
- Docker, Jenkins, CI pipelines
- System integrations: Jira, OpsGenie, ITSM, SAP Concur, Dynamics NAV / Business Central,
  Dynamics CRM, Power BI, MS Project
- Spec-driven development with LLM tooling
- Integration testing, system health monitoring, technical debt reduction
- Agile/Scrum, code review, mentoring

**Lacunas honestas** (não pôr no CV enquanto não forem verdade): cloud pública (AWS/Azure/GCP),
Kubernetes, observabilidade com ferramenta dedicada. São o maior gap de mercado para um perfil
sénior em 2026.

## Frases a evitar

O CV actual tem estas, e nenhuma sobrevive a uma leitura atenta:

- "designed and maintained" — não diz o quê
- "improving reliability and performance" — sem número não é afirmação, é decoração
- "known for delivering reliable, scalable and well-structured solutions" — serve para qualquer
  candidato do mundo
- "collaborating effectively with cross-functional teams" — idem

Substituir sempre por: o que fez + com que tecnologia + que efeito teve.

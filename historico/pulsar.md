# Pulsar — o produto e o trabalho, ano a ano

Reconstruído a partir das 918 issues do Jira atribuídas entre Julho de 2020 e Agosto de 2026.
Escrito ao nível do produto e da tecnologia: sem nomes de clientes, códigos de projeto ou hostnames.

## O que é o Pulsar

Plataforma web tipo ERP que suporta as operações internas da empresa — projectos, planeamento,
recursos, RH, despesas, viagens, compras, facturação e relatório financeiro.

Escala conhecida:

- 4 tenants (instalações independentes, mesma plataforma, deployments separados)
- ~5.000 utilizadores no total
- 680+ tabelas no modelo relacional
- Backend Java em serviços, com datasources dedicados por sistema externo, ligados por Kafka

Em 2026 o trabalho passou a ser registado num novo projeto Jira, **Core Apps & Platforms (CAP)**,
com o Pulsar como uma das aplicações — o mesmo produto, novo enquadramento organizacional.

## Stack, com prova no histórico

| Área | Tecnologias que aparecem em issues assinadas |
|---|---|
| Linguagem / runtime | Java (Jakarta EE, Wildfly, Quarkus), migração para Java 21 e Wildfly 32 |
| Persistência | SQL Server, Hibernate/JPA, hierarchyid, views, bulk insert, deadlocks, tuning de queries |
| Mensageria | Apache Kafka (upgrades de versão, tamanho de mensagem, gzip, retries, semáforos) |
| APIs | REST, OData, OAuth2, Keycloak |
| Frontend | Angular (a partir de Abril de 2026) |
| Build / infra | Docker, Jenkins, pipelines de CI |
| Integrações | Jira (Server e Cloud), OpsGenie, ITSM, SAP Concur, Dynamics NAV, Business Central, Dynamics CRM, Power BI, MS Project (MPP/XML via Aspose Tasks) |
| Prática | testes de integração, health checks de sistema, refactoring, remoção de dívida técnica, correcção de vulnerabilidades em dependências |

## 2020–2021 · Graduate Engineer

Entrada pela facturação e pela gestão de recursos.

- **Billing Plan / pedidos de facturação** — sales lines, aprovação, rejeição, fluxos lead company
  e intra-company, notificações.
- **Resource Analysis** — módulo de avaliação de pessoas praticamente todo: filtros, comentários,
  edição em massa, mudança de estado em massa, exportação para Excel, notificações, permissões,
  performance.
- **Allocation Management e reporting Power BI** — API nova para Power BI, conector paginado, e uma
  série longa de indicadores: necessidades de contratação, capacidade adicional, tempo livre, tempo
  ocioso, eficiência, alocação por projecto e por departamento.
- **Projectos** — sale rates, taxas em várias moedas, planeamento de recursos por equipa,
  duplicação de projectos, horas de intervenção.

## 2021–2023 · Junior Engineer

O eixo passa a ser a **integração com o Jira** — a peça que liga o planeamento do Pulsar ao trabalho
real das equipas — e o **import/export de MS Project**.

- **Integração Jira (ds-jira)** — importação de épicos, features e estruturas; roll-up de progresso;
  sprints; alocação por equipa; sincronização de esforço reportado. Muito trabalho de robustez:
  processamento concorrente da mesma mensagem, semáforos, retry automático após erro de
  sincronização, refactor completo do processamento de mensagens, monitorização das mensagens
  recebidas.
- **Import/export MPP/XML em projectos integrados com Jira** — validação de tarefas e de equipas,
  gravação, cost rates, tratamento de constraints do MS Project.
- **Integração OpsGenie** — importação de períodos de on-call para as tarefas de Operações.
- **Infra** — criação da imagem Docker do serviço e integração no pipeline de CI.
- **Outros módulos** — Contract e Compensation Reviews, cálculo de custos com Custom Cost Rate,
  modelo de dados de onboarding, portfolios (performance e novas colunas financeiras).

## 2023 · Professional Engineer (promoção em Julho)

Ano de plataforma: coisas transversais que servem todos os módulos.

- **Download assíncrono de ficheiros e de Excel** — quatro partes, do serviço genérico até à
  aplicação em vários módulos.
- **Filtros avançados** — presets por utilizador e propagação a sete conjuntos de módulos.
- **EVM e overheads** — cálculo de custo previsto com overheads, progresso ponderado por custo,
  recálculo automático quando o tipo de overhead muda, integração do novo EVM com Power BI.
- **Novo dashboard de Portfolios** com integração Power BI.
- **Fiabilidade** — health checks alargados a mais tipos de evento, serviço para detectar acumulação
  de entidades por processar, testes de integração.
- **Dívida técnica** — SessionContext substituído por PrincipalService em toda a base de código,
  remoção de propriedades e entidades obsoletas, actualização do software de base.
- **Performance** — abertura do schedule de operações, listagem de portfolios.

## 2024 · Professional Engineer

Ano de migrações grandes.

- **NAV → Business Central** — migração para serviços OData, autenticação mudada de NTLM para OAuth,
  remodelação dos campos de employee, sincronização de centros de custo.
- **Baselines contratuais** — múltiplas versões de plano para a mesma baseline, ajuste do schedule
  da baseline, visualização de versões, importação de revisão contratual.
- **Motor próprio de MPP/XML** — carregamento de actuals, rates, calendários de empresa, ausências
  futuras dos recursos, baseline, compressão dos MPP importados. É a substituição progressiva do
  comportamento por omissão da biblioteca comercial.
- **Upgrades** — Kafka, Wildfly 32, Java 21.
- **Technical Profiles** — módulo novo: listagem, criação, ligação à mobilidade interna.
- **ds-jira** — pedidos paginados, redução do tamanho das mensagens, health check da sincronização.
- **SAP Concur** — criação do datasource (Dezembro), início da integração de viagens.

## 2025 · Professional Engineer

Ano de integrações novas e de performance.

- **SAP Concur** — sincronização completa de utilizadores e tarefas, aprovadores principais e de
  backup, correcção de roles, tratamento de inactivos.
- **Office Presence** — área nova de raiz: valores por omissão, excepções, pedido em nome de
  terceiros, colunas e filtros avançados.
- **Migração para Jira Cloud** — spike de impacto e depois quatro partes: abstracção dos pedidos
  HTTP, criação dos fluxos de processamento, fluxo específico de Cloud, remoção de opções legadas.
- **Melhorias de sincronização com o Jira** — mensagens em gzip, encriptação/autenticação dos
  webhooks, full sync a ler apenas issues alteradas, intervalo de sync reduzido.
- **Performance e concorrência** — optimização do GET e do PUT do plano de projecto, resolução de
  deadlocks em tabelas de baseline e de event log, revisão de views.
- **Segurança** — actualização de Wildfly, Quarkus e dependências dos datasources para corrigir
  vulnerabilidades.
- **Financeiro** — leitura de GL entries do NAV, automação do pedido de SO/PO a partir do Billing
  Plan, melhorias nos Invoice Requests.

## 2026 · Senior Engineer (promoção em Janeiro)

Três mudanças de natureza, não só de volume.

1. **Desenho técnico como responsabilidade própria.** Aparecem sub-tarefas de *Technical Plan*
   atribuídas a si — 29 no total, quase todas a partir de 2026. Deixa de ser só quem implementa
   para ser quem decide como se implementa.
2. **Frontend.** Sub-tarefas de *Implement Frontend* em Angular a partir de Abril de 2026. O perfil
   passa de backend puro a full-stack.
3. **Automação com LLMs.** Task "Develop Pulsar spec kit" (Abril de 2026) — spec-driven development
   aplicado ao produto. É a competência que o LinkedIn lista em primeiro lugar no escalão de Senior.

Entregas do ano:

- **Consumo de contratos e POs nos projectos** — cinco partes, de raiz: adição da informação,
  consumo, edição e detalhe, comentários, ligação às notas de crédito.
- **Suppliers Contracts** — colunas de campos-chave, decisão de renovação com notificações.
- **Order Requests e Purchases** — campos de vendor e conta G/L, restrições de facturação
  intercompany, limites de campos.
- **Travels** — novas acções de cancelamento e de aprovação/validação, permissões.
- **Sincronização ITSM** — tratamento de erros e mapeamento de projectos para os schedules de
  prevenção; API de pull para OpsGenie.
- **Office Presence** — extensões ao módulo criado em 2025.
- **Optimizações** do PUT do plano de projecto e consolidação de queries.

## O padrão que atravessa os seis anos

Três linhas que se repetem em todos os anos, e que valem mais no CV do que a lista de módulos:

1. **Integrações.** Jira (Server e Cloud), OpsGenie, ITSM, SAP Concur, NAV/Business Central, CRM,
   Power BI, MS Project. Ligar o Pulsar a sistemas de terceiros é a especialidade.
2. **Fiabilidade de processamento assíncrono.** Semáforos, retries, deadlocks, tamanho de mensagem,
   compressão, health checks, monitorização. O trabalho de fazer com que filas de mensagens
   sobrevivam à produção.
3. **Performance e dívida técnica.** Optimização de queries e de endpoints, upgrades de runtime,
   remoção de código e de tabelas obsoletas, correcção de vulnerabilidades.

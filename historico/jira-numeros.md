# Jira — o registo quantitativo

Extraído do Jira interno a **25 de Agosto de 2026**. Utilizador `agbernardo`.

Estes são os números falsificáveis que faltavam ao CV. Não são estimativas — cada um corresponde a
uma query que se pode voltar a correr.

## Totais

| Métrica | Valor |
|---|---|
| Issues atribuídas (total) | **918** |
| Issues atribuídas e resolvidas | **847** |
| Issues criadas por si (reporter) | **953** |
| Período coberto | Jul 2020 – Ago 2026 (6 anos) |

Média: cerca de **150 issues atribuídas por ano**, ou ~12 por mês, sustentado ao longo de seis anos.

## Repartição por tipo

| Tipo | Nº | Leitura |
|---|---|---|
| Sub-tarefas | 508 | a sua parte dentro de trabalho maior de outros |
| Não-sub-tarefas | 410 | trabalho de que é dono de ponta a ponta |
| — das quais Defect / Bug / Issue | 229 | correcção e suporte |
| — das quais Story / Task / Tech Debt | 181 | funcionalidade nova e dívida técnica |

## O que as sub-tarefas significam

As 508 sub-tarefas ligam-se a **430 issues-pai distintas**. O nome da sub-tarefa diz qual foi o
papel:

| Sub-tarefa | Nº | O que significa |
|---|---|---|
| *Implement services* / *Implement Backend* | **372** | fez a camada de serviços, base de dados e datasources da funcionalidade |
| *Technical Plan* | **29** | fez o desenho técnico da funcionalidade — quase todas a partir de 2026 |
| *Implement Frontend* | **8** | fez o frontend em Angular — todas a partir de Abril de 2026 |

**A leitura que interessa:** as 372 sub-tarefas de backend não são trabalho pequeno. Cada uma
corresponde a ter feito a camada de serviços, o modelo de dados e as integrações de uma
funcionalidade inteira. Somando com as 181 stories/tasks próprias, são **mais de 500
funcionalidades** com backend seu.

## Issues-pai distintas por ano

Contagem das funcionalidades em que entrou via sub-tarefa:

| Ano | Issues-pai |
|---|---|
| 2020 | 5 |
| 2021 | 48 |
| 2022 | 60 |
| 2023 | 87 |
| 2024 | 85 |
| 2025 | 100 |
| 2026 (até Agosto) | 45 |

O volume sobe de forma consistente até 2025. A descida aparente de 2026 é enganadora: é o ano em
que aparecem as sub-tarefas de *Technical Plan* e de *Implement Frontend*, ou seja, mais trabalho por
funcionalidade, não menos funcionalidades.

## Marcos com data

| Data | Marco |
|---|---|
| Jul 2020 | Primeira issue atribuída |
| Mar 2022 | Cria a imagem Docker do serviço e integra-a no pipeline de CI |
| Dez 2024 | Cria o datasource de SAP Concur do zero |
| Out 2025 | Arranca o programa de migração para Jira Cloud (spike + 4 partes) |
| Jan 2026 | Promoção a Senior Engineer |
| Abr 2026 | Primeira sub-tarefa *Implement Frontend* — começa a fazer Angular |
| Abr 2026 | Task "Develop Pulsar spec kit" — spec-driven development com LLMs |
| Jul 2026 | Trabalho passa a ser registado no projeto Core Apps & Platforms (CAP) |

## Queries para reproduzir

Todas contra o Jira interno da Critical Software.

```
# tudo o que me foi atribuído, do mais antigo ao mais recente
assignee = agbernardo ORDER BY created ASC

# o que sou dono de ponta a ponta
assignee = agbernardo AND issuetype != Sub-task ORDER BY created ASC

# a minha parte em trabalho maior (pedir o campo "parent" para ver a funcionalidade)
assignee = agbernardo AND issuetype = Sub-task ORDER BY created ASC

# backend/serviços/base de dados
assignee = agbernardo AND issuetype = Sub-task
  AND (summary ~ "Implement services" OR summary ~ "Implement Backend")

# desenho técnico
assignee = agbernardo AND issuetype = Sub-task AND summary ~ "Technical Plan"

# frontend Angular
assignee = agbernardo AND issuetype = Sub-task AND summary ~ "Implement Frontend"

# resolvidas
assignee = agbernardo AND resolution is not EMPTY
```

Os dados brutos estão em `raw/` (fora do git):

- `raw/jira-issues-atribuidas.tsv` — as 410 issues não-sub-tarefa, com datas, tipo, componentes e estado
- `raw/jira-subtasks-e-pais.tsv` — as 508 sub-tarefas com a issue-pai a que pertencem

## O que ainda falta medir

Os números acima dizem **volume**. Falta **impacto** — e é o impacto que convence num CV sénior:

- Ganho concreto de alguma optimização (antes/depois): tempo de resposta do GET/PUT do plano de
  projecto, tempo de sincronização com o Jira, tempo de build.
- Volume de mensagens Kafka por dia ou por mês.
- Nº de serviços / containers em produção.
- Quantas pessoas mentorou.
- Ganho real da automação com LLMs, e para quantos developers.

Se algum destes for obtido, entra no CV à frente de qualquer bullet actual.

# CV — lista de melhorias

Diagnóstico do `cv.md` feito em Agosto de 2026, para trabalhar sem pressa. Ordenado por impacto:
os dois primeiros pontos mudam a leitura do CV, o resto é afinação.

Marca com `[x]` o que fores fechando. Quando a secção "Informação que só eu tenho" estiver
preenchida, dá para reescrever o `cv.md` inteiro de uma vez.

---

## Prioridade alta

### [x] 1. Meter números na parte profissional (escala e volume feitos; falta impacto medido)

Seis anos descritos com "designed and maintained", "built and evolved", "improved reliability and
performance" — nada disto é falsificável, logo nada disto convence.

O detalhe incómodo: os **únicos** números do CV inteiro (200 equipas, 3.000 participantes) são do
torneio de voleibol. A conquista mais quantificada do CV é um hobby.

Dois ou três números concretos valem mais que os seis bullets actuais. Candidatos:

- ~~utilizadores do Pulsar~~ → ~5.000, em 4 tenants, 680+ tabelas
- ~~volume de trabalho~~ → 918 issues atribuídas, 847 resolvidas, 500+ funcionalidades com backend
  seu (ver `historico/jira-numeros.md`)
- nº de serviços / containers
- volume de mensagens Kafka (por dia/mês)
- alguma melhoria de performance medida (tempo de resposta, tempo de build, throughput)
- quantas pessoas mentorei

### [x] 2. Resolver a contradição sobre a senioridade

O cabeçalho diz "Senior Software Engineer", o Summary diz "Senior Software Engineer at Critical
Software" — e a Work Experience diz "Software Engineer". Quem lê com atenção nota, e lê como
inflação de título.

Dois caminhos:

- **Houve promoção** → mostrar a progressão com datas (`Software Engineer → Senior Software
  Engineer, 20XX`). Resolve este ponto e dá o ponto 3 de graça.
- **Não houve promoção formal** → o cabeçalho pode continuar a ser o cargo-alvo, mas o Summary tem
  de deixar de o afirmar como facto presente.

### [x] 3. Dar trajectória aos seis anos

Um cargo, uma lista plana de bullets, sem eixo temporal. O meu 2021 e o meu 2026 parecem a mesma
pessoa.

Mesmo sem promoção dá para estruturar por evolução: primeiro entregar features → depois arquitectura
e integrações → agora liderar automação. Mesma informação, mas passa a contar uma subida.

### [x] 4. Promover e concretizar o bullet dos LLMs (parcial — subiu e ligou-se à promoção; falta ganho/nº devs)

`Since 2026, leading LLM-powered automation flows to accelerate development workflows` é o que me
distingue de todos os outros backend engineers com Java e Kafka — e está em **último** lugar, vago.

- subir para 1.º ou 2.º bullet
- dizer que fluxos concretamente
- para quantos developers
- que ganho real produziu

### [~] 5. Reescrever o Summary (feito no `cv-completo.md`, por transpor para o `cv.md`)

A segunda metade ("known for delivering reliable, scalable and well-structured solutions,
collaborating effectively with cross-functional teams…") serve para qualquer candidato do mundo, e
ocupa quatro linhas do espaço mais valioso da página.

Um Summary útil dá: anos + domínio + diferenciador (a automação com LLMs) + alvo.

### [x] 6. Explicar o período 2017–2020

Mestrado acaba em 2017, Critical Software começa em Setembro de 2020. O curso de Java (2019–2020)
cobre parte, mas sobra tempo. A transição Engenharia Mecânica → Software também não é abordada em
lado nenhum.

Quem lê vai perguntar-se — mais vale responder eu.

---

## Afinação rápida

### [~] Localização e idiomas (feito no `cv-completo.md`, por transpor para o `cv.md`)

Não há cidade nem país no CV, e não há `Portuguese (native), English (fluent)`. Muitos recrutadores
filtram por localização, e num CV em Inglês GB a ausência custa. Ganho grande, espaço quase nulo.

### [~] Gaps nas Skills para um perfil sénior em 2026

Depois de ler o histórico do Jira, o quadro fica mais claro:

**Estavam em falta e existem mesmo** (já entraram no `cv-completo.md`):

- Angular — desde Abril de 2026
- testes de integração e health checks de sistema — trabalho recorrente desde 2023
- OAuth2, Keycloak, OData
- upgrades de runtime e correcção de vulnerabilidades (Java 21, Wildfly 32, Quarkus, Kafka)
- spec-driven development com LLMs

**Continuam a faltar de verdade** — não pôr no CV enquanto não forem verdade:

- nenhuma cloud pública (AWS / Azure / GCP)
- nenhum Kubernetes, apesar do "multi-container"
- nenhuma ferramenta dedicada de observabilidade

Estes três são o maior gap de mercado a atacar.

### [ ] Dizer pelo que foi o prémio

"Engineering Ingenuity Award 2025 — For technical and engineering excellence" é um prémio interno que
ninguém de fora reconhece. Uma oração a dizer *pelo quê* transforma-o de decoração em prova.

### [ ] Curso de Java aparece duas vezes

Está em Educational History e em Awards, e tem o mesmo peso visual que um mestrado de cinco anos.

### [x] Comprimir o parágrafo do Lousã Volley Clube

Três linhas — o texto corrido mais longo do CV — para uma actividade extra-profissional. Comprimido
para uma linha; o espaço libertado pagou a nova mini-entrada da Prado (ver item 6).

### [ ] Cortar ou reescrever o bullet dos módulos

`Delivered features across HR, project management, expenses, vacation workflows, and procurement`
descreve o produto, não o meu contributo. Que o ERP tem módulo de férias não diz nada sobre mim.

---

## Informação que só eu tenho

Preencher ao longo do tempo. É isto que desbloqueia a reescrita.

> **Nota (Ago 2026):** grande parte disto foi desbloqueada pela leitura do Jira interno — ver a
> pasta `historico/`, em particular `historico/jira-numeros.md`. O que continua por preencher aqui
> é o que o Jira não sabe.

**Escala do Pulsar**
- utilizadores: ~5.000, no total, distribuídos pelos 4 tenants
- tenants: 4 instalações independentes (mesma plataforma, deployments separados)
- serviços / containers: **por preencher**
- volume Kafka: **por preencher**
- outra métrica de escala: 680+ tabelas no modelo relacional

**Volume de trabalho** (fonte: Jira, 25/08/2026)
- 918 issues atribuídas, 847 resolvidas, entre Jul 2020 e Ago 2026 (~150/ano)
- 372 sub-tarefas de backend/serviços + 181 stories/tasks próprias = 500+ funcionalidades
- 430 issues-pai distintas com backend seu
- 29 sub-tarefas de *Technical Plan* (desenho técnico), quase todas a partir de 2026
- 8 sub-tarefas de *Implement Frontend* em Angular, todas a partir de Abril de 2026

**Impacto medido** (qualquer melhoria com antes/depois) — **por preencher, é o que falta**
- candidatos óbvios: GET/PUT do plano de projecto (optimizados em 2025–2026), tempo de
  sincronização com o Jira depois do gzip e do full-sync incremental, tempo de build

**Progressão de carreira** (fonte: LinkedIn)
- Graduate Engineer — Sep 2020 – Sep 2021
- Junior Engineer — Sep 2021 – Jul 2023
- Professional Engineer — Jul 2023 – Jan 2026
- Senior Engineer — Jan 2026 – presente
- título interno é "Senior Engineer" (sem "Software"); manter "Senior Software Engineer" no CV é uma
  liberdade de fraseio aceitável para leitores externos, não uma inflação — o cabeçalho passa a ser
  facto, não alvo.

**2017–2020**
- Nov 2017 – Aug 2018: estágio na EDP (Sines) — rede de aspersores para atenuar fuga de cinzas de
  um silo de cinzas (projecto 100% de engenharia mecânica/ambiental: caderno de encargos, gestão de
  obra, plano de manutenção preventiva). Sem relação com software.
- Sep 2018 – Jun 2019: estágio na Prado - Cartolinas da Lousã, S.A. (Lousã) — apoio ao departamento
  de Manutenção **e** criação de uma webapp de gestão integrada de trabalhos/tarefas da empresa
  (PHP, MySQL, JavaScript). **Este é o verdadeiro ponto de viragem**: primeiro projecto de software
  a sério, antes até do curso de Java.
- 2019 – 2020: Curso de Programação Java, Universidade de Coimbra, 19/20 (já no `cv.md`)
- narrativa completa: engenharia mecânica → estágio 100% mecânico (EDP) → estágio onde constrói uma
  webapp por conta própria (Prado) → formaliza com curso de Java, top da turma → Critical Software.
  É uma história de pivot genuína e demonstrável, não um buraco no CV.
- [x] decidido: entrou no `cv.md` como mini-entrada em Work Experience, depois da Critical Software
  ("Prado - Cartolinas da Lousã — Internship", Sep 2018 – Jun 2019, bullet sobre a webapp em
  PHP/MySQL/JS). Custo compensado comprimindo o parágrafo do voleibol para uma linha (ver item
  abaixo).

**Automação com LLMs**
- que fluxos: **spec-driven development** — task "Develop Pulsar spec kit" (Abril de 2026). O
  LinkedIn lista "Spec-Driven Development" como primeira competência do escalão de Senior.
  Falta detalhar o resto (GitHub Copilot, Claude Code).
- quantos developers afectados: **por preencher**
- ganho concreto: **por preencher**

**Mentoria**
- quantas pessoas: **por preencher** (o Jira não regista code reviews nem onboarding)

**Engineering Ingenuity Award 2025**
- pelo que foi: **por preencher** — em 2025 os candidatos plausíveis são a migração para Jira Cloud,
  as melhorias de sincronização (gzip, webhooks autenticados, full sync incremental) e a integração
  SAP Concur. Confirmar qual foi.

**Cargo-alvo** (afia tudo o resto)
- backend? platform? tech lead? outro:

---

## Restrição a respeitar sempre

Uma página é limite rígido (o layout do Canva é apertado). **Qualquer adição precisa de um corte
correspondente.** Melhores candidatos a corte: o parágrafo do voleibol, o bullet dos módulos, a
segunda metade do Summary, o curso de Java duplicado.

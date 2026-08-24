# CV — lista de melhorias

Diagnóstico do `cv.md` feito em Agosto de 2026, para trabalhar sem pressa. Ordenado por impacto:
os dois primeiros pontos mudam a leitura do CV, o resto é afinação.

Marca com `[x]` o que fores fechando. Quando a secção "Informação que só eu tenho" estiver
preenchida, dá para reescrever o `cv.md` inteiro de uma vez.

---

## Prioridade alta

### [x] 1. Meter números na parte profissional (parcial — escala feita, falta impacto medido)

Seis anos descritos com "designed and maintained", "built and evolved", "improved reliability and
performance" — nada disto é falsificável, logo nada disto convence.

O detalhe incómodo: os **únicos** números do CV inteiro (200 equipas, 3.000 participantes) são do
torneio de voleibol. A conquista mais quantificada do CV é um hobby.

Dois ou três números concretos valem mais que os seis bullets actuais. Candidatos:

- utilizadores do Pulsar
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

### [ ] 5. Reescrever o Summary

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

### [ ] Localização e idiomas

Não há cidade nem país no CV, e não há `Portuguese (native), English (fluent)`. Muitos recrutadores
filtram por localização, e num CV em Inglês GB a ausência custa. Ganho grande, espaço quase nulo.

### [ ] Gaps nas Skills para um perfil sénior em 2026

Ausências notórias:

- nenhuma cloud (AWS / Azure / GCP)
- nenhum Kubernetes, apesar do "multi-container"
- nada de testes nem observabilidade, apesar de reclamar melhorias de fiabilidade

Se sei, falta pôr. Se não sei, é o maior gap de mercado a atacar.

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

**Escala do Pulsar**
- utilizadores: ~5.000, no total, distribuídos pelos 4 tenants
- tenants: 4 instalações independentes (mesma plataforma, deployments separados)
- serviços / containers:
- volume Kafka:
- outra métrica de escala: 680+ tabelas no modelo relacional

**Impacto medido** (qualquer melhoria com antes/depois)
-

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
- que fluxos:
- quantos developers afectados:
- ganho concreto:

**Mentoria**
- quantas pessoas:

**Engineering Ingenuity Award 2025**
- pelo que foi:

**Cargo-alvo** (afia tudo o resto)
- backend? platform? tech lead? outro:

---

## Restrição a respeitar sempre

Uma página é limite rígido (o layout do Canva é apertado). **Qualquer adição precisa de um corte
correspondente.** Melhores candidatos a corte: o parágrafo do voleibol, o bullet dos módulos, a
segunda metade do Summary, o curso de Java duplicado.

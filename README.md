# Gabriel Longarai

**Engenheiro de Dados · Snowflake** — SnowPro Associate: Platform
Porto Alegre/RS · remoto para todo o Brasil

15+ anos em engenharia de dados e BI. Trabalho ponta a ponta: da ingestão contínua com Snowpipe
à transformação com Dynamic Tables, modelagem dimensional, otimização de custo e performance,
e a entrega em dashboards conectados direto ao warehouse.

[**Site**](https://www.longarai.com.br/) · [**LinkedIn**](https://www.linkedin.com/in/gabriellongarai/) · [**MeuDash**](https://meudash.com.br)

---

## Números do que já entreguei

| | |
|---|---|
| **144** | Dynamic Tables em produção |
| **161 milhões** | de linhas migradas entre contas Snowflake em ~4 h, validadas por hash |
| **76 endpoints** | de API em 7 marketplaces e ERPs ingeridos no Snowflake |
| **11 s → 3 ms** | consulta de precificação otimizada |
| **14+** | sistemas e ERPs integrados |

## Snowflake — o que eu faço

**Ingestão** — Snowpipe com auto-ingest (Google Pub/Sub + Cloud Storage), `COPY INTO`, external stages
e storage integrations; dados semiestruturados com `VARIANT`, `PARSE_JSON` e `LATERAL FLATTEN`.

**Transformação** — Dynamic Tables (refresh incremental e full, target lag, deduplicação com `QUALIFY`),
Streams & Tasks, `MERGE`, SCD Type 2.

**Modelagem e SQL** — modelagem dimensional (star schema), window functions, CTEs, cluster keys,
materialized views.

**Performance e custo** — dimensionamento de warehouse, tuning de query, clustering, redução de compute.

**Governança** — RBAC, Data Sharing, Time Travel, reconciliação entre plataformas com validação por hash,
data lineage sobre `OBJECT_DEPENDENCIES`.

**IA no warehouse** — Snowflake Cortex (Analyst, Agents, Search) e Semantic Views para consulta em
linguagem natural sobre dados reais.

## Projetos

**[CNPJ Brasil · Plataforma de Dados](https://github.com/longarai/cnpj-brasil-plataforma-dados)** — case aberto, de ponta a ponta.
Os dados públicos da Receita Federal (72,3 milhões de empresas) ingeridos no Snowflake em camadas
RAW → STAGING → MARTS com Dynamic Tables, e publicados em painel.
→ [Ver o portal ao vivo](https://longarai.github.io/cnpj-brasil-plataforma-dados/portal/)

**[MeuDash](https://meudash.com.br)** — SaaS B2B de analytics para e-commerce, em produção sobre Snowflake.
Extrator Python assíncrono com 76 endpoints em 7 marketplaces e ERPs (Mercado Livre, Amazon SP-API,
Shopee, TikTok Shop, Nuvemshop, Dafiti, Bling, Tiny), com OAuth2/HMAC/SigV4, retry com backoff e
checkpoints. Os dados fluem via GCS + Pub/Sub + Snowpipe, com transformação em Dynamic Tables
e latência de 1 hora.

**Migração completa de conta Snowflake** — 306 objetos (144 Dynamic Tables e uma tabela de 161 milhões
de linhas) em ~4 horas via Data Sharing, com runbook fase a fase, validação de integridade por hash e
recuperação de incidente restaurando 8,5 milhões de linhas.

**Ferramenta própria de data lineage** — 100% somente-leitura, sobre `OBJECT_DEPENDENCIES` e metadados
de conta, gerando o grafo de dependências do ambiente.

## Experiência

**Rede de Farmácias São João** — Engenheiro de Dados · mai/2025 – atual
Migração de BI legado QlikView → Snowflake + dbt, com auditorias comparativas automatizadas em Python
validando os números entre as plataformas antes do desligamento do legado. Pipeline de estoque ponta a
ponta a partir de eventos Kafka, com macros dbt reutilizáveis e deduplicação SCD Type 2.

**Consultoria independente** — Dados, IA & Automações · em paralelo, atual
Projetos próprios e para clientes, incluindo SaaS B2B de analytics para e-commerce em produção sobre Snowflake.

**CashMe** — Engenheiro de Dados · mar/2021 – mai/2025
Implementação de data lake Snowflake do zero e construção de dashboards para as áreas de negócio.

**Salux Informatização em Saúde** — Analista de BI · mar/2019 – mar/2021
Inteligência analítica hospitalar e análises preditivas (reinternação).

**2011 – 2019** — ViaFlow (FedEx), FIERGS (SESI/SENAI RS), NTConsult, Grupo Dimed, Blue TV,
WIN Solutions, Stefanini.

## Stack

**Warehouse e bancos** `Snowflake` `PostgreSQL` `Oracle` `SQL Server` `MongoDB`
**Linguagens** `Python` `SQL` `TypeScript` `DAX`
**Pipelines e orquestração** `dbt` `Airflow` `Airbyte` `n8n`
**Cloud e streaming** `Google Cloud` `Apache Kafka` `Supabase`
**BI** `Power BI` `Domo` `Streamlit`

## Certificações

- **SnowPro Associate: Platform** — Snowflake · mai/2026, válida até mai/2028
- **Introduction to Generative AI with Snowflake** — Snowflake / Coursera · fev/2026
- **Power BI Completo — Do Básico ao Avançado** — Udemy · jan/2023
- **Intro to SQL for Data Science** — DataCamp
- **Python for Data Science and AI** — IBM / Coursera · jun/2020

## Formação

CST em Inteligência Artificial — UniRitter (em andamento) · Gestão de TI — Estácio de Sá ·
Análise e Desenvolvimento de Sistemas — SENAC RS · Business Analytics — ESPM

---

## Contato

[www.longarai.com.br](https://www.longarai.com.br/) · [LinkedIn](https://www.linkedin.com/in/gabriellongarai/) · gslongarai@gmail.com

<sub>Este repositório guarda o código do site <a href="https://www.longarai.com.br/">www.longarai.com.br</a> — React + TypeScript com TanStack Start. Para rodar local: <code>npm i && npm run dev</code>.</sub>

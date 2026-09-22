import {
  Snowflake,
  Workflow,
  ShoppingBag,
  Database,
  type LucideIcon,
} from "lucide-react";
import certSnowflakeGenAI from "@/assets/cert-snowflake-genai.jpg.asset.json";
import certPowerBI from "@/assets/cert-powerbi-udemy.jpg.asset.json";
import certDataCampSQL from "@/assets/cert-datacamp-sql.jpg.asset.json";
import snowproAssociateBadge from "@/assets/snowpro-associate-platform.png.asset.json";

export const SITE_URL = "https://www.longarai.com.br";
export const WHATSAPP_NUMBER = "5551996961726";
export const WHATSAPP_DISPLAY = "(51) 99696-1726";
export const EMAIL = "gslongarai@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/gabriellongarai/";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const WA_DEFAULT = waLink("Olá Gabriel, quero o diagnóstico gratuito de dados & IA");

export const TECHNOLOGIES = [
  "Snowflake",
  "dbt",
  "Airflow",
  "SQL",
  "Python",
  "Power BI",
  "Domo",
  "n8n",
  "Mercado Livre API",
  "Shopee API",
  "Amazon SP-API",
  "TikTok Shop",
  "Bling",
  "Tiny",
  "Aton",
  "Totvs",
  "Linx",
];

export const INTEGRATED_SYSTEMS = [
  "Aton",
  "Bling",
  "Conta Azul",
  "Convenia RH",
  "Dynamics",
  "Hotmart",
  "Ideris",
  "Junix",
  "Linx",
  "Omie",
  "Pipedrive",
  "Tiny",
  "Totvs",
  "Tracksale",
];

export const INTEGRATION_TOOLS = [
  "IBM DataStage",
  "Hitachi Pentaho",
  "Microsoft SSIS",
  "Procedures PL/SQL e SQL Server",
  "Skyvia",
  "Stitch Data",
  "dbt",
  "Airflow",
  "n8n",
  "Python",
];

export const VIZ_TOOLS = [
  "Microsoft Power BI",
  "Domo",
  "IBM Cognos",
  "Oracle OBIEE",
  "MicroStrategy",
  "QlikView",
  "Tableau",
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    icon: Snowflake,
    title: "Consultoria Snowflake",
    description:
      "Implementação, otimização de performance e custos, Dynamic Tables, arquitetura de data lake. Reduza custo de warehouse e acelere suas queries.",
  },
  {
    icon: Workflow,
    title: "Pipelines de Dados (dbt + Airflow)",
    description:
      "Modelagem, orquestração e transformação de dados confiáveis e testáveis, do dado bruto ao dashboard.",
  },
  {
    icon: ShoppingBag,
    title: "Integração com Marketplaces",
    description:
      "Extração e integração de dados via APIs do Mercado Livre, Shopee, Amazon e TikTok Shop. Pedidos, anúncios, visitas, fretes e repasses centralizados no seu data warehouse.",
  },
  {
    icon: Database,
    title: "Integração com ERPs e Sistemas",
    description:
      "Conexão dos seus sistemas de gestão com a camada analítica: pedidos, notas fiscais, estoque, produtos, financeiro e RH.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Super parceiro, responsável e sempre tem uma solução na manga para os problemas que surgem. Qualquer equipe se beneficiaria em ter o Gabriel.",
    name: "Thalita Francisco",
    role: "Senior Data Analyst",
  },
  {
    quote:
      "Gabriel é um autodidata incansável, está sempre procurando novas tecnologias e formas de melhorar processos. Perfil voltado para inovação, com grande comprometimento em suas entregas.",
    name: "Fabio Meirelles Seguezio",
    role: "BI Tech Lead",
  },
];

export const STATS = [
  { value: "15+", label: "anos em BI e dados" },
  { value: "14+", label: "sistemas e ERPs integrados" },
  { value: "Snowflake", label: "Certificado GenAI" },
];

/* ------------------------------------------------------------------ */
/* Stack técnico categorizado                                          */
/* ------------------------------------------------------------------ */

export type TechCategory = {
  title: string;
  items: string[];
  note?: string;
};

export const TECH_STACK: TechCategory[] = [
  {
    title: "Data Warehouse & Bancos",
    items: [
      "Snowflake — Snowpipe, Dynamic Tables, Streams & Tasks, Semantic Views, Data Sharing, Time Travel, RBAC, Cortex AI",
      "PostgreSQL — RLS, funções, materialized views, pg_cron, FDW",
      "Oracle",
      "SQL Server (T-SQL)",
      "MongoDB",
      "MariaDB / MySQL",
    ],
  },
  {
    title: "Streaming & Mensageria",
    items: ["Apache Kafka", "Google Pub/Sub", "RabbitMQ"],
  },
  {
    title: "Cloud & Infra",
    items: [
      "Google Cloud Platform — Cloud Storage, Pub/Sub, IAM, service accounts",
      "Supabase — Edge Functions (TS/Deno), Auth, Vault",
      "Linux / VPS — Ubuntu, supervisord, SSH, deploy de pipelines",
    ],
  },
  {
    title: "Linguagens",
    items: [
      "Python avançado — asyncio/aiohttp, pandas, openpyxl",
      "SQL — Snowflake SQL, T-SQL, PL/SQL, PostgreSQL",
      "TypeScript (Deno)",
      "DAX e Power Query (M)",
      "Bash / PowerShell",
    ],
  },
  {
    title: "Integração & Orquestração",
    items: [
      "dbt · Airflow · n8n",
      "Airbyte",
      "APIs REST com OAuth2, HMAC-SHA256 e AWS SigV4",
      "IBM DataStage · Pentaho · SSIS · Skyvia · Stitch",
    ],
  },
  {
    title: "IA, ML & Automação",
    items: [
      "Machine Learning com scikit-learn — classificação, validação cruzada, importância de variáveis",
      "Agentes de IA e automação com LLMs — Claude Code, MCP",
      "Snowflake Cortex AI",
      "Web scraping com Playwright",
      "Transcrição e processamento de áudio/vídeo — Whisper, ffmpeg",
    ],
  },
  {
    title: "Apps & Visualização",
    items: [
      "Power BI — modelos tabulares, DAX avançado",
      "Domo",
      "Streamlit",
      "React + TypeScript — dashboards e frontends de dados",
      "Cognos · OBIEE · MicroStrategy · QlikView · Tableau",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Habilidades específicas                                              */
/* ------------------------------------------------------------------ */

export const SKILLS: string[] = [
  "Modelagem dimensional e SCD Type 2 — snapshots dbt, deduplicação por offset/chave",
  "Otimização de custo Snowflake — warehouses, clustering, Dynamic Tables incrementais",
  "Migração de ambientes de dados com validação por hash e runbook",
  "Auditoria e reconciliação de dados entre plataformas (BI legado × DW)",
  "Engenharia reversa de regras de negócio em sistemas legados (Qlik, Oracle, SAP)",
  "DAX avançado — modelos tabulares, rateios, USERELATIONSHIP, diagnóstico de medidas",
  "Anonimização de dados pessoais e LGPD em pipelines",
  "Data lineage e mapeamento de dependências",
  "Tuning de PostgreSQL — índices, seq scans, políticas RLS",
];

/* ------------------------------------------------------------------ */
/* Projetos                                                             */
/* ------------------------------------------------------------------ */

export type Project = {
  title: string;
  tag: string;
  description: string;
  category: "dados" | "ia";
  metric?: string;
  metricLabel?: string;
  tech?: string;
};

export const PROJECTS: Project[] = [
  {
    category: "dados",
    metric: "17 painéis",
    metricLabel: "1.229 métricas migradas",
    tag: "Migração · Qlik → Snowflake",
    title: "Migração de BI legado QlikView → Snowflake em rede farmacêutica",
    description:
      "Engenharia reversa e migração de 17 painéis Qlik — 98 tabelas, 1.229 métricas e 148 regras de negócio — para arquitetura Snowflake + dbt, com auditorias comparativas automatizadas em Python validando os números entre as duas plataformas antes do desligamento do legado.",
  },
  {
    category: "dados",
    metric: "30/60/90/180",
    metricLabel: "janelas de giro por loja e produto",
    tag: "Streaming · Kafka + dbt",
    title: "Pipeline de estoque end-to-end com Kafka e dbt",
    description:
      "Reconstrução da cadeia completa de estoque de varejo: eventos Kafka → estoque sintético → giro por janelas de 30/60/90/120/180 dias → posição diária por loja e produto. Macros dbt reutilizáveis com deduplicação SCD Type 2 por offset.",
  },
  {
    category: "dados",
    metric: "76 endpoints",
    metricLabel: "7 marketplaces e ERPs integrados",
    tag: "Integração · Marketplaces & ERPs",
    title: "Plataforma de integração multi-marketplace",
    description:
      "Extrator Python assíncrono (asyncio/aiohttp) com 76 endpoints em 7 marketplaces e ERPs — Mercado Livre, Amazon SP-API, Shopee, TikTok Shop, Nuvemshop, Dafiti, Bling, Tiny — com autenticação OAuth2/HMAC/SigV4, retry com backoff, checkpoints e arquitetura de plugins. Dados fluem no Snowflake via Snowpipe + Pub/Sub, com ~47 Dynamic Tables de transformação e latência de 1h.",
  },
  {
    category: "dados",
    metric: "161 milhões",
    metricLabel: "de linhas migradas em ~4 horas",
    tag: "Snowflake · Migração validada",
    title: "Migração completa de conta Snowflake com validação por hash",
    description:
      "Migração de 306 objetos (incluindo 144 Dynamic Tables e tabela de 161 milhões de linhas) entre contas Snowflake em ~4 horas, via Data Sharing, com runbook fase a fase, validação de integridade por hash de conteúdo e recuperação de incidente com restauração de 8,5 milhões de linhas.",
  },
  {
    category: "dados",
    metric: "R$ 10 mil",
    metricLabel: "de custos não rateados identificados",
    tag: "Power BI · DRE gerencial",
    title: "DRE gerencial completo em Power BI para e-commerce",
    description:
      "Modelo tabular com 53 tabelas e 27 páginas: DRE hierárquico em 4 níveis, margem de contribuição, EBITDA, ponto de equilíbrio, metas e conciliação de marketplaces. Diagnóstico em DAX identificou ~R$ 10 mil de custos de publicidade não rateados no resultado, com correção do mecanismo de alocação.",
  },
  {
    category: "dados",
    metric: "11s → 3ms",
    metricLabel: "consulta de precificação otimizada",
    tag: "Precificação · Marketplaces",
    title: "Motor de precificação para marketplaces",
    description:
      "Cálculo determinístico de preço ideal considerando custo, frete, comissão, impostos e margem — validado contra 100% de 35.211 registros reais. Otimização de consulta de 11 segundos para 3 milissegundos via materialized view.",
  },
  {
    category: "ia",
    metric: "ROC-AUC 0,84–0,90",
    metricLabel: "previsão de página 1 e top-10 na busca",
    tag: "ML · Ranqueamento de busca",
    title: "Modelos de ML para ranqueamento no Mercado Livre",
    description:
      "Modelos de classificação (Random Forest e Gradient Boosting) prevendo presença na página 1 e top-10 da busca, com ROC-AUC de 0,84 a 0,90, treinados sobre ~27 mil observações coletadas por scraping próprio, 152 mil reviews e 21 mil descrições de anúncios.",
  },
  {
    category: "ia",
    metric: "Share of Search",
    metricLabel: "participação de marca por categoria",
    tag: "Scraping · Share of Search",
    title: "Inteligência de mercado com scraping e Share of Search",
    description:
      "Coletor Playwright de resultados públicos de busca do Mercado Livre, parametrizado por termos, alimentando Dynamic Tables no Snowflake e dashboards de participação de marca na busca (Share of Search) por categoria.",
  },
  {
    category: "dados",
    metric: "100% read-only",
    metricLabel: "grafo de dependências do ambiente",
    tag: "Snowflake · Metadados",
    title: "Ferramenta de data lineage sobre metadados Snowflake",
    description:
      "Ferramenta própria, 100% somente-leitura, que mapeia dependências entre objetos (tabelas, views, Dynamic Tables) a partir de OBJECT_DEPENDENCIES e metadados de conta, gerando o grafo de linhagem do ambiente.",
  },
  {
    category: "dados",
    metric: "~69 milhões",
    metricLabel: "de registros de CNPJ modelados",
    tag: "Dados públicos · Receita Federal",
    title: "Integração da base nacional de CNPJs (~69 milhões de registros)",
    description:
      "Ingestão e modelagem da base pública da Receita Federal (empresas, estabelecimentos, Simples) no Snowflake, com tabelas consolidadas para consulta e enriquecimento de dados cadastrais.",
  },
  {
    category: "ia",
    metric: "AUC 0,90",
    metricLabel: "score de probabilidade de venda por anúncio",
    tag: "IA generativa · Marketplace",
    title: "IA que escreve anúncios que vendem mais",
    description:
      "Sistema de ML que gera títulos e descrições de anúncios de marketplace aprendendo com 38.854 anúncios, 152.269 avaliações de clientes e 21.465 descrições da concorrência. Cada sugestão recebe um score de probabilidade de venda (AUC 0,90 para prever posição top-10 na busca). Entregue como aplicação web com 70 sugestões por rodada de análise.",
    tech: "Python · scikit-learn · Streamlit",
  },
  {
    category: "ia",
    metric: "5.974.012",
    metricLabel: "empresas classificadas em tiers A/B/C/D",
    tag: "ML · Lead scoring B2B",
    title: "Lead scoring sobre a base CNPJ do Brasil",
    description:
      "Modelo de propensão que classificou 5.974.012 empresas em tiers A/B/C/D (AUC-ROC 0,8968), isolando 2.131.941 contatos priorizados com e-mail para prospecção B2B. De “ligar para todo mundo” para “ligar primeiro para quem tem mais chance de fechar”.",
    tech: "Python · ML · Snowflake · Power BI",
  },
  {
    category: "ia",
    metric: "FinOps por conversa",
    metricLabel: "custos e performance em linguagem natural",
    tag: "Agente de IA · Snowflake Cortex",
    title: "Agente de IA para custos de nuvem (FinOps)",
    description:
      "Agente Snowflake Cortex que responde em linguagem natural sobre custos e performance da conta: “quais queries mais caras essa semana?” vira resposta imediata, sem analista no meio.",
    tech: "Snowflake Cortex Agent · Cortex Search · Semantic Views",
  },
  {
    category: "ia",
    metric: "BI sem dashboard",
    metricLabel: "pergunta em português, resposta calculada",
    tag: "Cortex Analyst · Camada semântica",
    title: "Converse com seus dados de vendas",
    description:
      "Camada semântica (GMV, tarifas, frete, custo de ads, calendário, canal, produto) que permite ao gestor perguntar em português e receber resposta calculada sobre o warehouse — BI sem depender de dashboard pronto.",
    tech: "Snowflake Semantic Views · Cortex Analyst",
  },
  {
    category: "ia",
    metric: "On-premise",
    metricLabel: "transcrição e resumo sem os dados saírem da empresa",
    tag: "IA · Áudio e vídeo",
    title: "IA que assiste, transcreve e resume horas de vídeo",
    description:
      "Pipeline que transforma gravações (reuniões, webinars, treinamentos) em transcrição por timestamp e resumo executivo em PDF com diagramas. Roda inclusive local/on-premise (GPU própria, Whisper large-v3) — os dados não saem da empresa.",
    tech: "Whisper · ffmpeg · Python",
  },
  {
    category: "ia",
    metric: "Em produção",
    metricLabel: "insights diários gerados por IA sobre KPIs reais",
    tag: "LLM · Produto B2B",
    title: "Insights automáticos de gestão por IA",
    description:
      "Módulo em produção num app B2B de analytics para e-commerce: a IA lê os KPIs do usuário, gera insights diários de gestão e responde perguntas em linguagem natural sobre os dados reais, com streaming de resposta.",
    tech: "Supabase Edge Functions · LLM via gateway · PostgreSQL",
  },
  {
    category: "ia",
    metric: "Google Ads API v20",
    metricLabel: "campanhas operadas por linguagem natural",
    tag: "IA generativa · Marketing",
    title: "IA generativa para marketing e mídia paga",
    description:
      "Geração de criativos (imagem e vídeo com avatar digital), legendas e banners, e operação de campanhas Google Ads por linguagem natural via servidores MCP próprios (cobertura da Google Ads API v20).",
    tech: "MCP · APIs de geração de imagem/vídeo · Python",
  },
  {
    category: "ia",
    metric: "97.416 anúncios",
    metricLabel: "111 oportunidades de margem e 46 riscos mapeados",
    tag: "Automação · Inteligência competitiva",
    title: "Pesquisa de mercado automatizada em marketplace",
    description:
      "Coleta e análise de 97.416 anúncios da concorrência em 1.775 termos de busca (69 marcas), cruzados com 2.222 produtos do cliente. Resultado: 111 oportunidades de aumento de margem e 46 riscos de competitividade identificados, com gap de preço por produto.",
    tech: "Automação de browser com anti-detecção · Python · pandas",
  },
  {
    category: "ia",
    metric: "21.951 anúncios",
    metricLabel: "61 campos auditados em 4 contas",
    tag: "Automação · Auditoria em escala",
    title: "Auditoria de portfólio de anúncios em escala",
    description:
      "Análise de 21.951 anúncios em 4 contas de marketplace (61 campos por anúncio): anúncios pausados, sem estoque, oportunidades ocultas e health score por conta.",
    tech: "API Mercado Livre · Python · dashboard interativo",
  },
  {
    category: "ia",
    metric: "R$ 4 milhões",
    metricLabel: "imobilizados em estoque parado mapeados",
    tag: "Dados · Precificação",
    title: "Precificação orientada a dados",
    description:
      "Estudo de 7.185 SKUs que mapeou ~R$ 4 milhões imobilizados em estoque parado (51,6% dos SKUs sem nenhuma venda), 123 SKUs com margem negativa e plano de ajuste que elevou a margem média de 14,28% para 14,74%.",
    tech: "Snowflake · Python · Power BI",
  },
  {
    category: "ia",
    metric: "Multi-loja",
    metricLabel: "reputação consolidada por unidade",
    tag: "Automação · Reputação",
    title: "Monitoramento de reputação multi-loja",
    description:
      "Extração automatizada de avaliações do Google de todas as lojas de uma rede, consolidadas em dashboard de satisfação por loja.",
    tech: "Playwright · Power BI",
  },
  {
    category: "ia",
    metric: "Checkpoint & retomada",
    metricLabel: "contatos B2B enriquecidos automaticamente",
    tag: "Automação · Prospecção",
    title: "Enriquecimento automático de listas B2B",
    description:
      "Robô que parte de uma lista de empresas e retorna contatos (WhatsApp, Instagram, e-mail, site, CNPJ) com checkpoint e retomada automática.",
    tech: "Python · busca programática · scraping",
  },
];

export const EDUCATION = [
  {
    label: "CST em Inteligência Artificial",
    org: "UniRitter",
    status: "Em andamento",
  },
];

/* ------------------------------------------------------------------ */
/* Certificações                                                        */
/* ------------------------------------------------------------------ */

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  detail?: string;
  url?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "SnowPro Associate: Platform",
    issuer: "Snowflake",
    date: "Mai 2026",
    detail: "Válida até Mai 2028 · ID S149902-260501-SOL",
    url: snowproAssociateBadge.url,
  },
  {
    title: "Introduction to Generative AI with Snowflake",
    issuer: "Snowflake · Coursera",
    date: "Fev 2026",
    detail: "Programa de cursos integrados",
    url: certSnowflakeGenAI.url,
  },
  {
    title: "Power BI Completo — Do Básico ao Avançado",
    issuer: "Udemy",
    date: "Jan 2023",
    detail: "10 horas",
    url: certPowerBI.url,
  },
  {
    title: "Intro to SQL for Data Science",
    issuer: "DataCamp",
    date: "Certificado #5.588.764",
    url: certDataCampSQL.url,
  },
  {
    title: "Python for Data Science and AI",
    issuer: "IBM · Coursera",
    date: "Jun 2020",
    url: "https://www.credly.com/badges/d31308ba-11ad-4c39-92f1-9aa905038629",
  },
];

export const DASHBOARDS = [
  {
    title: "Dashboard de Vendas",
    url: "https://app.powerbi.com/view?r=eyJrIjoiYjNiNTQyOTEtN2Q3YS00NTVhLWJlNzMtNmNhYjVhNjY0NWI1IiwidCI6IjY0ZTgyODYyLWNmNTUtNGVkYy1iNTIyLWQ1NzZhY2M4NjcyNyJ9",
  },
  {
    title: "Dashboard Operacional",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMTA1MWFkOWEtYTUzMS00Nzg4LTg5MDUtMGM2MjNjYTk5ZmQzIiwidCI6IjY0ZTgyODYyLWNmNTUtNGVkYy1iNTIyLWQ1NzZhY2M4NjcyNyJ9",
  },
];

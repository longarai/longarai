import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Check } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFAB } from "@/components/site/WhatsAppFAB";
import { Reveal } from "@/components/site/Reveal";
import { SITE_URL, waLink } from "@/lib/site-data";
import snowproBadge from "@/assets/snowpro-associate-platform.png.asset.json";

const TITLE = "Consultoria Snowflake no Brasil | Gabriel Longarai";
const DESCRIPTION =
  "Implementação, otimização de performance e custos, Dynamic Tables e migração validada em Snowflake. Consultor certificado SnowPro. Atendimento remoto em todo o Brasil.";
const PAGE_URL = `${SITE_URL}/consultoria-snowflake`;

const WA_SNOWFLAKE = waLink("Olá Gabriel, quero falar sobre consultoria Snowflake");

const DELIVERABLES = [
  "Implementação e arquitetura de data lake em Snowflake, do zero ou evoluindo o ambiente atual",
  "Otimização de custos: dimensionamento de warehouses, auto-suspend, clustering e Dynamic Tables incrementais",
  "Migração de contas e ambientes com runbook fase a fase e validação de integridade por hash",
  "Dynamic Tables, Snowpipe, Streams & Tasks, Time Travel, Data Sharing e RBAC",
  "IA sobre o warehouse: Snowflake Cortex AI, Cortex Analyst e Semantic Views — perguntas em português respondidas sobre os seus dados",
  "Pipelines com dbt + Airflow: camadas bronze/silver/gold testáveis, documentadas e auditáveis",
];

const CASES = [
  {
    metric: "161 milhões",
    metricLabel: "de linhas migradas em ~4 horas",
    title: "Migração completa de conta Snowflake com validação por hash",
    description:
      "306 objetos migrados entre contas Snowflake (incluindo 144 Dynamic Tables) via Data Sharing, com runbook fase a fase e validação de integridade por hash de conteúdo.",
  },
  {
    metric: "17 painéis",
    metricLabel: "1.229 métricas migradas do BI legado",
    title: "Migração de BI QlikView → Snowflake em rede farmacêutica",
    description:
      "Engenharia reversa de 98 tabelas, 1.229 métricas e 148 regras de negócio para arquitetura Snowflake + dbt, com auditorias comparativas automatizadas em Python.",
  },
  {
    metric: "FinOps por conversa",
    metricLabel: "custos e performance em linguagem natural",
    title: "Agente de IA para custos da conta Snowflake",
    description:
      "Agente Snowflake Cortex que responde em linguagem natural sobre custos e performance: “quais as queries mais caras essa semana?” vira resposta imediata.",
  },
];

export const Route = createFileRoute("/consultoria-snowflake")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Consultoria Snowflake",
          serviceType: "Consultoria em Snowflake e engenharia de dados",
          description: DESCRIPTION,
          url: PAGE_URL,
          areaServed: "BR",
          provider: {
            "@type": "Person",
            name: "Gabriel Longarai",
            url: `${SITE_URL}/`,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Consultoria Snowflake", item: PAGE_URL },
          ],
        }),
      },
    ],
  }),
  component: SnowflakePage,
});

function SnowflakePage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="aurora-blob top-[-10%] left-[10%] h-[380px] w-[380px]" />
        </div>
        <div className="relative container mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="font-mono-tech text-muted-foreground mb-4 text-xs tracking-[0.3em] uppercase">
              Consultoria Snowflake
            </p>
            <h1 className="font-display text-foreground text-4xl leading-[1.08] tracking-tight md:text-6xl">
              Snowflake rápido, <span className="italic">barato</span> e confiável — sem improviso.
            </h1>
            <p className="text-foreground/80 mt-8 max-w-2xl text-lg leading-relaxed">
              Implementação, otimização de performance e custos, migração validada e IA sobre o
              warehouse. 15+ anos em BI e engenharia de dados, certificação oficial SnowPro e
              projetos Snowflake em produção — de Porto Alegre para todo o Brasil, remoto.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a
                href={WA_SNOWFLAKE}
                target="_blank"
                rel="noopener"
                className="text-foreground border-foreground/50 hover:border-foreground inline-flex items-center gap-2 border-b pb-0.5 font-medium transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Diagnóstico gratuito do seu Snowflake →
              </a>
              <span className="text-muted-foreground/80 text-xs">
                Sem compromisso · Resposta em até 24h
              </span>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="border-accent-cyan/40 bg-accent-cyan/5 mt-12 flex items-center gap-4 rounded-2xl border p-5">
              <img
                src={snowproBadge.url}
                alt="Selo SnowPro Associate: Platform da Snowflake"
                className="h-12 w-12 shrink-0"
                loading="lazy"
              />
              <div>
                <div className="font-display text-foreground text-lg">
                  SnowPro Associate: Platform
                </div>
                <p className="text-muted-foreground text-sm">
                  Certificação oficial Snowflake · válida até 2028
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container mx-auto max-w-3xl px-6">
          <Reveal>
            <h2 className="font-display text-foreground text-3xl md:text-4xl">
              O que eu <span className="italic">entrego</span>.
            </h2>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {DELIVERABLES.map((d, i) => (
              <Reveal key={d} delay={i * 50}>
                <li className="flex items-start gap-3">
                  <Check className="text-accent-cyan mt-1 h-4 w-4 shrink-0" />
                  <span className="text-foreground/85 leading-relaxed">{d}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="font-display text-foreground text-3xl md:text-4xl">
              Casos <span className="italic">reais</span> em Snowflake.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {CASES.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <article className="border-border bg-card/40 card-spotlight hover-lift h-full rounded-2xl border p-6">
                  <div className="font-display text-foreground text-2xl leading-none md:text-3xl">
                    {c.metric}
                  </div>
                  <div className="text-muted-foreground mt-1.5 text-sm">{c.metricLabel}</div>
                  <h3 className="font-display text-foreground mt-4 text-lg leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {c.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="text-muted-foreground mt-8 text-sm">
              Mais projetos de dados e IA na{" "}
              <a href="/#projetos" className="text-foreground underline underline-offset-4">
                página inicial
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-20">
        <div className="container mx-auto max-w-3xl px-6">
          <Reveal>
            <h2 className="font-display text-foreground text-3xl leading-[1.05] md:text-5xl">
              Quanto custa o seu Snowflake <span className="italic">hoje</span> — e quanto poderia
              custar?
            </h2>
            <p className="text-foreground/80 mt-6 text-lg leading-relaxed">
              Me conte como está o seu ambiente. Eu avalio e aponto os primeiros caminhos de
              otimização — gratuito, sem compromisso.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={WA_SNOWFLAKE}
              target="_blank"
              rel="noopener"
              className="text-foreground border-foreground/50 hover:border-foreground group mt-8 inline-flex items-center gap-3 border-b pb-1 text-lg font-medium transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com o Gabriel
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <p className="text-muted-foreground mt-3 text-sm">
              Resposta em até 24h · NDA disponível para dados sensíveis
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </main>
  );
}

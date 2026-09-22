import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Check } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFAB } from "@/components/site/WhatsAppFAB";
import { Reveal } from "@/components/site/Reveal";
import { SITE_URL, waLink, INTEGRATED_SYSTEMS } from "@/lib/site-data";

const TITLE = "Integração de Marketplaces e ERPs com dados | Gabriel Longarai";
const DESCRIPTION =
  "Mercado Livre, Shopee, Amazon, TikTok Shop e ERPs como Bling, Tiny, Totvs e Omie integrados ao seu data warehouse via APIs oficiais. Pedidos, repasses e margem real por venda.";
const PAGE_URL = `${SITE_URL}/integracao-marketplace-erp`;

const WA_INTEGRACAO = waLink("Olá Gabriel, quero integrar meus marketplaces e sistemas");

const MARKETPLACES = [
  "Mercado Livre",
  "Shopee",
  "Amazon (SP-API)",
  "TikTok Shop",
  "Nuvemshop",
  "Dafiti",
];

const DELIVERABLES = [
  "Pedidos, anúncios, visitas, fretes e repasses de todos os canais centralizados no seu data warehouse",
  "ERPs conectados à camada analítica: pedidos, notas fiscais, estoque, produtos, financeiro e RH",
  "Extração via APIs oficiais com autenticação OAuth2, HMAC e AWS SigV4 — sem planilha manual no meio",
  "Automação de rotinas em Python: sincronizações, alertas e relatórios que rodavam na mão",
  "Precificação orientada a dados: custo, frete, comissão e impostos no cálculo do preço ideal",
];

const CASES = [
  {
    metric: "76 endpoints",
    metricLabel: "7 marketplaces e ERPs integrados",
    title: "Plataforma de integração multi-marketplace",
    description:
      "Extrator Python assíncrono com 76 endpoints, retry com backoff e checkpoints. Dados no Snowflake via Snowpipe, com ~47 Dynamic Tables e latência de 1h.",
  },
  {
    metric: "R$ 10 mil",
    metricLabel: "de custos não rateados identificados",
    title: "DRE gerencial completo para e-commerce",
    description:
      "Modelo com 53 tabelas e 27 páginas: DRE em 4 níveis, margem de contribuição, EBITDA e conciliação de marketplaces — diagnóstico achou custos de publicidade fora do rateio.",
  },
  {
    metric: "11s → 3ms",
    metricLabel: "consulta de precificação otimizada",
    title: "Motor de precificação para marketplaces",
    description:
      "Preço ideal calculado com custo, frete, comissão, impostos e margem — validado contra 100% de 35.211 registros reais.",
  },
];

export const Route = createFileRoute("/integracao-marketplace-erp")({
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
          name: "Integração de Marketplaces e ERPs",
          serviceType: "Integração de dados de marketplaces e ERPs com data warehouse",
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
            {
              "@type": "ListItem",
              position: 2,
              name: "Integração de Marketplaces e ERPs",
              item: PAGE_URL,
            },
          ],
        }),
      },
    ],
  }),
  component: IntegracaoPage,
});

function IntegracaoPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="aurora-blob aurora-blob-cyan top-[-8%] right-[8%] h-[380px] w-[380px]" />
        </div>
        <div className="relative container mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="font-mono-tech text-muted-foreground mb-4 text-xs tracking-[0.3em] uppercase">
              Integração de Marketplaces &amp; ERPs
            </p>
            <h1 className="font-display text-foreground text-4xl leading-[1.08] tracking-tight md:text-6xl">
              Todos os seus canais e sistemas em <span className="italic">um só lugar</span>.
            </h1>
            <p className="text-foreground/80 mt-8 max-w-2xl text-lg leading-relaxed">
              O hub sincroniza a operação — mas quanto sobra de cada venda, somando taxas, frete e
              ads de todos os canais? Eu conecto marketplaces e ERPs ao seu data warehouse via APIs
              oficiais e entrego a visão consolidada que planilha nenhuma dá conta.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a
                href={WA_INTEGRACAO}
                target="_blank"
                rel="noopener"
                className="text-foreground border-foreground/50 hover:border-foreground inline-flex items-center gap-2 border-b pb-0.5 font-medium transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Diagnóstico gratuito da sua operação →
              </a>
              <span className="text-muted-foreground/80 text-xs">
                Sem compromisso · Resposta em até 24h
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-12">
        <div className="container mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="font-mono-tech text-muted-foreground mb-5 text-xs tracking-[0.3em] uppercase">
              Marketplaces e sistemas que já integrei
            </p>
            <div className="flex flex-wrap gap-2">
              {[...MARKETPLACES, ...INTEGRATED_SYSTEMS].map((s) => (
                <span
                  key={s}
                  className="border-border text-muted-foreground rounded-full border px-3.5 py-1 text-sm"
                >
                  {s}
                </span>
              ))}
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
              Casos <span className="italic">reais</span> de integração.
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
              Quanto sobra de cada venda em <span className="italic">cada canal</span>?
            </h2>
            <p className="text-foreground/80 mt-6 text-lg leading-relaxed">
              Me conte quais sistemas e marketplaces você usa. Eu avalio e aponto o caminho para a
              visão consolidada — gratuito, sem compromisso.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={WA_INTEGRACAO}
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

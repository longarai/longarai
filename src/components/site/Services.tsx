import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

type Category = {
  title: string;
  items: { name: string; description: string; href?: string }[];
};

const CATEGORIES: Category[] = [
  {
    title: "IA & Automação Inteligente",
    items: [
      {
        name: "Agentes de IA sobre seus dados",
        description:
          "Pergunte em português, a IA consulta o warehouse e responde — Snowflake Cortex Analyst, Semantic Views e agentes de custo e performance.",
      },
      {
        name: "Machine learning preditivo",
        description:
          "Score de propensão, ranqueamento e previsão de venda treinados sobre os dados reais do seu negócio.",
      },
      {
        name: "IA generativa aplicada",
        description:
          "Geração de conteúdo de anúncios validada por modelo estatístico, avatares para vídeo e criativos.",
      },
      {
        name: "Automação de processos",
        description:
          "Transcrição e resumo automático de reuniões e vídeos (inclusive on-premise), coleta e enriquecimento de dados.",
      },
    ],
  },
  {
    title: "Plataforma de Dados",
    items: [
      {
        name: "Consultoria Snowflake",
        description:
          "Implementação, otimização de performance e custos, Dynamic Tables, arquitetura de data lake.",
        href: "/consultoria-snowflake",
      },
      {
        name: "Pipelines (dbt + Airflow)",
        description:
          "Modelagem, orquestração e transformação confiável, do dado bruto ao dashboard.",
      },
      {
        name: "Arquitetura bronze / silver / gold",
        description: "Camadas testáveis, documentadas e auditáveis para o seu data warehouse.",
      },
    ],
  },
  {
    title: "Integrações",
    items: [
      {
        name: "Marketplaces (ML, Shopee, Amazon, TikTok)",
        description:
          "Pedidos, anúncios, visitas, fretes e repasses centralizados via APIs oficiais.",
        href: "/integracao-marketplace-erp",
      },
      {
        name: "ERPs e sistemas de gestão",
        description: "Totvs, Linx, Bling, Tiny, Omie, Conta Azul, Pipedrive e outros 14+ sistemas.",
      },
    ],
  },
  {
    title: "BI & Analytics",
    items: [
      {
        name: "Diagnóstico e roadmap de dados",
        description: "Avaliação do cenário atual e plano executável com prioridades e métricas.",
      },
    ],
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative scroll-mt-24 py-24">
      <div className="container mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="mb-14">
            <p className="font-mono-tech text-muted-foreground mb-4 text-xs tracking-[0.3em] uppercase">
              Serviços
            </p>
            <h2 className="font-display text-foreground text-4xl leading-[1.05] md:text-5xl">
              O que eu <span className="italic">faço</span>.
            </h2>
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              Quatro frentes complementares — cada projeto pode combinar todas, ou começar por uma
              delas.
            </p>
          </div>
        </Reveal>

        <div className="divide-border border-border/70 divide-y border-t">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 60}>
              <div className="py-10">
                <div className="mb-6 flex items-baseline gap-4">
                  <span className="font-mono-tech text-muted-foreground text-xs">0{i + 1}</span>
                  <h3 className="font-display text-foreground text-2xl md:text-3xl">{cat.title}</h3>
                </div>
                <ul className="ml-10 space-y-2">
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href ?? "#contato"}
                        className="group hover:bg-surface/70 -mx-3 flex items-start justify-between gap-6 rounded-xl px-3 py-2 transition-colors duration-200"
                      >
                        <div>
                          <div className="text-foreground group-hover:text-accent-cyan text-base font-medium transition-colors">
                            {item.name}
                          </div>
                          <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <ArrowUpRight className="text-muted-foreground group-hover:text-foreground mt-1 h-4 w-4 shrink-0 transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

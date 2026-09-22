import { Store, ShoppingCart, Zap, BarChart2, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Card = { icon: LucideIcon; tag: string; stat: string; description: string };

const CARDS: Card[] = [
  {
    icon: Store,
    tag: "Rede de Farmácias",
    stat: "40+ lojas integradas",
    description:
      "Migração de BI Qlik → Snowflake com pipeline completo de estoque, giro e ruptura em tempo real. Kafka + Airflow + dbt + Dynamic Tables.",
  },
  {
    icon: ShoppingCart,
    tag: "Marketplace SaaS",
    stat: "8 marketplaces integrados",
    description:
      "Extração unificada de pedidos, repasses e anúncios via APIs (Mercado Livre, Shopee, Amazon, TikTok Shop e outros) com latência de 1h.",
  },
  {
    icon: Zap,
    tag: "Redução de custos",
    stat: "Infra < $250/mês",
    description:
      "Arquitetura Snowflake com Dynamic Tables, auto-suspend de 6s e warehouses XSmall. Operação completa de dados em produção sem desperdício.",
  },
  {
    icon: BarChart2,
    tag: "Dashboards prontos para decisão",
    stat: "Do dado bruto ao dashboard",
    description:
      "Pipelines dbt + Airflow com camadas bronze/silver/gold e Power BI conectado direto ao Snowflake, sem planilhas intermediárias.",
  },
];

export function Results() {
  return (
    <section id="resultados" className="relative py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="font-mono-tech text-accent-cyan mb-3 text-xs tracking-[0.25em] uppercase">
              Projetos entregues
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Resultados que já entregamos
            </h2>
            <p className="text-muted-foreground mt-4 text-base md:text-lg">
              Números de projetos reais com clientes.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ icon: Icon, tag, stat, description }, i) => (
            <Reveal key={tag} delay={i * 80}>
              <div className="glass-card group h-full rounded-2xl border border-[rgba(18,192,226,0.15)] p-7 transition-colors duration-300 hover:border-[rgba(18,192,226,0.45)]">
                <Icon className="text-accent-cyan mb-5 h-7 w-7" />
                <p className="text-muted-foreground font-mono-tech mb-2 text-[11px] tracking-[0.18em] uppercase">
                  {tag}
                </p>
                <div className="font-mono-tech text-foreground mb-3 text-xl font-semibold leading-tight md:text-2xl">
                  {stat}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
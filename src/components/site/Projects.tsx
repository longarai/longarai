import { useState } from "react";
import { PROJECTS } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { HScroll } from "./HScroll";

const FILTERS = [
  { key: "todos", label: "Todos" },
  { key: "ia", label: "IA & Automação" },
  { key: "dados", label: "Dados & BI" },
] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("todos");
  const list = PROJECTS.filter((p) => filter === "todos" || p.category === filter);

  return (
    <section id="projetos" className="relative scroll-mt-24 py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="font-mono-tech text-muted-foreground mb-4 text-xs tracking-[0.3em] uppercase">
            Projetos selecionados
          </p>
          <h2 className="font-display text-foreground text-4xl leading-[1.1] md:text-5xl">
            Casos <span className="italic">reais</span> de dados, IA e automação.
          </h2>
          <p className="text-foreground/80 mt-5 text-lg leading-relaxed">
            Uma amostra de projetos executados em varejo, e-commerce, saúde e finanças — do legado
            ao warehouse moderno, e do warehouse à IA em produção.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`border-border rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  filter === f.key
                    ? "bg-foreground text-background border-foreground"
                    : "text-muted-foreground hover:text-foreground hover:border-foreground/40"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <HScroll label="Projetos selecionados" className="mt-8">
          {list.map((p, i) => (
            <article
              key={p.title}
              className="border-border bg-card/40 card-spotlight hover-lift flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border p-6 sm:w-[400px]"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
              }}
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-mono-tech text-accent-cyan text-[11px] tracking-[0.2em] uppercase">
                  {p.tag}
                </span>
                <span className="font-mono-tech text-muted-foreground text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              {p.metric && (
                <div className="mt-4">
                  <div className="font-display text-foreground text-3xl leading-none">
                    {p.metric}
                  </div>
                  {p.metricLabel && (
                    <div className="text-muted-foreground mt-1.5 text-sm">{p.metricLabel}</div>
                  )}
                </div>
              )}
              <h3 className="font-display text-foreground mt-4 text-xl leading-snug">{p.title}</h3>
              <p className="text-foreground/80 mt-3 text-[15px] leading-relaxed">{p.description}</p>
              {p.tech && (
                <p className="font-mono-tech text-muted-foreground mt-4 text-[11px]">{p.tech}</p>
              )}
            </article>
          ))}
        </HScroll>
      </div>
    </section>
  );
}

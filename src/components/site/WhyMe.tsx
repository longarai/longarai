import { GraduationCap } from "lucide-react";
import { TESTIMONIALS, STATS, EDUCATION } from "@/lib/site-data";
import snowproBadge from "@/assets/snowpro-associate-platform.png.asset.json";
import { Reveal } from "./Reveal";

export function WhyMe() {
  return (
    <section id="sobre" className="relative scroll-mt-24 py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="font-mono-tech text-muted-foreground mb-4 text-xs tracking-[0.3em] uppercase">
            Sobre
          </p>
          <h2 className="font-display text-foreground text-4xl leading-[1.1] md:text-5xl">
            15+ anos <span className="italic">construindo</span> BI e engenharia
            de dados.
          </h2>
          <div className="text-foreground/80 mt-8 space-y-5 text-lg leading-relaxed">
            <p>
              Trabalho com Business Intelligence desde 2011, com passagens por
              empresas como Rede de Farmácias São João, CashMe, Salux, ViaFlow e
              FIERGS. Já implementei data lake em Snowflake do zero, inteligência
              analítica hospitalar e BI corporativo em contextos onde os dados
              existiam, mas ninguém confiava neles.
            </p>
            <p>
              Hoje atuo como <em>consultor independente</em>, ajudando empresas a
              tirar o ambiente de dados do improviso — integrando marketplaces,
              ERPs e sistemas de gestão em pipelines confiáveis, testáveis e
              documentados, com dashboards que respondem às perguntas do dia a
              dia.
            </p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="border-border mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t pt-8">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span className="font-display text-foreground text-2xl md:text-3xl">
                  {s.value}
                </span>
                <span className="text-muted-foreground text-sm">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="border-accent-cyan/40 bg-accent-cyan/5 mt-8 rounded-2xl border p-6 md:p-8">
            <p className="font-mono-tech text-accent-cyan mb-4 text-[11px] tracking-[0.25em] uppercase">
              Credenciais em IA
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <img
                  src={snowproBadge.url}
                  alt="Selo SnowPro Associate: Platform da Snowflake"
                  className="mt-0.5 h-12 w-12 shrink-0"
                  loading="lazy"
                />
                <div>
                  <div className="font-display text-foreground text-xl">
                    SnowPro Associate: Platform
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Certificação oficial Snowflake · válida até 2028
                  </p>
                </div>
              </div>
              {EDUCATION.map((e) => (
                <div key={e.label} className="flex items-start gap-3">
                  <GraduationCap className="text-accent-cyan mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <div className="font-display text-foreground text-xl">
                      {e.label}
                    </div>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {e.org}
                      {e.status ? ` · ${e.status}` : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-14 space-y-8">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="border-border/70 border-l-2 pl-6">
                <blockquote className="font-display text-foreground/90 text-xl leading-snug italic md:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="text-muted-foreground mt-4 text-sm">
                  <span className="text-foreground font-medium">{t.name}</span> — {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
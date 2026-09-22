import { BadgeCheck, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { HScroll } from "./HScroll";

export function Certifications() {
  return (
    <section id="certificacoes" className="relative scroll-mt-24 py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="font-mono-tech text-muted-foreground mb-4 text-xs tracking-[0.3em] uppercase">
            Certificações
          </p>
          <h2 className="font-display text-foreground text-4xl leading-[1.1] md:text-5xl">
            Formação <span className="italic">contínua</span>.
          </h2>
        </Reveal>

        <HScroll label="Certificações" className="mt-10">
          {CERTIFICATIONS.map((c) => {
            const inner = (
              <>
                <BadgeCheck className="text-accent-cyan mt-0.5 h-5 w-5 shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="text-foreground group-hover:text-accent-cyan flex items-center gap-2 text-[15px] leading-snug font-medium transition-colors md:text-base">
                    <span>{c.title}</span>
                    {c.url ? (
                      <ExternalLink className="text-muted-foreground h-3.5 w-3.5 shrink-0" />
                    ) : null}
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {c.issuer} · {c.date}
                    {c.detail ? ` · ${c.detail}` : ""}
                  </p>
                </div>
              </>
            );

            const cardClass =
              "border-border bg-card/40 hover:border-accent-cyan/50 group block w-[80%] shrink-0 snap-start rounded-2xl border p-5 transition-colors sm:w-[300px]";

            return c.url ? (
              <a
                key={c.title}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                <div className="flex gap-3">{inner}</div>
                <span className="font-mono-tech text-accent-cyan mt-3 block text-[11px] tracking-[0.2em] uppercase">
                  Ver certificado
                </span>
              </a>
            ) : (
              <div key={c.title} className={cardClass}>
                <div className="flex gap-3">{inner}</div>
              </div>
            );
          })}
        </HScroll>
      </div>
    </section>
  );
}
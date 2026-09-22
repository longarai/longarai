import { TECH_STACK } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { HScroll } from "./HScroll";

export function TechStack() {
  return (
    <section id="stack" className="relative scroll-mt-24 py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="font-mono-tech text-muted-foreground mb-4 text-xs tracking-[0.3em] uppercase">
            Stack técnico
          </p>
          <h2 className="font-display text-foreground text-4xl leading-[1.1] md:text-5xl">
            As <span className="italic">ferramentas</span> que uso no dia a dia.
          </h2>
          <p className="text-foreground/80 mt-5 text-lg leading-relaxed">
            De bancos de origem a IA — o conjunto completo de tecnologias que
            operam nos meus projetos de dados.
          </p>
        </Reveal>

        <HScroll label="Stack técnico" className="mt-10">
          {TECH_STACK.map((cat, i) => (
            <div
              key={cat.title}
              className="border-border bg-card/40 w-[85%] shrink-0 snap-start rounded-2xl border p-6 sm:w-[360px]"
            >
              <span className="font-mono-tech text-muted-foreground text-xs">
                0{i + 1}
              </span>
              <h3 className="font-display text-foreground mt-2 text-2xl">
                {cat.title}
              </h3>
              <ul className="text-foreground/85 mt-4 space-y-2.5 text-[15px] leading-relaxed">
                {cat.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-muted-foreground select-none">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </HScroll>
      </div>
    </section>
  );
}
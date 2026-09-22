import { INTEGRATED_SYSTEMS } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function IntegratedSystems() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Experiência real com os sistemas que sua empresa já usa
            </h2>
            <p className="text-muted-foreground mt-3 text-sm md:text-base">
              Integração de dados de ERPs, CRMs e plataformas direto para sua camada analítica
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="flex flex-wrap justify-center gap-2.5">
            {INTEGRATED_SYSTEMS.map((s) => (
              <span
                key={s}
                className="glass-card font-mono-tech hover:border-accent-cyan/40 hover:text-accent-cyan rounded-full px-4 py-2 text-xs transition-colors md:text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
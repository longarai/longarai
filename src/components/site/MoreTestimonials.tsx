import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const EXTRA = [
  {
    text: "Gabriel tem uma capacidade rara de entender tanto o lado técnico quanto o negócio. Implementou nosso data lake do zero e entregou dashboards que a diretoria passou a usar diariamente.",
    name: "Engenheiro de Dados Sênior",
    role: "Empresa de saúde",
    initials: "ED",
  },
  {
    text: "Consultoria de alto nível: entregou pipelines robustos, documentados e com testes. Não é comum encontrar alguém com essa profundidade técnica disponível para projetos menores.",
    name: "CTO",
    role: "Startup de tecnologia",
    initials: "CT",
  },
];

export function MoreTestimonials() {
  return (
    <section className="relative pb-24">
      <div className="container mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <p className="font-mono-tech text-accent-cyan mb-3 text-xs tracking-[0.25em] uppercase">
              Mais depoimentos
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              O que dizem quem trabalhou comigo
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {EXTRA.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="glass-card relative h-full rounded-2xl p-7">
                <Quote className="text-accent-cyan/40 absolute right-6 top-6 h-8 w-8" />
                <blockquote className="text-foreground/90 text-sm leading-relaxed md:text-base italic">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                  <div className="font-mono-tech text-background flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#2970CC] to-[#12C0E2] text-sm font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-muted-foreground font-mono-tech text-xs">
                      {t.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
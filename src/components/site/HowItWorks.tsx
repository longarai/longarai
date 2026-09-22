import { Reveal } from "./Reveal";

const STEPS = [
  { title: "Diagnóstico gratuito", desc: "Você me conta o problema ou objetivo e eu aponto os primeiros caminhos de dados e IA (gratuito, sem compromisso)" },
  { title: "Diagnóstico e proposta", desc: "Avalio o cenário e apresento escopo, prazo e investimento" },
  { title: "Execução e entrega", desc: "Trabalho remoto, com comunicação constante e entregas verificáveis" },
];

export function HowItWorks() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="mb-12">
            <p className="font-mono-tech text-muted-foreground mb-4 text-xs tracking-[0.3em] uppercase">
              Processo
            </p>
            <h2 className="font-display text-foreground text-4xl md:text-5xl">
              Como <span className="italic">funciona</span>.
            </h2>
          </div>
        </Reveal>
        <ol className="divide-border border-border divide-y border-t border-b">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <li className="grid grid-cols-[auto_1fr] gap-6 py-7">
                <span className="font-mono-tech text-muted-foreground pt-1 text-xs">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-foreground text-2xl">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">
                    {s.desc}
                  </p>
                  {i === 0 && (
                    <p className="text-muted-foreground/80 mt-2 text-sm italic">
                      Primeira conversa gratuita · Sem compromisso · Resposta em até 24h
                    </p>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
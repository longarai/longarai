import gabrielPhoto from "@/assets/gabriel.jpg";
import { WA_DEFAULT, EMAIL, LINKEDIN } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="dot-field absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent_72%)]" />
        <div className="aurora-blob top-[-10%] left-[8%] h-[420px] w-[420px]" />
        <div className="aurora-blob aurora-blob-cyan top-[18%] right-[4%] h-[360px] w-[360px]" />
      </div>
      <div className="relative container mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="mb-10 flex flex-col items-center gap-5 text-center">
            <div className="relative">
              <div className="rounded-full bg-[conic-gradient(from_210deg,#2970CC,#12C0E2_40%,transparent_65%,#2970CC)] p-[2px]">
                <img
                  src={gabrielPhoto}
                  alt="Gabriel Longarai"
                  className="border-background h-28 w-28 rounded-full border-2 object-cover shadow-sm md:h-32 md:w-32"
                  loading="eager"
                />
              </div>
              <span
                className="border-background absolute right-1 bottom-1 h-3.5 w-3.5 rounded-full border-2"
                style={{ background: "#22c55e" }}
                aria-label="Disponível para projetos"
              />
            </div>
            <p className="font-mono-tech text-muted-foreground text-[11px] tracking-[0.3em] uppercase">
              Consultor · Dados · IA & Automações
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="font-display text-foreground text-center text-4xl leading-[1.08] tracking-tight md:text-6xl">
            Automações com <span className="italic">IA</span> e plataformas de dados que geram{" "}
            <span className="text-brand-gradient italic">resultado</span> — não experimento.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="text-foreground/80 mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed md:text-xl">
            Sou Gabriel Longarai. 15+ anos em engenharia de dados e BI. Hoje, integro seus sistemas,
            construo seu data warehouse e coloco{" "}
            <em className="text-foreground decoration-accent-cyan/60 not-italic underline underline-offset-4">
              IA trabalhando em cima dos seus dados
            </em>
            : agentes, previsão com machine learning, automação de processos e análise em linguagem
            natural.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <ul className="border-border mt-10 grid gap-px overflow-hidden rounded-xl border bg-border/60 sm:grid-cols-3">
            {[
              {
                t: "Dados",
                d: "Snowflake, dbt, integrações com 14+ ERPs e marketplaces",
              },
              {
                t: "IA aplicada",
                d: "Agentes, ML preditivo e IA generativa sobre dados reais do negócio",
              },
              {
                t: "Automação",
                d: "Processos que rodavam na mão passam a rodar sozinhos, 24/7",
              },
            ].map((p) => (
              <li
                key={p.t}
                className="bg-background hover:bg-surface p-5 transition-colors duration-200"
              >
                <div className="font-mono-tech text-accent-cyan text-[11px] tracking-[0.2em] uppercase">
                  {p.t}
                </div>
                <p className="text-foreground/80 mt-2 text-sm leading-relaxed">{p.d}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener"
              className="btn-primary px-8 py-3.5 text-[15px]"
            >
              Diagnóstico gratuito de dados &amp; IA →
            </a>
            <span className="text-muted-foreground/80 text-xs">
              Sem compromisso · Resposta em até 24h
            </span>
            <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
              <a
                href={`mailto:${EMAIL}`}
                className="hover:text-foreground border-border hover:border-foreground/60 inline-flex items-center gap-2 border-b pb-0.5 transition-colors"
              >
                {EMAIL}
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener"
                className="hover:text-foreground border-border hover:border-foreground/60 inline-flex items-center gap-2 border-b pb-0.5 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-14 text-center">
            <p className="font-mono-tech text-muted-foreground/70 text-[10px] tracking-[0.3em] uppercase">
              Experiência com
            </p>
            <p className="text-muted-foreground font-display mt-3 flex flex-wrap items-baseline justify-center gap-x-7 gap-y-2 text-base md:text-lg">
              {["Rede de Farmácias São João", "CashMe", "Salux", "ViaFlow", "FIERGS"].map((c) => (
                <span key={c} className="whitespace-nowrap">
                  {c}
                </span>
              ))}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

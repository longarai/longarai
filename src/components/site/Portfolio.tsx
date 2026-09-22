import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { DASHBOARDS } from "@/lib/site-data";
import { useIsMobile } from "@/hooks/use-mobile";
import { Reveal } from "./Reveal";
import dashboardShot from "@/assets/dashboard.png.asset.json";

function BrowserFrame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-border bg-surface overflow-hidden rounded-2xl border shadow-sm">
      <div className="border-border bg-surface-elevated flex items-center gap-2 border-b px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="bg-foreground/20 h-2.5 w-2.5 rounded-full" />
          <span className="bg-foreground/20 h-2.5 w-2.5 rounded-full" />
          <span className="bg-foreground/20 h-2.5 w-2.5 rounded-full" />
        </span>
        <span className="font-mono-tech text-muted-foreground mx-auto truncate text-[11px]">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

export function Portfolio() {
  const isMobile = useIsMobile();
  const [active, setActive] = useState(0);

  return (
    <section id="portfolio" className="relative scroll-mt-20 py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mb-10">
            <p className="font-mono-tech text-muted-foreground mb-4 text-xs tracking-[0.3em] uppercase">
              Portfólio
            </p>
            <h2 className="font-display text-foreground text-4xl md:text-5xl">
              Trabalho <span className="italic">na prática</span>.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="mb-6 flex flex-wrap gap-2">
            {DASHBOARDS.map((d, i) => (
              <button
                key={d.title}
                onClick={() => setActive(i)}
                className={`border-border rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  active === i
                    ? "bg-foreground text-background border-foreground"
                    : "text-muted-foreground hover:text-foreground hover:border-foreground/40"
                }`}
              >
                {d.title}
              </button>
            ))}
          </div>
        </Reveal>
        <Reveal delay={160}>
          <BrowserFrame label={DASHBOARDS[active].title}>
            <div className="bg-background overflow-hidden">
              {isMobile ? (
                <div className="flex flex-col items-center gap-4 px-6 py-12 text-center">
                  <p className="text-muted-foreground text-sm">
                    Dashboards interativos ficam melhores em tela maior.
                  </p>
                  <a
                    href={DASHBOARDS[active].url}
                    target="_blank"
                    rel="noopener"
                    className="bg-foreground text-background inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
                  >
                    Abrir dashboard
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ) : (
                <iframe
                  key={DASHBOARDS[active].url}
                  title={DASHBOARDS[active].title}
                  src={DASHBOARDS[active].url}
                  loading="lazy"
                  allowFullScreen
                  className="block h-[560px] w-full border-0"
                />
              )}
            </div>
          </BrowserFrame>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-10">
            <p className="text-muted-foreground mb-4 text-sm">
              Painel gerencial construído sobre o data warehouse (dados anonimizados).
            </p>
            <BrowserFrame label="dashboard gerencial · Power BI">
              <img
                src={dashboardShot.url}
                alt="Dashboard gerencial em Power BI conectado ao data warehouse"
                loading="lazy"
                className="block w-full"
              />
            </BrowserFrame>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { WA_DEFAULT, TESTIMONIALS } from "@/lib/site-data";
import { Reveal } from "./Reveal";

type Tile = {
  value: number;
  suffix?: string;
  label: string;
};

const BIG_TILE: Tile = {
  value: 161,
  suffix: " milhões",
  label:
    "de linhas migradas entre contas Snowflake em ~4 horas, com validação de integridade por hash",
};

const TILES: Tile[] = [
  { value: 76, label: "endpoints de APIs em 7 marketplaces e ERPs" },
  { value: 144, label: "Dynamic Tables em produção" },
  { value: 14, suffix: "+", label: "sistemas e ERPs integrados" },
];

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active]);

  return value;
}

function spotlight(e: React.MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
}

function NumberTile({
  tile,
  active,
  big = false,
}: {
  tile: Tile;
  active: boolean;
  big?: boolean;
}) {
  const value = useCountUp(tile.value, active);
  return (
    <div
      onMouseMove={spotlight}
      className={`border-border bg-card/40 card-spotlight hover-lift flex flex-col justify-end rounded-2xl border p-6 ${
        big ? "col-span-2 row-span-2 md:p-8" : ""
      }`}
    >
      <div
        className={`font-display text-foreground leading-none tabular-nums ${
          big ? "text-6xl md:text-8xl" : "text-4xl md:text-5xl"
        }`}
      >
        {value.toLocaleString("pt-BR")}
        {tile.suffix}
      </div>
      <p
        className={`text-muted-foreground mt-3 leading-relaxed ${
          big ? "text-base md:text-lg" : "text-sm"
        }`}
      >
        {tile.label}
      </p>
    </div>
  );
}

export function Counters() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const testimonial = TESTIMONIALS[0];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="resultados" className="relative scroll-mt-24 py-16">
      <div className="container mx-auto max-w-4xl px-6">
        <Reveal>
          <div ref={ref} className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            <NumberTile tile={BIG_TILE} active={active} big />

            {TILES.map((t) => (
              <NumberTile key={t.label} tile={t} active={active} />
            ))}

            <div
              onMouseMove={spotlight}
              className="border-border bg-card/40 card-spotlight hover-lift flex flex-col justify-end rounded-2xl border p-6"
            >
              <div className="font-display text-foreground text-4xl leading-none md:text-5xl">
                11s <span className="text-accent-cyan">→</span> 3ms
              </div>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                consulta de precificação otimizada
              </p>
            </div>

            <figure
              onMouseMove={spotlight}
              className="border-border bg-card/40 card-spotlight hover-lift col-span-2 flex flex-col justify-between rounded-2xl border p-6"
            >
              <blockquote className="font-display text-foreground/90 text-lg leading-snug italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="text-muted-foreground mt-4 text-sm">
                <span className="text-foreground font-medium">
                  {testimonial.name}
                </span>{" "}
                — {testimonial.role}
              </figcaption>
            </figure>

            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener"
              onMouseMove={spotlight}
              className="border-accent-cyan/40 bg-accent-cyan/5 card-spotlight hover-lift group col-span-2 flex flex-col justify-between rounded-2xl border p-6"
            >
              <p className="font-display text-foreground text-2xl leading-snug md:text-3xl">
                Vamos falar do <span className="italic">seu</span> projeto?
              </p>
              <div className="mt-4">
                <span className="text-foreground inline-flex items-center gap-2 text-sm font-medium">
                  <MessageCircle className="h-4 w-4" />
                  Diagnóstico gratuito de dados &amp; IA
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
                <p className="text-muted-foreground mt-1.5 text-xs">
                  Sem compromisso · Resposta em até 24h
                </p>
              </div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

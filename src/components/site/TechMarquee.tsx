import { TECHNOLOGIES } from "@/lib/site-data";

export function TechMarquee() {
  const items = [...TECHNOLOGIES, ...TECHNOLOGIES];
  return (
    <section
      className="border-border/60 bg-surface/60 relative border-y py-6"
      aria-label="Tecnologias"
    >
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max gap-10 hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="font-mono-tech text-muted-foreground hover:text-accent-cyan text-sm whitespace-nowrap transition-colors md:text-base"
            >
              {t}
              <span className="text-accent-cyan/30 ml-10">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

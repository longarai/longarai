import { SKILLS } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { HScroll } from "./HScroll";

export function Skills() {
  return (
    <section id="habilidades" className="relative scroll-mt-24 py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="font-mono-tech text-muted-foreground mb-4 text-xs tracking-[0.3em] uppercase">
            Habilidades
          </p>
          <h2 className="font-display text-foreground text-4xl leading-[1.1] md:text-5xl">
            O que sei <span className="italic">resolver</span>.
          </h2>
        </Reveal>

        <HScroll label="Habilidades" className="mt-10">
          {SKILLS.map((skill, i) => (
            <div
              key={skill}
              className="border-border bg-card/40 w-[80%] shrink-0 snap-start rounded-2xl border p-5 sm:w-[300px]"
            >
              <span className="font-mono-tech text-muted-foreground text-xs">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-foreground/85 mt-2 text-[15px] leading-relaxed">
                {skill}
              </p>
            </div>
          ))}
        </HScroll>
      </div>
    </section>
  );
}
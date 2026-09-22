import type { BlogBlock } from "@/lib/blog-data";
import { Check, Quote, Sparkles, X } from "lucide-react";

export function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-7">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i} className="text-foreground/85 text-lg leading-relaxed">
                {b.text}
              </p>
            );
          case "lead":
            return (
              <p
                key={i}
                className="font-display text-foreground text-2xl leading-snug md:text-3xl"
              >
                {b.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="font-display text-foreground mt-12 text-3xl md:text-4xl"
              >
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="text-foreground mt-6 text-xl font-semibold tracking-tight"
              >
                {b.text}
              </h3>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-accent-cyan/60 bg-white/[0.03] text-foreground relative my-8 rounded-r-xl border-l-4 px-6 py-5"
              >
                <Quote className="text-accent-cyan/60 absolute -top-3 left-4 h-6 w-6" />
                <p className="font-display text-xl leading-snug md:text-2xl">
                  {b.text}
                </p>
                {b.cite ? (
                  <cite className="text-muted-foreground mt-2 block text-sm not-italic">
                    — {b.cite}
                  </cite>
                ) : null}
              </blockquote>
            );
          case "ul":
            return (
              <ul key={i} className="text-foreground/85 space-y-2 pl-1">
                {b.items.map((it, j) => (
                  <li key={j} className="flex gap-3 text-lg leading-relaxed">
                    <span className="bg-accent-cyan mt-3 h-1.5 w-1.5 shrink-0 rounded-full" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          case "check":
            return (
              <ul key={i} className="space-y-3">
                {b.items.map((it, j) => (
                  <li
                    key={j}
                    className="text-foreground/90 flex items-start gap-3 text-lg leading-relaxed"
                  >
                    <span className="bg-accent-cyan/15 text-accent-cyan mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <div
                key={i}
                className="from-accent-cyan/10 border-accent-cyan/20 rounded-2xl border bg-gradient-to-br to-transparent p-6"
              >
                <p className="font-display text-foreground text-xl md:text-2xl">
                  {b.title}
                </p>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  {b.text}
                </p>
              </div>
            );
          case "image":
            return (
              <figure
                key={i}
                className={`my-10 ${b.wide ? "lg:-mx-24 xl:-mx-32" : ""}`}
              >
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                  <img
                    src={b.src}
                    alt={b.alt}
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                </div>
                {b.caption ? (
                  <figcaption className="text-muted-foreground mt-3 text-center text-sm italic">
                    {b.caption}
                  </figcaption>
                ) : null}
              </figure>
            );
          case "flow":
            return (
              <div
                key={i}
                className="my-6 flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                {b.steps.map((s, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <span className="bg-accent-cyan/10 text-foreground border-accent-cyan/30 rounded-full border px-4 py-2 text-sm font-medium">
                      {s}
                    </span>
                    {j < b.steps.length - 1 ? (
                      <span className="text-accent-cyan/70">→</span>
                    ) : null}
                  </div>
                ))}
              </div>
            );
          case "tldr":
            return (
              <aside
                key={i}
                className="my-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="text-accent-cyan flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase">
                  <Sparkles className="h-3.5 w-3.5" />
                  {b.title ?? "Resumo"}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {b.items.map((it, j) => (
                    <li
                      key={j}
                      className="text-foreground/90 flex items-start gap-3 text-base leading-relaxed"
                    >
                      <span className="text-accent-cyan font-display mt-0.5 text-sm tabular-nums">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            );
          case "compare":
            return (
              <div
                key={i}
                className="my-8 grid gap-4 md:grid-cols-2"
              >
                <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-6">
                  <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-red-300 uppercase">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/15">
                      <X className="h-3 w-3" />
                    </span>
                    {b.before.title}
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {b.before.items.map((it, j) => (
                      <li
                        key={j}
                        className="text-foreground/85 flex items-start gap-2.5 text-[15px] leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/70" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-accent-cyan/25 bg-accent-cyan/[0.05] rounded-2xl border p-6">
                  <div className="text-accent-cyan flex items-center gap-2 text-xs font-medium tracking-wide uppercase">
                    <span className="bg-accent-cyan/15 flex h-5 w-5 items-center justify-center rounded-full">
                      <Check className="h-3 w-3" />
                    </span>
                    {b.after.title}
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {b.after.items.map((it, j) => (
                      <li
                        key={j}
                        className="text-foreground/90 flex items-start gap-2.5 text-[15px] leading-relaxed"
                      >
                        <span className="bg-accent-cyan/70 mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
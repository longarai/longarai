import { INTEGRATION_TOOLS, VIZ_TOOLS } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { Database, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

function Column({
  icon: Icon,
  label,
  items,
}: {
  icon: LucideIcon;
  label: string;
  items: string[];
}) {
  return (
    <div className="glass-card rounded-2xl p-7">
      <div className="mb-5 flex items-center gap-3">
        <div className="bg-brand-gradient flex h-10 w-10 items-center justify-center rounded-lg text-white">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold tracking-tight">{label}</h3>
      </div>
      <ul className="space-y-2.5">
        {items.map((it) => (
          <li
            key={it}
            className="font-mono-tech text-muted-foreground flex items-start gap-2 text-sm"
          >
            <span className="text-accent-cyan mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-current" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ToolsStack() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Stack técnico completo
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal delay={80}>
            <Column icon={Database} label="Integração de dados" items={INTEGRATION_TOOLS} />
          </Reveal>
          <Reveal delay={160}>
            <Column icon={BarChart3} label="Visualização de dados" items={VIZ_TOOLS} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
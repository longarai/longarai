import { Mail, MapPin, MessageCircle, Linkedin } from "lucide-react";
import { EMAIL, LINKEDIN, WA_DEFAULT, WHATSAPP_DISPLAY } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="relative scroll-mt-24 py-28">
      <div className="container mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="font-mono-tech text-muted-foreground mb-4 text-xs tracking-[0.3em] uppercase">
            Contato
          </p>
          <h2 className="font-display text-foreground text-4xl leading-[1.05] md:text-6xl">
            Vamos conversar sobre <span className="italic">o seu projeto</span>?
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener"
            className="text-foreground border-foreground/50 hover:border-foreground group mt-8 inline-flex items-center gap-3 border-b pb-1 text-lg font-medium transition-colors md:text-xl"
          >
            <MessageCircle className="h-5 w-5" />
            {WHATSAPP_DISPLAY}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-muted-foreground mt-3 text-sm">
            Diagnóstico gratuito · Sem compromisso · Resposta em até 24h
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="text-muted-foreground mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
            <a href={`mailto:${EMAIL}`} className="hover:text-foreground inline-flex items-center gap-2 transition-colors">
              <Mail className="h-4 w-4" />
              {EMAIL}
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener" className="hover:text-foreground inline-flex items-center gap-2 transition-colors">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Porto Alegre/RS — remoto para todo o Brasil
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
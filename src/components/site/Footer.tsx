import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { EMAIL, LINKEDIN, WA_DEFAULT, WHATSAPP_DISPLAY } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-border/70 relative overflow-hidden border-t pt-10 pb-24 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-8 text-center select-none"
      >
        <span className="font-display text-foreground/[0.05] text-[26vw] leading-none whitespace-nowrap md:text-[15rem]">
          Longarai
        </span>
      </div>
      <div className="relative container mx-auto flex max-w-3xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div>
          <div className="font-display text-foreground text-lg">Gabriel Longarai</div>
          <div className="text-muted-foreground font-mono-tech text-xs">
            Consultor de Dados, IA &amp; Automações · {new Date().getFullYear()}
          </div>
          <p className="text-muted-foreground/80 mt-2 max-w-md text-xs leading-relaxed">
            Consultor de dados e IA em Porto Alegre — Snowflake, dbt e Power BI — atendendo empresas
            de todo o Brasil.
          </p>
          <nav
            aria-label="Serviços"
            className="text-muted-foreground mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs"
          >
            <a href="/consultoria-snowflake" className="hover:text-foreground transition-colors">
              Consultoria Snowflake
            </a>
            <a
              href="/integracao-marketplace-erp"
              className="hover:text-foreground transition-colors"
            >
              Integração Marketplaces &amp; ERPs
            </a>
            <a href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </a>
          </nav>
        </div>
        <div className="text-muted-foreground flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener"
            className="hover:text-foreground inline-flex items-center gap-2 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            {WHATSAPP_DISPLAY}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="hover:text-foreground inline-flex items-center gap-2 transition-colors"
          >
            <Mail className="h-4 w-4" />
            E-mail
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className="hover:text-foreground inline-flex items-center gap-2 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

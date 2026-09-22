import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { WA_DEFAULT } from "@/lib/site-data";
import { ThemeToggle } from "./ThemeToggle";

type NavItem = {
  href: string;
  label: string;
  route?: boolean;
  section?: string;
  primary?: boolean;
};

const LINKS: NavItem[] = [
  { href: "/#sobre", label: "Sobre", section: "sobre" },
  { href: "/#servicos", label: "Serviços", section: "servicos", primary: true },
  { href: "/#stack", label: "Stack", section: "stack" },
  { href: "/#projetos", label: "Projetos", section: "projetos", primary: true },
  { href: "/#resultados", label: "Resultados", section: "resultados", primary: true },
  { href: "/#portfolio", label: "Portfólio", section: "portfolio", primary: true },
  { href: "/#contato", label: "Contato", section: "contato" },
  { href: "/blog", label: "Blog", route: true, primary: true },
];

const SECTION_IDS = LINKS.filter((l) => l.section).map((l) => l.section!);

const prefersReduced = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const progressRef = useRef<HTMLSpanElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setScrolled(window.scrollY > 12);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${
            max > 0 ? Math.min(window.scrollY / max, 1) : 0
          })`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }
    const els = SECTION_IDS.map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
      .sort((a, b) => a.offsetTop - b.offsetTop);
    if (!els.length) return;
    const inView = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) inView.add(e.target.id);
          else inView.delete(e.target.id);
        });
        const visible = els.filter((el) => inView.has(el.id));
        setActiveSection((prev) => (visible.length ? visible[visible.length - 1].id : prev));
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const blogActive = pathname.startsWith("/blog");
  const isActive = (l: NavItem) => (l.route ? blogActive : activeSection === l.section);

  const onSectionClick = (l: NavItem) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (!l.section || pathname !== "/") return;
    e.preventDefault();
    document.body.style.overflow = "";
    setMobileOpen(false);
    const el = document.getElementById(l.section);
    if (el) {
      el.scrollIntoView({
        behavior: prefersReduced() ? "auto" : "smooth",
        block: "start",
      });
      history.replaceState(null, "", l.href);
    }
  };

  const linkClass = (active: boolean) =>
    `relative pb-1 transition-colors ${active ? "text-foreground" : "hover:text-foreground"}`;

  const underline = (active: boolean) => (
    <span
      aria-hidden
      className={`bg-brand-gradient absolute inset-x-0 bottom-0 h-px origin-left transition-transform duration-300 ease-out ${
        active ? "scale-x-100" : "scale-x-0"
      }`}
    />
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled ? "border-border/60 bg-background/85 border-b backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <span
        ref={progressRef}
        aria-hidden
        className="bg-brand-gradient absolute inset-x-0 top-0 h-0.5 origin-left"
        style={{ transform: "scaleX(0)" }}
      />
      <nav className="container mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
        <a
          href="/#top"
          className="group inline-flex items-baseline gap-1"
          aria-label="Gabriel Longarai — início"
        >
          <span className="font-display text-foreground text-xl tracking-tight">
            Gabriel Longarai
          </span>
          <span className="text-accent-cyan font-display text-xl">.</span>
        </a>

        <ul className="text-muted-foreground hidden items-center gap-8 text-sm md:flex">
          {LINKS.filter((l) => l.primary).map((l) => {
            const active = isActive(l);
            return (
              <li key={l.href}>
                {l.route ? (
                  <Link
                    to={l.href}
                    className={linkClass(active)}
                    aria-current={active ? "true" : undefined}
                  >
                    {l.label}
                    {underline(active)}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    onClick={onSectionClick(l)}
                    className={linkClass(active)}
                    aria-current={active ? "true" : undefined}
                  >
                    {l.label}
                    {underline(active)}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3 md:gap-4">
          <ThemeToggle />
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener"
            className="text-foreground border-foreground/40 hover:border-foreground hidden items-center gap-2 border-b pb-0.5 text-sm font-medium transition-colors md:inline-flex"
          >
            Diagnóstico gratuito →
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            className="text-foreground border-border hover:border-foreground/40 inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setMobileOpen(false)}
            className="bg-background/70 absolute inset-0 backdrop-blur-sm"
          />
          <nav className="bg-surface border-border animate-in slide-in-from-right absolute inset-y-0 right-0 flex w-[82%] max-w-xs flex-col border-l px-6 pt-24 pb-8 shadow-2xl duration-300">
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setMobileOpen(false)}
              className="text-muted-foreground hover:text-foreground border-border hover:border-foreground/40 absolute top-5 right-6 inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <ul className="text-muted-foreground flex flex-col gap-1 text-base">
              {LINKS.map((l) => {
                const active = isActive(l);
                const cls = `flex items-center justify-between rounded-lg px-3 py-3 transition-colors ${
                  active
                    ? "bg-background text-foreground"
                    : "hover:bg-background/60 hover:text-foreground"
                }`;
                return (
                  <li key={l.href}>
                    {l.route ? (
                      <Link
                        to={l.href}
                        className={cls}
                        aria-current={active ? "true" : undefined}
                        onClick={() => setMobileOpen(false)}
                      >
                        {l.label}
                        {active && (
                          <span
                            className="bg-brand-gradient h-1.5 w-1.5 rounded-full"
                            aria-hidden
                          />
                        )}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        onClick={onSectionClick(l)}
                        className={cls}
                        aria-current={active ? "true" : undefined}
                      >
                        {l.label}
                        {active && (
                          <span
                            className="bg-brand-gradient h-1.5 w-1.5 rounded-full"
                            aria-hidden
                          />
                        )}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener"
              onClick={() => setMobileOpen(false)}
              className="bg-brand-gradient text-background mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02]"
            >
              Diagnóstico gratuito →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

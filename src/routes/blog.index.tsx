import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFAB } from "@/components/site/WhatsAppFAB";
import { SITE_URL } from "@/lib/site-data";

const TITLE = "Blog — Gabriel Longarai | Engenharia de Dados, BI e Analytics";
const DESCRIPTION =
  "Artigos práticos sobre engenharia de dados, arquitetura analítica, Snowflake, dbt, Power BI e tomada de decisão baseada em dados.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: TITLE,
          itemListElement: BLOG_POSTS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/blog/${p.slug}`,
            name: p.title,
          })),
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      <section className="pt-36 pb-12">
        <div className="container mx-auto max-w-4xl px-6">
          <span className="font-mono-tech text-muted-foreground text-xs tracking-[0.3em] uppercase">
            Blog
          </span>
          <h1 className="font-display text-foreground mt-4 text-5xl leading-[1.05] md:text-6xl">
            Ideias sobre dados,{" "}
            <span className="italic">decisão e arquitetura</span>.
          </h1>
          <p className="text-foreground/80 mt-5 max-w-2xl text-lg leading-relaxed">
            Conteúdo direto ao ponto sobre como organizar, integrar e transformar dados
            em decisões reais para a operação.
          </p>
        </div>
      </section>

      {featured ? (
        <section className="pb-16">
          <div className="container mx-auto max-w-4xl px-6">
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group border-border hover:border-foreground/40 grid overflow-hidden rounded-2xl border transition-colors md:grid-cols-2"
            >
              <div className="bg-background relative aspect-[16/10] overflow-hidden md:aspect-auto">
                <img
                  src={featured.cover}
                  alt={featured.coverAlt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <div className="flex flex-col justify-between gap-6 p-8 md:p-10">
                <div>
                  <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-xs">
                    <span className="bg-secondary text-foreground rounded-full px-3 py-1 font-medium">
                      {featured.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {featured.dateLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {featured.readingTime}
                    </span>
                  </div>
                  <h2 className="font-display text-foreground mt-4 text-3xl leading-tight md:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>
                <span className="text-foreground inline-flex items-center gap-2 text-sm font-medium">
                  Ler artigo
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      {rest.length > 0 ? (
        <section className="pb-24">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="grid gap-6 md:grid-cols-2">
              {rest.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group border-border hover:border-foreground/40 flex flex-col overflow-hidden rounded-2xl border transition-colors"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.cover}
                      alt={p.coverAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-muted-foreground font-mono-tech text-xs tracking-wide uppercase">
                      {p.category}
                    </span>
                    <h3 className="font-display text-foreground mt-2 text-2xl leading-tight">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                      {p.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
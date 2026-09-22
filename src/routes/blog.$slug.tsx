import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog-data";
import { BlogContent } from "@/components/site/BlogContent";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFAB } from "@/components/site/WhatsAppFAB";
import { SITE_URL, WA_DEFAULT } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Artigo não encontrado" }] };
    const postUrl = `${SITE_URL}/blog/${post.slug}`;
    const coverAbs = post.cover.startsWith("http")
      ? post.cover
      : `${SITE_URL}${post.cover}`;
    return {
      meta: [
        { title: `${post.title} — Gabriel Longarai` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: postUrl },
        { property: "og:image", content: coverAbs },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.excerpt },
        { name: "twitter:image", content: coverAbs },
        { property: "article:published_time", content: post.date },
        { property: "article:author", content: "Gabriel Longarai" },
        { property: "article:section", content: post.category },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/blog/${post.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: coverAbs,
            url: postUrl,
            mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: "Gabriel Longarai",
              url: `${SITE_URL}/`,
            },
            publisher: { "@type": "Person", name: "Gabriel Longarai" },
            inLanguage: "pt-BR",
            keywords: post.tags.join(", "),
          }),
        },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  errorComponent: PostError,
  component: BlogPost,
});

function PostNotFound() {
  return (
    <main className="bg-background text-foreground flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl">Artigo não encontrado</h1>
        <p className="text-muted-foreground mt-3">
          O artigo que você procura não existe ou foi movido.
        </p>
        <Link
          to="/blog"
          className="border-foreground/40 hover:bg-foreground hover:text-background mt-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar para o blog
        </Link>
      </div>
    </main>
  );
}

function PostError({ reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <main className="bg-background text-foreground flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">Falha ao carregar o artigo</h1>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="bg-foreground text-background mt-6 rounded-full px-5 py-2.5 text-sm"
        >
          Tentar novamente
        </button>
      </div>
    </main>
  );
}

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="container mx-auto max-w-3xl px-6">
          <Link
            to="/blog"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Blog
          </Link>

          <header className="mt-6">
            <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-xs">
              <span className="bg-accent-cyan/10 text-accent-cyan rounded-full px-3 py-1 font-medium">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> {post.dateLabel}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {post.readingTime}
              </span>
            </div>
            <h1 className="font-display text-foreground mt-4 text-4xl leading-[1.08] md:text-5xl">
              {post.title}
            </h1>
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          <figure className="mt-10 lg:-mx-24 xl:-mx-32">
            <div className="bg-background overflow-hidden rounded-3xl border border-white/10">
              <img
                src={post.cover}
                alt={post.coverAlt}
                className="block aspect-[3/2] h-auto w-full object-cover md:aspect-[16/9]"
                loading="eager"
              />
            </div>
          </figure>

          <div className="mt-12">
            <BlogContent blocks={post.blocks} />
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((t: string) => (
              <span
                key={t}
                className="text-muted-foreground rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs"
              >
                #{t}
              </span>
            ))}
          </div>

          <aside className="from-accent-cyan/10 border-accent-cyan/20 mt-14 rounded-3xl border bg-gradient-to-br to-transparent p-8 md:p-10">
            <h2 className="font-display text-foreground text-2xl md:text-3xl">
              Quer colocar separadores na sua gaveta de dados?
            </h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Posso te ajudar a integrar marketplaces, ERPs e planilhas em um
              pipeline confiável, com dashboards prontos para decisão.
            </p>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener"
              className="bg-foreground text-background mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
            >
              Falar comigo no WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
          </aside>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="pb-24">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="font-display text-foreground text-3xl">Continue lendo</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={p.cover}
                      alt={p.coverAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-accent-cyan text-xs font-medium tracking-wide uppercase">
                      {p.category}
                    </span>
                    <h3 className="font-display text-foreground mt-2 text-xl">
                      {p.title}
                    </h3>
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
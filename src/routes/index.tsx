import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { WhyMe } from "@/components/site/WhyMe";
import { FAQ } from "@/components/site/FAQ";
import { HowItWorks } from "@/components/site/HowItWorks";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFAB } from "@/components/site/WhatsAppFAB";
import { TechStack } from "@/components/site/TechStack";
import { Projects } from "@/components/site/Projects";
import { Skills } from "@/components/site/Skills";
import { Certifications } from "@/components/site/Certifications";
import { Counters } from "@/components/site/Counters";
import { TechMarquee } from "@/components/site/TechMarquee";
import { ContactForm } from "@/components/site/ContactForm";
import { BackToTop } from "@/components/site/BackToTop";
import { SITE_URL, SERVICES } from "@/lib/site-data";
import { FAQS } from "@/components/site/FAQ";

const TITLE =
  "Consultoria em Dados e IA para empresas | Gabriel Longarai";
const DESCRIPTION =
  "Agentes de IA, machine learning e automação sobre Snowflake, dbt e Power BI. 15+ anos em BI. Porto Alegre, atendimento remoto em todo o Brasil. Diagnóstico gratuito.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "consultoria em IA, automação com IA, agentes de IA, machine learning para empresas, consultoria Snowflake, engenharia de dados, integração marketplace, integração ERP, Power BI, dbt, Airflow",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Gabriel Longarai",
      jobTitle: "Consultor de Dados, IA e Automações",
          url: `${SITE_URL}/`,
          email: "mailto:gslongarai@gmail.com",
          telephone: "+5551996961726",
          sameAs: ["https://www.linkedin.com/in/gabriellongarai/"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Porto Alegre",
            addressRegion: "RS",
            addressCountry: "BR",
          },
          knowsAbout: [
            "Inteligência Artificial",
            "Machine Learning",
            "Automação de Processos",
            "Snowflake",
            "dbt",
            "Apache Airflow",
            "Power BI",
            "Engenharia de Dados",
            "Business Intelligence",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Gabriel Longarai — Consultoria em Dados, IA & Automações",
          url: `${SITE_URL}/`,
          email: "mailto:gslongarai@gmail.com",
          telephone: "+5551996961726",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Porto Alegre",
            addressRegion: "RS",
            addressCountry: "BR",
          },
          areaServed: "BR",
          founder: { "@type": "Person", name: "Gabriel Longarai" },
          sameAs: ["https://www.linkedin.com/in/gabriellongarai/"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Serviços de Dados, IA & Automações",
            itemListElement: SERVICES.map((s) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: s.title,
                description: s.description,
              },
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <span id="top" />
      <Hero />
      <TechMarquee />
      <Counters />
      <WhyMe />
      <Services />
      <TechStack />
      <Projects />
      <Skills />
      <Certifications />
      <Portfolio />
      <HowItWorks />
      <FAQ />
      <ContactForm />
      <FinalCTA />
      <Footer />
      <WhatsAppFAB />
      <BackToTop />
    </main>
  );
}

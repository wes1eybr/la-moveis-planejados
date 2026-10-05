import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { ServicesImmersive } from "@/components/site/ServicesImmersive";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { QuoteSection } from "@/components/site/QuoteSection";
import { Footer } from "@/components/site/Footer";
import { WhatsappFloat } from "@/components/site/WhatsappFloat";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: siteConfig.title },
      { name: "description", content: siteConfig.description },
      { property: "og:title", content: siteConfig.title },
      { property: "og:description", content: siteConfig.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: siteConfig.companyName,
          description: siteConfig.description,
          areaServed: "BR",
          knowsAbout: [
            "Móveis planejados",
            "Cozinhas planejadas",
            "Marcenaria sob medida",
            "Dormitórios planejados",
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ServicesImmersive />
        <Portfolio />
        <Process />
        <About />
        <QuoteSection />
      </main>
      <Footer />
      <WhatsappFloat />
      <Toaster position="bottom-center" />
    </div>
  );
}

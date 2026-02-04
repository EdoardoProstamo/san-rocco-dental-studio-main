import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Reviews } from "@/components/sections/Reviews";
import { Services } from "@/components/sections/Services";
import { Strengths } from "@/components/sections/Strengths";
import { FAQ } from "@/components/sections/FAQ";
import { Contacts } from "@/components/sections/Contacts";
import { SITE_CONFIG } from "@/config/siteConfig";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = SITE_CONFIG.seo.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", SITE_CONFIG.seo.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = SITE_CONFIG.seo.description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Section Order: Hero → Reviews → Services → Strengths → FAQ → Contacts */}
        <Hero />
        <Reviews />
        <Services />
        <Strengths />
        <FAQ />
        <Contacts />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

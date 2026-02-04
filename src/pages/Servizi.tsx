import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SERVICES, SITE_CONFIG } from "@/config/siteConfig";
import { Sparkles, Shield, Anchor, AlignCenter, Star, Heart, Phone } from "lucide-react";
import { useEffect } from "react";
import serviceGeneral from "@/assets/service-general.jpg";
import serviceImplants from "@/assets/service-implants.jpg";
import serviceAesthetic from "@/assets/service-aesthetic.jpg";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Shield,
  Anchor,
  AlignCenter,
  Star,
  Heart,
};

const serviceImages: Record<string, string> = {
  igiene: serviceGeneral,
  implantologia: serviceImplants,
  estetica: serviceAesthetic,
};

const Servizi = () => {
  useEffect(() => {
    document.title = `Servizi | ${SITE_CONFIG.name}`;
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary">
          <div className="container-wide">
            <div className="max-w-3xl animate-fade-slide-up">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                I nostri servizi
              </h1>
              <p className="text-lg text-muted-foreground">
                Offriamo una gamma completa di trattamenti odontoiatrici, 
                dalla prevenzione all'implantologia, con tecnologie moderne 
                e un approccio personalizzato per ogni paziente.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="space-y-16">
              {SERVICES.map((service, index) => {
                const Icon = iconMap[service.icon] || Sparkles;
                const hasImage = serviceImages[service.id];
                const isReversed = index % 2 === 1;

                return (
                  <div
                    key={service.id}
                    className={`grid grid-cols-1 ${hasImage ? 'lg:grid-cols-2' : ''} gap-8 lg:gap-16 items-center animate-fade-slide-up`}
                  >
                    {/* Content */}
                    <div className={isReversed && hasImage ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                          <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                          {service.title}
                        </h2>
                      </div>
                      
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                      >
                        <Phone className="w-4 h-4" />
                        Prenota una consulenza
                      </a>
                    </div>

                    {/* Image */}
                    {hasImage && (
                      <div className={isReversed ? "lg:order-1" : ""}>
                        <div className="rounded-3xl overflow-hidden">
                          <img
                            src={serviceImages[service.id]}
                            alt={`${service.title} - Studio Odontoiatrico San Rocco`}
                            className="w-full h-auto aspect-[4/3] object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-wide text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-4 animate-fade-slide-up">
              Hai bisogno di una consulenza?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-slide-up stagger-1">
              Contattaci per prenotare una visita e discutere insieme le migliori 
              soluzioni per la tua salute orale.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground rounded-full text-lg font-medium hover:bg-background/90 transition-colors animate-fade-slide-up stagger-2"
            >
              <Phone className="w-5 h-5" />
              {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Servizi;

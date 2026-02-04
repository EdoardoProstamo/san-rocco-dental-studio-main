import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/config/siteConfig";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { useEffect } from "react";

const Contatti = () => {
  useEffect(() => {
    document.title = `Contatti | ${SITE_CONFIG.name}`;
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
                Contatti
              </h1>
              <p className="text-lg text-muted-foreground">
                Siamo a tua disposizione per qualsiasi informazione o per 
                prenotare un appuntamento. Non esitare a contattarci.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phone Card */}
              <div className="card-soft p-8 text-center animate-fade-slide-up">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Telefono
                </h2>
                <p className="text-muted-foreground mb-4">
                  Chiamaci per prenotare un appuntamento
                </p>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>

              {/* Address Card */}
              <div className="card-soft p-8 text-center animate-fade-slide-up stagger-1">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Indirizzo
                </h2>
                <p className="text-muted-foreground mb-4">
                  {SITE_CONFIG.address.street}<br />
                  {SITE_CONFIG.address.cap} {SITE_CONFIG.address.city} ({SITE_CONFIG.address.province})
                </p>
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors"
                >
                  Apri su Google Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-8 card-soft p-8 animate-fade-slide-up stagger-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  Orari di apertura
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-foreground">Lunedì</span>
                  <span className="text-muted-foreground">{SITE_CONFIG.hours.lunedi}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-foreground">Martedì</span>
                  <span className="text-muted-foreground">{SITE_CONFIG.hours.martedi}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-foreground">Mercoledì</span>
                  <span className="text-muted-foreground">{SITE_CONFIG.hours.mercoledi}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-foreground">Giovedì</span>
                  <span className="text-muted-foreground">{SITE_CONFIG.hours.giovedi}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-foreground">Venerdì</span>
                  <span className="text-muted-foreground">{SITE_CONFIG.hours.venerdi}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-foreground">Sabato</span>
                  <span className="text-muted-foreground">{SITE_CONFIG.hours.sabato}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border sm:col-span-2 sm:max-w-[50%]">
                  <span className="text-foreground">Domenica</span>
                  <span className="text-muted-foreground">{SITE_CONFIG.hours.domenica}</span>
                </div>
              </div>
            </div>

            {/* Studio Info */}
            <div className="mt-12 text-center animate-fade-slide-up stagger-3">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {SITE_CONFIG.name}
              </h3>
              <p className="text-muted-foreground">
                {SITE_CONFIG.doctor}
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contatti;

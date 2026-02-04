import { SITE_CONFIG } from "@/config/siteConfig";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import ctaImage from "@/assets/cta-background.jpg";

export function Contacts() {
  return (
    <section className="relative py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaImage}
          alt="Sala d'attesa dello Studio Odontoiatrico San Rocco"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-hover animate-fade-slide-up">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Prenota la tua visita
              </h2>
              <p className="text-muted-foreground">
                Siamo a disposizione per rispondere alle tue domande e fissare un appuntamento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-foreground mb-2">Telefono</h3>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-primary font-medium hover:underline"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>

              {/* Address */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-foreground mb-2">Indirizzo</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {SITE_CONFIG.address.street}<br />
                  {SITE_CONFIG.address.cap} {SITE_CONFIG.address.city}
                </p>
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                >
                  Apri su Google Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Hours */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-foreground mb-2">Orari</h3>
                <p className="text-muted-foreground text-sm">
                  Lun - Ven: {SITE_CONFIG.hours.lunedi}<br />
                  Sab - Dom: Chiuso
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10 text-center">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Chiama per un appuntamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

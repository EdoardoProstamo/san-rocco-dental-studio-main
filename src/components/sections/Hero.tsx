import { SITE_CONFIG } from "@/config/siteConfig";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-clinic.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Studio Odontoiatrico San Rocco - Reception moderna e accogliente"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-20">
        <div className="max-w-xl">
          {/* Card Overlay */}
          <div className="bg-background/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-hover animate-fade-slide-up">
            <p className="text-primary font-medium text-sm mb-3">
              Studio Dentistico a Monza
            </p>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
              Il tuo sorriso,<br />
              la nostra cura
            </h1>
            
            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
              {SITE_CONFIG.doctor} e il suo team ti accolgono in un ambiente moderno 
              e professionale per prendersi cura della tua salute orale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Prenota una visita
              </a>
              
              <Link
                to="/servizi"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors"
              >
                I nostri servizi
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

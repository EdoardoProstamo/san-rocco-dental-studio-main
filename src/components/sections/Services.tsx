import { SERVICES } from "@/config/siteConfig";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Anchor, AlignCenter, Star, Heart } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Shield,
  Anchor,
  AlignCenter,
  Star,
  Heart,
};

export function Services() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-slide-up">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            I nostri servizi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Offriamo una gamma completa di trattamenti odontoiatrici per tutta la famiglia
          </p>
        </div>

        {/* Services Grid 2x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            
            return (
              <div
                key={service.id}
                className={`card-soft p-6 group hover:border-primary/30 transition-all animate-fade-slide-up stagger-${index + 1}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/servizi"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Scopri tutti i servizi
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

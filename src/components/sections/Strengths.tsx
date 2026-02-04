import { STRENGTHS } from "@/config/siteConfig";
import { Check } from "lucide-react";
import studioImage from "@/assets/studio-interior.jpg";

export function Strengths() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="animate-fade-slide-up">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={studioImage}
                alt="Sala operatoria dello Studio Odontoiatrico San Rocco"
                className="w-full h-auto aspect-square object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-slide-up stagger-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Perché sceglierci
            </h2>
            <p className="text-muted-foreground mb-8">
              Il nostro impegno è offrire cure odontoiatriche di eccellenza in un ambiente sereno e accogliente.
            </p>

            <ul className="space-y-5">
              {STRENGTHS.map((strength, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">
                      {strength.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {strength.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Star, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";

function StarRating() {
  return (
    <div className="flex justify-center gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 fill-primary text-primary"
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide text-center">

        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
          La soddisfazione dei nostri pazienti
        </h2>

        <StarRating />

        <p className="text-lg font-medium text-foreground">
          Valutazione media: 5,0 su 5,0
        </p>

        <p className="text-sm text-muted-foreground mb-4">
          Basata sulle recensioni verificate su Google
        </p>

        {SITE_CONFIG.googleReviewsUrl !== "DA INSERIRE" ? (
          <a
            href={SITE_CONFIG.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-4"
          >
            Consulta tutte le recensioni
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : (
          <span className="text-muted-foreground text-sm italic mb-4 block">
            [Link Google Reviews da inserire]
          </span>
        )}

        <p className="text-muted-foreground italic mt-2">
          "La fiducia dei pazienti è il nostro obiettivo più importante"
        </p>

      </div>
    </section>
  );
}

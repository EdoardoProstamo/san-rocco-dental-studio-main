import { REVIEWS, SITE_CONFIG } from "@/config/siteConfig";
import { Star, ExternalLink } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-primary text-primary"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-slide-up">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Cosa dicono i nostri pazienti
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La soddisfazione dei pazienti è la nostra priorità
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {REVIEWS.map((review, index) => (
            <div
              key={index}
              className={`card-soft p-6 transition-shadow animate-fade-slide-up stagger-${index + 1}`}
            >
              <StarRating rating={review.rating} />
              
              <blockquote className="mt-4 text-foreground leading-relaxed">
                "{review.text}"
              </blockquote>
              
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {review.author}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {review.date}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Fonte: {review.source}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Fonte: Google (verificabile dal link)
          </p>
          {SITE_CONFIG.googleReviewsUrl !== "DA INSERIRE" ? (
            <a
              href={SITE_CONFIG.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Vedi tutte le recensioni su Google
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-muted-foreground text-sm italic">
              [Link Google Reviews da inserire]
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

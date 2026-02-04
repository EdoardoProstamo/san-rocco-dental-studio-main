import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/config/siteConfig";
import { Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Info Studio */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-background/70 text-sm mb-4">
              {SITE_CONFIG.doctor}
            </p>
            <p className="text-background/70 text-sm">
              Studio dentistico a Monza specializzato in cure odontoiatriche di qualità.
            </p>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-3 text-background/70 hover:text-background transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-background/70 hover:text-background transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    {SITE_CONFIG.address.street}<br />
                    {SITE_CONFIG.address.cap} {SITE_CONFIG.address.city} ({SITE_CONFIG.address.province})
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Orari */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Orari</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex justify-between">
                <span>Lunedì - Venerdì</span>
                <span>{SITE_CONFIG.hours.lunedi}</span>
              </li>
              <li className="flex justify-between">
                <span>Sabato</span>
                <span>{SITE_CONFIG.hours.sabato}</span>
              </li>
              <li className="flex justify-between">
                <span>Domenica</span>
                <span>{SITE_CONFIG.hours.domenica}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/60 text-center md:text-left">
              <p>© {currentYear} {SITE_CONFIG.name}</p>
              <p className="mt-1">P.IVA: {SITE_CONFIG.piva}</p>
            </div>
            
            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-background/60 hover:text-background transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie"
                className="text-background/60 hover:text-background transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

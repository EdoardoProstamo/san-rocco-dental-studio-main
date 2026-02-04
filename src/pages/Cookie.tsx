import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/config/siteConfig";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cookie = () => {
  useEffect(() => {
    document.title = `Cookie Policy | ${SITE_CONFIG.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <section className="section-padding">
          <div className="container-narrow">
            <div className="animate-fade-slide-up">
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
                Cookie Policy
              </h1>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground mb-6">
                  Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  1. Cosa sono i Cookie
                </h2>
                <p className="text-muted-foreground mb-4">
                  I cookie sono piccoli file di testo che i siti web visitati dagli utenti 
                  inviano ai loro terminali (computer, tablet, smartphone), dove vengono 
                  memorizzati per essere poi ritrasmessi agli stessi siti in occasione 
                  di visite successive.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  2. Cookie Utilizzati da Questo Sito
                </h2>
                <p className="text-muted-foreground mb-4">
                  <strong>Questo sito web non utilizza cookie.</strong>
                </p>
                <p className="text-muted-foreground mb-4">
                  Non sono presenti:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li>Cookie tecnici</li>
                  <li>Cookie di profilazione</li>
                  <li>Cookie analitici</li>
                  <li>Cookie di terze parti</li>
                  <li>Strumenti di tracciamento</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  La navigazione su questo sito non comporta alcun tracciamento dell'utente 
                  e non vengono raccolti dati di navigazione.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  3. Link a Siti Esterni
                </h2>
                <p className="text-muted-foreground mb-4">
                  Questo sito può contenere link a siti web esterni (es. Google Maps per 
                  le indicazioni stradali). Il Titolare non è responsabile delle policy 
                  sulla privacy e sui cookie adottate da tali siti esterni. Si invita 
                  l'utente a consultare le informative specifiche di ciascun sito visitato.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  4. Gestione dei Cookie del Browser
                </h2>
                <p className="text-muted-foreground mb-4">
                  Sebbene questo sito non utilizzi cookie, l'utente può comunque gestire 
                  le preferenze relative ai cookie direttamente dal proprio browser. 
                  Ecco i link alle guide dei principali browser:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li>
                    <a 
                      href="https://support.google.com/chrome/answer/95647" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Apple Safari
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Microsoft Edge
                    </a>
                  </li>
                </ul>

                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  5. Titolare del Trattamento
                </h2>
                <p className="text-muted-foreground mb-4">
                  <strong>{SITE_CONFIG.name}</strong><br />
                  {SITE_CONFIG.doctor}<br />
                  {SITE_CONFIG.address.full}<br />
                  Tel: {SITE_CONFIG.phoneDisplay}<br />
                  P.IVA: {SITE_CONFIG.piva}
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  6. Modifiche alla Cookie Policy
                </h2>
                <p className="text-muted-foreground mb-4">
                  Il Titolare si riserva il diritto di apportare modifiche alla presente 
                  Cookie Policy in qualsiasi momento. Gli utenti sono invitati a consultare 
                  periodicamente questa pagina.
                </p>

                <div className="mt-12 pt-8 border-t border-border">
                  <Link 
                    to="/" 
                    className="text-primary font-medium hover:underline"
                  >
                    ← Torna alla Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cookie;

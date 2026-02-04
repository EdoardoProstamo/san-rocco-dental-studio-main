import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/config/siteConfig";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  useEffect(() => {
    document.title = `Privacy Policy | ${SITE_CONFIG.name}`;
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
                Privacy Policy
              </h1>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground mb-6">
                  Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  1. Titolare del Trattamento
                </h2>
                <p className="text-muted-foreground mb-4">
                  Il Titolare del trattamento dei dati personali è:<br />
                  <strong>{SITE_CONFIG.name}</strong><br />
                  {SITE_CONFIG.doctor}<br />
                  {SITE_CONFIG.address.full}<br />
                  Tel: {SITE_CONFIG.phoneDisplay}<br />
                  P.IVA: {SITE_CONFIG.piva}
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  2. Tipologie di Dati Raccolti
                </h2>
                <p className="text-muted-foreground mb-4">
                  Questo sito web non raccoglie dati personali degli utenti in modo automatico. 
                  Non sono presenti form di contatto, sistemi di tracciamento, cookie di profilazione 
                  o strumenti di analisi del traffico.
                </p>
                <p className="text-muted-foreground mb-4">
                  L'unica interazione possibile è tramite il contatto telefonico, i cui dati 
                  saranno trattati secondo quanto previsto dalla normativa vigente in materia 
                  di protezione dei dati personali.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  3. Finalità del Trattamento
                </h2>
                <p className="text-muted-foreground mb-4">
                  Eventuali dati personali forniti volontariamente dall'utente (es. durante 
                  una telefonata per prenotare un appuntamento) saranno trattati esclusivamente 
                  per le seguenti finalità:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li>Gestione delle richieste di appuntamento</li>
                  <li>Comunicazioni relative ai servizi dello studio</li>
                  <li>Adempimento di obblighi di legge</li>
                </ul>

                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  4. Base Giuridica del Trattamento
                </h2>
                <p className="text-muted-foreground mb-4">
                  Il trattamento dei dati personali si basa sul consenso dell'interessato, 
                  sull'esecuzione di un contratto di cui l'interessato è parte, o su obblighi 
                  di legge ai quali è soggetto il Titolare.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  5. Diritti dell'Interessato
                </h2>
                <p className="text-muted-foreground mb-4">
                  In conformità al Regolamento UE 2016/679 (GDPR), l'interessato ha il diritto di:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                  <li>Accedere ai propri dati personali</li>
                  <li>Chiedere la rettifica o la cancellazione dei dati</li>
                  <li>Opporsi al trattamento</li>
                  <li>Richiedere la limitazione del trattamento</li>
                  <li>Richiedere la portabilità dei dati</li>
                  <li>Revocare il consenso in qualsiasi momento</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  Per esercitare i propri diritti, l'interessato può contattare il Titolare 
                  del trattamento ai recapiti sopra indicati.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  6. Conservazione dei Dati
                </h2>
                <p className="text-muted-foreground mb-4">
                  I dati personali saranno conservati per il tempo strettamente necessario 
                  al raggiungimento delle finalità per le quali sono stati raccolti e comunque 
                  nel rispetto dei termini di legge.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  7. Modifiche alla Privacy Policy
                </h2>
                <p className="text-muted-foreground mb-4">
                  Il Titolare si riserva il diritto di apportare modifiche alla presente 
                  Privacy Policy in qualsiasi momento. Gli utenti sono invitati a consultare 
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

export default Privacy;

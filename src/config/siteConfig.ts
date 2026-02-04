/**
 * Studio Odontoiatrico San Rocco - Configurazione Sito
 * 
 * Questo file contiene tutte le informazioni configurabili del sito.
 * Modificare solo i valori, NON la struttura.
 */

export const SITE_CONFIG = {
  // Informazioni Studio
  name: "Studio Odontoiatrico San Rocco",
  doctor: "Dott. Sebastiano Gasparone",
  description: "Studio dentistico a Monza specializzato in implantologia, ortodonzia e odontoiatria estetica. Cura professionale per il tuo sorriso.",
  
  // Contatti
  phone: "+39 039 200 6040",
  phoneDisplay: "039 200 6040",
  address: {
    street: "Via Gabriele D'Annunzio, 24",
    city: "Monza",
    province: "MB",
    cap: "20900",
    country: "Italia",
    full: "Via Gabriele D'Annunzio, 24 – 20900 Monza (MB), Italia",
  },
  
  // Dati Fiscali
  piva: "DA INSERIRE",
  
  // Link Esterni
  googleMapsUrl: "https://maps.google.com/?q=Via+Gabriele+D'Annunzio+24+Monza+MB+Italia",
  googleReviewsUrl: "DA INSERIRE", // URL pagina recensioni Google
  
  // Orari di Apertura (formato: "GG: HH:MM - HH:MM" o "Chiuso")
  hours: {
    lunedi: "09:00 - 19:00",
    martedi: "09:00 - 19:00",
    mercoledi: "09:00 - 19:00",
    giovedi: "09:00 - 19:00",
    venerdi: "09:00 - 19:00",
    sabato: "Chiuso",
    domenica: "Chiuso",
  },
  
  // SEO
  seo: {
    title: "Studio Odontoiatrico San Rocco | Dentista a Monza",
    description: "Studio dentistico a Monza del Dott. Sebastiano Gasparone. Implantologia, ortodonzia, igiene dentale e odontoiatria estetica. Prenota una visita.",
    keywords: ["dentista Monza", "studio dentistico Monza", "clinica dentale Monza", "implantologia Monza", "ortodonzia Monza"],
  },
} as const;

export const SITE_THEME = {
  // Palette: Calm Green
  palette: "calm-green",
  colors: {
    primary: "verde salvia",
    secondary: "bianco",
    accent: "grigio caldo",
  },
  
  // Hero Style
  heroStyle: "card-overlay",
  
  // Services Presentation
  servicesLayout: "grid-2x3",
  servicesIconStyle: "linear",
  
  // Visual Elements
  shapes: "rounded-soft",
  separators: "light",
  gradients: false,
  
  // Section Order (Home)
  sectionOrder: [
    "hero",
    "reviews", 
    "services",
    "strengths",
    "faq",
    "contacts",
  ],
  
  // Animations
  animations: {
    enabled: true,
    type: "fade-slide",
    duration: 250,
    easing: "ease-out",
  },
} as const;

// Servizi offerti
export const SERVICES = [
  {
    id: "igiene",
    title: "Igiene e Prevenzione",
    description: "Pulizia dentale professionale, fluoroprofilassi e programmi personalizzati per mantenere la salute del cavo orale.",
    icon: "Sparkles",
  },
  {
    id: "conservativa",
    title: "Odontoiatria Conservativa",
    description: "Trattamento delle carie e restauro dei denti con materiali estetici e duraturi.",
    icon: "Shield",
  },
  {
    id: "implantologia",
    title: "Implantologia",
    description: "Impianti dentali di ultima generazione per sostituire i denti mancanti con soluzioni stabili e naturali.",
    icon: "Anchor",
  },
  {
    id: "ortodonzia",
    title: "Ortodonzia",
    description: "Apparecchi fissi e mobili, allineatori trasparenti per correggere la posizione dei denti a ogni età.",
    icon: "AlignCenter",
  },
  {
    id: "estetica",
    title: "Estetica Dentale",
    description: "Sbiancamento professionale, faccette e trattamenti per un sorriso più luminoso.",
    icon: "Star",
  },
  {
    id: "endodonzia",
    title: "Endodonzia",
    description: "Trattamenti canalari con tecniche moderne per salvare i denti compromessi.",
    icon: "Heart",
  },
] as const;

// Punti di forza
export const STRENGTHS = [
  {
    title: "Esperienza Professionale",
    description: "Anni di esperienza nel settore odontoiatrico al servizio dei pazienti.",
  },
  {
    title: "Tecnologie Moderne",
    description: "Strumentazione all'avanguardia per diagnosi precise e trattamenti efficaci.",
  },
  {
    title: "Approccio Personalizzato",
    description: "Ogni paziente riceve un piano di cura studiato sulle proprie esigenze.",
  },
  {
    title: "Ambiente Accogliente",
    description: "Uno studio pensato per mettere a proprio agio anche i pazienti più ansiosi.",
  },
] as const;

// FAQ
export const FAQ = [
  {
    question: "Come posso prenotare una visita?",
    answer: "Può contattarci telefonicamente al numero 039 200 6040 durante gli orari di apertura. Il nostro staff sarà lieto di trovare l'appuntamento più adatto alle sue esigenze.",
  },
  {
    question: "Accettate pagamenti dilazionati?",
    answer: "Sì, offriamo possibilità di pagamento dilazionato per i trattamenti più importanti. Ne parleremo insieme durante la visita.",
  },
  {
    question: "Quanto dura una prima visita?",
    answer: "La prima visita dura circa 30-45 minuti e comprende un esame completo, eventuali radiografie e la discussione del piano di trattamento.",
  },
  {
    question: "Trattate anche i bambini?",
    answer: "Certamente. Il nostro studio accoglie pazienti di tutte le età, con particolare attenzione ai più piccoli per rendere l'esperienza serena.",
  },
  {
    question: "È possibile avere un preventivo prima di iniziare?",
    answer: "Assolutamente sì. Dopo la prima visita riceverà un preventivo dettagliato e trasparente di tutti i trattamenti consigliati.",
  },
] as const;

// Recensioni (da aggiornare con recensioni reali dalla pagina Google)
export const REVIEWS = [
  {
    author: "M. R.",
    rating: 5,
    text: "Studio molto professionale e accogliente. Il Dott. Gasparone è sempre disponibile e attento.",
    date: "2024",
    source: "Google",
  },
  {
    author: "L. B.",
    rating: 5,
    text: "Personale gentilissimo e ambiente pulito. Mi sono trovata molto bene.",
    date: "2024",
    source: "Google",
  },
  {
    author: "G. T.",
    rating: 5,
    text: "Finalmente un dentista di cui fidarsi. Consigliatissimo.",
    date: "2024",
    source: "Google",
  },
] as const;

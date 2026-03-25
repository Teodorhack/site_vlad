// ============================================================
// COURSE DATA — Shell cu metadata modulelor
// Lectiile se incarca din fisierele separate js/data/moduleX.js
//
// CUM ADAUGI UN MODUL NOU:
// 1. Creeaza fisierul js/data/moduleX.js (copiaza structura din module1.js)
// 2. In fisier, seteaza: COURSE_DATA.modules[X-1].lessons = [...]
// 3. Adauga <script src="js/data/moduleX.js"></script> in index.html
// ============================================================

const COURSE_DATA = {
  meta: {
    title: "E-Commerce COD Romania",
    subtitle: "Ghid Complet - De la Zero la Profit",
    version: "2.0",
    modules: 12,
    lessons: 60,
    tools: 8,
    weeks: 8,
  },

  modules: [
    { id: 1,  slug: "fundamente-mindset",   title: "Fundamente & Mindset",       color: "#00ff6a", icon: "\u{1F9E0}", subtitle: "Tot ce trebuie sa intelegi inainte de a investi primul euro",  estimatedTime: "3-4 ore", difficulty: "Incepator",   tags: ["Teorie", "Esential"],          lessons: [] },
    { id: 2,  slug: "research-validare",    title: "Research & Validare Produs",  color: "#4a9eff", icon: "\u{1F50D}", subtitle: "Cum gasesti produse castigatoare",                          estimatedTime: "4-5 ore", difficulty: "Intermediar",  tags: ["Practica", "Cel mai important"], lessons: [] },
    { id: 3,  slug: "import-furnizori",     title: "Import & Furnizori",          color: "#b47aff", icon: "\u{1F4E6}", subtitle: "China, Romania, UE - de unde cumperi",                      estimatedTime: "3-4 ore", difficulty: "Intermediar",  tags: ["Practica", "Avansata"],         lessons: [] },
    { id: 4,  slug: "magazin-conversie",    title: "Magazin Online & Conversie",  color: "#ff6ab4", icon: "\u{1F6D2}", subtitle: "Shopify, pagina produs, checkout COD",                     estimatedTime: "5-6 ore", difficulty: "Intermediar",  tags: ["Practica", "Critica"],          lessons: [] },
    { id: 5,  slug: "facebook-tiktok-ads",  title: "Facebook & TikTok Ads",       color: "#ffd600", icon: "\u{1F4E3}", subtitle: "Campanii, testare, scalare",                               estimatedTime: "6-8 ore", difficulty: "Avansat",      tags: ["Practica", "Revenue driver"],   lessons: [] },
    { id: 6,  slug: "fulfillment-logistica",title: "Fulfillment & Logistica",     color: "#ff6a00", icon: "\u{1F69A}", subtitle: "Centre fulfillment, curierat, procese",                    estimatedTime: "3-4 ore", difficulty: "Intermediar",  tags: ["Operational", "Critica"],       lessons: [] },
    { id: 7,  slug: "kpi-tracking",         title: "KPI-uri & Tracking Financiar",color: "#00ff6a", icon: "\u{1F4CA}", subtitle: "Ce numere conteaza zilnic",                                estimatedTime: "3-4 ore", difficulty: "Intermediar",  tags: ["Financiar", "Zilnic"],          lessons: [] },
    { id: 8,  slug: "cashflow-finance",     title: "Cashflow & Finance",          color: "#4a9eff", icon: "\u{1F4B0}", subtitle: "Gestionarea banilor in COD",                               estimatedTime: "2-3 ore", difficulty: "Intermediar",  tags: ["Financiar", "Esential"],        lessons: [] },
    { id: 9,  slug: "legal-firma",          title: "Legal & Infiintare Firma",    color: "#b47aff", icon: "\u{2696}",  subtitle: "SRL, CAEN, EORI, GDPR",                                   estimatedTime: "3-4 ore", difficulty: "Incepator",    tags: ["Legal", "Obligatoriu"],         lessons: [] },
    { id: 10, slug: "email-sms",            title: "Email & SMS Marketing",       color: "#ff6ab4", icon: "\u{1F4E7}", subtitle: "Confirmari, follow-up, reactivare",                        estimatedTime: "2-3 ore", difficulty: "Intermediar",  tags: ["Marketing", "Automatizare"],    lessons: [] },
    { id: 11, slug: "scalare-crestere",     title: "Scalare & Crestere",          color: "#ffd600", icon: "\u{1F680}", subtitle: "De la 1 produs la portofoliu",                             estimatedTime: "3-4 ore", difficulty: "Avansat",      tags: ["Crestere", "Avansata"],         lessons: [] },
    { id: 12, slug: "gandirea-vanzatorului",title: "Gandirea Vanzatorului",       color: "#ff6a00", icon: "\u{1F9E0}", subtitle: "Psihologie, hooks, copywriting avansat",                   estimatedTime: "2-3 ore", difficulty: "Avansat",      tags: ["Mindset", "Avansat"],           lessons: [] },
  ]
};

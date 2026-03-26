// ============================================================
// DEMO SECTIONS — Adds video, resources, certificate to modules
// Loaded after module data to append demo sections
// ============================================================

// Add video grid to Module 1, Lesson 1.1
if (COURSE_DATA.modules[0].lessons && COURSE_DATA.modules[0].lessons[0]) {
  COURSE_DATA.modules[0].lessons[0].sections.push(
    {
      type: "videos",
      title: "📹 Video Tutoriale — Cum funcționează COD",
      items: [
        {
          title: "Cum să faci bani cu e-commerce COD",
          url: "https://youtu.be/XulvgOypz04",
          description: "Introducere completă în modelul Cash on Delivery",
          duration: "12:34"
        },
        {
          title: "Validare Produs Pas cu Pas",
          url: "https://youtu.be/K8s-bs7BWpc",
          description: "Cum validezi un produs înainte să investești",
          duration: "24:15"
        },
        {
          title: "Testimonial Student #1",
          url: "https://youtu.be/4JHgdgMEN94",
          description: "Rezultate reale de la studenți COD Academy",
          duration: "18:42"
        },
        {
          title: "Testimonial Student #2",
          url: "https://youtu.be/WUNpMn--4AY",
          description: "Experiența unui student în programul COD",
          duration: "15:08"
        }
      ]
    },
    {
      type: "resources",
      title: "📁 Resurse & Materiale",
      items: [
        {
          title: "Calculator Profitabilitate Produse",
          description: "Calculatorul complet de potențial produse — introdu cifrele, vezi instant dacă merită",
          url: "https://docs.google.com/spreadsheets/d/1N_CyaCPJ7BHVlh8ornGf5V47w3yACkWw/edit?gid=1518533618#gid=1518533618",
          icon: "sheet"
        },
        {
          title: "Shopify — 3$ pe 3 luni (în loc de 210$)",
          description: "Aplicația pe care îți faci site-ul și paginile de produs",
          url: "https://shopify.pxf.io/JK7vbr",
          icon: "tool"
        },
        {
          title: "Minea — Găsește produse ușor (-20% reducere)",
          description: "Aplicația unde găsești produse câștigătoare foarte ușor",
          url: "https://app.minea.com/en/plans/premium?ref=cashondelivery",
          icon: "tool"
        },
        {
          title: "Alibaba — De unde cumperi stoc",
          description: "Cea mai mare platformă de furnizori din lume",
          url: "https://www.alibaba.com/",
          icon: "link"
        },
        {
          title: "Instagram @vladprofesorul",
          description: "Mă găsești oricând pe Instagram dacă ai nevoie de ajutor",
          url: "https://linktw.in/NrzVVv",
          icon: "link"
        }
      ]
    },
    {
      type: "comments",
      title: "💬 Discuții & Întrebări"
    }
  );
}

// Add certificate to last lesson of Module 1
if (COURSE_DATA.modules[0].lessons) {
  const lastLesson = COURSE_DATA.modules[0].lessons[COURSE_DATA.modules[0].lessons.length - 1];
  if (lastLesson) {
    lastLesson.sections.push({
      type: "certificate",
      title: "Certificat de Completare",
      description: "A completat cu succes Modulul 1: Fundamente & Mindset",
      moduleName: "MODUL 1 — FUNDAMENTE & MINDSET"
    });
  }
}

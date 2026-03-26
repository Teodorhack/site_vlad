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

// Add quiz + certificate to last lesson of each module that has lessons
COURSE_DATA.modules.forEach(function(mod) {
  if (!mod.lessons || !mod.lessons.length) return;
  var lastLesson = mod.lessons[mod.lessons.length - 1];
  if (!lastLesson) return;

  // Add quiz based on module content
  var quizzes = {
    1: {
      title: "📝 Quiz — Modulul 1: Fundamente & Mindset",
      questions: [
        { question: "Ce înseamnă COD în e-commerce?", options: ["Card on Delivery", "Cash on Delivery", "Collect on Demand", "Cash on Demand"], correct: 1 },
        { question: "Care este rata medie de neridicate pe COD în România?", options: ["5-10%", "15-25%", "40-50%", "60-70%"], correct: 1 },
        { question: "Ce reduce cel mai eficient rata de neridicate?", options: ["Prețuri mai mici", "Confirmare SMS/telefon + livrare rapidă", "Reclame mai bune", "Mai multe produse"], correct: 1 },
        { question: "Câte produse trebuie testate înainte de a găsi un câștigător?", options: ["1-2", "3-5", "10-20", "50+"], correct: 2 },
        { question: "Care e cel mai important KPI în COD?", options: ["Numărul de like-uri", "Revenue-ul brut", "Profitul NET după toate costurile", "Numărul de comenzi"], correct: 2 },
      ]
    },
    2: {
      title: "📝 Quiz — Modulul 2: Research & Validare",
      questions: [
        { question: "Care e primul pas în validarea unui produs?", options: ["Cumperi stoc", "Verifici dacă are cerere reală pe piață", "Faci reclame", "Creezi site-ul"], correct: 1 },
        { question: "Ce tool folosești pentru a spiona reclamele competitorilor?", options: ["Google Analytics", "Facebook Ad Library / Minea", "Shopify", "Instagram"], correct: 1 },
        { question: "Ce marjă minimă e recomandată pentru un produs COD?", options: ["5%", "10%", "20-30%", "50%+"], correct: 2 },
        { question: "Ce e un produs 'câștigător'?", options: ["Cel mai scump", "Cel cu cea mai mare marjă + cerere + wow factor", "Cel mai ieftin", "Cel mai popular pe TikTok"], correct: 1 },
      ]
    },
    3: {
      title: "📝 Quiz — Modulul 3: Import & Furnizori",
      questions: [
        { question: "Care e cea mai mare platformă de furnizori din lume?", options: ["Amazon", "eBay", "Alibaba", "Shopify"], correct: 2 },
        { question: "Ce înseamnă DDP în import?", options: ["Direct Delivery Process", "Delivered Duty Paid (taxe plătite)", "Digital Distribution Platform", "Drop Direct Purchase"], correct: 1 },
        { question: "Poți lucra doar cu furnizori din China?", options: ["Da, obligatoriu", "Nu, poți și din România sau UE", "Doar din UE", "Doar din Asia"], correct: 1 },
      ]
    },
  };

  if (quizzes[mod.id]) {
    lastLesson.sections.push(quizzes[mod.id]);
    // Set quiz type
    lastLesson.sections[lastLesson.sections.length - 1].type = 'quiz';
  }

  // Add certificate
  lastLesson.sections.push({
    type: "certificate",
    title: "Certificat de Completare",
    description: "A completat cu succes Modulul " + mod.id + ": " + mod.title,
    moduleName: "MODUL " + mod.id + " — " + mod.title.toUpperCase()
  });
});

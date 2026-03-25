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
          title: "Ce este COD? Explicat simplu",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          description: "Introducere completă în modelul Cash on Delivery",
          duration: "12:34"
        },
        {
          title: "Primul tău magazin Shopify",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          description: "Setup complet pas cu pas pentru începători",
          duration: "24:15"
        },
        {
          title: "Facebook Ads pentru COD",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          description: "Prima ta campanie de ads profitabilă",
          duration: "18:42"
        },
        {
          title: "Cum găsești produse câștigătoare",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          description: "Strategia completă de research",
          duration: "31:08"
        }
      ]
    },
    {
      type: "resources",
      title: "📁 Resurse & Materiale",
      items: [
        {
          title: "Template Profit Tracker (Google Sheets)",
          description: "Spreadsheet complet pentru tracking financiar zilnic",
          url: "https://docs.google.com/spreadsheets",
          icon: "sheet"
        },
        {
          title: "Checklist Lansare Produs (PDF)",
          description: "Lista completă de verificare înainte de lansarea unui produs",
          url: "https://drive.google.com",
          icon: "pdf"
        },
        {
          title: "Template Pagină Produs Shopify",
          description: "Template optimizat pentru conversie maximă pe COD",
          url: "https://drive.google.com",
          icon: "template"
        },
        {
          title: "Calculator ROI Campanii Ads",
          description: "Tool interactiv pentru calcularea ROAS-ului real",
          url: "https://docs.google.com/spreadsheets",
          icon: "tool"
        },
        {
          title: "Folder Complet Resurse Modul 1",
          description: "Toate materialele, template-urile și ghidurile din acest modul",
          url: "https://drive.google.com",
          icon: "drive"
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

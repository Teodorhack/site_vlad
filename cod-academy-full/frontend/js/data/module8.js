// ============================================================
// MODULE 8 — Cashflow & Finance (7 lectii)
// Adauga in index.html: <script src="js/data/module8.js"></script>
// ============================================================

COURSE_DATA.modules[7].lessons = [
  {
    id: "8.1",
    title: "Particularitatea Cashflow-ului COD - De ce e Diferit",
    sections: [
      {
        type: "text",
        title: "Pe COD, cashflow-ul e inversat",
        content: "In e-commerce clasic (plata cu cardul), primesti banii INAINTE sau simultan cu livrarea. Pe COD, platesti totul inainte (ads, COGS, fulfillment) si primesti banii DUPA 7-14 zile (cand curierul vireaza rambursul).\n\nAcest decalaj creeaza o presiune de cashflow care creste proportional cu volumul de vanzari. Paradoxal, cu cat vinzi mai mult, cu atat ai nevoie de mai mult cash disponibil. Multi selleri profitabili pe hartie au dat faliment din cauza cashflow-ului."
      },
      {
        type: "timeline",
        title: "Ciclul banilor pe COD (exemplu practic)",
        periods: [
          {
            label: "Ziua 1: Cheltuieli",
            objectives: [
              "Platesti ads: 50 EUR",
              "Ai platit deja COGS: 35 RON x comenzi",
              "Fulfillment proceseaza: 25 RON x comenzi",
              "TOTAL IESIRI: ~400-600 RON"
            ],
            expectation: "Bani iesiti din cont. Zero bani intrati."
          },
          {
            label: "Ziua 2-3: Livrare",
            objectives: [
              "Curierul livreaza coletele din ziua 1",
              "Clientii platesc la curier",
              "Curierul colecteaza banii"
            ],
            expectation: "Banii sunt la curier, nu la tine. Tu continui sa platesti ads zilnic."
          },
          {
            label: "Ziua 5-10: Asteptare virament",
            objectives: [
              "Curierul proceseaza platile",
              "Verificari interne curier",
              "Virament bancar in pregatire"
            ],
            expectation: "Inca astepti. Ai cheltuit deja 5-10 zile de ads fara sa fi primit nimic inapoi."
          },
          {
            label: "Ziua 8-14: Banii ajung",
            objectives: [
              "Virament de la curier in contul de firma",
              "Suma: revenue MINUS comision curier MINUS neridicate",
              "Banii sunt disponibili pentru reinvestire"
            ],
            expectation: "In sfarsit ai cash. Dar in aceste 8-14 zile ai cheltuit continuu. Trebuie sa fi avut rezerva."
          }
        ]
      },
      {
        type: "warning",
        title: "Regula de aur a cashflow-ului COD",
        content: "INTOTDEAUNA ai in cont minim 14 zile de cheltuieli operationale (ads + COGS + fulfillment) INAINTE de ce ai cheltuit. Daca cheltuiesti 100 EUR/zi: ai minim 1.400 EUR buffer. Daca cheltuiesti 200 EUR/zi: ai minim 2.800 EUR buffer. Fara buffer, o intarziere de virament de 2-3 zile iti opreste campaniile."
      }
    ]
  },
  {
    id: "8.2",
    title: "Cum Planifici Bugetul pentru 60 de Zile",
    sections: [
      {
        type: "text",
        title: "Planul financiar realist",
        content: "Nu poti sa nu stii de unde vin si unde se duc banii. Un plan financiar simplu pe 60 de zile iti arata: cat ai nevoie sa investesti, cand vin banii inapoi, si cat profit poti astepta realist."
      },
      {
        type: "comparison",
        title: "Plan financiar pe 8 saptamani (scenariul realist)",
        headers: ["Saptamana", "Ads spend", "COGS + Fulfill + Curier", "Revenue estimat", "Profit estimat", "Cash necesar cumulat"],
        rows: [
          ["S1-S2 (testare)", "400-600 EUR", "200-400 EUR", "300-800 EUR", "-300 to -200 EUR", "800-1.000 EUR"],
          ["S3-S4 (optimizare)", "600-1.000 EUR", "400-800 EUR", "1.200-2.500 EUR", "-100 to +400 EUR", "1.500-2.500 EUR"],
          ["S5-S6 (scalare)", "1.200-2.000 EUR", "800-1.500 EUR", "3.000-6.000 EUR", "+500 to +1.500 EUR", "2.000-3.500 EUR (dar incepi sa primesti bani)"],
          ["S7-S8 (scalare agresiva)", "2.000-4.000 EUR", "1.500-3.000 EUR", "6.000-12.000 EUR", "+1.500 to +4.000 EUR", "Se autofinanteaza din profit"],
          ["TOTAL 60 zile", "4.200-7.600 EUR", "2.900-5.700 EUR", "10.500-21.300 EUR", "+1.600 to +5.700 EUR profit", "Investitie initiala: 2.000-3.500 EUR"]
        ]
      },
      {
        type: "tip",
        title: "Investitia initiala minima realista",
        content: "Pentru a rula planul de 60 zile cu obiectiv de 5.000-10.000 EUR profit: ai nevoie de minim 2.000-3.500 EUR investitie initiala (fara curs). Aceasta include: Shopify + domeniu (70 EUR), Ads primele 4 saptamani (500-1.000 EUR), COGS primele produse (300-500 EUR), Fulfillment primele comenzi (200-400 EUR), si buffer cashflow (500-1.000 EUR). Daca ai sub 1.000 EUR total, ajusteaza targetul: 1.000-2.000 EUR profit in 60 zile e realist cu buget mic."
      }
    ]
  },
  {
    id: "8.3",
    title: "Cand si Cum Reinvestesti Profitul",
    sections: [
      {
        type: "text",
        title: "Profitul nu e al tau pana nu e in buzunar",
        content: "Greseala comuna: faci 1.000 EUR profit in prima luna si scoti toti banii. Luna a doua nu mai ai buget de ads si business-ul moare. Regula: in primele 3-6 luni, reinvesteste MINIM 70% din profit inapoi in business.\n\nProfitul reinvestit corect creste exponential: profit luna 1 → buget ads mai mare luna 2 → mai multe vanzari → mai mult profit → si mai mult buget. E un efect compus care accelereaza dramatic."
      },
      {
        type: "keypoints",
        title: "Reguli de reinvestire",
        points: [
          { label: "Luna 1-2: reinvesteste 100%", text: "Tot profitul se intoarce in business. Nu scoti nimic. Focuseaza pe crestere si validare." },
          { label: "Luna 3-4: reinvesteste 70-80%", text: "Poti scoate 20-30% pentru tine. Restul se intoarce in ads, stoc, si optimizari." },
          { label: "Luna 5-6: reinvesteste 50-60%", text: "Business-ul e stabil, poti scoate mai mult. Dar continua sa investesti in crestere." },
          { label: "Dupa luna 6: 50/50", text: "Jumatate profit personal, jumatate reinvestit. Acesta e ritmul sustenabil pe termen lung." },
          { label: "NICIODATA: nu reinvesti bani pe care nu-i ai", text: "Nu imprumuta pentru ads. Nu folosi bani de chirie pentru COGS. Investeste DOAR profit confirmat si bani pe care ti-i permiti sa-i pierzi." }
        ]
      }
    ]
  },
  {
    id: "8.4",
    title: "Contabilitate: Ce Contabil iti Trebuie si Ce Documente",
    sections: [
      {
        type: "text",
        title: "Contabilitatea nu e optionala",
        content: "Din momentul in care ai SRL si faci prima vanzare, ai obligatii contabile si fiscale. Un contabil bun te scuteste de amenzi, iti optimizeaza taxele, si iti tine ordine in finante. Un contabil prost (sau lipsa contabilului) te costa de 10x mai mult pe termen lung."
      },
      {
        type: "keypoints",
        title: "Ce trebuie sa stii despre contabilitate",
        points: [
          { label: "Tip contabil: specializat e-commerce", text: "NU orice contabil. Cauta unul care are experienta cu e-commerce / dropshipping / COD. Stie cum functioneaza rambursurile de la curier, importurile, si deducerile specifice. Cost: 150-400 EUR/luna (depinde de volum)." },
          { label: "Documente pe care le generezi lunar", text: "Facturi de vanzare (automate din Shopify), facturi de achizitie (de la furnizori), extrase bancare, rapoarte curier (viramente ramburs), facturi ads (Facebook/TikTok), facturi fulfillment, si orice alta cheltuiala de business." },
          { label: "TVA", text: "Daca esti platitor de TVA (obligatoriu peste 300.000 RON cifra de afaceri/an): colectezi 19% TVA de la clienti si o virezi statului. Deduci TVA-ul din facturile furnizorilor si ale cheltuielilor de business. Contabilul face calculul si declaratia." },
          { label: "Impozit pe profit", text: "Impozit pe profit SRL: 1% din cifra de afaceri (microintreprindere sub 500.000 EUR) sau 16% din profit (firma mare). La inceput vei fi microintreprindere = 1% din revenue. Avantajos." },
          { label: "Dividende", text: "Ca sa scoti bani din SRL in buzunarul personal: declari dividende. Impozit pe dividende: 8%. Contabilul te ghideaza cand si cum sa le declari." }
        ]
      },
      {
        type: "tip",
        title: "Actiune imediata",
        content: "Gaseste contabil INAINTE de prima vanzare. Cere recomandari in grupuri de e-commerce. Intreaba specific: Ai experienta cu magazine online COD? Cat costa pe luna? Ce documente ai nevoie de la mine? Cum comunici — email, WhatsApp, platforma online? Un contabil care raspunde pe WhatsApp si are platforma online de upload documente = ideal pentru un business digital."
      }
    ]
  },
  {
    id: "8.5",
    title: "Separarea Banilor: Personal vs Business",
    sections: [
      {
        type: "text",
        title: "Cont separat de business e OBLIGATORIU",
        content: "Nu amesteca banii personali cu cei de business. Niciodata. E cea mai rapida cale catre haos financiar. Din momentul in care ai SRL, deschide cont bancar de firma separat si toate tranzactiile de business trec prin el."
      },
      {
        type: "keypoints",
        title: "Reguli de separare",
        points: [
          { label: "Cont business dedicat", text: "Deschide cont la o banca cu comisioane mici pentru SRL-uri. Recomandat: Banca Transilvania (BT), ING Business, sau Revolut Business. Toate veniturile de la curier intra aici. Toate platile de ads, furnizori, fulfillment ies de aici." },
          { label: "Card dedicat pentru ads", text: "Emite un card business pentru plata ads-urilor Facebook/TikTok. Revolut Business e ideal — card virtual instant, fara comisioane la plati online in EUR." },
          { label: "Nu plati cheltuieli personale din contul de firma", text: "Nici macar un cafea. Contabilul se uita la extrasul de cont — fiecare tranzactie trebuie justificata ca si cheltuiala de business. Cheltuielile personale se platesc DOAR din dividende declarate sau salariu de administrator." },
          { label: "Transfer lunar fix catre contul personal", text: "Stabileste un salariu de administrator (chiar si mic: 500-1.000 RON/luna la inceput) si dividende cand e cazul. Restul ramane in firma pentru reinvestire." }
        ]
      }
    ]
  },
  {
    id: "8.6",
    title: "Scenarii Financiare: Optimist, Realist, Pesimist",
    sections: [
      {
        type: "comparison",
        title: "3 scenarii pe 60 de zile (investitie initiala: 2.500 EUR)",
        headers: ["Metrica", "Pesimist", "Realist", "Optimist"],
        rows: [
          ["Produse testate", "5-8", "8-12", "12-15"],
          ["Produse castigatoare gasite", "0-1", "1-2", "2-3"],
          ["Comenzi totale 60 zile", "100-200", "300-600", "600-1.200"],
          ["Revenue total", "15.000-30.000 RON", "45.000-90.000 RON", "90.000-180.000 RON"],
          ["Total costs", "18.000-28.000 RON", "35.000-70.000 RON", "65.000-130.000 RON"],
          ["Profit NET", "-3.000 to +2.000 RON", "+10.000-20.000 RON", "+25.000-50.000 RON"],
          ["Profit NET (EUR)", "-600 to +400 EUR", "+2.000-4.000 EUR", "+5.000-10.000 EUR"],
          ["Ce inveti", "Procesul complet, chiar daca nu e profitabil", "Business viabil, gata de scalare", "Business matur, gata de automatizare"],
          ["Ce faci dupa", "Optimizezi si continui cu buget mic", "Scalezi agresiv luna 3-4", "Angajezi VA, deschizi al 2-lea magazin"]
        ]
      },
      {
        type: "tip",
        title: "Chiar si scenariul pesimist e valoros",
        content: "Daca dupa 60 de zile esti pe zero sau mica pierdere, ai castigat ceva ce nu se cumpara cu bani: EXPERIENTA. Stii sa rulezi ads, sa construiesti site, sa gestionezi fulfillment, sa analizezi date. Aceste abilitati valoreza zeci de mii de euro pe piata muncii si in viitoare afaceri. Pierzi bani doar daca RENUNTI fara sa inveti nimic."
      }
    ]
  },
  {
    id: "8.7",
    title: "Checklist Finance - Esti Pregatit Financiar?",
    sections: [
      {
        type: "checklist",
        title: "Verifica inainte de a cheltui primul EUR pe ads",
        items: [
          { text: "Am cont bancar de firma separat (sau in curs de deschidere)", critical: true },
          { text: "Am card de business pentru plata ads-uri (Revolut Business ideal)", critical: true },
          { text: "Am minim 2.000 EUR disponibili pentru investitie (sau am ajustat targetul)", critical: true },
          { text: "Am buffer de cashflow de minim 14 zile cheltuieli", critical: true },
          { text: "Am contabil identificat (specializat e-commerce)", critical: true },
          { text: "Am Profit Tracker configurat si stiu cum il completez", critical: true },
          { text: "Am calculat breakeven ROAS pentru fiecare produs", critical: true },
          { text: "Am plan de reinvestire: 100% in primele 2 luni", critical: false },
          { text: "Stiu diferenta intre ROAS aparent si ROAS real", critical: true },
          { text: "Am scenariile financiare (optimist/realist/pesimist) si le accept pe toate", critical: false }
        ]
      },
      {
        type: "tip",
        title: "Modulele 9-12 acopera: Legal, Email Marketing, Scalare, si Mindset Avansat",
        content: "Daca ai parcurs Modulele 1-8, ai tot ce trebuie sa lansezi si sa operezi un business COD profitabil. Modulele 9-12 sunt pentru optimizare, conformitate legala, si scalare pe termen lung. Cere-mi sa le generez cand esti gata."
      }
    ]
  }
];

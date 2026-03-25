// ============================================================
// MODULE 10 — Email & SMS Marketing (7 lectii)
// Adauga in index.html: <script src="js/data/module10.js"></script>
// ============================================================

COURSE_DATA.modules[9].lessons = [
  {
    id: "10.1",
    title: "De ce Email si SMS conteaza pe COD",
    sections: [
      {
        type: "text",
        title: "Cele doua arme secrete contra neridicarilor",
        content: "Pe COD, email-ul si SMS-ul au un rol diferit fata de e-commerce clasic. Nu sunt (doar) pentru marketing — sunt pentru CONFIRMARE si REDUCEREA NERIDICARILOR. Fiecare SMS de confirmare trimis = 5-15% mai putine neridicate. Fiecare email de tracking = client mai pregatit sa plateasca la curier.\n\nIn plus, email/SMS marketing post-vanzare transforma clientii one-time in clienti recurenti. Un client care a cumparat odata si a fost multumit e de 5-7x mai ieftin de reconvertit decat un client nou."
      },
      {
        type: "keypoints",
        title: "Cele 2 categorii de email/SMS pe COD",
        points: [
          { label: "1. Tranzactionale (OBLIGATORII)", text: "Confirmare comanda, notificare expediere, tracking colet, confirmare livrare. Acestea se trimit AUTOMAT la fiecare comanda. Scopul principal: reduce neridicarile si informeaza clientul. Nu necesita consimtamant marketing (sunt legate de tranzactie)." },
          { label: "2. Marketing (OPTIONALE dar profitabile)", text: "Newsletter cu produse noi, oferte speciale, email de reactivare clienti vechi, campanii de sarbatori. Necesita consimtamant explicit (checkbox la checkout). Scopul: vanzari suplimentare fara cost de ads." }
        ]
      }
    ]
  },
  {
    id: "10.2",
    title: "SMS-uri Tranzactionale — Template-uri Gata de Folosit",
    sections: [
      {
        type: "text",
        title: "SMS-ul e mai eficient ca email-ul pe COD Romania",
        content: "Rata de deschidere SMS: 95%+ (toata lumea citeste SMS-uri). Rata de deschidere email: 20-30%. Pe COD, unde clientul a lasat TELEFONUL (nu email-ul), SMS-ul e canalul principal de comunicare. Fiecare SMS costa 0.03-0.05 EUR — investitie minima cu impact maxim."
      },
      {
        type: "keypoints",
        title: "4 SMS-uri obligatorii (trimise automat)",
        points: [
          { label: "SMS 1: Confirmare comanda (imediat dupa plasare)", text: "Template: Multumim pentru comanda [NUME]! Comanda ta #[NR] pentru [PRODUS] a fost inregistrata. Livrare estimata: 1-3 zile. Echipa [BRAND]. | Timing: in 5 minute de la plasare. | Impact: reduce neridicarile cu 5-10%." },
          { label: "SMS 2: Comanda expediata (la predare catre curier)", text: "Template: [NUME], coletul tau a fost expediat! Urmareste livrarea aici: [LINK TRACKING]. Livrare estimata: [DATA]. Echipa [BRAND]. | Timing: cand AWB-ul e generat. | Impact: clientul stie ca vine si se pregateste." },
          { label: "SMS 3: Curier in drum (ziua livrarii)", text: "Template: [NUME], coletul tau va fi livrat AZI! Te rugam sa ai suma de [PRET] RON pregatita (cash sau card). Curier: [FIRMA]. Echipa [BRAND]. | Timing: dimineata zilei de livrare (daca informatia e disponibila). | Impact: clientul pregateste banii = ridicare garantata." },
          { label: "SMS 4: Post-livrare (2-3 zile dupa)", text: "Template: [NUME], sper ca esti multumit de [PRODUS]! Daca ai intrebari, raspundem pe [EMAIL/TELEFON]. Lasa-ne o recenzie aici: [LINK]. Multumim! | Timing: 2-3 zile dupa confirmarea livrarii. | Impact: colectezi recenzii reale + fidelize zi client." }
        ]
      },
      {
        type: "tip",
        title: "Tool-uri pentru SMS automat pe Shopify",
        content: "SMSBump (Yotpo) — cel mai popular, integrare nativa Shopify, free tier disponibil. Postscript — alternativa americana buna. SMSO.ro sau Textmagic — provideri locali romani cu preturi mai mici per SMS. Recomandat: incepe cu SMSBump free tier, upgrade cand ai volum."
      }
    ]
  },
  {
    id: "10.3",
    title: "Email Flows Automatizate — Setup Complet",
    sections: [
      {
        type: "text",
        title: "Seteaza o data, functioneaza pentru totdeauna",
        content: "Email flows (automatizari) sunt secvente de emailuri care se trimit AUTOMAT cand un client face o actiune specifica. Le configurezi o data si lucreaza non-stop fara interventie. Pe COD, cele mai importante flows sunt cele tranzactionale si cele de recuperare."
      },
      {
        type: "keypoints",
        title: "5 Email Flows esentiale",
        points: [
          { label: "1. Confirmare comanda (Shopify default + customizare)", text: "Shopify trimite automat email de confirmare. Personalizeaza-l: adauga logo, text in romana, rezumat comanda vizual, informatii despre livrare, si contact support. Settings > Notifications > Order confirmation." },
          { label: "2. Comanda expediata (cu tracking)", text: "Shopify trimite automat cand marchezi comanda ca fulfilled. Include link de tracking. Personalizeaza textul in romana. Settings > Notifications > Shipping confirmation." },
          { label: "3. Abandoned Checkout Recovery (PROFITABIL)", text: "Clientul a inceput checkout-ul dar nu a finalizat. Dupa 1h, 6h, si 24h primeste email: Ai uitat ceva? Comanda ta te asteapta! Cu imaginea produsului si buton de finalizare. Shopify are flow built-in: Settings > Checkout > Abandoned checkout emails. Sau foloseste Klaviyo pentru flow mai avansat." },
          { label: "4. Post-purchase follow-up (3-5 zile dupa livrare)", text: "Email care cere feedback/recenzie: Cum e [PRODUSUL]? Spune-ne parerea ta! Cu link catre pagina de recenzii. Daca clientul a fost multumit, cere si testimonial pe Facebook/Google." },
          { label: "5. Winback / Reactivare (30-60 zile dupa ultima comanda)", text: "Client care a cumparat dar nu a mai revenit: Ne-ai lipsit! Avem ceva special pentru tine — 15% reducere la urmatoarea comanda. Codul tau: BINEAIREVENIT. Functioneaza surprinzator de bine pe clienti COD multumiti." }
        ]
      },
      {
        type: "tip",
        title: "Tool recomandat: Klaviyo (free tier pana la 250 contacte)",
        content: "Klaviyo e standardul industriei pentru email marketing e-commerce. Integrare nativa cu Shopify, flows pre-construite, segmentare avansata. Free tier: 250 contacte, 500 emailuri/luna. Suficient pentru primele luni. Cand cresti: planurile platite incep de la 20 USD/luna."
      }
    ]
  },
  {
    id: "10.4",
    title: "Confirmarea Telefonica — Cand si Cum",
    sections: [
      {
        type: "text",
        title: "Apelul telefonic — arma nucleara contra neridicarilor",
        content: "Confirmarea telefonica e cea mai eficienta metoda de reducere a neridicarilor: -15-25%. Dar costa timp (2-3 minute per apel) sau bani (daca angajezi VA). De aceea, o folosesti SELECTIV, nu pe toate comenzile."
      },
      {
        type: "keypoints",
        title: "Cand si cum confirmi telefonic",
        points: [
          { label: "Cand suni", text: "Comenzi peste 150 RON (miza financiara mai mare la neridicata). Comenzi suspecte (adresa incompleta, nume dubios). Primele 20-30 de comenzi (inveti procesul). Cand ai rata de neridicate peste 25%." },
          { label: "Cand NU suni (SMS e suficient)", text: "Comenzi sub 100 RON (nu merita timpul). Cand ai peste 30 comenzi/zi (fizic imposibil sa suni pe toata lumea). Cand rata de neridicate e sub 18% (SMS-ul functioneaza bine)." },
          { label: "Script de confirmare (30 secunde)", text: "Buna ziua, sunt [Nume] de la [Brand]. Va sun sa confirmam comanda dvs. pentru [Produs]. Adresa de livrare e [adresa]? Perfect. Coletul ajunge in 1-3 zile, suma de plata e [pret] RON la curier. Aveti vreo intrebare? Multumim si o zi buna!" },
          { label: "Ce faci daca nu raspunde", text: "Nu suna de 5 ori. Trimite SMS: Am incercat sa va contactam pentru confirmarea comenzii #X. Va rugam sa ne confirmati la acest numar sau prin SMS. Daca nu confirma in 24h si comanda e suspicioasa: anuleaz-o (economisesti cost de curier + fulfillment)." }
        ]
      },
      {
        type: "tip",
        title: "Delegarea confirmarilor: VA (Virtual Assistant)",
        content: "Cand ai 15+ comenzi/zi, angajeaza un VA part-time pentru confirmarile telefonice. Cost: 5-8 RON/ora sau 2-3 RON per apel. Il gasesti pe: OLX (cautand asistent virtual), Facebook groups (VA Romania), sau platforme freelancing (Upwork, Freelancer.com). II dai scriptul, lista de comenzi zilnic dimineata, si el suna. Tu te ocupi de ads si strategie."
      }
    ]
  },
  {
    id: "10.5",
    title: "Newsletter si Campanii de Marketing",
    sections: [
      {
        type: "text",
        title: "Email marketing = vanzari fara cost de ads",
        content: "Fiecare email catre un client existent e practic GRATUIT (costul Klaviyo e fix, nu per email). Comparativ, fiecare vanzare noua din ads costa 20-50 RON (CPA). Un client care cumpara din email = profit pur.\n\nDupa primele 2-3 luni, cand ai 500-1.000+ emailuri colectate, newsletter-ul devine un canal de venituri semnificativ: 10-20% din revenue total poate veni din email marketing."
      },
      {
        type: "keypoints",
        title: "Tipuri de campanii email",
        points: [
          { label: "Produs nou", text: "Cand adaugi un produs nou in magazin: email catre toti clientii care au cumparat ceva similar. Subiect: Ceva NOU pentru tine — [Produs] tocmai a ajuns! Timing: o data pe saptamana maxim (nu spama)." },
          { label: "Oferta/Reducere", text: "Flash sale, reduceri de weekend, lichidare stoc. Subiect: DOAR AZI: -30% la [Categorie]. Include urgenta reala (oferta se termina la miezul noptii). 1-2 campanii de oferta pe luna maxim." },
          { label: "Sarbatori/Sezoniere", text: "Craciun, Paste, 1 Iunie, Back to School, Black Friday, Valentine's Day. Planifica campania cu 2-3 saptamani inainte. Include: ghid de cadouri, oferte tematice, urgenta de livrare (comanda pana pe [data] ca sa primesti inainte de [sarbatoare])." },
          { label: "Continut educativ / Tips", text: "Nu vinde mereu — ofera si valoare. Email cu sfaturi relevante pentru nisa ta: 5 moduri de a organiza bucataria sau Cum alegi gadget-ul potrivit pentru [activitate]. Construieste relatia cu clientul." }
        ]
      },
      {
        type: "warning",
        title: "Reguli de email marketing care te tin departe de spam",
        content: "INTOTDEAUNA include link de dezabonare (Klaviyo face automat). NU trimite mai mult de 2-3 emailuri pe saptamana (altfel ajungi in spam). NU cumpara liste de email (ilegal + ineficient). DOAR trimite la oameni care au consimtit (checkbox la checkout). CURATA lista: sterge emailurile care nu au deschis nimic in 90 de zile."
      }
    ]
  },
  {
    id: "10.6",
    title: "Colectarea Recenziilor — Social Proof Real",
    sections: [
      {
        type: "text",
        title: "Recenziile sunt cea mai puternica forma de marketing",
        content: "Un client care spune produsul e bun e de 100x mai convingator decat o reclama care spune acelasi lucru. Recenziile reale pe pagina de produs cresc conversiile cu 15-30%. Dar recenziile nu vin singure — trebuie sa le ceri activ."
      },
      {
        type: "steps",
        title: "Procesul de colectare recenzii",
        steps: [
          "Dupa livrare confirmata (2-3 zile): trimite email automat cu cerere de recenzie (flow Klaviyo sau Shopify app)",
          "Include link direct catre formularul de recenzie (nu trimite clientul pe site sa caute unde sa lase review)",
          "Ofera incentive mic: 10% reducere la urmatoarea comanda daca lasa recenzie cu poza",
          "Raspunde la FIECARE recenzie (si pozitiva si negativa) — arata ca iti pasa",
          "Recenziile negative: raspunde public, profesional, ofera solutie. Transforma o experienta proasta in demonstratie de customer service bun",
          "Cele mai bune recenzii (cu poze): pune-le pe pagina de produs si in reclame (cu permisiunea clientului)"
        ]
      },
      {
        type: "tip",
        title: "Aplicatii de recenzii pentru Shopify",
        content: "Judge.me (cea mai populara, free tier generos): colecteaza recenzii cu poze si video, widget pe pagina de produs, email automat de cerere review. Loox (platita dar premium): focusata pe recenzii cu foto/video, layout vizual atractiv. Vitals (all-in-one): include recenzii + urgenta + upsell + alte features."
      }
    ]
  },
  {
    id: "10.7",
    title: "Checklist Email & SMS",
    sections: [
      {
        type: "checklist",
        title: "Setup-ul minim inainte de prima comanda",
        items: [
          { text: "SMS confirmare comanda automatizat (SMSBump sau similar)", critical: true },
          { text: "Email confirmare comanda personalizat in romana (Shopify Notifications)", critical: true },
          { text: "Email/SMS expediere cu tracking link", critical: true },
          { text: "Abandoned checkout email activat (Shopify built-in sau Klaviyo)", critical: false },
          { text: "Email post-livrare cu cerere recenzie (2-3 zile dupa)", critical: false },
          { text: "Cont Klaviyo creat si conectat cu Shopify (free tier)", critical: false },
          { text: "App recenzii instalata (Judge.me recomandat)", critical: false },
          { text: "Link dezabonare functional in toate emailurile", critical: true },
          { text: "Template-uri SMS salvate si testate", critical: false },
          { text: "Script confirmare telefonica pregatit (daca aplici)", critical: false }
        ]
      }
    ]
  }
];

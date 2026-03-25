// ============================================================
// MODULE 9 — Legal & Infiintare Firma (9 lectii)
// Adauga in index.html: <script src="js/data/module9.js"></script>
// ============================================================

COURSE_DATA.modules[8].lessons = [
  {
    id: "9.1",
    title: "SRL vs PFA vs Intreprindere Individuala - Ce Alegi",
    sections: [
      {
        type: "text",
        title: "Ai nevoie de firma ca sa vinzi legal",
        content: "Nu poti vinde legal in Romania fara o forma juridica. Din momentul in care primesti prima plata de la curier, desfasori activitate comerciala si ai obligatii fiscale. Vestea buna: infiintarea e simpla si ieftina. Vestea proasta: trebuie facuta INAINTE de prima vanzare, nu dupa.\n\nPentru e-commerce COD, ai 3 optiuni principale. Fiecare are avantaje si dezavantaje. Pentru majoritatea incepatorilor, SRL microintreprindere e cea mai buna optiune."
      },
      {
        type: "comparison",
        title: "SRL vs PFA vs II",
        headers: ["Criteriu", "SRL (Microintreprindere)", "PFA", "II (Intreprindere Individuala)"],
        rows: [
          ["Raspundere", "Limitata la capitalul social (raspunzi doar cu firma, nu cu bunurile personale)", "Nelimitata (raspunzi cu tot ce ai)", "Nelimitata"],
          ["Impozit pe venit", "1% din cifra de afaceri (micro) sau 16% din profit", "10% din venitul net", "10% din venitul net"],
          ["TVA", "Obligatoriu peste 300.000 RON/an CA", "Obligatoriu peste 300.000 RON/an CA", "Obligatoriu peste 300.000 RON/an CA"],
          ["CAS + CASS (contributii sociale)", "Nu platesti daca nu ai salariu (doar dividende)", "Platesti CAS + CASS obligatoriu", "Platesti CAS + CASS obligatoriu"],
          ["Cost infiintare", "100-300 EUR (prin firma specializata)", "50-150 EUR", "50-150 EUR"],
          ["Contabilitate", "Obligatorie (contabil necesar)", "Simplificata (dar tot recomandat contabil)", "Simplificata"],
          ["Credibilitate", "Maxima (SRL = firma serioasa)", "Medie", "Scazuta"],
          ["Recomandare e-commerce", "DA — prima optiune", "OK pentru inceput daca buget mic", "NU recomandat"],
          ["Scoatere bani", "Prin dividende (8% impozit)", "Direct (e venitul tau)", "Direct"]
        ]
      },
      {
        type: "tip",
        title: "Recomandare clara: SRL Microintreprindere",
        content: "Pentru e-commerce COD, SRL-ul e cea mai buna optiune: raspundere limitata (daca ceva merge prost, nu-ti pierzi casa), impozit mic (1% din cifra de afaceri), credibilitate maxima (furnizorii si curieratul prefera SRL-uri), si scalabilitate (poti creste fara sa schimbi forma juridica). Costul lunar: 150-400 EUR contabilitate. Merita fiecare ban."
      },
      {
        type: "warning",
        title: "Nota pentru situatia ta de student militar",
        content: "Ca viitor ofiter activ, verifica regulamentul intern al armatei privind detinerea de SRL/PFA. In multe cazuri, militarii activi au restrictii sau necesita aprobare pentru activitate comerciala. Optiuni: deschizi SRL-ul acum (cat esti student, inainte de a deveni ofiter activ), asociezi pe cineva de incredere ca administrator (tu ramai asociat), sau consulti un jurist militar pentru a clarifica exact ce e permis."
      }
    ]
  },
  {
    id: "9.2",
    title: "Pasii pentru Infiintarea SRL-ului (Pas cu Pas)",
    sections: [
      {
        type: "steps",
        title: "Procesul complet de infiintare SRL",
        steps: [
          "ALEGE NUMELE FIRMEI: Verifica disponibilitatea pe recom.onrc.ro (Registrul Comertului). Rezerva numele (costa ~20 RON, valid 3 luni). Alege un nume scurt, usor de retinut, fara caractere speciale.",
          "STABILESTE SEDIUL SOCIAL: Ai nevoie de o adresa. Poate fi: apartamentul tau (cu acordul proprietarului/vecinilor), un sediu social virtual (50-100 EUR/an — firme care iti inchiriaza adresa), sau biroul contabilului (unii ofera si sediu social).",
          "PREGATESTE ACTELE: CI asociat/administrator, dovada sediu social (contract inchiriere sau declaratie proprietar), specimen de semnatura (la notar — 20-50 RON), capital social (minim 1 RON, recomandat 200 RON).",
          "ALEGE CODURILE CAEN: Codul principal: 4791 — Comert cu amanuntul prin internet. Coduri secundare recomandate: 4619, 4690, 7311, 7312 (marketing, comert en-gros). Contabilul te poate ajuta cu selectia exacta.",
          "DEPUNE LA REGISTRUL COMERTULUI: Online (prin portalul ONRC) sau fizic la sediul ONRC din judetul tau. Dosarul include: cererea de inregistrare, actul constitutiv, declaratii pe proprie raspundere, dovada sediu, specimen semnatura.",
          "ASTEAPTA INREGISTRAREA: Dureaza 3-5 zile lucratoare. Primesti: CUI (Cod Unic de Identificare), numar de ordine la Registrul Comertului, certificat de inregistrare.",
          "DESCHIDE CONT BANCAR: Cu certificatul de inregistrare, mergi la banca si deschizi cont curent de firma. Depune capitalul social.",
          "INREGISTREAZA LA ANAF: Declaratia de inregistrare fiscala (formularul 010). Contabilul face asta de obicei. Alegi regimul de microintreprindere (1% impozit)."
        ]
      },
      {
        type: "tip",
        title: "Shortcut: firma de infiintare SRL",
        content: "Daca nu vrei batai de cap, exista firme care fac TOTUL pentru tine: pregatesc actele, depun la ONRC, obtin CUI-ul, si iti livreaza dosarul complet. Cost: 100-300 EUR. Timp: 5-10 zile. Cauta pe Google: infiintare SRL rapid sau infiintare firma online Romania. Recomandare: cere si sediu social virtual in pachet (economisesti timp)."
      }
    ]
  },
  {
    id: "9.3",
    title: "Coduri CAEN pentru E-Commerce",
    sections: [
      {
        type: "text",
        title: "Ce sunt codurile CAEN si de ce conteaza",
        content: "CAEN = Clasificarea Activitatilor din Economia Nationala. Fiecare SRL trebuie sa declare ce activitati desfasoara. Daca desfasori o activitate care nu e in codurile tale CAEN, risti amenda. Vestea buna: poti avea oricate coduri CAEN secundare, gratuit."
      },
      {
        type: "keypoints",
        title: "Coduri CAEN obligatorii si recomandate",
        points: [
          { label: "4791 — Comert cu amanuntul prin internet (PRINCIPAL)", text: "Acesta e codul tau principal. Acopera vanzarea de produse prin magazin online. OBLIGATORIU." },
          { label: "4619 — Intermedieri in comertul cu produse diverse", text: "Acopera intermedierea intre furnizor si client. Util daca faci dropshipping sau lucrezi cu furnizori care livreaza direct." },
          { label: "4690 — Comert cu ridicata nespecializat", text: "Daca cumperi en-gros de la furnizori. Acopera achizitia de stoc pentru revanzare." },
          { label: "7311 — Activitati ale agentiilor de publicitate", text: "Daca faci servicii de marketing pe langa e-commerce (optional, dar util daca faci si consulting mai tarziu)." },
          { label: "4799 — Alt comert cu amanuntul in afara magazinelor", text: "Acopera vanzari prin social media, WhatsApp, etc. Backup util." },
          { label: "5320 — Alte activitati postale si de curier", text: "Daca gestionezi si logistica proprie (optional, de obicei nu e necesar)." }
        ]
      },
      {
        type: "tip",
        title: "Adauga coduri CAEN in plus la infiintare",
        content: "E gratuit sa adaugi coduri CAEN la infiintare, dar costa timp si bani sa le adaugi ulterior (trebuie modificare act constitutiv). Adauga 5-8 coduri relevante de la inceput, chiar daca nu le folosesti imediat."
      }
    ]
  },
  {
    id: "9.4",
    title: "EORI - Ce e, Cum il Obtii, Cand ai Nevoie",
    sections: [
      {
        type: "text",
        title: "EORI = pasaportul tau pentru import",
        content: "EORI (Economic Operators Registration and Identification) e un cod unic necesar pentru orice operatiune vamala in UE. Daca importi din China sau din afara UE, ai nevoie de EORI. Daca lucrezi DOAR cu furnizori din Romania/UE, NU ai nevoie de EORI (inca)."
      },
      {
        type: "steps",
        title: "Cum obtii EORI (gratuit, 1-5 zile)",
        steps: [
          "Mergi pe site-ul Directiei Generale a Vamilor: customs.ro",
          "Descarca formularul de solicitare EORI (sau completeaza online)",
          "Completeaza cu datele SRL-ului: CUI, denumire, adresa, reprezentant legal",
          "Trimite formularul la biroul vamal de care apartii (email sau fizic)",
          "Astepti 1-5 zile lucratoare — primesti codul EORI pe email",
          "Codul EORI are formatul: RO + CUI-ul tau (ex: RO12345678)"
        ]
      },
      {
        type: "tip",
        title: "Cand sa aplici pentru EORI",
        content: "NU aplica de la inceput daca nu importi din afara UE. Aplica cand esti gata sa faci prima comanda din China sau alt tara non-UE. Procesul e simplu si gratuit — nu e nevoie sa te grabesti. Daca lucrezi doar cu furnizori locali sau UE, poti functiona luni de zile fara EORI."
      }
    ]
  },
  {
    id: "9.5",
    title: "Certificari Necesare pe Categorii de Produse",
    sections: [
      {
        type: "text",
        title: "Nu toate produsele se pot vinde liber",
        content: "Anumite categorii de produse necesita certificari, autorizatii, sau notificari inainte de a le pune pe piata in Romania/UE. Vinderea fara certificarile necesare = risc de amenda severa, confiscare produs, si chiar dosar penal.\n\nRegula simpla pentru incepatori: EVITA categoriile care necesita certificari complexe. Sunt suficiente produse care se pot vinde liber."
      },
      {
        type: "comparison",
        title: "Categorii si cerintele lor legale",
        headers: ["Categorie", "Cerinte", "Complexitate", "Recomandare incepator"],
        rows: [
          ["Gadget-uri casa/bucatarie (plastic, metal)", "CE marking (auto-declaratie pentru produse simple)", "Scazuta", "DA — sigur de vandut"],
          ["Accesorii auto non-electrice", "Fara cerinte speciale", "Zero", "DA — sigur"],
          ["Produse animale (jucarii, accesorii)", "Fara cerinte speciale (daca nu contin substante chimice)", "Scazuta", "DA — ok"],
          ["Produse fitness (benzi, accesorii)", "CE marking simplu", "Scazuta", "DA — ok"],
          ["Electrocasnice/electronice cu priza", "CE marking + LVD + EMC (testare laborator)", "MARE", "NU — evita ca incepator"],
          ["Jucarii copii", "CE marking + EN 71 (testare siguranta)", "MARE", "NU — evita"],
          ["Cosmetice", "Notificare CPNP + Person responsabila UE + Testare", "FOARTE MARE", "NU — evita"],
          ["Suplimente alimentare", "Autorizatie ANSVSA + eticheta conforma", "FOARTE MARE", "NU — evita"],
          ["Textile/imbracaminte", "Eticheta compozitie + REACH compliance", "Medie", "Cu atentie"],
          ["Produse alimentare", "HACCP + autorizatie DSVSA", "FOARTE MARE", "NU — evita absolut"]
        ]
      },
      {
        type: "warning",
        title: "CE marking — ce inseamna real",
        content: "CE marking NU inseamna ca produsul e testat de o autoritate. Inseamna ca PRODUCATORUL/IMPORTATORUL declara ca produsul respecta standardele UE. Pentru produse simple (plastic, metal, fara electricitate), poti face auto-declaratie de conformitate. Pentru produse complexe (electrice, jucarii, cosmetice), ai nevoie de testare in laborator acreditat. Daca importi din China: cere furnizorului certificat CE + declaratie de conformitate. Daca nu ti-le da, nu importa acel produs."
      }
    ]
  },
  {
    id: "9.6",
    title: "GDPR - Ce Trebuie sa ai pe Site",
    sections: [
      {
        type: "text",
        title: "GDPR nu e optional — e lege UE",
        content: "GDPR (General Data Protection Regulation) se aplica oricarui site care colecteaza date personale de la cetateni UE. Magazinul tau colecteaza: nume, telefon, adresa, email, date de navigare (cookies). Trebuie sa informezi clientul CE colectezi, DE CE, si cum poate sa-si exercite drepturile."
      },
      {
        type: "keypoints",
        title: "Ce trebuie sa ai pe site pentru GDPR",
        points: [
          { label: "1. Politica de Confidentialitate", text: "Pagina dedicata care explica: ce date colectezi, scopul colectarii, temeiul legal, cat timp le pastrezi, cu cine le impartasesti (curier, Facebook, Google), drepturile utilizatorului (acces, stergere, rectificare), si datele de contact pentru cereri GDPR." },
          { label: "2. Banner de Cookies", text: "La prima vizita, apare un banner care informeaza despre cookies si ofera optiuni: Accept toate, Doar esentiale, Personalizare. NU poti seta cookies non-esentiale (Facebook Pixel, Google Analytics) fara consimtamant. Aplicatii Shopify: Pandectes GDPR (gratuit/ieftin), Consentmo." },
          { label: "3. Checkbox consimtamant la checkout", text: "La formularul de comanda, adauga checkbox (nebifat default): Am citit si sunt de acord cu Termenii si Conditiile si Politica de Confidentialitate. Cu link catre ambele pagini." },
          { label: "4. Posibilitatea de dezabonare", text: "Fiecare email marketing trebuie sa aiba link de dezabonare. Shopify si Klaviyo fac asta automat. Fara link dezabonare = incalcare GDPR + spam." },
          { label: "5. Procedura de stergere date", text: "Daca un client cere stergerea datelor sale, trebuie sa poti face asta. In Shopify: Orders > cauta clientul > sterge datele personale. Termen legal de raspuns: 30 de zile." }
        ]
      },
      {
        type: "tip",
        title: "Nu intra in panica cu GDPR",
        content: "GDPR pare complicat, dar pentru un magazin mic e simplu: pune Politica de Confidentialitate pe site (generata cu un tool online), instaleaza un banner de cookies (app Shopify, 5 minute), adauga checkbox la checkout, si raspunde la cererile clientilor daca vin (rar la inceput). Amenzile GDPR sunt pentru companii mari care incalca flagrant — nu pentru magazine mici care fac eforturi rezonabile de conformare."
      }
    ]
  },
  {
    id: "9.7",
    title: "Politica de Retur conform Legii Romane",
    sections: [
      {
        type: "text",
        title: "Dreptul de retragere — 14 zile, fara motiv",
        content: "Conform OUG 34/2014 (transpunerea Directivei UE privind drepturile consumatorilor), clientul are dreptul sa returneze produsul in 14 zile calendaristice de la primire, FARA sa dea motiv. Acest drept e obligatoriu — nu poti sa-l elimini prin termeni si conditii.\n\nAcest drept se aplica doar consumatorilor (persoane fizice care cumpara pentru uz personal), nu firmelor."
      },
      {
        type: "keypoints",
        title: "Ce trebuie sa stii despre dreptul de retragere",
        points: [
          { label: "Termenul de 14 zile", text: "Se calculeaza de la data la care clientul primeste fizic produsul. Daca nu informezi clientul despre dreptul de retragere, termenul se prelungeste la 12 LUNI." },
          { label: "Clientul NU trebuie sa dea motiv", text: "Nu poti cere explicatii. Clientul spune vreau sa returnez si atat. Trebuie sa accepti." },
          { label: "Cine plateste transportul de retur", text: "Daca ai informat clientul in prealabil (in Termeni si Conditii) ca el suporta costul returului, clientul plateste. Daca NU l-ai informat, TU platesti. De aceea e crucial sa ai pagina de Termeni si Conditii corecta." },
          { label: "Rambursarea", text: "Trebuie sa rambursezi in maxim 14 zile de la primirea produsului returnat. Rambursezi pretul produsului + costul livrarii initiale (daca a platit transport). Rambursare prin transfer bancar." },
          { label: "Starea produsului", text: "Clientul poate deschide si testa produsul (asa cum ar face in magazin). Daca produsul e deteriorat din cauza utilizarii excesive (nu testare normala), poti retine o parte din suma." },
          { label: "Exceptii", text: "NU se aplica dreptul de retragere la: produse personalizate (gravate, custom), produse sigilate care nu pot fi returnate din motive de igiena (dupa desigilare), continut digital livrat online." }
        ]
      },
      {
        type: "tip",
        title: "Cum formulezi politica de retur pe site",
        content: "Pagina POLITICA DE RETUR trebuie sa contina: dreptul de retragere in 14 zile fara motiv, procedura de retur (cum ne contacteaza, unde trimite produsul), cine suporta costul de retur (recomandat: clientul, daca NU e defect), termenul de rambursare (14 zile de la primirea returului), si datele de contact (email, telefon). Formularea trebuie sa fie clara, in limba romana, si usor de gasit pe site."
      }
    ]
  },
  {
    id: "9.8",
    title: "ANPC - Cum Eviti Amenzile",
    sections: [
      {
        type: "text",
        title: "ANPC verifica magazinele online",
        content: "ANPC (Autoritatea Nationala pentru Protectia Consumatorilor) face controale si la magazine online. Pot verifica site-ul tau oricand, mai ales daca primesc reclamatii de la clienti. Amenzile pot fi de la 2.000 RON pana la 100.000 RON."
      },
      {
        type: "keypoints",
        title: "Ce verifica ANPC la un magazin online",
        points: [
          { label: "Datele firmei vizibile pe site", text: "Numele complet al SRL-ului, CUI, numarul de inregistrare la Registrul Comertului, adresa sediului social, email, telefon. TOATE trebuie sa fie pe site, vizibile (de obicei in footer sau pagina Contact/Despre noi)." },
          { label: "Preturile complete", text: "Pretul afisat trebuie sa includa TVA. Daca pretul nu include TVA, trebuie mentionat explicit. Costul de transport trebuie comunicat INAINTE de finalizarea comenzii." },
          { label: "Informatii despre dreptul de retragere", text: "14 zile, fara motiv, procedura clara. Trebuie sa fie pe site INAINTE de comanda." },
          { label: "Descrierea corecta a produsului", text: "Produsul livrat trebuie sa corespunda descrierii si imaginilor de pe site. Descrieri inselatoare = amenda." },
          { label: "Termeni si Conditii accesibili", text: "Pagina de T&C trebuie sa existe, sa fie in romana, si sa fie accesibila din orice pagina (link in footer)." },
          { label: "Confirmarea comenzii", text: "Clientul trebuie sa primeasca confirmare a comenzii (email sau SMS) cu: produsele comandate, pretul total, adresa de livrare, dreptul de retragere." }
        ]
      },
      {
        type: "tip",
        title: "Cel mai simplu mod de a evita problemele cu ANPC",
        content: "Pune datele firmei in footer-ul site-ului (pe fiecare pagina). Ai pagini legale complete (Termeni, Retur, GDPR). Raspunde la reclamatiile clientilor in maxim 48h (daca clientul nu primeste raspuns, merge la ANPC). Livreaza ce promiti (produs conform descrierii, in termenul comunicat). Si cel mai important: comporta-te corect cu clientii. 90% din reclamatiile ANPC vin de la clienti ignorati sau tratati prost."
      }
    ]
  },
  {
    id: "9.9",
    title: "Checklist Legal Complet",
    sections: [
      {
        type: "checklist",
        title: "Verifica tot inainte de prima vanzare",
        items: [
          { text: "Am SRL inregistrat (sau in curs de inregistrare)", critical: true },
          { text: "Am coduri CAEN corecte (4791 principal)", critical: true },
          { text: "Am cont bancar de firma deschis", critical: true },
          { text: "Am contabil angajat (specializat e-commerce)", critical: true },
          { text: "Am pagina Termeni si Conditii pe site", critical: true },
          { text: "Am pagina Politica de Retur pe site (14 zile, cine plateste transport)", critical: true },
          { text: "Am pagina Politica de Confidentialitate (GDPR)", critical: true },
          { text: "Am banner de cookies functional", critical: true },
          { text: "Am datele firmei vizibile pe site (CUI, adresa, email, telefon)", critical: true },
          { text: "Am checkbox consimtamant la checkout", critical: false },
          { text: "Am verificat ca produsele mele NU necesita certificari speciale", critical: true },
          { text: "Am EORI (doar daca import din afara UE)", critical: false },
          { text: "Am verificat situatia legala ca student militar (daca e cazul)", critical: true },
          { text: "Am email de contact functional pentru reclamatii", critical: true }
        ]
      }
    ]
  }
];

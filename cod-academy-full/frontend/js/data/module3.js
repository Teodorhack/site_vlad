// ============================================================
// MODULE 3 — Import & Furnizori (8 lectii)
// ============================================================

COURSE_DATA.modules[2].lessons = [
  {
    id: "3.1",
    title: "Unde gasesti produse: Furnizori locali vs Import China vs UE",
    sections: [
      {
        type: "text",
        title: "Cele 3 surse principale de produse",
        content: "Inainte de a comanda orice, trebuie sa intelegi cele 3 optiuni de aprovizionare si cand folosesti fiecare. Nu exista o sursa universala mai buna - depinde de produs, buget, si faza in care te afli.\n\nCa incepator, recomandarea clara e sa incepi cu furnizori locali din Romania sau UE. De ce? Stoc disponibil imediat, livrare in 1-3 zile catre fulfillment, zero risc de vama, si poti testa rapid fara sa investesti in sute de bucati. Import din China vine DUPA ce ai validat produsul si vrei sa scazi costul per unitate."
      },
      {
        type: "comparison",
        title: "Comparatie: Local RO vs UE vs China",
        headers: ["Criteriu", "Furnizori Romania", "Furnizori UE", "Import China"],
        rows: [
          ["Timp livrare catre tine", "1-3 zile", "3-7 zile", "15-45 zile (air/sea)"],
          ["MOQ (cantitate minima)", "1-50 bucati", "10-100 bucati", "50-500+ bucati"],
          ["Pret per unitate", "Cel mai mare", "Mediu", "Cel mai mic"],
          ["Risc", "Foarte mic", "Mic", "Mediu-Mare"],
          ["Vama / Taxe", "Zero (piata interna)", "Zero (UE)", "TVA 19% + taxe vamale"],
          ["Calitate controlabila", "Da (vezi produsul)", "Partial", "Greu (sample obligatoriu)"],
          ["Ideal pentru", "Testare initiala", "Scalare medie", "Scalare mare, marja maxima"],
          ["Investitie initiala", "50-200 EUR", "200-500 EUR", "500-5.000+ EUR"],
          ["Flexibilitate", "Maxima (comanzi cat vrei)", "Buna", "Scazuta (bulk orders)"]
        ]
      },
      {
        type: "tip",
        title: "Strategia recomandata in 3 faze",
        content: "Faza 1 (Luna 1-2): Furnizori locali RO. Testezi 5-10 produse cu stoc mic (10-30 buc). Validezi cererea. Faza 2 (Luna 2-3): Furnizori UE. Produsele validate le comanzi din UE la pret mai bun, cantitati mai mari (50-200 buc). Faza 3 (Luna 3+): Import China. Produsele castigatoare cu vanzari constante le importi direct din China pentru marja maxima."
      }
    ]
  },
  {
    id: "3.2",
    title: "Furnizori din Romania - Cum ii gasesti si cum lucrezi cu ei",
    sections: [
      {
        type: "text",
        title: "De ce furnizori locali sunt ideali pentru inceput",
        content: "Furnizorii locali din Romania sunt cea mai subestimata resursa pentru e-commerce COD. Exista zeci de depozite en-gros si distribuitori care au stocuri de produse gata de livrat, la preturi competitive. Nu trebuie sa importi din China ca sa ai marja - trebuie sa gasesti furnizorul potrivit.\n\nAvantajul major: poti comanda si 5-10 bucati pentru test. Daca produsul nu merge, ai pierdut 50-100 EUR, nu 2.000 EUR pe un container din Shenzhen."
      },
      {
        type: "keypoints",
        title: "Cum gasesti furnizori locali",
        points: [
          { label: "1. Google Search targetat", text: "Cauta: [produs] engros Romania, [produs] wholesale RO, distribuitor [categorie] Romania, furnizor [produs] Bucuresti. Exemplu: organizator bucatarie engros Romania. Rezultatele de pe pagina 2-3 sunt adesea mai bune (depozite mici, preturi mai bune, raspund mai repede)." },
          { label: "2. Platforme B2B romanesti", text: "eMag Marketplace (sectiunea pentru selleri), Elefant Marketplace, OLX (sectiunea Afaceri/Engros), Facebook Groups (grupuri de wholesale Romania). Cauta grupuri Facebook cu: engros Romania, wholesale, furnizori, dropship Romania." },
          { label: "3. Depozite fizice en-gros", text: "In Bucuresti: zona Dragonul Rosu (produse diverse, calitate variabila), Zona Metalurgiei (depozite en-gros). In alte orase: cauta depozite angro in Cluj, Timisoara, Iasi. Vizita fizica e ideala - vezi produsul, negociezi pe loc, pleci cu sample." },
          { label: "4. Contacteaza direct importatorii", text: "Multi producatori chinezi au deja distribuitori in Romania. Cauta pe site-ul producatorului daca au un distributor in RO/EU. Contacteaza-l direct - preturile sunt mai bune decat la retailer." },
          { label: "5. WhatsApp / Telegram groups", text: "Exista comunitati de selleri care impart contacte de furnizori. Grupuri de dropshipping Romania, grupuri COD Romania. Atentie: verifica intotdeauna calitatea si preturile independent." }
        ]
      },
      {
        type: "steps",
        title: "Procesul de lucru cu un furnizor local",
        steps: [
          "Identifici furnizorul (Google, Facebook, recomandari)",
          "Contactezi: ceri lista de preturi, MOQ, termeni de plata",
          "Comanzi 5-10 bucati sample (platesti la pret de engros, nu retail)",
          "Testezi calitatea: compari cu ce ai vazut in reclame, verifici ambalajul",
          "Negociezi pretul pentru cantitati mai mari (50, 100, 500 buc)",
          "Stabilesti flow-ul: el livreaza direct la fulfillment center-ul tau",
          "Ceri factura (ai nevoie pentru contabilitate si eventual deducere TVA)"
        ]
      },
      {
        type: "warning",
        title: "Capcane cu furnizori locali",
        content: "Preturi umflate la cantitati mici (normal - negociaza la 50+ buc). Stoc instabil (se termina fara avertisment - cere sa te anunte). Calitate inconsistenta (verifica fiecare lot, nu doar sample-ul). Lipsa facturii (unii lucreaza la negru - evita, ai nevoie de documente legale)."
      }
    ]
  },
  {
    id: "3.3",
    title: "Import din China: Alibaba, 1688, si agenti",
    sections: [
      {
        type: "text",
        title: "Cand si de ce importi din China",
        content: "Importul din China are sens DOAR cand ai un produs validat cu vanzari constante si vrei sa-ti maximizezi marja. NU importa din China pentru testare - riscul e prea mare si timpul prea lung.\n\nTrei platforme principale: Alibaba (engleza, orientat export, preturi mai mari dar mai sigur), 1688 (chineza, piata interna, preturi cu 30-50% mai mici dar trebuie agent), si agenti de sourcing (intermediari care cumpara de pe 1688 pentru tine)."
      },
      {
        type: "comparison",
        title: "Alibaba vs 1688 vs Agent de Sourcing",
        headers: ["Criteriu", "Alibaba", "1688.com", "Agent Sourcing"],
        rows: [
          ["Limba", "Engleza", "Chineza (ai nevoie de traducere)", "Engleza (agentul traduce)"],
          ["Preturi", "Cele mai mari (markup 20-50%)", "Cele mai mici (pret fabrica)", "Mici + comision agent (5-10%)"],
          ["MOQ tipic", "50-500 bucati", "10-100 bucati", "Flexibil (negociaza pentru tine)"],
          ["Siguranta", "Trade Assurance (protectie)", "Zero protectie", "Depinde de agent"],
          ["Quality Control", "Tu sau platesti inspectie", "Greu fara agent", "Agentul verifica"],
          ["Ideal pentru", "Prima comanda din China", "Cand ai experienta", "Cand vrei pret 1688 fara batai de cap"],
          ["Comision", "0% (platesti pretul listat)", "0% dar risc mare", "5-10% din valoare comanda"]
        ]
      },
      {
        type: "keypoints",
        title: "Procesul pas cu pas pe Alibaba",
        points: [
          { label: "1. Cauta produsul", text: "Foloseste cuvinte cheie in engleza. Filtreaza: Trade Assurance ON, Verified Supplier, Min Order cat mai mic. Salveaza 5-10 furnizori potentiali." },
          { label: "2. Contacteaza 5+ furnizori", text: "Trimite mesaj identic la toti: I am interested in [product]. What is the price for 100/500/1000 units? What is the MOQ? Can you send samples? Do you offer DDP shipping to Romania? Ce raspund si cat de repede = semnal de calitate." },
          { label: "3. Cere sample (OBLIGATORIU)", text: "Nu comanda niciodata bulk fara sample. Platesti 20-50 USD + shipping pentru sample. Verifica: calitate material, dimensiuni, culoare, ambalaj, miros. Compara cu pozele din listing." },
          { label: "4. Negociaza pretul", text: "Pretul din listing e INTOTDEAUNA negociabil. Cere discount pentru cantitate. Compara preturile de la 3+ furnizori si foloseste-le ca leverage. Target: 10-30% sub pretul listat." },
          { label: "5. Stabileste termenii de livrare", text: "Cere DDP (Delivered Duty Paid) = furnizorul se ocupa de transport + vama. Tu platesti un pret all-inclusive. Alternativ: FOB (Free on Board) = tu te ocupi de transport si vama (mai ieftin dar mai complicat)." },
          { label: "6. Foloseste Trade Assurance", text: "INTOTDEAUNA plateste prin Trade Assurance pe Alibaba. E ca un escrow - banii sunt tinuti de Alibaba pana confirmi ca ai primit marfa. Daca platesti in afara platformei, zero protectie." }
        ]
      },
      {
        type: "warning",
        title: "Red flags la furnizori chinezi",
        content: "Preturi mult sub piata (calitate indoielnica sau scam). Nu accepta Trade Assurance (vor plata directa - red flag major). Refuza sa trimita sample (ascund calitatea reala). Comunica doar pe WeChat/WhatsApp in loc de platforma Alibaba (evita trail-ul). Fabrica noua cu 0 tranzactii (risc mare). Promit MOQ de 1 bucata pe Alibaba (e un middleman, nu o fabrica)."
      }
    ]
  },
  {
    id: "3.4",
    title: "DDP vs DDU vs FOB - Ce inseamna si ce alegi",
    sections: [
      {
        type: "text",
        title: "Termenii de livrare internationala (Incoterms) explicati simplu",
        content: "Cand importi din China, trebuie sa stii cine plateste ce si cine se ocupa de transport. Exista termeni internationali standard (Incoterms) care definesc exact asta. Cei mai relevanti pentru e-commerce sunt: DDP, DDU, si FOB."
      },
      {
        type: "keypoints",
        title: "Cei 3 termeni esentiali",
        points: [
          { label: "DDP (Delivered Duty Paid) - RECOMANDAT", text: "Furnizorul se ocupa de TOT: transport din China, vama, taxe, livrare pana la usa ta (sau la fulfillment center). Tu platesti un singur pret all-inclusive. Avantaj: zero batai de cap, stii exact costul. Dezavantaj: pret putin mai mare (furnizorul adauga markup pe logistica). IDEAL PENTRU INCEPATORI." },
          { label: "DDU (Delivered Duty Unpaid)", text: "Furnizorul livreaza pana la destinatie, dar TU platesti taxele vamale si TVA-ul. Mai ieftin decat DDP, dar trebuie sa stii cat vei plati la vama. Risc: costuri neprevazute la vama (taxe antidumping, reclasificare produs). OK daca ai experienta." },
          { label: "FOB (Free on Board)", text: "Furnizorul livreaza marfa in portul din China. De acolo, TU te ocupi de tot: transport maritim/aerian, vama in Romania, livrare la depozit. Cel mai ieftin per unitate, dar cel mai complex. Ai nevoie de freight forwarder (firma de logistica internationala). DOAR pentru comenzi mari (500+ buc)." }
        ]
      },
      {
        type: "comparison",
        title: "Comparatie costuri (exemplu: produs de 5 USD, 200 bucati)",
        headers: ["Component", "DDP", "DDU", "FOB"],
        rows: [
          ["Pret produs", "5 USD/buc", "5 USD/buc", "5 USD/buc"],
          ["Transport (inclus in pret?)", "Da", "Da", "Nu (tu platesti)"],
          ["Taxe vama + TVA", "Incluse", "Tu platesti (~25-30%)", "Tu platesti (~25-30%)"],
          ["Freight forwarder", "Nu e nevoie", "Nu e nevoie", "Da (100-300 EUR)"],
          ["Cost total estimat/buc", "~8-10 USD", "~7-9 USD", "~6-8 USD"],
          ["Complexitate", "Zero", "Medie", "Mare"],
          ["Timp livrare", "10-20 zile (air)", "10-20 zile (air)", "25-45 zile (sea)"]
        ]
      },
      {
        type: "tip",
        title: "Recomandare clara",
        content: "Pentru primele 1-3 comenzi din China: DDP intotdeauna. Platesti putin mai mult dar dormi linistit. Dupa ce ai experienta si comenzi regulate: DDU sau FOB cu freight forwarder de incredere. Economisesti 15-25% pe logistica."
      }
    ]
  },
  {
    id: "3.5",
    title: "Calculator Costuri Import - Cum calculezi pretul real",
    sections: [
      {
        type: "text",
        title: "Pretul din Alibaba NU e pretul tau final",
        content: "Cea mai mare greseala: vezi pret 3 USD pe Alibaba si calculezi marja pe baza asta. Pretul real per unitate livrata in Romania include: pretul produsului + transport international + taxe vamale (0-12% depinde de produs) + TVA import (19%) + handling vama + transport local pana la fulfillment.\n\nO regula de baza: pretul DDP livrat in Romania e de obicei 2x-3x pretul FOB din China. Un produs de 3 USD FOB ajunge la 6-9 USD livrat la tine."
      },
      {
        type: "comparison",
        title: "Calculator Costuri (exemplu real)",
        headers: ["Element cost", "Per bucata (USD)", "La 200 buc (USD)"],
        rows: [
          ["Pret produs (FOB)", "3.00", "600"],
          ["Transport aerian (air freight)", "2.50", "500"],
          ["Taxe vamale (estimat 6%)", "0.33", "66"],
          ["TVA import (19% pe valoare + transport + vama)", "1.11", "222"],
          ["Handling vama / broker", "0.25", "50"],
          ["Transport local la fulfillment", "0.15", "30"],
          ["TOTAL COST LANDED", "7.34", "1.468"],
          ["--- versus pretul DDP ---", "---", "---"],
          ["Pret DDP de la furnizor", "8.00", "1.600"],
          ["Diferenta", "+0.66/buc", "+132 total"]
        ]
      },
      {
        type: "steps",
        title: "Cum calculezi pentru produsul tau",
        steps: [
          "Cere pret FOB si pret DDP de la furnizor (ambele)",
          "Daca DDP: pretul DDP = costul tau final per unitate. Simplu.",
          "Daca FOB: adauga transport (cere cotatie de la freight forwarder)",
          "Adauga taxe vamale: cauta codul HS al produsului pe TARIC (baza de date UE)",
          "Adauga TVA 19% pe (pret + transport + taxe vamale)",
          "Adauga handling vama: ~50-100 EUR per import (impartit la nr bucati)",
          "Adauga transport local: ~0.10-0.30 EUR/buc de la vama la fulfillment",
          "Total = costul tau REAL per unitate. Acesta e COGS-ul din Profit Tracker."
        ]
      },
      {
        type: "warning",
        title: "Costuri ascunse de care sa fii atent",
        content: "Taxe antidumping: pe unele categorii (ex: otel din China) UE pune taxe extra de 20-80%. Verifica inainte. Reclasificare vamala: vama poate decide ca produsul tau e altceva decat ce declara furnizorul si aplica taxa mai mare. Storage fees: daca nu ridici marfa de la vama in 5-7 zile, platesti depozitare. Costuri sample: transportul sample-urilor din China costa 20-40 USD via DHL/FedEx - include-le in calcul."
      }
    ]
  },
  {
    id: "3.6",
    title: "Cum testezi si verifici furnizorii",
    sections: [
      {
        type: "text",
        title: "Nu toti furnizorii sunt egali",
        content: "Chiar si pe Alibaba cu Trade Assurance, exista furnizori buni si furnizori groaznici. Diferenta o face procesul tau de verificare. Un furnizor prost iti poate distruge business-ul: calitate slaba = retururi masive, livrare intarziata = clienti furiosi, ambalaj prost = produse sparte."
      },
      {
        type: "keypoints",
        title: "Checklist de verificare furnizor",
        points: [
          { label: "1. Istoric pe platforma", text: "Pe Alibaba: cati ani de activitate, cate tranzactii, rating, response rate. Minim: 2+ ani, 50+ tranzactii, rating 4.5+. Pe furnizori locali: cere referinte de la alti clienti." },
          { label: "2. Certificari si licente", text: "ISO 9001 (calitate), CE marking (pentru UE), RoHS (fara substante periculoase). Nu toate sunt obligatorii, dar prezenta lor e un semn bun." },
          { label: "3. Sample OBLIGATORIU", text: "Comanda sample INAINTE de bulk order. Verifica: materialul e cel din descriere? Dimensiunile corespund? Ambalajul e decent? Compara cu pozele din listing si cu produsul competitorului." },
          { label: "4. Comunicare", text: "Cat de repede raspund? (sub 24h = bun). In ce limba? (engleza decenta = bun). Raspund la intrebari tehnice detaliate? (da = probabil fabrica reala, nu middleman). Sunt dispusi sa faca modificari? (flexibilitate = semn bun)." },
          { label: "5. Test comanda mica", text: "Inainte de 500 buc, comanda 50-100. Verifica intreaga experienta: calitate, ambalaj, timp livrare, comunicare la probleme. Daca totul e ok, scaleaza." },
          { label: "6. Backup furnizor", text: "INTOTDEAUNA ai un furnizor de backup. Daca furnizorul principal are probleme (stoc epuizat, livrare intarziata, calitate scazuta), trebuie sa poti comuta rapid." }
        ]
      },
      {
        type: "tip",
        title: "Trucul negocierii",
        content: "Cere cotatie de la 5+ furnizori pentru acelasi produs. Apoi spune fiecaruia: am primit oferte intre X si Y (foloseste pretul real al celui mai ieftin). Pot sa lucrez cu voi daca imi dati pret de Z. Majoritatea vor cobori. Nu minti despre preturi, dar nu fi timid sa negociezi. Fiecare 0.50 USD economisit per bucata la 1000 de bucati = 500 USD in buzunar."
      }
    ]
  },
  {
    id: "3.7",
    title: "EORI, Vama, si Documente de Import",
    sections: [
      {
        type: "text",
        title: "Ce documente ai nevoie pentru import",
        content: "Daca importi din afara UE (China, UK, etc.), ai nevoie de cateva documente si coduri. Nu e complicat, dar trebuie facut corect. Daca lucrezi doar cu furnizori locali sau UE, acest capitol e informativ - nu ai nevoie de EORI sau vama."
      },
      {
        type: "keypoints",
        title: "Documentele si codurile esentiale",
        points: [
          { label: "EORI (Economic Operators Registration and Identification)", text: "Cod unic necesar pentru orice operatiune vamala in UE. Il obtii gratuit de la Directia Generala a Vamilor. Ai nevoie de SRL inregistrat. Se obtine in 1-5 zile lucratoare. Fara EORI nu poti importa legal." },
          { label: "Cod HS (Harmonized System)", text: "Cod international care clasifica produsul tau. Determina procentul taxei vamale. Cauta-l pe TARIC (baza de date UE): ec.europa.eu/taxation_customs/dds2/taric. Exemplu: 3924 90 00 = articole menaj din plastic. Important: codul HS gresit = taxe gresite = probleme la vama." },
          { label: "Factura comerciala (Commercial Invoice)", text: "Document emis de furnizor cu: descrierea produselor, cantitate, pret per unitate, valoare totala, tara de origine, termeni de livrare (DDP/FOB). Vama verifica aceasta factura. Daca pretul e suspect de mic, pot solicita reevaluare." },
          { label: "Packing List", text: "Lista detaliata cu ce contine fiecare colet: greutate, dimensiuni, numar bucati. Furnizorul o emite. Vama o verifica." },
          { label: "Bill of Lading / Air Waybill", text: "Documentul de transport emis de compania de shipping. Confirma ca marfa a fost predata transportatorului. Il primesti de la freight forwarder sau furnizor (la DDP)." },
          { label: "Declaratie de conformitate (daca e cazul)", text: "Pentru anumite produse (electrice, jucarii, cosmetice): declaratie ca produsul respecta standardele UE. Furnizorul trebuie sa ti-o dea. Fara ea, vama poate bloca importul." }
        ]
      },
      {
        type: "tip",
        title: "Sfat: Foloseste un broker vamal",
        content: "Un broker vamal (customs broker) costa 50-150 EUR per import si se ocupa de toate formalitatile. La primele importuri, merita fiecare cent. Ei stiu exact ce documente trebuie, ce cod HS e corect, si cum sa eviti intarzierile. Cere recomandari de la furnizorul tau DDP sau de la freight forwarder."
      }
    ]
  },
  {
    id: "3.8",
    title: "Checklist Import - De la Furnizor la Fulfillment Center",
    sections: [
      {
        type: "checklist",
        title: "Parcurge acest checklist pentru fiecare comanda de la furnizor",
        items: [
          { text: "Am identificat minimum 3 furnizori si am cerut cotatie de la toti", critical: true },
          { text: "Am comparat preturile si am negociat", critical: true },
          { text: "Am comandat si verificat sample-ul (calitate, dimensiuni, ambalaj)", critical: true },
          { text: "Am calculat costul TOTAL per unitate (COGS complet)", critical: true },
          { text: "Marja ramane peste 15% dupa toate costurile", critical: true },
          { text: "Am ales termeni de livrare (DDP recomandat pentru inceput)", critical: false },
          { text: "Am EORI daca import din afara UE", critical: false },
          { text: "Am verificat codul HS si taxele vamale aplicabile", critical: false },
          { text: "Am furnizor de backup identificat", critical: false },
          { text: "Am stabilit cum ajunge marfa la fulfillment center", critical: true },
          { text: "Am negociat termeni de plata (30% avans + 70% la livrare e standard)", critical: false },
          { text: "Platesc prin Trade Assurance (Alibaba) sau factura cu transfer bancar (local)", critical: true },
          { text: "Am cerut factura comerciala corecta pentru contabilitate", critical: false }
        ]
      },
      {
        type: "tip",
        title: "Gata? Trecem la Modulul 4 - Magazin Online & Conversie",
        content: "Daca ai furnizori identificati si costuri calculate, urmatorul pas e sa-ti construiesti magazinul Shopify si pagina de produs care converteste. Modulul 4 te invata exact cum."
      }
    ]
  }
];

// ============================================================
// MODULE 6 — Fulfillment & Logistica (10 lectii)
// Adauga in index.html: <script src="js/data/module6.js"></script>
// ============================================================

COURSE_DATA.modules[5].lessons = [
  {
    id: "6.1",
    title: "Cum functioneaza Fulfillment-ul COD in Romania",
    sections: [
      {
        type: "text",
        title: "Ce inseamna fulfillment si de ce conteaza",
        content: "Fulfillment = tot procesul de la momentul in care primesti o comanda pana cand clientul primeste coletul. Include: primirea si depozitarea stocului, ambalarea comenzii, predarea la curier, tracking-ul livrarii, si gestionarea retururilor.\n\nAi 2 optiuni: self-fulfillment (faci tu totul — impachetezi acasa, duci la curier) sau fulfillment center externalizat (o firma face totul pentru tine). Pentru un business serios care tinteste 10.000 EUR, fulfillment center-ul externalizat e obligatoriu. Nu poti impacheta 30+ colete pe zi singur si sa mai ai timp de ads, research, si optimizare."
      },
      {
        type: "comparison",
        title: "Self-Fulfillment vs Fulfillment Center",
        headers: ["Criteriu", "Self-Fulfillment (tu faci totul)", "Fulfillment Center (externalizat)"],
        rows: [
          ["Cost per colet", "Mai mic (doar ambalaj + curier)", "3-7 EUR/colet (include ambalaj + procesare)"],
          ["Timp necesar", "30-60 min/zi la 10 comenzi, 3-4h la 30+", "0 minute — ei fac tot"],
          ["Scalabilitate", "Limitata la 20-30 comenzi/zi singur", "Nelimitata (centrul proceseaza sute/zi)"],
          ["Viteza procesare", "Depinde de tine (risc intarziere)", "Aceeasi zi sau maxim 24h"],
          ["Profesionalism", "Ambalaj de casa (uneori ok, uneori nu)", "Ambalaj standard profesional"],
          ["Cand il folosesti", "Primele 1-2 saptamani, sub 10 comenzi/zi", "Din momentul in care ai 5+ comenzi/zi constant"],
          ["Retururi", "Tu gestionezi (timp + nervi)", "Centrul gestioneaza (tu platesti doar costul)"]
        ]
      },
      {
        type: "tip",
        title: "Recomandare pentru planul tau de 60 zile",
        content: "Saptamana 1-2: Self-fulfillment e ok (ai putine comenzi, inveti procesul). Din saptamana 3: treci pe fulfillment center. Timpul pe care il economisesti (2-4h/zi) il investesti in ads, creative-uri, si testare produse noi — acolo se fac banii."
      }
    ]
  },
  {
    id: "6.2",
    title: "Cum alegi Fulfillment Center-ul potrivit",
    sections: [
      {
        type: "text",
        title: "Nu toate centrele de fulfillment sunt la fel",
        content: "In Romania exista 20+ firme de fulfillment, de la garaje cu 2 angajati pana la depozite profesionale cu sute de clienti. Alegerea gresita te costa: colete trimise cu intarziere, ambalaj prost, erori de procesare, si clienti furiosi."
      },
      {
        type: "keypoints",
        title: "Criterii de selectie (in ordinea importantei)",
        points: [
          { label: "1. Viteza de procesare", text: "Comanda primita dimineata = expediata in aceeasi zi. Maxim 24h de la primirea comenzii pana la predare la curier. Cere explicit: cat e timpul mediu de procesare? Daca spun 48-72h, cauta altcineva." },
          { label: "2. Integrare Shopify", text: "Centrul trebuie sa aiba integrare directa cu Shopify: comanda apare automat la ei, fara sa trimiti tu manual. Fara integrare = tu exporti comenzi, le trimiti pe email, ei le proceseaza manual = erori si intarzieri." },
          { label: "3. Firme de curierat integrate", text: "Trebuie sa lucreze cu FanCourier, Sameday, si/sau Cargus. Ideal: sa aiba tarife negociate cu curierul (mai ieftine decat ce ai obtine tu singur). Intreaba: cu ce curier lucrati si cat e tariful per colet?" },
          { label: "4. Cost per colet", text: "Include: pick & pack (pregatire comanda), ambalaj (cutie/plic), eticheta curier. Range normal: 3-7 EUR per colet. Sub 3 EUR: verifica ce include (poate ambalajul e extra). Peste 7 EUR: prea scump pentru COD cu marje mici." },
          { label: "5. Gestionare retururi", text: "Ce se intampla cand un colet e neridicatat sau returnat? Il reimpacheteaza? Cat costa procesarea returului? Unde ajunge produsul returnat (inapoi in stoc sau la tine)? Un centru bun reintegreaza produsul in stoc automat." },
          { label: "6. Depozitare stoc", text: "Cat costa depozitarea pe luna/palet/cutie? Primele 1-2 paleturi sunt adesea gratuite. Daca ai stoc mic (sub 500 bucati), costul de depozitare e neglijabil." },
          { label: "7. Comunicare si suport", text: "Raspund rapid pe WhatsApp/email? Au dashboard online unde vezi statusul comenzilor? Te anunta proactiv daca e o problema? Suportul bun e diferenta intre un partener si o bataie de cap." }
        ]
      },
      {
        type: "steps",
        title: "Cum gasesti si contactezi centre de fulfillment",
        steps: [
          "Google: fulfillment center Romania, fulfillment ecommerce Romania, depozit COD Romania",
          "Cere recomandari in grupuri Facebook de e-commerce Romania",
          "Contacteaza 3-5 centre: cere lista de preturi, termeni, si timp de procesare",
          "Intreaba specific: aveti integrare Shopify? Cu ce curierat lucrati? Cat e costul per colet all-inclusive?",
          "Cere o proba: trimite 20-30 de produse si testeaza procesul cu primele comenzi reale",
          "Evalueaza dupa 1-2 saptamani: viteza, calitate ambalaj, comunicare, erori",
          "Daca nu esti multumit, schimba — nu ramane cu un partener slab din comoditate"
        ]
      },
      {
        type: "warning",
        title: "Red flags la un fulfillment center",
        content: "Nu au integrare Shopify (totul manual). Timp de procesare peste 48h. Nu raspund la mesaje in 24h. Nu lucreaza cu curierati mari (FanCourier, Sameday). Nu pot gestiona retururi. Cer contract pe minim 6 luni fara posibilitate de reziliere. Nu au dashboard/raportare online."
      }
    ]
  },
  {
    id: "6.3",
    title: "Firme de Curierat: FanCourier, Sameday, Cargus, GLS",
    sections: [
      {
        type: "text",
        title: "Curierul e ultimul punct de contact cu clientul",
        content: "Comportamentul curierului la usa clientului determina daca ridica sau nu coletul. Un curier profesional, rapid, si prietenos = rata de ridicare mare. Un curier care vine dupa 5 zile, nu suna inainte, si lasa aviz = colet neridicatat.\n\nDe obicei nu negociezi direct cu curierul — fulfillment center-ul are deja contracte cu 1-2 curierat. Dar trebuie sa stii care sunt optiunile si ce sa ceri."
      },
      {
        type: "comparison",
        title: "Comparatie firme curierat Romania (2025-2026)",
        headers: ["Criteriu", "FanCourier", "Sameday", "Cargus", "GLS"],
        rows: [
          ["Acoperire", "Nationala, foarte buna", "Nationala + easybox", "Nationala, buna", "Nationala, ok"],
          ["Viteza medie", "1-2 zile (urban)", "1 zi (easybox instant)", "1-2 zile", "2-3 zile"],
          ["Tarif mediu COD", "18-25 RON", "15-22 RON", "17-23 RON", "16-22 RON"],
          ["Plata ramburs la client", "Cash + card POS", "Cash + card POS", "Cash + card POS", "Cash (card limitat)"],
          ["Virament ramburs catre tine", "3-7 zile lucratoare", "3-5 zile lucratoare", "5-7 zile lucratoare", "5-10 zile lucratoare"],
          ["Easybox/Locker", "FanBox (mai putine)", "Sameday easybox (cele mai multe)", "Nu", "Nu"],
          ["Reputatie la clienti", "Foarte buna", "Excelenta", "Buna", "Medie"],
          ["Recomandare", "Primar sau secundar", "Primar (cel mai rapid)", "Secundar", "Backup"]
        ]
      },
      {
        type: "tip",
        title: "Strategia optima de curierat",
        content: "Curier primar: Sameday sau FanCourier (alege pe care il prefera fulfillment center-ul tau). Curier secundar: celalalt din doi. De ce 2 curieri? Daca unul are probleme (greva, suprasarcina de sarbatori, zona neacoperita), ai backup. Easybox (Sameday): ofera optiunea de livrare in easybox pe checkout — unii clienti prefera sa ridice singuri. Tariful e mai mic si rata de ridicare e mai mare."
      }
    ]
  },
  {
    id: "6.4",
    title: "Fluxul Complet al Comenzii: De la Click la Livrare",
    sections: [
      {
        type: "framework",
        title: "Fluxul in 8 pasi",
        stages: [
          { name: "1. Client plaseaza comanda", description: "Clientul completeaza formularul COD pe site-ul tau Shopify. Comanda apare in Shopify Orders.", metrics: "Timp: instant", whatWorks: "Formular simplu, telefon obligatoriu", targetKPI: "Conversie 3-5%" },
          { name: "2. Confirmare automata SMS", description: "SMS automat catre client: Comanda ta #X a fost inregistrata. Livrare in 1-3 zile. Reduce neridicarile cu 10-15%.", metrics: "Timp: sub 5 minute de la comanda", whatWorks: "SMS scurt, clar, cu numar comanda", targetKPI: "Rata trimitere 100%" },
          { name: "3. Comanda ajunge la Fulfillment", description: "Prin integrare Shopify, comanda apare automat in sistemul fulfillment center-ului. Ei o pun in coada de procesare.", metrics: "Timp: instant (daca integrare) sau 1-2h (daca manual)", whatWorks: "Integrare automata Shopify", targetKPI: "Zero comenzi pierdute" },
          { name: "4. Pick & Pack", description: "Fulfillment center-ul ia produsul din stoc, il impacheteaza, pune factura/AWB in colet, si il pregateste pentru curier.", metrics: "Timp: aceeasi zi sau maxim 24h", whatWorks: "SOP clar, ambalaj standard", targetKPI: "Procesare sub 24h" },
          { name: "5. Predare la curier", description: "Coletul e predat firmei de curierat. Se genereaza AWB (numar de tracking).", metrics: "Timp: aceeasi zi cu procesarea", whatWorks: "Curier vine zilnic la fulfillment", targetKPI: "Expediere aceeasi zi" },
          { name: "6. SMS tracking catre client", description: "Clientul primeste SMS cu link de tracking: Coletul tau e pe drum! Urmareste aici: [link]. Al doilea touchpoint care reduce neridicarile.", metrics: "Timp: automat la expediere", whatWorks: "Link real de tracking, nu generic", targetKPI: "Rata deschidere SMS 80%+" },
          { name: "7. Livrare la client", description: "Curierul livreaza la adresa clientului. Clientul plateste ramburs (cash sau card). Curierul confirma livrarea.", metrics: "Timp: 1-3 zile de la expediere", whatWorks: "Curier care suna inainte, livrare rapida", targetKPI: "Rata ridicare 75-85%" },
          { name: "8. Virament bani", description: "Firma de curierat vireaza banii incasati ramburs in contul tau de firma. Minus comisionul lor.", metrics: "Timp: 3-7 zile lucratoare dupa livrare", whatWorks: "Verifica zilnic extrasul de cont", targetKPI: "Cashflow predictibil" }
        ]
      }
    ]
  },
  {
    id: "6.5",
    title: "Rata de Neridicate - Ce e Normal si Cum o Reduci",
    sections: [
      {
        type: "text",
        title: "Neridicarile sunt cea mai mare pierdere pe COD",
        content: "Fiecare colet neridicatat iti costa: costul curierului dus (18-25 RON) + costul curierului retur (10-15 RON) + costul fulfillment (3-7 EUR) + ambalaj pierdut (1-2 RON). Total pierdere per colet neridicatat: 40-60 RON. La 100 comenzi cu 20% neridicate = 20 colete x 50 RON = 1.000 RON pierdere. Reducerea ratei de neridicate cu doar 5% (de la 20% la 15%) la 100 comenzi = 250 RON economisiti."
      },
      {
        type: "keypoints",
        title: "12 metode testate de reducere a neridicarilor",
        points: [
          { label: "1. SMS confirmare imediat dupa comanda", text: "Automatizeaza un SMS in 5 minute de la plasare: Comanda ta a fost inregistrata! Livrare in 1-3 zile. Impact: -5-10% neridicate." },
          { label: "2. Apel telefonic de confirmare", text: "Pentru comenzi peste 150 RON sau produse scumpe: suna clientul in 2-4 ore. Confirma: adresa e corecta? Produsul dorit? Cand e acasa? Impact: -10-20% neridicate dar necesita timp/VA." },
          { label: "3. Livrare cat mai rapida", text: "Cu cat livrezi mai repede, cu atat creste rata de ridicare. Sub 48h = ideal. Peste 5 zile = dezastru. Clientul uita sau isi pierde entuziasmul." },
          { label: "4. SMS cu tracking la expediere", text: "Coletul tau e pe drum! Urmareste aici: [link]. Clientul stie ca vine si se pregateste." },
          { label: "5. Pretul sa corespunda valorii percepute", text: "Daca clientul plateste 149 RON si primeste ceva care pare de 30 RON, nu ridica. Pretul trebuie sa fie justificat de calitate si prezentare." },
          { label: "6. Produsul sa corespunda reclamei", text: "Daca in reclama produsul arata premium si in realitate e plastic ieftin, rata de retur explodeaza." },
          { label: "7. Ambalaj decent", text: "Nu trebuie luxury, dar nici o punga de plastic mototolit. O cutie curata cu produsul bine protejat inspira incredere la deschidere." },
          { label: "8. Optiunea de plata card la curier", text: "Unii clienti nu au cash acasa. Daca curierul are POS, rata de ridicare creste." },
          { label: "9. Livrare in weekend (daca e posibil)", text: "Multe comenzi sunt de vineri-duminica. Daca livrezi si sambata, prinzi clientul acasa." },
          { label: "10. Evita livrarea luni dimineata", text: "Multi clienti sunt la munca luni. Programeaza livrari marti-vineri daca poti." },
          { label: "11. Follow-up pe comenzi nelivrate", text: "Daca curierul nu gaseste clientul: SMS/apel a doua zi. Nu lasa coletul sa se intoarca fara tentativa reala." },
          { label: "12. Blacklist clienti problematici", text: "Daca acelasi numar de telefon are 3+ comenzi neridicate, blocheaza-l. Exista aplicatii Shopify care fac asta automat." }
        ]
      },
      {
        type: "comparison",
        title: "Rate de neridicate: ce e normal pe categorii",
        headers: ["Categorie", "Rata normala", "Rata buna", "Red flag"],
        rows: [
          ["Gadget-uri sub 100 RON", "15-20%", "Sub 15%", "Peste 25%"],
          ["Produse 100-199 RON", "18-25%", "Sub 18%", "Peste 30%"],
          ["Produse 200-300 RON", "25-35%", "Sub 25%", "Peste 40%"],
          ["Imbracaminte/Fashion", "30-45%", "Sub 30%", "Peste 45%"],
          ["Produse sezoniere/cadou", "10-15%", "Sub 10%", "Peste 20%"]
        ]
      }
    ]
  },
  {
    id: "6.6",
    title: "Gestionarea Retururilor",
    sections: [
      {
        type: "text",
        title: "Retururile sunt inevitabile — gestioneaza-le eficient",
        content: "Pe COD, retururile vin in 2 forme: colete neridicate (clientul nu e acasa sau s-a razgandit) si retururi efective (clientul a deschis produsul si vrea sa-l returneze). Conform OUG 34/2014, clientul are drept de retragere in 14 zile calendaristice.\n\nCheia nu e sa eviti retururile (imposibil), ci sa le gestionezi cu cost minim si sa reinverti produsul in stoc cat mai repede."
      },
      {
        type: "steps",
        title: "Procesul de gestionare retur",
        steps: [
          "Colet neridicatat: curierul il returneaza la fulfillment center. Centrul il reimpacheteaza si il pune inapoi in stoc. Cost: 5-10 RON (retur curier + reprocesare).",
          "Retur solicitat de client: clientul contacteaza (email/telefon). Verifici motivul. Daca e defect: trimiti retur gratuit + rambursare. Daca e razgandire: clientul plateste transportul retur.",
          "Rambursare: dupa primirea produsului returnat, rambursezi in 14 zile. Transfer bancar (ai datele clientului din comanda).",
          "Produs returnat: daca e in stare buna, reintra in stoc. Daca e deteriorat/deschis, evalueaza daca se poate revinde (cu discount) sau e pierdere.",
          "Tracking retururi: noteaza in Profit Tracker fiecare retur: motiv, cost, daca produsul e recuperabil. Daca un produs are rata de retur peste 15%, ai o problema de calitate sau de asteptari."
        ]
      },
      {
        type: "tip",
        title: "Cum reduci retururile efective",
        content: "Descriere si imagini corecte (clientul sa primeasca EXACT ce a vazut). Dimensiuni si specificatii clare pe pagina de produs. Video demonstrativ care arata produsul real (nu render-uri CGI). Raspunde la intrebari INAINTE de comanda (FAQ pe pagina de produs). Ambalaj care protejeaza produsul in transport (produse sparte = retur garantat)."
      }
    ]
  },
  {
    id: "6.7",
    title: "Automatizari care iti Salveaza Ore Zilnic",
    sections: [
      {
        type: "text",
        title: "Automatizeaza tot ce se repeta",
        content: "Daca faci acelasi lucru manual de 20+ ori pe zi, trebuie automatizat. La 30 comenzi/zi, procesarea manuala iti mananca 3-4 ore. Cu automatizari, acelasi volum se proceseaza in 15-30 minute (doar exceptii si probleme)."
      },
      {
        type: "keypoints",
        title: "Automatizari esentiale (in ordinea prioritatii)",
        points: [
          { label: "1. Comanda → Fulfillment (automat)", text: "Integrare Shopify-Fulfillment: comanda apare automat la centrul de fulfillment. Nu mai exporti/trimiti manual. Aplicatii: depinde de centrul de fulfillment — majoritatea au integrare nativa sau prin API." },
          { label: "2. SMS confirmare comanda (automat)", text: "La fiecare comanda noua, SMS automat catre client. Aplicatii Shopify: SMSBump, Postscript, sau serviciu local de SMS (ex: SMSO.ro, Textmagic). Cost: 0.03-0.05 EUR per SMS." },
          { label: "3. SMS tracking la expediere (automat)", text: "Cand coletul e expediat, clientul primeste automat SMS cu link de tracking. Majoritatea firmelor de curierat trimit asta automat — verifica ca e activat." },
          { label: "4. Email confirmare comanda (automat)", text: "Shopify trimite automat email de confirmare. Personalizeaza-l: adauga logo, text in romana, rezumat comanda, contact support. Settings > Notifications > Order confirmation." },
          { label: "5. Sincronizare stoc (automat)", text: "Daca ai stoc la fulfillment center: sincronizeaza stocul cu Shopify ca sa nu vinzi produse pe care nu le ai. Aplicatii: Stocky, sau integrarea nativa a centrului de fulfillment." },
          { label: "6. Raportare zilnica (semi-automat)", text: "Profit Tracker completat zilnic — asta ramane manual dar dureaza doar 10-15 minute daca ai toate datele la indemana (Shopify + Ads Manager + raport curier)." }
        ]
      }
    ]
  },
  {
    id: "6.8",
    title: "Cashflow-ul COD - Cum Gestionezi Decalajul de Bani",
    sections: [
      {
        type: "text",
        title: "Problema unica a cashflow-ului pe COD",
        content: "Pe COD, platesti ADS-urile ACUM dar primesti banii de la curier peste 5-10 ZILE. Acest decalaj e cel mai mare stres financiar al modelului COD.\n\nExemplu concret: Luni cheltuiesti 50 EUR pe ads. Marti ai 10 comenzi. Miercuri-Joi coletele sunt livrate. Vineri-Luni curierul proceseaza platile. Marti-Miercuri urmatoare banii ajung in contul tau. Total: 7-10 zile decalaj. In aceste 7-10 zile, tu continui sa cheltuiesti pe ads FARA sa fi primit banii din vanzarile anterioare."
      },
      {
        type: "keypoints",
        title: "Cum gestionezi decalajul",
        points: [
          { label: "1. Buffer de cash", text: "Ai INTOTDEAUNA minim 2 saptamani de buget de ads in cont, pe langa ce ai cheltuit deja. Daca cheltuiesti 50 EUR/zi, ai minim 700 EUR buffer disponibil." },
          { label: "2. Creste bugetul de ads DOAR din profit", text: "Nu creste bugetul inainte ca banii din vanzarile anterioare sa ajunga in cont. Cresterea bugetului trebuie sa urmareasca cashflow-ul, nu revenue-ul." },
          { label: "3. Alege curier cu virament rapid", text: "Sameday: virament la 3-5 zile. FanCourier: 3-7 zile. Diferenta de 2-3 zile de virament conteaza enorm la cashflow." },
          { label: "4. Adauga optiunea de plata card", text: "10-20% din clienti vor plati cu cardul. Banii din card ajung in 2-3 zile (Stripe/PayPal). Imbunatateste cashflow-ul semnificativ." },
          { label: "5. Tracked in Profit Tracker separat", text: "Fa coloana separata: Bani cheltuiti azi (ads) vs Bani incasati azi (virament curier). Diferenta = cashflow gap. Daca gap-ul creste, scaleaza mai lent." }
        ]
      },
      {
        type: "warning",
        title: "Pericolul nr 1: Scalezi mai repede decat cashflow-ul permite",
        content: "Ai 20 comenzi/zi, totul e profitabil, cresti la 40 comenzi/zi. Dar banii din primele 20 comenzi nu au ajuns inca. Acum cheltuiesti 100 EUR/zi pe ads dar ai zero in cont. Rezultat: card refuzat pe Facebook, campanii oprite, pierdere de momentum. Regula de fier: nu scala mai mult decat cashflow-ul tau permite. Mai bine cresti incet si sustenabil decat rapid si falimentar."
      }
    ]
  },
  {
    id: "6.9",
    title: "SOP-uri Operationale - Documenteaza Tot",
    sections: [
      {
        type: "text",
        title: "De ce ai nevoie de SOP-uri chiar daca esti singur",
        content: "SOP = Standard Operating Procedure = o procedura scrisa pas cu pas pentru o activitate repetitiva. De ce conteaza chiar daca faci totul singur? Pentru ca: vei uita pasi cand esti obosit, vei delega cand cresti (VA-ul are nevoie de instructiuni clare), si iti organizeaza mintea (stii exact ce faci si in ce ordine).\n\nNU trebuie sa fie documente complicate. Un SOP e o lista simpla de pasi pe care o poate urma oricine."
      },
      {
        type: "keypoints",
        title: "SOP-urile esentiale (creeaza-le pe masura ce faci procesul prima data)",
        points: [
          { label: "SOP 1: Procesare comanda noua", text: "1. Verifica comanda in Shopify (date complete?). 2. Trimite SMS confirmare (daca nu e automat). 3. Confirma stocul la fulfillment. 4. Marcheaza in Shopify: processing. 5. Verifica la sfarsitul zilei ca toate comenzile au fost trimise." },
          { label: "SOP 2: Gestionare retur/neridicata", text: "1. Primesti notificare de la curier/fulfillment. 2. Verifica motivul. 3. Contacteaza clientul (daca e returnat, nu neridicatat). 4. Proceseaza rambursarea daca e cazul. 5. Noteaza in tracker: motiv, cost, produs recuperabil?" },
          { label: "SOP 3: Completare Profit Tracker zilnic", text: "1. Deschide Shopify: nr comenzi, revenue. 2. Deschide Ads Manager: spend, CPA, ROAS. 3. Verifica raport curier: colete livrate, neridicate. 4. Completeaza Profit Tracker. 5. Analizeaza: sunt pe target?" },
          { label: "SOP 4: Adaugare produs nou pe site", text: "1. Imagini: minim 5, inclusiv infographic. 2. Titlu cu beneficiu principal. 3. Copy: problema-solutie-dovada. 4. Pret cu ancora (barat). 5. Recenzii (minim 10). 6. FAQ (minim 3). 7. Test pe mobil. 8. Comanda test." },
          { label: "SOP 5: Lansare campanie noua", text: "1. Creative-uri pregatite (minim 3). 2. Copy scris (minim 2 variante). 3. Campanie CBO Broad, 20 EUR/zi. 4. Obiectiv: Purchase. 5. Targeting: Romania broad. 6. Lanseaza si NU atinge 72h." }
        ]
      },
      {
        type: "tip",
        title: "Format simplu: Google Doc sau Notion",
        content: "Un SOP e un Google Doc cu titlu, pasi numerotati, si eventual screenshot-uri. Nu trebuie sa fie fancy. Creeaza un folder SOP-uri si adauga cate un document pentru fiecare proces pe masura ce il faci prima data. Cand vei angaja un VA, ii dai acces la acest folder si incepe sa lucreze din ziua 1."
      }
    ]
  },
  {
    id: "6.10",
    title: "Checklist Fulfillment - Ready to Ship",
    sections: [
      {
        type: "checklist",
        title: "Verifica inainte de prima comanda expediata",
        items: [
          { text: "Am ales fulfillment center (sau am setup self-fulfillment pentru inceput)", critical: true },
          { text: "Integrare Shopify-Fulfillment functionala (comenzi ajung automat)", critical: true },
          { text: "Firma de curierat stabilita (FanCourier sau Sameday primar)", critical: true },
          { text: "Tarife curierat negociate (sau folosesc tarifele fulfillment center-ului)", critical: false },
          { text: "SMS confirmare comanda automatizat", critical: true },
          { text: "SMS tracking la expediere activat", critical: false },
          { text: "Stoc trimis la fulfillment center (minim 20-50 bucati pentru test)", critical: true },
          { text: "Am testat flow-ul complet: comanda test → procesare → expediere → livrare", critical: true },
          { text: "Am SOP pentru procesare comanda si gestionare retur", critical: false },
          { text: "Am buffer de cash pentru minim 2 saptamani de ads", critical: true },
          { text: "Am inteles decalajul de cashflow COD si am plan", critical: true }
        ]
      },
      {
        type: "tip",
        title: "Modulul 7 — KPI-uri & Tracking Financiar",
        content: "Acum ca ai sistemul operational complet (site + ads + fulfillment), urmatorul pas e sa masori TOTUL corect. Modulul 7 te invata ce numere sa urmaresti zilnic ca sa stii daca faci bani sau pierzi bani."
      }
    ]
  }
];

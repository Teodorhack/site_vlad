// ============================================================
// MODULE 2 DATA — Research & Validare Produs
// ============================================================

COURSE_DATA.modules[1].lessons = [
  {
    id: "2.1",
    title: "Criteriile unui produs castigator COD",
    sections: [
      {
        type: "text",
        title: "Ce face un produs sa vanda pe COD in Romania",
        content: "Nu orice produs se vinde pe COD. Modelul COD are cerinte specifice: produsul trebuie sa declanseze cumpararea impulsiva, sa aiba marja suficienta ca sa acopere costurile de neridicate, si sa fie usor de livrat.\n\nGreseala clasica e sa alegi un produs doar pentru ca ti se pare interesant. Produsul castigator nu e cel care iti place TIE - e cel care indeplineste criteriile de mai jos simultan. Daca un produs bifez doar 3 din 7 criterii, probabil nu va fi profitabil."
      },
      {
        type: "keypoints",
        title: "Cele 7 Criterii Obligatorii",
        points: [
          { label: "1. Pret de vanzare 99-249 RON (sweet spot)", text: "Sub 79 RON - marja prea mica dupa ads + fulfillment + neridicate. Peste 299 RON - rata de neridicate creste dramatic (oamenii se razgandesc la sume mari). Sweet spot-ul pentru COD Romania e 99-199 RON. La acest pret, cumpararea e suficient de impulsiva si marja e suficienta." },
          { label: "2. Cost produs sub 25-30% din pretul de vanzare", text: "Daca vinzi la 149 RON, costul produsului (COGS) trebuie sa fie sub 37-45 RON. Asta iti lasa marja pentru ads (25-35%), fulfillment (10-15%), curier (10-15%), si profit (15-25%). Daca COGS-ul e 50%+ din pret, nu vei fi profitabil pe COD." },
          { label: "3. Rezolva o problema sau satisface o dorinta puternica", text: "Produsele care merg cel mai bine pe COD fie rezolva o frustrare zilnica (organizare, curatenie, durere, confort), fie satisfac o dorinta emotionala (aspect, status, cadou, hobby). Produsele generice fara beneficiu clar nu convertesc." },
          { label: "4. Demonstrabil vizual in 3-15 secunde", text: "Daca nu poti arata CE face produsul intr-un video scurt, va fi foarte greu sa faci reclame care convertesc. Cele mai bune produse COD au un moment WOW vizual: before/after, transformare, demonstratie." },
          { label: "5. Greutate sub 2kg, dimensiuni standard", text: "Costul de curierat creste dramatic peste 2kg. Produsele fragile au rata de retur mai mare. Ideal: sub 1kg, dimensiuni care incap intr-o cutie standard de curier. Evita produse voluminoase sau foarte fragile." },
          { label: "6. Nu necesita certificari complexe", text: "Evita: suplimente alimentare (necesita autorizatie ANSVSA), cosmetice (necesita notificare CPNP), jucarii (necesita CE marking), electrocasnice cu voltaj (necesita conformitate). Aceste categorii nu sunt imposibile, dar adauga complexitate si risc legal pentru un incepator." },
          { label: "7. Nu e un trend deja mort", text: "Daca vezi un produs viral de 6+ luni, probabil piata e saturata. Ideal: produs in faza de crestere (1-3 luni de la aparitie) sau produs evergreen cu angle unic. Verifica Facebook Ad Library - daca 50+ magazine vand acelasi produs cu aceleasi imagini, e prea tarziu." }
        ]
      },
      {
        type: "comparison",
        title: "Produse BUNE vs PROASTE pentru COD Romania",
        headers: ["Bune (de testat)", "Proaste (de evitat ca incepator)"],
        rows: [
          ["Gadget-uri de bucatarie cu demonstratie WOW", "Tricouri/haine (rate de retur enorme, sizing issues)"],
          ["Produse de organizare casa/masina", "Suplimente alimentare (certificari, risc legal)"],
          ["Accesorii auto utile", "Electronice complexe (retururi, garantie, defecte)"],
          ["Produse de ingrijire personala (non-cosmetice)", "Produse personalizate (timp de productie, erori)"],
          ["Gadget-uri pentru animale de companie", "Produse foarte ieftine sub 59 RON (marja zero)"],
          ["Unelte/accesorii hobby", "Produse cu dimensiuni mari/grele (cost curier)"],
          ["Produse pentru copii (non-jucarii)", "Bijuterii scumpe (incredere zero pe COD)"],
          ["Produse de gradinarit sezoniere", "Produse identice cu ce e pe Emag la pret mai mic"]
        ]
      },
      {
        type: "warning",
        title: "Capcana produselor ieftine din China",
        content: "Multi incepatori gasesc produse la 2-5 USD pe AliExpress si cred ca au marja uriasa. Dar cand adaugi: transport international (2-5 USD), taxe vama + TVA (19% + eventual taxe antidumping), fulfillment (3-5 EUR), curier (4-6 EUR), cost neridicate (15-25% pierdere), si ads (CPA 15-40 RON) - marja dispare rapid. Calculeaza INTOTDEAUNA costul TOTAL inainte de a testa."
      }
    ]
  },
  {
    id: "2.2",
    title: "Metode de Research: Unde si Cum gasesti produse",
    sections: [
      {
        type: "text",
        title: "Research-ul e o abilitate, nu noroc",
        content: "Gasirea produselor castigatoare nu e despre a avea noroc. E despre a avea un SISTEM de research pe care il aplici zilnic, consistent. Oamenii care gasesc produse bune nu sunt mai destepti - sunt mai disciplinati in research.\n\nRegula: dedica minimum 60 minute pe zi research-ului de produse, chiar si cand ai deja un produs care merge. Pipeline-ul de produse noi trebuie sa fie mereu alimentat."
      },
      {
        type: "keypoints",
        title: "7 Metode de Research (in ordinea eficientei)",
        points: [
          { label: "1. Facebook Ad Library (GRATUIT - cea mai importanta)", text: "Mergi pe facebook.com/ads/library. Cauta pe categorii sau cuvinte cheie in romana. Filtreaza dupa tara: Romania. Vezi CE reclame ruleaza ACUM, de cand ruleaza, si pe ce platforme. Daca o reclama ruleaza de 2+ saptamani, produsul probabil e profitabil (nimeni nu tine ads neprofitabile). Noteaza: produsul, hook-ul, pretul, landing page-ul." },
          { label: "2. TikTok Creative Center (GRATUIT)", text: "ads.tiktok.com/business/creativecenter - vezi cele mai performante reclame. Filtreaza pe regiune (Europe), industrie (E-commerce), si perioada. TikTok e sursa #1 de trenduri noi. Produsele care devin virale pe TikTok ajung pe Facebook Ads 2-4 saptamani mai tarziu." },
          { label: "3. Spy Tools (platite, dar puternice)", text: "AdSpy (149 USD/luna), Minea (49 EUR/luna), PiPiAds (pentru TikTok). Iti arata reclame din toata lumea, filtrate dupa engagement, durata, platforma. Poti vedea exact ce vand competitorii si de cat timp. Ca incepator, Facebook Ad Library gratuit e suficient pentru primele 1-2 luni." },
          { label: "4. Scrolling organic pe TikTok/Instagram/Facebook", text: "Creeaza un cont dedicat si interactioneaza DOAR cu continut de e-commerce/produse. Algoritmul va incepe sa-ti arate reclame si produse virale. Salveaza tot ce ti se pare interesant. 30 min/zi de scroll intentionat (nu recreational) e research productiv." },
          { label: "5. AliExpress/Alibaba Trending", text: "AliExpress: sectiunea Best Sellers, categorii cu volum mare de comenzi. Alibaba: filtreaza dupa Top Ranking si Ready to Ship. Nu cumpara de pe AliExpress - foloseste-l doar pentru RESEARCH. Comanda sample-uri de pe Alibaba sau gaseste furnizori locali." },
          { label: "6. Amazon Best Sellers + Google Trends", text: "Amazon.de (Germania - piata similara cu Romania): vezi best sellers pe categorii. Google Trends: verifica daca interesul pentru un produs creste, scade, sau e stabil. Combina: produs trending pe Amazon + interes in crestere pe Google Trends = semnal bun." },
          { label: "7. Emag si competitori romani", text: "Emag.ro: vezi best sellers pe categorii. Identifica produse care se vand bine dar au rating mediu (3-4 stele) - poti oferi o versiune mai buna sau un angle diferit. NU incerca sa concurezi Emag la pret - concureaza prin marketing, experienta, si nisa." }
        ]
      },
      {
        type: "tip",
        title: "Workflow zilnic de research (60 min)",
        content: "Primele 20 min: Facebook Ad Library - cauta 5 cuvinte cheie noi, salveaza 3-5 produse interesante. Urmatoarele 20 min: TikTok scroll intentionat - salveaza video-uri virale cu produse. Ultimele 20 min: Analiza detaliata a 2-3 produse salvate (verifica criterii, calculeaza costuri, cauta furnizori). Noteaza totul intr-un spreadsheet de research."
      }
    ]
  },
  {
    id: "2.3",
    title: "Analiza Competitorilor - Ce fac bine si ce poti imbunatati",
    sections: [
      {
        type: "text",
        title: "De ce analiza competitorilor e esentiala",
        content: "Nu reinventezi roata. Daca cineva vinde deja un produs similar in Romania, ai date gratuite despre ce functioneaza. Analiza competitorilor nu inseamna sa copiezi - inseamna sa intelegi ce fac bine, ce fac prost, si cum poti face TU mai bine.\n\nDaca nimeni nu vinde produsul pe care vrei sa-l testezi in Romania, asta poate fi un semn bun (oportunitate) sau rau (nu exista cerere). Verifica daca produsul se vinde in alte tari similare (Bulgaria, Grecia, Polonia) - daca da, piata exista."
      },
      {
        type: "steps",
        title: "Procesul de analiza competitiva - pas cu pas",
        steps: [
          "Gaseste 3-5 competitori care vand produsul (Facebook Ad Library, Google search, TikTok)",
          "Viziteaza fiecare magazin si noteaza: pret, design site, calitate imagini, copy, recenzii, checkout flow",
          "Cumpara produsul de la cel mai mare competitor (da, cu banii tai) - vezi experienta completa",
          "Analizeaza reclamele lor: ce hook folosesc, ce format (video/static), ce copy, ce CTA",
          "Citeste recenziile negative ale competitorilor - acolo gasesti OPORTUNITATEA ta",
          "Noteaza: Ce fac bine? Ce fac prost? Ce as face EU diferit?",
          "Calculeaza: daca ei vand la pretul X cu reclame de Y luni, sunt probabil profitabili"
        ]
      },
      {
        type: "keypoints",
        title: "Ce sa analizezi la fiecare competitor",
        points: [
          { label: "Reclame (Facebook Ad Library)", text: "De cand ruleaza reclamele? (peste 2 saptamani = probabil profitabile). Cate variante au? Ce hook-uri folosesc? Video sau static? Ce spune copy-ul? Au UGC (user generated content) sau produs pe fond alb?" },
          { label: "Site/Pagina de produs", text: "Cum arata pagina? E profesionala sau amator? Ce elemente de incredere au (recenzii, garantie, logo-uri curierat)? Cum e structurat copy-ul? Au urgenta/scarcity? Pretul e vizibil sau ascuns?" },
          { label: "Checkout", text: "Cat de simplu e formularul? Cate campuri are? Au upsell/cross-sell? Au optiunea de plata card langa COD? Cum confirma comanda (thank you page, email, SMS)?" },
          { label: "Recenzii negative", text: "GOLD MINE. Daca competitorul are recenzii cu: livrare lenta, produs diferit de poze, ambalaj prost, customer service inexistent - TU poti rezolva aceste probleme si castiga clientii lor." },
          { label: "Social Media", text: "Au pagina de Facebook/Instagram activa? Cati urmaritori? Posteaza regulat? Au engagement real sau fake? Cum raspund la comentarii negative pe reclame?" }
        ]
      },
      {
        type: "tip",
        title: "Frameworkul de diferentiere",
        content: "Nu trebuie sa fii mai bun la TOTUL. Alege 1-2 avantaje clare: pret mai bun, livrare mai rapida, imagini mai profesionale, copy mai persuasiv, bundle mai atractiv (produs + accesoriu), sau angle de marketing diferit (acelasi produs, alta poveste). UN avantaj clar e suficient pentru a castiga clienti."
      }
    ]
  },
  {
    id: "2.4",
    title: "Scorecard de Evaluare Produs - Sistemul de Notare",
    sections: [
      {
        type: "text",
        title: "De la feeling la date - cum notezi obiectiv un produs",
        content: "Cel mai mare pericol in research e sa te indragostesti de un produs. Creierul tau te pacaleste - iti place produsul, deci TREBUIE sa mearga. Dar piata nu functioneaza pe baza sentimentelor tale.\n\nScorecard-ul de mai jos elimina subiectivitatea. Fiecare produs potential primeste o nota de la 1 la 10 pe mai multe criterii. Scorul final iti spune daca merita sa testezi sau sa treci mai departe."
      },
      {
        type: "comparison",
        title: "Scorecard de Evaluare (noteaza 1-10 fiecare criteriu)",
        headers: ["Criteriu", "Ce masori", "Pondere"],
        rows: [
          ["Marja potentiala", "Pret vanzare minus TOATE costurile. Sub 20% marja = nota 1-3. Peste 35% = nota 8-10.", "25%"],
          ["Demonstrabilitate vizuala", "Cat de usor faci un video WOW de 15 sec. Produs static/plictisitor = nota mica.", "20%"],
          ["Volum piata / Cerere", "Cat de multi oameni ar putea cumpara? Nisa prea mica = nota mica. Masa larga = nota mare.", "15%"],
          ["Nivel competitie", "Cati vand deja? 0 = risc (nu e cerere). 50+ = saturatie. 3-15 competitori = ideal.", "15%"],
          ["Complexitate logistica", "Greutate, fragilitate, dimensiune, certificari necesare. Cu cat mai simplu, nota mai mare.", "10%"],
          ["Sezonalitate", "Se vinde tot anul (nota 10) sau doar de Craciun (nota 3-4)? Evergreen > sezonier.", "10%"],
          ["Potrivire COD", "E tipul de produs pe care romanii il cumpara impulsiv pe COD? Pret ok pentru impuls?", "5%"]
        ]
      },
      {
        type: "steps",
        title: "Cum interpretezi scorul",
        steps: [
          "Scor 70-100: Produs EXCELENT - testeaza-l cat mai repede. Prioritate maxima.",
          "Scor 50-69: Produs DECENT - merita un test daca ai buget. Poate functiona cu angle bun.",
          "Scor 35-49: Produs RISCANT - testeaza doar daca nu ai alternative mai bune.",
          "Scor sub 35: NU TESTA - pierdere de timp si bani. Treci la urmatorul produs.",
          "REGULA: Noteaza minimum 10 produse inainte de a alege ce testezi. Nu testa primul produs care pare ok."
        ]
      },
      {
        type: "warning",
        title: "Bias-uri de evitat in evaluare",
        content: "Bias de confirmare: cauti dovezi ca produsul e bun si ignori semnalele negative. Bias de ancorare: primul produs pe care il gasesti devine standardul. Bias personal: iti place produsul, deci il notezi mai bine. SOLUTIE: noteaza produsul inainte de a cauta furnizori sau de a calcula costurile. Prima impresie e cea mai obiectiva."
      }
    ]
  },
  {
    id: "2.5",
    title: "Validare rapida - Cum testezi fara sa cumperi stoc",
    sections: [
      {
        type: "text",
        title: "Testarea inainte de investitie",
        content: "Avantajul imens al modelului COD cu fulfillment: poti testa un produs fara sa cumperi sute de bucati in avans. Validarea rapida inseamna sa confirmi ca exista cerere REALA inainte de a investi serios.\n\nProcesul de validare are 2 faze: validare pre-lansare (research + analiza) si validare post-lansare (date reale din primele 3-5 zile de ads). Fiecare faza are criterii clare de GO / NO-GO."
      },
      {
        type: "keypoints",
        title: "Faza 1: Validare Pre-Lansare (inainte sa cheltuiesti pe ads)",
        points: [
          { label: "Test cerere Google", text: "Cauta produsul pe Google.ro. Au alte magazine oferte similare? Exista cautari relevante in Google Keyword Planner? Daca nimeni nu il cauta si nimeni nu il vinde - asta poate insemna ca nu exista cerere. Verifica si pe Emag." },
          { label: "Test competitie ads", text: "Facebook Ad Library: sunt alte magazine care fac reclame ACTIVE la acest produs sau similar? Daca da, e un semn BUN - inseamna ca exista piata. Daca reclame ruleaza de 30+ zile, produsul e aproape sigur profitabil pentru ei." },
          { label: "Test social proof", text: "Cauta produsul pe TikTok si Instagram. Are video-uri virale? Comentarii de tip Unde gasesc? sau Cat costa?. Engagement organic e cel mai puternic semnal de cerere." },
          { label: "Test furnizor", text: "Gaseste cel putin 2 furnizori care au produsul in stoc (local sau cu livrare rapida). Daca nu gasesti furnizor, nu poti testa. NU comanda 500 bucati din China pentru un produs netestat." },
          { label: "Test marja (Calculator)", text: "Calculeaza costul COMPLET: produs + transport + fulfillment + curier + rata neridicate estimata + ads (CPA estimat 25-40 RON). Mai ramane profit de 15%+? Daca nu, ajusteaza pretul sau renunta." }
        ]
      },
      {
        type: "keypoints",
        title: "Faza 2: Validare Post-Lansare (primele 3-5 zile de ads)",
        points: [
          { label: "Metrici de urmarit in primele 72h", text: "CTR (click-through rate): peste 2% = bun, sub 1% = reclama slaba. CPC (cost per click): sub 0.40 EUR = bun. Add to cart rate: peste 5% = pagina functioneaza. Cost per achizitie (CPA): sub 40 RON = viabil pentru produse 99-199 RON." },
          { label: "GO: continua testarea daca", text: "Ai CTR peste 1.5%, CPC sub 0.50 EUR, si cel putin cateva comenzi in primele 48h chiar daca CPA e mare. Primele zile algoritmul invata - nu trage concluzii din 5-10 EUR cheltuiti." },
          { label: "PIVOT: schimba reclama/pagina daca", text: "CTR sub 1% dar ai click-uri = reclama e ok dar pagina nu converteste. CTR peste 2% dar zero comenzi = pagina de produs e problema. Schimba UN element si testeaza din nou." },
          { label: "STOP: opreste produsul daca", text: "Dupa 50-75 EUR cheltuiti ai CTR sub 0.8% si zero comenzi = produsul sau reclama nu rezoneza cu piata. Noteaza ce ai invatat si treci la urmatorul produs. Nu e esec - e data." },
          { label: "Buget minim de test per produs", text: "15-20 EUR/zi x 3-5 zile = 45-100 EUR per produs testat. Cu mai putin de atat, nu ai suficiente date. Cu mai mult, pierzi bani inutil pe un produs care nu merge." }
        ]
      },
      {
        type: "tip",
        title: "Strategia de testare pentru buget limitat (500-600 EUR ads)",
        content: "Cu 500 EUR buget de ads, poti testa 5-6 produse (cca 80-100 EUR per produs). Testeaza in paralel cate 2-3 produse (nu toate 5 odata). Dupa primele 3-4 zile, opreste ce nu merge si redistribuie bugetul pe ce merge mai bine. Dupa 2 runde de testare (10-12 zile), ar trebui sa ai cel putin 1-2 produse cu potential."
      }
    ]
  },
  {
    id: "2.6",
    title: "Categorii care merg cel mai bine pe COD in Romania",
    sections: [
      {
        type: "text",
        title: "Categorii testate si validate pe piata romaneasca",
        content: "Urmatoarele categorii au istoric dovedit de vanzari pe COD in Romania. Nu inseamna ca orice produs din aceste categorii va merge - dar probabilitatea e mai mare. Alege o categorie care ti se potriveste (ai cunostinte, interes, sau experienta) si sapa adanc in ea."
      },
      {
        type: "keypoints",
        title: "Top 10 Categorii pentru COD Romania",
        points: [
          { label: "1. Casa & Gradina", text: "Organizatoare, gadget-uri de bucatarie, produse de curatenie inovatoare, decoratiuni practice, unelte de gradinarit. Piata mare, sezonalitate moderata (gradinarit = primavara/vara). Exemplu: suport magnetic de cutite, organizator de baie, lumini solare gradina." },
          { label: "2. Auto & Moto", text: "Accesorii auto utile: suporturi telefon, organizatoare portbagaj, gadget-uri de curatenie auto, accesorii interior. Piata mare (Romania are 8+ milioane masini). Exemplu: aspirator auto portabil, suport telefon ventilatie, parasolar auto." },
          { label: "3. Produse pentru Animale", text: "Jucarii, accesorii, gadget-uri de ingrijire. Piata in crestere rapida in Romania. Proprietarii de animale sunt cumparatori emotionali - perfect pentru impuls COD. Exemplu: perie auto-curatare, jucarie interactiva, ham cu GPS." },
          { label: "4. Fitness & Sport", text: "Accesorii de fitness home use, benzi elastice, gadget-uri de recuperare (massage gun), accesorii yoga. Evergreen cu peak in ianuarie si septembrie. Exemplu: massage gun, roller fascial, benzi de rezistenta." },
          { label: "5. Copii & Bebe", text: "Jucarii educative (fara CE marking complex), accesorii practice pentru parinti, gadget-uri de siguranta. Parintii sunt cumparatori emotionali si impulsivi. Exemplu: monitor temperatura baie, protectii mobila, jucarii senzoriale." },
          { label: "6. Sanatate & Wellness (non-suplimente)", text: "Produse ortopedice (centuri, talpici), gadget-uri de masaj, produse de postura, accesorii de somn. EVITA suplimentele. Exemplu: perna ortopedica, corector postura, talpici gel." },
          { label: "7. Tech Accesorii", text: "Gadget-uri sub 199 RON: casti wireless, incarcatoare rapide, suporturi laptop, ringlight-uri. EVITA electronice complexe. Exemplu: casti wireless sport, incarcator MagSafe compatibil, lampa LED birou." },
          { label: "8. Moda & Accesorii (selectiv)", text: "Functioneaza DOAR pe nise specifice: bijuterii personalizate ieftine, genti practice, accesorii de iarna (manusi touchscreen, caciuli). EVITA imbracaminte (sizing = retururi masive). Exemplu: portofel RFID, ochelari blue-light." },
          { label: "9. Unelte & DIY", text: "Unelte practice de bricolaj, gadget-uri multifunctionale, accesorii pentru atelierul de acasa. Audienta masculina, cumparare rationala dar impulsiva pe gadget-uri. Exemplu: nivela laser, set surubelnite de precizie, suport magnetic." },
          { label: "10. Sezoniere (cu timing corect)", text: "Produse de Craciun (oct-dec), produse de vara (mai-aug), produse de scoala (aug-sept). Marja excelenta dar fereastra de vanzare scurta. Trebuie sa fii pregatit cu stoc si ads CU MINIM 4-6 saptamani inainte de sezon." }
        ]
      },
      {
        type: "warning",
        title: "Categorii de EVITAT ca incepator",
        content: "Imbracaminte si incaltaminte (sizing = 30-40% retururi). Suplimente alimentare (autorizatie ANSVSA obligatorie). Cosmetice (notificare CPNP). Jucarii (CE marking). Produse alimentare (HACCP, termen de valabilitate). Electronice cu garantie legala (2 ani, service). Produse contrafacute/brand-uri (risc legal sever). Dupa ce ai experienta si profit, poti explora categorii mai complexe."
      }
    ]
  },
  {
    id: "2.7",
    title: "Research de cuvinte cheie - Ce cauta romanii",
    sections: [
      {
        type: "text",
        title: "De ce conteaza ce cauta oamenii",
        content: "Chiar daca vinzi prin Facebook/TikTok Ads (push marketing), intelegerea a ce cauta oamenii pe Google (pull marketing) iti da insight-uri valoroase: ce cuvinte folosesc cand descriu problema, ce alternative cauta, ce intrebari au, si cat de mare e piata.\n\nAceste cuvinte le vei folosi in: copy-ul reclamelor (foloseste limbajul clientului), descrierea produsului, titlul paginii (SEO basic), si targeting pe Facebook (interese)."
      },
      {
        type: "steps",
        title: "Procesul de research cuvinte cheie (gratuit)",
        steps: [
          "Google.ro: tasteaza inceputul unei fraze si vezi ce sugereaza autocomplete (ex: organizator de bucatarie, organizator de baie, organizator auto)",
          "Google Keyword Planner (gratuit cu cont Google Ads): vezi volumul de cautari lunar pentru cuvintele cheie relevante",
          "Google Trends: compara interesul pentru 2-3 produse similare. Vezi sezonalitatea. Filtreaza pe Romania.",
          "Emag search: tasteaza produsul si vezi cate rezultate apar + cum sunt formulate titlurile produselor populare",
          "TikTok search: cauta produsul si vezi ce hashtag-uri si descrieri au video-urile populare",
          "Noteaza TOP 10 cuvinte/fraze pe care le folosesc cumparatorii potentiali. Acestea devin copy-ul tau."
        ]
      },
      {
        type: "tip",
        title: "Hack: Comentariile la reclame = research gratuit",
        content: "Citeste comentariile de la reclamele competitorilor pe Facebook. Vei gasi: intrebari frecvente (le raspunzi in pagina de produs), obiectii (le adresezi in copy), limbajul natural al clientilor (il folosesti in reclame), si feedback real (ce le place, ce nu). 50 de comentarii la o reclama = 50 de puncte de date gratuite."
      }
    ]
  },
  {
    id: "2.8",
    title: "Red flags - Produse de evitat si capcane comune",
    sections: [
      {
        type: "keypoints",
        title: "15 Red Flags care iti spun sa NU testezi un produs",
        points: [
          { label: "1. Marja sub 15% dupa toate costurile", text: "Daca dupa COGS + ads + fulfillment + curier + neridicate ramai cu sub 15% marja, un singur cost neasteptat te pune pe pierdere." },
          { label: "2. Necesita explicatii complexe", text: "Daca nu poti explica beneficiul in 5 secunde, nu va merge pe COD. Cumparatorul impulsiv nu citeste paragrafe." },
          { label: "3. E pe piata de 6+ luni cu 20+ competitori", text: "Piata saturata. Daca nu ai un angle cu adevarat unic, vei pierde razboiul preturilor." },
          { label: "4. Pretul pe Emag e mai mic decat al tau", text: "Romanii verifica pe Emag. Daca produsul e acolo mai ieftin cu livrare rapida, nu vei convinge pe nimeni sa cumpere de la tine." },
          { label: "5. Necesita sizing (S/M/L/XL)", text: "Rata de retur pe produse cu marimi e 25-40%. Pe COD, asta inseamna neridicate + retururi = pierdere." },
          { label: "6. E fragil sau perisabil", text: "Produse din sticla, ceramica, sau cu termen de valabilitate = costuri ascunse mari (spargeri, expirari)." },
          { label: "7. Necesita baterie lithium (transport aerian)", text: "Bateriile lithium au restrictii de transport international. Costurile cresc, timpii se lungesc." },
          { label: "8. E un produs de marca contrafacut", text: "Risc legal sever. Amenzi, confiscare, posibil dosar penal. Zero toleranta." },
          { label: "9. Are recenzii predominant negative online", text: "Daca produsul are 2 stele pe Amazon/Emag, calitatea e problematica. Tu vei primi aceleasi reclamatii." },
          { label: "10. Nu gasesti furnizor cu stoc local/UE", text: "Import din China = 15-30 zile. Daca nu ai stoc local, nu poti livra in 1-3 zile. Rata de neridicate creste." },
          { label: "11. Costul de curierat depaseste 15% din pret", text: "Produse mari/grele unde curierul costa 8-12 EUR iti mananca marja. Sub 2kg ideal." },
          { label: "12. E un produs care necesita montaj", text: "Clientul COD nu vrea sa monteze nimic. Daca produsul necesita asamblare, rata de retur creste." },
          { label: "13. Categoria are restrictii de advertising", text: "Facebook restrictioneaza reclame la: suplimente, arme, alcool, tutun, produse financiare. Contul tau de ads poate fi banat." },
          { label: "14. Pretul e sub 79 RON", text: "La un CPA de 25-40 RON + fulfillment 15-20 RON + curier 18-22 RON + COGS, nu ramane profit la produse ieftine." },
          { label: "15. Iti place enorm dar nu indeplineste criteriile", text: "Cel mai mare red flag: te-ai indragostit de produs. Revino la scorecard si noteaza obiectiv." }
        ]
      }
    ]
  },
  {
    id: "2.9",
    title: "Checklist Research Complet - De la Idee la Decizia de Test",
    sections: [
      {
        type: "checklist",
        title: "Parcurge acest checklist pentru FIECARE produs inainte de a-l testa",
        items: [
          { text: "Am evaluat produsul cu Scorecard-ul (scor peste 50)", critical: true },
          { text: "Pretul de vanzare e in range-ul 99-249 RON", critical: true },
          { text: "Marja calculata e peste 15% dupa TOATE costurile", critical: true },
          { text: "Am gasit cel putin 2 furnizori cu stoc disponibil", critical: true },
          { text: "Produsul e demonstrabil vizual in sub 15 secunde", critical: true },
          { text: "Am verificat ca NU necesita certificari speciale", critical: true },
          { text: "Am verificat pretul pe Emag (nu e mai ieftin acolo)", critical: false },
          { text: "Am analizat cel putin 3 competitori pe Facebook Ad Library", critical: false },
          { text: "Am verificat Google Trends (nu e trend in scadere)", critical: false },
          { text: "Am citit comentariile de la reclamele competitorilor", critical: false },
          { text: "Am pregatit cel putin 2 variante de reclama (hook diferit)", critical: false },
          { text: "Am calculat bugetul de test (min 50-100 EUR per produs)", critical: true },
          { text: "Am comandat sample sau am poze profesionale ale produsului", critical: false },
          { text: "Am notat 5+ cuvinte cheie pe care le folosesc cumparatorii", critical: false }
        ]
      },
      {
        type: "tip",
        title: "Gata cu research-ul? Treci la Modulul 3 - Import & Furnizori",
        content: "Daca ai 3-5 produse evaluate si validate, urmatorul pas e sa gasesti furnizori si sa calculezi costurile finale de import. Modulul 3 te invata exact cum."
      }
    ]
  }
];

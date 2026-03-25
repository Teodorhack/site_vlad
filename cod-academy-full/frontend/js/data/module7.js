// ============================================================
// MODULE 7 — KPI-uri & Tracking Financiar (8 lectii)
// Adauga in index.html: <script src="js/data/module7.js"></script>
// ============================================================

COURSE_DATA.modules[6].lessons = [
  {
    id: "7.1",
    title: "De ce Tracking-ul Financiar e NON-NEGOCIABIL",
    sections: [
      {
        type: "text",
        title: "Fara tracking, nu ai business — ai un joc de noroc",
        content: "Cel mai periculos lucru in e-commerce COD: sa CREZI ca esti pe profit cand de fapt esti pe pierdere. Se intampla mai des decat crezi. Ads Manager iti arata ROAS 3x — excelent! Dar dupa ce scazi COGS, fulfillment, curier, neridicate, si retur, profitul real e zero sau negativ.\n\nProfit Tracker-ul e instrumentul care iti arata ADEVARUL. Il completezi zilnic, dureaza 10-15 minute, si e diferenta intre un business real si o iluzie. Fara el, esti orb."
      },
      {
        type: "comparison",
        title: "ROAS din Ads Manager vs Realitate",
        headers: ["Ce vezi in Ads Manager", "Ce e in realitate"],
        rows: [
          ["Revenue: 5.000 RON", "Revenue REAL (dupa neridicate 20%): 4.000 RON"],
          ["ROAS: 3.5x", "ROAS REAL: 2.8x"],
          ["CPA: 28 RON", "CPA REAL (inclusiv neridicate): 35 RON"],
          ["Profit estimat: mare!", "Profit REAL dupa TOATE costurile: poate fi negativ"],
          ["Conversii: 35", "Conversii LIVRATE: 28 (7 neridicate)"],
          ["Cost: 1.400 RON (ads)", "Cost TOTAL: 1.400 (ads) + 1.050 (COGS) + 560 (fulfill+curier) + 350 (neridicate) = 3.360 RON"]
        ]
      },
      {
        type: "warning",
        title: "Exemplul care te trezeste",
        content: "Sa zicem: 100 comenzi la 149 RON = 14.900 RON revenue aparent. Suna bine? Acum scadem: 20 neridicate (cost pierdut: 1.000 RON) = 80 comenzi livrate = 11.920 RON revenue REAL. Minus: COGS 35 RON x 100 = 3.500 RON. Ads: 3.000 RON. Fulfillment 5 EUR x 100 = 2.500 RON. Curier 20 RON x 100 = 2.000 RON. Contabilitate: 200 RON. TOTAL COSTURI: 12.200 RON. Profit REAL: 11.920 - 12.200 = -280 RON (PIERDERE). Cu ROAS aparent de 5x in Ads Manager. De aceea completezi Profit Tracker-ul."
      }
    ]
  },
  {
    id: "7.2",
    title: "Profit Tracker-ul Zilnic - Structura si Cum il Completezi",
    sections: [
      {
        type: "text",
        title: "Coloanele Profit Tracker-ului",
        content: "Profit Tracker-ul e un spreadsheet (Google Sheets sau Excel) pe care il completezi in fiecare zi, fara exceptie. Fiecare rand = o zi. Fiecare coloana = o metrica. La sfarsitul saptamanii, faci totaluri si analizezi trend-ul."
      },
      {
        type: "comparison",
        title: "Structura Profit Tracker — toate coloanele",
        headers: ["Coloana", "De unde iei datele", "Exemplu"],
        rows: [
          ["Data", "Calendar", "25.03.2026"],
          ["Nr. Comenzi plasate", "Shopify > Orders", "32"],
          ["Bucati vandute", "Shopify > Orders (daca ai bundle-uri)", "35"],
          ["Vanzari brute (RON)", "Shopify > Analytics > Total sales", "4.768"],
          ["Rata neridicate (%)", "Raport curier sau estimare 20%", "20%"],
          ["Rata cancelari (%)", "Comenzi anulate inainte de expediere", "5%"],
          ["Vanzari REALE (RON)", "= Vanzari brute x (1 - neridicate%) x (1 - cancelari%)", "3.576"],
          ["COGS per bucata", "Calculator import / pret furnizor", "35 RON"],
          ["COGS TOTAL", "= COGS x Bucati vandute", "1.225 RON"],
          ["Cheltuieli Ads", "Facebook Ads Manager + TikTok Ads", "1.200 RON"],
          ["Cost Fulfillment per comanda", "Contract fulfillment center", "25 RON"],
          ["Cost Fulfillment TOTAL", "= Cost fulfill x Nr comenzi", "800 RON"],
          ["Cost Curier per comanda", "Tarif curierat", "20 RON"],
          ["Cost Curier TOTAL", "= Cost curier x Nr comenzi (inclusiv retururi)", "800 RON"],
          ["Cost neridicate", "= Nr neridicate x (curier retur + fulfill)", "224 RON"],
          ["Alte costuri", "Contabilitate, abonamente, apps", "20 RON"],
          ["COST TOTAL", "= COGS + Ads + Fulfill + Curier + Neridicate + Alte", "4.269 RON"],
          ["PROFIT NET", "= Vanzari REALE - Cost TOTAL", "-693 RON"],
          ["Marja (%)", "= Profit / Vanzari REALE x 100", "-19.4%"],
          ["ROAS REAL", "= Vanzari REALE / Cheltuieli Ads", "2.98x"],
          ["CPA REAL", "= Cheltuieli Ads / Comenzi livrate (dupa neridicate)", "46.9 RON"]
        ]
      },
      {
        type: "tip",
        title: "Cand si cum completezi",
        content: "Dimineata (primele 10 minute ale zilei): completezi datele de IERI. Deschizi Shopify (comenzi, revenue), Ads Manager (spend), si eventual raportul curierului. Dureaza 10-15 minute. La sfarsitul saptamanii (duminica 30 min): faci totaluri pe saptamana, compari cu saptamana anterioara, identifici trenduri. Iti voi genera un Profit Tracker complet cu formule — doar il completezi."
      }
    ]
  },
  {
    id: "7.3",
    title: "KPI-uri Zilnice - Ce Verifici in Fiecare Dimineata",
    sections: [
      {
        type: "keypoints",
        title: "Cele 7 numere pe care le verifici ZILNIC",
        points: [
          { label: "1. Nr. comenzi ieri", text: "Shopify > Orders > filtreaza pe ziua anterioara. Target: creste saptamanal. Daca scade 2+ zile la rand fara motiv (nu e luni sau sarbatoare), investigheaza." },
          { label: "2. Spend ads ieri", text: "Facebook Ads Manager > ieri > amount spent. Verifica: a cheltuit bugetul setat? Daca nu cheltuieste, e o problema (ad rejection, audienta prea mica, bid prea mic)." },
          { label: "3. CPA ieri", text: "= Spend / Nr comenzi. Compara cu target-ul tau. Fluctuatii zilnice sunt normale — uita-te la trendul pe 3 zile, nu pe o singura zi." },
          { label: "4. ROAS ieri (din Ads Manager)", text: "= Revenue / Spend. ATENTIE: acesta e ROAS-ul aparent, nu cel real. ROAS real vine din Profit Tracker. Dar e un indicator rapid de performanta." },
          { label: "5. CTR pe cele mai noi ads", text: "Ads cu CTR sub 1% dupa 1000 impressions = schimba creative-ul. CTR in scadere pe un ad existent = ad fatigue, pregateste creative-uri noi." },
          { label: "6. Profit net estimat ieri (din Profit Tracker)", text: "Acesta e SINGURUL numar care conteaza cu adevarat. Esti pe plus sau pe minus? Daca esti pe minus 3+ zile la rand, opreste si analizeaza." },
          { label: "7. Cashflow: bani in cont vs bani de platit", text: "Cat ai in cont ACUM vs cat trebuie sa cheltuiesti pe ads in urmatoarele 7 zile. Daca nu ai suficient, scaleaza in jos." }
        ]
      },
      {
        type: "schedule",
        title: "Rutina de dimineata KPI (15 minute)",
        blocks: [
          { time: "3 min", task: "Shopify check", details: "Orders ieri, revenue, comenzi noi peste noapte" },
          { time: "3 min", task: "Ads Manager check", details: "Spend, CPA, ROAS, CTR pe fiecare ad activ" },
          { time: "5 min", task: "Profit Tracker", details: "Completeaza randul de ieri cu toate datele" },
          { time: "2 min", task: "Decizii", details: "Ceva de oprit? Ceva de scalat? Ceva de schimbat?" },
          { time: "2 min", task: "Cashflow check", details: "Sold cont, viramente asteptate, plati de facut" }
        ]
      }
    ]
  },
  {
    id: "7.4",
    title: "KPI-uri Saptamanale - Analiza de Duminica",
    sections: [
      {
        type: "text",
        title: "Zilnicul arata arbori, saptamanalul arata padurea",
        content: "Datele zilnice fluctueaza natural — o zi buna urmata de una proasta e normal. Analiza saptamanala iti arata trend-ul REAL: cresti sau scazi? Ce produs performa cel mai bine? Cat e profitul cumulat? Unde pierzi bani?\n\nDedica 30-45 minute duminica seara pentru analiza saptamanala. E investitia cea mai importanta de timp din toata saptamana."
      },
      {
        type: "keypoints",
        title: "Ce analizezi saptamanal",
        points: [
          { label: "1. Profit net total pe saptamana", text: "Suma profitului zilnic. E pe plus? Cat? Compara cu saptamana anterioara: creste, scade, sau stagneaza? Target: crestere saptamanala de cel putin 10-20%." },
          { label: "2. CPA mediu saptamanal per produs", text: "Media CPA-ului pe 7 zile per produs. E mai relevant decat CPA zilnic. Daca CPA saptamanal creste progresiv: ad fatigue, piata saturata, sau sezonalitate." },
          { label: "3. Rata de neridicate saptamanala", text: "Daca rata de neridicate creste saptamanal: verifica livrarea (mai lenta?), pretul (prea mare?), calitatea (nu corespunde asteptarilor?), confirmarea (SMS functional?)." },
          { label: "4. Top produs vs worst produs", text: "Identifica cel mai profitabil produs si cel mai neprofitabil. Aloca mai mult buget pe castigator, opreste sau optimizeaza perdantul." },
          { label: "5. Cashflow cumulat", text: "Total bani intrati (viramente curier + plati card) vs total bani iesiti (ads + COGS + fulfillment + alte costuri). Diferenta = cashflow net. Daca e negativ 2+ saptamani la rand: scaleaza in jos." },
          { label: "6. Creative performance", text: "Care creative-uri au cel mai bun CTR si CPA? Care trebuie inlocuite (CTR in scadere, frecventa mare)? Planifica creative-urile noi pentru saptamana urmatoare." },
          { label: "7. Plan saptamana urmatoare", text: "Ce produse testez? Ce creative-uri creez? Ce buget aloc? Ce optimizez? Scrie 3-5 actiuni concrete pentru saptamana urmatoare." }
        ]
      }
    ]
  },
  {
    id: "7.5",
    title: "ROAS Real vs ROAS Aparent - Diferenta Critica",
    sections: [
      {
        type: "text",
        title: "ROAS-ul din Ads Manager te minte",
        content: "Facebook/TikTok Ads Manager iti arata un ROAS care nu include: rata de neridicate (15-25% din comenzi nu se transforma in bani), costul de fulfillment, costul de curierat, costul de retur, si alte cheltuieli operationale.\n\nROAS REAL = Revenue EFECTIV INCASAT / Cost TOTAL (nu doar ads). Acesta e numarul care conteaza. ROAS 3x in Ads Manager poate insemna ROAS real de 1.5x (breakeven) sau chiar sub 1x (pierdere)."
      },
      {
        type: "comparison",
        title: "Exemplu: ROAS aparent vs real",
        headers: ["Metrica", "Ce arata Ads Manager", "Realitatea"],
        rows: [
          ["Revenue", "10.000 RON", "7.500 RON (dupa 25% neridicate)"],
          ["Ad Spend", "2.500 RON", "2.500 RON (la fel)"],
          ["ROAS (calcul simplu)", "4.0x", "3.0x"],
          ["Alte costuri", "Nu le stie", "COGS 2.500 + Fulfill 1.250 + Curier 1.000 + Neridicate 500 = 5.250 RON"],
          ["Cost TOTAL", "2.500 RON (doar ads)", "7.750 RON (toate costurile)"],
          ["Profit REAL", "Nu iti spune", "7.500 - 7.750 = -250 RON (PIERDERE!)"],
          ["ROAS REAL", "4.0x (iluzie)", "0.97x (pierzi bani)"]
        ]
      },
      {
        type: "tip",
        title: "Formula de breakeven ROAS",
        content: "Calculeaza-ti ROAS-ul minim la care esti pe zero (breakeven). Formula: Breakeven ROAS = Pret vanzare / (Pret vanzare - TOATE costurile per comanda FARA ads). Exemplu: Vanzare 149 RON. Costuri fara ads: COGS 35 + Fulfill 25 + Curier 20 + Neridicate ajustate 10 = 90 RON. Marja disponibila pentru ads: 149 - 90 = 59 RON. Breakeven ROAS = 149 / 59 = 2.53x. Orice ROAS real PESTE 2.53x = profit. Sub = pierdere. Calculeaza acest numar pentru FIECARE produs."
      }
    ]
  },
  {
    id: "7.6",
    title: "Blended COGS - Cum Calculezi Costul Real Per Produs",
    sections: [
      {
        type: "text",
        title: "COGS nu e doar pretul produsului",
        content: "COGS (Cost of Goods Sold) = costul TOTAL de a pune produsul in mana clientului. Include: pretul de achizitie de la furnizor, transport pana la fulfillment (daca e separat), ambalaj interior (daca adaugi ceva extra), si eventual costuri de customizare/branding.\n\nBlended COGS = media ponderata cand ai acelasi produs de la furnizori diferiti la preturi diferite, sau cand ai lot-uri cu costuri de transport diferite."
      },
      {
        type: "steps",
        title: "Calcul Blended COGS (exemplu)",
        steps: [
          "Lot 1: 100 bucati x 30 RON/buc (furnizor local) = 3.000 RON",
          "Lot 2: 200 bucati x 22 RON/buc (import China DDP) = 4.400 RON",
          "Total: 300 bucati, cost total 7.400 RON",
          "Blended COGS = 7.400 / 300 = 24.67 RON per bucata",
          "Acesta e COGS-ul pe care il pui in Profit Tracker — nu pretul cel mai mic sau cel mai mare, ci MEDIA reala"
        ]
      },
      {
        type: "tip",
        title: "Actualizeaza COGS-ul la fiecare lot nou",
        content: "Cand primesti un lot nou de produse la alt pret, recalculeaza blended COGS cu stocul ramas + lotul nou. Exemplu: mai ai 50 buc din lot 1 (30 RON) + primesti 200 buc lot 2 (22 RON). Blended nou = (50x30 + 200x22) / 250 = 23.6 RON. Pune noul COGS in Profit Tracker de a doua zi."
      }
    ]
  },
  {
    id: "7.7",
    title: "Dashboard Financiar - Vizualizarea Datelor",
    sections: [
      {
        type: "text",
        title: "Cifrele in tabel vs cifrele in grafic",
        content: "Un tabel cu 60 de randuri (una pe zi) e greu de citit. Un grafic care arata trend-ul profitului pe 60 de zile iti spune instant daca cresti sau scazi. In Profit Tracker-ul pe care ti-l voi genera, vei avea tab-uri separate cu grafice automate.\n\nCele mai utile grafice: Profit net zilnic (bar chart), CPA trend pe 30 zile (line chart), Revenue vs Cost total (dual bar chart), Rata neridicate trend (line chart)."
      },
      {
        type: "keypoints",
        title: "Cum citesti graficele",
        points: [
          { label: "Profit zilnic bar chart", text: "Barele verzi = zile profitabile. Barele rosii = zile pe pierdere. Daca vezi 3+ bare rosii consecutive: opreste si analizeaza imediat (nu astepta sfarsitul saptamanii)." },
          { label: "CPA trend line", text: "Linia creste = CPA se inrautateste (schimba creative-uri sau produse). Linia scade = CPA se imbunatateste (scaleaza). Linia plata = stabil (bun daca e sub target)." },
          { label: "Revenue vs Costuri", text: "Daca barele de costuri sunt mai inalte decat cele de revenue: pierzi bani. Distanta intre ele = profitul tau. Vrei distanta cat mai mare." },
          { label: "Rata neridicate trend", text: "Daca creste peste 25%: actiune imediata (verifici confirmarea SMS, viteza livrare, calitate produs). Daca scade sub 15%: excelent, poti scala mai agresiv." }
        ]
      }
    ]
  },
  {
    id: "7.8",
    title: "Checklist Tracking - Ai Tot ce Trebuie?",
    sections: [
      {
        type: "checklist",
        title: "Verifica inainte de a lansa primele ads",
        items: [
          { text: "Am Profit Tracker configurat (Google Sheets sau Excel)", critical: true },
          { text: "Stiu de unde iau fiecare data: Shopify, Ads Manager, raport curier", critical: true },
          { text: "Am calculat COGS-ul COMPLET per produs (nu doar pretul de achizitie)", critical: true },
          { text: "Am calculat Breakeven ROAS pentru fiecare produs", critical: true },
          { text: "Am setat alarma zilnica pentru completarea Profit Tracker", critical: true },
          { text: "Stiu diferenta intre ROAS aparent (Ads Manager) si ROAS real (Profit Tracker)", critical: true },
          { text: "Am template de analiza saptamanala (30 min duminica)", critical: false },
          { text: "Am inclus TOATE costurile: COGS, ads, fulfillment, curier, neridicate, contabilitate, apps", critical: true },
          { text: "Am coloana de cashflow (bani in cont vs bani de platit)", critical: false }
        ]
      },
      {
        type: "tip",
        title: "Modulul 8 — Cashflow & Finance",
        content: "Acum ca stii ce sa masori si cum, Modulul 8 iti arata cum gestionezi banii: cand reinvestesti, cum planifici bugetul, si ce face contabilul tau."
      }
    ]
  }
];

// ============================================================
// MODULE 4 — Magazin Online & Conversie (11 lectii)
// Cel mai actionable modul — fiecare lectie = IMPLEMENTEZI ceva
// ============================================================

COURSE_DATA.modules[3].lessons = [
  {
    id: "4.1",
    title: "Setup Shopify de la Zero - Cont, Tema, Domeniu",
    sections: [
      {
        type: "text",
        title: "De ce Shopify si nu altceva",
        content: "Shopify e platforma standard pentru e-commerce COD in Romania. Nu WooCommerce, nu Magento, nu custom. De ce? Are integrari native cu toate firmele de curierat romanesti (FanCourier, Sameday, Cargus). Suporta checkout COD out-of-the-box. Tema gratuita Dawn e suficienta pentru inceput. Uptime 99.98% - nu cade cand ai trafic mare de la ads. Poti scala de la 0 la 100.000 EUR/luna fara sa schimbi platforma.\n\nAlternative: Shopify e cel mai bun raport calitate/pret/simplitate pentru COD Romania. WooCommerce e mai ieftin dar mult mai complex tehnic. Alte platforme (Gomag, ContentSpeed) sunt ok dar au ecosistem mai mic de apps si integrari."
      },
      {
        type: "steps",
        title: "Setup pas cu pas (30-60 minute)",
        steps: [
          "Mergi pe shopify.com si creeaza cont. Foloseste email-ul de business (nu cel personal). Trial gratuit 3 zile, apoi plan Basic (29 USD/luna). TRICK: cauta Shopify 1 dollar 3 months - adesea au promotie de 1 USD/luna primele 3 luni.",
          "Prima setare: Settings > General. Pune numele magazinului, adresa (cea a SRL-ului), moneda RON, timezone Romania (UTC+2).",
          "Settings > Payments. Activeaza Cash on Delivery (Plata ramburs). Asta e metoda principala. Optional: activeaza si Stripe/PayPal pentru plata card (10-20% din clienti vor plati cu cardul).",
          "Settings > Shipping. Creeaza o zona de livrare Romania cu pret fix (ex: 14.99 RON sau GRATUIT peste o anumita valoare). NU pune transport gratuit sub 99 RON - pierzi marja.",
          "Settings > Checkout. Seteaza formularul sa ceara: Nume complet, Telefon (OBLIGATORIU), Adresa. Dezactiveaza crearea de cont (clientii COD nu vor cont). Bifez: Require phone number.",
          "Online Store > Themes. Instaleaza tema gratuita Dawn (cea mai performanta). Nu cumpara tema platita acum - Dawn e suficienta pentru primele 10.000 EUR revenue.",
          "Settings > Languages. Daca vrei site in romana: instaleaza o aplicatie de traducere sau editeaza manual limbajul din Customize theme > Language.",
          "Cumpara domeniu .ro (ex: pe rotld.ro, circa 10-12 EUR/an). Conecteaza-l: Settings > Domains > Connect existing domain. Un domeniu .ro inspira MULT mai multa incredere decat myshopify.com."
        ]
      },
      {
        type: "warning",
        title: "Greseli de setup care te costa bani",
        content: "Nu pune Transport GRATUIT la toate produsele daca vinzi sub 149 RON - transportul costa 18-25 RON, iti mananca marja. Solutie: Transport gratuit peste 149 RON sau transport fix 14.99 RON. Nu lasa site-ul in engleza - romanii nu au incredere in magazine in limba engleza. Traduce TOT: butoane, checkout, confirmare. Nu folosi domeniu .com daca vinzi doar in Romania - .ro e de 3-5x mai credibil."
      }
    ]
  },
  {
    id: "4.2",
    title: "Alegerea Numelui de Brand - Incredere din Prima Secunda",
    sections: [
      {
        type: "text",
        title: "Numele conteaza mai mult decat crezi",
        content: "Pe COD, increderea e totul. Clientul vede reclama, da click, ajunge pe site-ul tau - si in 3 secunde decide daca arata de incredere sau de teapa. Numele brandului e primul lucru pe care il vede.\n\nNu ai nevoie de un nume genial sau creativ. Ai nevoie de un nume care suna PROFESIONAL si ROMANESC. Clientii COD au incredere in magazine care par romanesti, stabilite, cu experienta."
      },
      {
        type: "comparison",
        title: "Nume BUNE vs PROASTE pentru COD Romania",
        headers: ["Bune (inspira incredere)", "Proaste (arata de teapa)"],
        rows: [
          ["CasaBuna.ro", "superdeals24shop.com"],
          ["MagazinulVerde.ro", "bestproducts-ro.myshopify.com"],
          ["ProdusulTau.ro", "amazing_deals_romania.com"],
          ["AtlasHome.ro", "xxl-shop-online123.ro"],
          ["SmartCasa.ro", "mega-reduceri-azi.ro"],
          ["NaturalShop.ro", "china-direct-romania.ro"]
        ]
      },
      {
        type: "keypoints",
        title: "5 reguli pentru numele de brand",
        points: [
          { label: "1. Scurt (2-3 cuvinte max)", text: "CasaBuna, SmartHome, VerdePure. Usor de retinut, usor de tastat, arata bine pe ambalaj si factura." },
          { label: "2. Relevant pentru nisa (optional)", text: "Daca vinzi produse de casa: CasaBuna. Daca vinzi diverse: un nume generic-profesional merge la fel de bine (Atlas, Primex, Nova)." },
          { label: "3. Domeniu .ro disponibil", text: "Verifica pe rotld.ro INAINTE de a te atasa de un nume. Daca .ro nu e disponibil, alege alt nume. Nu folosi .com sau .shop." },
          { label: "4. Fara cifre, liniute, sau caractere speciale", text: "shop-online-24.ro arata neprofesional. CasaBuna.ro arata ca un brand real." },
          { label: "5. Suna romanesc sau neutral-international", text: "Romanii au incredere in magazine care par romanesti. Evita nume care suna chinezesti sau prea americane." }
        ]
      },
      {
        type: "tip",
        title: "Hack rapid: nu pierde mai mult de 30 minute pe nume",
        content: "Numele brandului conteaza, dar nu e factorul decisiv. Alege un nume decent in 30 minute, cumpara domeniul, si treci mai departe. Poti oricand face rebrand mai tarziu cand ai revenue. Cel mai prost lucru e sa pierzi 3 zile alegand numele perfect in loc sa lansezi."
      }
    ]
  },
  {
    id: "4.3",
    title: "Anatomia Paginii de Produs Perfecte COD",
    sections: [
      {
        type: "text",
        title: "Pagina de produs face sau rupe vanzarea",
        content: "Ai platit pentru click (CPC). Clientul e pe pagina ta. Acum ai 5-15 secunde sa-l convingi sa completeze formularul de comanda. Pagina de produs e cel mai important element din tot business-ul tau dupa produs.\n\nPagina trebuie sa faca 3 lucruri simultan: sa ARATE profesional (incredere), sa EXPLICE clar beneficiile (convingere), si sa faca comanda USOARA (formular simplu, vizibil, fara frictiune).\n\nOrdine de prioritati: pe mobile (80% din trafic), clientul scrolleaza de sus in jos. Fiecare sectiune trebuie sa-l convinga sa continue scrolling-ul pana la butonul de comanda."
      },
      {
        type: "steps",
        title: "Structura paginii de produs — de sus in jos",
        steps: [
          "IMAGINE PRINCIPALA: Prima imagine = produsul in actiune (nu pe fond alb). Trebuie sa arate exact ce primeste clientul. Minim 4-5 imagini: produs in uz, produs din mai multe unghiuri, dimensiuni/scale, ambalaj, eventual before/after.",
          "TITLU PRODUS: Nu numele tehnic, ci BENEFICIUL principal. Nu: Organizator multifunctional 3-in-1. Da: Organizator de Bucatarie care Elibereaza Tot Blatul (3-in-1). Include cuvintele pe care le cauta clientii.",
          "PRET + ANCORA: Arata pretul BARAT (ex: 249 RON) si pretul redus (ex: 149 RON). Psihologie: clientul simte ca face o afacere. Sub pret: Transport GRATUIT sau Livrare rapida 1-3 zile.",
          "BUTON COMANDA #1: Vizibil fara scroll pe mobile. Text: COMANDA ACUM sau VREAU ACEST PRODUS. Culoare contrastanta (verde, portocaliu). Sub buton: Plata la livrare - nu platesti nimic acum.",
          "BENEFICII (3-5 bullet points): NU caracteristici tehnice. CI beneficii emotionale. Nu: Material ABS plastic 3mm. Da: Ultra-rezistent - nu se sparge chiar daca cade. Foloseste iconite/emoji pentru scanabilitate.",
          "DEMONSTRATIE VIZUALA: GIF sau video scurt in pagina care arata produsul in actiune. Acesta e cel mai important element de conversie dupa imagini. Un GIF de 5 secunde care arata transformarea/beneficiul.",
          "DOVADA SOCIALA: Recenzii (minim 10-15 recenzii cu note si text). Poze de la clienti (chiar daca sunt de pe AliExpress la inceput - da, toata lumea face asta). Numar de clienti multumiti (1.847 clienti multumiti).",
          "SECTIUNE DETALII: Descriere mai lunga cu beneficii detaliate. Include: pentru cine e ideal, ce problema rezolva, ce primesti in pachet, specificatii tehnice (dimensiuni, greutate, material).",
          "FAQ (3-5 intrebari frecvente): Cum platesc? (Ramburs la curier), Cat dureaza livrarea? (1-3 zile lucratoare), Pot returna? (Da, in 14 zile). Raspunde obiectiilor INAINTE sa le gandeasca clientul.",
          "BUTON COMANDA #2: Dupa FAQ, un al doilea buton de comanda. Multi clienti scrolleaza tot si comanda de jos. Acelasi text, aceeasi culoare.",
          "URGENTA/SCARCITY (optional): Stoc limitat - mai sunt doar 23 bucati. Sau: Oferta valabila doar azi. NU exagera - daca mereu arati 3 bucati in stoc, clientii prind Pattern-ul."
        ]
      },
      {
        type: "warning",
        title: "Cele mai comune greseli pe pagina de produs",
        content: "O singura imagine (sau imagini proaste de pe AliExpress cu watermark chinezesc). Descriere de 2 randuri fara beneficii. Zero recenzii. Buton de comanda abia vizibil. Text in engleza sau romana stricata. Fara pret barat (ancora). Fara mentionarea platii la livrare. Pagina care se incarca lent (peste 3 secunde = pierzi 50% din vizitatori)."
      }
    ]
  },
  {
    id: "4.4",
    title: "Copywriting pentru Pagina de Produs - Cuvintele care Vand",
    sections: [
      {
        type: "text",
        title: "Nu scrii descrieri — scrii argumente de vanzare",
        content: "Copywriting-ul pe o pagina de produs COD nu e literatura. E persuasiune pura. Fiecare cuvant trebuie sa impinga clientul catre butonul de comanda. Regula de aur: vorbeste despre CLIENT, nu despre produs. Clientul nu cumpara un organizator de bucatarie — cumpara un blat curat si ordonat.\n\nFormula magica: PROBLEMA clientului + SOLUTIA ta + DOVADA ca functioneaza + ACTIUNE (comanda acum)."
      },
      {
        type: "keypoints",
        title: "Tehnici de copywriting care functioneaza pe COD Romania",
        points: [
          { label: "1. Beneficii > Caracteristici (INTOTDEAUNA)", text: "GRESIT: Capacitate 2L, motor 800W, 3 viteze. CORECT: Faci smoothie perfect in 30 de secunde, silentios ca o soapta, se curata singur sub jet de apa. Transforma fiecare caracteristica tehnica in beneficiu pentru client." },
          { label: "2. Formula PAS (Problem - Agitate - Solve)", text: "Problem: Blatul de bucatarie e mereu plin si dezordonat? Agitate: Pierzi timp cautand lucruri, arata rau cand vin musafiri, si te streseaza zilnic. Solve: Organizatorul X iti pune totul la locul lui in 2 minute, fara gauri in perete." },
          { label: "3. Dovada sociala integrata in text", text: "Nu pune recenziile doar jos. Integreaza-le in copy: Peste 2.000 de familii din Romania folosesc deja acest organizator. Sau: Maria din Cluj: De cand l-am montat, bucataria mea arata ca noua." },
          { label: "4. Urgenta reala (nu fake)", text: "BUN: Pretul promotional e valabil doar pana la sfarsitul lunii. RAU: Mai sunt doar 2 in stoc (cand de fapt ai 500). Clientii romani sunt destepti - daca vad urgenta fake, pierd increderea." },
          { label: "5. Limbaj simplu, direct, conversational", text: "Scrie ca si cum ai vorbi cu un prieten. Nu: Acest produs revolutionar integreaza tehnologie de ultima generatie. DA: Asta e chestia aia pe care o vezi la toti pe TikTok - si chiar functioneaza." },
          { label: "6. Bullet points cu emoji", text: "Ochiul scanneaza pagina, nu citeste tot. Foloseste bullet points cu emoji-uri pentru beneficii: Livrare in 1-3 zile, Plata la curier, Garantie 30 zile retur, Material premium rezistent." }
        ]
      },
      {
        type: "tip",
        title: "Template de descriere produs (copiaza si adapteaza)",
        content: "TITLU: [Beneficiul principal] - [Numele produsului]\n\n[1 paragraf scurt: problema pe care o rezolva]\n\nDe ce [Produs] e diferit:\n- [Beneficiu 1 cu emoji]\n- [Beneficiu 2 cu emoji]\n- [Beneficiu 3 cu emoji]\n- [Beneficiu 4 cu emoji]\n\n[1 paragraf: dovada sociala - cati clienti, recenzie scurta]\n\nCe primesti in pachet:\n- [Element 1]\n- [Element 2]\n- [Bonus daca e cazul]\n\nComanzi azi? Primesti [avantaj: transport gratuit / cadou / reducere].\n\n[Buton COMANDA ACUM]"
      }
    ]
  },
  {
    id: "4.5",
    title: "Imagini de Produs care Convertesc - Ghid Complet",
    sections: [
      {
        type: "text",
        title: "Imaginile fac 70% din decizia de cumparare",
        content: "Pe o pagina de produs, clientul se uita la imagini INAINTE de a citi orice text. Daca imaginile arata de amator, clientul pleaca in 2 secunde. Daca imaginile arata profesional, continua sa citeasca.\n\nNU trebuie sa fii fotograf profesionist. Trebuie sa ai imagini CLARE, CURATE, si care arata produsul in CONTEXT (in uz, nu pe fond alb). Un telefon cu camera buna + lumina naturala + background curat = suficient pentru inceput."
      },
      {
        type: "steps",
        title: "Cele 6 tipuri de imagini obligatorii",
        steps: [
          "HERO IMAGE (prima imagine): Produsul in actiune/context. NU pe fond alb. Arata-l folosit de o persoana sau in mediul natural (bucatarie, masina, birou). Aceasta imagine apare in reclame si in rezultatele de cautare.",
          "IMAGINI DIN MAI MULTE UNGHIURI: Minim 3 unghiuri diferite. Fata, spate, lateral. Clientul vrea sa vada TOT ce primeste. Daca produsul are detalii importante (textura, buton, conectori), close-up pe ele.",
          "IMAGINE DIMENSIUNI / SCALA: Arata produsul langa un obiect cunoscut (mana, telefon, sticla de apa) ca sa inteleaga dimensiunea. Multi clienti returneaza pentru ca nu era cat credeau.",
          "IMAGINE BEFORE/AFTER sau IN UZ: Cea mai puternica imagine de conversie. Arata transformarea: inainte de produs (haos) vs dupa produs (ordine). Sau: fara produs (problema) vs cu produs (solutia).",
          "IMAGINE INFOGRAPHIC / BENEFICII: O imagine cu 3-5 beneficii cheie scrise pe ea, cu sageti care arata features. Canva.com (gratuit) e perfect pentru asta. Template-uri gata facute.",
          "IMAGINE CE PRIMESTI IN PACHET: Flat lay cu tot ce e in cutie. Produsul + accesorii + manual daca e cazul. Clientul vrea sa stie EXACT ce primeste."
        ]
      },
      {
        type: "keypoints",
        title: "De unde obtii imaginile",
        points: [
          { label: "De la furnizor", text: "Cere pack de imagini profesionale. Majoritatea furnizorilor de pe Alibaba au imagini HD gata facute. Problema: si competitorii tai au aceleasi imagini. Diferentiaza-te cu infographic-uri proprii." },
          { label: "Faci singur cu telefonul", text: "Lumina naturala (langa fereastra), background alb sau curat, telefon cu camera buna. Faci 20-30 poze din toate unghiurile, alegi cele mai bune 6-8. Editezi in Canva sau Lightroom Mobile (gratuit)." },
          { label: "Canva pentru infographic-uri", text: "Canva.com (plan gratuit e suficient). Ia imaginea produsului, adauga text cu beneficii, sageti, iconite. Rezultatul arata profesional in 15-20 minute." },
          { label: "GIF-uri demonstrative", text: "Cele mai puternice elemente de conversie. Cum faci: filmeaza 5-10 secunde de video cu produsul in actiune, converteste in GIF (ezgif.com, gratuit). Upload-ul GIF in Shopify e direct in sectiunea de imagini." }
        ]
      },
      {
        type: "warning",
        title: "Imagini care UCID conversiile",
        content: "Imagini cu watermark chinezesc (Alibaba, 1688, AliExpress). Imagini blurate sau cu rezolutie mica. O singura imagine pe fond alb (arata ca un listing de en-gros, nu ca un magazin real). Imagini cu text in engleza pe un site romanesc. Imagini stock generice care nu arata produsul real. Regula: daca imaginile tale arata ca pe AliExpress, clientul va cumpara de pe AliExpress."
      }
    ]
  },
  {
    id: "4.6",
    title: "Checkout COD Optimizat - Formularul care Maximizeaza Comenzile",
    sections: [
      {
        type: "text",
        title: "Checkout-ul e ultima bariera",
        content: "Clientul a vazut reclama, a dat click, i-a placut produsul, si acum e la checkout. Orice frictiune in acest moment = comanda pierduta. Pe COD, checkout-ul trebuie sa fie ULTRA-SIMPLU: cat mai putine campuri, cat mai clar, cat mai rapid.\n\nRegula: fiecare camp suplimentar in formular reduce conversiile cu 5-10%. Cere DOAR ce e strict necesar pentru livrare."
      },
      {
        type: "keypoints",
        title: "Formularul COD perfect - doar 4-5 campuri",
        points: [
          { label: "1. Nume complet", text: "Un singur camp, nu separat Prenume + Nume. Mai putin intimidant, mai rapid de completat." },
          { label: "2. Numar de telefon (OBLIGATORIU)", text: "Cel mai important camp. Curierul suna inainte de livrare. Fara telefon = colet neridicabil. Seteaza in Shopify: Settings > Checkout > Customer contact: Phone number required." },
          { label: "3. Adresa completa", text: "Strada, numar, bloc/scara/apartament, oras, judet. Un singur camp textarea mare e mai bine decat 5 campuri separate. Clientul scrie cum stie el, fulfillment-ul interpreteaza." },
          { label: "4. Email (optional)", text: "E bine sa-l ai (pentru tracking si email marketing), dar nu-l face obligatoriu. Unii clienti COD nu au sau nu vor sa dea email. Mai bine o comanda fara email decat zero comenzi." },
          { label: "5. Metoda de plata", text: "Preselecteaza Cash on Delivery. Daca ai si card: pune ambele optiuni dar COD bifat default. Text sub optiunea COD: Platesti cand primesti coletul - 0 risc." }
        ]
      },
      {
        type: "steps",
        title: "Optimizari checkout care cresc conversiile",
        steps: [
          "Rezumat comanda vizibil: arata produsul, pretul, si ce primeste clientul chiar in checkout. Clientul nu trebuie sa se intoarca sa verifice.",
          "Badge-uri de incredere sub formular: Livrare in 1-3 zile, Plata la curier, Retur gratuit 14 zile, Peste 2.000 clienti multumiti.",
          "Progress bar: Pasul 1 din 2 sau Aproape gata! - da clientului senzatia ca e rapid.",
          "Auto-fill judet din cod postal: daca poti, implementeaza auto-detect. Reduce erorile si timpul de completare.",
          "Butonul de confirmare: Text clar - FINALIZEAZA COMANDA sau TRIMITE COMANDA. NU Proceed sau Submit. Sub buton: Nu platesti nimic acum.",
          "Thank You page: Dupa comanda, arata: Comanda ta a fost inregistrata! + rezumat + Vei fi contactat in max 2 ore pentru confirmare. + eventual upsell (Adauga si [produs complementar] cu 30% reducere)."
        ]
      },
      {
        type: "tip",
        title: "Aplicatii Shopify recomandate pentru checkout COD",
        content: "COD Confirmation (gratuita/ieftina): Adauga pagina de confirmare COD optimizata. Releasit COD Form: Formular COD simplificat cu mai putine campuri. EasyOrder COD: Comanda cu un singur click, direct de pe pagina de produs. PageFly sau GemPages: Page builders care iti permit sa customizezi checkout-ul vizual. IMPORTANT: Nu instala 20 de aplicatii. 2-3 aplicatii esentiale sunt suficiente. Fiecare app incetineste site-ul."
      }
    ]
  },
  {
    id: "4.7",
    title: "Thank You Page si Upsell Post-Comanda",
    sections: [
      {
        type: "text",
        title: "Comanda plasata NU inseamna ca s-a terminat",
        content: "Thank You page e cea mai ignorata oportunitate de venituri. Clientul tocmai a comandat - e in peak de incredere si entuziasm. Acesta e momentul PERFECT pentru: upsell (adauga un produs complementar), cross-sell (produse similare), si reducerea ratei de neridicate (confirma ca a facut o alegere buna)."
      },
      {
        type: "keypoints",
        title: "Ce trebuie sa contina Thank You page",
        points: [
          { label: "1. Confirmare clara", text: "Mesaj mare, verde: Comanda ta #1234 a fost inregistrata cu succes! Rezumat: ce a comandat, pretul, adresa. Clientul trebuie sa stie ca totul e in ordine." },
          { label: "2. Ce urmeaza", text: "Vei primi un SMS de confirmare in urmatoarele 2 ore. Comanda va fi expediata in 24h. Livrare estimata: 1-3 zile lucratoare. Acest text REDUCE neridicarile - clientul stie ce sa astepte." },
          { label: "3. Upsell (optional dar profitabil)", text: "Ai comandat [Produs]? Clientii care au cumparat acest produs au luat si [Produs complementar] cu 30% reducere! Doar 49 RON in loc de 69 RON - adauga la comanda. Conversie upsell tipica: 5-15% din clienti adauga." },
          { label: "4. Social proof final", text: "Te-ai alaturat celor 2.347 de clienti multumiti! Sau: Produsul tau este pe drumul cel bun. Intareste decizia de cumparare - reduce remorse-ul si neridicarile." }
        ]
      },
      {
        type: "tip",
        title: "Calculul impactului upsell",
        content: "Sa zicem ca ai 100 comenzi/luna la valoare medie 149 RON. Daca 10% accepta upsell de 49 RON: 10 x 49 = 490 RON revenue extra/luna. La un COGS de 15 RON pe upsell: 340 RON profit extra fara niciun cost de ads suplimentar. Inmulteste cu 6 luni si ai 2.040 RON profit extra doar din upsell. La 500 comenzi/luna (target pentru 10.000 EUR): upsell-ul singur poate aduce 1.700 RON profit extra/luna."
      }
    ]
  },
  {
    id: "4.8",
    title: "Pagini Legale Obligatorii - Termeni, Retur, GDPR",
    sections: [
      {
        type: "text",
        title: "Fara pagini legale = risc real",
        content: "Sunt 4 pagini pe care TREBUIE sa le ai pe site inainte de prima vanzare. Nu sunt optionale - sunt cerinte legale (OUG 34/2014, GDPR) si lipsa lor poate duce la: amenzi ANPC (pana la 100.000 RON), pierderea increderii clientilor, si imposibilitatea de a rula reclame pe Facebook (Facebook verifica paginile legale)."
      },
      {
        type: "keypoints",
        title: "Cele 4 pagini obligatorii",
        points: [
          { label: "1. Termeni si Conditii", text: "Include: datele firmei (nume SRL, CUI, adresa, email, telefon), obiectul activitatii, preturile si moneda, modalitati de plata acceptate, procesul de comanda si confirmare, dreptul de retragere (14 zile conform OUG 34/2014). IMPORTANT: datele firmei trebuie sa fie REALE si verificabile." },
          { label: "2. Politica de Retur", text: "Conform legii romane, clientul are drept de retragere in 14 zile calendaristice de la primirea produsului, FARA sa dea motiv. Tu suporti costul returului DOAR daca produsul e defect. Daca clientul pur si simplu nu il mai vrea, el plateste transportul de retur. Explica procedura clar: cum contacteaza, cum trimite inapoi, cat dureaza rambursarea." },
          { label: "3. Politica de Confidentialitate (GDPR)", text: "Ce date colectezi (nume, telefon, adresa, email). De ce le colectezi (procesare comanda, livrare). Cat timp le pastrezi. Cu cine le impartasesti (curier, fulfillment, contabil). Drepturile clientului (acces, stergere, rectificare). Contact DPO sau email pentru cereri GDPR." },
          { label: "4. Politica Cookies", text: "Ce cookies foloseste site-ul (Shopify analytics, Facebook Pixel, Google Analytics). Banner de cookies vizibil la prima vizita cu optiunile: Accept toate / Doar esentiale / Personalizare. Aplicatii Shopify gratuite care adauga banner: GDPR Cookie Consent, Pandectes." }
        ]
      },
      {
        type: "tip",
        title: "Hack: nu scrie paginile legale de la zero",
        content: "Cauta Shopify legal pages generator Romania sau Termeni si Conditii generator e-commerce Romania. Exista generatoare gratuite care iti creeaza structura - tu doar completezi datele firmei. Alternativ: cere-mi sa ti le generez complet - iti fac toate 4 paginile personalizate pe numele firmei tale."
      }
    ]
  },
  {
    id: "4.9",
    title: "Viteza Site-ului si Optimizare Mobile",
    sections: [
      {
        type: "text",
        title: "80% din clientii tai sunt pe telefon",
        content: "Pe COD Romania, 75-85% din trafic vine de pe mobile (Facebook/TikTok = mobile-first). Daca site-ul tau arata prost sau se incarca lent pe telefon, pierzi majoritatea clientilor.\n\nRegula: site-ul trebuie sa se incarce complet in sub 3 secunde pe 4G. Fiecare secunda suplimentara reduce conversiile cu ~7%. La 5 secunde, 50% din vizitatori au plecat."
      },
      {
        type: "keypoints",
        title: "Cum optimizezi viteza si experienta mobile",
        points: [
          { label: "1. Tema Dawn (gratuita) e cea mai rapida", text: "Dawn e construita de Shopify pentru performance. Daca folosesti alta tema, testeaz-o pe Google PageSpeed Insights (pagespeed.web.dev). Scor sub 50 pe mobile = problema." },
          { label: "2. Comprima imaginile", text: "Toate imaginile sub 200KB. Format: WebP (cel mai rapid) sau JPEG comprimat. Tool gratuit: tinypng.com. Upload imagini la rezolutia maxima de 2000x2000px - mai mult e inutil." },
          { label: "3. Dezinstaleaza app-urile nefolosite", text: "Fiecare app Shopify adauga cod JavaScript care incetineste site-ul. Daca nu folosesti o app activ, dezinstaleaz-o. Optimal: 3-5 app-uri active maxim." },
          { label: "4. Testeaza pe telefonul tau", text: "Deschide site-ul pe telefonul tau (nu pe desktop). Parcurge tot flow-ul: pagina produs > adauga in cos > checkout > comanda. Orice e greu de apasat, greu de citit, sau lent = fix it." },
          { label: "5. Lazy loading imagini", text: "Imaginile de jos se incarca doar cand clientul scrolleaza pana acolo. Dawn face asta by default. Verifica: daca scrollezi repede si vezi imagini care se incarca brusc, e lazy loading activ (bun)." }
        ]
      },
      {
        type: "tip",
        title: "Test rapid de viteza",
        content: "Mergi pe pagespeed.web.dev si pune URL-ul paginii tale de produs. Target: scor 60+ pe mobile (90+ e excelent dar greu de atins cu Shopify). Daca ai sub 40: comprima imagini, dezinstaleaza app-uri, si schimba la tema Dawn."
      }
    ]
  },
  {
    id: "4.10",
    title: "Matematica celor 10.000 EUR - Reverse Engineering",
    sections: [
      {
        type: "text",
        title: "Cat trebuie sa vinzi ca sa faci 10.000 EUR profit in 2 luni",
        content: "Hai sa facem matematica invers. Plecam de la obiectiv (10.000 EUR profit in 60 zile) si calculam ce trebuie sa se intample ca sa ajungi acolo. Disclaimer: 10.000 EUR in primele 2 luni e un obiectiv AMBITIOS dar nu imposibil. Necesita: produs castigator gasit rapid, buget de ads suficient, executie excelenta pe fiecare pilon.\n\n10.000 EUR = ~50.000 RON profit net in 60 zile = ~833 RON profit net pe zi."
      },
      {
        type: "comparison",
        title: "Reverse engineering: numerele necesare",
        headers: ["Metrica", "Valoare necesara", "Cum obtii"],
        rows: [
          ["Profit net target/zi", "833 RON", "50.000 RON / 60 zile"],
          ["Pret mediu vanzare", "149 RON", "Sweet spot COD Romania"],
          ["Marja neta per comanda", "~35-40 RON", "Dupa COGS + ads + fulfillment + curier + neridicate"],
          ["Comenzi livrate/zi necesare", "21-24 comenzi", "833 RON / 35-40 RON marja"],
          ["Comenzi plasate/zi (cu 20% neridicate)", "26-30 comenzi", "24 livrate / 0.80 = 30 plasate"],
          ["Vizitatori necesari/zi (la 4% conversie)", "650-750 vizitatori", "30 comenzi / 0.04 = 750"],
          ["CPC mediu", "0.25-0.35 EUR", "Normal pentru Romania pe Facebook"],
          ["Buget ads/zi necesar", "190-260 EUR", "750 clickuri x 0.30 EUR"],
          ["Buget ads TOTAL pe 60 zile", "11.400-15.600 EUR", "Creste progresiv, nu de la inceput"],
          ["Revenue total pe 60 zile", "~270.000 RON (~54.000 EUR)", "30 comenzi x 149 RON x 60 zile"],
          ["ROAS necesar", "~3.5x", "Revenue / Ad spend"]
        ]
      },
      {
        type: "warning",
        title: "Realitatea: nu vei fi la aceste numere din ziua 1",
        content: "Primele 2-3 saptamani sunt de INVATARE si TESTARE. Numerele de mai sus sunt targeturi pentru saptamana 5-8, nu pentru ziua 1. Plan realist: Saptamana 1-2: 0-5 comenzi/zi (testezi produse, inveti). Saptamana 3-4: 5-15 comenzi/zi (ai gasit 1-2 produse care merg). Saptamana 5-6: 15-25 comenzi/zi (scalezi ce merge). Saptamana 7-8: 25-40 comenzi/zi (scalare agresiva pe castigatori). Acumulat pe 60 zile, POTI ajunge la 50.000 RON profit daca totul se aliniaza. Dar e un stretch goal, nu o garantie."
      },
      {
        type: "tip",
        title: "Cheia realista: 2-3 produse castigatoare simultane",
        content: "Rar un singur produs iti aduce 10.000 EUR profit in 2 luni. Mai realist: 2-3 produse castigatoare care fac fiecare 10-15 comenzi/zi. Diversificarea reduce riscul (daca un produs se satureaza, celelalte compenseaza) si iti permite sa testezi in paralel."
      }
    ]
  },
  {
    id: "4.11",
    title: "Checklist Magazin Complet - Ready to Launch",
    sections: [
      {
        type: "checklist",
        title: "Bifeaza TOATE inainte de a lansa prima reclama",
        items: [
          { text: "Cont Shopify activ cu plan Basic sau promotie 1 USD", critical: true },
          { text: "Domeniu .ro cumparat si conectat", critical: true },
          { text: "Tema Dawn instalata si customizata (logo, culori, font)", critical: true },
          { text: "Setari: moneda RON, timezone Romania, limba romana", critical: true },
          { text: "Checkout: COD activat, telefon obligatoriu, formular simplificat", critical: true },
          { text: "Shipping: zona Romania cu pret fix sau gratuit peste X RON", critical: true },
          { text: "Pagina de produs #1 completa: 5+ imagini, copy persuasiv, pret cu ancora, recenzii", critical: true },
          { text: "GIF sau video demonstrativ pe pagina de produs", critical: false },
          { text: "Buton COMANDA ACUM vizibil fara scroll pe mobile", critical: true },
          { text: "Pagini legale: Termeni, Retur, GDPR, Cookies", critical: true },
          { text: "Thank You page cu confirmare + upsell optional", critical: false },
          { text: "Site testat pe mobile (flow complet: produs > checkout > comanda)", critical: true },
          { text: "Viteza: pagespeed.web.dev scor 50+ pe mobile", critical: false },
          { text: "Favicon si logo setate (nu apare Shopify default)", critical: false },
          { text: "Email de contact functional pe site", critical: true },
          { text: "Facebook Pixel instalat si verificat (Events Manager)", critical: true },
          { text: "Test comanda: am facut o comanda de test si totul functioneaza", critical: true }
        ]
      },
      {
        type: "tip",
        title: "Gata? Trecem la Modulul 5 - Facebook & TikTok Ads",
        content: "Daca ai magazinul complet si pagina de produs gata, urmatorul pas e sa aduci trafic. Modulul 5 te invata exact cum sa lansezi primele campanii, sa testezi, si sa scalezi. Aici incepe sa curga banul."
      }
    ]
  }
];

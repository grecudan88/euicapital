import type { Locale } from "./locales";

/**
 * All page copy, in one place per locale.
 *
 * The `Copy` type is derived from the Romanian object, so adding a string to
 * `ro` without adding it to `en` is a compile error, not a missing paragraph
 * discovered in production.
 */

const ro = {
  ui: {
    bookCall: "Programează o discuție",
    openMenu: "Deschide meniul",
    closeMenu: "Închide meniul",
    skipToContent: "Sari la conținut",
    home: "Acasă",
    contact: "Contact",
    language: "Limbă",
    allServices: "Toate serviciile",
    allResults: "Toate rezultatele",
    company: "Companie",
    programmes: "Programe",
    privacy: "Confidențialitate",
    terms: "Termeni",
    rightsReserved: "Toate drepturile rezervate.",
    regCui: "CUI",
    regCom: "Nr. Reg. Com.",
    regOffice: "Sediu social",
    disclaimer:
      "European iCapital Advisory SRL este o societate de consultanță privată și independentă. Nu este afiliată, avizată sau împuternicită de Uniunea Europeană, de Comisia Europeană sau de vreo altă instituție, organism sau agenție a Uniunii. Sumele prezentate sunt orientative și se supun condițiilor din programul de lucru și din documentația apelului aplicabil.",
  },

  home: {
    metaTitle: "Consultanță fonduri europene",
    eyebrow: "Consultanță independentă în fonduri europene",
    titleLine1: "Europa are banii.",
    titleLine2: "Noi vă ajutăm să îi câștigați.",
    lede: "În fiecare ciclu bugetar trec prin programele europene peste o mie de miliarde de euro. Cea mai mare parte ajunge la organizațiile care au înțeles regulile din timp. EUI Capital identifică instrumentul potrivit pentru proiectul vostru, scrie aplicația și gestionează grantul după câștigare.",
    ctaPrimary: "Discuție gratuită de eligibilitate",
    ctaSecondary: "Vezi programele",

    problemEyebrow: "De ce pică aplicațiile",
    problemTitle: "Patru motive pentru care proiecte bune rămân nefinanțate",
    problemLede:
      "Niciunul nu ține de calitatea ideii. Fiecare se rezolvă cu pregătire.",
    frictions: [
      {
        title: "Apelul vă găsește prea târziu",
        body: "Când un apel relevant devine cunoscut public, cei bine pregătiți lucrează la el de luni de zile. Poziționarea începe înainte de publicare.",
      },
      {
        title: "Eligibilitatea se decide în detalii",
        body: "Tipul entității, regiunea, nivelul TRL, intensitatea ajutorului, geografia partenerilor. O singură nepotrivire scoate din competiție un proiect altfel excelent.",
      },
      {
        title: "Evaluatorii punctează, nu citesc",
        body: "Aplicațiile se notează pe o grilă publicată. Textul care nu se leagă de un criteriu nu aduce niciun punct, oricât de bine ar fi scris.",
      },
      {
        title: "Câștigarea este începutul obligației",
        body: "Raportarea, pontajele, regulile de achiziție și pista de audit decid dacă banii rămân ai voștri. Cele mai multe recuperări de fonduri au cauze administrative.",
      },
    ],

    servicesEyebrow: "Ce facem",
    servicesTitle: "De la cap la coadă, sau exact partea de care aveți nevoie",
    servicesLede:
      "Majoritatea clienților încep cu o etapă de strategie și rămân cu noi până la implementare. Alții ne cheamă cu opt săptămâni înainte de termen. Ambele variante funcționează.",

    programmesEyebrow: "Instrumentele cu care lucrăm",
    programmesTitle: "Nouă rute majore către finanțarea europeană",
    programmesLede:
      "Granturi directe de la Bruxelles, bani în gestiune partajată din regiunea voastră și marile instrumente de infrastructură dintre ele.",

    processEyebrow: "Cum lucrăm",
    processTitle: "Un proces construit în jurul unor termene care nu se mișcă",
    processLede:
      "Apelurile europene se închid la o oră fixă. Tot ce facem este programat în sens invers, pornind de la acel moment.",
    processCta: "Vezi metoda completă",
    steps: [
      {
        label: "Săptămâna 1",
        title: "Discuție de eligibilitate",
        body: "Patruzeci și cinci de minute despre proiect, despre entitate și despre calendar. Plecați știind dacă finanțarea europeană este realistă și ce instrumente vi se potrivesc.",
      },
      {
        label: "Săptămânile 2–3",
        title: "Harta de finanțare",
        body: "O listă scurtă și ierarhizată de apeluri, cu termene, rate de cofinanțare, note de eligibilitate și o estimare onestă a șanselor pentru fiecare.",
      },
      {
        label: "Săptămânile 4–12",
        title: "Construim și depunem",
        body: "Scriem proiectul, construim consorțiul dacă e nevoie, întocmim bugetul și facem două runde de verificare pe grila de punctaj.",
      },
      {
        label: "După contractare",
        title: "Implementare și raportare",
        body: "Contract de finanțare, raportare periodică, acte adiționale și pregătire pentru audit, pe toată durata proiectului.",
      },
    ],

    resultsEyebrow: "Proiecte selectate",
    resultsTitle: "Cum arată munca în practică",

    ctaTitle: "Spuneți-ne despre proiect. Vă spunem dacă este finanțabil.",
    ctaLede:
      "Fără obligații și fără prezentări elaborate. Dacă nu există o rută realistă, vă spunem din prima discuție.",
    ctaPrimaryLabel: "Începeți o discuție",
    ctaSecondaryLabel: "Citiți studiile de caz",
  },

  services: {
    metaTitle: "Servicii",
    metaDescription:
      "Strategie de finanțare, redactare de proiecte, construirea consorțiului, management de grant, audit și redepunere pentru solicitanții de fonduri europene.",
    eyebrow: "Servicii",
    title: "Șase moduri în care ne implicăm",
    lede: "Ne puteți angaja pentru întregul ciclu sau doar pentru etapa în care echipa voastră nu mai are capacitate. Fiecare colaborare are un obiect definit, un tarif fix și un responsabil desemnat.",
    deliverablesLabel: "Ce primiți",
    durationLabel: "Durată tipică:",
    closingTitle: "Nu știți de care aveți nevoie?",
    closingLede:
      "Descrieți proiectul în câteva rânduri. Vă răspundem cu etapa de la care am începe și cu costul acesteia.",
    closingCta: "Scrieți-ne",
  },

  programmes: {
    metaTitle: "Programe de finanțare europeană",
    metaDescription:
      "Orizont Europa, Europa Digitală, FEDR, FSE+, LIFE, MIE, Fondul pentru Inovare, Interreg și dezvoltare rurală — ce finanțează fiecare instrument și cine este eligibil.",
    eyebrow: "Programe",
    title: "Instrumentele și cui i se potrivește fiecare",
    lede: "Două lucruri decid unde se încadrează proiectul vostru: ce construiți și cine administrează banii. Filtrați după temă sau după modul de gestiune.",
    searchLabel: "Căutare",
    searchPlaceholder: "ex. hidrogen, formare, investiții IMM",
    managementLabel: "Mod de gestiune",
    managementAll: "Toate",
    managementDirect: "Directă",
    managementShared: "Partajată",
    themeAll: "Toate temele",
    showing: (shown: number, total: number) =>
      `Se afișează ${shown} din ${total} programe`,
    emptyTitle: "Niciun program nu corespunde acestor filtre",
    emptyBody: "Încercați o căutare mai largă sau",
    emptyLink: "întrebați-ne direct",
    emptyBodyEnd: "— nu toate schemele naționale și regionale sunt listate aici.",
    budgetLabel: "Buget",
    coFundingLabel: "Cofinanțare",
    detailLink: "Detalii program",
    asideTitle: "Gestiune directă sau partajată — de ce contează",
    asideDirect:
      "Gestiunea directă înseamnă că apelul este derulat chiar de Comisia Europeană sau de una dintre agențiile sale executive. Un singur set de reguli, un singur portal, un singur termen și competiție la nivelul întregii Uniuni. Punctajele sunt de regulă comunicate într-un raport de evaluare.",
    asideShared:
      "Gestiunea partajată înseamnă că banii sunt alocați statului membru sau regiunii, care stabilește propriile apeluri, formulare, limbă și punctaje. Competiția este mai mică, birocrația este locală, iar regulile de ajutor de stat decid de obicei intensitatea maximă a finanțării.",
    asideNote:
      "Cifrele de pe această pagină sunt alocări orientative pentru cadrul financiar multianual 2021–2027 și sunt rotunjite. Verificați întotdeauna programul de lucru și documentația apelului înainte de a lua o decizie.",
    howItWorks: "Cum funcționează programul",
    whereApplicantsLose: "Unde pierd solicitanții",
    bestSuited: "Potrivit în special pentru",
    factBudget: "Buget orientativ",
    factManaged: "Gestionat de",
    factCoFunding: "Rată de cofinanțare",
    factTypical: "Valoare tipică a grantului",
    sidebarTitle: (acronym: string) => `Vi se potrivește ${acronym}?`,
    sidebarBody:
      "Trimiteți-ne o descriere scurtă a proiectului. Vă spunem dacă acest instrument se potrivește și care este alternativa mai bună dacă nu.",
    sidebarCta: "Cereți o evaluare",
    alsoIn: (category: string) => `Tot în ${category}`,
    managementTag: (mode: string) => `Gestiune ${mode.toLowerCase()}`,
  },

  process: {
    metaTitle: "Cum lucrăm",
    metaDescription:
      "Metoda noastră pentru aplicațiile de fonduri europene: verificarea eligibilității, harta de finanțare, redactare, depunere și implementare după contractare.",
    eyebrow: "Cum lucrăm",
    title: "Programat invers, de la un termen care nu se mișcă",
    lede: "Apelurile europene se închid la o oră fixă, într-o zi fixă. Tot ce urmează este planificat pornind de la acel moment înapoi și de aceea refuzăm colaborările care încep prea târziu ca să fie făcute cum trebuie.",
    phases: [
      {
        number: "01",
        label: "Discuție de eligibilitate",
        duration: "45 de minute, gratuit",
        body: "Ne uităm la trei lucruri: entitatea juridică, maturitatea proiectului și calendarul vostru. Cele mai multe discuții se încheie cu un răspuns clar dacă finanțarea europeană este realistă anul acesta sau anul viitor.",
        detail: [
          "Tipul, dimensiunea și înregistrarea entității, verificate față de regulile de eligibilitate",
          "Maturitatea tehnologiei sau a investiției, plasată pe scara TRL",
          "Capacitatea de cofinanțare și implicațiile de flux de numerar, discutate deschis",
          "Un verdict onest, inclusiv atunci când răspunsul este „încă nu”",
        ],
      },
      {
        number: "02",
        label: "Harta de finanțare",
        duration: "2–3 săptămâni",
        body: "O listă scrisă cu instrumentele care merită urmărite, ierarhizate după potrivire și probabilitate, împreună cu calendarul care guvernează tot ce urmează.",
        detail: [
          "Toate apelurile relevante, deschise și anunțate, cu date și bugete",
          "Note de eligibilitate specifice entității și regiunii voastre",
          "Opțiuni de structurare a ajutorului de stat și a cofinanțării",
          "O recomandare de tip merge / nu merge pentru fiecare apel, cu argumente",
        ],
      },
      {
        number: "03",
        label: "Poziționare",
        duration: "2–4 săptămâni",
        body: "Înainte de a scrie un cuvânt din proiect, fixăm povestea: problema, de ce ar trebui Europa să o finanțeze și ce se schimbă dacă proiectul reușește.",
        detail: [
          "Notă de concept agreată cu echipa voastră tehnică",
          "Traseul impactului, corelat cu rezultatele așteptate din apel",
          "Golurile din consorțiu identificate și căutarea partenerilor pornită",
          "Plafonul bugetar și scheletul pachetelor de lucru agreate",
        ],
      },
      {
        number: "04",
        label: "Redactare",
        duration: "4–8 săptămâni",
        body: "Scriem noi. Experții voștri furnizează substanța tehnică în interviuri structurate, iar noi o transformăm în text care se aliniază la grila de punctaj.",
        detail: [
          "Narativ complet, pe toate criteriile de evaluare",
          "Pachete de lucru, livrabile, jaloane, riscuri și diagramă Gantt",
          "Buget detaliat, cu validarea eligibilității costurilor",
          "Toate anexele, declarațiile și formularele de portal pregătite",
        ],
      },
      {
        number: "05",
        label: "Verificare și depunere",
        duration: "Ultimele 2 săptămâni",
        body: "Două runde independente de verificare, punctate pe grila oficială, apoi depunere cu zile bune înainte de termen, niciodată cu ore.",
        detail: [
          "Evaluare internă simulată, pe criteriile publicate",
          "Evaluator extern acolo unde apelul și bugetul o justifică",
          "Depunerea în portal și verificările de validare finalizate din timp",
          "Dosarul de depunere arhivat pentru etapele de evaluare și negociere",
        ],
      },
      {
        number: "06",
        label: "Contractare și implementare",
        duration: "Durata proiectului",
        body: "Pregătirea contractului de finanțare, apoi mecanismul de raportare care ține banii în conturile voastre.",
        detail: [
          "Negocierea contractului de finanțare și sprijin pentru acordul de consorțiu",
          "Calendar de raportare, șabloane și cerințe de probatoriu puse la punct",
          "Rapoarte tehnice și financiare periodice redactate",
          "Acte adiționale, audituri și închiderea proiectului gestionate",
        ],
      },
    ],
    pricingEyebrow: "Comercial",
    pricingTitle: "Cum tarifăm",
    pricingLede: "Fără surprize și fără aranjamente care ne plătesc doar dacă câștigați.",
    pricing: [
      {
        title: "Tarif fix pe etapă",
        body: "Fiecare etapă este cotată cu un tarif fix înainte de a începe. Știți cât costă harta de finanțare înainte să vă angajați la redactarea proiectului.",
      },
      {
        title: "Comision de succes, plafonat",
        body: "Unde este potrivit, adăugăm o componentă de succes la contractare, întotdeauna plafonată și comunicată din start. Multe programe limitează ce este eligibil aici.",
      },
      {
        title: "Abonament pentru implementare",
        body: "Raportarea și conformitatea după contractare se derulează pe un abonament lunar, dimensionat după mărimea proiectului și numărul de parteneri.",
      },
    ],
    pricingNote:
      "Onorariile de consultanță sunt uneori cost eligibil în proiect, alteori nu. Vă spunem care este situația pentru apelul vostru înainte să semnați ceva.",
    pricingCta: "Cereți o ofertă",
  },

  results: {
    metaTitle: "Rezultate",
    metaDescription:
      "Proiecte selectate de finanțare europeană, prin Orizont Europa, FEDR, LIFE, FSE+, Interreg și Fondul pentru Inovare.",
    eyebrow: "Rezultate",
    title: "Proiecte selectate",
    lede: "Clienții sunt anonimizați la cererea lor. Programul, suma și rezultatul sunt prezentate așa cum au fost consemnate la contractare.",
    placeholderStrong: "Conținut demonstrativ.",
    placeholderBody: "Studiile de caz de mai jos sunt exemple ilustrative. Înlocuiți-le în",
    placeholderEnd: "și ștergeți acest anunț înainte de lansare.",
    situation: "Situația",
    whatWeDid: "Ce am făcut",
    ctaTitle: "Proiectul vostru poate fi următorul de aici",
    ctaLede: "Spuneți-ne ce construiți și în ce etapă vă aflați.",
    ctaLabel: "Începeți o discuție",
  },

  about: {
    metaTitle: "Despre noi",
    metaDescription:
      "EUI Capital este o societate independentă de consultanță în fonduri europene, care lucrează cu companii, organizații de cercetare și instituții publice din Uniunea Europeană.",
    eyebrow: "Despre noi",
    title: "O firmă mică, care face un singur lucru",
    lede: "EUI Capital consiliază organizații din întreaga Uniune Europeană în identificarea, câștigarea și implementarea finanțării publice. Nu facem marketing, nu facem consultanță generală de management și nu luăm proiecte despre care nu credem că pot câștiga.",
    positionEyebrow: "Poziția noastră",
    positionTitle: "Independenți, și o spunem clar",
    position: [
      "EUI Capital este o societate de consultanță privată. Nu facem parte din Uniunea Europeană și nu decidem cine primește finanțare. Ce facem este să înțelegem cum se ia decizia și să pregătim solicitanții în consecință.",
      "Distincția contează. Nimeni nu poate garanta un grant, iar orice consultant care sugerează altceva vinde altceva. Ce se poate îmbunătăți este calitatea potrivirii, forța argumentului și disciplina implementării — iar aceste trei lucruri mișcă rata de succes foarte mult.",
      "Lucrăm atât cu programe în gestiune directă, derulate de la Bruxelles, cât și cu fonduri în gestiune partajată, administrate de autorități naționale și regionale. Clienții noștri sunt companii mijlocii care scalează o tehnologie, organizații de cercetare care construiesc consorții și instituții publice cu programe de investiții și sociale de finanțat.",
    ],
    glanceTitle: "Pe scurt",
    glance: {
      founded: "Înființată",
      offices: "Sediu",
      focus: "Specializare",
      languages: "Limbi de lucru",
      focusValue: "Exclusiv fonduri publice europene",
      languagesValue: "RO, EN",
    },
    principlesEyebrow: "Cum operăm",
    principlesTitle: "Patru principii de la care nu ne abatem",
    principlesLede:
      "Uneori ne costă contracte. Tot ele sunt motivul pentru care clienții revin la următorul apel.",
    principles: [
      {
        title: "Spunem nu",
        body: "Dacă proiectul vostru nu este finanțabil în acest ciclu, o aflați din prima discuție. Un „da” politicos care irosește trei luni din timpul echipei voastre costă mult mai mult decât onorariul nostru.",
      },
      {
        title: "Partea științifică o scriu experții voștri",
        body: "Nu inventăm conținut tehnic. Vă intervievăm oamenii, structurăm ceea ce știu și traducem în limbajul pe care îl punctează evaluatorii.",
      },
      {
        title: "Conformitatea se proiectează din start",
        body: "Sistemele de raportare, eligibilitatea costurilor și pista de audit se stabilesc în timp ce se scrie proiectul, nu se descoperă la primul raport financiar.",
      },
      {
        title: "Un singur responsabil",
        body: "Fiecare colaborare are un consultant senior răspunzător de la discuția de eligibilitate până la închiderea proiectului. Nu veți fi pasați unui junior după semnare.",
      },
    ],
    teamEyebrow: "Echipa",
    teamTitle: "Cu cine lucrați efectiv",
    teamLede:
      "Doi consultanți seniori. Lucrați direct cu ei, de la prima discuție până la închiderea proiectului.",
    // `focus` and `background` are intentionally empty: they describe real
    // people, so they stay blank until Dan and Codrina supply their own text.
    // The cards render name and role only while these are empty.
    team: [
      { name: "Dan Grecu", role: "Consultant senior", focus: "", background: "" },
      { name: "Codrina Crețu", role: "Consultant senior", focus: "", background: "" },
    ],
    ctaTitle: "Lucrați cu noi",
    ctaLede: "Începeți cu o discuție gratuită de eligibilitate. Fără obligații, în niciun sens.",
    ctaLabel: "Programează o discuție",
  },

  contact: {
    metaTitle: "Contact",
    metaDescription:
      "Programați o discuție gratuită de eligibilitate cu un consultant în fonduri europene. Spuneți-ne despre proiect și vă spunem dacă este finanțabil.",
    eyebrow: "Contact",
    title: "Începeți cu o discuție gratuită de eligibilitate",
    lede: "Descrieți proiectul în câteva rânduri. Dacă finanțarea europeană nu este ruta potrivită, vă spunem asta din start — și vă arătăm ce este.",
    directTitle: "Direct",
    emailLabel: "E-mail",
    phoneLabel: "Telefon",
    officesLabel: "Birouri",
    contactPersonLabel: "Persoană de contact",
    responseLabel: "Timp de răspuns",
    responseValue: "O zi lucrătoare",
    deadlineTitle: "Lucrați contra cronometru?",
    deadlineBody:
      "Treceți termenul-limită în mesaj. Dacă un apel se închide în mai puțin de șase săptămâni, prioritizăm răspunsul — și vă spunem cinstit dacă se mai poate face bine.",
    privacyNote: "Prin trimiterea formularului sunteți de acord cu prelucrarea datelor pentru a vă răspunde, așa cum este descris în",
    privacyLink: "nota de confidențialitate",
    faqTitle: "Înainte să scrieți",
    faqs: [
      {
        q: "Ce se întâmplă după ce trimit mesajul?",
        a: "Un consultant senior îl citește și răspunde într-o zi lucrătoare, de obicei cu o primă opinie despre instrumentele potrivite și cu o propunere de oră pentru discuție.",
      },
      {
        q: "Prima discuție este într-adevăr gratuită?",
        a: "Da. Patruzeci și cinci de minute, fără obligații. Preferăm să le folosim ca să stabilim dacă există o rută realistă, decât să vă vindem un studiu de care nu aveți nevoie.",
      },
      {
        q: "Puteți garanta obținerea finanțării?",
        a: "Nu, și nimeni nu poate. Evaluarea este competitivă și independentă. Ce influențăm este potrivirea, calitatea argumentului și disciplina implementării — acolo se face cea mai mare parte a diferenței.",
      },
      {
        q: "Lucrați și în afara Uniunii Europene?",
        a: "Lucrăm cu entități stabilite în state membre și în țări asociate programului relevant. Statutul de asociere diferă de la program la program, așa că întrebați-ne despre cazul vostru.",
      },
    ],
    form: {
      name: "Nume complet",
      namePlaceholder: "Ana Ionescu",
      email: "E-mail de serviciu",
      emailPlaceholder: "ana@companie.ro",
      organisation: "Organizație",
      organisationPlaceholder: "Companie sau instituție",
      country: "Țară",
      countryPlaceholder: "Stat membru",
      stage: "Stadiul proiectului",
      budget: "Buget orientativ al proiectului",
      message: "Spuneți-ne despre proiect",
      messagePlaceholder:
        "Ce construiți sau în ce investiți, în ce stadiu sunteți și dacă există un apel sau un termen anume către care lucrați?",
      submit: "Trimite mesajul",
      submitting: "Se trimite…",
      note: "Răspundem într-o zi lucrătoare. Datele sunt folosite exclusiv pentru a răspunde acestei solicitări.",
      honeypot: "Site-ul companiei",
      successTitle: "Mesaj primit",
      successBody:
        "Vă mulțumim. Un consultant senior îl va citi personal și va răspunde într-o zi lucrătoare — de regulă cu o primă opinie despre finanțabilitatea proiectului și instrumentul potrivit.",
      genericError: "Ceva nu a funcționat. Vă rugăm să încercați din nou.",
      networkError: (email: string) =>
        `Nu am putut contacta serverul. Vă rugăm să scrieți la ${email}.`,
      stages: [
        "Explorăm — încă fără un apel anume",
        "Apel identificat, nu am început",
        "Redactare în curs",
        "Redepunere după o respingere",
        "Contractat — avem nevoie de sprijin la implementare",
      ],
      budgets: [
        "Sub 500 mii €",
        "500 mii – 2 mil. €",
        "2 – 10 mil. €",
        "Peste 10 mil. €",
        "Încă nedefinit",
      ],
    },
  },

  notFound: {
    eyebrow: "Eroare 404",
    title: "Pagina aceasta nu figurează în programul de lucru",
    lede: "Adresa pe care ați accesat-o nu există sau pagina a fost mutată. Indexul de programe este un bun punct de reluare.",
    ctaHome: "Înapoi la pagina principală",
    ctaProgrammes: "Vezi programele",
  },

  legal: {
    eyebrow: "Legal",
    privacyTitle: "Notă de confidențialitate",
    privacyLede: "Cum tratăm datele personale trimise prin acest site.",
    privacyMeta: "Cum colectează și prelucrează EUI Capital datele cu caracter personal.",
    privacyFootnote:
      "Această notă este un model de pornire și nu constituie consultanță juridică. Datele de înregistrare ale societății sunt completate; solicitați revizuirea conținutului de către un specialist în protecția datelor înainte de lansare.",
    privacySections: [
      {
        heading: "Cine suntem",
        body: [
          "European iCapital Advisory SRL (denumire comercială EUI Capital), CUI 43390519, Nr. Reg. Com. J2020002956224, cu sediul social în Fdc. Emil Racoviță nr. 19, Mun. Iași, jud. Iași, este operatorul datelor cu caracter personal colectate prin acest site. Ne puteți contacta la contact@euicapital.ro sau la +40 726 157 163.",
        ],
      },
      {
        heading: "Ce colectăm",
        body: [
          "Când trimiteți formularul de contact colectăm numele, adresa de e-mail, organizația, țara, stadiul proiectului, bugetul orientativ și mesajul pe care le furnizați. Înregistrăm și momentul trimiterii, țara din care a pornit cererea și identificatorul browserului.",
          "Acest site nu folosește cookie-uri de publicitate sau de urmărire.",
        ],
      },
      {
        heading: "De ce le prelucrăm",
        body: [
          "Folosim aceste date într-un singur scop: pentru a răspunde solicitării voastre și, dacă deveniți client, pentru a presta serviciile contractate. Temeiul juridic este interesul nostru legitim de a răspunde solicitărilor de afaceri și executarea contractului, acolo unde acesta se încheie.",
        ],
      },
      {
        heading: "Cât le păstrăm",
        body: [
          "Solicitările care nu duc la o colaborare se păstrează cel mult douăsprezece luni, apoi se șterg. Documentele clienților se păstrează pe perioada cerută de obligațiile contabile, fiscale și de audit al granturilor.",
        ],
      },
      {
        heading: "Cine mai are acces",
        body: [
          "Mesajele trimise prin formular sunt transmise prin Cloudflare, care asigură găzduirea și securitatea de rețea a acestui site, și pot fi livrate către furnizorul nostru de e-mail. Nu vindem date cu caracter personal și nu le partajăm cu terți în scopuri de marketing.",
        ],
      },
      {
        heading: "Drepturile voastre",
        body: [
          "Conform Regulamentului general privind protecția datelor, aveți dreptul de acces, de rectificare, de ștergere, de restricționare a prelucrării și de portabilitate, precum și dreptul de a vă opune prelucrării bazate pe interes legitim. Scrieți-ne și vă răspundem în termen de o lună.",
          "Aveți, de asemenea, dreptul de a depune o plângere la autoritatea națională de supraveghere a protecției datelor.",
        ],
      },
      {
        heading: "Modificări",
        body: [
          "Putem actualiza această notă. Versiunea publicată pe această pagină este întotdeauna cea în vigoare.",
        ],
      },
    ],
    termsTitle: "Termeni de utilizare",
    termsLede: "Condițiile în care este pus la dispoziție acest site.",
    termsMeta: "Termenii care guvernează utilizarea site-ului EUI Capital.",
    termsFootnote:
      "Această pagină este un model de pornire și nu constituie consultanță juridică. Datele de înregistrare și sediul social sunt completate; solicitați revizuirea de către un avocat și adăugarea legii aplicabile înainte de lansare.",
    termsSections: [
      {
        heading: "Fără afiliere cu instituțiile europene",
        body: [
          "European iCapital Advisory SRL (denumire comercială EUI Capital), CUI 43390519, Nr. Reg. Com. J2020002956224, este o societate de consultanță privată și independentă. Nu este afiliată, avizată, acreditată sau împuternicită de Uniunea Europeană, de Comisia Europeană, de vreo agenție executivă ori de vreo autoritate de management națională sau regională.",
          "Referirile la programe europene de pe acest site sunt descriptive. Ele nu presupun nicio relație cu organismele care le administrează.",
        ],
      },
      {
        heading: "Informare, nu consultanță",
        body: [
          "Conținutul acestui site este informare generală despre instrumentele europene de finanțare. Nu constituie consultanță juridică, financiară sau fiscală și nu înlocuiește citirea programului de lucru, a documentației apelului și a regulilor naționale aplicabile.",
          "Sumele, ratele de cofinanțare și descrierile de eligibilitate sunt rezumate orientative ale unor informații publice și se pot învechi. Verificați întotdeauna documentația oficială a apelului înainte de a lua o decizie.",
        ],
      },
      {
        heading: "Fără garanția finanțării",
        body: [
          "Evaluarea granturilor este competitivă și se realizează de evaluatori independenți, desemnați de autoritatea finanțatoare. Nicio firmă de consultanță nu poate garanta finanțarea unei aplicații, iar noi nu oferim o astfel de garanție. Statisticile publicate pe acest site descriu proiecte anterioare și nu prezic rezultate viitoare.",
        ],
      },
      {
        heading: "Condiții de colaborare",
        body: [
          "Nimic de pe acest site nu constituie o ofertă de a încheia un contract. Serviciile se prestează exclusiv în baza unui contract semnat, care stabilește obiectul, onorariile, termenele și răspunderea.",
        ],
      },
      {
        heading: "Proprietate intelectuală",
        body: [
          "Tot conținutul acestui site aparține European iCapital Advisory SRL, dacă nu se prevede altfel, și nu poate fi reprodus comercial fără acord scris.",
        ],
      },
      {
        heading: "Răspundere",
        body: [
          "În limitele permise de lege, excludem răspunderea pentru orice pierdere rezultată din utilizarea conținutului acestui site. Nimic din acești termeni nu limitează răspunderea care nu poate fi limitată legal.",
        ],
      },
    ],
  },
};

/** Derived from the Romanian object: a string missing from `en` is a compile error. */
export type Copy = typeof ro;

const en: Copy = {
  ui: {
    bookCall: "Book a call",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
    home: "Home",
    contact: "Contact",
    language: "Language",
    allServices: "All services",
    allResults: "All results",
    company: "Company",
    programmes: "Programmes",
    privacy: "Privacy",
    terms: "Terms",
    rightsReserved: "All rights reserved.",
    regCui: "VAT/Tax ID",
    regCom: "Trade Register No.",
    regOffice: "Registered office",
    disclaimer:
      "European iCapital Advisory SRL is an independent private consultancy. It is not affiliated with, endorsed by, or acting on behalf of the European Union, the European Commission or any other EU institution, body or agency. Funding figures shown are indicative and subject to the terms of the applicable work programme and call documentation.",
  },

  home: {
    metaTitle: "EU funding consultancy",
    eyebrow: "Independent EU funding consultancy",
    titleLine1: "Europe has the money.",
    titleLine2: "We help you win it.",
    lede: "Over a trillion euros moves through EU programmes each budget cycle. Most of it goes to organisations that understood the rules early. EUI Capital finds the right instrument for your project, writes the application, and manages the grant once you win it.",
    ctaPrimary: "Book a free eligibility call",
    ctaSecondary: "Explore the programmes",

    problemEyebrow: "Why applications fail",
    problemTitle: "Four reasons good projects never get funded",
    problemLede:
      "None of them are about the quality of the idea. Each one is solvable with preparation.",
    frictions: [
      {
        title: "The call finds you too late",
        body: "By the time a relevant call is public knowledge, the well-prepared applicants have been drafting for months. Positioning starts before publication.",
      },
      {
        title: "Eligibility is decided on details",
        body: "Entity type, region, TRL, aid intensity, partner geography. A single mismatch removes an otherwise excellent project from consideration.",
      },
      {
        title: "Evaluators score, they do not read",
        body: "Applications are marked against a published grid. Text that does not map to a criterion earns nothing, however well written it is.",
      },
      {
        title: "Winning is the start of the obligation",
        body: "Reporting, timesheets, procurement rules and audit trails decide whether the money stays yours. Most clawbacks are administrative.",
      },
    ],

    servicesEyebrow: "What we do",
    servicesTitle: "End to end, or exactly the part you need",
    servicesLede:
      "Most clients start with a strategy sprint and stay with us through delivery. Some bring us in eight weeks before a deadline. Both work.",

    programmesEyebrow: "Instruments we work with",
    programmesTitle: "Nine major routes to European funding",
    programmesLede:
      "Direct grants from Brussels, shared-management money from your region, and the large infrastructure instruments in between.",

    processEyebrow: "How we work",
    processTitle: "A process built around deadlines you cannot move",
    processLede:
      "EU calls close at a fixed hour. Everything we do is scheduled backwards from that moment.",
    processCta: "See the full method",
    steps: [
      {
        label: "Week 1",
        title: "Eligibility call",
        body: "Forty-five minutes on your project, your entity and your timeline. You leave knowing whether EU funding is realistic and which instruments fit.",
      },
      {
        label: "Weeks 2–3",
        title: "Funding map",
        body: "A ranked shortlist of calls with deadlines, co-financing rates, eligibility notes and an honest probability estimate for each.",
      },
      {
        label: "Weeks 4–12",
        title: "Build and submit",
        body: "We write the proposal, assemble the consortium if one is needed, build the budget, and run two review rounds against the scoring grid.",
      },
      {
        label: "After award",
        title: "Deliver and report",
        body: "Grant agreement, periodic reporting, amendments and audit readiness for the life of the project.",
      },
    ],

    resultsEyebrow: "Selected engagements",
    resultsTitle: "What the work looks like in practice",

    ctaTitle: "Tell us about your project. We will tell you whether it is fundable.",
    ctaLede:
      "No obligation, no pitch deck required. If there is no realistic route, we will say so on the first call.",
    ctaPrimaryLabel: "Start a conversation",
    ctaSecondaryLabel: "Read the case studies",
  },

  services: {
    metaTitle: "Services",
    metaDescription:
      "Funding strategy, proposal writing, consortium building, grant management, audit support and resubmission for EU funding applicants.",
    eyebrow: "Services",
    title: "Six ways we get involved",
    lede: "Engage us for the whole cycle or for the single stage where your team runs out of capacity. Each engagement has a defined scope, a fixed fee and a named lead.",
    deliverablesLabel: "What you receive",
    durationLabel: "Typical duration:",
    closingTitle: "Not sure which one you need?",
    closingLede:
      "Describe the project in a few lines. We will come back with the stage we would start at and what it would cost.",
    closingCta: "Get in touch",
  },

  programmes: {
    metaTitle: "EU funding programmes",
    metaDescription:
      "Horizon Europe, Digital Europe, ERDF, ESF+, LIFE, CEF, the Innovation Fund, Interreg and rural development — what each instrument funds and who is eligible.",
    eyebrow: "Programmes",
    title: "The instruments, and who each one is actually for",
    lede: "Two things decide where your project belongs: what you are building, and who administers the money. Filter by theme or management mode to narrow it down.",
    searchLabel: "Search",
    searchPlaceholder: "e.g. hydrogen, training, SME investment",
    managementLabel: "Management mode",
    managementAll: "All",
    managementDirect: "Direct",
    managementShared: "Shared",
    themeAll: "All themes",
    showing: (shown: number, total: number) =>
      `Showing ${shown} of ${total} programmes`,
    emptyTitle: "No programme matches those filters",
    emptyBody: "Try a broader search, or",
    emptyLink: "ask us directly",
    emptyBodyEnd: "— national and regional schemes are not all listed here.",
    budgetLabel: "Budget",
    coFundingLabel: "Co-funding",
    detailLink: "Programme detail",
    asideTitle: "Direct or shared management — why it matters",
    asideDirect:
      "Direct management means the European Commission or one of its executive agencies runs the call itself. One set of rules, one portal, one deadline, and competition across the whole Union. Scores are typically published in an Evaluation Summary Report.",
    asideShared:
      "Shared management means the money is allocated to your Member State or region, which sets its own calls, forms, language and scoring. The competition is smaller, the paperwork is local, and state aid rules usually decide your maximum funding intensity.",
    asideNote:
      "Figures on this page are indicative headline allocations for the 2021–2027 multiannual financial framework and are rounded. Always confirm against the current work programme and call documentation before making a decision.",
    howItWorks: "How the programme works",
    whereApplicantsLose: "Where applicants lose",
    bestSuited: "Best suited to",
    factBudget: "Indicative budget",
    factManaged: "Managed by",
    factCoFunding: "Co-funding rate",
    factTypical: "Typical grant size",
    sidebarTitle: (acronym: string) => `Is ${acronym} the right fit for you?`,
    sidebarBody:
      "Send us a short description of the project. We will tell you whether this instrument fits, and which alternative is stronger if it does not.",
    sidebarCta: "Request an assessment",
    alsoIn: (category: string) => `Also in ${category}`,
    managementTag: (mode: string) => `${mode} management`,
  },

  process: {
    metaTitle: "How we work",
    metaDescription:
      "Our method for EU funding applications: eligibility screening, funding map, proposal development, submission and post-award delivery.",
    eyebrow: "How we work",
    title: "Scheduled backwards from a deadline that will not move",
    lede: "EU calls close at a fixed hour on a fixed day. Everything below is planned from that moment in reverse, which is why we decline engagements that start too late to do properly.",
    phases: [
      {
        number: "01",
        label: "Eligibility call",
        duration: "45 minutes, free",
        body: "We look at three things: your legal entity, your project's maturity, and your timeline. Most conversations end with a clear answer on whether EU funding is realistic this year or next.",
        detail: [
          "Entity type, size and registration checked against eligibility rules",
          "Technology or investment maturity placed on the TRL scale",
          "Co-financing capacity and cash-flow implications discussed openly",
          "Honest verdict, including when the answer is 'not yet'",
        ],
      },
      {
        number: "02",
        label: "Funding map",
        duration: "2–3 weeks",
        body: "A written shortlist of the instruments worth pursuing, ranked by fit and probability, with the calendar that governs everything that follows.",
        detail: [
          "Every relevant open and forthcoming call, with dates and budgets",
          "Eligibility notes specific to your entity and region",
          "State-aid and co-financing structure options",
          "A go / no-go recommendation per call, with reasoning",
        ],
      },
      {
        number: "03",
        label: "Positioning",
        duration: "2–4 weeks",
        body: "Before a word of the proposal is written, we fix the story: the problem, why Europe should fund it, and what changes if the project succeeds.",
        detail: [
          "Concept note agreed with your technical team",
          "Impact pathway mapped to the call's expected outcomes",
          "Consortium gaps identified and partner search launched if needed",
          "Budget envelope and work package skeleton agreed",
        ],
      },
      {
        number: "04",
        label: "Drafting",
        duration: "4–8 weeks",
        body: "We write. Your experts supply the technical substance in structured interviews; we turn it into text that maps onto the scoring grid.",
        detail: [
          "Full narrative across all evaluation criteria",
          "Work packages, deliverables, milestones, risks and Gantt",
          "Detailed budget with cost-eligibility validation",
          "All annexes, declarations and portal forms prepared",
        ],
      },
      {
        number: "05",
        label: "Review and submit",
        duration: "Final 2 weeks",
        body: "Two independent review rounds scored against the official grid, then submission with days to spare — never hours.",
        detail: [
          "Internal mock evaluation using the published criteria",
          "External reviewer where the call and budget justify one",
          "Portal submission and validation checks completed early",
          "Submission pack archived for the evaluation and negotiation phases",
        ],
      },
      {
        number: "06",
        label: "Award and delivery",
        duration: "Life of the project",
        body: "Grant agreement preparation, then the reporting machinery that keeps the money in your accounts.",
        detail: [
          "Grant agreement negotiation and consortium agreement support",
          "Reporting calendar, templates and evidence requirements set up",
          "Periodic technical and financial reports drafted",
          "Amendments, audits and closure handled",
        ],
      },
    ],
    pricingEyebrow: "Commercials",
    pricingTitle: "How we charge",
    pricingLede: "No surprises, and no arrangement that only pays us if you win.",
    pricing: [
      {
        title: "Fixed fee per stage",
        body: "Each engagement stage is quoted as a fixed fee before it starts. You know the cost of the funding map before you commit to the proposal.",
      },
      {
        title: "Success fee, capped",
        body: "Where appropriate we add a success component on award, always capped and always disclosed up front. Many programmes limit what is eligible here.",
      },
      {
        title: "Retainer for delivery",
        body: "Post-award reporting and compliance run on a monthly retainer scaled to the project size and the number of partners.",
      },
    ],
    pricingNote:
      "Consultancy fees are sometimes an eligible project cost and sometimes not. We tell you which applies to your call before you sign anything.",
    pricingCta: "Ask for a quote",
  },

  results: {
    metaTitle: "Results",
    metaDescription:
      "Selected EU funding engagements across Horizon Europe, ERDF, LIFE, ESF+, Interreg and the Innovation Fund.",
    eyebrow: "Results",
    title: "Selected engagements",
    lede: "Clients are anonymised at their request. Programme, amount and outcome are stated as they were recorded at award.",
    placeholderStrong: "Placeholder content.",
    placeholderBody: "The case studies below are illustrative examples. Replace them in",
    placeholderEnd: "and remove this banner before launch.",
    situation: "The situation",
    whatWeDid: "What we did",
    ctaTitle: "Your project could be the next one here",
    ctaLede: "Tell us what you are building and which stage you are at.",
    ctaLabel: "Start a conversation",
  },

  about: {
    metaTitle: "About",
    metaDescription:
      "EUI Capital is an independent EU funding consultancy working with companies, research organisations and public bodies across the European Union.",
    eyebrow: "About",
    title: "A small firm that only does one thing",
    lede: "EUI Capital advises organisations across the European Union on finding, winning and delivering public funding. We do not do marketing, we do not do general management consulting, and we do not take on projects we do not think can win.",
    positionEyebrow: "Our position",
    positionTitle: "Independent, and clear about it",
    position: [
      "EUI Capital is a private consultancy. We are not part of the European Union and we do not decide who gets funded. What we do is understand how the decision is made, and prepare applicants accordingly.",
      "That distinction matters. Nobody can guarantee a grant, and any adviser who suggests otherwise is selling something else. What can be improved is the quality of the fit, the strength of the argument, and the discipline of the delivery — and those three things move success rates a very long way.",
      "We work across direct-management programmes run from Brussels and shared-management funds administered by national and regional authorities. Our clients are mid-sized companies scaling a technology, research organisations building consortia, and public bodies with capital and social programmes to finance.",
    ],
    glanceTitle: "At a glance",
    glance: {
      founded: "Founded",
      offices: "Registered in",
      focus: "Focus",
      languages: "Working languages",
      focusValue: "EU public funding only",
      languagesValue: "RO, EN",
    },
    principlesEyebrow: "How we operate",
    principlesTitle: "Four principles we do not bend",
    principlesLede:
      "They cost us work occasionally. They are also why clients come back for the next call.",
    principles: [
      {
        title: "We say no",
        body: "If your project is not fundable this cycle, you will hear it on the first call. A polite yes that wastes three months of your team's time costs you far more than our fee.",
      },
      {
        title: "Your experts write the science",
        body: "We do not invent technical content. We interview your people, structure what they know, and translate it into the language evaluators are scoring against.",
      },
      {
        title: "Compliance is designed in",
        body: "Reporting systems, cost eligibility and audit trails are decided while the proposal is being written, not discovered during the first financial report.",
      },
      {
        title: "One named lead",
        body: "Every engagement has a single senior consultant accountable for it from the eligibility call to project closure. You will not be handed to a junior after signature.",
      },
    ],
    teamEyebrow: "The team",
    teamTitle: "Who you actually work with",
    teamLede:
      "Two senior consultants. You work with them directly, from the first call to project closure.",
    team: [
      { name: "Dan Grecu", role: "Senior consultant", focus: "", background: "" },
      { name: "Codrina Crețu", role: "Senior consultant", focus: "", background: "" },
    ],
    ctaTitle: "Work with us",
    ctaLede: "Start with a free eligibility call. No commitment either way.",
    ctaLabel: "Book a call",
  },

  contact: {
    metaTitle: "Contact",
    metaDescription:
      "Book a free eligibility call with an EU funding consultant. Tell us about your project and we will tell you whether it is fundable.",
    eyebrow: "Contact",
    title: "Start with a free eligibility call",
    lede: "Describe the project in a few lines. If EU funding is not the right route for it, we will tell you that first — and point you at what is.",
    directTitle: "Direct",
    emailLabel: "Email",
    phoneLabel: "Telephone",
    officesLabel: "Offices",
    contactPersonLabel: "Contact",
    responseLabel: "Response time",
    responseValue: "One working day",
    deadlineTitle: "Working to a deadline?",
    deadlineBody:
      "Put the closing date in your message. If a call shuts in under six weeks we prioritise the reply — and tell you honestly whether it can still be done well.",
    privacyNote:
      "By sending this form you agree to us processing your details to respond to your enquiry, as described in our",
    privacyLink: "privacy notice",
    faqTitle: "Before you write",
    faqs: [
      {
        q: "What happens after I send this?",
        a: "A senior consultant reads it and replies within one working day, normally with a first view on the instruments that fit and a proposed time for a call.",
      },
      {
        q: "Is the first call really free?",
        a: "Yes. Forty-five minutes, no obligation. We would rather spend it establishing whether there is a realistic route than sell you a study you do not need.",
      },
      {
        q: "Can you guarantee we get funded?",
        a: "No, and nobody can. Evaluation is competitive and independent. What we influence is fit, argument quality and delivery discipline — which is where most of the difference is made.",
      },
      {
        q: "Do you work outside the EU?",
        a: "We work with entities established in EU Member States and in countries associated to the relevant programme. Association status varies by programme, so ask us about your case.",
      },
    ],
    form: {
      name: "Full name",
      namePlaceholder: "Ana Ionescu",
      email: "Work email",
      emailPlaceholder: "ana@company.eu",
      organisation: "Organisation",
      organisationPlaceholder: "Company or institution",
      country: "Country",
      countryPlaceholder: "Member State",
      stage: "Project stage",
      budget: "Indicative project budget",
      message: "Tell us about the project",
      messagePlaceholder:
        "What are you building or investing in, what stage is it at, and is there a specific call or deadline you are working towards?",
      submit: "Send enquiry",
      submitting: "Sending…",
      note: "We reply within one working day. Your details are used only to respond to this enquiry.",
      honeypot: "Company website",
      successTitle: "Message received",
      successBody:
        "Thank you. A senior consultant will read this personally and reply within one working day — usually with a first view on whether your project is fundable and under which instrument.",
      genericError: "Something went wrong. Please try again.",
      networkError: (email: string) =>
        `Could not reach the server. Please email ${email} instead.`,
      stages: [
        "Exploring — no specific call yet",
        "Call identified, not started",
        "Draft in progress",
        "Resubmission after a rejection",
        "Awarded — need delivery support",
      ],
      budgets: ["Under €500k", "€500k – €2M", "€2M – €10M", "Over €10M", "Not yet defined"],
    },
  },

  notFound: {
    eyebrow: "Error 404",
    title: "This page is not in the current work programme",
    lede: "The address you followed does not exist, or the page has moved. The programme index is a good place to pick the thread back up.",
    ctaHome: "Back to the homepage",
    ctaProgrammes: "Browse programmes",
  },

  legal: {
    eyebrow: "Legal",
    privacyTitle: "Privacy notice",
    privacyLede: "How we handle personal data submitted through this website.",
    privacyMeta: "How EUI Capital collects and processes personal data.",
    privacyFootnote:
      "This notice is a starting template and is not legal advice. The company registration details are filled in; have the content reviewed by a qualified data protection adviser before launch.",
    privacySections: [
      {
        heading: "Who we are",
        body: [
          "European iCapital Advisory SRL (trading as EUI Capital), tax ID 43390519, Trade Register No. J2020002956224, registered at Fdc. Emil Racoviță 19, Iași, Iași County, Romania, is the data controller for personal data collected through this website. You can reach us at contact@euicapital.ro or on +40 726 157 163.",
        ],
      },
      {
        heading: "What we collect",
        body: [
          "When you submit the contact form we collect the name, email address, organisation, country, project stage, indicative budget and message you provide. We also record the time of submission, the country your request originated from, and your browser user-agent string.",
          "This website does not use advertising or tracking cookies.",
        ],
      },
      {
        heading: "Why we process it",
        body: [
          "We use these details for one purpose: to respond to your enquiry and, if you become a client, to deliver the services you engage us for. The legal basis is our legitimate interest in responding to business enquiries, and performance of a contract where one is entered into.",
        ],
      },
      {
        heading: "How long we keep it",
        body: [
          "Enquiries that do not lead to an engagement are retained for up to twelve months and then deleted. Client records are retained for the period required by applicable accounting, tax and grant audit obligations.",
        ],
      },
      {
        heading: "Who else sees it",
        body: [
          "Form submissions are transmitted through Cloudflare, which provides hosting and network security for this site, and may be delivered to our email provider. We do not sell personal data and we do not share it with third parties for marketing.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Under the General Data Protection Regulation you may request access to your personal data, rectification, erasure, restriction of processing, or portability, and you may object to processing based on legitimate interests. Write to us and we will respond within one month.",
          "You also have the right to lodge a complaint with your national data protection supervisory authority.",
        ],
      },
      {
        heading: "Changes",
        body: [
          "We may update this notice. The version published on this page is always the current one.",
        ],
      },
    ],
    termsTitle: "Terms of use",
    termsLede: "The terms on which this website is made available.",
    termsMeta: "Terms governing use of the EUI Capital website.",
    termsFootnote:
      "This page is a starting template and is not legal advice. The registration number and registered office are filled in; have it reviewed by a qualified lawyer and add your governing law before launch.",
    termsSections: [
      {
        heading: "No affiliation with EU institutions",
        body: [
          "European iCapital Advisory SRL (trading as EUI Capital), tax ID 43390519, Trade Register No. J2020002956224, is an independent private consultancy. It is not affiliated with, endorsed by, accredited by, or acting on behalf of the European Union, the European Commission, any executive agency, or any national or regional managing authority.",
          "References to EU programmes on this website are descriptive. They do not imply any relationship with the bodies that administer them.",
        ],
      },
      {
        heading: "Information, not advice",
        body: [
          "The content of this website is general information about European funding instruments. It is not legal, financial or tax advice, and it must not be relied on as a substitute for reading the applicable work programme, call documentation and national rules.",
          "Budget figures, co-financing rates and eligibility descriptions are indicative summaries of publicly available information and may become outdated. Always verify against the official call documentation before making a decision.",
        ],
      },
      {
        heading: "No guarantee of funding",
        body: [
          "Grant evaluation is competitive and carried out by independent evaluators appointed by the awarding body. No consultancy can guarantee that an application will be funded, and we make no such guarantee. Any statistics published on this website describe past engagements and do not predict future outcomes.",
        ],
      },
      {
        heading: "Engagement terms",
        body: [
          "Nothing on this website constitutes an offer to enter into a contract. Services are provided only under a signed engagement letter which sets out scope, fees, timelines and liability.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "All content on this website is owned by European iCapital Advisory SRL unless stated otherwise, and may not be reproduced commercially without written permission.",
        ],
      },
      {
        heading: "Liability",
        body: [
          "To the fullest extent permitted by law, we exclude liability for any loss arising from reliance on the content of this website. Nothing in these terms limits liability that cannot lawfully be limited.",
        ],
      },
    ],
  },
};

const copy: Record<Locale, Copy> = { ro, en };

export function getCopy(locale: Locale): Copy {
  return copy[locale];
}

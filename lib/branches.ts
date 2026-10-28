// Content for the "Branches" (industries) pages. Text is taken verbatim from the Dutch
// pages on https://cloudconnected.nl; links point at the routes in this app.

import { CALENDLY_URL } from "@/lib/content";
import type { Cta, DetailPage, OverviewPage } from "@/lib/types";

const IMG = "/images/site";
const meeting: Cta = { label: "Plan een meeting met ons", href: CALENDLY_URL };
const PARENT = "industrieen-die-we-bedienen";
/** The Microsoft 365 app grid that sits beside the second section on every branch page. */
const appsImage = `${IMG}/Group-249.webp`;

const overview: OverviewPage = {
  kind: "overview",
  slug: PARENT,
  metaTitle: "IT-oplossingen op maat voor jouw branche",
  metaDescription:
    "horeca, zorg, zakelijke dienstverlening, retail & meer. Verhoog productiviteit & beveilig je data met CloudConnected.",
  hero: {
    title: "Branches die we bedienen",
    lead: "We bieden IT-oplossingen op maat voor verschillende bedrijfstakken en zorgen zo voor betrouwbare, veilige en efficiënte activiteiten.",
    paragraphs: [
      "We ondersteunen sectoren zoals horeca, gezondheidszorg, zakelijke dienstverlening, detailhandel, onderwijs en juridische zaken.",
      "Onze op maat gemaakte services helpen de productiviteit te verhogen, gegevens te beschermen en activiteiten te stroomlijnen om te voldoen aan de unieke behoeften van elke branche.",
    ],
    image: "/images/solutions/Rectangle-32-1.webp",
    cta: meeting,
  },
  intro: {
    cards: [
      {
        title: "Non-profit",
        text: "We helpen non-profitorganisaties toegang te krijgen tot TechSoup- en Microsoft-donaties terwijl we IT-ondersteuning bieden om hun activiteiten te verbeteren.",
        href: "/it-oplossingen-voor-non-profitorganisaties/",
      },
      {
        title: "Advocatenkantoren",
        text: "Profiteer van veilig documentbeheer, ondersteuning voor apps voor advocatenkantoren en hulp bij naleving, zodat u efficiënt kunt werken en uw gegevens kunt beveiligen.",
        href: "/it-oplossingen-voor-advocatenkantoren/",
      },
      {
        title: "Gezondheidszorg",
        text: "We bieden volledige IT-ondersteuning voor de gezondheidszorg, inclusief dataprivacy, veilig beheer van patiëntendossiers en naleving van de regelgeving.",
        href: "/it-oplossingen-voor-de-gezondheidszorg/",
      },
      {
        title: "Gastvrijheid",
        text: "IT-oplossingen voor de horeca – waaronder veilige WiFi, beveiliging van compliance en inzicht in gasten, voor een soepele bedrijfsvoering en uitstekende gastervaringen.",
        href: "/it-diensten-voor-de-horeca/",
      },
      {
        title: "Zakelijke diensten",
        text: "We bieden IT-oplossingen voor zakelijke dienstverleners, waaronder cloudservices, gegevensbeveiliging en automatiseringstools om de efficiëntie en productiviteit te verbeteren.",
        href: "/it-voor-zakelijke-diensten/",
      },
      {
        title: "Logistiek",
        text: "Onze IT-oplossingen voor logistiek omvatten realtime tracering, veilig gegevensbeheer en geoptimaliseerde routing om een efficiënt en nauwkeurig beheer van de toeleveringsketen te garanderen.",
        href: "/it-diensten-voor-logistiek/",
      },
    ],
    title: "Waarom voor ons kiezen?",
    paragraphs: [
      "Als u Cloudconnected kiest, werkt u samen met een team dat de specifieke uitdagingen van uw branche begrijpt. Wij bieden gepersonaliseerde, schaalbare IT-oplossingen die worden ondersteund door deskundige service en sterke beveiligingsmaatregelen. Ons doel is om u te helpen uw activiteiten te stroomlijnen, uw productiviteit te verhogen en concurrerend te blijven met de nieuwste technologie.",
    ],
    extra: {
      kicker: "Staat uw branche er niet bij?",
      paragraphs: [
        "Als uw branche er niet bij staat, willen we toch graag van u horen.",
        "We bieden IT-oplossingen op maat voor alle soorten bedrijven.",
        "Neem contact met ons op om uw behoeften te bespreken en ontdek hoe Cloudconnected uw activiteiten kan ondersteunen met onze services op maat.",
      ],
    },
    cta: meeting,
  },
  topics: [],
};

const zakelijkeDiensten: DetailPage = {
  kind: "detail",
  slug: "it-voor-zakelijke-diensten",
  parent: PARENT,
  metaTitle: "IT voor zakelijke dienstverlening - CloudConnected",
  metaDescription:
    "IT voor zakelijke diensten: cloudoplossingen, beveiliging, ondersteuning & meer. Focus op jouw klanten, wij op jouw IT.",
  hero: {
    title: "IT voor zakelijke dienstverlening",
    lead: "Zakelijke dienstverleners vertrouwen sterk op IT voor het opslaan en beheren van documenten en persoonsgegevens, het bijhouden van klantgegevens, communicatie met stakeholders, samenwerking met collega’s, en nog veel meer.",
    paragraphs: [
      "Daarom is het kiezen van een betrouwbare IT-partner essentieel voor een soepele, veilige en efficiënte bedrijfsvoering.",
    ],
    extra: [
      {
        kicker: "Complete IT-oplossingen voor zakelijke dienstverleners",
        paragraphs: ["Wij bieden een totaaloplossing voor de IT-behoeften van zakelijke dienstverleners."],
        bullets: ["Clouddiensten", "Flexibele werkplekken", "Telefonie", "Microsoft 365"],
        closing: [
          "Alles wordt beheerd vanuit één centrale plek, zodat je één aanspreekpunt en een toegewijde helpdesk hebt. Dit vereenvoudigt de ondersteuning en maakt jouw werkzaamheden een stuk gemakkelijker.",
        ],
      },
    ],
    image: `${IMG}/Mask-group-74.webp`,
    cta: meeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: appsImage,
      blocks: [
        {
          title: "Cloudoplossingen voor zakelijke dienstverlening",
          paragraphs: [
            "Cloud computing is onmisbaar voor zakelijke dienstverleners. Jouw medewerkers hebben altijd en overal toegang tot applicaties en gegevens, wat de productiviteit en samenwerking stimuleert.",
            "Cloudconnected biedt cloudoplossingen met automatische updates en ijzersterke beveiliging, zodat jouw gegevens veilig zijn en jouw bedrijfsprocessen soepel verlopen. Onze diensten integreren naadloos met bestaande systemen, schalen moeiteloos mee met de groei van jouw bedrijf en verlagen de kosten door dure hardware op locatie overbodig te maken.",
          ],
        },
        {
          kicker: "Schaalbaar ICT-model",
          paragraphs: [
            "Met ons schaalbare IT-model kun je eenvoudig medewerkers toevoegen of verwijderen uit jouw IT-omgeving, precies wanneer je dat nodig hebt. Zo beschik je altijd over de juiste capaciteit tegen een vast maandbedrag, wat zorgt voor optimale kostenefficiëntie.",
          ],
        },
      ],
      cta: meeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-73.webp`,
      blocks: [
        {
          title: "Naleving & Rapportage: Altijd in Control",
          paragraphs: [
            "Compliance en regelgevingsrapportage zijn essentieel voor zakelijke dienstverleners. Voldoe aan de normen en vermijd boetes. Cloudconnected biedt uitgebreide oplossingen om je te helpen compliant te blijven met de gegevensbeschermingsregels en jouw rapportageprocessen te stroomlijnen. Zo houd jij je bedrijf moeiteloos aan alle richtlijnen.",
          ],
        },
        {
          title: "Meerdere locaties? Eén naadloze IT-omgeving.",
          paragraphs: [
            "Is jouw bedrijf actief op meerdere locaties? Cloudconnected verbindt ze, zodat je overal dezelfde diensten kunt gebruiken: telefonie, internet, bedrijfskritische systemen – allemaal veilig geïmplementeerd. Onze oplossingen garanderen consistente prestaties en communicatie op al jouw locaties, voor optimale efficiëntie.",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

const logistiek: DetailPage = {
  kind: "detail",
  slug: "it-diensten-voor-logistiek",
  parent: PARENT,
  metaTitle: "IT-oplossingen voor Logistiek - CloudConnected",
  metaDescription:
    "Cloudoplossingen voor logistiek: schaalbaar, flexibel & kostenefficiënt. Verbeter samenwerking en data-uitwisseling binnen de supply chain.",
  hero: {
    title: "IT-oplossingen voor logistiek",
    lead: "De toeleveringsketen verandert razendsnel. Klanten verwachten 24/7 updates en controle over hun leveringen. De groei van cloud computing en het Internet of Things vraagt om een moderne, flexibele IT-infrastructuur.",
    paragraphs: [
      "Je hebt software nodig die snelle informatie-uitwisseling, eenvoudige schaalbaarheid en naadloze integratie met andere systemen mogelijk maakt. Wij bieden slimme IT-oplossingen voor de logistieke sector, zodat jouw systemen perfect samenwerken met interne en externe platforms.",
    ],
    extra: [
      {
        kicker: "Meer dan alleen IT-beheer",
        paragraphs: [
          "Veel bedrijven kunnen laptops installeren of je infrastructuur beheren, maar een ‘break-fix’ leverancier met alleen een helpdesk is niet genoeg voor de hedendaagse logistieke uitdagingen.",
          "Je hebt een proactieve partner nodig die problemen voorziet en voorkomt. Dát is waar wij het verschil maken.",
        ],
      },
    ],
    image: `${IMG}/Mask-group-78.webp`,
    cta: meeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: appsImage,
      blocks: [
        {
          title: "Cloudoplossingen voor Logistiek",
          paragraphs: [
            "Wij bieden cloudoplossingen die logistieke bedrijven een schaalbare, flexibele en kosteneffectieve IT-infrastructuur bieden.",
            "Onze diensten stellen je in staat om IT-resources snel aan te passen aan de vraag, wat leidt tot verbeterde efficiëntie en lagere kosten.",
            "Onze cloudoplossingen verbeteren de samenwerking en het delen van gegevens binnen de supply chain, zodat alle betrokkenen realtime toegang hebben tot cruciale informatie.",
            "Met onze cloudtechnologie stroomlijn je jouw logistieke activiteiten en reageer je effectiever op marktveranderingen.",
          ],
        },
      ],
      cta: meeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-77.webp`,
      blocks: [
        {
          title: "Cybersecurity in de logistiek",
          paragraphs: [
            "Wij bieden krachtige cybersecurity-oplossingen om jouw logistieke activiteiten te beschermen. Onze diensten omvatten geavanceerde detectie van bedreigingen, gegevensversleuteling en veilige toegangscontroles, zodat jouw informatie altijd veilig is.",
            "Met onze cybersecurity-maatregelen waarborg je de integriteit en vertrouwelijkheid van jouw gegevens en bouw je vertrouwen op bij klanten en partners.",
          ],
        },
        {
          title: "Herstel na calamiteiten",
          paragraphs: [
            "Onze oplossingen voor disaster recovery en bedrijfscontinuïteit zorgen ervoor dat jouw logistieke activiteiten soepel blijven verlopen, zelfs bij onverwachte gebeurtenissen.",
            "Wij bieden uitgebreide back-up- en herstelservices om kritieke functies snel te herstellen na een incident. Zo beperk je downtime tot een minimum en houd je de goederenstroom op gang, zodat je altijd aan de klantvraag kunt voldoen.",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

const advocatuur: DetailPage = {
  kind: "detail",
  slug: "it-oplossingen-voor-advocatenkantoren",
  parent: PARENT,
  metaTitle: "IT-oplossingen voor Advocatuur: Efficiëntie & Veiligheid",
  metaDescription:
    "Complete IT-oplossingen voor advocatenkantoren: juridische software, documentbeheer, cybersecurity, compliance & meer.",
  hero: {
    title: "IT-oplossingen voor advocatuur",
    lead: "Bij Cloudconnected zijn we expert in IT-diensten die speciaal zijn toegesneden op advocatenkantoren zoals het jouwe.",
    paragraphs: [
      "Ons doel is ervoor te zorgen dat jouw technologie betrouwbaar, veilig en gemakkelijk in gebruik is, zodat jij je kunt richten op jouw cliënten. Met onze kennis en ervaring willen we het laatste IT-bedrijf zijn waar jouw advocatenkantoor ooit nog een beroep op hoeft te doen.",
    ],
    extra: [
      {
        kicker: "Juridische software",
        paragraphs: [
          "Jij rekent op software die speciaal is ontwikkeld voor advocatenkantoren om jouw dagelijkse taken uit te voeren. Bij Cloudconnected ondersteunen en beheren we deze onmisbare tools, zodat ze vlot en veilig werken.",
          "Onze diensten houden jouw gespecialiseerde software up-to-date en efficiënt, beperken downtime tot een minimum en beschermen jouw gegevens, zodat jouw werk ongestoord en veilig kan doorgaan.",
        ],
      },
    ],
    image: `${IMG}/2024-08-image-33-2.webp`,
    cta: meeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: appsImage,
      blocks: [
        {
          title: "IT-diensten voor advocatenkantoren:",
          items: [
            {
              title: "E-mail & Office-suite",
              text: "Uitgebreide ondersteuning voor Microsoft 365, inclusief Word, Excel, Outlook en andere apps.",
            },
            {
              title: "Documentbeheer",
              text: "Geavanceerd dossierbeheer met centrale toegang en krachtige zoekmogelijkheden.",
            },
            {
              title: "Cloud desktops",
              text: "Veilige toegang tot applicaties vanaf elke locatie, met robuuste back-upoplossingen.",
            },
            { title: "IT-helpdesk", text: "Snelle en vriendelijke technische ondersteuning voor al jouw vragen." },
            { title: "Afdrukken", text: "Efficiënte en betrouwbare printoplossingen voor jouw advocatenkantoor." },
          ],
        },
      ],
      cta: meeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-71.webp`,
      blocks: [
        {
          title: "In Control met Compliance voor Advocatenkantoren",
          paragraphs: [
            "Wij bieden ondersteuning bij compliance voor advocatenkantoren, inclusief het naleven van de regels van de Nederlandse Orde van Advocaten en andere relevante wet- en regelgeving.",
            "Onze diensten zorgen ervoor dat jouw kantoor voldoet aan alle noodzakelijke juridische en ethische normen, zodat jij je geen zorgen hoeft te maken. Met onze expertise kun jij vol vertrouwen navigeren door de complexe wereld van wettelijke naleving.",
          ],
        },
        {
          title: "Wij ondersteunen elke juridische praktijk",
          paragraphs: [
            "Onze IT-oplossingen op maat zijn ontworpen om een breed scala aan juridische specialisaties te ondersteunen, zoals:",
          ],
          bullets: [
            "Vastgoedrecht",
            "Intellectueel eigendomsrecht",
            "Familie- en echtscheidingsrecht",
            "Immigratierecht",
            "Letselschade",
            "Civiele procedures",
            "Strafrecht",
            "Bedrijfsoprichting en -compliance",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

const gezondheidszorg: DetailPage = {
  kind: "detail",
  slug: "it-oplossingen-voor-de-gezondheidszorg",
  parent: PARENT,
  metaTitle: "IT-oplossingen voor de zorg: Optimaliseer medische technologie",
  metaDescription:
    "Bescherm de gegevens van jouw patiënten met onze IT-oplossingen voor de gezondheidszorg.",
  hero: {
    title: "IT-oplossingen voor de zorg",
    lead: "Onze IT-oplossingen helpen zorgorganisaties bij het automatiseren van taken, het nemen van betere beslissingen en het creëren van nieuwe kansen voor innovatie.",
    paragraphs: ["Samen werken we aan een gerichte aanpak en maken we jouw processen efficiënter."],
    extra: [
      {
        kicker: "IT-ondersteuning & privacy in de zorg",
        paragraphs: [
          "In de zorg is het zorgvuldig omgaan met gevoelige informatie van kritisch belang. Wij bieden veilige oplossingen voor het opslaan, archiveren en raadplegen van gegevens, waarbij we altijd de privacywetgeving naleven.",
          "Onze IT-diensten verhogen de productiviteit, verlagen de kosten en stroomlijnen de workflows, terwijl ze allemaal voldoen aan de NEN 7510-normen voor gegevensbescherming.",
        ],
      },
    ],
    image: `${IMG}/image-88.webp`,
    cta: meeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: appsImage,
      blocks: [
        {
          title: "IT-diensten voor zorgverleners",
          paragraphs: ["Wij bieden een breed scala aan IT-oplossingen speciaal voor zorgverleners:"],
          bullets: [
            "IT-helpdesk",
            "Clouddiensten",
            "Back-up in de cloud",
            "Zakelijke telefonie",
            "IT-beveiliging",
            "WiFi voor bedrijven",
            "Printoplossingen",
            "IT-inkoop",
            "Internetdiensten",
            "Kantoorinrichting & verhuizing",
          ],
        },
      ],
      cta: meeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-72.webp`,
      blocks: [
        {
          title: "HP Zorgpartnerschap",
          paragraphs: [
            "HP heeft geavanceerde oplossingen ontwikkeld om de patiëntvriendelijkheid te verbeteren, de beveiliging te verhogen en processen te stroomlijnen. Als HP-partner helpen wij jou deze technologieën te integreren in jouw zorgorganisatie, voor veilig gegevensbeheer en efficiënte workflows. Samen ondersteunen we betere zorg en het naleven van de hoogste normen.",
          ],
        },
        {
          title: "Meerdere locaties? Geen probleem",
          paragraphs: [
            "Is jouw zorgorganisatie actief op meerdere locaties? Cloudconnected verbindt ze, zodat je overal dezelfde diensten kunt gebruiken. Denk aan telefonie, internet en zelfs je patiëntendossiersysteem – allemaal veilig geïmplementeerd voor optimale betrouwbaarheid en gegevensbescherming. Met onze oplossingen behoud je consistente processen en naadloze communicatie, ongeacht de locatie.",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

const nonProfit: DetailPage = {
  kind: "detail",
  slug: "it-oplossingen-voor-non-profitorganisaties",
  parent: PARENT,
  metaTitle: "TechSoup Voordelen & IT-oplossingen voor non-profits",
  metaDescription:
    "Versterk jouw non-profit met betaalbare IT-oplossingen. Profiteer van TechSoup voordelen, Microsoft 365 & Cisco donaties. Focus op je missie.",
  hero: {
    title: "Non-profit IT-diensten",
    lead: "De missie van je non-profit organisatie is wat je organisatie vooruit stuwt. Onze IT-oplossingen voor non-profits kunnen je helpen die doelen te bereiken.",
    paragraphs: [],
    kicker: "TechSoup voordelen voor je NGO",
    extra: [
      {
        paragraphs: [
          "Cloudconnected is er trots op samen te werken met TechSoup om non-profits extra ondersteuning en middelen te bieden.",
          "Via TechSoup bieden we sponsoring en speciale aanbiedingen waarmee NGO’s tegen lagere kosten toegang krijgen tot de technologie en software die ze nodig hebben.",
          "Onze samenwerking zorgt ervoor dat jouw organisatie volledig kan profiteren van de programma’s van TechSoup",
        ],
      },
    ],
    image: `${IMG}/image-69.webp`,
    cta: meeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: appsImage,
      blocks: [
        {
          title: "Microsoft 365 & Cisco voor non-profitorganisaties",
          paragraphs: [
            "We helpen non-profitorganisaties maximaal te profiteren van Microsoft 365 en Cisco-donaties.",
            "Microsoft biedt pakketten zoals Business Premium, gratis voor maximaal 10 gebruikers, met Office-desktoptoepassingen, bestandsopslag en -deling in de cloud, webconferenties met chat, audio en HD-video, en andere tools.",
            "We helpen uw organisatie bij het effectief gebruik van deze tools om de productiviteit te verhogen, gegevensbescherming te garanderen en IT-beheer te stroomlijnen.",
            "Daarnaast helpen we u gebruik te maken van de geavanceerde netwerk- en beveiligingsoplossingen van Cisco voor NGO’s om uw activiteiten verder te ondersteunen.",
          ],
        },
      ],
      cta: meeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/image-87.webp`,
      blocks: [
        {
          title: "Kosteneffectieve IT voor non-profitorganisaties",
          paragraphs: [
            "Het beheren van IT-projecten en -investeringen kan een aanzienlijke last zijn voor non-profits, waardoor waardevolle tijd en middelen worden onttrokken aan uw organisatie.",
            "Ons team biedt deskundige hulp bij uw IT-beheer.",
            "Wij regelen alles, van het selecteren van de juiste technologie en het coördineren met leveranciers tot het implementeren en onderhouden van je systemen.",
            "Dit betekent dat u de complexiteit van intern IT-beheer kunt vermijden.",
            "Werk met ons samen en zorg ervoor dat uw IT-investeringen effectief zijn.",
          ],
        },
        {
          kicker: "Enkele van de voordelen van CloudConnected Cloud computing zijn:",
          bullets: [
            "Kapitaaluitgaven verlagen en IT-kosten verlagen",
            "Coördinatie van donateurs en vrijwilligers stroomlijnen",
            "Beschikbaarheid en uptime van applicaties verbeteren",
            "Risico’s, beveiliging en compliance effectief beheren",
            "Aanpassen aan de groeiende en veranderende behoeften van uw organisatie",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

const horeca: DetailPage = {
  kind: "detail",
  slug: "it-diensten-voor-de-horeca",
  parent: PARENT,
  metaTitle: "IT-oplossingen voor de horeca: cybersecurity, WiFi & meer",
  metaDescription:
    "IT-oplossingen voor de horeca: snelle WiFi, ijzersterke beveiliging. Onvergetelijke gastervaring, veilig bedrijf.",
  hero: {
    title: "IT-oplossingen voor de horeca",
    lead: "Wij leveren IT-oplossingen op maat voor de horeca, zodat jouw team zich kan richten op het bieden van 5-sterren gastervaringen. Dit leidt tot positieve recensies en loyale klanten.",
    paragraphs: [],
    kicker: "Complete IT-ondersteuning voor de horeca",
    extra: [
      {
        paragraphs: [
          "Wij begrijpen dat continuïteit essentieel is voor jou en je gasten. Onze snelle ondersteuning zorgt ervoor dat alles soepel blijft lopen, zelfs tijdens de drukste momenten.",
          "Uitstekende service is de sleutel tot succes in de horeca. Ons ervaren team helpt je uitblinken, omzet verhogen, efficiëntie verbeteren en risico’s verminderen.",
        ],
      },
    ],
    image: `${IMG}/Mask-group-75.webp`,
    cta: meeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: `${IMG}/Group-250.webp`,
      blocks: [
        {
          title: "Snelle & Veilige WiFi voor de Horeca",
          paragraphs: [
            "Betrouwbare WiFi is onmisbaar in de horeca. Jouw gasten verwachten snelle internettoegang tijdens hun verblijf.",
            "Cloudconnected maakt gebruik van Cisco Meraki’s cloud managed WiFi voor een stabiele en veilige verbinding. Dit intelligente systeem houdt jouw netwerk up-to-date en geeft inzicht in het gedrag van je gasten, zodat je hun ervaring kunt verbeteren.",
            "Met onze robuuste WiFi-oplossingen helpen we hotels en restaurants te voldoen aan de groeiende vraag naar naadloze connectiviteit, of het nu gaat om zaken of ontspanning.",
            "Bespreek jouw wensen vandaag nog met ons team en zorg dat jouw gasten altijd genieten van betrouwbaar internet.",
          ],
        },
      ],
      cta: meeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-76.webp`,
      blocks: [
        {
          title: "Cybersecurity voor de horeca",
          paragraphs: [
            "Een onvergetelijke gastervaring is essentieel, maar zonder goede beveiliging kunnen klantgegevens in gevaar komen. Dit kan het vertrouwen en de reputatie van jouw bedrijf ernstig schaden.",
            "Cloudconnected beschermt jouw gegevens met ijzersterke verdediging en proactieve monitoring om datalekken te voorkomen. Onze back-up- en herstelsystemen houden jouw gegevens veilig en zorgen dat je voldoet aan de wet- en regelgeving.",
            "Neem contact op met ons team voor meer informatie over onze cybersecurity-oplossingen.",
          ],
        },
        {
          title: "Meerdere locaties? Eén veilig netwerk.",
          paragraphs: [
            "Heeft jouw horecabedrijf meerdere vestigingen? Wij verbinden ze, zodat je overal dezelfde diensten kunt gebruiken: telefonie, internet, vastgoedbeheer – allemaal veilig geïmplementeerd.",
            "Onze oplossingen zorgen voor consistente processen en naadloze communicatie op al jouw locaties. Dit verbetert zowel de gastervaring als de operationele efficiëntie.",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

export const branchPages = [overview, zakelijkeDiensten, logistiek, advocatuur, gezondheidszorg, nonProfit, horeca];

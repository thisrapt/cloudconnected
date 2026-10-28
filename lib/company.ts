// Content for the company, product and utility pages (Over ons, Contact, Partners,
// Werken bij, Amsterdam pages, Copilot, 365 Workplace, booking and payment pages).
// Text is taken verbatim from https://cloudconnected.nl; links point at routes in this app.

import { CALENDLY_URL, SUPPORT_PORTAL_URL } from "@/lib/content";
import type { Cta, DetailPage, FormField, IconCardsSection, MetricsSection } from "@/lib/types";

const IMG = "/images/site";
const meeting: Cta = { label: "Plan een meeting met ons", href: CALENDLY_URL };

const quickAnswers = (
  monthly: [string, string],
  apple: string,
  transfer: string,
): IconCardsSection => ({
  kind: "iconCards",
  title: "Snelle antwoorden",
  layout: "grid",
  items: [
    { icon: `${IMG}/Vector-39.svg`, title: monthly[0], text: monthly[1] },
    { icon: `${IMG}/Vector-40.svg`, title: "Beheer je Apple producten?", text: apple },
    { icon: `${IMG}/Vector-41.svg`, title: "Wie regelt de overstap?", text: transfer },
  ],
});

const metrics = (title: string, firstText: string, secondText: string, thirdText: string, clockIcon: string): MetricsSection => ({
  kind: "metrics",
  title,
  image: `${IMG}/Mask-group-33.webp`,
  items: [
    { icon: `${IMG}/Group-17.svg`, value: "943", text: firstText },
    { icon: `${IMG}/Group-16.svg`, value: "92%", text: secondText },
    { icon: clockIcon, value: "8 sec.", text: thirdText },
  ],
});

const nameField: FormField = { name: "name", label: "Volledige naam", required: true };
const phoneField: FormField = { name: "phone", label: "Telefoonnummer", type: "tel", required: true };

const overOns: DetailPage = {
  kind: "detail",
  slug: "over-ons",
  metaTitle: "Over ons: Wie zijn wij? | CloudConnected",
  metaDescription:
    "Wij zijn CloudConnected, een ICT-provider met meer dan 10 jaar ervaring in veilige, cloud-hosted IT-oplossingen.",
  hero: {
    title: "15 jaar IT-succes",
    lead: "CloudConnected is gevestigd in Amsterdam en helpt sinds 2009 bedrijven in Nederland en daarbuiten met het beheren van hun IT. Ons team regelt alles – ondersteuning, installatie, onderhoud – en blijft nauw betrokken bij de omgeving van elke klant.",
    kicker: "Wie zijn wij?",
    paragraphs: [
      "We ondersteunen MKB-bedrijven tot 500 werknemers in sectoren zoals recht, zakelijke dienstverlening, horeca, gezondheidszorg, non-profits, logistiek en andere professionele sectoren. Sommigen hebben één locatie, terwijl anderen een mix van kantoren en externe medewerkers beheren. Onze ondersteuning omvat zowel de dagelijkse IT als de grotere veranderingen zoals verhuizingen, uitbreidingen en nieuwe kantooropstellingen. We werken ook vanuit een tweede kantoor in Barcelona en werken samen met vertrouwde IT-partners wereldwijd.",
    ],
    video: { id: "597698393", poster: "/images/Component-12-1.webp" },
    cta: { label: "Boek je gratis strategisch gesprek", href: CALENDLY_URL },
  },
  sections: [
    {
      kind: "iconCards",
      title: "Onze missie",
      layout: "list",
      items: [
        {
          icon: `${IMG}/New-Project.svg`,
          title: "Hoe we ondersteunen",
          text: "We werken als een verlengstuk van je team. Dat betekent dat we snel reageren, betrouwbaar en betrokken zijn. We nemen de tijd om je situatie te begrijpen en blijven beschikbaar als het erop aankomt.",
        },
        {
          icon: `${IMG}/2025-04-New-Project-1.svg`,
          title: "Hoe we bouwen",
          text: "We pushen geen standaardoplossingen. We kijken hoe uw bedrijf werkt en bouwen IT-instellingen die daarbij passen: praktisch, schaalbaar en geschikt voor uw dagelijkse behoeften.",
        },
        {
          icon: "/images/New-Project-2.svg",
          title: "Hoe we communiceren",
          text: "We houden de communicatie eenvoudig en direct. Je weet altijd waar je aan toe bent. Geen verrassingen, alleen voortdurende updates en eerlijke gesprekken.",
        },
      ],
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-2025-05-14T163047.715.webp`,
      blocks: [
        {
          title: "Ontmoet ons team",
          paragraphs: [
            "Ons team werkt vanuit ons kantoor in Amsterdam, met extra ondersteuning van collega’s in Barcelona. Elk teamlid bestaat uit gepassioneerde IT-specialisten en cloudexperts en brengt praktijkervaring, up-to-date certificeringen en een oprechte interesse in technologie met zich mee.",
            "We maken geen gebruik van uitbestede ondersteuning of anonieme ticketsystemen. Je spreekt met iemand die je omgeving kent en gekwalificeerd is om je te helpen. De ondersteuning is direct, persoonlijk en beschikbaar zoals jij dat wilt, inclusief via WhatsApp.",
            "Wilt u met ons samenwerken? We zijn altijd op zoek naar gemotiveerde mensen die graag problemen oplossen en IT gemakkelijker maken voor anderen. Bekijk onze carrièrepagina of stuur ons snel een bericht.",
          ],
        },
      ],
      cta: { label: "Word lid van het team", href: "/werken-bij/" },
    },
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: `${IMG}/Mask-group-46.webp`,
      blocks: [
        {
          title: "Onze partners",
          paragraphs: [
            "We werken samen met belangrijke leveranciers op het gebied van cloudservices, netwerken, hardware en cyberbeveiliging, zodat we betrouwbare, goed ondersteunde oplossingen kunnen leveren, waar uw bedrijf ook naartoe gaat.",
            "Om internationale activiteiten te ondersteunen, werken we ook samen met een betrouwbaar netwerk van IT-partners wereldwijd, waardoor verhuizingen en uitbreidingen eenvoudiger te beheren zijn.",
          ],
        },
      ],
      cta: { label: "Lees meer", href: "/onze-partners/" },
    },
    { kind: "stats", title: "Metrics waar we trots op zijn" },
  ],
  testimonials: false,
};

const contact: DetailPage = {
  kind: "detail",
  slug: "contact",
  metaTitle: "Contact: neem vrijblijvend contact op met CloudConnected",
  metaDescription:
    "Contact opnemen met CloudConnected kan op verschillende manieren. Stuur een email, bel ons of stuur een bericht via WhatsApp.",
  hero: {
    title: "Contact",
    lead: "Vanuit het centrum van Amsterdam helpen onze cloud experts klanten wereldwijd. Neem gerust contact met ons op of kom langs op ons kantoor voor een vrijblijvende kennismaking.",
    paragraphs: ["Je kunt ons dagelijks op de volgende manieren bereiken:"],
    extra: [
      {
        items: [
          { title: "Adres", text: "van Boetzelaerstraat 1\n1051CS Amsterdam\nNederland" },
          { title: "E-mail", text: "Helpdesk@cloudconnected.nl\nSales@cloudconnected.nl" },
          { title: "Telefoon & WhatsApp", text: "+31 20 30 34 260", href: "https://wa.me/31203034260" },
          { title: "Openingstijden", text: "Maandag – Vrijdag / 08:00 – 18:00\nHelpdesk / 24×7" },
        ],
      },
    ],
    image: `${IMG}/Screenshot-2022-11-16-at-14.42-1.webp`,
    secondaryCta: { label: "Algemene voorwaarden", href: "/algemene-voorwaarden/" },
  },
  sections: [
    {
      kind: "iconCards",
      layout: "grid",
      items: [
        {
          icon: `${IMG}/image-81.svg`,
          title: "Praat met verkoop",
          text: "Geïnteresseerd in de IT-oplossingen van CloudConnected? Plan eenvoudig een gesprek in met een lid van ons verkoopteam.",
          cta: { label: "Praat met verkoop", href: CALENDLY_URL },
        },
        {
          icon: `${IMG}/image-82.svg`,
          title: "Neem contact op met klantenservice",
          text: "Heeft u hulp nodig bij de diensten van CloudConnected? Bezoek ons klantportaal om te chatten met ons ondersteuningsteam.",
          cta: { label: "Neem contact op met ondersteuning", href: SUPPORT_PORTAL_URL },
        },
      ],
    },
    {
      kind: "form",
      decor: "orange",
      image: `${IMG}/Group-298.webp`,
      blocks: [{ title: "Vragen? Stuur ons een bericht" }],
      form: {
        id: "formulier",
        fields: [
          nameField,
          phoneField,
          { name: "email", label: "Zakelijke e-mail", type: "email" },
          {
            name: "message",
            label: "Beschrijf alstublieft de IT-problemen waarmee u hulp nodig heeft in detail:",
            type: "textarea",
            required: true,
          },
        ],
        submit: "Bel me terug",
      },
    },
    quickAnswers(
      [
        "Aanpasbaar per maand",
        "Goed nieuws! Onze contracten zijn flexibel en kunnen maandelijks worden aangepast. We geloven in het verdienen van uw vertrouwen door consistente waarde te leveren als uw partner.",
      ],
      "Ja, wij ondersteunen zowel Microsoft- als Apple-producten. Naast het ondersteunen van Apple kunnen wij ook het volledige assortiment leveren en repareren.",
      "Wij bieden onze eigen gratis Transfer Service aan. Wij annuleren uw bestaande contracten en zorgen voor een soepele overstap naar CloudConnected, uw vertrouwde IT-bedrijf in Amsterdam.",
    ),
  ],
  testimonials: false,
};

const onzePartners: DetailPage = {
  kind: "detail",
  slug: "onze-partners",
  metaTitle: "Onze partners: essentieel voor het leveren van IT-ondersteuning",
  metaDescription:
    "Dankzij onze partners blijven we op de hoogte van de nieuwste technologische trends, waardoor we onze klanten nog beter kunnen ondersteunen.",
  hero: {
    title: "Onze partners",
    lead: "We waarderen partnerschappen die ons vermogen om uitzonderlijke IT-services te leveren versterken. In samenwerking met leiders op het gebied van technologie en infrastructuur bieden we onze klanten betrouwbare en innovatieve oplossingen. Door deze partnerschappen blijven we op de hoogte van de nieuwste technologische trends, waardoor we onze diensten nog beter kunnen afstemmen op de uiteenlopende behoeften van onze klanten. Onze toewijding aan deze relaties is essentieel voor het leveren van uitgebreide IT-ondersteuning.",
    paragraphs: [],
    image: `${IMG}/Mask-group-26.webp`,
    cta: meeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: `${IMG}/Group-237-1-2.webp`,
      blocks: [
        {
          title: "Cloud-partners",
          paragraphs: [
            "We werken nauw samen met Microsoft om onze cloudservices te verbeteren. Dankzij deze samenwerking kunnen we nieuwe technologieën snel toepassen en voorop blijven lopen in onze branche.",
            "Als Microsoft Partner werken we onze kennis en expertise van Microsoft-technologieën voortdurend bij om onze klanten de nieuwste en meest betrouwbare cloudoplossingen te kunnen bieden.",
          ],
        },
      ],
      cta: meeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-34.webp`,
      blocks: [
        {
          title: "Metrics waar we trots op zijn:",
          paragraphs: [
            "We werken samen met topnetwerkproviders zoals KPN, Odido, Euro Fiber in Nederland en Proximus in België. Deze partnerschappen helpen ons een breed scala aan netwerkopties aan te bieden, waaronder DSL en glasvezeldiensten, om stabiele internettoegang te bieden op verschillende locaties. We werken ook samen met grote hardwareleveranciers zoals Apple en HP om ervoor te zorgen dat onze infrastructuuroplossingen worden aangedreven door de beste technologie die beschikbaar is. Onze netwerken zijn gebouwd met geavanceerde Cisco-technologie, zodat we een volledige netwerkoplossing kunnen leveren die al je communicatiebehoeften effectief ondersteunt.",
          ],
        },
        {
          title: "Beveiligingspartners",
          paragraphs: [
            "Onze beveiligingspartnerships met Symantec en Acronis versterken onze verdediging tegen digitale bedreigingen. Symantec biedt een scala aan beveiligingsoplossingen, waaronder virusbescherming, firewalls, VPN’s en inbraakdetectie. Acronis richt zich op gegevensbescherming en noodherstel en biedt geavanceerde back-upoplossingen en verdediging tegen ransomware. Deze samenwerking draagt bij aan onze mogelijkheden om jouw IT-omgeving te beveiligen en activiteiten te beschermen tegen verschillende cyberbedreigingen.",
          ],
        },
      ],
    },
    {
      kind: "logos",
      logos: [
        { src: `${IMG}/image-84.png`, alt: "Microsoft" },
        { src: `${IMG}/Group-27.png`, alt: "HP" },
        { src: `${IMG}/Cisco-Meraki-1024x768-1.png`, alt: "Cisco Meraki" },
        { src: `${IMG}/kpn-2-logo.png`, alt: "KPN" },
      ],
    },
  ],
};

const cvMail: Cta = { label: "Stuur je CV in", href: "mailto:info@cloudconnected.nl" };

const werkenBij: DetailPage = {
  kind: "detail",
  slug: "werken-bij",
  metaTitle: "Werken bij CloudConnected",
  metaDescription:
    "Werken bij CloudConnected betekent werken in een ondersteunend team waar je werk er echt toe doet, met oog voor professionele en persoonlijke groei.",
  hero: {
    title: "Waarom bij ons",
    lead: "Bij CloudConnected kom je terecht in een ondersteunend team waar je werk er echt toe doet. We streven naar een werkplek waar iedereen zich kan ontplooien, kan leren en zijn vaardigheden kan ontwikkelen. Je werkt samen met deskundige collega’s aan zinvolle IT-projecten die onze services en oplossingen verbeteren. Onze bedrijfscultuur stimuleert zowel persoonlijke als professionele groei en zorgt ervoor dat de bijdragen van elk teamlid worden gewaardeerd en impact hebben. Kom bij ons werken en maak carrière in een stimulerende en dynamische omgeving.",
    paragraphs: [],
    image: `${IMG}/Mask-group-32.webp`,
    cta: cvMail,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: `${IMG}/Mask-group-36.webp`,
      blocks: [
        {
          title: "Hoe te solliciteren",
          paragraphs: [
            "Onze wervingsprocedure is eenvoudig. Stuur om te solliciteren je cv naar HR@cloudconnected.nl. We beoordelen of je vaardigheden en ervaring aansluiten bij de behoeften van ons team. Als er een match is, nemen we contact met je op voor een gesprek om de mogelijkheden in meer detail te bespreken. Na het gesprek nemen we snel een beslissing en informeren we je over de uitkomst. Als je wordt geselecteerd, leggen we je de volgende stappen uit en helpen we je door het inwerkproces om ervoor te zorgen dat je soepel in ons team integreert. We streven ernaar om het wervingsproces zo duidelijk en eenvoudig te maken voor jou.",
          ],
        },
      ],
      cta: cvMail,
    },
  ],
};

const itBedrijfAmsterdam: DetailPage = {
  kind: "detail",
  slug: "it-bedrijf-amsterdam",
  metaTitle: "IT bedrijf Amsterdam - Moderne werkplek oplossingen",
  metaDescription:
    "Verander IT in jouw unieke voordelen. Ons IT-bedrijf in Amsterdam levert wendbare, doelgerichte oplossingen voor ambitieuze MKB'ers.",
  hero: {
    title: "IT bedrijf Amsterdam",
    lead: "Bij CloudConnected helpen we bedrijven bij het opzetten en beheren van moderne werkplekken, niet alleen in Amsterdam, maar in heel Nederland.",
    kicker: "IT Audit voor ambitieuze MKB’ers: Optimaliseer en bespaar – slechts €249!",
    paragraphs: [
      "Ontdek of je teveel betaalt, vind besparingsmogelijkheden en garandeer je veiligheid – alles voor maar €249! (waarde €1.104)",
    ],
    extra: [
      {
        bullets: [
          "IT Audit – Betaal je teveel?",
          "Volledige Cyber & Compliance Risico Check",
          "Bonus: Dark Web Scan op Gelekte Bedrijfsgegevens",
        ],
      },
    ],
    image: `${IMG}/image-33-3.webp`,
    cta: { label: "Boek een gratis gesprek", href: CALENDLY_URL },
    secondaryCta: { label: "€249 Aanbieding", href: "#contact-form" },
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      video: { id: "917483228", poster: "/images/Rectangle-101-1.webp" },
      blocks: [
        {
          title: "Betrouwbaar IT bedrijf Amsterdam voor MKB",
          paragraphs: [
            "Onze 10+ jaar ervaring met het bedienen van Amsterdamse MKB’ers, gecombineerd met onze toewijding aan persoonlijke service en de adoptie van nieuwe technologieën, stelt ons in staat toonaangevende IT-strategieën en -diensten te leveren aan bedrijven in heel Amsterdam en daarbuiten. Onze unieke frameworks:",
          ],
          items: [
            {
              title: "1. Zie onze diensten als LEGO-blokjes.",
              text: "Eerst kies je de specifieke blokjes (diensten) die jouw mensen, jouw werkplek en jouw bedrijf ten goede komen. Vervolgens zetten wij die blokjes in elkaar tot een IT-pakket dat perfect bij jouw bedrijf past, zonder overbodige extra’s.",
            },
            {
              title: "2. “Jouw mensen, jouw werkplek, jouw bedrijf”",
              text: "Worden jouw teams vertraagd door hun tools? Is het tijd voor een IT-upgrade? Of wil je jouw processen vereenvoudigen? Wij richten ons op drie belangrijke gebieden: Jouw mensen, jouw werkplek en jouw bedrijf. Vertel ons waar je verbeteringen wilt zien, en wij vinden de juiste oplossingen voor elk gebied.",
            },
          ],
        },
      ],
      cta: meeting,
    },
    metrics(
      "Resultaten waar we trots op zijn:",
      "Elke dag vertrouwen 943 gebruikers op CloudConnected, wat ons tot een van de toonaangevende IT-bedrijven in Amsterdam voor het MKB maakt.",
      "van de vragen wordt direct in het eerste telefoongesprek beantwoord.",
      "Is de gemiddelde wachttijd voordat je onze Helpdesk-ondersteuning bereikt.",
      `${IMG}/Group-15.svg`,
    ),
    { kind: "testimonials" },
    {
      kind: "form",
      decor: "orange",
      blocks: [
        {
          title: "IT Audit: Optimaliseer & Bespaar! Slechts €249.",
          paragraphs: [
            "Uitgebreide IT-audit voor ambitieuze bedrijven in Amsterdam: ontdek verborgen kosten, verbeter efficiëntie en beveiliging. Voor slechts € 249 (ter waarde € 1.104) evalueren we je IT-opstelling en identificeren we overbetalingen, besparingsmogelijkheden en risico’s. Bonus: Dark Web scan op gelekte data.",
            "Vul eenvoudig het formulier in om je audit in te plannen en de eerste stap te zetten naar een meer geoptimaliseerde, veilige IT-omgeving.",
          ],
          bullets: [
            "Beoordeel je huidige IT-opstelling",
            "Identificeer verbeterpunten",
            "Kijk waar je mogelijk teveel betaalt",
            "Krijg een volledige Cyber & Compliance risicocontrole",
            "Bonus: Controle op gelekte bedrijfsgegevens op het dark web.",
          ],
        },
      ],
      form: {
        id: "contact-form",
        title: "Vul het formulier in om je IT-audit van € 249 aan te vragen. We nemen binnenkort contact met je op om dit te regelen.",
        fields: [
          nameField,
          phoneField,
          { name: "email", label: "Zakelijke e-mail", type: "email", required: true },
          {
            name: "concerns",
            label: "Wat zijn uw belangrijkste zorgen met uw huidige IT-opstelling?",
            type: "textarea",
            required: true,
          },
        ],
        submit: "Vraag jouw IT-audit aan",
      },
    },
    quickAnswers(
      [
        "Aanpasbaar per maand",
        "Goed nieuws! Onze contracten zijn flexibel en kunnen maandelijks worden aangepast. Wij geloven erin dat we jouw vertrouwen verdienen door consistent waarde te leveren als jouw partner.",
      ],
      "Ja, we ondersteunen zowel Microsoft- als Apple-producten. Naast het ondersteunen van Apple, kunnen we ook het volledige assortiment leveren en repareren.",
      "Wij hebben onze eigen gratis Overstapservice. We zeggen je bestaande contracten op en zorgen voor een soepele overstap naar CloudConnected, jouw vertrouwde IT-bedrijf in Amsterdam.",
    ),
  ],
};

const strategyCall: Cta = { label: "Boek uw gratis strategiegesprek", href: CALENDLY_URL };

const itBeheerAmsterdam: DetailPage = {
  kind: "detail",
  slug: "it-beheer-amsterdam",
  metaTitle: "IT-beheer Amsterdam: Besteed uw IT-behoeften uit",
  metaDescription:
    "IT-beheer Amsterdam voor het MKB. Bereik uw bedrijfsdoelen met betrouwbare IT-services, gestroomlijnde activiteiten en robuuste beveiliging.",
  hero: {
    title: "IT-beheer Amsterdam",
    lead: "IT-beheer in Amsterdam, zo flexibel als LEGO. Kies de services die je nodig hebt. Of het nu gaat om volledig IT-beheer en infrastructuurverandering of specifieke IT-ondersteuningspakketten.",
    paragraphs: ["Neem vandaag nog contact met ons op om jouw ideale IT-oplossing samen te stellen."],
    image: `${IMG}/Mask-group-39.webp`,
    cta: strategyCall,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      video: { id: "597698393", poster: "/images/Component-12-1.webp" },
      blocks: [
        {
          title: "Veroorzaakt IT problemen?",
          paragraphs: [
            "Trage computers & internet, onverwachte crashes, onverwachte IT-facturen. Wij begrijpen de uitdagingen waar Amsterdamse bedrijven voor staan. Onze oplossingen voor IT-beheer in Amsterdam zijn ontworpen om:",
          ],
          bullets: [
            "Betrouwbare, responsieve ondersteuning te bieden: Nooit meer in de wacht staan of te maken hebben met onbehulpzame technici. We zijn beschikbaar om eventuele problemen snel op te lossen.",
            "Problemen te voorkomen voordat ze zich voordoen: We bewaken jouw systemen proactief om problemen op te sporen en te verhelpen voordat ze je bedrijf beïnvloeden.",
            "Duidelijk en transparant te communiceren: We spreken duidelijke taal. We zullen altijd eerlijk zijn over de kosten en aanbevelingen. Met IT-beheer Amsterdam kom je niet voor verrassingen te staan.",
            "Lego-achtige oplossingen te bieden: Jouw bedrijf is uniek en je IT-behoeften dus ook. Samen met jou ontwerpen we een op maat gemaakt pakket voor IT-beheer dat past bij jouw budget en doelstellingen.",
          ],
        },
      ],
      cta: strategyCall,
    },
    metrics(
      "Metrics waar we trots op zijn:",
      "Gebruikers vertrouwen elke dag op de diensten van CloudConnected.",
      "Van alle vragen wordt meteen beantwoord in het eerste telefoongesprek.",
      "Is de gemiddelde wachttijd voordat je onze helpdeskondersteuning bereikt.",
      `${IMG}/2024-06-Group-15.svg`,
    ),
    { kind: "testimonials" },
    {
      kind: "contactDetails",
      title: "IT-beheer Amsterdam",
      paragraphs: [
        "Vanuit het centrum van Amsterdam helpen onze IT-services en cloudexperts klanten wereldwijd. Neem gerust contact met ons op of kom langs op ons kantoor voor een vrijblijvende kennismaking.",
        "Je kunt ons dagelijks op de volgende manieren bereiken:",
      ],
      form: {
        title: "Ben je nieuwsgierig en wil je meer weten?",
        fields: [
          { name: "name", label: "Naam", required: true },
          { name: "phone", label: "Nummer", type: "tel", required: true },
        ],
        submit: "Bel me terug",
      },
      map: true,
    },
  ],
};

const requestDetails: Cta = { label: "Vraag meer details aan", href: "/contact/#formulier" };

const microsoftCopilot: DetailPage = {
  kind: "detail",
  slug: "microsoft-copilot",
  metaTitle: "Microsoft Copilot voor Slimmere Bedrijven in Nederland.",
  metaDescription:
    "Help jouw team taken te vereenvoudigen, tijd te besparen en efficiënter te werken. Microsoft Copilot AI voor bedrijven in Nederland.",
  hero: {
    title: "Microsoft Copilot",
    lead: "Integreer Microsoft Copilot in jouw workflows en maak jouw mensen en bedrijfsprocessen productiever.",
    kicker: "Waarom kiezen voor Microsoft Copilot?",
    paragraphs: [
      "Copilot maakt jouw medewerkers beter in waar ze al goed in zijn en helpt hen snel te beheersen wat ze nog niet hebben geleerd. Het bespaart tijd op schrijven, bronnen verzamelen en bewerken, en helpt je om jouw inbox in enkele minuten in plaats van uren leeg te maken. Het maakt vergaderingen ook minder stressvol door belangrijke punten samen te vatten en actiepunten voor te stellen. Met een simpele prompt creëert het prachtige presentaties en meer. In het huidige tijdperk met veel concurrentie is Copilot een tool die jouw bedrijf zich niet kan veroorloven te missen.",
    ],
    image: `${IMG}/image.webp`,
    cta: meeting,
  },
  sections: [
    {
      kind: "pricing",
      title: "Copilot: Express vs Pro",
      features: ["Vergadernotities", "Geavanceerd zoeken", "E-mails en documenten schrijven", "Virtuele training"],
      plans: [
        { name: "Express", included: [true, false, false, true], price: "€ 16.60" },
        { name: "Pro", included: [true, true, true, true], price: "€ 38.10" },
      ],
      addOns: {
        title: "Optionele add-ons:",
        items: [
          {
            label: "Onbeperkt bellen naar vaste lijnen en mobiele nummers in Nederland via Microsoft Teams.",
            href: "/cloud-telefoonsystemen-teams-webex/",
          },
          { label: "KPN Onbeperkte SIM-kaart", href: "/cloud-telefoonsystemen-teams-webex/" },
          { label: "Zakelijke Glasvezel & WiFi", href: "/zakelijk-internet/" },
        ],
        price: "Vanaf € 21.00",
      },
      cta: requestDetails,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group.webp`,
      blocks: [
        {
          title: "Copilot virtuele training",
          paragraphs: [
            "Microsoft Copilot virtuele training is een extra voordeel voor bedrijven die zich via ons abonneren op Copilot.",
            "De cursus helpt jouw team snel te leren hoe ze de functies van Copilot kunnen gebruiken, inclusief het navigeren door de interface, het maken van prompts en het gebruiken van tools zoals de Compose-modus en plug-ins van Edge. Met toegang tot meer dan 400 extra cursussen is het een praktische manier om ervoor te zorgen dat jouw medewerkers het meeste uit jouw abonnement halen.",
          ],
        },
        {
          title: "Belangrijkste Microsoft Copilot-functies",
          bullets: [
            "Geautomatiseerde vergadernotities: Leg automatisch notities en takenlijsten vast. (Inbegrepen in Express & Pro)",
            "E-mailassistent: Genereer e-mails in Outlook op basis van het bericht dat je hebt ontvangen en jouw gewenste antwoord.",
            "Documentcreatie: Maak complete Word- of PowerPoint-documenten met AI-ondersteuning.",
            "Bedrijfsbrede zoekopdracht: Vind gemakkelijk informatie binnen de gegevens van jouw bedrijf door eenvoudige vragen te stellen zoals \"Wat kost artikel X?\" of \"Waar heb ik het laatst met klant X over gehad?\".",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

const workplace365: DetailPage = {
  kind: "detail",
  slug: "moderne-it-oplossing-voor-op-de-werkplek",
  metaTitle: "365 Workplace Oplossing: Gemaakt voor Moderne Werkplekken",
  metaDescription:
    "365 Workplace vereenvoudigt IT-beheer voor moderne werkplekken met Microsoft 365-tools, ondersteuning en flexibele abonnementen.",
  hero: {
    title: "365 Workplace Oplossing",
    lead: "365 Workplace biedt een uitgebreide en veilige IT-omgeving voor organisaties met 5+ werknemers.",
    kicker: "Wat is 365 Workplace en waarom dit inschakelen?",
    paragraphs: [
      "365 Workplace EXPRESS en PRO zijn dé oplossingen voor bedrijven die vertrouwen op Microsoft 365. Het zijn complete managed services die alles bieden voor een moderne, efficiënte en veilige digitale werkomgeving. Gebouwd op Microsoft 365 en compatibel met Windows/Mac, voorzien ze in al jouw IT-behoeften: van installatie en beveiliging tot doorlopend onderhoud en support.",
    ],
    image: `${IMG}/Group-301-1.webp`,
    cta: meeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: `${IMG}/Rectangle-101.png`,
      blocks: [
        {
          title: "Moderne werkplek",
          paragraphs: ["De moderne werkplek is een compleet pakket met alle diensten die jouw bedrijf nodig heeft."],
          bullets: [
            "Microsoft 365 Business Premium: Het volledige pakket Office-apps - Word, Excel, PowerPoint, Outlook en Teams.",
            "Zakelijke e-mail & agenda: Onbeperkte e-mailopslag en een gedeelde agenda om georganiseerd te blijven met je team.",
            "Onderhoud & ondersteuning: Wekelijks computeronderhoud & onbeperkte helpdesk ondersteuning.",
            "Veilig inloggen: Als je inlogt vanaf een andere locatie, bevestig je jouw toegang met een mobiele pushmelding.",
            "Veiligheidspakket: Jouw apparaten worden beschermd tegen virussen en malware, en schadelijke websites worden automatisch geblokkeerd",
            "Opslag en samenwerking van documenten: Veilig documenten opslaan en eenvoudig samenwerken via Teams.",
          ],
        },
      ],
      cta: meeting,
    },
    {
      kind: "pricing",
      title: "Express vs Pro",
      note: "* Geniet van een korting van €5,00/€7,50 per gebruiker bij een 3-jarig contract.",
      features: ["Moderne Werkplek", "Wachtwoordkluis", "Volledige Bescherming & Dagelijkse Back-up", "24×7 Cyberbeveiligingsteam"],
      plans: [
        { name: "Express", included: [true, false, false, false], price: "€ 62.00" },
        { name: "Pro", included: [true, true, true, true], price: "€ 92.00" },
      ],
      addOns: {
        title: "Optionele aanvullingen:",
        items: [
          {
            label: "Onbeperkte gesprekken naar vaste lijnen & mobiel in Nederland via Microsoft Teams.",
            href: "/cloud-telefoonsystemen-teams-webex/",
          },
          { label: "KPN Onbeperkte SIM-kaart", href: "/cloud-telefoonsystemen-teams-webex/" },
          { label: "Copilot Express", href: "/microsoft-copilot/" },
          { label: "Copilot PRO", href: "/microsoft-copilot/" },
        ],
        price: "Vanaf € 16.60",
      },
      cta: { label: "Vraag om meer details", href: "#request" },
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-94.webp`,
      blocks: [
        {
          title: "Wat is inbegrepen bij Express & Pro?",
          bullets: [
            "Zorgeloze IT: Blijf veilig en up-to-date met 24/7 monitoring en ononderbroken systeemprestaties.",
            "Georganiseerd en conform: Altijd toegang tot een compleet digitaal dossier van jouw IT-omgeving, met een IT-handboek dat voldoet aan standaarden zoals ISO/NEN.",
            "IT-beveiligingsscan: Identificeer en verhelp beveiligingsrisico's bij het activeren van 365 Workplace.",
            "Toegewijde IT-manager: Een persoonlijke expert die jouw bedrijf en IT-geschiedenis kent en ondersteuning en check-ins op maat biedt.",
            "Installatie nieuwe medewerker: Laat onze helpdesk de IT-taken voor nieuwe medewerkers afhandelen, zodat ze snel aan de slag kunnen.",
          ],
        },
        {
          title: "Optionele toevoegingen",
          items: [
            {
              title: "Microsoft Copilot",
              text: "Met de Express & Pro-abonnementen van Copilot kun je eenvoudig notities van vergaderingen vastleggen, e-mails opstellen, documenten maken en snel jouw bedrijfsgegevens doorzoeken.",
              href: "/microsoft-copilot/",
            },
            {
              title: "Onbeperkt bellen",
              text: "Geniet van onbeperkt bellen naar vaste en mobiele nummers in Nederland via Microsoft Teams, met de optie van een KPN Onbeperkt simkaart.",
              href: "/cloud-telefoonsystemen-teams-webex/",
            },
          ],
        },
      ],
      cta: meeting,
    },
    { kind: "testimonials" },
    {
      kind: "form",
      blocks: [
        {
          title: "Krijg alle details over 365 Workplace",
          paragraphs: ["We bieden flexibele abonnementen die passen bij jouw behoeften, waaronder:"],
          bullets: [
            "365Workplace Express: Essentiële tools voor een moderne werkplek.",
            "365Workplace Pro: Verbeterde beveiliging en geavanceerde functies.",
            "365 Werkplek Onbeperkt Bellen: Onbeperkt bellen binnen Nederland.",
            "Copilot: AI-functies om de productiviteit te verhogen.",
          ],
          closing: [
            "Hulp nodig bij het kiezen van het juiste abonnement? Onze experts adviseren je graag!",
            "Vraag prijzen aan door het formulier in te vullen of bel ons op +31 20 30 34 260.",
          ],
        },
      ],
      form: {
        id: "request",
        fields: [
          nameField,
          phoneField,
          { name: "email", label: "E-mailadres", type: "email", required: true },
          {
            name: "message",
            label: "Laat ons weten welk abonnement je voorkeur heeft en welke vragen je hebt.",
            type: "textarea",
            required: true,
          },
        ],
        submit: "Vraag meer informatie aan",
      },
    },
    quickAnswers(
      [
        "Maandelijks aanpasbaar",
        "Goed nieuws! Onze contracten zijn flexibel en kunnen maandelijks worden aangepast. We geloven erin dat we jouw vertrouwen verdienen door consistente waarde te leveren als jouw partner.",
      ],
      "Jazeker! We ondersteunen zowel Microsoft- als Apple-producten. Naast ondersteuning voor Apple kunnen we ook het hele assortiment leveren en repareren.",
      "Wij hebben onze eigen gratis Overstapservice. We zeggen jouw bestaande contracten op en zorgen voor een soepele overstap naar CloudConnected, jouw vertrouwde IT-bedrijf in Amsterdam.",
    ),
  ],
};

const eenOproepBoeken: DetailPage = {
  kind: "detail",
  slug: "een-oproep-boeken",
  metaTitle: "Een Oproep Boeken - CloudConnected",
  metaDescription: "Plan een gratis introductiegesprek over jouw IT-strategie met CloudConnected.",
  hero: {
    title: "Een oproep boeken",
    lead: "",
    paragraphs: [],
    layout: "simple",
  },
  sections: [
    {
      kind: "embed",
      src: "https://calendly.com/d/cpzp-bpf-w4t/introductie-call-it-strategie?hide_gdpr_banner=1&primary_color=f05a1a",
      title: "Introductie call IT-strategie",
      height: 760,
    },
  ],
  testimonials: false,
};

const betalingGeslaagd: DetailPage = {
  kind: "detail",
  slug: "betaling-geslaagd",
  metaTitle: "Betaling geslaagd - CloudConnected",
  metaDescription: "Dank voor de betaling! Deze is zojuist in goede orde ontvangen.",
  hero: {
    title: "Dank voor de betaling!",
    lead: "Deze is zojuist in goede orde ontvangen.",
    paragraphs: [],
    layout: "simple",
    cta: { label: "Terug naar de homepage", href: "/" },
    secondaryCta: { label: "Laatste nieuws", href: "/blog/" },
  },
  sections: [],
  testimonials: false,
  noindex: true,
};

export const companyPages: DetailPage[] = [
  overOns,
  contact,
  onzePartners,
  werkenBij,
  itBedrijfAmsterdam,
  itBeheerAmsterdam,
  microsoftCopilot,
  workplace365,
  eenOproepBoeken,
  betalingGeslaagd,
];

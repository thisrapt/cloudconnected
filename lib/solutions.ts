// Content for the solution pages (the "Oplossingen" menu). Text is taken verbatim from
// the Dutch pages on https://cloudconnected.nl; links point at the routes in this app.

import { CALENDLY_URL } from "@/lib/content";
import type { Cta, DetailPage, OverviewPage } from "@/lib/types";

const IMG = "/images/solutions";

export type SolutionPage = DetailPage | OverviewPage;

const meeting: Cta = { label: "Plan een meeting met ons", href: CALENDLY_URL };
const strategyMeeting: Cta = { label: "Boek je gratis Strategische Meeting", href: CALENDLY_URL };

/* ------------------------------------------------------------------ */
/* Overview pages                                                       */
/* ------------------------------------------------------------------ */

const techVoorJouwMensen: OverviewPage = {
  kind: "overview",
  slug: "tech-voor-jouw-mensen",
  metaTitle: "Uitgebreide IT-ondersteuning voor teams op afstand en op locatie",
  metaDescription:
    "Device-abonnementen, cloudtools en volledige IT-ondersteuning voor teams op afstand en op locatie. Verhoog de samenwerking en productiviteit.",
  hero: {
    title: "Tech voor jouw mensen",
    lead: "Device-abonnementen, cloudgebaseerde tools en volledige IT-ondersteuning voor teams op afstand en op locatie. Verbeter de samenwerking en productiviteit!",
    image: `${IMG}/Rectangle-32-1.webp`,
    cta: meeting,
  },
  intro: {
    cards: [
      {
        title: "Cloudgebaseerde tools voor teamwork",
        text: "Verbeter teamwork met Microsoft 365, Google Workspace-omgevingstools en -services.",
        href: "/cloud-werkplekondersteuning/",
      },
      {
        title: "Snelle technische ondersteuning en beveiliging",
        text: "Proactieve ondersteuning en bescherming, zodat jouw activiteiten veilig en ononderbroken zijn.",
        href: "/mkb-it-helpdesk-support/",
      },
      {
        title: "Onbeperkt bellen oplossingen",
        text: "Teams & Webex met mobiele toegang zorgen ervoor dat je team altijd en overal kan communiceren.",
        href: "/cloud-telefoonsystemen-teams-webex/",
      },
      {
        title: "Gespecialiseerde trainingsprogramma’s",
        text: "Verbeter de vaardigheden en technologie en stroomlijn de integratie en efficiëntie van je team met nieuwe tools.",
        href: "/microsoft-365-cybersecurity-training/",
      },
      {
        title: "Abonnementen op moderne devices",
        text: "Hardware as a Service (HaaS) abonnementen, voor een up-to-date en duurzame tech-omgeving.",
        href: "/hardware-abonnements-service/",
      },
    ],
    title: "IT-ondersteuning voor jouw teams op afstand en op locatie",
    paragraphs: [
      "Bij CloudConnected begrijpen we de kracht van een goed uitgerust team. Onze diensten bieden de nieuwste devices en productiviteitsverhogende Modern Workplace-tools, inclusief hardware- en softwareabonnementen die samenwerking en innovatie bevorderen.",
      "Onze oplossingen voor telefonie en videoconferenties zijn op maat gemaakt om jouw team verbonden te houden en naadloze communicatie mogelijk te maken. Met een snel reagerende helpdesk en uitgebreide cyberprotectie zorgen we ervoor dat jouw personeel wordt ondersteund en hun werk veilig is.",
      "Onze gespecialiseerde Trainingsprogramma’s zorgen ervoor dat jouw team met vertrouwen door het digitale landschap kan navigeren.",
    ],
    cta: meeting,
  },
  topics: [
    {
      number: `${IMG}/32.svg`,
      title: "Cloudgebaseerde tools voor teamwork",
      paragraphs: [
        "We helpen je aan de slag te gaan met Microsoft 365 en het aan te passen aan jouw unieke bedrijfsbehoeften. We zorgen voor verfijnde beveiligingsmaatregelen en bieden ondersteuning voor alle uitdagingen waarmee jouw teams op afstand en op locatie te maken kunnen krijgen. Het doel is om jou en je team te helpen het meeste uit je Microsoft 365-abonnement te halen en het te optimaliseren voor teamwork, communicatie en productiviteit, zodat elke handeling soepeler en efficiënter verloopt.",
        "We ondersteunen ook klanten die al Google Workspace gebruiken en bieden gespecialiseerde hulp om ervoor te zorgen dat het effectief wordt geïntegreerd in jouw zakelijke workflows, waardoor een productieve, collaboratieve omgeving wordt bevorderd.",
      ],
      href: "/cloud-werkplekondersteuning/",
      image: `${IMG}/Group-237-1.webp`,
    },
    {
      number: `${IMG}/34.svg`,
      title: "Device Abonnement",
      paragraphs: [
        "Onze HaaS-abonnementen (Hardware as a Service) bieden een budgetvriendelijke route naar de nieuwste technische hulpmiddelen, zodat jij je geen zorgen hoeft te maken over grote initiële investeringen. Op deze manier hebben jouw mensen altijd toegang tot de nieuwste gadgets, wat de productiviteit verhoogt zonder de financiële lasten.",
      ],
      href: "/hardware-abonnements-service/",
      packages: true,
      orange: true,
    },
    {
      number: `${IMG}/03.svg`,
      title: "Technische ondersteuning en beveiliging",
      paragraphs: [
        "We zorgen ervoor dat IT-ondersteuning voor teams op afstand en op locatie onmiddellijk beschikbaar is. Deze ondersteuning minimaliseert downtime en houdt de productiviteit hoog, wat cruciaal is voor bedrijven die non-stop werken.",
        "Het geeft je team het vertrouwen om zich op hun werk te concentreren, wetende dat ze een vangnet hebben voor zowel technische als beveiligingsproblemen. Op zijn beurt verbetert dit de algehele bedrijfsprestaties door een veilige en efficiënte bedrijfsvoering te handhaven.",
      ],
      href: "/mkb-it-helpdesk-support/",
      cards: [
        {
          title: "Technische ondersteuning",
          text: "Ontworpen om technische problemen snel aan te pakken en op te lossen, zodat de workflow van je team zo min mogelijk wordt verstoord.",
          href: "/mkb-it-helpdesk-support/",
        },
        {
          title: "Veiligheid van het digitale team",
          text: "Zorgt ervoor dat de online omgeving van je team beveiligd is tegen cyberbedreigingen. De nadruk ligt hierbij op gegevensbescherming, veilige toegang en bewustzijn van cyberbeveiliging, om activiteiten en persoonlijke informatie te beschermen.",
          href: "/mkb-it-helpdesk-support/",
        },
      ],
    },
    {
      number: `${IMG}/04.svg`,
      title: "Onbeperkt bellen",
      paragraphs: [
        "Cloud telefonie-oplossingen zoals Microsoft Teams Phone en Webex Calling verbeteren de teamcommunicatie door eenvoudig gespreksbeheer via een app aan te bieden en de gesprekskosten aanzienlijk te verlagen. Bovendien kun je met ons Onbeperkt Mobiel-abonnement onbeperkt bellen en sms’en in de EU, ondersteund door het betrouwbare netwerk van KPN, wat een naadloze samenwerking binnen jouw team bevordert.",
        "Geniet van de ultieme flexibiliteit in communicatie en samenwerking, zodat je efficiënt kunt werken vanaf elke locatie op kantoor, thuis of onderweg. Onze gratis en vrijblijvende demo laat zien hoe onze Cloud Telefonie en Onbeperkt Mobiel-plannen jouw bedrijfsconnectiviteit kunnen transformeren. Neem contact op om de mogelijkheden te bespreken.",
      ],
      kicker: "Altijd en overal",
      href: "/cloud-telefoonsystemen-teams-webex/",
      orange: true,
      cards: [
        {
          title: "Microsoft Teams Phone",
          text: "Microsoft Teams Phone, geïntegreerd met Microsoft 365, biedt een uniform platform dat de communicatie van je teams vereenvoudigt en verbetert.",
          href: "/cloud-telefoonsystemen-teams-webex/",
        },
        {
          title: "Mobiel (KPN)",
          text: "Blijf verbonden met de betrouwbare service van het netwerk van KPN, waarmee je in de hele EU onbeperkt mobiel kunt bellen en sms’en.",
          href: "/cloud-telefoonsystemen-teams-webex/",
        },
        {
          title: "Webex Bellen",
          text: "Webex Calling, onderdeel van Cisco’s suite, stroomlijnt teamcommunicatie met een uniform platform voor naadloze samenwerking tussen devices en locaties.",
          href: "/cloud-telefoonsystemen-teams-webex/",
        },
        {
          title: "Kostenefficiëntie en flexibele werkplek",
          text: "Transparante prijzen en aanzienlijk lagere gesprekskosten, passend bij verschillende werkomgevingen met eenvoudig app-beheer voor een flexibele werkplek.",
          href: "/cloud-telefoonsystemen-teams-webex/",
        },
      ],
    },
    {
      number: `${IMG}/05.svg`,
      title: "Gespecialiseerde trainingsprogramma's",
      paragraphs: [
        "Onze diepgaande trainingssessies zijn ontworpen om je team uit te rusten met praktische vaardigheden. We richten ons op essentiële gebieden zoals Microsoft 365 & Cybersecurity essentials, het onder de knie krijgen van nieuwe devices enz. om ervoor te zorgen dat iedereen zich kan aanpassen aan technologische veranderingen. Deze programma’s zijn gestructureerd om het vertrouwen en de efficiëntie van je team te vergroten, zodat technologie op de meest effectieve manier voor hen werkt.",
        "Bereid jouw mensen niet alleen voor op de uitdagingen van vandaag, maar ook op de kansen van morgen!",
      ],
      href: "/microsoft-365-cybersecurity-training/",
      image: `${IMG}/Group-232.webp`,
    },
  ],
};

const itSupportOpDeWerkplek: OverviewPage = {
  kind: "overview",
  slug: "it-support-op-de-werkplek",
  metaTitle: "Deskundige IT-support voor de werkplek en cybersecuritydiensten",
  metaDescription:
    "Volledige IT-support voor de werkplek nodig? We bieden snel internet, 24/7 cybersecurity, printoplossingen voor kantoren, 24/7 beveiliging van gebouwen en nog veel meer.",
  hero: {
    title: "IT-support op de werkplek",
    lead: "Zorg voor productiviteit en veiligheid met volledige IT-support voor de werkplek. Betrouwbaar internet, printoplossingen voor kantoor, beveiliging van gebouwen en sterke maatregelen op het gebied van cybersecurity.",
    image: `${IMG}/Rectangle-31-1-1.webp`,
    cta: meeting,
  },
  intro: {
    cards: [
      {
        title: "Snel zakelijk internet (Wifi & glasvezel)",
        text: "Onze WiFi- en glasvezelinternetoplossingen leveren de snelle, veilige en stabiele verbinding die je werkplek nodig heeft voor efficiënte prestaties.",
        href: "/zakelijk-internet/",
      },
      {
        title: "Cyberbeveiliging (24/7 SOC, internetfilter)",
        text: "Zorg voor de veiligheid van je gegevens en minimaliseer het risico op online bedreigingen met ons Security Operations Center (SOC) en efficiënte internetfiltering.",
        href: "/24-7-cybersecurity/",
      },
      {
        title: "Beveiligd gebouw (CCTV / Alarm)",
        text: "Houd je werkplekken veilig met betrouwbare alarmsystemen en CCTV-bewaking (een videobewakingssysteem), zodat je dag en nacht verzekerd bent van veiligheid.",
        href: "/beveiliging-werkplek/",
      },
      {
        title: "Beheerde en moeiteloze afdrukservices",
        text: "Geniet van de laagste printkosten, automatische storingsrapporten en een zorgeloze ervaring voor organisaties van elk formaat.",
        href: "/beheerd-afdrukken/",
      },
    ],
    title: "Volledige IT-support voor kantoor",
    paragraphs: [
      "Wij begrijpen de unieke uitdagingen van het runnen van een modern bedrijf en bieden complete IT-support voor de werkplek om aan deze behoeften te voldoen. Zorg voor een betrouwbare en snelle zakelijke internetverbinding om productief te blijven en frustrerende vertragingen te vermijden. Bescherm je gevoelige gegevens en systemen met onze betaalbare cybersecuritymaatregelen en profiteer van gemoedsrust omdat je weet dat we 24/7 bewaking bieden.",
      "Daarnaast bieden we oplossingen voor werkplekbeveiliging, waaronder camerabewaking en alarmsystemen, om onbevoegde toegang te ontmoedigen en uw fysieke ruimte te beschermen. IT-support op kantoor of op een externe werkplek nodig? Ons team staat 24/7 klaar om jouw technologie te beheren.",
    ],
    cta: meeting,
  },
  topics: [
    {
      number: `${IMG}/32.svg`,
      title: "Beveiligd internet (Wifi & glasvezel)",
      paragraphs: [
        "Als onderdeel van onze IT-ondersteuning voor kantoren bieden onze WiFi- en glasvezeldiensten een ononderbroken verbinding voor je bedrijfsactiviteiten. De WiFi-service heeft een uitgebreide dekking binnen je werkruimte, zodat je team in het hele gebouw verbonden blijft. Aan de andere kant biedt de glasvezelinternetservice ongeëvenaarde snelheid en betrouwbaarheid, waardoor data-intensieve taken zoals videoconferenties en grootschalige bestandsoverdracht worden ondersteund.",
        "Beide services zijn ontworpen met beveiliging en schaalbaarheid op bedrijfsniveau, zodat je netwerk kan meegroeien met je bedrijfsbehoeften.",
      ],
      href: "/zakelijk-internet/",
      image: `${IMG}/Group-237-1-1.webp`,
    },
    {
      number: `${IMG}/34.svg`,
      title: "24/7 cybersecurity",
      paragraphs: [
        "We bieden 24/7 betaalbare cybersecurity voor jouw digitale infrastructuur en werkplek via ons Security Operations Center (SOC), dat jouw systemen voortdurend in realtime bewaakt. Ons team blijft altijd alert en detecteert en reageert snel op eventuele risico’s, zodat je netwerk maximaal wordt beschermd.",
        "Met onze oplossing voor internetfiltering heb je volledige controle over webtoegang en kun je jouw netwerk beschermen tegen schadelijke inhoud en ongeautoriseerde activiteiten.",
      ],
      href: "/24-7-cybersecurity/",
      image: `${IMG}/Rectangle-101-4.webp`,
      orange: true,
    },
    {
      number: `${IMG}/03.svg`,
      title: "Veilig gebouw",
      paragraphs: [
        "Onze CCTV-oplossingen schrikken inbrekers actief af en bieden tegelijkertijd kritisch toezicht. Dit in combinatie met een alarmsysteem dat onmiddellijk waarschuwt en communicatiemogelijkheden biedt via een beveiligde meldkamer die 24 uur per dag, 7 dagen per week bereikbaar is. Zo kunnen we snel reageren op noodsituaties, zoals brand of inbraak.",
        "Bovendien maken innovatieve functies zoals Live View directe controle door autoriteiten mogelijk, waardoor een allesomvattende en proactieve beveiligingsaanpak wordt gegarandeerd.",
      ],
      href: "/beveiliging-werkplek/",
      cards: [
        {
          title: "CCTV-oplossingen",
          text: "Real-time bewaking van je pand door middel van CCTV-videocamera’s zorgt voor meer veiligheid, gaat diefstal en vandalisme tegen en garandeert de veiligheid van je werkplek.",
          href: "/beveiliging-werkplek/",
        },
        {
          title: "Alarmsysteem",
          text: "Geavanceerde sensoren en detectoren zorgen voor een betrouwbare detectie van inbraak, brand, rook en andere noodsituaties. Je kunt realtime meldingen ontvangen op je smartphone of andere devices zodra er een alarm afgaat.",
          href: "/beveiliging-werkplek/",
        },
      ],
    },
    {
      number: `${IMG}/04.svg`,
      title: "Oplossingen voor printen op kantoor",
      paragraphs: [
        "Verbeter de printoplossingen voor jouw kantoor om tijd en geld te besparen. Wij zorgen voor het volledige beheer van jouw printinfrastructuur, van het bijvullen van supplies tot onderhoud, waardoor stilstand en bedrijfskosten worden beperkt. Onze service kan worden aangepast aan organisaties van elke grootte, belooft tot 30% aan besparingen en ontzorgt je team.",
      ],
      href: "/beheerd-afdrukken/",
      orange: true,
      cards: [
        {
          title: "Ondersteuning en onderhoud",
          text: "Jouw printers melden storingen automatisch aan onze servicedesk. Wanneer er onderdelen vervangen moeten worden, is er al een monteur onderweg. Hierdoor kunnen we een betrouwbaar printerpark garanderen.",
          href: "/beheerd-afdrukken/",
        },
        {
          title: "Follow-me printen",
          text: "Met Follow-Me printen kun je overal in je netwerk printen. Je printopdracht wordt veilig centraal opgeslagen en is toegankelijk op elke printer door het invoeren van een pincode, vingerafdruk of kaart.",
          href: "/beheerd-afdrukken/",
        },
        {
          title: "Scannen naar Microsoft 365",
          text: "HP multifunctionele printers en scanners verzenden scans snel naar Microsoft 365, zoals OneDrive en SharePoint. Er is geen extra hardware of software nodig, waardoor documenten eenvoudig toegankelijk zijn op elk device.",
          href: "/beheerd-afdrukken/",
        },
        {
          title: "Inzichten in afdrukken",
          text: "Real-time gegevens monitoren via een eenvoudig dashboard helpt afval te verminderen en het gebruik te optimaliseren door gedrag te analyseren, zoals enkelzijdig versus dubbelzijdig printen en het volume van kleurenprints.",
          href: "/beheerd-afdrukken/",
        },
      ],
    },
  ],
};

const itVoorJouwBedrijf: OverviewPage = {
  kind: "overview",
  slug: "it-voor-jouw-bedrijf",
  metaTitle: "IT voor jouw bedrijf | Complete IT-ondersteuning en -services",
  metaDescription:
    "Volledige IT-ondersteuning voor jouw bedrijf, inclusief uitbesteed beheer, deskundige consultancy, AI-integratie en meer.",
  hero: {
    title: "IT voor jouw bedrijf",
    lead: "Volledige bedrijfstechnische ondersteuning: we beheren jouw IT-systemen, -strategieën en -processen om je te helpen jouw prestaties te verbeteren en te laten groeien.",
    image: `${IMG}/Rectangle-31-2.webp`,
    cta: meeting,
  },
  intro: {
    cards: [
      {
        title: "Jouw IT-systeembeheer uitbesteden",
        text: "Neem de controle over je IT en systemen door het aan ons uit te besteden; wij brengen alles samen, beheren en helpen met jouw technologiebehoeften.",
        href: "/it-systeembeheer/",
      },
      {
        title: "Consultancy en naleving",
        text: "Ontvang deskundige begeleiding en planning om IT-activiteiten te optimaliseren, weloverwogen technologische beslissingen te nemen en naleving van de regelgeving te garanderen.",
        href: "/it-consultancy-services-en-compliance/",
      },
      {
        title: "Bedrijfsuitbreiding en verhuizing",
        text: "Waarheen je bedrijf ook groeit of verhuist, onze wereldwijde IT-ondersteuning zorgt voor een naadloze overgang en stabiele activiteiten in elke stad.",
        href: "/bedrijfsuitbreiding-verhuizing/",
      },
      {
        title: "AI-integratie en workflowautomatisering",
        text: "We kunnen jouw activiteiten verbeteren door AI-toepassingen te integreren en jouw routinetaken te automatiseren, met de nadruk op betrouwbaarheid en productiviteit.",
        href: "/ai-integratie-workflow-automatisering/",
      },
    ],
    title: "Volledige IT-ondersteuning voor jouw bedrijf",
    paragraphs: [
      "Wij bieden een alles-in-één outsourcingoplossing voor jouw IT-behoeften, waardoor jouw technische activiteiten worden gestroomlijnd en efficiënter worden.",
      "Onze services omvatten het begeleiden van je IT-strategieën, ze zorgen ervoor dat je voldoet aan alle technische voorschriften en ze geven je slim advies over technische beslissingen. Wanneer het tijd is voor je bedrijf om te groeien of te verhuizen, zorgen wij ervoor dat technologie je niet vertraagt, zodat de overgang soepel verloopt. We introduceren ook automatisering en AI waar deze echt een verschil kunnen maken, door repetitieve taken snel en nauwkeurig uit te voeren. Ons doel is om technologie gemakkelijk en effectief voor je te maken.",
    ],
    cta: meeting,
  },
  topics: [
    {
      number: `${IMG}/32.svg`,
      title: "Jouw IT-systeembeheer uitbesteden",
      paragraphs: [
        "Als je het beheer van jouw IT-systeem aan ons uitbesteedt, houden wij ons bezig met alle aspecten van jouw technologie, van onderhoud tot beveiliging en schaalbaarheid. Met deze gecentraliseerde aanpak worden jouw IT-activiteiten effectief beheerd en ben je verzekerd van betrouwbaarheid en aanpassingsvermogen naarmate jouw bedrijf zich ontwikkelt. Deze service biedt een solide IT-basis zonder dat je de dagelijkse technische zorgen hoeft te beheren.",
      ],
      href: "/it-systeembeheer/",
      image: `${IMG}/Rectangle-101-5.webp`,
    },
    {
      number: `${IMG}/34.svg`,
      title: "Consultancy en compliance diensten",
      paragraphs: [
        "Met een virtuele IT-manager heb jij toegang tot IT-strategie en leiderschap op topniveau zonder de kosten van een fulltime leidinggevende. Onze compliance-support zorgt ervoor dat jouw activiteiten in overeenstemming zijn met de industrienormen, terwijl onze consultancy inzichten biedt in het optimaliseren van jouw IT-infrastructuur. Dit trio van technische supportservices voor bedrijven levert effectief technologiebeheer en strategische besluitvorming.",
      ],
      href: "/it-consultancy-services-en-compliance/",
      image: `${IMG}/Rectangle-102-2.webp`,
      orange: true,
    },
    {
      number: `${IMG}/03.svg`,
      title: "Bedrijfsuitbreiding & verhuizing",
      paragraphs: [
        "Je bedrijf over de grens vestigen biedt interessante mogelijkheden, maar het kan een uitdaging zijn om met IT om te gaan. Ons bedrijf biedt uitgebreide IT-support om te helpen bij jouw wereldwijde expansie, inclusief support bij fusies en overnames, waardoor onderbrekingen tot een minimum worden beperkt. We werken met je samen om gestandaardiseerde IT-praktijken te implementeren op alle locaties, zodat je verzekerd bent van consistente prestaties en eenvoudig beheer.",
      ],
      href: "/bedrijfsuitbreiding-verhuizing/",
      cards: [
        {
          title: "Gecentraliseerd beheer",
          text: "Onze gestandaardiseerde werkwijzen zorgen voor een soepele integratie van technologie en minimaliseren downtime. Beheer de volledige wereldwijde IT-infrastructuur van jouw bedrijf vanaf één plek.",
          href: "/bedrijfsuitbreiding-verhuizing/",
        },
        {
          title: "Bewezen staat van dienst",
          text: "Met een bewezen staat van dienst in het opzetten van kantoren op belangrijke locaties zoals Amsterdam, Londen, Singapore, Tokio en New York begrijpen wij de unieke IT-uitdagingen van wereldwijde expansie in verschillende landen.",
          href: "/bedrijfsuitbreiding-verhuizing/",
        },
      ],
    },
    {
      number: `${IMG}/35.svg`,
      title: "AI-integratie en workflow automatisering",
      paragraphs: [
        "Wij zijn gespecialiseerd in het naadloos integreren van AI en automatiseringstools in elk bedrijfsmodel. Eerst identificeren we taken die geautomatiseerd kunnen worden en vervolgens creëren we deze automatisering om de activiteiten te stroomlijnen en de handmatige inspanningen voor jouw bedrijf te minimaliseren. Ons team blijft altijd op de hoogte van de nieuwste technische updates, zodat je de beste oplossingen krijgt die beschikbaar zijn om te voldoen aan de specifieke behoeften van jouw bedrijf, zodat je verzekerd bent van efficiëntie en effectiviteit in jouw processen.",
      ],
      href: "/ai-integratie-workflow-automatisering/",
      cards: [
        {
          title: "AI-integratie",
          text: "Krijg de op maat gemaakte AI-oplossingen voor jouw bedrijf. We leveren naadloze AI-integratie en voortdurende support. Dit resulteert in gemoderniseerde activiteiten en een efficiënter bedrijf.",
          href: "/ai-integratie-workflow-automatisering/",
        },
        {
          title: "Automatische workflow",
          text: "Eerst identificeren we gebieden in jouw activiteiten die baat kunnen hebben bij automatisering. Vervolgens creëren we geautomatiseerde workflows om het handmatige werk te verminderen en de nauwkeurigheid voor jouw bedrijf te verbeteren.",
          href: "/ai-integratie-workflow-automatisering/",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Detail pages: Jouw mensen                                            */
/* ------------------------------------------------------------------ */

const cloudWerkplekondersteuning: DetailPage = {
  kind: "detail",
  slug: "cloud-werkplekondersteuning",
  parent: "tech-voor-jouw-mensen",
  metaTitle: "Cloud-werkplekondersteuning: Microsoft 365 & Google Workspace",
  metaDescription:
    "Krijg deskundige cloud-werkplekondersteuning, inclusief de installatie en migratie van Microsoft 365 of optimalisatie van Google Workspace.",
  hero: {
    title: "Cloud werkplek ondersteuning",
    lead: "We helpen je bij het inzetten van cloud-werkplekken, zoals Microsoft 365 en Google Workspace, voor beter teamwork en hogere efficiëntie.",
    kicker: "Microsoft 365 installatie en migratie",
    paragraphs: [
      "Als je van plan bent om over te stappen naar Microsoft 365, kunnen we je helpen om het installatie- en migratieproces voor je bedrijf te vereenvoudigen, zodat je probleemloos van start kunt gaan zonder je dagelijkse werkzaamheden te onderbreken. Ons team zorgt voor elk aspect om je aan boord te krijgen, inclusief het op maat maken van het platform om aan je specifieke behoeften te voldoen. Daarnaast zorgen we voor veilige gegevensmigratie, e-mailinstallatie, teamworktools, mobiele installatie en nog veel meer. Cloud-werkplekondersteuning is van groot belang. Als uw Managed Service Provider ondersteunen we je bij elke stap.",
    ],
    image: `${IMG}/Group-239.webp`,
    cta: meeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: `${IMG}/Group-233-1.webp`,
      blocks: [
        {
          title: "Microsoft 365 oplossing",
          paragraphs: [
            "We bieden uitgebreide Microsoft 365-services om je te helpen optimaal gebruik te maken van deze krachtige suite met zijn tools. Ons team kan je helpen met licentiebeheer, zodat je de juiste abonnementen selecteert en onnodige kosten vermijdt. We geven ook prioriteit aan gegevensbeveiliging en helpen je om je informatie veilig en beschermd te houden. Door het gebruik van M365-tools te optimaliseren, kunnen we de teamproductiviteit verhogen en tegelijkertijd de naleving van wettelijke eisen waarborgen. Onze back-upstrategieën beschermen tegen gegevensverlies en onze helpdesk is beschikbaar voor onmiddellijke hulp bij problemen met Microsoft 365.",
            "We bieden ook trainingsprogramma’s om jou en je team te helpen het meeste uit onze cloudwerkplek te halen. Onze training op maat kan op jouw locatie of online worden gegeven.",
          ],
        },
      ],
      cta: { label: "Meer informatie", href: "/microsoft-365-cybersecurity-training/" },
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Group-241-1.webp`,
      blocks: [
        {
          title: "Google cloud-werkruimte",
          paragraphs: [
            "Als je al Google Workspace gebruikt, bieden we een reeks services om ervoor te zorgen dat het volledig geoptimaliseerd is voor jouw bedrijf en de behoeften van je teams. Dit omvat het aanpassen van functies voor een betere workflow, het implementeren van sterkere beveiligingsmaatregelen en het zorgen dat je installatie voldoet aan de industrienormen.",
            "We ondersteunen e-mailbeveiliging om te voorkomen dat gevaarlijke e-mails je inbox bereiken, een cruciale service gezien de toename van phishing- en malware-bedreigingen. Daarnaast ondersteunen we gegevensmigratie en integratie om de functionaliteit van Google Workspace uit te breiden. Onze back-up- en herstelservices beschermen tegen gegevensverlies, terwijl onze helpdesk onmiddellijk hulp biedt bij eventuele problemen. Deze aanpak zorgt ervoor dat jouw cloudwerkplek efficiënt en veilig functioneert binnen jouw bedrijfsecosysteem.",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

const hardwareAbonnementsService: DetailPage = {
  kind: "detail",
  slug: "hardware-abonnements-service",
  parent: "tech-voor-jouw-mensen",
  metaTitle: "Flexibele abonnementsservice voor hardware voor het MKB",
  metaDescription:
    "Edit je bedrijfstechnologie met onze abonnementsservice voor hardware voor het MKB. Up-to-date devices voor je team en gespreide kosten.",
  hero: {
    title: "Hardware abonnement",
    lead: "Met onze abonnementsservice voor hardware voor het MKB kun je altijd beschikken over de nieuwste technologie zonder dat je je zorgen hoeft te maken over het repareren van oude apparatuur of over updates.",
    kicker: "Waarom een hardware abonnement?",
    paragraphs: [
      "Profiteer van voorspelbare IT-kosten gespreid over 3 jaar, zonder investeringen vooraf en vereenvoudigde budgettering. Bovendien krijg je met onze abonnementsservice voor hardware voor het MKB toegang tot de nieuwste technologie met regelmatige updates, volledige ondersteuning en onderhoud inbegrepen, waardoor je voorop blijft lopen en eventuele hardwareproblemen snel worden opgelost. Als je bedrijf groeit, kun je bovendien gemakkelijk je hardwarebehoeften aanpassen en ALLEEN betalen voor wat je nodig hebt.",
    ],
    video: { id: "597698140", poster: `${IMG}/Rectangle-31-1-1.webp` },
    cta: meeting,
  },
  sections: [
    {
      kind: "packages",
      title: "Best gewaardeerde abonnementen",
      cta: { label: "Bouw jouw abonnement", href: CALENDLY_URL },
    },
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: `${IMG}/Mask-group-8.webp`,
      blocks: [
        {
          title: "Een groenere aanpak",
          paragraphs: [
            "Hardware-as-a-Subscription service voor het MKB (HaaS) helpt jouw bedrijf om technologie efficiënt te upgraden en verspilling tot een minimum te beperken. Om te beginnen richt deze aanpak zich op opknappen en recyclen, waardoor het elektronische afval aanzienlijk wordt verminderd. Bovendien is het een ideale strategie voor kleine en middelgrote bedrijven die hun technologie willen moderniseren zonder het milieu te schaden. Kortom, HaaS biedt een praktisch, groen alternatief en laat zien dat jouw bedrijf waarde hecht aan duurzaamheid naast technologische vooruitgang.",
          ],
        },
      ],
      cta: meeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-26-1.webp`,
      blocks: [
        {
          title: "Uw technologie updaten",
          paragraphs: [
            "We raden het meest geschikte hardwareabonnementspakket aan en passen het aan naarmate je bedrijf groeit of verandert. Deze schaalbare oplossing zorgt ervoor dat jouw technologie altijd voldoet aan jouw huidige behoeften zonder onnodige complexiteit of kosten. We bieden ongecompliceerde, praktische ondersteuning, zodat je met vertrouwen door je veranderende technische vereisten kunt navigeren.",
          ],
        },
        {
          title: "Reparaties zijn opgenomen in HaaS",
          paragraphs: [
            "Via ons hardware-abonnement krijg je toegang tot ons supportteam, zodat je bedrijfstechnologie probleemloos blijft werken. Dit omvat snelle hulp bij technische problemen, regelmatig onderhoud en updates, wat resulteert in minder uitvaltijd en meer productiviteit voor jouw mensen.",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

const mkbItHelpdeskSupport: DetailPage = {
  kind: "detail",
  slug: "mkb-it-helpdesk-support",
  parent: "tech-voor-jouw-mensen",
  metaTitle: "IT-Helpdesksupport voor MKB | Tech Support Specialists",
  metaDescription:
    "We lossen technische problemen snel op om uw kleine of middelgrote bedrijf productief te houden. Vraag nu deskundige IT-helpdesksupport aan.",
  hero: {
    title: "IT-helpdesk support",
    lead: "Minimaliseer downtime en verhoog de productiviteit. Vanuit Amsterdam bieden we IT-Helpdesksupport in verschillende landen.",
    kicker: "Waarom onze IT-support specialisten?",
    paragraphs: [
      "We lossen technische problemen snel op zodat je team productief blijft. Zelfs kleine technische problemen kunnen grote vertragingen veroorzaken voor je bedrijf. Daarom richten onze IT-supportspecialisten zich op snelle, efficiënte oplossingen om jou weer op weg te helpen, zodat jij je kunt richten op de groei van jouw bedrijf zonder je zorgen te hoeven maken over technische problemen.",
    ],
    image: `${IMG}/image-33-1.webp`,
    cta: meeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: `${IMG}/Mask-group-27-1.webp`,
      blocks: [
        {
          title: "24/7 helpdesk support",
          paragraphs: [
            "Door te kiezen voor onze 24/7 I-Helpdesk support, ontvang je een exclusief telefoonnummer voor directe toegang tot ons supportteam. Dit betekent dat onmiddellijke assistentie binnen handbereik is, zodat problemen direct worden aangepakt. Met 24-uurs service kun je de uitvaltijd verminderen en de efficiëntie van jouw bedrijf behouden, ongeacht het tijdstip of de dag. Houd er rekening mee dat deze 24-uurs service wordt aangeboden in combinatie met onze bedrijfskritische services.",
          ],
        },
      ],
      cta: meeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-28-1.webp`,
      blocks: [
        {
          title: "Van Barry | IT Specialist:",
          paragraphs: [
            "Hoi, ik ben Barry. In de loop der jaren heb ik in verschillende rollen talloze technische problemen opgelost, waarbij ik altijd graag van elke uitdaging wilde leren. Ik kan alles aan, van hardwarestoringen tot softwarefouten. Dankzij deze ervaring kan ik jouw technologische behoeften accuraat en persoonlijk ondersteunen.",
          ],
        },
        {
          title: "Van Maurizio | Support Team Specialist:",
          paragraphs: [
            "Hallo, Maurizio hier! Ik begrijp dat zelfs kleine technische problemen de workflow en productiviteit van je team kunnen verstoren. Daarom ben ik hier om je te helpen als je problemen ondervindt. Mijn doel is om deze problemen snel en efficiënt op te lossen, zodat jouw activiteiten weer op volle toeren draaien.",
            "Simpel gezegd is jouw soepele technische ervaring mijn prioriteit.",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

const cloudTelefoonsystemen: DetailPage = {
  kind: "detail",
  slug: "cloud-telefoonsystemen-teams-webex",
  parent: "tech-voor-jouw-mensen",
  metaTitle: "Onbeperkt zakelijk bellen met telefoonsystemen in de cloud",
  metaDescription:
    "Werk overal vandaan en beheer gesprekken eenvoudig met cloud telefoonsystemen. Krijg Teams Phone, Webex Calling en meer.",
  hero: {
    title: "Cloud telefoon systemen",
    lead: "Upgrade je bedrijf met communicatie met Cloud-gebaseerde telefoonsystemen en laat de beperkingen van traditionele telefoonsystemen achter je.",
    kicker: "Waarom Cloud-gebaseerde telefoonsystemen kiezen?",
    paragraphs: [
      "Stel je externe en flexibele teams in staat om effectief te communiceren met een cloud-gebaseerd telefoonsysteem. Zorg overal voor heldere gesprekken, beheer gesprekken eenvoudig en bespaar geld met voorspelbare prijzen. Onze oplossingen omvatten Microsoft Teams Phone, Webex Calling-software, mobiel bellen en EU-datapakketten – ideaal voor bedrijven die belang hechten aan efficiënte communicatie.",
    ],
    video: { id: "597697088", poster: `${IMG}/Rectangle-32-1.webp` },
    cta: meeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: `${IMG}/Group-238.webp`,
      blocks: [
        {
          title: "Microsoft Teams Phone",
          paragraphs: [
            "Gebruik je momenteel Microsoft 365? Upgrade dan je communicatie met Microsoft Teams Phone. Met dit cloud telefoonsysteem kan je team rechtstreeks bellen en gebeld worden binnen Teams op elk device. Geniet van functies zoals oproepdoorschakeling en voicemail, die zorgen voor duidelijke communicatie voor externe en flexibele werkteams. Wij zorgen voor de installatie, zodat je team deze krachtige tool meteen kan gebruiken.",
          ],
        },
      ],
      cta: meeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-29.webp`,
      blocks: [
        {
          title: "Webex belsoftware",
          paragraphs: [
            "Dit cloud-gebaseerde telefoonsysteem is ontworpen voor kleine en middelgrote bedrijven en biedt alle essentiële en geavanceerde belfuncties die je team nodig heeft. Webex Calling-software maakt dure on-site telefoonapparatuur overbodig en maakt het eenvoudig om je communicatie te beheren.",
            "Neem contact met ons op en begin vandaag nog met het plannen van jouw migratie naar de Webex Calling-cloudoplossing en samenwerkingsdiensten.",
          ],
        },
        {
          title: "Mobiel bellen (KPN)",
          paragraphs: [
            "Maak je geen zorgen meer over te veel belminuten of onverwachte kosten op je telefoonrekening. Dankzij het betrouwbare netwerk van KPN kan je team onbeperkt sms’en, bellen en dataroamen binnen de EU. Deze kostenvriendelijke optie maakt budgetteren eenvoudiger en stelt je werknemers in staat om vrij verbonden te blijven met collega’s in heel Europa. Bovendien integreert het naadloos met Microsoft Teams en Webex voor nog meer gemak.",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

const microsoft365Training: DetailPage = {
  kind: "detail",
  slug: "microsoft-365-cybersecurity-training",
  parent: "tech-voor-jouw-mensen",
  metaTitle: "Gespecialiseerde IT-training: Microsoft 365 & Cybersecurity-training",
  metaDescription:
    "Verbeter de Microsoft 365-vaardigheden en cyberbeveiliging van werknemers. Bescherm uw bedrijf met deskundige training.",
  hero: {
    title: "Gespecialiseerde IT-training",
    lead: "Scherp de technische vaardigheden van je team aan, verhoog de productiviteit en verbeter de cybersecurity.",
    kicker: "Waarom zou je onze trainingen overwegen?",
    paragraphs: [
      "We bieden twee verschillende trainingsprogramma’s waar jouw bedrijf van kan profiteren:",
      "1. Onze Microsoft 365-training is erop gericht om je team te leren hoe je de samenwerking en productiviteit kunt maximaliseren met behulp van Microsofts suite tools.",
      "2. Onze Security Awareness-training is bedoeld om je werknemers te leren hoe ze cyberbedreigingen kunnen herkennen en voorkomen.",
      "Beide programma’s zijn essentieel voor de veiligheid en productiviteit van je bedrijf.",
    ],
    image: `${IMG}/image-33-2.webp`,
    cta: meeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: `${IMG}/Group-232-1.webp`,
      blocks: [
        {
          title: "Microsoft 365 Training voor werknemers",
          paragraphs: [
            "Onze Microsoft 365 training helpt je team om essentiële tools zoals Teams, OneDrive, Microsoft Authenticator, Copilot en SharePoint onder de knie te krijgen. Leer praktische manieren om teamwork, efficiëntie en projectmanagement te verbeteren. Of je nu een beginner bent met Microsoft Office of meer geavanceerde Microsoft 365-training voor werknemers nodig hebt, onze programma’s helpen je om het meeste uit je abonnement te halen.",
          ],
        },
      ],
      cta: meeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-2-1.webp`,
      blocks: [
        {
          title: "Cybersecurity training",
          paragraphs: [
            "Onze training over cybersecurity leert je team hoe ze pogingen tot phishing kunnen herkennen, gevoelige gegevens kunnen beschermen en sterke wachtwoorden kunnen gebruiken. We geven praktische tips en realistische scenario’s om je te helpen je te verdedigen tegen cyberbedreigingen en de informatie van je bedrijf veilig te houden. Deze cybersecuritytraining voor werknemers is ideaal voor elk team dat zijn kennis op het gebied van cybersecurity wil verbeteren en zijn werk wil beschermen. Als je op zoek bent naar een handige cybersecuritytraining online of op locatie, dan levert ons programma de expertise die je nodig hebt.",
          ],
        },
        {
          title: "Teamtraining aanvragen",
          paragraphs: [
            "Om een trainingssessie voor je team te regelen, kun je een afspraak met ons maken. Tijdens het gesprek proberen we inzicht te krijgen in de sterke punten van je team en de gebieden waarop ze kunnen verbeteren. We spreken dan een geschikte datum af voor de sessie. Onze trainingsaanpak is interactief en praktijkgericht, ontworpen om je team actief te betrekken en praktische aspecten van hun werk aan te pakken. Het doel is om hun vaardigheden en kennis te vergroten, zodat ze vaardiger en zekerder worden in hun rol.",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Detail pages: Jouw werkplek                                          */
/* ------------------------------------------------------------------ */

const zakelijkInternet: DetailPage = {
  kind: "detail",
  slug: "zakelijk-internet",
  parent: "it-support-op-de-werkplek",
  metaTitle: "Betrouwbaar zakelijk internet met back-up: Geen storingen meer",
  metaDescription:
    "Profiteer van snel, veilig zakelijk glasvezelinternet en betrouwbare beheerde netwerken voor je kleine of middelgrote bedrijf.",
  hero: {
    title: "Zakelijk internet",
    lead: "Profiteer van betrouwbaar zakelijk internet met back-upoplossingen en beheerde netwerken om de productiviteit van jouw MKB te verhogen.",
    kicker: "Supersnel zakelijk internet nodig?",
    paragraphs: [
      "Wij bieden ongeëvenaarde snelheid en betrouwbaarheid voor je bedrijf met verbindingen tot 4 Gbit/s. Dit betekent soepele videogesprekken, snelle bestandsdownloads en efficiënte cloud back-ups. Onze service is perfect voor snelle internetbehoeften en kan extra functies bevatten zoals beveiligde PIN-betaling en integratie van het alarmsysteem. Met landelijke dekking garanderen we een snelle en zorgeloze verbinding met ons glasvezelnetwerk. Om je te beschermen tegen internetuitval, bieden we ook een 5G back-up oplossing. Zodra je internet uitvalt, schakelt je router over op het supersnelle mobiele 5G-netwerk van KPN. Zo is je bedrijf altijd online!",
    ],
    image: `${IMG}/Group-237-1-1.webp`,
    cta: meeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      blocks: [
        {
          title: "Zakelijk glasvezelinternet",
          paragraphs: [
            "Ons proces van glasvezelinternet voor kleine en middelgrote bedrijven begint met een snel voorstel, gevolgd door een werkplekonderzoek om de installatiespecificaties te beoordelen. We zorgen voor alle benodigde vergunningen en voeren de installatie in Nederland en daarbuiten uit, waarbij we je bij elke stap op de hoogte houden.",
            "Als aanvulling hierop biedt onze service “Veilig zakelijk internet”, ondersteund door Cisco Umbrella, op cloudbasis beveiliging tegen online bedreigingen. Het biedt kosteneffectieve en volledige bescherming voor alle devices en locaties, zodat de digitale veiligheid van jouw bedrijf is gegarandeerd.",
          ],
        },
      ],
      cta: meeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-37.webp`,
      blocks: [
        {
          title: "Beheerde (wifi) netwerken",
          paragraphs: [
            "Nu bedrijven steeds afhankelijker worden van internetconnectiviteit en hun behoefte aan betrouwbare en efficiënte WIFI-netwerken toeneemt, wordt het beheren en onderhouden van deze netwerken steeds ingewikkelder en belangrijker. Als dit niet goed wordt beheerd, kunnen netwerkproblemen de productiviteit negatief beïnvloeden. Daarom kiezen steeds meer bedrijven ervoor om hun netwerkbeheer uit te besteden aan experts zoals CloudConnected. Met deze oplossing kunnen bedrijven ervoor zorgen dat hun netwerken stabiel, up-to-date en efficiënt onderhouden zijn, zonder dat ze interne middelen nodig hebben om deze systemen te beheren.",
          ],
        },
        {
          title: "De voordelen",
          paragraphs: [
            "Wij ondersteunen jouw (WiFI) netwerkbehoeften met de betrouwbare apparatuur van Cisco, waaronder zowel traditionele opstellingen als de geavanceerde, cloud-gebaseerde Cisco Meraki systemen voor een vast bedrag per maand, zonder investeringen vooraf. Deze aanpak zorgt ervoor dat jouw organisatie profiteert van een snel en stabiel netwerk, wat de productiviteit en continuïteit ten goede komt. Met Cisco Meraki krijg je het voordeel van automatische beveiligingsupdates, continue monitoring en gedetailleerde inzichten in het netwerk, allemaal afgestemd op jouw specifieke operationele vereisten.",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

const cybersecurity247: DetailPage = {
  kind: "detail",
  slug: "24-7-cybersecurity",
  parent: "it-support-op-de-werkplek",
  metaTitle: "Besteed 24/7 cybersecurity, SOC & meer uit aan uw MKB",
  metaDescription:
    "Bescherm uw kleine of middelgrote bedrijf met 24/7 cybersecurity, internetfiltering, deskundige bewaking en beheerde beveiliging.",
  hero: {
    title: "24/7 cybersecurity",
    lead: "Zorg dat je niet gehackt wordt – onze 24/7 cybersecurity voor MKB’s zorgt ervoor dat jouw werkplek veilig blijft en jouw activiteiten niet worden onderbroken.",
    kicker: "24/7 Security Operations Center (SOC)",
    paragraphs: [
      "Ons Security Operations Center (SOC) houdt 24/7 een oogje in het zeil op je online werkzaamheden en spoort snel bedreigingen op en pakt ze aan. Dit betekent minder downtime en een betere bescherming van de gegevens van jouw bedrijf. Het zorgt ervoor dat je activiteiten soepel verlopen, wekt vertrouwen bij jouw klanten en zorgt ervoor dat je bedrijf veilig en online blijft.",
    ],
    image: `${IMG}/Mask-group-4.webp`,
    cta: strategyMeeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: `${IMG}/Mask-group-17.webp`,
      blocks: [
        {
          title: "Internetfiltering",
          paragraphs: [
            "Het is belangrijk om schadelijke en onveilige websites te blokkeren om de veiligheid van je netwerk te handhaven. Onze internetfilterservice screent actief en elimineert de toegang tot risicovolle inhoud, waardoor de kans op cyberaanvallen aanzienlijk afneemt. Deze veiligheidsmaatregel verhoogt je online veiligheid en zorgt voor een veilige en efficiënte werkomgeving.",
          ],
        },
      ],
      cta: strategyMeeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-5.webp`,
      blocks: [
        {
          title: "24/7 beveiliging nodig?",
          paragraphs: [
            "Als je ons inhuurt voor cyberbeveiliging, kun je rekenen op continue bescherming van jouw bedrijf op maat door experts. Als MSP bieden we 24x7 bewaking, toegang tot de nieuwste beveiligingstechnologie en compliance-ondersteuning, allemaal zonder de noodzaak van aanzienlijke interne investeringen. Deze aanpak zorgt voor gemoedsrust en maakt middelen vrij voor groei en ontwikkeling, in de wetenschap dat jouw cybersecurity proactief en kosteneffectief is en wordt beheerd door specialisten.",
          ],
        },
        {
          kicker: "Wat kun je verwachten van onze Managed Security Services?",
          bullets: [
            "24/7 netwerkbewaking",
            "Een voordelige oplossing die de behoefte aan interne beveiliging vermindert",
            "Verdediging tegen cyberbedreigingen met de nieuwste technologieën",
            "Snelle detectie en reactie op beveiligingsincidenten",
            "Zekerheid dat jouw bedrijf voldoet aan de wettelijke normen",
            "Bescherming beheerd door cybersecuritydeskundigen",
            "Strategieën om aanvallen te stoppen voordat ze plaatsvinden",
            "Gemoedsrust vanwege deskundige bescherming",
          ],
        },
      ],
      cta: strategyMeeting,
    },
  ],
};

const beveiligingWerkplek: DetailPage = {
  kind: "detail",
  slug: "beveiliging-werkplek",
  parent: "it-support-op-de-werkplek",
  metaTitle: "Beveiliging van de werkplek: Toegangscontrole, beveiligingssystemen en meer",
  metaDescription:
    "Verbeter de beveiliging van de werkplek met toegangscontrole, CCTV, alarmsystemen en meer. Bescherm je werknemers en bezittingen.",
  hero: {
    title: "Veiligheid op de werkplek",
    lead: "Verbeter de beveiliging van je werkplek met geavanceerde bewakings- en alarmsystemen, zodat iedereen zich in een veilige omgeving bevindt.",
    kicker: "Jouw partner in werkplekbeveiliging",
    paragraphs: [
      "Met CloudConnected als je Managed Service Provider (MSP) voor CCTV- en alarmsystemen krijgt je deskundige hulp bij het selecteren en installeren van de juiste apparatuur voor jouw werkplekken. Wij maken het verbeteren van de beveiliging van je gebouw eenvoudig zonder dat je diepgaande technische kennis nodig hebt. Als je voor ons kiest, betekent dat een gestroomlijnde kantoorbeveiliging en vertrouwen in de veiligheid van je pand.",
    ],
    image: `${IMG}/image-37.webp`,
    cta: meeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: `${IMG}/Mask-group-19.webp`,
      blocks: [
        {
          title: "CCTV voor de beveiliging van jouw werkplek",
          paragraphs: [
            "We werken samen met de beste aanbieders van CCTV om de beveiliging van jouw werkplek te verbeteren. Onze experts helpen je bij het kiezen van de juiste bewakingsoplossing voor je bedrijf, zodat je verzekerd bent van optimale dekking en de functies die je nodig hebt voor effectieve bewaking. Kies uit een reeks camera’s, inclusief opties voor onopvallende bewaking en geavanceerde analyse, om te voldoen aan jouw specifieke beveiligingsbehoeften. We geven de voorkeur aan systemen met gebruiksvriendelijke interfaces, zodat het eenvoudig is om je CCTV-netwerk te beheren.",
          ],
        },
      ],
      cta: meeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-21.webp`,
      blocks: [
        {
          title: "24/7 Alarmsysteem & App",
          paragraphs: [
            "24/7 Alarm biedt uitgebreide beveiligingsoplossingen die verder gaan dan alleen het laten afgaan van een alarm. Ons systeem biedt constant toezicht en garandeert snelle reactietijden bij noodgevallen.",
            "Zo beschermen we je eigendom:",
          ],
        },
        {
          kicker: "Onmiddellijke communicatie en gegarandeerde actie:",
          paragraphs: [
            "Onze Alarm app, die 24/7 beschikbaar is, stuurt je direct een waarschuwing wanneer je alarm afgaat. Dit helpt je om de situatie snel te evalueren en de juiste acties te ondernemen, zoals contact opnemen met beveiligingspersoneel. Bovendien biedt ons systeem je de mogelijkheid om direct hulpdiensten te waarschuwen in geval van brand, diefstal of inbraak. Getrainde professionals worden onmiddellijk gewaarschuwd, zodat er snel en effectief op de situatie kan worden gereageerd.",
          ],
        },
        {
          kicker: "Beveiligingsbewaking voor meerdere locaties:",
          paragraphs: [
            "Onze alarmen worden 24/7 bewaakt in onze PAC meldkamer, een beveiligde faciliteit die is gebouwd om inbraakpogingen te weerstaan. Deze geavanceerde omgeving is voorzien van luchtdichte afdichtingen, kogelvrij glas en een eigen ventilatiesysteem, waardoor volledige isolatie tegen bedreigingen van buitenaf gegarandeerd is. De meldkamer wordt bestuurd door hoogopgeleide professionals met expertise in informatie- en communicatietechnologie (ICT) en gevestigde beveiligingsprotocollen. Er zijn altijd minstens twee medewerkers aanwezig om de beveiliging van jouw locaties te bewaken en om snel en goed gecoördineerd te reageren op elk alarm of noodgeval.",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

const beheerdAfdrukken: DetailPage = {
  kind: "detail",
  slug: "beheerd-afdrukken",
  parent: "it-support-op-de-werkplek",
  metaTitle: "Managed Print Services (MPS) | Print slimmer, bespaar meer",
  metaDescription:
    "Worstel je met hoge printkosten of printerbeveiliging? Onze Managed Print Services bieden deskundige ondersteuning en betaalbare oplossingen.",
  hero: {
    title: "Beheerd afdrukken",
    lead: "Met onze Managed Print Services print je documenten tegen de laagst mogelijke kosten, ongeacht het volume, en ontvang je automatische rapporten over storingen bij het printen.",
    kicker: "Gemakkelijk afdrukken, minder kosten",
    paragraphs: [
      "CloudConnected’s Managed Print Services (MPS) vereenvoudigt het printerbeheer, ongeacht de locatie. Je kunt in veel gevallen 30% lagere afdrukkosten verwachten. MPS werkt goed voor bedrijven van alle groottes, van bedrijven met één printer tot bedrijven met veel printers.",
    ],
    image: `${IMG}/image-37-1.webp`,
    cta: meeting,
  },
  sections: [
    {
      kind: "features",
      items: [
        {
          icon: "/images/Group-205.svg",
          title: "Printeronderhoud",
          text: "Onze printers maken veilig verbinding met de Cloud en melden storingen automatisch aan onze Helpdesk. Als er onderdelen vervangen moeten worden, wordt er onmiddellijk een monteur gestuurd, waardoor de wachttijd tot een minimum wordt beperkt. Dit garandeert een hoge printerbeschikbaarheid voor je hele netwerk.",
          stat: "42% van de printerproblemen wordt telefonisch opgelost door onze Helpdesk.",
        },
        {
          icon: "/images/Group-205-1.svg",
          title: "Helpdesk-ondersteuning",
          text: "Ons ervaren team controleert proactief jouw printers, multifunctionals en software. Ze voeren onderhoudstaken voor je uit en zorgen zo voor optimale prestaties. Onze specialisten kunnen zelfs op afstand toegang krijgen tot je devices om problemen op te lossen of visuele begeleiding te bieden.",
          stat: "58% van de tijd bezoeken onze technici jouw locatie om printerproblemen op te lossen.",
        },
        {
          icon: "/images/Group-205-2.svg",
          title: "Printerbeveiliging",
          text: "Verouderde printers, onjuiste instellingen en gebruikersfouten kunnen beveiligingsrisico’s veroorzaken. Met onze “Follow-me” functie kun je printen naar elke netwerkprinter, maar de taak wordt vastgehouden totdat je deze vrijgeeft met een PIN-code, vingerafdruk, swipe kaart of smartphone. Dit zorgt ervoor dat vertrouwelijke documenten nooit onbeheerd worden achtergelaten bij de printer.",
          stat: "99% van de tijd zorgen we ervoor dat jouw printers operationeel zijn.",
        },
      ],
      cta: meeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-20.webp`,
      blocks: [
        {
          title: "Scannen naar Microsoft 365",
          paragraphs: [
            "In minder dan vijf minuten kunnen we je bestaande HP multifunctionele printers en desktopscanners configureren zodat ze naadloos samenwerken met Udocx. De Udocx app stroomlijnt het scannen en opslaan van documenten. Scan documenten rechtstreeks naar Microsoft 365-toepassingen zoals OneDrive en SharePoint, of zelfs Outlook e-mailmappen (inclusief concepten). Met één druk op de knop kunnen gebruikers documenten scannen en opslaan in aangewezen mappen binnen SharePoint, zoals “contracten” of “facturen”. Hierdoor zijn belangrijke documenten altijd, overal en vanaf elk device toegankelijk.",
          ],
        },
        {
          title: "Printerbeveiliging en -controle",
          paragraphs: [
            "Onze PrintApp houdt printen veilig en onder controle. Het werkt met alle printers en multifunctionele apparaten (MFP’s) in je netwerk, ongeacht het merk (HP of andere). Zo werkt het:",
          ],
          bullets: [
            "Veilige opslag: Afdruktaken kunnen veilig worden opgeslagen in de cloud, op devices van gebruikers of op beide. Hierdoor zijn je vertrouwelijke documenten altijd beschermd.",
            "Authenticatie-opties: Voorkom onbevoegd afdrukken met functies zoals kaartlezers en QR-codes. Gebruikers moeten hun identiteit verifiëren voordat ze iets kunnen afdrukken.",
            "Afdruktaken bijhouden: Volg eenvoudig de status van jouw afdruktaken om verwarring of papierverspilling te voorkomen.",
            "Analyse: PrintApp integreert met HP JetAdvantage Insights voor gedetailleerde rapporten over jouw printgewoonten en analyse van printkosten. Dit helpt je om verbeterpunten te identificeren en geld te besparen.",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Detail pages: Jouw bedrijf                                           */
/* ------------------------------------------------------------------ */

const itSysteembeheer: DetailPage = {
  kind: "detail",
  slug: "it-systeembeheer",
  parent: "it-voor-jouw-bedrijf",
  metaTitle: "Besteed je IT-systeembeheer uit | IT-oplossingen & ondersteuning",
  metaDescription:
    "Besteed het systeembeheer uit aan ons team. We houden ons bezig met je systemen, bieden strategische begeleiding en stroomlijnen de processen.",
  hero: {
    title: "IT-systeembeheer",
    lead: "Besteed het beheer van jouw IT-systemen uit en profiteer van betere cloudmogelijkheden, gestroomlijnde activiteiten en betere beveiliging tegen lagere kosten.",
    kicker: "Waarom zou je IT aan ons uitbesteden?",
    paragraphs: [
      "Door het beheer van je IT-infrastructuur aan ons uit te besteden, profiteer je van professionals met vaardigheden van hoog niveau die vergelijkbaar zijn met die van grote bedrijven, maar dan tegen een fractie van de kosten. Ons team kan al jouw cloud-complexiteiten en dagelijkse IT-uitdagingen aan. Op deze manier profiteer je van gespecialiseerde IT-expertise zonder de extra kosten van het aannemen en opleiden van nieuw personeel.",
      "We passen ons snel aan jouw IT-omgeving aan en bieden onmiddellijk de ondersteuning die je nodig hebt.",
    ],
    image: `${IMG}/Rectangle-101-6.webp`,
    cta: meeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: `${IMG}/Rectangle-103.webp`,
      blocks: [
        {
          title: "Co-beheer van IT",
          paragraphs: [
            "Onze Co-Managed IT Support combineert de voordelen van outsourcing met de mogelijkheid om IT-taken te delen. Hierdoor wordt een oplossing geboden die past bij jouw specifieke behoeften terwijl je samenwerkt met jouw interne IT-medewerkers. Deze aanpak zorgt ervoor dat jouw IT-taken efficiënt worden beheerd en biedt support waar dat het meest nodig is.",
          ],
        },
      ],
      cta: meeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-28-1.webp`,
      blocks: [
        {
          title: "Overgang naar uitbestede IT:",
          bullets: [
            "Luisteren: We praten met je over je bedrijf, je IT-inrichting en je doelen.",
            "Samen plannen: We ontwerpen een IT-plan op maat dat past bij jouw behoeften en budget.",
            "Naadloze overstap: We verplaatsen je gegevens veilig (of integreren ze als ze in co-beheer zijn) en trainen je team.",
            "Periodieke strategische vergaderingen: We houden regelmatig bijeenkomsten om ervoor te zorgen dat de IT-strategie is afgestemd op jouw huidige bedrijfsdoelen.",
            "Proactieve IT-zorg: We bewaken en onderhouden jouw systemen voortdurend om problemen te voorkomen.",
          ],
        },
        {
          kicker: "Als jij je IT-team behoudt, werken we samen aan:",
          bullets: [
            "Een duidelijk plan om complexe problemen aan te pakken.",
            "Teamwork bij IT-beslissingen en -prioriteiten.",
            "Open communicatie en regelmatige feedback.",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

const itConsultancy: DetailPage = {
  kind: "detail",
  slug: "it-consultancy-services-en-compliance",
  parent: "it-voor-jouw-bedrijf",
  metaTitle: "IT-consultancy en vCIO-diensten | Compliance uitbesteden",
  metaDescription:
    "Stroomlijn je IT-activiteiten, zorg voor compliance en neem beslissingen met onze deskundige IT-consultancydiensten en virtuele CIO (vCIO).",
  hero: {
    title: "IT-consultancy en compliance",
    lead: "Optimaliseer je activiteiten met deskundige IT-consultancy, blijf compliant met toegewijde ondersteuning en krijg strategische inzichten van onze virtuele IT-manager.",
    kicker: "Wat maakt onze IT-consultancy essentieel?",
    paragraphs: [
      "Onze IT-consultancyservice helpt je ervoor te zorgen dat technologie jouw bedrijfsdoelen ondersteunt. We beginnen met het doornemen van je huidige systemen om gebieden te vinden die toe zijn aan verbetering. Vervolgens adviseren we je over de beste manieren om je infrastructuur te upgraden, te optimaliseren en stellen we een plan op maat op. Deze aanpak helpt je om slimmere beslissingen te nemen over de technologie-investeringen van jouw bedrijf en om middelen beter te gebruiken.",
    ],
    image: `${IMG}/Rectangle-103-1.webp`,
    cta: meeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: `${IMG}/Rectangle-104-1.webp`,
      blocks: [
        {
          title: "Virtuele IT-manager (vCIO)",
          paragraphs: [
            "Onze Virtuele IT Manager (vCIO) biedt de diensten van een top IT-manager zonder de kosten van een fulltime IT-manager. Een Virtuele IT Manager helpt je IT-systemen en je IT-budget te beheren, ervoor te zorgen dat je systemen voldoen aan de industrienormen en om risico’s te beheren om je gegevens veilig te houden. Upgrade ook je technologie als dat nodig is. Deze service is ideaal voor kleine tot middelgrote bedrijven of grotere bedrijven die strategische IT-begeleiding nodig hebben, waarbij je een ervaren leidinggevende als onderdeel van je team krijgt.",
          ],
        },
      ],
      cta: meeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-22.webp`,
      blocks: [
        {
          title: "Compliance as a service",
          paragraphs: [
            "Voorkom juridische problemen en behoud de reputatie van jouw bedrijf. Onze Compliance as a Service zorgt ervoor dat de technologiesystemen van je bedrijf volledig voldoen aan de relevante regelgeving in de sector.",
            "We beginnen met een grondige doorlichting van jouw huidige systemen en processen om alle gebieden te vinden die niet voldoen aan de wettelijke normen. Vervolgens geven we gedetailleerde aanbevelingen over hoe je jouw systemen in compliance kunt brengen, waarbij we alles behandelen van wetten voor gegevensbescherming tot branche-specifieke vereisten. Ons team houdt wijzigingen in de regelgeving voortdurend in de gaten om je op de hoogte te houden.",
          ],
        },
        {
          kicker: "Ondersteuning voor GDPR, HIPAA, PCI DSS en meer",
          paragraphs: [
            "We helpen je om belangrijke standaarden te begrijpen en na te leven, zoals GDPR voor gegevensbescherming binnen de EU, HIPAA voor de beveiliging van patiëntgegevens in de gezondheidszorg, PCI DSS voor de veiligheid van creditcardgegevens, SOX voor de nauwkeurigheid van financiële rapportages en ISO 27001 voor het beheren en beveiligen van bedrijfsinformatie. Wij behandelen deze en andere relevante regels en geven je de richting die je nodig hebt om aan deze complexe wettelijke vereisten te voldoen.",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

const aiIntegratie: DetailPage = {
  kind: "detail",
  slug: "ai-integratie-workflow-automatisering",
  parent: "it-voor-jouw-bedrijf",
  metaTitle: "Integreer AI en automatisering in je workflows",
  metaDescription:
    "Integreer AI & automatisering in je workflows en maak bedrijfsvoering efficiënter en productiever. Verbeter de klantenservice en kantoortaken.",
  hero: {
    title: "AI & automatisering",
    lead: "Integreer AI en automatisering in je workflows en maak bedrijfsvoering efficiënter en productiever.",
    kicker: "Waarom met ons samenwerken?",
    paragraphs: [
      "We integreren AI in je dagelijkse bedrijfsactiviteiten om ze efficiënter te maken en je routinetaken te automatiseren. De voordelen zijn onder andere minder fouten en meer ruimte voor je personeel om zich op belangrijker werk te richten. Deze service kan voor jouw bedrijf worden aangepast aan de specifieke behoeften, zoals het verbeteren van de klantenservice, voorraadbeheer of het organiseren van kantoortaken.",
    ],
    image: `${IMG}/Rectangle-106-1.webp`,
    cta: meeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: `${IMG}/image-33.webp`,
      blocks: [
        {
          title: "AI-oplossingen voor het MKB",
          paragraphs: ["Dit is hoe we Microsoft Copilot AI implementeren voor kleine en middelgrote bedrijven:"],
          bullets: [
            "We beginnen met het bekijken van jouw huidige activiteiten om gebieden te identificeren waar AI-tools de efficiëntie kunnen verbeteren.",
            "Vervolgens stellen wij een plan op waarin wordt beschreven hoe AI-tools in je bedrijf kunnen worden gebruikt en welke voordelen deze veranderingen met zich meebrengen.",
            "Indien nodig kunnen we gekozen AI-oplossingen opzetten en integreren in bestaande systemen.",
            "Indien nodig trainen wij je team om deze AI-oplossingen effectief te beheren en te gebruiken.",
            "We bieden voortdurende ondersteuning en stellen de systemen regelmatig bij om ervoor te zorgen dat ze effectief blijven voldoen aan jouw bedrijfsbehoeften.",
          ],
        },
      ],
      cta: meeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-24.webp`,
      blocks: [
        {
          title: "Workflow automatisering service",
          paragraphs: [
            "Onze services voor workflow automatisering richten zich op het efficiënt stroomlijnen van jouw bedrijfsactiviteiten. We beginnen met het analyseren van je bestaande processen om te bepalen welke taken geschikt zijn voor automatisering. Denk hierbij aan repetitieve taken of taken die veel handmatige inspanning vergen. Van daaruit ontwikkelen we automatiseringsstrategieën op maat met behulp van robuuste tools zoals Power Automate om naadloos te integreren met systemen en de workflow te verbeteren zonder de lopende werkzaamheden te verstoren.",
          ],
        },
        {
          title: "Impact van automatisering op het MKB",
          paragraphs: [
            "De onmiddellijke voordelen zijn onder andere minder handmatige taken, minder fouten en snellere voltooiing van processen. Door deze bevrijding van routinetaken kan je team zich richten op meer strategische initiatieven, waardoor de algehele productiviteit toeneemt. Het resultaat is dat jouw bedrijf profiteert van lagere operationele kosten en een verbeterde efficiëntie, waardoor het flexibeler wordt en beter kan concurreren op de markt.",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

const bedrijfsuitbreiding: DetailPage = {
  kind: "detail",
  slug: "bedrijfsuitbreiding-verhuizing",
  parent: "it-voor-jouw-bedrijf",
  metaTitle: "IT-ondersteuning voor bedrijfsuitbreiding en -verhuizing",
  metaDescription:
    "Naadloze IT-ondersteuning voor bedrijfsuitbreiding en -verhuizing of fusies en overnames (M&A's). Beperk verstoringen tot een minimum en zorg voor een soepele overgang.",
  hero: {
    title: "Uitbreiding & verhuizing",
    lead: "We helpen je bij bedrijfsuitbreiding en -verhuizing, nationaal of internationaal, en zorgen ervoor dat je IT-setup snel en effectief is, ongeacht de locatie.",
    kicker: "Waarom ons kiezen voor bedrijfsuitbreiding en -verhuizing?",
    paragraphs: [
      "Als je klaar bent voor bedrijfsuitbreiding of -verhuizing, staat ons ervaren team klaar om je bij elke stap te begeleiden. Jaarlijks managen we met succes 20-40 kantooropeningen en verhuizingen in verschillende steden. Voorbeelden zijn Amsterdam, Londen, Antwerpen, Göteborg, Barcelona, Parijs, Rome, Kaapstad, Dubai, Singapore, Bangkok, Hong Kong, Tokio, Sydney, Washington en New York. Dit geeft ons een goed inzicht in de logistieke en operationele uitdagingen die komen kijken bij het vestigen van jouw aanwezigheid in nieuwe markten.",
    ],
    video: { id: "917482200", poster: `${IMG}/Rectangle-31-2.webp` },
    cta: meeting,
  },
  sections: [
    {
      kind: "split",
      decor: "ring",
      imageSide: "right",
      image: `${IMG}/Rectangle-105.webp`,
      blocks: [
        {
          title: "IT-ondersteuning bij fusies en overnames",
          paragraphs: [
            "Tijdens fusies & overnames (M&A) richten we ons op het soepel combineren van technologiesystemen van verschillende bedrijven. Wij zorgen voor het samenvoegen van gegevens en systemen om ervoor te zorgen dat jouw activiteiten zonder onderbrekingen verlopen en jouw belangrijke informatie veilig blijft. Ons belangrijkste doel is ervoor te zorgen dat alle IT-systemen goed op elkaar aansluiten, de behoeften van je nieuwe organisatie ondersteunen en de technische aspecten van de fusie eenvoudiger maken.",
          ],
        },
      ],
      cta: meeting,
    },
    {
      kind: "split",
      decor: "orange",
      imageSide: "left",
      image: `${IMG}/Mask-group-31.webp`,
      blocks: [
        {
          title: "Wat je kunt verwachten met CloudConnected",
          paragraphs: [
            "Om jouw uitbreidingsinspanningen verder te ondersteunen, bieden we ook doorlopend support en onderhoud en zorgen we ervoor dat systemen nog lang na de eerste installatie effectief blijven werken. Ons team biedt trainingssessies op maat om jouw personeel te helpen nieuwe technologieën en processen onder de knie te krijgen, zodat ze hun productiviteit kunnen maximaliseren.",
            "Daarnaast maken we plannen voor de toekomstige schaalbaarheid van IT-infrastructuur, bereiden we jouw bedrijf voor op groei en helpen we je mogelijke technologische knelpunten te voorkomen.",
            "Met CloudConnected krijgt je een partner die zich inzet voor jouw succes op de lange termijn en ervoor zorgt dat jouw IT-setup meegroeit met de bedrijfsbehoeften.",
          ],
        },
      ],
      cta: meeting,
    },
  ],
};

export const solutionPages: SolutionPage[] = [
  techVoorJouwMensen,
  itSupportOpDeWerkplek,
  itVoorJouwBedrijf,
  cloudWerkplekondersteuning,
  hardwareAbonnementsService,
  mkbItHelpdeskSupport,
  cloudTelefoonsystemen,
  microsoft365Training,
  zakelijkInternet,
  cybersecurity247,
  beveiligingWerkplek,
  beheerdAfdrukken,
  itSysteembeheer,
  itConsultancy,
  aiIntegratie,
  bedrijfsuitbreiding,
];

export function getSolutionPage(slug: string): SolutionPage | undefined {
  return solutionPages.find((page) => page.slug === slug);
}

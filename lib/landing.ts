// Content for the campaign landing pages (/lp-*). All pages share one template; only the
// hero, the "Klinkt bekend?" section and the closing call-to-action differ. Text is taken
// verbatim from https://cloudconnected.nl (the Spanish pages are only partly translated
// on the live site and are reproduced as they are).

import { CALENDLY_URL } from "@/lib/content";
import type { Cta, LandingPage } from "@/lib/types";

const IMG = "/images/site";
const consult: Cta = { label: "Plan hier uw gratis IT Consult", href: CALENDLY_URL };
const introCall: Cta = { label: "Plan nu jouw kennismakingsgesprek", href: CALENDLY_URL };
const perryVideo = { id: "597698393", poster: `${IMG}/video.webp` };
const trustNl = "Beoordeeld als “Uitstekend” op Trustpilot";

const heroBullets = [
  "92% van de hulpvragen worden tijdens het eerste contactmoment opgelost",
  "Hulp op afstand of op locatie indien nodig",
  "IT oplossingen afgestemd op jouw behoeften",
];

const painBullets = [
  "Veel verschillende leveranciers",
  "Onduidelijke facturen",
  "Medewerkers die voortdurend tegen IT-problemen aan lopen",
  "Geen duidelijk contact bij je IT leverancier(s) wanneer er iets niet werkt",
  "Ontbrekende functies, onduidelijke prijzen en het gevoel dat je teveel betaalt",
];

const painBulletsShort = (broken: "kapot" | "stuk") => [
  "Gefragmenteerde leveranciers",
  "Verwarrende facturen",
  "Personeel loopt voortdurend tegen IT-problemen aan",
  `Geen duidelijk contact wanneer er iets ${broken} gaat`,
  "Ontbrekende functies, onduidelijke prijzen en het gevoel dat je te veel betaalt",
];

const managesEverything =
  "CloudConnected neemt het complete IT-beheer en de infrastructuur uit handen. Wij zorgen voor het complete netwerkbeheer én systeembeheer. Vanaf nu heb je één partner voor IT-beheer, één duidelijke maandelijkse verzamelfactuur en één aanspreekpunt, zodat jij je kunt richten op het runnen van je bedrijf – en niet op het najagen van technische problemen.";

const ready = (text: string, title = "Klaar voor IT die echt werkt?"): LandingPage["ready"] => ({
  title,
  lead: "Op zoek naar gemoedsrust, heldere kosten en een partner die echt met je meedenkt? Dan is dit het juiste moment om je aan te sluiten.",
  text,
  cta: { label: "Boek een vrijblijvend consult", href: CALENDLY_URL },
  note: "Volledige IT-audit inbegrepen – geen verplichtingen.",
});

const readyDefault = ready(
  "Wij ondersteunen bedrijven met IT-beheer in Amsterdam, in heel Nederland en over de hele wereld. Onze klanten profiteren elke dag van IT die werkt – en hun bedrijf daadwerkelijk vooruit helpt. Benieuwd hoe IT-ondersteuning op maat er voor jouw team uit kan zien?",
);

const nlMeta = {
  metaTitle: "Managed Cloud & Betaalbare IT-diensten voor het MKB",
  metaDescription:
    "Betaalbare en flexibele IT-services voor het midden- en kleinbedrijf (MKB), waaronder beheerde cloud, cyberbeveiliging en meer.",
};

const itBeheer: LandingPage = {
  kind: "landing",
  slug: "lp-it-beheer",
  ...nlMeta,
  hero: {
    title: "Stop IT problemen voorgoed met IT-beheer door CloudConnected",
    subtitle: "Alles-in-één IT-beheer voor het MKB",
    intro:
      "Wij helpen MKB-bedrijven wereldwijd veilig, verbonden en productief te blijven met betrouwbaar alles-in-één IT-beheer.",
    bullets: heroBullets,
    cta: consult,
    trust: trustNl,
    video: perryVideo,
  },
  pain: {
    title: "Klinkt bekend?",
    intro: [
      "Je bent verantwoordelijk voor het systeembeheer bij een groeiend bedrijf – of je bent een ondernemer die gewoon wil dat alles werkt. Maar in werkelijkheid zit je opgescheept met:",
    ],
    bullets: painBullets,
    outroTitle: "Daar komen wij in beeld",
    outro: managesEverything,
    cta: introCall,
  },
  ready: readyDefault,
};

const itConsultancy: LandingPage = {
  kind: "landing",
  slug: "lp-it-consultancy",
  metaTitle: "Managed Cloud & Betaalbare IT-diensten voor het MKB",
  metaDescription:
    "Betaalbare IT-consultancydiensten voor het midden- en kleinbedrijf (MKB), inclusief beheerde cloud, cyberbeveiliging en meer.",
  hero: {
    title: "Bespaar op je IT kosten door onderbouwd IT advies door CloudConnected",
    subtitle: "Heb jij alle kosten, inefficiënties en groeikansen van je IT in kaart?",
    intro:
      "Onze IT-consultancy analyseert je huidige IT-landschap en ontdekt verborgen kosten, inefficiënties, maar ook groeikansen. In veel gevallen zónder dat je hoeft te investeren in nieuwe tools – vaak kun je zelfs besparen!",
    leadIn: "Werken met CloudConnected biedt jou:",
    bullets: heroBullets,
    cta: consult,
    trust: trustNl,
    video: perryVideo,
  },
  pain: {
    title: "Exceleer met het juiste IT advies",
    intro: [
      "Bij CloudConnected krijg je geen standaardrapport, maar een concreet IT-plan dat direct bijdraagt aan de groei van jouw bedrijf. Onze ervaren IT-consultants analyseren je huidige omgeving, signaleren knelpunten én kansen, en vertalen die naar praktische, schaalbare oplossingen. Geen onnodige kosten, wel een IT-infrastructuur die jouw bedrijfsprocessen écht ondersteunt – nu én in de toekomst.",
    ],
    leadIn: "IT consultancy bij CloudConnected betekent:",
    bullets: [
      "Persoonlijk contact met een vaste IT-consultant",
      "Ondersteuning van de analyse tot realisatie",
      "Eerlijke en haalbare adviezen die het best zijn voor jou",
      "IT maatwerk dat meegroeit met jouw bedrijf",
    ],
    outroTitle: "Laat je IT jouw groei niet tegenhouden",
    outro:
      "Ondek vrijblijvend hoe onze IT-consultancy je helpt sneller, slimmer en efficiënter te werken. Plan jouw gratis intake gesprek met één van onze IT-consultants vandaag nog!",
    cta: introCall,
  },
  ready: readyDefault,
};

const zakelijkeItDiensten: LandingPage = {
  kind: "landing",
  slug: "lp-zakelijke-it-diensten",
  ...nlMeta,
  hero: {
    title: "Bespaar kosten en gedoe: start met het afnemen van al je zakelijke IT-diensten bij één leverancier",
    subtitle: "CloudConnected is jouw go-to voor alle zakelijke IT-diensten bij één leverancier. Geen gedoe – gewoon goed geregeld.",
    intro:
      "Alle zakelijke IT-diensten bij één leverancier. CloudConnected heeft meer dan 15 jaar ervaring en levert jou stabiele, schaalbare oplossingen waar inmiddels meer dan 150 bedrijven dagelijks op vertrouwen.",
    leadIn: "Werken met CloudConnected biedt jou:",
    bullets: heroBullets,
    cta: consult,
    trust: trustNl,
    video: perryVideo,
  },
  pain: {
    title: "Zakelijke IT-diensten afgestemd op jouw bedrijf",
    intro: [
      "Jouw bedrijf draait niet zonder betrouwbare IT. Je wil vooruit, geen brandjes blussen. Storingen, meerdere leveranciers en ondoorzichtige kosten remmen je groei af. Daarom biedt CloudConnected jouw bedrijf een volledig pakket. Alle denkbare IT-diensten die jouw bedrijf nodig heeft zijn op maat gemaakt, speciaal voor het MKB. Van werkplekbeheer tot netwerkbeveiliging en strategisch advies. Wij zorgen dat alles werkt, samenwerkt en belangrijker nog: blijft werken.",
    ],
    bullets: [
      "Eén vast aanspreekpunt",
      "Vaste kosten per maand",
      "Directe support wanneer nodig",
      "Geen ruis, geen onaangename verrassingen",
    ],
    closing: "Alleen resultaatgerichte IT die jouw bedrijf vooruithelpt.",
    outroTitle: "Laat IT werken in het voordeel van je bedrijf!",
    outro:
      "Ontdek vrijblijvend hoe onze zakelijke IT-diensten jouw bedrijf helpen sneller, slimmer en efficiënter te werken en te groeien. Plan jouw gratis intake gesprek met één van onze IT-consultants vandaag nog!",
    cta: introCall,
  },
  ready: ready(
    "Wij ondersteunen bedrijven met zakelijke IT-diensten lokaal in Amsterdam, in heel Nederland en over de hele wereld. Onze klanten profiteren elke dag van IT die werkt – en hun bedrijf daadwerkelijk vooruit helpt. Benieuwd hoe IT-ondersteuning op maat er voor jouw team uit kan zien?",
  ),
};

const itSupportAmsterdam: LandingPage = {
  kind: "landing",
  slug: "lp-it-support-amsterdam",
  metaTitle: "IT-ondersteuning en beheerde cloudservices voor het MKB",
  metaDescription:
    "Betaalbare en flexibele IT-ondersteuningsservices voor het midden- en kleinbedrijf (MKB), inclusief beheerde cloud, cyberbeveiliging en meer.",
  hero: {
    title: "Maak voor eens en altijd een einde aan IT-problemen met onze IT-ondersteuning voor het MKB",
    subtitle: "Alles-in-één IT-ondersteuning. Geen hiaten, alles is gedekt.",
    intro:
      "Wij helpen bedrijven in Amsterdam en omgeving om veilig, verbonden en productief te blijven, met betrouwbare IT-ondersteuning en compleet IT-beheer.",
    bullets: heroBullets,
    cta: consult,
    trust: trustNl,
    video: perryVideo,
  },
  pain: {
    title: "Klinkt dat bekend?",
    intro: [
      "Je beheert IT bij een groeiend bedrijf – of je bent een ondernemer die gewoon wil dat alles werkt. Maar in werkelijkheid zit je opgescheept met:",
    ],
    bullets: painBulletsShort("stuk"),
    outroTitle: "Dat is waar wij helpen",
    outro:
      "Wij nemen complete IT-ondersteuning voor het MKB uit handen. Eén partner, één duidelijke maandelijkse factuur en één aanspreekpunt – zodat jij je kunt richten op het runnen van je bedrijf, niet op het najagen van technische problemen.",
    cta: introCall,
  },
  ready: ready(
    "Wij ondersteunen bedrijven met IT-beheer en IT-ondersteuning in Amsterdam, Nederland en de rest van de wereld. Onze klanten profiteren elke dag van IT die werkt – en hun bedrijf daadwerkelijk vooruit helpt. Nieuwsgierig hoe IT Support op maat voor het MKB u kan helpen productief te blijven?",
    "Klaar voor IT die werkt - met echte IT-ondersteuning?",
  ),
};

const itBedrijf: LandingPage = {
  kind: "landing",
  slug: "lp-it-bedrijf",
  ...nlMeta,
  hero: {
    title: "Op zoek naar een IT-bedrijf? Kies voor eén partner die alles regelt.",
    subtitle: "CloudConnected combineert systeembeheer, IT-support en IT-advies in één heldere oplossing. Geen gedoe – gewoon goed geregeld.",
    intro: "Van netwerkbeheer tot IT-consultancy: CloudConnected levert stabiele, schaalbare oplossingen waar MKB’s op bouwen.",
    leadIn: "Werken met CloudConnected biedt jou:",
    bullets: heroBullets,
    cta: consult,
    trust: trustNl,
    video: perryVideo,
  },
  pain: {
    title: "CloudConnected is jouw lokale ICT-bedrijf voor slim, schaalbaar en zorgeloos IT-beheer",
    intro: [
      "Zoek je een betrouwbaar IT-bedrijf dat meer doet dan alleen problemen oplossen?",
      "CloudConnected is hét IT-bedrijf voor MKB’s die klaar zijn met versnipperde leveranciers en onduidelijke facturen. Wij bieden alles-in-één IT-beheer met persoonlijk contact, transparante prijzen en oplossingen die meegroeien met je bedrijf. Als IT-bedrijf richten we ons niet alleen op technologie, maar vooral op hoe IT jouw processen beter kan ondersteunen.",
    ],
    bullets: [],
    outroTitle: "Laat je IT jouw groei niet tegenhouden",
    outro:
      "Ontdek vrijblijvend hoe ons IT-bedrijf jouw bedrijf helpt sneller, slimmer en efficiënter te werken en te groeien. Plan jouw gratis intake gesprek met één van onze IT-consultants vandaag nog!",
    cta: introCall,
  },
  ready: readyDefault,
};

const ictBeheerUitbesteden: LandingPage = {
  kind: "landing",
  slug: "lp-ict-beheer-uitbesteden",
  ...nlMeta,
  hero: {
    title: "ICT-beheer uitbesteden? Zo bespaar je tijd, frustratie en IT-kosten.",
    subtitle: "Breng rust in je bedrijf door je systeembeheer uit te besteden!",
    intro: "Slim ICT-beheer uitbesteden: schaalbaar, transparant en zonder gedoe – precies wat jouw groeiende bedrijf nodig heeft!",
    bullets: heroBullets,
    cta: consult,
    trust: trustNl,
    video: perryVideo,
  },
  pain: {
    title: "Bespaar kosten door je ICT-beheer uit te besteden",
    intro: [
      "Door het uitbesteden van je systeembeheer bespaar je kosten. Klinkt dat gek? Misschien! Maar denk eens aan wat een vaste IT-medewerker je kost of erger nog: wat het kost als je te maken hebt met niet werkende systemen. Naast dat je bespaart op een fulltime IT-medewerker, heeft ICT-beheer uitbesteden de volgende voordelen:",
    ],
    bullets: [
      "Je IT is door onze updates altijd up-to-date",
      "Onze helpdesk biedt je 24/7 ondersteuning",
      "Meer focus op je core business",
      "Ben je aan het groeien? Wij groeien met je mee",
      "Onze medewerkers worden voortdurend getraind",
      "Minder risico op downtime",
      "Toegang tot onze expertise",
      "Betere beveiliging",
    ],
    outroTitle: "We kijken graag hoe we onze inzet op jouw bedrijf kunnen afstemmen",
    outro: managesEverything,
    cta: introCall,
  },
  ready: readyDefault,
};

const itBeheerAmsterdam: LandingPage = {
  kind: "landing",
  slug: "lp-it-beheer-amsterdam",
  metaTitle: "Ontvang compleet IT-beheer in Amsterdam | SMB Experts",
  metaDescription:
    "Alles-in-één IT-beheer voor het MKB in Amsterdam. Snelle ondersteuning, oplossingen op maat, geen hiaten. Blijf veilig, verbonden en productief.",
  hero: {
    title: "Stop IT-problemen voorgoed met IT-beheer door CloudConnected",
    subtitle: "Alles-in-één IT-beheer voor het MKB in Amsterdam.",
    intro:
      "Wij helpen MKB-bedrijven in en rond Amsterdam veilig, verbonden en productief te blijven met betrouwbaar, alles-in-één IT-beheer.",
    bullets: heroBullets,
    cta: consult,
    trust: trustNl,
    video: perryVideo,
  },
  pain: {
    title: "Klinkt bekend?",
    intro: [
      "Je beheert IT bij een groeiend bedrijf – of je bent een ondernemer die gewoon wil dat alles werkt. Maar in werkelijkheid zit je opgescheept met:",
    ],
    bullets: painBulletsShort("kapot"),
    outroTitle: "Daar komen wij in beeld",
    outro:
      "CloudConnected neemt het complete IT-beheer en de infrastructuur uit handen. Eén partner voor IT-beheer in Amsterdam, één duidelijke maandelijkse factuur en één aanspreekpunt, zodat jij je kunt richten op het runnen van je bedrijf – en niet op het najagen van technische problemen.",
    cta: introCall,
  },
  ready: ready(
    "We ondersteunen bedrijven met IT-beheer en schaalbare IT-beheerdiensten in heel Nederland en wereldwijd. Onze klanten profiteren elke dag van IT die werkt – en hun bedrijf daadwerkelijk vooruit helpt. Benieuwd hoe IT-ondersteuning op maat er voor jouw team uit kan zien?",
  ),
};

const inmobiliaria = (slug: string, bullets: string[]): LandingPage => ({
  kind: "landing",
  slug,
  lang: "es",
  metaTitle: "Consultoría informática y servicios gestionados en la nube para PYMES",
  metaDescription:
    "Servicios flexibles de consultoría informática para pequeñas y medianas empresas (PYMES), que incluyen nube gestionada, ciberseguridad y mucho más.",
  hero: {
    title: "Soporte y consultoría IT para empresas inmobiliarias en Barcelona",
    subtitle: "Asistencia informática integral para tu empresa",
    intro:
      "Ayudamos a las inmobiliarias de Barcelona a prevenir interrupciones, proteger sus datos y mantenerse conectadas — en la oficina y en movimiento.",
    bullets,
    cta: { label: "Obtén tu consulta informática gratuita", href: CALENDLY_URL },
    trust: "Calificado como “Excelente” en Trustpilot",
    image: `${IMG}/222b487b0399d9cdb3a90261b39ca5e24b6a9681.jpg`,
  },
  pain: {
    title: "¿Te suena?",
    intro: [
      "Estás gestionando la Informática en una empresa inmobiliaria en crecimiento — o eres un emprendedor que solo quiere que todo funcione. Pero en la práctica, estás lidiando con:",
    ],
    bullets: [
      "Proveedores fragmentados",
      "Facturas confusas",
      "El personal se encuentra constantemente con problemas informáticos",
      "No hay contacto claro cuando algo se rompe",
      "Funciones que faltan, precios poco claros y la sensación de que pagas de más",
    ],
    outroTitle: "Ahí es donde entramos nosotros",
    outro:
      "Te quitamos de las manos la gestión y consultoría informáticas completas. Un socio, una factura mensual clara y un punto de contacto, para que puedas centrarte en dirigir tu empresa, no en perseguir problemas tecnológicos.",
    cta: { label: "Comienza con una llamada estratégica gratuita", href: CALENDLY_URL },
  },
  ready: {
    title: "¿Preparado para una TI que funcione de verdad?",
    lead: "¿Buscas tranquilidad, costes claros y un socio que piense realmente junto a ti? Este es el momento adecuado para conectar.",
    text: "Ayudamos a las empresas inmobiliarias de Barcelona a gestionar su IT con confianza. Desde sistemas de datos seguros hasta herramientas de comunicación fiables, nuestros clientes disfrutan de un IT que impulsa su trabajo — no lo ralentiza.",
    cta: { label: "Reserva una consulta sin compromiso", href: CALENDLY_URL },
    note: "Auditoría informática completa incluida, sin condiciones.",
  },
  testimonialsTitle: "De nuestros clientes",
});

export const landingPages: LandingPage[] = [
  itBeheer,
  itConsultancy,
  zakelijkeItDiensten,
  itSupportAmsterdam,
  itBedrijf,
  ictBeheerUitbesteden,
  itBeheerAmsterdam,
  inmobiliaria("lp-inmobiliaria", [
    "Soluciones a medida y escalables",
    "Servicio de asistencia rápido y fiable",
    "Precios transparentes",
  ]),
  inmobiliaria("lp-inmobiliaria-2", heroBullets),
];

/* ------------------------------------------------------------------ */
/* Blocks shared by every landing page                                  */
/* ------------------------------------------------------------------ */

export const landingShared = {
  solutions: {
    title: "Onze oplossingen",
    intro: "We hebben onze services gegroepeerd in drie categorieën:",
    introStrong: "Jouw Mensen, Jouw Werkplek en Jouw Bedrijf",
    introRest: " - zodat je oplossingen kunt bekijken op basis van het onderdeel van je bedrijf dat ze ondersteunen.",
    items: [
      {
        icon: "/images/Group-205.svg",
        title: "Voor jouw Mensen",
        text: "Apparaten, toegang, ondersteuning en onboarding - we regelen het allemaal vanaf dag één.",
        bullets: [
          "Helpdesk & WhatsApp-ondersteuning",
          "Hardware abonnementen",
          "Microsoft 365 instellen en beheren",
          "Google Workspace instellen en beheren",
          "Onbeperkt bellen (Cloud Telefonie)",
          "Trainingsprogramma's & Phishing-tests",
        ],
        href: "/tech-voor-jouw-mensen/",
      },
      {
        icon: "/images/Group-205-1.svg",
        title: "Voor jouw Werkplek",
        text: "Betrouwbare verbinding en een stabiele opstelling - op kantoor, thuis of onderweg.",
        bullets: ["Internet & (Wifi) Netwerk", "24/7 cyberbeveiliging", "Internetfiltering", "CCTV-netwerk", "Beheerd afdrukken"],
        href: "/it-support-op-de-werkplek/",
      },
      {
        icon: "/images/Group-205-2.svg",
        title: "Voor jouw Bedrijf",
        text: "Wij beheren uw IT-infrastructuur, setup, strategie en verandering in uw hele bedrijf.",
        bullets: [
          "Uitbesteed IT-systeembeheer",
          "Virtuele IT-manager (vCIO) & consultancy",
          "Naleving",
          "AI-implementatie",
          "Slimme automatiseringen",
          "IT-ondersteuning bij fusies en overnames",
          "IT-ondersteuning voor verhuizing en uitbreiding",
        ],
        href: "/it-voor-jouw-bedrijf/",
      },
    ],
    cta: { label: "Ontvang uw gratis IT-consultatie", href: CALENDLY_URL },
    note: "Volledige IT-audit inbegrepen - geen verplichtingen.",
  },
  steps: {
    title: "Wanneer u contact opneemt:",
    image: `${IMG}/Get-in-touch.webp`,
    items: [
      {
        title: "Introgesprek",
        text: "We leren uw bedrijf kennis. U vertelt ons hoe dingen werken en wat u denkt nodig te hebben. Onze consultants stellen vragen, luisteren en krijgen door ons gesprek een duidelijk beeld van uw opstelling",
      },
      {
        title: "Gratis IT-audit (Ter waarde van €250 )",
        text: "We bekijken de informatie die u met ons hebt gedeeld, we controleren uw domein, zoeken naar beveiligingsrisico’s en scannen het dark web op gelekte gegevens. U krijgt een duidelijk overzicht van de zwakke plekken en de oplossingen die we aanbevelen - met een korte, eerlijke uitleg waarom.",
      },
      {
        title: "Het resultaat",
        text: "We laten u zien wat werkt en wat beter kan. Geen druk, geen upselling - alleen praktische inzichten. Zelfs als u niet verder gaat, zult u vertrekken met een beter begrip van uw IT-inrichting.",
      },
    ],
  },
  audit: {
    title: "Benieuwd naar de inhoud van onze IT-audit?",
    text: "Voer hier uw e-mailadres in en we sturen een voorbeeld van een echte IT-audit. Zo kunt u zien waar onze IT-audit uit bestaat en wat voor advies u van ons kunt verwachten.",
    image: `${IMG}/IMG_2043-1.png`,
    placeholder: "Voer hier uw e-mailadres in...",
    submit: "Ontvang de voorbeeld IT-audit",
  },
  readyImage: `${IMG}/Mask-group-2025-05-09T165008.250.webp`,
  reasons: {
    title: "Waarom bedrijven voor ons kiezen",
    items: [
      {
        icon: "/images/New-Project-1.svg",
        title: "Alles-in-één partner",
        subtitle: "Eén betrouwbaar team voor al uw IT.",
        text: "Van IT-beheer voor het MKB, POS- en camerasystemen, netwerkinstallatie, hardware-abonnementen, software en werkplekconfiguratie - wij regelen elk onderdeel van uw IT-omgeving. CloudConnected is een van de weinige partners die werkelijk alles onder één dak aanbiedt, zodat u niet meerdere leveranciers hoeft te beheren of u zorgen hoeft te maken over hiaten in uw installatie.",
      },
      {
        icon: "/images/Vector-49.svg",
        title: "Afgestemd op uw bedrijf",
        subtitle: "Ontworpen op basis van jouw behoeften, niet op basis van een sjabloon.",
        text: "Uw bedrijf heeft specifieke behoeften. Onze gecertificeerde specialisten luisteren naar wat jouw bedrijf nodig heeft en stellen alles op een gebruiksvriendelijke manier in. Zo betaal je nooit voor diensten die je niet nodig hebt. Door IT af te stemmen op je bedrijfsprocessen helpen we jou en je team efficiënter te werken.",
      },
      {
        icon: "/images/New-Project-2.svg",
        title: "Snel hulp krijgen",
        subtitle: "Bel of WhatsApp ons - we zijn gemakkelijk te bereiken.",
        text: "Onze helpdesk in Amsterdam is altijd goed bereikbaar, zowel in het Nederlands als in het Engels. Zelfs als je onderweg bent, kun je snel en gemakkelijk contact met ons opnemen via WhatsApp. Wist je dat we 92% van de telefoontjes al tijdens het eerste gesprek oplossen? Je spreekt altijd rechtstreeks met een van onze eigen experts - niet met een callcenter.",
      },
      {
        icon: "/images/security_31dp_F05A1A_FILL0_wght400_GRAD0_opsz24.svg",
        title: "24/7 cyberbeveiliging",
        subtitle: "Behandeld door echte experts - niet alleen software.",
        text: "Met onze 24/7 cyberbeveiligingsservice zorgen we ervoor dat uw MKB-werkplek beveiligd is en blijft tegen hackers. Uw online omgeving wordt 24 uur per dag bewaakt - niet alleen door software, maar door echte mensen - die bedreigingen snel opsporen en elimineren. Zo bent u 24/7 beschermd tegen hackers, malware en datalekken.",
      },
      {
        icon: "/images/Frame-3.svg",
        title: "Onderwijs en bewustwording",
        subtitle: "Help je team om technologie beter te gebruiken en veilig te blijven.",
        text: "We helpen je werknemers om phishingpogingen te herkennen door middel van regelmatige simulaties, zodat ze echte aanvallen kunnen herkennen en vermijden. Bovendien bieden we eenvoudig toegankelijke cursussen over Microsoft 365, zakelijke tools en digitale best practices - allemaal direct beschikbaar in Microsoft Teams, zodat je team kan leren zonder van platform te hoeven wisselen.",
      },
      {
        icon: "/images/Frame-4.svg",
        title: "Hardware Abonnement",
        subtitle: "Ontvang de nieuwste apparaten - op jouw voorwaarden.",
        text: "Vermijd hoge aanloopkosten door laptops, telefoons en andere hardware te leasen via een flexibel maandabonnement. Als onderdeel van onze IT Management SMB-service kiest u wat uw team nodig heeft - wij stellen het in, houden het draaiende en zorgen voor upgrades - volledig schaalbaar!",
      },
      {
        icon: "/images/Frame-5.svg",
        title: "Optimale instelling",
        subtitle: "Microsoft 365 | Google Werkruimte",
        text: "Onze medewerkers zorgen ervoor dat Microsoft 365 of Google Workspace wordt geconfigureerd volgens jouw behoeften. We helpen jou en je team deze services optimaal te benutten om je bedrijfsprocessen te ondersteunen.",
      },
      {
        icon: "/images/New-Project-3.svg",
        title: "IT-partners wereldwijd",
        subtitle: "Samenwerking met lokale IT-partners",
        text: "Vanaf 2025 werken veel van onze klanten op meerdere locaties wereldwijd. Door onze partnerships met lokale IT-providers biedt CloudConnected altijd en overal betrouwbare ondersteuning, ook tijdens verhuizingen, uitbreidingen en fusies.",
      },
      {
        icon: "/images/New-Project-4.svg",
        title: "Bespaar op het in-house IT-team",
        subtitle: "Niet intern, maar nog steeds deel van je team.",
        text: "Bespaar op de kosten van het inhuren van fulltime IT-medewerkers. Door met CloudConnected te werken, bent u verzekerd van systemen die altijd up-to-date zijn en krijgt u toegang tot een volledig IT-team, zonder de overhead.",
      },
    ],
  },
  about: {
    title: "Over ons",
    image: `${IMG}/Mask-group-2025-04-16T131903.549.webp`,
    paragraphs: [
      "Wij zijn een in Amsterdam gevestigde IT-dienstverlener die sinds 2009 kleine en middelgrote bedrijven ondersteunt. Van starters tot teams van 500, wij leveren veilige, cloud-gebaseerde systemen gemaakt voor elke opstelling.",
      "Ons team werkt vanuit ons lokale kantoor en helpt klanten met het beheren van de dagelijkse IT, het verbeteren van de infrastructuur en met vooruit plannen.",
    ],
    cta: { label: "Lees meer", href: "/over-ons/" },
  },
  faq: {
    title: "Snelle antwoorden",
    items: [
      {
        q: "Wat doet \"Managed IT Management\" eigenlijk voor mijn bedrijf?",
        a: ["Het is alsof je een proactief IT-team hebt. Wij beheren en optimaliseren uw technologie (netwerken, beveiliging, cloud) om problemen te voorkomen, de productiviteit te verhogen en uw gegevens te beveiligen zodat u zich kunt richten op uw bedrijfsdoelen."],
      },
      {
        q: "Hoe beschermt u ons tegen cyberbeveiligingsbedreigingen zoals ransomware?",
        a: ["We gebruiken een meerlaagse beveiligingsaanpak - proactieve bewaking, geavanceerde bescherming, updates en back-ups - om uw gevoelige gegevens 24/7 actief te verdedigen, zodat u gerust kunt zijn."],
      },
      {
        q: "De huidige IT-ondersteuning is traag. Hoe zijn jullie sneller en betrouwbaarder?",
        a: ["We richten ons op proactieve preventie om problemen tot een minimum te beperken. Hulp nodig? Vraag snelle ondersteuning direct via Chat & WhatsApp, ondersteund door gegarandeerde reactietijden voor minder downtime en snelle oplossingen, en houdt je team productief."],
      },
      {
        q: "Zijn de Managed IT-kosten voorspelbaar of krijgen we verrassingsrekeningen?",
        a: ["Zeg vaarwel tegen verrassingsrekeningen! Je krijgt voorspelbare IT-uitgaven met een vast maandelijks bedrag voor proactief onderhoud, beveiliging en ondersteuning. Het is vaak kosteneffectiever dan break-fix IT."],
      },
      {
        q: "Is het moeilijk en verstorend om van IT-provider te veranderen?",
        a: ["Niet bij ons! Onze gestroomlijnd inwerkproces is ontworpen voor een soepele, minimaal verstorende overgang. Wij zorgen voor de technische details zodat jij je op je bedrijf kunt richten."],
      },
      {
        q: "Onze bedrijfsbehoeften veranderen voortdurend. Kunnen uw IT-beheerdiensten gemakkelijk met ons meegroeien?",
        a: [
          "Ja! Schaalbaarheid is de sleutel. Onze services passen zich flexibel aan uw veranderende bedrijf aan.",
          "Met proactieve strategische gesprekken zorgen we ervoor dat uw IT-resources en -services altijd perfect aansluiten op uw huidige behoeften en toekomstige plannen, we voorkomen over- of onderbevoorrading en zorgen ervoor dat u alleen betaalt voor wat u nodig hebt.",
        ],
      },
      {
        q: "We hebben specifieke behoeften op het gebied van branchesoftware en compliance. Kan uw IT-beheerplan worden aangepast?",
        a: ["Absoluut. We begrijpen dat één maat niet voor iedereen past. We nemen de tijd om meer te weten te komen over uw specifieke bedrijfsactiviteiten, branchevereisten (inclusief compliance waar van toepassing) en unieke softwarebehoeften, om een IT-beheerplan op maat te maken dat perfect voor u werkt."],
      },
      {
        q: "Hoe ondersteunt en beheert uw service kritische cloudplatforms zoals Microsoft 365 of Google Workspace?",
        a: ["Wij bieden uitgebreid beheer voor de belangrijkste cloudplatforms. Dit omvat gebruikersbeheer, beveiligingsconfiguratie, licentiebeheer, gegevensback-up en naadloze integratie met uw andere systemen, zodat u uw cloudinvestering veilig en optimaal kunt benutten."],
      },
      {
        q: "We willen de efficiëntie verbeteren. Kan jouw team ons helpen AI of tools voor bedrijfsautomatisering in te zetten?",
        a: ["Ja! Wij helpen bedrijven verder te gaan dan de traditionele IT. Onze experts kunnen helpen bij het identificeren van kansen en het implementeren van Artificial Intelligence (AI) en Business Automation tools die speciaal zijn ontworpen om uw bedrijfsprocessen aanzienlijk te optimaliseren, terugkerende handmatige taken te verminderen en de algehele efficiëntie te verhogen."],
      },
    ],
    cta: { label: "Meer vragen? Neem contact op", href: "/contact/" },
  },
  ebook: {
    title: "Hoe kiest u de juiste IT-provider?",
    image: `${IMG}/IT-provider.webp`,
    text: "Niet alle IT-partners zijn gelijk. Als u niet zeker weet waar u op moet letten of hoe u de opties moet vergelijken, hebben we een korte handleiding samengesteld die helpt een verstandige keuze te maken.",
    placeholder: "Voer uw e-mail in om de gratis gids te ontvangen",
    submit: "Stuur me mijn gratis e-book",
  },
};

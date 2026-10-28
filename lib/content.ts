// All homepage copy lives here so it can be edited without touching layout code.
// Text is taken verbatim from the Dutch homepage at https://cloudconnected.nl.

export const CALENDLY_URL =
  "https://calendly.com/cloudconnected-sales/laten-we-praten-over-jouw-it";
export const TRUSTPILOT_URL = "https://www.trustpilot.com/review/cloudconnected.nl";
export const SUPPORT_PORTAL_URL = "https://www.supportportal.eu";
export const LINKEDIN_URL = "https://www.linkedin.com/company/cloudconnected/";
export const PERRY_VIDEO_ID = "597698393";

export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; href: string; links: NavLink[] };

export const solutionsMenu: NavGroup[] = [
  {
    label: "Jouw mensen",
    href: "/tech-voor-jouw-mensen/",
    links: [
      { label: "Microsoft365 | Google Workspace", href: "/cloud-werkplekondersteuning/" },
      { label: "Hardware-abonnementen", href: "/hardware-abonnements-service/" },
      { label: "Technische ondersteuning", href: "/mkb-it-helpdesk-support/" },
      { label: "Onbeperkt bellen", href: "/cloud-telefoonsystemen-teams-webex/" },
      { label: "Training programma’s", href: "/microsoft-365-cybersecurity-training/" },
      { label: "Overzicht", href: "/tech-voor-jouw-mensen/" },
    ],
  },
  {
    label: "Jouw werkplek",
    href: "/it-support-op-de-werkplek/",
    links: [
      { label: "Internet & (WiFi) Netwerk", href: "/zakelijk-internet/" },
      { label: "24/7 cyberbeveiliging", href: "/24-7-cybersecurity/" },
      { label: "Veilig gebouw", href: "/beveiliging-werkplek/" },
      { label: "Beheerd afdrukken", href: "/beheerd-afdrukken/" },
      { label: "Overzicht", href: "/it-support-op-de-werkplek/" },
    ],
  },
  {
    label: "Jouw bedrijf",
    href: "/it-voor-jouw-bedrijf/",
    links: [
      { label: "IT-systeembeheer", href: "/it-systeembeheer/" },
      { label: "Strategie (Consultancy, Compliance)", href: "/it-consultancy-services-en-compliance/" },
      { label: "Ondersteuning voor AI en automatisering", href: "/ai-integratie-workflow-automatisering/" },
      { label: "Bedrijfsverhuizing en uitbreiding", href: "/bedrijfsuitbreiding-verhuizing/" },
      { label: "Overzicht", href: "/it-voor-jouw-bedrijf/" },
    ],
  },
];

export const industriesMenu = {
  intro: "Ontvang IT-oplossingen afgestemd op jouw organisatie en branche met CloudConnected.",
  links: [
    { label: "Advocatuur", href: "/it-oplossingen-voor-advocatenkantoren/" },
    { label: "Zakelijke dienstverlening", href: "/it-voor-zakelijke-diensten/" },
    { label: "Horeca", href: "/it-diensten-voor-de-horeca/" },
    { label: "Zorg", href: "/it-oplossingen-voor-de-gezondheidszorg/" },
    { label: "Non-profit", href: "/it-oplossingen-voor-non-profitorganisaties/" },
    { label: "Logistiek", href: "/it-diensten-voor-logistiek/" },
  ],
  all: { label: "Alle Branches", href: "/industrieen-die-we-bedienen/" },
};

export const languages: NavLink[] = [
  { label: "Nederlands", href: "https://cloudconnected.nl/" },
  { label: "English", href: "https://en.cloudconnected.nl/" },
  { label: "Español", href: "https://cloudconnected.es/" },
  { label: "Català", href: "https://cat.cloudconnected.es/" },
  { label: "English (ES)", href: "https://en.cloudconnected.es/" },
];

export const heroPoints = [
  { lead: "Jouw mensen", text: "veilig, ondersteund en goed getraind." },
  { lead: "Jouw werkplek", text: "uitgerust, betrouwbaar en altijd online." },
  { lead: "Jouw bedrijf", text: "draait zonder onderbrekingen." },
];

export const partners = [
  { src: "/images/hb-business-p.-1.svg", alt: "HP Business Partner", href: "https://www.hp.com/" },
  { src: "/images/Group-239.svg", alt: "Microsoft Partner", href: "https://support.microsoft.com/" },
  { src: "/images/Group-241.svg", alt: "Cisco Partner", href: "https://www.cisco.com/" },
  { src: "/images/image-53-1.svg", alt: "Apple", href: "https://www.apple.com/" },
  { src: "/images/image-54-1.svg", alt: "KPN Partner Network", href: "https://www.kpn.com/" },
  { src: "/images/acronis-1-1.svg", alt: "Acronis Gold Service Provider", href: "https://www.acronis.com/" },
  { src: "/images/WhatsApp-Image-2024-06-27-at-12-2.svg", alt: "Lid van NLdigital", href: "http://www.nldigital.nl" },
];

export const solutions = [
  {
    title: "Voor jouw mensen",
    icon: "/images/Group-205.svg",
    description: "Apparaten, toegang, ondersteuning en onboarding – wij regelen alles vanaf dag één.",
    items: [
      "Helpdesk & WhatsApp-ondersteuning",
      "Hardware-abonnementen",
      "Microsoft 365 Setup & Beheer",
      "Google Workspace Setup & Beheer",
      "Onbeperkt Bellen (Cloud Telefonie)",
      "Opleidingsprogramma's & Phishing Tests",
    ],
    href: "/tech-voor-jouw-mensen/",
  },
  {
    title: "Voor jouw werkplek",
    icon: "/images/Group-205-1.svg",
    description: "Betrouwbare verbinding en een stabiele opstelling — op kantoor, thuis of onderweg.",
    items: [
      "Internet & (Wifi) Netwerk",
      "24/7 Cybersecurity",
      "Internet Filtering",
      "CCTV Netwerk",
      "Beheerde Printing",
    ],
    href: "/it-support-op-de-werkplek/",
  },
  {
    title: "Voor jouw bedrijf",
    icon: "/images/Group-205-2.svg",
    description: "Wij beheren jouw IT-infrastructuur, setup, strategie en veranderingen binnen uw bedrijf.",
    items: [
      "Uitbestede IT-systeembeheer",
      "Virtuele IT-manager (vCIO) & Consultancy",
      "Compliance",
      "AI-implementatie",
      "Slimme Automatiseringen",
      "IT-ondersteuning voor Fusies & Overnames",
      "IT-ondersteuning voor verhuizingen & uitbreidingen",
    ],
    href: "/it-voor-jouw-bedrijf/",
  },
];

export const packages = [
  {
    title: "Mobiele werkplek",
    image: "/images/image-115.webp",
    items: ["HP Dragonfly", "iPhone 16 Plus"],
    href: "/hardware-abonnements-service/",
    comboLabel: "Best gecombineerd met:",
    combo: ["365 Workplace Pro", "Onbeperkt bellen"],
  },
  {
    title: "Vaste werkplek",
    image: "/images/image-62.webp",
    items: ["HP EliteOne 840 - i5", "Yealink Deskphone MP54"],
    href: "/hardware-abonnements-service/",
    comboLabel: "Best in combinatie met:",
    combo: ["365 Workplace Pro", "Onbeperkt bellen"],
  },
  {
    title: "Zakelijk glasvezel en WiFi",
    image: "/images/Group-208-1.png",
    items: ["Internet (1 Gbit) & VPN-router", "Twee zakelijke wifi-toegangspunten"],
    href: "/zakelijk-internet/",
    comboLabel: "Best gecombineerd met:",
    combo: ["Hardware-abonnementen"],
  },
  {
    title: "Apple Werkplek",
    image: "/images/Group-207-1.png",
    items: ["Macbook Air - M3", "iPhone 16 Plus"],
    href: "/hardware-abonnements-service/",
    comboLabel: "Best gecombineerd met:",
    combo: ["365 Workplace Pro", "Onbeperkt bellen"],
  },
  {
    title: "365 Werkplek",
    image: "/images/Group-360-1.webp",
    items: ["365Workplace Pro", "Onbeperkt Bellen"],
    href: "/cloud-werkplekondersteuning/",
    comboLabel: "Best gecombineerd met:",
    combo: ["Hardware Abonnementen"],
  },
];

export const testimonials = [
  {
    quote:
      "Na een lange zoektocht naar een belsysteem voor ons CRM kwamen we bij Webex en CloudConnected. Judith heeft ons fijn geholpen en geadviseerd, en Maurizio regelde de onboarding razendsnel. De snelle communicatie, fijne systemen en professionaliteit maken ons super tevreden. Alles werkt vlekkeloos—een topcombinatie! Dank namens Seels, we zijn heel blij met ons nieuwe belsysteem.",
    name: "Wouter Moonen",
    company: { label: "Seels.nl", href: "https://seels.nl/" },
    source: { logo: "/images/image-83-2.png", alt: "Google Reviews", href: "https://www.google.com/search?q=CloudConnected+Reviews" },
  },
  {
    quote:
      "De support is geweldig! We beginnen steeds meer mensen in Europa aan boord te krijgen en iedereen bij Cloudconnected was zeer behulpzaam om de computers die ik nodig had snel klaar te krijgen voor mijn werk op afstand.",
    name: "Daniel Dunlap",
    source: { logo: "/images/trustpilot-1.svg", alt: "Trustpilot", href: TRUSTPILOT_URL },
  },
  {
    quote:
      "Supersnelle en deskundige hulp van Barry! Wat een opluchting vergeleken met mijn vorige IT-serviceprovider. Veel kennis in huis, snel antwoord, betrouwbare en betaalbare service.",
    name: "Thiemo - ROAR! Concepts",
    source: { logo: "/images/logo.svg", alt: "Feedback Company", href: "https://www.feedbackcompany.com/nl-nl/reviews/cloudconnected/" },
  },
  {
    quote:
      "CloudConnected levert echt eersteklas IT-diensten. Ze reageren snel, hebben een robuust systeem en informeren ons op pro-actieve wijze.",
    name: "Caroline Roberts",
    source: { logo: "/images/trustpilot-1.svg", alt: "Trustpilot", href: TRUSTPILOT_URL },
  },
  {
    quote:
      "Ze hebben mijn probleem precies op tijd opgelost! De helpdesk van Cloudconnected was vriendelijk en behulpzaam, hoewel het 50 minuten duurde. Ze hebben Outlook opnieuw geïnstalleerd en mijn printer gerepareerd. Nu werkt alles weer perfect! Bedankt, Justin!",
    name: "Annelies Pijnenburg",
    source: { logo: "/images/trustpilot-1.svg", alt: "Trustpilot", href: TRUSTPILOT_URL },
  },
];

export const perryMessage = [
  "Bedankt dat je CloudConnected overweegt als jouw technologiepartner. Al meer dan tien jaar zetten mijn team en ik ons in om technologie te gebruiken om bedrijfsgroei en innovatie te bevorderen.",
  "We zijn gespecialiseerd in het leveren van diverse op maat gemaakte en betaalbare IT-services die gericht zijn op het begrijpen en aanpakken van jouw unieke bedrijfsbehoeften. Onze ‘lego-achtige’ benadering betekent dat we oplossingen op maat creëren om jouw uitdagingen te overwinnen en je te helpen jouw doelen te bereiken.",
  "Ik vind het geweldig om meer te weten te komen over jouw bedrijf en samen deze transformerende reis te beginnen. Weet je niet zeker wat je nodig hebt? Plan een strategiegesprek met me in en we zoeken het samen uit. Ik kijk uit naar de mogelijkheid om IT ook voor jou gemakkelijk te maken door jouw werkplek, mensen en bedrijf als één geheel te verbinden.",
];

export const reasons = [
  {
    icon: "/images/New-Project-1.svg",
    title: "Alles-in-één Partner",
    subtitle: "Één betrouwbaar team om al jouw IT te beheren.",
    text: "Van IT-beheer, POS- en camerasystemen, netwerksetup, hardware-abonnementen, software en werkplekconfiguratie – wij beheren elk onderdeel van jouw IT-omgeving. CloudConnected is een van de weinige partners die werkelijk alles onder één dak biedt, zodat je geen meerdere leveranciers hoeft te beheren of zich zorgen hoeft te maken over hiaten in jouw setup.",
  },
  {
    icon: "/images/Vector-49.svg",
    title: "Op Maat Gemaakt Voor Jouw Bedrijf",
    subtitle: "Ontworpen rond jouw behoeften, niet een sjabloon.",
    text: "Jouw bedrijf heeft specifieke behoeften. Onze gecertificeerde specialisten luisteren naar wat jouw bedrijf nodig heeft en stellen alles op een gebruiksvriendelijke manier in. Op deze manier betaal je nooit voor diensten die je niet nodig hebt. Door IT af te stemmen op jouw bedrijfsprocessen, helpen we jouw team efficiënter te laten werken.",
  },
  {
    icon: "/images/New-Project-2.svg",
    title: "Hulp, snel gekregen",
    subtitle: "Bel of WhatsApp ons — we zijn gemakkelijk te bereiken.",
    text: "Onze helpdesk in Amsterdam is altijd gemakkelijk te bereiken, zowel in het Nederlands als in het Engels. Zelfs wanneer je onderweg bent, kunt je snel en eenvoudig contact met ons opnemen via WhatsApp. Wist je dat we 92% van de oproepen tijdens het eerste gesprek oplossen? Je spreekt altijd direct met een van onze eigen experts — niet met een callcenter.",
  },
  {
    icon: "/images/security_31dp_F05A1A_FILL0_wght400_GRAD0_opsz24.svg",
    title: "24/7 Cybersecurity",
    subtitle: "Behandeld door echte experts — niet alleen software.",
    text: "Met onze 24/7 cybersecurityservice zorgen we ervoor dat jouw MKB-werkplek veilig is en blijft tegen hackers. Jouw online omgeving wordt 24 uur per dag, 7 dagen per week gemonitord — niet alleen door software, maar door echte mensen — die snel dreigingen detecteren en elimineren. Zo ben je 24/7 beschermd tegen hackers, malware en datalekken.",
  },
  {
    icon: "/images/Frame-3.svg",
    title: "Opleiding & Bewustwording",
    subtitle: "Help jouw team technologie beter te gebruiken en veilig te blijven.",
    text: "We helpen jouw medewerkers phishingpogingen te herkennen door middel van regelmatige simulaties — en trainen ze om echte aanvallen te herkennen en te vermijden. Daarnaast bieden we gemakkelijk toegankelijke cursussen aan over Microsoft 365, zakelijke tools en digitale best practices — allemaal direct beschikbaar in Microsoft Teams, zodat jouw team kan leren zonder van platform te wisselen.",
  },
  {
    icon: "/images/Frame-4.svg",
    title: "Hardware-abonnement",
    subtitle: "Krijg de nieuwste apparaten — op uw voorwaarden.",
    text: "Vermijd grote vooruitbetalingen door laptops, telefoons en andere hardware te leasen via een flexibel maandelijks abonnement. Jij kiest wat jouw team nodig heeft — wij stellen het in, houden het draaiende en zorgen voor upgrades – volledig schaalbaar!",
  },
  {
    icon: "/images/Frame-5.svg",
    title: "Geoptimaliseerde Setup",
    subtitle: "Microsoft 365 | Google Workspace",
    text: "Ons personeel zorgt ervoor dat Microsoft 365 of Google Workspace is geconfigureerd volgens jouw behoeften. We helpen jouw team het meeste uit deze diensten te halen ter ondersteuning van jouw bedrijfsprocessen.",
  },
  {
    icon: "/images/New-Project-3.svg",
    title: "IT Partners Wereldwijd",
    subtitle: "Samenwerking met Lokale IT-partners",
    text: "Vanaf 2025 werken veel van onze klanten op meerdere locaties wereldwijd. Door onze samenwerkingen met lokale IT-providers biedt CloudConnected betrouwbare ondersteuning, altijd en overal — inclusief tijdens verhuizingen, uitbreidingen en fusies.",
  },
  {
    icon: "/images/New-Project-4.svg",
    title: "Besparen op een In-House IT-team",
    subtitle: "Niet in-house, maar toch onderdeel van jouw team.",
    text: "Bespaar op de kosten van het aannemen van fulltime IT-medewerkers. Door samen te werken met CloudConnected ben je verzekerd van systemen die altijd up-to-date zijn – en krijg je toegang tot een volledig IT-team, zonder de overhead.",
  },
];

export const about = [
  "Wij zijn een IT-dienstverlener gevestigd in Amsterdam en werken sinds 2009 samen met kleine en middelgrote bedrijven. Ons team ondersteunt organisaties van elke omvang – van lokale startups tot bedrijven met meer dan 500 medewerkers.",
  "Vanuit ons kantoor in Amsterdam helpen we klanten bij het dagelijks beheer van hun IT, het onderhouden van veilige en betrouwbare systemen en het plannen van toekomstige groei. We werken nauw samen met onze klanten en bieden praktische, duurzame oplossingen die passen bij elke unieke situatie.",
];

export const guarantees = [
  { icon: "/images/Frame-9.svg", label: "Snel antwoord" },
  { icon: "/images/Vector-52.svg", label: "Geen verborgen kosten" },
  { icon: "/images/Group-444.svg", label: "Tevredenheidsgarantie" },
];

export const contact = {
  address: ["van Boetzelaerstraat 1", "1051CS Amsterdam", "The Netherlands"],
  emails: ["sales@cloudconnected.nl", "helpdesk@cloudconnected.nl"],
  phone: { label: "+31 20 30 34 260", href: "https://wa.me/31203034260" },
  hours: ["Maandag – Vrijdag / 08:00 – 18:00", "Helpdesk / 24×7"],
};

export const footerLinks: NavLink[] = [
  { label: "Privacybeleid", href: "/privacy-policy/" },
  { label: "Gebruiksvoorwaarden", href: "/algemene-voorwaarden/" },
  { label: "Over ons", href: "/over-ons/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

/** Company counters shown on Over ons and the landing pages. */
export const companyStats = [
  { value: "15+", unit: " jaar", label: "Aantal jaren in bedrijf" },
  { value: "150+", unit: "", label: "Dagelijks bediende bedrijven" },
  { value: "92", unit: "%", label: "Problemen opgelost bij het eerste gesprek" },
  { value: "8", unit: " sec.", label: "Responstijd helpdesk" },
];

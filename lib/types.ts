// Shared content types for every data-driven page (solutions, branches, company pages,
// legal pages and landing pages). Templates in components/ render these shapes.

export type Cta = { label: string; href: string };
export type Card = { title: string; text: string; href: string };
export type Video = { id: string; poster: string };

export type TextBlock = {
  title?: string;
  /** Small orange uppercase heading above a paragraph group. */
  kicker?: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Small-heading + text pairs (e.g. a list of services). */
  items?: { title: string; text: string; href?: string }[];
  /** Paragraphs rendered after the bullets/items. */
  closing?: string[];
};

export type FormField = {
  name: string;
  label: string;
  type?: "text" | "tel" | "email" | "textarea";
  required?: boolean;
};

export type DemoForm = { id?: string; title?: string; fields: FormField[]; submit: string };

export type SplitSection = {
  kind: "split";
  blocks: TextBlock[];
  image?: string;
  video?: Video;
  /** Which side the media sits on (desktop). */
  imageSide?: "left" | "right";
  cta?: Cta;
  /** Decorative background: orange ring top-right, or the large orange shape. */
  decor?: "ring" | "orange";
};

export type PackagesSection = { kind: "packages"; title: string; cta?: Cta };

export type FeaturesSection = {
  kind: "features";
  items: { icon: string; title: string; text: string; stat: string }[];
  cta?: Cta;
};

/** The four company counters (years, clients, first-call fix rate, response time). */
export type StatsSection = { kind: "stats"; title?: string };

export type MetricsSection = {
  kind: "metrics";
  title: string;
  image: string;
  items: { icon: string; value: string; text: string }[];
};

export type IconCardsSection = {
  kind: "iconCards";
  title?: string;
  /** "list" stacks full-width cards (mission); "grid" lays them out in columns. */
  layout: "list" | "grid";
  items: { icon: string; title: string; text: string; cta?: Cta }[];
};

export type FormSection = {
  kind: "form";
  image?: string;
  blocks: TextBlock[];
  form: DemoForm;
  decor?: "orange";
};

export type PricingSection = {
  kind: "pricing";
  title: string;
  note?: string;
  features: string[];
  plans: { name: string; included: boolean[]; price: string }[];
  addOns: { title: string; items: Cta[]; price: string };
  cta: Cta;
};

export type ContactDetailsSection = {
  kind: "contactDetails";
  title: string;
  paragraphs: string[];
  form?: DemoForm;
  /** Google Maps embed of the Amsterdam office. */
  map?: boolean;
};

/** Places the customer testimonials at this point instead of before the footer. */
export type TestimonialsSection = { kind: "testimonials" };

export type LogosSection = { kind: "logos"; logos: { src: string; alt: string }[] };

export type EmbedSection = { kind: "embed"; src: string; title: string; height: number };

/** Long-form text such as the privacy policy. */
export type ProseSection = {
  kind: "prose";
  content: ({ h2: string } | { h3: string } | { p: string } | { link: Cta })[];
};

export type DetailSection =
  | SplitSection
  | PackagesSection
  | FeaturesSection
  | StatsSection
  | MetricsSection
  | IconCardsSection
  | FormSection
  | PricingSection
  | ContactDetailsSection
  | LogosSection
  | EmbedSection
  | ProseSection
  | TestimonialsSection;

export type DetailPage = {
  kind: "detail";
  slug: string;
  /** Slug of the menu group this page belongs to (adds breadcrumb + related links). */
  parent?: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    title: string;
    lead: string;
    kicker?: string;
    paragraphs: string[];
    /** Extra text blocks after the paragraphs (bullets, more kickers). */
    extra?: TextBlock[];
    image?: string;
    /** Vimeo video shown instead of an image (with a poster until clicked). */
    video?: Video;
    cta?: Cta;
    secondaryCta?: Cta;
    /** "simple" is a centred title block without media (legal and utility pages). */
    layout?: "split" | "simple";
  };
  sections: DetailSection[];
  /** Customer testimonials before the footer (default true). */
  testimonials?: boolean;
  noindex?: boolean;
};

export type Topic = {
  /** Big outlined number artwork ("01", "02", …). */
  number: string;
  title: string;
  paragraphs: string[];
  kicker?: string;
  href: string;
  image?: string;
  cards?: Card[];
  packages?: boolean;
  /** Orange band behind the topic, with white text. */
  orange?: boolean;
};

export type OverviewPage = {
  kind: "overview";
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: { title: string; lead: string; paragraphs?: string[]; image: string; cta: Cta };
  intro: { cards: Card[]; title: string; paragraphs: string[]; extra?: TextBlock; cta: Cta };
  topics: Topic[];
};

export type LandingPage = {
  kind: "landing";
  slug: string;
  lang?: "nl" | "es";
  metaTitle: string;
  metaDescription: string;
  hero: {
    title: string;
    subtitle: string;
    intro: string;
    leadIn?: string;
    bullets: string[];
    cta: Cta;
    trust: string;
    video?: Video;
    image?: string;
  };
  pain: {
    title: string;
    intro: string[];
    leadIn?: string;
    bullets: string[];
    closing?: string;
    outroTitle: string;
    outro: string;
    cta: Cta;
  };
  ready: { title: string; lead: string; text: string; cta: Cta; note: string };
  testimonialsTitle?: string;
};

export type SitePage = DetailPage | OverviewPage | LandingPage;

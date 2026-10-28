import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import HeroAnimation from "@/components/HeroAnimation";
import PackagesCarousel from "@/components/PackagesCarousel";
import Testimonials from "@/components/Testimonials";
import TrustpilotBadge from "@/components/TrustpilotBadge";
import VideoEmbed from "@/components/VideoEmbed";
import {
  CALENDLY_URL,
  LINKEDIN_URL,
  PERRY_VIDEO_ID,
  about,
  heroPoints,
  partners,
  perryMessage,
  reasons,
  solutions,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <main id="content">
        {/* Hero */}
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <h1>Eén IT-partner voor een volledig verbonden bedrijf</h1>
              <ul className="check-list">
                {heroPoints.map((point) => (
                  <li key={point.lead}>
                    {point.lead} – {point.text}
                  </li>
                ))}
                <li className="is-accent">Alles werkt als één geheel, ondersteund door onze IT-expertise.</li>
              </ul>
              <a className="btn" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Plan een gesprek
              </a>
              <TrustpilotBadge />
            </div>
            <HeroAnimation />
          </div>
        </section>

        {/* Partners */}
        <section className="partners" aria-labelledby="partners-title">
          <div className="container">
            <h2 id="partners-title" className="partners-title">
              Partners
            </h2>
          </div>
          <div className="marquee">
            <div className="marquee-track">
              {[...partners, ...partners].map((partner, i) => (
                <a
                  key={`${partner.alt}-${i}`}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-hidden={i >= partners.length || undefined}
                  tabIndex={i >= partners.length ? -1 : undefined}
                >
                  <Image src={partner.src} alt={partner.alt} width={200} height={60} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="solutions" aria-labelledby="solutions-title">
          <div className="container">
            <h2 id="solutions-title" className="section-title on-orange">
              Onze Oplossingen
            </h2>
            <p className="solutions-intro">
              We hebben onze diensten in drie categorieën gegroepeerd:
              <br />
              <strong>Jouw Mensen, Jouw Werkplek en Jouw Bedrijf</strong> — zodat je oplossingen kunt bekijken op basis
              van het deel van jouw bedrijf dat ze ondersteunen.
            </p>
            <div className="solution-grid">
              {solutions.map((solution) => (
                <article key={solution.title} className="card solution-card">
                  <Image className="solution-icon" src={solution.icon} alt="" width={62} height={62} />
                  <h3>{solution.title}</h3>
                  <p className="solution-desc">{solution.description}</p>
                  <ul className="dash-list">
                    {solution.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link className="btn btn-sm" href={solution.href}>
                    Lees meer
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="packages" aria-labelledby="packages-title">
          <div className="container">
            <h2 id="packages-title" className="section-title">
              Voorbeelden van onze op maat gemaakte pakketten
            </h2>
            <p className="packages-intro">
              CloudConnected biedt volledige flexibiliteit in IT-producten. Kies een hardware-abonnement op maat,
              afgestemd op de behoeften van jouw bedrijf.
              <br />
              Onze pakketten zijn betaalbaar, schaalbaar en eenvoudig aan te passen. Neem contact met ons op om de
              mogelijkheden te ontdekken!
            </p>
            <PackagesCarousel />
            <div className="center">
              <a className="btn" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Boek nu jouw gratis IT-consult
              </a>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Message from Perry */}
        <section className="perry section-pad" aria-labelledby="perry-title">
          <div className="container split">
            <div>
              <h2 id="perry-title" className="section-title">
                Een boodschap van Perry
              </h2>
              {perryMessage.map((paragraph) => (
                <p key={paragraph.slice(0, 20)}>{paragraph}</p>
              ))}
              <p className="signature">
                <strong>
                  Perry Trienekens |{" "}
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Image src="/images/image-13.png" alt="" width={20} height={20} />
                  </a>
                </strong>
                <br />
                Cloud Consultant
              </p>
              <a className="btn" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Plan jouw afspraak met Perry
              </a>
            </div>
            <VideoEmbed videoId={PERRY_VIDEO_ID} poster="/images/Component-12-1.webp" title="Een boodschap van Perry" />
          </div>
        </section>

        {/* Why companies choose us */}
        <section className="reasons" aria-labelledby="reasons-title">
          <div className="container">
            <h2 id="reasons-title" className="section-title">
              Waarom Bedrijven Voor Ons Kiezen
            </h2>
            <Carousel label="Waarom bedrijven voor ons kiezen" autoplay={5000} className="reasons-carousel">
              {reasons.map((reason) => (
                <article key={reason.title} className="card reason">
                  <Image src={reason.icon} alt="" width={36} height={36} />
                  <h3>{reason.title}</h3>
                  <h4>{reason.subtitle}</h4>
                  <p>{reason.text}</p>
                </article>
              ))}
            </Carousel>
            <div className="center">
              <a className="btn btn-white" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Vraag jouw gratis IT-advies aan
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="about section-pad" aria-labelledby="about-title">
          <div className="container split">
            <div>
              <h2 id="about-title" className="section-title">
                Over Cloudconnected
              </h2>
              {about.map((paragraph) => (
                <p key={paragraph.slice(0, 20)}>{paragraph}</p>
              ))}
              <Link className="btn btn-block" href="/over-ons/">
                Meer informatie
              </Link>
            </div>
            <div className="rounded-image">
              <Image
                src="/images/Rectangle-101-1.webp"
                alt="Het CloudConnected-team aan het werk in het kantoor in Amsterdam"
                fill
                sizes="(max-width: 980px) 100vw, 560px"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

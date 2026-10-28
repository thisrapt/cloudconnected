import Image from "next/image";
import Link from "next/link";
import HeroAnimation from "@/components/HeroAnimation";
import Testimonials from "@/components/Testimonials";
import VideoEmbed from "@/components/VideoEmbed";
import DemoFormView from "@/components/page/DemoFormView";
import Stats from "@/components/page/Stats";
import CtaLink from "@/components/solutions/CtaLink";
import { TRUSTPILOT_URL } from "@/lib/content";
import { landingShared as shared } from "@/lib/landing";
import type { LandingPage } from "@/lib/types";

function Trust({ text }: { text: string }) {
  return (
    <a className="trust-badge" href={TRUSTPILOT_URL} target="_blank" rel="noopener noreferrer">
      {text}
      <Image src="/images/Trustpilot_ratings_4halfstar-RGB.svg" alt="4,5 sterren" width={70} height={13} />
    </a>
  );
}

export default function LandingTemplate({ page }: { page: LandingPage }) {
  const { hero, pain, ready } = page;

  return (
    <main id="content" className="landing" lang={page.lang}>
      {/* Hero */}
      <section className="lp-hero">
        <div className="container lp-hero-inner">
          <div>
            <h1>{hero.title}</h1>
            <p className="lp-subtitle">{hero.subtitle}</p>
            <p>{hero.intro}</p>
            {hero.leadIn && <p className="lp-leadin">{hero.leadIn}</p>}
            <ul className="check-list">
              {hero.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <CtaLink cta={hero.cta} />
            <Trust text={hero.trust} />
          </div>
          <div className="lp-hero-media">
            {hero.video ? (
              <VideoEmbed videoId={hero.video.id} poster={hero.video.poster} title={hero.title} />
            ) : (
              hero.image && (
                <Image src={hero.image} alt="" width={1000} height={667} priority sizes="(max-width: 980px) 100vw, 560px" />
              )
            )}
          </div>
        </div>
      </section>

      <Stats />

      {/* Solutions */}
      <section className="solutions lp-solutions" aria-labelledby="lp-solutions-title">
        <div className="container">
          <h2 id="lp-solutions-title" className="section-title on-orange">
            {shared.solutions.title}
          </h2>
          <p className="solutions-intro">
            {shared.solutions.intro}
            <br />
            <strong>{shared.solutions.introStrong}</strong>
            {shared.solutions.introRest}
          </p>
          <div className="solution-grid">
            {shared.solutions.items.map((item) => (
              <article key={item.title} className="card solution-card">
                <Image className="solution-icon" src={item.icon} alt="" width={62} height={62} />
                <h3>{item.title}</h3>
                <p className="solution-desc">{item.text}</p>
                <ul className="dash-list">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <Link className="btn btn-sm" href={item.href}>
                  Lees meer
                </Link>
              </article>
            ))}
          </div>
          <div className="lp-cta-row">
            <CtaLink cta={shared.solutions.cta} />
            <p>{shared.solutions.note}</p>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="sol-section lp-pain">
        <div className="container split image-left">
          <div className="split-copy">
            <h2 className="section-title">{pain.title}</h2>
            {pain.intro.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
            {pain.leadIn && <p className="kicker">{pain.leadIn}</p>}
            {pain.bullets.length > 0 && (
              <ul className="dash-list">
                {pain.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
            {pain.closing && <p>{pain.closing}</p>}
            <h3 className="lp-outro-title">{pain.outroTitle}</h3>
            <p>{pain.outro}</p>
            <CtaLink cta={pain.cta} />
          </div>
          <div className="split-image">
            <HeroAnimation
              src="/lp-animation.json"
              className="lp-animation"
              label="Illustratie: alle IT-diensten verbonden in één platform"
            />
          </div>
        </div>
      </section>

      <Testimonials title={page.testimonialsTitle} />

      {/* Ready for IT that works */}
      <section className="sol-section decor-ring lp-ready">
        <div className="container split">
          <div className="split-copy">
            <h2 className="section-title">{ready.title}</h2>
            <p className="sol-lead">{ready.lead}</p>
            <p>{ready.text}</p>
            <CtaLink cta={ready.cta} />
            <p className="lp-note">{ready.note}</p>
          </div>
          <div className="split-image">
            <Image src={shared.readyImage} alt="" width={1106} height={674} sizes="(max-width: 980px) 100vw, 560px" />
          </div>
        </div>
      </section>

      {/* Steps + sample audit */}
      <section className="lp-steps">
        <div className="container lp-steps-inner">
          <div className="lp-steps-image">
            <Image src={shared.steps.image} alt="" width={898} height={1248} sizes="(max-width: 980px) 100vw, 420px" />
          </div>
          <div>
            <h2 className="section-title">{shared.steps.title}</h2>
            <ol className="steps">
              {shared.steps.items.map((step, i) => (
                <li key={step.title}>
                  <span className="step-number">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="card lp-audit">
              <div>
                <h2>{shared.audit.title}</h2>
                <p>{shared.audit.text}</p>
                <DemoFormView
                  compact
                  form={{
                    id: `${page.slug}-audit`,
                    fields: [{ name: "email", label: shared.audit.placeholder, type: "email", required: true }],
                    submit: shared.audit.submit,
                  }}
                />
              </div>
              <Image src={shared.audit.image} alt="Voorbeeld van een IT-audit" width={1088} height={1418} sizes="160px" />
            </div>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="sol-section lp-reasons">
        <div className="container">
          <h2 className="section-title">{shared.reasons.title}</h2>
          <div className="lp-reason-grid">
            {shared.reasons.items.map((reason) => (
              <article key={reason.title} className="card reason">
                <Image src={reason.icon} alt="" width={36} height={36} />
                <h3>{reason.title}</h3>
                <h4>{reason.subtitle}</h4>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
          <div className="lp-cta-row">
            <CtaLink cta={shared.solutions.cta} />
            <p>{shared.solutions.note}</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="sol-section lp-about">
        <div className="container">
          <div className="card lp-about-card">
            <Image src={shared.about.image} alt="Het CloudConnected-team en kantoor" width={692} height={351} sizes="(max-width: 980px) 100vw, 560px" />
            <div>
              <h2 className="section-title">{shared.about.title}</h2>
              {shared.about.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
              <CtaLink cta={shared.about.cta} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sol-section lp-faq">
        <div className="container">
          <h2 className="section-title center">{shared.faq.title}</h2>
          <div className="faq">
            {shared.faq.items.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                {item.a.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </details>
            ))}
          </div>
          <div className="center">
            <CtaLink cta={shared.faq.cta} />
          </div>
        </div>
      </section>

      {/* E-book */}
      <section className="sol-section lp-ebook">
        <div className="container">
          <div className="card lp-ebook-card">
            <Image src={shared.ebook.image} alt="" width={800} height={388} sizes="(max-width: 980px) 100vw, 480px" />
            <div>
              <h2>{shared.ebook.title}</h2>
              <p>{shared.ebook.text}</p>
              <DemoFormView
                compact
                form={{
                  id: `${page.slug}-ebook`,
                  fields: [{ name: "email", label: shared.ebook.placeholder, type: "email", required: true }],
                  submit: shared.ebook.submit,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

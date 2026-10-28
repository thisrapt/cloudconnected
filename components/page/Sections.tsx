import Image from "next/image";
import PackagesCarousel from "@/components/PackagesCarousel";
import Testimonials from "@/components/Testimonials";
import VideoEmbed from "@/components/VideoEmbed";
import DemoFormView from "@/components/page/DemoFormView";
import Stats from "@/components/page/Stats";
import TextBlocks from "@/components/page/TextBlocks";
import CtaLink from "@/components/solutions/CtaLink";
import { contact } from "@/lib/content";
import type { DetailSection } from "@/lib/types";

const MAP_SRC = "https://www.google.com/maps?q=Van+Boetzelaerstraat+1,+1051+CS+Amsterdam&output=embed";

function Check({ on }: { on: boolean }) {
  return on ? (
    <span className="tick" aria-label="Inbegrepen">
      ✓
    </span>
  ) : (
    <span className="cross" aria-label="Niet inbegrepen">
      ✕
    </span>
  );
}

export default function Section({ section }: { section: DetailSection }) {
  switch (section.kind) {
    case "testimonials":
      return <Testimonials />;

    case "stats":
      return <Stats title={section.title} />;

    case "packages":
      return (
        <section className="sol-section">
          <div className="container">
            <h2 className="section-title">{section.title}</h2>
            <PackagesCarousel />
            {section.cta && (
              <div className="center">
                <CtaLink cta={section.cta} />
              </div>
            )}
          </div>
        </section>
      );

    case "features":
      return (
        <section className="sol-section features decor-ring">
          <div className="container">
            <div className="feature-grid">
              {section.items.map((item) => (
                <article key={item.title} className="card feature">
                  <Image src={item.icon} alt="" width={62} height={62} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <p className="feature-stat">{item.stat}</p>
                </article>
              ))}
            </div>
            {section.cta && (
              <div className="center">
                <CtaLink cta={section.cta} />
              </div>
            )}
          </div>
        </section>
      );

    case "metrics":
      return (
        <section className="sol-section split-section decor-orange">
          <div className="container split image-left">
            <div className="split-copy">
              <h2 className="section-title">{section.title}</h2>
              <ul className="metrics">
                {section.items.map((item) => (
                  <li key={item.value}>
                    <Image src={item.icon} alt="" width={40} height={40} />
                    <div>
                      <strong>{item.value}</strong>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="split-image">
              <Image src={section.image} alt="" width={600} height={500} sizes="(max-width: 980px) 100vw, 560px" />
            </div>
          </div>
        </section>
      );

    case "iconCards":
      return (
        <section className="sol-section">
          <div className="container">
            {section.title && <h2 className={`section-title${section.layout === "grid" ? " center" : ""}`}>{section.title}</h2>}
            <div className={`icon-cards is-${section.layout}${section.items.length === 2 ? " is-pair" : ""}`}>
              {section.items.map((item) => (
                <article key={item.title} className="card icon-card">
                  <Image src={item.icon} alt="" width={40} height={40} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.cta && <CtaLink cta={item.cta} />}
                </article>
              ))}
            </div>
          </div>
        </section>
      );

    case "form":
      return (
        <section className={`sol-section form-section${section.decor === "orange" ? " decor-orange" : ""}`}>
          <div className={`container split${section.image ? " image-left" : ""}`}>
            <div className="split-copy">
              <TextBlocks blocks={section.blocks} />
              {section.image && (
                <div className="card form-card">
                  <DemoFormView form={section.form} />
                </div>
              )}
            </div>
            {section.image ? (
              <div className="split-image">
                <Image src={section.image} alt="" width={600} height={600} sizes="(max-width: 980px) 100vw, 560px" />
              </div>
            ) : (
              <div className="card form-card">
                <DemoFormView form={section.form} />
              </div>
            )}
          </div>
        </section>
      );

    case "pricing": {
      return (
        <section className="sol-section pricing">
          <div className="container">
            <h2 className="section-title center">{section.title}</h2>
            <div className="pricing-grid">
              <div className="card pricing-features" aria-hidden="true">
                <span className="pricing-head" />
                {section.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
                <span className="pricing-price-label">Prijs per maand</span>
              </div>
              {section.plans.map((plan) => (
                <div key={plan.name} className="card pricing-plan">
                  <h3 className="pricing-head">{plan.name}</h3>
                  {section.features.map((feature, i) => (
                    <span key={feature} className="pricing-cell">
                      <span className="pricing-cell-label">{feature}</span>
                      <Check on={plan.included[i]} />
                    </span>
                  ))}
                  <p className="pricing-price">
                    {plan.price}
                    <small>p./maand</small>
                  </p>
                </div>
              ))}
              <div className="card pricing-plan is-addons">
                <h3 className="pricing-head">Add-ons</h3>
                <p className="pricing-addons-title">{section.addOns.title}</p>
                <ul>
                  {section.addOns.items.map((item) => (
                    <li key={item.label}>
                      <Check on />
                      <CtaLink cta={item} className="addon-link" />
                    </li>
                  ))}
                </ul>
                <p className="pricing-price">
                  {section.addOns.price}
                  <small>p./maand</small>
                </p>
              </div>
            </div>
            {section.note && <p className="pricing-note">{section.note}</p>}
            <div className="center">
              <CtaLink cta={section.cta} />
            </div>
          </div>
        </section>
      );
    }

    case "contactDetails":
      return (
        <section className="sol-section contact-details">
          <div className="container split">
            <div className="split-copy">
              {section.form && (
                <div className="card form-card">
                  <DemoFormView form={section.form} />
                </div>
              )}
              <h2 className="section-title">{section.title}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
              <dl className="item-list is-grid">
                <div>
                  <dt>Adres</dt>
                  <dd>{contact.address.join("\n")}</dd>
                </div>
                <div>
                  <dt>Telefoon &amp; WhatsApp</dt>
                  <dd>
                    <a href={contact.phone.href} target="_blank" rel="noopener noreferrer">
                      {contact.phone.label}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>E-mail</dt>
                  <dd>
                    <a href={`mailto:${contact.emails[1]}`}>{contact.emails[1]}</a>
                  </dd>
                </div>
                <div>
                  <dt>Openingstijden</dt>
                  <dd>{contact.hours.join("\n")}</dd>
                </div>
              </dl>
            </div>
            {section.map && (
              <div className="map">
                <iframe src={MAP_SRC} title="Kaart: CloudConnected, Van Boetzelaerstraat 1, Amsterdam" loading="lazy" />
              </div>
            )}
          </div>
        </section>
      );

    case "logos":
      return (
        <section className="sol-section logos">
          <div className="container logo-row">
            {section.logos.map((logo) => (
              <Image key={logo.src} src={logo.src} alt={logo.alt} width={220} height={120} />
            ))}
          </div>
        </section>
      );

    case "embed":
      return (
        <section className="sol-section embed">
          <div className="container">
            <iframe src={section.src} title={section.title} style={{ height: section.height }} loading="lazy" />
          </div>
        </section>
      );

    case "prose":
      return (
        <section className="sol-section prose">
          <div className="container">
            {section.content.map((node, i) =>
              "h2" in node ? (
                <h2 key={i}>{node.h2}</h2>
              ) : "h3" in node ? (
                <h3 key={i}>{node.h3}</h3>
              ) : "p" in node ? (
                <p key={i}>{node.p}</p>
              ) : (
                <p key={i}>
                  <CtaLink cta={node.link} />
                </p>
              ),
            )}
          </div>
        </section>
      );

    case "split": {
      const orange = section.decor === "orange";
      const media = section.video ? (
        <VideoEmbed videoId={section.video.id} poster={section.video.poster} title={section.blocks[0]?.title ?? "Video"} />
      ) : section.image ? (
        <Image src={section.image} alt="" width={600} height={500} sizes="(max-width: 980px) 100vw, 560px" />
      ) : null;
      return (
        <section className={`sol-section split-section decor-${section.decor ?? "none"}`}>
          <div className={`container split${section.imageSide === "left" ? " image-left" : ""}${media ? "" : " no-image"}`}>
            <div className="split-copy">
              <TextBlocks blocks={section.blocks} />
              {section.cta && <CtaLink cta={section.cta} className={orange ? "btn btn-white-outline" : "btn"} />}
            </div>
            {media && <div className="split-image">{media}</div>}
          </div>
        </section>
      );
    }
  }
}

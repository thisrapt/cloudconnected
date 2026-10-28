import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import TrustpilotBadge from "@/components/TrustpilotBadge";
import VideoEmbed from "@/components/VideoEmbed";
import Section from "@/components/page/Sections";
import TextBlocks from "@/components/page/TextBlocks";
import CtaLink from "@/components/solutions/CtaLink";
import { getParentNav } from "@/lib/pages";
import type { DetailPage } from "@/lib/types";

export default function DetailTemplate({ page }: { page: DetailPage }) {
  const { hero } = page;
  const parent = page.parent ? getParentNav(page.parent) : undefined;
  const siblings = parent?.links.filter((link) => link.href !== `/${page.slug}/`) ?? [];
  const testimonialsPlaced = page.sections.some((section) => section.kind === "testimonials");
  const showTestimonials = page.testimonials !== false && !testimonialsPlaced;

  const copy = (
    <div className="sol-hero-copy">
      {parent && (
        <nav className="breadcrumb" aria-label="Kruimelpad">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href={parent.href}>{parent.label}</Link>
        </nav>
      )}
      <h1>{hero.title}</h1>
      {hero.lead && <p className="sol-lead">{hero.lead}</p>}
      {hero.kicker && <p className="kicker">{hero.kicker}</p>}
      {hero.paragraphs.map((p) => (
        <p key={p.slice(0, 32)}>{p}</p>
      ))}
      {hero.extra && <TextBlocks blocks={hero.extra} />}
      {(hero.cta || hero.secondaryCta) && (
        <div className="btn-row">
          {hero.cta && <CtaLink cta={hero.cta} />}
          {hero.secondaryCta && <CtaLink cta={hero.secondaryCta} className="btn btn-ghost" />}
        </div>
      )}
      {hero.layout !== "simple" && <TrustpilotBadge />}
    </div>
  );

  return (
    <main id="content" className="solution detail">
      {hero.layout === "simple" ? (
        <section className="sol-hero simple-hero">
          <div className="container">{copy}</div>
        </section>
      ) : (
        <section className="sol-hero detail-hero">
          <div className="container sol-hero-inner">
            <div className="sol-hero-media">
              {hero.video ? (
                <VideoEmbed videoId={hero.video.id} poster={hero.video.poster} title={hero.title} className="hero-video" />
              ) : (
                hero.image && (
                  <Image src={hero.image} alt="" width={600} height={500} priority sizes="(max-width: 980px) 100vw, 560px" />
                )
              )}
            </div>
            {copy}
          </div>
        </section>
      )}

      {page.sections.map((section, i) => (
        <Section key={i} section={section} />
      ))}

      {showTestimonials && <Testimonials />}

      {parent && siblings.length > 0 && (
        <section className="related" aria-labelledby="related-title">
          <div className="container">
            <h2 id="related-title" className="section-title">
              {parent.relatedTitle}
            </h2>
            <ul className="related-list">
              {siblings.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label} →</Link>
                </li>
              ))}
              <li>
                <Link href={parent.href} className="is-overview">
                  Bekijk het overzicht →
                </Link>
              </li>
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}

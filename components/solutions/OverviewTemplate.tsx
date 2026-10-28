import Image from "next/image";
import Link from "next/link";
import PackagesCarousel from "@/components/PackagesCarousel";
import TrustpilotBadge from "@/components/TrustpilotBadge";
import CtaLink from "@/components/solutions/CtaLink";
import ServiceCard from "@/components/solutions/ServiceCard";
import TextBlocks from "@/components/page/TextBlocks";
import type { OverviewPage, Topic } from "@/lib/types";

function TopicSection({ topic, index }: { topic: Topic; index: number }) {
  // Image (or cards) alternate sides; packages always sit beside the text.
  const mediaFirst = index % 2 === 0;
  const media = topic.packages ? (
    <PackagesCarousel className="topic-packages" />
  ) : topic.cards ? (
    <div className={`topic-cards${topic.cards.length > 2 ? " is-grid" : ""}`}>
      {topic.cards.map((card) => (
        <ServiceCard key={card.title} card={card} />
      ))}
    </div>
  ) : topic.image ? (
    <div className="topic-image">
      <Image src={topic.image} alt="" width={640} height={480} sizes="(max-width: 980px) 100vw, 560px" />
    </div>
  ) : null;

  return (
    <section className={`topic${topic.orange ? " is-orange" : ""}${topic.packages ? " has-packages" : ""}`}>
      <div className={`container topic-inner${mediaFirst ? " media-first" : ""}`}>
        <div className="topic-copy">
          <Image className="topic-number" src={topic.number} alt="" width={200} height={110} />
          <h2 className="section-title">{topic.title}</h2>
          {topic.paragraphs.map((p, i) => (
            <div key={p.slice(0, 24)}>
              {topic.kicker && i === 1 && <p className="kicker">{topic.kicker}</p>}
              <p>{p}</p>
            </div>
          ))}
          <Link className={topic.orange ? "btn btn-white" : "btn"} href={topic.href}>
            Lees meer
          </Link>
        </div>
        {media && <div className="topic-media">{media}</div>}
      </div>
    </section>
  );
}

export default function OverviewTemplate({ page }: { page: OverviewPage }) {
  return (
    <main id="content" className="solution overview">
      <section className="sol-hero overview-hero">
        <div className="container sol-hero-inner">
          <div className="sol-hero-copy">
            <h1>{page.hero.title}</h1>
            <p className="sol-lead">{page.hero.lead}</p>
            {page.hero.paragraphs?.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
            <CtaLink cta={page.hero.cta} />
            <TrustpilotBadge />
          </div>
          <div className="rounded-image sol-hero-image">
            <Image src={page.hero.image} alt="" fill priority sizes="(max-width: 980px) 100vw, 560px" />
          </div>
        </div>
      </section>

      <section className="overview-intro">
        <div className="container overview-intro-inner">
          <div className="overview-cards">
            {page.intro.cards.map((card) => (
              <ServiceCard key={card.title} card={card} />
            ))}
          </div>
          <div className="overview-intro-copy">
            <h2 className="section-title">{page.intro.title}</h2>
            {page.intro.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            {page.intro.extra && <TextBlocks blocks={[page.intro.extra]} />}
            <CtaLink cta={page.intro.cta} />
          </div>
        </div>
      </section>

      {page.topics.map((topic, i) => (
        <TopicSection key={topic.title} topic={topic} index={i} />
      ))}
    </main>
  );
}

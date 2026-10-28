import Image from "next/image";
import Carousel from "@/components/Carousel";
import { testimonials } from "@/lib/content";

export default function Testimonials({ title = "Van onze klanten" }: { title?: string }) {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title" className="section-title center">
          {title} <Image src="/images/result.svg" alt="" width={28} height={28} />
        </h2>
        <Carousel label="Klantbeoordelingen" autoplay={6000} className="testimonials-carousel">
          {testimonials.map((t) => (
            <figure key={t.name} className="card testimonial">
              <Image src="/images/quotte-icon.svg" alt="" width={45} height={45} />
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>
                  {t.name}
                  {t.company && (
                    <>
                      {" | "}
                      <a href={t.company.href} target="_blank" rel="noopener noreferrer">
                        {t.company.label}
                      </a>
                    </>
                  )}
                </strong>
                <a href={t.source.href} target="_blank" rel="noopener noreferrer">
                  <Image src={t.source.logo} alt={t.source.alt} width={72} height={20} className="review-source" />
                </a>
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

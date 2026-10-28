import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import { CALENDLY_URL, contact, footerLinks, guarantees } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <section className="newsletter section-pad" aria-labelledby="newsletter-title">
        <div className="container">
          <div className="newsletter-card">
            <div className="newsletter-image">
              <Image src="/images/Mask-group-95.webp" alt="" fill sizes="(max-width: 980px) 100vw, 480px" />
            </div>
            <div className="newsletter-body">
              <h2 id="newsletter-title">Maandelijkse Tech Tips voor MKB&apos;s</h2>
              <p>
                Snelle, nuttige tech-tips om jouw bedrijf beter te laten draaien.
                <br />
                We sturen niet vaak iets — maar wanneer we dat doen, is het de moeite waard om te openen.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      <div className="guarantees">
        <ul className="container">
          {guarantees.map((item) => (
            <li key={item.label}>
              <Image src={item.icon} alt="" width={28} height={28} />
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="get-started-card">
            <div className="contact-block">
              <h2>
                Neem contact
                <br />
                met ons op
              </h2>
              <dl className="contact-grid">
                <div>
                  <dt>Adres</dt>
                  <dd>
                    {contact.address.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt>E-mail</dt>
                  <dd>
                    {contact.emails.map((email) => (
                      <a key={email} href={`mailto:${email}`}>
                        {email}
                      </a>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt>Telefoon &amp; WhatsApp</dt>
                  <dd>
                    <a href={contact.phone.href} target="_blank" rel="noopener noreferrer" className="whatsapp">
                      <Image src="/images/Vector-51.svg" alt="" width={14} height={14} />
                      {contact.phone.label}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Openingstijden</dt>
                  <dd>
                    {contact.hours.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="get-started">
              <h2>Aan de slag</h2>
              <p>
                CloudConnected is een dynamische en adaptieve beheerde serviceprovider, gespecialiseerd in het leveren van
                eersteklas IT-ondersteuning en het ontwikkelen van effectieve technologiestrategieën voor kleine en
                middelgrote bedrijven.
              </p>
              <a className="btn btn-white" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Boek een gratis strategiegesprek
              </a>
            </div>
          </div>

          <nav className="legal" aria-label="Footer">
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <p>© 2026 CloudConnected</p>
          </nav>
        </div>
      </div>
    </footer>
  );
}

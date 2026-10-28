"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CALENDLY_URL,
  SUPPORT_PORTAL_URL,
  TRUSTPILOT_URL,
  industriesMenu,
  languages,
  solutionsMenu,
} from "@/lib/content";

function Chevron() {
  return (
    <svg className="chevron" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const toggle = (name: string) => setSubmenu((current) => (current === name ? null : name));
  const close = () => {
    setOpen(false);
    setSubmenu(null);
  };

  return (
    <>
      <a className="skip-link" href="#content">
        Ga naar de inhoud
      </a>
      <a className="topbar" href={TRUSTPILOT_URL} target="_blank" rel="noopener noreferrer">
        Beoordeeld als “ <strong>Uitstekend</strong> ” op Trustpilot
        <Image src="/images/Trustpilot_ratings_4halfstar-RGB.svg" alt="4,5 sterren" width={70} height={13} />
      </a>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
        <div className="container header-inner">
          <Link href="/" className="logo" aria-label="CloudConnected home" onClick={close}>
            <Image src="/images/logo-full-color.svg" alt="CloudConnected" width={150} height={42} priority />
          </Link>

          <nav className="main-nav" aria-label="Hoofdmenu">
            <ul>
              <li className={`has-mega${submenu === "solutions" ? " is-open" : ""}`}>
                <button type="button" aria-expanded={submenu === "solutions"} onClick={() => toggle("solutions")}>
                  Oplossingen <Chevron />
                </button>
                <div className="mega">
                  {solutionsMenu.map((group) => (
                    <div key={group.label} className="mega-col">
                      <Link href={group.href} className="mega-title" onClick={close}>
                        {group.label}
                      </Link>
                      <ul>
                        {group.links.map((link) => (
                          <li key={link.label}>
                            <Link href={link.href} onClick={close}>
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
              <li className={`has-mega${submenu === "industries" ? " is-open" : ""}`}>
                <button type="button" aria-expanded={submenu === "industries"} onClick={() => toggle("industries")}>
                  Branches <Chevron />
                </button>
                <div className="mega mega-industries">
                  <div className="mega-col">
                    <span className="mega-title">Branches</span>
                    <p>{industriesMenu.intro}</p>
                  </div>
                  <div className="mega-col">
                    <ul className="mega-grid">
                      {industriesMenu.links.map((link) => (
                        <li key={link.label}>
                          <Link href={link.href} onClick={close}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={industriesMenu.all.href} className="mega-all" onClick={close}>
                      {industriesMenu.all.label} →
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/over-ons/" onClick={close}>
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="/contact/" onClick={close}>
                  Contact
                </Link>
              </li>
              <li className="nav-mobile-only">
                <a href={SUPPORT_PORTAL_URL} target="_blank" rel="noopener noreferrer">
                  Klantenportaal
                </a>
              </li>
            </ul>
            <a className="btn nav-cta" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Plan een gesprek
            </a>
          </nav>

          <div className="header-tools">
            <div className={`lang has-dropdown${submenu === "lang" ? " is-open" : ""}`}>
              <button type="button" aria-expanded={submenu === "lang"} onClick={() => toggle("lang")}>
                Nederlands <Chevron />
              </button>
              <ul className="dropdown">
                {languages.map((lang) => (
                  <li key={lang.href}>
                    <a
                      href={lang.href}
                      hrefLang={lang.lang}
                      lang={lang.lang}
                      aria-current={lang.current ? "page" : undefined}
                      className={lang.current ? "is-current" : undefined}
                    >
                      {lang.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <a className="icon-link" href={SUPPORT_PORTAL_URL} target="_blank" rel="noopener noreferrer" aria-label="Klantenportaal">
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v3h16v-3c0-2.76-3.58-5-8-5Z"
                />
              </svg>
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-label={open ? "Menu sluiten" : "Menu openen"}
              aria-expanded={open}
              onClick={() => (open ? close() : setOpen(true))}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

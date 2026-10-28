"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

// TODO: connect to the mailing-list provider. On WordPress this form was injected by a
// third-party script, so there is no endpoint to port yet; submissions are only acknowledged.
export default function NewsletterForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return <p className="newsletter-thanks">Bedankt voor je aanmelding!</p>;
  }

  return (
    <form className="newsletter-form" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">
        E-mailadres
      </label>
      <input id="newsletter-email" type="email" name="email" required placeholder="Vul hier je e-mailadres in" />
      <button type="submit" className="btn btn-block">
        Meld je aan
      </button>
      <p className="newsletter-note">
        Door je aan te melden ga je akkoord met ons <Link href="/privacy-policy/">privacybeleid</Link>. Je kunt je op elk
        moment uitschrijven.
      </p>
    </form>
  );
}

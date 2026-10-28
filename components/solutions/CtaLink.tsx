import Link from "next/link";
import type { Cta } from "@/lib/types";

// Internal routes use next/link; booking links (Calendly) open in a new tab.
export default function CtaLink({ cta, className = "btn" }: { cta: Cta; className?: string }) {
  if (cta.href.startsWith("/")) {
    return (
      <Link className={className} href={cta.href}>
        {cta.label}
      </Link>
    );
  }
  return (
    <a className={className} href={cta.href} target="_blank" rel="noopener noreferrer">
      {cta.label}
    </a>
  );
}

import Image from "next/image";
import { TRUSTPILOT_URL } from "@/lib/content";

export default function TrustpilotBadge() {
  return (
    <a className="trust-badge" href={TRUSTPILOT_URL} target="_blank" rel="noopener noreferrer">
      Beoordeeld als <strong>“Uitstekend”</strong> op Trustpilot
      <Image src="/images/Trustpilot_ratings_4halfstar-RGB.svg" alt="4,5 sterren" width={70} height={13} />
    </a>
  );
}

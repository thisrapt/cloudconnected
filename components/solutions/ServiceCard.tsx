import Image from "next/image";
import Link from "next/link";
import type { Card } from "@/lib/types";

export default function ServiceCard({ card }: { card: Card }) {
  return (
    <Link href={card.href} className="card service-card">
      <h3>{card.title}</h3>
      <p>{card.text}</p>
      <span className="read-more">
        Meer lezen <Image src="/images/solutions/arrow-right-1.svg" alt="" width={16} height={10} />
      </span>
    </Link>
  );
}

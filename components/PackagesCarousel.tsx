import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import { packages } from "@/lib/content";

export default function PackagesCarousel({ className }: { className?: string }) {
  return (
    <Carousel label="Pakketten" autoplay={5000} className={`packages-carousel ${className ?? ""}`}>
      {packages.map((pkg) => (
        <article key={pkg.title} className="package">
          <div className="package-image">
            <Image src={pkg.image} alt={pkg.title} fill sizes="(max-width: 600px) 90vw, 250px" />
          </div>
          <h3>{pkg.title}</h3>
          <ul>
            {pkg.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link className="read-more" href={pkg.href}>
            Lees meer <Image src="/images/Group-30.svg" alt="" width={12} height={12} />
          </Link>
          <p className="combo-label">{pkg.comboLabel}</p>
          <ul className="combo">
            {pkg.combo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </Carousel>
  );
}

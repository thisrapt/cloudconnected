"use client";

import { useEffect, useRef } from "react";

type Props = { src?: string; label?: string; className?: string };

// Plays a Lottie animation exported from the WordPress site (files in public/).
export default function HeroAnimation({
  src = "/hero-animation.json",
  label = "Illustratie: jouw mensen, jouw werkplek en jouw bedrijf verbonden via CloudConnected",
  className = "hero-animation",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let destroyed = false;
    let anim: { destroy: () => void } | undefined;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    import("lottie-web/build/player/lottie_light").then(({ default: lottie }) => {
      if (destroyed || !ref.current) return;
      anim = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: !reduceMotion,
        autoplay: !reduceMotion,
        path: src,
      });
    });

    return () => {
      destroyed = true;
      anim?.destroy();
    };
  }, [src]);

  return <div ref={ref} className={className} role="img" aria-label={label} />;
}

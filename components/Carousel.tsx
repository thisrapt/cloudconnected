"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  label: string;
  /** Milliseconds between automatic slides; omit to disable autoplay. */
  autoplay?: number;
  className?: string;
};

// Scroll-snap carousel: the number of visible slides is controlled in CSS
// (--per-view), so the dots are derived from the rendered scroll width.
export default function Carousel({ children, label, autoplay, className }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.firstElementChild as HTMLElement | null;
    if (!slide) return;
    const step = slide.offsetWidth + parseFloat(getComputedStyle(track).columnGap || "0");
    const total = Children.count(children);
    const visible = Math.max(1, Math.round(track.clientWidth / step));
    setPages(Math.max(1, total - visible + 1));
    setPage(Math.min(Math.round(track.scrollLeft / step), total - visible));
  }, [children]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!autoplay || paused || pages < 2) return;
    const id = window.setInterval(() => goTo(page + 1 >= pages ? 0 : page + 1), autoplay);
    return () => window.clearInterval(id);
  }, [autoplay, paused, page, pages, goTo]);

  return (
    <div
      className={`carousel ${className ?? ""}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="carousel-track" ref={trackRef} onScroll={measure}>
        {Children.map(children, (child) => (
          <div className="carousel-slide">{child}</div>
        ))}
      </div>
      {pages > 1 && (
        <div className="carousel-dots">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              className={i === page ? "is-active" : undefined}
              aria-label={`Ga naar slide ${i + 1}`}
              aria-current={i === page}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

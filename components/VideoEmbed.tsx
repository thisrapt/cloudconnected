"use client";

import Image from "next/image";
import { useState } from "react";

type Props = { videoId: string; title: string; poster?: string; className?: string };

// With a poster: shows it and only loads the Vimeo player once clicked.
// Without one: embeds the player directly so Vimeo renders its own poster frame.
export default function VideoEmbed({ videoId, poster, title, className }: Props) {
  const [playing, setPlaying] = useState(!poster);

  return (
    <div className={`video ${className ?? ""}`}>
      {playing || !poster ? (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?dnt=1${poster ? "&autoplay=1" : ""}`}
          title={title}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className="video-poster" onClick={() => setPlaying(true)} aria-label={`Speel video af: ${title}`}>
          <Image src={poster} alt="" fill sizes="(max-width: 980px) 100vw, 560px" />
          <span className="video-play" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

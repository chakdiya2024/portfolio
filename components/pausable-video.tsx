"use client";

import { usePausableVideo } from "./use-pausable-video";
import { PauseToggleButton } from "./pause-toggle-button";

type PausableVideoProps = {
  src: string;
  poster?: string;
  className: string;
  style?: React.CSSProperties;
};

export function PausableVideo({ src, poster, className, style }: PausableVideoProps) {
  const { ref, playing, toggle } = usePausableVideo();

  return (
    <>
      <video
        ref={ref}
        className={className}
        style={style}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <PauseToggleButton playing={playing} onToggle={toggle} />
    </>
  );
}

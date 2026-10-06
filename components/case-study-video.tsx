"use client";

import { usePausableVideo } from "./use-pausable-video";
import { PauseToggleButton } from "./pause-toggle-button";

type CaseStudyVideoProps = {
  src: string;
  poster?: string;
  className: string;
};

// The pause toggle is rendered as a sibling of the video so it anchors to the
// surrounding (position: relative) band, not the smaller video box.
export function CaseStudyVideo({ src, poster, className }: CaseStudyVideoProps) {
  const { ref, playing, toggle } = usePausableVideo();

  return (
    <>
      <video
        ref={ref}
        className={className}
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

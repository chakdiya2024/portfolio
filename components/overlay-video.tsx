"use client";

import styles from "./project-card.module.css";
import { usePausableVideo } from "./use-pausable-video";
import { PauseToggleButton } from "./pause-toggle-button";

type OverlayVideoProps = {
  src: string;
  poster?: string;
  overlayAspectRatio?: string;
};

// The pause toggle is rendered as a sibling of .mediaOverlay (not a child of
// it) so it anchors to the full media background, not the smaller mockup box.
export function OverlayVideo({ src, poster, overlayAspectRatio }: OverlayVideoProps) {
  const { ref, playing, toggle } = usePausableVideo();

  return (
    <>
      <div
        className={styles.mediaOverlay}
        style={
          overlayAspectRatio
            ? ({ "--overlay-aspect-ratio": overlayAspectRatio } as React.CSSProperties)
            : undefined
        }
      >
        <video
          ref={ref}
          className={`${styles.mediaOverlayAsset} ${styles.mediaOverlayVideo}`}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
      </div>
      <PauseToggleButton playing={playing} onToggle={toggle} />
    </>
  );
}

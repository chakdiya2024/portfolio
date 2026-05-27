'use client';

import { useEffect, useRef } from 'react';
import styles from './project-card.module.css';

export function BackgroundVideo({ src, scale = 1 }: { src: string; scale?: number }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.playbackRate = 0.9;
    }
  }, []);

  return (
    <video
      ref={ref}
      className={styles.mediaBackgroundVideo}
      style={scale !== 1 ? { transform: `scale(${scale})` } : undefined}
      src={src}
      autoPlay
      muted
      loop
      playsInline
    />
  );
}

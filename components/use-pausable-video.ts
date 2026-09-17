"use client";

import { useEffect, useRef, useState } from "react";

export function usePausableVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.playbackRate = 0.9;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      setPlaying(false);
    }
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return { ref, playing, toggle };
}

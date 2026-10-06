"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowsOutSimpleIcon } from "@phosphor-icons/react";
import styles from "./zoomable-image.module.css";

type ZoomableImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  /** Corner radius in px, kept while the image is enlarged */
  radius?: number;
  /** Sizes the in-page trigger */
  className?: string;
  /** Styles the image box itself (it travels with the image while zooming) */
  mediaClassName?: string;
};

const morph = { type: "spring", duration: 0.45, bounce: 0 } as const;

export function ZoomableImage({
  src,
  alt,
  width,
  height,
  caption,
  radius,
  className,
  mediaClassName,
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const layoutId = useId();
  const reduceMotion = useReducedMotion();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const root = document.documentElement;
    const scrollbarWidth = window.innerWidth - root.clientWidth;
    root.style.overflow = "hidden";
    root.style.paddingRight = `${scrollbarWidth}px`;
    closeRef.current?.focus({ preventScroll: true });

    // The close button is the only focusable element, so Tab stays on it.
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab") event.preventDefault();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      root.style.overflow = "";
      root.style.paddingRight = "";
      trigger?.focus({ preventScroll: true });
    };
  }, [open]);

  const sharedLayoutId = reduceMotion ? undefined : layoutId;
  const fade = reduceMotion ? { duration: 0 } : { duration: 0.25, ease: "easeOut" as const };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={[styles.trigger, className].filter(Boolean).join(" ")}
        onClick={() => setOpen(true)}
        aria-label={`Enlarge image: ${caption}`}
      >
        <motion.div
          layoutId={sharedLayoutId}
          transition={morph}
          className={[styles.media, mediaClassName].filter(Boolean).join(" ")}
          style={{ borderRadius: radius }}
        >
          <Image src={src} alt={alt} width={width} height={height} unoptimized />
        </motion.div>
        <span className={styles.hint} data-open={open || undefined} aria-hidden>
          <ArrowsOutSimpleIcon size={14} weight="bold" />
        </span>
      </button>
      {typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence>
              {open ? (
                <motion.div
                  className={styles.overlay}
                  role="dialog"
                  aria-modal="true"
                  aria-label={caption}
                  onClick={() => setOpen(false)}
                  exit={{ opacity: 1 }}
                  transition={morph}
                >
                  <motion.div
                    className={styles.backdrop}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={fade}
                  />
                  <figure
                    className={styles.zoomed}
                    style={{ "--ratio": width / height } as React.CSSProperties}
                  >
                    <motion.div
                      layoutId={sharedLayoutId}
                      transition={morph}
                      className={styles.media}
                      style={{ borderRadius: radius }}
                    >
                      <Image src={src} alt={alt} width={width} height={height} unoptimized />
                    </motion.div>
                    <motion.figcaption
                      className={styles.zoomedCaption}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={fade}
                    >
                      {caption}
                    </motion.figcaption>
                  </figure>
                  <motion.button
                    ref={closeRef}
                    type="button"
                    className={styles.close}
                    aria-label="Close enlarged image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={fade}
                  >
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" aria-hidden>
                      <path d="M3 3l10 10M13 3L3 13" />
                    </svg>
                  </motion.button>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body
          )
        : null}
    </>
  );
}

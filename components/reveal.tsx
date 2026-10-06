"use client";

import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  as?: "div" | "section" | "figure";
  className?: string;
  /** Marks a dark, image-backed section so fixed UI above it can adapt */
  backdrop?: "dark";
  children: React.ReactNode;
};

// Fades content up once as it scrolls into view. With reduced motion the
// content appears in place with no fade or travel.
export function Reveal({ as = "div", className, backdrop, children }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      data-backdrop={backdrop}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.5, ease: [0.32, 0.72, 0, 1] }
      }
    >
      {children}
    </Component>
  );
}

"use client";

import { useState, useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";

type PageEnterProps = {
  as?: "div" | "header";
  className?: string;
  /** Marks a dark, image-backed section so fixed UI above it can adapt */
  backdrop?: "dark";
  /** Seconds to wait before entering, for a light stagger */
  delay?: number;
  children: React.ReactNode;
};

const subscribe = () => () => {};

// Fades content up when the page is reached by an in-app navigation. On a
// direct load or refresh the content is server-rendered in place and does not
// animate, so nothing waits on JavaScript to become visible.
export function PageEnter({ as = "div", className, backdrop, delay = 0, children }: PageEnterProps) {
  const reduceMotion = useReducedMotion();
  // True while hydrating server-rendered markup, false for a client-side mount.
  const hydrating = useSyncExternalStore(subscribe, () => false, () => true);
  const [navigated] = useState(!hydrating);
  const Component = motion[as];

  return (
    <Component
      className={className}
      data-backdrop={backdrop}
      initial={navigated && !reduceMotion ? { opacity: 0, y: 16 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.19, 1, 0.22, 1] }}
    >
      {children}
    </Component>
  );
}

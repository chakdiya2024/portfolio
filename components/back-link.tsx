"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type BackLinkProps = {
  href: string;
  className: string;
  /** Added while the link sits over an element marked data-backdrop="dark" */
  onDarkClassName: string;
  children: React.ReactNode;
};

export function BackLink({ href, className, onDarkClassName, children }: BackLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const link = ref.current;
    if (!link) return;
    const targets = document.querySelectorAll('[data-backdrop="dark"]');
    const covering = new Set<Element>();
    let observer: IntersectionObserver | undefined;

    // Shrink the observed area to the horizontal strip the link occupies, so
    // an entry is "intersecting" only while it passes behind the link.
    const observe = () => {
      observer?.disconnect();
      covering.clear();
      const rect = link.getBoundingClientRect();
      const below = Math.max(window.innerHeight - rect.bottom, 0);
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const overlapsX =
              entry.boundingClientRect.left < rect.right &&
              entry.boundingClientRect.right > rect.left;
            if (entry.isIntersecting && overlapsX) covering.add(entry.target);
            else covering.delete(entry.target);
          }
          setOnDark(covering.size > 0);
        },
        { rootMargin: `-${Math.max(rect.top, 0)}px 0px -${below}px 0px` }
      );
      targets.forEach((target) => observer?.observe(target));
    };

    observe();
    window.addEventListener("resize", observe);
    return () => {
      window.removeEventListener("resize", observe);
      observer?.disconnect();
    };
  }, []);

  return (
    <Link
      ref={ref}
      href={href}
      className={onDark ? `${className} ${onDarkClassName}` : className}
    >
      {children}
    </Link>
  );
}

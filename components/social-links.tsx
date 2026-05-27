 "use client";

import { useEffect, useRef, useState } from "react";
import { socialLinks } from "@/lib/social-links";
import { SocialIcon } from "@/components/social-icons";
import styles from "./social-links.module.css";

export function SocialLinks() {
  const [copied, setCopied] = useState(false);
  const copiedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copiedTimeoutRef.current) {
        clearTimeout(copiedTimeoutRef.current);
      }
    };
  }, []);

  const handleEmailClick = async (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const email = href.replace(/^mailto:/i, "");
    if (!email) {
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (copiedTimeoutRef.current) {
        clearTimeout(copiedTimeoutRef.current);
      }
      copiedTimeoutRef.current = setTimeout(() => setCopied(false), 1400);
    } catch {
      window.location.href = href;
    }
  };

  return (
    <ul className={styles.list}>
      {socialLinks.map((item) => (
        <li key={item.platform}>
          <a
            className={`${styles.link} ${
              item.platform === "email" && copied ? styles.copied : ""
            }`}
            href={item.href}
            aria-label={item.ariaLabel}
            {...(item.tooltip
              ? {
                  "data-tooltip":
                    item.platform === "email" && copied
                      ? "Copied!"
                      : item.tooltip,
                }
              : {})}
            {...(item.platform === "email"
              ? { onClick: (event) => handleEmailClick(event, item.href) }
              : { target: "_blank", rel: "noopener noreferrer" })}
          >
            <SocialIcon platform={item.platform} />
          </a>
        </li>
      ))}
    </ul>
  );
}

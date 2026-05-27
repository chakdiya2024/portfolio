import type { SocialPlatform } from "@/lib/social-links";
import styles from "./social-icons.module.css";

type SocialIconProps = {
  platform: SocialPlatform;
};

export function SocialIcon({ platform }: SocialIconProps) {
  switch (platform) {
    case "email":
      return (
        <svg
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case "linkedin":
      return <span className={styles.linkedinIcon} aria-hidden />;
    case "twitter":
      return (
        <svg
          width={16}
          height={13}
          viewBox="0 0 17 14"
          fill="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M16.337 2.038a6.554 6.554 0 0 1-1.885.517A3.288 3.288 0 0 0 15.895.739a6.576 6.576 0 0 1-2.085.796 3.285 3.285 0 0 0-5.594 2.993A9.319 9.319 0 0 1 1.451 1.1a3.287 3.287 0 0 0 1.015 4.383 3.269 3.269 0 0 1-1.486-.41c-.036 1.52 1.054 2.943 2.633 3.26a3.29 3.29 0 0 1-1.483.055 3.285 3.285 0 0 0 3.067 2.28 6.6 6.6 0 0 1-4.86 1.36A9.293 9.293 0 0 0 5.37 13.5c6.095 0 9.538-5.147 9.33-9.764a6.684 6.684 0 0 0 1.638-1.699Z"
          />
        </svg>
      );
    case "resume":
      return (
        <svg
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
  }
}

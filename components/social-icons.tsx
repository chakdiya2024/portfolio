import { AtIcon, PaperclipIcon } from "@phosphor-icons/react/ssr";
import type { SocialPlatform } from "@/lib/social-links";
import styles from "./social-icons.module.css";

type SocialIconProps = {
  platform: SocialPlatform;
};

const iconProps = {
  size: 16,
  weight: "fill" as const,
  color: "currentColor",
};

export function SocialIcon({ platform }: SocialIconProps) {
  switch (platform) {
    case "email":
      return <AtIcon {...iconProps} aria-hidden />;
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
      return <PaperclipIcon {...iconProps} aria-hidden />;
  }
}

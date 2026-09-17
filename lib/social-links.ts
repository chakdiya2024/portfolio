export type SocialPlatform = "email" | "linkedin" | "twitter";

export type SocialLink = {
  platform: SocialPlatform;
  href: string;
  /** Accessible name for the icon-only link */
  ariaLabel: string;
  /** If set, a hover/focus tooltip is shown */
  tooltip?: string;
};

export const socialLinks: SocialLink[] = [
  {
    platform: "linkedin",
    href: "https://www.linkedin.com/in/chakdiya/",
    ariaLabel: "LinkedIn",
  },
  {
    platform: "twitter",
    href: "https://x.com/designerdiya",
    ariaLabel: "X",
  },
  {
    platform: "email",
    href: "mailto:chakdiya@gmail.com",
    ariaLabel: "Email",
    tooltip: "Copy email",
  },
];

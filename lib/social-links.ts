export type SocialPlatform = "email" | "linkedin" | "twitter" | "resume";

export type SocialLink = {
  platform: SocialPlatform;
  href: string;
  /** Accessible name for the icon-only link */
  ariaLabel: string;
  /** If set, a hover/focus tooltip is shown (email & resume only — brand icons stay unlabeled) */
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
  {
    platform: "resume",
    href: "/Diya%20Chakraborti%20Resume.pdf",
    ariaLabel: "Resume",
    tooltip: "Open resume",
  },
];

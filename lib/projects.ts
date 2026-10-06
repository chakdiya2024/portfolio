export type Project = {
  title: string;
  meta: string;
  href?: string;
  /** Renders the card at half-width alongside other small cards */
  size?: 'small';
  /** Full-bleed background in the media area (e.g. for a UI thumbnail overlay) */
  backgroundImage?: string;
  /** Full-bleed background video that fills the entire media area */
  backgroundVideo?: string;
  /** Scale multiplier for the background video (default 1 — use >1 to zoom in) */
  backgroundVideoScale?: number;
  /** Optional centered mockup still image layered above the background */
  mediaOverlayImage?: string;
  /** Optional centered mockup video layered above the background */
  mediaVideo?: string;
  /** Optional poster shown before video playback starts */
  mediaVideoPoster?: string;
  /** Override the overlay container's aspect-ratio (e.g. "2280 / 1356") */
  overlayAspectRatio?: string;
  /** The overlay image has a transparent background, so its shadow follows the artwork */
  overlayCutout?: boolean;
  /** Optional secondary line rendered below the title/meta row */
  description?: string;
};

export const projects: Project[] = [
  {
    title: 'Visa Assist – GenAI Research Assistant',
    meta: '2025',
    href: '/work/visa-assist',
    description: 'Led the redesign of Visa’s first GenAI product for clients, now live in 197 countries',
    backgroundImage: '/projects/project-1-background.webp',
    mediaOverlayImage: '/work/visa-assist/va-home.webp',
    overlayAspectRatio: '2880 / 1800',
  },
  {
    title: 'Visa Protect – Fraud Investigation Tool',
    meta: '2025',
    href: '/work/visa-protect',
    description: 'Designed the 0→1 graph interface that cut investigation time from weeks to days',
    backgroundImage: '/projects/project-2-background.webp',
    mediaOverlayImage: '/projects/project-2-mockup.png',
    mediaVideo: '/projects/project-2-mockup.mp4',
    mediaVideoPoster: '/projects/project-2-mockup.png',
  },
  {
    title: 'AccesSOS – Accessible Text-to-911',
    meta: '2023',
    href: '/work/accessos',
    description: 'Redesigned emergency reporting for an app that saved 200+ lives in 45 states',
    backgroundImage: '/projects/project-3-background.webp',
    mediaOverlayImage: '/projects/project-3-mockup.png',
    overlayAspectRatio: '1312 / 874',
    overlayCutout: true,
  },
  {
    title: 'Classical Piano Player',
    meta: 'Concept 2026',
    href: 'https://chakdiya.vercel.app/digital-piano',
    size: 'small',
    backgroundVideo: '/projects/piano.mp4',
    backgroundVideoScale: 1.2,
  },
  {
    title: 'Digital Bookshelf',
    meta: 'Concept 2026',
    href: 'https://chakdiya.vercel.app/screen-time',
    size: 'small',
    backgroundVideo: '/projects/screen-time-demo.mp4',
  },
];

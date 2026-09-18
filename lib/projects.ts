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
  /** Optional secondary line rendered below the title/meta row */
  description?: string;
};

export const projects: Project[] = [
  {
    title: 'Visa Assist – GenAI Research Assistant',
    meta: '2025',
    description: 'Launching Visa’s first GenAI product for clients and employees in 197 countries',
    href: 'https://visa-assist-demo.vercel.app/',
    backgroundImage: '/projects/project-1-background.webp',
    mediaOverlayImage: '/projects/visa-assist.webp',
    overlayAspectRatio: '2280 / 1356',
  },
  {
    title: 'Visa Protect – Design Systems',
    meta: '2024',
    description: 'Building a fraud investigation tool 0-1 for small fintechs',
    href: 'https://visa-protect-demo.vercel.app/',
    backgroundImage: '/projects/project-2-background.webp',
    mediaOverlayImage: '/projects/project-2-mockup.png',
    mediaVideo: '/projects/project-2-mockup.mp4',
    mediaVideoPoster: '/projects/project-2-mockup.png',
  },
  {
    title: 'AccesSOS – Accessible Text-to-911',
    meta: '2023',
    description: 'Redesigning emergency reporting to save 200+ lives across 7 states',
    backgroundImage: '/projects/project-3-background.webp',
    mediaOverlayImage: '/projects/project-3-mockup.png',
    overlayAspectRatio: '1312 / 874',
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

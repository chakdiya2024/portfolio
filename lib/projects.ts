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
};

export const projects: Project[] = [
  {
    title: 'Launching the “VisaGPT” for 450K+ clients worldwide',
    meta: 'Visa • Shipped 2025',
    backgroundImage: '/projects/project-1-background.png',
    mediaOverlayImage: '/projects/visa-assist.png',
    overlayAspectRatio: '2280 / 1356',
  },
  {
    title: 'Designing a fraud investigation platform from 0 → 1',
    meta: 'Visa • Shipped 2024',
    backgroundImage: '/projects/project-2-background.png',
    mediaOverlayImage: '/projects/project-2-mockup.png',
    mediaVideo: '/projects/project-2-mockup.mov',
    mediaVideoPoster: '/projects/project-2-mockup.png',
  },
  {
    title: 'Accessible text-to-911 redesign that saved 145+ lives',
    meta: 'AccesSOS • Shipped 2023',
    backgroundImage: '/projects/project-3-background.png',
  },
  {
    title: 'Classical Piano Player',
    meta: 'Cursor • Concept 2026',
    size: 'small',
    backgroundVideo: '/projects/piano.mov',
    backgroundVideoScale: 1.2,
  },
  {
    title: 'Digital Bookshelf',
    meta: 'Cursor • Concept 2026',
    size: 'small',
    backgroundVideo: '/projects/screen-time-demo.mov',
  },
];

export type Project = {
  title: string;
  meta: string;
  href?: string;
  /** Full-bleed background in the media area (e.g. for a UI thumbnail overlay) */
  backgroundImage?: string;
  /** Optional centered mockup still image layered above the background */
  mediaOverlayImage?: string;
  /** Optional centered mockup video layered above the background */
  mediaVideo?: string;
  /** Optional poster shown before video playback starts */
  mediaVideoPoster?: string;
};

export const projects: Project[] = [
  {
    title: 'Launching the “VisaGPT” for 450K+ clients worldwide',
    meta: 'Visa • Shipped 2025',
    backgroundImage: '/projects/project-1-background.png',
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
];

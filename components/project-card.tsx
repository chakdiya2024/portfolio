import Image from "next/image";
import type { Project } from "@/lib/projects";
import styles from "./project-card.module.css";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const body = (
    <>
      <div className={styles.media} aria-hidden>
        {project.backgroundImage ? (
          <Image
            className={styles.mediaImage}
            src={project.backgroundImage}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, calc(100vw - 360px)"
            priority
            unoptimized
          />
        ) : null}
        {project.mediaOverlayImage || project.mediaVideo ? (
          <div className={styles.mediaOverlay}>
            {project.mediaVideo ? (
              <video
                className={`${styles.mediaOverlayAsset} ${styles.mediaOverlayVideo}`}
                src={project.mediaVideo}
                poster={project.mediaVideoPoster ?? project.mediaOverlayImage}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : null}
            {!project.mediaVideo && project.mediaOverlayImage ? (
              <Image
                className={styles.mediaOverlayAsset}
                src={project.mediaOverlayImage}
                alt=""
                fill
                sizes="(max-width: 900px) 86vw, min(720px, 62vw)"
                unoptimized
              />
            ) : null}
          </div>
        ) : null}
      </div>
      <div className={styles.text}>
        <p className={styles.title}>{project.title}</p>
        <p className={styles.meta}>{project.meta}</p>
      </div>
    </>
  );

  if (project.href) {
    return (
      <a
        className={`${styles.project} ${styles.interactive}`}
        href={project.href}
      >
        {body}
      </a>
    );
  }

  return <article className={styles.project}>{body}</article>;
}

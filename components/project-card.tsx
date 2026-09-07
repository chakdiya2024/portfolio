import Image from "next/image";
import type { Project } from "@/lib/projects";
import { BackgroundVideo } from "./background-video";
import styles from "./project-card.module.css";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const body = (
    <>
      <div
        className={[
          styles.media,
          project.size === "small" ? styles.mediaSmall : "",
          project.backgroundVideo ? styles.mediaNoBackground : "",
        ].filter(Boolean).join(" ")}
        aria-hidden
      >
        {project.backgroundVideo ? (
          <BackgroundVideo src={project.backgroundVideo} scale={project.backgroundVideoScale} />
        ) : null}
        {project.backgroundImage ? (
          <Image
            className={styles.mediaImage}
            src={project.backgroundImage}
            alt=""
            fill
            sizes={
              project.size === "small"
                ? "(max-width: 900px) 100vw, calc((100vw - 360px - 32px) / 2)"
                : "(max-width: 900px) 100vw, calc(100vw - 360px)"
            }
            priority
            unoptimized
          />
        ) : null}
        {project.mediaOverlayImage || project.mediaVideo ? (
          <div
            className={styles.mediaOverlay}
            style={project.overlayAspectRatio ? { "--overlay-aspect-ratio": project.overlayAspectRatio } as React.CSSProperties : undefined}
          >
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
                priority
              />
            ) : null}
          </div>
        ) : null}
      </div>
      <div className={styles.text}>
        <p className={styles.title}>
          {project.title}
          {project.href ? <span className={styles.titleArrow}>↗</span> : ""}
        </p>
        <p className={styles.meta}>{project.meta}</p>
      </div>
    </>
  );

  const animStyle = { "--i": index } as React.CSSProperties;

  if (project.href) {
    return (
      <a
        className={`${styles.project} ${styles.interactive}`}
        href={project.href}
        style={animStyle}
      >
        {body}
      </a>
    );
  }

  return <article className={styles.project} style={animStyle}>{body}</article>;
}

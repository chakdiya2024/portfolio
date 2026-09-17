import Image from "next/image";
import type { Project } from "@/lib/projects";
import { PausableVideo } from "./pausable-video";
import { OverlayVideo } from "./overlay-video";
import styles from "./project-card.module.css";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const hasInteractiveMedia = Boolean(project.backgroundVideo || project.mediaVideo);
  const isExternal = project.href ? /^https?:\/\//.test(project.href) : false;

  const media = (
    <div
      className={[
        styles.media,
        project.size === "small" ? styles.mediaSmall : "",
        project.backgroundVideo ? styles.mediaNoBackground : "",
      ].filter(Boolean).join(" ")}
    >
      {project.backgroundVideo ? (
        <PausableVideo
          className={styles.mediaBackgroundVideo}
          style={
            project.backgroundVideoScale && project.backgroundVideoScale !== 1
              ? { transform: `scale(${project.backgroundVideoScale})` }
              : undefined
          }
          src={project.backgroundVideo}
        />
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
      {project.mediaVideo ? (
        <OverlayVideo
          src={project.mediaVideo}
          poster={project.mediaVideoPoster ?? project.mediaOverlayImage}
          overlayAspectRatio={project.overlayAspectRatio}
        />
      ) : project.mediaOverlayImage ? (
        <div
          className={styles.mediaOverlay}
          style={project.overlayAspectRatio ? { "--overlay-aspect-ratio": project.overlayAspectRatio } as React.CSSProperties : undefined}
        >
          <Image
            className={styles.mediaOverlayAsset}
            src={project.mediaOverlayImage}
            alt=""
            fill
            sizes="(max-width: 900px) 86vw, min(720px, 62vw)"
            unoptimized
            priority
          />
        </div>
      ) : null}
    </div>
  );

  const titleContent = (
    <>
      {project.title}
      {project.href ? <span className={styles.titleArrow}>↗</span> : ""}
    </>
  );

  const text = (
    <div className={styles.text}>
      <div className={styles.textHeader}>
        <p className={styles.title}>
          {project.href && hasInteractiveMedia ? (
            <a
              className={styles.titleLink}
              href={project.href}
              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {titleContent}
            </a>
          ) : (
            titleContent
          )}
        </p>
        <p className={styles.meta}>{project.meta}</p>
      </div>
      {project.description ? (
        <p className={styles.description}>{project.description}</p>
      ) : null}
    </div>
  );

  const animStyle = { "--i": index } as React.CSSProperties;

  if (project.href && hasInteractiveMedia) {
    // Video needs a real, focusable pause button, which can't nest inside an
    // <a> — so the link covers the card via a stretched pseudo-element
    // instead of wrapping it.
    return (
      <article className={`${styles.project} ${styles.interactive}`} style={animStyle}>
        {media}
        {text}
      </article>
    );
  }

  if (project.href) {
    return (
      <a
        className={`${styles.project} ${styles.interactive}`}
        href={project.href}
        style={animStyle}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {media}
        {text}
      </a>
    );
  }

  return (
    <article className={styles.project} style={animStyle}>
      {media}
      {text}
    </article>
  );
}

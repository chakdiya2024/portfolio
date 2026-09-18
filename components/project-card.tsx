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
  const isExternal = project.href ? /^https?:\/\//.test(project.href) : false;
  const linkAttrs = isExternal ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};

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
      {project.href ? (
        <a
          className={styles.mediaLink}
          href={project.href}
          aria-hidden="true"
          tabIndex={-1}
          {...linkAttrs}
        />
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
          {project.href ? (
            <a className={styles.titleLink} href={project.href} {...linkAttrs}>
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

  // Thumbnail and title are both clickable (via their own anchors, since a
  // video's focusable pause button can't nest inside a wrapping <a>);
  // description and year stay plain text so they remain selectable and
  // aren't swallowed into the link for screen readers.
  return (
    <article
      className={[styles.project, project.href ? styles.interactive : ""].filter(Boolean).join(" ")}
      style={animStyle}
    >
      {media}
      {text}
    </article>
  );
}

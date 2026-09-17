"use client";

import styles from "./project-card.module.css";

type PauseToggleButtonProps = {
  playing: boolean;
  onToggle: () => void;
};

export function PauseToggleButton({ playing, onToggle }: PauseToggleButtonProps) {
  return (
    <button
      type="button"
      className={styles.mediaPauseToggle}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onToggle();
      }}
      aria-label={playing ? "Pause video" : "Play video"}
    >
      {playing ? (
        <svg width={14} height={14} viewBox="0 0 14 14" fill="currentColor" aria-hidden>
          <rect x="2.5" y="1.5" width="3" height="11" rx="1" />
          <rect x="8.5" y="1.5" width="3" height="11" rx="1" />
        </svg>
      ) : (
        <svg width={14} height={14} viewBox="0 0 14 14" fill="currentColor" aria-hidden>
          <path d="M3.5 2.2c0-.78.85-1.26 1.52-.86l6 3.6c.64.38.64 1.3 0 1.68l-6 3.6c-.67.4-1.52-.08-1.52-.86V2.2Z" />
        </svg>
      )}
    </button>
  );
}

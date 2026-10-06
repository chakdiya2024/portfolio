import styles from "./edge-blur.module.css";

// Softens the top and bottom edges of the viewport so scrolling content
// dissolves instead of being cut off. Purely decorative.
export function EdgeBlur() {
  return (
    <>
      {(["top", "bottom"] as const).map((side) => (
        <div key={side} className={`${styles.edge} ${styles[side]}`} aria-hidden="true">
          <div className={`${styles.blur} ${styles.blurWide}`} />
          <div className={`${styles.blur} ${styles.blurMid}`} />
          <div className={`${styles.blur} ${styles.blurNear}`} />
          <div className={styles.fade} />
        </div>
      ))}
    </>
  );
}

import Image from "next/image";
import styles from "./about-photo-grid.module.css";

type Photo = {
  src: string;
  width: number;
  height: number;
};

type Row = {
  /** Ties this row's content to its bespoke tile-width CSS, independent of display order */
  layout: string;
  photos: Photo[];
};

const rowA: Row = {
  layout: "wide-3",
  photos: [
    { src: "/about/img-8957.webp", width: 520, height: 689 },
    { src: "/about/img-8964.webp", width: 536, height: 689 },
    { src: "/about/img-8966.webp", width: 920, height: 690 },
  ],
};

const rowB: Row = {
  layout: "mixed-3",
  photos: [
    { src: "/about/img-000022350012-10.webp", width: 520, height: 724 },
    { src: "/about/img-8960.webp", width: 982, height: 726 },
    { src: "/about/img-8970.webp", width: 474, height: 726 },
  ],
};

const rowC: Row = {
  layout: "quad-4",
  photos: [
    { src: "/about/img-diya-3.webp", width: 520, height: 626 },
    { src: "/about/img-5994.webp", width: 475, height: 628 },
    { src: "/about/img-5993.webp", width: 475, height: 628 },
    { src: "/about/img-2366.webp", width: 475, height: 628 },
  ],
};

const rows: Row[] = [rowC, rowB, rowA];

export function AboutPhotoGrid() {
  return (
    <div className={styles.grid}>
      {rows.map((row, rowIndex) => (
        <div
          key={row.layout}
          className={styles.row}
          data-layout={row.layout}
          style={{ "--i": rowIndex } as React.CSSProperties}
        >
          {row.photos.map((photo, photoIndex) => (
            <div key={photo.src} className={styles.tile} data-tile={photoIndex}>
              <Image
                className={styles.image}
                src={photo.src}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                unoptimized
                priority={rowIndex === 0}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

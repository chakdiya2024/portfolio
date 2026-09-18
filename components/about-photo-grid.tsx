import Image from "next/image";
import styles from "./about-photo-grid.module.css";

type Photo = {
  src: string;
  width: number;
  height: number;
};

const rows: Photo[][] = [
  [
    { src: "/about/img-8957.webp", width: 1400, height: 1400 },
    { src: "/about/img-8964.webp", width: 1080, height: 1400 },
    { src: "/about/img-8966.webp", width: 1060, height: 1400 },
  ],
  [
    { src: "/about/img-000022350012-10.webp", width: 1400, height: 928 },
    { src: "/about/img-8960.webp", width: 1170, height: 764 },
    { src: "/about/img-8970.webp", width: 808, height: 1024 },
  ],
  [
    { src: "/about/img-diya-3.webp", width: 1400, height: 1400 },
    { src: "/about/img-5994.webp", width: 683, height: 1024 },
    { src: "/about/img-5993.webp", width: 683, height: 1024 },
    { src: "/about/img-2366.webp", width: 768, height: 1024 },
  ],
];

export function AboutPhotoGrid() {
  return (
    <div className={styles.grid}>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row} data-row={rowIndex}>
          {row.map((photo, photoIndex) => (
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

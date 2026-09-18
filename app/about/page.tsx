import type { Metadata } from "next";
import { AboutSidebar } from "@/components/about-sidebar";
import { AboutPhotoGrid } from "@/components/about-photo-grid";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About — Diya Chakraborti",
  description:
    "Diya Chakraborti is a designer, dreamer, and doer in San Francisco.",
};

export default function About() {
  return (
    <div className={styles.about}>
      <AboutSidebar />
      <main className={styles.content}>
        <AboutPhotoGrid />
      </main>
    </div>
  );
}

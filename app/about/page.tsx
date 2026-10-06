import type { Metadata } from "next";
import { AboutSidebar } from "@/components/about-sidebar";
import { EdgeBlur } from "@/components/edge-blur";
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
      <EdgeBlur />
      <AboutSidebar />
      <main className={styles.content}>
        <AboutPhotoGrid />
      </main>
    </div>
  );
}

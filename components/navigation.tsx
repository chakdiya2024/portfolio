import Image from "next/image";
import { SocialLinks } from "@/components/social-links";
import styles from "./navigation.module.css";

export function Navigation() {
  return (
    <aside className={styles.nav} aria-label="Site introduction">
      <div className={styles.hero}>
        <div className={styles.avatar}>
          <Image
            className={styles.avatarImage}
            src="/avatar.webp"
            alt="Portrait of Diya Chakraborti"
            width={78}
            height={78}
            priority
          />
        </div>
        <div className={styles.text}>
          <h1 className={styles.name}>Diya Chakraborti</h1>
          <p className={styles.bio}>
            Product designer crafting AI tools for trust, at scale. Currently at
            Visa in SF.
          </p>
        </div>
        <SocialLinks />
      </div>
    </aside>
  );
}

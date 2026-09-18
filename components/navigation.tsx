import Image from "next/image";
import Link from "next/link";
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
            Product designer building enterprise AI tools for trust, at
            scale. I love turning complex problems into thoughtful
            solutions, from pitch to production.
          </p>
          <p className={styles.status}>
            Currently at Visa in San Francisco.
            <br />
            Learn more{" "}
            <Link href="/about" className={styles.aboutLink}>
              about me
            </Link>
            , or find me below.
          </p>
        </div>
        <hr className={styles.divider} />
        <SocialLinks />
      </div>
    </aside>
  );
}

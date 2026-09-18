import Image from "next/image";
import Link from "next/link";
import { experience } from "@/lib/experience";
import { socialLinks } from "@/lib/social-links";
import styles from "./about-sidebar.module.css";

function findHref(platform: "linkedin" | "twitter" | "email") {
  return socialLinks.find((link) => link.platform === platform)?.href ?? "#";
}

export function AboutSidebar() {
  const linkedinHref = findHref("linkedin");
  const twitterHref = findHref("twitter");
  const emailHref = findHref("email");

  return (
    <aside className={styles.sidebar} aria-label="About Diya Chakraborti">
      <div className={styles.top}>
        <div className={styles.hero}>
          <Link href="/" className={styles.avatar} aria-label="Back to homepage">
            <Image
              className={styles.avatarImage}
              src="/avatar.webp"
              alt="Portrait of Diya Chakraborti"
              width={78}
              height={78}
              priority
            />
          </Link>
          <h1 className={styles.heading}>
            Diya is a designer, dreamer, and doer ☻
          </h1>
        </div>

        <div className={styles.bio}>
          <p>
            As a designer, I love creating meaningful experiences that help
            real people. I’ve previously designed at mission-driven places
            like Visa, Change.org, Planned Parenthood, Develop for Good, and
            UC Berkeley’s School of Information.
          </p>
          <p>
            As a dreamer, I’m passionate about social mobility. Since 2020,
            I’ve been mentoring high school students to their dream colleges,
            and advising student designers to their dream internships.
          </p>
          <div>
            <p>As a doer, you can find me...</p>
            <ul className={styles.doerList}>
              <li>Hosting apartment cafes</li>
              <li>Watching 70mm IMAX movies</li>
              <li>Moving: gym, pilates, hot girl walks</li>
            </ul>
          </div>
          <p>
            I’d love to meet you! Say hello on{" "}
            <a
              className={styles.inlineLink}
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              className={styles.inlineLink}
              href={twitterHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            , or{" "}
            <a className={styles.inlineLink} href={emailHref}>
              chakdiya@gmail.com
            </a>
            .
          </p>
        </div>
      </div>

      <ul className={styles.experienceList}>
        {experience.map((entry) => (
          <li key={`${entry.company}-${entry.role}`} className={styles.experienceRow}>
            <p className={styles.experienceTitle}>
              <span className={styles.experienceCompany}>{entry.company}</span>{" "}
              <span className={styles.experienceRole}>/ {entry.role}</span>
            </p>
            <p className={styles.experienceYears}>{entry.years}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

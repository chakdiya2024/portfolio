import type { Metadata } from "next";
import Image from "next/image";
import { BackLink } from "@/components/back-link";
import { CaseStudyVideo } from "@/components/case-study-video";
import { EdgeBlur } from "@/components/edge-blur";
import { PageEnter } from "@/components/page-enter";
import { Reveal } from "@/components/reveal";
import styles from "../case-study.module.css";

export const metadata: Metadata = {
  title: "Visa Protect — Diya Chakraborti",
  description: "Visa Protect: a 0-1 fraud investigation interface for small fraud teams navigating complex transaction networks.",
};

const details = [
  { label: "role", value: "First Product Designer" },
  { label: "timeline", value: "June – Dec 2025" },
  { label: "team", value: "1 PM, 2 Data Engineers" },
];

const metrics = [
  { value: "$73M", label: ["New fraud", "value surfaced"] },
  { value: "40%", label: ["Drop in false-", "positive alerts"] },
  { value: "Weeks → Days", label: ["Length of average", "investigation time"] },
];

export default function VisaProtect() {
  return (
    <main
      className={styles.page}
      style={{ "--hero-aspect-ratio": "1280 / 912" } as React.CSSProperties}
    >
      <EdgeBlur />
      <BackLink href="/" className={styles.back} onDarkClassName={styles.backOnDark}>
        ← Back
      </BackLink>

      <PageEnter as="header" className={styles.column}>
        <h1 className={styles.h1}>
          Designing a fraud investigation interface from 0→1
        </h1>
        <p className={styles.body}>
          Visa Protect helps financial institutions fight account-to-account
          fraud through real-time insights and unified fraud scoring. However,
          Visa’s design system wasn’t built for visualizing dense transaction
          data. I led the 0→1 design of the main graph interface, from defining
          requirements to establishing a scalable visual language with
          engineering.
        </p>
        <dl className={styles.details}>
          {details.map((detail) => (
            <div key={detail.label} className={styles.detail}>
              <dt className={styles.caption}>{detail.label}</dt>
              <dd className={styles.body}>{detail.value}</dd>
            </div>
          ))}
        </dl>
      </PageEnter>

      <PageEnter className={styles.hero} backdrop="dark" delay={0.3}>
        <Image
          className={styles.backdrop}
          src="/projects/project-2-background.webp"
          alt=""
          fill
          sizes="100vw"
          preload
          unoptimized
        />
        <div className={styles.heroCrop}>
          <CaseStudyVideo
            className={styles.heroCropVideo}
            src="/projects/project-2-mockup.mp4"
            poster="/projects/project-2-mockup.png"
          />
        </div>
      </PageEnter>

      <Reveal as="section" className={styles.column}>
        <p className={styles.caption}>impact</p>
        <ul className={styles.metrics}>
          {metrics.map((metric) => (
            <li key={metric.value} className={styles.metric}>
              <p className={styles.h2}>{metric.value}</p>
              <p className={styles.body}>
                {metric.label[0]}
                <br />
                {metric.label[1]}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>

      <hr className={styles.divider} />

      <Reveal as="section" className={styles.column}>
        <div className={styles.heading}>
          <p className={styles.caption}>Reflection</p>
          <h2 className={styles.h2}>
            What I learned designing a technical product
          </h2>
        </div>
        <div className={styles.columns}>
          <div className={styles.block}>
            <h3 className={styles.h3}>Scope is a design decision</h3>
            <p className={styles.body}>
              Expert users want tedious work to disappear. I focused on
              designing a few features well, and consulting content, data viz,
              and accessibility partners to make each one best-in-class.
            </p>
          </div>
          <div className={styles.block}>
            <h3 className={styles.h3}>Become your (expert) user</h3>
            <p className={styles.body}>
              Dogfooding the product is key to understanding a technical
              product. I used the live product with demo data, and worked
              closely with engineering to ensure QA matched the designs.
            </p>
          </div>
        </div>
      </Reveal>
    </main>
  );
}

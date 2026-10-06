import type { Metadata } from "next";
import Image from "next/image";
import { BackLink } from "@/components/back-link";
import { EdgeBlur } from "@/components/edge-blur";
import { PageEnter } from "@/components/page-enter";
import { Reveal } from "@/components/reveal";
import styles from "../case-study.module.css";

export const metadata: Metadata = {
  title: "AccesSOS — Diya Chakraborti",
  description: "AccesSOS: redesigning accessible text-to-911 emergency reporting.",
};

const details = [
  { label: "role", value: "Lead Product Designer" },
  { label: "timeline", value: "Aug – Dec 2023" },
  { label: "team", value: "1 PM, 1 Engineer, CEO" },
];

const metrics = [
  { value: "200+", label: "Lives saved" },
  { value: "45", label: "U.S. states" },
  { value: "83K+", label: "Registered users" },
  { value: "7.6M+", label: "Social media impressions" },
];

export default function AccesSOS() {
  return (
    <main className={styles.page}>
      <EdgeBlur />
      <BackLink href="/" className={styles.back} onDarkClassName={styles.backOnDark}>
        ← Back
      </BackLink>

      <PageEnter as="header" className={styles.column}>
        <h1 className={styles.h1}>
          Accessible text-to-911 redesign for the Deaf community
        </h1>
        <p className={styles.body}>
          AccesSOS is a free app that lets people contact 911 without speaking.
          Users tap simple icons to describe what’s happening, and AccesSOS
          shares their location and details with dispatchers. I redesigned the
          main emergency reporting experience to be faster.
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
          src="/projects/project-3-background.webp"
          alt=""
          fill
          sizes="100vw"
          preload
          unoptimized
        />
        <Image
          className={styles.frameMedia}
          style={{ height: "auto" }}
          src="/projects/project-3-mockup.png"
          alt="AccesSOS home screen with a map and a Get help button, beside the “What help do you need?” screen with Medical, Police, Mental, and Fire options"
          width={1312}
          height={874}
          preload
          unoptimized
        />
      </PageEnter>

      <Reveal as="section" className={styles.column}>
        <div className={styles.heading}>
          <p className={styles.caption}>impact</p>
          <h2 className={styles.h2}>
            AccesSOS grew from one county to nationwide
          </h2>
          <p className={styles.body}>
            When I first joined AccesSOS, the app was only live in Berkeley, CA.
            Since then, my work has helped the platform expand nationwide:
          </p>
        </div>
        <ul className={styles.metrics}>
          {metrics.map((metric) => (
            <li key={metric.value} className={styles.metric}>
              <p className={styles.h2}>{metric.value}</p>
              <p className={styles.body}>{metric.label}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      <hr className={styles.divider} />

      <Reveal as="section" className={styles.column}>
        <div className={styles.heading}>
          <p className={styles.caption}>Reflection</p>
          <h2 className={styles.h2}>
            What I learned designing for a tech nonprofit
          </h2>
        </div>
        <div className={styles.columns}>
          <div className={styles.block}>
            <h3 className={styles.h3}>Usability over aesthetics</h3>
            <p className={styles.body}>
              The hardest part was designing icons that read instantly to
              someone in a panic across languages. The final set isn’t
              perfectly consistent, but every icon is unambiguous – under time
              pressure that’s the tradeoff that matters.
            </p>
          </div>
          <div className={styles.block}>
            <h3 className={styles.h3}>Co-design with the team</h3>
            <p className={styles.body}>
              AccesSOS has a few full-time employees and relies heavily on
              volunteer designers and engineers. I co-designed with the team
              that would actually maintain it, and documented decisions clearly
              for whoever would come next.
            </p>
          </div>
        </div>
      </Reveal>
    </main>
  );
}

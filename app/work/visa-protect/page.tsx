import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Visa Protect — Diya Chakraborti",
  description: "Designing a fraud investigation platform from 0 to 1.",
};

function Divider() {
  return (
    <div className={styles.dividerWrap}>
      <div className={styles.divider} />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.h2}>{title}</h2>
    </>
  );
}

export default function VisaProtect() {
  return (
    <main className={styles.page}>
      <Link href="/" className={styles.back}>
        ← Back
      </Link>

      <h1 className={styles.h1}>
        Designing a fraud investigation platform from 0 to 1
      </h1>

      <div className={styles.intro}>
        <p>
          Visa Protect for Account-to-Account Payments is a fraud prevention
          solution that helps financial institutions detect real-time scams
          across instant payment networks. In 2023, it surfaced 54% more
          fraud than banks&rsquo; internal systems in a pilot study. In 2024,
          Visa&rsquo;s Chief Product Officer announced the product&rsquo;s
          first client in Argentina.
        </p>
        <p>
          As the team&rsquo;s first designer, I led the 0–1 design from
          internal tool to monetized product. I worked closely with product
          to shape the roadmap, and engineering to craft a cohesive visual
          language from scratch.
        </p>
      </div>

      <div className={styles.hero}>
        <Image
          className={styles.heroBackground}
          src="/projects/project-2-background.webp"
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 640px"
          unoptimized
          priority
        />
        <div className={styles.heroMockup}>
          <Image
            src="/projects/visa-protect-demo.png"
            alt="Visa Protect network graph showing an account-to-account fraud investigation"
            fill
            sizes="483px"
            unoptimized
            priority
          />
        </div>
      </div>

      <div className={styles.meta}>
        <div className={styles.metaItem}>
          <p className={styles.metaLabel}>Role</p>
          <p className={styles.metaValue}>1st Product Designer</p>
        </div>
        <div className={styles.metaItem}>
          <p className={styles.metaLabel}>Timeline</p>
          <p className={styles.metaValue}>June – Dec 2024</p>
        </div>
        <div className={styles.metaItem}>
          <p className={styles.metaLabel}>Team</p>
          <div className={styles.metaValue}>
            <p>1 Product Manager</p>
            <p>2 Data Engineers</p>
          </div>
        </div>
        <div className={styles.metaItem}>
          <p className={styles.metaLabel}>Skills</p>
          <div className={styles.metaValue}>
            <p>Design Systems</p>
            <p>Data Visualization</p>
            <p>Prototyping</p>
          </div>
        </div>
      </div>

      <Divider />

      <section className={styles.section}>
        <SectionHeading
          eyebrow="Problem"
          title="Fraud investigations take weeks, while AI scams evolve in days."
        />
        <p>
          Small financial institutions are losing the race to AI-driven
          scams. While backend systems instantly flag suspicious payments,
          fraud analysts spend weeks across disconnected spreadsheets, legacy
          tools, and thousands of transactions. This gives bad actors ample
          time to drain accounts and funnel funds — by the time they&rsquo;re
          caught, millions are gone.
        </p>
        <p>
          The existing interface suffered from critical usability issues: a
          cluttered UI, redundant data, heavy technical jargon. Fraud
          analysts needed a better way to visualize dense transaction data.
        </p>
      </section>

      <Divider />

      <section className={styles.section}>
        <SectionHeading
          eyebrow="Solution"
          title="Data visualization for small fraud investigation teams"
        />
        <p>
          I designed Visa Protect&rsquo;s visual language and core
          interactions from scratch. I partnered with Product, Engineering,
          and consulted with Research, Accessibility, and Data Experience to
          make the best experience possible.
        </p>
      </section>

      <figure className={styles.feature}>
        <div className={styles.featureImage}>
          <div className={styles.designSystemShot}>
            <Image
              src="/work/visa-protect/starting-investigation.png"
              alt="Visa Protect network graph in its default state, prompting the analyst to search an account, transaction, or tax ID"
              width={1056}
              height={750}
              sizes="440px"
              unoptimized
            />
          </div>
        </div>
        <figcaption className={styles.caption}>
          <span className={styles.captionLabel}>
            Starting an investigation
          </span>{" "}
          — Start with an account or transaction number, narrow by date or
          amount range.
        </figcaption>
      </figure>

      <figure className={styles.feature}>
        <div className={styles.featureImage}>
          <div className={styles.designSystemShot}>
            <Image
              src="/work/visa-protect/fraud-labeling.png"
              alt="Visa Protect network graph with a transaction selected and the Add fraud / Explain panel open"
              width={1056}
              height={752}
              sizes="440px"
              unoptimized
            />
          </div>
        </div>
        <figcaption className={styles.caption}>
          <span className={styles.captionLabel}>Fraud labeling</span> — Tag
          transactions anytime during your investigation with graph settings
          and filters.
        </figcaption>
      </figure>

      <figure className={styles.feature}>
        <div className={`${styles.featureImage} ${styles.featureImageStack}`}>
          <div className={styles.designSystemShot}>
            <Image
              src="/work/visa-protect/design-system-1.png"
              alt="Visa Protect Nova design tokens"
              width={1632}
              height={352}
              sizes="440px"
              unoptimized
            />
          </div>
          <div className={styles.designSystemShot}>
            <Image
              src="/work/visa-protect/design-system-2.png"
              alt="Visa Protect component states"
              width={968}
              height={430}
              sizes="440px"
              unoptimized
            />
          </div>
          <div className={styles.designSystemRow}>
            <div className={styles.designSystemShot}>
              <Image
                src="/work/visa-protect/design-system-3.png"
                alt="Visa Protect color palette"
                width={758}
                height={780}
                sizes="225px"
                unoptimized
              />
            </div>
            <div className={styles.designSystemShot}>
              <Image
                src="/work/visa-protect/design-system-4.png"
                alt="Visa Protect typography scale"
                width={784}
                height={1044}
                sizes="215px"
                unoptimized
              />
            </div>
          </div>
          <div className={styles.designSystemShot}>
            <Image
              src="/work/visa-protect/design-system-5.png"
              alt="Visa Protect icon set"
              width={2258}
              height={442}
              sizes="440px"
              unoptimized
            />
          </div>
        </div>
        <figcaption className={styles.caption}>
          <span className={styles.captionLabel}>Design system</span> — A
          cohesive language built for accessible data visualization.
        </figcaption>
      </figure>

      <blockquote className={styles.quote}>
        <p className={styles.quoteText}>
          &ldquo;This looks miles better than even a couple months ago. I
          enjoy the user of color, shapes, and stuff like that.&rdquo;
        </p>
        <p className={styles.quoteAttribution}>— Payments fintech, Argentina</p>
      </blockquote>

      <Divider />

      <section className={styles.section}>
        <SectionHeading
          eyebrow="Impact"
          title="From scrappy internal tool to part of paid product offering"
        />
        <ul className={styles.list}>
          <li>Reduced time-to-development making accessible components</li>
          <li>Integration with FeatureSpace and CurrencyCloud</li>
          <li>Consistent UX staffing since my time on product</li>
          <li>Featured in Visa Payments Forum 2024 + 2025</li>
        </ul>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <p className={styles.statValue}>73%</p>
            <p className={styles.statLabel}>Fraud value surfaced in Argentina</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statValue}>~$460M</p>
            <p className={styles.statLabel}>
              savings for UK payments industry
            </p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statValue}>1 → 6</p>
            <p className={styles.statLabel}>New pilots</p>
          </div>
        </div>
      </section>

      <Divider />

      <section className={styles.section}>
        <p className={styles.eyebrow}>Reflection</p>

        <h3 className={styles.h2}>Becoming your user</h3>
        <p>
          For such a technical problem space, dogfooding the product myself
          was key to truly empathizing with user needs. I used the live
          product at least a few times a week, and worked closely with devs
          to make sure QA matched the designs.
        </p>

        <h3 className={styles.h2}>Influencing through prototyping</h3>
        <p>
          For this project, interactive prototypes definitely helped over
          static mocks. Learn your squad&rsquo;s communication styles and
          bring good energy! My PM and I brainstormed in the office weekly,
          while the engineers preferred detailed Teams messages and ad-hoc
          calls.
        </p>

        <h3 className={styles.h2}>Accessible data visualization</h3>
        <p>
          As the only dedicated designer on this project, I took initiative
          to get feedback from content, data visualization, and
          accessibility to create the best designs. By attending office
          hours and recruiting short-term help, I got timely feedback
          without constraining resources.
        </p>
      </section>
    </main>
  );
}

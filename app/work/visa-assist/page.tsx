import type { Metadata } from "next";
import Image from "next/image";
import { BackLink } from "@/components/back-link";
import { CaseStudyVideo } from "@/components/case-study-video";
import { PageEnter } from "@/components/page-enter";
import { Reveal } from "@/components/reveal";
import { ZoomableImage } from "@/components/zoomable-image";
import styles from "../case-study.module.css";

export const metadata: Metadata = {
  title: "Visa Assist — Diya Chakraborti",
  description:
    "Building trust in Visa’s first GenAI product for clients: a visual redesign of Visa Assist ahead of its global launch.",
};

const assets = "/work/visa-assist";

const details = [
  { label: "role", value: "Lead Product Designer" },
  { label: "timeline", value: "July – Sept 2025" },
  { label: "team", value: "PM, Engineering, Brand" },
];

const metrics = [
  { value: "197", label: ["Countries", "and regions"] },
  { value: "$1.2M", label: ["Support savings", "in first 6 months"] },
  { value: "#1", label: ["Knowledge search", "tool at Visa"] },
  { value: "74%", label: ["Response satisfaction", "as usage grew 4x"] },
];

export default function VisaAssist() {
  return (
    <main className={styles.page}>
      <BackLink href="/" className={styles.back} onDarkClassName={styles.backOnDark}>
        ← Back
      </BackLink>

      <PageEnter as="header" className={styles.column}>
        <h1 className={styles.h1}>
          Building trust in Visa’s first GenAI product for clients
        </h1>
        <p className={styles.body}>
          Visa Assist is an AI chatbot that answers business and technical
          questions on over 150 Visa products, so that support teams can focus
          on more complex cases. I led a visual redesign of Visa Assist ahead
          of its global launch — refining the home, conversation, and entry
          points to make it easy and trustworthy for enterprise users.
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
          src={`${assets}/background.webp`}
          alt=""
          fill
          sizes="100vw"
          preload
          unoptimized
        />
        <CaseStudyVideo
          className={styles.heroVideo}
          src={`${assets}/demo.mp4`}
          poster={`${assets}/demo-poster.webp`}
        />
      </PageEnter>

      <Reveal as="section" className={styles.column}>
        <div className={styles.heading}>
          <p className={styles.caption}>impact</p>
          <h2 className={styles.h2}>
            Visa Assist launched globally in October 2025
          </h2>
        </div>
        <div className={styles.logos}>
          <Image
            src={`${assets}/clients.webp`}
            alt="Client logos: Chase, PayPal, Wells Fargo, Bank of America, MUFG, RBC, Lloyds Bank, Bradesco, and TD Bank"
            width={2956}
            height={748}
            unoptimized
          />
        </div>
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
          <p className={styles.caption}>problem</p>
          <h2 className={styles.h2}>
            Visa Assist was “just another chatbot”
          </h2>
        </div>
        <div className={styles.block}>
          <h3 className={styles.h3}>Chatbots at Visa have low UX consistency</h3>
          <p className={styles.body}>
            Every product team was racing to build their own chatbot, each with
            their own look and feel. Company guidelines only covered
            performance, security, and accuracy. This led to duplicated efforts
            across engineering teams and decreasing user trust in AI responses.
          </p>
        </div>
        <div className={styles.block}>
          <h3 className={styles.h3}>
            Visa Assist didn’t clearly communicate its value
          </h3>
          <p className={styles.body}>
            During pilot, employees viewed Visa Assist as a static document
            library, not an intelligent assistant. New users weren’t sure how
            it differed from other chatbots at Visa, while power users weren’t
            confident this would help them be self-service.
          </p>
        </div>
      </Reveal>

      <Reveal className={styles.band}>
        <div className={styles.bandInner}>
          <figure className={styles.bandFigure}>
            <ZoomableImage
              className={styles.bandMedia}
              src={`${assets}/old-home.webp`}
              alt="Original Visa Assist home screen, annotated with pilot feedback: “Not too confident this is self-service” and “Seems like you need to know what to do”"
              width={2524}
              height={1880}
              caption="original home"
              radius={12}
            />
            <figcaption className={styles.caption}>original home</figcaption>
          </figure>
          <figure className={styles.bandFigure}>
            <ZoomableImage
              className={styles.bandMedia}
              src={`${assets}/old-chat.webp`}
              alt="Original Visa Assist chat screen, annotated with issues: low contrast with response, long source titles, poor readability, and unwanted rewrite options"
              width={2524}
              height={1880}
              caption="original chat"
              radius={12}
            />
            <figcaption className={styles.caption}>original chat</figcaption>
          </figure>
        </div>
      </Reveal>

      <Reveal as="section" className={styles.column}>
        <div className={styles.heading}>
          <p className={styles.caption}>solution</p>
          <h2 className={styles.h2}>
            I refined Visa Assist’s most important surfaces: home,
            conversation, and entry points.
          </h2>
        </div>
        <p className={styles.body}>
          I worked closely with product, engineering, and brand to define
          requirements, co-design together, and iterate with feedback. I
          created a prototyping workflow in Claude Code with product context,
          design system, and user research findings built in.
        </p>
      </Reveal>

      <div className={styles.frames}>
        <Reveal as="figure" className={styles.frameFigure}>
          <div className={styles.frame} data-backdrop="dark">
            <Image
              className={styles.backdrop}
              src={`${assets}/background.webp`}
              alt=""
              fill
              sizes="(max-width: 1120px) 100vw, 1040px"
              unoptimized
            />
            <ZoomableImage
              className={styles.frameMedia}
              mediaClassName={styles.shadow}
              src={`${assets}/va-home.webp`}
              alt="Redesigned Visa Assist home screen with a personal greeting and six categorized conversation starters"
              width={2880}
              height={1800}
              caption="redesigned home"
              radius={12}
            />
          </div>
          <figcaption className={styles.caption}>redesigned home</figcaption>
        </Reveal>
        <Reveal as="figure" className={styles.frameFigure}>
          <div className={styles.frame} data-backdrop="dark">
            <Image
              className={styles.backdrop}
              src={`${assets}/background.webp`}
              alt=""
              fill
              sizes="(max-width: 1120px) 100vw, 1040px"
              unoptimized
            />
            <ZoomableImage
              className={styles.frameMedia}
              mediaClassName={styles.shadow}
              src={`${assets}/va-chat.webp`}
              alt="Redesigned Visa Assist chat screen with a structured, numbered answer followed by source cards"
              width={2880}
              height={1800}
              caption="redesigned chat interface"
              radius={12}
            />
          </div>
          <figcaption className={styles.caption}>
            redesigned chat interface
          </figcaption>
        </Reveal>
        <Reveal as="figure" className={styles.frameFigure}>
          <div className={styles.frame} data-backdrop="dark">
            <Image
              className={styles.backdrop}
              src={`${assets}/background.webp`}
              alt=""
              fill
              sizes="(max-width: 1120px) 100vw, 1040px"
              unoptimized
            />
            <ZoomableImage
              className={styles.frameMedia}
              mediaClassName={styles.shadow}
              src={`${assets}/laptop.webp`}
              alt="Marketing graphic on a laptop lock screen announcing that Visa Assist is now available to all clients"
              width={2880}
              height={1680}
              caption="marketing graphics"
            />
          </div>
          <figcaption className={styles.caption}>marketing graphics</figcaption>
        </Reveal>
      </div>

      <hr className={styles.divider} />

      <Reveal as="section" className={styles.column}>
        <div className={styles.heading}>
          <p className={styles.caption}>Reflection</p>
          <h2 className={styles.h2}>
            What I learned designing AI for trust, at scale
          </h2>
        </div>
        <div className={styles.columns}>
          <div className={styles.block}>
            <h3 className={styles.h3}>Think systems, not screens</h3>
            <p className={styles.body}>
              Clients have many touch points with Visa. My job wasn’t just
              making the product great, but also meeting clients wherever they
              are in their support journey.
            </p>
          </div>
          <div className={styles.block}>
            <h3 className={styles.h3}>Adoption across design</h3>
            <p className={styles.body}>
              If I had more time, I wish I brought the rest of our design
              organization along for the ride. I’d host more share outs with
              design teams building chatbots.
            </p>
          </div>
        </div>
        <Image
          className={styles.photo}
          src={`${assets}/team.webp`}
          alt="The Visa Assist team gathered for a group selfie in the office"
          width={800}
          height={600}
          unoptimized
        />
      </Reveal>
    </main>
  );
}

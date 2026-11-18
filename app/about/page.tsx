"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import WhatWeDo from "../components/WhatWeDo";
import LeadershipSection from "../components/LeadershipSection";
import PageBanner from "../components/PageBanner";
import Container from "../components/Container";
import ArrowButton from "../components/ArrowButton";
import Button, { Arrow } from "../components/Button";

const EASE = [0.22, 1, 0.36, 1] as const;

const reveal = (delay = 0) => ({
  initial: { y: 36, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.9, ease: EASE, delay },
});

const Eyebrow = ({
  children,
  className = "text-gold",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={`mb-[1.35rem] inline-flex items-center gap-3 text-[.685rem] font-semibold uppercase tracking-[.26em] ${className}`}
  >
    <span aria-hidden className="block h-px w-9 bg-current" />
    {children}
  </p>
);

const CountUp = ({
  to,
  suffix = "",
  duration = 1.8,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
};

const OurStory = () => {
  return (
    <section className="relative w-full overflow-hidden bg-ivory py-[clamp(72px,9vw,132px)]">
      <Container>
        <div className="mb-10 flex items-end justify-between border-b border-black/10 pb-6">
          <Eyebrow>Our Story</Eyebrow>
          {/* <span className="text-[.6rem] font-semibold uppercase tracking-[.28em] text-grey-500">
            Chapter 01 · 2019
          </span> */}
        </div>

        <div className="grid gap-[clamp(40px,5vw,72px)] md:grid-cols-[1.15fr_1fr]">
          <motion.div {...reveal()}>
            <h2 className="max-w-[16ch] font-serif text-[clamp(2.6rem,5.4vw,4.6rem)] font-normal leading-[1.02] tracking-[-.02em] text-navy">
              Five students, one prayer, a family that{" "}
              <em className="italic text-gold">grew.</em>
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <p className="text-[.98rem] leading-[1.82] text-grey-600">
                What began in a dorm room as a weekly prayer became a
                campus-wide community of students learning to follow Christ
                together.
              </p>
              <p className="text-[.98rem] leading-[1.82] text-grey-600">
                DUCSO exists to make room for that same story in every
                generation — a place to belong, a people to grow with, a purpose
                to live for.
              </p>
            </div>

            <figure className="mt-10 border-l-2 border-gold pl-6">
              <blockquote className="m-0 font-serif text-[clamp(1.15rem,1.7vw,1.4rem)] italic leading-[1.5] text-navy">
                &ldquo;You were never meant to walk through university
                alone.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-[.64rem] font-semibold uppercase tracking-[.26em] text-gold">
                — The Heart of DUCSO
              </figcaption>
            </figure>

            <div className="mt-9">
              <ArrowButton href="/contact">
                Become part of the story
              </ArrowButton>
            </div>
          </motion.div>

          <motion.div {...reveal(0.15)} className="relative">
            <div className="relative aspect-[3/4] overflow-hidden bg-navy">
              <Image
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80"
                alt="DUCSO worship"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover [filter:grayscale(.22)_saturate(.92)_contrast(1.03)]"
              />
            </div>
            <div className="mt-3 flex items-center justify-between gap-4 text-[.6rem] font-semibold uppercase tracking-[.26em] text-grey-500">
              <span>Photo · Friday Fellowship</span>
              <span aria-hidden className="h-px flex-1 bg-black/10" />
              <span>2019</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

const values = [
  "Faith",
  "Fellowship",
  "Scholarship",
  "Leadership",
  "Service",
  "Worship",
];

const ValuesTicker = () => {
  const reduce = useReducedMotion();
  const track = [...values, ...values, ...values, ...values];

  return (
    <div
      aria-hidden
      className="relative w-full overflow-hidden border-y border-gold/30 bg-navy py-[clamp(18px,2.4vw,30px)]"
    >
      <motion.div
        className="flex w-max items-center"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 36, ease: "linear", repeat: Infinity }}
      >
        {track.map((value, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-[clamp(22px,3.4vw,52px)] font-serif text-[clamp(1.5rem,3vw,2.6rem)] italic text-white/90">
              {value}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const MissionVision = () => {
  const panels = [
    {
      num: "01",
      label: "Our Mission",
      title: "Why we exist",
      desc: "To be a Christ-centered family at Dhaka University where students encounter God, grow in faith, and serve their campus with love — making Jesus known through how we live.",
      tone: "dark",
    },
    {
      num: "02",
      label: "Our Vision",
      title: "Where we're going",
      desc: "A campus where every student has a place to belong, a people to grow with, and a purpose to live for — DUCSO students reflecting Christ in every faculty and conversation.",
      tone: "gold",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-ivory py-[clamp(72px,9vw,132px)]">
      <Container>
        <motion.div
          {...reveal()}
          className="mb-[clamp(40px,5vw,68px)] flex flex-wrap items-end justify-between gap-8"
        >
          <div className="max-w-[640px]">
            <Eyebrow>Our DNA</Eyebrow>
            <h2 className="max-w-[18ch] font-serif text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal leading-[1.08] tracking-[-.015em] text-navy">
              Why we exist and{" "}
              <em className="italic text-gold">where we&apos;re going</em>
            </h2>
          </div>
          <p className="max-w-[36ch] text-[clamp(1rem,1.15vw,1.09rem)] leading-[1.78] text-grey-600">
            Every community has a heartbeat. Ours is simple: to know Christ, and
            to make Him known.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 md:h-[540px] md:flex-row md:gap-5">
          {panels.map((panel, i) => {
            const dark = panel.tone === "dark";
            return (
              <motion.article
                key={panel.num}
                {...reveal(i * 0.15)}
                tabIndex={0}
                className={`group relative flex flex-1 flex-col justify-between overflow-hidden p-[clamp(28px,4vw,56px)] outline-none md:transition-[flex-grow] md:duration-700 md:ease-[cubic-bezier(.22,1,.36,1)] md:hover:flex-[1.45] md:focus-visible:flex-[1.45] ${
                  dark ? "bg-navy text-white" : "bg-gold text-navy"
                }`}
              >
                <span
                  aria-hidden
                  className={`pointer-events-none absolute -right-6 -top-10 select-none font-serif text-[clamp(8rem,16vw,14rem)] font-semibold leading-none text-transparent transition-transform duration-700 group-hover:-translate-x-3 ${
                    dark
                      ? "[-webkit-text-stroke:1px_rgba(255,255,255,.22)]"
                      : "[-webkit-text-stroke:1px_rgba(11,33,55,.3)]"
                  }`}
                >
                  {panel.num}
                </span>

                <span
                  aria-hidden
                  className={`pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rotate-45 transition-transform duration-700 group-hover:scale-110 ${
                    dark ? "bg-gold/[0.08]" : "bg-navy/[0.07]"
                  }`}
                />

                <div className="relative z-10 flex items-center gap-3">
                  <span
                    aria-hidden
                    className={`h-px w-8 ${dark ? "bg-gold" : "bg-navy"}`}
                  />
                  <span
                    className={`text-[.66rem] font-semibold uppercase tracking-[.26em] ${
                      dark ? "text-gold" : "text-navy"
                    }`}
                  >
                    {panel.label}
                  </span>
                </div>

                <div className="relative z-10 mt-16 md:mt-0">
                  <h3 className="font-serif text-[clamp(2rem,3.4vw,3.1rem)] font-normal leading-[1.1] tracking-[-.01em]">
                    {panel.title}
                  </h3>
                  <p
                    className={`mt-5 max-w-[46ch] text-[.98rem] leading-[1.8] ${
                      dark ? "text-white/75" : "text-navy/80"
                    }`}
                  >
                    {panel.desc}
                  </p>
                  <div
                    className={`mt-8 flex items-center gap-3 border-t pt-5 text-[.6rem] font-semibold uppercase tracking-[.26em] ${
                      dark
                        ? "border-white/15 text-white/45"
                        : "border-navy/20 text-navy/60"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`h-1.5 w-1.5 rotate-45 ${
                        dark ? "bg-gold" : "bg-navy"
                      }`}
                    />
                    DUCSO · 2026–27
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

const Timeline = () => {
  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      desc: "Five students. One dorm room. A weekly prayer that grew into something bigger than any of us imagined.",
    },
    {
      year: "2021",
      title: "First Praise Night",
      desc: "Our first Friday night gathering — 40 students, one hall, and a moment that changed the direction of DUCSO.",
    },
    {
      year: "2023",
      title: "Rooted & Growing",
      desc: "Over 100 members, weekly small groups, and the launch of our campus service outreach.",
    },
    {
      year: "Today",
      title: "Still in Motion",
      desc: "A community of 150+ believers, gathering weekly to worship, grow, and carry each other through university life.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-navy py-[clamp(80px,10vw,150px)]">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-full w-96 -skew-x-[20deg] bg-gold/[0.04]"
      />
      <Container>
        <motion.div
          {...reveal()}
          className="mb-[clamp(48px,6vw,84px)] flex flex-wrap items-end justify-between gap-8"
        >
          <div className="max-w-[600px]">
            <Eyebrow>The Journey</Eyebrow>
            <h2 className="max-w-[20ch] font-serif text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal leading-[1.08] tracking-[-.015em] text-white">
              Milestones <em className="italic text-gold">along the way</em>
            </h2>
          </div>
          <p className="max-w-[34ch] text-[clamp(1rem,1.15vw,1.09rem)] leading-[1.78] text-white/60">
            Five years of God&apos;s faithfulness — from a dorm room prayer to a
            campus-wide family.
          </p>
        </motion.div>

        <div className="relative">
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.8, ease: EASE }}
            className="absolute left-0 right-0 top-[6px] hidden h-px origin-left bg-gold/50 md:block"
          />

          <div className="grid gap-12 md:grid-cols-4 md:gap-8">
            {milestones.map((m, i) => {
              const low = i % 2 === 1;
              return (
                <motion.div
                  key={m.year}
                  {...reveal(i * 0.12)}
                  className="group relative border-l border-gold/30 pl-8 md:border-l-0 md:pl-0"
                >
                  <span
                    aria-hidden
                    className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-gold bg-navy transition-colors duration-500 group-hover:bg-gold md:left-0 md:top-0"
                  />
                  <span
                    aria-hidden
                    className={`absolute left-[6px] top-3.5 hidden w-px bg-gold/40 md:block ${
                      low ? "md:h-[76px]" : "md:h-7"
                    }`}
                  />

                  <div className={low ? "md:pt-[96px]" : "md:pt-12"}>
                    <p className="font-serif text-[clamp(2.8rem,5vw,4.2rem)] font-semibold leading-none text-gold transition-all duration-500 [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_currentColor] group-hover:[-webkit-text-fill-color:currentColor]">
                      {m.year}
                    </p>

                    <h3 className="mt-5 font-serif text-[1.4rem] leading-[1.25] text-white">
                      {m.title}
                    </h3>

                    <p className="mt-3 text-[.92rem] leading-[1.78] text-white/60">
                      {m.desc}
                    </p>

                    <span
                      aria-hidden
                      className="mt-6 block h-[2px] w-8 bg-gold transition-all duration-500 group-hover:w-16"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

const ImpactInNumbers = () => {
  return (
    <section className="relative w-full overflow-hidden bg-ivory py-[clamp(80px,10vw,150px)]">
      <Container>
        <motion.div
          {...reveal()}
          className="mb-[clamp(40px,5vw,68px)] flex flex-wrap items-end justify-between gap-8"
        >
          <div className="max-w-[600px]">
            <Eyebrow>By The Numbers</Eyebrow>
            <h2 className="max-w-[20ch] font-serif text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal leading-[1.08] tracking-[-.015em] text-navy">
              Our impact <em className="italic text-gold">in numbers</em>
            </h2>
          </div>
          <p className="max-w-[34ch] text-[clamp(1rem,1.15vw,1.09rem)] leading-[1.78] text-grey-600">
            Every number is a name. Every name is a story of grace.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-4 md:gap-5">
          <motion.div
            {...reveal()}
            className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden bg-navy p-[clamp(28px,4vw,52px)] md:col-span-2 md:row-span-2 md:min-h-[460px]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-10 h-[140%] w-64 -skew-x-[20deg] bg-gold/[0.07] transition-transform duration-700 group-hover:-translate-x-10"
            />
            <p className="relative z-10 text-[.66rem] font-semibold uppercase tracking-[.28em] text-gold">
              Students
            </p>
            <div className="relative z-10">
              <p className="font-serif text-[clamp(5rem,13vw,9.5rem)] font-semibold leading-[.9] tracking-[-.03em] text-white">
                <CountUp to={150} suffix="" />
                <span className="text-gold">+</span>
              </p>
              <p className="mt-6 max-w-[34ch] text-[.98rem] leading-[1.78] text-white/65">
                Active members across every faculty at Dhaka University.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...reveal(0.1)}
            className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden bg-gold p-[clamp(24px,3vw,40px)] md:col-span-2"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rotate-45 bg-navy/[0.08] transition-transform duration-700 group-hover:scale-110"
            />
            <p className="relative z-10 text-[.66rem] font-semibold uppercase tracking-[.28em] text-navy">
              Years
            </p>
            <div className="relative z-10 flex flex-wrap items-end justify-between gap-4">
              <p className="font-serif text-[clamp(3.8rem,8vw,6rem)] font-semibold leading-[.9] tracking-[-.02em] text-navy">
                <CountUp to={5} />
              </p>
              <p className="max-w-[26ch] text-[.95rem] leading-[1.7] text-navy/80">
                Of faithful ministry since our first prayer in 2019.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...reveal(0.2)}
            className="group relative flex min-h-[240px] flex-col justify-between overflow-hidden border border-navy/15 bg-white p-[clamp(24px,3vw,36px)] transition-colors duration-500 hover:border-gold"
          >
            <p className="text-[.66rem] font-semibold uppercase tracking-[.28em] text-gold">
              Events
            </p>
            <div>
              <p className="font-serif text-[clamp(3rem,5.4vw,4.4rem)] font-semibold leading-[.9] tracking-[-.02em] text-navy">
                <CountUp to={20} />
              </p>
              <p className="mt-4 text-[.9rem] leading-[1.7] text-grey-600">
                Hosted every year — from worship nights to campus outreach.
              </p>
            </div>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100"
            />
          </motion.div>

          <motion.div
            {...reveal(0.3)}
            className="group relative flex min-h-[240px] flex-col justify-between overflow-hidden border border-navy/15 bg-white p-[clamp(24px,3vw,36px)] transition-colors duration-500 hover:border-gold"
          >
            <p className="text-[.66rem] font-semibold uppercase tracking-[.28em] text-gold">
              Small Groups
            </p>
            <div>
              <p className="font-serif text-[clamp(3rem,5.4vw,4.4rem)] font-semibold leading-[.9] tracking-[-.02em] text-navy">
                <CountUp to={12} />
              </p>
              <p className="mt-4 text-[.9rem] leading-[1.7] text-grey-600">
                Weekly gatherings across the city, each with its own leader.
              </p>
            </div>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100"
            />
          </motion.div>
        </div>

        <motion.div
          {...reveal(0.1)}
          className="mt-[clamp(48px,6vw,80px)] flex flex-wrap items-center justify-between gap-6 border-t border-navy/10 pt-10"
        >
          <p className="font-serif text-[clamp(1.4rem,2.4vw,2rem)] italic leading-[1.3] text-navy">
            Since 2019 — by grace, for His glory.
          </p>
          <Button href="/contact" variant="ghost" size="md">
            Get involved
            <Arrow />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <PageBanner
        label="About DUCSO"
        titleFirst="OUR"
        titleSecond="STORY"
        description="Five years. Hundreds of lives. One unchanging mission. This is the story of how a small group of students at Dhaka University became a family."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80"
      />
      <OurStory />
      <ValuesTicker />
      <MissionVision />
      <Timeline />
      <WhatWeDo />
      <LeadershipSection />
      <ImpactInNumbers />
    </main>
  );
}

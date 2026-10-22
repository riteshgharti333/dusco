"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WhatWeDo from "../components/WhatWeDo";
import LeadershipSection from "../components/LeadershipSection";
import PageBanner from "../components/PageBanner";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════════════
   2. OUR STORY
═══════════════════════════════════════════════ */
const OurStory = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-32">
      {/* Rotated side rail */}
      <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 md:block">
        <div className="flex h-full items-center justify-center">
          <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black uppercase tracking-[0.6em] text-blue-900/30">
            Our Story · Since 2019
          </span>
        </div>
      </div>

      <div className="section-container">
        {/* ═══ TOP: Full Width Image with Overlapping Quote ═══ */}
        <div className="relative mb-16 md:mb-24">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: EASE }}
            className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden border-4 border-blue-900 bg-blue-900 md:aspect-[21/9]"
          >
            <Image
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80"
              alt="DUCSO worship"
              fill
              className="object-cover"
            />
            <span className="absolute inset-0 bg-blue-900/30 mix-blend-multiply" />
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="relative z-10 mx-auto -mt-16 w-[90%] max-w-2xl bg-yellow-400 p-8 text-center shadow-2xl md:-mt-24 md:p-12"
          >
            <span className="relative inline-block h-5 w-4" aria-hidden>
              <span className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-blue-900" />
              <span className="absolute left-0 top-[30%] h-[3px] w-full -translate-y-1/2 bg-blue-900" />
            </span>
            <p className="mt-6 text-xl font-black italic leading-tight text-blue-900 md:text-3xl">
              &ldquo;You were never meant to walk through university
              alone.&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 md:gap-3">
              <span className="h-[2px] w-8 bg-blue-900" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-900">
                The Heart of DUCSO
              </span>
              <span className="h-[2px] w-8 bg-blue-900" />
            </div>
          </motion.div>
        </div>

        {/* ═══ MIDDLE: Big Headline ═══ */}
        <div className="mb-16 text-center md:mb-24">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-yellow-400" />
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-900">
                Who We Are
              </span>
              <span className="h-[2px] w-8 bg-yellow-400" />
            </div>

            <h2 className="mx-auto max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-blue-900 sm:text-5xl md:text-6xl lg:text-7xl">
              MORE THAN A
              <br />
              <span className="relative mt-2 inline-block">
                <span
                  aria-hidden
                  className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                />
                <span className="relative z-10 px-1 italic uppercase text-blue-900">
                  CLUB.
                </span>
              </span>
            </h2>
          </motion.div>
        </div>

        {/* ═══ BOTTOM: 3-Column Editorial Text ═══ */}
        <div className="grid gap-10 text-center md:grid-cols-3 md:gap-12 md:text-left">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            <span className="text-4xl font-black text-yellow-400">01</span>
            <h3 className="mt-4 text-lg font-black uppercase tracking-wider text-blue-900">
              The People
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-900/70">
              DUCSO is made up of students from every faculty — engineers,
              artists, scientists, and scholars — united not by their degrees,
              but by their shared love for Christ.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          >
            <span className="text-4xl font-black text-yellow-400">02</span>
            <h3 className="mt-4 text-lg font-black uppercase tracking-wider text-blue-900">
              The Heart
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-900/70">
              We believe faith grows in community. That&apos;s why we gather
              every Friday — to worship loudly, study Scripture deeply, and pray
              honestly for one another.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          >
            <span className="text-4xl font-black text-yellow-400">03</span>
            <h3 className="mt-4 text-lg font-black uppercase tracking-wider text-blue-900">
              The Call
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-900/70">
              Whoever you are, wherever you are on your journey — you are
              welcome here. Come as you are. Grow as you stay. Be sent out as
              you go.
            </p>
          </motion.div>
        </div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <span className="h-[2px] w-10 bg-yellow-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-600">
            — The DUCSO Executive Committee
          </span>
          <span className="h-[2px] w-10 bg-yellow-400" />
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   3. MISSION & VISION
═══════════════════════════════════════════════ */
const MissionVision = () => {
  const cards = [
    {
      num: "01",
      label: "Our Mission",
      title: "Why we exist.",
      desc: "To be a Christ-centered family at Dhaka University where students encounter God, grow in faith, and serve their campus with love. We exist to make Jesus known — not through loud arguments, but through how we live.",
      dark: false,
    },
    {
      num: "02",
      label: "Our Vision",
      title: "Where we're going.",
      desc: "A campus where every student has a place to belong, a people to grow with, and a purpose to live for. We want to see DUCSO students leading worship in every faculty, serving in every corner, and reflecting Christ in every conversation.",
      dark: true,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-32">
      {/* Rotated side rail */}
      <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 md:block">
        <div className="flex h-full items-center justify-center">
          <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black uppercase tracking-[0.6em] text-blue-900/30">
            Mission · Vision
          </span>
        </div>
      </div>

      <div className="section-container">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          {/* ═══ LEFT — Sticky Massive Title ═══ */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: EASE }}
                className="text-center md:text-left"
              >
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <span className="relative inline-block h-4 w-3" aria-hidden>
                    <span className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-yellow-400" />
                    <span className="absolute left-0 top-[30%] h-[3px] w-full -translate-y-1/2 bg-yellow-400" />
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-900">
                    Our DNA
                  </span>
                </div>

                <h2 className="mt-6 text-5xl font-black leading-[0.9] tracking-tight text-blue-900 sm:text-6xl md:text-7xl lg:text-8xl">
                  WHY
                  <br />
                  WE
                  <br />
                  <span className="relative inline-block">
                    <span
                      aria-hidden
                      className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                    />
                    <span className="relative z-10 px-1 italic uppercase text-blue-900">
                      exist.
                    </span>
                  </span>
                </h2>

                <p className="mx-auto mt-8 max-w-xs text-sm leading-relaxed text-blue-900/60 md:mx-0">
                  Every community has a heartbeat. Ours is simple: to know
                  Christ, and to make Him known.
                </p>
              </motion.div>
            </div>
          </div>

          {/* ═══ RIGHT — Stacked Mission & Vision Cards ═══ */}
          <div className="flex flex-col gap-8 md:col-span-8 md:gap-10">
            {cards.map((card, i) => (
              <motion.div
                key={card.num}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: EASE, delay: i * 0.15 }}
                className={`group relative flex flex-col overflow-hidden ${
                  card.dark ? "bg-blue-900" : "bg-yellow-400"
                } p-8 md:p-12 lg:p-14`}
              >
                {/* Premium overlay — soft gradient */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-700 group-hover:opacity-100 ${
                    card.dark
                      ? "bg-gradient-to-br from-blue-800 via-blue-900 to-black/40"
                      : "bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500"
                  }`}
                />

                {/* Slanted background plane — TOP-RIGHT */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute -right-32 -top-24 h-[140%] w-72 -skew-x-[20deg] transition-transform duration-700 group-hover:-translate-x-8 ${
                    card.dark ? "bg-yellow-400/[0.07]" : "bg-blue-900/[0.06]"
                  }`}
                />

                {/* Slanted background plane — BOTTOM-LEFT */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute -left-24 -bottom-24 h-[80%] w-48 -skew-x-[20deg] transition-transform duration-700 group-hover:translate-x-6 ${
                    card.dark ? "bg-yellow-400/[0.05]" : "bg-blue-900/[0.05]"
                  }`}
                />

                {/* Big number — floating in corner */}
                <span
                  className={`pointer-events-none absolute right-6 top-4 text-8xl font-black leading-none md:text-[10rem] ${
                    card.dark ? "text-white/5" : "text-blue-900/10"
                  }`}
                >
                  {card.num}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-[2px] w-8 ${
                        card.dark ? "bg-yellow-400" : "bg-blue-900"
                      }`}
                    />
                    <span
                      className={`text-[10px] font-black uppercase tracking-[0.35em] ${
                        card.dark ? "text-yellow-400" : "text-blue-900/70"
                      }`}
                    >
                      {card.label}
                    </span>
                  </div>

                  <h3
                    className={`mt-5 text-3xl font-black uppercase tracking-tight md:text-4xl lg:text-5xl ${
                      card.dark ? "text-white" : "text-blue-900"
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`mt-5 max-w-xl text-sm leading-relaxed md:text-base ${
                      card.dark ? "text-white/70" : "text-blue-900/80"
                    }`}
                  >
                    {card.desc}
                  </p>

                  <div
                    className={`mt-10 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] ${
                      card.dark ? "text-white/40" : "text-blue-900/40"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 ${
                        card.dark ? "bg-yellow-400" : "bg-blue-900"
                      }`}
                    />
                    DUCSO · 2026–27
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   4. TIMELINE
═══════════════════════════════════════════════ */
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
    <section className="relative w-full overflow-hidden bg-blue-900 py-20 md:py-32">
      {/* Rotated side rail */}
      <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 md:block">
        <div className="flex h-full items-center justify-center">
          <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black uppercase tracking-[0.6em] text-white/20">
            Timeline · DUCSO
          </span>
        </div>
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-full w-96 bg-yellow-400/[0.04] -skew-x-[20deg]"
      />

      <div className="section-container">
        {/* Header — centered on mobile */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mx-auto max-w-2xl text-center md:mx-0 md:text-left"
        >
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <span className="relative inline-block h-4 w-3" aria-hidden>
              <span className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-yellow-400" />
              <span className="absolute left-0 top-[30%] h-[3px] w-full -translate-y-1/2 bg-yellow-400" />
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-yellow-400">
              The Journey
            </span>
          </div>

          <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl">
            MILESTONES
            <br />
            <span className="relative inline-block">
              <span
                aria-hidden
                className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
              />
              <span className="relative z-10 px-1 italic uppercase text-blue-900">
                along the way.
              </span>
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/60 md:mx-0">
            Five years of God&apos;s faithfulness — from a dorm room prayer to a
            campus-wide family.
          </p>
        </motion.div>

        {/* Timeline items */}
        <div className="relative mt-16 md:mt-24">
          <span
            aria-hidden
            className="absolute left-4 top-0 h-full w-[2px] bg-white/10 md:left-8"
          />
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.6, ease: EASE }}
            className="absolute left-4 top-0 h-full w-[2px] origin-top bg-yellow-400 md:left-8"
          />

          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 }}
              className="group relative pb-20 pl-14 last:pb-0 md:pl-28"
            >
              <span
                aria-hidden
                className="absolute left-4 top-4 flex h-5 w-5 -translate-x-1/2 items-center justify-center md:left-8"
              >
                <span className="absolute inset-0 rounded-full bg-yellow-400/0 transition-all duration-500 group-hover:bg-yellow-400/30 group-hover:scale-150" />
                <span className="relative h-3 w-3 rounded-full border-2 border-yellow-400 bg-blue-900 transition-all duration-500 group-hover:bg-yellow-400" />
              </span>

              <span
                aria-hidden
                className="pointer-events-none absolute -top-8 right-0 select-none text-[9rem] font-black leading-none tracking-tighter text-white/[0.03] transition-all duration-500 group-hover:text-yellow-400/10 md:-top-12 md:text-[14rem]"
              >
                {m.year}
              </span>

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.35em] text-yellow-400">
                    Chapter 0{i + 1}
                  </span>
                  <span className="h-[1px] w-8 bg-yellow-400/40 transition-all duration-500 group-hover:w-16" />
                </div>

                <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
                  <span className="text-4xl font-black leading-none text-white transition-colors duration-500 group-hover:text-yellow-400 md:text-5xl md:w-32">
                    {m.year}
                  </span>
                  <h3 className="text-2xl font-black leading-tight text-white md:text-3xl">
                    {m.title}
                  </h3>
                </div>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
                  {m.desc}
                </p>

                <span
                  aria-hidden
                  className="mt-6 block h-[3px] w-0 -skew-x-[20deg] bg-yellow-400 transition-all duration-500 group-hover:w-16"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   5. IMPACT IN NUMBERS
═══════════════════════════════════════════════ */
const ImpactInNumbers = () => {
  const stats = [
    {
      number: "150",
      suffix: "+",
      label: "Students",
      desc: "Active members across every faculty at Dhaka University.",
    },
    {
      number: "5",
      suffix: "",
      label: "Years",
      desc: "Of faithful ministry since our first prayer in 2019.",
    },
    {
      number: "20",
      suffix: "",
      label: "Events",
      desc: "Hosted every year — from worship nights to campus outreach.",
    },
    {
      number: "12",
      suffix: "",
      label: "Small Groups",
      desc: "Weekly gatherings across the city, each with its own leader.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-blue-900 py-24 md:py-32">
      <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 md:block">
        <div className="flex h-full items-center justify-center">
          <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black uppercase tracking-[0.6em] text-white/20">
            Our Impact · In Numbers
          </span>
        </div>
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-10 right-0 select-none whitespace-nowrap text-[22vw] font-black leading-none tracking-tighter text-white/[0.03]"
      >
        IMPACT
      </span>

      <span
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-full w-96 bg-yellow-400/[0.05] -skew-x-[20deg]"
      />

      <div className="section-container relative">
        {/* Header — centered on mobile */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mx-auto max-w-2xl text-center md:mx-0 md:text-left"
        >
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <span className="relative inline-block h-4 w-3" aria-hidden>
              <span className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-yellow-400" />
              <span className="absolute left-0 top-[30%] h-[3px] w-full -translate-y-1/2 bg-yellow-400" />
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-yellow-400">
              By The Numbers
            </span>
          </div>

          <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            OUR IMPACT
            <br />
            <span className="relative inline-block">
              <span
                aria-hidden
                className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
              />
              <span className="relative z-10 px-1 italic uppercase text-blue-900">
                in numbers.
              </span>
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-white/60 md:mx-0 md:text-base">
            A movement is only as strong as the people inside it. Here is what
            God has done through DUCSO over the last five years.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-5 md:mt-24 md:grid-cols-2 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 }}
              className="group relative flex flex-col overflow-hidden bg-yellow-400 p-6 md:p-8"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 opacity-60 transition-opacity duration-700 group-hover:opacity-100"
              />

              <span
                aria-hidden
                className="pointer-events-none absolute -left-24 -bottom-24 h-[80%] w-48 -skew-x-[20deg] bg-blue-900/[0.06] transition-transform duration-700 group-hover:translate-x-6"
              />

              <div className="relative z-10">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-5xl font-black leading-none tracking-tighter text-blue-900 md:text-6xl">
                    {stat.number}
                  </span>
                  <span className="text-3xl font-black leading-none text-blue-900/70 md:text-4xl">
                    {stat.suffix}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <span className="h-[2px] w-6 bg-blue-900" />
                  <span className="text-[10px] font-black uppercase tracking-[0.35em] text-blue-900">
                    {stat.label}
                  </span>
                </div>

                <p className="mt-3 max-w-sm text-sm leading-relaxed text-blue-900/70">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8"
        >
          <p className="text-sm leading-relaxed text-white/50">
            Every number is a name. Every name is a story of grace.
          </p>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400">
            — Since 2019
          </span>
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   PAGE ASSEMBLY
═══════════════════════════════════════════════ */
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
      <MissionVision />
      <Timeline />
      <WhatWeDo />
      <LeadershipSection />
      <ImpactInNumbers />
    </main>
  );
}

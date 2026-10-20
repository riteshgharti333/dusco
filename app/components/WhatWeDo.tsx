"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

const EASE = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    num: "01",
    title: "Bio",
    desc: "Discovering our identity in Christ. We study the Word, grow in faith, and build a foundation that lasts.",
  },
  {
    num: "02",
    title: "Education",
    desc: "Equipping students for life. We host workshops, mentor students, and encourage academic excellence.",
  },
  {
    num: "03",
    title: "Peace",
    desc: "Creating a safe haven. A place where students can find rest, healing, and a community that cares.",
  },
  {
    num: "04",
    title: "Progress",
    desc: "Moving forward together. We serve the campus, lead outreach, and step into our God-given purpose.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
      {/* Rotated side rail */}
      <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 md:block">
        <div className="flex h-full items-center justify-center">
          <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black uppercase tracking-[0.6em] text-blue-900/30">
            Our Pillars · DUCSO
          </span>
        </div>
      </div>

      <div className="section-container relative">
        {/* ── HEADER ── */}
        <SectionHeader
          dark={false}
          label="What We Do"
          description="Four core pillars shape everything we do at DUCSO. We aren't just a club — we are a community built on purpose."
          title={
            <>
              OUR
              <br />
              <span className="relative inline-block">
                <span
                  aria-hidden
                  className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                />
                <span className="relative z-10 px-1 italic uppercase text-blue-900">
                  pillars.
                </span>
              </span>
            </>
          }
        />

        {/* ── PILLARS GRID ── */}
        <div className="mt-16 grid gap-12 border-t-2 border-blue-900 pt-16 sm:grid-cols-2 md:mt-24 lg:grid-cols-4 lg:gap-0 lg:divide-x-2 lg:divide-blue-900/10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
              className="group relative flex flex-col lg:px-8"
            >
              {/* Huge Number */}
              <span className="text-7xl font-black leading-none text-blue-900/10 transition-colors duration-500 group-hover:text-yellow-400 md:text-8xl">
                {pillar.num}
              </span>

              {/* Title with Slanted Highlight & Extra Padding */}
              <div className="relative mt-8 inline-block self-start  py-2">
                <span
                  aria-hidden
                  className="absolute -inset-x-4 inset-y-0 bg-yellow-400 -skew-x-[10deg] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                />
                <h3 className="relative z-10  text-3xl font-black uppercase tracking-tight text-blue-900 md:text-3xl">
                  {pillar.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-blue-900/60 md:pr-6">
                {pillar.desc}
              </p>

              {/* Arrow indicator
              <div className="mt-8 hidden lg:block">
                <span className="inline-flex h-10 w-10 items-center justify-center border-2 border-blue-900/10 text-blue-900 transition-all duration-300 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-blue-900">
                  <span className="text-lg">→</span>
                </span>
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mt-20 flex flex-col items-center justify-center gap-6 md:flex-row"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-blue-900/50">
            Ready to grow with us?
          </p>
          <Button href="/join" variant="secondary" size="md" onBlue={false}>
            Join the Community
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
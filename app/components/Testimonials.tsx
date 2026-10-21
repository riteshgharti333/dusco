"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const EASE = [0.22, 1, 0.36, 1] as const;
const DURATION = 7000; // ms per testimonial

/* Replace with real words from your members */
const testimonials = [
  {
    name: "Sneha Biswas",
    role: "Member · Dept. of English",
    quote:
      "I came to campus knowing no one. DUCSO gave me a table to sit at, people who prayed for me, and a place that finally felt like home.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  },
  {
    name: "Joel Rozario",
    role: "Alumnus · Batch of 2024",
    quote:
      "Leading a small group taught me more about service and patience than any lecture. The friendships I made here outlasted graduation.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
  },
  {
    name: "Mitali Chakma",
    role: "Member · Dept. of Sociology",
    quote:
      "In the middle of exam stress, this community checked on me, fed me, and reminded me I was not alone. That is rare on a big campus.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
  },
  {
    name: "Samuel Gomes",
    role: "Volunteer · Outreach Team",
    quote:
      "Faith here is not only on Sundays. It is in how we show up for each other and for the city around us, week after week.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  /* auto-advance; restarts whenever the active one changes */
  useEffect(() => {
    const t = setTimeout(
      () => setActive((a) => (a + 1) % testimonials.length),
      DURATION,
    );
    return () => clearTimeout(t);
  }, [active]);

  const current = testimonials[active];

  return (
    <section className="relative w-full overflow-hidden bg-blue-900 py-20 md:py-28">
      {/* NEW: Giant Faded DUCSO Background Wordmark */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 select-none whitespace-nowrap text-[30vw] font-black leading-none tracking-tighter text-white/[0.03] md:-bottom-10 md:text-[18vw]"
      >
        DUCSO
      </span>

      {/* NEW: Subtle background slanted accent (like footer) */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-full w-64 bg-yellow-400/5 -skew-x-[20deg]"
      />

      {/* ── ROTATED SIDE RAIL ── */}
      <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 md:block">
        <div className="flex h-full items-center justify-center">
          <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black uppercase tracking-[0.6em] text-white/20">
            Testimonies · DUSCO
          </span>
        </div>
      </div>

      <div className="section-container relative z-10">
        <SectionHeader
          dark
          label="Testimonials"
          description="Words from the students and alumni who make up the DUCSO community. These are real stories of faith, friendship, and finding a home away from home."
          title={
            <>
              IN THEIR
              <br />
              <span className="relative inline-block">
                <span
                  aria-hidden
                  className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                />
                <span className="relative z-10 px-1 italic uppercase text-blue-900">
                  words.
                </span>
              </span>
            </>
          }
        />

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-16">
          {/* ── INDEX (acts like a table of contents) ── */}
          <motion.ul
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="-mx-1 flex gap-6 overflow-x-auto px-1 md:col-span-4 md:mx-0 md:flex-col md:gap-0 md:overflow-visible md:px-0"
          >
            {testimonials.map((t, i) => {
              const on = i === active;
              return (
                <li key={t.name} className="shrink-0 md:shrink">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={on}
                    className="group relative block w-full py-4 text-left md:py-6"
                  >
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`font-mono text-[11px] tracking-widest transition-colors duration-500 ${
                          on ? "text-yellow-400" : "text-white/35"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={`text-lg font-light transition-all duration-500 md:text-2xl ${
                          on
                            ? "translate-x-1 text-white"
                            : "text-white/40 group-hover:text-white/70"
                        }`}
                      >
                        {t.name}
                      </span>
                    </div>

                    {/* hairline + progress */}
                    <span className="absolute bottom-0 left-0 hidden h-px w-full bg-white/15 md:block" />
                    {on && (
                      <motion.span
                        key={active}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: DURATION / 1000,
                          ease: "linear",
                        }}
                        className="absolute bottom-0 left-0 hidden h-px w-full origin-left bg-yellow-400 md:block"
                      />
                    )}
                    {on && (
                      <motion.span
                        key={`m-${active}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: DURATION / 1000,
                          ease: "linear",
                        }}
                        className="absolute bottom-0 left-0 block h-px w-full origin-left bg-yellow-400 md:hidden"
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </motion.ul>

          {/* ── FEATURED QUOTE ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="relative md:col-span-8"
          >
            {/* Off-White Quote Mark (No Slant) */}
            <span
              aria-hidden
              className="pointer-events-none absolute -top-8 -left-2 select-none font-serif text-[10rem] leading-none text-white/20 md:-top-12 md:-left-3 md:text-[16rem]"
            >
              “
            </span>

            <div className="relative min-h-[360px] pt-16 md:min-h-[420px] md:pt-24">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={active}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <blockquote className="text-2xl font-light leading-[1.35] text-white md:text-4xl md:leading-[1.3]">
                    {current.quote}
                  </blockquote>

                  <figcaption className="mt-10 flex items-center gap-5 md:mt-14">
                    {/* small framed portrait */}
                    <div className="relative h-16 w-16 shrink-0">
                      <span
                        aria-hidden
                        className="absolute inset-0 translate-x-1.5 translate-y-1.5 border border-yellow-400"
                      />
                      <div className="absolute inset-0 overflow-hidden bg-blue-800">
                        <Image
                          src={current.image}
                          alt={current.name}
                          fill
                          sizes="64px"
                          className="object-cover grayscale"
                        />
                      </div>
                    </div>

                    <div>
                      <p className="text-base font-medium text-white">
                        {current.name}
                      </p>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                        {current.role}
                      </p>
                    </div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* counter */}
            <div className="mt-8 flex items-center gap-4 font-mono text-[11px] tracking-widest text-white/40">
              <span className="text-yellow-400">0{active + 1}</span>
              <span className="h-px w-12 bg-white/20" />
              <span>0{testimonials.length}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

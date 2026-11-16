"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/* gentler curve — ease-in-out, not snappy ease-out */
const EASE = [0.45, 0, 0.55, 1] as const;
const DURATION = 7000;

const testimonials = [
  {
    name: "Member Name",
    role: "Alumnus / Member · Placeholder",
    quote:
      "Testimonial text placeholder. A verified reflection from a current or former DUCSO member will appear here — describing their experience of fellowship, growth and community within the organization.",
  },
  {
    name: "Member Name",
    role: "Student Member · Placeholder",
    quote:
      "Testimonial text placeholder. Replace with an authentic, consented statement from a DUCSO student member reflecting on worship, Bible study or service.",
  },
  {
    name: "Member Name",
    role: "Former Committee Member · Placeholder",
    quote:
      "Testimonial text placeholder. Replace with a verified quote from a former executive committee member about leadership and discipleship at DUCSO.",
  },
];

const variants = {
  enter: (d: number) => ({
    opacity: 0,
    y: 12 * d,
  }),
  center: { opacity: 1, y: 0 },
  exit: (d: number) => ({
    opacity: 0,
    y: -12 * d,
  }),
};

const pad = (n: number) => String(n).padStart(2, "0");

const Testimonials = () => {
  const reduce = useReducedMotion();
  const [{ active, dir }, setSlide] = useState({ active: 0, dir: 1 });
  const [paused, setPaused] = useState(false);

  const go = useCallback((d: 1 | -1) => {
    setSlide((s) => ({
      active: (s.active + d + testimonials.length) % testimonials.length,
      dir: d,
    }));
  }, []);

  /* auto-advance */
  useEffect(() => {
    if (paused || reduce) return;
    const t = setTimeout(() => go(1), DURATION);
    return () => clearTimeout(t);
  }, [active, paused, reduce, go]);

  const current = testimonials[active];
  const custom = reduce ? 0 : dir;

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-navy py-[clamp(80px,10vw,150px)]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 md:px-8 lg:px-10">
        <div
          className="mx-auto max-w-[960px] text-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-8 inline-flex items-center gap-4 text-[.7rem] font-semibold uppercase tracking-[.3em] text-gold"
          >
            <span aria-hidden className="block h-px w-10 bg-gold" />
            Voices of DUCSO
            <span aria-hidden className="block h-px w-10 bg-gold" />
          </motion.p>

          {/* big serif quote mark */}
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="mb-6 block font-serif text-[clamp(5rem,10vw,8rem)] leading-[.55] text-gold"
          >
            &ldquo;
          </motion.span>

          {/* quote — reserved height so nothing jumps */}
          <div
            className="relative flex min-h-[clamp(260px,34vw,320px)] items-center justify-center"
            aria-live="polite"
          >
            <AnimatePresence mode="wait" custom={custom} initial={false}>
              <motion.figure
                key={active}
                custom={custom}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: reduce ? 0 : 1.1,
                  ease: EASE,
                }}
                className="m-0 w-full"
              >
                <blockquote className="m-0 text-balance font-serif text-[clamp(1.45rem,2.9vw,2.3rem)] font-light italic leading-[1.45] tracking-[-.005em] text-white">
                  {current.quote}
                </blockquote>

                <figcaption className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[.72rem] uppercase tracking-[.2em] text-white/70">
                  <span
                    aria-hidden
                    className="hidden h-px w-8 bg-gold sm:block"
                  />
                  <span className="font-semibold text-gold">
                    {current.name}
                  </span>
                  <span
                    aria-hidden
                    className="h-1 w-1 rounded-full bg-gold/70"
                  />
                  <span>{current.role}</span>
                  <span
                    aria-hidden
                    className="hidden h-px w-8 bg-gold sm:block"
                  />
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* nav */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="mt-[clamp(36px,4vw,56px)] flex items-center justify-center gap-7"
          >
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-transparent text-gold transition-all duration-300 hover:-translate-x-0.5 hover:border-gold hover:bg-gold hover:text-navy"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 3L5 8l5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <span className="min-w-[72px] text-center text-[.72rem] font-semibold uppercase tracking-[.26em] text-white/50">
              <span className="text-gold">{pad(active + 1)}</span>
              <span className="mx-2 text-white/30">/</span>
              {pad(testimonials.length)}
            </span>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-transparent text-gold transition-all duration-300 hover:translate-x-0.5 hover:border-gold hover:bg-gold hover:text-navy"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

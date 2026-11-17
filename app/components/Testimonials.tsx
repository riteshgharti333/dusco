"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Container from "./Container";

const EASE = [0.45, 0, 0.55, 1] as const;
const EASE_IN = [0.22, 1, 0.36, 1] as const;
const EASE_OUT = [0.4, 0, 0.9, 0.6] as const;
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
    y: 20 * d,
  }),
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_IN, delay: 0.1 },
  },
  exit: (d: number) => ({
    opacity: 0,
    y: -14 * d,
    transition: { duration: 0.4, ease: EASE_OUT },
  }),
};

const reducedVariants = {
  enter: { opacity: 0 },
  center: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_IN, delay: 0.1 },
  },
  exit: { opacity: 0, transition: { duration: 0.35, ease: EASE_OUT } },
};

const pad = (n: number) => String(n).padStart(2, "0");

type Testimonial = (typeof testimonials)[number];

const Slide = ({ t }: { t: Testimonial }) => (
  <>
    <blockquote className="m-0 text-balance font-serif text-[clamp(1.45rem,2.9vw,2.3rem)] font-light italic leading-[1.45] tracking-[-.005em] text-white">
      {t.quote}
    </blockquote>

    <figcaption className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[.72rem] uppercase tracking-[.2em] text-white/70">
      <span aria-hidden className="hidden h-px w-8 bg-gold sm:block" />
      <span className="font-semibold text-gold">{t.name}</span>
      <span aria-hidden className="h-1 w-1 rounded-full bg-gold/70" />
      <span>{t.role}</span>
      <span aria-hidden className="hidden h-px w-8 bg-gold sm:block" />
    </figcaption>
  </>
);

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
      <Container>
        <div
          className="mx-auto max-w-[960px] text-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
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

          <div className="grid items-center" aria-live="polite">
            {testimonials.map((t, i) => (
              <div
                key={i}
                aria-hidden
                className="pointer-events-none invisible col-start-1 row-start-1 select-none"
              >
                <Slide t={t} />
              </div>
            ))}

            <AnimatePresence mode="wait" custom={custom} initial={false}>
              <motion.figure
                key={active}
                custom={custom}
                variants={reduce ? reducedVariants : variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="col-start-1 row-start-1 m-0 w-full"
              >
                <Slide t={current} />
              </motion.figure>
            </AnimatePresence>
          </div>

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
      </Container>
    </section>
  );
};

export default Testimonials;

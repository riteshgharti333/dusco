"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const featured = {
  id: "featured",
  date: "Fri, 5 December 2026 · 6:00 PM",
  title: "Annual Christmas Carol Night",
  desc: "An evening of carols, scripture readings and shared dinner open to every student and alumnus of the University of Dhaka. Come with friends, bring a guest and celebrate the season together.",
  image:
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",
};

const events = [
  {
    id: "e1",
    day: "12",
    month: "Dec",
    title: "Friday Fellowship & Worship",
    venue: "TSC Auditorium, University of Dhaka",
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=700&q=80",
  },
  {
    id: "e2",
    day: "19",
    month: "Dec",
    title: "Bible Study Retreat",
    venue: "Savar Retreat Centre, Dhaka",
    image:
      "https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=700&q=80",
  },
  {
    id: "e3",
    day: "09",
    month: "Jan",
    title: "New Members Welcome Gathering",
    venue: "Curzon Hall Lawn, University of Dhaka",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80",
  },
];

const Arrow = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M1 8h13M9 3l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EventsSection = () => {
  return (
    <section
      id="events"
      className="relative w-full overflow-hidden bg-ivory py-[clamp(80px,10vw,150px)]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* ── HEADER ── */}
        <div className="mb-[clamp(44px,5.5vw,76px)] flex flex-wrap items-end justify-between gap-10">
          <div className="max-w-[680px]">
            <motion.p
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="mb-6 inline-flex items-center gap-4 text-[.7rem] font-semibold uppercase tracking-[.3em] text-gold"
            >
              <motion.span
                aria-hidden
                className="block h-px bg-gold"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE, delay: 0.15 }}
              />
              Events
            </motion.p>

            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.08 }}
              className="max-w-[20ch] font-serif text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal leading-[1.08] tracking-[-.015em] text-navy"
            >
              Gatherings, conferences and shared moments
            </motion.h2>

            <motion.p
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.16 }}
              className="mt-6 max-w-[58ch] text-[clamp(1rem,1.15vw,1.1rem)] leading-[1.85] text-grey-600"
            >
              From weekly fellowship to annual conferences, DUCSO&apos;s
              calendar is shaped around worship, learning and community.
            </motion.p>
          </div>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.24 }}
          >
            <Link
              href="/events"
              className="group mb-1 inline-flex items-center gap-3 border-b border-[rgba(185,145,73,0.38)] pb-[6px] text-[.75rem] font-semibold uppercase tracking-[.16em] text-navy no-underline transition-all duration-300 hover:gap-4 hover:border-gold hover:text-gold"
            >
              View all events
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Arrow />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* ── FEATURED EVENT ── */}
        <motion.article
          initial={{ y: 44, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: EASE, delay: 0.1 }}
          className="group/feat grid overflow-hidden border border-black/10 bg-ivory shadow-[0_1px_2px_rgba(7,24,43,0.05),0_14px_34px_-20px_rgba(7,24,43,0.3)] transition-shadow duration-500 hover:shadow-[0_2px_4px_rgba(7,24,43,0.06),0_34px_70px_-30px_rgba(7,24,43,0.45)] md:grid-cols-[1.1fr_.9fr]"
        >
          <div className="relative min-h-[clamp(280px,36vw,460px)] overflow-hidden bg-navy">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover [filter:grayscale(.22)_saturate(.92)_contrast(1.03)] transition-[transform,filter] duration-[1100ms] ease-out group-hover/feat:scale-[1.06] group-hover/feat:[filter:grayscale(0)_saturate(1)_contrast(1.03)]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/15 to-navy/35 mix-blend-multiply"
            />
          </div>

          <div className="flex flex-col justify-center p-[clamp(30px,4vw,60px)]">
            <p className="mb-5 flex flex-wrap items-center gap-3 text-[.68rem] font-semibold uppercase tracking-[.2em] text-gold">
              <span aria-hidden className="block h-px w-8 bg-gold" />
              <span>{featured.date}</span>
            </p>

            <h3 className="mb-5 font-serif text-[clamp(1.8rem,2.9vw,2.5rem)] font-normal leading-[1.15] tracking-[-.01em] text-navy">
              {featured.title}
            </h3>

            <p className="max-w-[44ch] text-[1rem] leading-[1.85] text-grey-600">
              {featured.desc}
            </p>

            <Link
              href={`/events/${featured.id}`}
              className="group mt-9 inline-flex w-fit items-center gap-3 rounded-sm border border-black/20 bg-transparent px-9 py-[1.05rem] text-[.75rem] font-semibold uppercase tracking-[.16em] text-navy no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-navy hover:bg-navy hover:text-white"
            >
              Event details
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Arrow />
              </span>
            </Link>
          </div>
        </motion.article>

        {/* ── EVENT CARDS ── */}
        <div className="mt-[clamp(28px,3.4vw,44px)] grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {events.map((ev, i) => (
            <motion.div
              key={ev.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.1 }}
              className="h-full"
            >
              <Link
                href={`/events/${ev.id}`}
                className="group relative flex h-full flex-col overflow-hidden border border-black/10 bg-ivory no-underline shadow-[0_1px_2px_rgba(7,24,43,0.05),0_14px_34px_-20px_rgba(7,24,43,0.3)]"
              >
                {/* shadow layer — fades in on hover (cheap, GPU-composited) */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-0 opacity-0 shadow-[0_2px_4px_rgba(7,24,43,0.06),0_24px_48px_-24px_rgba(7,24,43,0.35)] transition-opacity duration-300 ease-out group-hover:opacity-100"
                />

                {/* content wrapper — transform only, GPU layer */}
                <div className="relative z-[1] flex h-full flex-col transition-transform duration-300 ease-out will-change-transform group-hover:-translate-y-1.5">
                  {/* image + date badge */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                    <Image
                      src={ev.image}
                      alt={ev.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover [filter:grayscale(.22)_saturate(.92)_contrast(1.03)] transition-transform duration-[600ms] ease-out will-change-transform group-hover:scale-[1.05]"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/10 to-navy/30 mix-blend-multiply"
                    />
                    <div className="absolute left-4 top-4 flex min-w-[58px] flex-col items-center bg-ivory px-3 py-2.5 leading-none shadow-[0_10px_30px_-12px_rgba(7,24,43,0.5)]">
                      <span className="font-serif text-[1.6rem] text-navy">
                        {ev.day}
                      </span>
                      <span className="mt-1.5 text-[.6rem] font-semibold uppercase tracking-[.22em] text-gold">
                        {ev.month}
                      </span>
                    </div>
                  </div>

                  {/* body */}
                  <div className="flex flex-1 flex-col p-[clamp(22px,2.4vw,32px)]">
                    <h3 className="font-serif text-[clamp(1.3rem,1.9vw,1.65rem)] leading-[1.22] text-navy transition-colors duration-300 group-hover:text-gold">
                      {ev.title}
                    </h3>
                    <p className="mt-2 text-[.85rem] leading-[1.6] tracking-[.02em] text-grey-500">
                      {ev.venue}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-3 pt-7 text-[.72rem] font-semibold uppercase tracking-[.16em] text-navy transition-colors duration-300 group-hover:text-gold">
                      Event details
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <Arrow size={13} />
                      </span>
                    </span>
                  </div>
                </div>

                {/* gold line that draws on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-0 left-0 z-[2] h-[2px] w-full origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

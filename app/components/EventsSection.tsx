"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

const EASE = [0.22, 1, 0.36, 1] as const;

const CUT = 40;

const mainEvent = {
  id: 1,
  label: "Signature Night",
  season: "FALL",
  title: "Praise Night",
  desc: "An evening of worship, testimonies, and prayer — open to all students. Our largest gathering of the year.",
  highlight: "Worship",
  image:
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",
};

const sideEvents = [
  {
    id: 2,
    season: "WEEKLY",
    label: "Every Friday",
    title: "Bible Study",
    desc: "Deep dives into Scripture — verse by verse, question by question.",
    highlight: "Study",
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80",
  },
  {
    id: 3,
    season: "SEMESTER",
    label: "Outreach",
    title: "Campus Missions",
    desc: "Sharing hope, one conversation at a time — faith beyond the chapel.",
    highlight: "Service",
    image:
      "https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=800&q=80",
  },
];

const cutShape = `polygon(${CUT}px 0, 100% 0, 100% calc(100% - ${CUT}px), calc(100% - ${CUT}px) 100%, 0 100%, 0 ${CUT}px)`;
const cutShapeInner = `polygon(${CUT - 2}px 0, 100% 0, 100% calc(100% - ${CUT - 2}px), calc(100% - ${CUT - 2}px) 100%, 0 100%, 0 ${CUT - 2}px)`;

const EventsSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-blue-900 py-16 md:py-24">
      {/* Rotated side rail */}
      <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 md:block">
        <div className="flex h-full items-center justify-center">
          <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black uppercase tracking-[0.6em] text-white/50">
            Signature Moments · DUSCO
          </span>
        </div>
      </div>

      <div className="section-container">
        {/* ── HEADER ── */}
        <SectionHeader
          dark={true}
          label="Our Events"
          description="Four rhythms shape our year — worship, study, outreach, and celebration. Here's a glimpse into the moments that define DUSCO."
          title={
            <>
              THE NIGHTS
              <br />
              WE&apos;LL
              <br />
              <span className="relative inline-block">
                <span
                  aria-hidden
                  className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                />
                <span className="relative z-10 px-1 italic text-blue-900 uppercase">
                  remember.
                </span>
              </span>
            </>
          }
        />

        {/* ── MAIN EVENT ── */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="group/card relative mt-12 pr-2 pb-2 md:mt-16"
        >
          {/* Yellow shadow — fills the padded area (peeks 12px bottom-right) */}
          <span
            aria-hidden
            className="absolute inset-0 bg-yellow-400 ml-3 mt-3"
            style={{ clipPath: cutShape }}
          />

          {/* Card frame — sits inside the padding */}
          <div className="relative">
            <span
              aria-hidden
              className="absolute inset-0 bg-white"
              style={{ clipPath: cutShape }}
            />
            <div
              className="relative grid overflow-hidden bg-white md:grid-cols-12"
              style={{ clipPath: cutShapeInner }}
            >
              <div className="relative aspect-[16/9] md:col-span-6 md:aspect-auto md:min-h-[360px]">
                <Image
                  src={mainEvent.image}
                  alt={mainEvent.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                />
                <span className="absolute inset-0 bg-blue-900/25 mix-blend-multiply" />

                <div className="absolute left-6 top-6 bg-yellow-400 px-3 py-1.5 -skew-x-[20deg] shadow-[3px_3px_0_0_#1e3a8a]">
                  <span className="block text-[9px] font-black uppercase tracking-[0.25em] text-blue-900 skew-x-[20deg]">
                    {mainEvent.label}
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 md:col-span-6 md:p-8">
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-yellow-600">
                  {mainEvent.season}
                </span>

                <h3 className="mt-2 text-2xl font-black leading-[1.05] text-blue-900 md:text-3xl">
                  {mainEvent.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-blue-900/70">
                  {mainEvent.desc}
                </p>

                <div className="mt-5 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-blue-900/60">
                  <span className="h-[2px] w-5 bg-yellow-400" />
                  {mainEvent.highlight}
                </div>

                <Button
                  href={`/events/${mainEvent.id}`}
                  variant="secondary"
                  size="sm"
                  onBlue={false}
                  className="mt-6 w-fit"
                >
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── SIDE EVENTS ── */}
        <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2 md:gap-8">
          {sideEvents.map((ev, i) => (
            <motion.div
              key={ev.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 + i * 0.12 }}
              className="group/card relative pr-2 pb-2"
            >
              {/* Yellow shadow — fills the padded area */}
              <span
                aria-hidden
                className="absolute inset-0 bg-yellow-400 ml-3 mt-3"
                style={{ clipPath: cutShape }}
              />

              {/* Card frame — sits inside the padding */}
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute inset-0 bg-white"
                  style={{ clipPath: cutShape }}
                />
                <div
                  className="relative overflow-hidden bg-white"
                  style={{ clipPath: cutShapeInner }}
                >
                  <div className="relative aspect-[16/7] w-full overflow-hidden">
                    <Image
                      src={ev.image}
                      alt={ev.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                    <span className="absolute inset-0 bg-blue-900/25 mix-blend-multiply" />

                    <div className="absolute left-5 top-5 bg-yellow-400 px-3 py-1.5 -skew-x-[20deg] shadow-[3px_3px_0_0_#1e3a8a]">
                      <span className="block text-[9px] font-black uppercase tracking-widest text-blue-900 skew-x-[20deg]">
                        {ev.season}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-xl font-black leading-tight text-blue-900 transition-colors duration-300 group-hover/card:text-yellow-600 md:text-2xl">
                        {ev.title}
                      </h3>
                      <span className="shrink-0 text-[9px] font-black uppercase tracking-[0.25em] text-blue-900/40">
                        {ev.label}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-blue-900/60">
                      {ev.desc}
                    </p>

                    <div className="mt-4 flex items-center justify-between border-t border-blue-900/10 pt-4">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-blue-900/50">
                        <span className="h-[2px] w-4 bg-yellow-400" />
                        {ev.highlight}
                      </div>

                      <Link
                        href={`/events/${ev.id}`}
                        className="group/link inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-blue-900 transition-colors hover:text-yellow-600"
                      >
                        Details
                        <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t-2 border-white/20 pt-8"
        >
          <p className="text-sm leading-relaxed text-white/60">
            Every moment is a chance to encounter God — and each other.
          </p>

          <Button
            href="/events"
            variant="primary"
            size="sm"
            onBlue={true}
            className="relative z-10"
          >
            See All Events
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
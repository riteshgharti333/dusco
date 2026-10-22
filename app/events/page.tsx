"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── HIGHLIGHT EVENT ─── */
const highlightEvent = {
  id: 1,
  title: "Praise Night",
  tag: "Worship",
  season: "SIGNATURE NIGHT",
  description:
    "An evening of worship, testimonies, and prayer — open to all students. Our largest gathering of the year, where the whole campus worships as one voice.",
  longDescription:
    "The biggest worship night of the year. Expect powerful live worship, student testimonies, and a message that will challenge and inspire you. This is where the DUCSO family comes together as one voice — students from every faculty, every background, lifting one song.",
  image:
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80",
};

/* ─── OTHER EVENTS ─── */
const otherEvents = [
  {
    id: 2,
    title: "Bible Study",
    tag: "Study",
    season: "WEEKLY",
    description:
      "Deep dives into Scripture — verse by verse, question by question. A space to ask, wrestle, and grow together in the Word.",
    longDescription:
      "We dig into Scripture together — verse by verse, question by question. Whether you're a lifelong Christian or just curious, this is a safe space to ask, wrestle, and grow.",
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200&q=80",
  },
  {
    id: 3,
    title: "Campus Outreach",
    tag: "Service",
    season: "SEMESTER",
    description:
      "Sharing hope, one conversation at a time. We take faith beyond the chapel — into dorms, cafeterias, and the streets of our city.",
    longDescription:
      "We take faith beyond the chapel — into dorms, cafeterias, and the streets of our city. Serving the campus with free hot drinks, offering prayer, and having real conversations about faith.",
    image:
      "https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=1200&q=80",
  },
  {
    id: 4,
    title: "Small Groups",
    tag: "Community",
    season: "WEEKLY",
    description:
      "Doing life together in smaller circles — shared meals, honest conversations, and friendships that go beyond Sunday.",
    longDescription:
      "Small groups are where community really happens. A few students, one leader, one evening a week — sharing a meal, opening Scripture, and carrying each other's burdens.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80",
  },
  {
    id: 5,
    title: "Christmas Carol Night",
    tag: "Special",
    season: "WINTER",
    description:
      "Carols, cocoa, and community — our most beloved night of the year. A celebration of the birth of Christ with the whole DUCSO family.",
    longDescription:
      "Carols, cocoa, candlelight, and the story of the first Christmas. Invite your friends — everyone is welcome to celebrate the birth of Christ with us.",
    image:
      "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1200&q=80",
  },
];

type EventType = typeof highlightEvent;

/* column spans for the staggered 12-col mosaic */
const SPANS = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
];

/* ═══════════════════════════════════════════════
   FEATURED — cinematic full-width frame
═══════════════════════════════════════════════ */
const Featured = ({
  event,
  onClick,
}: {
  event: EventType;
  onClick: () => void;
}) => (
  <motion.button
    type="button"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.9, ease: EASE }}
    onClick={onClick}
    className="group relative block h-[540px] w-full overflow-hidden bg-blue-900 text-left md:h-[680px]"
  >
    <Image
      src={event.image}
      alt={event.title}
      fill
      sizes="100vw"
      className="object-cover transition-transform duration-[1600ms] group-hover:scale-105"
    />
    <span className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-blue-950/30" />

    {/* top row */}
    <div className="absolute inset-x-6 top-6 flex items-center justify-between md:inset-x-10 md:top-10">
      <span className="text-[11px] font-black uppercase tracking-[0.28em] text-yellow-400">
        {event.season}
      </span>
      <span className="border-2 border-white/70 px-3 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-white">
        {event.tag}
      </span>
    </div>

    {/* bottom: giant title + description */}
    <div className="absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10">
      <h3 className="text-6xl font-black leading-[0.85] tracking-tighter text-white sm:text-7xl md:text-[9rem]">
        {event.title}
        <span className="text-yellow-400">.</span>
      </h3>

      <div className="mt-8 flex flex-col gap-6 border-t-2 border-white/25 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="max-w-lg text-sm leading-relaxed text-white/80">
          {event.description}
        </p>
        <span className="flex shrink-0 items-center gap-4 text-[11px] font-black uppercase tracking-[0.28em] text-white">
          View Event
          <span className="flex h-11 w-11 items-center justify-center bg-yellow-400 text-blue-900 transition-transform duration-500 group-hover:translate-x-2">
            →
          </span>
        </span>
      </div>
    </div>
  </motion.button>
);

/* ═══════════════════════════════════════════════
   MOSAIC TILE
═══════════════════════════════════════════════ */
const Tile = ({
  event,
  index,
  onClick,
}: {
  event: EventType;
  index: number;
  onClick: () => void;
}) => (
  <motion.button
    type="button"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.8, ease: EASE, delay: (index % 2) * 0.1 }}
    onClick={onClick}
    className={`group relative block h-[400px] w-full overflow-hidden bg-blue-900 text-left md:h-[460px] ${SPANS[index]}`}
  >
    <Image
      src={event.image}
      alt={event.title}
      fill
      sizes="(min-width: 768px) 60vw, 100vw"
      className="object-cover transition-transform duration-1000 group-hover:scale-105"
    />
    <span className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />

    {/* number + tag */}
    <div className="absolute inset-x-5 top-5 flex items-center justify-between">
      <span className="font-mono text-[11px] font-bold tracking-widest text-white">
        0{index + 2}
      </span>
      <span className="bg-yellow-400 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-blue-900">
        {event.tag}
      </span>
    </div>

    {/* title (slides up out of the way on hover) */}
    <div className="absolute inset-x-5 bottom-5 transition-all duration-500 group-hover:translate-y-6 group-hover:opacity-0">
      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow-400">
        {event.season}
      </p>
      <h4 className="mt-2 text-3xl font-black leading-tight tracking-tight text-white md:text-4xl">
        {event.title}
        <span className="text-yellow-400">.</span>
      </h4>
    </div>

    {/* white sheet that rises on hover */}
    <div className="absolute inset-x-0 bottom-0 translate-y-full bg-white p-6 transition-transform duration-500 ease-out group-hover:translate-y-0 max-md:hidden">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h4 className="text-2xl font-black leading-tight tracking-tight text-blue-900 md:text-3xl">
            {event.title}
            <span className="text-yellow-400">.</span>
          </h4>
          <p className="mt-3 line-clamp-3 max-w-md text-sm leading-relaxed text-blue-900/65">
            {event.description}
          </p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-yellow-400 text-blue-900">
          →
        </span>
      </div>
    </div>
  </motion.button>
);

/* ═══════════════════════════════════════════════
   EVENT MODAL
═══════════════════════════════════════════════ */
const EventModal = ({
  event,
  onClose,
}: {
  event: EventType;
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    onClick={onClose}
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-blue-950/85 p-4 backdrop-blur-sm"
    role="dialog"
    aria-modal="true"
    aria-label={event.title}
  >
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 40, opacity: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      onClick={(e) => e.stopPropagation()}
      className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-white scrollbar-hide md:grid md:grid-cols-2"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center bg-yellow-400 text-blue-900 transition-transform hover:rotate-90"
      >
        ✕
      </button>

      <div className="relative aspect-[4/3] w-full bg-blue-900 md:aspect-auto md:min-h-[520px]">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(min-width: 768px) 420px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center p-6 md:p-12">
        <span className="text-[11px] font-black uppercase tracking-[0.28em] text-yellow-600">
          {event.tag} · {event.season}
        </span>
        <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight text-blue-900 md:text-5xl">
          {event.title}
          <span className="text-yellow-400">.</span>
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-blue-900/70 md:text-base">
          {event.longDescription}
        </p>
        <div className="mt-10">
          <Button href="/join" variant="secondary" size="md" onBlue={false}>
            Get Involved
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

/* ═══════════════════════════════════════════════
   MAIN EVENTS PAGE
═══════════════════════════════════════════════ */
export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  useEffect(() => {
    if (!selectedEvent) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedEvent(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedEvent]);

  return (
    <main className="flex flex-col">
      <PageBanner
        label="Signature Moments"
        titleFirst="OUR"
        titleSecond="EVENTS"
        description="From loud worship nights to quiet Bible studies, there's always a place for you at DUCSO. These are the moments that define who we are."
        image="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1400&q=80"
      />

      <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 md:block">
          <div className="flex h-full items-center justify-center">
            <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black uppercase tracking-[0.6em] text-blue-900/30">
              Signature Events · DUCSO
            </span>
          </div>
        </div>
        <div className="section-container">
          <SectionHeader
            dark={false}
            label="Our Best"
            description="These are the rhythms that shape our year — worship, study, service, community, and celebration. Each one is a doorway into the life of DUCSO."
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
                  <span className="relative z-10 px-1 italic uppercase text-blue-900">
                    remember.
                  </span>
                </span>
              </>
            }
          />

          {/* Featured */}
          <div className="mt-16 md:mt-24">
            <Featured
              event={highlightEvent}
              onClick={() => setSelectedEvent(highlightEvent)}
            />
          </div>

          {/* Mosaic */}
          <div className="mt-3 grid gap-3 md:grid-cols-12">
            {otherEvents.map((event, i) => (
              <Tile
                key={event.id}
                event={event}
                index={i}
                onClick={() => setSelectedEvent(event)}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import Container from "../components/Container";
import Button, { Arrow } from "../components/Button";

const EASE = [0.22, 1, 0.36, 1] as const;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-[1.35rem] inline-flex items-center gap-3 text-[.685rem] font-semibold uppercase tracking-[.26em] text-gold">
    <span aria-hidden className="block h-px w-9 bg-gold" />
    {children}
  </p>
);

const highlightEvent = {
  id: 1,
  title: "Praise Night",
  tag: "Worship",
  season: "Signature Night",
  description:
    "An evening of worship, testimonies, and prayer — open to all students. Our largest gathering of the year, where the whole campus worships as one voice.",
  longDescription:
    "The biggest worship night of the year. Expect powerful live worship, student testimonies, and a message that will challenge and inspire you. This is where the DUCSO family comes together as one voice — students from every faculty, every background, lifting one song.",
  image:
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80",
};

const otherEvents = [
  {
    id: 2,
    title: "Bible Study",
    tag: "Study",
    season: "Weekly",
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
    season: "Semester",
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
    season: "Weekly",
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
    season: "Winter",
    description:
      "Carols, cocoa, and community — our most beloved night of the year. A celebration of the birth of Christ with the whole DUCSO family.",
    longDescription:
      "Carols, cocoa, candlelight, and the story of the first Christmas. Invite your friends — everyone is welcome to celebrate the birth of Christ with us.",
    image:
      "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1200&q=80",
  },
];

type EventType = typeof highlightEvent;

const SPANS = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
];

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
    className="group relative block h-[540px] w-full overflow-hidden bg-navy text-left md:h-[680px]"
  >
    <Image
      src={event.image}
      alt={event.title}
      fill
      sizes="100vw"
      className="object-cover [filter:grayscale(.25)_saturate(.9)_contrast(1.04)] transition-transform duration-[1400ms] ease-out group-hover:scale-105"
    />
    <span className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-navy/40" />
    <span
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
    />

    <div className="absolute inset-x-6 top-6 flex items-center justify-between md:inset-x-10 md:top-10">
      <span className="text-[.66rem] font-semibold uppercase tracking-[.28em] text-gold">
        {event.season}
      </span>
      <span className="border border-white/30 bg-white/5 px-3 py-1 text-[.6rem] font-semibold uppercase tracking-[.28em] text-white backdrop-blur-md">
        {event.tag}
      </span>
    </div>

    <div className="absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10">
      <h3 className="font-serif text-[clamp(3rem,7vw,5.6rem)] font-normal leading-[0.95] tracking-[-.02em] text-white">
        {event.title}
        <span className="text-gold">.</span>
      </h3>

      <div className="mt-8 flex flex-col gap-6 border-t border-white/20 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="max-w-lg text-[.95rem] leading-[1.78] text-white/75">
          {event.description}
        </p>
        <span className="flex shrink-0 items-center gap-4 text-[.66rem] font-semibold uppercase tracking-[.28em] text-white">
          View Event
          <span className="flex h-11 w-11 items-center justify-center border border-gold/50 text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-navy">
            <Arrow size={13} />
          </span>
        </span>
      </div>
    </div>
  </motion.button>
);

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
    className={`group relative block h-[400px] w-full overflow-hidden bg-navy text-left md:h-[460px] ${SPANS[index]}`}
  >
    <Image
      src={event.image}
      alt={event.title}
      fill
      sizes="(min-width: 768px) 60vw, 100vw"
      className="object-cover [filter:grayscale(.22)_saturate(.92)_contrast(1.03)] transition-transform duration-[1200ms] ease-out group-hover:scale-105"
    />
    <span className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />

    <div className="absolute inset-x-5 top-5 flex items-center justify-between">
      <span className="font-serif text-[.9rem] tracking-[.16em] text-white/80">
        0{index + 2}
      </span>
      <span className="border border-gold/40 bg-gold/10 px-2.5 py-1 text-[.58rem] font-semibold uppercase tracking-[.24em] text-gold backdrop-blur-sm">
        {event.tag}
      </span>
    </div>

    <div className="absolute inset-x-5 bottom-5 transition-all duration-500 group-hover:translate-y-6 group-hover:opacity-0">
      <p className="text-[.6rem] font-semibold uppercase tracking-[.28em] text-gold">
        {event.season}
      </p>
      <h4 className="mt-2 font-serif text-[clamp(1.6rem,2.4vw,2rem)] font-normal leading-[1.15] tracking-[-.01em] text-white">
        {event.title}
        <span className="text-gold">.</span>
      </h4>
    </div>

    <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ivory p-6 transition-transform duration-500 ease-out group-hover:translate-y-0 max-md:hidden">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h4 className="font-serif text-[1.4rem] leading-[1.2] tracking-[-.01em] text-navy">
            {event.title}
            <span className="text-gold">.</span>
          </h4>
          <p className="mt-3 line-clamp-3 max-w-md text-[.88rem] leading-[1.7] text-grey-600">
            {event.description}
          </p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/40 text-gold">
          <Arrow size={13} />
        </span>
      </div>
    </div>
  </motion.button>
);

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
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-sm"
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
      className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-black/10 bg-ivory scrollbar-hide md:grid md:grid-cols-2"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center border border-gold/40 bg-ivory/90 text-gold backdrop-blur-sm transition-all hover:border-gold hover:bg-gold hover:text-navy"
      >
        ✕
      </button>

      <div className="relative aspect-[4/3] w-full bg-navy md:aspect-auto md:min-h-[520px]">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(min-width: 768px) 420px, 100vw"
          className="object-cover [filter:grayscale(.22)_saturate(.92)_contrast(1.03)]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"
        />
      </div>

      <div className="flex flex-col justify-center p-6 md:p-12">
        <p className="text-[.66rem] font-semibold uppercase tracking-[.26em] text-gold">
          {event.tag} · {event.season}
        </p>
        <h2 className="mt-4 font-serif text-[clamp(2rem,3.4vw,2.9rem)] font-normal leading-[1.08] tracking-[-.015em] text-navy">
          {event.title}
          <span className="text-gold">.</span>
        </h2>
        <p className="mt-6 text-[.95rem] leading-[1.78] text-grey-600 md:text-base">
          {event.longDescription}
        </p>
        <div className="mt-10">
          <Button href="/join" variant="primary" size="md">
            Get Involved
            <Arrow />
          </Button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

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

      <section className="relative w-full overflow-hidden bg-ivory py-[clamp(72px,9vw,132px)]">
        <Container>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-[clamp(40px,5vw,68px)] flex flex-wrap items-end justify-between gap-10"
          >
            <div className="max-w-[660px]">
              <Eyebrow>Our Best</Eyebrow>
              <h2 className="max-w-[20ch] font-serif text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal leading-[1.08] tracking-[-.015em] text-navy">
                The nights we&apos;ll{" "}
                <em className="italic text-gold">remember.</em>
              </h2>
            </div>
            <p className="max-w-[34ch] text-[clamp(1rem,1.15vw,1.09rem)] leading-[1.78] text-grey-600">
              These are the rhythms that shape our year — worship, study,
              service, community, and celebration.
            </p>
          </motion.div>

          <Featured
            event={highlightEvent}
            onClick={() => setSelectedEvent(highlightEvent)}
          />

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
        </Container>
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

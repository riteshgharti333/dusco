"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import Container from "../components/Container";
import ArrowButton from "../components/ArrowButton";

const EASE = [0.22, 1, 0.36, 1] as const;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-[1.35rem] inline-flex items-center gap-3 text-[.685rem] font-semibold uppercase tracking-[.26em] text-gold">
    <span aria-hidden className="block h-px w-9 bg-gold" />
    {children}
  </p>
);

const alumni = [
  {
    id: 1,
    name: "Joel Rozario",
    role: "Software Engineer",
    session: "2020–21",
    batch: "Batch of 2024",
    department: "Computer Science & Engineering",
    designation: "Former President",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    id: 2,
    name: "Sarah J. Mondol",
    role: "Medical Student",
    session: "2019–20",
    batch: "Batch of 2023",
    department: "Medicine",
    designation: "Former Worship Lead",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  },
  {
    id: 3,
    name: "David M. Tripura",
    role: "Civil Engineer",
    session: "2020–21",
    batch: "Batch of 2023",
    department: "Civil Engineering",
    designation: "Former General Secretary",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    id: 4,
    name: "Priya K. Chakma",
    role: "Graphic Designer",
    session: "2018–19",
    batch: "Batch of 2022",
    department: "Fine Arts",
    designation: "Former Creative Lead",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
  },
  {
    id: 5,
    name: "Samuel Gomes",
    role: "Teacher",
    session: "2020–21",
    batch: "Batch of 2022",
    department: "English Literature",
    designation: "Former Outreach Lead",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
  {
    id: 6,
    name: "Ruth N. Marma",
    role: "Psychologist",
    session: "2019–20",
    batch: "Batch of 2021",
    department: "Psychology",
    designation: "Former Care Lead",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
  },
  {
    id: 7,
    name: "Daniel S. Baroi",
    role: "Pastor",
    session: "2018–19",
    batch: "Batch of 2021",
    department: "Theology",
    designation: "Former Prayer Lead",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  },
  {
    id: 8,
    name: "Esther T. Sangma",
    role: "Doctor",
    session: "2019–20",
    batch: "Batch of 2020",
    department: "Medicine",
    designation: "Former Vice President",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    id: 9,
    name: "Abigail Rozario",
    role: "Architect",
    session: "2020–21",
    batch: "Batch of 2024",
    department: "Architecture",
    designation: "Former Member",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    id: 10,
    name: "Barnabas Hembrom",
    role: "Teacher",
    session: "2018–19",
    batch: "Batch of 2022",
    department: "Mathematics",
    designation: "Former Member",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
];

type Alumnus = (typeof alumni)[0];

const AlumniCard = ({ person }: { person: Alumnus }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: EASE }}
    className="group relative flex flex-col"
  >
    <div className="relative aspect-[3/4] w-full overflow-hidden bg-navy">
      <Image
        src={person.image}
        alt={person.name}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover [filter:grayscale(.22)_saturate(.92)_contrast(1.03)] transition-all duration-700 group-hover:scale-[1.04] group-hover:[filter:grayscale(0)_saturate(1)_contrast(1.03)]"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-navy/70 to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/40 to-transparent"
      />

      <span className="absolute right-4 top-4 bg-navy px-2.5 py-1 text-[.55rem] font-semibold uppercase tracking-[.22em] text-gold shadow-[0_4px_14px_-6px_rgba(7,24,43,0.6)]">
        {person.batch}
      </span>
    </div>

    <div className="flex flex-col gap-1 border-t border-black/10 bg-ivory pt-4">
      <h3 className="font-serif text-[1.15rem] leading-[1.25] text-navy transition-colors duration-300 group-hover:text-gold">
        {person.name}
      </h3>
      <p className="text-[.6rem] font-semibold uppercase tracking-[.24em] text-gold">
        {person.role}
      </p>
      <p className="mt-1 text-[.62rem] uppercase tracking-[.18em] text-grey-500">
        {person.department}
      </p>
      <p className="text-[.6rem] uppercase tracking-[.18em] text-grey-400">
        {person.designation}
      </p>
      <span
        aria-hidden
        className="mt-3 block h-px w-7 bg-black/20 transition-[width,background] duration-500 group-hover:w-12 group-hover:bg-gold"
      />
    </div>
  </motion.div>
);

export default function AlumniPage() {
  const sessions = useMemo(() => {
    const unique = Array.from(new Set(alumni.map((a) => a.session)));
    return unique.sort().reverse();
  }, []);

  const [activeSession, setActiveSession] = useState<string>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = alumni.filter((a) => {
      const matchesSession =
        activeSession === "all" || a.session === activeSession;
      if (!matchesSession) return false;
      if (!q) return true;
      return (
        a.name.toLowerCase().includes(q) ||
        a.department.toLowerCase().includes(q) ||
        a.role.toLowerCase().includes(q)
      );
    });
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }, [activeSession, query]);

  return (
    <main className="flex flex-col">
      <PageBanner
        label="Our Legacy"
        titleFirst="OUR"
        titleSecond="ALUMNI"
        description="They walked these halls before you. Meet the men and women who were shaped by DUCSO — and now carry that same faith into the world."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80"
      />

      <section className="relative w-full overflow-hidden bg-ivory py-[clamp(72px,9vw,132px)]">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 h-full w-96 -skew-x-[20deg] bg-gold/[0.05]"
        />

        <Container className="relative">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-[clamp(40px,5vw,68px)] flex flex-wrap items-end justify-between gap-10"
          >
            <div className="max-w-[660px]">
              <Eyebrow>Wall of Witnesses</Eyebrow>
              <h2 className="max-w-[20ch] font-serif text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal leading-[1.08] tracking-[-.015em] text-navy">
                Those who went <em className="italic text-gold">before.</em>
              </h2>
            </div>
            <p className="max-w-[34ch] text-[clamp(1rem,1.15vw,1.09rem)] leading-[1.78] text-grey-600">
              Eight stories. Eight testimonies of what God did during their time
              at DUCSO — and what He&apos;s still doing through them.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
            className="mb-6"
          >
            <div className="relative max-w-[480px]">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-grey-500"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, department, or role…"
                aria-label="Search alumni"
                className="w-full border border-black/15 bg-ivory px-11 py-3 text-[.9rem] text-navy placeholder:text-grey-500 focus:border-gold focus:outline-none focus:ring-0"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[.66rem] font-semibold uppercase tracking-[.24em] text-gold hover:text-navy"
                >
                  Clear
                </button>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="mb-10 border-y border-black/10"
          >
            <div className="flex flex-wrap items-center gap-1 py-2">
              <button
                type="button"
                onClick={() => setActiveSession("all")}
                className={`relative px-4 py-2 text-[.66rem] font-semibold uppercase tracking-[.24em] transition-colors ${
                  activeSession === "all"
                    ? "text-navy"
                    : "text-grey-500 hover:text-navy"
                }`}
              >
                All
                {activeSession === "all" && (
                  <span
                    aria-hidden
                    className="absolute inset-x-4 bottom-0 h-px bg-gold"
                  />
                )}
              </button>

              {sessions.map((session) => (
                <button
                  key={session}
                  type="button"
                  onClick={() => setActiveSession(session)}
                  className={`relative px-4 py-2 text-[.66rem] font-semibold uppercase tracking-[.24em] transition-colors ${
                    activeSession === session
                      ? "text-navy"
                      : "text-grey-500 hover:text-navy"
                  }`}
                >
                  {session}
                  {activeSession === session && (
                    <span
                      aria-hidden
                      className="absolute inset-x-4 bottom-0 h-px bg-gold"
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          <p className="mb-6 text-[.62rem] font-semibold uppercase tracking-[.24em] text-grey-500">
            {filtered.length} {filtered.length === 1 ? "Alumnus" : "Alumni"}
            {activeSession !== "all" && (
              <>
                {" "}
                · Session <span className="text-gold">{activeSession}</span>
              </>
            )}
            {query && (
              <>
                {" "}
                · matching <span className="text-gold">&ldquo;{query}&rdquo;</span>
              </>
            )}
          </p>

          <motion.div
            layout
            className="grid grid-cols-1 gap-[clamp(24px,3vw,36px)] sm:grid-cols-2 lg:grid-cols-4"
          >
            {filtered.map((person) => (
              <AlumniCard key={person.id} person={person} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="border-y border-black/10 py-16 text-center">
              <p className="font-serif text-[1.2rem] italic text-grey-600">
                No alumni found for this search.
              </p>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-black/10 pt-8"
          >
            <p className="max-w-[62ch] text-[.95rem] italic leading-[1.78] text-grey-600">
              &ldquo;Faith was never meant to stay on campus — it was meant to
              go with us.&rdquo;
            </p>
            <ArrowButton href="/contact">Share your story</ArrowButton>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
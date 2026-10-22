"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import SectionHeader from "../components/SectionHeader";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── Alumni data ─── */
const alumni = [
  {
    id: 1,
    name: "Joel Rozario",
    role: "Software Engineer",
    batch: "Batch of 2024",
    designation: "Former President",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    id: 2,
    name: "Sarah J. Mondol",
    role: "Medical Student",
    batch: "Batch of 2023",
    designation: "Former Worship Lead",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  },
  {
    id: 3,
    name: "David M. Tripura",
    role: "Civil Engineer",
    batch: "Batch of 2023",
    designation: "Former General Secretary",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    id: 4,
    name: "Priya K. Chakma",
    role: "Graphic Designer",
    batch: "Batch of 2022",
    designation: "Former Creative Lead",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
  },
  {
    id: 5,
    name: "Samuel Gomes",
    role: "Teacher",
    batch: "Batch of 2022",
    designation: "Former Outreach Lead",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
  {
    id: 6,
    name: "Ruth N. Marma",
    role: "Psychologist",
    batch: "Batch of 2021",
    designation: "Former Care Lead",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
  },
  {
    id: 7,
    name: "Daniel S. Baroi",
    role: "Pastor",
    batch: "Batch of 2021",
    designation: "Former Prayer Lead",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  },
  {
    id: 8,
    name: "Esther T. Sangma",
    role: "Doctor",
    batch: "Batch of 2020",
    designation: "Former Vice President",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
];

type Alumnus = (typeof alumni)[0];

/* ═══════════════════════════════════════════════
   ALUMNI CARD — no border, no shadow, no modal
═══════════════════════════════════════════════ */
const AlumniCard = ({ person, index }: { person: Alumnus; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: EASE, delay: (index % 3) * 0.1 }}
      className="group relative w-full"
    >
      {/* Image (no border, fills full width) */}
      <div className="relative aspect-[4/5] w-full max-w-[260px] m-auto overflow-hidden bg-blue-900">
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />

        {/* Archival number — top left */}
        <div className="absolute left-4 top-4">
          <span className="font-mono text-[10px] font-bold tracking-widest text-white/80">
            No. {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Batch chip — top right */}
        <div className="absolute right-4 top-4">
          <span className="bg-yellow-400 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.25em] text-blue-900">
            {person.batch}
          </span>
        </div>
      </div>

      {/* Slanted Name & Role tags — below image */}
      <div className="mt-6 flex flex-col items-center gap-2">
        {/* Name Tag */}
        <div className="flex -skew-x-[20deg] bg-blue-900 px-5 py-1">
          <span className="skew-x-[20deg] text-lg font-black uppercase tracking-wide text-white md:text-xl">
            {person.name}
          </span>
        </div>

        {/* Role Tag */}
        <div className="flex -skew-x-[20deg] bg-yellow-400 px-5 py-1">
          <span className="skew-x-[20deg] text-lg font-black uppercase tracking-wide text-blue-900 md:text-xl">
            {person.role}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════
   MAIN ALUMNI PAGE
═══════════════════════════════════════════════ */
export default function AlumniPage() {
  return (
    <main className="flex flex-col">
      <PageBanner
        label="Our Legacy"
        titleFirst="OUR"
        titleSecond="ALUMNI"
        description="They walked these halls before you. Meet the men and women who were shaped by DUCSO — and now carry that same faith into the world."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80"
      />

      {/* ═════════ MAIN SECTION ═════════ */}
      <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
        {/* Rotated side rail */}
        <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 md:block">
          <div className="flex h-full items-center justify-center">
            <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black uppercase tracking-[0.6em] text-blue-900/30">
              Alumni · DUCSO
            </span>
          </div>
        </div>

        {/* Slanted yellow accent */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 h-full w-96 bg-yellow-400/[0.06] -skew-x-[20deg]"
        />

        <div className="section-container relative">
          <SectionHeader
            dark={false}
            label="Wall of Witnesses"
            description="Eight stories. Eight testimonies of what God did during their time at DUCSO — and what He's still doing through them."
            title={
              <>
                THOSE WHO
                <br />
                WENT
                <br />
                <span className="relative inline-block">
                  <span
                    aria-hidden
                    className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                  />
                  <span className="relative z-10 px-1 italic uppercase text-blue-900">
                    before.
                  </span>
                </span>
              </>
            }
          />

          {/* Alumni grid */}
          <div className="mt-16 grid gap-8 md:mt-24 md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-3">
            {alumni.map((person, i) => (
              <AlumniCard key={person.id} person={person} index={i} />
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t-2 border-blue-900/10 pt-8"
          >
            <p className="text-sm italic text-blue-900/55">
              &ldquo;Faith was never meant to stay on campus — it was meant to
              go with us.&rdquo;
            </p>
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow-600">
              — DUCSO Alumni · 2020–24
            </span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

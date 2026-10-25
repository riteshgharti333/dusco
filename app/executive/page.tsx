"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import SectionHeader from "../components/SectionHeader";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── Executive Committee data ─── */
const team = [
  {
    id: 1,
    name: "Payel Paul Mrong",
    role: "President",
    batch: "2026–27 Term",
    designation: "Head of Committee",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    id: 2,
    name: "Ronald Aurunavo Das",
    role: "General Secretary",
    batch: "2026–27 Term",
    designation: "Administration",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    id: 3,
    name: "Liton Tripura",
    role: "Organising Secretary",
    batch: "2026–27 Term",
    designation: "Operations",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    id: 4,
    name: "Sarah J. Mondol",
    role: "Worship Lead",
    batch: "2026–27 Term",
    designation: "Worship & Music",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  },
  {
    id: 5,
    name: "David M. Tripura",
    role: "Outreach Lead",
    batch: "2026–27 Term",
    designation: "Campus & City",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
  {
    id: 6,
    name: "Priya K. Chakma",
    role: "Creative Lead",
    batch: "2026–27 Term",
    designation: "Design & Media",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
  },
  {
    id: 7,
    name: "Samuel Gomes",
    role: "Prayer Lead",
    batch: "2026–27 Term",
    designation: "Intercession",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  },
  {
    id: 8,
    name: "Ruth N. Marma",
    role: "Care Lead",
    batch: "2026–27 Term",
    designation: "Community Care",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
  },
];

type TeamMember = (typeof team)[0];

/* ═══════════════════════════════════════════════
   TEAM CARD — no border, no shadow, no modal
═══════════════════════════════════════════════ */
const TeamCard = ({ person, index }: { person: TeamMember; index: number }) => {
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
   MAIN TEAM PAGE
═══════════════════════════════════════════════ */
export default function TeamPage() {
  return (
    <main className="flex flex-col">
      <PageBanner
        label="Meet the Team"
        titleFirst="OUR"
        titleSecond="TEAM"
        description="The students leading DUCSO this year — with hearts for God and hands for the campus. Meet the 2026–27 Executive Committee."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80"
      />

      {/* ═════════ MAIN SECTION ═════════ */}
      <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
        {/* Rotated side rail */}
        <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 md:block">
          <div className="flex h-full items-center justify-center">
            <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black uppercase tracking-[0.6em] text-blue-900/30">
              Executive Committee · DUCSO
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
            label="Leadership"
            description="Eight students. One mission. Meet the leaders serving DUCSO for the 2026–2027 term — each with a heart for God and a role to serve the community."
            title={
              <>
                THE
                <br />
                EXECUTIVE
                <br />
                <span className="relative inline-block">
                  <span
                    aria-hidden
                    className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                  />
                  <span className="relative z-10 px-1 italic uppercase text-blue-900">
                    committee.
                  </span>
                </span>
              </>
            }
          />

          {/* Team grid */}
          <div className="mt-16 grid gap-8 md:mt-24 md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-3">
            {team.map((person, i) => (
              <TeamCard key={person.id} person={person} index={i} />
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
              &ldquo;Serving not to be served, but to serve — and to give our
              lives for the sake of the campus.&rdquo;
            </p>
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow-600">
              — DUCSO Executive Committee · 2026–27
            </span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
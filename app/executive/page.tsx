"use client";

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

const team = [
  {
    id: 1,
    name: "Payel Paul Mrong",
    role: "President",
    designation: "Head of Committee",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    id: 2,
    name: "Ronald Aurunavo Das",
    role: "General Secretary",
    designation: "Administration",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    id: 3,
    name: "Liton Tripura",
    role: "Organising Secretary",
    designation: "Operations",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    id: 4,
    name: "Sarah J. Mondol",
    role: "Worship Lead",
    designation: "Worship & Music",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  },
  {
    id: 5,
    name: "David M. Tripura",
    role: "Outreach Lead",
    designation: "Campus & City",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
  {
    id: 6,
    name: "Priya K. Chakma",
    role: "Creative Lead",
    designation: "Design & Media",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
  },
  {
    id: 7,
    name: "Samuel Gomes",
    role: "Prayer Lead",
    designation: "Intercession",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  },
  {
    id: 8,
    name: "Ruth N. Marma",
    role: "Care Lead",
    designation: "Community Care",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
  },
];

type TeamMember = (typeof team)[0];

const LeadCard = ({ person }: { person: TeamMember }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.9, ease: EASE }}
    className="group relative grid overflow-hidden border border-black/10 bg-ivory md:grid-cols-[1.05fr_1fr]"
  >
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy md:aspect-auto md:min-h-[460px]">
      <Image
        src={person.image}
        alt={person.name}
        fill
        sizes="(max-width: 768px) 100vw, 55vw"
        className="object-cover [filter:grayscale(.22)_saturate(.92)_contrast(1.03)] transition-all duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:[filter:grayscale(0)_saturate(1)_contrast(1.03)]"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-navy/70 to-transparent"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />

      <span className="absolute left-5 top-5 font-serif text-[.8rem] tracking-[.16em] text-white">
        No. 01
      </span>
      <span className="absolute right-5 top-5 bg-navy px-2.5 py-1 text-[.58rem] font-semibold uppercase tracking-[.24em] text-gold shadow-[0_4px_14px_-6px_rgba(7,24,43,0.6)]">
        2026–27 Term
      </span>
    </div>

    <div className="flex flex-col justify-center p-[clamp(28px,4vw,52px)]">
      <p className="text-[.66rem] font-semibold uppercase tracking-[.26em] text-gold">
        {person.designation}
      </p>
      <h3 className="mt-4 font-serif text-[clamp(1.9rem,3.2vw,2.6rem)] font-normal leading-[1.1] tracking-[-.01em] text-navy">
        {person.name}
      </h3>
      <p className="mt-3 text-[.95rem] leading-[1.78] text-grey-600">
        Leading the committee with a heart for worship, discipleship, and the
        everyday life of the DUCSO family.
      </p>
      <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-6">
        <span aria-hidden className="h-px w-8 bg-gold" />
        <span className="text-[.66rem] font-semibold uppercase tracking-[.26em] text-gold">
          {person.role}
        </span>
      </div>
    </div>
  </motion.div>
);

const TeamCard = ({ person, index }: { person: TeamMember; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: EASE, delay: (index % 3) * 0.08 }}
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
      <span className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />

      <span className="absolute left-4 top-4 font-serif text-[.72rem] tracking-[.16em] text-white">
        {String(index + 2).padStart(2, "0")}
      </span>
    </div>

    <div className="flex flex-col gap-1 border-t border-black/10 bg-ivory pt-4">
      <h3 className="font-serif text-[1.15rem] leading-[1.25] text-navy transition-colors duration-300 group-hover:text-gold">
        {person.name}
      </h3>
      <p className="text-[.6rem] font-semibold uppercase tracking-[.24em] text-gold">
        {person.role}
      </p>
      <span
        aria-hidden
        className="mt-3 block h-px w-7 bg-black/20 transition-[width,background] duration-500 group-hover:w-12 group-hover:bg-gold"
      />
    </div>
  </motion.div>
);

export default function TeamPage() {
  const [lead, ...rest] = team;

  return (
    <main className="flex flex-col">
      <PageBanner
        label="Meet the Team"
        titleFirst="OUR"
        titleSecond="TEAM"
        description="The students leading DUCSO this year — with hearts for God and hands for the campus. Meet the 2026–27 Executive Committee."
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
              <Eyebrow>Leadership</Eyebrow>
              <h2 className="max-w-[20ch] font-serif text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal leading-[1.08] tracking-[-.015em] text-navy">
                The executive <em className="italic text-gold">committee.</em>
              </h2>
            </div>
            <p className="max-w-[34ch] text-[clamp(1rem,1.15vw,1.09rem)] leading-[1.78] text-grey-600">
              Eight students. One mission. Serving DUCSO for the 2026–2027 term
              — each with a heart for God and a role to serve the community.
            </p>
          </motion.div>

          <LeadCard person={lead} />

          <div className="mt-[clamp(32px,4vw,52px)] grid grid-cols-1 gap-[clamp(24px,3vw,36px)] sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((person, i) => (
              <TeamCard key={person.id} person={person} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-black/10 pt-8"
          >
            <p className="max-w-[62ch] text-[.95rem] italic leading-[1.78] text-grey-600">
              &ldquo;Serving not to be served, but to serve — and to give our
              lives for the sake of the campus.&rdquo;
            </p>
            <ArrowButton href="/contact">Get involved</ArrowButton>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

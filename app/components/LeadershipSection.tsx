"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const leaders = [
  {
    name: "Member Name",
    role: "President",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    name: "Member Name",
    role: "Vice President",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    name: "Member Name",
    role: "General Secretary",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    name: "Member Name",
    role: "Executive Member",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
  },
];

const LeadershipSection = () => {
  return (
    <section
      id="leadership"
      className="relative w-full overflow-hidden bg-neutral py-[clamp(72px,9vw,132px)]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* ── HEADER ── */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-[clamp(40px,5vw,68px)] flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-[660px]">
            <p className="mb-[1.35rem] inline-flex items-center gap-3 text-[.685rem] font-semibold uppercase tracking-[.26em] text-gold">
              <span aria-hidden className="block h-px w-9 bg-gold" />
              Leadership
            </p>
            <h2 className="max-w-[22ch] font-serif text-[clamp(2rem,3.5vw,3.05rem)] font-normal leading-[1.1] text-navy">
              The executive committee
            </h2>
            <p className="mt-[1.1rem] max-w-[62ch] text-[clamp(1rem,1.15vw,1.09rem)] leading-[1.78] text-grey-600">
              DUCSO is served by a student executive committee elected to guide
              the organization&apos;s fellowship, programmes and administration.
            </p>
          </div>
        </motion.div>

        {/* ── 4-UP LEADER GRID ── */}
        <div className="grid grid-cols-1 gap-[clamp(24px,4vw,38px)] sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((member, i) => (
            <motion.div
              key={`${member.role}-${i}`}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 + i * 0.09 }}
              className="group"
            >
              {/* photo 3:4 */}
              <div className="relative mb-[1.25rem] aspect-[3/4] w-full overflow-hidden rounded-sm bg-navy">
                <Image
                  src={member.image}
                  alt={`Portrait — ${member.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover [filter:grayscale(.22)_saturate(.92)_contrast(1.03)] transition-all duration-700 group-hover:scale-[1.04] group-hover:[filter:grayscale(0)_saturate(1)_contrast(1.03)]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/5 to-navy/40 mix-blend-multiply"
                />
              </div>

              {/* name */}
              <h3 className="mb-[.32rem] font-serif text-[1.28rem] leading-[1.25] text-navy transition-colors duration-300 group-hover:text-gold">
                {member.name}
              </h3>

              {/* role */}
              <p className="text-[.66rem] font-semibold uppercase tracking-[.2em] text-gold">
                {member.role}
              </p>

              {/* underline grows on hover */}
              <span
                aria-hidden
                className="mt-[.85rem] block h-px w-7 bg-black/25 transition-[width,background] duration-500 group-hover:w-[52px] group-hover:bg-gold"
              />
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/team"
            className="group inline-flex items-center gap-2 border-b border-[rgba(185,145,73,0.38)] pb-[5px] text-[.735rem] font-semibold uppercase tracking-[.16em] text-navy transition-colors hover:border-gold hover:text-gold"
          >
            Explore all members
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M1 8h13M9 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;

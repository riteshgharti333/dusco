"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

const EASE = [0.22, 1, 0.36, 1] as const;

const president = {
  name: "Payel Paul Mrong",
  role: "President",
  quote: "Leading with faith, serving with love.",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
};

const coreTeam = [
  {
    name: "Ronald Aurunavo Das",
    role: "General Secretary",
    quote: "Organized in Christ.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    name: "Liton Tripura",
    role: "Organising Secretary",
    quote: "Building the body together.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
];

const LeadershipSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24">
      {/* Rotated side rail */}
      <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 md:block">
        <div className="flex h-full items-center justify-center">
          <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black uppercase tracking-[0.6em] text-blue-900/30">
            Leadership · DUCSO · 2026–27
          </span>
        </div>
      </div>

      <div className="section-container">
        {/* ── HEADER ── */}
        <SectionHeader
          dark={false}
          label="Executive Committee"
          description="We are delighted to announce the newly elected leadership for the Dhaka University Christian Students' Organisation (DUCSO) 2026–2027 term."
          title={
            <>
              MEET THE
              <br />
              <span className="relative inline-block">
                <span
                  aria-hidden
                  className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                />
                <span className="relative z-10 px-1 italic uppercase text-blue-900">
                  leaders.
                </span>
              </span>
            </>
          }
        />

        {/* ── PRESIDENT (Compact Split Layout) ── */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="group/president relative mt-12 md:mt-16 flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-16"
        >
          {/* Left: Image with Background Frame */}
          <div className="relative w-full md:w-[45%]">
            {/* Yellow offset block behind image */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-yellow-400" />
            
            {/* Reduced aspect ratio to 1/1 for a smaller, tighter card */}
            <div className="relative aspect-square w-full overflow-hidden bg-blue-900">
              <Image
                src={president.image}
                alt={president.name}
                fill
                className="object-cover transition-transform duration-700 group-hover/president:scale-105"
              />
              <span className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>
          </div>

          {/* Right: Info with Slanted Tags */}
          <div className="mt-10 flex w-full flex-col md:mt-0 md:w-[55%]">
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-yellow-600">
              Message from the President
            </span>
            
            <p className="mt-5 text-xl font-light italic leading-snug text-blue-900 md:text-2xl">
              "{president.quote}"
            </p>

            <div className="mt-6 h-[2px] w-12 bg-blue-900/20" />

            <p className="mt-5 text-sm leading-relaxed text-blue-900/70">
              Leading the student body this year, Payel is passionate about creating a space where every student can encounter God and find a true community on campus.
            </p>

            {/* The Slanted Name & Role Tags (Reduced sizing) */}
            <div className="mt-8 flex flex-col items-start pl-2">
              <div className="inline-grid gap-2">
                {/* Name Tag */}
                <div className="flex -skew-x-[20deg] bg-blue-900 px-5 py-1">
                  <span className="skew-x-[20deg] text-lg font-black uppercase tracking-wide text-white md:text-xl">
                    {president.name}
                  </span>
                </div>

                {/* Role Tag */}
                <div className="flex -skew-x-[20deg] bg-yellow-400 px-5 py-1">
                  <span className="skew-x-[20deg] text-lg font-black uppercase tracking-wide text-blue-900 md:text-xl">
                    {president.role}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── OTHER LEADERS (2 Compact Cards) ── */}
        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-2 md:gap-12 lg:gap-16">
          {coreTeam.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.1 }}
              className="group/team flex flex-col"
            >
              {/* Image with Offset Block (Smaller aspect ratio) */}
              <div className="relative w-full">
                <div className="absolute inset-0 translate-x-4 translate-y-4 bg-yellow-400" />
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-blue-900">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/team:scale-105"
                  />
                  <span className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
                </div>
              </div>

              {/* Info below image */}
              <div className="mt-8 flex flex-col items-start">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-yellow-600">
                  {member.quote}
                </span>
                
                {/* The Slanted Name & Role Tags (Reduced sizing) */}
                <div className="mt-4 pl-2">
                  <div className="inline-grid gap-1.5">
                    {/* Name Tag */}
                    <div className="flex -skew-x-[20deg] bg-blue-900 px-4 py-1">
                      <span className="skew-x-[20deg] text-base font-black uppercase tracking-wide text-white md:text-lg">
                        {member.name}
                      </span>
                    </div>

                    {/* Role Tag */}
                    <div className="flex -skew-x-[20deg] bg-yellow-400 px-4 py-1">
                      <span className="skew-x-[20deg] text-base font-black uppercase tracking-wide text-blue-900 md:text-lg">
                        {member.role}
                      </span>
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
          className="mt-20 flex justify-center"
        >
          <Button
            href="/team"
            variant="secondary"
            size="md"
            onBlue={false}
          >
            Explore All Members
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
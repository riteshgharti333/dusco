"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── News data ─── */
const news = [
  {
    id: 1,
    date: "Nov 20, 2024",
    tag: "Announcement",
    title: "New Executive Committee Announced for 2026–27",
    desc: "We're delighted to introduce our newly elected leadership team — a group of students ready to serve, lead, and carry the vision forward.",
    featured: true,
  },
  {
    id: 2,
    date: "Nov 12, 2024",
    tag: "Event",
    title: "Christmas Carol Night — Save the Date",
    desc: "Our biggest night of the year is coming. Mark your calendar for December 15th.",
    featured: false,
  },
  {
    id: 3,
    date: "Nov 05, 2024",
    tag: "Update",
    title: "Small Groups Now Meeting Across Campus",
    desc: "12 new small groups launched this semester — find one near your hostel or faculty.",
    featured: false,
  },
  {
    id: 4,
    date: "Oct 28, 2024",
    tag: "Service",
    title: "Campus Outreach Reaches 500+ Students",
    desc: "A milestone of God's faithfulness — our teams prayed with hundreds of students this month.",
    featured: false,
  },
];

const NewsSection = () => {
  const featured = news[0];
  const others = news.slice(1);

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
      {/* Rotated side rail */}
      <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 md:block">
        <div className="flex h-full items-center justify-center">
          <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black uppercase tracking-[0.6em] text-blue-900/30">
            News & Updates · DUCSO
          </span>
        </div>
      </div>

      {/* Slanted yellow accent */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-full w-96 bg-yellow-400/[0.05] -skew-x-[20deg]"
      />

      <div className="section-container relative">
    <SectionHeader
  dark={false}
  label="Latest News"
  description="Stay updated with what's happening in and around DUCSO — announcements, events, and stories from the community."
  title={
    <>
      Latest &amp;
      <br />
      <span className="relative mt-2 inline-block max-w-full">
        <span
          aria-hidden
          className="absolute -inset-x-2 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
        />
        <span className="relative z-10 block break-words px-1 text-2xl italic uppercase text-blue-900 sm:text-3xl md:text-4xl lg:text-5xl">
          News.
        </span>
      </span>
    </>
  }
/>

        {/* ═══ FEATURED NEWS (Large Card) ═══ */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="group relative mt-12 md:mt-20"
        >
          {/* Yellow offset shadow */}
          <span
            aria-hidden
            className="absolute inset-0 translate-x-3 translate-y-3 bg-yellow-400 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"
          />

          {/* Card */}
          <div className="relative border-2 border-blue-900 bg-white p-8 md:p-12 lg:p-16">
            <div className="grid gap-8 md:grid-cols-12 md:items-center md:gap-12">
              {/* Left: Meta + Title */}
              <div className="md:col-span-8">
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-yellow-400 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.25em] text-blue-900">
                    {featured.tag}
                  </span>
                  <span className="h-px w-6 bg-blue-900/30" />
                  <span className="font-mono text-[10px] font-bold tracking-widest text-blue-900/50">
                    {featured.date}
                  </span>
                  <span className="ml-auto bg-blue-900 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.25em] text-yellow-400">
                    Featured
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-3xl font-black leading-[1.05] tracking-tight text-blue-900 md:text-4xl lg:text-5xl">
                  {featured.title}
                  <span className="text-yellow-400">.</span>
                </h3>

                {/* Description */}
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-blue-900/70 md:text-base">
                  {featured.desc}
                </p>
              </div>

              {/* Right: CTA */}
              <div className="md:col-span-4 md:border-l-2 md:border-blue-900/10 md:pl-10">
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow-600">
                  Read More
                </span>
                <p className="mt-3 text-sm leading-relaxed text-blue-900/60">
                  The full story — who's leading, what's changing, and what's
                  next for the DUCSO family.
                </p>
                <div className="mt-6">
                  <Button
                    href="/news/1"
                    variant="secondary"
                    size="sm"
                    onBlue={false}
                  >
                    Read Article
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ═══ OTHER NEWS (3-column grid) ═══ */}
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {others.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 }}
              className="group relative flex flex-col border-2 border-blue-900 bg-white p-6 transition-colors duration-300 hover:bg-blue-900 md:p-8"
            >
              {/* Meta row */}
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-yellow-400" />
                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-yellow-600 transition-colors duration-300 group-hover:text-yellow-400">
                  {item.tag}
                </span>
              </div>

              {/* Date */}
              <span className="mt-3 font-mono text-[10px] font-bold tracking-widest text-blue-900/40 transition-colors duration-300 group-hover:text-white/50">
                {item.date}
              </span>

              {/* Title */}
              <h4 className="mt-3 text-xl font-black leading-[1.1] tracking-tight text-blue-900 transition-colors duration-300 group-hover:text-white">
                {item.title}
                <span className="text-yellow-400">.</span>
              </h4>

              {/* Description */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-blue-900/60 transition-colors duration-300 group-hover:text-white/60">
                {item.desc}
              </p>

              {/* Arrow link */}
              <span className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-blue-900 transition-all duration-300 group-hover:translate-x-1 group-hover:text-yellow-400">
                Read More
                <span>→</span>
              </span>
            </motion.div>
          ))}
        </div>

        {/* ═══ VIEW ALL CTA ═══ */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t-2 border-blue-900/10 pt-8"
        >
          <p className="text-sm italic text-blue-900/55">
            Fresh updates from the DUCSO community.
          </p>
          <Button
            href="/news"
            variant="secondary"
            size="md"
            onBlue={false}
          >
            View All News
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
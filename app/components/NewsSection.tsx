"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const news = [
  {
    id: 1,
    date: "Publication date — TBA",
    tag: "Announcement",
    title: "Featured News or Announcement Headline",
    desc: "A short summary of the announcement will appear here — introducing the update, its significance for the DUCSO community and what members can do next.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1100&q=80",
    featured: true,
  },
  {
    id: 2,
    date: "Date — TBA",
    tag: "Announcement",
    title: "Announcement headline placeholder",
    desc: "Brief description of the announcement.",
    featured: false,
  },
  {
    id: 3,
    date: "Date — TBA",
    tag: "News",
    title: "News article headline placeholder",
    desc: "Brief description of the article.",
    featured: false,
  },
  {
    id: 4,
    date: "Date — TBA",
    tag: "Update",
    title: "Update from the executive committee",
    desc: "Brief description of the update.",
    featured: false,
  },
];

const NewsSection = () => {
  const featured = news[0];
  const others = news.slice(1);

  return (
    <section
      id="news"
      className="relative w-full overflow-hidden bg-ivory py-[clamp(72px,9vw,132px)]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* ── HEADER ── */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-[clamp(40px,5vw,68px)] flex flex-wrap items-end justify-between gap-10"
        >
          <div className="max-w-[660px]">
            <p className="mb-[1.35rem] inline-flex items-center gap-3 text-[.685rem] font-semibold uppercase tracking-[.26em] text-gold">
              <span aria-hidden className="block h-px w-9 bg-gold" />
              News
            </p>
            <h2 className="max-w-[22ch] font-serif text-[clamp(2rem,3.5vw,3.05rem)] font-normal leading-[1.1] text-navy">
              Announcements and stories from DUCSO
            </h2>
          </div>

          <Link
            href="/news"
            className="group mb-[.4rem] inline-flex items-center gap-2 border-b border-[rgba(185,145,73,0.38)] pb-[5px] text-[.735rem] font-semibold uppercase tracking-[.16em] text-navy transition-colors hover:border-gold hover:text-gold"
          >
            View all news
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

        {/* ── GRID: FEATURED + LIST ── */}
        <div className="grid gap-[clamp(34px,4.5vw,72px)] md:grid-cols-[1.12fr_.88fr]">
          {/* FEATURED */}
          <motion.a
            href={`/news/${featured.id}`}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="group block no-underline"
          >
            <div className="relative mb-[1.6rem] aspect-[16/10] overflow-hidden rounded-sm bg-navy">
              <Image
                src={featured.image!}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover [filter:grayscale(.22)_saturate(.92)_contrast(1.03)] transition-transform duration-700 group-hover:scale-[1.04] group-hover:[filter:grayscale(0)_saturate(1)_contrast(1.03)]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/15 to-navy/35 mix-blend-multiply"
              />
            </div>

            <p className="mb-[.9rem] inline-flex items-center gap-[.65rem] text-[.64rem] font-semibold uppercase tracking-[.22em] text-gold after:h-px after:w-[22px] after:bg-[rgba(185,145,73,0.38)] after:content-['']">
              {featured.date}
            </p>

            <h3 className="mb-[.85rem] font-serif text-[clamp(1.5rem,2.4vw,2rem)] font-normal leading-[1.22] text-navy transition-colors duration-300 group-hover:text-gold">
              {featured.title}
            </h3>

            <p className="max-w-[46ch] text-[.95rem] leading-[1.78] text-grey-600">
              {featured.desc}
            </p>
          </motion.a>

          {/* LIST */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            className="flex flex-col"
          >
            {others.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="block border-t border-black/10 py-[clamp(20px,2.2vw,28px)] no-underline transition-[padding-left] duration-300 hover:pl-2.5 last:border-b last:border-black/10"
              >
                <p className="mb-[.6rem] inline-flex items-center gap-[.65rem] text-[.64rem] font-semibold uppercase tracking-[.22em] text-gold after:h-px after:w-[22px] after:bg-[rgba(185,145,73,0.38)] after:content-['']">
                  {item.date}
                </p>
                <h4 className="mb-[.45rem] font-serif text-[1.22rem] leading-[1.3] text-navy transition-colors duration-300 group-hover:text-gold hover:text-gold">
                  {item.title}
                </h4>
                <p className="text-[.86rem] leading-[1.65] text-grey-500">
                  {item.desc}
                </p>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

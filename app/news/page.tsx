"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import SectionHeader from "../components/SectionHeader";
import { news } from "../data/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function NewsPage() {
  const featured = news.find((n) => n.featured) ?? news[0];
  const rest = news.filter((n) => n.id !== featured.id);

  return (
    <main className="flex flex-col">
      <PageBanner
        label="News & Updates"
        titleFirst="LATEST"
        titleSecond="NEWS"
        description="Announcements, events, and stories from the DUCSO community — everything happening in one place."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80"
      />

      <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
        {/* Rotated side rail */}
        <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 md:block">
          <div className="flex h-full items-center justify-center">
            <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black uppercase tracking-[0.6em] text-blue-900/30">
              News · DUCSO
            </span>
          </div>
        </div>

        <span
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 h-full w-96 bg-yellow-400/[0.05] -skew-x-[20deg]"
        />

        <div className="section-container relative">
          <SectionHeader
            dark={false}
            label="The Latest"
            description="Everything happening in and around DUCSO — from leadership announcements to event recaps."
            title={
              <>
                LATEST
                <br />
                <span className="relative inline-block">
                  <span
                    aria-hidden
                    className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                  />
                  <span className="relative z-10 px-1 italic uppercase text-blue-900">
                    News.
                  </span>
                </span>
              </>
            }
          />

          {/* ═══ FEATURED ═══ */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="group relative mt-12 md:mt-20"
          >
            <span
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 bg-yellow-400 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"
            />

            <Link
              href={`/news/${featured.id}`}
              className="relative block border-2 border-blue-900 bg-white p-8 md:p-12 lg:p-16"
            >
              <div className="grid gap-8 md:grid-cols-12 md:items-center md:gap-12">
                <div className="md:col-span-8">
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

                  <h3 className="mt-6 text-3xl font-black leading-[1.05] tracking-tight text-blue-900 md:text-4xl lg:text-5xl">
                    {featured.title}
                    <span className="text-yellow-400">.</span>
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-blue-900/70 md:text-base">
                    {featured.blurb}
                  </p>
                </div>

                <div className="md:col-span-4 md:border-l-2 md:border-blue-900/10 md:pl-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow-600">
                    Read More
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-blue-900/60">
                    The full story — behind the announcement and what's next.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-blue-900 transition-transform duration-300 group-hover:translate-x-2">
                    Read Article
                    <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ═══ GRID of other news ═══ */}
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {rest.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
              >
                <Link
                  href={`/news/${item.id}`}
                  className="group flex h-full flex-col border-2 border-blue-900 bg-white p-6 transition-colors duration-300 hover:bg-blue-900 md:p-8"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-yellow-400" />
                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-yellow-600 transition-colors duration-300 group-hover:text-yellow-400">
                      {item.tag}
                    </span>
                  </div>

                  <span className="mt-3 font-mono text-[10px] font-bold tracking-widest text-blue-900/40 transition-colors duration-300 group-hover:text-white/50">
                    {item.date}
                  </span>

                  <h4 className="mt-3 text-xl font-black leading-[1.1] tracking-tight text-blue-900 transition-colors duration-300 group-hover:text-white">
                    {item.title}
                    <span className="text-yellow-400">.</span>
                  </h4>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-blue-900/60 transition-colors duration-300 group-hover:text-white/60">
                    {item.blurb}
                  </p>

                  <span className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.28em] text-blue-900 transition-all duration-300 group-hover:translate-x-1 group-hover:text-yellow-400">
                    Read More
                    <span>→</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t-2 border-blue-900/10 pt-8"
          >
            <p className="text-sm italic text-blue-900/55">
              Every update is a chapter in the DUCSO story.
            </p>
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow-600">
              — DUCSO · 2019–24
            </span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
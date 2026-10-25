"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { NewsItem } from "../../data/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function NewsDetail({
  article,
  next,
}: {
  article: NewsItem;
  next: NewsItem;
}) {
  return (
    <main className="flex flex-col bg-white">
      {/* ═══ HEADER ═══ */}
      <section className="relative w-full overflow-hidden pt-32 md:pt-44">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Link
              href="/news"
              className="group inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.28em] text-blue-900/60 transition-colors hover:text-blue-900"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              All News
            </Link>
          </motion.div>

          <div className="mt-10 grid items-end gap-10 md:mt-14 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
                className="flex items-center gap-4"
              >
                <span className="bg-yellow-400 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.25em] text-blue-900">
                  {article.tag}
                </span>
                <span className="h-[2px] w-6 bg-yellow-400" />
                <span className="font-mono text-[11px] font-bold tracking-widest text-blue-900/60">
                  {article.date}
                </span>
              </motion.div>

              <h1 className="mt-6 overflow-hidden pb-3">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                  className="relative inline-block text-4xl font-black leading-[0.9] tracking-tighter text-blue-900 sm:text-5xl md:text-7xl lg:text-[5rem]"
                >
                  {article.title}
                  <span className="text-yellow-400">.</span>
                </motion.span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
              className="md:col-span-4 md:pb-4"
            >
              <p className="text-sm leading-relaxed text-blue-900/70 md:text-base">
                {article.blurb}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED IMAGE ═══ */}
      <section className="relative w-full pt-16 md:pt-24">
        <div className="section-container">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: EASE }}
            className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden border-4 border-blue-900 bg-blue-900 md:aspect-[21/9]"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <span className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
          </motion.div>
        </div>
      </section>

      {/* ═══ ARTICLE BODY ═══ */}
      <section className="relative w-full pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            {article.content.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                className="mb-6 text-base leading-[1.75] text-blue-900/80 md:text-lg"
              >
                {i === 0 ? (
                  <span className="first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-black first-letter:leading-[0.85] first-letter:text-blue-900">
                    {para}
                  </span>
                ) : (
                  para
                )}
              </motion.p>
            ))}

            {/* Divider + signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
              className="mt-16 flex items-center gap-4 border-t-2 border-blue-900/10 pt-8"
            >
              <span className="h-[2px] w-10 bg-yellow-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-600">
                — DUCSO Communications
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ NEXT ARTICLE ═══ */}
      <section className="w-full border-t-2 border-blue-900/10 bg-white">
        <Link
          href={`/news/${next.id}`}
          className="group section-container block py-16 md:py-24"
        >
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-yellow-400 transition-all duration-700 group-hover:w-20" />
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-900/60">
              Next Article
            </span>
          </div>
          <div className="mt-6 flex items-end justify-between gap-6">
            <h2 className="max-w-4xl text-3xl font-black leading-[0.95] tracking-tighter text-blue-900/40 transition-all duration-700 group-hover:translate-x-3 group-hover:text-blue-900 md:text-5xl lg:text-6xl">
              {next.title}
              <span className="text-yellow-400">.</span>
            </h2>
            <span className="mb-2 shrink-0 text-3xl font-black text-blue-900 transition-transform duration-500 group-hover:translate-x-3 md:text-5xl">
              →
            </span>
          </div>
        </Link>
      </section>
    </main>
  );
}
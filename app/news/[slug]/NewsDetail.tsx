"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { NewsItem } from "../../data/data";
import Container from "../../components/Container";
import ArrowButton from "../../components/ArrowButton";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function NewsDetail({
  article,
  next,
}: {
  article: NewsItem;
  next: NewsItem;
}) {
  return (
    <main className="flex flex-col bg-ivory">
      <section className="relative w-full overflow-hidden bg-navy pt-32 pb-16 md:pt-44 md:pb-24">
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-gold/[0.08] blur-3xl"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -left-24 bottom-0 h-64 w-72 -skew-x-[20deg] bg-gold/[0.04]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute right-4 top-16 select-none font-serif text-[clamp(6rem,18vw,14rem)] font-semibold leading-none tracking-[-.04em] text-white/[0.03] md:right-12 md:top-24"
        >
          {article.tag}
        </span>

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Link
              href="/news"
              className="group inline-flex items-center gap-3 text-[.66rem] font-semibold uppercase tracking-[.26em] text-white/60 transition-colors hover:text-gold"
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
                className="flex flex-wrap items-center gap-4"
              >
                <span className="border border-gold/40 bg-gold/10 px-3 py-1.5 text-[.6rem] font-semibold uppercase tracking-[.24em] text-gold backdrop-blur-sm">
                  {article.tag}
                </span>
                <span aria-hidden className="h-px w-6 bg-gold" />
                <span className="text-[.66rem] font-semibold uppercase tracking-[.24em] text-white/60">
                  {article.date}
                </span>
              </motion.div>

              <h1 className="mt-6 overflow-hidden pb-3">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                  className="relative inline-block font-serif text-[clamp(2.4rem,6vw,4.6rem)] font-normal leading-[0.95] tracking-[-.03em] text-white"
                >
                  {article.title}
                  <span className="text-gold">.</span>
                </motion.span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
              className="md:col-span-4 md:pb-4"
            >
              <p className="text-[.95rem] leading-[1.78] text-white/70 md:text-base">
                {article.blurb}
              </p>
            </motion.div>
          </div>
        </Container>

        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        />
      </section>

      <section className="relative w-full pt-16 md:pt-24">
        <Container>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: EASE }}
            className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden border border-black/10 bg-navy shadow-[0_28px_70px_-36px_rgba(7,24,43,0.48)] md:aspect-[21/9]"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="100vw"
              className="object-cover [filter:grayscale(.22)_saturate(.92)_contrast(1.03)]"
              priority
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent mix-blend-multiply"
            />
          </motion.div>
        </Container>
      </section>

      <section className="relative w-full pb-20 pt-16 md:pb-28 md:pt-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            {article.content.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                className="mb-6 text-[.95rem] leading-[1.85] text-grey-600 md:text-base"
              >
                {i === 0 ? (
                  <span className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:font-normal first-letter:leading-[0.85] first-letter:text-navy">
                    {para}
                  </span>
                ) : (
                  para
                )}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
              className="mt-16 flex items-center gap-4 border-t border-black/10 pt-8"
            >
              <span aria-hidden className="h-px w-10 bg-gold" />
              <span className="text-[.66rem] font-semibold uppercase tracking-[.26em] text-gold">
                — DUCSO Communications
              </span>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="w-full border-t border-black/10 bg-ivory">
        <Link href={`/news/${next.id}`} className="group block py-16 md:py-24">
          <Container>
            <div className="flex items-center gap-4">
              <span
                aria-hidden
                className="h-px w-10 bg-gold transition-all duration-700 group-hover:w-20"
              />
              <span className="text-[.66rem] font-semibold uppercase tracking-[.26em] text-grey-600">
                Next Article
              </span>
            </div>
            <div className="mt-6 flex items-end justify-between gap-6">
              <h2 className="max-w-4xl font-serif text-[clamp(1.9rem,4.5vw,3.4rem)] font-normal leading-[1.05] tracking-[-.02em] text-navy/40 transition-all duration-700 group-hover:translate-x-3 group-hover:text-navy">
                {next.title}
                <span className="text-gold">.</span>
              </h2>
              <span
                aria-hidden
                className="mb-2 shrink-0 text-gold transition-transform duration-500 group-hover:translate-x-3"
              >
                <svg width="32" height="32" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M1 8h13M9 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </Container>
        </Link>
      </section>
    </main>
  );
}

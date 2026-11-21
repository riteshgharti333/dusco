"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import Container from "../components/Container";
import ArrowButton from "../components/ArrowButton";
import { news } from "../data/data";

const EASE = [0.22, 1, 0.36, 1] as const;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-[1.35rem] inline-flex items-center gap-3 text-[.685rem] font-semibold uppercase tracking-[.26em] text-gold">
    <span aria-hidden className="block h-px w-9 bg-gold" />
    {children}
  </p>
);

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
              <Eyebrow>The Latest</Eyebrow>
              <h2 className="max-w-[20ch] font-serif text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal leading-[1.08] tracking-[-.015em] text-navy">
                Latest <em className="italic text-gold">news.</em>
              </h2>
            </div>
            <p className="max-w-[34ch] text-[clamp(1rem,1.15vw,1.09rem)] leading-[1.78] text-grey-600">
              Everything happening in and around DUCSO — from leadership
              announcements to event recaps.
            </p>
          </motion.div>

          {/* FEATURED — split editorial card with image */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <Link
              href={`/news/${featured.id}`}
              className="group relative grid overflow-hidden border border-black/10 bg-ivory md:grid-cols-[1.1fr_.9fr]"
            >
              {/* image side */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy md:aspect-auto md:min-h-[460px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover [filter:grayscale(.22)_saturate(.92)_contrast(1.03)] transition-all duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:[filter:grayscale(0)_saturate(1)_contrast(1.03)]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"
                />
                <span className="absolute left-5 top-5 bg-navy px-2.5 py-1 text-[.58rem] font-semibold uppercase tracking-[.24em] text-gold shadow-[0_4px_14px_-6px_rgba(7,24,43,0.6)]">
                  Featured
                </span>
              </div>

              {/* text side */}
              <div className="flex flex-col justify-center p-[clamp(28px,4vw,52px)]">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[.66rem] font-semibold uppercase tracking-[.26em] text-gold">
                    {featured.tag}
                  </span>
                  <span aria-hidden className="h-px w-6 bg-black/15" />
                  <span className="text-[.62rem] font-semibold uppercase tracking-[.22em] text-grey-500">
                    {featured.date}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-[clamp(1.8rem,2.9vw,2.5rem)] font-normal leading-[1.15] tracking-[-.01em] text-navy">
                  {featured.title}
                  <span className="text-gold">.</span>
                </h3>

                <p className="mt-4 max-w-[46ch] text-[.95rem] leading-[1.78] text-grey-600">
                  {featured.blurb}
                </p>

                <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-6">
                  <span className="text-[.66rem] font-semibold uppercase tracking-[.26em] text-navy transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold">
                    Read Article
                  </span>
                  <span
                    aria-hidden
                    className="text-gold transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M1 8h13M9 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* GRID — cards with images, hairline caption blocks */}
          <div className="mt-[clamp(32px,4vw,52px)] grid grid-cols-1 gap-[clamp(24px,3vw,36px)] sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  ease: EASE,
                  delay: (i % 3) * 0.08,
                }}
              >
                <Link
                  href={`/news/${item.id}`}
                  className="group flex h-full flex-col"
                >
                  {/* image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover [filter:grayscale(.22)_saturate(.92)_contrast(1.03)] transition-all duration-700 group-hover:scale-[1.04] group-hover:[filter:grayscale(0)_saturate(1)_contrast(1.03)]"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-navy/70 to-transparent"
                    />
                    <span className="absolute left-4 top-4 bg-navy px-2.5 py-1 text-[.55rem] font-semibold uppercase tracking-[.22em] text-gold shadow-[0_4px_14px_-6px_rgba(7,24,43,0.6)]">
                      {item.tag}
                    </span>
                  </div>

                  {/* caption */}
                  <div className="flex flex-1 flex-col gap-1 border-t border-black/10 bg-ivory pt-4">
                    <p className="text-[.6rem] font-semibold uppercase tracking-[.22em] text-grey-500">
                      {item.date}
                    </p>
                    <h4 className="mt-1 font-serif text-[1.25rem] leading-[1.25] text-navy transition-colors duration-300 group-hover:text-gold">
                      {item.title}
                    </h4>
                    <p className="mt-2 flex-1 text-[.88rem] leading-[1.7] text-grey-600">
                      {item.blurb}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2.5 text-[.66rem] font-semibold uppercase tracking-[.24em] text-navy transition-colors duration-300 group-hover:text-gold">
                      Read More
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M1 8h13M9 3l5 5-5 5"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="mt-3 block h-px w-7 bg-black/20 transition-[width,background] duration-500 group-hover:w-12 group-hover:bg-gold"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-black/10 pt-8"
          >
            <p className="max-w-[62ch] text-[.95rem] italic leading-[1.78] text-grey-600">
              Every update is a chapter in the DUCSO story.
            </p>
            <ArrowButton href="/contact">Stay in the loop</ArrowButton>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

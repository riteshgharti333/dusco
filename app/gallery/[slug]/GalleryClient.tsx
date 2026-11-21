"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../../components/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

const SHAPES = [
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[5/4]",
];

const pad = (n: number) => String(n).padStart(2, "0");

type Album = {
  id: string;
  title: string;
  season: string;
  tag: string;
  blurb: string;
  photos: string[];
};

export default function GalleryClient({
  album,
  next,
}: {
  album: Album;
  next: Album;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const [dir, setDir] = useState(1);

  const total = album.photos.length;

  const go = useCallback(
    (d: number) => {
      setDir(d);
      setOpen((o) => (o === null ? o : (o + d + total) % total));
    },
    [total],
  );

  useEffect(() => {
    if (open === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, go]);

  return (
    <main className="flex flex-col bg-ivory">
      <section className="relative w-full overflow-hidden bg-navy pt-32 pb-16 md:pt-44 md:pb-24">
        {/* gold hairline along the very top (under navbar) */}
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        />

        {/* soft gold glow top-right */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-gold/[0.08] blur-3xl"
        />

        {/* subtle gold skew plane bottom-left */}
        <span
          aria-hidden
          className="pointer-events-none absolute -left-24 bottom-0 h-64 w-72 -skew-x-[20deg] bg-gold/[0.04]"
        />

        {/* large watermark of the album count — faint, behind content */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-4 top-16 select-none font-serif text-[clamp(6rem,18vw,14rem)] font-semibold leading-none tracking-[-.04em] text-white/[0.03] md:right-12 md:top-24"
        >
          {pad(total)}
        </span>

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-3 text-[.66rem] font-semibold uppercase tracking-[.26em] text-white/60 transition-colors hover:text-gold"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              All Albums
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
                <span className="h-px w-12 bg-gold" />
                <span className="text-[.685rem] font-semibold uppercase tracking-[.26em] text-gold">
                  {album.tag} · {album.season}
                </span>
              </motion.div>

              <h1 className="mt-6 overflow-hidden pb-3">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                  className="relative inline-block font-serif text-[clamp(2.8rem,8vw,7rem)] font-normal leading-[0.9] tracking-[-.03em] text-white"
                >
                  {album.title}
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
                {album.blurb}
              </p>
              <p className="mt-6 text-[.66rem] font-semibold uppercase tracking-[.26em] text-white/50">
                <span className="text-gold">{pad(total)}</span> Photos
              </p>
            </motion.div>
          </div>
        </Container>

        {/* gold hairline at bottom to separate from photo wall */}
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        />
      </section>

      <section className="relative w-full overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
        <Container>
          <div className="columns-2 gap-3 md:columns-3 md:gap-5 lg:gap-6">
            {album.photos.map((src, i) => (
              <motion.button
                key={i}
                type="button"
                onClick={() => {
                  setDir(1);
                  setOpen(i);
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  ease: EASE,
                  delay: (i % 3) * 0.08,
                }}
                className="group relative mb-3 block w-full break-inside-avoid overflow-hidden bg-navy/5 md:mb-5 lg:mb-6 "
                aria-label={`Open photo ${i + 1}`}
              >
                <div className={`relative w-full ${SHAPES[i % SHAPES.length]}`}>
                  <Image
                    src={src}
                    alt={`${album.title} — photo ${i + 1}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover [filter:grayscale(.22)_saturate(.92)_contrast(1.03)] transition-all duration-1000 group-hover:scale-[1.05] group-hover:[filter:grayscale(0)_saturate(1)_contrast(1.03)] cursor-pointer"
                    style={{ objectPosition: `${(i * 23) % 100}% 40%` }}
                  />
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-navy/70 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="h-px w-6 bg-gold" />
                  <span className="font-serif text-[.8rem] tracking-[.16em] text-white">
                    {pad(i + 1)}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </Container>
      </section>

      <section className="w-full border-t border-black/10 bg-ivory">
        <Link
          href={`/gallery/${next.id}`}
          className="group block py-16 md:py-24"
        >
          <Container>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold transition-all duration-700 group-hover:w-20" />
              <span className="text-[.66rem] font-semibold uppercase tracking-[.26em] text-grey-600">
                Next Album
              </span>
            </div>
            <div className="mt-6 flex items-end justify-between gap-6">
              <h2 className="font-serif text-[clamp(2.4rem,8vw,6rem)] font-normal leading-[0.9] tracking-[-.03em] text-navy/40 transition-all duration-700 group-hover:translate-x-3 group-hover:text-navy">
                {next.title}
                <span className="text-gold">.</span>
              </h2>
              <span className="mb-2 text-gold transition-transform duration-500 group-hover:translate-x-3">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
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

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[9999] flex flex-col bg-navy/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${album.title} photo viewer`}
          >
            <div
              className="flex items-center justify-between px-5 py-5 md:px-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="font-serif text-[.8rem] tracking-[.16em] text-white/60">
                <span className="text-gold">{pad(open + 1)}</span> /{" "}
                {pad(total)}
              </span>
              <span className="hidden text-[.66rem] font-semibold uppercase tracking-[.26em] text-white/50 sm:block">
                {album.title}
              </span>
              <button
                onClick={() => setOpen(null)}
                className="text-[.66rem] font-semibold uppercase tracking-[.26em] text-white transition-colors hover:text-gold cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <div className="relative flex flex-1 items-center justify-center px-4 md:px-24">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={open}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -60 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative"
                >
                  <Image
                    src={album.photos[open]}
                    alt={`${album.title} — photo ${open + 1}`}
                    width={1600}
                    height={1100}
                    priority
                    className="max-h-[72vh] w-auto max-w-full object-contain"
                  />
                  <span
                    aria-hidden
                    className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-gold/60"
                  />
                </motion.div>
              </AnimatePresence>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-gold transition-all hover:opacity-70 md:left-8 cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M10 3L5 8l5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-gold transition-all hover:opacity-70 md:right-8 cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div
              className="px-5 pb-6 pt-5 md:px-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-px w-full bg-white/20">
                <motion.span
                  className="absolute inset-y-0 left-0 bg-gold"
                  animate={{ width: `${((open + 1) / total) * 100}%` }}
                  transition={{ duration: 0.5, ease: EASE }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

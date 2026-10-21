"use client";
export const dynamic = "force-dynamic";


/*
  Place at:  app/gallery/[slug]/page.tsx
  Single album page — editorial photo wall + minimal lightbox.
*/

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── Placeholder photo pool ─── */
const POOL = [
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1400&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80",
  "https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=1400&q=80",
  "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1400&q=80",
  "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1400&q=80",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1400&q=80",
];

const makePhotos = (start: number, n: number) =>
  Array.from({ length: n }, (_, i) => POOL[(start + i) % POOL.length]);

/* ─── Albums ─── */
const galleries = [
  {
    id: "praise-night-2024",
    title: "Praise Night",
    season: "Fall 2024",
    tag: "Worship",
    blurb:
      "The biggest night of our year — a whole campus lifting one song. These are the voices, the hands raised and the quiet moments in between.",
    photos: makePhotos(0, 12),
  },
  {
    id: "small-groups",
    title: "Small Groups",
    season: "Weekly",
    tag: "Community",
    blurb:
      "Shared meals, open Bibles and honest conversations — the small circles where friendships are made.",
    photos: makePhotos(1, 9),
  },
  {
    id: "campus-outreach",
    title: "Campus Outreach",
    season: "Semester",
    tag: "Service",
    blurb:
      "Hot drinks, prayer and real conversations — faith taken out of the chapel and into campus life.",
    photos: makePhotos(2, 11),
  },
  {
    id: "bible-study",
    title: "Bible Study",
    season: "Weekly",
    tag: "Study",
    blurb:
      "Verse by verse, question by question. A table, a text and people willing to wrestle with it together.",
    photos: makePhotos(3, 8),
  },
  {
    id: "christmas-carol-night",
    title: "Christmas Carol Night",
    season: "Winter 2024",
    tag: "Special",
    blurb:
      "Carols, cocoa and candlelight — our most loved evening, celebrating the birth of Christ together.",
    photos: makePhotos(4, 12),
  },
  {
    id: "retreat-2024",
    title: "Retreat",
    season: "Summer 2024",
    tag: "Getaway",
    blurb:
      "A few days away to rest, play and listen. Long walks, late talks and a lot of laughter.",
    photos: makePhotos(5, 12),
  },
];

/* varied frame shapes */
const SHAPES = [
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[5/4]",
];

const pad = (n: number) => String(n).padStart(2, "0");

export default function SingleGalleryPage() {
  const params = useParams<{ slug: string }>();
  const idx = galleries.findIndex((g) => g.id === params?.slug);
  const [open, setOpen] = useState<number | null>(null);
  const [dir, setDir] = useState(1);

  const album = idx >= 0 ? galleries[idx] : null;
  const total = album?.photos.length ?? 0;
  const next = galleries[(idx + 1) % galleries.length];

  const go = useCallback(
    (d: number) => {
      setDir(d);
      setOpen((o) => (o === null ? o : (o + d + total) % total));
    },
    [total]
  );

  /* lock scroll + keyboard controls */
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

  if (!album) return notFound();

  return (
    <main className="flex flex-col bg-white">
      {/* ═════════ HEADER ═════════ */}
      <section className="relative w-full overflow-hidden pt-32 md:pt-44">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.28em] text-blue-900/60 transition-colors hover:text-blue-900"
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
                <span className="h-[2px] w-12 bg-yellow-400" />
                <span className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-900/70">
                  {album.tag} · {album.season}
                </span>
              </motion.div>

              <h1 className="mt-6 overflow-hidden pb-3">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                  className="relative inline-block text-5xl font-black leading-[0.85] tracking-tighter text-blue-900 sm:text-6xl md:text-8xl lg:text-[8rem]"
                >
                  {album.title}
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
                {album.blurb}
              </p>
              <p className="mt-6 font-mono text-[11px] font-bold tracking-widest text-blue-900/45">
                <span className="text-yellow-600">{pad(total)}</span> Photos
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═════════ PHOTO WALL ═════════ */}
      <section className="relative w-full overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="section-container">
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
                transition={{ duration: 0.8, ease: EASE, delay: (i % 3) * 0.08 }}
                className="group relative mb-3 block w-full break-inside-avoid overflow-hidden bg-blue-900/5 md:mb-5 lg:mb-6"
                aria-label={`Open photo ${i + 1}`}
              >
                <div className={`relative w-full ${SHAPES[i % SHAPES.length]}`}>
                  <Image
                    src={src}
                    alt={`${album.title} — photo ${i + 1}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover grayscale transition-all duration-1000 group-hover:scale-[1.05] group-hover:grayscale-0"
                    style={{ objectPosition: `${(i * 23) % 100}% 40%` }}
                  />
                </div>

                {/* number + line, on hover */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-blue-950/60 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="h-px w-6 bg-yellow-400" />
                  <span className="font-mono text-[11px] font-bold tracking-widest text-white">
                    {pad(i + 1)}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════ NEXT ALBUM ═════════ */}
      <section className="w-full border-t-2 border-blue-900/10 bg-white">
        <Link
          href={`/gallery/${next.id}`}
          className="group section-container block py-16 md:py-24"
        >
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-yellow-400 transition-all duration-700 group-hover:w-20" />
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-900/60">
              Next Album
            </span>
          </div>
          <div className="mt-6 flex items-end justify-between gap-6">
            <h2 className="text-5xl font-black leading-[0.85] tracking-tighter text-blue-900/40 transition-all duration-700 group-hover:translate-x-3 group-hover:text-blue-900 md:text-8xl">
              {next.title}
              <span className="text-yellow-400">.</span>
            </h2>
            <span className="mb-2 text-3xl font-black text-blue-900 transition-transform duration-500 group-hover:translate-x-3 md:text-5xl">
              →
            </span>
          </div>
        </Link>
      </section>

      {/* ═════════ LIGHTBOX ═════════ */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[9999] flex flex-col bg-blue-950/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${album.title} photo viewer`}
          >
            {/* top bar */}
            <div
              className="flex items-center justify-between px-5 py-5 md:px-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="font-mono text-[11px] font-bold tracking-widest text-white/60">
                <span className="text-yellow-400">{pad(open + 1)}</span> /{" "}
                {pad(total)}
              </span>
              <span className="hidden text-[11px] font-black uppercase tracking-[0.28em] text-white/50 sm:block">
                {album.title}
              </span>
              <button
                onClick={() => setOpen(null)}
                className="text-[11px] font-black uppercase tracking-[0.28em] text-white transition-colors hover:text-yellow-400"
              >
                Close ✕
              </button>
            </div>

            {/* stage */}
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
                    className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-yellow-400/60"
                  />
                </motion.div>
              </AnimatePresence>

              {/* arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-2xl font-black text-white transition-all hover:text-yellow-400 md:left-8"
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-2xl font-black text-white transition-all hover:text-yellow-400 md:right-8"
              >
                →
              </button>
            </div>

            {/* progress line */}
            <div
              className="px-5 pb-6 pt-5 md:px-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-px w-full bg-white/20">
                <motion.span
                  className="absolute inset-y-0 left-0 bg-yellow-400"
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
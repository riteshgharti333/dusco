"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import PageBanner from "../components/PageBanner";
import SectionHeader from "../components/SectionHeader";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── GALLERY FOLDERS ─── */
const galleries = [
  {
    id: "praise-night-2024",
    title: "Praise Night",
    season: "Fall 2024",
    tag: "Worship",
    count: 24,
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",
  },
  {
    id: "small-groups",
    title: "Small Groups",
    season: "Weekly",
    tag: "Community",
    count: 18,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80",
  },
  {
    id: "campus-outreach",
    title: "Campus Outreach",
    season: "Semester",
    tag: "Service",
    count: 32,
    image:
      "https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=1200&q=80",
  },
  {
    id: "bible-study",
    title: "Bible Study",
    season: "Weekly",
    tag: "Study",
    count: 12,
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1200&q=80",
  },
  {
    id: "christmas-carol-night",
    title: "Christmas Carol Night",
    season: "Winter 2024",
    tag: "Special",
    count: 46,
    image:
      "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1200&q=80",
  },
  {
    id: "retreat-2024",
    title: "Retreat",
    season: "Summer 2024",
    tag: "Getaway",
    count: 58,
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80",
  },
];

type Gallery = (typeof galleries)[0];

/* ─── prints fan-out variants ─── */
const backPrint: Variants = {
  rest: { rotate: -4, x: -4, y: 4 },
  hover: { rotate: -11, x: -34, y: 6 },
};
const midPrint: Variants = {
  rest: { rotate: 3, x: 5, y: 2 },
  hover: { rotate: 10, x: 34, y: 4 },
};
const frontPrint: Variants = {
  rest: { rotate: 0, y: 0 },
  hover: { rotate: -1, y: -14 },
};

const Print = ({
  src,
  alt,
  variants,
  tone,
}: {
  src: string;
  alt: string;
  variants: Variants;
  tone: "front" | "back";
}) => (
  <motion.div
    variants={variants}
    transition={{ duration: 0.7, ease: EASE }}
    className="absolute inset-x-[9%] inset-y-[4%] bg-white p-2 shadow-[0_18px_40px_-18px_rgba(23,37,84,0.45)] md:p-2.5"
  >
    <div className="relative h-full w-full overflow-hidden bg-blue-900">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 90vw"
        className={`object-cover transition-all duration-700 ${
          tone === "front"
            ? "grayscale group-hover:grayscale-0"
            : "grayscale opacity-80"
        }`}
        style={tone === "back" ? { objectPosition: "20% 40%" } : undefined}
      />
    </div>
  </motion.div>
);

/* ═══════════════════════════════════════════════
   ALBUM CARD
═══════════════════════════════════════════════ */
const AlbumCard = ({
  folder,
  index,
}: {
  folder: Gallery;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: EASE, delay: (index % 3) * 0.1 }}
      className={index % 3 === 1 ? "lg:mt-20" : ""}
    >
      <Link href={`/gallery/${folder.id}`} className="group block">
        <motion.div
          initial="rest"
          animate="rest"
          whileHover="hover"
          className="relative aspect-[4/5] w-full"
        >
          <Print
            src={folder.image}
            alt=""
            variants={backPrint}
            tone="back"
          />
          <Print
            src={folder.image}
            alt=""
            variants={midPrint}
            tone="back"
          />
          <Print
            src={folder.image}
            alt={folder.title}
            variants={frontPrint}
            tone="front"
          />

          {/* count badge */}
          <span className="absolute -right-1 top-6 z-10 bg-yellow-400 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-blue-900 transition-transform duration-500 group-hover:translate-x-2 md:right-1">
            {folder.count} Photos
          </span>
        </motion.div>

        {/* caption */}
        <div className="mt-10">
          <div className="relative h-px w-full bg-blue-900/15">
            <span className="absolute inset-0 origin-left scale-x-0 bg-yellow-400 transition-transform duration-700 group-hover:scale-x-100" />
          </div>

          <div className="mt-5 flex items-start justify-between gap-4">
            <div>
              {/* Number — bold monospace */}
              <span className="font-mono text-[11px] font-bold tracking-widest text-blue-900/40">
                No. 0{index + 1}
              </span>

              {/* Title — bold + yellow dot */}
              <h3 className="mt-2 text-2xl font-black leading-[1.05] tracking-tight text-blue-900 transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                {folder.title}
                <span className="text-yellow-400">.</span>
              </h3>

              {/* Tag · Season — bold */}
              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.28em] text-yellow-600">
                {folder.tag} · {folder.season}
              </p>
            </div>

            {/* Arrow */}
            <span className="mt-6 text-lg font-black text-blue-900 transition-transform duration-500 group-hover:translate-x-2">
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════
   MAIN GALLERY PAGE
═══════════════════════════════════════════════ */
export default function GalleryPage() {
  return (
    <main className="flex flex-col">
      <PageBanner
        label="Life at DUCSO"
        titleFirst="OUR"
        titleSecond="GALLERY"
        description="A glimpse into the community — from loud worship nights to quiet conversations. These are the faces and moments that make us who we are."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80"
      />

      <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
        {/* Rotated side rail */}
        <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 md:block">
          <div className="flex h-full items-center justify-center">
            <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black uppercase tracking-[0.6em] text-blue-900/30">
              Photo Albums · DUCSO
            </span>
          </div>
        </div>

        <div className="section-container">
          <SectionHeader
            dark={false}
            label="Photo Albums"
            description="Every moment tells a story. Browse our albums to see what God has been doing in and through DUCSO."
            title={
              <>
                THE
                <br />
                <span className="relative inline-block">
                  <span
                    aria-hidden
                    className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                  />
                  <span className="relative z-10 px-1 italic uppercase text-blue-900">
                    moments.
                  </span>
                </span>
                <br />
                <span className="text-blue-900">CAPTURED.</span>
              </>
            }
          />

          {/* Albums */}
          <div className="mt-20 grid gap-x-12 gap-y-24 md:mt-28 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
            {galleries.map((folder, i) => (
              <AlbumCard key={folder.id} folder={folder} index={i} />
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="mt-28 flex flex-wrap items-center justify-between gap-4 border-t-2 border-blue-900/10 pt-8"
          >
            <p className="text-sm italic text-blue-900/55">
              Every photo is a testimony. Every face is a story.
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
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import PageBanner from "../components/PageBanner";
import Container from "../components/Container";
import ArrowButton from "../components/ArrowButton";

const EASE = [0.22, 1, 0.36, 1] as const;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-[1.35rem] inline-flex items-center gap-3 text-[.685rem] font-semibold uppercase tracking-[.26em] text-gold">
    <span aria-hidden className="block h-px w-9 bg-gold" />
    {children}
  </p>
);

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
    className="absolute inset-x-[9%] inset-y-[4%] bg-ivory p-2 shadow-[0_18px_40px_-18px_rgba(7,24,43,0.45)] md:p-2.5"
  >
    <div className="relative h-full w-full overflow-hidden bg-navy">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 90vw"
        className={`object-cover transition-all duration-700 [filter:grayscale(.4)_saturate(.9)_contrast(1.03)] group-hover:[filter:grayscale(0)_saturate(1)_contrast(1.03)] ${
          tone === "back" ? "opacity-80" : ""
        }`}
        style={tone === "back" ? { objectPosition: "20% 40%" } : undefined}
      />
    </div>
  </motion.div>
);

const AlbumCard = ({ folder, index }: { folder: Gallery; index: number }) => {
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
          <Print src={folder.image} alt="" variants={backPrint} tone="back" />
          <Print src={folder.image} alt="" variants={midPrint} tone="back" />
          <Print
            src={folder.image}
            alt={folder.title}
            variants={frontPrint}
            tone="front"
          />

          <span className="absolute -right-1 top-6 z-10 border border-gold/40 bg-navy px-3 py-1.5 text-[.58rem] font-semibold uppercase tracking-[.24em] text-gold shadow-[0_10px_30px_-12px_rgba(7,24,43,0.5)] transition-transform duration-500 group-hover:translate-x-2 md:right-1">
            {folder.count} Photos
          </span>
        </motion.div>

        <div className="mt-10">
          <div className="relative h-px w-full bg-black/10">
            <span className="absolute inset-0 origin-left scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
          </div>

          <div className="mt-5 flex items-start justify-between gap-4">
            <div>
              <span className="font-serif text-[.8rem] tracking-[.16em] text-black/30">
                No. 0{index + 1}
              </span>

              <h3 className="mt-2 font-serif text-[clamp(1.4rem,2.2vw,1.8rem)] font-normal leading-[1.15] tracking-[-.01em] text-navy transition-transform duration-500 group-hover:translate-x-1">
                {folder.title}
                <span className="text-gold">.</span>
              </h3>

              <p className="mt-2 text-[.62rem] font-semibold uppercase tracking-[.26em] text-gold">
                {folder.tag} · {folder.season}
              </p>
            </div>

            <span className="mt-6 text-gold transition-transform duration-500 group-hover:translate-x-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
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
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

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
              <Eyebrow>Photo Albums</Eyebrow>
              <h2 className="max-w-[20ch] font-serif text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal leading-[1.08] tracking-[-.015em] text-navy">
                The moments <em className="italic text-gold">captured.</em>
              </h2>
            </div>
            <p className="max-w-[34ch] text-[clamp(1rem,1.15vw,1.09rem)] leading-[1.78] text-grey-600">
              Every moment tells a story. Browse our albums to see what God has
              been doing in and through DUCSO.
            </p>
          </motion.div>

          <div className="grid gap-x-[clamp(32px,4vw,64px)] gap-y-[clamp(64px,6vw,96px)] md:grid-cols-2 lg:grid-cols-3">
            {galleries.map((folder, i) => (
              <AlbumCard key={folder.id} folder={folder} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-black/10 pt-8"
          >
            <p className="max-w-[62ch] text-[.95rem] italic leading-[1.78] text-grey-600">
              Every photo is a testimony. Every face is a story.
            </p>
            <ArrowButton href="/contact">Share a memory</ArrowButton>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

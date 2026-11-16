"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-ivory py-[clamp(72px,9vw,132px)]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 md:px-8 lg:px-10">
        <div className="grid items-center gap-[clamp(40px,6vw,88px)] md:grid-cols-[1.02fr_.98fr]">
          {/* ── LEFT: image collage ── */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: EASE }}
            className="relative pr-0 pb-[68px] sm:pr-[56px]"
          >
            {/* gold frame outline */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-[18px] -top-[18px] right-[74px] bottom-[86px] border border-[rgba(185,145,73,0.38)]"
            />

            {/* main image (4:5) */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-navy shadow-[0_28px_70px_-36px_rgba(7,24,43,0.48)]">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80"
                alt="DUCSO students gathered together in fellowship"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover [filter:grayscale(.3)_contrast(1.04)]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/15 to-navy/35 mix-blend-multiply"
              />
            </div>

            {/* sub image (1:1) overlapping bottom-right */}
            <div className="absolute bottom-0 right-0 aspect-square w-[56%] overflow-hidden rounded-sm border-8 border-ivory bg-navy shadow-[0_28px_70px_-36px_rgba(7,24,43,0.48)]">
              <Image
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&q=80"
                alt="A moment of prayer during a DUCSO gathering"
                fill
                sizes="(max-width: 768px) 60vw, 30vw"
                className="object-cover [filter:grayscale(.3)_contrast(1.04)]"
              />
            </div>
          </motion.div>

          {/* ── RIGHT: text ── */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            {/* eyebrow */}
            <p className="mb-[1.35rem] inline-flex items-center gap-3 text-[.685rem] font-semibold uppercase tracking-[.26em] text-gold">
              <span aria-hidden className="block h-px w-9 bg-gold" />
              About DUCSO
            </p>

            {/* title */}
            <h2 className="max-w-[22ch] font-serif text-[clamp(2rem,3.5vw,3.05rem)] font-normal leading-[1.1] text-navy">
              A community of faith and learning at the heart of Dhaka University
            </h2>

            {/* lead */}
            <p className="mt-[1.4rem] max-w-[62ch] text-[clamp(1rem,1.15vw,1.09rem)] leading-[1.78] text-grey-600">
              DUCSO exists to bring Christian students together for worship,
              discipleship and mutual encouragement — and to serve the wider
              university community with humility and integrity.
            </p>

            {/* note */}
            <p className="mt-[1.15rem] text-grey-600">
              For decades, students from across the University of Dhaka have
              found in DUCSO a place to grow in faith while pursuing their
              studies. The organization&apos;s history, milestones and founding
              narrative will be published here once verified by the executive
              committee.
              <span className="ml-2 inline-block border border-[rgba(185,145,73,0.38)] px-2 py-[3px] align-middle text-[.6rem] font-semibold uppercase tracking-[.2em] text-gold">
                Placeholder
              </span>
            </p>

            {/* pillars */}
            <div className="mt-[clamp(32px,4vw,46px)] grid gap-[1.6rem]">
              <div className="border-l-2 border-gold pl-[1.4rem]">
                <h4 className="mb-[.35rem] font-serif text-[1.32rem] text-navy">
                  Vision
                </h4>
                <p className="max-w-[48ch] text-[.94rem] leading-[1.75] text-grey-600">
                  To be a Christ-centred student community that shapes faithful,
                  thoughtful and service-minded graduates for Bangladesh and
                  beyond.
                  <span className="ml-2 inline-block border border-[rgba(185,145,73,0.38)] px-2 py-[3px] align-middle text-[.6rem] font-semibold uppercase tracking-[.2em] text-gold">
                    Draft
                  </span>
                </p>
              </div>
              <div className="border-l-2 border-gold pl-[1.4rem]">
                <h4 className="mb-[.35rem] font-serif text-[1.32rem] text-navy">
                  Mission
                </h4>
                <p className="max-w-[48ch] text-[.94rem] leading-[1.75] text-grey-600">
                  To nurture spiritual growth through worship, Bible study and
                  prayer; to build genuine fellowship; and to serve the
                  university and its surrounding community with compassion.
                  <span className="ml-2 inline-block border border-[rgba(185,145,73,0.38)] px-2 py-[3px] align-middle text-[.6rem] font-semibold uppercase tracking-[.2em] text-gold">
                    Draft
                  </span>
                </p>
              </div>
            </div>

            {/* signature strip */}
            <div className="mt-[2.6rem] flex items-center gap-4 border-t border-black/10 pt-[1.6rem] text-[.72rem] uppercase tracking-[.16em] text-grey-600">
              Dhaka University Christian Students&apos; Organization
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 border-b border-[rgba(185,145,73,0.38)] pb-[5px] text-[.735rem] font-semibold uppercase tracking-[.16em] text-navy transition-colors hover:border-gold hover:text-gold"
              >
                Read our full story
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

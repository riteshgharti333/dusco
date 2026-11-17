"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ArrowButton from "./ArrowButton";
import Container from "./Container";

const EASE = [0.22, 1, 0.36, 1] as const;

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-ivory pt-25"
    >
      <Container className="relative">
        <div className="grid items-center gap-[clamp(40px,6vw,88px)] md:grid-cols-[1.02fr_.98fr]">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: EASE }}
            className="relative pr-0 pb-[68px] sm:pr-[56px]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -left-[18px] -top-[18px] right-[74px] bottom-[86px] border border-[rgba(185,145,73,0.38)]"
            />

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

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            <p className="mb-[1.35rem] inline-flex items-center gap-3 text-[.685rem] font-semibold uppercase tracking-[.26em] text-gold">
              <span aria-hidden className="block h-px w-9 bg-gold" />
              About DUCSO
            </p>

            <h2 className="max-w-[22ch] font-serif text-[clamp(2rem,3.5vw,3.05rem)] font-normal leading-[1.1] text-navy">
              A community of faith and learning at the heart of Dhaka University
            </h2>

            <p className="mt-[1.4rem] max-w-[62ch] text-[clamp(1rem,1.15vw,1.09rem)] leading-[1.78] text-grey-600">
              DUCSO exists to bring Christian students together for worship,
              discipleship and mutual encouragement — and to serve the wider
              university community with humility and integrity.
            </p>

            <p className="mt-[1.15rem] text-grey-600">
              For decades, students from across the University of Dhaka have
              found in DUCSO a place to grow in faith while pursuing their
              studies. The organization&apos;s history, milestones and founding
              narrative will be published here once verified by the executive
              committee.
            </p>

            <div className="mt-[clamp(32px,4vw,46px)] grid gap-[1.6rem]">
              <div className="border-l-2 border-gold pl-[1.4rem]">
                <h4 className="mb-[.35rem] font-serif text-[1.32rem] text-navy">
                  Vision
                </h4>
                <p className="max-w-[48ch] text-[.94rem] leading-[1.75] text-grey-600">
                  To be a Christ-centred student community that shapes faithful,
                  thoughtful and service-minded graduates for Bangladesh and
                  beyond.
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
                </p>
              </div>
            </div>

            <div className="mt-[2.6rem] flex items-center gap-4 border-t border-black/10 pt-[1.6rem] text-[.72rem] uppercase tracking-[.16em] text-grey-600">
              Dhaka University Christian Students&apos; Organization
            </div>

            <div className="mt-8">
              <ArrowButton href="/about">Read our full story</ArrowButton>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;

"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import Container from "./Container";

const EASE = [0.22, 1, 0.36, 1] as const;

interface PageBannerProps {
  label: string;
  titleFirst: string;
  titleSecond: string;
  description: string;
  image: string;
}

const PageBanner = ({
  label,
  titleFirst,
  titleSecond,
  description,
  image,
}: PageBannerProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[min(100svh,880px)] w-full items-end overflow-hidden bg-navy"
    >
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-x-0 -top-[8%] bottom-[-8%]"
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.25, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 2.4, ease: EASE }}
        >
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover [filter:grayscale(.25)_saturate(.95)_contrast(1.04)]"
          />
        </motion.div>
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11,33,55,.7) 0%, rgba(11,33,55,.4) 35%, rgba(11,33,55,.9) 100%), linear-gradient(90deg, rgba(11,33,55,.75) 0%, rgba(11,33,55,.2) 100%)",
        }}
      />

      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: EASE, delay: 0.4 }}
        className="pointer-events-none absolute -right-20 top-12 h-[240px] w-[240px] rounded-full bg-gold/25 blur-[90px] sm:-right-24 sm:top-16 sm:h-[420px] sm:w-[420px] sm:blur-[110px]"
      />

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative z-10 w-full"
      >
        <Container>
          <div className="pb-[clamp(32px,6vw,84px)] pt-[clamp(120px,20vw,240px)]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
              className="mb-6 inline-flex max-w-full items-center gap-3 rounded-sm bg-white/10 px-4 py-2.5 text-[.62rem] font-semibold uppercase tracking-[.22em] text-gold backdrop-blur-md sm:mb-7 sm:text-[.68rem] sm:tracking-[.26em]"
            >
              <span className="relative flex h-2 w-2 flex-none">
                <span className="absolute inline-flex h-full w-full rotate-45 animate-ping bg-gold opacity-70" />
                <span className="relative inline-flex h-2 w-2 rotate-45 bg-gold" />
              </span>
              <span className="truncate">{label}</span>
            </motion.span>

            <div className="grid items-end gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-8">
              <h1 className="font-serif text-[clamp(3.2rem,12.5vw,11.5rem)] font-normal uppercase leading-[.86] tracking-[-.03em] lg:col-span-8">
                <span className="block overflow-hidden pb-[.08em]">
                  <motion.span
                    className="block text-white"
                    initial={{ y: "115%", rotate: 3 }}
                    animate={{ y: 0, rotate: 0 }}
                    transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
                  >
                    {titleFirst}
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-[.08em] pr-[.05em]">
                  <motion.span
                    className="block italic text-gold"
                    initial={{ y: "115%", rotate: 3 }}
                    animate={{ y: 0, rotate: 0 }}
                    transition={{ duration: 1.2, ease: EASE, delay: 0.45 }}
                  >
                    {titleSecond}
                    <span className="text-white">.</span>
                  </motion.span>
                </span>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.8 }}
                className="relative w-full max-w-[560px] lg:col-span-4 lg:max-w-none"
              >
                <div className="rounded-sm bg-navy/60 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-7 lg:p-8">
                  <p className="text-[.98rem] leading-[1.75] text-white/90 sm:text-[1.05rem] lg:text-[1.08rem]">
                    {description}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-4 sm:mt-7">
                    <div className="min-w-0">
                      <p className="text-[.62rem] font-semibold uppercase tracking-[.3em] text-gold">
                        DUCSO
                      </p>
                      <p className="mt-1.5 max-w-[26ch] text-[.74rem] leading-[1.55] text-white/55 sm:text-[.76rem]">
                        The Dhaka University Christian Students Organisation
                      </p>
                    </div>

                    <motion.span
                      aria-hidden
                      animate={{ y: [0, 6, 0] }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                      }}
                      className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-sm bg-gold text-navy sm:h-12 sm:w-12"
                    >
                      <FaArrowDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </motion.div>
    </section>
  );
};

export default PageBanner;

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
  return (
    <section className="relative w-full overflow-hidden bg-blue-900 pt-28 pb-20 md:pt-36 md:pb-24">
      {/* Vertical yellow ribbon */}
      <motion.div
        aria-hidden
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
        className="pointer-events-none absolute left-[68%] top-0 hidden h-full w-10 origin-top bg-yellow-400 -skew-x-[10deg] md:block"
      />

      <div className="section-container relative">
        {/* ═══ Top row: Kicker ═══ */}
        <div className="flex items-start justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="relative inline-block h-4 w-3" aria-hidden>
              <span className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-yellow-400" />
              <span className="absolute left-0 top-[30%] h-[3px] w-full -translate-y-1/2 bg-yellow-400" />
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-yellow-400">
              {label}
            </span>
          </motion.div>
        </div>

        {/* ═══ Massive headline wall ═══ */}
        <div className="relative mt-10 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <h1 className="text-[4.5rem] font-black leading-[0.78] tracking-tighter text-white sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
              <motion.span
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.15 }}
                className="block"
              >
                {titleFirst}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.35 }}
                className="block"
              >
                {titleSecond}
                <span className="text-yellow-400">.</span>
              </motion.span>
            </h1>
          </div>

          {/* Photo strip */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
            className="relative md:col-span-4 md:mb-4"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden md:ml-auto md:max-w-[220px]">
              <Image
                src={image}
                alt={titleFirst}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* ═══ Enhanced bottom editorial row ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
          className=" border-white/10 pt-10 md:pt-12"
        >
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            {/* Left: Big pull quote / description */}
            <div className="md:col-span-8">
              <div className="flex items-start gap-4">
                <span className="mt-2 h-[2px] w-10 shrink-0 bg-yellow-400 md:mt-3" />
                <p className="text-lg leading-relaxed text-white/80 md:text-xl md:leading-[1.5] lg:text-2xl">
                  {description}
                </p>
              </div>
            </div>

            {/* Right: Signature block */}
            <div className="md:col-span-4 md:border-l md:border-white/10 md:pl-10">
              <span className="block text-[10px] font-black uppercase tracking-[0.35em] text-yellow-400">
                — DUCSO
              </span>
              <p className="mt-3 text-sm font-medium leading-relaxed text-white/60">
                The Dhaka University Christian Students Organisation
              </p>

              {/* Animated underline */}
              <div className="mt-6 h-[2px] w-16 origin-left bg-white/20">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, ease: EASE, delay: 1 }}
                  className="h-full w-full origin-left bg-yellow-400"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner;

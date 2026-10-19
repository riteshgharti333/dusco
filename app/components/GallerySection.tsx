"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const GallerySection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-blue-900 py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* ── HEADER ── */}
        <div className="mb-12 flex flex-col items-center text-center md:mb-24 md:flex-row md:items-end md:justify-between md:text-left">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex items-center gap-3">
              <span className="relative inline-block h-4 w-3" aria-hidden>
                <span className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-yellow-400" />
                <span className="absolute left-0 top-[30%] h-[3px] w-full -translate-y-1/2 bg-yellow-400" />
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-yellow-400">
                Life at DUSCO
              </span>
            </div>

            <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl">
              THE
              <br />
              <span className="relative inline-block">
                <span
                  aria-hidden
                  className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                />
                <span className="relative z-10 px-1 italic text-blue-900 uppercase">
                  moments.
                </span>
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            className="mt-8 md:mt-0 md:max-w-xs"
          >
            <p className="text-sm leading-relaxed text-white/70">
              A glimpse into the life of DUSCO — from loud worship nights to
              quiet conversations. These are the faces and moments that make us who we are.
            </p>
          </motion.div>
        </div>

        {/* ── LAYOUT CONTAINER ── */}
        {/* On mobile: standard grid. On desktop: absolute scattered frame */}
        <div className="relative mx-auto w-full max-w-5xl grid grid-cols-2 gap-4 md:block md:h-[950px] md:gap-0">
          
          {/* 
            MOBILE OPTIMIZATION: 
            We use `static md:absolute` so on mobile the cards flow naturally in a grid, 
            but on desktop they jump back to their absolute positions.
          */}

          {/* 1. Top Left */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative z-10 w-full border-2 border-white bg-white shadow-xl transition-transform duration-500 hover:z-50 hover:scale-105 hover:rotate-0 -rotate-3 md:absolute md:left-0 md:top-0 md:w-[28%] md:border-4 md:-rotate-6"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80" alt="Worship" fill className="object-cover" />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>
            <div className="bg-white p-1.5 text-center md:p-3">
              <span className="text-[7px] font-black uppercase tracking-widest text-yellow-600 md:text-[10px]">Praise Night</span>
              <h3 className="text-[10px] font-black uppercase text-blue-900 md:text-sm">Worship</h3>
            </div>
          </motion.div>

          {/* 2. Top Center */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="relative z-20 w-full border-2 border-white bg-white shadow-xl transition-transform duration-500 hover:z-50 hover:scale-105 hover:rotate-0 rotate-2 md:absolute md:left-[36%] md:top-0 md:w-[28%] md:border-4 md:rotate-2"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80" alt="Community" fill className="object-cover" />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>
            <div className="bg-white p-1.5 text-center md:p-3">
              <span className="text-[7px] font-black uppercase tracking-widest text-yellow-600 md:text-[10px]">Small Groups</span>
              <h3 className="text-[10px] font-black uppercase text-blue-900 md:text-sm">Community</h3>
            </div>
          </motion.div>

          {/* 3. Top Right */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="relative z-10 w-full border-2 border-white bg-white shadow-xl transition-transform duration-500 hover:z-50 hover:scale-105 hover:rotate-0 rotate-3 md:absolute md:right-0 md:top-0 md:w-[28%] md:border-4 md:rotate-6"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=800&q=80" alt="Outreach" fill className="object-cover" />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>
            <div className="bg-white p-1.5 text-center md:p-3">
              <span className="text-[7px] font-black uppercase tracking-widest text-yellow-600 md:text-[10px]">Campus Missions</span>
              <h3 className="text-[10px] font-black uppercase text-blue-900 md:text-sm">Outreach</h3>
            </div>
          </motion.div>

          {/* 4. Left Card (Middle) */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
            className="relative z-30 w-full border-2 border-yellow-400 bg-white shadow-xl transition-transform duration-500 hover:z-50 hover:scale-105 hover:rotate-0 -rotate-6 md:absolute md:left-[-4%] md:top-1/2 md:w-[24%] md:-translate-y-1/2 md:border-4 md:-rotate-8"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80" alt="Baptisms" fill className="object-cover" />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>
            <div className="bg-white p-1.5 text-center md:p-3">
              <span className="text-[7px] font-black uppercase tracking-widest text-blue-900 md:text-[10px]">Milestones</span>
              <h3 className="text-[10px] font-black uppercase text-blue-900 md:text-sm">Baptisms</h3>
            </div>
          </motion.div>

          {/* 5. Right Card (Middle) */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
            className="relative z-30 w-full border-2 border-white bg-white shadow-xl transition-transform duration-500 hover:z-50 hover:scale-105 hover:rotate-0 rotate-6 md:absolute md:right-[-4%] md:top-1/2 md:w-[24%] md:-translate-y-1/2 md:border-4 md:rotate-8"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80" alt="Retreat" fill className="object-cover" />
            </div>
            <div className="bg-white p-1.5 text-center md:p-3">
              <span className="text-[7px] font-black uppercase tracking-widest text-blue-900 md:text-[10px]">Getaway</span>
              <h3 className="text-[10px] font-black uppercase text-blue-900 md:text-sm">Retreat</h3>
            </div>
          </motion.div>

          {/* 6. Bottom Left */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
            className="relative z-10 w-full border-2 border-white bg-white shadow-xl transition-transform duration-500 hover:z-50 hover:scale-105 hover:rotate-0 rotate-6 md:absolute md:left-0 md:bottom-0 md:w-[28%] md:border-4 md:rotate-6"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80" alt="Prayer" fill className="object-cover" />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>
            <div className="bg-white p-1.5 text-center md:p-3">
              <span className="text-[7px] font-black uppercase tracking-widest text-yellow-600 md:text-[10px]">Morning Devotion</span>
              <h3 className="text-[10px] font-black uppercase text-blue-900 md:text-sm">Prayer</h3>
            </div>
          </motion.div>

          {/* 7. Bottom Center */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
            className="relative z-20 w-full border-2 border-white bg-white shadow-xl transition-transform duration-500 hover:z-50 hover:scale-105 hover:rotate-0 -rotate-2 md:absolute md:left-[36%] md:bottom-0 md:w-[28%] md:border-4 md:-rotate-2"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80" alt="Fellowship" fill className="object-cover" />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>
            <div className="bg-white p-1.5 text-center md:p-3">
              <span className="text-[7px] font-black uppercase tracking-widest text-yellow-600 md:text-[10px]">Weekly Meets</span>
              <h3 className="text-[10px] font-black uppercase text-blue-900 md:text-sm">Fellowship</h3>
            </div>
          </motion.div>

          {/* 8. Bottom Right */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
            className="relative z-10 w-full border-2 border-white bg-white shadow-xl transition-transform duration-500 hover:z-50 hover:scale-105 hover:rotate-0 -rotate-3 md:absolute md:right-0 md:bottom-0 md:w-[28%] md:border-4 md:-rotate-6"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=800&q=80" alt="Service" fill className="object-cover" />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>
            <div className="bg-white p-1.5 text-center md:p-3">
              <span className="text-[7px] font-black uppercase tracking-widest text-yellow-600 md:text-[10px]">City Outreach</span>
              <h3 className="text-[10px] font-black uppercase text-blue-900 md:text-sm">Service</h3>
            </div>
          </motion.div>

          {/* ── CENTRAL HERO BUTTON ── */}
          {/* On mobile, this becomes a standard button at the bottom of the grid. 
              On desktop, it is absolutely centered. */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.8 }}
            className="relative z-40 col-span-2 mt-8 flex flex-col items-center justify-center text-center md:absolute md:left-1/2 md:top-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2"
          >
            {/* Background glow (only visible on desktop) */}
            <div className="absolute hidden h-[200%] w-[200%] rounded-full bg-blue-900/90 blur-3xl md:block" />
            
            <span className="relative z-10 mb-2 text-[9px] font-black uppercase tracking-[0.4em] text-white/50 md:mb-6 md:text-[10px]">
              Explore
            </span>
            
            <Link
              href="/gallery"
              className="group relative z-10 inline-flex overflow-hidden bg-yellow-400 shadow-[4px_4px_0_0_#ffffff] md:shadow-[8px_8px_0_0_#ffffff]"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
              <span className="relative inline-flex items-center gap-2 px-8 py-3 text-xs font-black uppercase tracking-wider text-blue-900 transition-colors duration-300 md:gap-3 md:px-12 md:py-5 md:text-base">
                Full Gallery
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GallerySection;
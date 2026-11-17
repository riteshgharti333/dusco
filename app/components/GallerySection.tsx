"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./Container";
import Button from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";

const EASE = [0.22, 1, 0.36, 1] as const;

const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="relative w-full overflow-hidden bg-navy mt-25 py-25"
    >
      <Container className="relative">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-[clamp(40px,5vw,68px)]"
        >
          <p className="mb-[1.35rem] inline-flex items-center gap-3 text-[.685rem] font-semibold uppercase tracking-[.26em] text-gold">
            <span aria-hidden className="block h-px w-9 bg-gold" />
            Life at DUCSO
          </p>
          <h2 className="max-w-[22ch] font-serif text-[clamp(2rem,3.5vw,3.05rem)] font-normal leading-[1.1] text-white">
            Moments from the life of DUCSO
          </h2>
          <p className="mt-[1.1rem] max-w-[62ch] text-[clamp(1rem,1.15vw,1.09rem)] leading-[1.78] text-white/70">
            A glimpse into the life of DUCSO — from loud worship nights to quiet
            conversations. These are the faces and moments that make us who we
            are.
          </p>
        </motion.div>

        <div className="relative mx-auto grid w-full max-w-5xl grid-cols-2 gap-4 md:block md:h-[950px] md:gap-0">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative z-10 w-full -rotate-3 border-2 border-white/80 bg-ivory shadow-xl transition-transform duration-500 hover:z-50 hover:rotate-0 hover:scale-105 md:absolute md:left-0 md:top-0 md:w-[28%] md:-rotate-6 md:border-4"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
                alt="Worship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
            </div>
            <div className="bg-ivory p-1.5 text-center md:p-3">
              <span className="text-[7px] font-semibold uppercase tracking-widest text-gold md:text-[10px]">
                Praise Night
              </span>
              <h3 className="font-serif text-[10px] uppercase tracking-wide text-navy md:text-sm">
                Worship
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="relative z-20 w-full rotate-2 border-2 border-white/80 bg-ivory shadow-xl transition-transform duration-500 hover:z-50 hover:rotate-0 hover:scale-105 md:absolute md:left-[36%] md:top-0 md:w-[28%] md:rotate-2 md:border-4"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                alt="Community"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
            </div>
            <div className="bg-ivory p-1.5 text-center md:p-3">
              <span className="text-[7px] font-semibold uppercase tracking-widest text-gold md:text-[10px]">
                Small Groups
              </span>
              <h3 className="font-serif text-[10px] uppercase tracking-wide text-navy md:text-sm">
                Community
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="relative z-10 w-full rotate-3 border-2 border-white/80 bg-ivory shadow-xl transition-transform duration-500 hover:z-50 hover:rotate-0 hover:scale-105 md:absolute md:right-0 md:top-0 md:w-[28%] md:rotate-6 md:border-4"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=800&q=80"
                alt="Outreach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
            </div>
            <div className="bg-ivory p-1.5 text-center md:p-3">
              <span className="text-[7px] font-semibold uppercase tracking-widest text-gold md:text-[10px]">
                Campus Missions
              </span>
              <h3 className="font-serif text-[10px] uppercase tracking-wide text-navy md:text-sm">
                Outreach
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
            className="relative z-30 w-full -rotate-6 border-2 border-gold bg-ivory shadow-xl transition-transform duration-500 hover:z-50 hover:rotate-0 hover:scale-105 md:absolute md:left-[-4%] md:top-1/2 md:w-[24%] md:-translate-y-1/2 md:-rotate-8 md:border-4"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
                alt="Baptisms"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
            </div>
            <div className="bg-ivory p-1.5 text-center md:p-3">
              <span className="text-[7px] font-semibold uppercase tracking-widest text-gold md:text-[10px]">
                Milestones
              </span>
              <h3 className="font-serif text-[10px] uppercase tracking-wide text-navy md:text-sm">
                Baptisms
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
            className="relative z-30 w-full rotate-6 border-2 border-white/80 bg-ivory shadow-xl transition-transform duration-500 hover:z-50 hover:rotate-0 hover:scale-105 md:absolute md:right-[-4%] md:top-1/2 md:w-[24%] md:-translate-y-1/2 md:rotate-8 md:border-4"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80"
                alt="Retreat"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
            </div>
            <div className="bg-ivory p-1.5 text-center md:p-3">
              <span className="text-[7px] font-semibold uppercase tracking-widest text-gold md:text-[10px]">
                Getaway
              </span>
              <h3 className="font-serif text-[10px] uppercase tracking-wide text-navy md:text-sm">
                Retreat
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
            className="relative z-10 w-full rotate-6 border-2 border-white/80 bg-ivory shadow-xl transition-transform duration-500 hover:z-50 hover:rotate-0 hover:scale-105 md:absolute md:bottom-0 md:left-0 md:w-[28%] md:rotate-6 md:border-4"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80"
                alt="Prayer"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
            </div>
            <div className="bg-ivory p-1.5 text-center md:p-3">
              <span className="text-[7px] font-semibold uppercase tracking-widest text-gold md:text-[10px]">
                Morning Devotion
              </span>
              <h3 className="font-serif text-[10px] uppercase tracking-wide text-navy md:text-sm">
                Prayer
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
            className="relative z-20 w-full -rotate-2 border-2 border-white/80 bg-ivory shadow-xl transition-transform duration-500 hover:z-50 hover:rotate-0 hover:scale-105 md:absolute md:bottom-0 md:left-[36%] md:w-[28%] md:-rotate-2 md:border-4"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80"
                alt="Fellowship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
            </div>
            <div className="bg-ivory p-1.5 text-center md:p-3">
              <span className="text-[7px] font-semibold uppercase tracking-widest text-gold md:text-[10px]">
                Weekly Meets
              </span>
              <h3 className="font-serif text-[10px] uppercase tracking-wide text-navy md:text-sm">
                Fellowship
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
            className="relative z-10 w-full -rotate-3 border-2 border-white/80 bg-ivory shadow-xl transition-transform duration-500 hover:z-50 hover:rotate-0 hover:scale-105 md:absolute md:right-0 md:bottom-0 md:w-[28%] md:-rotate-6 md:border-4"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=800&q=80"
                alt="Service"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
            </div>
            <div className="bg-ivory p-1.5 text-center md:p-3">
              <span className="text-[7px] font-semibold uppercase tracking-widest text-gold md:text-[10px]">
                City Outreach
              </span>
              <h3 className="font-serif text-[10px] uppercase tracking-wide text-navy md:text-sm">
                Service
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.8 }}
            className="relative z-40 col-span-2 mt-8 flex flex-col items-center justify-center text-center md:absolute md:left-1/2 md:top-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2"
          >
            <div className="absolute hidden h-[200%] w-[200%] rounded-full bg-navy/90 blur-3xl md:block" />
            <span className="relative z-10 mb-3 text-[9px] font-semibold uppercase tracking-[0.4em] text-white/60 md:mb-6 md:text-[10px]">
              Explore
            </span>

            <div className="relative z-10">
              <Button href="/gallery" variant="primary" size="md">
                Full Gallery
                <FaArrowRightLong className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default GallerySection;

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

const EASE = [0.22, 1, 0.36, 1] as const;

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    caption: "Community Night",
    sub: "Every Friday",
    offset: "translate-y-0",
  },
  {
    src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
    caption: "Worship",
    sub: "Sunday Gatherings",
    offset: "translate-y-8 md:translate-y-12",
  },
  {
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
    caption: "Small Groups",
    sub: "Weekly",
    offset: "translate-y-0",
  },
  {
    src: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?w=800&q=80",
    caption: "Service",
    sub: "Campus Outreach",
    offset: "translate-y-8 md:translate-y-12",
  },
];

const AboutSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
      {/* Rotated side rail */}
      <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 md:block">
        <div className="flex h-full items-center justify-center">
          <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black uppercase tracking-[0.6em] text-blue-900/30">
            Manifesto · DUSCO · Est. 2019
          </span>
        </div>
      </div>

      <div className="section-container">
        <SectionHeader
          label="Who We Are"
          description="DUSCO is the Dahaka University Student Christian Organization — a family of believers pursuing God together on campus. Different backgrounds. One faith."
          title={
            <>
              WE ARE
              <br />
              <span className="relative inline-block">
                <span
                  aria-hidden
                  className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                />
                <span className="relative z-10 px-1 italic">ONE BODY</span>
              </span>
              <br />
              <span className="text-blue-900">MANY STORIES</span>
            </>
          }
        />

        {/* ── IMAGE GRID + STORY ── */}
        <div className="mt-16 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-14">
          {/* LEFT — 4 images in 2x2 diagonal cascade */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: EASE }}
            className="relative md:col-span-6"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {gallery.map((img, i) => (
                <motion.div
                  key={img.caption}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    ease: EASE,
                    delay: 0.15 + i * 0.1,
                  }}
                  className={`relative w-full pr-2 pb-2 ${img.offset}`}
                >
                  {/* Yellow shadow — fills the padded area (peeks 8px bottom-right) */}
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-yellow-400 ml-3 mt-3"
                    style={{
                      clipPath:
                        "polygon(28px 0, 100% 0, 100% 100%, 0 100%, 0 28px)",
                    }}
                  />

                  {/* Card frame — sized to the aspect ratio, sits inside the padding */}
                  <div className="relative aspect-[3/4] w-full">
                    {/* Blue border layer */}
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-blue-900"
                      style={{
                        clipPath:
                          "polygon(28px 0, 100% 0, 100% 100%, 0 100%, 0 28px)",
                      }}
                    />

                    {/* Image face */}
                    <div
                      className="relative h-full w-full overflow-hidden"
                      style={{
                        clipPath:
                          "polygon(26px 0, 100% 0, 100% 100%, 0 100%, 0 26px)",
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.caption}
                        fill
                        className="object-cover"
                      />

                      {/* Bottom gradient */}
                      <span
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-1/2"
                        style={{
                          background:
                            "linear-gradient(180deg, transparent 0%, rgba(30,58,138,0.92) 100%)",
                        }}
                      />

                      {/* Caption */}
                      <div className="absolute inset-x-0 bottom-0 p-3">
                        <span className="block text-[8px] font-bold uppercase tracking-[0.25em] text-yellow-400">
                          {img.sub}
                        </span>
                        <span className="mt-0.5 block text-xs font-black uppercase leading-tight text-white">
                          {img.caption}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — story paragraph + verse + CTA */}
          <div className="flex flex-col justify-center md:col-span-6">
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            >
              <div className="flex items-baseline gap-3">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-600">
                  Our Story
                </span>
                <span className="h-[2px] flex-1 bg-blue-900/10" />
              </div>

              <p className="mt-6 text-base leading-relaxed text-blue-900/80">
                What started as a handful of students praying in a dorm room has
                grown into one of the largest Christian communities at Dahaka
                University. Over five years, DUSCO has become a place where
                faith is not just spoken — it is lived out.
              </p>

              <p className="mt-4 text-base leading-relaxed text-blue-900/70">
                We worship together, study Scripture together, serve the campus
                together, and carry each other through the hardest seasons of
                university life. Every student has a place here — no matter
                where their story begins.
              </p>
            </motion.div>

            {/* Verse block */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
              className="mt-10 border-l-4 border-yellow-400 pl-5"
            >
              <p className="text-lg font-light italic leading-snug text-blue-900/80">
                “For where two or three gather in my name, there am I with
                them.”
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-[2px] w-6 bg-yellow-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-600">
                  Matthew 18:20
                </span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
              className="mt-10"
            >
              <Button
                href="/about"
                variant="secondary"
                size="md"
                onBlue={false}
              >
                Our Full Story
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
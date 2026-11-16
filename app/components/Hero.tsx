"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  animate,
  useScroll,
  useTransform,
} from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const EASE = [0.22, 1, 0.36, 1] as const;
const SLIDE_DELAY = 6000;

/* 5 university / campus / fellowship photos */
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1900&auto=format&fit=crop",
];

const stats = [
  { to: 150, suffix: "+", label: "Members" },
  { to: 20, suffix: "", label: "Events / yr" },
  { to: 5, suffix: "", label: "Years" },
];

const headingLines = [
  { text: "Rooted in faith.", em: false },
  { text: "Gathered in fellowship.", em: true },
  { text: "Sent to serve.", em: false },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
});

const CountUp = ({
  to,
  suffix = "",
  duration = 1.6,
  delay = 0,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}) => {
  const [value, setValue] = useState(0);
  const mv = useMotionValue(0);

  useEffect(() => {
    const controls = animate(mv, to, {
      duration,
      delay,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [mv, to, duration, delay]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[min(100svh,980px)] items-end overflow-hidden bg-navy"
      style={{
        /* Instantly-painted first image (SSR, before Swiper mounts) */
        backgroundImage: `url(${HERO_IMAGES[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background slides */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-x-0 -top-[8%] bottom-[-8%] z-0"
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: SLIDE_DELAY, disableOnInteraction: false }}
          loop
          speed={1600}
          allowTouchMove={false}
          onSlideChange={(s) => setActive(s.realIndex)}
          className="h-full w-full"
        >
          {HERO_IMAGES.map((src, i) => (
            <SwiperSlide key={src}>
              <div className="relative h-full w-full overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  initial={false}
                  animate={{ scale: active === i ? 1.16 : 1.04 }}
                  transition={{
                    duration: active === i ? SLIDE_DELAY / 1000 + 2 : 1.6,
                    ease: "linear",
                  }}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    priority={i === 0}
                    sizes="100vw"
                    className="object-cover"
                    style={{
                      filter:
                        "grayscale(0.15) contrast(1.02) brightness(0.95) saturate(1.05)",
                    }}
                  />
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Navy gradient overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(180deg,
              rgba(11,33,55,0.75) 0%,
              rgba(11,33,55,0.45) 25%,
              rgba(11,33,55,0.55) 60%,
              rgba(11,33,55,0.92) 100%),
            linear-gradient(90deg,
              rgba(11,33,55,0.85) 0%,
              rgba(11,33,55,0.55) 50%,
              rgba(11,33,55,0.25) 100%)
          `,
        }}
      />

      {/* Content */}
      <motion.div style={{ y: contentY }} className="relative z-10 w-full">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="w-full pt-[clamp(140px,20vh,200px)]">
            {/* eyebrow */}
            <motion.p
              {...fadeUp(0)}
              className="mb-8 inline-flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]"
            >
              <motion.span
                aria-hidden
                className="block h-px bg-gold"
                initial={{ width: 0 }}
                animate={{ width: 56 }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
              />
              University of Dhaka · Since 1980
            </motion.p>

            {/* heading */}
            <h1 className="max-w-[18ch] font-serif text-[clamp(2.7rem,6.4vw,5.2rem)] font-normal leading-[1.04] tracking-[-0.02em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.7)]">
              {headingLines.map((line, i) => (
                <span
                  key={line.text}
                  className="block overflow-hidden pb-[0.08em]"
                >
                  <motion.span
                    className="block"
                    initial={{ y: "115%", rotate: 2 }}
                    animate={{ y: 0, rotate: 0 }}
                    transition={{
                      duration: 1.1,
                      ease: EASE,
                      delay: 0.15 + i * 0.12,
                    }}
                  >
                    {line.em ? (
                      <>
                        Gathered in{" "}
                        <em className="italic text-gold">fellowship</em>.
                      </>
                    ) : (
                      line.text
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* paragraph */}
            <motion.div
              {...fadeUp(0.55)}
              className="mt-9 flex max-w-[58ch] gap-5"
            >
              <span
                aria-hidden
                className="mt-1 hidden w-px shrink-0 bg-gradient-to-b from-gold to-transparent sm:block"
              />
              <p className="text-[clamp(0.98rem,1.15vw,1.1rem)] leading-[1.85] text-white/95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.75)]">
                The Dhaka University Christian Students&apos; Organization is a
                community of students growing together in Christian faith,
                scholarship, leadership and service — on campus and beyond.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.7)} className="mt-11 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-sm border border-gold bg-gold px-[1.85rem] py-[0.95rem] text-[.735rem] font-semibold uppercase tracking-[.16em] text-white no-underline shadow-[0_10px_40px_-10px_rgba(185,145,73,0.7)] transition-all duration-300 hover:-translate-y-px hover:opacity-90"
              >
                <span className="relative inline-flex items-center gap-3">
                  Explore DUCSO
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
                </span>
              </Link>

              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-3 rounded-sm border border-white/40 bg-white/5 px-[1.85rem] py-[0.95rem] text-[.735rem] font-semibold uppercase tracking-[.16em] text-white no-underline backdrop-blur-md transition-all duration-300 hover:-translate-y-px hover:border-gold hover:bg-white/10 hover:text-gold"
              >
                Upcoming Events
              </Link>
            </motion.div>

            {/* stats + slide controls */}
            <motion.div
              {...fadeUp(0.85)}
              className="mt-[clamp(48px,8vh,90px)] flex flex-col gap-6 pb-8 md:flex-row md:items-end md:justify-between md:pb-12"
            >
              <div className="grid grid-cols-2 overflow-hidden rounded-sm bg-transparent md:grid-cols-3">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="relative flex flex-col gap-2 px-6 py-5 md:px-8"
                  >
                    {i > 0 && (
                      <span
                        aria-hidden
                        className="absolute left-0 top-5 bottom-5 hidden w-px bg-white/25 md:block"
                      />
                    )}
                    <span className="font-serif text-[clamp(2.2rem,3.4vw,3rem)] font-semibold leading-none tracking-[-0.01em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                      <CountUp
                        to={s.to}
                        suffix={s.suffix}
                        delay={0.9 + i * 0.15}
                      />
                    </span>
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-gold">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* slide counter + progress */}
              <div className="flex items-center gap-5" aria-hidden>
                <span className="font-serif text-sm tracking-[0.2em] text-gold">
                  0{active + 1}
                  <span className="mx-2 text-gold/60">/</span>
                  <span className="text-gold/70">0{HERO_IMAGES.length}</span>
                </span>
                <div className="flex gap-2">
                  {HERO_IMAGES.map((_, i) => (
                    <span
                      key={i}
                      className="relative block h-[2px] w-12 overflow-hidden bg-white/25"
                    >
                      {active === i && (
                        <motion.span
                          key={`bar-${active}`}
                          className="absolute inset-y-0 left-0 bg-gold"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: SLIDE_DELAY / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                      {active > i && (
                        <span className="absolute inset-0 bg-gold/70" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

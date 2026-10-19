"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

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
  const rounded = useTransform(mv, (v) => Math.round(v));

  useEffect(() => {
    const controls = animate(mv, to, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [mv, to, duration, delay]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
};

const stats = [
  { num: 150, suffix: "+", label: "Members" },
  { num: 20, suffix: "", label: "Events / yr" },
  { num: 5, suffix: "", label: "Years" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-blue-900 pt-24 md:pt-28">
      {/* Right half — diagonal image panel */}
      <motion.div
        aria-hidden
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 md:block"
        style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="DUSCO worship gathering"
          fill
          className="object-cover"
          priority
        />
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-1/3"
          style={{
            background:
              "linear-gradient(90deg, rgba(30,58,138,0.95) 0%, rgba(30,58,138,0) 100%)",
          }}
        />
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{
            background:
              "linear-gradient(180deg, rgba(30,58,138,0) 0%, rgba(30,58,138,0.9) 100%)",
          }}
        />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-10 md:grid-cols-12">
          {/* LEFT */}
          <motion.div
            initial={{ x: "-60px", opacity: 0 }}
            animate={{ x: "0px", opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative z-10 md:col-span-6"
          >
            {/* kicker */}
            <motion.div
              initial={{ x: "-30px", opacity: 0 }}
              animate={{ x: "0px", opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-[3px] w-10 bg-yellow-400" />
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-yellow-400">
                Est. 2019 · DUSCO
              </span>
            </motion.div>

            {/* headline */}
            <motion.h1
              initial={{ x: "-40px", opacity: 0 }}
              animate={{ x: "0px", opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              className="text-[2.6rem] font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-[4.2rem] lg:text-[5rem]"
            >
              <span className="block">FAITH</span>
              <span className="mt-1 block">
                <span className="relative inline-block">
                  <span
                    aria-hidden
                    className="absolute -inset-x-2 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                  />
                  <span className="relative z-10 px-1 text-blue-900">IN</span>
                </span>
                <span className="relative ml-3 inline-block">
                  <span
                    aria-hidden
                    className="absolute -inset-x-2 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                  />
                  <span className="relative z-10 px-1 text-blue-900">
                    MOTION
                  </span>
                </span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ x: "-30px", opacity: 0 }}
              animate={{ x: "0px", opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
              className="mt-6 flex gap-4"
            >
              <span className="mt-1 w-[3px] bg-yellow-400" />
              <p className="max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
                We are a community of believers at Dahaka University — gathering
                weekly to worship, learn, and serve. Come as you are. Leave
                changed.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: "-30px", opacity: 0 }}
              animate={{ x: "0px", opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/join"
                className="group relative overflow-hidden bg-yellow-400 -skew-x-[20deg] shadow-[6px_6px_0_0_#ffffff]"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                <span className="relative inline-flex items-center gap-2 px-8 py-4 text-sm font-black uppercase tracking-wider text-blue-900 skew-x-[20deg]">
                  Join Us
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>

              <Link
                href="/events"
                className="group inline-flex items-center gap-3 px-2 py-3 text-sm font-black uppercase tracking-wider text-white"
              >
                <span className="relative">
                  Watch Recap
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-0" />
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-yellow-400 origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </span>
                <span className="flex h-9 w-9 items-center justify-center border-2 border-white text-white transition-colors group-hover:bg-yellow-400 group-hover:border-yellow-400 group-hover:text-blue-900">
                  ▶
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <div className="hidden md:col-span-6 md:block" />
        </div>
      </div>

      {/* ─── STATS — diagonal slanted bar over the image ─── */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
        className="pointer-events-none absolute bottom-14 right-6 z-20 hidden md:block lg:right-10"
      >
        {/* yellow shadow layer (offset) */}
        <span
          aria-hidden
          className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-400 -skew-x-[20deg]"
        />
        {/* blue border layer */}
        <span
          aria-hidden
          className="absolute inset-0 bg-blue-900 -skew-x-[20deg]"
        />
        {/* white face — counter-slanted content inside */}
        <div className="pointer-events-auto relative -skew-x-[20deg] bg-white">
          <div className="flex items-stretch">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col px-6 py-4 skew-x-[20deg] ${
                  i !== stats.length - 1 ? "border-r-2 border-blue-900/10" : ""
                }`}
              >
                <span className="text-3xl font-black leading-none text-blue-900">
                  <CountUp
                    to={s.num}
                    suffix={s.suffix}
                    delay={0.9 + i * 0.15}
                  />
                </span>
                <span className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-yellow-600">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

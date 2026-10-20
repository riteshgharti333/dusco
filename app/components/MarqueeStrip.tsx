"use client";

import { motion } from "framer-motion";

const words = ["FAITH", "COMMUNITY", "PURPOSE", "LOVE", "GRACE", "HOPE"];

const MarqueeStrip = () => {
  return (
    <section className="relative w-full overflow-hidden border-y border-blue-900/10 bg-white py-8 md:py-12">
      {/* The Marquee Track using Framer Motion */}
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Slightly slower for a calmer feel
        }}
      >
        {/* We duplicate the list twice for the seamless infinite effect */}
        {[0, 1].map((loopIdx) => (
          <div
            key={loopIdx}
            className="flex shrink-0 items-center"
            aria-hidden={loopIdx === 1}
          >
            {words.map((word, i) => (
              <div
                key={`${loopIdx}-${i}`}
                className="flex items-center gap-8 px-8 md:gap-12 md:px-12"
              >
                {/* Soft, faded blue text */}
                <span className="text-5xl font-black uppercase tracking-tighter text-blue-900/20 md:text-7xl lg:text-8xl">
                  {word}
                </span>

                {/* Subtle yellow cross separator */}
                <span
                  className="relative inline-block h-8 w-6 shrink-0 md:h-10 md:w-8"
                  aria-hidden
                >
                  <span className="absolute left-1/2 top-0 h-full w-[4px] -translate-x-1/2 bg-yellow-400/40 md:w-[5px]" />
                  <span className="absolute left-0 top-[30%] h-[4px] w-full -translate-y-1/2 bg-yellow-400/40 md:h-[5px]" />
                </span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default MarqueeStrip;

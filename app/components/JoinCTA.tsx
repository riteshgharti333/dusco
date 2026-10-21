"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

const EASE = [0.22, 1, 0.36, 1] as const;

const JoinCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Container with a fixed minimum height for the banner */}
      <div className="relative min-h-[550px] w-full md:min-h-[650px]">
        
        {/* 1. Background Image (Full Width) */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&q=80"
            alt="Students gathering"
            fill
            className="object-cover"
          />
          {/* Dark overlay so the image doesn't overpower the text */}
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
        </div>

        {/* 2. The Massive Diagonal Blue Block */}
        {/* On mobile, it's a simple bottom block. On desktop, it cuts diagonally. */}
        <div 
          className="absolute inset-0 z-10 flex flex-col justify-center px-6 py-16 md:w-[60%] md:py-0 md:pl-12 lg:pl-24"
          style={{
            // Adjusted the slant to be more pronounced and leave room for the yellow line
            clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)"
          }}
        >
          {/* 3. The Yellow Diagonal Accent Line */}
          <div 
            aria-hidden
            className="absolute inset-y-0 right-0 w-[10px] bg-yellow-400 hidden md:block"
            style={{ 
              // Matched the slant of the blue block (100% to 75% is a -25% shift)
              // transform applies to the yellow line itself
              transform: "translateX(10px)" 
            }}
          />

          <div className="relative z-20 max-w-xl">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              {/* Kicker */}
              <div className="flex items-center gap-3">
                <span className="relative inline-block h-4 w-3" aria-hidden>
                  <span className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-yellow-400" />
                  <span className="absolute left-0 top-[30%] h-[3px] w-full -translate-y-1/2 bg-yellow-400" />
                </span>
                <span className="text-[11px] font-black uppercase tracking-[0.28em] text-yellow-400">
                  Your Invitation
                </span>
              </div>

              {/* Headline */}
              <h2 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
                FIND
                <br />
                YOUR
                <br />
                <span className="relative inline-block">
                  <span
                    aria-hidden
                    className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                  />
                  <span className="relative z-10 px-1 italic uppercase text-blue-900">
                    home.
                  </span>
                </span>
              </h2>

              {/* Paragraph */}
              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/80 md:text-base">
                You don't have to walk through university alone. Join us this
                Friday for worship, community, and a family that will stick
                closer than a brother.
              </p>

              {/* CTA Button */}
              <div className="mt-10">
                <Button href="/contact" variant="primary" size="lg" onBlue={true}>
                  Join Us
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Button>
              </div>

              {/* NEW: Tagline instead of Date */}
              <div className="mt-8 flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-yellow-400" />
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/60">
                  A place to belong. A people to grow with.
                </p>
              </div>

            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JoinCTA;
"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Button, { Arrow } from "./Button";

const EASE = [0.22, 1, 0.36, 1] as const;

const JoinCTA = () => {
  return (
    <section
      id="join"
      className="relative w-full overflow-hidden border-t border-black/10 bg-ivory mt-25 py-25"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-4 top-8 hidden h-10 w-10 border-l border-t border-gold/30 md:block lg:left-8 lg:top-12"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-4 top-8 hidden h-10 w-10 border-r border-t border-gold/30 md:block lg:right-8 lg:top-12"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-4 hidden h-10 w-10 border-b border-l border-gold/30 md:block lg:bottom-12 lg:left-8"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-8 right-4 hidden h-10 w-10 border-b border-r border-gold/30 md:block lg:bottom-12 lg:right-8"
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto max-w-[820px] text-center"
        >
          <p className="mb-[1.35rem] inline-flex items-center gap-3 text-[.685rem] font-semibold uppercase tracking-[.26em] text-gold">
            <span aria-hidden className="block h-px w-9 bg-gold" />
            Your Invitation
            <span aria-hidden className="block h-px w-9 bg-gold" />
          </p>

          <h2 className="mx-auto max-w-[18ch] font-serif text-[clamp(2.4rem,4.8vw,3.9rem)] font-normal leading-[1.02] tracking-[-.02em] text-navy">
            Find your <em className="italic text-gold">home</em>
            <br />
            in a community that
            <br />
            feels like <em className="italic text-gold">family.</em>
          </h2>

          <div
            aria-hidden
            className="mx-auto mt-8 flex items-center justify-center gap-1.5"
          >
            <span className="h-1 w-1 rounded-full bg-gold/60" />
            <span className="h-1 w-1 rounded-full bg-gold/60" />
            <span className="h-1 w-1 rounded-full bg-gold/60" />
          </div>

          <p className="mx-auto mt-6 max-w-[58ch] text-[clamp(1rem,1.15vw,1.09rem)] leading-[1.78] text-grey-600">
            You don&apos;t have to walk through university alone. Join us this
            Friday for worship, community, and a family that will stick closer
            than a brother.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="md">
              Join Us
              <Arrow />
            </Button>

            <Button href="/about" variant="ghost" size="md">
              Learn More
              <Arrow />
            </Button>
          </div>

          <p className="mt-[1.6rem] inline-flex items-center gap-3 text-[.72rem] uppercase tracking-[.18em] text-grey-500">
            <span aria-hidden className="h-px w-6 bg-gold/50" />
            A place to belong · A people to grow with
            <span aria-hidden className="h-px w-6 bg-gold/50" />
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default JoinCTA;

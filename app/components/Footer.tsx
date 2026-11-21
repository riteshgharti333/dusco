"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import Container from "./Container";

const EASE = [0.22, 1, 0.36, 1] as const;

const socials = [
  { name: "Facebook", icon: FaFacebookF, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "YouTube", icon: FaYoutube, href: "#" },
  { name: "TikTok", icon: FaTiktok, href: "#" },
];

const navigate = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
];

const organization = [
  { label: "Executive", href: "/executive" },
  { label: "Alumni", href: "/alumni" },

  { label: "What We Do", href: "/#what-we-do" },
  { label: "News", href: "/news" },
  { label: "Get Involved", href: "/contact" },
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden bg-navy pt-[clamp(64px,8vw,110px)] text-white"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-55"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gold/[0.06] blur-3xl"
      />

      <Container className="relative z-10">
        {/* giant emblem lockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="border-b border-white/10 pb-[clamp(32px,4vw,56px)]"
        >
          <p className="mb-6 inline-flex items-center gap-3 text-[.685rem] font-semibold uppercase tracking-[.26em] text-gold">
            <span aria-hidden className="block h-px w-9 bg-gold" />
            Dhaka University · Since 2019
          </p>

          <Link
            href="/"
            aria-label="DUCSO — Home"
            className="group flex flex-col items-start gap-6 no-underline sm:flex-row sm:items-center sm:gap-8"
          >
            <Image
              src="/dusco-logo.jpg"
              alt="DUCSO emblem"
              width={120}
              height={120}
              priority
              className="h-[88px] w-[88px] rounded-full object-cover ring-1 ring-gold/30 transition-transform duration-500 group-hover:scale-[1.03] sm:h-[120px] sm:w-[120px]"
            />

            <span className="flex min-w-0 flex-col leading-[1.05]">
              <span className="font-serif text-[clamp(1.8rem,4.4vw,3.8rem)] font-semibold tracking-[-.02em] text-white">
                Dhaka University Christian
              </span>
              <span className="font-serif text-[clamp(1.8rem,4.4vw,3.8rem)] font-semibold tracking-[-.02em] text-gold">
                Students&apos; Organization<span className="text-white">.</span>
              </span>
              <span className="mt-3 font-serif text-[clamp(.95rem,1.6vw,1.3rem)] text-white/70">
                ঢাকা বিশ্ববিদ্যালয় খ্রিস্টান ছাত্র সংগঠন
              </span>
            </span>
          </Link>

          <p className="mt-8 max-w-[52ch] text-[.95rem] leading-[1.78] text-white/60">
            A Christian student community at the University of Dhaka — gathered
            for worship, discipleship and fellowship, and sent to serve with
            humility and integrity.
          </p>
        </motion.div>

        {/* directory + socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="grid grid-cols-1 gap-[clamp(32px,4vw,64px)] py-[clamp(48px,5.5vw,72px)] sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr]"
        >
          <div>
            <h5 className="mb-5 font-serif text-[.95rem] text-gold">
              Navigate
            </h5>
            <ul className="flex flex-col gap-3">
              {navigate.map(({ label, href }, i) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group inline-flex items-baseline gap-2 text-[.9rem] text-white/70 no-underline transition-colors hover:text-gold"
                  >
                    <span className="text-[.6rem] tracking-[.2em] text-white/30 group-hover:text-gold">
                      0{i + 1}
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-5 font-serif text-[.95rem] text-gold">
              Organization
            </h5>
            <ul className="flex flex-col gap-3">
              {organization.map(({ label, href }, i) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group inline-flex items-baseline gap-2 text-[.9rem] text-white/70 no-underline transition-colors hover:text-gold"
                  >
                    <span className="text-[.6rem] tracking-[.2em] text-white/30 group-hover:text-gold">
                      0{i + 1}
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-5 font-serif text-[.95rem] text-gold">Contact</h5>
            <ul className="flex flex-col gap-4 text-[.86rem] leading-[1.7] text-white/70">
              <li>
                <span className="block text-[.6rem] uppercase tracking-[.24em] text-white/40">
                  Campus
                </span>
                University of Dhaka
                <br />
                Dhaka 1000, Bangladesh
              </li>
              <li>
                <span className="block text-[.6rem] uppercase tracking-[.24em] text-white/40">
                  Email
                </span>
                <a
                  href="mailto:hello@ducso.org"
                  className="no-underline transition-colors hover:text-gold"
                >
                  hello@ducso.org
                </a>
              </li>
              <li>
                <span className="block text-[.6rem] uppercase tracking-[.24em] text-white/40">
                  Meetings
                </span>
                Fridays 6:30 PM · Sundays 10:00 AM
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-5 font-serif text-[.95rem] text-gold">Follow</h5>
            <ul className="flex flex-col gap-3">
              {socials.map(({ name, icon: Icon, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    aria-label={name}
                    className="group inline-flex items-center gap-3 text-[.9rem] text-white/70 no-underline transition-colors hover:text-gold"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center border border-white/15 text-white/70 transition-colors group-hover:border-gold group-hover:text-gold">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* colophon */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-[.72rem] tracking-[.02em] text-white/50">
              Dhaka University Christian Students&apos; Organization · Est. 2019
            </p>
            <p className="text-[.68rem] tracking-[.02em] text-white/30">
              University of Dhaka, Dhaka 1000, Bangladesh
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/terms"
              className="text-[.66rem] font-semibold uppercase tracking-[.22em] text-white/40 no-underline transition-colors hover:text-gold"
            >
              Terms
            </Link>
            <span aria-hidden className="h-3 w-px bg-white/15" />
            <Link
              href="/privacy"
              className="text-[.66rem] font-semibold uppercase tracking-[.22em] text-white/40 no-underline transition-colors hover:text-gold"
            >
              Privacy
            </Link>
            <span aria-hidden className="h-3 w-px bg-white/15" />
            <span className="text-[.66rem] font-semibold uppercase tracking-[.22em] text-white/40">
              © 2026 DUCSO
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

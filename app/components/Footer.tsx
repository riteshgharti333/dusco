"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

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
  { label: "Leadership", href: "/executive" },
  { label: "What We Do", href: "/#what-we-do" },
  { label: "News", href: "/news" },
  { label: "Get Involved", href: "/contact" },
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden bg-navy pt-[clamp(60px,7vw,96px)] text-white"
    >
      {/* gold hairline at top */}
      <span
        aria-hidden
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-55"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* ── TOP: 4-col grid ── */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="grid grid-cols-1 gap-[clamp(32px,4vw,64px)] pb-[clamp(48px,5.5vw,72px)] sm:grid-cols-2 lg:grid-cols-[1.55fr_.8fr_.95fr_1fr]"
        >
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="DUCSO — Home"
              className="mb-[1.5rem] inline-flex items-center gap-[13.6px] no-underline"
            >
              <Image
                src="/dusco-logo.jpg"
                alt="DUCSO emblem"
                width={46}
                height={46}
                priority
                className="h-[46px] w-[46px] rounded-full object-cover"
              />
              <span className="flex flex-col leading-[1.1]">
                <span className="font-serif text-[1.42rem] font-semibold tracking-[.1em] text-white">
                  DUCSO
                </span>
                <span className="mt-[3px] text-[.54rem] font-medium uppercase tracking-[.19em] text-white/55">
                  Dhaka University Christian Students&apos; Organization
                </span>
              </span>
            </Link>

            <p className="max-w-[36ch] text-[.9rem] leading-[1.8] text-white/60">
              A Christian student community at the University of Dhaka —
              gathered for worship, discipleship and fellowship, and sent to
              serve with humility and integrity.
            </p>

            {/* Socials */}
            <div className="mt-[1.6rem] flex gap-[.6rem]">
              {socials.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/20 text-white/70 no-underline transition-colors duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h5 className="mb-[1.4rem] font-sans text-[.66rem] font-semibold uppercase tracking-[.22em] text-gold">
              Navigate
            </h5>
            <ul className="flex flex-col gap-[.72rem]">
              {navigate.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[.875rem] text-white/70 no-underline transition-[color,padding] duration-300 hover:pl-[5px] hover:text-gold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h5 className="mb-[1.4rem] font-sans text-[.66rem] font-semibold uppercase tracking-[.22em] text-gold">
              Organization
            </h5>
            <ul className="flex flex-col gap-[.72rem]">
              {organization.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[.875rem] text-white/70 no-underline transition-[color,padding] duration-300 hover:pl-[5px] hover:text-gold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="mb-[1.4rem] font-sans text-[.66rem] font-semibold uppercase tracking-[.22em] text-gold">
              Contact
            </h5>
            <ul className="space-y-4">
              <li>
                <span className="mb-[.15rem] block text-[.6rem] font-semibold uppercase tracking-[.2em] text-white/40">
                  Campus
                </span>
                <span className="text-[.875rem] leading-[1.7] text-white/70">
                  University of Dhaka
                  <br />
                  Dhaka 1000, Bangladesh
                </span>
              </li>
              <li>
                <span className="mb-[.15rem] block text-[.6rem] font-semibold uppercase tracking-[.2em] text-white/40">
                  Email
                </span>
                <a
                  href="mailto:hello@ducso.org"
                  className="text-[.875rem] text-white/70 no-underline transition-colors hover:text-gold"
                >
                  hello@ducso.org
                </a>
              </li>
              <li>
                <span className="mb-[.15rem] block text-[.6rem] font-semibold uppercase tracking-[.2em] text-white/40">
                  Meeting
                </span>
                <span className="text-[.875rem] leading-[1.7] text-white/70">
                  Venue &amp; schedule to be announced
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-[1.7rem] text-[.74rem] tracking-[.04em] text-white/45">
          <p>
            © {new Date().getFullYear()} Dhaka University Christian
            Students&apos; Organization (DUCSO). All rights reserved.
          </p>
          <p className="max-w-[62ch] text-[.68rem] tracking-[.05em] text-white/30">
            Items marked &ldquo;Placeholder&rdquo; or &ldquo;pending
            confirmation&rdquo; are awaiting verified information from the DUCSO
            executive committee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

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

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-blue-900 pt-24 pb-0 text-white">
      
      {/* Background slanted accent */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-full w-64 bg-yellow-400/5 -skew-x-[20deg]"
      />

      {/* Giant background wordmark for depth */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-10 right-0 select-none whitespace-nowrap text-[18vw] font-black leading-none tracking-tighter text-white/[0.03]"
      >
        DUCSO
      </span>

      <div className="section-container relative z-10">
        
        {/* ── TOP SECTION: Editorial Split ── */}
        <div className="grid gap-16 border-b border-white/10 pb-16 md:grid-cols-12 md:gap-12">
          
          {/* LEFT: Big Headline & Socials */}
          <div className="md:col-span-5 lg:col-span-6">
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
                  Let's Connect
                </span>
              </div>

              <h2 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                STAY
                <br />
                IN THE
                <br />
                <span className="relative inline-block">
                  <span
                    aria-hidden
                    className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                  />
                  <span className="relative z-10 px-1 italic uppercase text-blue-900">
                    loop.
                  </span>
                </span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/60">
                Follow us for updates, event reminders, and daily encouragement.
                We're active on all platforms.
              </p>

              {/* Social Icons */}
              <div className="mt-10 flex flex-wrap gap-3">
                {socials.map(({ name, icon: Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="group relative flex h-12 w-12 items-center justify-center border border-white/20 bg-transparent text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400 hover:text-blue-900 hover:shadow-[4px_4px_0_0_#1e3a8a]"
                  >
                    <Icon className="h-5 w-5" />
                    {/* Tooltip */}
                    <span className="pointer-events-none absolute -top-9 whitespace-nowrap bg-white px-2 py-1 text-[9px] font-black uppercase tracking-widest text-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {name}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Links Grid */}
          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3 lg:col-span-6">
            
            {/* Column 1 */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400">
                Explore
              </h4>
              <ul className="mt-6 space-y-3 text-sm text-white/60">
                {["Home", "About Us", "Our Events", "Gallery"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="group flex items-center gap-2 transition-colors hover:text-white">
                      <span className="h-px w-0 bg-yellow-400 transition-all duration-300 group-hover:w-3" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 2 */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400">
                Community
              </h4>
              <ul className="mt-6 space-y-3 text-sm text-white/60">
                {["Join Us", "Small Groups", "Leadership", "Testimonies"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="group flex items-center gap-2 transition-colors hover:text-white">
                      <span className="h-px w-0 bg-yellow-400 transition-all duration-300 group-hover:w-3" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3 */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
              className="col-span-2 md:col-span-1"
            >
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400">
                Contact
              </h4>
              <ul className="mt-6 space-y-4 text-sm text-white/60">
                <li>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-white/30">
                    Email
                  </span>
                  <a href="mailto:hello@ducso.org" className="transition-colors hover:text-white">
                    hello@ducso.org
                  </a>
                </li>
                <li>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-white/30">
                    Campus
                  </span>
                  <span className="text-white/80">
                    Dhaka University<br />Student Center
                  </span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>

        {/* ── MIDDLE: Logo & Big Text ── */}
        <div className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <Link href="/" className="text-3xl font-black tracking-tighter text-white">
            DUCSO<span className="text-yellow-400">.</span>
          </Link>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
            Dhaka University Christian Students' Organisation
          </p>
        </div>
      </div>

      {/* ── BOTTOM: Yellow Strip ── */}
      <div className="relative mt-4 bg-yellow-400 px-6 py-5 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-blue-900 md:flex-row">
          <p>© {new Date().getFullYear()} DUCSO. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Use</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
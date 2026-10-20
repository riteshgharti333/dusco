"use client";

import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── Privacy sections ─── */
const sections = [
  {
    num: "01",
    title: "Information We Collect",
    content: [
      "When you contact us through our website, we collect the information you provide directly — such as your name, email address, and the content of your message.",
      "We do not use tracking pixels, cookies, or any third-party analytics to track your behavior on this site. What you share with us stays with us.",
    ],
  },
  {
    num: "02",
    title: "How We Use Your Information",
    content: [
      "We use the information you provide solely to respond to your inquiries, send event updates (only if you've opted in), and stay in touch with members of the DUCSO community.",
      "We never sell, rent, or trade your personal information to third parties. Ever.",
    ],
  },
  {
    num: "03",
    title: "Data Security",
    content: [
      "We take reasonable precautions to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure.",
      "While we strive to protect your personal information, we cannot guarantee its absolute security.",
    ],
  },
  {
    num: "04",
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party sites (such as social media platforms). We are not responsible for the privacy practices of those external sites.",
      "We encourage you to review the privacy policies of any third-party sites you visit.",
    ],
  },
  {
    num: "05",
    title: "Your Rights",
    content: [
      "You have the right to request access to, correction of, or deletion of any personal information we hold about you.",
      "To exercise these rights, please contact us at hello@ducso.org.",
    ],
  },
  {
    num: "06",
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.",
      "By continuing to use our website after changes are posted, you accept the updated policy.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="flex flex-col">
      <PageBanner
        label="Legal"
        titleFirst="PRIVACY"
        titleSecond="POLICY"
        description="We respect your privacy. This page explains what information we collect, how we use it, and the choices you have."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80"
      />

      {/* ═════════ MAIN SECTION ═════════ */}
      <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
        {/* Rotated side rail */}
        <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 md:block">
          <div className="flex h-full items-center justify-center">
            <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black uppercase tracking-[0.6em] text-blue-900/30">
              Privacy · DUCSO
            </span>
          </div>
        </div>

        {/* Slanted yellow accent */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 h-full w-96 bg-yellow-400/[0.06] -skew-x-[20deg]"
        />

        <div className="section-container relative">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <span className="relative inline-block h-4 w-3" aria-hidden>
                <span className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-yellow-400" />
                <span className="absolute left-0 top-[30%] h-[3px] w-full -translate-y-1/2 bg-yellow-400" />
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-900">
                Legal · Privacy
              </span>
            </div>

            <h2 className="mt-6 text-5xl font-black leading-[0.85] tracking-tighter text-blue-900 sm:text-6xl md:text-7xl">
              YOUR DATA.
              <br />
              <span className="relative inline-block">
                <span
                  aria-hidden
                  className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                />
                <span className="relative z-10 px-1 italic uppercase text-blue-900">
                  respected.
                </span>
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-blue-900/70 md:text-base">
              We believe transparency matters. Here&apos;s exactly how we handle
              your information — in plain, honest language.
            </p>

            {/* Effective date */}
            <div className="mt-6 flex items-center gap-3 border-t-2 border-blue-900/10 pt-4">
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow-600">
                Effective Date
              </span>
              <span className="h-[2px] w-6 bg-yellow-400" />
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-900">
                January 1, 2025
              </span>
            </div>
          </motion.div>

          {/* Sections */}
          <div className="mt-16 grid gap-0 md:mt-24">
            {sections.map((section, i) => (
              <motion.div
                key={section.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
                className="group relative grid gap-6 border-t-2 border-blue-900/10 py-10 md:grid-cols-12 md:gap-12 md:py-14"
              >
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="font-mono text-[11px] font-bold tracking-widest text-yellow-600">
                    {section.num}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-10">
                  <h3 className="text-2xl font-black leading-[1.05] tracking-tight text-blue-900 md:text-3xl">
                    {section.title}
                    <span className="text-yellow-400">.</span>
                  </h3>

                  <div className="mt-5 space-y-4">
                    {section.content.map((para, j) => (
                      <p
                        key={j}
                        className="max-w-2xl text-sm leading-relaxed text-blue-900/70 md:text-base"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Closing border */}
            <div className="border-t-2 border-blue-900/10" />
          </div>

          {/* Contact section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="mt-20 relative"
          >
            {/* Yellow offset shadow */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 bg-yellow-400"
            />

            <div className="relative border-2 border-blue-900 bg-white p-8 md:p-12">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-yellow-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-900">
                  Questions?
                </span>
              </div>

              <h3 className="mt-5 text-3xl font-black leading-[0.95] tracking-tight text-blue-900 md:text-4xl">
                WE&apos;RE HERE
                <br />
                TO HELP.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-blue-900/70">
                If you have any questions about this Privacy Policy or how we
                handle your data, reach out to us. We&apos;d be happy to help.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="mailto:hello@ducso.org"
                  className="group relative inline-flex overflow-hidden bg-blue-900 -skew-x-[20deg] shadow-[4px_4px_0_0_#facc15] md:shadow-[6px_6px_0_0_#facc15]"
                >
                  <span className="absolute inset-0 origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 group-hover:scale-x-100" />
                  <span className="relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-black uppercase tracking-wider text-yellow-400 transition-colors duration-300 group-hover:text-blue-900 skew-x-[20deg]">
                    Email Us
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>

                <span className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-900/40">
                  hello@ducso.org
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
            className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t-2 border-blue-900/10 pt-8"
          >
            <p className="text-sm italic text-blue-900/55">
              &ldquo;Honesty is part of our faith.&rdquo;
            </p>
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow-600">
              — DUCSO
            </span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
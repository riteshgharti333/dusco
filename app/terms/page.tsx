"use client";

import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── Terms sections ─── */
const sections = [
  {
    num: "01",
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the DUCSO website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our website.",
      "These terms apply to all visitors, members, and anyone who accesses or uses the site.",
    ],
  },
  {
    num: "02",
    title: "Use of the Website",
    content: [
      "The DUCSO website is provided for informational and community purposes. You agree to use the site only for lawful purposes and in a way that does not infringe on the rights of others.",
      "You agree not to use the site in any way that could damage, disable, overburden, or impair its functionality.",
    ],
  },
  {
    num: "03",
    title: "Content & Intellectual Property",
    content: [
      "All content on this website — including text, images, logos, and design — is the property of DUCSO or its content creators and is protected by applicable copyright laws.",
      "You may not reproduce, distribute, or use any content from this site without prior written permission, unless explicitly stated otherwise.",
    ],
  },
  {
    num: "04",
    title: "User Submissions",
    content: [
      "Any information, feedback, or messages you send us through our contact form or email will be treated respectfully and used solely to respond to your inquiry.",
      "We do not claim ownership over any original content you send us, but by submitting it, you grant us permission to use it for the purpose of responding to you.",
    ],
  },
  {
    num: "05",
    title: "Event & Community Participation",
    content: [
      "Information about DUCSO events, gatherings, and activities is provided in good faith. Attendance at any event is voluntary and at your own discretion.",
      "While we strive to ensure accuracy, DUCSO is not responsible for changes, cancellations, or any issues arising from event participation.",
    ],
  },
  {
    num: "06",
    title: "Third-Party Links",
    content: [
      "Our website may contain links to external platforms such as social media, Google Maps, or other partner organizations.",
      "We do not control or endorse the content, privacy practices, or terms of use of those third-party sites. Please review their terms before interacting with them.",
    ],
  },
  {
    num: "07",
    title: "Disclaimer",
    content: [
      "The content on this website is provided on an 'as is' basis without warranties of any kind, express or implied.",
      "While we do our best to keep information accurate and up to date, DUCSO makes no guarantees about the completeness, reliability, or accuracy of the content.",
    ],
  },
  {
    num: "08",
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, DUCSO shall not be held liable for any direct, indirect, or incidental damages arising from your use of the website or participation in our community.",
    ],
  },
  {
    num: "09",
    title: "Changes to These Terms",
    content: [
      "We may update these Terms of Use from time to time. Any changes will be posted on this page with an updated effective date.",
      "By continuing to use the website after changes are posted, you agree to be bound by the revised terms.",
    ],
  },
  {
    num: "10",
    title: "Contact Us",
    content: [
      "If you have questions about these Terms of Use, please reach out to us at hello@ducso.org.",
      "We are happy to clarify anything and value open, honest communication with our community.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="flex flex-col">
      <PageBanner
        label="Legal"
        titleFirst="TERMS"
        titleSecond="OF USE"
        description="These are the rules of the road for using our website and being part of the DUCSO community. Simple, honest, and fair."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80"
      />

      {/* ═════════ MAIN SECTION ═════════ */}
      <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
        {/* Rotated side rail */}
        <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 md:block">
          <div className="flex h-full items-center justify-center">
            <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black uppercase tracking-[0.6em] text-blue-900/30">
              Terms · DUCSO
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
            className="mx-auto max-w-3xl text-center md:mx-0 md:text-left"
          >
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="relative inline-block h-4 w-3" aria-hidden>
                <span className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-yellow-400" />
                <span className="absolute left-0 top-[30%] h-[3px] w-full -translate-y-1/2 bg-yellow-400" />
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-900">
                Legal · Terms
              </span>
            </div>

            <h2 className="mt-6 text-5xl font-black leading-[0.85] tracking-tighter text-blue-900 sm:text-6xl md:text-7xl">
              THE RULES
              <br />
              <span className="relative inline-block">
                <span
                  aria-hidden
                  className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                />
                <span className="relative z-10 px-1 italic uppercase text-blue-900">
                  of the road.
                </span>
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-blue-900/70 md:mx-0 md:text-base">
              Plain language, no surprises. These terms exist to keep our
              community clear, fair, and welcoming to everyone.
            </p>

            {/* Effective date */}
            <div className="mt-6 flex items-center justify-center gap-3 border-t-2 border-blue-900/10 pt-4 md:justify-start">
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
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.06 }}
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

          {/* Contact card */}
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
                LET&apos;S TALK
                <br />
                IT THROUGH.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-blue-900/70">
                If anything here is unclear or you have concerns about these
                terms, we&apos;re one email away. Real people, real answers.
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
              &ldquo;Let all that you do be done in love.&rdquo; — 1 Corinthians
              16:14
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

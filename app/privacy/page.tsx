"use client";

import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import Container from "../components/Container";
import Button, { Arrow } from "../components/Button";

const EASE = [0.22, 1, 0.36, 1] as const;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-[1.35rem] inline-flex items-center gap-3 text-[.685rem] font-semibold uppercase tracking-[.26em] text-gold">
    <span aria-hidden className="block h-px w-9 bg-gold" />
    {children}
  </p>
);

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

      <section className="relative w-full overflow-hidden bg-ivory py-[clamp(72px,9vw,132px)]">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 h-full w-96 -skew-x-[20deg] bg-gold/[0.05]"
        />

        <Container className="relative">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-[clamp(40px,5vw,68px)] flex flex-wrap items-end justify-between gap-10"
          >
            <div className="max-w-[660px]">
              <Eyebrow>Legal · Privacy</Eyebrow>
              <h2 className="max-w-[20ch] font-serif text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal leading-[1.08] tracking-[-.015em] text-navy">
                Your data <em className="italic text-gold">respected.</em>
              </h2>
            </div>
            <p className="max-w-[34ch] text-[clamp(1rem,1.15vw,1.09rem)] leading-[1.78] text-grey-600">
              We believe transparency matters. Here&apos;s exactly how we handle
              your information — in plain, honest language.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="mb-12 flex flex-wrap items-center gap-3 border-y border-black/10 py-4"
          >
            <span className="text-[.62rem] font-semibold uppercase tracking-[.26em] text-gold">
              Effective Date
            </span>
            <span aria-hidden className="h-px w-6 bg-black/15" />
            <span className="text-[.66rem] font-semibold uppercase tracking-[.24em] text-navy">
              January 1, 2025
            </span>
          </motion.div>

          <div className="border-t border-black/10">
            {sections.map((section, i) => (
              <motion.div
                key={section.num}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.04 }}
                className="group grid gap-6 border-b border-black/10 py-10 md:grid-cols-12 md:gap-12 md:py-14"
              >
                <div className="md:col-span-2">
                  <span className="font-serif text-[.9rem] tracking-[.16em] text-black/30">
                    {section.num}
                  </span>
                </div>

                <div className="md:col-span-10">
                  <h3 className="font-serif text-[clamp(1.5rem,2.4vw,2rem)] font-normal leading-[1.15] tracking-[-.01em] text-navy">
                    {section.title}
                    <span className="text-gold">.</span>
                  </h3>

                  <div className="mt-5 space-y-4">
                    {section.content.map((para, j) => (
                      <p
                        key={j}
                        className="max-w-[64ch] text-[.95rem] leading-[1.85] text-grey-600 md:text-base"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="relative mt-20 grid overflow-hidden border border-black/10 bg-ivory md:grid-cols-[1.2fr_1fr]"
          >
            <div className="p-[clamp(28px,4vw,52px)]">
              <div className="flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-gold" />
                <span className="text-[.66rem] font-semibold uppercase tracking-[.26em] text-gold">
                  Questions?
                </span>
              </div>

              <h3 className="mt-5 font-serif text-[clamp(1.9rem,3vw,2.6rem)] font-normal leading-[1.1] tracking-[-.01em] text-navy">
                We&apos;re here to help.
              </h3>

              <p className="mt-4 max-w-[46ch] text-[.95rem] leading-[1.78] text-grey-600">
                If you have any questions about this Privacy Policy or how we
                handle your data, reach out to us. We&apos;d be happy to help.
              </p>

              <div className="mt-8">
                <Button
                  href="mailto:hello@ducso.org"
                  variant="primary"
                  size="md"
                >
                  Email Us
                  <Arrow />
                </Button>
              </div>
            </div>

            <div className="relative flex flex-col justify-center border-t border-black/10 bg-navy p-[clamp(28px,4vw,52px)] md:border-l md:border-t-0">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-[140%] w-64 -skew-x-[20deg] bg-gold/[0.07]"
              />
              <div className="relative">
                <p className="text-[.62rem] font-semibold uppercase tracking-[.26em] text-gold">
                  Direct Email
                </p>
                <a
                  href="mailto:hello@ducso.org"
                  className="mt-3 block font-serif text-[clamp(1.2rem,2vw,1.6rem)] font-normal text-white transition-colors hover:text-gold"
                >
                  hello@ducso.org
                </a>
                <p className="mt-6 text-[.86rem] leading-[1.7] text-white/60">
                  We usually reply within 24 hours. Your privacy is important to
                  us.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
            className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-black/10 pt-8"
          >
            <p className="max-w-[62ch] text-[.95rem] italic leading-[1.78] text-grey-600">
              &ldquo;Honesty is part of our faith.&rdquo;
            </p>
            <span className="text-[.62rem] font-semibold uppercase tracking-[.26em] text-gold">
              — DUCSO
            </span>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

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
              <Eyebrow>Legal · Terms</Eyebrow>
              <h2 className="max-w-[20ch] font-serif text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal leading-[1.08] tracking-[-.015em] text-navy">
                The rules <em className="italic text-gold">of the road.</em>
              </h2>
            </div>
            <p className="max-w-[34ch] text-[clamp(1rem,1.15vw,1.09rem)] leading-[1.78] text-grey-600">
              Plain language, no surprises. These terms exist to keep our
              community clear, fair, and welcoming to everyone.
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
                Let&apos;s talk it through.
              </h3>

              <p className="mt-4 max-w-[46ch] text-[.95rem] leading-[1.78] text-grey-600">
                If anything here is unclear or you have concerns about these
                terms, we&apos;re one email away. Real people, real answers.
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
                  We usually reply within 24 hours. For urgent matters, mark
                  your subject line with{" "}
                  <em className="italic text-gold">Urgent</em>.
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
              &ldquo;Let all that you do be done in love.&rdquo; — 1 Corinthians
              16:14
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

"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const EASE = [0.22, 1, 0.36, 1] as const;

const items = [
  {
    num: "01",
    title: "Christian Fellowship",
    desc: "Regular gatherings where students worship together, share meals and build lasting friendships across departments and years.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v9M8 5.5h8" />
        <circle cx="12" cy="16" r="3.2" />
        <path d="M5.5 21c1.5-2 4-3 6.5-3s5 1 6.5 3" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Bible Study",
    desc: "Structured study and discussion groups that help students read Scripture thoughtfully and apply it to daily campus life.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 6.5C10 5 7 4.6 4 5.2v13c3-.6 6-.2 8 1.3 2-1.5 5-1.9 8-1.3v-13c-3-.6-6-.2-8 1.3z" />
        <path d="M12 6.5v13" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Spiritual Development",
    desc: "Teaching, mentoring and retreats designed to deepen discipleship and encourage a mature, reflective faith.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2.5c3.2 3.6 5.6 6.4 5.6 9.7A5.6 5.6 0 0 1 12 18a5.6 5.6 0 0 1-5.6-5.8c0-3.3 2.4-6.1 5.6-9.7z" />
        <path d="M12 18v3.5" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Student Leadership",
    desc: "Opportunities to serve on committees, organize programmes and develop the character and competence of Christian leadership.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M15.4 8.6l-2 5.4-5.4 2 2-5.4 5.4-2z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Prayer Meetings",
    desc: "Dedicated times of intercession for students, the university, the church and the nation.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2.5c1.6 2 2.4 3.2 2.4 4.4A2.4 2.4 0 0 1 12 9.3a2.4 2.4 0 0 1-2.4-2.4c0-1.2.8-2.4 2.4-4.4z" />
        <rect x="8.5" y="11.5" width="7" height="9" rx="0.8" />
        <path d="M10.5 20.5h3" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Community Service",
    desc: "Outreach initiatives and practical service that express Christian love through action within and beyond the campus.",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 14.5l3.5-3.5a2 2 0 0 1 2.8 0L12 13.7l2.7-2.7a2 2 0 0 1 2.8 0L21 14.5" />
        <path d="M12 13.7V20" />
        <path d="M7.5 20.5h9" />
        <circle cx="12" cy="5.5" r="2.6" />
      </svg>
    ),
  },
];

const WhatWeDo = () => {
  return (
    <section
      id="what-we-do"
      className="relative w-full overflow-hidden bg-ivory py-25"
    >
      <Container>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-[clamp(40px,5vw,68px)] flex flex-wrap items-end justify-between gap-10"
        >
          <div className="max-w-[660px]">
            <p className="mb-[1.35rem] inline-flex items-center gap-3 text-[.685rem] font-semibold uppercase tracking-[.26em] text-gold">
              <span aria-hidden className="block h-px w-9 bg-gold" />
              What We Do
            </p>
            <h2 className="max-w-[22ch] font-serif text-[clamp(2rem,3.5vw,3.05rem)] font-normal leading-[1.1] text-navy">
              Faith expressed through fellowship, learning and service
            </h2>
          </div>

          <p className="mb-[.4rem] max-w-[34ch] text-[clamp(1rem,1.15vw,1.09rem)] leading-[1.78] text-grey-600">
            Six commitments shape the rhythm of DUCSO&apos;s life together
            throughout the academic year.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-[clamp(28px,4vw,64px)] md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.article
              key={item.num}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
              className="relative border-t border-black/10 py-[clamp(26px,3vw,40px)]"
            >
              <span
                aria-hidden
                className="absolute right-0 top-[clamp(26px,3vw,40px)] font-serif text-[.9rem] tracking-[.16em] text-black/25"
              >
                {item.num}
              </span>

              <span className="mb-[1.15rem] block text-gold">{item.icon}</span>

              <h3 className="mb-[.6rem] font-serif text-[1.4rem] font-normal leading-[1.22] text-navy">
                {item.title}
              </h3>

              <p className="max-w-[40ch] text-[.9rem] leading-[1.76] text-grey-600">
                {item.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhatWeDo;

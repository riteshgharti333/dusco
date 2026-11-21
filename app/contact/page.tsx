"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
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

const contactInfo = [
  { label: "Email", value: "hello@ducso.org", href: "mailto:hello@ducso.org" },
  { label: "Phone", value: "+880 1234 567 890", href: "tel:+8801234567890" },
  {
    label: "Campus",
    value: "Dhaka University\nStudent Center, Room 204",
    href: null,
  },
];

const socials = [
  { name: "Facebook", icon: FaFacebookF, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "YouTube", icon: FaYoutube, href: "#" },
  { name: "TikTok", icon: FaTiktok, href: "#" },
];

const meetingTimes = [
  { day: "Fridays", time: "6:30 PM", location: "Main Auditorium" },
  { day: "Sundays", time: "10:00 AM", location: "Student Center" },
];

const FormField = ({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) => (
  <div className="group relative">
    <div className="flex items-center gap-3">
      <span className="h-px w-6 bg-gold transition-all duration-300 group-focus-within:w-10" />
      <label
        htmlFor={id}
        className="text-[.66rem] font-semibold uppercase tracking-[.26em] text-navy"
      >
        {label}
      </label>
    </div>
    <input
      id={id}
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="mt-3 w-full border-b border-black/15 bg-transparent pb-3 text-[.95rem] text-navy placeholder:text-grey-500 transition-colors duration-300 focus:border-gold focus:outline-none"
    />
  </div>
);

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <main className="flex flex-col">
      <PageBanner
        label="Get In Touch"
        titleFirst="CONTACT"
        titleSecond="US"
        description="Have a question? Want to connect? We'd love to hear from you — whether you're curious about faith, looking for community, or just want to say hi."
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
              <Eyebrow>Reach Out</Eyebrow>
              <h2 className="max-w-[20ch] font-serif text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal leading-[1.08] tracking-[-.015em] text-navy">
                Let&apos;s <em className="italic text-gold">talk.</em>
              </h2>
            </div>
            <p className="max-w-[34ch] text-[clamp(1rem,1.15vw,1.09rem)] leading-[1.78] text-grey-600">
              Whether you&apos;re new to campus, new to faith, or just curious —
              our inbox is always open. We usually reply within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="relative grid overflow-hidden border border-black/10 bg-ivory md:grid-cols-12"
          >
            <div className="relative border-b border-black/10 p-8 md:col-span-5 md:border-b-0 md:border-r md:p-12 lg:p-14">
              <div className="flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-gold" />
                <span className="text-[.66rem] font-semibold uppercase tracking-[.26em] text-gold">
                  Contact Details
                </span>
              </div>

              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label}>
                    <span className="text-[.62rem] font-semibold uppercase tracking-[.26em] text-gold">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block font-serif text-[1.2rem] leading-tight text-navy transition-colors hover:text-gold"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 whitespace-pre-line font-serif text-[1.2rem] leading-tight text-navy">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12 border-t border-black/10 pt-8">
                <span className="text-[.62rem] font-semibold uppercase tracking-[.26em] text-gold">
                  Follow Us
                </span>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socials.map(({ name, icon: Icon, href }) => (
                    <a
                      key={name}
                      href={href}
                      aria-label={name}
                      className="group relative flex h-11 w-11 items-center justify-center border border-black/15 text-navy transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-navy"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <span
                aria-hidden
                className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 -skew-x-[20deg] bg-gold/[0.06]"
              />
            </div>

            <div className="relative p-8 md:col-span-7 md:p-12 lg:p-16">
              <div className="flex items-center gap-3 cursor-pointer">
                <span aria-hidden className="h-px w-8 bg-gold" />
                <span className="text-[.66rem] font-semibold uppercase tracking-[.26em] text-gold">
                  Send a Message
                </span>
              </div>

              <h3 className="mt-5 font-serif text-[clamp(1.9rem,3vw,2.6rem)] font-normal leading-[1.1] tracking-[-.01em] text-navy">
                Drop us a line.
              </h3>

              <form onSubmit={handleSubmit} className="mt-10 space-y-8">
                <FormField
                  label="Your Name"
                  id="name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="John Doe"
                  type="text"
                  required
                />

                <FormField
                  label="Email Address"
                  id="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  placeholder="john@university.edu"
                  type="email"
                  required
                />

                <div className="group relative">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-6 bg-gold transition-all duration-300 group-focus-within:w-10" />
                    <label
                      htmlFor="message"
                      className="text-[.66rem] font-semibold uppercase tracking-[.26em] text-navy"
                    >
                      Your Message
                    </label>
                  </div>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us what's on your heart..."
                    className="mt-3 w-full resize-none border-b border-black/15 bg-transparent pb-3 text-[.95rem] text-navy placeholder:text-grey-500 transition-colors duration-300 focus:border-gold focus:outline-none"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <Button type="submit" variant="primary" size="md">
                    Send Message
                    <Arrow />
                  </Button>

                  {sent && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[.66rem] font-semibold uppercase tracking-[.26em] text-gold"
                    >
                      ✓ Message Sent
                    </motion.span>
                  )}
                </div>
              </form>

              <span
                aria-hidden
                className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 -skew-x-[20deg] bg-gold/[0.06]"
              />
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

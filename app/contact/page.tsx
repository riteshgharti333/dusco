"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import PageBanner from "../components/PageBanner";
import SectionHeader from "../components/SectionHeader";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── Contact info ─── */
const contactInfo = [
  { label: "Email", value: "hello@ducso.org", href: "mailto:hello@ducso.org" },
  { label: "Phone", value: "+880 1234 567 890", href: "tel:+8801234567890" },
  {
    label: "Campus",
    value: "Dhaka University\nStudent Center, Room 204",
    href: null,
  },
];

/* ─── Social media ─── */
const socials = [
  { name: "Facebook", icon: FaFacebookF, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "YouTube", icon: FaYoutube, href: "#" },
  { name: "TikTok", icon: FaTiktok, href: "#" },
];

/* ─── Meeting times ─── */
const meetingTimes = [
  { day: "Fridays", time: "6:30 PM", location: "Main Auditorium" },
  { day: "Sundays", time: "10:00 AM", location: "Student Center" },
];

/* ═══════════════════════════════════════════════
   FORM FIELD
═══════════════════════════════════════════════ */
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
      <span className="h-[2px] w-6 bg-yellow-400 transition-all duration-300 group-focus-within:w-10" />
      <label
        htmlFor={id}
        className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-900"
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
      className="mt-3 w-full border-b-2 border-blue-900/20 bg-transparent pb-3 text-base font-medium text-blue-900 placeholder:text-blue-900/30 transition-colors duration-300 focus:border-yellow-400 focus:outline-none"
    />
  </div>
);

/* ═══════════════════════════════════════════════
   CONTACT PAGE
═══════════════════════════════════════════════ */
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

      {/* ═════════ MAIN SECTION (White) ═════════ */}
      <section className="relative w-full overflow-hidden bg-white py-20 md:py-28">
        {/* Rotated side rail */}
        <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-16 md:block">
          <div className="flex h-full items-center justify-center">
            <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-black uppercase tracking-[0.6em] text-blue-900/30">
              Contact · DUCSO
            </span>
          </div>
        </div>

        {/* Subtle slanted accent */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 h-full w-96 bg-yellow-400/[0.06] -skew-x-[20deg]"
        />

        <div className="section-container relative">
          <SectionHeader
            dark={false}
            label="Reach Out"
            description="Whether you're new to campus, new to faith, or just curious — our inbox is always open. We usually reply within 24 hours."
            title={
              <>
                LET&apos;S
                <br />
                <span className="relative inline-block">
                  <span
                    aria-hidden
                    className="absolute -inset-x-3 inset-y-1 bg-yellow-400 -skew-x-[20deg]"
                  />
                  <span className="relative z-10 px-1 italic uppercase text-blue-900">
                    talk.
                  </span>
                </span>
              </>
            }
          />

          {/* ── Split card (info + form) ── */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="relative isolate mt-16 grid border-2 border-blue-900 bg-white md:mt-20 md:grid-cols-12"
          >
            {/* ═════════ LEFT: INFO ═════════ */}
            <div className="relative border-b-2 border-blue-900/10 p-8 md:col-span-5 md:border-b-0 md:border-r-2 md:p-12 lg:p-14">
              {/* Label */}
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-yellow-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-900">
                  Contact Details
                </span>
              </div>

              {/* Info list */}
              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label}>
                    <span className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow-600">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block text-lg font-black leading-tight text-blue-900 transition-colors hover:text-yellow-600"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 whitespace-pre-line text-lg font-black leading-tight text-blue-900">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Social media icons */}
              <div className="mt-12 border-t-2 border-blue-900/10 pt-8">
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow-600">
                  Follow Us
                </span>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socials.map(({ name, icon: Icon, href }) => (
                    <a
                      key={name}
                      href={href}
                      aria-label={name}
                      className="group relative flex h-11 w-11 items-center justify-center border-2 border-blue-900 text-blue-900 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-400"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Meeting times */}
              <div className="mt-12 border-t-2 border-blue-900/10 pt-8">
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow-600">
                  When We Meet
                </span>
                <div className="mt-4 space-y-3">
                  {meetingTimes.map((m) => (
                    <div
                      key={m.day}
                      className="flex items-baseline justify-between gap-4 border-b border-blue-900/10 pb-3"
                    >
                      <span className="text-sm font-black uppercase tracking-wide text-blue-900">
                        {m.day}
                      </span>
                      <span className="text-sm font-medium text-blue-900/60">
                        {m.time} · {m.location}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slanted accent at bottom */}
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 bg-blue-900/[0.04] -skew-x-[20deg]"
              />
            </div>

            {/* ═════════ RIGHT: FORM ═════════ */}
            <div className="relative p-8 md:col-span-7 md:p-12 lg:p-16">
              {/* Form kicker */}
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-yellow-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-900">
                  Send a Message
                </span>
              </div>

              {/* Form title */}
              <h3 className="mt-5 text-3xl font-black leading-[0.95] tracking-tight text-blue-900 md:text-4xl">
                DROP US
                <br />A LINE.
              </h3>

              {/* Form */}
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
                    <span className="h-[2px] w-6 bg-yellow-400 transition-all duration-300 group-focus-within:w-10" />
                    <label
                      htmlFor="message"
                      className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-900"
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
                    className="mt-3 w-full resize-none border-b-2 border-blue-900/20 bg-transparent pb-3 text-base font-medium text-blue-900 placeholder:text-blue-900/30 transition-colors duration-300 focus:border-yellow-400 focus:outline-none"
                  />
                </div>

                {/* Submit row */}
                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <button
                    type="submit"
                    className="group relative inline-flex overflow-hidden bg-blue-900 -skew-x-[20deg] shadow-[4px_4px_0_0_#facc15] transition-all duration-300 hover:shadow-[4px_4px_0_0_#1e3a8a] md:shadow-[6px_6px_0_0_#facc15] md:hover:shadow-[6px_6px_0_0_#1e3a8a]"
                  >
                    <span className="absolute inset-0 origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 group-hover:scale-x-100" />
                    <span className="relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-black uppercase tracking-wider text-yellow-400 transition-colors duration-300 group-hover:text-blue-900 skew-x-[20deg]">
                      Send Message
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </button>

                  {sent && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow-600"
                    >
                      ✓ Message Sent
                    </motion.span>
                  )}
                </div>
              </form>

              {/* Slanted accent */}
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 bg-yellow-400/10 -skew-x-[20deg]"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

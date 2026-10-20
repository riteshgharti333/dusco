"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description: string;
  dark?: boolean; // If true, uses white text for dark backgrounds
}

const SectionHeader = ({ label, title, description, dark = false }: SectionHeaderProps) => {
  const textColor = dark ? "text-white" : "text-blue-900";
  const descColor = dark ? "text-white/70" : "text-blue-900/70";
  const crossColor = "bg-yellow-400";

  return (
    <div className={`mb-12 flex flex-col items-center text-center md:mb-24 md:flex-row md:items-end md:justify-between md:text-left`}>
      
      {/* Left Side: Label + Title */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="flex flex-col items-center md:items-start"
      >
        <div className="flex items-center gap-3">
          <span className="relative inline-block h-4 w-3" aria-hidden>
            <span className={`absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 ${crossColor}`} />
            <span className={`absolute left-0 top-[30%] h-[3px] w-full -translate-y-1/2 ${crossColor}`} />
          </span>
          <span className={`text-[11px] font-black uppercase tracking-[0.28em] ${dark ? "text-yellow-400" : "text-blue-900"}`}>
            {label}
          </span>
        </div>

        <h2 className={`mt-5 text-5xl font-black leading-[0.9] tracking-tight sm:text-6xl md:text-7xl ${textColor}`}>
          {title}
        </h2>
      </motion.div>

      {/* Right Side: Description */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
        className="mt-8 md:mt-0 md:max-w-xs"
      >
        <p className={`text-sm leading-relaxed ${descColor}`}>
          {description}
        </p>
      </motion.div>

    </div>
  );
};

export default SectionHeader;
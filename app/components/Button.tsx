"use client";

import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onBlue?: boolean;
  className?: string;
}

const Button = ({
  href,
  children,
  variant = "primary",
  size = "md",
  onBlue = false,
  className = "",
}: ButtonProps) => {
  const sizes = {
    sm: "px-6 py-2.5 text-[11px] gap-2",
    md: "px-7 py-3.5 text-sm gap-2",
    lg: "px-8 py-4 text-sm gap-3 md:px-12 md:py-5 md:text-base",
  };

  // Logic for Primary buttons (Yellow face, White shadow if onBlue)
  const primaryShadow = onBlue
    ? "shadow-[4px_4px_0_0_#ffffff] md:shadow-[6px_6px_0_0_#ffffff] hover:shadow-[4px_4px_0_0_#facc15] md:hover:shadow-[6px_6px_0_0_#facc15]"
    : "shadow-[4px_4px_0_0_#facc15] md:shadow-[6px_6px_0_0_#facc15]";

  // Logic for Secondary buttons (Blue face, Yellow shadow)
  // HOVER: Shadow turns Blue to match the top layer contrast
  const secondaryShadow =
    "shadow-[4px_4px_0_0_#facc15] md:shadow-[6px_6px_0_0_#facc15] hover:shadow-[4px_4px_0_0_#1e3a8a] md:hover:shadow-[6px_6px_0_0_#1e3a8a]";

  const variants = {
    primary: {
      base: "bg-yellow-400 text-blue-900",
      hoverBg: "bg-white",
      hoverText: "group-hover:text-blue-900",
      shadow: primaryShadow,
    },
    secondary: {
      base: "bg-blue-900 text-yellow-400",
      hoverBg: "bg-yellow-400",
      hoverText: "group-hover:text-blue-900",
      shadow: secondaryShadow,
    },
    outline: {
      base: "border-2 border-white/20 text-white",
      hoverBg: "",
      hoverText: "group-hover:text-yellow-400 group-hover:border-yellow-400",
      shadow: "shadow-none",
    },
  };

  const isOutline = variant === "outline";
  const config = variants[variant];

  return (
    <Link
      href={href}
      className={`group relative inline-flex overflow-hidden -skew-x-[20deg] transition-all duration-300 ${config.base} ${sizes[size]} ${config.shadow} ${className}`}
    >
      {/* Sliding background */}
      {!isOutline && (
        <span
          className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${config.hoverBg}`}
        />
      )}

      {/* Text */}
      <span
        className={`relative inline-flex items-center skew-x-[20deg] font-black uppercase tracking-wider transition-colors duration-300 ${config.hoverText}`}
      >
        {children}
      </span>
    </Link>
  );
};

export default Button;

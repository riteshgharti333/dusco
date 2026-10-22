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
    sm: { cls: "px-6 py-2.5 text-[11px] gap-2", diag: 10 },
    md: { cls: "px-7 py-3.5 text-sm gap-2", diag: 12 },
    lg: {
      cls: "px-8 py-4 text-sm gap-3 md:px-12 md:py-5 md:text-base",
      diag: 14,
    },
  };

  const variants = {
    primary: {
      base: "bg-yellow-400 text-blue-900",
      hoverBg: "bg-white",
      hoverText: "group-hover:text-blue-900",
      // Literal classes so Tailwind generates them
      shadow: onBlue ? "bg-white group-hover:bg-yellow-400" : "bg-yellow-400",
    },
    secondary: {
      base: "bg-blue-900 text-yellow-400",
      hoverBg: "bg-yellow-400",
      hoverText: "group-hover:text-blue-900",
      // Yellow shadow → turns blue on hover
      shadow: "bg-yellow-400 group-hover:bg-blue-900",
    },
    outline: {
      base: "border-2 border-white/20 text-white bg-transparent",
      hoverBg: "",
      hoverText: "group-hover:text-yellow-400 group-hover:border-yellow-400",
      shadow: "",
    },
  };

  const isOutline = variant === "outline";
  const config = variants[variant];
  const sizeCfg = sizes[size];

  const slantShape = `polygon(${sizeCfg.diag}px 0, 100% 0, calc(100% - ${sizeCfg.diag}px) 100%, 0 100%)`;

  return (
    <div className={`group relative inline-flex ${className}`}>
      {/* Shadow block — all class names are literal */}
      {!isOutline && (
        <span
          aria-hidden
          className={`pointer-events-none absolute inset-0 translate-x-1 translate-y-1 transition-colors duration-300 md:translate-x-1.5 md:translate-y-1.5 ${config.shadow}`}
          style={{ clipPath: slantShape }}
        />
      )}

      {/* Button face */}
      <Link
        href={href}
        className={`relative inline-flex transition-colors duration-300 ${config.base} ${sizeCfg.cls}`}
        style={{ clipPath: slantShape }}
      >
        {!isOutline && (
          <span
            className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${config.hoverBg}`}
          />
        )}
        <span
          className={`relative inline-flex items-center font-black uppercase tracking-wider transition-colors duration-300 ${config.hoverText}`}
        >
          {children}
        </span>
      </Link>
    </div>
  );
};

export default Button;

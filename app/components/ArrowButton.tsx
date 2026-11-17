import Link from "next/link";
import type { ReactNode } from "react";

type ArrowButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const ArrowButton = ({ href, children, className = "" }: ArrowButtonProps) => {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 border-b border-[rgba(185,145,73,0.38)] pb-[5px] text-[.735rem] font-semibold uppercase tracking-[.16em] text-navy transition-colors hover:border-gold hover:text-gold ${className}`}
    >
      {children}
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        <path
          d="M1 8h13M9 3l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};

export default ArrowButton;

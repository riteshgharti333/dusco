import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
  onClick?: () => void;
  tabIndex?: number;
};

type NativeButtonProps = CommonProps & {
  href?: undefined;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  tabIndex?: number;
};

type ButtonProps = LinkButtonProps | NativeButtonProps;

const base =
  "group inline-flex items-center justify-center gap-3 rounded-sm font-semibold uppercase no-underline transition-all duration-300";

const variants: Record<Variant, string> = {
  primary:
    "border border-secondary bg-secondary text-white hover:-translate-y-px hover:opacity-90",
  outline:
    "border border-white/40 bg-white/5 text-white backdrop-blur-md hover:-translate-y-px hover:border-secondary hover:bg-white/10 hover:text-secondary",
  ghost:
    "border border-primary/20 bg-transparent text-primary hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2 text-[.68rem] tracking-[.14em]",
  md: "px-[1.85rem] py-[0.95rem] text-[.735rem] tracking-[.16em]",
  lg: "px-6 py-3.5 text-[.7rem] tracking-[.16em]",
};

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
  } = props;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        onClick={props.onClick}
        tabIndex={props.tabIndex}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      tabIndex={props.tabIndex}
      className={classes}
    >
      {children}
    </button>
  );
}

export function Arrow({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
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
  );
}
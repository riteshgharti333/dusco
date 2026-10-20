"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";

type NavLink = { label: string; href: string };

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Alumni", href: "/alumni" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const isActive = (pathname: string, href: string): boolean =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

const SLANT = "-skew-x-[20deg]";
const UNSLANT = "skew-x-[20deg]";

const barShape = "polygon(21px 0, 100% 0, calc(100% - 21px) 100%, 0 100%)";
const barShapeInner = "polygon(20px 0, 100% 0, calc(100% - 20px) 100%, 0 100%)";

type PillState = { left: number; width: number; show: boolean };

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [hoverAccent, setHoverAccent] = useState<boolean>(false);
  const [pill, setPill] = useState<PillState>({
    left: 0,
    width: 0,
    show: false,
  });

  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const lastY = useRef<number>(0);

  const activeIndex = links.findIndex((l) => isActive(pathname, l.href));
  const target = hovered !== null ? hovered : activeIndex;

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = lastY.current;
    const delta = y - prev;

    if (y > 200 && delta > 6) {
      setHidden(true);
    } else if (delta < -6 || y < 100) {
      setHidden(false);
    }

    lastY.current = y;
  });

  useLayoutEffect(() => {
    const measure = (): void => {
      const el = itemRefs.current[target];
      if (!el) {
        setPill((p) => ({ ...p, show: false }));
        return;
      }
      setPill({ left: el.offsetLeft, width: el.offsetWidth, show: true });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [target]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const revealOrigin = "calc(100% - 3.25rem) 3.25rem";

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          y: hidden && !isOpen ? "-160%" : "0%",
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 26,
          mass: 0.9,
        }}
        className="fixed inset-x-0 top-0 z-[9999] flex justify-center px-4 pt-3"
      >
        <div
          className="relative w-full max-w-5xl"
          onMouseEnter={() => setHoverAccent(true)}
          onMouseLeave={() => setHoverAccent(false)}
        >
          <span
            aria-hidden
            className="absolute inset-0 translate-x-2 translate-y-2 bg-yellow-400"
            style={{ clipPath: barShape }}
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-blue-900"
            style={{ clipPath: barShape }}
          />
          <div
            aria-hidden
            className="absolute inset-[2px] overflow-hidden bg-white"
            style={{ clipPath: barShapeInner }}
          >
            <span
              className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-yellow-400 transition-transform duration-300"
              style={{ transform: `scaleX(${hoverAccent ? 1 : 0})` }}
            />
          </div>

          <div className="relative flex items-center justify-between gap-4 px-8 py-2.5">
            <Link
              href="/"
              className="group flex items-center gap-2.5"
              aria-label="DUSCO home"
            >
              <span className="relative block h-10 w-11 shrink-0">
                <span className="relative flex h-full w-full items-center justify-center overflow-hidden">
                  <Image
                    src="/dusco-logo.jpg"
                    alt="DUSCO logo"
                    width={50}
                    height={50}
                    className="h-full w-full object-contain"
                    priority
                  />
                </span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-black tracking-tight text-blue-900">
                  DUSCO
                </span>
                <span className="mt-0.5 overflow-hidden text-[9px] font-bold uppercase tracking-[0.2em] text-yellow-500">
                  Dahaka University
                </span>
              </span>
            </Link>

            <nav
              className="relative hidden md:flex items-center"
              onMouseLeave={() => setHovered(null)}
            >
              <span
                aria-hidden
                className={`pointer-events-none absolute top-0 bottom-0 bg-yellow-400 ${SLANT} transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)]`}
                style={{
                  left: pill.left,
                  width: pill.width,
                  opacity: pill.show ? 1 : 0,
                }}
              />
              {links.map((link, i) => {
                const active = i === activeIndex;
                return (
                  <Fragment key={link.href}>
                    {i > 0 && (
                      <span
                        aria-hidden
                        className={`relative mx-0.5 h-5 w-0.5 bg-blue-900/25 ${SLANT}`}
                      />
                    )}
                    <Link
                      href={link.href}
                      ref={(el) => {
                        itemRefs.current[i] = el;
                      }}
                      onMouseEnter={() => setHovered(i)}
                      onFocus={() => setHovered(i)}
                      onBlur={() => setHovered(null)}
                      aria-current={active ? "page" : undefined}
                      className="relative px-4 py-2 text-xs font-black uppercase tracking-wider text-blue-900"
                    >
                      {link.label}
                    </Link>
                  </Fragment>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/join"
                className={`group relative hidden md:inline-flex overflow-hidden border-2 border-blue-900 bg-blue-900 ${SLANT}`}
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 group-hover:scale-x-100" />
                <span
                  className={`relative inline-flex items-center gap-1.5 px-5 py-2 text-xs font-black uppercase tracking-wider text-yellow-400 transition-colors duration-300 group-hover:text-blue-900 ${UNSLANT}`}
                >
                  Join Us
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>

              <button
                onClick={() => setIsOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                className={`md:hidden border-2 border-blue-900 bg-yellow-400 ${SLANT}`}
              >
                <span
                  className={`flex h-9 items-center gap-2 px-3.5 text-[11px] font-black uppercase tracking-widest text-blue-900 ${UNSLANT}`}
                >
                  {isOpen ? "Close" : "Menu"}
                  <span className="relative block h-3 w-[18px]">
                    <span
                      className={`absolute left-0 h-0.5 w-[18px] bg-blue-900 transition-all duration-300 ${
                        isOpen ? "top-1/2 rotate-45" : "top-0"
                      }`}
                    />
                    <span
                      className={`absolute left-0 top-1/2 h-0.5 bg-blue-900 transition-all duration-300 ${
                        isOpen ? "w-0 opacity-0" : "w-3"
                      }`}
                    />
                    <span
                      className={`absolute left-0 h-0.5 w-[18px] bg-blue-900 transition-all duration-300 ${
                        isOpen ? "top-1/2 -rotate-45" : "bottom-0"
                      }`}
                    />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <div
        aria-hidden={!isOpen}
        className={`md:hidden fixed inset-0 z-40 overflow-hidden bg-blue-900 transition-[clip-path] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          clipPath: isOpen
            ? `circle(150% at ${revealOrigin})`
            : `circle(0% at ${revealOrigin})`,
        }}
      >
        <span
          className={`absolute -right-6 top-0 h-full w-16 bg-yellow-400 ${SLANT}`}
        />
        <span
          className={`absolute right-14 top-0 h-full w-3 bg-white/30 ${SLANT}`}
        />
        <span
          className={`absolute right-24 top-0 h-full w-1 bg-white/20 ${SLANT}`}
        />

        <nav className="relative flex h-full flex-col justify-center gap-2 px-8 pt-24 pb-10 pr-24">
          {links.map((link, i) => {
            const active = isActive(pathname, link.href);
            return (
              <div
                key={link.href}
                className={`transition-all duration-500 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${250 + i * 70}ms` : "0ms",
                }}
              >
                <Link
                  href={link.href}
                  tabIndex={isOpen ? 0 : -1}
                  onClick={() => setIsOpen(false)}
                  className="group relative flex items-baseline gap-3 px-4 py-3"
                >
                  <span
                    aria-hidden
                    className={`absolute inset-0 origin-left bg-yellow-400 ${SLANT} transition-transform duration-300 ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                  <span
                    className={`relative text-4xl font-black uppercase tracking-tight transition-all duration-300 group-hover:translate-x-2 ${
                      active
                        ? "text-blue-900"
                        : "text-white group-hover:text-blue-900"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              </div>
            );
          })}

          <Link
            href="/join"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
            className={`mt-8 w-fit border-2 border-yellow-400 bg-yellow-400 shadow-[6px_6px_0_0_#ffffff] ${SLANT} transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "650ms" : "0ms" }}
          >
            <span
              className={`inline-flex items-center gap-3 px-7 py-4 text-sm font-black uppercase tracking-wider text-blue-900 ${UNSLANT}`}
            >
              Join Us <span>→</span>
            </span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

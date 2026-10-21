"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { RiMenu4Fill } from "react-icons/ri";
import { LuX } from "react-icons/lu";

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

// The pill background now uses a polygon so it perfectly matches the slant
const pillShape = "polygon(14px 0, 100% 0, calc(100% - 14px) 100%, 0 100%)";

const DESKTOP_QUERY = "(min-width: 1024px)";

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
      // Add extra width on each side for the pill to bleed slightly around the link
      setPill({
        left: el.offsetLeft - 8,
        width: el.offsetWidth + 16,
        show: true,
      });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [target]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e: MediaQueryListEvent): void => {
      if (e.matches) setIsOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  /* Escape closes menu */
  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Body scroll lock — ONLY when opening, not on close */
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const revealOrigin = "calc(100% - 3.5rem) 2.75rem";

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
        className="fixed inset-x-0 top-0 z-[9999] flex w-full max-w-[100vw] justify-center overflow-hidden px-3 pb-3 pr-5 pt-3 sm:px-4 sm:pr-6"
      >
        <div
          className="relative w-full min-w-0 max-w-5xl"
          onMouseEnter={() => setHoverAccent(true)}
          onMouseLeave={() => setHoverAccent(false)}
        >
          <span
            aria-hidden
            className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-400 sm:translate-x-2 sm:translate-y-2"
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

          <div className="relative flex items-center justify-between gap-3 py-2 pl-7 pr-6 sm:gap-4 sm:py-2.5 sm:pl-9 sm:pr-8">
            <Link
              href="/"
              className="group flex min-w-0 items-center gap-2 sm:gap-2.5"
              aria-label="DUSCO home"
            >
              <span className="relative block h-9 w-10 shrink-0 sm:h-10 sm:w-11">
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
              <span className="flex min-w-0 flex-col leading-none">
                <span className="text-sm font-black tracking-tight text-blue-900 sm:text-base">
                  DUSCO
                </span>
                <span className="mt-0.5 truncate text-[8px] font-bold uppercase tracking-[0.18em] text-yellow-500 sm:text-[9px] sm:tracking-[0.2em]">
                  Dahaka University
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav
              className="relative hidden items-center lg:flex"
              onMouseLeave={() => setHovered(null)}
            >
              {/* Sliding pill — now uses clipPath for perfect diagonal */}
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-0 top-0 bg-yellow-400 transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] will-change-[left,width]"
                style={{
                  left: pill.left,
                  width: pill.width,
                  opacity: pill.show ? 1 : 0,
                  clipPath: pillShape,
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
                      className="relative px-3 py-2 text-xs font-black uppercase tracking-wider text-blue-900 xl:px-4"
                    >
                      {link.label}
                    </Link>
                  </Fragment>
                );
              })}
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <Link
                href="/join"
                className={`group relative hidden overflow-hidden border-2 border-blue-900 bg-blue-900 lg:inline-flex ${SLANT}`}
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
                aria-controls="mobile-menu"
                className={`shrink-0 border-2 border-blue-900 bg-yellow-400 lg:hidden ${SLANT}`}
              >
                <span
                  className={`flex h-8 items-center gap-2 px-3 text-[10px] font-black uppercase tracking-widest text-blue-900 sm:h-9 sm:px-3.5 sm:text-[11px] ${UNSLANT}`}
                >
                  {isOpen ? "Close" : "Menu"}
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <RiMenu4Fill
                      className={`absolute h-4 w-4 will-change-transform transition-all duration-300 ease-out ${
                        isOpen
                          ? "rotate-90 opacity-0"
                          : "rotate-0 opacity-100"
                      }`}
                    />
                    <LuX
                      className={`absolute h-4 w-4 will-change-transform transition-all duration-300 ease-out ${
                        isOpen
                          ? "rotate-0 opacity-100"
                          : "-rotate-90 opacity-0"
                      }`}
                    />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu — always mounted, only clipPath animates */}
      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 h-[100dvh] w-full max-w-[100vw] overflow-hidden bg-blue-900 transition-[clip-path] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] lg:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          clipPath: isOpen
            ? `circle(150% at ${revealOrigin})`
            : `circle(0% at ${revealOrigin})`,
        }}
      >
        {/* Decorative slanted stripes */}
        <span
          aria-hidden
          className={`pointer-events-none absolute -right-6 top-0 h-full w-14 bg-yellow-400 sm:w-20 ${SLANT}`}
        />
        <span
          aria-hidden
          className={`pointer-events-none absolute right-12 top-0 h-full w-2.5 bg-white/30 sm:right-16 ${SLANT}`}
        />
        <span
          aria-hidden
          className={`pointer-events-none absolute right-[5.25rem] top-0 h-full w-1 bg-white/20 sm:right-28 ${SLANT}`}
        />

        <div className="relative h-full overflow-y-auto overflow-x-hidden overscroll-contain">
          <nav className="flex min-h-full flex-col justify-center pb-[max(2rem,env(safe-area-inset-bottom))] pl-5 pr-20 pt-28 sm:pl-10 sm:pr-28">
            <p
              className={`mb-4 pl-4 text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400 transition-all duration-500 ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-6 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? "200ms" : "0ms" }}
            >
              Navigate
            </p>

            <div className="flex flex-col">
              {links.map((link, i) => {
                const active = isActive(pathname, link.href);
                return (
                  <div
                    key={link.href}
                    className={`border-b border-white/10 transition-all duration-500 last:border-b-0 ${
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
                      aria-current={active ? "page" : undefined}
                      className="group relative flex items-center gap-3  px-4 py-3 sm:gap-4 sm:py-4"
                    >
                      <span
                        aria-hidden
                        className={`absolute inset-0 origin-left bg-yellow-400 ${SLANT} transition-transform duration-300 ${
                          active
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100 group-active:scale-x-100"
                        }`}
                      />
                      <span
                        className={`relative w-6 shrink-0 text-[11px] font-black tabular-nums tracking-widest transition-colors duration-300 ${
                          active
                            ? "text-blue-900"
                            : "text-yellow-400 group-hover:text-blue-900 group-active:text-blue-900"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`relative text-3xl font-black uppercase leading-none tracking-tight transition-all duration-300 group-hover:translate-x-1.5 sm:text-5xl ${
                          active
                            ? "text-blue-900"
                            : "text-white group-hover:text-blue-900 group-active:text-blue-900"
                        }`}
                      >
                        {link.label}
                      </span>
                      <span
                        aria-hidden
                        className={`relative ml-auto text-xl font-black text-blue-900 transition-all duration-300 ${
                          active
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      >
                        →
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>

            <Link
              href="/contact"
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
              className={`mt-8 ml-4 w-fit border-2 border-yellow-400 bg-yellow-400 shadow-[5px_5px_0_0_#ffffff] ${SLANT} transition-all duration-500 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_0_#ffffff] ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? "700ms" : "0ms" }}
            >
              <span
                className={`inline-flex items-center gap-3 px-6 py-3.5 text-sm font-black uppercase tracking-wider text-blue-900 ${UNSLANT}`}
              >
                Join Us <span>→</span>
              </span>
            </Link>

            <p
              className={`mt-10 pl-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 transition-opacity duration-500 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? "800ms" : "0ms" }}
            >
              DUSCO · Dahaka University
            </p>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

type NavLink = { label: string; href: string };

const links: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Executive", href: "#leadership" },
  { label: "Alumni", href: "#alumni" },
  { label: "Gallery", href: "#gallery" },
  { label: "News", href: "#news" },
];

const socials = [
  { name: "Facebook", icon: FaFacebookF, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "YouTube", icon: FaYoutube, href: "#" },
];

const isActive = (pathname: string, href: string): boolean =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

const Navbar = () => {
  const pathname = usePathname();
  const [isSolid, setIsSolid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastY = useRef(0);

  /* solid background + hide after 30% of the first screen / show on scroll up */
  useEffect(() => {
    let ticking = false;
    let acc = 0; // scroll distance travelled in the current direction
    lastY.current = window.scrollY;

    const update = () => {
      const y = Math.max(window.scrollY, 0);
      const delta = y - lastY.current;
      lastY.current = y;
      const hideAfter = window.innerHeight * 0.3;

      setIsSolid(y > 40);

      if (y <= hideAfter) {
        acc = 0;
        setIsHidden(false); // always visible in the top 30%
      } else if (delta !== 0) {
        if (delta > 0 !== acc > 0) acc = 0; // direction changed
        acc += delta;
        if (acc > 16)
          setIsHidden(true); // scrolled down a little
        else if (acc < -40) setIsHidden(false); // scrolled up on purpose
      }

      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 900) setIsOpen(false);
    };

    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] border-b will-change-transform transition-[transform,opacity,background-color,border-color,box-shadow] duration-[800ms] ease-[cubic-bezier(.65,0,.35,1)] focus-within:translate-y-0 focus-within:opacity-100 ${
          isOpen
            ? "pointer-events-none opacity-0"
            : isHidden
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
        } ${
          isSolid
            ? "border-black/10 bg-white/95 shadow-[0_10px_34px_-28px_rgba(7,24,43,.55)] backdrop-blur-md backdrop-saturate-150"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <nav
            aria-label="Primary"
            className={`flex items-center justify-between gap-4 transition-[height] duration-[450ms] ease-[cubic-bezier(.22,.61,.36,1)] sm:gap-8 ${
              isSolid ? "h-[64px] sm:h-[74px]" : "h-[72px] sm:h-[86px]"
            }`}
          >
            {/* Brand */}
            <Link
              href="/"
              aria-label="DUCSO — Home"
              className="inline-flex min-w-0 flex-none items-center gap-2.5 no-underline sm:gap-[13.6px]"
            >
              <Image
                src="/dusco-logo.jpg"
                alt="DUCSO emblem"
                width={46}
                height={46}
                priority
                className="h-9 w-9 rounded-full object-cover sm:h-[42px] sm:w-[42px] md:h-[46px] md:w-[46px]"
              />
              <span className="flex min-w-0 flex-col leading-[1.1]">
                <span
                  className={`font-serif text-[1.15rem] font-semibold tracking-[.1em] transition-colors duration-[450ms] sm:text-[1.3rem] md:text-[1.42rem] ${
                    isSolid ? "text-navy" : "text-white"
                  }`}
                >
                  DUCSO
                </span>
                <span
                  className={`mt-[3px] hidden truncate text-[.54rem] font-medium uppercase tracking-[.19em] transition-colors duration-[450ms] md:block ${
                    isSolid ? "text-navy/60" : "text-white/62"
                  }`}
                >
                  Dhaka University Christian Students&apos; Organization
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="mx-auto hidden items-center gap-[clamp(.7rem,1.6vw,2.05rem)] min-[901px]:flex">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive(pathname, href) ? "page" : undefined}
                    className={`group relative whitespace-nowrap py-2 text-[.755rem] font-medium uppercase tracking-[.13em] no-underline transition-colors duration-300 ${
                      isSolid
                        ? "text-navy hover:text-gold"
                        : "text-white/86 hover:text-gold"
                    } max-[1180px]:text-[.71rem] max-[1180px]:tracking-[.1em]`}
                  >
                    {label}
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-[420ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="hidden flex-none min-[901px]:block">
              <Link
                href="/join"
                className="group inline-flex items-center justify-center gap-[11px] whitespace-nowrap rounded-sm border border-gold bg-gold px-[16px] py-[9px] text-[.65rem] font-semibold uppercase tracking-[.14em] text-white no-underline transition-all duration-300 hover:-translate-y-px hover:opacity-90 lg:px-[21.6px] lg:py-[11.5px] lg:text-[.68rem] lg:tracking-[.16em]"
              >
                Get Involved
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-[3px]"
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
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobileDrawer"
              onClick={() => setIsOpen((v) => !v)}
              className={`inline-flex h-10 w-10 flex-none items-center justify-center rounded-sm transition-colors duration-300 min-[901px]:hidden ${
                isSolid ? "text-navy" : "text-white"
              } hover:text-gold sm:h-11 sm:w-11`}
            >
              {isOpen ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 3l12 12M15 3L3 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5h15M2 9.5h15M2 14h15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* ── MODERN MOBILE DRAWER ── */}
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[110] bg-navy/60 backdrop-blur-sm transition-opacity duration-500 min-[901px]:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide-in panel from right */}
      <aside
        id="mobileDrawer"
        aria-hidden={!isOpen}
        className={`fixed inset-y-0 right-0 z-[111] flex w-full max-w-[420px] flex-col overflow-y-auto bg-navy text-white shadow-[-20px_0_60px_-20px_rgba(0,0,0,0.5)] transition-transform duration-[520ms] ease-[cubic-bezier(.22,.61,.36,1)] min-[901px]:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header — brand + close */}
        <div className="flex items-center justify-between px-5 py-4 sm:px-6">
          <Link
            href="/"
            aria-label="DUCSO — Home"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-2.5 no-underline"
          >
            <Image
              src="/dusco-logo.jpg"
              alt="DUCSO emblem"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="font-serif text-[1.05rem] font-semibold tracking-[.08em] text-white">
              DUCSO
            </span>
          </Link>

          <button
            type="button"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors duration-300 hover:bg-white/5 hover:text-gold"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 3l12 12M15 3L3 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Small label */}
        <p className="px-5 pt-6 text-[.6rem] font-semibold uppercase tracking-[.3em] text-gold/80 sm:px-6">
          Menu
        </p>

        {/* Nav links */}
        <nav aria-label="Mobile" className="mt-3 flex flex-col px-3 sm:px-4">
          {links.map(({ href, label }, i) => {
            const active = isActive(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setIsOpen(false)}
                aria-current={active ? "page" : undefined}
                style={{
                  transitionDelay: isOpen ? `${100 + i * 45}ms` : "0ms",
                }}
                className={`group relative flex items-center justify-between gap-3 rounded-lg px-3 py-3.5 text-[.95rem] font-medium no-underline transition-all duration-500 ease-[cubic-bezier(.22,.61,.36,1)] hover:bg-white/5 sm:px-4 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                } ${active ? "text-gold" : "text-white/85 hover:text-white"}`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`text-[.6rem] font-semibold tracking-[.2em] transition-colors ${
                      active ? "text-gold" : "text-white/40"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-[1.15rem] leading-none tracking-[.01em]">
                    {label}
                  </span>
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className={`transition-all duration-300 ${
                    active
                      ? "translate-x-0 opacity-100 text-gold"
                      : "-translate-x-1 opacity-0 text-white group-hover:translate-x-0 group-hover:opacity-60"
                  }`}
                >
                  <path
                    d="M1 8h13M9 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            );
          })}
        </nav>

        {/* CTA + socials pinned to bottom */}
        <div className="mt-auto px-5 py-6 sm:px-6">
          <Link
            href="/join"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
            className="group inline-flex w-full items-center justify-center gap-3 rounded-sm border border-gold bg-gold px-6 py-3.5 text-[.7rem] font-semibold uppercase tracking-[.16em] text-white no-underline transition-all duration-300 hover:-translate-y-px hover:opacity-90"
          >
            Get Involved
            <svg
              width="13"
              height="13"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-[3px]"
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

          <div className="mt-5 flex items-center justify-center gap-3">
            {socials.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                tabIndex={isOpen ? 0 : -1}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 no-underline transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>

          <p className="mt-4 text-center text-[.6rem] uppercase tracking-[.24em] text-white/30">
            Dhaka University · Since 1980
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;

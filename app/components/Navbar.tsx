"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaArrowRight,
} from "react-icons/fa";
import Button from "./Button";
import { FaArrowRightLong } from "react-icons/fa6";

type NavLink = { label: string; href: string; children?: NavLink[] };

const links: NavLink[] = [
  { label: "Home", href: "/home" },
  {
    label: "About",
    href: "#about",
    children: [
      { label: "What We Do", href: "#what-we-do" },
      { label: "Testimonials", href: "#testimonials" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Executive", href: "/leadership" },
  { label: "Alumni", href: "/alumni" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
];

const socials = [
  { name: "Facebook", icon: FaFacebookF, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "YouTube", icon: FaYoutube, href: "#" },
];

const NAV_MOVE_MS = 800;
const NAV_EASE = "cubic-bezier(.4,0,.2,1)";
const HIDE_DISTANCE = 90;
const SHOW_DISTANCE = 30;

const isActive = (pathname: string, href: string): boolean =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

const Navbar = () => {
  const pathname = usePathname();
  const [isSolid, setIsSolid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
  const lastY = useRef(0);

  useEffect(() => {
    let ticking = false;
    let acc = 0;
    lastY.current = window.scrollY;

    const update = () => {
      const y = Math.max(window.scrollY, 0);
      const delta = y - lastY.current;
      lastY.current = y;
      const hideAfter = window.innerHeight * 0.3;

      setIsSolid(y > 40);

      if (y <= hideAfter) {
        acc = 0;
        setIsHidden(false);
      } else if (delta !== 0) {
        if (delta > 0 !== acc > 0) acc = 0;
        acc += delta;
        if (acc > HIDE_DISTANCE) setIsHidden(true);
        else if (acc < -SHOW_DISTANCE) setIsHidden(false);
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
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      setOpenMobileSub(null);
      return;
    }
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1100) setIsOpen(false);
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
        style={{
          transform:
            isHidden && !isOpen
              ? "translate3d(0,-100%,0)"
              : "translate3d(0,0,0)",
          opacity: isOpen ? 0 : 1,
          willChange: "transform",
          transition: isOpen
            ? "opacity 300ms ease"
            : `transform ${NAV_MOVE_MS}ms ${NAV_EASE}, background-color 450ms ease, border-color 450ms ease, box-shadow 450ms ease, opacity 300ms ease`,
        }}
        className={`fixed inset-x-0 top-0 z-[100] border-b ${
          isOpen ? "pointer-events-none" : ""
        } ${
          isSolid
            ? "border-black/10 bg-white/95 shadow-[0_10px_34px_-28px_rgba(7,24,43,.55)] backdrop-blur-md backdrop-saturate-150"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-[1280px] px-3 min-[400px]:px-4 sm:px-6 min-[1100px]:px-10">
          <nav
            aria-label="Primary"
            className={`flex items-center justify-between gap-2 transition-[height] duration-[600ms] ease-[cubic-bezier(.4,0,.2,1)] min-[400px]:gap-3 sm:gap-6 ${
              isSolid ? "h-[60px] sm:h-[72px]" : "h-[68px] sm:h-[84px]"
            }`}
          >
            {/* Burger — now on the LEFT of the logo (mobile / tablet only) */}
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobileDrawer"
              onClick={() => setIsOpen((v) => !v)}
              className={`inline-flex h-10 w-10 flex-none items-center justify-center rounded-sm transition-colors duration-300 min-[1100px]:hidden ${
                isSolid ? "text-navy" : "text-white"
              } hover:text-gold`}
            >
              {isOpen ? (
                <FaTimes className="h-[18px] w-[18px]" />
              ) : (
                <FaBars className="h-[19px] w-[19px]" />
              )}
            </button>

            <Link
              href="/"
              aria-label="DUCSO — Home"
              className="inline-flex min-w-0 flex-1 items-center gap-2.5 no-underline min-[1100px]:flex-none sm:gap-3"
            >
              <Image
                src="/dusco-logo.jpg"
                alt="DUCSO emblem"
                width={46}
                height={46}
                priority
                className="h-9 w-9 flex-none rounded-full object-cover sm:h-[42px] sm:w-[42px] md:h-[46px] md:w-[46px]"
              />

              {/* Full name on every screen size (wraps on small phones) */}
              <span className="flex min-w-0 flex-col leading-[1.15]">
                <span
                  className={`font-serif text-[.66rem] font-semibold leading-[1.15] tracking-[.01em] transition-colors duration-[450ms] min-[400px]:text-[.74rem] sm:text-[.88rem] sm:tracking-[.02em] md:text-[.95rem] min-[1100px]:text-[1rem] ${
                    isSolid ? "text-navy" : "text-white"
                  }`}
                >
                  Dhaka University Christian Students&apos; Organization
                </span>
                <span
                  className={`pt-[2px] font-serif text-[.58rem] font-semibold leading-[1.2] tracking-[.01em] transition-colors duration-[450ms] min-[400px]:text-[.66rem] sm:pt-[3px] sm:text-[.74rem] md:text-[.82rem] ${
                    isSolid ? "text-navy/70" : "text-white/70"
                  }`}
                >
                  ঢাকা বিশ্ববিদ্যালয় খ্রিস্টান ছাত্র সংগঠন
                </span>
              </span>
            </Link>

            {/* Desktop links */}
            <ul className="mx-auto hidden items-center gap-[clamp(.7rem,1.4vw,2.05rem)] min-[1100px]:flex">
              {links.map(({ href, label, children }) => (
                <li key={href} className="relative">
                  {children ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(href)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        type="button"
                        className={`group relative flex items-center gap-1.5 whitespace-nowrap py-2 text-[.71rem] font-medium uppercase tracking-[.1em] transition-colors duration-300 min-[1280px]:text-[.755rem] min-[1280px]:tracking-[.13em] ${
                          isSolid
                            ? "text-navy hover:text-gold"
                            : "text-white/90 hover:text-gold"
                        }`}
                      >
                        {label}
                        <FaChevronDown
                          className={`h-2.5 w-2.5 transition-transform duration-300 ${
                            openDropdown === href ? "rotate-180" : ""
                          }`}
                        />
                        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-[420ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-x-100" />
                      </button>

                      <div
                        className={`absolute left-0 top-full min-w-[180px] pt-2 transition-all duration-300 ${
                          openDropdown === href
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none -translate-y-1 opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden rounded-sm border border-black/10 bg-white shadow-[0_20px_40px_-20px_rgba(7,24,43,0.4)]">
                          {children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block whitespace-nowrap px-4 py-2.5 text-[.72rem] font-medium uppercase tracking-[.1em] text-navy no-underline transition-colors duration-200 hover:bg-ivory hover:text-gold"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={href}
                      aria-current={
                        isActive(pathname, href) ? "page" : undefined
                      }
                      className={`group relative whitespace-nowrap py-2 text-[.71rem] font-medium uppercase tracking-[.1em] no-underline transition-colors duration-300 min-[1280px]:text-[.755rem] min-[1280px]:tracking-[.13em] ${
                        isSolid
                          ? "text-navy hover:text-gold"
                          : "text-white/90 hover:text-gold"
                      }`}
                    >
                      {label}
                      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-[420ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-x-100" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="hidden flex-none min-[1100px]:block">
              <Button href="/join" variant="primary" size="lg">
                Get Involved
                <FaArrowRightLong className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Backdrop */}
      <div
        aria-hidden
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[110] bg-navy/60 backdrop-blur-sm transition-opacity duration-500 min-[1100px]:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile drawer — slides in from the LEFT, matching the burger */}
      <aside
        id="mobileDrawer"
        aria-hidden={!isOpen}
        className={`fixed inset-y-0 left-0 z-[111] flex h-[100dvh] w-[88%] max-w-[400px] flex-col overflow-y-auto overscroll-contain bg-navy pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] text-white shadow-[20px_0_60px_-20px_rgba(0,0,0,0.5)] transition-transform duration-[520ms] ease-[cubic-bezier(.22,.61,.36,1)] min-[1100px]:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 sm:px-6">
          <Link
            href="/"
            aria-label="DUCSO — Home"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
            className="inline-flex min-w-0 items-center gap-2.5 pr-3 no-underline"
          >
            <Image
              src="/dusco-logo.jpg"
              alt="DUCSO emblem"
              width={36}
              height={36}
              className="h-9 w-9 flex-none rounded-full object-cover"
            />
          </Link>

          <button
            type="button"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full text-white/80 transition-colors duration-300 hover:bg-white/5 hover:text-gold"
          >
            <FaTimes className="h-4 w-4" />
          </button>
        </div>

        <p className="px-5 pt-4 text-[.6rem] font-semibold uppercase tracking-[.3em] text-gold/80 sm:px-6">
          Menu
        </p>

        <nav aria-label="Mobile" className="mt-3 flex flex-col px-3 sm:px-4">
          {links.map(({ href, label, children }, i) => {
            const active = isActive(pathname, href);
            return (
              <div key={href}>
                <div className="flex items-center">
                  <Link
                    href={href}
                    tabIndex={isOpen ? 0 : -1}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    style={{
                      transitionDelay: isOpen ? `${100 + i * 45}ms` : "0ms",
                    }}
                    className={`group relative flex min-w-0 flex-1 items-center justify-between gap-3 rounded-lg px-3 py-3 text-[.95rem] font-medium no-underline transition-all duration-500 ease-[cubic-bezier(.22,.61,.36,1)] hover:bg-white/5 sm:px-4 sm:py-3.5 ${
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-8 opacity-0"
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
                      <span className="font-serif text-[1.1rem] leading-none tracking-[.01em] sm:text-[1.15rem]">
                        {label}
                      </span>
                    </span>
                    {!children && (
                      <FaArrowRight
                        className={`h-3.5 w-3.5 transition-all duration-300 ${
                          active
                            ? "translate-x-0 text-gold opacity-100"
                            : "-translate-x-1 text-white opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                        }`}
                      />
                    )}
                  </Link>

                  {children && (
                    <button
                      type="button"
                      tabIndex={isOpen ? 0 : -1}
                      aria-label={`${openMobileSub === href ? "Collapse" : "Expand"} ${label}`}
                      aria-expanded={openMobileSub === href}
                      onClick={() =>
                        setOpenMobileSub((v) => (v === href ? null : href))
                      }
                      className="ml-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-full  text-white/70 transition-colors duration-300 hover:border-gold hover:text-gold"
                    >
                      <FaChevronDown
                        className={`h-3 w-3 transition-transform duration-300 ${
                          openMobileSub === href ? "rotate-180 text-gold" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {children && (
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(.4,0,.2,1)] ${
                      openMobileSub === href
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="ml-8 flex flex-col border-l border-white/10 pl-3">
                        {children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            tabIndex={isOpen && openMobileSub === href ? 0 : -1}
                            onClick={() => setIsOpen(false)}
                            className="py-2 text-[.82rem] text-white/60 no-underline transition-colors hover:text-gold"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mt-auto px-5 py-6 sm:px-6">
          <Button
            href="/join"
            variant="primary"
            size="lg"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
            className="w-full"
          >
            Get Involved
            <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>

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

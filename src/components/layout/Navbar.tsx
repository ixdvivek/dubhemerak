"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { navLinks } from "@/lib/content";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { Button } from "@/components/ui/Button";

/**
 * Transparent over the hero, turns into a frosted bar once the page
 * scrolls, hides while scrolling down and returns on scroll up.
 */
export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > last && y > 400);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Intro: bar slides down after the hero headline starts.
  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from("[data-nav-item]", { y: -24, autoAlpha: 0, stagger: 0.05, delay: 0.35, duration: 1 });
      });
    },
    { scope: headerRef },
  );

  // Mobile menu links stagger in on open.
  useGSAP(
    () => {
      if (!open) return;
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from("[data-menu-item]", { y: 32, autoAlpha: 0, stagger: 0.05, duration: 0.8 });
      });
    },
    { scope: menuRef, dependencies: [open] },
  );

  return (
    <header
      ref={headerRef}
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-[translate,background-color,backdrop-filter] duration-500 ease-out-expo",
        hidden && !open && "-translate-y-full",
        scrolled || open ? "bg-black/55 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8 lg:py-5 xl:px-8">
        <a href="#" data-nav-item aria-label="Dubhe Merak — home" className="shrink-0">
          <Image
            src="/images/logo-dubhe-merak-white.png"
            alt="Dubhe Merak"
            width={1778}
            height={172}
            preload
            className="h-auto w-[200px] sm:w-[240px] xl:w-[281px]"
          />
        </a>

        <ul className="hidden items-center gap-[15px] lg:flex">
          {navLinks.map((link, i) => (
            <li key={link.label} data-nav-item>
              <a
                href={link.href}
                aria-current={i === 0 ? "page" : undefined}
                className={clsx(
                  "block rounded-2xl px-4 py-2 font-display text-sm leading-4 tracking-[0.5px] text-white transition-colors duration-300",
                  i === 0 ? "bg-black/40 font-medium" : "font-light hover:bg-white/10",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div data-nav-item className="hidden sm:block">
            <Button href="#contact">Enquire Now</Button>
          </div>
          <button
            type="button"
            data-nav-item
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="relative flex size-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur lg:hidden"
          >
            <span
              className={clsx(
                "absolute h-px w-5 bg-current transition-transform duration-300",
                open ? "rotate-45" : "-translate-y-1",
              )}
            />
            <span
              className={clsx(
                "absolute h-px w-5 bg-current transition-transform duration-300",
                open ? "-rotate-45" : "translate-y-1",
              )}
            />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className="h-[calc(100svh-76px)] overflow-y-auto px-5 pt-6 pb-10 sm:px-8 lg:hidden"
      >
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.label} data-menu-item className="border-b border-white/15">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-display text-3xl font-light text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div data-menu-item className="mt-8 sm:hidden">
          <Button href="#contact" onClick={() => setOpen(false)}>
            Enquire Now
          </Button>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import { hero } from "@/lib/content";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.from("[data-hero-media]", { scale: 1.15, duration: 2.4 }, 0)
          .from("[data-hero-line] > span", { yPercent: 110, duration: 1.4, stagger: 0.09 }, 0.15)
          .from("[data-hero-fade]", { y: 24, autoAlpha: 0, stagger: 0.1, duration: 1.2 }, 0.55)
          .from("[data-hero-rule]", { scaleX: 0, transformOrigin: "left", duration: 1.4 }, 0.75)
          .from("[data-hero-mark]", { y: 60, autoAlpha: 0, duration: 1.6 }, 0.6);

        // Slow parallax drift as the hero scrolls away.
        gsap.to("[data-hero-media]", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to("[data-hero-content]", {
          yPercent: -18,
          autoAlpha: 0.2,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: root },
  );

  // Split the headline into lines that mask-reveal on load (keeps text selectable / indexable).
  const lines = ["Water treatment", "engineered for 2040,", "operating in 2026."];

  return (
    <section ref={root} className="relative isolate flex min-h-[680px] h-svh overflow-hidden bg-[#04223f] text-white">
      <div className="absolute inset-0 -z-10">
        <div data-hero-media className="absolute inset-0 will-change-transform">
          <Image
            src="/images/hero.webp"
            alt="Narwhal Steller treatment plant floating on calm Arctic water beside a narwhal"
            fill
            preload
            sizes="100vw"
            className="object-cover object-[68%_50%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(4,34,63,0.6)] from-[18.94%] to-transparent to-[78.16%]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent md:hidden" />
      </div>

      <div
        data-hero-content
        className="mx-auto flex w-full max-w-[1600px] flex-col justify-end gap-16 px-5 pt-32 pb-28 sm:px-8 md:gap-[119px] lg:px-12 xl:px-[100px] xl:pb-[108px]"
      >
        <div className="flex max-w-[575px] flex-col items-start gap-5">
          <p data-hero-fade className="flex items-center gap-3 font-sans text-sm leading-6 font-semibold tracking-[1px] sm:text-base">
            <Image src="/images/icons/icon-droplet.svg" alt="" width={24} height={24} />
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-[clamp(2.5rem,1.5rem+3.2vw,3.75rem)] leading-none font-medium tracking-[-0.5px]">
            <span className="sr-only">{hero.title}</span>
            <span aria-hidden>
              {lines.map((line) => (
                <span key={line} data-hero-line className="block overflow-hidden pb-[0.06em]">
                  <span className="block">{line}</span>
                </span>
              ))}
            </span>
          </h1>
          <div data-hero-fade>
            <Button href={hero.cta.href}>{hero.cta.label}</Button>
          </div>
        </div>

        <div className="flex max-w-[345px] flex-col gap-6">
          <span data-hero-rule className="h-px w-full bg-white" />
          <p data-hero-fade className="font-display text-base leading-6 font-light tracking-[0.5px] sm:text-[17px]">
            {hero.supporting}
          </p>
        </div>
      </div>

      <div
        data-hero-mark
        aria-hidden
        className="pointer-events-none absolute right-5 bottom-0 w-[150px] sm:right-8 sm:w-[200px] xl:right-[10.44%] xl:w-[278px]"
      >
        <Image src="/images/brand-mark.svg" alt="" width={278} height={108} className="h-auto w-full" />
      </div>
    </section>
  );
}

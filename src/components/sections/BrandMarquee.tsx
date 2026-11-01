"use client";

import { useRef } from "react";
import Image from "next/image";
import { brands } from "@/lib/content";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { Button } from "@/components/ui/Button";
import { icons } from "@/components/ui/MaskIcon";
import { Reveal } from "@/components/motion/Reveal";

export function BrandMarquee() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const track = root.current?.querySelector<HTMLElement>("[data-track]");
        if (!track) return;

        // Track holds two identical sets, so moving -50% loops seamlessly.
        const loop = gsap.to(track, { xPercent: -50, duration: 32, ease: "none", repeat: -1 });

        const viewport = root.current!.querySelector<HTMLElement>("[data-viewport]")!;
        const slow = () => gsap.to(loop, { timeScale: 0, duration: 0.8, ease: "power2.out", overwrite: true });
        const resume = () => gsap.to(loop, { timeScale: 1, duration: 0.8, ease: "power2.in", overwrite: true });
        viewport.addEventListener("mouseenter", slow);
        viewport.addEventListener("mouseleave", resume);

        return () => {
          viewport.removeEventListener("mouseenter", slow);
          viewport.removeEventListener("mouseleave", resume);
        };
      });
    },
    { scope: root },
  );

  const set = [...brands, ...brands];

  return (
    <section ref={root} aria-labelledby="brands-title" className="overflow-hidden bg-white py-16 md:py-20">
      <Reveal className="container-x flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-2 text-black">
          <h2
            id="brands-title"
            data-reveal
            className="font-display text-[clamp(2.5rem,1.4rem+3vw,4rem)] leading-none font-extralight"
          >
            Built for names
            <br />
            that don&apos;t compromise.
          </h2>
          <p data-reveal className="font-sans text-base leading-6 font-light md:text-lg">
            Trusted by premium clients for decades
          </p>
        </div>
        <div data-reveal>
          <Button variant="outline" href="tel:+919847922777" icon={icons.call}>
            Book a Call
          </Button>
        </div>
      </Reveal>

      <div data-viewport className="relative mt-12 h-24" role="region" aria-label="Client logos">
        <ul data-track className="flex w-max gap-4 will-change-transform">
          {set.map((b, i) => (
            <li
              key={`${b.name}-${i}`}
              aria-hidden={i >= brands.length || undefined}
              className="flex h-24 w-[200px] shrink-0 items-center justify-center"
            >
              <Image
                src={b.src}
                alt={i < brands.length ? b.name : ""}
                loading="eager"
                width={b.width}
                height={b.height}
                className="h-[18px] w-auto opacity-90 transition-opacity duration-300 hover:opacity-100"
              />
            </li>
          ))}
        </ul>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent md:w-40" />
      </div>
    </section>
  );
}

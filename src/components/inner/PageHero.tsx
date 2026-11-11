"use client";

import { Fragment, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

export type Crumb = { label: string; href?: string };

type PageHeroProps = {
  image: { src: string; alt: string; position?: string };
  crumbs: Crumb[];
  title: string;
  description: string;
};

/** Inner-page banner: photo, navy gradient, breadcrumb, h1 and a supporting line. */
export function PageHero({ image, crumbs, title, description }: PageHeroProps) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap
          .timeline({ defaults: { ease: "expo.out" } })
          .from("[data-hero-media]", { scale: 1.12, duration: 2.2 }, 0)
          .from("[data-hero-word] > span", { yPercent: 110, duration: 1.3, stagger: 0.035 }, 0.15)
          .from("[data-hero-fade]", { y: 32, autoAlpha: 0, stagger: 0.1, duration: 1.2 }, 0.35);

        const scrub = { trigger: root.current, start: "top top", end: "bottom top", scrub: true };
        gsap.to("[data-hero-media]", { yPercent: 10, ease: "none", scrollTrigger: scrub });
        gsap.to("[data-hero-content]", { yPercent: -14, autoAlpha: 0.25, ease: "none", scrollTrigger: scrub });
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative isolate flex h-[78svh] max-h-[720px] min-h-[560px] items-end overflow-hidden bg-[#04223f] text-white lg:h-[720px]"
    >
      <div data-hero-media className="absolute inset-0 -z-10 will-change-transform">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          preload
          sizes="100vw"
          quality={85}
          className="object-cover"
          style={{ objectPosition: image.position ?? "50% 50%" }}
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(4,34,63,0.92) 0%, rgba(4,34,63,0.6) 45%, rgba(4,34,63,0) 85%), linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 25%)",
        }}
      />
      {/* Narrow screens: the text spans the full width, so darken from the bottom too. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-[#04223f]/90 via-[#04223f]/40 to-transparent lg:hidden" />

      <div data-hero-content className="container-x flex flex-col gap-6 pt-32 pb-14 sm:pb-20 lg:pb-[120px]">
        <nav data-hero-fade aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 font-sans text-sm leading-5 tracking-[1.5px] text-white/75">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="max-w-[860px] font-display text-[clamp(2.375rem,1.5rem+2.8vw,3.75rem)] leading-[1.07] font-medium tracking-[-0.5px]">
          <span className="sr-only">{title}</span>
          {/* Words mask-reveal on load; the visual copy is hidden from screen readers. */}
          <span aria-hidden>
            {title.split(" ").map((word, i) => (
              <Fragment key={`${word}-${i}`}>
                <span data-hero-word className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-top">
                  <span className="inline-block">{word}</span>
                </span>{" "}
              </Fragment>
            ))}
          </span>
        </h1>
        <p data-hero-fade className="max-w-[560px] font-display text-base leading-[26px] font-light tracking-[0.5px] sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

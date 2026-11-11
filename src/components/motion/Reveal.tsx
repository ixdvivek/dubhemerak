"use client";

import { useRef, type ElementType, type ComponentPropsWithoutRef } from "react";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from "@/lib/gsap";

type RevealProps<T extends ElementType> = {
  as?: T;
  /** Delay between each `[data-reveal]` child. */
  stagger?: number;
  /** Vertical travel in px. */
  y?: number;
  /** ScrollTrigger start position. */
  start?: string;
} & ComponentPropsWithoutRef<T>;

/**
 * Fades and lifts every `[data-reveal]` descendant into place as it
 * scrolls into view, pops `[data-pop]` icons and draws `[data-line]` rules.
 * Content stays fully visible without JS and for reduced-motion users.
 */
export function Reveal<T extends ElementType = "div">({
  as,
  stagger = 0.08,
  y = 40,
  start = "top 82%",
  children,
  ...rest
}: RevealProps<T>) {
  const ref = useRef<HTMLElement>(null);
  const Tag = (as ?? "div") as ElementType;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const root = ref.current;
        const items = gsap.utils.toArray<HTMLElement>("[data-reveal]", root);
        const pops = gsap.utils.toArray<HTMLElement>("[data-pop]", root);
        const lines = gsap.utils.toArray<HTMLElement>("[data-line]", root);

        // Items reveal in batches as each one scrolls in, so long grids and
        // galleries animate where the visitor is rather than all at once.
        if (items.length) {
          gsap.set(items, { y, autoAlpha: 0 });
          ScrollTrigger.batch(items, {
            start,
            once: true,
            onEnter: (batch) => gsap.to(batch, { y: 0, autoAlpha: 1, stagger, duration: 1.2, overwrite: true }),
          });
        }

        // Icons pop in with a little overshoot (feature ticks, checklists).
        if (pops.length) {
          gsap.set(pops, { scale: 0.4, rotate: -20, autoAlpha: 0 });
          ScrollTrigger.batch(pops, {
            start,
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, { scale: 1, rotate: 0, autoAlpha: 1, stagger: 0.06, duration: 1, ease: "back.out(2)", delay: 0.15 }),
          });
        }

        // Rules draw across (or down, with data-line="y").
        lines.forEach((el) => {
          const vertical = el.dataset.line === "y";
          gsap.from(el, {
            [vertical ? "scaleY" : "scaleX"]: 0,
            transformOrigin: vertical ? "top" : "left",
            duration: 1.4,
            delay: 0.2,
            scrollTrigger: { trigger: el, start, once: true },
          });
        });
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
}

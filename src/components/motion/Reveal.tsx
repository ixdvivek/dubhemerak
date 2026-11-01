"use client";

import { useRef, type ElementType, type ComponentPropsWithoutRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

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
 * Fades and lifts every `[data-reveal]` descendant into place when the
 * wrapper scrolls into view. Content stays fully visible without JS
 * and for reduced-motion users.
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
        const items = gsap.utils.toArray<HTMLElement>("[data-reveal]", ref.current);
        if (!items.length) return;
        gsap.from(items, {
          y,
          autoAlpha: 0,
          stagger,
          duration: 1.2,
          scrollTrigger: { trigger: ref.current, start, once: true },
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

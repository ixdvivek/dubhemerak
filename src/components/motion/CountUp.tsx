"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

/**
 * Animates the leading number of a value like "14 days", "100%" or "0w"
 * when it scrolls into view. Zero values count down from 100, matching the
 * homepage stats. Values without a leading number ("5–7", "24/7") render as-is.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = /^(\d+)(?![\d–/])(.*)$/.exec(value);

  useGSAP(
    () => {
      if (!match) return;
      gsap.matchMedia().add(MOTION_OK, () => {
        const el = ref.current;
        if (!el) return;
        const to = Number(match[1]);
        const suffix = match[2];
        const state = { v: to === 0 ? 100 : 0 };
        el.textContent = `${state.v}${suffix}`;
        gsap.to(state, {
          v: to,
          duration: 2.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onUpdate: () => {
            el.textContent = `${Math.round(state.v)}${suffix}`;
          },
        });
        return () => {
          el.textContent = value;
        };
      });
    },
    { scope: ref, dependencies: [value] },
  );

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}

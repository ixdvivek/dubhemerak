"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import clsx from "clsx";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

type MediaFrameProps = {
  /** The image (rendered `fill`), moved by the parallax layer. */
  children: ReactNode;
  /** Layers that stay put on top of the image (overlays, play button, captions). */
  overlay?: ReactNode;
  /** Drift the image against the scroll. Off for small cards. */
  parallax?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Image wrapper that opens with a clip reveal and settles from a slight
 * zoom as it enters, then drifts gently while it's on screen — the same
 * feel as the homepage product blocks.
 */
export function MediaFrame({ children, overlay, parallax = true, className, style }: MediaFrameProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const frame = ref.current;
        const inner = frame?.querySelector<HTMLElement>("[data-media-inner]");
        if (!frame || !inner) return;
        const enter = { trigger: frame, start: "top 88%", once: true };

        gsap.fromTo(frame, { clipPath: "inset(10% 6% 10% 6%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.out", scrollTrigger: enter });
        gsap.fromTo(inner, { scale: 1.18 }, { scale: 1, duration: 2, ease: "expo.out", scrollTrigger: enter });
        if (parallax) {
          gsap.fromTo(
            inner,
            { yPercent: -5 },
            { yPercent: 5, ease: "none", scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true } },
          );
        }
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={clsx("relative overflow-hidden", className)} style={style}>
      <div data-media-inner className={clsx("absolute inset-x-0 will-change-transform", parallax ? "-inset-y-[6%]" : "inset-y-0")}>
        {children}
      </div>
      {overlay}
    </div>
  );
}

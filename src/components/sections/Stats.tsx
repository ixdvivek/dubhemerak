"use client";

import { useRef } from "react";
import Image from "next/image";
import { stats } from "@/lib/content";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

export function Stats() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const trigger = { trigger: root.current, start: "top 85%", once: true };

        gsap.from("[data-stat]", { y: 32, autoAlpha: 0, stagger: 0.1, duration: 1.2, scrollTrigger: trigger });
        gsap.from("[data-stat-icon]", { scale: 0.4, rotate: -20, autoAlpha: 0, stagger: 0.1, duration: 1.2, ease: "back.out(2)", scrollTrigger: trigger });

        // Count numbers towards their final value (33 up, 0% / 0w down from 100).
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const to = Number(el.dataset.count);
          const from = Number(el.dataset.from ?? 0);
          const suffix = el.dataset.suffix ?? "";
          const state = { v: from };
          el.textContent = `${from}${suffix}`;
          gsap.to(state, {
            v: to,
            duration: 2.2,
            ease: "power3.out",
            scrollTrigger: trigger,
            onUpdate: () => {
              el.textContent = `${Math.round(state.v)}${suffix}`;
            },
          });
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} aria-label="Key facts" className="bg-white">
      <ul className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:py-20 lg:flex lg:items-center lg:justify-between">
        {stats.map((s) => (
          <li key={s.label} data-stat className="flex flex-col gap-3 sm:flex-row sm:items-center lg:w-[248px]">
            <Image data-stat-icon src={s.icon} alt="" width={40} height={40} className="size-9 sm:size-10" />
            <div className="flex flex-col gap-1 whitespace-nowrap text-black sm:gap-2">
              <p className="font-display text-[clamp(2.25rem,1.6rem+1.6vw,3rem)] leading-[1.08] font-thin">
                {"text" in s ? (
                  s.text
                ) : (
                  <span data-count={s.value} data-from={s.from} data-suffix={s.suffix}>
                    {s.value}
                    {s.suffix}
                  </span>
                )}
              </p>
              <p className="font-sans text-base leading-6 font-light whitespace-normal sm:text-xl">{s.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

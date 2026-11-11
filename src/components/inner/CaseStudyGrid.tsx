"use client";

import { useRef, useState } from "react";
import clsx from "clsx";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { CaseStudyCard, type CaseStudyCardData } from "@/components/ui/CaseStudyCard";

export type ListedCaseStudy = CaseStudyCardData & { category: string; products: readonly string[] };

/** Filterable case study grid for the listing page. */
export function CaseStudyGrid({ items, filters }: { items: readonly ListedCaseStudy[]; filters: readonly string[] }) {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? items : items.filter((i) => i.category === active);
  const listRef = useRef<HTMLDivElement>(null);
  const firstRun = useRef(true);

  // Re-stagger the cards whenever the filter changes (the first paint is handled by the page's Reveal).
  useGSAP(
    () => {
      if (firstRun.current) {
        firstRun.current = false;
        return;
      }
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from("[data-filter-item]", { y: 28, autoAlpha: 0, stagger: 0.07, duration: 0.9, ease: "expo.out" });
      });
    },
    { scope: listRef, dependencies: [active] },
  );

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div role="group" aria-label="Filter case studies" className="flex flex-wrap gap-2">
          {["All", ...filters].map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={active === f}
              onClick={() => setActive(f)}
              className={clsx(
                "rounded-3xl px-5 py-2.5 font-sans text-base leading-6 transition-colors duration-300",
                active === f ? "bg-black font-medium text-white" : "border border-black/15 hover:border-black",
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="font-sans text-sm leading-5 tracking-[1px] text-black/55">
          {shown.length} {shown.length === 1 ? "case study" : "case studies"}
        </p>
      </div>

      <div ref={listRef}>
        {shown.length ? (
          <ul className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {shown.map((cs) => (
              <li key={cs.href + cs.title} data-filter-item className="flex flex-col gap-4">
                <CaseStudyCard cs={cs} />
                <p className="flex flex-wrap items-center gap-2 font-sans text-sm leading-5">
                  <span className="text-black/55">Installed:</span>
                  {cs.products.map((p) => (
                    <span key={p} className="rounded-2xl bg-brand/10 px-3 py-1 font-medium text-brand">
                      {p}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p
            data-filter-item
            className="bg-[#f4f5f7] px-8 py-12 text-center font-display text-2xl leading-8 font-light"
          >
            No {active.toLowerCase()} case studies yet — they&apos;re being documented now.
          </p>
        )}
      </div>
    </div>
  );
}

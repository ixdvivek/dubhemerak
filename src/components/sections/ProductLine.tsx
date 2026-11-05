"use client";

import { useRef, type CSSProperties } from "react";
import Image from "next/image";
import clsx from "clsx";
import type { Product, ProductLine as ProductLineData } from "@/lib/content";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

function ProductBlock({ product, index, total }: { product: Product; index: number; total: number }) {
  const right = product.align === "right";

  return (
    <article
      data-product
      aria-labelledby={`${product.slug}-title`}
      className="relative h-svh max-h-[1080px] min-h-[640px] overflow-hidden bg-black text-white lg:sticky lg:top-0"
    >
      <div data-product-media className="absolute inset-0 will-change-transform">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="100vw"
          className="object-cover object-[var(--pos-m)] lg:object-[var(--pos)]"
          style={
            {
              "--pos": product.image.position ?? "50% 50%",
              "--pos-m": product.image.mobilePosition ?? product.image.position ?? "50% 50%",
            } as CSSProperties
          }
        />
        {product.overlay && (
          <div
            data-product-overlay
            className="absolute top-[38%] left-[18%] w-[78%] md:top-[30.5%] md:left-[44%] md:w-[48.5%]"
          >
            <Image
              src={product.overlay.src}
              alt={product.overlay.alt}
              width={1067}
              height={563}
              sizes="(min-width: 768px) 50vw, 80vw"
              className="h-auto w-full"
            />
          </div>
        )}
        <div className="absolute inset-0" style={{ backgroundImage: product.gradient }} />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent md:hidden" />
      </div>

      <div data-product-dim className="pointer-events-none absolute inset-0 bg-black opacity-0" />

      <p className="absolute top-24 right-5 font-sans text-sm leading-5 tracking-[1.5px] text-white/70 sm:right-8 lg:top-[120px] xl:right-[118px]">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </p>

      <div
        className={clsx(
          "container-x relative flex h-full flex-col justify-end pb-16 lg:pb-[120px]",
          right && "md:items-end md:text-right",
        )}
      >
        <div data-product-content className={clsx("flex max-w-[560px] flex-col items-start gap-6", right && "md:items-end")}>
          <div className="flex flex-col gap-3">
            {product.logo.chip ? (
              <span className="w-fit rounded-md bg-white/92 px-3.5 py-2.5 md:self-auto">
                <Image
                  src={product.logo.src}
                  alt="Dubhe Richus"
                  width={product.logo.width}
                  height={product.logo.height}
                  className="h-auto w-[220px] sm:w-[291px]"
                />
              </span>
            ) : (
              <Image
                src={product.logo.src}
                alt={product.name}
                width={product.logo.width}
                height={product.logo.height}
                className="h-auto"
                style={{ width: `min(${product.logo.width}px, 80vw)` }}
              />
            )}
            <h3
              id={`${product.slug}-title`}
              className={clsx(
                "font-display text-[clamp(2.25rem,1.6rem+1.6vw,3rem)] leading-[1.08] font-normal",
                !product.showName && "sr-only",
              )}
            >
              {product.name}
            </h3>
          </div>
          <p className="font-display text-xl leading-8 font-light sm:text-2xl">{product.description}</p>
          <p className="font-sans text-sm leading-6 font-light tracking-[0.5px] text-white/75 sm:text-base">
            {product.tags.join("  ·  ")}
          </p>
          <Button href={product.href ?? "/products"}>Explore {product.name}</Button>
        </div>
      </div>
    </article>
  );
}

export function ProductLine({ line }: { line: ProductLineData }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        const blocks = gsap.utils.toArray<HTMLElement>("[data-product]");

        blocks.forEach((block, i) => {
          // Content and media settle in as each block arrives.
          gsap.from(block.querySelectorAll("[data-product-content] > *"), {
            y: 48,
            autoAlpha: 0,
            stagger: 0.08,
            duration: 1.2,
            scrollTrigger: { trigger: block, start: "top 55%", once: true },
          });
          gsap.fromTo(
            block.querySelector("[data-product-media]"),
            { scale: 1.12 },
            { scale: 1, ease: "none", scrollTrigger: { trigger: block, start: "top bottom", end: "top top", scrub: true } },
          );
          const overlay = block.querySelector("[data-product-overlay]");
          if (overlay) {
            gsap.from(overlay, {
              yPercent: 18,
              ease: "none",
              scrollTrigger: { trigger: block, start: "top bottom", end: "top top", scrub: true },
            });
          }

          // Stacked-card effect: on desktop, the pinned block recedes as the next one slides over it.
          const next = blocks[i + 1];
          if (!next) return;
          gsap
            .timeline({
              scrollTrigger: { trigger: next, start: "top bottom", end: "top top", scrub: true },
            })
            .to(block.querySelector("[data-product-dim]"), { opacity: 0.55, ease: "none" }, 0)
            .to(block.querySelector("[data-product-content]"), { y: -60, autoAlpha: 0.3, ease: "none" }, 0);
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id={line.id} aria-label={line.title[0]} className="bg-white">
      <Reveal className="container-x pt-16 pb-10 md:pt-20 md:pb-12">
        <SectionHeading eyebrow={line.eyebrow} title={line.title} description={line.description} />
      </Reveal>
      <div className="relative">
        {line.products.map((p, i) => (
          <ProductBlock key={p.slug} product={p} index={i} total={line.products.length} />
        ))}
      </div>
    </section>
  );
}

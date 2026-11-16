import Image from "next/image";
import type { testimonials } from "@/lib/content";

export type Testimonial = (typeof testimonials)[number];

/** White quote card; on hover/focus the customer's portrait fills it. Used on Home and /testimonials. */
export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure
      tabIndex={0}
      className="group relative flex h-full min-h-[300px] flex-col justify-between gap-10 overflow-hidden bg-white p-8 text-black transition-shadow duration-500 ease-out-expo outline-none hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] focus-visible:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
    >
      {/* Hover state: the customer's portrait fills the card. */}
      <div
        aria-hidden
        className="absolute inset-0 scale-110 opacity-0 transition-[opacity,scale] duration-700 ease-out-expo group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
      >
        <Image src={t.photo} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative flex items-center justify-between">
        <span className="flex h-12 w-[97px] items-center">
          <Image
            src={t.logo.src}
            alt={t.logo.alt}
            width={t.logo.width}
            height={t.logo.height}
            className="h-auto max-h-12 w-auto transition-[filter] duration-500 group-hover:brightness-0 group-hover:invert group-focus-visible:brightness-0 group-focus-visible:invert"
          />
        </span>
        <Image
          src={t.rating === 5 ? "/images/icons/stars-5.svg" : "/images/icons/stars-4.svg"}
          alt={`${t.rating} out of 5 stars`}
          width={72}
          height={12}
        />
      </div>

      <div className="relative flex flex-col gap-4">
        <blockquote className="font-display text-xl leading-6 font-normal transition-colors duration-500 group-hover:text-white group-focus-visible:text-white">
          {t.quote}
        </blockquote>
        <figcaption className="flex items-center gap-2.5">
          <span className="relative size-[60px] shrink-0 overflow-hidden rounded-full transition-[opacity,width] duration-500 group-hover:w-0 group-hover:opacity-0 group-focus-visible:w-0 group-focus-visible:opacity-0">
            <Image src={t.photo} alt="" fill sizes="60px" className="object-cover object-[50%_25%]" />
          </span>
          <span className="flex flex-col tracking-[-0.5px] transition-colors duration-500 group-hover:text-white group-focus-visible:text-white">
            <span className="font-sans text-base leading-5 font-semibold">{t.name}</span>
            <span className="font-sans text-sm leading-5 font-medium opacity-50 group-hover:opacity-80">
              {t.role}
            </span>
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

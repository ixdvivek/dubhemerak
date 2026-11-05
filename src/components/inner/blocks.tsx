import type { ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { MediaFrame } from "@/components/motion/MediaFrame";

/** Standard inner-page section rhythm: 120px vertical on desktop. */
export const sectionY = "py-16 md:py-24 lg:py-[120px]";

type SplitProps = {
  media: ReactNode;
  children: ReactNode;
  /** Put the text column first on desktop (media still leads on mobile). */
  textFirst?: boolean;
  id?: string;
  className?: string;
  /** Override the vertical padding (e.g. stacked rows on Applications). */
  padding?: string;
  label?: string;
};

/** Two-column media + text row (680 / 584 at 1600px with a 96px gap). */
export function Split({ media, children, textFirst, id, className, padding = sectionY, label }: SplitProps) {
  return (
    <section id={id} aria-label={label} className={clsx("scroll-mt-24", className)}>
      <Reveal
        className={clsx(
          "container-x grid items-center gap-10 md:gap-14 lg:gap-24",
          textFirst ? "lg:grid-cols-[584fr_680fr]" : "lg:grid-cols-[680fr_584fr]",
          padding,
        )}
      >
        <div className={clsx(textFirst && "lg:order-2")}>{media}</div>
        <div className="flex flex-col items-start gap-5">{children}</div>
      </Reveal>
    </section>
  );
}

/** Text column used inside `Split`: eyebrow, title (display or two-tone), body copy. */
export function SplitText({
  eyebrow,
  title,
  accent,
  body,
  display,
  children,
}: {
  eyebrow: string;
  title: string;
  /** Blue second half of a two-tone title. */
  accent?: string;
  body: string | string[];
  /** Large light title (44/52) instead of the 40/52 section title. */
  display?: boolean;
  children?: ReactNode;
}) {
  return (
    <>
      <Eyebrow data-reveal>{eyebrow}</Eyebrow>
      <h2
        data-reveal
        className={clsx(
          "font-display",
          display
            ? "text-[clamp(2rem,1.4rem+1.6vw,2.75rem)] leading-[1.18] font-light tracking-[-0.5px]"
            : "text-[clamp(1.875rem,1.2rem+2vw,2.5rem)] leading-[1.3] font-normal",
        )}
      >
        {title} {accent && <span className="text-brand">{accent}</span>}
      </h2>
      {(Array.isArray(body) ? body : [body]).map((p) => (
        <p key={p.slice(0, 24)} data-reveal className="font-sans text-base leading-6 font-light md:text-lg">
          {p}
        </p>
      ))}
      {children}
    </>
  );
}

/** Photo with a fixed design aspect ratio that scales with the column. */
export function Photo({
  src,
  alt,
  ratio = "680/560",
  sizes = "(min-width: 1024px) 680px, 100vw",
  position,
  className,
}: {
  src: string;
  alt: string;
  ratio?: string;
  sizes?: string;
  position?: string;
  className?: string;
}) {
  return (
    <MediaFrame className={clsx("bg-mist", className)} style={{ aspectRatio: ratio }}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" style={{ objectPosition: position }} />
    </MediaFrame>
  );
}

/** Still frame with a play button, standing in for a video until the footage is supplied. */
export function VideoPlaceholder({
  src,
  label,
  ratio = "680/560",
  sizes = "(min-width: 1024px) 680px, 100vw",
  showLabel = true,
  className,
}: {
  src: string;
  label: string;
  ratio?: string;
  sizes?: string;
  /** Print the label on the frame (off when a caption sits below). */
  showLabel?: boolean;
  className?: string;
}) {
  return (
    <div role="img" aria-label={`${label} (video coming soon)`} className={clsx("group", className)}>
      <MediaFrame
        className="bg-black"
        style={{ aspectRatio: ratio }}
        overlay={
          <>
            <div className="absolute inset-0 bg-black/35 transition-colors duration-500 group-hover:bg-black/25" />
            <span className="absolute top-1/2 left-1/2 flex size-[72px] -translate-1/2 items-center justify-center lg:size-[88px]">
              <span aria-hidden className="absolute inset-0 animate-[ping_2.6s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-white/25" />
              <span className="relative flex size-full items-center justify-center rounded-full bg-white/92 transition-transform duration-500 ease-out-expo group-hover:scale-110">
                <svg width="22" height="28" viewBox="0 0 22 28" aria-hidden className="ml-1.5 scale-90 lg:scale-100">
                  <path d="M0 0V28L22 14Z" fill="#191818" />
                </svg>
              </span>
            </span>
            {showLabel && (
              <p className="absolute bottom-6 left-6 font-sans text-sm leading-5 tracking-[1px] text-white sm:bottom-8 sm:left-8">{label}</p>
            )}
          </>
        }
      >
        <Image src={src} alt="" fill sizes={sizes} className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105" />
      </MediaFrame>
    </div>
  );
}

/** Dashed box for content the client hasn't supplied yet (photos, diagrams, portraits). */
export function Placeholder({
  label,
  ratio,
  dark,
  className,
}: {
  label: string;
  ratio?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center border border-dashed p-6 text-center font-sans text-sm leading-5",
        dark ? "border-white/15 bg-white/5 text-white/50" : "border-black/12 bg-[#f4f5f7] text-black/45",
        className,
      )}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      {label}
    </div>
  );
}

/** Blue-tick list. */
export function CheckList({ items, className }: { items: readonly string[]; className?: string }) {
  return (
    <ul data-reveal className={clsx("flex flex-col gap-3.5 pt-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 font-sans text-base leading-6 font-light md:text-lg">
          <Image data-pop src="/images/icons/icon-check.svg" alt="" width={24} height={24} className="mt-px shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Outlined pill used for product names and jump links. */
export function Chip({ children, dark, href }: { children: ReactNode; dark?: boolean; href?: string }) {
  const cls = clsx(
    "inline-flex rounded-full border px-3.5 py-1.5 font-sans text-sm leading-5 transition-colors",
    dark ? "border-white/25 text-white" : "border-black/15 text-black",
    href && (dark ? "hover:bg-white hover:text-ink" : "hover:border-ink hover:bg-ink hover:text-white"),
  );
  return href ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <span className={cls}>{children}</span>
  );
}

/** Light-blue callout with a brand bar, used for the one-line takeaway in case study steps. */
export function KeyPoint({ children }: { children: ReactNode }) {
  return (
    <p data-reveal className="flex w-full gap-4 bg-brand/8 px-6 py-5 font-sans text-base leading-6">
      <span aria-hidden data-line="y" className="w-[3px] shrink-0 bg-brand" />
      <span>{children}</span>
    </p>
  );
}

/** 2×3 photo grid with captions; missing photos render as placeholders. */
export function Gallery({ items, sizes = "(min-width: 1024px) 432px, (min-width: 640px) 50vw, 100vw" }: { items: readonly { caption: string; src?: string }[]; sizes?: string }) {
  return (
    <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <li key={it.caption} data-reveal className="flex flex-col gap-3">
          {it.src ? (
            <MediaFrame parallax={false} className="group aspect-[432/320] bg-mist">
              <Image
                src={it.src}
                alt={it.caption}
                fill
                sizes={sizes}
                className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
              />
            </MediaFrame>
          ) : (
            <Placeholder label="Photo to come" ratio="432/320" />
          )}
          <p className="font-sans text-base leading-6 font-light text-black/70">{it.caption}</p>
        </li>
      ))}
    </ul>
  );
}

/** Two video cards on a dark band. */
export function VideoCards({ items }: { items: readonly { title: string; body: string; src: string }[] }) {
  return (
    <ul className="grid gap-10 md:grid-cols-2 md:gap-8">
      {items.map((v) => (
        <li key={v.title} data-reveal className="flex flex-col gap-3">
          <VideoPlaceholder src={v.src} label={v.title} showLabel={false} ratio="664/374" sizes="(min-width: 768px) 50vw, 100vw" />
          <h3 className="mt-2 font-display text-2xl leading-8 font-normal text-white">{v.title}</h3>
          <p className="font-sans text-base leading-6 font-light text-white/70">{v.body}</p>
        </li>
      ))}
    </ul>
  );
}

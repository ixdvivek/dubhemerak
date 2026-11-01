import clsx from "clsx";

/**
 * Renders a single-colour SVG exported from Figma as a CSS mask so it
 * inherits `currentColor` — one asset works on both light and dark chips.
 */
export function MaskIcon({ src, className }: { src: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={clsx("inline-block size-4 shrink-0 bg-current", className)}
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
      }}
    />
  );
}

export const icons = {
  arrow: "/images/icons/arrow.svg",
  call: "/images/icons/icon-call.svg",
} as const;

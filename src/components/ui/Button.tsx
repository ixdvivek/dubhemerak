import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import { MaskIcon, icons } from "./MaskIcon";

type Variant = "light" | "outline" | "dark" | "outline-dark" | "outline-light";

const surface: Record<Variant, string> = {
  light: "bg-white text-ink hover:bg-mist",
  outline: "border border-line text-ink hover:bg-ink hover:text-white",
  dark: "bg-black text-white hover:bg-ink/85",
  "outline-dark": "border border-black text-ink hover:bg-black hover:text-white",
  "outline-light": "border border-white/60 text-white hover:border-white hover:bg-white hover:text-ink",
};

const chip: Record<Variant, string> = {
  light: "bg-ink text-white",
  outline: "bg-ink text-white group-hover:bg-white group-hover:text-ink",
  dark: "bg-white text-ink",
  "outline-dark": "bg-ink text-white group-hover:bg-white group-hover:text-ink",
  "outline-light": "bg-white text-ink group-hover:bg-ink group-hover:text-white",
};

type ButtonProps = {
  variant?: Variant;
  href: string;
  /** Mask-icon path shown in the round chip. Defaults to the arrow. */
  icon?: string;
  /** Full-colour icon rendered as-is without a chip (e.g. the WhatsApp mark). */
  bareIcon?: ReactNode;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"a">, "href">;

/**
 * Pill CTA used across the site — label plus a round icon chip.
 * Internal paths render a Next.js `<Link>` for client-side navigation;
 * anchors, `tel:`, `mailto:` and external URLs render a plain `<a>`.
 */
export function Button({ variant = "light", href, icon = icons.arrow, bareIcon, className, children, ...rest }: ButtonProps) {
  const classes = clsx(
    "group inline-flex items-center justify-center gap-2 rounded-3xl py-3 pr-3 pl-5 font-sans text-base leading-6 font-bold whitespace-nowrap transition-[color,background-color,border-color,scale] duration-300 ease-out-expo active:scale-[0.97]",
    surface[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {bareIcon ? (
        <span className="flex size-6 items-center justify-center">{bareIcon}</span>
      ) : (
        <span
          className={clsx(
            "flex items-center rounded-xl p-1 transition-[background-color,color,translate] duration-300 ease-out-expo group-hover:translate-x-0.5",
            chip[variant],
          )}
        >
          <MaskIcon src={icon} />
        </span>
      )}
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {content}
    </a>
  );
}

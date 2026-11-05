import type { ReactNode } from "react";
import clsx from "clsx";

type SectionHeadingProps = {
  eyebrow?: string;
  /** First part renders in the base tone, second in brand blue. */
  title: [string, string?];
  description?: string;
  action?: ReactNode;
  /** `dark` softens the description for use on dark sections. */
  tone?: "light" | "dark";
  /** Max width of the text column in px (homepage 720, inner pages 760, long titles 960). */
  width?: number;
  /** Heading level — inner pages use h2 under the page h1. */
  as?: "h2" | "h3";
  /** Heading id, for `aria-labelledby` on the parent section. */
  id?: string;
  className?: string;
};

/** "Real installs, Real outcomes." style header with an optional right-aligned CTA. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  tone = "light",
  width = 720,
  as: Heading = "h2",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx("flex flex-col gap-6 md:flex-row md:items-end md:justify-between", className)}>
      <div className="flex flex-col gap-2" style={{ maxWidth: width }}>
        {eyebrow && <Eyebrow data-reveal>{eyebrow}</Eyebrow>}
        <Heading id={id} data-reveal className="font-display text-[clamp(1.875rem,1.2rem+2vw,2.5rem)] leading-[1.3] font-normal">
          {title[0]} {title[1] && <span className="text-brand">{title[1]}</span>}
        </Heading>
        {description && (
          <p
            data-reveal
            style={{ maxWidth: width === 720 ? 664 : 760 }}
            className={clsx(
              "font-sans text-base leading-6 font-light md:text-lg",
              tone === "dark" && "text-white/80",
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && (
        <div data-reveal className="shrink-0">
          {action}
        </div>
      )}
    </div>
  );
}

/** Small uppercase brand-blue label above headings. */
export function Eyebrow({ children, className, ...rest }: { children: ReactNode; className?: string } & Record<`data-${string}`, unknown>) {
  return (
    <p className={clsx("font-sans text-sm leading-6 font-semibold tracking-[1.5px] text-brand uppercase", className)} {...rest}>
      {children}
    </p>
  );
}

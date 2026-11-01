import type { ReactNode } from "react";
import clsx from "clsx";

type SectionHeadingProps = {
  eyebrow?: string;
  /** First part renders in the base tone, second in brand blue. */
  title: [string, string?];
  description?: string;
  action?: ReactNode;
  className?: string;
};

/** "Real installs, Real outcomes." style header with an optional right-aligned CTA. */
export function SectionHeading({ eyebrow, title, description, action, className }: SectionHeadingProps) {
  return (
    <div className={clsx("flex flex-col gap-6 md:flex-row md:items-end md:justify-between", className)}>
      <div className="flex max-w-[720px] flex-col gap-2">
        {eyebrow && (
          <p data-reveal className="font-sans text-sm leading-6 font-semibold tracking-[1.5px] text-brand uppercase">
            {eyebrow}
          </p>
        )}
        <h2 data-reveal className="font-display text-[clamp(1.875rem,1.2rem+2vw,2.5rem)] leading-[1.3] font-normal">
          {title[0]} {title[1] && <span className="text-brand">{title[1]}</span>}
        </h2>
        {description && (
          <p data-reveal className="max-w-[664px] font-sans text-base leading-6 font-light md:text-lg">
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

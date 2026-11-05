import Image from "next/image";
import Link from "next/link";
import { MaskIcon } from "@/components/ui/MaskIcon";

export type CaseStudyCardData = {
  kicker: string;
  title: string;
  href: string;
  image: { src: string; alt: string };
  /** Omitted for case studies whose results are not published yet. */
  metric?: { icon: string; value: string; label: readonly [string, string] };
};

/** Photo card with a frosted panel — shared by the homepage, listing and product pages. */
export function CaseStudyCard({ cs, sizes = "(min-width: 1024px) 432px, (min-width: 768px) 50vw, 100vw" }: { cs: CaseStudyCardData; sizes?: string }) {
  return (
    <Link
      href={cs.href}
      className="group relative flex h-[440px] flex-col justify-end overflow-hidden p-5 sm:p-8 lg:h-[520px]"
    >
      <Image
        src={cs.image.src}
        alt={cs.image.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
      />
      <div className="relative flex flex-col gap-2 bg-white/80 p-6 text-black backdrop-blur-[15px] transition-colors duration-500 group-hover:bg-white/90">
        <p className="font-sans text-sm leading-5 font-light">{cs.kicker}</p>
        <h3 className="font-display text-xl leading-5 font-normal">{cs.title}</h3>
        {cs.metric && (
          <>
            <Image src="/images/icons/line.svg" alt="" width={320} height={1} className="my-1 h-px w-full" />
            <div className="flex items-center gap-2">
              <span className="flex rounded-2xl bg-ink p-2 text-white">
                <MaskIcon src={cs.metric.icon} />
              </span>
              <span className="font-display text-[32px] leading-8 font-normal">{cs.metric.value}</span>
              <span className="font-sans text-sm leading-4 font-light">
                {cs.metric.label[0]}
                <br />
                {cs.metric.label[1]}
              </span>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

type RawCaseStudy = {
  kicker: string;
  title: string;
  href: string;
  icon: string;
  metric: string;
  metricLabel: readonly [string, string];
  image: { src: string; alt: string };
};

/** Adapts an entry from `content.caseStudies` to the card shape. */
export const toCard = (cs: RawCaseStudy): CaseStudyCardData => ({
  kicker: cs.kicker,
  title: cs.title,
  href: cs.href,
  image: cs.image,
  metric: { icon: cs.icon, value: cs.metric, label: cs.metricLabel },
});

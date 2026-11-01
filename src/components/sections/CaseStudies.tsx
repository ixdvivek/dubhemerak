import Image from "next/image";
import { caseStudies } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { MaskIcon } from "@/components/ui/MaskIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function CaseStudies() {
  return (
    <section aria-label="Case studies" className="bg-white">
      <Reveal className="container-x flex flex-col gap-12 py-16 md:py-20">
        <SectionHeading
          title={["Real installs,", "Real outcomes."]}
          description="Every case study is structured the same way — the problem, the solution we proposed, how it was installed, and what changed."
          action={
            <Button variant="outline" href="#">
              View Case Studies
            </Button>
          }
        />

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {caseStudies.map((cs) => (
            <li key={cs.title} data-reveal>
              <a
                href="#"
                className="group relative flex h-[440px] flex-col justify-end overflow-hidden p-5 sm:p-8 lg:h-[520px]"
              >
                <Image
                  src={cs.image.src}
                  alt={cs.image.alt}
                  fill
                  sizes="(min-width: 1024px) 432px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
                  style={{ objectPosition: "50% 50%" }}
                />
                <div className="relative flex flex-col gap-2 bg-white/80 p-6 text-black backdrop-blur-[15px] transition-colors duration-500 group-hover:bg-white/90">
                  <p className="font-sans text-sm leading-5 font-light">{cs.kicker}</p>
                  <h3 className="font-display text-xl leading-5 font-normal">{cs.title}</h3>
                  <Image src="/images/icons/line.svg" alt="" width={320} height={1} className="my-1 h-px w-full" />
                  <div className="flex items-center gap-2">
                    <span className="flex rounded-2xl bg-ink p-2 text-white">
                      <MaskIcon src={cs.icon} />
                    </span>
                    <span className="font-display text-[32px] leading-8 font-normal">{cs.metric}</span>
                    <span className="font-sans text-sm leading-4 font-light">
                      {cs.metricLabel[0]}
                      <br />
                      {cs.metricLabel[1]}
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

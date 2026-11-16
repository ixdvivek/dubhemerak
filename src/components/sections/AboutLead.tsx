import Image from "next/image";
import { about } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

export function AboutLead() {
  return (
    <section aria-labelledby="about-title" className="bg-mist">
      <Reveal className="container-x flex flex-col gap-10 py-16 md:gap-12 md:py-20 xl:flex-row xl:items-center">
        <div className="flex flex-1 flex-col items-start gap-5">
          <p data-reveal className="font-sans text-base leading-6 font-semibold tracking-[1px]">
            {about.eyebrow}
          </p>
          <h2
            id="about-title"
            data-reveal
            className="max-w-[632px] font-display text-[clamp(2rem,1.3rem+3.2vw,3.75rem)] leading-none font-light tracking-[-0.5px]"
          >
            {about.title}
          </h2>
          <p data-reveal className="max-w-[560px] font-sans text-base leading-6 font-light md:text-lg">
            {about.body}
          </p>
          <div data-reveal>
            <Button variant="outline" href={about.cta.href}>
              {about.cta.label}
            </Button>
          </div>
        </div>

        <div data-reveal className="relative aspect-[680/560] w-full overflow-hidden sm:aspect-[16/9] xl:aspect-[680/560] xl:w-[52%] xl:max-w-[680px] xl:shrink-0">
          <Parallax className="absolute -inset-y-[8%] inset-x-0">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(min-width: 1280px) 680px, 100vw"
              className="object-cover"
            />
          </Parallax>
        </div>
      </Reveal>
    </section>
  );
}

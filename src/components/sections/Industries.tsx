import Image from "next/image";
import { industries } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function Industries() {
  return (
    <section aria-label="Industries we serve" className="bg-white">
      <Reveal className="container-x flex flex-col gap-12 py-16 md:py-20" stagger={0.06}>
        <SectionHeading
          title={["Industries", "we serve."]}
          description="From hospital wards to factory floors — systems sized to the way each site actually uses water."
          action={
            <Button variant="outline" href="#contact">
              Talk to an expert
            </Button>
          }
        />

        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
          {industries.map((item) => (
            <li key={item.title} data-reveal className="group flex flex-col gap-4">
              <div className="relative h-[240px] overflow-hidden bg-[#edf1f5] lg:h-[280px]">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 432px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
                  style={{ objectPosition: item.image.position }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-[22px] leading-7 font-normal">{item.title}</h3>
                <p className="font-sans text-base leading-6 font-light text-black/75">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

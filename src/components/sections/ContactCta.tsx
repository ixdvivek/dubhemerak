import Image from "next/image";
import { contact } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { icons } from "@/components/ui/MaskIcon";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

export function ContactCta() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 bg-white">
      <Reveal className="container-x flex flex-col gap-12 py-16 md:py-20 lg:flex-row lg:items-center">
        <div data-reveal className="relative aspect-square w-full overflow-hidden text-white lg:w-[680px] lg:shrink-0">
          <Parallax className="absolute -inset-y-[8%] inset-x-0">
            <Image
              src="/images/contact.webp"
              alt="A Dubhe consultant talking a client through a proposal"
              fill
              sizes="(min-width: 1024px) 680px, 100vw"
              className="object-cover"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80" />
          <Image
            src="/images/brand-mark.svg"
            alt=""
            width={278}
            height={108}
            className="absolute bottom-0 left-0 h-auto w-[150px] sm:w-[278px]"
          />
          <div className="absolute right-5 bottom-28 flex w-[min(264px,70%)] flex-col items-end gap-6 sm:right-[60px] sm:bottom-[108px]">
            <span className="h-px w-full bg-white" />
            <p className="hidden text-right font-display text-base leading-5 font-light sm:block">
              Chemical-free, electricity-free drinking water systems and fully automatic effluent treatment plants
            </p>
            <Button href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
              Get in touch
            </Button>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-start gap-5">
          <p data-reveal className="font-sans text-base leading-6 font-semibold tracking-[1px]">
            Get in touch
          </p>
          <h2
            id="contact-title"
            data-reveal
            className="font-display text-[clamp(2.5rem,1.3rem+3.2vw,3.75rem)] leading-none font-light tracking-[-0.5px]"
          >
            Tell us what you&apos;re solving for, with our expert consultants.
          </h2>
          <p data-reveal className="font-sans text-base leading-6 font-light md:text-lg">
            Private commercial enquiries — hospitals, hotels, small businesses — get a response within one business day.
          </p>
          <div data-reveal className="flex flex-wrap gap-3">
            <Button variant="dark" href={contact.phoneHref} icon={icons.call}>
              Call us now
            </Button>
            <Button
              variant="outline-dark"
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              bareIcon={<Image src="/images/icons/icon-whatsapp.svg" alt="" width={24} height={24} />}
            >
              WhatsApp us
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

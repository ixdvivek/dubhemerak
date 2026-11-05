import { getImageProps } from "next/image";
import { contact } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

type CtaBannerProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
};

/** Compact dark CTA card that closes every inner page (the homepage keeps its larger contact section). */
export function CtaBanner({
  eyebrow = "Get in touch",
  title = "Tell us what you're solving for.",
  description = "Private commercial enquiries — hospitals, hotels, small businesses — get a response within one business day from our expert consultants.",
  primary = { label: "Get in touch", href: "/contact" },
}: CtaBannerProps) {
  // Art direction: a wide crop for the desktop card, the full frame for taller mobile cards.
  const common = { alt: "", sizes: "(min-width: 1600px) 1360px, 100vw", quality: 75 };
  const {
    props: { srcSet: wide },
  } = getImageProps({ ...common, src: "/images/pages/cta-banner-wide.webp", width: 1956, height: 527 });
  const {
    props: { srcSet: tall, ...img },
  } = getImageProps({ ...common, src: "/images/pages/cta-banner.webp", width: 1600, height: 893 });

  return (
    <section aria-labelledby="cta-banner-title" className="bg-white">
      <Reveal className="container-x py-16 md:py-24 lg:py-[120px]">
        <div
          data-reveal
          className="relative isolate overflow-hidden rounded-3xl bg-[#11161d] px-6 py-12 text-white sm:px-12 sm:py-16 lg:p-[88px]"
        >
          <picture>
            <source media="(min-width: 1024px)" srcSet={wide} />
            <source srcSet={tall} />
            <img {...img} alt="" loading="lazy" className="absolute inset-0 -z-10 size-full object-cover opacity-40" />
          </picture>
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-[#11161d]/60 via-[#11161d]/10 to-transparent" />

          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex max-w-[720px] flex-col gap-5">
              <p className="font-sans text-base leading-6 font-semibold tracking-[1px] text-white/60">{eyebrow}</p>
              <h2
                id="cta-banner-title"
                className="font-display text-[clamp(2.25rem,1.6rem+1.8vw,3.25rem)] leading-[1.12] font-medium tracking-[-0.5px]"
              >
                {title}
              </h2>
              <p className="max-w-[640px] font-sans text-base leading-7 font-light sm:text-lg">{description}</p>
            </div>

            <div className="flex flex-col items-start gap-4 lg:items-end">
              <div className="flex flex-wrap gap-3">
                <Button variant="outline-light" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                  WhatsApp us
                </Button>
                <Button href={primary.href}>{primary.label}</Button>
              </div>
              <p className="font-sans text-sm leading-5 text-white/55">
                Call{" "}
                <a href={contact.phoneHref} className="underline-offset-4 hover:text-white hover:underline">
                  {contact.phoneDisplay}
                </a>
                {"  ·  "}Reply within one business day
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

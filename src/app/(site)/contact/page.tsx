import type { Metadata } from "next";
import Image from "next/image";
import { contact } from "@/lib/content";
import { PageHero } from "@/components/inner/PageHero";
import { EnquiryForm } from "@/components/inner/EnquiryForm";
import { sectionY } from "@/components/inner/blocks";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send Dubhe Merak an enquiry, call +91 9847 922 777 or message us on WhatsApp. Commercial enquiries get a response within one business day.",
};

const address = "282/20, August Nursing Home Road, Metro Pillar No. 333, South Kalamassery, Ernakulam, Kerala, India.";
const mapQuery = encodeURIComponent("282/20 August Nursing Home Road, South Kalamassery, Ernakulam, Kerala");

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={{ src: "/images/contact.webp", alt: "", position: "60% 40%" }}
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        title="Tell us what you're solving for."
        description="Private commercial enquiries — hospitals, hotels, small businesses — get a response within one business day."
      />

      <section id="contact" aria-labelledby="enquiry-title" className="scroll-mt-24 bg-white">
        <Reveal className={`container-x grid gap-12 lg:grid-cols-[760fr_504fr] lg:gap-24 ${sectionY}`}>
          <div className="flex flex-col gap-6">
            <Eyebrow data-reveal>Enquiry form</Eyebrow>
            <h2 id="enquiry-title" data-reveal className="-mt-4 font-display text-[clamp(1.875rem,1.2rem+2vw,2.5rem)] leading-[1.3]">
              Send us an enquiry
            </h2>
            <p data-reveal className="-mt-2 mb-2 font-sans text-base leading-6 font-light md:text-lg">
              Share a few details and the right specialist will get back to you.
            </p>
            <div data-reveal>
              <EnquiryForm />
            </div>
          </div>

          <aside data-reveal aria-label="Contact details" className="flex h-fit flex-col gap-7 bg-[#080e16] px-6 py-10 text-white sm:px-10 sm:py-12">
            <div className="flex flex-col gap-2">
              <p className="font-sans text-xs leading-4 font-semibold tracking-[1.5px] text-brand uppercase">Visit us</p>
              <address className="font-display text-[22px] leading-[30px] font-light not-italic">{address}</address>
            </div>
            <span aria-hidden className="h-px bg-white/12" />
            <div className="flex flex-col gap-2">
              <p className="font-sans text-xs leading-4 font-semibold tracking-[1.5px] text-brand uppercase">Email</p>
              <a href={`mailto:${contact.email}`} className="font-display text-[22px] leading-[30px] font-light hover:text-brand">
                {contact.email}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-sans text-xs leading-4 font-semibold tracking-[1.5px] text-brand uppercase">Call</p>
              <a href={contact.phoneHref} className="font-display text-[22px] leading-[30px] text-brand hover:text-white">
                {contact.phoneDisplay}
              </a>
            </div>
            <span aria-hidden className="h-px bg-white/12" />
            <div>
              <Button
                variant="outline-light"
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                bareIcon={<Image src="/images/icons/icon-whatsapp.svg" alt="" width={24} height={24} />}
              >
                WhatsApp us directly
              </Button>
            </div>
          </aside>
        </Reveal>
      </section>

      <section aria-label="Map" className="relative h-[360px] bg-mist md:h-[480px]">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
          <Image src="/images/icons/icon-pin.svg" alt="" width={48} height={48} />
          <p className="font-display text-xl leading-7">Map — South Kalamassery, Ernakulam</p>
        </div>
        <iframe
          title="Dubhe Merak office on Google Maps"
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="relative size-full border-0 grayscale-[35%]"
        />
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/inner/PageHero";
import { CtaBanner } from "@/components/inner/CtaBanner";
import { Gallery, KeyPoint, Photo, Split, SplitText, VideoCards, VideoPlaceholder, sectionY } from "@/components/inner/blocks";
import { Button } from "@/components/ui/Button";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { MediaFrame } from "@/components/motion/MediaFrame";

export const metadata: Metadata = {
  title: "Hotel, Kochi — case study",
  description:
    "How a Kochi hotel replaced a high-maintenance sewage setup with Tusker Gold and a Standard drinking-water unit — installed in 14 days with zero disruption.",
};

const facts = [
  ["Client", "Hotel · Kochi, Kerala"],
  ["Systems installed", "Tusker Gold + Standard"],
  ["Install time", "14 days"],
  ["Disruption", "Zero — fully operational"],
] as const;

const outcomes = [
  ["14 days", "Install to full operation"],
  ["0", "Guest-reported odour complaints since"],
  ["100%", "Compliance on inspection"],
  ["24/7", "Automatic operation, minimal supervision"],
] as const;

const installed = [
  {
    eyebrow: "Wastewater",
    name: "Tusker Gold",
    body: "Compact sewage treatment plant with quiet, odour-free operation and MBR technology.",
    href: "/products#wastewater",
    image: { src: "/images/tusker-gold-2026.webp", alt: "Tusker Gold sewage treatment plant" },
  },
  {
    eyebrow: "Drinking water",
    name: "Standard",
    body: "Our most-installed model — steady flow across five taps for a full household.",
    href: "/products#drinking-water",
    image: { src: "/images/standard-2026.webp", alt: "Dubhe Richus Standard filter" },
  },
];

export default function HotelKochiCaseStudy() {
  return (
    <>
      <PageHero
        image={{ src: "/images/case-2.webp", alt: "", position: "50% 40%" }}
        crumbs={[{ label: "Home", href: "/" }, { label: "Case studies", href: "/case-studies" }, { label: "Hotel, Kochi" }]}
        title="Odour-free sewage handling in a live property"
        description="A Kochi hotel replaced a high-maintenance sewage setup with Tusker Gold and a Standard drinking-water unit — installed in 14 days, without closing a single room."
      />

      <section aria-label="Project summary" className="bg-white">
        <Reveal as="dl" start="top 92%" className="container-x">
          <div className="grid grid-cols-2 gap-y-8 border-y border-black/10 py-10 lg:grid-cols-4 lg:py-14">
            {facts.map(([label, value], i) => (
              <div key={label} data-reveal className={i % 2 ? "border-l border-black/10 pl-6 lg:pl-8" : i ? "lg:border-l lg:border-black/10 lg:pl-8" : ""}>
                <dt className="font-sans text-xs leading-4 font-semibold tracking-[1.5px] text-brand uppercase">{label}</dt>
                <dd className="mt-2 pr-4 font-display text-lg leading-7 sm:text-[22px] sm:leading-[30px]">{value}</dd>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <Split
        textFirst
        label="Problem"
        media={<Photo src="/images/industry-hotels.webp" alt="Guest-facing pool area at the property" ratio="680/520" />}
      >
        <SplitText
          display
          eyebrow="01 · Problem"
          title="Odour and manual upkeep, right next to guests."
          body="The property's existing sewage system produced strong odour near guest-facing areas and required frequent manual intervention, risking both guest experience and compliance during peak occupancy."
        >
          <KeyPoint>Problem: odour and manual upkeep in a live, guest-facing hospitality property.</KeyPoint>
        </SplitText>
      </Split>

      <Split
        label="Proposed solution"
        className="bg-mist"
        media={<Photo src="/images/tusker-gold-2026.webp" alt="Render of the proposed Tusker Gold placement" ratio="680/520" />}
      >
        <SplitText
          display
          eyebrow="02 · Proposed solution"
          title="A compact, automatic plant that fits the utility space."
          body="Tusker Gold was proposed for its fully automatic AI system and compact, movable footprint — able to fit within the property's limited utility space without construction downtime, paired with a Standard drinking-water unit for guest floors."
        >
          <KeyPoint>Solution: Tusker Gold + Standard, chosen for compact footprint and automatic operation.</KeyPoint>
        </SplitText>
      </Split>

      <Split
        textFirst
        label="Installation"
        media={<VideoPlaceholder src="/images/case-2.webp" label="Installation walkthrough" ratio="680/520" />}
      >
        <SplitText
          display
          eyebrow="03 · Installation"
          title="Fourteen days, with every room still open."
          body="Installed over 14 days with the property remaining fully operational throughout. Plug-and-play connectors minimised on-site work, and the compact unit required no structural changes to existing utility rooms."
        >
          <KeyPoint>Installed in 14 days, zero disruption to hotel operations.</KeyPoint>
        </SplitText>
      </Split>

      <section aria-labelledby="outcome-title" className="bg-[#080e16] text-white">
        <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
          <SectionHeading
            id="outcome-title"
            eyebrow="04 · Outcome"
            title={["Measured", "results."]}
            description="Since installation, the property has run both systems with minimal operator involvement and no reported odour issues — freeing facilities staff to focus elsewhere."
            tone="dark"
            width={760}
          />
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-8">
            {outcomes.map(([value, label]) => (
              <div key={label} data-reveal className="relative flex flex-col-reverse gap-3 pt-6">
                <span aria-hidden data-line className="absolute inset-x-0 top-0 h-px bg-white/20" />
                <dt className="font-sans text-base leading-6 font-light text-white/70">{label}</dt>
                <dd className="font-display text-[44px] leading-[52px] font-thin sm:text-[64px] sm:leading-[72px]">
                  <CountUp value={value} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section aria-labelledby="gallery-title" className="bg-white">
        <Reveal className={`container-x flex flex-col gap-10 ${sectionY}`}>
          <SectionHeading id="gallery-title" eyebrow="Gallery" title={["The install,", "in photos."]} width={760} />
          <Gallery
            items={[
              { caption: "Utility room, before install" },
              { caption: "Tusker Gold unit arriving on site" },
              { caption: "Plug-and-play connection in progress" },
              { caption: "Standard unit installed on guest floor" },
              { caption: "Control panel, first power-on" },
              { caption: "Completed install, utility room" },
            ]}
          />
        </Reveal>
      </section>

      <section aria-labelledby="walkthrough-title" className="bg-[#080e16] text-white">
        <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
          <SectionHeading id="walkthrough-title" eyebrow="Full walkthrough" title={["Watch the", "install."]} tone="dark" width={760} />
          <VideoCards
            items={[
              {
                title: "Site walkthrough, before install",
                body: "A tour of the property's original sewage setup and the constraints the install had to work around.",
                src: "/images/industry-hotels.webp",
              },
              {
                title: "Install day, start to finish",
                body: "The full 14-day install compressed into a short walkthrough, from delivery to first automated cycle.",
                src: "/images/case-2.webp",
              },
            ]}
          />
        </Reveal>
      </section>

      <section aria-labelledby="installed-title" className="bg-mist">
        <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
          <SectionHeading
            id="installed-title"
            eyebrow="Products installed"
            title={["The systems", "behind the result."]}
            width={760}
            action={
              <Button variant="outline" href="/case-studies">
                All case studies
              </Button>
            }
          />
          <ul className="grid gap-8 lg:grid-cols-2">
            {installed.map((p) => (
              <li key={p.name} data-reveal className="group flex flex-col bg-white sm:flex-row">
                <MediaFrame parallax={false} className="aspect-[4/3] shrink-0 sm:aspect-square sm:w-[42%] lg:w-[280px]">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    sizes="(min-width: 640px) 280px, 100vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
                  />
                </MediaFrame>
                <div className="flex flex-col items-start justify-center gap-3 p-8">
                  <Eyebrow>{p.eyebrow}</Eyebrow>
                  <h3 className="font-display text-[32px] leading-10">{p.name}</h3>
                  <p className="font-sans text-base leading-6 font-light text-black/75">{p.body}</p>
                  <Button variant="outline" href={p.href} className="mt-1">
                    View product
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}

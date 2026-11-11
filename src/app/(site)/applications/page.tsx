import type { Metadata } from "next";
import { productHref } from "@/lib/products";
import { PageHero } from "@/components/inner/PageHero";
import { CtaBanner } from "@/components/inner/CtaBanner";
import { Chip, Photo, Split } from "@/components/inner/blocks";
import { Industries } from "@/components/sections/Industries";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "Water and wastewater treatment for hospitals, hotels, small companies and institutions — and the Dubhe systems typically installed for each.",
};

const applications = [
  {
    id: "hospitals",
    label: "Hospitals",
    title: "Compliance-first effluent handling.",
    body: "Consistent water quality and reliable effluent treatment that meets regulatory requirements without heavy operator involvement.",
    systems: ["Narwhal Steller", "Tusker Gold", "Commercial"],
    cta: { label: "Read the hospital case study", href: "/case-studies" },
    image: { src: "/images/industry-hospitals.webp", alt: "Surgeon washing hands at a hospital scrub sink", position: "35% 60%" },
  },
  {
    id: "hotels",
    label: "Hotels",
    title: "Quiet, odour-free operation on live sites.",
    body: "Compact, movable systems that install without disrupting the guest experience — and stay silent once running.",
    systems: ["Tusker Gold", "Standard"],
    cta: { label: "Read the hotel case study", href: "/case-studies/hotel-kochi" },
    image: { src: "/images/industry-hotels.webp", alt: "Indoor hotel pool with loungers", position: "30% 50%" },
  },
  {
    id: "small-companies",
    label: "Small companies",
    title: "Chemical-free drinking water, low upkeep.",
    body: "Electricity-free filtration sized to the property — minimal running cost, minimal maintenance.",
    systems: ["Medium", "Standard"],
    cta: { label: "Read the small business case study", href: "/case-studies" },
    image: { src: "/images/case-3.webp", alt: "Young man drinking a glass of water in a kitchen", position: "50% 40%" },
  },
  {
    id: "institutions",
    label: "Institutions",
    title: "Scaled for schools, colleges & campuses.",
    body: "Commercial-tier systems built for continuous, high-volume use across large properties.",
    systems: ["Commercial", "Bayaweaver"],
    cta: { label: "Talk to an expert", href: "/contact" },
    image: { src: "/images/industry-schools.webp", alt: "Students walking past a drinking water fountain", position: "50% 50%" },
  },
];

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        image={{ src: "/images/industry-malls.webp", alt: "", position: "80% 50%" }}
        crumbs={[{ label: "Home", href: "/" }, { label: "Applications" }]}
        title="Built around the problem you're solving."
        description="Hospitals, hotels, businesses and campuses each ask something different of their water. Here's how we answer each one."
      />

      <section aria-labelledby="applications-title" className="bg-white">
        <Reveal className="container-x flex flex-col gap-8 pt-16 md:pt-24 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-[760px] flex-col gap-2">
            <Eyebrow data-reveal>Applications</Eyebrow>
            <h2 id="applications-title" data-reveal className="font-display text-[clamp(1.875rem,1.2rem+2vw,2.5rem)] leading-[1.3]">
              Four kinds of site, <span className="text-brand">four kinds of answer.</span>
            </h2>
          </div>
          <nav data-reveal aria-label="Jump to an application" className="flex flex-wrap gap-2">
            {applications.map((a) => (
              <Chip key={a.id} href={`#${a.id}`}>
                {a.label}
              </Chip>
            ))}
          </nav>
        </Reveal>
      </section>

      {applications.map((a, i) => (
        <Split
          key={a.id}
          id={a.id}
          label={a.label}
          textFirst={i % 2 === 1}
          padding={i === 0 ? "pt-12 pb-10 md:pt-24 md:pb-[60px]" : i === applications.length - 1 ? "pt-10 pb-16 md:pt-[60px] md:pb-24 lg:pb-[120px]" : "py-10 md:py-[60px]"}
          media={<Photo src={a.image.src} alt={a.image.alt} ratio="680/520" position={a.image.position} />}
        >
          <Eyebrow data-reveal>
            {String(i + 1).padStart(2, "0")} · {a.label}
          </Eyebrow>
          <h2 data-reveal className="font-display text-[clamp(2rem,1.4rem+1.6vw,2.75rem)] leading-[1.18] font-light tracking-[-0.5px]">
            {a.title}
          </h2>
          <p data-reveal className="font-sans text-base leading-6 font-light md:text-lg">
            {a.body}
          </p>
          <div data-reveal className="flex flex-col gap-3 pt-1">
            <p className="font-sans text-xs leading-4 font-semibold tracking-[1.5px] text-black/55 uppercase">Typical systems</p>
            <div className="flex flex-wrap gap-2">
              {a.systems.map((s) => (
                <Chip key={s} href={productHref(s)}>
                  {s}
                </Chip>
              ))}
            </div>
          </div>
          <div data-reveal className="pt-1">
            <Button variant="outline" href={a.cta.href}>
              {a.cta.label}
            </Button>
          </div>
        </Split>
      ))}

      <Industries title={["Every sector", "we serve."]} actionHref="/contact" className="bg-mist" />

      <CtaBanner />
    </>
  );
}

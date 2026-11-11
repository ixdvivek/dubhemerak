import type { Metadata } from "next";
import { productHref } from "@/lib/products";
import Image from "next/image";
import { Stats } from "@/components/sections/Stats";
import { PageHero } from "@/components/inner/PageHero";
import { CtaBanner } from "@/components/inner/CtaBanner";
import { Chip, Photo, Placeholder, Split, SplitText, sectionY } from "@/components/inner/blocks";
import { Button } from "@/components/ui/Button";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { MediaFrame } from "@/components/motion/MediaFrame";

export const metadata: Metadata = {
  title: "About",
  description:
    "Since 1993, Dubhe has built chemical-free drinking water systems and fully automatic wastewater plants — one company, two disciplines, one standard.",
};

const divisions = [
  {
    eyebrow: "Drinking water",
    name: "Dubhe Richus",
    body: "Gravity-powered, chemical-free filtration for homes, apartments, hotels and hospitals. No electricity, minimal maintenance, proven over 33 years.",
    products: ["Medium", "Standard", "Commercial"],
    cta: { label: "Explore drinking water", href: "/products#drinking-water" },
    image: { src: "/images/medium-2026.webp", alt: "Twin-cylinder Dubhe Richus Medium filter against a sunlit wall" },
  },
  {
    eyebrow: "Wastewater & effluent",
    name: "Dubhe Merak",
    body: "Fully automatic, AI-assisted treatment plants using MBR and aerobic bacterial technology — compact, quiet and built for commercial and institutional sites.",
    products: ["Bayaweaver", "Tusker Gold", "Narwhal Steller"],
    cta: { label: "Explore wastewater", href: "/products#wastewater" },
    image: { src: "/images/bayaweaver.webp", alt: "Bayaweaver treatment unit in a sunlit apartment interior" },
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={{ src: "/images/pages/about-hero.webp", alt: "" }}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        title="Three decades of making water simple."
        description="From a single drinking-water line in 1991 to a two-division water treatment company — built on technology that removes the problem, not just the symptom."
      />

      <Split
        textFirst
        label="Our story"
        media={<Photo src="/images/pages/about-story.webp" alt="Dubhe water treatment system installed on site" ratio="680/600" />}
      >
        <SplitText
          display
          eyebrow="Since 1993"
          title="Imagine a world where every household, business and community has access to pure, clean water."
          body={[
            "That's been our mission for over 30 years. We've been at the forefront of devising innovative solutions for safe water — constantly developing pioneering filtration technologies that become the trusted choice for millions.",
            "Dubhe Richus, our founding drinking-water line since 1991, has since grown into Dubhe Merak Pvt Ltd — a larger entity covering two disciplines: drinking water and wastewater treatment, each with its own dedicated division.",
          ]}
        />
      </Split>

      <Stats />

      <section aria-labelledby="divisions-title" className="bg-mist">
        <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
          <SectionHeading
            id="divisions-title"
            eyebrow="How we work"
            title={["Two divisions,", "one standard."]}
            description="Every system we build — whether it filters drinking water or treats effluent — is held to the same promise: simple to run, chemical-free and built to last."
            width={760}
          />
          <ul className="grid gap-8 md:grid-cols-2">
            {divisions.map((d) => (
              <li key={d.name} data-reveal className="group flex flex-col bg-white">
                <MediaFrame parallax={false} className="aspect-[664/380]">
                  <Image
                    src={d.image.src}
                    alt={d.image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
                  />
                </MediaFrame>
                <div className="flex flex-1 flex-col items-start gap-4 p-6 sm:p-10">
                  <Eyebrow>{d.eyebrow}</Eyebrow>
                  <h3 className="font-display text-[32px] leading-10 font-normal">{d.name}</h3>
                  <p className="font-sans text-base leading-6 font-light md:text-lg">{d.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {d.products.map((p) => (
                      <Chip key={p} href={productHref(p)}>
                        {p}
                      </Chip>
                    ))}
                  </div>
                  <Button variant="outline" href={d.cta.href} className="mt-auto translate-y-2">
                    {d.cta.label}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section aria-labelledby="leadership-title" className="bg-[#080e16] text-white">
        <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
          <SectionHeading
            id="leadership-title"
            eyebrow="Leadership"
            title={["Guided by people who've", "built this for decades."]}
            description="The team that grew Dubhe Richus into Dubhe Merak Pvt Ltd."
            tone="dark"
            width={960}
          />
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {[1, 2, 3].map((n) => (
              <li key={n} data-reveal className="flex flex-col gap-2">
                <Placeholder dark label="Portrait to come" ratio="432/460" className="mb-4" />
                <h3 className="font-display text-2xl leading-8 font-normal">Leadership name</h3>
                <p className="font-sans text-sm leading-5 tracking-[1px] text-brand">Title, Dubhe Merak Pvt Ltd</p>
                <p className="font-sans text-base leading-6 font-light text-white/70">
                  Background, tenure and role in growing Dubhe Richus into Dubhe Merak Pvt Ltd — two or three lines.
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}

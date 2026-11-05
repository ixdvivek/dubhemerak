import type { Metadata } from "next";
import Image from "next/image";
import clsx from "clsx";
import { PageHero } from "@/components/inner/PageHero";
import { CtaBanner } from "@/components/inner/CtaBanner";
import { sectionY } from "@/components/inner/blocks";
import { Button } from "@/components/ui/Button";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Dubhe Richus Medium, Standard and Commercial drinking water systems, and Bayaweaver, Tusker Gold and Narwhal Steller wastewater plants.",
};

type Card = {
  eyebrow: string;
  name: string;
  spec: string;
  href: string;
  image: { src: string; alt: string };
  meta?: { label: string; value: string };
};

const drinking: Card[] = [
  {
    eyebrow: "Drinking water",
    name: "Medium",
    spec: "1250 Ltr/day · up to 1500 sq.ft single storied house",
    href: "/contact",
    image: { src: "/images/medium.webp", alt: "Dubhe Richus Medium filter on a home's garden wall" },
  },
  {
    eyebrow: "Drinking water",
    name: "Standard",
    spec: "2500 Ltr/day · up to 3500 sq.ft double storied house",
    href: "/contact",
    image: { src: "/images/standard.webp", alt: "Dubhe Richus Standard filter against a sunlit wall" },
  },
  {
    eyebrow: "Drinking water",
    name: "Commercial",
    spec: "Customized design · apartments, hotels, hospitals",
    href: "/contact",
    image: { src: "/images/commercial.webp", alt: "Four-cylinder Dubhe Richus Commercial system on a utility wall" },
  },
];

const wastewater: Card[] = [
  {
    eyebrow: "Wastewater",
    name: "Bayaweaver",
    spec: "Chemical free · maintenance free · zero liquid discharge",
    href: "/products/bayaweaver",
    image: { src: "/images/bayaweaver.webp", alt: "Bayaweaver treatment unit in a sunlit apartment interior" },
    meta: { label: "Models", value: "0724 – 5024" },
  },
  {
    eyebrow: "Wastewater",
    name: "Tusker Gold",
    spec: "Heavy-duty sewage treatment · fully automatic AI system",
    href: "/contact",
    image: { src: "/images/tusker-gold.webp", alt: "Tusker Gold sewage treatment plant at a misty lakeside" },
    meta: { label: "Models", value: "0724 – 5024" },
  },
  {
    eyebrow: "Effluent",
    name: "Narwhal Steller",
    spec: "Effluent treatment plant · MBR technology",
    href: "/contact",
    image: { src: "/images/narwhal-steller-bg.webp", alt: "Narwhal swimming through deep blue water" },
    meta: { label: "Capacity", value: "Custom" },
  },
];

function ProductCard({ card, dark }: { card: Card; dark?: boolean }) {
  return (
    <li
      data-reveal
      className={clsx("group flex flex-col", dark ? "border border-white/10 bg-white/4" : "bg-[#f4f5f7]")}
    >
      <div className="relative aspect-[432/380] overflow-hidden">
        <Image
          src={card.image.src}
          alt={card.image.alt}
          fill
          sizes="(min-width: 1024px) 432px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-8">
        <Eyebrow>{card.eyebrow}</Eyebrow>
        <h3 className={clsx("font-display text-[32px] leading-10 font-normal", dark && "text-white")}>{card.name}</h3>
        <p className={clsx("font-sans text-base leading-6 font-light", dark ? "text-white/75" : "text-black/75")}>{card.spec}</p>
        {card.meta ? (
          <div className={clsx("mt-auto flex items-center justify-between gap-4 border-t pt-4", dark ? "border-white/12" : "border-black/10")}>
            <div>
              <p className="font-sans text-xs leading-4 tracking-[1px] text-white/60 uppercase">{card.meta.label}</p>
              <p className="font-display text-[22px] leading-7 text-white">{card.meta.value}</p>
            </div>
            <Button variant="outline-light" href={card.href}>
              Explore
            </Button>
          </div>
        ) : (
          <div className="mt-auto pt-1">
            <Button variant="outline" href={card.href}>
              Explore
            </Button>
          </div>
        )}
      </div>
    </li>
  );
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        image={{ src: "/images/standard.webp", alt: "", position: "30% 50%" }}
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        title="The full lineup."
        description="Gravity-powered drinking water systems and fully automatic wastewater plants — each sized to the site it serves."
      />

      <section id="drinking-water" aria-labelledby="drinking-title" className="scroll-mt-24 bg-white">
        <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
          <SectionHeading
            id="drinking-title"
            eyebrow="Drinking water · Dubhe Richus"
            title={["Medium, Standard", "& Commercial."]}
            description="Gravity-powered, chemical-free filtration systems sized to the property — no electricity, minimal maintenance."
            width={760}
            action={
              <Button variant="outline" href="/contact">
                Compare models
              </Button>
            }
          />
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {drinking.map((c) => (
              <ProductCard key={c.name} card={c} />
            ))}
          </ul>
        </Reveal>
      </section>

      <section id="wastewater" aria-labelledby="wastewater-title" className="scroll-mt-24 bg-[#080e16] text-white">
        <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
          <SectionHeading
            id="wastewater-title"
            eyebrow="Wastewater & effluent · Dubhe Merak"
            title={["Bayaweaver, Tusker Gold", "& Narwhal Steller."]}
            description="Fully automatic, AI-assisted treatment plants — each with its own identity and model line-up."
            tone="dark"
            width={960}
            action={
              <Button variant="outline-light" href="/contact">
                Talk to an expert
              </Button>
            }
          />
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {wastewater.map((c) => (
              <ProductCard key={c.name} card={c} dark />
            ))}
          </ul>
        </Reveal>
      </section>

      <CtaBanner
        eyebrow="Need help choosing?"
        title="Not sure which system fits your site?"
        description="Tell us the property type, daily usage and water source — we'll size the right system and share a quote within one business day."
        primary={{ label: "Get a recommendation", href: "/contact" }}
      />
    </>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/inner/PageHero";
import { CtaBanner } from "@/components/inner/CtaBanner";
import { CheckList, Split, SplitText, VideoPlaceholder, sectionY } from "@/components/inner/blocks";
import { Button } from "@/components/ui/Button";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Gravity-powered, chemical-free drinking water filtration and fully automatic MBR/MBBR wastewater treatment — how Dubhe systems work.",
};

const cycle = [
  { step: "01 · Working", value: "0w", title: "Powered by gravity", body: "No electricity needed" },
  { step: "02 · Duty", value: "5–7", title: "Manual backwash", body: "Every 5–7 days" },
  { step: "03 · Treatment", value: "0%", title: "No chemicals needed", body: "99% effective, based on groundwater conditions" },
  { step: "04 · Life", value: "33 yrs", title: "Proven in the field", body: "Without filter media replacement" },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        image={{ src: "/images/pages/technology-hero.webp", alt: "", position: "50% 50%" }}
        crumbs={[{ label: "Home", href: "/" }, { label: "Technology" }]}
        title="Engineering that removes the problem, not just the symptom."
        description="Two technologies, one idea: treat water the way nature does — with gravity, stone and bacteria — and let automation do the rest."
      />

      <Split
        id="drinking-water"
        label="Drinking water technology"
        media={<VideoPlaceholder src="/images/commercial.webp" label="Gravity filtration explainer" />}
      >
        <SplitText
          eyebrow="Drinking water · Dubhe Richus"
          title="Powered by gravity."
          accent="No electricity needed."
          body="Our vertical machines use a patent-protected, non-chemical spiral spray design to boost pressure, quality and quantity — removing iron, colour, smell, turbidity and taste using natural stones and a high-speed backwash system."
        >
          <CheckList
            items={[
              "Electricity free — powered entirely by gravity",
              "Chemical free — 99% effective based on groundwater conditions",
              "Proven to last over 33 years without filter media replacement",
              "Manual backwash every 5–7 days",
            ]}
          />
        </SplitText>
      </Split>

      <Split
        id="wastewater"
        textFirst
        label="Wastewater technology"
        className="bg-mist"
        media={<VideoPlaceholder src="/images/pages/technology-wastewater.webp" label="MBR treatment explainer" />}
      >
        <SplitText
          eyebrow="Wastewater & effluent · Dubhe Merak"
          title="Aerobic, anaerobic and physical treatment —"
          accent="automated."
          body="Bayaweaver, Tusker Gold and Narwhal Steller use MBBR, MBR, FBBR and CPR technologies with a fully automatic AI system, delivering quick, reliable results through efficient aerobic bacterial treatment."
        >
          <CheckList
            items={[
              "Zero liquid discharge (ZLD) on select models",
              "Easily movable systems that occupy minimal space",
              "Quiet, odour-free operation",
              "Fully automatic or semi-automatic options",
            ]}
          />
        </SplitText>
      </Split>

      <section aria-labelledby="cycle-title" className="bg-[#080e16] text-white">
        <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
          <SectionHeading
            id="cycle-title"
            eyebrow="How it works"
            title={["The working", "cycle."]}
            description="Four numbers that define how a Dubhe Richus system runs — day to day, and decade to decade."
            tone="dark"
            width={760}
          />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {cycle.map((c) => (
              <li key={c.step} data-reveal className="flex flex-col gap-3 border border-white/12 bg-white/4 p-8 transition-colors duration-500 hover:border-brand/60 hover:bg-white/6">
                <Eyebrow>{c.step}</Eyebrow>
                <CountUp value={c.value} className="font-display text-[64px] leading-[72px] font-thin" />
                <span aria-hidden data-line className="h-px w-full bg-white/15" />
                <h3 className="font-display text-xl leading-7 font-normal">{c.title}</h3>
                <p className="font-sans text-base leading-6 font-light text-white/70">{c.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section aria-label="See it in practice" className="bg-white">
        <Reveal className="container-x flex flex-col gap-8 pt-16 md:pt-24 lg:flex-row lg:items-center lg:justify-between lg:pt-24">
          <div className="flex max-w-[760px] flex-col gap-2">
            <h2 data-reveal className="font-display text-[clamp(1.875rem,1.2rem+2vw,2.5rem)] leading-[1.3] font-normal">
              See the technology <span className="text-brand">at work in real installs.</span>
            </h2>
            <p data-reveal className="font-sans text-base leading-6 font-light md:text-lg">
              Every case study shows the problem, the system we proposed, the install and the measured outcome.
            </p>
          </div>
          <div data-reveal className="flex flex-wrap gap-3">
            <Button variant="outline" href="/products">
              View products
            </Button>
            <Button variant="dark" href="/case-studies">
              View case studies
            </Button>
          </div>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { contact } from "@/lib/content";
import { PageHero } from "@/components/inner/PageHero";
import { CtaBanner } from "@/components/inner/CtaBanner";
import { CheckList, Gallery, Photo, Placeholder, Split, SplitText, VideoCards, VideoPlaceholder, sectionY } from "@/components/inner/blocks";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Bayaweaver",
  description:
    "Bayaweaver — a heavy-duty, fully automatic AI water treatment machine. Chemical-free, maintenance-free and designed for zero liquid discharge. Models 0724 to 5024.",
};

const features = [
  ["Chemical free", "No added chemicals"],
  ["Maintenance free", "Minimal upkeep required"],
  ["Zero liquid discharge", "ZLD design"],
  ["Movable system", "Occupies less space"],
] as const;

const merits = [
  "Anaerobic, aerobic and physical treatments",
  "MBBR, MBR, FBBR and CPR technologies",
  "Cost-effective and efficient technology",
  "Easily movable, utilizing less space",
  "Simple to operate and maintain, with long life",
  "Optimized power consumption",
  "Fully automatic and semi-automatic models",
  "Attractive size enhances location aesthetics",
];

const models = [
  ["0724", "07k"],
  ["1524", "15k"],
  ["2524", "25k"],
  ["3524", "35k"],
  ["5024", "50k"],
] as const;

export default function BayaweaverPage() {
  return (
    <>
      <PageHero
        image={{ src: "/images/bayaweaver.webp", alt: "", position: "70% 50%" }}
        crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Bayaweaver" }]}
        title="Bayaweaver"
        description="A heavy-duty, fully automatic AI water treatment machine. Chemical-free, maintenance-free and designed for zero liquid discharge."
      />

      <section aria-label="Key features" className="bg-[#080e16] text-white">
        <ul className="container-x grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
          {features.map(([title, body]) => (
            <li key={title} className="flex items-start gap-4">
              <Image src="/images/icons/icon-check.svg" alt="" width={24} height={24} className="mt-0.5" />
              <div>
                <p className="font-display text-xl leading-7">{title}</p>
                <p className="font-sans text-base leading-6 font-light text-white/70">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Split
        textFirst
        label="Overview"
        media={<Photo src="/images/bayaweaver.webp" alt="Bayaweaver unit installed indoors" ratio="680/600" position="75% 50%" />}
      >
        <SplitText
          display
          eyebrow="Overview"
          title="Heavy-duty performance, without a heavy footprint."
          body={[
            "Bayaweaver is Dubhe Merak's fully automatic, AI-assisted water treatment system — built for sites that need heavy-duty performance without a heavy operational footprint. It's chemical-free, largely maintenance-free, and designed around zero liquid discharge.",
            "Available across five model sizes (0724 through 5024), Bayaweaver is customized to the effluent quality and quantity of each site, and its plug-and-play electrical and pipe connectors keep installation fast even in space-constrained locations.",
          ]}
        >
          <div data-reveal className="flex flex-wrap gap-3 pt-2">
            <Button variant="dark" href="/contact">
              Request a quote
            </Button>
            <Button variant="outline" href={`mailto:${contact.email}?subject=Bayaweaver%20brochure`}>
              Download brochure
            </Button>
          </div>
        </SplitText>
      </Split>

      <Split
        label="Plug and play"
        className="bg-mist"
        media={<VideoPlaceholder src="/images/bayaweaver.webp" label="Bayaweaver in operation" ratio="680/520" />}
      >
        <SplitText
          eyebrow="Plug & play"
          title="Built for fast,"
          accent="easy install."
          body="Schneider electric connectors and easy pipe connectors mean less on-site work, less downtime, and a customized design that adapts to the site's effluent quality and quantity."
        >
          <CheckList items={["Schneider electric connector", "Easy pipe connectors", "Customized to effluent quality and quantity"]} />
        </SplitText>
      </Split>

      <section aria-labelledby="diagram-title" className="bg-white">
        <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
          <SectionHeading
            id="diagram-title"
            eyebrow="Technical diagram"
            title={["Plug & play", "model."]}
            description="How the unit connects on site — power in, effluent in, treated water out."
            width={760}
          />
          <div data-reveal>
            <Placeholder
              label="Line-art diagram — Schneider electric connector, easy pipe connectors (from brochure)"
              className="aspect-[4/3] md:aspect-[1360/520]"
            />
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="merits-title" className="bg-mist">
        <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
          <SectionHeading id="merits-title" eyebrow="Key merits" title={["Why teams choose", "Bayaweaver."]} width={760} />
          <ol className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {merits.map((m, i) => (
              <li key={m} data-reveal className="flex flex-col gap-4 bg-white p-5 sm:gap-6 sm:p-8">
                <span className="font-display text-[32px] leading-10 font-thin text-brand sm:text-[40px] sm:leading-11">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-display text-base leading-6 sm:text-xl sm:leading-7">{m}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section aria-labelledby="lineup-title" className="bg-white">
        <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
          <SectionHeading
            id="lineup-title"
            eyebrow="Line-up"
            title={["Five models,", "one design."]}
            description="Every model runs round the clock — 24 hours a day, 365 days a year. Pick by daily treatment volume."
            width={760}
            action={
              <Button variant="outline" href="/contact">
                Help me choose
              </Button>
            }
          />
          <div data-reveal>
            <div
              aria-hidden
              className="hidden grid-cols-[31%_22%_1fr_auto] border-b border-black/10 py-3 font-sans text-sm leading-5 font-semibold tracking-[1.5px] text-black/55 uppercase md:grid"
            >
              <span>Model</span>
              <span>Line</span>
              <span>Treatment capacity</span>
            </div>
            <ul>
              {models.map(([model, cap]) => (
                <li
                  key={model}
                  className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 border-b border-black/10 py-5 md:grid-cols-[31%_22%_1fr_auto] md:py-6"
                >
                  <h3 className="font-display text-2xl leading-8 font-normal">Model {model}</h3>
                  <p className="col-start-1 font-sans text-base leading-6 font-light md:col-start-auto md:text-lg">N Line</p>
                  <p className="col-start-1 font-sans text-base leading-6 font-light md:col-start-auto md:text-lg">
                    {cap} × 24h × 365
                  </p>
                  <div className="col-start-2 row-span-3 row-start-1 md:col-start-auto md:row-span-1 md:row-start-auto">
                    <Button variant="outline" href="/contact" aria-label={`Enquire about model ${model}`}>
                      Enquire
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="gallery-title" className="bg-white">
        <Reveal className={`container-x flex flex-col gap-10 ${sectionY}`}>
          <SectionHeading id="gallery-title" eyebrow="Gallery" title={["See it", "up close."]} width={760} />
          <Gallery
            items={[
              { caption: "Front view", src: "/images/bayaweaver.webp" },
              { caption: "Schneider connector detail" },
              { caption: "Installed at an industrial site" },
              { caption: "Control panel close-up" },
              { caption: "Side profile with pipe connectors" },
              { caption: "Unit footprint in a utility yard" },
            ]}
          />
        </Reveal>
      </section>

      <section aria-labelledby="action-title" className="bg-[#080e16] text-white">
        <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
          <SectionHeading id="action-title" eyebrow="In action" title={["Watch it", "work."]} tone="dark" width={760} />
          <VideoCards
            items={[
              { title: "Product overview", body: "How Bayaweaver's AI system manages treatment automatically.", src: "/images/bayaweaver.webp" },
              { title: "Installation walkthrough", body: "Plug-and-play install, from connection to first cycle.", src: "/images/tusker-gold.webp" },
            ]}
          />
        </Reveal>
      </section>

      <section aria-labelledby="support-title" className="bg-white">
        <Reveal className={`container-x grid items-center gap-10 lg:grid-cols-[584fr_680fr] lg:gap-24 ${sectionY}`}>
          <div className="flex flex-col gap-5">
            <SectionHeading
              id="support-title"
              eyebrow="Maintenance & support"
              title={["Keeping it", "running."]}
              description="Bayaweaver is built to run with limited operator involvement. The compact, movable design keeps servicing straightforward when it's needed."
              width={584}
            />
          </div>
          <ul className="grid gap-6 sm:grid-cols-2">
            {[
              ["Semi-automatic", "Needs occasional supervision — suited to sites with on-hand facilities staff."],
              ["Fully automatic", "Designed to largely run itself, with the AI system managing each treatment cycle."],
            ].map(([t, b]) => (
              <li key={t} data-reveal className="flex flex-col gap-3 bg-[#f4f5f7] p-8">
                <h3 className="font-display text-2xl leading-8">{t}</h3>
                <p className="font-sans text-base leading-6 font-light text-black/75">{b}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section aria-labelledby="related-title" className="bg-mist">
        <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
          <SectionHeading
            id="related-title"
            eyebrow="Related case studies"
            title={["Where Bayaweaver", "has been installed."]}
            width={760}
            action={
              <Button variant="outline" href="/case-studies">
                All case studies
              </Button>
            }
          />
          <div className="grid gap-8 lg:grid-cols-[432fr_880fr] lg:gap-12">
            <div data-reveal>
              <CaseStudyCard
                cs={{
                  kicker: "Industrial · Kerala",
                  title: "Case study title to come",
                  href: "/case-studies",
                  image: { src: "/images/case-1.webp", alt: "Technician sampling treated water from a stainless steel tap" },
                }}
              />
            </div>
            <div data-reveal className="flex flex-col justify-center gap-3 bg-white p-8 sm:p-10">
              <p className="max-w-[600px] font-display text-[28px] leading-9 font-light">More Bayaweaver installs are being documented.</p>
              <p className="max-w-[600px] font-sans text-base leading-6 font-light md:text-lg">
                Each case study follows the same structure — problem, proposed solution, installation and measured outcome.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}

import type { Metadata } from "next";
import { caseStudies } from "@/lib/content";
import { PageHero } from "@/components/inner/PageHero";
import { CtaBanner } from "@/components/inner/CtaBanner";
import { CaseStudyGrid } from "@/components/inner/CaseStudyGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { Button } from "@/components/ui/Button";
import { toCard } from "@/components/ui/CaseStudyCard";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Real Dubhe installs at hospitals, hotels and small businesses — each structured as problem, proposed solution, installation and measured outcome.",
};

const items = caseStudies.map((cs) => ({ ...toCard(cs), category: cs.category, products: cs.products }));

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        image={{ src: "/images/case-2.webp", alt: "", position: "50% 40%" }}
        crumbs={[{ label: "Home", href: "/" }, { label: "Case studies" }]}
        title="Real installs, structured the same way every time."
        description="Every case study follows the same four steps — the problem, the solution we proposed, how it was installed, and what changed."
      />

      <section aria-label="All case studies" className="bg-white">
        <Reveal className="container-x flex flex-col gap-8 pt-16 pb-16 md:pt-20 md:pb-24 lg:pb-[120px]">
          <div data-reveal>
            <CaseStudyGrid items={items} filters={["Hospitals", "Hotels", "Small business", "Institutions"]} />
          </div>
          <div
            data-reveal
            className="flex flex-col items-start gap-6 bg-[#f4f5f7] px-6 py-8 sm:px-10 md:flex-row md:items-center md:justify-between"
          >
            <p className="font-display text-2xl leading-8 font-light">
              More installs are being documented — institutions and industrial sites next.
            </p>
            <Button variant="outline" href="/contact" className="shrink-0">
              Share your project
            </Button>
          </div>
        </Reveal>
      </section>

      <Testimonials />

      <CtaBanner />
    </>
  );
}

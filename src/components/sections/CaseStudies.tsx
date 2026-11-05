import { caseStudies } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard, toCard } from "@/components/ui/CaseStudyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function CaseStudies() {
  return (
    <section aria-label="Case studies" className="bg-white">
      <Reveal className="container-x flex flex-col gap-12 py-16 md:py-20">
        <SectionHeading
          title={["Real installs,", "Real outcomes."]}
          description="Every case study is structured the same way — the problem, the solution we proposed, how it was installed, and what changed."
          action={
            <Button variant="outline" href="/case-studies">
              View Case Studies
            </Button>
          }
        />

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {caseStudies.map((cs) => (
            <li key={cs.title} data-reveal>
              <CaseStudyCard cs={toCard(cs)} />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

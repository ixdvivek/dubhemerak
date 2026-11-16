import type { Metadata } from "next";
import { testimonials } from "@/lib/content";
import { CtaBanner } from "@/components/inner/CtaBanner";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Facility heads, hoteliers and business owners on what changed after switching to Dubhe water treatment — in their own words.",
};

/** No banner: a title block on brand blue, then every testimonial card in a grid that runs down the page. */
export default function TestimonialsPage() {
  return (
    <>
      <section aria-labelledby="testimonials-title" className="bg-brand text-white">
        <Reveal className="container-x flex flex-col gap-12 pt-36 pb-16 md:gap-16 md:pt-44 md:pb-24">
          <div className="flex max-w-[664px] flex-col gap-4">
            <h1
              id="testimonials-title"
              data-reveal
              className="font-display text-[clamp(2.5rem,1.4rem+3vw,4rem)] leading-none font-extralight"
            >
              Genuine stories.
              <br />
              Happy customers.
            </h1>
            <p data-reveal className="font-sans text-base leading-6 font-light md:text-lg">
              Facility heads, hoteliers and business owners on what changed after switching to Dubhe — in their own
              words.
            </p>
          </div>

          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((t) => (
              <li key={t.name} data-reveal>
                <TestimonialCard t={t} />
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}

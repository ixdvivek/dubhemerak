import { testimonials } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="bg-brand text-white">
      <Reveal className="container-x flex flex-col gap-12 py-16 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-[664px] flex-col gap-2">
            <h2
              id="testimonials-title"
              data-reveal
              className="font-display text-[clamp(2.5rem,1.4rem+3vw,4rem)] leading-none font-extralight"
            >
              Genuine stories.
              <br />
              Happy customers.
            </h2>
            <p data-reveal className="font-sans text-base leading-6 font-light md:text-lg">
              Facility heads, hoteliers and business owners on what changed after switching to Dubhe — in their own
              words.
            </p>
          </div>
          <div data-reveal>
            <Button href="/testimonials">View Testimonials</Button>
          </div>
        </div>

        <ul className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((t) => (
            <li key={t.name} data-reveal>
              <TestimonialCard t={t} />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

import { productLines } from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ProductLine } from "@/components/sections/ProductLine";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { AboutLead } from "@/components/sections/AboutLead";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Industries } from "@/components/sections/Industries";
import { ContactCta } from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <div id="products">
        {productLines.map((line) => (
          <ProductLine key={line.id} line={line} />
        ))}
      </div>
      <BrandMarquee />
      <AboutLead />
      <CaseStudies />
      <Testimonials />
      <Industries />
      <ContactCta />
    </>
  );
}

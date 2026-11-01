import { productLines } from "@/lib/content";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-white px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
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
      </main>
      <Footer />
    </>
  );
}

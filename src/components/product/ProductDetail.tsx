import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { caseStudies, contact } from "@/lib/content";
import { products, type ProductDetail as Product } from "@/lib/products";
import { PageHero } from "@/components/inner/PageHero";
import { CtaBanner } from "@/components/inner/CtaBanner";
import {
  CheckList,
  Chip,
  Gallery,
  Photo,
  Placeholder,
  Split,
  SplitText,
  VideoCards,
  VideoPlaceholder,
  sectionY,
} from "@/components/inner/blocks";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard, toCard } from "@/components/ui/CaseStudyCard";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { MediaFrame } from "@/components/motion/MediaFrame";
import { CountUp } from "@/components/motion/CountUp";

const cycle = [
  { step: "01 · Working", value: "0w", title: "Powered by gravity", body: "No electricity needed" },
  { step: "02 · Duty", value: "5–7", title: "Manual backwash", body: "Every 5–7 days" },
  { step: "03 · Treatment", value: "0%", title: "No chemicals needed", body: "99% effective, based on groundwater conditions" },
  { step: "04 · Life", value: "33 yrs", title: "Proven in the field", body: "Without filter media replacement" },
];

/** Shared template for every product page — wastewater plants and drinking water systems. */
export function ProductDetail({ p }: { p: Product }) {
  const related = caseStudies.filter((cs) => (cs.products as readonly string[]).includes(p.name)).map(toCard);
  const siblings = products.filter((s) => s.family === p.family);
  const brochureHref = `mailto:${contact.email}?subject=${encodeURIComponent(`${p.name} brochure request`)}`;

  return (
    <>
      <PageHero
        image={p.hero.image}
        crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: p.name }]}
        title={p.name}
        description={p.hero.description}
      />

      {/* Benefit strip */}
      <section aria-label="Key features" className="bg-[#080e16] text-white">
        <Reveal as="ul" start="top 92%" className="container-x grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-14">
          {p.features.map(([title, body]) => (
            <li key={title} data-reveal className="flex items-start gap-4">
              <Image data-pop src="/images/icons/icon-check.svg" alt="" width={24} height={24} className="mt-0.5" />
              <div>
                <p className="font-display text-xl leading-7">{title}</p>
                <p className="font-sans text-base leading-6 font-light text-white/70">{body}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </section>

      {/* Overview */}
      <Split
        textFirst
        label="Overview"
        media={
          <Photo
            src={p.overview.image.src}
            alt={p.overview.image.alt}
            ratio={p.overview.image.ratio}
            position={p.overview.image.position}
            contain={p.overview.image.contain}
          />
        }
      >
        <SplitText display eyebrow={p.overview.eyebrow} title={p.overview.title} body={p.overview.body}>
          {p.overview.facts && (
            <dl data-reveal className="grid w-full grid-cols-3 gap-4 border-y border-black/10 py-5">
              {p.overview.facts.map(([value, label]) => (
                <div key={label}>
                  <dd className="font-display text-[clamp(1.75rem,1.3rem+1vw,2.25rem)] leading-10 font-light">
                    <CountUp value={value} />
                  </dd>
                  <dt className="font-sans text-sm leading-5 text-black/60">{label}</dt>
                </div>
              ))}
            </dl>
          )}
          <div data-reveal className="flex flex-wrap gap-3 pt-2">
            <Button variant="dark" href="/contact">
              {p.family === "drinking" ? "Enquire now" : "Request a quote"}
            </Button>
            <Button variant="outline" href={brochureHref}>
              {p.family === "drinking" ? "Get the spec sheet" : "Download brochure"}
            </Button>
          </div>
        </SplitText>
      </Split>

      {/* Highlight */}
      <Split
        label={p.highlight.eyebrow}
        className="bg-mist"
        media={<VideoPlaceholder src={p.highlight.video.src} label={p.highlight.video.label} ratio="680/520" />}
      >
        <SplitText eyebrow={p.highlight.eyebrow} title={p.highlight.title} accent={p.highlight.accent} body={p.highlight.body}>
          {p.highlight.chips && (
            <div data-reveal className="flex flex-col gap-3 pt-1">
              <p className="font-sans text-xs leading-4 font-semibold tracking-[1.5px] text-black/55 uppercase">{p.highlight.chips.label}</p>
              <div className="flex flex-wrap gap-2">
                {p.highlight.chips.items.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </div>
            </div>
          )}
          <CheckList items={p.highlight.checks} />
        </SplitText>
      </Split>

      {/* Features to know more — annotated brochure diagram + specs */}
      <section aria-labelledby="features-title" className="bg-white">
        <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
          <SectionHeading
            id="features-title"
            eyebrow={p.diagram ? "Technical diagram" : "Specifications"}
            title={p.diagram ? p.diagram.title : ["Specifications", "at a glance."]}
            description={p.diagram?.description ?? "Figures from the Dubhe Richus product brochure."}
            width={760}
            action={
              <Button variant="outline" href={brochureHref}>
                {p.family === "drinking" ? "Request spec sheet" : "Request brochure"}
              </Button>
            }
          />

          {p.diagram && (
            <div data-reveal>
              {p.diagram.image ? (
                <a
                  href={p.diagram.image.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-black/10 bg-white p-4 transition-colors hover:border-black/25 sm:p-8"
                >
                  <Image
                    src={p.diagram.image.src}
                    alt={p.diagram.image.alt}
                    width={p.diagram.image.width}
                    height={p.diagram.image.height}
                    sizes="(min-width: 1600px) 1300px, 100vw"
                    quality={85}
                    className="h-auto w-full"
                  />
                  <span className="mt-4 inline-flex font-sans text-sm leading-5 text-black/55 group-hover:text-black">
                    Open full-size diagram ↗
                  </span>
                </a>
              ) : (
                <Placeholder label={p.diagram.placeholder ?? "Diagram to come"} className="aspect-[4/3] md:aspect-[1360/520]" />
              )}
            </div>
          )}

          <div className={clsx("grid gap-12", p.diagram && "lg:grid-cols-[1fr_1fr] lg:gap-24")}>
            {p.diagram && (
              <div className="flex flex-col gap-5">
                <h3 data-reveal className="font-display text-2xl leading-8">
                  {!p.diagram.image ? "What the diagram will show" : p.diagram.numbered ? "What the numbers point to" : "Labelled on the diagram"}
                </h3>
                <ol data-reveal className={clsx("grid gap-x-8 gap-y-4 sm:grid-cols-2", !p.diagram.numbered && "list-none")}>
                  {p.diagram.legend.map((item, i) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-base leading-6 font-light">
                      {p.diagram?.numbered ? (
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-black/80 font-sans text-sm leading-none font-normal">
                          {i + 1}
                        </span>
                      ) : (
                        <span aria-hidden className="mt-2.5 size-2 shrink-0 rounded-full bg-brand" />
                      )}
                      <span className="pt-0.5">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            <div className="flex flex-col gap-5">
              {p.diagram && (
                <h3 data-reveal className="font-display text-2xl leading-8">
                  Specifications
                </h3>
              )}
              <dl data-reveal className={clsx("grid", !p.diagram && "md:grid-cols-2 md:gap-x-16")}>
                {p.specs.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[minmax(0,42%)_1fr] gap-4 border-b border-black/10 py-4">
                    <dt className="font-sans text-sm leading-6 text-black/55">{label}</dt>
                    <dd className="font-sans text-base leading-6">{value}</dd>
                  </div>
                ))}
              </dl>
              <p data-reveal className="flex items-center gap-2 font-sans text-xs leading-4 tracking-[1px] text-black/45 uppercase">
                {p.family === "wastewater" ? "CE marked · Make in India · Patented technology" : "Patent-protected technology · Make in India"}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Working cycle (gravity systems) */}
      {p.cycle && (
        <section aria-labelledby="cycle-title" className="bg-[#080e16] text-white">
          <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
            <SectionHeading
              id="cycle-title"
              eyebrow="Working advantages"
              title={["Four numbers that", "define it."]}
              description="How a Dubhe Richus system runs — day to day, and decade to decade."
              tone="dark"
              width={760}
            />
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {cycle.map((c) => (
                <li
                  key={c.step}
                  data-reveal
                  className="flex flex-col gap-3 border border-white/12 bg-white/4 p-8 transition-colors duration-500 hover:border-brand/60 hover:bg-white/6"
                >
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
      )}

      {/* Key merits */}
      {p.merits && (
        <section aria-labelledby="merits-title" className="bg-mist">
          <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
            <SectionHeading id="merits-title" eyebrow="Key merits" title={p.merits.title} width={760} />
            <ol className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
              {p.merits.items.map((m, i) => (
                <li
                  key={m}
                  data-reveal
                  className="flex flex-col gap-4 bg-white p-5 transition-[translate,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(4,34,63,0.08)] sm:gap-6 sm:p-8"
                >
                  <span className="font-display text-[32px] leading-10 font-thin text-brand sm:text-[40px] sm:leading-11">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-base leading-6 sm:text-xl sm:leading-7">{m}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>
      )}

      {/* Line-up */}
      {p.lineup && (
        <section aria-labelledby="lineup-title" className="bg-white">
          <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
            <SectionHeading
              id="lineup-title"
              eyebrow="Line-up"
              title={p.lineup.title}
              description={p.lineup.description}
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
                {p.lineup.models.map(([model, line, cap]) => (
                  <li
                    key={model}
                    className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 border-b border-black/10 py-5 transition-colors duration-300 md:-mx-4 md:grid-cols-[31%_22%_1fr_auto] md:px-4 md:py-6 md:hover:bg-[#f4f5f7]"
                  >
                    <h3 className="font-display text-2xl leading-8 font-normal">Model {model}</h3>
                    <p className="col-start-1 font-sans text-base leading-6 font-light md:col-start-auto md:text-lg">{line}</p>
                    <p className="col-start-1 font-sans text-base leading-6 font-light md:col-start-auto md:text-lg">{cap}</p>
                    <div className="col-start-2 row-span-3 row-start-1 md:col-start-auto md:row-span-1 md:row-start-auto">
                      <Button variant="outline" href="/contact" aria-label={`Enquire about ${p.name} model ${model}`}>
                        Enquire
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>
      )}

      {/* Gallery */}
      <section aria-labelledby="gallery-title" className="bg-white">
        <Reveal className={`container-x flex flex-col gap-10 ${p.lineup ? "pb-16 md:pb-24 lg:pb-[120px]" : sectionY}`}>
          <SectionHeading id="gallery-title" eyebrow="Gallery" title={["See it", "up close."]} width={760} />
          <Gallery items={p.gallery} />
        </Reveal>
      </section>

      {/* Videos */}
      <section aria-labelledby="action-title" className="bg-[#080e16] text-white">
        <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
          <SectionHeading id="action-title" eyebrow="In action" title={["Watch it", "work."]} tone="dark" width={760} />
          <VideoCards items={p.videos} />
        </Reveal>
      </section>

      {/* Maintenance */}
      <section aria-labelledby="support-title" className="bg-white">
        <Reveal className={`container-x grid items-center gap-10 lg:grid-cols-[584fr_680fr] lg:gap-24 ${sectionY}`}>
          <SectionHeading
            id="support-title"
            eyebrow="Maintenance & support"
            title={["Keeping it", "running."]}
            description={p.maintenance.body}
            width={584}
          />
          <ul className="grid gap-6 sm:grid-cols-2">
            {p.maintenance.cards.map(([t, b]) => (
              <li key={t} data-reveal className="flex flex-col gap-3 bg-[#f4f5f7] p-8 transition-colors duration-500 hover:bg-mist">
                <h3 className="font-display text-2xl leading-8">{t}</h3>
                <p className="font-sans text-base leading-6 font-light text-black/75">{b}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Other models in the same family */}
      <section aria-labelledby="compare-title" className="bg-mist">
        <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
          <SectionHeading
            id="compare-title"
            eyebrow={p.family === "drinking" ? "The Dubhe Richus range" : "The Dubhe Merak range"}
            title={["Compare", p.family === "drinking" ? "drinking water systems." : "wastewater plants."]}
            width={760}
            action={
              <Button variant="outline" href="/products">
                All products
              </Button>
            }
          />
          <ul className="grid gap-6 md:grid-cols-3">
            {siblings.map((s) => {
              const current = s.slug === p.slug;
              return (
                <li key={s.slug} data-reveal>
                  <Link
                    href={`/products/${s.slug}`}
                    aria-current={current ? "page" : undefined}
                    className={clsx(
                      "group flex h-full flex-col bg-white transition-shadow duration-500 hover:shadow-[0_16px_32px_rgba(4,34,63,0.1)]",
                      current && "outline-2 outline-brand",
                    )}
                  >
                    <MediaFrame parallax={false} className="aspect-[432/380]">
                      <Image
                        src={`/images/products/thumb-${s.slug}.webp`}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 432px, 100vw"
                        className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
                      />
                    </MediaFrame>
                    <div className="flex flex-1 flex-col gap-2 p-6">
                      <p className="font-sans text-xs leading-4 font-semibold tracking-[1.5px] text-brand uppercase">
                        {current ? "You're viewing" : s.division.split("·")[1]?.trim()}
                      </p>
                      <h3 className="font-display text-2xl leading-8">{s.name}</h3>
                      <p className="font-sans text-sm leading-6 font-light text-black/70">
                        {s.specs.slice(0, 2).map(([, v]) => v).join(" · ")}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </section>

      {/* Related case studies */}
      <section aria-labelledby="related-title" className="bg-white">
        <Reveal className={`container-x flex flex-col gap-12 ${sectionY}`}>
          <SectionHeading
            id="related-title"
            eyebrow="Related case studies"
            title={[`Where ${p.name}`, "has been installed."]}
            width={760}
            action={
              <Button variant="outline" href="/case-studies">
                All case studies
              </Button>
            }
          />
          {related.length ? (
            <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((cs) => (
                <li key={cs.title} data-reveal>
                  <CaseStudyCard cs={cs} />
                </li>
              ))}
            </ul>
          ) : (
            <div data-reveal className="flex flex-col items-start gap-4 bg-[#f4f5f7] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="flex max-w-[640px] flex-col gap-2">
                <p className="font-display text-[28px] leading-9 font-light">{p.name} installs are being documented.</p>
                <p className="font-sans text-base leading-6 font-light">
                  Each case study follows the same structure — problem, proposed solution, installation and measured outcome.
                </p>
              </div>
              <Button variant="outline" href="/contact" className="shrink-0">
                Ask about a reference site
              </Button>
            </div>
          )}
        </Reveal>
      </section>

      <CtaBanner
        title={`Is ${p.name} right for your site?`}
        description={
          p.family === "drinking"
            ? "Tell us the property size, daily use and water source — we'll confirm the right model and share a quote within one business day."
            : "Share your effluent volume and site constraints — our engineers will size the plant and reply within one business day."
        }
        primary={{ label: "Get a quote", href: "/contact" }}
      />
    </>
  );
}

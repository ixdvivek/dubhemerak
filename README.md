# Dubhe Merak — website

Next.js build of the Figma designs: the locked homepage (**Home – v3, client comments 07 Oct**) and the eight inner pages (**About, Technology, Products, Product – Bayaweaver, Applications, Case studies, Case study – Hotel Kochi, Contact – v1**).

**Stack:** Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 · GSAP + ScrollTrigger (`@gsap/react`) · Lenis smooth scroll · `next/font/local` · `next/image`

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

Optional: set `NEXT_PUBLIC_SITE_URL` (e.g. `https://www.dubhemerak.com`) so Open Graph URLs resolve correctly on Vercel.

## Structure

```
src/
  app/
    layout.tsx        fonts, metadata (title template), Lenis
    globals.css       Tailwind v4 @theme tokens (colours, fonts, easing), Lenis CSS, container utility
    (site)/
      layout.tsx      skip link, Navbar, Footer — shared by every page
      page.tsx        homepage — composes the sections in order
      about/ technology/ products/ products/[slug]/ applications/
      case-studies/ case-studies/hotel-kochi/ contact/
                      inner pages — each page's copy sits at the top of its page.tsx
  lib/
    content.ts        ALL homepage copy, links, product data — edit text here, not in components
    fonts.ts          Kanit (display) + 42dot Sans (body), self-hosted from src/fonts
    gsap.ts           plugin registration + shared defaults + reduced-motion query
  components/
    layout/           Navbar, Footer
    sections/         Hero, Stats, ProductLine, BrandMarquee, AboutLead, CaseStudies,
                      Testimonials, Industries, ContactCta
    motion/           SmoothScroll (Lenis), Reveal (scroll-in stagger), Parallax
    inner/            PageHero, CtaBanner, Split/SplitText, Photo, VideoPlaceholder, CheckList, Placeholder,
                      Gallery, VideoCards, KeyPoint, CaseStudyGrid (filters), EnquiryForm
    ui/               Button (pill + icon chip; Link for internal paths), MaskIcon, SectionHeading/Eyebrow, CaseStudyCard
public/images/        assets exported from Figma (photos as WebP, logos/icons as SVG/PNG)
```

## Design tokens

Defined in `globals.css` and used as Tailwind classes:

| Token | Value | Class |
|---|---|---|
| Brand blue | `#0097DA` | `text-brand`, `bg-brand` |
| Ink | `#191818` | `text-ink`, `bg-ink` |
| Outline | `#2D2C2C` | `border-line` |
| Mist (About bg) | `#E8EDF1` | `bg-mist` |
| Muted (footer links) | `#9CA3AF` | `text-muted` |
| Display font | Kanit | `font-display` |
| Body font | 42dot Sans | `font-sans` |

Content width matches Figma: 1360px inside 120px gutters at the 1600px canvas (`container-x` utility), stepping down to 20/32/48px gutters on smaller screens.

## Motion

All animation is in client components via `useGSAP` and runs only under `prefers-reduced-motion: no-preference` — with reduced motion the page renders fully static, and everything is visible without JavaScript.

| Where | What |
|---|---|
| Hero | Image settles from 1.15× scale, headline lines mask-reveal, supporting copy fades up; parallax drift on scroll |
| Navbar | Staggers in on load; frosted once scrolled; hides on scroll down, returns on scroll up; full-screen menu below 1024px |
| Stats | Icons pop in; `33` counts up, `0%` and `0w` count down from 100 |
| Products | Each 100svh block pins (desktop) and the next slides over it while the previous dims; images ease from 1.12×; Narwhal Steller product rises over its background |
| Brand marquee | Seamless GSAP loop; eases to a stop on hover |
| Sections | `[data-reveal]` children stagger up when scrolled into view |
| About / Contact | Image parallax |
| Case studies / Industries | Image zoom on hover |
| Testimonials | Hover/focus swaps the card to the client's portrait with white text (Figma hover state) |

## Inner pages

| Route | Notes |
|---|---|
| `/about` | Story, stats, two divisions, leadership (portrait placeholders) |
| `/technology` | Drinking water + wastewater splits with video placeholders, working cycle |
| `/products` | Drinking water and wastewater cards, each linking to its product page |
| `/products/[slug]` | Six product pages from one template (`components/product/ProductDetail.tsx`) fed by `lib/products.ts`: bayaweaver, tusker-gold, narwhal-steller, medium, standard, commercial. Add a product by adding an entry. |
| `/applications` | Four application rows with jump links, then the industries grid |
| `/case-studies` | Filterable grid (client-side), testimonials |
| `/case-studies/hotel-kochi` | Case study template — problem, solution, installation, outcome, gallery, videos, products |
| `/contact` | Enquiry form, contact card, Google Maps embed |

Every inner page ends with the compact **CTA banner** (`components/inner/CtaBanner.tsx`); the homepage keeps its larger contact section. The navbar highlights the current section and the page scrolls to the top on client-side navigation.

## Content notes

- **Enquiry form:** there is no form backend yet — submitting validates the fields and opens the visitor's email app with the enquiry addressed to info@dubhemerak.com. Replace `onSubmit` in `EnquiryForm.tsx` with an API route (e.g. Resend) when ready.
- **Placeholders** (dashed boxes / play buttons): leadership portraits, the Bayaweaver technical diagram, gallery photos, all videos and the Bayaweaver case study. Swap in real assets as the client supplies them.
- "Downloads" and "Download brochure / spec sheet" open an email request for now — swap in PDF links when the client supplies them.
- **Product specs follow the client brochures** (STP brochure + Dubhe Richus brochure), which override the earlier wireframes where they disagree: Tusker Gold is model 1724 at 602 × 289.5 × 210.8 cm / 50,000 lbs (the wireframe had Bayaweaver's figures); the 14 "merits" sit under Tusker Gold; Bayaweaver shows its own "Features to know more" (80.5 × 70.5 × 158 cm, 447.5 lbs). Drinking-water specs come from the Richus brochure table. Prices are not shown (removed in Figma).
- **Product images** in `public/images/products/` are cropped from the brochure spreads and the two annotated diagram pages supplied by the client. Narwhal Steller's diagram is still a placeholder.
- `sitemap.xml` and `robots.txt` are generated from the routes (set `NEXT_PUBLIC_SITE_URL` on Vercel).
- Phone, WhatsApp (`wa.me/919847922777`) and email links are live.
- Copy written for this build (per review): testimonials subtitle, footer headline ("Engineered for tomorrow. Trusted since 1993.").
- Hero uses a still image; to switch to video later, swap the `<Image>` in `components/sections/Hero.tsx` for a muted, looping `<video>` with the image as `poster`.
- Product banner photos for Tusker Gold, Medium, Standard and Commercial were replaced with the client's new renders (1672×941). Standard now sits left-aligned like the others, since its photo places the unit on the right. The first case-study photo is still a low-res crop — worth requesting a higher-res original.

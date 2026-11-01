# Dubhe Merak — website

Homepage build of the locked Figma design (**Home – v3, client comments 07 Oct**), as a Next.js app.

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
    layout.tsx        fonts, metadata, Lenis
    page.tsx          homepage — composes the sections in order
    globals.css       Tailwind v4 @theme tokens (colours, fonts, easing), Lenis CSS, container utility
  lib/
    content.ts        ALL homepage copy, links, product data — edit text here, not in components
    fonts.ts          Kanit (display) + 42dot Sans (body), self-hosted from src/fonts
    gsap.ts           plugin registration + shared defaults + reduced-motion query
  components/
    layout/           Navbar, Footer
    sections/         Hero, Stats, ProductLine, BrandMarquee, AboutLead, CaseStudies,
                      Testimonials, Industries, ContactCta
    motion/           SmoothScroll (Lenis), Reveal (scroll-in stagger), Parallax
    ui/               Button (pill + icon chip), MaskIcon (recolourable Figma icons), SectionHeading
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

## Content notes

- Nav and "Explore / View …" links point to `#` until the inner pages exist.
- Phone, WhatsApp (`wa.me/919847922777`) and email links are live.
- Copy written for this build (per review): testimonials subtitle, footer headline ("Engineered for tomorrow. Trusted since 1993.").
- Hero uses a still image; to switch to video later, swap the `<Image>` in `components/sections/Hero.tsx` for a muted, looping `<video>` with the image as `poster`.
- The Medium and first case-study photos are pre-cropped to the Figma framing; Figma's source images for those are low resolution, so a higher-res original is worth requesting from the client.

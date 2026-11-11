/**
 * Homepage content. Kept in one place so copy edits and the eventual
 * move to a CMS don't touch layout code.
 */

export const contact = {
  email: "info@dubhemerak.com",
  phoneDisplay: "+91 9847 922 777",
  phoneHref: "tel:+919847922777",
  whatsappHref: "https://wa.me/919847922777",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  eyebrow: "Drinking Water & Wastewater Treatment",
  title: "Water treatment engineered for 2040, operating in 2026.",
  cta: { label: "View Our Products", href: "#products" },
  supporting:
    "Chemical-free, electricity-free drinking water systems and fully automatic effluent treatment plants - engineered for hospitals, hotels and businesses that expect more.",
} as const;

export const stats = [
  { icon: "/images/icons/icon-years.svg", value: 33, prefix: "", suffix: "", from: 0, label: "Years of experience" },
  { icon: "/images/icons/icon-patent.svg", text: "Patented", label: "Filtration technology" },
  { icon: "/images/icons/icon-no-chemicals.svg", value: 0, suffix: "%", from: 100, label: "Chemicals used" },
  { icon: "/images/icons/icon-no-electricity.svg", value: 0, suffix: "w", from: 100, label: "Electricity needed" },
] as const;

export type Product = {
  slug: string;
  name: string;
  logo: { src: string; width: number; height: number; chip?: boolean };
  showName?: boolean;
  description: string;
  tags: string[];
  /** `position` is the desktop focal point; `mobilePosition` keeps the product in frame on narrow screens. */
  image: { src: string; alt: string; position?: string; mobilePosition?: string };
  overlay?: { src: string; alt: string };
  /** Detail page, once it exists. */
  href?: string;
  align?: "left" | "right";
  gradient?: string;
};

export type ProductLine = {
  id: string;
  eyebrow: string;
  title: [string, string];
  description: string;
  products: Product[];
};

const shade =
  "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%), linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.6) 42%, rgba(0,0,0,0) 72%)";

const richusLogo = { src: "/images/logo-dubhe-richus.png", width: 291, height: 28, chip: true };

export const productLines: ProductLine[] = [
  {
    id: "dubhe-merak",
    eyebrow: "Dubhe Merak · Wastewater Treatment",
    title: ["Dubhe Merak.", "Wastewater, reimagined."],
    description:
      "Fully automatic, AI-assisted sewage and effluent treatment plants — compact, quiet and built for commercial sites.",
    products: [
      {
        slug: "bayaweaver",
        name: "Bayaweaver",
        logo: { src: "/images/logo-bayaweaver.svg", width: 342, height: 44 },
        description:
          "A heavy-duty, fully automatic AI water treatment machine. Chemical-free, maintenance-free and designed for zero liquid discharge.",
        tags: ["Fully automatic AI system", "Chemical free", "ZLD"],
        href: "/products/bayaweaver",
        image: { src: "/images/bayaweaver.webp", alt: "Bayaweaver treatment unit installed in a sunlit apartment interior", mobilePosition: "82% 50%" },
        gradient: shade,
      },
      {
        slug: "tusker-gold",
        href: "/products/tusker-gold",
        name: "Tusker Gold",
        logo: { src: "/images/logo-tusker-gold.svg", width: 290, height: 52 },
        description:
          "A compact sewage treatment plant with quiet, odour-free operation, seamless mobility and advanced MBR technology.",
        tags: ["Fully automatic AI system", "Seamless mobility", "Heavy-duty treatment"],
        image: { src: "/images/tusker-gold-2026.webp", alt: "Tusker Gold 1724 membrane bio reactor unit standing in still water under a spotlight", mobilePosition: "66% 50%" },
        gradient: "linear-gradient(90deg, rgba(0,0,0,0.88) 3.19%, rgba(0,0,0,0) 65.84%)",
      },
      {
        slug: "narwhal-steller",
        href: "/products/narwhal-steller",
        name: "Narwhal Steller",
        logo: { src: "/images/logo-narwhal-steller.svg", width: 328, height: 52 },
        description:
          "A high-performance effluent treatment plant. Unmatched in design, efficiency and size, powered by Membrane Bio Reactor technology.",
        tags: ["Effluent treatment plant", "MBR technology", "Odour-free"],
        image: { src: "/images/narwhal-steller-bg.webp", alt: "", position: "50% 71%" },
        overlay: { src: "/images/narwhal-steller-product.webp", alt: "Narwhal Steller effluent treatment plant" },
        gradient: shade,
      },
    ],
  },
  {
    id: "dubhe-richus",
    eyebrow: "Dubhe Richus · Drinking Water",
    title: ["Dubhe Richus.", "Drinking water, naturally."],
    description:
      "Gravity-powered, chemical-free drinking water systems — trusted in homes, hotels and hospitals for over three decades.",
    products: [
      {
        slug: "medium",
        href: "/products/medium",
        name: "Medium",
        showName: true,
        logo: richusLogo,
        description: "Twin-cylinder gravity filtration for single-storied homes. No electricity, no chemicals.",
        tags: ["1250 Ltr/day", "up to 1500 sq.ft single storied house"],
        image: { src: "/images/medium-2026.webp", alt: "Twin-cylinder Dubhe Richus Medium filter against a sunlit garden wall", mobilePosition: "68% 50%" },
        gradient: shade,
      },
      {
        slug: "standard",
        href: "/products/standard",
        name: "Standard",
        showName: true,
        logo: richusLogo,
        description: "Our most-installed model - steady flow across five taps for a full household.",
        tags: ["2500 Ltr/day", "up to 3500 sq.ft double storied house"],
        image: { src: "/images/standard-2026.webp", alt: "Dubhe Richus Standard twin-cylinder filter in a black frame against a sunlit wall", mobilePosition: "68% 50%" },
        // Text sits left: the new photo places the unit on the right.
        gradient: shade,
      },
      {
        slug: "commercial",
        href: "/products/commercial",
        name: "Commercial",
        showName: true,
        logo: richusLogo,
        description: "Super Jet Technology sized to the property, built to collect treated water in bulk.",
        tags: ["Customized design", "apartments, hotels, hospitals"],
        image: { src: "/images/commercial-2026.webp", alt: "Four-cylinder Dubhe Richus Commercial system against a sunlit wall", mobilePosition: "65% 50%" },
        gradient: shade,
      },
    ],
  },
];

export const brands = [
  { name: "Volvo", src: "/images/brands/volvo.svg", width: 130.5, height: 18 },
  { name: "Hyundai", src: "/images/brands/hyundai.svg", width: 140.25, height: 18.04 },
  { name: "Toyota", src: "/images/brands/toyota.svg", width: 108.75, height: 17.97 },
  { name: "Yamaha", src: "/images/brands/yamaha.svg", width: 82.5, height: 17.96 },
  { name: "Ford", src: "/images/brands/ford.svg", width: 50.25, height: 18.09 },
  { name: "Suzuki", src: "/images/brands/suzuki.svg", width: 92.25, height: 17.94 },
] as const;

export const about = {
  eyebrow: "About us",
  title: "Three decades of making water simple.",
  body: "Since 1993, we have built reliable, sustainable water treatment — from gravity-powered drinking water systems under Dubhe Richus to fully automatic effluent plants under Dubhe Merak. One company, two disciplines, one standard.",
  cta: { label: "Know more about us", href: "/about" },
  image: { src: "/images/about.webp", alt: "Dubhe Richus twin-cylinder filter installed beside a home entrance" },
} as const;

export const caseStudies = [
  {
    kicker: "Hospital · Ernakulam",
    category: "Hospitals",
    href: "/case-studies",
    products: ["Tusker Gold"],
    title: "Cutting effluent non - compliance to zero",
    icon: "/images/icons/icon-trending-down.svg",
    metric: "98%",
    metricLabel: ["Reduction in", "treatment failures"],
    image: { src: "/images/case-1.webp", alt: "Lab technician sampling treated water from a stainless steel tap" },
  },
  {
    kicker: "Hotel · Kochi",
    category: "Hotels",
    href: "/case-studies/hotel-kochi",
    products: ["Tusker Gold", "Standard"],
    title: "Odour-free sewage handling in a live property",
    icon: "/images/icons/icon-calendar.svg",
    metric: "14",
    metricLabel: ["Days for install to", "full operation"],
    image: { src: "/images/case-2.webp", alt: "Stainless steel piping in a hotel plant room" },
  },
  {
    kicker: "Small business · Kerala",
    category: "Small business",
    href: "/case-studies",
    products: ["Standard"],
    title: "Switching to chemical - free drinking water",
    icon: "/images/icons/icon-rupee.svg",
    metric: "00",
    metricLabel: ["Ongoing chemical", "cost"],
    image: { src: "/images/case-3.webp", alt: "Young man drinking a glass of water in a kitchen" },
  },
] as const;

export const testimonials = [
  {
    quote: "“Installation was clean, the team was responsive, and the system has needed almost no maintenance.”",
    name: "Mrinalini Nair",
    role: "CEO of Toyota Kochi®",
    rating: 4,
    logo: { src: "/images/brands/toyota-card.svg", width: 97, height: 48, alt: "Toyota" },
    photo: "/images/testimonial-mrinalini.webp",
  },
  {
    quote: "“Their ability to listen, challenge assumptions, and translate ideas into a clean water treatment system.”",
    name: "Raghav Nandan",
    role: "Operations Manager of Suzuki Kerala®",
    rating: 4,
    logo: { src: "/images/brands/suzuki.svg", width: 82, height: 16, alt: "Suzuki" },
    photo: "/images/testimonial-raghav.webp",
  },
  {
    quote: "“We switched from a chemical-heavy system and haven't looked back. Simple to operate, quiet, reliable.”",
    name: "Rohan Mathew",
    role: "Manager of Yamaha Kochi®",
    rating: 5,
    logo: { src: "/images/brands/yamaha.svg", width: 73, height: 16, alt: "Yamaha" },
    photo: "/images/testimonial-rohan.webp",
  },
] as const;

export const industries = [
  {
    title: "Hospitals",
    body: "Compliance-ready effluent treatment and consistent drinking water for wards, labs and kitchens.",
    image: { src: "/images/industry-hospitals.webp", alt: "Surgeon washing hands at a hospital scrub sink", position: "35% 70%" },
  },
  {
    title: "Hotels & resorts",
    body: "Quiet, odour-free systems that install without disrupting the guest experience.",
    image: { src: "/images/industry-hotels.webp", alt: "Indoor hotel pool with loungers", position: "26% 50%" },
  },
  {
    title: "Malls & commercial spaces",
    body: "High-volume treatment sized for food courts, restrooms and daily footfall.",
    image: { src: "/images/industry-malls.webp", alt: "Water feature cascading in a commercial courtyard", position: "92% 61%" },
  },
  {
    title: "Flats & apartments",
    body: "Shared drinking water and sewage treatment for residential communities of every size.",
    image: { src: "/images/industry-flats.webp", alt: "Open water treatment channel at a residential plant", position: "0% 100%" },
  },
  {
    title: "Schools & colleges",
    body: "Safe, low-maintenance water for campuses, hostels and canteens.",
    image: { src: "/images/industry-schools.webp", alt: "Students walking past a drinking water fountain", position: "50% 61%" },
  },
  {
    title: "Factories & industrial",
    body: "Heavy-duty effluent treatment built around your process water and discharge norms.",
    image: { src: "/images/industry-factories.webp", alt: "Industrial effluent treatment tanks outside a factory", position: "100% 100%" },
  },
] as const;

export const footer = {
  // Replaces the old "smarter than you think" line so the footer matches the new hero voice.
  headline: ["Engineered for tomorrow.", "Trusted since 1993."],
  body: "Private commercial enquiries — hospitals, hotels, small businesses — get a response within one business day.",
  groups: [
    {
      title: "Overview",
      links: [
        { label: "About", href: "/about" },
        { label: "Technology", href: "/technology" },
        { label: "Products", href: "/products" },
        { label: "Applications", href: "/applications" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Case studies", href: "/case-studies" },
        { label: "Contact", href: "/contact" },
        { label: "Downloads", href: "#" },
      ],
    },
  ],
  legal: ["Privacy Policy", "Terms of Use"],
} as const;

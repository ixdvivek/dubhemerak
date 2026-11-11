/**
 * Product detail content for /products/[slug].
 *
 * Specs come from the client brochures (Dubhe Merak STP brochure and the
 * Dubhe Richus brochure). Where the brochure and the earlier wireframes
 * disagreed, the brochure wins — see README "Content notes".
 */

type Img = { src: string; alt: string; position?: string };

export type ProductFamily = "wastewater" | "drinking";

export type ProductDetail = {
  slug: string;
  name: string;
  family: ProductFamily;
  /** Division label shown in eyebrows. */
  division: string;
  metaDescription: string;
  hero: { image: Img; description: string };
  /** Four short benefit callouts on the dark strip under the hero. */
  features: readonly (readonly [string, string])[];
  overview: {
    eyebrow: string;
    title: string;
    body: readonly string[];
    image: Img & { ratio?: string; contain?: boolean };
    /** Headline numbers shown under the copy (drinking water models). */
    facts?: readonly (readonly [string, string])[];
  };
  highlight: {
    eyebrow: string;
    title: string;
    accent: string;
    body: string;
    checks: readonly string[];
    /** Optional "It removes" style chip row. */
    chips?: { label: string; items: readonly string[] };
    video: { src: string; label: string };
  };
  /** Brochure "Features to know more" page: annotated diagram + legend. */
  diagram?: {
    title: [string, string];
    description: string;
    image?: { src: string; width: number; height: number; alt: string };
    placeholder?: string;
    /** The diagram marks parts with numbers that match the legend order. */
    numbered?: boolean;
    legend: readonly string[];
  };
  specs: readonly (readonly [string, string])[];
  merits?: { title: [string, string]; items: readonly string[] };
  lineup?: {
    title: [string, string];
    description: string;
    models: readonly (readonly [string, string, string])[];
  };
  /** Gravity-system working cycle (drinking water). */
  cycle?: boolean;
  gallery: readonly { caption: string; src?: string }[];
  videos: readonly { title: string; body: string; src: string }[];
  maintenance: { body: string; cards: readonly (readonly [string, string])[] };
};

const merakDivision = "Dubhe Merak · Wastewater";
const richusDivision = "Dubhe Richus · Drinking water";

const richusFeatures = [
  ["Electricity free", "Runs entirely on gravity"],
  ["Chemical free", "Natural stone filtration"],
  ["Soundless", "Whisper-quiet EcoSilence"],
  ["Reusable medium", "No filter media replacement"],
] as const;

const richusHighlight = {
  eyebrow: "Design & technology",
  title: "Natural water",
  accent: "is medicine.",
  body: "Patent-protected vertical machines use a non-chemical spiral spray design to boost pressure, quality and quantity. Natural stones keep the water pure, while a high-speed backwashing system keeps the machine eco-friendly.",
  checks: [
    "Superior performance and optimal flow",
    "Iron removal with mineral preservation",
    "Easy to set up and operate, with step-by-step videos and a clear manual",
    "Proven to last over 33 years without filter media replacement",
  ],
  chips: { label: "It removes", items: ["Iron", "Colour", "Smell", "Turbidity", "Taste"] },
} as const;

const richusMaintenance = {
  body: "Dubhe Richus systems ask for very little: a manual backwash every 5–7 days and nothing else. There's no electrician, no chemical supplier and no service contract needed to keep them running.",
  cards: [
    ["Manual backwash", "Every 5–7 days, in a few minutes, using the valves on the unit."],
    ["No media replacement", "The natural filtration medium is reusable — proven over 33 years in the field."],
  ],
} as const;

export const products: readonly ProductDetail[] = [
  {
    slug: "bayaweaver",
    name: "Bayaweaver",
    family: "wastewater",
    division: merakDivision,
    metaDescription:
      "Bayaweaver — a heavy-duty, fully automatic AI water treatment machine. Chemical-free, maintenance-free and designed for zero liquid discharge. Models 0724 to 5024.",
    hero: {
      image: { src: "/images/bayaweaver.webp", alt: "", position: "70% 50%" },
      description:
        "A heavy-duty, fully automatic AI water treatment machine. Chemical-free, maintenance-free and designed for zero liquid discharge.",
    },
    features: [
      ["Chemical free", "No added chemicals"],
      ["Maintenance free", "Minimal upkeep required"],
      ["Zero liquid discharge", "ZLD design"],
      ["Movable system", "Occupies less space"],
    ],
    overview: {
      eyebrow: "Overview",
      title: "Heavy-duty performance, without a heavy footprint.",
      body: [
        "Bayaweaver is Dubhe Merak's fully automatic, AI-assisted water treatment system — built for sites that need heavy-duty performance without a heavy operational footprint. It's chemical-free, largely maintenance-free, and designed around zero liquid discharge.",
        "Available across five model sizes (0724 through 5024), Bayaweaver is customized to the effluent quality and quantity of each site, and its plug-and-play electrical and pipe connectors keep installation fast even in space-constrained locations.",
      ],
      image: { src: "/images/products/bayaweaver-studio.webp", alt: "Bayaweaver 0724 unit with its Schneider electric connector", ratio: "680/600" },
    },
    highlight: {
      eyebrow: "Plug & play",
      title: "Built for fast,",
      accent: "easy install.",
      body: "Schneider electric connectors and easy pipe connectors mean less on-site work, less downtime, and a customized design that adapts to the site's effluent quality and quantity.",
      checks: ["Schneider electric connector", "Easy pipe connectors", "Customized to effluent quality and quantity"],
      video: { src: "/images/bayaweaver.webp", label: "Bayaweaver in operation" },
    },
    diagram: {
      title: ["Features", "to know more."],
      description: "A fully automatic AI system with waterproof controls, built as a plug & play model on patented technology.",
      image: {
        src: "/images/products/bayaweaver-diagram.webp",
        width: 2269,
        height: 1152,
        alt: "Annotated Bayaweaver diagram showing the touch display, control panel, pressure meter, electric connector, pipe connector and powder-coated body",
      },
      numbered: true,
      legend: [
        "Schneider Harmony 5″ touch display",
        "Control panel with manual switches and emergency stop",
        "Analogue pressure meter",
        "Schneider electric connector",
        "Easy pipe connector",
        "Anti-rust, powder-coated metal body",
      ],
    },
    specs: [
      ["Dimensions (L × B × H)", "80.5 × 70.5 × 158 cm"],
      ["Weight", "447.5 lbs"],
      ["System", "Fully automatic — AI, waterproof controls"],
      ["Treatment", "Chemical free · zero liquid discharge"],
      ["Models", "0724 · 1524 · 2524 · 3524 · 5024"],
      ["Also", "Minimal sound · movable · eco friendly"],
    ],
    lineup: {
      title: ["Five models,", "one design."],
      description: "Every model runs round the clock — 24 hours a day, 365 days a year. Pick by daily treatment volume.",
      models: [
        ["0724", "N Line", "07k × 24h × 365"],
        ["1524", "N Line", "15k × 24h × 365"],
        ["2524", "N Line", "25k × 24h × 365"],
        ["3524", "N Line", "35k × 24h × 365"],
        ["5024", "N Line", "50k × 24h × 365"],
      ],
    },
    gallery: [
      { caption: "Front view", src: "/images/products/bayaweaver-studio.webp" },
      { caption: "Installed in an apartment interior", src: "/images/bayaweaver.webp" },
      { caption: "Touch display and control panel" },
      { caption: "Installed at an industrial site" },
      { caption: "Side profile with pipe connectors" },
      { caption: "Unit footprint in a utility yard" },
    ],
    videos: [
      { title: "Product overview", body: "How Bayaweaver's AI system manages treatment automatically.", src: "/images/products/bayaweaver-studio.webp" },
      { title: "Installation walkthrough", body: "Plug-and-play install, from connection to first cycle.", src: "/images/bayaweaver.webp" },
    ],
    maintenance: {
      body: "Bayaweaver is built to run with limited operator involvement. The compact, movable design keeps servicing straightforward when it's needed.",
      cards: [
        ["Semi-automatic", "Needs occasional supervision — suited to sites with on-hand facilities staff."],
        ["Fully automatic", "Designed to largely run itself, with the AI system managing each treatment cycle."],
      ],
    },
  },
  {
    slug: "tusker-gold",
    name: "Tusker Gold",
    family: "wastewater",
    division: merakDivision,
    metaDescription:
      "Tusker Gold 1724 — a fully automatic, heavy-duty sewage treatment plant: ozonised membrane bio reactor, quiet and odour-free, plug & play and movable.",
    hero: {
      image: { src: "/images/tusker-gold-2026.webp", alt: "", position: "62% 50%" },
      description:
        "Experience a new era of effluent treatment — a compact, fully automatic sewage treatment plant with quiet, odour-free operation and advanced MBR technology.",
    },
    features: [
      ["Fully automatic", "AI system"],
      ["Odour-free", "Quiet operation"],
      ["Movable system", "Seamless mobility"],
      ["Eco friendly", "Aerobic bacterial treatment"],
    ],
    overview: {
      eyebrow: "Overview",
      title: "The heart of water revival.",
      body: [
        "Tusker Gold sets a new standard with its exceptional design, efficiency and compact size. Offering quiet, odour-free operation, seamless mobility and flexible automatic or semi-automatic options, it suits diverse needs.",
        "Committed to sustainability, it delivers rapid, effective results with advanced MBR technology and aerobic bacterial treatment — a heavy-duty sewage treatment plant that fits live commercial sites.",
      ],
      image: { src: "/images/tusker-gold-2026.webp", alt: "Tusker Gold 1724 unit standing in still water", ratio: "680/600", position: "68% 50%" },
    },
    highlight: {
      eyebrow: "Ozonised membrane bio reactor",
      title: "Plug in, connect the pipes,",
      accent: "and it runs.",
      body: "Each Tusker Gold arrives as a complete ozonised membrane bio reactor system (EA-20G-02R). A Schneider electric connector and easy pipe connectors keep on-site work to plugging in and connecting up.",
      checks: [
        "Customized design for effluent quality and quantity",
        "Easy installation on-site",
        "Less maintenance costs",
        "Occupies less space",
      ],
      video: { src: "/images/products/tusker-gold-studio.webp", label: "Tusker Gold in operation" },
    },
    diagram: {
      title: ["Features", "to know more."],
      description: "A plug & play model with its own air compressor room, service duct and air vent built into the unit.",
      image: {
        src: "/images/products/tusker-gold-diagram.webp",
        width: 2448,
        height: 1161,
        alt: "Annotated Tusker Gold diagram showing the electric connector, pipe connectors, control panel, air compressor room, service duct and air vent",
      },
      legend: [
        "Schneider electric connector",
        "Easy pipe connectors",
        "Control panel with manual switches",
        "Air compressor room",
        "Service duct",
        "Air vent",
      ],
    },
    specs: [
      ["Model", "1724"],
      ["System", "Ozonised membrane bio reactor (EA-20G-02R)"],
      ["Dimensions (L × B × H)", "602 × 289.5 × 210.8 cm"],
      ["Weight", "50,000 lbs"],
      ["Operation", "Fully automatic or semi-automatic"],
      ["Also", "Minimal sound · movable · eco friendly"],
    ],
    merits: {
      title: ["Why teams choose", "Tusker Gold."],
      items: [
        "Anaerobic, aerobic and physical treatments",
        "MBBR, MBR, FBBR and CPR technologies",
        "Cost-effective and efficient technology",
        "Easily movable system",
        "Utilization of less space",
        "Simple to operate and maintain, with long life",
        "Plant accommodates the collection tank, using space wisely",
        "Optimized power consumption",
        "Utilization of renewable energy sources",
        "Customized design for effluent quality and quantity",
        "Available in fully automatic and semi-automatic models",
        "Limited operator support needed for semi-automatic systems",
        "Attractive size and appealing design enhance location aesthetics",
        "Enhances reputation and ensures compliance",
      ],
    },
    gallery: [
      { caption: "Tusker Gold 1724", src: "/images/tusker-gold-2026.webp" },
      { caption: "Front three-quarter view", src: "/images/products/tusker-gold-studio.webp" },
      { caption: "The heart of water revival", src: "/images/products/tusker-gold-elephant.webp" },
      { caption: "Control panel detail" },
      { caption: "Air compressor room and service duct" },
      { caption: "Installed at a hotel utility site" },
    ],
    videos: [
      { title: "Product overview", body: "A look at Tusker Gold's fully automatic AI system in operation.", src: "/images/products/tusker-gold-studio.webp" },
      { title: "Installation walkthrough", body: "From delivery to first automated cycle, on a live hotel site.", src: "/images/case-2.webp" },
    ],
    maintenance: {
      body: "Fully automatic models are designed to run with minimal operator input; semi-automatic models need only limited operator support. The control panel's manual switches make it easy to check status and step in when needed.",
      cards: [
        ["Semi-automatic", "Limited operator support — suited to sites with facilities staff on hand."],
        ["Fully automatic", "The AI system manages each treatment cycle with minimal supervision."],
      ],
    },
  },
  {
    slug: "narwhal-steller",
    name: "Narwhal Steller",
    family: "wastewater",
    division: "Dubhe Merak · Effluent treatment",
    metaDescription:
      "Narwhal Steller — a high-performance effluent treatment plant with MBR technology, quiet odour-free operation, moving rails or wheels and automatic or semi-automatic modes.",
    hero: {
      image: { src: "/images/narwhal-steller-bg.webp", alt: "", position: "50% 65%" },
      description:
        "A revolutionary, high-performance effluent treatment plant that delivers powerful, cost-effective results. Purifying the present for a better tomorrow.",
    },
    features: [
      ["Quiet, odour-free", "Seamless mobility"],
      ["Moving rails or wheels", "Flexible placement"],
      ["Auto or semi-auto", "Flexibility for any need"],
      ["MBR technology", "Aerobic bacterial treatment"],
    ],
    overview: {
      eyebrow: "Overview",
      title: "Unmatched in design, efficiency and size.",
      body: [
        "Narwhal Steller sets a new standard for effluent treatment. Enjoy a quiet, odour-free experience with seamless mobility, thanks to moving rails or wheels — and automatic or semi-automatic options for any need.",
        "Dedicated to sustainability and designed to complement the community it serves, it delivers exceptional results through highly efficient aerobic bacterial treatment, yielding quick outcomes aided by advanced Membrane Bio Reactor (MBR) technology.",
      ],
      image: {
        src: "/images/products/narwhal-steller-studio.webp",
        alt: "Narwhal Steller 2524 ozonised membrane bio reactor unit",
        ratio: "680/600",
        contain: true,
      },
    },
    highlight: {
      eyebrow: "Membrane Bio Reactor (MBR)",
      title: "Advanced aerobic treatment,",
      accent: "quick outcomes.",
      body: "Narwhal Steller pairs highly efficient aerobic bacterial treatment with an ozonised membrane bio reactor, so effluent is treated quickly and reliably — and the unit moves with the site as its layout changes.",
      checks: [
        "Ozonised membrane bio reactor system (EA-21G-03R)",
        "Moving rails or wheels for flexible placement",
        "Automatic or semi-automatic operation",
        "Quiet, odour-free running",
      ],
      video: { src: "/images/narwhal-steller-bg.webp", label: "Narwhal Steller in operation" },
    },
    diagram: {
      title: ["Ozonised membrane", "bio reactor system."],
      description: "The labelled unit diagram for Narwhal Steller will sit here once the brochure page is supplied.",
      placeholder: "Labelled unit diagram — control panel, air compressor room, service duct (from brochure)",
      legend: ["Control panel", "Air compressor room", "Service duct", "Moving rails or wheels", "Electric connector", "Air vent"],
    },
    specs: [
      ["Model", "2524"],
      ["System", "Ozonised membrane bio reactor (EA-21G-03R)"],
      ["Treatment", "Aerobic bacterial + MBR"],
      ["Mobility", "Moving rails or wheels"],
      ["Operation", "Automatic or semi-automatic"],
      ["Capacity", "Customized to the site"],
    ],
    gallery: [
      { caption: "Narwhal Steller 2524", src: "/images/products/narwhal-steller-studio.webp" },
      { caption: "MBR system close-up" },
      { caption: "Moving rail detail" },
      { caption: "Control panel" },
      { caption: "Installed at an institutional site" },
      { caption: "Unit repositioned on wheels" },
    ],
    videos: [
      { title: "Product overview", body: "How Narwhal Steller's MBR system delivers quick, reliable treatment outcomes.", src: "/images/products/narwhal-steller-studio.webp" },
      { title: "Installation walkthrough", body: "Positioning and commissioning a unit on-site.", src: "/images/narwhal-steller-bg.webp" },
    ],
    maintenance: {
      body: "Mobility is part of Narwhal Steller's maintenance story — moving the unit on rails or wheels makes routine servicing and inspection easier than a fixed installation.",
      cards: [
        ["Semi-automatic", "Occasional supervision, with limited operator support."],
        ["Automatic", "Keeps operator involvement to a minimum day to day."],
      ],
    },
  },
  {
    slug: "medium",
    name: "Medium",
    family: "drinking",
    division: richusDivision,
    metaDescription:
      "Dubhe Richus Medium — a twin-cylinder gravity water filter for single-storied homes up to 1500 sq.ft. 1250 litres a day, no electricity, no chemicals.",
    hero: {
      image: { src: "/images/richus-medium.webp", alt: "", position: "68% 50%" },
      description: "Twin-cylinder gravity filtration for single-storied homes. No electricity, no chemicals — just clean water at every tap.",
    },
    features: richusFeatures,
    overview: {
      eyebrow: richusDivision,
      title: "1250 litres a day, sized for single-storied homes.",
      body: [
        "Medium is a compact, twin-cylinder gravity system built for single-storied homes up to 1500 sq.ft. It uses the same chemical-free, electricity-free filtration as every model in the range, sized for smaller daily demand.",
        "Because it runs on gravity alone, Medium works reliably even where power supply is inconsistent — and with no chemicals, there's nothing to reorder, measure or store.",
      ],
      facts: [
        ["1250", "Litres per day"],
        ["1500", "Sq.ft, single storied"],
        ["5", "Taps at a time"],
      ],
      image: { src: "/images/products/richus-design.webp", alt: "Twin-cylinder Dubhe Richus unit", ratio: "680/600", position: "50% 40%" },
    },
    highlight: { ...richusHighlight, video: { src: "/images/richus-medium.webp", label: "How gravity filtration works" } },
    specs: [
      ["Quantity", "1250 Ltr per day"],
      ["Suitable for", "Up to 1500 sq.ft single storied house"],
      ["Cylinder", "200 mm dia · 101 cm height"],
      ["Unit total height", "4.1 feet"],
      ["No. of cylinders", "Twin"],
      ["Outlet size", "40 mm"],
      ["Type", "Manual backwash"],
      ["Specification", "5 taps can be used at a time"],
    ],
    cycle: true,
    gallery: [
      { caption: "Medium in its black frame", src: "/images/richus-medium.webp" },
      { caption: "Twin cylinders", src: "/images/products/richus-design.webp" },
      { caption: "Cylinder close-up", src: "/images/products/richus-closeup.webp" },
      { caption: "Outlet and tap connection" },
      { caption: "Installed in a home utility area" },
      { caption: "Backwash valve detail" },
    ],
    videos: [
      { title: "Product overview", body: "How Medium filters water without electricity or chemicals.", src: "/images/richus-medium.webp" },
      { title: "Backwash walkthrough", body: "How to perform the manual backwash — it takes a few minutes.", src: "/images/products/richus-closeup.webp" },
    ],
    maintenance: richusMaintenance,
  },
  {
    slug: "standard",
    name: "Standard",
    family: "drinking",
    division: richusDivision,
    metaDescription:
      "Dubhe Richus Standard — our most-installed gravity water filter: 2500 litres a day for double-storied homes up to 3500 sq.ft, no electricity, no chemicals.",
    hero: {
      image: { src: "/images/richus-standard.webp", alt: "", position: "68% 50%" },
      description: "Our most-installed model — steady flow across five taps for a full household, with no electricity and no chemicals.",
    },
    features: richusFeatures,
    overview: {
      eyebrow: richusDivision,
      title: "2500 litres a day for double-storied homes.",
      body: [
        "Standard is the most-installed Dubhe Richus model: a twin-cylinder gravity system with taller cylinders and a 50 mm outlet, sized for double-storied homes up to 3500 sq.ft.",
        "It keeps a steady flow across five taps at once, filters with natural stones instead of chemicals and needs nothing more than a manual backwash every 5–7 days.",
      ],
      facts: [
        ["2500", "Litres per day"],
        ["3500", "Sq.ft, double storied"],
        ["5", "Taps at a time"],
      ],
      image: { src: "/images/products/richus-closeup.webp", alt: "Close-up of a Dubhe Richus stainless steel cylinder", ratio: "680/600", position: "50% 30%" },
    },
    highlight: { ...richusHighlight, video: { src: "/images/richus-standard.webp", label: "How gravity filtration works" } },
    specs: [
      ["Quantity", "2500 Ltr per day"],
      ["Suitable for", "Up to 3500 sq.ft double storied house"],
      ["Cylinder", "200 mm dia · 113 cm height"],
      ["Unit total height", "5.1 feet"],
      ["No. of cylinders", "Twin"],
      ["Outlet size", "50 mm"],
      ["Type", "Manual backwash"],
      ["Specification", "5 taps can be used at a time"],
    ],
    cycle: true,
    gallery: [
      { caption: "Standard against a garden wall", src: "/images/richus-standard.webp" },
      { caption: "Cylinder close-up", src: "/images/products/richus-closeup.webp" },
      { caption: "Twin cylinders", src: "/images/products/richus-design.webp" },
      { caption: "Installed on a guest floor" },
      { caption: "Outlet and valve detail" },
      { caption: "Backwash in progress" },
    ],
    videos: [
      { title: "Product overview", body: "How Standard keeps five taps flowing without electricity or chemicals.", src: "/images/richus-standard.webp" },
      { title: "Backwash walkthrough", body: "How to perform the manual backwash — it takes a few minutes.", src: "/images/products/richus-closeup.webp" },
    ],
    maintenance: richusMaintenance,
  },
  {
    slug: "commercial",
    name: "Commercial",
    family: "drinking",
    division: richusDivision,
    metaDescription:
      "Dubhe Richus Commercial — Super Jet Technology gravity filtration designed around the property, for apartments, hotels and hospitals. Collects treated water in bulk.",
    hero: {
      image: { src: "/images/commercial-2026.webp", alt: "", position: "65% 50%" },
      description: "Super Jet Technology sized to the property, built to collect treated water in bulk — for apartments, hotels and hospitals.",
    },
    features: richusFeatures,
    overview: {
      eyebrow: richusDivision,
      title: "Designed around the property, built for bulk.",
      body: [
        "Commercial systems are customized to each site — apartments, hotels, hospitals and more. Super Jet Technology and the tallest cylinders in the range let the system collect treated water in bulk.",
        "Like every Dubhe Richus model, it runs on gravity with no chemicals, so large properties get consistent drinking water without adding to their power or consumables bill.",
      ],
      facts: [
        ["Custom", "Designed per site"],
        ["139", "Cm cylinders"],
        ["50", "Mm outlet"],
      ],
      image: { src: "/images/commercial-2026.webp", alt: "Four-cylinder Dubhe Richus Commercial system", ratio: "680/600", position: "66% 50%" },
    },
    highlight: { ...richusHighlight, video: { src: "/images/commercial-2026.webp", label: "Gravity filtration explainer" } },
    specs: [
      ["Quantity", "Customized design"],
      ["Suitable for", "Apartments, hotels, hospitals, etc."],
      ["Cylinder", "200 mm dia · 139 cm height"],
      ["Unit total height", "5.9 feet"],
      ["No. of cylinders", "Twin (Super Jet Technology)"],
      ["Outlet size", "50 mm"],
      ["Type", "Manual backwash"],
      ["Specification", "Can collect treated water in bulk"],
    ],
    cycle: true,
    gallery: [
      { caption: "Commercial system against a sunlit wall", src: "/images/commercial-2026.webp" },
      { caption: "Cylinder close-up", src: "/images/products/richus-closeup.webp" },
      { caption: "Installed on a utility wall" },
      { caption: "Installed at an apartment block" },
      { caption: "Bulk collection tank connection" },
      { caption: "Valve manifold detail" },
    ],
    videos: [
      { title: "Product overview", body: "How Super Jet Technology scales gravity filtration for large properties.", src: "/images/commercial-2026.webp" },
      { title: "Backwash walkthrough", body: "Running the manual backwash on a multi-cylinder system.", src: "/images/products/richus-closeup.webp" },
    ],
    maintenance: richusMaintenance,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

/** Link for a product name used in copy (e.g. "Tusker Gold" → /products/tusker-gold). */
export const productHref = (name: string) => {
  const p = products.find((x) => x.name === name);
  return p ? `/products/${p.slug}` : "/products";
};

import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dubhemerak.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/technology", "/products", "/applications", "/case-studies", "/case-studies/hotel-kochi", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ...products.map((p) => ({ url: `${base}/products/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}

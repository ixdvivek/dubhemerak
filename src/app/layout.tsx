import type { Metadata, Viewport } from "next";
import { kanit, dotSans } from "@/lib/fonts";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dubhemerak.com"),
  title: {
    default: "Dubhe Merak — Drinking water & wastewater treatment",
    template: "%s — Dubhe Merak",
  },
  description:
    "Chemical-free, electricity-free drinking water systems and fully automatic effluent treatment plants for hospitals, hotels and businesses. Since 1993.",
  openGraph: {
    title: "Dubhe Merak — Smarter than you think",
    description:
      "Chemical-free, electricity-free drinking water systems and fully automatic effluent treatment plants for hospitals, hotels and businesses.",
    images: ["/images/hero.webp"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#04223f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${kanit.variable} ${dotSans.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

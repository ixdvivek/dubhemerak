import localFont from "next/font/local";

/**
 * Self-hosted brand typefaces (both SIL OFL 1.1).
 * Kanit carries display type; 42dot Sans carries body and UI text.
 */
export const kanit = localFont({
  variable: "--font-kanit",
  display: "swap",
  src: [
    { path: "../fonts/kanit-latin-100-normal.woff2", weight: "100", style: "normal" },
    { path: "../fonts/kanit-latin-200-normal.woff2", weight: "200", style: "normal" },
    { path: "../fonts/kanit-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/kanit-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/kanit-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
});

export const dotSans = localFont({
  variable: "--font-42dot",
  display: "swap",
  src: [
    { path: "../fonts/42dot-sans-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/42dot-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/42dot-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/42dot-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/42dot-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
});

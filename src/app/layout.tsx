import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";

/* UUPM Typography: Luxury Serif — Cormorant (headings) + Montserrat (body) */
const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Trivedi Marble & Handicraft — Master Sandstone & Marble Artisans Since 1949",
  description:
    "Trivedi Marble & Handicraft are the leading Manufacturer & Supplier of Sandstone Carving, Marble Jali, Designer Marble Temples & Stone Cladding from Sirohi, Rajasthan, India. Crafting excellence since 1949.",
  keywords:
    "sandstone carving, marble carving, marble jali, marble temple, stone cladding, Rajasthan marble, Sirohi handicraft, CNC marble carving, marble tulsi pot",
  openGraph: {
    title: "Trivedi Marble & Handicraft — Master Artisans Since 1949",
    description:
      "Leading manufacturer & supplier of sandstone carving, marble jali designs, and designer marble temples from Sirohi, Rajasthan.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}

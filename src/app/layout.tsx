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
  title: "Trivedi Marble & Handicraft — Shaping Stone. Carrying Forward A Legacy. Since 1937",
  description:
    "Trivedi Marble & Handicraft (Abu Road, Rajasthan) — Natural Stone, CNC Precision & Architectural Craftsmanship. Master sculptors of the 84 Columns at Vrindavan, Shri Bhandavpur Jain Tirth, and sacred temples across India since 1937.",
  keywords:
    "Trivedi Marble, 84 Columns Vrindavan, Bhandavpur Jain Tirth, sandstone carving, marble carving, marble temple, stone cladding, Abu Road Rajasthan, CNC marble carving work, marble tulsi pot",
  openGraph: {
    title: "Trivedi Marble & Handicraft — Shaping Stone Since 1937",
    description:
      "Natural Stone | CNC Precision | Architectural Craftsmanship from Abu Road, Rajasthan.",
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

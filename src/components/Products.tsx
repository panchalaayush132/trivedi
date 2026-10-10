"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

const products: ProductItem[] = [
  {
    id: "marble-carving",
    name: "Marble Carving",
    category: "Carving Art",
    description:
      "Hand-chiseled Makrana marble carvings with classical Indian floral and mythological motifs created by master sculptors.",
    image: "/images/marble-carving.jpg",
    features: ["Makrana Marble", "Custom Dimensions", "Hand Sculpted"],
  },
  {
    id: "stone-cladding",
    name: "Stone Cladding",
    category: "Architecture",
    description:
      "Architectural natural stone wall cladding offering timeless aesthetics, weather resistance, and thermal insulation.",
    image: "/images/stone-cladding.jpg",
    features: ["Exterior & Interior", "Multiple Textures", "Interlocking Finish"],
  },
  {
    id: "designer-marble-temple",
    name: "Designer Marble Temple",
    category: "Sacred Temples",
    description:
      "Ornate hand-crafted marble mandirs for residences and spiritual trusts, featuring custom shikhara, sanctum, and domes.",
    image: "/images/real/real-marble-mandir.jpg",
    features: ["Vastu Compliant", "Intricate Pillars", "Polished White Marble"],
  },
  {
    id: "marble-temple-carving",
    name: "Marble Temple Carving",
    category: "Sacred Temples",
    description:
      "Detailed stone filigree work for temple pillars, brackets, torana arches, and divine iconography carved with spiritual devotion.",
    image: "/images/real/real-carved-torana.jpg",
    features: ["High-Relief Sculpting", "Sacred Iconography", "Artisan Precision"],
  },
  {
    id: "marble-jali-carving-design",
    name: "Marble Jali Carving Design",
    category: "Jali & Lattice",
    description:
      "Perforated marble latticework panels blending geometric arabesques with traditional floral lattices for dramatic light filtering.",
    image: "/images/real/real-jali-relief-panel.jpg",
    features: ["Custom Patterns", "Diffused Sunlight", "Heritage Lattice"],
  },
  {
    id: "marble-tulsi-pot",
    name: "Marble Tulsi Pot",
    category: "Sacred Sculptures",
    description:
      "Auspicious marble Tulsi Kyaras sculpted from solid stone with delicate leaf patterns and traditional elephant base motifs.",
    image: "/images/real/real-tulsi-pot.jpg",
    features: ["Solid Monolithic Stone", "Weatherproof", "Sanctified Craft"],
  },
  {
    id: "sandstone-carving",
    name: "Sandstone Carving",
    category: "Carving Art",
    description:
      "Warm Rajasthani pink and golden sandstone sculptures, panels, and monumental pillars sculpted for enduring grandeur.",
    image: "/images/sandstone.jpg",
    features: ["Authentic Rajasthani Stone", "Warm Earth Tones", "Time-Tested Strength"],
  },
  {
    id: "cnc-marble-carving-work",
    name: "CNC Marble Carving Work",
    category: "Modern Precision",
    description:
      "High-precision 3D and 2D computer numeric control carving combining micron-level accuracy with artisan hand-finishing.",
    image: "/images/real/real-mandapa-ceiling-dome.jpg",
    features: ["Micron Precision", "Complex 3D Reliefs", "Fast Delivery"],
  },
];

export default function Products() {
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const categories = ["All", "Sacred Temples", "Carving Art", "Architecture", "Jali & Lattice", "Modern Precision"];

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Lock background scrolling and handle Escape key when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedProduct(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedProduct]);

  return (
    <section
      id="products"
      ref={ref}
      className="py-24 md:py-32 bg-stone-100/60 relative"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
            Artisanal Portfolio
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl lg:text-6xl font-bold text-stone-900 mt-3 mb-4 tracking-tight">
            Our Stone & Marble Creations
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Each creation is sculpted from premium quarry-selected stone, merging traditional
            Rajasthani craftsmanship with contemporary architectural elegance.
          </p>
          <div className="ornament-divider max-w-xs mx-auto mt-6">
            <span className="text-gold text-lg">◆</span>
          </div>

          {/* Minimalist Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-stone-900 text-gold-light shadow-md"
                    : "bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-200/70 border border-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, i) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`group flex flex-col rounded-2xl overflow-hidden bg-white border border-stone-200/80 hover:border-gold/40 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: visible ? `${(i % 4) * 80 + 100}ms` : "0ms",
              }}
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden bg-stone-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-md text-stone-800 border border-stone-200">
                  {product.category}
                </span>

                {/* Hover overlay button */}
                <div className="absolute bottom-3 left-3 right-3 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="w-full inline-flex items-center justify-center gap-2 text-white text-xs font-semibold bg-stone-900/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                    Inquire Details
                    <svg
                      className="w-3.5 h-3.5 text-gold-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-stone-900 mb-1.5 group-hover:text-gold transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-stone-500 text-xs leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-stone-100">
                  {product.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-[10px] font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-stone-500 text-sm mb-4">
            Need a custom size, architectural stone drawing, or bulk wholesale supply?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-stone-900 text-gold-light text-xs uppercase tracking-widest font-semibold rounded-xl hover:bg-stone-800 transition-colors shadow-md"
          >
            Request Custom Quotation
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Product Detail Modal - Fully responsive, scrollable & never clipped */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden my-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-48 sm:h-56 w-full shrink-0 bg-stone-100">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
              <button
                onClick={() => setSelectedProduct(null)}
                aria-label="Close modal"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-stone-900/85 hover:bg-stone-950 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 border border-white/20"
              >
                ✕
              </button>
              <div className="absolute bottom-3 left-4">
                <span className="px-2.5 py-1 bg-stone-900/80 backdrop-blur-md rounded-md text-white text-xs font-semibold">
                  {selectedProduct.category}
                </span>
              </div>
            </div>

            {/* Scrollable Modal Body */}
            <div className="p-5 sm:p-7 overflow-y-auto flex-grow space-y-4">
              <div>
                <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                  {selectedProduct.category}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-stone-900 mt-1">
                  {selectedProduct.name}
                </h3>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                {selectedProduct.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {selectedProduct.features.map((feat) => (
                  <span
                    key={feat}
                    className="text-xs font-medium text-stone-700 bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-200"
                  >
                    ✓ {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Sticky Modal Footer */}
            <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <a
                href="tel:+919829118822"
                className="text-stone-800 text-xs font-semibold flex items-center gap-1.5 hover:text-gold"
              >
                <span>📞 Call: +91 98291 18822</span>
              </a>
              <a
                href={`https://wa.me/919829118822?text=Hello%20Varun%20Trivedi%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                  selectedProduct.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-sm"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

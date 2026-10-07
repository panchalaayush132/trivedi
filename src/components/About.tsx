"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "75+", label: "Years of Legacy" },
  { value: "25+", label: "Master Artisans" },
  { value: "1000+", label: "Projects Delivered" },
  { value: "Pan India", label: "Presence" },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sand-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
            Our Story
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-stone-800 mt-3 mb-4">
            A Legacy of Master Craftsmanship
          </h2>
          <div className="ornament-divider max-w-xs mx-auto mt-4">
            <span className="text-gold text-lg">◆</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/craftsman.jpg"
                alt="Master artisan hand-carving intricate floral patterns into marble"
                width={600}
                height={450}
                sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover w-full h-[400px] md:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-gradient-to-br from-stone-900 to-stone-700 text-white p-5 md:p-6 rounded-2xl shadow-xl">
              <span className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold block">
                1949
              </span>
              <span className="text-gold-light text-xs uppercase tracking-wider">
                Established
              </span>
            </div>
          </div>

          {/* Text Side */}
          <div
            className={`transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-stone-800 mb-6">
              Where Tradition Meets Precision
            </h3>

            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                At <strong className="text-stone-800">Trivedi Marble & Handicraft</strong>,
                we are a Sirohi-based remarkable entity renowned for marble carving
                and stone artistry. Incepted in <strong className="text-stone-800">1949</strong>,
                our marble carving and stone cladding services are widely appreciated
                by our extensive clientele for their precise and accurate detailing.
              </p>
              <p>
                Under the visionary leadership of{" "}
                <strong className="text-stone-800">Mr. Varun Naresh Trivedi</strong>,
                we have evolved as a trusted Manufacturer, Wholesaler & Trader of
                premium sandstone carvings, marble jali designs, designer marble
                temples, and architectural stone work.
              </p>
              <p>
                Entrusted with monumental landmark commissions including{" "}
                <strong className="text-stone-800">Shri Bhandavpur Jain Tirth</strong>,{" "}
                <strong className="text-stone-800">Shri Narendra Bhai Modi House</strong>, and{" "}
                <strong className="text-stone-800">Tharad Mota Derasar</strong>, our team of{" "}
                <strong className="text-stone-800">25+ skilled artisans</strong> blends
                time-honoured hand-carving techniques with modern CNC technology,
                ensuring every piece reflects the rich heritage of Rajasthani craftsmanship with
                uncompromised structural precision.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {["Manufacturer", "Wholesaler", "Trader", "Exporter"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-stone-700"
                  >
                    <svg
                      className="w-5 h-5 text-gold shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="font-medium">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-sand-50 border border-sand-200 hover:border-sand-400 hover:shadow-lg transition-all duration-300"
            >
              <span className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gold">
                {stat.value}
              </span>
              <span className="block text-stone-500 text-sm mt-1 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

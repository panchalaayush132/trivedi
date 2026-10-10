"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const specialisations = [
  {
    title: "Architectural Stonework",
    desc: "Large-scale natural stone facades, monumental colonnades, and heritage structures.",
    icon: "🏛️",
  },
  {
    title: "Temple Projects",
    desc: "Complete temple shikhara, sanctum sanctorum mandapas, and celestial torana gateways.",
    icon: "🛕",
  },
  {
    title: "Custom Stone Elements",
    desc: "Bespoke hand-chiseled animal sculptures, floral lattice, and decorative pediments.",
    icon: "✦",
  },
  {
    title: "Bespoke Home Temples",
    desc: "Vastu-compliant luxury marble mandirs carved from monolithic Makrana white marble.",
    icon: "🪔",
  },
  {
    title: "Decorative Installations",
    desc: "Monumental outdoor lotus pedestals, water fountains, and ornamental public art.",
    icon: "🪷",
  },
  {
    title: "Stone Profiles & Detailing",
    desc: "Precision CNC edge profiles, cornices, mouldings, and intricate base capitals.",
    icon: "📐",
  },
  {
    title: "CNC Stone Processing",
    desc: "Sub-millimeter 3D relief routing, jali lattice perforations, and mass production.",
    icon: "⚙️",
  },
];

const honors = [
  {
    title: "Shri Bhandavpur Tirth Trust Felicitation",
    issuer: "Revered Jain Tirth Management Committee",
    desc: "Presented in honor of extraordinary dedication, architectural precision, and sacred artistry in sculpting the temple complex at Bhandavpur, Rajasthan.",
    image: "/images/real/award-bhandavpur-tirth.jpg",
  },
  {
    title: "Sanman Patra & Abhinandan Patra",
    issuer: "Temple Trusts & Cultural Foundations",
    desc: "Formal state and religious citations recognizing Mr. Naresh Bhai Trivedi and Mr. Varun Trivedi for generational excellence in preserving classical Indian stone heritage.",
    image: "/images/real/trust-felicitation-ceremony.jpg",
  },
];

export default function Recognitions() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="recognitions"
      ref={ref}
      className="py-24 md:py-32 bg-stone-100/70 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
            Trust & Heritage Provenance
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl lg:text-6xl font-bold text-stone-900 mt-3 mb-4 tracking-tight">
            Specialisations & Recognitions
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Honored with prestigious mementos and Sanman Patras by revered temple trusts and state dignitaries
            for our enduring devotion to master stonework.
          </p>
          <div className="ornament-divider max-w-xs mx-auto mt-6">
            <span className="text-gold text-lg">◆</span>
          </div>
        </div>

        {/* Real Felicitations Showcase Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Ceremony Photograph */}
          <div
            className={`p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md hover:shadow-xl transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-stone-100">
              <Image
                src="/images/real/trust-felicitation-ceremony.jpg"
                alt="Official felicitation ceremony with temple trust leaders presenting Sanman Patra memento"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-2.5 py-1 bg-gold text-stone-950 text-[11px] font-bold uppercase tracking-wider rounded-md">
                  Official Trust Ceremony
                </span>
                <p className="text-xs sm:text-sm font-medium mt-1.5 text-stone-200">
                  Temple trust committee honoring the Trivedi family master artisans
                </p>
              </div>
            </div>

            <span className="text-gold text-xs font-semibold uppercase tracking-wider block mb-1">
              Sanman Patra Award
            </span>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-stone-900">
              Religious & Architectural Commendation
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mt-2">
              Recognized for high-precision hand carving and classical Jain temple mandapa fabrication.
              Every project is backed by direct artisan accountability and sacred architectural respect.
            </p>
          </div>

          {/* Temple Memento Award */}
          <div
            className={`p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-md hover:shadow-xl transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-stone-100 flex items-center justify-center p-4">
              <Image
                src="/images/real/award-bhandavpur-tirth.jpg"
                alt="Shri Bhandavpur Tirth Trust Memento"
                fill
                className="object-contain p-2"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-2.5 py-1 bg-stone-900/90 text-gold-light text-[11px] font-bold uppercase tracking-wider rounded-md backdrop-blur-md">
                  Authentic Trust Citation
                </span>
              </div>
            </div>

            <span className="text-gold text-xs font-semibold uppercase tracking-wider block mb-1">
              Shri Bhandavpur Tirth
            </span>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-stone-900">
              Pilgrimage Trust Memento of Honor
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mt-2">
              Presented by the trustees of Shri Bhandavpur Jain Tirth in recognition of monumental marble
              carvings, shikhara elements, and flawless project completion.
            </p>
          </div>
        </div>

        {/* 7 Core Specialisations Grid from Brochure */}
        <div>
          <div className="text-center mb-10">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              Brochure Capabilities
            </span>
            <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              Our Core Specialisations
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialisations.map((spec) => (
              <div
                key={spec.title}
                className="p-5 rounded-2xl bg-white border border-stone-200/90 hover:border-gold/40 hover:shadow-md transition-all duration-300"
              >
                <div className="text-2xl mb-3">{spec.icon}</div>
                <h4 className="font-[family-name:var(--font-display)] text-lg font-bold text-stone-900 mb-1.5">
                  {spec.title}
                </h4>
                <p className="text-stone-500 text-xs leading-relaxed">
                  {spec.desc}
                </p>
              </div>
            ))}

            {/* Inquire card */}
            <div className="p-5 rounded-2xl bg-stone-900 text-white flex flex-col justify-between">
              <div>
                <span className="text-gold-light text-xs uppercase tracking-wider font-semibold block mb-2">
                  Custom Orders
                </span>
                <h4 className="font-[family-name:var(--font-display)] text-lg font-bold">
                  Bespoke Requirements?
                </h4>
                <p className="text-stone-400 text-xs mt-1">
                  Send your drawings or CAD files for direct evaluation by Mr. Varun Trivedi.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-4 py-2 px-3 bg-gold hover:bg-gold-light text-stone-950 font-bold text-xs uppercase tracking-wider rounded-lg text-center transition-colors"
              >
                Inquire Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

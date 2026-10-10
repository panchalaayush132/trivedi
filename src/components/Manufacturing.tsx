"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "02", label: "Production Sheds", sub: "Dedicated CNC & Profiling" },
  { value: "11", label: "Double-Head CNC Routers", sub: "Micron-level carving" },
  { value: "03", label: "EOT Overhead Cranes", sub: "Heavy block handling" },
  { value: "24/7", label: "Manufacturing Operations", sub: "Round-the-clock output" },
  { value: "20+", label: "Permanent Core Team", sub: "Engineers & Master Artisans" },
  { value: "125+", label: "Skilled Personnel", sub: "Deployable for mega sites" },
];

const handlingEquipment = [
  {
    name: "Large Block Cutter",
    desc: "Precision cutting and sawing of massive raw stone boulders into uniform structural slabs.",
  },
  {
    name: "Small Block Cutter",
    desc: "Dedicated high-speed cutting for architectural moldings, brackets, and delicate elements.",
  },
  {
    name: "Block Dressing Machine",
    desc: "Splitting, preparing, and squaring monumental natural stone blocks for CNC beds.",
  },
  {
    name: "30-Ton Gantry Crane",
    desc: "Industrial heavy-duty quarry block handling, loading, and safe offloading.",
  },
  {
    name: "2-Ton Industrial Forklift",
    desc: "Rapid internal material logistics and protected transfer of carved masterpieces.",
  },
];

const cncUnits = [
  {
    shed: "Shed 01 — CNC Production",
    items: [
      "4 Double-Head High-Speed CNC Routers",
      "1 Heavy Industrial EOT Overhead Crane",
      "Dedicated Mandir & Jali Lattice Carving Bay",
    ],
  },
  {
    shed: "Shed 02 — CNC & Profile Production",
    items: [
      "7 Double-Head CNC Routers",
      "2 Double-Head Stone Profile Machines",
      "1 Four-Axis Double-Head CNC Machine",
      "2 Heavy Industrial EOT Overhead Cranes",
    ],
  },
];

export default function Manufacturing() {
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
      id="manufacturing"
      ref={ref}
      className="py-24 md:py-32 bg-stone-900 text-white relative overflow-hidden"
    >
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-stone-800/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold-light text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
            Precision at Scale
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4 tracking-tight">
            Manufacturing & Industrial Capability
          </h2>
          <p className="text-stone-300 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Our integrated manufacturing infrastructure in Abu Road, Rajasthan manages the complete
            journey — from quarry block handling to advanced CNC cutting, profiling, and final artisan hand-finishing.
          </p>
          <div className="ornament-divider max-w-xs mx-auto mt-6">
            <span className="text-gold text-lg">◆</span>
          </div>
        </div>

        {/* By The Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`p-6 rounded-2xl bg-stone-800/60 border border-stone-700/60 hover:border-gold/50 transition-all duration-300 text-center ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80 + 100}ms` }}
            >
              <span className="block font-[family-name:var(--font-display)] text-3xl lg:text-4xl font-bold text-gold-light mb-1">
                {s.value}
              </span>
              <span className="block text-xs font-bold uppercase tracking-wider text-white">
                {s.label}
              </span>
              <span className="block text-[11px] text-stone-400 mt-1">
                {s.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Equipment & Facilities Split Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Machine image + Capability highlights */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-stone-700 shadow-2xl relative bg-stone-950">
              <Image
                src="/images/real/manufacturing-block-cutter.jpg"
                alt="Large industrial circular diamond blade stone block cutter in operation"
                width={700}
                height={550}
                className="object-cover w-full h-[400px] md:h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-2.5 py-1 bg-gold text-stone-950 text-xs font-bold uppercase tracking-wider rounded-md inline-block mb-2">
                  Heavy Quarry Infrastructure
                </span>
                <h4 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                  Industrial Diamond Block Sawing
                </h4>
                <p className="text-stone-300 text-xs mt-1">
                  Capable of slicing massive sandstone and Makrana marble blocks with precision.
                </p>
              </div>
            </div>
          </div>

          {/* Infrastructure Breakdown */}
          <div className="lg:col-span-7 space-y-8">
            {/* CNC Production Sheds */}
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-light font-semibold block mb-2">
                01. Modern CNC Operations
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white mb-4">
                Round-the-Clock CNC Infrastructure
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {cncUnits.map((shed) => (
                  <div
                    key={shed.shed}
                    className="p-5 rounded-xl bg-stone-800/80 border border-stone-700 hover:border-gold/40 transition-colors"
                  >
                    <h5 className="font-semibold text-gold-light text-sm mb-3">
                      {shed.shed}
                    </h5>
                    <ul className="space-y-2 text-xs text-stone-300">
                      {shed.items.map((it) => (
                        <li key={it} className="flex items-start gap-2">
                          <span className="text-gold font-bold">✓</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Material Handling */}
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-light font-semibold block mb-2">
                02. Raw Material Handling
              </span>
              <h4 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-3">
                Heavy Quarry Logistics & Slicing
              </h4>
              <div className="space-y-2.5">
                {handlingEquipment.map((eq) => (
                  <div
                    key={eq.name}
                    className="p-3.5 rounded-xl bg-stone-800/40 border border-stone-800 flex items-start gap-3"
                  >
                    <span className="text-gold font-bold mt-0.5">✦</span>
                    <div>
                      <span className="font-semibold text-white text-xs sm:text-sm">
                        {eq.name}:
                      </span>
                      <span className="text-stone-400 text-xs sm:text-sm ml-1.5">
                        {eq.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Closing Capacity Promise */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-stone-800 via-stone-850 to-stone-800 border border-gold/30 text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
              Ready for Monumental Scale & Custom Commissions
            </h4>
            <p className="text-stone-300 text-sm mt-1 max-w-xl">
              From individual sacred murtis and bespoke mandirs to multi-column grand temple complexes,
              our infrastructure guarantees on-time delivery across India.
            </p>
          </div>
          <a
            href="#contact"
            className="px-8 py-4 bg-gold hover:bg-gold-light text-stone-950 font-bold rounded-xl text-sm transition-colors cursor-pointer shrink-0 shadow-lg"
          >
            Inquire Bulk / Project Capacity
          </a>
        </div>
      </div>
    </section>
  );
}

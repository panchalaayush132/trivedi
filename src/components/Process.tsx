"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Consultation & Design",
    description:
      "We collaborate with you to understand your vision — from temple designs to architectural cladding, each project begins with a detailed consultation and custom design.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Material Selection",
    description:
      "We source only the finest Rajasthani sandstone and Makrana marble — each block handpicked for its grain, color, and structural integrity.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Master Carving",
    description:
      "Our artisans bring your design to life through a blend of traditional hand-carving techniques and precision CNC technology for intricate details.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.385 2.693a1 1 0 01-1.45-1.054l1.028-5.996L.58 5.885a1 1 0 01.554-1.705l6.017-.874L9.84.43a1 1 0 011.32 0l2.688 2.876 6.017.874a1 1 0 01.554 1.705l-4.033 4.928 1.028 5.996a1 1 0 01-1.45 1.054L11.42 15.17z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Quality & Delivery",
    description:
      "Every piece undergoes rigorous quality inspection before being carefully packaged and delivered to your location across India.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

export default function Process() {
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
      id="process"
      ref={ref}
      className="py-24 md:py-32 bg-stone-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sand-700/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sand-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold-light text-sm font-semibold uppercase tracking-[0.2em]">
            How We Work
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            From Vision to Reality
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Our process ensures every creation meets the highest standards of
            craftsmanship and artistry.
          </p>
          <div className="ornament-divider max-w-xs mx-auto mt-6">
            <span className="text-gold text-lg">◆</span>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative group transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: visible ? `${i * 150 + 200}ms` : "0ms",
              }}
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-gold/50 to-transparent z-0" />
              )}

              <div className="relative z-10 p-6 rounded-2xl border border-stone-700/50 bg-stone-800/50 backdrop-blur-sm hover:border-gold/30 hover:bg-stone-800/80 transition-all duration-300 h-full">
                {/* Step number */}
                <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-gold/15 absolute top-4 right-4">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-stone-700 to-stone-900 flex items-center justify-center text-gold-light mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-gold/20">
                  {step.icon}
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

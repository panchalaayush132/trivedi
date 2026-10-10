"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const timelineEvents = [
  {
    year: "1937",
    title: "Founding Roots",
    description:
      "Late great-grandfather Shri D. K. Trivedi came to Ambaji, Gujarat with his sons, establishing family roots in stone mining, traditional temple-building, and sacred craftsmanship.",
  },
  {
    year: "1980",
    title: "Second Generation Leadership",
    description:
      "Shri Naresh Bhai Trivedi joined the family business, expanding temple architecture and master craftsmanship across western India.",
  },
  {
    year: "1998-99",
    title: "Independent Milestone",
    description:
      "Independent business journey established in Abu Road, Rajasthan, scaling up high-precision architectural stone operations.",
  },
  {
    year: "2005",
    title: "Next Generation — Varun Trivedi",
    description:
      "Mr. Varun Trivedi joined the enterprise, integrating industrial CNC machinery, modern design methodologies, and large-scale project execution.",
  },
  {
    year: "2025",
    title: "Madhuri Trivedi — Design Dept.",
    description:
      "Ms. Madhuri Trivedi joined the design department, spearheading bespoke contemporary 3D architectural profiles and custom stonework design.",
  },
];

const beliefs = [
  {
    title: "Experience gives us perspective",
    description:
      "Over eight decades and four generations of traditional temple-building provide deep intuition for stone longevity, structural grace, and sacred iconography.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Technology gives us precision",
    description:
      "11 double-head CNC routers, 4-axis profiling machines, and diamond block cutters ensure micron-level accuracy and rapid execution at monumental scale.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Craftsmanship gives our work its character",
    description:
      "Every machine-profiled block receives final hand-tooling and polish from our team of skilled hereditary artisans, imbuing each creation with soul.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.385 2.693a1 1 0 01-1.45-1.054l1.028-5.996L.58 5.885a1 1 0 01.554-1.705l6.017-.874L9.84.43a1 1 0 011.32 0l2.688 2.876 6.017.874a1 1 0 01.554 1.705l-4.033 4.928 1.028 5.996a1 1 0 01-1.45 1.054L11.42 15.17z" />
      </svg>
    ),
  },
];

export default function About() {
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
      id="about"
      ref={ref}
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
            Rooted In Heritage. Built For Today.
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl lg:text-6xl font-bold text-stone-900 mt-3 mb-4 tracking-tight">
            Our Heritage & Story
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            For generations, Trivedi Marble & Handicraft has been shaped by a deep connection
            with natural stone, traditional craftsmanship, and architectural work.
          </p>
          <div className="ornament-divider max-w-xs mx-auto mt-6">
            <span className="text-gold text-lg">◆</span>
          </div>
        </div>

        {/* Story Intro Split Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Imagery from Brochure */}
          <div
            className={`lg:col-span-5 relative transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200 bg-stone-100">
              <Image
                src="/images/real/real-sanctum-entrance.jpg"
                alt="Sanctum entrance with intricate hand-carved marble pillars and brass bell"
                width={700}
                height={550}
                className="object-cover w-full h-[380px] sm:h-[460px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-gold-light font-semibold block mb-1">
                  Artisanal Sacred Craft
                </span>
                <p className="font-[family-name:var(--font-display)] text-xl font-bold">
                  Handcrafted Marble Temple Sanctum
                </p>
                <p className="text-stone-300 text-xs mt-1">
                  Fabricated at our Abu Road workshops in Rajasthan
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-stone-900 text-white p-5 rounded-2xl shadow-xl border border-gold/30">
              <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-gold-light block">
                1937
              </span>
              <span className="text-stone-300 text-[11px] uppercase tracking-wider block">
                4 Generations
              </span>
            </div>
          </div>

          {/* Narrative text */}
          <div
            className={`lg:col-span-7 space-y-5 text-stone-700 text-base leading-relaxed transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
              Carrying Forward Four Generations of Stone Mastery From Abu Road, Rajasthan
            </h3>

            <p>
              Our story began in <strong className="text-stone-900">1937</strong>, when our late
              great-grandfather, <strong className="text-stone-900">Shri D. K. Trivedi</strong>, came to Ambaji,
              Gujarat, with his sons. The family was deeply involved in stone mining, traditional
              temple-building, and sacred craftsmanship.
            </p>

            <p>
              The journey continued through <strong className="text-stone-900">Shri Ravindra Bhai Trivedi</strong>{" "}
              and later <strong className="text-stone-900">Shri Naresh Bhai Trivedi</strong>, who joined the
              family business in 1980 and began his independent business journey in 1998–99 in Abu Road.
            </p>

            <p>
              In 2005, <strong className="text-stone-900">Mr. Varun Trivedi</strong> joined the business, bringing
              industrial CNC automation and modern engineering into the family enterprise. Around 2025,{" "}
              <strong className="text-stone-900">Ms. Madhuri Trivedi</strong> joined the business to lead
              the Design Department.
            </p>

            <p className="text-stone-600 text-sm italic pt-2">
              Today, Trivedi Marble & Handicraft is honored to execute renowned landmark projects including the
              84 Columns at Vrindavan, Shri Bhandavpur Jain Tirth, the prestigious residence of Shri Narendra Bhai Modi,
              Tharad Mota Derasar, and the Omkareshwar Lotus Installation.
            </p>
          </div>
        </div>

        {/* Authentic Timeline Journey */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">
              The Evolution
            </span>
            <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-4xl font-bold text-stone-900 mt-1">
              Our Journey Through the Decades
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {timelineEvents.map((t, i) => (
              <div
                key={t.year}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-200/90 hover:border-gold/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-stone-900 text-gold-light text-xs font-bold mb-3">
                    {t.year}
                  </div>
                  <h4 className="font-[family-name:var(--font-display)] text-lg font-bold text-stone-900 mb-2">
                    {t.title}
                  </h4>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    {t.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-stone-200/60 text-[10px] uppercase tracking-wider text-stone-400 font-semibold">
                  Generation {i === 0 ? "1" : i === 1 ? "2" : i === 2 ? "2-3" : i === 3 ? "3" : "4"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Belief Triad */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 text-white border border-gold/20 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-gold-light text-xs uppercase tracking-widest font-semibold block mb-1">
              Guiding Philosophy
            </span>
            <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
              Our Core Belief
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              Three cornerstones that shape every block of stone we carve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {beliefs.map((b) => (
              <div
                key={b.title}
                className="p-6 rounded-2xl bg-stone-850/60 border border-stone-700/60 hover:border-gold/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-stone-800 border border-gold/20 flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h4 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-2">
                  {b.title}
                </h4>
                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

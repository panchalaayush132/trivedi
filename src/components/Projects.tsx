"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Project {
  title: string;
  category: string;
  location: string;
  description: string;
  highlights: string[];
  image: string;
  scope: string;
}

const landmarkProjects: Project[] = [
  {
    title: "Shri Bhandavpur Jain Tirth",
    category: "Sacred Jain Tirth & Heritage Architecture",
    location: "Bhandavpur, Rajasthan",
    description:
      "Monumental white marble temple mandapa complex featuring classical Shikhara carving, hand-sculpted pillars, and sacred sanctum stonework honoring centuries of Jain sacred art.",
    highlights: [
      "Makrana Pure White Marble",
      "Hand-Carved Mandapa Pillars",
      "Ornate Shikhara & Torana Archways",
      "Heritage Jain Architectural Precision",
    ],
    image: "/images/bhandavpur-tirth.jpg",
    scope: "Sanctum Architecture & Stone Filigree",
  },
  {
    title: "Shri Narendra Bhai Modi House",
    category: "Distinguished Architectural Stonework",
    location: "Gujarat, India",
    description:
      "Exquisite custom sandstone facade and architectural stone carvings for this prestigious residence. Incorporates hand-sculpted jali panels, royal colonnades, and understated Indian heritage motifs.",
    highlights: [
      "Premium Carved Rajasthani Sandstone",
      "Custom Perforated Jali Screens",
      "Hand-Sculpted Entrance Colonnades",
      "Timeless Minimalist Heritage Aesthetic",
    ],
    image: "/images/modi-house.jpg",
    scope: "Facade Cladding, Jali & Stone Pillars",
  },
  {
    title: "Tharad Mota Derasar",
    category: "Historic Jain Temple Marble Carving",
    location: "Tharad, Gujarat",
    description:
      "Comprehensive stone carving and temple preservation for the revered Mota Derasar. Features intricate celestial apsara carvings, vaulted marble domes, and divine fluted columns.",
    highlights: [
      "Pure Marble Carved Vaulted Domes",
      "Hand-Chiseled Celestial Apsara Reliefs",
      "Intricate Torana Gateway Carving",
      "Historic Renovation & Structural Artistry",
    ],
    image: "/images/tharad-derasar.jpg",
    scope: "Interior Sanctum & Pillar Sculptures",
  },
];

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

  // Lock background scrolling and handle Escape key when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedProject(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedProject]);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 md:py-32 bg-stone-50 relative overflow-hidden"
    >
      {/* Subtle architectural background texture */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
            Landmark Commissions
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl lg:text-6xl font-bold text-stone-900 mt-3 mb-4 tracking-tight">
            Our Renowned Projects
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Honored to sculpt sacred tirths, grand temples, and prestigious residences
            with uncompromised precision and generational craftsmanship.
          </p>
          <div className="ornament-divider max-w-xs mx-auto mt-6">
            <span className="text-gold text-lg">◆</span>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {landmarkProjects.map((project, i) => (
            <div
              key={project.title}
              className={`group flex flex-col rounded-2xl bg-white border border-stone-200/90 hover:border-gold/40 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: visible ? `${i * 150 + 150}ms` : "0ms",
              }}
            >
              {/* Project Image */}
              <div className="relative h-72 md:h-80 w-full overflow-hidden bg-stone-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

                {/* Scope pill */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900/80 backdrop-blur-md rounded-full border border-white/10">
                    {project.scope}
                  </span>
                </div>

                {/* Location indicator */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1.5 font-medium tracking-wide">
                    <svg
                      className="w-4 h-4 text-gold-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {project.location}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-gold text-xs font-semibold uppercase tracking-wider block mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-stone-900 group-hover:text-stone-800 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mt-3 mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-4 border-t border-stone-100 mb-6">
                    {project.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-start gap-2 text-xs text-stone-600 font-medium"
                      >
                        <span className="text-gold font-bold mt-0.5">✦</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer action */}
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold text-stone-800 bg-stone-100 hover:bg-stone-900 hover:text-gold-light transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold"
                  >
                    View Project Details
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Commission Banner */}
        <div
          className={`mt-16 p-8 md:p-10 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white border border-gold/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <span className="text-gold-light text-xs uppercase tracking-widest font-semibold block mb-1">
              Have a Temple or Architectural Commission?
            </span>
            <h4 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white">
              Consult with Master Craftsman Mr. Varun Trivedi
            </h4>
            <p className="text-stone-300 text-sm mt-1 max-w-xl">
              From conception and structural stone selection to intricate hand carving and pan-India installation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+919829118822"
              className="px-6 py-3.5 bg-stone-800 border border-gold/40 text-gold-light text-sm font-semibold rounded-xl hover:bg-stone-700 transition-colors flex items-center gap-2 cursor-pointer shadow-md"
            >
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 98291 18822
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 bg-gold hover:bg-gold-dark text-stone-950 text-sm font-bold rounded-xl transition-colors cursor-pointer shadow-md"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>

      {/* Modal for detail view - Perfectly responsive, scrollable & never clipped */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden my-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header (compact & proportional so text is immediately visible) */}
            <div className="relative h-48 sm:h-56 md:h-64 w-full shrink-0 bg-stone-100">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

              {/* Close Button - Sticky & High Contrast */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-stone-900/85 hover:bg-stone-950 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 border border-white/20"
              >
                ✕
              </button>

              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-stone-900/80 backdrop-blur-md rounded-md text-white text-xs font-medium">
                  📍 {selectedProject.location}
                </span>
                <span className="px-2.5 py-1 bg-gold/90 backdrop-blur-md rounded-md text-stone-950 text-xs font-bold">
                  {selectedProject.scope}
                </span>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-5 sm:p-7 md:p-8 overflow-y-auto flex-grow space-y-5">
              <div>
                <span className="text-gold text-xs font-semibold uppercase tracking-wider block mb-1">
                  {selectedProject.category}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-stone-900">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {selectedProject.description}
              </p>

              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                  <span className="text-gold">✦</span>
                  Craftsmanship & Architecture Specifications
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {selectedProject.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 bg-stone-50 p-3 rounded-xl border border-stone-200/90"
                    >
                      <span className="text-gold font-bold">✓</span>
                      <span className="font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Sticky Footer - Always Visible & Never Cut Off */}
            <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="text-xs text-stone-500">
                Crafted by <strong className="text-stone-800">Trivedi Marble & Handicraft</strong>
                <span className="hidden sm:inline text-stone-400"> (Sirohi, Raj.)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href="tel:+919829118822"
                  className="px-4 py-2.5 bg-white border border-stone-300 hover:border-gold text-stone-800 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>📞 Call Artisan</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-gold-light text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors shadow-sm"
                >
                  Inquire For Similar Work →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

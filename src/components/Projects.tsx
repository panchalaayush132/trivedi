"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Project {
  title: string;
  category: "Temples & Tirths" | "State & Public Landmarks" | "Bespoke Residences" | "Sacred Installations";
  location: string;
  description: string;
  highlights: string[];
  image: string;
  scope: string;
  honorBadge?: string;
}

const landmarkProjects: Project[] = [
  {
    title: "84 Columns — Vrindavan",
    category: "State & Public Landmarks",
    location: "Vrindavan, Uttar Pradesh",
    description:
      "Manufacturing and detailed stonework for 84 monumental architectural sandstone columns along the sacred Vrindavan corridor. Featuring hand-sculpted Kamdhenu sacred cow capitals, Raadhe Raadhe calligraphy, and illuminated heritage colonnades inspected and inaugurated with state honors by UP Chief Minister Yogi Adityanath.",
    highlights: [
      "84 Monumental Sandstone Columns",
      "Hand-Sculpted Kamdhenu Cow Capitals",
      "Traditional Raadhe Calligraphy Engravings",
      "Inaugurated by UP CM Yogi Adityanath",
    ],
    image: "/images/real/vrindavan-columns-lit.jpg",
    scope: "84 Sandstone Columns & Sculptures",
    honorBadge: "State Honor Inauguration",
  },
  {
    title: "Shri Bhandavpur Jain Tirth",
    category: "Temples & Tirths",
    location: "Bhandavpur, Rajasthan",
    description:
      "Specialised stonework and intricate architectural detailing for the renowned Jain Pilgrimage Complex. Crafted from Makrana pure white marble with classical Shikhara carvings, mandapa pillars, and celestial iconography honoring centuries of sacred Jain art.",
    highlights: [
      "Makrana Pure White Marble",
      "Hand-Carved Mandapa Pillars",
      "Ornate Shikhara & Torana Archways",
      "Sanman Patra Awarded by Temple Trust",
    ],
    image: "/images/bhandavpur-tirth.jpg",
    scope: "Sanctum Architecture & Stone Filigree",
    honorBadge: "Trust Sanman Patra Awarded",
  },
  {
    title: "Shri Narendra Bhai Modi House",
    category: "Bespoke Residences",
    location: "Gujarat, India",
    description:
      "Exquisite custom sandstone facade and architectural stonework for this prestigious residence. Incorporates hand-sculpted perforated jali panels, royal colonnades, and understated Indian heritage motifs with refined minimalist precision.",
    highlights: [
      "Premium Carved Rajasthani Sandstone",
      "Custom Perforated Jali Screens",
      "Hand-Sculpted Entrance Colonnades",
      "Timeless Minimalist Heritage Aesthetic",
    ],
    image: "/images/modi-house.jpg",
    scope: "Facade Cladding, Jali & Stone Pillars",
    honorBadge: "Prestigious Commission",
  },
  {
    title: "Tharad Mota Derasar",
    category: "Temples & Tirths",
    location: "Tharad, Gujarat",
    description:
      "Comprehensive stone carving and sacred temple preservation for the revered Mota Derasar. Features intricate celestial apsara carvings, vaulted marble domes, and divine fluted columns in pure Makrana marble.",
    highlights: [
      "Pure Marble Carved Vaulted Domes",
      "Hand-Chiseled Celestial Apsara Reliefs",
      "Intricate Torana Gateway Carving",
      "Historic Renovation & Structural Artistry",
    ],
    image: "/images/tharad-derasar.jpg",
    scope: "Interior Sanctum & Pillar Sculptures",
    honorBadge: "Heritage Derasar Restoration",
  },
  {
    title: "Omkareshwar Lotus Installation",
    category: "Sacred Installations",
    location: "Omkareshwar, Madhya Pradesh",
    description:
      "Precision-crafted monumental stone components for the distinctive sacred Lotus Installation at Omkareshwar. Giant sculpted white stone lotus petals carved with micron precision and assembled to support holy pilgrimage iconography.",
    highlights: [
      "Monumental Sacred Lotus Petals",
      "Precision CNC Profiling & Hand Polish",
      "High-Load Structural Stone Engineering",
      "Pilgrimage Site Centerpiece",
    ],
    image: "/images/real/project-omkareshwar-lotus.jpg",
    scope: "Precision-Crafted Lotus Components",
    honorBadge: "Landmark Holy Installation",
  },
  {
    title: "Jamea — Saki Naka, Mumbai",
    category: "Bespoke Residences",
    location: "Mumbai, Maharashtra",
    description:
      "Custom architectural stonework and grand facade elements executed for the prestigious Jamea Project in Mumbai. Blending contemporary architectural grandeur with bespoke textured natural stone cladding and arches.",
    highlights: [
      "Grand Architectural Arched Windows",
      "Custom Exterior Stone Cladding",
      "Bespoke Fluted Stone Pilasters",
      "Precision Engineered Weatherproof Joints",
    ],
    image: "/images/real/project-jamea-mumbai.jpg",
    scope: "Facade Architecture & Stonework",
  },
  {
    title: "Sidhpur Gate & Karban Mataji Mandir",
    category: "Temples & Tirths",
    location: "Sidhpur & Rajasthan",
    description:
      "Custom-designed and precision-crafted stone entrance gates showcasing detailed architectural craftsmanship, carved toranas, and complete sanctum stonework for the Karban Mataji Mandir project.",
    highlights: [
      "Classical Carved Torana Gateways",
      "High-Relief Elephant & Kalash Pillars",
      "Weather-Resistant Rajasthani Sandstone",
      "Traditional Indian Gate Architecture",
    ],
    image: "/images/real/project-sidhpur-gate.jpg",
    scope: "Monumental Gateways & Sanctum",
  },
];

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const categories = ["All", "State & Public Landmarks", "Temples & Tirths", "Bespoke Residences", "Sacred Installations"];

  const filteredProjects =
    activeFilter === "All"
      ? landmarkProjects
      : landmarkProjects.filter((p) => p.category === activeFilter);

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
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
            Crafted For Landmarks. Created For Details.
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl lg:text-6xl font-bold text-stone-900 mt-3 mb-4 tracking-tight">
            Our Landmark Projects
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Honored to manufacture and carve sacred pilgrimage tirths, state monuments, and prestigious
            architectural residences with uncompromised precision and generational craftsmanship.
          </p>
          <div className="ornament-divider max-w-xs mx-auto mt-6">
            <span className="text-gold text-lg">◆</span>
          </div>

          {/* Minimalist Filter Tabs */}
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

        {/* Projects Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, i) => (
            <div
              key={project.title}
              className={`group flex flex-col rounded-2xl bg-white border border-stone-200/90 hover:border-gold/40 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: visible ? `${(i % 3) * 120 + 100}ms` : "0ms",
              }}
            >
              {/* Project Image */}
              <div className="relative h-64 md:h-72 w-full overflow-hidden bg-stone-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />

                {/* Scope pill */}
                <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 items-start">
                  <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white bg-stone-900/85 backdrop-blur-md rounded-full border border-white/10">
                    {project.scope}
                  </span>
                  {project.honorBadge && (
                    <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-stone-950 bg-gold-light/95 backdrop-blur-md rounded-full shadow-sm">
                      ★ {project.honorBadge}
                    </span>
                  )}
                </div>

                {/* Location indicator */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
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
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-gold text-[11px] font-semibold uppercase tracking-wider block mb-1.5">
                    {project.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-stone-900 group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-2.5 mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-stone-100 mb-5">
                    {project.highlights.slice(0, 3).map((h) => (
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

                {/* Action button */}
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
              Have a Landmark Temple or Architectural Commission?
            </span>
            <h4 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white">
              Consult Directly with Mr. Varun Naresh Trivedi
            </h4>
            <p className="text-stone-300 text-sm mt-1 max-w-xl">
              From CAD design and quarry stone selection to high-precision CNC profiling and pan-India installation.
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
            {/* Modal Image Header */}
            <div className="relative h-48 sm:h-56 md:h-64 w-full shrink-0 bg-stone-100">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-stone-900/85 hover:bg-stone-950 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 border border-white/20"
              >
                ✕
              </button>

              <div className="absolute bottom-3 left-4 flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 bg-stone-900/80 backdrop-blur-md rounded-md text-white text-xs font-medium">
                  📍 {projectLocationClean(selectedProject.location)}
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

            {/* Modal Sticky Footer */}
            <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="text-xs text-stone-500">
                Executed by <strong className="text-stone-800">Trivedi Marble & Handicraft</strong>
                <span className="hidden sm:inline text-stone-400"> (Abu Road, Rajasthan)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href="tel:+919829118822"
                  className="px-4 py-2.5 bg-white border border-stone-300 hover:border-gold text-stone-800 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>📞 Call: +91 98291 18822</span>
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

function projectLocationClean(loc: string) {
  return loc;
}

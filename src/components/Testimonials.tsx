"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Trivedi Marble created a stunning marble temple for our family puja room. The intricate carvings and attention to detail exceeded all expectations. A true masterpiece.",
    name: "Rajesh Sharma",
    role: "Homeowner, Jaipur",
    initials: "RS",
  },
  {
    quote:
      "We commissioned sandstone cladding for our hotel facade. The quality of stone and craftsmanship was exceptional — our guests always comment on the beautiful exterior.",
    name: "Priya Mehta",
    role: "Hotel Owner, Udaipur",
    initials: "PM",
  },
  {
    quote:
      "The marble jali work they did for our heritage restoration project was outstanding. They understood the traditional patterns perfectly and delivered on time.",
    name: "Arjun Singh",
    role: "Architect, Ahmedabad",
    initials: "AS",
  },
];

export default function Testimonials() {
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
      ref={ref}
      className="py-24 md:py-32 bg-stone-50 relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
            Testimonials
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-stone-900 mt-3 mb-4">
            Words from Our Clients
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">
            Trusted by homeowners, architects, and businesses across India for
            our commitment to quality and artistry.
          </p>
          <div className="ornament-divider max-w-xs mx-auto mt-6">
            <span className="text-gold text-lg">◆</span>
          </div>
        </div>

        {/* Testimonial Cards — UUPM: Social Proof pattern, muted bg, italic quotes */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`p-8 rounded-2xl bg-white border border-stone-200 hover:border-gold/30 hover:shadow-xl transition-all duration-300 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: visible ? `${i * 100 + 200}ms` : "0ms",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, si) => (
                  <svg
                    key={si}
                    className="w-5 h-5 text-gold-light"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote — UUPM: italic, muted color */}
              <blockquote className="text-stone-600 italic leading-relaxed mb-6 text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-stone-800 to-stone-600 flex items-center justify-center text-gold-light text-sm font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-stone-800 text-sm">
                    {t.name}
                  </p>
                  <p className="text-stone-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

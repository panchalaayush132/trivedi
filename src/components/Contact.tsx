"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold text-xs md:text-sm font-semibold uppercase tracking-[0.25em]">
            Direct Connection
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-stone-900 mt-3 mb-4">
            Connect With Our Master Artisans
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Planning a temple carving, custom jali screens, architectural stone cladding,
            or an exclusive landmark commission? Contact us directly.
          </p>
          <div className="ornament-divider max-w-xs mx-auto mt-6">
            <span className="text-gold text-lg">◆</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Column */}
          <div
            className={`lg:col-span-5 space-y-6 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Contact Person Card */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gold block mb-1">
                Direct Leadership
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-stone-900">
                Mr. Varun Naresh Trivedi
              </h3>
              <p className="text-stone-500 text-sm mt-0.5">
                CEO & Managing Director — Trivedi Marble & Handicraft
              </p>
            </div>

            {/* Direct Phone Numbers */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-stone-900 text-gold-light flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-stone-900 text-sm uppercase tracking-wide">
                  Mobile & WhatsApp
                </h4>
              </div>

              <div className="space-y-3 pl-12">
                <div>
                  <a
                    href="tel:+919829118822"
                    className="text-stone-900 font-bold text-lg hover:text-gold transition-colors inline-flex items-center gap-2"
                  >
                    +91-9829118822
                    <span className="text-xs font-normal text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Primary / WhatsApp
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="tel:+919414152344"
                    className="text-stone-700 font-medium text-base hover:text-gold transition-colors inline-flex items-center gap-2"
                  >
                    +91-9414152344
                    <span className="text-xs font-normal text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                      Direct Line
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-stone-900 text-gold-light flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h4 className="font-semibold text-stone-900 text-sm uppercase tracking-wide">
                  Official Email
                </h4>
              </div>
              <div className="pl-12">
                <a
                  href="mailto:varun_tmh@yahoo.com"
                  className="text-stone-900 font-bold text-base hover:text-gold transition-colors block"
                >
                  varun_tmh@yahoo.com
                </a>
                <span className="text-xs text-stone-500 block mt-1">
                  Send architectural blueprints, CAD designs, or quotation inquiries
                </span>
              </div>
            </div>

            {/* Workshop & Location */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-stone-900 text-gold-light flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-stone-900 text-sm uppercase tracking-wide">
                  Workshop & Studio
                </h4>
              </div>
              <address className="not-italic text-stone-600 text-sm leading-relaxed pl-12">
                Ambaji Road, Post Siyava, Abu Road,<br />
                Sirohi, Rajasthan — 307026, India
              </address>
            </div>

            {/* Instant WhatsApp Action */}
            <a
              href="https://wa.me/919829118822?text=Hello%20Mr.%20Varun%20Trivedi%2C%20I%20would%20like%20to%20inquire%20about%20marble%20and%20stone%20carving%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-3 transition-colors shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Chat on WhatsApp Directly
            </a>
          </div>

          {/* Inquiry Form Column */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="p-8 md:p-10 rounded-2xl bg-stone-50 border border-stone-200">
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-stone-900 mb-2">
                Request a Project Consultation
              </h3>
              <p className="text-stone-500 text-sm mb-8">
                Fill out the details below and Mr. Varun Trivedi will personally review
                your architectural requirements.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-white border border-emerald-300 text-center animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">
                    Inquiry Received Successfully
                  </h4>
                  <p className="text-stone-600 text-sm mb-4">
                    Thank you. We have recorded your project request. You can also contact us immediately at{" "}
                    <a href="tel:+919829118822" className="text-gold font-bold">
                      +91-9829118822
                    </a>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-stone-700 underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="e.g. Rajesh Patel"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="product" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                        Category of Interest *
                      </label>
                      <select
                        id="product"
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-800 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm transition-all"
                      >
                        <option value="" disabled>
                          Select product / project type
                        </option>
                        <option>Marble Carving</option>
                        <option>Stone Cladding</option>
                        <option>Designer Marble Temple</option>
                        <option>Marble Temple Carving</option>
                        <option>Marble Jali Carving Design</option>
                        <option>Marble Tulsi Pot</option>
                        <option>Sandstone Carving</option>
                        <option>CNC Marble Carving Work</option>
                        <option>Landmark Temple Commission</option>
                        <option>Custom Architectural Project</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                      Project Requirements & Dimensions
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Specify your marble type (Makrana white, Rajasthani sandstone), dimensions, location of site..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-stone-900 text-gold-light font-semibold text-sm uppercase tracking-wider rounded-xl hover:bg-stone-800 transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer"
                  >
                    Submit Quotation Request
                  </button>

                  <p className="text-center text-stone-400 text-xs">
                    Direct callback guarantee from Mr. Varun Trivedi (+91-9829118822)
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

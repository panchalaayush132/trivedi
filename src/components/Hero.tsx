import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image — UUPM: next/image with sizes for performance */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Intricately carved marble jali panel with golden sunlight streaming through perforations"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/70 to-stone-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-36">
        <div className="max-w-3xl">
          {/* Authentic Legacy Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold-light animate-pulse" />
            <span className="text-stone-200 text-xs md:text-sm font-medium tracking-wider uppercase">
              Since 1937 • Four Generations of Architectural Stonework
            </span>
          </div>

          {/* Slogan from Official Brochure */}
          <h1 className="animate-fade-in-up delay-100 font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.03] mb-6 tracking-tight">
            Shaping Stone. <br />
            Carrying Forward <br className="hidden sm:block" />
            <span className="text-shimmer">A Legacy.</span>
          </h1>

          {/* Subtitle from Official Brochure */}
          <p className="animate-fade-in-up delay-200 text-base sm:text-lg md:text-xl text-stone-300 leading-relaxed mb-4 font-light max-w-2xl">
            Natural Stone • CNC Precision • Architectural Craftsmanship
          </p>
          <p className="animate-fade-in-up delay-200 text-sm md:text-base text-stone-400 leading-relaxed mb-10 font-light max-w-2xl">
            From Abu Road, Rajasthan — combining generational temple-building mastery with modern
            industrial CNC infrastructure to create sacred landmarks and prestigious architectural stonework across India.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gold hover:bg-gold-light text-stone-950 font-bold rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <span>Explore Landmark Projects</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#manufacturing"
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/60 transition-all duration-200 backdrop-blur-sm cursor-pointer"
            >
              Our Infrastructure
            </a>
            <a
              href="tel:+919829118822"
              className="px-6 py-4 bg-stone-900/80 hover:bg-stone-900 border border-gold/40 text-gold-light font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm cursor-pointer flex items-center gap-2"
            >
              <span>📞 +91-9829118822</span>
            </a>
          </div>

          {/* Quick Metrics Bar from Official Brochure */}
          <div className="animate-fade-in-up delay-400 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15">
            <div>
              <span className="block font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
                1937
              </span>
              <span className="block text-xs uppercase tracking-wider text-stone-400 mt-0.5">
                Legacy Founded
              </span>
            </div>
            <div>
              <span className="block font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-gold-light">
                11
              </span>
              <span className="block text-xs uppercase tracking-wider text-stone-400 mt-0.5">
                Double-Head CNCs
              </span>
            </div>
            <div>
              <span className="block font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
                02
              </span>
              <span className="block text-xs uppercase tracking-wider text-stone-400 mt-0.5">
                Production Sheds
              </span>
            </div>
            <div>
              <span className="block font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-gold-light">
                24 / 7
              </span>
              <span className="block text-xs uppercase tracking-wider text-stone-400 mt-0.5">
                Operations
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in delay-700">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

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
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-900/60 to-stone-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-0">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold-light animate-pulse" />
            <span className="text-stone-200 text-sm font-medium tracking-wide">
              Crafting Excellence Since 1949
            </span>
          </div>

          {/* Heading — UUPM: Cormorant serif, luxury feel */}
          <h1 className="animate-fade-in-up delay-100 font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6">
            Timeless Artistry{" "}
            <br className="hidden sm:block" />
            in <span className="text-shimmer">Stone & Marble</span>
          </h1>

          {/* Description — UUPM: Montserrat body, muted foreground */}
          <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-stone-300 leading-relaxed mb-10 max-w-xl font-light">
            From the heart of Rajasthan, we bring generations of master craftsmanship
            — transforming raw stone into extraordinary works of art that endure for centuries.
          </p>

          {/* CTA Buttons — UUPM: Premium dark + gold, cursor-pointer, focus-visible */}
          <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
            <a
              href="#products"
              className="group px-8 py-4 bg-stone-900 text-gold-light font-semibold rounded-xl hover:bg-stone-800 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Explore Our Work
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-200 backdrop-blur-sm cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in delay-700">
        {/* <span className="text-white/50 text-xs font-[family-name:var(--font-body)] uppercase tracking-[0.2em]">
          Scroll
          </span> */}

        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

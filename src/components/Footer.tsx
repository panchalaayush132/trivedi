import Link from "next/link";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Creations" },
  { href: "#projects", label: "Landmark Projects" },
  { href: "#process", label: "Our Process" },
  { href: "#contact", label: "Contact" },
];

const products = [
  "Marble Carving",
  "Stone Cladding",
  "Designer Marble Temple",
  "Marble Temple Carving",
  "Marble Jali Carving Design",
  "Marble Tulsi Pot",
  "Sandstone Carving",
  "CNC Marble Carving Work",
];

const landmarkProjects = [
  "Shri Bhandavpur Jain Tirth",
  "Shri Narendra Bhai Modi House",
  "Tharad Mota Derasar",
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-stone-900 border border-gold/30 flex items-center justify-center shadow-md">
                <span className="text-gold-light font-[family-name:var(--font-display)] text-xl font-bold">
                  T
                </span>
              </div>
              <div>
                <span className="font-[family-name:var(--font-display)] text-xl font-bold text-white tracking-wide">
                  Trivedi Marble
                </span>
                <span className="block text-[10px] uppercase tracking-[0.22em] text-gold font-medium">
                  & Handicraft • Est. 1949
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Sirohi, Rajasthan&apos;s celebrated stone atelier. Handcrafting sacred
              Jain tirths, ornate temples, and prestigious residences across India with
              four generations of devotion and skill.
            </p>

            <div className="pt-2 space-y-2 text-sm text-stone-300">
              <p className="flex items-center gap-2">
                <span className="text-gold">📱</span>
                <a href="tel:+919829118822" className="hover:text-gold transition-colors font-semibold">
                  +91-9829118822
                </a>
                <span className="text-stone-600">|</span>
                <a href="tel:+919414152344" className="hover:text-gold transition-colors">
                  +91-9414152344
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gold">✉️</span>
                <a href="mailto:varun_tmh@yahoo.com" className="hover:text-gold transition-colors">
                  varun_tmh@yahoo.com
                </a>
              </p>
              <p className="text-xs text-stone-500 pt-1">
                Leader: Mr. Varun Naresh Trivedi
              </p>
            </div>
          </div>

          {/* Landmark Projects (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-wider mb-4 text-gold-light">
              Landmark Projects
            </h4>
            <ul className="space-y-2.5">
              {landmarkProjects.map((proj) => (
                <li key={proj}>
                  <a
                    href="#projects"
                    className="text-stone-400 hover:text-white transition-colors duration-200 text-sm block"
                  >
                    ✦ {proj}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-wider mt-8 mb-3 text-gold-light">
              Navigation
            </h4>
            <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-stone-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Creations List (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-wider mb-4 text-gold-light">
              Stone & Marble Work
            </h4>
            <ul className="space-y-2">
              {products.map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-stone-400 hover:text-gold transition-colors duration-200 text-xs block"
                  >
                    • {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Workshop Address (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-[family-name:var(--font-display)] text-base font-bold uppercase tracking-wider mb-4 text-gold-light">
              Workshop
            </h4>
            <address className="not-italic text-stone-400 text-xs leading-relaxed space-y-1 mb-4">
              <p>Ambaji Road, Post Siyava,</p>
              <p>Abu Road, Sirohi,</p>
              <p>Rajasthan — 307026</p>
              <p>India</p>
            </address>

            <a
              href="https://wa.me/919829118822"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium"
            >
              <span>WhatsApp Us Directly →</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-850 bg-stone-950">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Trivedi Marble & Handicraft. All rights reserved.
          </p>
          <p>
            Artisanal Stonework & Marble Carvings • Sirohi, Rajasthan 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}

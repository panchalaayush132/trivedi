"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Creations" },
  { href: "#projects", label: "Landmark Projects" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-gold rounded"
        >
          <div className="w-10 h-10 rounded-lg bg-stone-900 border border-gold/30 flex items-center justify-center shadow-md">
            <span className="text-gold-light font-[family-name:var(--font-display)] text-xl font-bold">
              T
            </span>
          </div>
          <div>
            <span
              className={`font-[family-name:var(--font-display)] text-lg md:text-xl font-bold tracking-wide transition-colors duration-300 block leading-tight ${
                scrolled ? "text-stone-900" : "text-white"
              }`}
            >
              Trivedi Marble
            </span>
            <span
              className={`block text-[10px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${
                scrolled ? "text-gold" : "text-gold-light"
              }`}
            >
              & Handicraft • Est. 1949
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold tracking-wider uppercase transition-colors duration-200 hover:text-gold ${
                scrolled ? "text-stone-700" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Direct Phone button */}
          <a
            href="tel:+919829118822"
            className="flex items-center gap-2 text-xs font-semibold tracking-wide text-stone-700 hover:text-gold transition-colors"
          >
            <span className={`w-2 h-2 rounded-full ${scrolled ? "bg-emerald-600" : "bg-emerald-400"} animate-pulse`} />
            <span className={scrolled ? "text-stone-800" : "text-white"}>
              +91-9829118822
            </span>
          </a>

          <a
            href="#contact"
            className="px-5 py-2.5 bg-stone-900 text-gold-light text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-stone-800 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Inquire Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+919829118822"
            className={`text-xs font-bold px-3 py-1.5 rounded-lg border ${
              scrolled
                ? "border-stone-300 text-stone-900"
                : "border-white/30 text-white"
            }`}
          >
            Call Now
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col items-center justify-center gap-1.5 cursor-pointer w-10 h-10 rounded-lg"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileOpen
                  ? "rotate-45 translate-y-2 bg-stone-900"
                  : scrolled
                  ? "bg-stone-900"
                  : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileOpen
                  ? "opacity-0"
                  : scrolled
                  ? "bg-stone-900"
                  : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                mobileOpen
                  ? "-rotate-45 -translate-y-2 bg-stone-900"
                  : scrolled
                  ? "bg-stone-900"
                  : "bg-white"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="lg:hidden animate-slide-down bg-white border-t border-stone-200 shadow-xl">
          <nav className="flex flex-col px-6 py-5 gap-1 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-stone-800 font-medium py-3 px-3 rounded-lg hover:bg-stone-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-stone-200 flex flex-col gap-2">
              <a
                href="tel:+919829118822"
                className="py-3 px-4 bg-stone-100 text-stone-900 font-semibold rounded-lg text-center text-xs uppercase tracking-wider"
              >
                📞 Call: +91-9829118822 / +91-9414152344
              </a>
              <a
                href="mailto:varun_tmh@yahoo.com"
                className="py-2 px-4 text-stone-600 text-center text-xs"
              >
                ✉️ varun_tmh@yahoo.com
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="py-3 px-5 bg-stone-900 text-gold-light font-semibold rounded-lg text-center text-xs uppercase tracking-wider"
              >
                Request Quotation
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

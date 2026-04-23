"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/i18n";

export function Navigation() {
  const { lang, toggleLang } = useLanguage();
  const t = content[lang];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#skills", label: t.nav.skills },
    { href: "#agents", label: t.nav.agents },
    { href: "#workflows", label: t.nav.workflows },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/90 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src="/logo.png" alt="orqestral" className="h-7 object-contain" />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={toggleLang}
                className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-wider"
              >
                {t.footer.switchTo}
              </button>
            </li>
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex h-9 px-4 items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
            >
              {t.nav.cta}
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-zinc-400 hover:text-zinc-100"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-zinc-950 md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between">
                <img src="/logo.png" alt="orqestral" className="h-7 object-contain" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-zinc-400 hover:text-zinc-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-6 mt-16">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl text-zinc-300 hover:text-zinc-100 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={toggleLang}
                  className="text-left text-lg text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-wider mt-4"
                >
                  {t.footer.switchTo}
                </button>
              </nav>
              <div className="mt-auto">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full h-12 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg text-center leading-[48px]"
                >
                  {t.nav.cta}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

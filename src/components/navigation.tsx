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
    { href: "#services", label: t.nav.services },
    { href: "#who", label: t.nav.about },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/logo.png"
              alt="Orqestral"
              className="h-8 object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm text-zinc-400 hover:text-zinc-100 transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-indigo-500 group-hover:w-full group-hover:left-0 transition-all duration-200" />
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={toggleLang}
                className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-widest font-mono"
              >
                {t.nav.switchTo}
              </button>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-3 text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-zinc-900 md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between">
                <img
                  src="/logo.png"
                  alt="Orqestral"
                  className="h-8 object-contain"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-3 text-zinc-400 hover:text-zinc-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-6 mt-16">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-2xl text-zinc-300 hover:text-zinc-100 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.button
                  onClick={toggleLang}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="text-left text-lg text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-widest mt-4 font-mono"
                >
                  {t.nav.switchTo}
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
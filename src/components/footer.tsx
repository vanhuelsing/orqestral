"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/i18n";

export function Footer() {
  const { lang, toggleLang } = useLanguage();
  const t = content[lang];

  return (
    <footer className="py-12 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <span className="font-mono text-lg font-semibold tracking-tight">
              <span className="text-indigo-500">Orches</span>
              <span className="text-zinc-100">tral</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a
              href="#"
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {t.footer.impressum}
            </a>
            <a
              href="#"
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {t.footer.privacy}
            </a>
            <button
              onClick={toggleLang}
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-wider"
            >
              {t.footer.switchTo}
            </button>
          </nav>

          {/* Rights */}
          <p className="text-sm text-zinc-600">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

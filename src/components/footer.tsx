"use client";

import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/i18n";

export function Footer() {
  const { lang, toggleLang } = useLanguage();
  const t = content[lang];

  return (
    <footer className="py-12 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + Address */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="/logo.png"
              alt="Orqestral"
              className="h-6 object-contain brightness-0 invert"
            />
            <p className="text-sm text-zinc-500">{t.footer.address}</p>
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
              {t.footer.datenschutz}
            </a>
            <a
              href="mailto:hello@orqestral.ai"
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {t.footer.contact}
            </a>
            <button
              onClick={toggleLang}
              className="text-sm text-zinc-600 hover:text-zinc-400 transition-colors uppercase tracking-widest font-mono"
            >
              {t.nav.switchTo}
            </button>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-zinc-900 text-center">
          <p className="text-sm text-zinc-600">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
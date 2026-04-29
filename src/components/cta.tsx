"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/i18n";

export function CTA() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-zinc-900 border border-zinc-800 p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Subtle background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(99, 102, 241, 0.1), transparent)",
            }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-50 mb-4 tracking-tight leading-[1.1]">
              {t.cta.title}
            </h2>
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-zinc-50 mb-12 tracking-tight leading-[1.1]">
              {t.cta.titleLine2}
            </p>
            <a
              href="mailto:hello@orqestral.ai"
              className="inline-flex items-center justify-center h-14 px-10 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/25"
            >
              {t.cta.cta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
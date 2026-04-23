"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-zinc-900 border border-zinc-800 p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-indigo-600/5" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100 mb-4 tracking-tight">
              {t.cta.title}
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
              {t.cta.subtitle}
            </p>
            <a
              href="mailto:hello@orqestral.ai"
              className="group inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 shadow-lg shadow-indigo-500/25"
            >
              {t.cta.button}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

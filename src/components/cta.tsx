"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/i18n";

export function CTA() {
  const { lang } = useLanguage();
  const t = content[lang];
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Warm accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 30% 50%, rgba(212, 196, 176, 0.06), transparent)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-50 leading-[1.2] tracking-tight mb-4"
        >
          {t.cta.headline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-warm-taupe leading-[1.2] tracking-tight mb-10"
        >
          {t.cta.headlineEmphasis}
        </motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-zinc-400 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          {t.cta.subheadline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <a
            href="mailto:hello@orqestral.ai"
            className="inline-flex items-center justify-center h-14 px-10 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium text-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/25"
          >
            {t.cta.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
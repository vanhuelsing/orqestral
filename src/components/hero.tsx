"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/i18n";

export function Hero() {
  const { lang } = useLanguage();
  const t = content[lang];
  const prefersReducedMotion = useReducedMotion();

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.15 },
    },
  };

  const item = {
    hidden: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Ambient background glow — warmer, quieter */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(129, 140, 248, 0.10), transparent)",
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Headline */}
        <motion.h1 variants={item} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-50 leading-[1.1] mb-4">
          {t.hero.headline}
        </motion.h1>
        <motion.p variants={item} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-accent-soft leading-[1.1] mb-10">
          {t.hero.headlineEmphasis}
        </motion.p>

        {/* Subheadline */}
        <motion.p
          variants={item}
          transition={{ delay: 0.05 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mt-8 mb-12"
        >
          {t.hero.subheadline}
        </motion.p>

        {/* CTA */}
        <motion.div variants={item} transition={{ delay: 0.1 }}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/25"
          >
            {t.hero.cta}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {!prefersReducedMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-zinc-600">
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-zinc-700" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
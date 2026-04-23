"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/i18n";

export function Hero() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fafafa 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-zinc-100">{t.hero.title}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 shadow-lg shadow-indigo-500/25"
          >
            {t.hero.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#skills"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-lg border border-zinc-700 hover:border-zinc-600 text-zinc-300 hover:text-zinc-100 font-medium transition-all duration-200"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#skills"
          className="flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}

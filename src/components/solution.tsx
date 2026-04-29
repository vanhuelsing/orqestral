"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Calendar, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/i18n";

const icons = {
  card1: MessageCircle,
  card2: Calendar,
  card3: Sparkles,
};

export function Solution() {
  const { lang } = useLanguage();
  const t = content[lang];
  const prefersReducedMotion = useReducedMotion();

  const cards = [t.solution.card1, t.solution.card2, t.solution.card3];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.15 },
    },
  };

  const item = {
    hidden: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section id="solution" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-xs uppercase tracking-widest text-accent-soft font-mono">
            {t.solution.badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-5xl font-semibold text-zinc-50 mb-6 tracking-tight"
        >
          {t.solution.title}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl text-warm-taupe font-medium mb-16"
        >
          {t.solution.tagline}
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map((card, i) => {
            const Icon = Object.values(icons)[i];
            return (
              <motion.div
                key={i}
                variants={item}
                className="group relative p-8 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
              >
                {/* Subtle top gradient */}
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(212, 196, 176, 0.03) 0%, transparent 100%)",
                  }}
                />

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent-soft" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-zinc-100 mb-3 tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Arrow - appears on hover */}
                <div className="flex items-center text-zinc-600 group-hover:text-accent-soft group-hover:translate-x-1 transition-all duration-200">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
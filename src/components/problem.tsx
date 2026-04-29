"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Brain, Users, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/i18n";

const icons = {
  card1: Brain,
  card2: Users,
  card3: AlertTriangle,
};

export function Problem() {
  const { lang } = useLanguage();
  const t = content[lang];
  const prefersReducedMotion = useReducedMotion();

  const cards = [t.problem.card1, t.problem.card2, t.problem.card3];

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
    <section id="problem" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-xs uppercase tracking-widest text-warm-taupe font-mono">
            {t.problem.badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-5xl font-semibold text-zinc-50 mb-16 tracking-tight"
        >
          {t.problem.title}
        </motion.h2>

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
                className="relative p-8 rounded-xl bg-zinc-900 border border-zinc-800"
                style={{
                  background: "linear-gradient(180deg, rgba(212, 196, 176, 0.03) 0%, transparent 100%)",
                }}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-warm-taupe" strokeWidth={1.5} />
                </div>

                {/* Stat */}
                <p className="text-4xl font-bold text-accent-soft mb-3 tracking-tight">
                  {card.stat}
                </p>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
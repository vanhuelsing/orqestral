"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/i18n";

export function Why() {
  const { lang } = useLanguage();
  const t = content[lang];
  const prefersReducedMotion = useReducedMotion();

  const teams = [t.why.team1, t.why.team2, t.why.team3];

  return (
    <section id="why" className="py-20 px-6">
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
            {t.why.badge}
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
          {t.why.title}
        </motion.h2>

        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20 max-w-3xl"
        >
          <blockquote className="text-2xl md:text-4xl font-semibold text-zinc-100 leading-[1.3] tracking-tight mb-6">
            &ldquo;{t.why.quote}&rdquo;
          </blockquote>
          <p className="text-zinc-400 text-lg leading-relaxed">
            {t.why.quoteSub}
          </p>
        </motion.div>

        {/* Team cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {teams.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="p-6"
            >
              <p className="text-zinc-400 text-sm font-medium">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
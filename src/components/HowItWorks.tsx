"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/i18n";

export function HowItWorks() {
  const { lang } = useLanguage();
  const t = content[lang];
  const prefersReducedMotion = useReducedMotion();

  const steps = [t.process.step1, t.process.step2, t.process.step3];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.2 },
    },
  };

  const item = {
    hidden: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section id="process" className="py-20 px-6">
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
            {t.process.badge}
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
          {t.process.title}
        </motion.h2>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, i) => (
            <motion.div key={step.number} variants={item} className="relative">
              {/* Connector line between cards (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 right-0 w-8 h-px bg-zinc-700" />
              )}

              <div className="flex md:flex-col gap-4 md:gap-0">
                {/* Number */}
                <div className="relative z-10 w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center shrink-0">
                  <span className="font-mono text-lg font-bold text-accent">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 md:pt-4">
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
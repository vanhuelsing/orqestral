"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/i18n";

export function Process() {
  const { lang } = useLanguage();
  const t = content[lang];

  const steps = [t.process.step1, t.process.step2, t.process.step3];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="agents" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="text-indigo-500 text-sm font-mono uppercase tracking-widest">
            {t.process.badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-zinc-100 mb-16 tracking-tight"
        >
          {t.process.title}
        </motion.h2>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8"
        >
          {steps.map((step) => (
            <motion.div key={step.number} variants={item} className="relative">
              {/* Connector line (hidden on mobile, shown on md+) */}
              <div className="hidden md:block absolute top-6 left-[4.5rem] right-0 h-px bg-zinc-800" />

              <div className="flex md:block gap-6 md:flex-col">
                {/* Number circle */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shrink-0">
                  <span className="font-mono text-sm text-indigo-500">
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

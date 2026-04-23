"use client";

import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Mic } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/i18n";

const icons = {
  agentDeals: Sparkles,
  agentLabs: GraduationCap,
  heyFranz: Mic,
};

export function SocialProof() {
  const { lang } = useLanguage();
  const t = content[lang];

  const products = [
    {
      id: "agentDeals",
      key: "agentDeals" as const,
      url: "https://agentdeals.io",
    },
    {
      id: "agentLabs",
      key: "agentLabs" as const,
      url: "https://agentlabs.ai",
    },
    {
      id: "heyFranz",
      key: "heyFranz" as const,
      url: "https://heyfranz.ai",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="workflows" className="py-24 px-6 bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="text-indigo-500 text-sm font-mono uppercase tracking-widest">
            {t.socialProof.badge}
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
          {t.socialProof.title}
        </motion.h2>

        {/* Product Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {products.map(({ key, url }) => {
            const Icon = icons[key];
            const product = t.socialProof[key];
            return (
              <motion.a
                key={key}
                variants={item}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-indigo-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-zinc-100 mb-3 tracking-tight">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed">
                  {product.description}
                </p>

                {/* External link indicator */}
                <div className="mt-6 text-sm text-zinc-600 group-hover:text-indigo-500 transition-colors">
                  agentdeals.io ↗
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

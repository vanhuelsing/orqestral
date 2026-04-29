"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Mic, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/i18n";

const icons = {
  project1: GraduationCap,
  project2: Mic,
  project3: Sparkles,
};

const urls = {
  project1: "https://agentlabs.academy",
  project2: "https://heyfranz.ai",
  project3: "https://agentdeals.io",
};

export function Projects() {
  const { lang } = useLanguage();
  const t = content[lang];
  const prefersReducedMotion = useReducedMotion();

  const projects = [t.projects.project1, t.projects.project2, t.projects.project3];

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
    <section id="projects" className="py-20 px-6 bg-zinc-900/30">
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
            {t.projects.badge}
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
          {t.projects.title}
        </motion.h2>

        {/* Project Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => {
            const Icon = Object.values(icons)[i];
            const url = Object.values(urls)[i];
            return (
              <motion.a
                key={i}
                variants={item}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent-soft" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-zinc-100 mb-3 tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metric */}
                <div className="flex items-center gap-2 text-sm text-accent-soft">
                  <span>{project.metric}</span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
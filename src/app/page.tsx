"use client";

import { LanguageProvider } from "@/lib/language-context";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Solution } from "@/components/solution";
import { HowItWorks } from "@/components/HowItWorks";
import { Projects } from "@/components/Projects";
import { Why } from "@/components/why";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-zinc-950">
        <Navigation />
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Projects />
        <Why />
        <CTA />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
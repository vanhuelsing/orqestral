"use client";

import { LanguageProvider } from "@/lib/language-context";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Who } from "@/components/Who";
import { HowItWorks } from "@/components/HowItWorks";
import { Projects } from "@/components/Projects";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-zinc-950">
        <Navigation />
        <Hero />
        <Services />
        <Who />
        <HowItWorks />
        <Projects />
        <CTA />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
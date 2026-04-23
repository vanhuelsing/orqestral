import { LanguageProvider } from "@/lib/language-context";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { SocialProof } from "@/components/social-proof";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-zinc-950">
        <Navigation />
        <main className="flex-1">
          <Hero />
          <Services />
          <Process />
          <SocialProof />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

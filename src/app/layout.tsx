import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "orqestral — Die Architekten für KI-Agenten",
  description:
    "Wir entwickeln spezialisierte KI-Agenten für KMUs und Selbstständige. Skills bauen, Agenten orchestrieren, Workflows steuern.",
  keywords: [
    "KI Beratung",
    "KI-Agenten",
    "AI Consulting",
    "KMU Digitalisierung",
    "Automation",
    "Deutschland",
  ],
  openGraph: {
    title: "orqestral — KI-Agenten Architekten",
    description:
      "Wir entwickeln spezialisierte KI-Agenten für KMUs und Selbstständige.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}

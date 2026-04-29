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
  title: "Orqestral — KI, die für dich arbeitet",
  description:
    "Orqestral baut AI-Lösungen für Menschen — nicht für Entwickler. Persönliche Automation, komplexe Aufgaben vereinfacht, proaktive KI-Begleiter.",
  keywords: [
    "KI",
    "AI",
    "Automation",
    "Persönliche Assistenz",
    "Deutschland",
    "Köln",
  ],
  openGraph: {
    title: "Orqestral — KI, die für dich arbeitet",
    description:
      "Orqestral baut AI-Lösungen für Menschen — nicht für Entwickler.",
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
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
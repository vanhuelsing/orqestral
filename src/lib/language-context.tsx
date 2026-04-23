"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { type Language } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Language;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("de");

  useEffect(() => {
    const saved = localStorage.getItem("orqestral-lang") as Language | null;
    if (saved === "de" || saved === "en") {
      setLang(saved);
    }
  }, []);

  const toggleLang = () => {
    const next = lang === "de" ? "en" : "de";
    setLang(next);
    localStorage.setItem("orqestral-lang", next);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

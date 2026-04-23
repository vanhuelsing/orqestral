export type Language = "de" | "en";

export const content = {
  de: {
    nav: {
      skills: "Skills",
      agents: "Agenten",
      workflows: "Workflows",
      contact: "Kontakt",
      cta: "Projekt besprechen",
    },
    hero: {
      badge: "KI-Agenten Architekten",
      title: "orqestral",
      subtitle:
        "Agenten orchestrieren. Workflows steuern. Skills bauen. Komplexe AI-Systeme zum Laufen bringen.",
      cta: "Projekt besprechen",
      ctaSecondary: "Was wir bauen",
    },
    services: {
      badge: "Was wir tun",
      title: "Drei Disziplinen. Eine Expertise.",
      skills: {
        title: "Skills Bauen",
        description:
          "Spezialisierte KI-Komponenten für produktiven Einsatz. Wir entwickeln Agents mit den Fähigkeiten, die Ihr Unternehmen braucht.",
      },
      agents: {
        title: "Agenten Orchestrieren",
        description:
          "Multi-Agent Systeme mit klarer Kontrolle und Monitoring. Koordination komplexer AI-Workflows ohne Chaos.",
      },
      workflows: {
        title: "Workflows Steuern",
        description:
          "Komplexe Prozesse automatisieren und skalieren. Von der ersten Automation bis zum Enterprise-Betrieb.",
      },
    },
    process: {
      badge: "Unser Vorgehen",
      title: "03 Schritte zur Lösung",
      step1: {
        number: "01",
        title: "Architektur",
        description:
          "Verstehen was gebraucht wird. Systemdesign mit klarer Struktur und messbaren Zielen.",
      },
      step2: {
        number: "02",
        title: "Build",
        description:
          "Agenten bauen. Skills implementieren. Alles mit Tests und Monitoring von Anfang an.",
      },
      step3: {
        number: "03",
        title: "Orchestrierung",
        description:
          "Alles zum Laufen bringen. Betreiben. Skalieren. Kontinuierliche Optimierung.",
      },
    },
    socialProof: {
      badge: "Was wir gebaut haben",
      title: "Systeme im Einsatz",
      agentDeals: {
        title: "AgentDeals Wishes",
        description:
          "Multi-Agent Wishlist Platform. Automatisierte Produktempfehlungen und Wishlist-Management.",
      },
      agentLabs: {
        title: "AgentLabs Academy",
        description:
          "AI-Driven Academy Platform. Interaktive Lernpfade mit intelligenten Assistenten.",
      },
      heyFranz: {
        title: "HeyFranz",
        description:
          "Voice-First AI Assistant. Natürliche Sprachinteraktion für alltägliche Aufgaben.",
      },
    },
    cta: {
      title: "Bauen wir was Sie brauchen.",
      subtitle:
        "Von der Idee zum laufenden System — wir begleiten Sie durch den gesamten Prozess.",
      button: "Projekt besprechen",
    },
    footer: {
      rights: "© 2026 Orqestral. Alle Rechte vorbehalten.",
      impressum: "Impressum",
      privacy: "Datenschutz",
      switchTo: "EN",
    },
  },
  en: {
    nav: {
      skills: "Skills",
      agents: "Agents",
      workflows: "Workflows",
      contact: "Contact",
      cta: "Discuss Project",
    },
    hero: {
      badge: "AI Agent Architects",
      title: "orqestral",
      subtitle:
        "Orchestrating agents. Controlling workflows. Building skills. Getting complex AI systems running.",
      cta: "Discuss Project",
      ctaSecondary: "What we build",
    },
    services: {
      badge: "What we do",
      title: "Three disciplines. One expertise.",
      skills: {
        title: "Building Skills",
        description:
          "Specialized AI components for production use. We develop agents with the capabilities your business needs.",
      },
      agents: {
        title: "Orchestrating Agents",
        description:
          "Multi-agent systems with clear control and monitoring. Coordinating complex AI workflows without chaos.",
      },
      workflows: {
        title: "Controlling Workflows",
        description:
          "Automating and scaling complex processes. From first automation to enterprise operations.",
      },
    },
    process: {
      badge: "Our Approach",
      title: "03 Steps to Solution",
      step1: {
        number: "01",
        title: "Architecture",
        description:
          "Understanding what's needed. System design with clear structure and measurable goals.",
      },
      step2: {
        number: "02",
        title: "Build",
        description:
          "Building agents. Implementing skills. Everything with tests and monitoring from the start.",
      },
      step3: {
        number: "03",
        title: "Orchestration",
        description:
          "Getting everything running. Operating. Scaling. Continuous optimization.",
      },
    },
    socialProof: {
      badge: "What we've built",
      title: "Systems in Production",
      agentDeals: {
        title: "AgentDeals Wishes",
        description:
          "Multi-Agent Wishlist Platform. Automated product recommendations and wishlist management.",
      },
      agentLabs: {
        title: "AgentLabs Academy",
        description:
          "AI-Driven Academy Platform. Interactive learning paths with intelligent assistants.",
      },
      heyFranz: {
        title: "HeyFranz",
        description:
          "Voice-First AI Assistant. Natural language interaction for everyday tasks.",
      },
    },
    cta: {
      title: "Let's build what you need.",
      subtitle:
        "From idea to running system — we guide you through the entire process.",
      button: "Discuss Project",
    },
    footer: {
      rights: "© 2026 Orqestral. All rights reserved.",
      impressum: "Imprint",
      privacy: "Privacy",
      switchTo: "DE",
    },
  },
};

export type Content = typeof content.de;

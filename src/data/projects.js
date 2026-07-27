// ═══════════════════════════════════════════════════════════════
//  PROJETS — une carte par projet, du plus récent au plus ancien
// ═══════════════════════════════════════════════════════════════
//
//  Forme d'un projet :
//    title       : nom affiché en titre de carte
//    period      : date ou période, affichée en étiquette en haut de carte
//    description : 2-3 phrases — ce que fait le projet
//    tech        : technologies, affichées en étiquettes vertes
//    team        : true si c'est un projet de groupe → petite mention affichée.
//                  Utile quand le dépôt est sur le compte GitHub d'un
//                  camarade : le recruteur comprend pourquoi.
//    links       : [{ label, url, type }] — plusieurs liens possibles
//                  type: "demo" → icône lien externe ; sinon → icône GitHub
//
export const projects = [
  {
    title: "Plateforme de Suivi des Travaux Routiers",
    period: "Janv 2026 – Fév 2026",
    description:
      "Application web et mobile de signalement et suivi des travaux routiers à Antananarivo. Cartographie interactive, authentification hybride online/offline et tableau de bord en temps réel.",
    tech: [
      "Vue.js",
      "TypeScript",
      "API REST",
      "Firebase",
      "PostgreSQL",
      "Docker",
      "Leaflet",
    ],
    team: true,
    links: [
      { label: "Code", url: "https://github.com/TonyRandrian/travaux_routiers" },
    ],
  },
  {
    title: "Gestion de Cinéma",
    period: "Janvier 2026",
    description:
      "Système de gestion des opérations d'un cinéma : films, séances, salles, réservations et clients. Réalisation d'API REST et architecture MVC.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "API REST"],
    links: [
      {
        label: "Code",
        url: "https://github.com/erica-niriantsoa/Gestion-de-cinema",
      },
    ],
  },
  {
    title: "ERP — Achat / Vente / Stock / Inventaires",
    period: "Nov 2025 – Janv 2026",
    description:
      "Application web de gestion d'entreprise couvrant les modules d'achat, de vente et de stock. Architecture MVC structurée avec scripts PL/pgSQL.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "PL/pgSQL", "MVC"],
    team: true,
    links: [
      { label: "Code", url: "https://github.com/ghostKely/gestionsociete" },
    ],
  },
  {
    title: "Application de Recrutement RH — SPRINT",
    period: "Nov 2025 – Janv 2026",
    description:
      "Back-office d'une application RH couvrant le pipeline complet : annonces, candidatures, QCM, entretiens, essai et intégration employé. Bâtie sur un framework Java développé from scratch.",
    tech: ["Java", "mhframework", "Docker", "Apache Tomcat", "Render"],
    links: [
      {
        label: "Back-office",
        url: "https://github.com/erica-niriantsoa/SPRINT-BackOffice",
      },
      {
        label: "Front-office",
        url: "https://github.com/erica-niriantsoa/SPRINT-FrontOffice",
      },
      { label: "Framework", url: "https://github.com/erica-niriantsoa/SPRINT" },
    ],
  },
  {
    title: "NewApp — Application découplée",
    period: "2026",
    description:
      "Application web à architecture découplée : un front-office et un back-office développés séparément et communiquant via une API. Projet d'évaluation en React / JavaScript.",
    tech: ["React", "JavaScript", "Vite", "API REST"],
    links: [
      {
        label: "Front-office",
        url: "https://github.com/erica-niriantsoa/NewApp-FRONTOFFICE",
      },
      {
        label: "Back-office",
        url: "https://github.com/erica-niriantsoa/NewApp-Backoffice",
      },
    ],
  },
  {
    title: "PrestaShop — Boutique e-commerce",
    period: "2026",
    description:
      "Mise en place et personnalisation d'une boutique e-commerce avec PrestaShop : gestion des produits, des modules et du back-office. Projet d'évaluation.",
    tech: ["PHP", "PrestaShop", "MySQL", "Smarty"],
    links: [
      {
        label: "Code",
        url: "https://github.com/erica-niriantsoa/Prestashop-Evaluation",
      },
    ],
  },
  {
    title: "Application de Gestion Bancaire",
    period: "Juillet 2025",
    description:
      "Application web de gestion bancaire couvrant la gestion des prêts, validation des fonds, types de taux et statistiques des intérêts avec visualisation graphique.",
    tech: ["PHP", "SQL", "HTML/CSS", "API JSON"],
    team: true,
    links: [{ label: "Code", url: "https://github.com/Randy3227-cmd/Banks" }],
  },
  {
    title: "Front-Office Visa",
    period: "2025",
    description:
      "Développement du front-office d'une application web de gestion de visas : interface utilisateur, formulaires et navigation côté client.",
    tech: ["React.js", "JavaScript", "CSS"],
    team: true,
    links: [
      {
        label: "Code",
        url: "https://github.com/loicDYlanrak/frontoffice-visa",
      },
    ],
  },
];

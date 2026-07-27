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
//                  type: "demo" → bouton « Demo » ; sinon → bouton GitHub
//    images      : tableau de captures (facultatif). Plusieurs images →
//                  la carte affiche une petite galerie avec des pastilles
//                  pour passer d'une vue à l'autre. La PREMIÈRE est celle
//                  qu'on voit par défaut : mets la plus parlante en tête.
//                  Sans images, la carte affiche un aplat avec l'initiale.
//
//  👉 POUR AJOUTER UNE CAPTURE :
//     1. mets le fichier d'origine dans image/<projet>/
//     2. ajoute une ligne dans scripts/optimize-screenshots.mjs
//     3. lance  node scripts/optimize-screenshots.mjs
//     4. importe le .webp produit ci-dessous et référence-le en `image`
//
//  Ne référence jamais directement un PNG de image/ : ils pèsent jusqu'à
//  1,5 Mo pièce, contre ~100 ko après conversion en WebP.

// Travaux Routiers
import travaux1 from "../assets/projects/travaux-routiers-1.webp";
import travaux2 from "../assets/projects/travaux-routiers-2.webp";
import travaux3 from "../assets/projects/travaux-routiers-3.webp";
// Gestion de Cinéma
import cinema1 from "../assets/projects/cinema-1.webp";
import cinema2 from "../assets/projects/cinema-2.webp";
import cinema3 from "../assets/projects/cinema-3.webp";
// NewApp
import newapp1 from "../assets/projects/newapp-1.webp";
import newapp2 from "../assets/projects/newapp-2.webp";
import newapp3 from "../assets/projects/newapp-3.webp";
// Boutique PrestaShop
import prestashop1 from "../assets/projects/prestashop-1.webp";
import prestashop2 from "../assets/projects/prestashop-2.webp";
import prestashop3 from "../assets/projects/prestashop-3.webp";
// Front-Office Visa
import visa1 from "../assets/projects/visa-1.webp";
import visa2 from "../assets/projects/visa-2.webp";
import visa3 from "../assets/projects/visa-3.webp";
// Ce portfolio
import portfolio1 from "../assets/projects/portfolio-1.webp";
import portfolio2 from "../assets/projects/portfolio-2.webp";
import portfolio3 from "../assets/projects/portfolio-3.webp";

export const projects = [
    {
    title: "PrestaShop — Boutique e-commerce",
    period: "Mai 2026",
    description:
      "Installation et configuration complète d'une boutique e-commerce sous PrestaShop : catalogue de 27 produits, catégories, modules de paiement et de livraison, puis suivi des commandes depuis le back-office.",
    tech: ["PHP", "PrestaShop", "MySQL", "Symfony"],
    // L'admin en premier (catalogue de 27 produits, puis les commandes
    //    avec les indicateurs), et seulement ensuite le front-office.
    //    C'est l'ordre qui compte : le back-office montre ton travail de
    //    configuration, là où le thème par défaut ne montre rien.
    images: [prestashop1, prestashop2, prestashop3],
    links: [
      {
        label: "Code",
        url: "https://github.com/erica-niriantsoa/Prestashop-Evaluation",
      },
    ],
  },
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
    images: [travaux1, travaux2, travaux3],
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
    images: [cinema1, cinema2, cinema3],
    links: [
      {
        label: "Code",
        url: "https://github.com/erica-niriantsoa/Gestion-de-cinema",
      },
    ],
  },
  // {
  //   title: "ERP — Achat / Vente / Stock / Inventaires",
  //   period: "Nov 2025 – Janv 2026",
  //   description:
  //     "Application web de gestion d'entreprise couvrant les modules d'achat, de vente et de stock. Architecture MVC structurée avec scripts PL/pgSQL.",
  //   tech: ["Java", "Spring Boot", "PostgreSQL", "PL/pgSQL", "MVC"],
  //   team: true,
  //   links: [
  //     { label: "Code", url: "https://github.com/ghostKely/gestionsociete" },
  //   ],
  // },
  // {
  //   title: "Application de Recrutement RH — SPRINT",
  //   period: "Nov 2025 – Janv 2026",
  //   description:
  //     "Back-office d'une application RH couvrant le pipeline complet : annonces, candidatures, QCM, entretiens, essai et intégration employé. Bâtie sur un framework Java développé from scratch.",
  //   tech: ["Java", "mhframework", "Docker", "Apache Tomcat", "Render"],
  //   links: [
  //     {
  //       label: "Back-office",
  //       url: "https://github.com/erica-niriantsoa/SPRINT-BackOffice",
  //     },
  //     {
  //       label: "Front-office",
  //       url: "https://github.com/erica-niriantsoa/SPRINT-FrontOffice",
  //     },
  //     { label: "Framework", url: "https://github.com/erica-niriantsoa/SPRINT" },
  //   ],
  // },
  {
    title: "NewApp — Prestashop appel API",
    period: "Mai 2026",
    description:
      "Application web à architecture découplée : un front-office et un back-office développés séparément et communiquant via une API. Projet d'évaluation en React / JavaScript.",
    tech: ["React", "JavaScript", "Vite", "API REST"],
    images: [newapp1, newapp2, newapp3],
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

  // {
  //   title: "Application de Gestion Bancaire",
  //   period: "Juillet 2025",
  //   description:
  //     "Application web de gestion bancaire couvrant la gestion des prêts, validation des fonds, types de taux et statistiques des intérêts avec visualisation graphique.",
  //   tech: ["PHP", "SQL", "HTML/CSS", "API JSON"],
  //   team: true,
  //   links: [{ label: "Code", url: "https://github.com/Randy3227-cmd/Banks" }],
  // },
  {
    title: "Front-Office Visa",
    period: "Avril 2026",
    description:
      "Développement du front-office d'une application web de gestion de visas : interface utilisateur, formulaires et navigation côté client.",
    tech: ["React.js", "JavaScript", "CSS"],
    team: true,
    images: [visa1, visa2, visa3],
    links: [
      {
        label: "Code",
        url: "https://github.com/loicDYlanrak/frontoffice-visa",
      },
    ],
  },
  {
    title: "Portfolio personnel",
    period: "Juillet 2026",
    description:
      "Ce site. Conception et développement d'une interface responsive à partir de zéro : architecture par composants, contenu séparé de la présentation, système de design centralisé, animations au défilement et formulaire de contact.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Netlify"],
    images: [portfolio1, portfolio2, portfolio3],
    links: [
      { label: "Code", url: "https://github.com/erica-niriantsoa/Portfolio" },
      // type: "demo" → bouton plein. C'est le seul projet avec une démo
      // en ligne, autant qu'elle se remarque.
      {
        label: "Voir le site",
        url: "https://niriantsoaerica.netlify.app",
        type: "demo",
      },
    ],
  },
];

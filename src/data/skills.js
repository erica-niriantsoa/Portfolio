// ═══════════════════════════════════════════════════════════════
//  COMPÉTENCES — techniques (avec logos), comportementales, langues
// ═══════════════════════════════════════════════════════════════
//
//  Deux sortes d'icônes cohabitent ici, et le composant ui/TechIcon.jsx
//  reconnaît tout seul laquelle il a reçu :
//
//   • simple-icons  → le vrai logo officiel de la marque (objet avec un
//                     tracé et la couleur officielle). C'est le cas par
//                     défaut. Noms sur https://simpleicons.org
//   • lucide-react  → une icône neutre dessinée au trait, utilisée quand
//                     aucun logo officiel n'est disponible (voir plus bas).
//
//  Pour ajouter une techno : importe son logo, puis ajoute une ligne
//  { name, icon } dans la bonne catégorie. Rien d'autre à toucher.

import {
  siHtml5,
  siCss,
  siJavascript,
  siReact,
  siVuedotjs,
  siOpenjdk,
  siSpringboot,
  siPhp,
  siPostgresql,
  siMysql,
  siFirebase,
  siGit,
  siGithub,
  siDocker,
  siPostman,
  siSwagger,
  siFigma,
  siLeaflet,
  siOpenstreetmap,
} from "simple-icons";

// Icônes de catégorie + les 2 remplaçants (voir la note ci-dessous)
import { Palette, Server, Database, Wrench, Map, Image } from "lucide-react";

// ⚠️ Trois logos ne sont pas disponibles dans simple-icons, leurs
//    propriétaires ayant demandé leur retrait :
//      • Java     → on affiche le logo OpenJDK, qui est le logo officiel
//                   de l'implémentation open source de Java.
//      • Oracle   → aucun logo libre : icône « base de données » au trait.
//      • Photoshop→ aucun logo libre : icône « image » au trait.

// `group` décide de la rangée du carrousel où la catégorie apparaît :
//   "code"   → ce avec quoi je construis (langages, frameworks, bases)
//   "outils" → ce avec quoi je travaille (versionnage, conteneurs, design)
// Pour déplacer une catégorie d'une rangée à l'autre, change ce seul mot.
export const skills = [
  {
    category: "Frontend",
    group: "code",
    icon: Palette,
    items: [
      { name: "HTML5", icon: siHtml5 },
      { name: "CSS3", icon: siCss },
      { name: "JavaScript", icon: siJavascript },
      { name: "React", icon: siReact },
      { name: "Vue.js", icon: siVuedotjs },
    ],
  },
  {
    category: "Backend",
    group: "code",
    icon: Server,
    items: [
      { name: "Java", icon: siOpenjdk },
      { name: "Spring Boot", icon: siSpringboot },
      { name: "PHP", icon: siPhp },
    ],
  },
  {
    category: "Base de données",
    group: "code",
    icon: Database,
    items: [
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "MySQL", icon: siMysql },
      { name: "Oracle", icon: Database },
      { name: "Firebase", icon: siFirebase },
    ],
  },
  {
    category: "Outils",
    group: "outils",
    icon: Wrench,
    items: [
      { name: "Git", icon: siGit },
      { name: "GitHub", icon: siGithub },
      { name: "Docker", icon: siDocker },
      { name: "Postman", icon: siPostman },
      { name: "Swagger", icon: siSwagger },
      { name: "Figma", icon: siFigma },
      { name: "Photoshop", icon: Image },
    ],
  },
  {
    category: "Cartographie",
    // Leaflet est une bibliothèque qu'on code, d'où "code" et non "outils"
    group: "code",
    icon: Map,
    items: [
      { name: "Leaflet", icon: siLeaflet },
      { name: "OpenStreetMap", icon: siOpenstreetmap },
    ],
  },
];

// Qualités personnelles, affichées en étiquettes.
export const softSkills = [
  "Esprit d'analyse",
  "Rigueur",
  "Sens de l'organisation",
  "Capacité d'apprentissage rapide",
  "Travail en équipe",
  "Adaptabilité",
  "Autonomie",
  "Motivation",
  "Gestion du temps",
  "Sens des responsabilités",
  "Résolution de problèmes",
  "Curiosité technologique",
  "Communication",
  "Esprit d'initiative",
];

// `pct` = remplissage de la barre de progression, de 0 à 100.
export const languages = [
  { lang: "Français", level: "Courant", pct: 90 },
  { lang: "Anglais", level: "Niveau B2", pct: 65 },
];

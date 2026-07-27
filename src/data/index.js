// ═══════════════════════════════════════════════════════════════
//  👉 TOUT TON CONTENU EST DANS CE DOSSIER — un fichier par sujet
// ═══════════════════════════════════════════════════════════════
//
//   profile.js     → nom, titre, présentation, email, téléphone, réseaux, CV
//   skills.js      → compétences techniques, soft skills, langues
//   projects.js    → tes projets
//   education.js   → ta formation
//   stats.js       → les 3 compteurs du Hero (calculés en partie)
//   navigation.js  → les entrées du menu
//
//  Ce fichier ne fait que tout rassembler, pour que les composants
//  puissent écrire   import { profile, skills } from "../data";
//  au lieu de viser chaque fichier un par un. Tu n'as pas à le modifier,
//  sauf si tu ajoutes un nouveau fichier de données.

export { profile } from "./profile";
export { skills, softSkills, languages } from "./skills";
export { projects } from "./projects";
export { education } from "./education";
export { stats } from "./stats";
export { navLinks, navIds } from "./navigation";

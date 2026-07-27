// ═══════════════════════════════════════════════════════════════
//  QUI JE SUIS — identité, coordonnées, liens
// ═══════════════════════════════════════════════════════════════

export const profile = {
  name: "Niriantsoa Erica",
  initials: "EN", // affiché comme logo dans la barre de navigation
  monogram: "E/N", // version avec barre oblique, en haut de page
  title: "Développeuse Full-Stack",
  subtitle:
    "Étudiante en 3ème année · Licence Informatique · IT University",

  // Les deux lignes en petites capitales tout en haut à gauche de la page.
  // Garde-les courtes : elles sont très espacées, donc vite trop larges.
  tagline: ["Développement web", "back-end & API REST"],

  // Bandeau au-dessus du nom. L'icône qui l'accompagne est choisie dans
  // sections/Hero.jsx (GraduationCap), pas ici : on ne met pas d'emoji
  // dans le texte, sinon il ne s'affiche pas pareil selon les appareils.
  badge: "Recherche de stage · Disponible immédiatement",

  // Paragraphe de présentation, affiché sous le grand nom
  about:
    "Étudiante en 3ème année de Licence en Informatique à IT University, spécialisée en développement back-end (Java, Spring Boot, PHP), conception et intégration d'API REST ainsi que gestion de bases de données. Forte de plusieurs projets concrets, je recherche un stage de fin d'études pour contribuer à des projets numériques ambitieux.",

  // Citation affichée à côté des chiffres.
  // 👉 Change-la pour une phrase qui te correspond — c'est toi qu'on lit.
  quote: {
    text: "N'importe qui peut écrire du code qu'une machine comprend. Les bons développeurs écrivent du code que les humains comprennent.",
    author: "Martin Fowler",
  },

  email: "erica.ny.riantsoa@gmail.com",
  phone: "+261 34 37 66 599",
  location: "Antananarivo, Madagascar",

  // Lien vers ton CV : le PDF doit être dans /public
  cvUrl: "/CV-Erica-Niriantsoa.pdf",

  socials: {
    github: "https://github.com/erica-niriantsoa",
    linkedin: "https://www.linkedin.com/in/erica-niriantsoa-a959233aa/",
  },
};

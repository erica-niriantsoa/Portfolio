// ═══════════════════════════════════════════════════════════════
//  QUI JE SUIS — identité, coordonnées, liens
// ═══════════════════════════════════════════════════════════════

export const profile = {
  name: "Niriantsoa Erica",
  // Logo de la barre de navigation. Affiché en majuscules et suivi d'un
  // point coloré, à la manière d'une signature.
  logo: "Erica",
  // En français, l'adjectif d'un intitulé de métier ne prend pas de
  // majuscule : « Développeuse informatique », et non « Informatique ».
  title: "Développeuse informatique",
  subtitle:
    "Étudiante en 3ème année · Licence Informatique · IT University",

  // Petite phrase d'accueil, juste au-dessus du grand nom.
  // 👉 Mets une chaîne vide ("") pour la faire disparaître complètement.
  greeting: "Bonjour, je suis",

  // Paragraphe de présentation, affiché sous le grand nom.
  // Écrit à la première personne et sans jargon inutile : c'est la
  // première chose qu'on lit, autant qu'on y entende quelqu'un.
  //
  // 👉 Entoure un passage de ** pour l'afficher en gras.
  //    Ex. : "à **IT University**" → IT University ressort du paragraphe.
  about:
    "Étudiante en 3ème année de Licence en Informatique à **IT University Andoharanofotsy**, je construis mon expertise à travers des projets concrets en développement web. Rigoureuse, curieuse et passionnée par les solutions numériques, je suis à la recherche d'un **stage de fin d'études**, disponible immédiatement.",

  // Citation affichée à côté des chiffres.
  // 👉 Change-la pour une phrase qui te correspond — c'est toi qu'on lit.
  quote: {
    text: "N'importe qui peut écrire du code qu'une machine comprend. Les bons développeurs écrivent du code que les humains comprennent.",
    author: "Martin Fowler",
  },

  email: "erica.ny.riantsoa@gmail.com",
  phone: "+261 34 37 66 599",
  location: "Ambatofotsy, Antananarivo",

  // Lien vers ton CV : le PDF doit être dans /public
  // ⚠️ Doit correspondre EXACTEMENT au nom du fichier dans public/.
  //    Si tu remplaces ton CV, garde le même nom de fichier — sinon le
  //    lien renvoie une erreur 404 et rien ne se télécharge, sans aucun
  //    message d'erreur visible.
  //    Évite les espaces et les accents : dans une URL, une espace doit
  //    être encodée en %20, et tous les outils ne le font pas.
  cvUrl: "/CV-Niriantsoa-Erica.pdf",

  socials: {
    github: "https://github.com/erica-niriantsoa",
    linkedin: "https://www.linkedin.com/in/erica-niriantsoa-a959233aa/",
  },
};

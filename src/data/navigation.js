// ═══════════════════════════════════════════════════════════════
//  NAVIGATION — les entrées du menu (barre du haut + menu mobile)
// ═══════════════════════════════════════════════════════════════

// `id` doit correspondre à l'attribut id="..." de la section visée.
// On garde des identifiants sans accent ni majuscule : ils finissent dans
// l'URL (monsite.com/#competences) et les accents y seraient encodés
// en %C3%A9, ce qui est illisible.
export const navLinks = [
  { id: "profil", label: "Profil" },
  { id: "projets", label: "Projets" },
  { id: "competences", label: "Compétences" },
  { id: "formation", label: "Formation" },
  { id: "contact", label: "Contact" },
];

// Juste la liste des identifiants. Calculée une seule fois ici (et non dans
// le composant) : si on la recalculait à chaque affichage, React verrait un
// tableau « différent » chaque fois et relancerait l'observateur en boucle.
export const navIds = navLinks.map((link) => link.id);

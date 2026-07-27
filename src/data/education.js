// ═══════════════════════════════════════════════════════════════
//  FORMATION — une carte par diplôme, du plus récent au plus ancien
// ═══════════════════════════════════════════════════════════════

// `school`, `period` et `details` sont facultatifs : laisse "" ou [] si tu
// n'as rien à mettre, la mise en page s'adapte et n'affiche pas de ligne vide.
export const education = [
  {
    // « (en cours) » retiré : la période juste à côté dit déjà « présent ».
    degree: "Licence en Informatique — Développement Java",
    school: "IT University, Antananarivo",
    period: "2023 – présent",
    // Volontairement vide. Les matières listées ici (Java, Spring Boot,
    // PostgreSQL, Docker, Git…) étaient exactement les technos déjà
    // affichées dans la section Compétences juste au-dessus : le visiteur
    // lisait deux fois la même information.
    // Si tu veux remplir ce bloc un jour, choisis ce qu'on ne voit PAS
    // ailleurs : algorithmique, conception de bases de données, génie
    // logiciel, gestion de projet…
    details: [],
  },
  {
    degree: "Baccalauréat Série D",
    // 👉 AJOUTE LE NOM DE TON LYCÉE ICI.
    //    Le champ contenait « Mention Assez Bien », qui n'est pas un
    //    établissement — la mention est passée dans `details`, où elle
    //    s'affiche comme une distinction.
    school: "Saint Gabriel, Anjomakely",
    period: "2023",
    details: ["Mention Assez Bien"],
  },
];

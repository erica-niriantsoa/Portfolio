// ═══════════════════════════════════════════════════════════════
//  COMPTEURS — les 3 chiffres affichés sous les boutons du Hero
// ═══════════════════════════════════════════════════════════════

import { projects } from "./projects";
import { skills } from "./skills";

// Nombre de technologies distinctes citées dans skills.js.
// On compare les noms (et non les objets) pour que Set supprime bien les
// doublons si une techno apparaît dans deux catégories.
const techCount = new Set(
  skills.flatMap((group) => group.items.map((item) => item.name)),
).size;

// Les deux chiffres calculés ne peuvent jamais se désynchroniser du reste
// du site : tu ajoutes un projet dans projects.js, le compteur suit.
export const stats = [
  { value: String(projects.length), label: "Projets réalisés" },
  { value: "3", label: "Ans de formation" }, // 👉 à incrémenter chaque année
  { value: String(techCount), label: "Technologies" },
];

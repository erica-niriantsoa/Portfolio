/**
 * Couleur officielle d'une marque, à partir de son icône.
 *
 * Les logos de simple-icons embarquent la couleur officielle dans un champ
 * `hex` (sans le croisillon). Les icônes Lucide, elles, sont dessinées au
 * trait et n'ont pas de couleur de marque.
 *
 * @param icon  une icône telle que définie dans data/skills.js
 * @returns     "#RRGGBB", ou null s'il n'y a pas de couleur de marque
 *
 * Ce helper vit dans lib/ et non dans ui/TechIcon.jsx : un fichier qui
 * exporte à la fois un composant et une fonction casse le rechargement à
 * chaud de Vite (le composant est alors remonté à chaque sauvegarde).
 */
export default function brandColor(icon) {
  if (typeof icon === "function") return null; // icône Lucide
  return icon?.hex ? `#${icon.hex}` : null;
}

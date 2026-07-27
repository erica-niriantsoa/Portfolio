/**
 * Affiche l'icône d'une technologie, quelle que soit sa provenance.
 *
 * Deux formes possibles (voir data/skills.js) :
 *  • un objet simple-icons : { title, hex, path } → on dessine le vrai
 *    logo officiel dans un <svg>
 *  • un composant Lucide (donc une fonction) → on l'affiche tel quel
 *
 * On distingue les deux avec typeof : un composant React est une fonction,
 * un logo simple-icons est un objet. Pas besoin de champ « type » à
 * maintenir à la main dans les données.
 *
 * @param icon       l'icône, dans l'une des deux formes ci-dessus
 * @param className  taille et couleur (le SVG utilise currentColor)
 */
export default function TechIcon({ icon, className = "h-7 w-7" }) {
  if (typeof icon === "function") {
    const LucideIcon = icon;
    return (
      <LucideIcon
        className={className}
        strokeWidth={1.5}
        aria-hidden="true"
      />
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      // fill="currentColor" : le logo prend la couleur du texte, ce qui
      // permet de le colorer avec les classes Tailwind du parent
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

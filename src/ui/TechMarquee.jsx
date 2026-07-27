import TechIcon from "./TechIcon";
import brandColor from "../lib/brandColor";

// Il faut qu'UNE copie de la liste soit plus large que l'écran, sinon on
// verrait un trou entre la fin de la première copie et le début de la
// seconde. Une tuile mesure ~144px (126 de large + 18 d'écart), donc
// 20 tuiles ≈ 2880px : de quoi couvrir même un écran très large.
const MIN_TILES = 20;
// Secondes de défilement par tuile. Constant, donc deux rangées de
// longueurs différentes défilent à la même vitesse apparente.
const SECONDS_PER_TILE = 3;

/**
 * Rangée de logos qui défile en continu, sans coupure.
 *
 * Deux précautions rendent la boucle invisible :
 *  1. la liste est répétée jusqu'à dépasser la largeur de l'écran ;
 *  2. le résultat est affiché DEUX fois, et la piste glisse de -50 %.
 *     Quand la première moitié a fini de sortir à gauche, la seconde
 *     occupe exactement sa position de départ.
 * L'animation elle-même est dans styles/utilities.css (@keyframes
 * marquee-left) : une animation CSS reste fluide même quand le
 * JavaScript est occupé.
 *
 * Le défilement se met en pause au survol, et s'arrête complètement si
 * le système demande de réduire les animations (la rangée devient alors
 * défilable à la main).
 *
 * @param items    technos à afficher : [{ name, icon }]
 * @param reverse  true → défile de gauche à droite
 */
export default function TechMarquee({ items, reverse = false }) {
  if (!items?.length) return null;

  // Répétition jusqu'à atteindre la largeur minimale
  const filled = [];
  while (filled.length < MIN_TILES) filled.push(...items);

  const duration = filled.length * SECONDS_PER_TILE;

  return (
    <div className="marquee overflow-hidden py-1">
      <ul
        className={`marquee-track flex items-center gap-3 sm:gap-4 ${
          reverse ? "marquee-track-reverse" : ""
        }`}
        style={{ "--marquee-duration": `${duration}s` }}
      >
        {[...filled, ...filled].map((item, i) => (
          <MarqueeItem
            key={`${item.name}-${i}`}
            item={item}
            // Seul le premier passage sur la liste d'origine est lu par les
            // lecteurs d'écran ; tout le reste n'est que de la répétition
            // visuelle et serait annoncé en boucle.
            duplicate={i >= items.length}
          />
        ))}
      </ul>
    </div>
  );
}

function MarqueeItem({ item, duplicate = false }) {
  const color = brandColor(item.icon);

  return (
    <li
      aria-hidden={duplicate ? "true" : undefined}
      // --tech porte la couleur officielle de la marque. On passe par une
      // variable CSS parce qu'un style inline ne peut pas décrire un survol.
      style={color ? { "--tech": color } : undefined}
      // Largeur fixe : la piste doit avoir une largeur stable pour que le
      // décalage de -50 % tombe juste.
      className="card group flex h-24 w-28 shrink-0 flex-col items-center justify-center gap-2.5 px-2 transition-colors duration-300 ease-soft hover:border-line-strong"
    >
      {/* Le logo porte sa couleur officielle en permanence. Au survol,
          c'est un léger agrandissement qui réagit — puisque la couleur
          ne peut plus servir de signal. */}
      <TechIcon
        icon={item.icon}
        className={`h-8 w-8 shrink-0 transition-transform duration-300 ease-soft group-hover:scale-110 ${
          color ? "text-[var(--tech)]" : "text-accent"
        }`}
      />
      {/* Taille écrite en clair plutôt qu'avec .mono-label : celle-ci
          impose 12px, ce qui ferait passer « OpenStreetMap » sur deux
          lignes dans une tuile de cette largeur. */}
      <span className="text-center font-mono text-[0.625rem] font-medium leading-tight text-ink-soft">
        {item.name}
      </span>
    </li>
  );
}

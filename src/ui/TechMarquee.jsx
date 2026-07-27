import TechIcon from "./TechIcon";
import brandColor from "../lib/brandColor";

/**
 * Rangée de logos qui défile en continu, sans coupure.
 *
 * La liste est volontairement affichée DEUX fois : quand la première
 * copie a fini de sortir à gauche, la seconde se trouve exactement à sa
 * position de départ, donc le retour au début ne se voit pas.
 * L'animation elle-même est dans styles/utilities.css (@keyframes
 * marquee-left), car une animation CSS reste fluide même quand le
 * JavaScript est occupé.
 *
 * Le défilement se met en pause au survol, et s'arrête complètement si
 * le système demande de réduire les animations (la rangée devient alors
 * défilable à la main).
 *
 * @param items     technos à afficher : [{ name, icon }]
 * @param duration  durée d'un tour complet, en secondes.
 *                  Plus la valeur est grande, plus c'est lent.
 * @param reverse   true → défile de gauche à droite
 */
export default function TechMarquee({ items, duration = 45, reverse = false }) {
  return (
    <div className="marquee overflow-hidden py-1">
      <ul
        className={`marquee-track flex items-center gap-3 sm:gap-4 ${
          reverse ? "marquee-track-reverse" : ""
        }`}
        style={{ "--marquee-duration": `${duration}s` }}
      >
        {items.map((item) => (
          <MarqueeItem key={item.name} item={item} />
        ))}

        {/* La seconde copie est purement visuelle : aria-hidden évite
            qu'un lecteur d'écran annonce deux fois chaque techno. */}
        {items.map((item) => (
          <MarqueeItem key={`copie-${item.name}`} item={item} duplicate />
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
      // variable CSS parce qu'un style inline ne peut pas décrire un survol :
      // c'est la classe group-hover:text-[var(--tech)] qui l'utilise.
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

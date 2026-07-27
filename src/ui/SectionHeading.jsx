import Reveal from "./Reveal";

/**
 * Intitulé de section, style éditorial : petites capitales espacées,
 * un court trait vert dessous, puis une phrase d'explication.
 * Aligné à gauche — dans ce design il occupe sa propre colonne.
 *
 * @param label        intitulé en capitales, ex. "Projets sélectionnés"
 * @param description  phrase sous le trait (facultatif)
 * @param dark         true quand la section est sur fond sombre
 */
export default function SectionHeading({ label, description, dark = false }) {
  return (
    <Reveal>
      <h2 className={`overline-lg ${dark ? "text-white" : "text-ink"}`}>
        {label}
      </h2>

      {/* Le court trait vert : la signature visuelle du design */}
      <span className="mt-3 block h-[2px] w-10 bg-accent" />

      {description && (
        <p
          className={`mt-5 max-w-xs text-sm leading-relaxed ${
            dark ? "text-ink-faint" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

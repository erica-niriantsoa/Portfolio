import Reveal from "./Reveal";

/**
 * Intitulé de section, en trois niveaux de hiérarchie :
 *   1. une étiquette numérotée en monospace, en vert
 *   2. le titre, gros et resserré
 *   3. une phrase d'explication, en gris
 *
 * Cette hiérarchie est la même partout — c'est elle qui fait que le
 * visiteur sait toujours où il en est dans la page.
 *
 * @param label        étiquette mono, ex. "01 — Projets"
 * @param title        titre de la section
 * @param description  phrase sous le titre (facultatif)
 * @param center       true → tout centré (sinon aligné à gauche)
 */
export default function SectionHeading({
  label,
  title,
  description,
  center = false,
}) {
  return (
    <Reveal>
      <div className={center ? "text-center" : ""}>
        {label && <p className="mono-label text-accent">{label}</p>}

        <h2 className="section-title mt-3.5 text-ink">{title}</h2>

        {description && (
          <p
            className={`mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft ${
              center ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}

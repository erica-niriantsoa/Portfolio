import { useState } from "react";

/**
 * Galerie d'une carte projet : une capture affichée, des pastilles pour
 * passer d'une vue à l'autre.
 *
 * On ne met dans la page QUE l'image affichée. Les autres ne sont
 * téléchargées qu'au moment où on clique sur leur pastille — les
 * captures supplémentaires ne coûtent donc rien au chargement.
 *
 * @param images  tableau d'URL d'images (au moins une)
 * @param title   nom du projet, pour le texte alternatif
 * @param zoom    true → léger zoom au survol (piloté par la carte parente)
 */
export default function ProjectGallery({ images, title, zoom = true }) {
  const [current, setCurrent] = useState(0);
  const hasSeveral = images.length > 1;

  return (
    <div className="relative aspect-video overflow-hidden border-b border-line bg-surface">
      <img
        // key : force le navigateur à recréer l'image à chaque changement,
        // ce qui rejoue l'apparition en fondu ci-dessous
        key={current}
        src={images[current]}
        alt={
          hasSeveral
            ? `${title} — vue ${current + 1} sur ${images.length}`
            : `Aperçu du projet ${title}`
        }
        loading="lazy"
        // object-top : on cadre sur le haut de la capture, là où se
        // trouvent l'en-tête et le contenu utile
        className={`h-full w-full animate-[fade-in_400ms_ease-out] object-cover object-top transition-transform duration-500 ease-soft ${
          zoom ? "group-hover:scale-[1.03]" : ""
        }`}
      />

      {hasSeveral && (
        /* Les pastilles sont posées sur l'image, en bas à droite.
           Un dégradé sombre derrière garantit qu'elles restent visibles
           quelle que soit la capture. */
        <div className="absolute inset-x-0 bottom-0 flex justify-end bg-gradient-to-t from-black/35 to-transparent p-3">
          <div
            className="flex items-center gap-1.5"
            role="tablist"
            aria-label={`Captures du projet ${title}`}
          >
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === current}
                aria-label={`Voir la vue ${index + 1}`}
                onClick={() => setCurrent(index)}
                // p-1.5 autour d'un point de 6px : la zone tactile atteint
                // ~24px, indispensable pour viser au doigt
                className="group/dot p-1.5"
              >
                <span
                  className={`block h-1.5 w-1.5 rounded-full transition-all duration-300 ease-soft ${
                    index === current
                      ? "w-4 bg-white"
                      : "bg-white/55 group-hover/dot:bg-white/85"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

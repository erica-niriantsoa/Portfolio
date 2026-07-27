import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Galerie d'une carte projet : une capture affichée, deux flèches pour
 * défiler, des pastilles pour aller directement à une vue.
 *
 * On ne met dans la page QUE l'image affichée. Les autres ne sont
 * téléchargées qu'au moment où on change de vue — les captures
 * supplémentaires ne coûtent donc rien au chargement.
 *
 * @param images  tableau d'URL d'images (au moins une)
 * @param title   nom du projet, pour le texte alternatif
 * @param zoom    true → léger zoom au survol (piloté par la carte parente)
 */
export default function ProjectGallery({ images, title, zoom = true }) {
  const [current, setCurrent] = useState(0);
  const hasSeveral = images.length > 1;

  // Défilement circulaire : après la dernière on revient à la première.
  // Le modulo avec `+ images.length` gère le cas du recul depuis la
  // première vue, où l'indice deviendrait négatif.
  const go = (delta) =>
    setCurrent((i) => (i + delta + images.length) % images.length);

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
        <>
          {/* Flèches précédent / suivant.
              Toujours visibles, et non révélées au survol : sur un écran
              tactile il n'y a pas de survol, elles resteraient
              introuvables. */}
          <GalleryArrow direction="prev" onClick={() => go(-1)} />
          <GalleryArrow direction="next" onClick={() => go(1)} />

          {/* Pastilles : accès direct à une vue précise.
              Un dégradé sombre derrière garantit qu'elles restent visibles
              quelle que soit la capture. */}
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
        </>
      )}
    </div>
  );
}

// Une flèche de navigation, posée sur l'image
function GalleryArrow({ direction, onClick }) {
  const isPrev = direction === "prev";
  const Icon = isPrev ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrev ? "Capture précédente" : "Capture suivante"}
      // top-1/2 + -translate-y-1/2 : centrée verticalement sur l'image.
      // bg-white/85 + backdrop-blur : lisible sur une capture claire comme
      // sur une capture sombre.
      className={`absolute top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/85 text-ink shadow-soft backdrop-blur-sm transition-all duration-300 ease-soft hover:bg-white hover:text-accent ${
        isPrev ? "left-2" : "right-2"
      }`}
    >
      <Icon className="h-4 w-4" strokeWidth={2} />
    </button>
  );
}

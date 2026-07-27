import { Quote as QuoteIcon } from "lucide-react";

/**
 * Bloc citation, présenté comme les autres cartes de la section.
 * Le texte se modifie dans data/profile.js (champ `quote`).
 *
 * On utilise <figure>/<blockquote>/<figcaption> plutôt que des <div> :
 * c'est le balisage prévu pour une citation, et les lecteurs d'écran
 * annoncent correctement « citation » et son auteur.
 *
 * @param text    la citation
 * @param author  qui l'a dite
 */
export default function Quote({ text, author }) {
  return (
    <figure className="card flex h-full flex-col p-6">
      {/* L'icône est décorative : le texte de la citation suffit */}
      <QuoteIcon
        className="h-5 w-5 shrink-0 text-accent"
        strokeWidth={1.75}
        aria-hidden="true"
      />

      {/* flex-1 : la signature reste collée en bas de la carte, alignée
          avec le bas des cartes voisines */}
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
        {text}
      </blockquote>

      <figcaption className="mono-label mt-5 text-ink-faint">
        — {author}
      </figcaption>
    </figure>
  );
}

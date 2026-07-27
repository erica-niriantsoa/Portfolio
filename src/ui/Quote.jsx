import { Quote as QuoteIcon } from "lucide-react";

/**
 * Bloc citation encadré, posé à côté des chiffres.
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
    <figure className="border border-line bg-paper-2/60 p-6">
      {/* L'icône est décorative : le texte de la citation suffit */}
      <QuoteIcon
        className="h-6 w-6 text-accent"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <blockquote className="mt-3 text-sm leading-relaxed text-ink">
        {text}
      </blockquote>
      <figcaption className="overline mt-4 text-accent">{author}</figcaption>
    </figure>
  );
}

/**
 * Affiche un texte dont les passages entourés de ** apparaissent en gras.
 *
 *   "étudiante à **IT University**, je construis…"
 *        →  étudiante à IT University, je construis…
 *                       ‾‾‾‾‾‾‾‾‾‾‾‾‾
 *
 * Pourquoi cette petite mécanique plutôt que du JSX directement dans le
 * composant : le texte reste une simple chaîne dans data/profile.js. Tu
 * peux donc mettre n'importe quel passage en valeur en l'entourant de **,
 * sans toucher au code d'affichage.
 *
 * @param text  la chaîne à afficher, avec ses ** éventuels
 */
export default function BoldText({ text }) {
  // Le split avec une parenthèse capturante garde les passages trouvés
  // dans le tableau : indices pairs = texte normal, impairs = texte en gras.
  const parts = text.split(/\*\*(.+?)\*\*/g);

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          // Plus foncé ET plus gras : sur un paragraphe déjà gris, la
          // graisse seule ne suffit pas à faire ressortir le passage.
          <strong key={i} className="font-semibold text-ink">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

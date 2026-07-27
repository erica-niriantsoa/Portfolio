/**
 * Champ de formulaire avec son étiquette.
 *
 * Le champ n'est pas « contrôlé » par React (pas de useState par champ) :
 * on laisse le navigateur gérer la saisie et on lit tout d'un coup à
 * l'envoi avec FormData. Moins de code, et la validation HTML native
 * (required, type="email") fonctionne toute seule.
 *
 * @param label        texte de l'étiquette
 * @param name         nom du champ — c'est lui qui apparaîtra dans le
 *                     message reçu, donc il doit rester stable
 * @param type         type HTML : text, email, tel…
 * @param required     true → le navigateur refuse l'envoi si c'est vide.
 *                     Les champs SANS cette option portent la mention
 *                     « (facultatif) » à côté de leur libellé.
 * @param textarea     true → zone de texte multiligne
 * @param placeholder  texte grisé d'exemple
 */
export default function Field({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
  placeholder,
}) {
  const id = `champ-${name}`;

  // focus:ring : un contour visible au clavier. On ne supprime jamais
  // l'indicateur de focus sans le remplacer, sinon le formulaire devient
  // impossible à remplir sans souris.
  const inputClasses =
    "mt-2 w-full rounded-md border border-line bg-surface px-3.5 py-2.5 text-sm text-ink outline-none transition-colors duration-300 ease-soft placeholder:text-ink-faint focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent/15";

  return (
    <div>
      <label htmlFor={id} className="mono-label text-ink-soft">
        {label}
        {/* On signale les champs FACULTATIFS, et non les obligatoires.
            Deux raisons :
            · un astérisque coloré à côté d'un libellé se lit comme un
              message d'erreur, alors que rien n'a encore été saisi ;
            · la plupart des champs étant obligatoires, marquer les
              exceptions fait beaucoup moins de bruit visuel.
            La validation, elle, reste assurée par l'attribut `required`
            du champ lui-même. */}
        {!required && (
          <span className="ml-1.5 font-normal normal-case tracking-normal text-[0.6875rem] text-ink-faint">
            (facultatif)
          </span>
        )}
      </label>

      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          required={required}
          placeholder={placeholder}
          className={`${inputClasses} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={inputClasses}
        />
      )}
    </div>
  );
}

/**
 * LE bouton du site. Tous les boutons et liens d'action passent par ici,
 * c'est ce qui garantit qu'ils se ressemblent tous.
 *
 * Rend un <a> si `href` est fourni, sinon un <button>. Un lien qui
 * navigue doit rester un <a> : clic droit, ouverture dans un onglet,
 * lecture par un lecteur d'écran — tout cela ne marche pas sur un
 * <button> déguisé en lien.
 *
 * @param variant   "primary"   → plein vert, l'action principale
 *                  "secondary" → filet fin sur blanc
 *                  "ghost"     → texte seul, sans cadre
 * @param size      "sm" | "md"
 * @param icon      icône avant le texte (composant, pas élément JSX)
 * @param iconEnd   icône après le texte, qui se décale au survol
 * @param href      transforme le bouton en lien
 * @param external  ouvre dans un nouvel onglet
 * @param download  télécharge le fichier au lieu de l'ouvrir
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconEnd: IconEnd,
  href,
  external = false,
  download = false,
  className = "",
  ...rest
}) {
  const variants = {
    primary: "bg-accent text-white shadow-soft hover:bg-accent-dark",
    secondary:
      "border border-line bg-white text-ink shadow-soft hover:border-line-strong hover:bg-surface",
    ghost: "text-ink-soft hover:text-accent",
  };

  const sizes = {
    sm: "px-3.5 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
  };

  const classes = [
    "group inline-flex items-center justify-center gap-2 rounded-md font-medium",
    "transition-all duration-300 ease-soft",
    "disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

  const content = (
    <>
      {Icon && <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} />}
      {children}
      {IconEnd && (
        <IconEnd
          className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-soft group-hover:translate-x-0.5"
          strokeWidth={1.75}
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: true } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}

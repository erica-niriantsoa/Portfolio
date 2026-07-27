/**
 * Petite étiquette rectangulaire, en petites capitales espacées.
 * Utilisée pour les compétences, les technos d'un projet et les
 * matières d'une formation.
 *
 * Angles droits et fond transparent : dans ce design éditorial, tout
 * est en filets fins, sans pastilles colorées.
 *
 * @param variant  "default" → filet gris, texte foncé
 *                 "accent"  → filet vert, texte vert (technos de projet)
 *                 "dark"    → posée sur un fond sombre
 *
 * Utilisation :   <Tag>Java</Tag>   <Tag variant="accent">Docker</Tag>
 */
export default function Tag({ children, variant = "default" }) {
  const variants = {
    default: "border-line text-ink-soft",
    accent: "border-accent/40 text-accent",
    dark: "border-white/20 text-white/70",
  };

  return (
    <span
      className={`border px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.12em] ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

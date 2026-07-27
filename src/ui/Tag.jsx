/**
 * Badge de technologie.
 *
 * En monospace et à angles presque droits (rayon 4px) : ça se lit comme
 * un identifiant technique, pas comme une pastille décorative. La casse
 * d'origine est conservée — « PostgreSQL », « Vue.js » — parce que ces
 * noms s'écrivent ainsi et qu'un recruteur technique le remarque.
 *
 * @param variant  "default" → filet gris sur fond clair
 *                 "accent"  → filet et texte verts (technos d'un projet)
 *
 * Utilisation :   <Tag>Java</Tag>   <Tag variant="accent">Docker</Tag>
 */
export default function Tag({ children, variant = "default" }) {
  const variants = {
    default: "border-line bg-surface text-ink-soft",
    accent: "border-accent/25 bg-accent-soft text-accent",
  };

  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2 py-1 font-mono text-[0.6875rem] font-medium leading-none ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

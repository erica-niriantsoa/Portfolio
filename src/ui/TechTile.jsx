import { motion } from "framer-motion";
import TechIcon from "./TechIcon";
import brandColor from "../lib/brandColor";
import { EASE } from "../lib/motion";

/**
 * Tuile d'une technologie : son logo et son nom.
 *
 * Animation d'entrée : la tuile monte en apparaissant avec un très léger
 * grossissement, décalée dans le temps selon sa position — les logos d'une
 * même catégorie se révèlent donc en cascade quand on arrive dessus.
 *
 * Au survol : la tuile se soulève, sa bordure passe au vert, son ombre
 * s'accentue et le logo prend sa couleur officielle de marque.
 *
 * @param name   nom affiché, ex. "Spring Boot"
 * @param icon   logo (voir data/skills.js)
 * @param index  position dans la catégorie, pour décaler l'animation
 */
export default function TechTile({ name, icon, index = 0 }) {
  const color = brandColor(icon);

  return (
    <motion.li
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      // once: true → ne rejoue pas si on remonte puis redescend
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: EASE }}
      // --tech porte la couleur officielle de la marque. On passe par une
      // variable CSS parce qu'un style inline ne peut pas décrire un survol :
      // c'est la classe group-hover:text-[var(--tech)] qui l'utilise.
      style={color ? { "--tech": color } : undefined}
      className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-line bg-white/70 px-2 py-5 text-center shadow-[0_1px_2px_rgb(0_0_0/0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_20px_-6px_rgb(0_0_0/0.12)]"
    >
      <TechIcon
        icon={icon}
        className={`h-8 w-8 shrink-0 text-ink-soft transition-colors duration-300 ${
          color ? "group-hover:text-[var(--tech)]" : "group-hover:text-accent"
        }`}
      />
      <span className="overline text-ink">{name}</span>
    </motion.li>
  );
}

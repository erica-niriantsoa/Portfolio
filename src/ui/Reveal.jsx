import { motion } from "framer-motion";
import { DURATION, EASE } from "../lib/motion";

/**
 * Anime l'apparition de son contenu quand il entre dans l'écran.
 * L'animation ne joue qu'une fois (`once: true`).
 *
 * @param delay  décalage en secondes — sert à faire apparaître une grille
 *               en cascade : delay={i * 0.08}
 *
 * Utilisation :   <Reveal><MonContenu /></Reveal>
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      // margin négatif : déclenche 80px avant que l'élément soit visible
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: DURATION, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

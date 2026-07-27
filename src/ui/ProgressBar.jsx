import { motion } from "framer-motion";

/**
 * Barre de progression fine et animée : elle se remplit de 0 % jusqu'à
 * `pct` la première fois qu'elle entre dans l'écran.
 *
 * @param pct    remplissage final, de 0 à 100
 * @param label  ce que la barre représente — lu par les lecteurs d'écran,
 *               qui ne « voient » pas la longueur de la barre
 */
export default function ProgressBar({ pct, label }) {
  return (
    <div
      className="h-[3px] overflow-hidden bg-line"
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <motion.div
        className="h-full bg-accent"
        initial={{ width: 0 }}
        // whileInView : l'animation démarre quand la barre devient visible,
        // pas au chargement de la page — sinon elle serait déjà terminée
        // avant qu'on ait fait défiler jusqu'ici.
        whileInView={{ width: `${pct}%` }}
        // once: true → ne rejoue pas si on remonte puis redescend
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </div>
  );
}

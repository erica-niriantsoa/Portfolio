// ═══════════════════════════════════════════════════════════════
//  RÉGLAGES D'ANIMATION partagés (Framer Motion)
//  Centralisés ici pour que tout le site bouge de la même façon :
//  change une valeur et toutes les animations suivent.
// ═══════════════════════════════════════════════════════════════

// Courbe d'accélération : départ franc, arrivée en douceur.
export const EASE = [0.21, 0.47, 0.32, 0.98];

// Durée standard d'une apparition, en secondes.
export const DURATION = 0.6;

// ── Apparition en cascade ────────────────────────────────────────
// À poser sur le conteneur : ses enfants s'animent l'un après l'autre.
// Utilisation :
//   <motion.div variants={staggerContainer} initial="hidden" animate="show">
//     <motion.h1 variants={fadeUpItem}>…</motion.h1>
//     <motion.p  variants={fadeUpItem}>…</motion.p>
//   </motion.div>
export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }, // délai entre chaque enfant
  },
};

// À poser sur chaque enfant : monte de 24px en apparaissant.
export const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: EASE },
  },
};

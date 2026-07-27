

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Nombre qui défile de 0 jusqu'à sa valeur, quand il entre dans l'écran.
 *
 * @param value     la valeur à atteindre, sous forme de texte.
 *                  Le suffixe est détecté tout seul : "25" → 25,
 *                  "10+" → compte jusqu'à 10 puis affiche "10+".
 * @param duration  durée de l'animation en secondes
 *
 * Utilisation :   <CountUp value="8" />
 */
export default function CountUp({ value, duration = 1.2 }) {
  const ref = useRef(null);
  // once: true → l'animation ne se relance pas à chaque passage
  const inView = useInView(ref, { once: true, margin: "-40px" });
  // Si le système demande moins d'animations, on affiche direct le résultat
  const reduceMotion = useReducedMotion();

  // Sépare les chiffres du suffixe : "10+" → target 10, suffix "+"
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : String(value);

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setDisplay(target);
      return;
    }

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      // easeOutCubic : démarre vite, ralentit à l'arrivée
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    // Indispensable : arrête l'animation si le composant disparaît
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration, reduceMotion]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

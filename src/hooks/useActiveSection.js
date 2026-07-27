import { useEffect, useState } from "react";

/**
 * Renvoie l'identifiant de la section actuellement à l'écran.
 * Sert à surligner la bonne entrée du menu pendant qu'on défile.
 *
 * @param ids  liste des id des sections, du haut vers le bas de la page.
 *             ⚠️ Ce tableau doit être stable entre deux affichages —
 *             passe `navIds` (calculé dans data/navigation.js), pas un
 *             `.map()` écrit directement dans le composant.
 * @returns    l'id de la section active
 *
 * Utilisation :   const active = useActiveSection(navIds);
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    // IntersectionObserver prévient quand une section entre ou sort de la
    // zone observée. C'est le navigateur qui fait le calcul : bien plus
    // léger que de mesurer la position de chaque section à chaque pixel
    // de défilement.
    const observer = new IntersectionObserver(
      (entries) => {
        const visibles = entries
          .filter((entry) => entry.isIntersecting)
          // S'il y en a plusieurs, on retient celle qui est le plus haut
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visibles[0]) setActive(visibles[0].target.id);
      },
      {
        // -45% en haut et en bas : une section ne devient « active » que
        // lorsqu'elle occupe la bande centrale de l'écran. Sans ça, deux
        // sections voisines seraient actives en même temps.
        rootMargin: "-45% 0px -45% 0px",
      },
    );

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean); // ignore un id qui n'existerait pas encore

    sections.forEach((section) => observer.observe(section));

    // Indispensable : sans ça l'observateur continue de tourner
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

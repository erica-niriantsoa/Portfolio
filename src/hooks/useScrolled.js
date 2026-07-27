import { useEffect, useState } from "react";

/**
 * Indique si la page a été défilée au-delà d'un certain nombre de pixels.
 *
 * Sert à la barre de navigation, qui devient opaque dès qu'on descend.
 * Le composant n'a plus à gérer lui-même l'écoute de l'événement scroll.
 *
 * @param {number} offset  seuil en pixels (défaut : 24)
 * @returns {boolean}      true si scrollY > offset
 *
 * Utilisation :   const scrolled = useScrolled();
 */
export default function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);

    // Vérifie tout de suite : si la page est rechargée alors qu'elle est
    // déjà défilée, la barre doit être opaque dès le premier affichage.
    onScroll();

    // `passive: true` : on ne bloque jamais le défilement → plus fluide.
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return scrolled;
}

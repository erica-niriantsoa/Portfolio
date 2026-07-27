import { ArrowUp } from "lucide-react";
import useScrolled from "../hooks/useScrolled";

/**
 * Bouton discret « revenir en haut », en bas à droite de l'écran.
 * N'apparaît qu'après 700px de défilement — avant, il ne servirait
 * à rien et encombrerait l'écran.
 *
 * C'est un <a href="#profil"> et non un <button> : le retour en haut
 * est une navigation, donc ça fonctionne au clic droit, au clavier, et
 * même sans JavaScript. Le défilement animé est déjà géré par
 * scroll-behavior dans styles/base.css
 */
export default function BackToTop() {
  const visible = useScrolled(700);

  return (
    <a
      href="#profil"
      aria-label="Revenir en haut de la page"
      // pointer-events-none quand il est invisible : sinon on pourrait
      // cliquer dessus par accident alors qu'on ne le voit pas
      // bottom-20 sur mobile : la barre d'adresse de Safari occupe le bas
      // de l'écran (~50px). À bottom-5, le bouton passait dessous, et il
      // recouvrait le texte des cartes projets.
      className={`card fixed bottom-20 right-4 z-40 flex h-11 w-11 items-center justify-center !rounded-full text-ink-soft shadow-lift transition-all duration-300 ease-soft hover:text-accent sm:bottom-5 sm:right-5 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="h-4 w-4" strokeWidth={1.75} />
    </a>
  );
}

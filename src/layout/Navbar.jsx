import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, navIds, profile } from "../data";
import useScrolled from "../hooks/useScrolled";
import useActiveSection from "../hooks/useActiveSection";

// Barre de navigation flottante : un cadre blanc détaché des bords, qui
// suit le défilement. Les entrées se modifient dans data/navigation.js
export default function Navbar() {
  // Menu déroulant du mobile : ouvert ou fermé
  const [open, setOpen] = useState(false);
  // Dès qu'on descend un peu, l'ombre du cadre s'accentue
  const scrolled = useScrolled(8);
  // Id de la section à l'écran, pour marquer la bonne entrée
  const active = useActiveSection(navIds);

  return (
    // Le <header> ne porte AUCUN fond : c'est le cadre intérieur qui est
    // visible. C'est ce qui donne l'effet « flottant ».
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-page pt-3 sm:pt-4">
        <nav
          className={`flex items-center justify-between gap-4 rounded-lg border border-line bg-white/85 px-4 py-2.5 backdrop-blur-md transition-shadow duration-300 ease-soft sm:px-5 ${
            scrolled ? "shadow-lift" : "shadow-soft"
          }`}
        >
          {/* Logo : ton prénom en majuscules, suivi d'un point coloré */}
          <a
            href="#profil"
            className="shrink-0 text-sm font-extrabold uppercase tracking-[0.08em] text-ink transition-colors duration-300 ease-soft hover:text-accent"
          >
            {profile.logo}
            <span className="text-accent">.</span>
          </a>

          {/* ── Menu bureau (caché sous 768px) ──
              De vrais liens #ancre plutôt que des boutons JavaScript :
              ils fonctionnent au clic droit, sont partageables (l'URL
              devient .../#projets) et le défilement animé est déjà géré
              par scroll-behavior dans styles/base.css */}
          <ul className="hidden items-center gap-7 md:flex lg:gap-9">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`mono-label transition-colors duration-300 ease-soft ${
                    active === link.id
                      ? "text-accent"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Bouton hamburger (mobile uniquement) ──
              Icônes Lucide plutôt que les caractères ☰ / ✕, dont la taille
              et le rendu changent d'un téléphone à l'autre.
              -mr-1 p-2 : zone tactile d'environ 40px sans décaler le bouton. */}
          <button
            onClick={() => setOpen(!open)}
            className="-mr-1 p-2 text-ink transition-colors duration-300 ease-soft hover:text-accent md:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>
        </nav>

        {/* ── Menu déroulant mobile ──
            Deuxième cadre flottant, juste sous le premier. */}
        {open && (
          <ul className="mt-2 flex flex-col rounded-lg border border-line bg-white/95 px-4 shadow-lift backdrop-blur-md md:hidden">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="border-b border-line/70 last:border-0"
              >
                <a
                  href={`#${link.id}`}
                  // On referme le menu après avoir cliqué sur une entrée
                  onClick={() => setOpen(false)}
                  aria-current={active === link.id ? "true" : undefined}
                  // py-4 : environ 48px de haut, confortable au doigt
                  className={`mono-label block py-4 transition-colors duration-300 ease-soft ${
                    active === link.id ? "text-accent" : "text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

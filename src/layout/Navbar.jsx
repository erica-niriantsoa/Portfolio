import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, navIds, profile } from "../data";
import useScrolled from "../hooks/useScrolled";
import useActiveSection from "../hooks/useActiveSection";

// Barre de navigation fixe, volontairement discrète : monogramme à gauche,
// intitulés en petites capitales à droite, filet fin en bas.
// Les entrées du menu se modifient dans data/navigation.js
export default function Navbar() {
  // Menu déroulant du mobile : ouvert ou fermé
  const [open, setOpen] = useState(false);
  // Dès qu'on descend un peu, le fond devient opaque
  const scrolled = useScrolled(8);
  // Id de la section à l'écran, pour souligner la bonne entrée
  const active = useActiveSection(navIds);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-paper/95 backdrop-blur-md"
          : "border-transparent bg-paper/70 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-10">
        {/* Monogramme = tes initiales séparées d'une barre oblique */}
        <a
          href="#profil"
          className="font-display text-lg tracking-widest text-ink transition-colors hover:text-accent"
        >
          {profile.monogram}
        </a>

        {/* ── Menu bureau (caché sous 768px) ──
            De vrais liens #ancre plutôt que des boutons JavaScript :
            ils fonctionnent au clic droit, sont partageables (l'URL
            devient .../#projets) et le défilement animé est déjà géré
            par scroll-behavior dans styles/base.css */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                // L'entrée active est soulignée en vert, pas surlignée :
                // c'est plus sobre et ça correspond au reste du design
                className={`overline block border-b-2 pb-1 transition-colors ${
                  active === link.id
                    ? "border-accent text-accent"
                    : "border-transparent text-ink-soft hover:text-ink"
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
            -mr-2 p-2 : zone tactile d'environ 40px, sans décaler le bouton. */}
        <button
          onClick={() => setOpen(!open)}
          className="-mr-2 p-2 text-ink transition-colors hover:text-accent md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? (
            <X className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* ── Menu déroulant mobile ── */}
      {open && (
        <ul className="flex flex-col border-t border-line bg-paper px-6 py-2 md:hidden">
          {navLinks.map((link) => (
            <li key={link.id} className="border-b border-line/60 last:border-0">
              <a
                href={`#${link.id}`}
                // On referme le menu après avoir cliqué sur une entrée
                onClick={() => setOpen(false)}
                aria-current={active === link.id ? "true" : undefined}
                // py-4 : environ 48px de haut, confortable au doigt
                className={`overline block py-4 transition-colors ${
                  active === link.id ? "text-accent" : "text-ink"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

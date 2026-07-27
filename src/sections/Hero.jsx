import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "../data";
import { staggerContainer, fadeUpItem } from "../lib/motion";
// Pour changer ta photo : remplace ce fichier dans src/assets/
import photo from "../assets/photo.png";

// « Niriantsoa Erica » → ["Niriantsoa", "Erica"] : une ligne par mot,
// pour que le grand nom forme un bloc de deux lignes.
const nameLines = profile.name.split(" ");

export default function Hero() {
  return (
    <section
      id="profil"
      // min-h-screen-safe : classe maison qui évite que le contenu sursaute
      // quand la barre d'adresse du navigateur mobile se masque.
      // pt-28 : laisse la place à la barre de navigation fixe.
      className="min-h-screen-safe flex flex-col justify-center px-6 pb-20 pt-28 lg:px-10"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl"
      >
        {/* ── Bandeau du haut : accroche à gauche, année à droite ── */}
        <motion.div
          variants={fadeUpItem}
          className="flex items-start justify-between gap-6 pb-12 sm:pb-16"
        >
          <p className="overline text-ink-soft">
            {profile.tagline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="overline shrink-0 text-right text-ink-soft">
            <span className="block">Portfolio</span>
            <span className="block">{new Date().getFullYear()}</span>
          </p>
        </motion.div>

        {/* ── Nom + photo ──
            Une seule colonne sur mobile et tablette, deux à partir de lg.
            La colonne du nom est 1,4 fois plus large que celle de la photo. */}
        <div className="grid items-center gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            {/* Badge de disponibilité, avec un point vert qui pulse */}
            <motion.p
              variants={fadeUpItem}
              className="overline mb-5 inline-flex items-center gap-2.5 text-accent"
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {profile.badge}
            </motion.p>

            {/* .display-name : Anton, et clamp() gère seul la taille selon
                la largeur de l'écran (voir styles/utilities.css) */}
            <motion.h1 variants={fadeUpItem} className="display-name text-ink">
              {nameLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={fadeUpItem}
              className="overline-lg mt-6 text-accent"
            >
              {profile.title}
            </motion.p>

            <motion.p
              variants={fadeUpItem}
              className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base"
            >
              {profile.about}
            </motion.p>

            {/* Le court trait vert, motif récurrent du design */}
            <motion.span
              variants={fadeUpItem}
              className="mt-8 block h-[2px] w-16 bg-accent"
            />

            {/* Liens d'action en petites capitales : dans ce design on
                évite les gros boutons pleins. py-3 garde une zone
                tactile confortable au doigt. */}
            <motion.div
              variants={fadeUpItem}
              className="mt-6 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-8"
            >
              <a
                href="#projets"
                className="group overline inline-flex items-center gap-2 py-3 text-ink transition-colors hover:text-accent"
              >
                Voir mes projets
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="group overline inline-flex items-center gap-2 py-3 text-ink-soft transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                M'écrire
              </a>
            </motion.div>
          </div>

          {/* ── Photo : cadre décalé + profondeur ──
              `group` sur le conteneur : le survol de la photo anime aussi
              le cadre vert qui se rapproche derrière. */}
          <motion.div
            variants={fadeUpItem}
            className="group relative mx-auto w-fit lg:justify-self-end"
          >
            {/* Cadre vert décalé en diagonale : c'est ce décalage qui donne
                l'impression de profondeur. Il se rapproche au survol. */}
            <span
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-accent transition-transform duration-500 ease-out group-hover:translate-x-1.5 group-hover:translate-y-1.5"
            />

            {/* aspect-[4/5] : format portrait, quelle que soit la largeur */}
            <div className="relative aspect-[4/5] w-56 overflow-hidden rounded-2xl bg-paper-2 shadow-[0_18px_40px_-18px_rgb(0_0_0/0.28)] ring-1 ring-line sm:w-64 lg:w-72">
              {/* Noir et blanc par défaut, couleur et léger zoom au survol */}
              <img
                src={photo}
                alt={profile.name}
                className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "../data";
import { staggerContainer, fadeUpItem } from "../lib/motion";
import Button from "../ui/Button";
// 👉 Pour changer ta photo : remplace src/assets/photo.png, puis relance
//    node scripts/optimize-screenshots.mjs  (qui régénère le .webp)
import photo from "../assets/photo.webp";

// « Niriantsoa Erica » → ["Niriantsoa", "Erica"] : une ligne par mot.
const nameLines = profile.name.split(" ");

export default function Hero() {
  return (
    <section
      id="profil"
      // min-h-screen-safe : classe maison qui évite que le contenu sursaute
      // quand la barre d'adresse du navigateur mobile se masque.
      // pt-28 laisse la place à la barre de navigation flottante (~62px),
      // et pb-32 est volontairement PLUS grand que pt : dans un conteneur
      // centré, un bas plus épais que le haut remonte le contenu. C'est ce
      // décalage qui place le bloc un peu au-dessus du centre optique.
      className="min-h-screen-safe flex items-center pb-32 pt-28"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        // Le même conteneur que toutes les autres sections : le texte part
        // donc exactement du même bord gauche que « Projets sélectionnés »
        // ou « Compétences & outils », et la photo finit au même bord droit.
        //
        // ⚠️ w-full est INDISPENSABLE ici : la <section> parente est en
        // `flex`, et un élément de flex se dimensionne sur son contenu, pas
        // sur la place disponible. Sans w-full, le conteneur restait plus
        // étroit que l'écran et son `margin-inline: auto` le centrait —
        // la photo se retrouvait au bord droit d'un bloc centré, et non au
        // bord droit de la page.
        className="container-page w-full"
      >
        {/* `1fr auto` : la colonne photo se réduit exactement à la largeur
            de la photo, et le texte prend TOUT le reste. Avec un ratio
            classique (1.75fr 1fr), la colonne de droite restait plus large
            que la photo et laissait un vide à sa gauche.

            Le passage en deux colonnes se fait dès md (768px) et non lg
            (1024px) : sur une fenêtre non maximisée ou avec un zoom du
            navigateur, la largeur passe souvent sous 1024px et tout
            s'empilait alors verticalement. */}
        <div className="grid items-center gap-14 md:grid-cols-[1fr_auto] md:gap-10 lg:gap-16">
          {/* Colonne de gauche : tout le texte, aligné au bord gauche */}
          <div className="text-left md:justify-self-start">
            {/* Badge de disponibilité : point vert qui pulse + texte mono */}
            <motion.p
              variants={fadeUpItem}
              className="mono-label inline-flex items-center gap-2.5 rounded-md border border-line bg-surface px-3 py-1.5 text-ink-soft"
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {profile.badge}
            </motion.p>

            {/* Phrase d'accueil, en serif italique pour la distinguer du
                nom sans lui voler la vedette. Disparaît si le champ
                `greeting` est vide dans data/profile.js */}
            {profile.greeting && (
              <motion.p
                variants={fadeUpItem}
                className="mt-6 font-display text-xl italic text-ink-soft sm:text-2xl"
              >
                {profile.greeting}
              </motion.p>
            )}

            {/* .display-title : serif Playfair, taille gérée par clamp()
                (voir styles/utilities.css) */}
            <motion.h1
              variants={fadeUpItem}
              className="display-title mt-1.5 text-ink"
            >
              {nameLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={fadeUpItem}
              className="mt-6 text-xl font-medium text-accent sm:text-2xl"
            >
              {profile.title}
            </motion.p>

            <motion.p
              variants={fadeUpItem}
              // max-w-2xl avec un texte de 18px, soit ~84 caractères par
              // ligne. C'est au-delà des ~75 habituellement recommandés,
              // et c'est un choix assumé : élargir ce paragraphe est ce qui
              // réduit le plus l'espace vide entre le texte et la photo.
              // Le compromis tient parce que le paragraphe est court —
              // 4 lignes. Ne pas reprendre cette largeur pour un texte long.
              className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft"
            >
              {profile.about}
            </motion.p>

            <motion.div
              variants={fadeUpItem}
              className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <Button href="#projets" iconEnd={ArrowRight}>
                Voir mes projets
              </Button>
              <Button
                href={profile.cvUrl}
                download
                variant="secondary"
                icon={Download}
              >
                Télécharger mon CV
              </Button>
            </motion.div>
          </div>

          {/* ── Photo ──
              Cadre sobre : filet fin, rayon moyen, ombre en deux couches
              pour la profondeur. Pas de forme décorative derrière.
              `group` : le survol de l'ensemble anime la photo. */}
          <motion.div
            variants={fadeUpItem}
            className="group relative mx-auto w-fit md:justify-self-end"
          >
            {/* Cadre rectangulaire, format portrait 4/5.
                Attention en modifiant ces largeurs : elles sont en rem, et
                1rem vaut 18px au-delà de 1280px (taille de référence fluide
                réglée dans styles/base.css). Donc 23.5rem ≈ 423px, pas 376. */}
            <div className="relative aspect-[4/5] w-60 overflow-hidden rounded-lg border border-line bg-surface shadow-lift sm:w-72 md:w-[19rem] lg:w-[23.5rem]">
              {/* En couleur, avec un léger zoom au survol : une animation
                  discrète, pas un effet. */}
              <img
                src={photo}
                alt={profile.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

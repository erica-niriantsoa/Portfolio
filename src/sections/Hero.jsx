import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "../data";
import { staggerContainer, fadeUpItem } from "../lib/motion";
import Button from "../ui/Button";
import BoldText from "../ui/BoldText";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
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
      // pb plus faible sur mobile : en pleine hauteur d'écran avec les
      // colonnes empilées, 8rem de marge basse laissaient une grande
      // bande blanche entre la photo et la section suivante.
      className="min-h-screen-safe flex items-center pb-16 pt-28 sm:pb-24 lg:pb-32"
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
            {/* Phrase d'accueil, en serif italique pour la distinguer du
                nom sans lui voler la vedette. Disparaît si le champ
                `greeting` est vide dans data/profile.js */}
            {profile.greeting && (
              <motion.p
                variants={fadeUpItem}
                className="font-display text-xl italic text-ink-soft sm:text-2xl"
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
              {/* BoldText met en gras les passages entourés de **
                  dans data/profile.js */}
              <BoldText text={profile.about} />
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

              {/* Réseaux, à la suite des boutons. Icônes seules : les
                  intitulés seraient redondants avec les logos, connus de
                  tous — mais chaque lien garde un aria-label pour les
                  lecteurs d'écran, qui ne « voient » pas le logo. */}
              <div className="flex items-center justify-center gap-2 sm:ml-1 sm:justify-start">
                <IconLink
                  href={profile.socials.github}
                  label="GitHub"
                  icon={GithubIcon}
                  external
                />
                <IconLink
                  href={profile.socials.linkedin}
                  label="LinkedIn"
                  icon={LinkedinIcon}
                  external
                />
                <IconLink
                  href={`mailto:${profile.email}`}
                  label={`Écrire à ${profile.email}`}
                  icon={Mail}
                />
              </div>
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
            {/* Cadre rectangulaire, format portrait 4/5, sur un fond rose
                très pâle : la photo étant détourée, il faut un aplat
                derrière, sinon la silhouette flotterait dans le vide.
                Ce rose fait aussi ressortir le blazer sombre.

                Attention en modifiant ces largeurs : elles sont en rem, et
                1rem vaut 18px au-delà de 1280px (taille de référence fluide
                réglée dans styles/base.css). Donc 23.5rem ≈ 423px, pas 376. */}
            <div className="relative aspect-[4/5] w-60 overflow-hidden rounded-lg border border-line bg-accent-panel shadow-lift sm:w-72 md:w-[19rem] lg:w-[23.5rem]">
              {/* object-contain et non object-cover : sur une image détourée,
                  `cover` rognerait la silhouette (une épaule, le haut de la
                  tête). `contain` l'affiche entière.
                  object-bottom : elle repose sur le bas du cadre, avec de
                  l'air au-dessus de la tête — c'est le cadrage naturel d'un
                  portrait, plutôt qu'une silhouette flottant au milieu. */}
              <img
                src={photo}
                alt={profile.name}
                className="h-full w-full object-contain object-bottom transition-transform duration-700 ease-soft group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// Lien vers un réseau : l'icône seule, dans un carré à filet fin de la
// même hauteur que les boutons voisins, pour que la rangée reste alignée.
function IconLink({ href, label, icon: Icon, external = false }) {
  return (
    <a
      href={href}
      // aria-label pour les lecteurs d'écran, title pour l'infobulle au
      // survol : sans texte visible, il faut les deux.
      aria-label={label}
      title={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line bg-white text-ink-soft shadow-soft transition-all duration-300 ease-soft hover:border-line-strong hover:text-accent"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

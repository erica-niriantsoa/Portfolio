import { Check } from "lucide-react";
import { skills, softSkills, languages, profile } from "../data";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import TechMarquee from "../ui/TechMarquee";
import ProgressBar from "../ui/ProgressBar";
import Quote from "../ui/Quote";

// Les deux rangées du carrousel portent chacune un sens : la première ce
// avec quoi Erica construit, la seconde ce avec quoi elle travaille.
// Le classement se fait par le champ `group` de data/skills.js — avant,
// la liste était simplement coupée en deux, sans logique.
// Calculé une fois au chargement du module, pas à chaque affichage :
// les données ne changent jamais en cours de route.
const rows = [
  {
    label: "Langages & frameworks",
    items: skills
      .filter((group) => group.group === "code")
      .flatMap((group) => group.items),
  },
  {
    label: "Outils & plateformes",
    items: skills
      .filter((group) => group.group === "outils")
      .flatMap((group) => group.items),
    reverse: true,
  },
];

// Section « Compétences ».
// Le contenu se modifie dans data/skills.js et data/profile.js
export default function Skills() {
  return (
    <section id="competences" className="section-y scroll-mt-16">
      <div className="container-page">
        <SectionHeading
          label="02 — Compétences"
          title="Compétences & outils"
          description="Les outils que j'utilise vraiment : ceux que j'ai pratiqués sur les projets ci-dessus, pas seulement croisés en cours."
        />
      </div>

      {/* ══ Carrousel de logos ══
          Hors du conteneur centré : le défilement doit partir d'un bord
          de l'écran et sortir par l'autre. */}
      <div className="mt-10 flex flex-col gap-6">
        {rows.map((row) => (
          <div key={row.label}>
            {/* L'intitulé reste dans le conteneur centré, la rangée en
                dessous s'étend d'un bord à l'autre de l'écran. */}
            <p className="container-page mono-label mb-3 text-ink-faint">
              {row.label}
              <span className="ml-2 text-ink-faint/60">{row.items.length}</span>
            </p>
            <TechMarquee items={row.items} reverse={row.reverse} />
          </div>
        ))}
      </div>

      <div className="container-page">
        {/* Les catégories ne sont plus lisibles sur les tuiles du
            carrousel : on les rappelle ici, avec le nombre de technos. */}
        <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          {skills.map((group) => (
            <li
              key={group.category}
              className="mono-label flex items-center gap-2 text-ink-faint"
            >
              <span
                className="h-1 w-1 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              {group.category}
              <span className="text-ink-faint/60">{group.items.length}</span>
            </li>
          ))}
        </ul>

        {/* ══ Deux cartes : langues, citation ══ */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="card h-full p-6">
              <h3 className="text-base font-semibold text-ink">Langues</h3>

              <div className="mt-6 flex flex-col gap-5">
                {languages.map((language) => (
                  <div key={language.lang}>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-sm font-medium text-ink">
                        {language.lang}
                      </span>
                      <span className="mono-label text-ink-faint">
                        {language.level}
                      </span>
                    </div>
                    <div className="mt-2.5">
                      {/* La barre se remplit quand elle entre dans l'écran */}
                      <ProgressBar
                        pct={language.pct}
                        label={`Niveau en ${language.lang}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="h-full">
            <Quote text={profile.quote.text} author={profile.quote.author} />
          </Reveal>
        </div>

        {/* ══ Soft skills ══
            En liste et non en badges : ce sont des expressions françaises,
            pas des noms de technologies. Le monospace des badges est fait
            pour les identifiants (« PostgreSQL »), il rend une phrase comme
            « Sens des responsabilités » plus large et moins lisible.
            Texte à 14px en gras normal au lieu de 11px monospace gris. */}
        <div className="mt-10">
          <h3 className="text-base font-semibold text-ink">Soft skills</h3>
          <Reveal>
            <ul className="card mt-5 grid gap-x-8 gap-y-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
              {softSkills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start gap-2.5 text-sm text-ink"
                >
                  <Check
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

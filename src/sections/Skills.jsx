import { skills, softSkills, languages, stats, profile } from "../data";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import TechTile from "../ui/TechTile";
import ProgressBar from "../ui/ProgressBar";
import Tag from "../ui/Tag";
import Quote from "../ui/Quote";
import CountUp from "../ui/CountUp";

// Section « Compétences ».
// 1. les technologies, groupées par catégorie, avec leur logo officiel
// 2. langues et soft skills à gauche, chiffres et citation à droite
//
// Le contenu se modifie dans data/skills.js, data/stats.js, data/profile.js
export default function Skills() {
  return (
    <section id="competences" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-10 lg:py-32">
        <SectionHeading
          label="Compétences & outils"
          description="Les technologies avec lesquelles je travaille au quotidien, du back-end à la cartographie."
        />

        {/* ══ Les technologies, catégorie par catégorie ══ */}
        <div className="mt-14 flex flex-col gap-12">
          {skills.map((group) => {
            // L'icône de catégorie est un composant stocké dans data/skills.js.
            // On la met dans une variable en majuscule, sinon JSX la prendrait
            // pour une balise HTML ordinaire.
            const CategoryIcon = group.icon;

            return (
              <div key={group.category}>
                {/* Intitulé de catégorie, prolongé par un filet fin jusqu'au
                    compteur de technos à droite */}
                <h3 className="overline flex items-center gap-3 text-ink">
                  <CategoryIcon
                    className="h-4 w-4 shrink-0 text-accent"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="shrink-0">{group.category}</span>
                  <span className="h-px flex-1 bg-line" />
                  <span className="shrink-0 text-ink-faint">
                    {group.items.length}
                  </span>
                </h3>

                {/* Le nombre de colonnes s'adapte tout seul à la largeur.
                    96px de minimum → 3 tuiles de front sur un téléphone.
                    min(96px, 100%) évite tout débordement sous 320px. */}
                <ul className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(min(96px,100%),1fr))] gap-3 sm:gap-4">
                  {group.items.map((item, i) => (
                    <TechTile
                      key={item.name}
                      name={item.name}
                      icon={item.icon}
                      index={i}
                    />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* ══ Langues + soft skills | chiffres + citation ══ */}
        <div className="mt-20 grid gap-14 border-t border-line pt-16 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-line">
          <div className="lg:pr-16">
            <h3 className="overline-lg text-ink">Langues</h3>
            <span className="mt-3 block h-[2px] w-10 bg-accent" />

            <div className="mt-7 flex flex-col gap-6">
              {languages.map((language) => (
                <Reveal key={language.lang}>
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="overline text-ink">{language.lang}</span>
                      <span className="text-xs text-ink-soft">
                        {language.level} ·{" "}
                        <span className="font-semibold text-accent">
                          {language.pct}%
                        </span>
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
                </Reveal>
              ))}
            </div>

            <h3 className="overline-lg mt-12 text-ink">Soft skills</h3>
            <span className="mt-3 block h-[2px] w-10 bg-accent" />
            <Reveal>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {softSkills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:pl-16">
            <h3 className="overline-lg text-ink">En chiffres</h3>
            <span className="mt-3 block h-[2px] w-10 bg-accent" />

            {/* Les chiffres défilent depuis 0 quand ils arrivent à l'écran */}
            <Reveal>
              <dl className="mt-7 grid grid-cols-3">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`px-4 first:pl-0 last:pr-0 ${
                      i > 0 ? "border-l border-line" : ""
                    }`}
                  >
                    <dd className="font-display text-3xl leading-none text-ink sm:text-4xl">
                      <CountUp value={stat.value} />
                    </dd>
                    <dt className="overline mt-2.5 text-ink-faint">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10">
                <Quote
                  text={profile.quote.text}
                  author={profile.quote.author}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

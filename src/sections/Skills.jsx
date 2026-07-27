import { skills, softSkills, languages, profile } from "../data";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import TechMarquee from "../ui/TechMarquee";
import ProgressBar from "../ui/ProgressBar";
import Tag from "../ui/Tag";
import Quote from "../ui/Quote";

// Toutes les technos à plat, puis coupées en deux rangées qui défilent en
// sens opposés. Calculé une fois au chargement du module, pas à chaque
// affichage : les données ne changent jamais en cours de route.
const allTech = skills.flatMap((group) => group.items);
const middle = Math.ceil(allTech.length / 2);
const topRow = allTech.slice(0, middle);
const bottomRow = allTech.slice(middle);

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
      <div className="mt-10 flex flex-col gap-3">
        <TechMarquee items={topRow} duration={42} />
        <TechMarquee items={bottomRow} duration={38} reverse />
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

        {/* ══ Soft skills ══ */}
        <div className="mt-10">
          <h3 className="text-base font-semibold text-ink">Soft skills</h3>
          <Reveal>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {softSkills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

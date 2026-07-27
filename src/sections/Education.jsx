import { education } from "../data";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";

// Section « Formation » : frise verticale.
// Le contenu se modifie dans data/education.js
export default function Education() {
  return (
    <section
      id="formation"
      className="scroll-mt-16 border-t border-line bg-paper-2/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_2.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              label="Formation"
              description="Mon parcours académique, du baccalauréat à la licence en cours."
            />
          </div>

          {/* La bordure gauche de la liste dessine le trait de la frise */}
          <ol className="flex flex-col gap-12 border-l border-line pl-6">
            {education.map((step, i) => (
              <Reveal key={step.degree} delay={i * 0.1}>
                <li className="relative">
                  {/* Le carré sur le trait. Décalage : le bord gauche du
                      <li> est à 1.5rem (pl-6) + 1px (border-l) du bord de
                      la liste ; il faut reculer d'autant, puis de la moitié
                      du carré (3px), moins le milieu du trait. → 27px */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[27px] top-1.5 h-1.5 w-1.5 bg-accent"
                  />

                  {/* La période est facultative dans data/education.js */}
                  {step.period && (
                    <p className="overline text-accent">{step.period}</p>
                  )}

                  <h3 className="overline-lg mt-2 text-ink">{step.degree}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{step.school}</p>

                  {/* Les matières, seulement si la liste n'est pas vide */}
                  {step.details.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {step.details.map((detail) => (
                        <Tag key={detail}>{detail}</Tag>
                      ))}
                    </div>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

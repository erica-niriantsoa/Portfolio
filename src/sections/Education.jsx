import { GraduationCap } from "lucide-react";
import { education } from "../data";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";

// Section « Formation », présentée en cartes plutôt qu'en frise :
// même structure que les cartes projets, donc même lecture.
// Le contenu se modifie dans data/education.js
export default function Education() {
  return (
    <section
      id="formation"
      className="section-y scroll-mt-16 border-y border-line bg-surface"
    >
      <div className="container-page">
        <SectionHeading
          label="03 — Formation"
          title="Mon parcours"
          description="Où j'ai appris, et ce que j'y ai construit."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {education.map((step, i) => (
            <Reveal key={step.degree} delay={i * 0.08} className="h-full">
              <article className="card card-hover flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line bg-white">
                    <GraduationCap
                      className="h-4 w-4 text-accent"
                      strokeWidth={1.75}
                    />
                  </span>
                  {/* La période est facultative dans data/education.js */}
                  {step.period && (
                    <span className="mono-label text-ink-faint">
                      {step.period}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-base font-semibold leading-snug text-ink">
                  {step.degree}
                </h3>
                <p className="mt-2 flex-1 text-sm text-ink-soft">
                  {step.school}
                </p>

                {/* Les matières, seulement si la liste n'est pas vide */}
                {step.details.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-5">
                    {step.details.map((detail) => (
                      <Tag key={detail}>{detail}</Tag>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import { projects, profile } from "../data";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import ProjectCard from "./ProjectCard";

// Section « Projets » : ce fichier ne gère que la mise en page.
// L'apparence d'un projet est dans ProjectCard.jsx
// Le contenu est dans data/projects.js
export default function Projects() {
  return (
    <section
      id="projets"
      className="scroll-mt-16 border-t border-line bg-paper-2/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
        {/* Colonne d'intitulé à gauche, projets à droite — comme sur le
            schéma. Une seule colonne empilée sous lg. */}
        <div className="grid gap-12 lg:grid-cols-[1fr_2.2fr] lg:gap-16">
          {/* lg:sticky : l'intitulé reste à l'écran pendant qu'on fait
              défiler la liste des projets à côté */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              label="Projets sélectionnés"
              description="Des réalisations concrètes menées au fil de ma formation, du back-end à la cartographie interactive."
            />
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group overline mt-8 inline-flex items-center gap-2 py-2 text-accent"
            >
              Tout voir sur GitHub
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal
                key={project.title}
                delay={(i % 2) * 0.08}
                className="h-full"
              >
                <ProjectCard project={project} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

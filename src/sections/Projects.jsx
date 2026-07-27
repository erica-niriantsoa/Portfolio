import { ArrowUpRight } from "lucide-react";
import { projects, profile } from "../data";
import { GithubIcon } from "../ui/Icons";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import ProjectCard from "./ProjectCard";

// Section « Projets » : ce fichier ne gère que la grille.
// L'apparence d'une carte est dans ProjectCard.jsx
// Le contenu est dans data/projects.js
export default function Projects() {
  return (
    <section
      id="projets"
      className="section-y scroll-mt-16 border-y border-line bg-surface"
    >
      <div className="container-page">
        {/* Intitulé à gauche, lien GitHub à droite — alignés sur leur
            base commune à partir de sm, empilés en dessous */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-12">
          <SectionHeading
            label="01 — Projets"
            title="Projets réalisés"
            description="Chacun de ces projets m'a appris quelque chose que les cours seuls ne m'auraient pas appris — du back-end à la cartographie interactive."
          />
          <Reveal delay={0.1}>
            <Button
              href={profile.socials.github}
              external
              variant="secondary"
              icon={GithubIcon}
              iconEnd={ArrowUpRight}
            >
              Tout voir sur GitHub
            </Button>
          </Reveal>
        </div>

        {/* 1 colonne sur mobile, 2 sur tablette, 3 sur ordinateur */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              // Cascade sur la ligne, puis on repart à 0 (i % 3)
              delay={(i % 3) * 0.08}
              className="h-full"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

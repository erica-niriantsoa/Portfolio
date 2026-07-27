import { ExternalLink, Users, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import Tag from "../ui/Tag";

/**
 * Un projet, présenté comme une entrée numérotée : 01, 02, 03…
 * Pas d'encadré ni d'ombre — dans ce design, ce sont le numéro et le
 * filet fin qui séparent les projets.
 *
 * 👉 C'EST ICI qu'on modifie l'apparence d'un projet (par exemple pour
 *    ajouter une capture d'écran sous le titre). Le contenu, lui,
 *    se modifie dans data/projects.js
 *
 * @param project  un objet du tableau `projects` (voir data/projects.js)
 * @param index    position dans la liste, à partir de 0 → affiché "01"
 */
export default function ProjectCard({ project, index }) {
  // 0 → "01", 9 → "10"
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="flex h-full flex-col">
      <div className="flex items-baseline gap-4">
        <span
          className="font-display text-xl leading-none text-accent"
          aria-hidden="true"
        >
          {number}
        </span>
        <h3 className="overline-lg min-w-0 flex-1 text-ink">
          {project.title}
        </h3>
      </div>

      {/* Ligne d'informations : période, et mention si c'est un projet
          de groupe. flex-wrap pour que ça tienne sur un écran étroit. */}
      <div className="ml-9 mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="overline text-ink-faint">{project.period}</span>
        {project.team && (
          <span className="inline-flex items-center gap-1.5 text-[0.625rem] font-medium uppercase tracking-wider text-ink-faint">
            <Users className="h-3 w-3" strokeWidth={1.5} />
            Projet de groupe
          </span>
        )}
      </div>

      {/* Le filet fin qui souligne le titre */}
      <span className="ml-9 mt-4 block h-px bg-line" />

      {/* flex-1 : pousse les liens en bas, pour que les projets d'une même
          ligne alignent leur bas de bloc */}
      <p className="ml-9 mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
        {project.description}
      </p>

      {/* Technologies utilisées */}
      <div className="ml-9 mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <Tag key={tech} variant="accent">
            {tech}
          </Tag>
        ))}
      </div>

      {/* Liens : dépôts GitHub et/ou démo en ligne */}
      <div className="ml-9 mt-5 flex flex-wrap gap-x-5 gap-y-2">
        {project.links?.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group overline inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
          >
            {/* type: "demo" → icône lien externe, sinon → icône GitHub */}
            {link.type === "demo" ? (
              <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
            ) : (
              <GithubIcon className="h-3.5 w-3.5" />
            )}
            {link.label}
            <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
    </article>
  );
}

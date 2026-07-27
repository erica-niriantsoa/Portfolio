import { ExternalLink, Users } from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import Tag from "../ui/Tag";
import Button from "../ui/Button";
import ProjectGallery from "../ui/ProjectGallery";

/**
 * Carte d'un projet.
 *
 * Structure, de haut en bas : capture d'écran, période, titre,
 * description, badges de technos, boutons. Le même ordre pour toutes
 * les cartes — c'est ce qui permet au visiteur de comparer les projets
 * d'un coup d'œil.
 *
 * 👉 C'est ici qu'on modifie l'apparence d'un projet.
 *    Le contenu, lui, se modifie dans data/projects.js
 *
 * @param project  un objet du tableau `projects` (voir data/projects.js)
 */
export default function ProjectCard({ project }) {
  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      {/* ── Visuel ──
          aspect-video (16/9) : toutes les cartes réservent exactement la
          même hauteur d'image, donc rien ne saute pendant le chargement,
          et les cartes restent compactes. */}
      <div className="relative">
        {project.images?.length ? (
          <ProjectGallery images={project.images} title={project.title} />
        ) : (
          /* Sans capture : un aplat sobre avec l'initiale du projet.
             Volontairement discret — pas de « image à venir », qui
             donnerait l'impression d'un site inachevé. */
          <div className="flex aspect-video items-center justify-center border-b border-line bg-surface">
            <span
              className="font-mono text-6xl font-medium text-ink-faint/25"
              aria-hidden="true"
            >
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Mention « projet de groupe », posée sur le visuel */}
        {project.team && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-sm border border-line bg-white/90 px-2 py-1 font-mono text-[0.625rem] font-medium text-ink-soft backdrop-blur-sm">
            <Users className="h-3 w-3" strokeWidth={1.75} />
            Projet de groupe
          </span>
        )}
      </div>

      {/* ── Contenu ── */}
      <div className="flex flex-1 flex-col p-5">
        <p className="mono-label text-ink-faint">{project.period}</p>

        <h3 className="mt-2 text-base font-semibold leading-snug tracking-tight text-ink">
          {project.title}
        </h3>

        {/* line-clamp-3 : la description est coupée à trois lignes.
            Sans ça, un projet très décrit rend sa carte beaucoup plus
            haute que ses voisines et la grille perd son alignement.
            flex-1 pousse ensuite badges et boutons vers le bas. */}
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-soft">
          {project.description}
        </p>

        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <Tag key={tech} variant="accent">
              {tech}
            </Tag>
          ))}
        </div>

        {/* ── Boutons ──
            type: "demo" → bouton plein (c'est l'action la plus
            intéressante quand elle existe) ; sinon bouton à filet. */}
        <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
          {project.links?.map((link) => (
            <Button
              key={link.url}
              href={link.url}
              external
              size="sm"
              variant={link.type === "demo" ? "primary" : "secondary"}
              icon={link.type === "demo" ? ExternalLink : GithubIcon}
            >
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </article>
  );
}

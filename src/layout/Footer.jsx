import { Mail, Download, ArrowUpRight } from "lucide-react";
import { profile } from "../data";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

// Les 4 liens du pied de page. Il n'y a plus de section « Contact » :
// tout est rassemblé ici, à la fin de la page.
//
//   external → ouvre dans un nouvel onglet
//   download → télécharge le fichier au lieu de l'ouvrir
const links = [
  {
    label: "LinkedIn",
    href: profile.socials.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "GitHub",
    href: profile.socials.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Mon CV",
    href: profile.cvUrl,
    icon: Download,
    download: true,
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-16 border-t border-line bg-paper-2/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div>
            <p className="overline-lg text-ink">Travaillons ensemble</p>
            <span className="mt-3 block h-[2px] w-10 bg-accent" />
            <p className="mt-4 text-sm text-ink-soft">
              {profile.location} · Disponible immédiatement
            </p>
          </div>

          {/* Le nombre de colonnes s'adapte tout seul à la largeur.
              min(150px, 100%) évite tout débordement sous 320px. */}
          <ul className="grid w-full grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-3 lg:w-auto lg:grid-cols-4">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    {...(link.download ? { download: true } : {})}
                    className="group flex items-center gap-3 rounded-xl border border-line bg-white/70 px-4 py-3.5 shadow-[0_1px_2px_rgb(0_0_0/0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_8px_20px_-6px_rgb(0_0_0/0.12)]"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-accent" />
                    <span className="overline text-ink">{link.label}</span>
                    <ArrowUpRight
                      className="ml-auto h-3.5 w-3.5 shrink-0 text-ink-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Ligne du bas : mentions, l'année se met à jour toute seule */}
        <div className="mt-14 flex flex-col items-center gap-2 border-t border-line pt-7 sm:flex-row sm:justify-between">
          <p className="overline text-ink-faint">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="overline text-ink-faint">{profile.title}</p>
        </div>
      </div>
    </footer>
  );
}

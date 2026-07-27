import { Mail, Download } from "lucide-react";
import { profile } from "../data";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

// Les 4 liens du pied de page.
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
    <footer className="border-t border-line bg-surface">
      <div className="container-page py-10">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Liens : discrets, en ligne — la vraie invitation à écrire est
              dans la section Contact juste au-dessus */}
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
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
                    className="mono-label inline-flex items-center gap-2 text-ink-soft transition-colors duration-300 ease-soft hover:text-accent"
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* L'année se met à jour toute seule */}
          <p className="mono-label text-center text-ink-faint">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

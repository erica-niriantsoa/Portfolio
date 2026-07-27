import { useState } from "react";
import { Send, CircleCheck, CircleAlert, Mail, Phone, MapPin } from "lucide-react";
import { profile } from "../data";
import { LinkedinIcon } from "../ui/Icons";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Field from "../ui/Field";
import Button from "../ui/Button";

// ⚠️ Ce nom doit être IDENTIQUE à l'attribut name du formulaire caché
//    placé dans index.html. C'est lui que Netlify utilise pour ranger les
//    messages reçus. Si tu le changes ici, change-le aussi là-bas.
const FORM_NAME = "contact";

// Un lien tel: ne doit contenir que des chiffres et le +, sinon certains
// téléphones n'arrivent pas à composer le numéro.
const phoneHref = `tel:${profile.phone.replace(/[^+\d]/g, "")}`;

export default function Contact() {
  // idle → en attente · sending → envoi en cours · sent → envoyé · error → échec
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    const form = event.target;
    const data = new FormData(form);
    // Netlify identifie le formulaire grâce à ce champ
    data.append("form-name", FORM_NAME);

    try {
      // On envoie vers "/" : c'est Netlify qui intercepte la requête.
      // 👉 En local (npm run dev) ça échouera forcément, il n'y a pas de
      //    Netlify pour répondre. Le formulaire ne marche qu'en ligne.
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-y scroll-mt-16">
      <div className="container-page">
        <SectionHeading
          label="04 — Contact"
          title="Travaillons ensemble"
          description="Un stage à proposer, une question, une envie de travailler ensemble ? Écrivez-moi — je réponds toujours."
        />

        {/* Coordonnées à gauche, formulaire à droite — empilés sous lg */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.5fr]">
          <Reveal className="h-full">
            <div className="card h-full p-6">
              <h3 className="text-base font-semibold text-ink">
                Mes coordonnées
              </h3>

              <ul className="mt-6 flex flex-col gap-5">
                <ContactLine
                  icon={Mail}
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <ContactLine
                  icon={Phone}
                  label="Téléphone"
                  value={profile.phone}
                  href={phoneHref}
                />
                <ContactLine
                  icon={LinkedinIcon}
                  label="LinkedIn"
                  value="Voir mon profil"
                  href={profile.socials.linkedin}
                  external
                />
                <ContactLine
                  icon={MapPin}
                  label="Localisation"
                  value={profile.location}
                />
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              name={FORM_NAME}
              method="POST"
              onSubmit={handleSubmit}
              className="card p-6 sm:p-8"
            >
              {/* Piège à robots : un humain ne voit pas ce champ et le
                  laisse donc vide. Netlify jette les envois où il est rempli. */}
              <p className="hidden">
                <label>
                  Ne pas remplir : <input name="bot-field" tabIndex={-1} />
                </label>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nom" name="nom" required placeholder="Votre nom" />
                <Field
                  label="Prénom"
                  name="prenom"
                  placeholder="Votre prénom"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  placeholder="vous@exemple.com"
                />
                <Field
                  label="Téléphone"
                  name="telephone"
                  type="tel"
                  placeholder="+261 …"
                />
              </div>

              <div className="mt-5">
                <Field
                  label="Message"
                  name="message"
                  textarea
                  required
                  placeholder="Écrivez votre message ici"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "sending"}
                icon={Send}
                className="mt-7"
              >
                {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
              </Button>

              {/* aria-live : un lecteur d'écran annonce le résultat sans
                  qu'on ait besoin de déplacer le focus */}
              <div aria-live="polite" className="mt-5 empty:mt-0">
                {status === "sent" && (
                  <p className="flex items-start gap-2.5 text-sm text-accent">
                    <CircleCheck
                      className="mt-0.5 h-4 w-4 shrink-0"
                      strokeWidth={1.75}
                    />
                    Message envoyé, merci ! Je vous réponds au plus vite.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex flex-wrap items-start gap-x-1.5 gap-y-1 text-sm text-ink-soft">
                    <CircleAlert
                      className="mt-0.5 h-4 w-4 shrink-0"
                      strokeWidth={1.75}
                    />
                    L'envoi a échoué. Écrivez-moi directement à
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-medium text-accent underline underline-offset-2"
                    >
                      {profile.email}
                    </a>
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Une ligne de coordonnée, dans la carte de gauche
function ContactLine({ icon: Icon, label, value, href, external = false }) {
  const body = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line bg-surface">
        <Icon className="h-4 w-4 text-accent" strokeWidth={1.75} />
      </span>
      {/* min-w-0 + break-words : l'email est plus large que la colonne
          sur un petit écran, il doit pouvoir passer à la ligne */}
      <span className="min-w-0">
        <span className="mono-label block text-ink-faint">{label}</span>
        <span className="mt-1 block break-words text-sm text-ink">{value}</span>
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="flex items-start gap-3.5 transition-colors duration-300 ease-soft hover:text-accent"
        >
          {body}
        </a>
      ) : (
        <span className="flex items-start gap-3.5">{body}</span>
      )}
    </li>
  );
}

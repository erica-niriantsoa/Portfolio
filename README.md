# Portfolio — Niriantsoa Erica

Portfolio personnel, construit avec **React + Vite + Tailwind CSS v4**.

🌐 **[niriantsoaerica.netlify.app](https://niriantsoaerica.netlify.app)**

## Commandes

```bash
npm install                              # une seule fois
npm run dev                              # site en local
npm run build                            # version de production (dist/)
npm run lint                             # vérification du code
node scripts/optimize-screenshots.mjs    # convertit les captures en WebP
```

## Modifier le contenu

**Tout le contenu est dans `src/data/`** — un fichier par sujet, aucun texte n'est écrit en dur dans les composants :

| Fichier | Contenu |
|---|---|
| `profile.js` | nom, titre, présentation, email, téléphone, réseaux, CV, citation |
| `skills.js` | technologies (avec leur logo), soft skills, langues |
| `projects.js` | les projets : titre, période, description, technos, captures, liens |
| `education.js` | la formation |
| `navigation.js` | les entrées du menu |
| `stats.js` | compteurs calculés depuis les autres fichiers |

Deux astuces :

- Dans `profile.about`, entoure un passage de `**` pour l'afficher en gras.
- `stats.js` compte les projets et les technologies automatiquement — pas de chiffre à mettre à jour à la main.

## Ajouter une capture de projet

Les captures brutes pèsent jusqu'à 1,5 Mo. Elles ne sont **jamais** référencées directement.

1. Place le fichier d'origine dans `image/<projet>/`
2. Ajoute une ligne dans `scripts/optimize-screenshots.mjs`
3. Lance `node scripts/optimize-screenshots.mjs` → produit un `.webp` dans `src/assets/projects/`
4. Importe ce `.webp` dans `src/data/projects.js` et ajoute-le au tableau `images`

Plusieurs images pour un projet créent une galerie avec flèches et pastilles.

> Le dossier `image/` est ignoré par Git : ce sont des sources locales.
> **Pense à les sauvegarder ailleurs** (Drive, clé USB).

## Structure

```
src/
├── data/          👉 le contenu (voir tableau ci-dessus)
├── sections/      une section de page par fichier
├── layout/        barre de navigation, pied de page
├── ui/            briques réutilisables (boutons, badges, galerie…)
├── hooks/         défilement, section active
├── lib/           animations, couleurs de marque
└── styles/        theme.css → LE système de design
```

Le **système de design** tient dans `src/styles/theme.css` : une palette,
trois rayons de bordure, deux ombres, une courbe d'animation. Modifier une
valeur là suffit à changer tout le site.

## Déploiement

Hébergé sur **Netlify**, branché sur ce dépôt : chaque `git push` sur `main`
relance le build et met le site à jour automatiquement.

⚠️ **Le formulaire de contact dépend d'un bloc caché dans `index.html`.**
Netlify détecte les formulaires en analysant le HTML au moment du déploiement.
Le vrai formulaire étant construit par React dans le navigateur, il n'apparaît
pas dans le fichier produit — cette copie cachée sert uniquement à le déclarer.
**Ne pas la supprimer**, et garder ses noms de champs identiques à ceux de
`src/sections/Contact.jsx`.

Le formulaire ne fonctionne pas en local (`npm run dev`) : il n'y a pas de
Netlify pour recevoir l'envoi.

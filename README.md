# Portfolio

Mon portfolio de développeur web, construit avec **React + Vite + Tailwind CSS**.

## 🚀 Commandes

```bash
npm run dev      # Lance le site en local (http://localhost:5173)
npm run build    # Génère la version de production (dossier dist/)
npm run preview  # Prévisualise la version de production
```

## ✏️ Comment personnaliser

**Tout se passe dans `src/data.js`** — modifie ce fichier pour changer :

- Ton nom, ton rôle, ton accroche
- Ton email, ta localisation, tes liens (GitHub, LinkedIn, CV)
- La section « À propos »
- Tes compétences
- Tes projets

Pour ton **CV** : place ton fichier PDF dans le dossier `public/` et nomme-le `cv.pdf`.

## 📁 Structure

```
src/
├── data.js              # 👉 TES INFOS (à modifier)
├── App.jsx              # Assemble les sections
├── index.css            # Styles globaux + thème
└── components/
    ├── Navbar.jsx       # Barre de navigation
    ├── Hero.jsx         # Section d'accueil
    ├── About.jsx        # À propos
    ├── Skills.jsx       # Compétences
    ├── Projects.jsx     # Projets
    ├── Contact.jsx      # Contact
    └── Footer.jsx       # Pied de page
```

## 🌐 Mettre en ligne (gratuit)

1. Crée un compte sur [vercel.com](https://vercel.com) avec ton compte GitHub
2. Pousse ce projet sur un repo GitHub
3. Dans Vercel : « Add New Project » → sélectionne ton repo → « Deploy »
4. Ton portfolio est en ligne avec une URL à mettre sur ton CV ! 🎉

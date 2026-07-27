// ═══════════════════════════════════════════════════════════════
//  Optimise les captures de projets
// ═══════════════════════════════════════════════════════════════
//  Les captures brutes du dossier image/ pèsent jusqu'à 1,5 Mo pièce :
//  bien trop pour une page web. Ce script les redimensionne à 1280px de
//  large et les convertit en WebP (format ~4x plus léger qu'un PNG à
//  qualité équivalente), dans src/assets/projects/.
//
//  À lancer à la main quand tu ajoutes une capture :
//      node scripts/optimize-screenshots.mjs
//
//  Pour ajouter un projet : ajoute une ligne dans SOURCES ci-dessous,
//  puis référence le fichier produit dans src/data/projects.js
// ═══════════════════════════════════════════════════════════════

import sharp from "sharp";
import { mkdir, readdir, stat } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "src", "assets", "projects");

// [ fichier source (relatif à image/), nom de sortie sans extension ]
//
// Plusieurs images par projet : elles deviennent une petite galerie dans
// la carte du projet. Mets toujours la plus parlante en premier, c'est
// celle qui s'affiche par défaut.
const SOURCES = [
  // ── Travaux Routiers ──
  ["travaux_routier/2_liste_des_travaux.png", "travaux-routiers-1"],
  ["travaux_routier/4_tab_recap.png", "travaux-routiers-2"],
  ["travaux_routier/8_crud_signalement.png", "travaux-routiers-3"],

  // ── Gestion de Cinéma ──
  ["cinema/Capture d'écran 2026-07-25 004539.png", "cinema-1"],
  ["cinema/Capture d'écran 2026-07-25 005644.png", "cinema-2"],
  ["cinema/Capture d'écran 2026-07-25 004029.png", "cinema-3"],

  // ── NewApp (back-office sur l'API PrestaShop) ──
  ["prestashop-newApp/Capture d'écran 2026-07-27 143854.png", "newapp-1"],
  ["prestashop-newApp/Capture d'écran 2026-07-27 143902.png", "newapp-2"],
  ["prestashop-newApp/Capture d'écran 2026-07-27 143919.png", "newapp-3"],

  // ── Boutique PrestaShop ──
  //  L'admin d'abord : c'est là qu'on voit le travail de configuration.
  //  Les captures du thème par défaut (« SAMPLE 1 », Lorem ipsum) sont
  //  volontairement écartées, elles laissaient croire à une boutique
  //  jamais personnalisée.
  ["prestashop/Capture d'écran 2026-05-11 082014.png", "prestashop-1"],
  ["prestashop/Capture d'écran 2026-05-11 082035.png", "prestashop-2"],
  ["prestashop/Capture d'écran 2026-05-16 125658.png", "prestashop-3"],

  // ── Front-Office Visa ──
  ["VISA/Capture d'écran 2026-07-27 203712.png", "visa-1"],
  ["VISA/Capture d'écran 2026-07-27 203744.png", "visa-2"],
  ["VISA/Capture d'écran 2026-07-27 203756.png", "visa-3"],
];

const WIDTH = 1280;
const QUALITY = 78;

// La photo de profil, traitée à part : elle vit dans src/assets/ et
// s'affiche au maximum en 416px de large. On la sort en 960px, soit un peu
// plus du double, pour qu'elle reste nette sur les écrans haute densité.
const PORTRAIT = { from: "src/assets/photo.png", to: "src/assets/photo.webp" };
const PORTRAIT_WIDTH = 960;

await mkdir(outDir, { recursive: true });

for (const [source, name] of SOURCES) {
  const from = join(root, "image", source);
  const to = join(outDir, `${name}.webp`);

  try {
    const before = (await stat(from)).size;

    await sharp(from)
      // withoutEnlargement : ne jamais agrandir une capture déjà petite,
      // ça ne ferait que la rendre floue
      .resize({ width: WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(to);

    const after = (await stat(to)).size;
    const saved = Math.round((1 - after / before) * 100);

    console.log(
      `  ${name.padEnd(18)} ${(before / 1024).toFixed(0).padStart(5)} ko → ` +
        `${(after / 1024).toFixed(0).padStart(4)} ko  (-${saved} %)`,
    );
  } catch (error) {
    console.error(`  ✗ ${name} : ${error.message}`);
  }
}

// ── Photo de profil ──
try {
  const from = join(root, PORTRAIT.from);
  const to = join(root, PORTRAIT.to);
  const before = (await stat(from)).size;

  await sharp(from)
    .resize({ width: PORTRAIT_WIDTH, withoutEnlargement: true })
    .webp({ quality: 82 }) // un peu plus haut : c'est un visage
    .toFile(to);

  const after = (await stat(to)).size;
  console.log(
    `  ${"photo".padEnd(18)} ${(before / 1024).toFixed(0).padStart(5)} ko → ` +
      `${(after / 1024).toFixed(0).padStart(4)} ko  ` +
      `(-${Math.round((1 - after / before) * 100)} %)`,
  );
} catch (error) {
  console.error(`  ✗ photo : ${error.message}`);
}

console.log(`\nFichiers produits dans src/assets/projects/ :`);
console.log("  " + (await readdir(outDir)).join(", "));

import { MotionConfig } from "framer-motion";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";

// Assemble la page. Pour changer l'ordre des sections, il suffit de
// déplacer les lignes ci-dessous — et de mettre à jour data/navigation.js
// pour que le menu suive le même ordre.
export default function App() {
  return (
    // reducedMotion="user" : si le téléphone ou l'ordinateur est réglé sur
    // « réduire les animations », Framer Motion n'anime plus les positions.
    // Le contenu reste évidemment visible.
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
      </main>
      {/* Il n'y a plus de section Contact : les liens (LinkedIn, GitHub,
          email, CV) sont rassemblés dans le pied de page. */}
      <Footer />
    </MotionConfig>
  );
}

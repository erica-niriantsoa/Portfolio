import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";

// Point d'entrée de l'application : accroche <App /> dans la div #root
// de index.html. Il n'y a normalement jamais besoin de toucher ce fichier.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

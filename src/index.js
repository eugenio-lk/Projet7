import React from "react"; // Import bibliotheque react
import ReactDOM from "react-dom/client"; // Import de la partie client de react dom qui est responsable du rendu des composants react dans le navigateur.
import { RouterProvider } from "react-router-dom"; // Import de router provider de la bibliothèque react-rooter-dom qui est utilisé pour gérer la navigation entre différentes routes de l'appli
import { router } from "./routes/router"; // Import du fichier router 


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Gestion de navigation en fonction des routes définies dans l'objet router*/}
  </React.StrictMode>
);
import React from "react";
import "../styles/ErrorPage.scss";
import Main from "../layout/Main";
import { Link } from "react-router-dom"; // Import de l'élément link de la bibliotheque react router qui permet de créer des liens entre les différentes pages d'application.
export function ErrorPage() {
  return (
  <>
     
     <Main>  
      <div className="error__page">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to ="/">Retourner sur la d'accueil</Link>
      </div>
     </Main>
  </>
  );
  
}

export default ErrorPage;
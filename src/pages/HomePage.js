import React from 'react'; // Import bibiothèque react
import "../styles/HomePage.scss"; // Import qui permet d'ajouter les styles de la page HomePage.scss
import Banner from "../layout/Banner.js"; // Import du composant banner qui est situé dans le dossier layout
import ApartmentGrid from "../components/ApartmentGrid.js"; // Import du composant ApartmentGrid situé dans le dossier components.


function HomePage() {
  return (
  <div>
      <Banner/>
      <ApartmentGrid/>
  </div>
  );
}

export default HomePage;
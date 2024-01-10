import React, {useState } from "react"; // Importation du hook useState depuis la bibliotheque react.
import "../styles/ApartmentPage.scss";
import { ApartmentDescription } from "../components/Collapse";
import { useSearchParams} from "react-router-dom"
import {ApartmentBanner} from "../components/Carrousel";
import {ApartmentInfo } from "../components/ApartmentInfo";
import ErrorPage from "./ErrorPage";
import data from "../data/db.json";

function ApartmentPage() {
    // récupère l'ID de l'URL
    const [searchParams] = useSearchParams();
    const [idLogement] = useState(searchParams.get('_id'));
    
    // cherche l'id dans le fichier db.json avec le méthode find et on l'enregistre dans la variable record
    const record = data.find(element => element.id === idLogement)
    
    // si l'URL à été modifié manuellement, redirection vers la page d'erreur
    if (!record) return(<ErrorPage />)

    
    const equipements = record.equipments.map((element, index) => (
          <span className='description-content' key={"equip-"+index.toString()}>{element}</span>
        ))
    

    return (
    
    <main className="apartment-page">
      <div>
        <ApartmentBanner pictures={record.pictures}/>
        <ApartmentInfo flat={record}/>
      </div>
          <div className="ApartmentDescriptionTwoBox">
            <ApartmentDescription title ="Description" content={record.description}/>    
            <ApartmentDescription title ="Equipements" content={equipements.map((eq, i) =>(
              <li key={i}>{eq}</li>
            ))}
            />   
          </div> 
    </main>
  )
 }

export default ApartmentPage;

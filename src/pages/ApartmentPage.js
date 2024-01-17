import React, {useState } from "react"; // Importation du hook useState depuis la bibliotheque react.
import "../styles/ApartmentPage.scss";
import { ApartmentDescription } from "../components/Collapse";
import { useSearchParams} from "react-router-dom"; //Important du hook useSearchParams depuis la bibliothèque react qui permet d'accéder aux paramètre de l'url
import {ApartmentBanner} from "../components/Carrousel";
import {ApartmentInfo } from "../components/ApartmentInfo";
import ErrorPage from "./ErrorPage";
import data from "../data/db.json";

function ApartmentPage() {
    // récupère l'ID de l'URL
    const [searchParams] = useSearchParams();
    const [idLogement] = useState(searchParams.get('_id')); 
    
    // On récupére l'appartement qui est égale à l'id de l'url grace a la méthode find et qu'on stock dans la variable record
    const record = data.find(element => element.id === idLogement)
    
    // si l'appart n'existe pas, redirection vers la page d'erreur
    if (!record) return(<ErrorPage />)

    
    // Récupére la liste des equipements
    const equipements = record.equipments.map((element, index) => (
          <span className='description_content' key={"equip-"+index.toString()}>{element}</span>
        ))
    

    return (
    
    <main className="apartment-page">
      <div>
        {/* Importation ApartmentBanner en lui passant le props pictures. c-à-d les images du carrousel */}
        <ApartmentBanner pictures={record.pictures}/> 
         {/* Importation Apartmentinfo en lui passant le props flat. c-à-d les infos de l'appartement */}
        <ApartmentInfo flat={record}/>
      </div>
          <div className="ApartmentDescriptionTwoBox">
            {/*Importation d'ApartmentDescirption on lui passe en titre description  et le contenu de la description de l'appart avec le prop content  */}
            <ApartmentDescription title ="Description" content={record.description}/>  
            {/* // // // // // // // // // on lui passe en titre Equipements  et le contenu c'est la liste des equipements générée à l'aide d'équipement.map*/}  
            <ApartmentDescription title ="Equipements" content={equipements.map((eq, i) =>(
              <li key={i}>{eq}</li> 
            ))}
            />   
          </div> 
    </main>
  )
 }

export default ApartmentPage;

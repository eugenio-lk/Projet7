import "../styles/ApartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.js";
import "../styles//ApartmentCard.scss";
import data from "../data/db.json"



const ApartmentGrid = () => {
    return (
        <div className="grid">

            {/*La méthode map pour parcourir les données de l'appartement */}
            {data.map((record) => {
                const { id, cover, title } = record;

                // affiche la fiche logement sur la page d'accueil
                return (
                    // On extrait l'id, le title, la cover et l'image url pour chaque appartement, ils auront des données spécifiques grace a la key.
                    // Donc toutes ces données sont passées a ApartementCard
                    <ApartmentCard key = {id} id = {id} title ={title} imageUrl= {cover}/>        
                )
            })}
        </div>
    )
}

export default ApartmentGrid

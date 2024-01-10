import "../styles/ApartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.js";
import "../styles//ApartmentCard.scss";
import data from "../data/db.json"



const Cards = () => {
    return (
        <div className="grid">

            
            {data.map((record) => {
                const { id, cover, title } = record;

                // affiche la fiche logement sur la page d'accueil
                return (
                    
                        <ApartmentCard key = {id} id = {id} title ={title} imageUrl= {cover}/>
                        
                    
                )
            })}
        </div>
    )
}

export default Cards

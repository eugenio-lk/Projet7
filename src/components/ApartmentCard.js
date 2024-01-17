import React from "react";
import "../styles/ApartmentCard.scss";
// Import de link pour les liens réactifs des cards
import {Link} from "react-router-dom"


function ApartmentCard(props){
  // stock l'id de l'appartement qui provient des props
  const state = {
    apartmentId:props.id
  };
 
  return (
    <div className="apartment">
      {/*Le link pour le lien réactif d'appartement individuel en lui passant l'id */}
      <Link to = {`/flat?_id=${state.apartmentId}`}  state={{
        apartmentId: props.id
      }}>
        <div className="image-container">
        <img src= {props.imageUrl} alt="photos apart"/>
        </div>
        
        <div className="apartment_title">{props.title}</div>
      </Link>
    </div>
  );
}
  


export default ApartmentCard;




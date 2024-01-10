import React from "react";
import "../styles/ApartmentCard.scss";
import {Link} from "react-router-dom"


function ApartmentCard(props){
  const state = {
    apartmentId:props.id
  };
 
  return (
    <div className="apartment">
      <Link to = {`/flat?_id=${state.apartmentId}`}  state={{
        apartmentId: props.id
      }}>
        <div className="image-container">
        <img src= {props.imageUrl} alt="photot apart"/>
        </div>
        
        <div className="apartment_title">{props.title}</div>
      </Link>
    </div>
  );
}
  


export default ApartmentCard;




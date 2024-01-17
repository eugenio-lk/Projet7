import React from 'react'
import "../styles/ApartmentInfo.scss";

 export function ApartmentInfo(props) {

  // Ici les données de l'appartement à partir des props
  const flat = props.flat;

  // Le nom du proprio
  const name = flat.host.name;

  // La méthode split pour diviser le nom et prénom du propriétaire
  const [firstName, lastName] = name.split(" ");
  return (
    <section className="apartment__box">
          <section className="apartment__title">
            <h1>{flat.title}</h1>
            <h2>{flat.location}</h2>
              <div className="apartment__spans">
                {flat.tags.map((tag) =>(
                  <span key={tag}>{tag}</span>
                ))}
              </div>
          </section>
          
          <section className="apartment__owner">
            <div className="apartment__owner__info">
              <div className="apartment__owner__name">
                <div>{firstName}</div>
                <div>{lastName}</div>
              </div>
              <div className="apartment__owner__circle">
                <img src={flat.host.picture} alt="photos user"></img>
              </div>
            </div>
            {/* Utilisation de map pour la notation des étoiles en fonction de la note du propriétaire */}
            <div className="apartment__owner__stars">
              {[1, 2, 3, 4, 5].map((num) => (
              <span key={num}className={props.flat.rating >= num ? "on" : ""}>★</span>
              ))}
            </div>
          </section>
          
      </section> 
  )
}

export default ApartmentInfo
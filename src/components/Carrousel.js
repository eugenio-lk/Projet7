import React, {useState} from "react";
import "../styles/Carrousel.scss";


export function ApartmentBanner(props) {
  // Initialise la variable pictures avec les images passé en props.
  const pictures = props.pictures;
  // On initialise currentpicture a 0 c-à-d l'image actuel et setcurrentpictures sera la pour la mise à jour grace au useState.
  const [currentPicture, setCurrentPicture] = useState(0);
  
  // Cette fonction est la pour déterminer quelle image doit être affiché. 
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  // Fonction pour passer à l'image suivante dans le carrousel
  const moveToNext = () => {
    // Modulo pour revenir au début du carrousel
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  // Fonction pour passer à l'image précédente dans le carrousel
  const moveToPrevious = () => {

     // Calcul pour la décrémentation 
    const newCurrentPicture = currentPicture -1;

    // Si newCurrentPicture est inférieur à zéro, revient à la dernière image du carrousel
    if (newCurrentPicture < 0){
      setCurrentPicture(pictures.length -1)
      return;
    }
      // Si l'index n'est pas inférieur a 0 on décrémente de 1
      setCurrentPicture(currentPicture - 1);
  };
    if( pictures.length <= 1){
      
      return (
        <div className="box__carousel">
          <div className="image__container">
            {pictures.map((pic, i) => (
              <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
            ))}
          </div> 
          <span className="carousel-counter">
            {currentPicture + 1} / {pictures.length}
          </span>
          </div>
          );
  
    }
    else{
          
          return (
            <div className="box__carousel">
              <div className="image__container">
                {pictures.map((pic, i) => (
                  <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
                ))}
              </div>
                <div>
                <button className ="btn btn-next"onClick = {moveToNext}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <span className="carousel-counter">
                {currentPicture + 1} / {pictures.length}
              </span>
              
              <div>
                <button className ="btn btn-previous"onClick = {moveToPrevious}>
                <i className="fas fa-chevron-left"></i>
                </button>
              </div>
              </div>
              );
    }    
}

export default ApartmentBanner
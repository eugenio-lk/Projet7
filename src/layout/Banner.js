import React from 'react'
import "../styles/Banner.scss";
import photo from "../assets/IMG1.png";

function Banner() {
  return (
    <div className="banner">
      <img src={photo} alt="Photo falaise" />
      <div className='banner_text'>
          <h1 className='line-mobile'>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Banner;
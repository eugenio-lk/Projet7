import React from 'react'
import '../styles/SecondBanner.scss';
import secondphoto from "../assets/IMG2.png";
function SecondBanner() {
  return (
    <div className="secondbanner">
      <img src= {secondphoto} alt="Photo forêt" />
    </div>
  );
}

export default SecondBanner
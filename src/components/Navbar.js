import React from 'react';
import "../styles/Navbar.scss"
import  logo from "../assets/KasaLogo.png"
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
  <nav className="navbar">
    <NavLink to = "/">
    <div className="navbar_logo">
      <img src={logo} alt="Photo logo"/>
    </div>
    </NavLink>
    
    <div className= "menu">
      <NavLink to ="/" className="active">
         
            <span>Accueil</span>
          
        </NavLink>

      <NavLink to ="/about">
        
          <span>A propos</span>
        
        </NavLink>
    </div>
  </nav>
  );
}

export default Navbar;
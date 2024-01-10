import React from "react";
import "../styles/Footer.scss";
import blacklogo from "../assets/LogoBlack.png";
function Footer() {
  return <footer className="footer">
    <div className="footer_logo">
      <img src={blacklogo} alt="Photo logo"/>
    </div>
    <div className="footer_text">
    © 2020 Kasa. All rights deserved
    </div>
  </footer>
}

export default Footer;
import React from "react";
import facebook from "./Images/faceboook.svg"
import instagram from "./Images/instagram.svg"
import twitter from "./Images/twitter.svg"
import youtube from "./Images/youtube.svg"

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <img src={facebook} alt="facebook" className="item" />
        <img src={instagram} alt="instagram" className="item" />
        <img src={twitter} alt="twitter" className="item" />
        <img src={youtube} alt="youtube" className="item" />
      </div>
      <div className="footer_text">
        <p>Conditions of use</p>
        <p>Privacy & policy</p>
        <p>Press room</p>
      </div>
      <div className="author">© 2021 MovieBox by Adriana Eka Prayudha</div>
    </div>
  );
};

export default Footer;
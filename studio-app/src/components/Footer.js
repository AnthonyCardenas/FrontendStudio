// import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

import InstaIcon from "../icons/instagram.svg";
import LinkedIcon from "../icons/linkedin.svg";
import YouTubeIcon from "../icons/youtube.svg";
import RoseLogoFull from "../icons/RoseLogoName.png";
import RoseLogo from "../icons/RoseLogoClear.png";

// TODO: Make Footer work for a mobile user
// Change rose logo for the icon when too small
// possibly make links to sites move to a columnn to fit on phone

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* <h2 className="footer-title">BrooklynnRoseStudio</h2> */}
        <Link to="/">
        {/* <a href="/ContactPage"> */}
          <img className="footer-logo" src={RoseLogoFull} alt="BrooklynnRoseStudio" />
          <img className="footer-logo-mobile" src={RoseLogo} alt="BrooklynnRoseStudio" />
        {/* </a> */}
        </Link>
        
        {/* <a class="footer-link" href="/ContactPage">
          <p className="contact-link">Contact Page</p>
        </a> */}

        <div className="social-section">
          {/* <h2>Follow me on:</h2> */}
          <div id="footer-icons">
            {/* Put in icons for social apps */}
            <a href="https://www.instagram.com/brooklynnrosestudio/">
              <img className="social-icon-1" src={InstaIcon} alt="Instagram" />
              {/* <p className="icon">Instagram</p> */}
            </a>
            <a href="https://www.youtube.com/@BrooklynnRosestudios">
              <img className="social-icon" src={YouTubeIcon} alt="Youtube" />
              {/* <p className="icon">Youtube</p> */}
            </a>
            <a href="https://www.linkedin.com/in/brooklynn-cardenas/">
              <img className="social-icon" src={LinkedIcon} alt="LinkedIn" />
              {/* <p className="icon">LinkedIn</p> */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

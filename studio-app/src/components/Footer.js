// import React from "react";
import "./Footer.css";

import InstaIcon from "../icons/instagram.svg";
import LinkedIcon from "../icons/linkedin.svg";
import YouTubeIcon from "../icons/youtube.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">RosieStudio</h2>
        {/* <a class="footer-link" href="/ContactPage">
          <p className="contact-link">Contact Page</p>
        </a> */}

        <div className="social-section">
          <h2>Follow me on:</h2>
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

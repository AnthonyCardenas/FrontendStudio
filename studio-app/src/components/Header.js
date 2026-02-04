// import React from "react";
import "./Header.css";

import NavBar from "./NavBar";
// import GalleryPage from "../pages/GalleryPage.js";
// import ContactPage from "../pages/ContactPage.js";

import RoseLogo from "../icons/RoseLogoClear.png";
// import RoseLogo from "../icons/RoseLogo11.svg"
// import RosePNG from "../icons/RoseLogo.png"
// import InstaIcon from "../icons/instagram.svg";


function Header() {
  return (
    <header className="header">
      <div className="header-resizer-top">
        <div className="header-fade-top"></div>

        <div className="header-banner">
          {/* <div className="header-home">
            <a href="/">
              <img
                className="header-icon"
                src={RoseLogo}
                alt="BrooklynnRoseStudio"
              />
            </a>
          </div> */}
          <NavBar>text</NavBar>
          {/* <div className="navbar-spacer"/> */}

          <div className="tabs-container">
            <a href="/">
              <div className="header-tabs">
                <p>Home</p>
              </div>
            </a>
            <a href="/gallery">
              <div className="header-tabs">
                <p>Gallery</p>
              </div>
            </a>
            <a href="/pricing">
              <div className="header-tabs">
                <p>Pricing</p>
              </div>
            </a>
            {/* <a href="/contact">
              <div className="header-tabs">
                <p>Contact</p>
              </div>
            </a> */}
            <a href="/about">
              <div className="header-tabs">
                <p>About</p>
              </div>
            </a>
          </div>

          <div className="header-button">
            <a href="/contact">
              <button className="booking-button">Contact Me</button>
            </a>
          </div>
        </div>
      </div>

      <div className="header-resizer-bottom">
        {/* <div className="header-buffer"></div> */}
        <div className="header-title">
          <h1>Brooklynn Rose Studio</h1>
          <p>Making time stand still (but in the most flattering light)</p>
        </div>

        <div className="header-fade-bottom"></div>
      </div>
    </header>
  );
}

export default Header;

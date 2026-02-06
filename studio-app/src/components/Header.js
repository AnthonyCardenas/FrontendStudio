// import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";
// import GalleryPage from "../pages/GalleryPage.js";
// import ContactPage from "../pages/ContactPage.js";

import RoseLogo from "../icons/RoseLogoClear.png";
// import RoseLogo from "../icons/RoseLogo11.svg"
// import RosePNG from "../icons/RoseLogo.png"
// import InstaIcon from "../icons/instagram.svg";


// TODO:: Change header for mobile devices
// Put header all in navbar for mobile devices

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

          <div className="tabs-container">
            <Link to="/">
              <div className="header-tabs">
                <p>Home</p>
              </div>
            </Link>
            
            <Link to="/gallery">
              <div className="header-tabs">
                <p>Gallery</p>
              </div>
            </Link>
            
            <Link to="/pricing">
              <div className="header-tabs">
                <p>Pricing</p>
              </div>
            </Link>
            
            {/* <a href="/contact">
              <div className="header-tabs">
                <p>Contact</p>
              </div>
            </a> */}

            <Link to="/about">
              <div className="header-tabs">
                <p>About</p>
              </div>
            </Link>
            
          </div>

          <div className="header-button">
            <Link to="/contact">
              <button className="booking-button">Contact Me</button>
            </Link>
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

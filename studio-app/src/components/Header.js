// import React from "react";
import "./Header.css";

// import GalleryPage from "../pages/GalleryPage.js";
// import ContactPage from "../pages/ContactPage.js";

function Header() {
  return (
    <header className="header">
      <div className="header-fade-top"></div>

      <div className="header-banner">
        <div className="header-home">
          <a href="/">
            <p >RoseStudio</p>
          </a>
        </div>

        <div className="tabs-container">
          <a href="/">
            <div className="header-tabs">
              <p>Home</p>
            </div>
          </a>
          <a href="/GalleryPage">
            <div className="header-tabs">
              <p>Gallery</p>
            </div>
          </a>
          <a href="/PricingPage">
            <div className="header-tabs">
              <p>Pricing</p>
            </div>
          </a>
          <a href="/ContactPage">
            <div className="header-tabs">
              <p>Contact</p>
            </div>
          </a>
          <a href="/AboutPage">
            <div className="header-tabs">
              <p>About</p>
            </div>
          </a>
        </div>

        <div>
          <button className="booking-button">Book Me</button>
        </div>
      </div>

      <div className="header-buffer"></div>
      <div className="header-title">
        <h1 >Brooklynn Rose Studio</h1>
        <p>Making time stand still (but in the most flattering light)</p>
      </div>

      <div className="header-fade-bottom"></div>
    </header>
  );
}

export default Header;

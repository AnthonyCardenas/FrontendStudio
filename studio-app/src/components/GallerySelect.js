// import React from "react";

import "./GallerySelect.css";

import FamilyProfile from "../images/Martino-fam-67.jpg";
import EngagementProfile from "../images/Brittany-Sam-61.jpg";
import PortraitProfile from "../images/James-Headshot-21.jpg";
import NewbornProfile from "../images/Ashley-newborn-36.jpg";
// import WeddingProfile from "../images/Gio+Betsy-86.jpg";
// import "../pages/Home.css";

function GallerySelect() {
  return (
    <div className="gallery-select-banner">
      <div className="gal-sel-wrapper">
        <div className="gal-sel-title">
          <h2> What kind of photoshoot are you interested in?</h2>
        </div>

        <div className="cat-grid">
          <div className="cat-grid-item">
            <h2 className="cat-name">Engagement</h2>
            <img
              className="cat-photo"
              src={EngagementProfile}
              alt="Engagement Photos"
              loading="lazy"
            />
            <a href="/Engagement">
              <button className="cat-info">
                Checkout our engagement photos
              </button>
            </a>
          </div>

          {/* <div className="cat-grid-item">
            <h2 className="cat-name">Wedding</h2>
            <img
              className="cat-photo"
              src={WeddingProfile}
              alt="Wedding Photos"
              loading="lazy"
            />
            <a href="/WeddingPage">
              <button className="cat-info">
                Checkout our wedding photos
              </button>
            </a>
          </div> */}

          <div className="cat-grid-item">
            <h2 className="cat-name">Newborn</h2>
            <img
              className="cat-photo"
              src={NewbornProfile}
              alt="Newborn Photos"
              loading="lazy"
            />
            <a href="/NewbornPage">
              <button className="cat-info">Checkout our newborn photos</button>
            </a>
          </div>

          <div className="cat-grid-item">
            <h2 className="cat-name">Portrait</h2>
            <img
              className="cat-photo"
              src={PortraitProfile}
              alt="Portrait Photos"
              loading="lazy"
            />
            <a href="/PortraitPage">
              <button className="cat-info">
                Checkout our individual portraits
              </button>
            </a>
          </div>

          <div className="cat-grid-item">
            <h2 className="cat-name">Family</h2>
            <img
              className="cat-photo"
              src={FamilyProfile}
              alt="Family Photos"
              loading="lazy"
            />
            <a href="/FamilyPage">
              <button className="cat-info">Checkout our family photos</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySelect;

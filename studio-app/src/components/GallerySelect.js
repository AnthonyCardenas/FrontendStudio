// import React from "react";

import "./GallerySelect.css";

import FamilyProfile from "../images/Martino-Family-67.jpg";
import EngagementProfile from "../images/Brittany-Sam-61.jpg";
import PortraitProfile from "../images/James-Headshot-21.jpg";
import NewbornProfile from "../images/Ashley-newborn-36.jpg";
import WeddingProfile from "../images/Gio+Betsy-86.jpg";
import CommercialProfile from "../images/Columbine_promo-114.jpg";
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
            <a href="/engagements">
              <button className="cat-info">
                Checkout our engagement photos
              </button>
            </a>
          </div>

          <div className="cat-grid-item">
            <h2 className="cat-name">Wedding</h2>
            <img
              className="cat-photo"
              src={WeddingProfile}
              alt="Wedding Photos"
              loading="lazy"
            />
            <a href="/weddings">
              <button className="cat-info">
                Checkout our wedding photos
              </button>
            </a>
          </div>

          <div className="cat-grid-item">
            <h2 className="cat-name">Newborn</h2>
            <img
              className="cat-photo"
              src={NewbornProfile}
              alt="Newborn Photos"
              loading="lazy"
            />
            <a href="/newborns">
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
            <a href="/portraits">
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
            <a href="/family">
              <button className="cat-info">Checkout our family photos</button>
            </a>
          </div>

          <div className="cat-grid-item">
            <h2 className="cat-name">Commercial</h2>
            <img
              className="cat-photo"
              src={CommercialProfile}
              alt="Commercial Photo"
              loading="lazy"
            />
            <a href="/commercial">
              <button className="cat-info">
                Checkout our commercial shoots
              </button>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default GallerySelect;

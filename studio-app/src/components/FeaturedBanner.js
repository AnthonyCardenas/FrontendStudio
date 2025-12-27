// import React from "react";

import "../pages/Home.css";
import "./FeaturedBanner.css";

// import WeddingCake from "../icons/wedding-cake.svg";
// import EngagementRing from "../icons/engagement-ring.svg";
// import Family from "../icons/family.svg";
// import Profile from "../icons/user-suit.svg";
// import Clapper from "../icons/movie-clapper.svg";
// import Film from "../icons/film.svg";
// import Baby from "../icons/baby-girl.svg";

// import Banner from "../images/LabPhoto.jpg";
import Lake from "../images/Brittany-Sam-water.jpg";
import Martino from "../images/Martino-fam-walk.jpg";
import Goofy from "../images/James-Headshot-26.jpg";
import Shock from "../images/Ashley-newborn-2.jpg";
import Cuddle from "../images/Ashley-newborn-30.jpg";
import Sleep from "../images/Ashley-newborn-2.jpg";
import FamilyRainbow from "../images/Harmer-Family-119.jpg";
import RedCouple from "../images/Natalie+Braden-14.jpg";

const photos = [
  { id: 1, src: Lake, alt: "Engagement Photo" },
  { id: 2, src: Martino, alt: "Family Photo" },
  { id: 3, src: Goofy, alt: "Family Photo" },
  { id: 4, src: FamilyRainbow, alt: "Family" },
  { id: 5, src: Shock, alt: "Newborn" },
  { id: 6, src: RedCouple, alt: "Couple Photo" },
];

function FeaturedBanner() {
  return (
    <div className="featured-banner">
      <div className="featured-info">
        <h2>Featured Photos</h2>
        <p>Here are some of my favorite photos.</p>
      </div>
      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="grid-item">
            <img src={photo.src} alt={photo.alt} className="featured-image" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default FeaturedBanner;

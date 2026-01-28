// import React from "react";

// import Family from "../icons/family.svg";
import Dip from "../images/Grad-together-2.jpg";

// import "../pages/Home.css";
import "./AboutBanner.css";

function AboutBanner() {
  return (
    <div className="about-wrapper">
      <div className="about-info">
        <h2>Welcome to Brooklynn Rose Studio!</h2>
        <p>
          We're a professional photographer/videographer couple, who love
          helping people capturing important life moments. We work with couples,
          families, and indie film to tell stories in your style. Brooklynn
          especially loves post production to bring out the color and life of a
          moment.
        </p>
        <p>
          My husband and I are dedicated to connecting with people and helping
          them find their truth in a camera lens. We capture events from
          weddings to family photos. Capturing people in various phases of their
          lives is our priveledge. From planning and moodboards to the final
          gallery, I keep the process simple and stress-free. If you’re after
          timeless photos with a modern touch, let’s create something beautiful
          together.
        </p>
      </div>

      <div className="photo-wrapper">
        <div className="profile-photo">
          <img src={Dip} alt="Dip" />
        </div>
      </div>
    </div>
  );
}
export default AboutBanner;

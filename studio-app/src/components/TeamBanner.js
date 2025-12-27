// import React from "react";

// import Family from "../icons/family.svg";
// import Dip from "../images/Grad-together-2.jpg"
import Brooklynn from "../images/Brooklynn-4.jpg";
import Anthony from "../images/AnthonyLabVert.jpg";
import "../pages/Home.css";
import "./TeamBanner.css";

function TeamBanner() {
  return (
    <div className="team-banner">
      <div className="team-wrapper">
        <div className="team-title">
          <h2> Get to know your photographers before the shoot.</h2>
        </div>

        <div className="team-grid">
          <div className="team-grid-item">
            <img className="member-photo" src={Brooklynn} alt="Brooklynn" />
            <h2 className="member-name">Brooklynn</h2>
            <p className="member-info">
              Hi! I'm Brooklynn and I am a media arts graduate. etc
            </p>
          </div>

          <div className="team-grid-item">
            <img className="member-photo" src={Anthony} alt="Anthony" />
            <h2 className="member-name">Anthony</h2>
            <p className="member-info">
              Hi! I'm Anthony and I'm a computer engineer graduate. I help my
              wife with photography and videography.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeamBanner;

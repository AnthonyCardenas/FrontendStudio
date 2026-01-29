// import React from "react";

// import Family from "../icons/family.svg";
// import Dip from "../images/Grad-together-2.jpg"
import Brooklynn from "../images/Brooklynn-4.jpg";
import Anthony from "../images/AnthonyLabVert.jpg";
import "../pages/Home.css";
import "./TeamBanner.css";

const AnthonyIntro =
  "Hi, I'm Anthony and I love composing a shot so that you really feel the moment. From drone flying to gimbal shots, I am all hands on deck to make sure the most important moments last a lifetime. I have a background in engineering so I live by the phrase 'measure twice, cut once.' Prep work is how we make your vision a reality.";
const BrooklynnIntro =
  "Hi, my name is Brooklynn and I've been making videos for as long as I can remember. As a recent graduate from film school, I bring the latest industry techniques and an eye for storytelling to capture your unique love story. Color grading is where I get my dopamine hit - it's my favorite part of the process! So you can trust that your photos and videos will feel like it came straight out of a movie.";

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
            <p className="member-info">{BrooklynnIntro}</p>
          </div>

          <div className="team-grid-item">
            <img className="member-photo" src={Anthony} alt="Anthony" />
            <h2 className="member-name">Anthony</h2>
            <p className="member-info">{AnthonyIntro}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeamBanner;

// import React from "react";
import "./PhotoBanner.css";

// import Banner from "../images/LabPhoto.jpg";

const PhotoBanner = ({ imageUrl, altText, children }) => {
  return (
    <div className="photo-banner-container">
      <img src={imageUrl} alt={altText} className="banner-image" />
      {/* This div is for overlay content like text or buttons */}
      <div className="haze-overlay">
        <div className="banner-content">
          {children}
          {/* <h1>Brooklynn Rose Studio</h1> */}
        </div>
      </div>
    </div>
  );
};
export default PhotoBanner;

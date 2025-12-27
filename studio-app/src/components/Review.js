// import React from "react";

// import Family from "../icons/family.svg";
import "../pages/Home.css";
import "./ReviewBanner.css";
import StarRating from "./StarRating";

function Review({ rating, name, detail, src }) {
  return (
    <div className="review-block">
      <div className="review-content">
        <StarRating value={rating} />
        <p className="review-details">{detail}</p>
        <p className="review-name">{name}</p>
        <p className="review-src">{src}</p>
      </div>
    </div>
  );
}
export default Review;

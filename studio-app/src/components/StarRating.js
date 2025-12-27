// import React from "react";
import "./StarRating.css";

import fullStar from "../icons/star-full.svg";
import halfStar from "../icons/star-half.svg";
import emptyStar from "../icons/star-empty.svg";
import "./StarRating.css";

export default function StarRating({ value = 0 }) {
  const MAX_STARS = 5;

  const getStarSrc = (index) => {
    const starNumber = index + 1;

    if (value >= starNumber) return fullStar;
    if (value >= starNumber - 0.5) return halfStar;
    return emptyStar;
  };

  return (
    <div className="star-rating">
      {[...Array(MAX_STARS)].map((_, i) => (
        <img
          key={i}
          src={getStarSrc(i)}
          alt="star"
          alt-text={value}
          className="star-icon"
        />
      ))}
    </div>
  );
}

import { useState, useEffect } from "react";
// import axios from "axios";
import api from "../Api";

import "./FilteredReviews.css";

import Review from "./Review";
import ItemSlider from "./ItemSlider";
import { REVIEW_URL } from "..";

export default function FilteredReviews({ filterCategory }) {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await api.get(REVIEW_URL);
        setReviews(res.data);
        // console.log(res.data);
      } catch (err) {
        console.error("Error fecthing photos: ", err);
        setError(true);
      }
    };

    fetchReviews();
  }, []);

  const filteredReviews = reviews.filter((review) =>
    review.title.toLowerCase().includes( filterCategory.toLowerCase() )
  );

  if (error) {
    return (
     <div className="review-banner">
      <div className="review-grid">
        <p>Failed to load reviews. Try again later.</p>
      </div>
    </div>
    );
  }

  return (
    <div className="review-banner">
      <div className="review-grid">
        {/* {filteredReviews.map((review) => (
          <div key={review.id} className="review-grid-item">
            
            <p>{review.id}</p>
          </div>
        ))} */}

        <ItemSlider
          items={filteredReviews}
          renderItem={(review) => (
            <Review
              rating={review.rating}
              name={review.name}
              src={review.source}
              detail={review.description}
            />
          )} 
         />
      </div>
    </div>
  );
}

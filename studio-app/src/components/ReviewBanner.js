// import React from "react";
import api from "../Api";
import { useEffect, useState } from "react";

// import Family from "../icons/family.svg";
import "../pages/Home.css";
import Review from "./Review";
import "./ReviewBanner.css";
import ItemSlider from "./ItemSlider";
import { REVIEW_URL } from "..";
import ReviewList from "../organizers/ReviewList";
import CompleteReviewList from "../organizers/CompleteReviewList";

const baseReviews = [
  {
    id: 1,
    rating: 5.0,
    name: "Diana J.",
    src: "Zola",
    detail:
      "Brooklyn did my engagement photos who turned out stunning! I am on the heavier side and was self conscious on taking pictures but she did awesome and I felt pretty! She also did my wedding video where she gave enough time for each event on the video and I would cherish forever!",
  },
  {
    id: 2,
    rating: 5.0,
    name: "Rylee",
    src: "Zola",
    detail:
      "Brooklynn created a promotional video for our theatre, and we were so impressed with her work! She was great to work with throughout the whole process. I would definitely recommend her.",
  },
  {
    id: 3,
    rating: 5.0,
    name: "Alysia H.",
    src: "Zola",
    detail:
      "Brooklynn was awesome to work with! She took bad weather and turned it into the most magical photography session ever. She is great with shy toddlers too:)",
  },
  {
    id: 4,
    rating: 5.0,
    name: "Betsy",
    src: "Zola",
    detail:
      "Brooklynn Rose Studio was an absolute pleasure to work with for our wedding video! From our very first interaction, Brooklyn had a soothing, assuring, and clear communication style that immediately put us at ease. She were incredibly talented, kind, patient, creative, and even had a great sense of humor that made the whole process fun. The final video she created for us was so special - it brought me to tears watching all the little moments she captured so beautifully. Brooklynn made sure every important detail of our special day was perfectly preserved, and we are so grateful to have this cherished video to look back on for years to come. We would highly recommend Brooklynn Rose Studio to any couple looking for a videographer that will go above and beyond.",
  },
];

function ReviewBanner() {
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
        setReviews(baseReviews);
        setError(true);
      }
    };

    fetchReviews();
  }, []);

  if (error) {
    return (
      <div className="review-banner">
        <div className="review-grid">
          <ItemSlider
            // items={baseReviews}
            items={CompleteReviewList}
            renderItem={(review) => (
              <Review
                rating={review.rating}
                name={review.name}
                src={review.src}
                detail={review.detail}
              />
            )}
          />
          {/* <p>Failed to load more reviews. Try again later.</p> */}
        </div>
      </div>
    );
  }

  return (
    <div className="review-banner">
      <div className="review-grid">
        <ItemSlider
          items={reviews}
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
export default ReviewBanner;

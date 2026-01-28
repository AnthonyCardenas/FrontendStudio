import "./GalleryList.css";
import Review from "./Review";
import ItemSlider from "./ItemSlider";

export default function ReviewList({ reviews }) {
  return (
    <div className="review-banner">
      <div className="review-grid">
        <ItemSlider
          items={reviews}
          renderItem={(review) => (
            <Review
              rating={review.rating}
              name={review.name}
              src={review.src}
              detail={review.detail}
            />
          )}
        />
      </div>
    </div>
  );
}

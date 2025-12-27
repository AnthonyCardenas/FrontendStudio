// import React from "react";
import "./GalleryList.css";

export default function GalleryList({ photos }) {
  return (
    <div className="gallery-wrapper">
      <div className="masonry-grid">
        {photos &&
          photos.map((photo) => (
            <div key={photo.id} className="masonry-item">
              <img src={photo.image} alt={photo.title} loading="lazy" />
            </div>
          ))}
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
// import axios from "axios";
import api from "../Api";

// import GalleryPage from "../pages/GalleryPage";
// import GalleryPhotos from "../pages/GalleryPage";
import { PHOTO_URL } from "..";

export default function FilteredGallery({ filterCategory }) {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await api.get(PHOTO_URL);
        setPhotos(res.data);
        // console.log(res.data);
      } catch (err) {
        console.error("Error fecthing photos: ", err);
        // setPhotos(basePhotos);
        setError(true);
      }
    };

    fetchPhotos();
  }, []);

  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(filterCategory.toLowerCase())
  );

  if (error) {
    return (
     <div className="gallery-wrapper">
      <div className="masonry-grid">
        {/* {filteredPhotos.map((photo) => (
          <div key={photo.id} className="masonry-item">
            <img src={photo.image} alt={photo.title} />
          </div>
        ))} */}
        <p>Failed to load gallery. Try again later.</p>
      </div>
    </div>
    );
  }

  return (
    <div className="gallery-wrapper">
      <div className="masonry-grid">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="masonry-item">
            <img src={photo.image} alt={photo.title} loading="lazy"/>
          </div>
        ))}
      </div>
    </div>
  );
}

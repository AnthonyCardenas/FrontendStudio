// Put in an email box ; Find widget

import { useEffect, useState } from "react";
// import axios from "axios";
import api from "../Api";

import "./GalleryPage.css";

import Header from "../components/Header";
import PhotoBanner from "../components/PhotoBanner";
import GallerySelect from "../components/GallerySelect";
import Footer from "../components/Footer";
import FeaturedBanner from "../components/FeaturedBanner";
import BookSession from "../components/BookSession";
import GalleryList from "../components/GalleryList";

// import WeddingCake from "../icons/wedding-cake.svg";
import Banner from "../images/Gio+Betsy-4.jpg";

// import Grad from "../images/Grad-together-2.jpg";
import Lake from "../images/Brittany-Sam-water.jpg";
import Martino from "../images/Martino-fam-67.jpg";
import Goofy from "../images/James-Headshot-26.jpg";
import Shock from "../images/Ashley-newborn-17.jpg";
import Cuddle from "../images/Ashley-newborn-30.jpg";
import Sleep from "../images/Ashley-newborn-2.jpg";
import { PHOTO_URL } from "..";

const GalleryPhotos = [
  { id: 1, image: Lake, title: "Lake" },
  { id: 2, image: Martino, title: "Martino" },
  { id: 3, image: Goofy, title: "Goofy" },
  { id: 4, image: Shock, title: "Shock" },
  { id: 5, image: Cuddle, title: "Cuddle" },
  { id: 6, image: Sleep, title: "Sleep" },
];
// Martino, Goofy, Shock, Cuddle, Sleep

// how to filter out photos
// const [photos, setPhotos] = useState([]);
// const filteredPhotos = photos.filter(photo => photo.title === "Lake");
// <div className="masonry">
//   {filteredPhotos.map(photo => (
//     <div key={photo.id} className="masonry-item">
//       <img src={photo.image} alt={photo.title} />
//     </div>
//   ))}
// </div>

function GalleryPage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await api.get(PHOTO_URL);
        setData(res.data);
        // console.log(res.data);
      } catch (err) {
        console.error("Error fecthing photos: ", err);
        setData(GalleryPhotos);
        setError(true);
      }
    };

    fetchPhotos();
  }, []);


  if (error) {
    return (
      <div>
        <PhotoBanner imageUrl={Banner} altText={"Wedding photo"}>
          <Header />
        </PhotoBanner>
        <GallerySelect />
        <FeaturedBanner />
        <div className="gallery-body">
          <p>Failed to load more photos. Please try again later.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <PhotoBanner imageUrl={Banner} altText={"Wedding photo"}>
        <Header />
      </PhotoBanner>
      <GallerySelect />
      <FeaturedBanner />
      <div className="gallery-body">
        <p>Check out more of my photos</p>
      </div>
      <GalleryList photos={data} />
      <BookSession />
      <Footer />
    </div>
  );
}
export default GalleryPage;

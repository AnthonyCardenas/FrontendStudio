// import { useState, useEffect } from "react";
// import api from "../api"
import "./Home.css";
import Header from "../components/Header";
// import WeddingPhotos from "./WeddingPage";
import PhotoBanner from "../components/PhotoBanner";
import AboutBanner from "../components/AboutBanner";
import Footer from "../components/Footer";
import FeaturedBanner from "../components/FeaturedBanner";
import BookSession from "../components/BookSession";
import ReviewBanner from "../components/ReviewBanner";

// import WeddingCake from "../icons/wedding-cake.svg";
// import EngagementRing from "../icons/engagement-ring.svg";
// import Family from "../icons/family.svg";
// import Profile from "../icons/user-suit.svg";
// import Clapper from "../icons/movie-clapper.svg";
// import Film from "../icons/film.svg";
// import Baby from "../icons/baby-girl.svg";

import Banner from "../images/Natalie+Braden-39.jpg";
// import Banner from "../images/LabPhoto.jpg";
// import Lake from "../images/Brittany-Sam-water.jpg";
// import Martino from "../images/Martino-fam-walk.jpg";


// Put in company icon

function Home() {
  return (
    <div>
      <PhotoBanner imageUrl={Banner} altText={"Engagement photo"}>
        <Header />
      </PhotoBanner>
      <AboutBanner />
      <FeaturedBanner/>
      <ReviewBanner/>
      <BookSession/>
      <Footer />
    </div>
  );
}

export default Home;

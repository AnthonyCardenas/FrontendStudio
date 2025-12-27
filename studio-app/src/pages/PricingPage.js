// List pricing options
// Input Brooklynn's graphic of prices// Put in an email box ; Find widget
import { useEffect, useState } from "react";
// import axios from "axios";
import api from "../Api.js";
import { PRICING_URL } from "../index.js";

import "./ContactPage.css";
import "./ShowcasePage.css";
import "./PricePage.css";

import Header from "../components/Header";
import PhotoBanner from "../components/PhotoBanner";
import Footer from "../components/Footer";
import TeamBanner from "../components/TeamBanner.js";
import BookSession from "../components/BookSession.js";
import PricingPackage from "../components/PricePackage.js";

// import WeddingCake from "../icons/wedding-cake.svg";
// import Banner from "../images/Grad-together-2.jpg";
import Banner from "../images/Richard+Tracey-64.jpg";
// import PricePNG from "../images/WeddingVideographyPrice.png";

import Martino from "../images/Martino-fam-67.jpg";
import Lake from "../images/Brittany-Sam-61.jpg";
// import Goofy from "../images/James-Headshot-26.jpg";
import Head from "../images/James-Headshot-21.jpg";


const VidPackages = [
  {
    title: "Elopement Package",
    price: 800,
    on_site_time: "1 hour of coverage",
    deliverable: "1-3 minute highlight video",
  },
  {
    title: "Silver Package",
    price: 1400,
    on_site_time: "5 hours of coverage",
    deliverable: "3-5 minute highlight video",
    vid_preview: true, // "Next day 30 sec preview",
    drone: true, //"Drone footage",
  },
  {
    title: "Gold Package",
    price: 2000,
    on_site_time: "8 hours of coverage",
    deliverable: "5-8 minute highlight video",
    vid_preview: true, //"Next day 30 sec preview",
    drone: true, //"Drone footage",
    raw: true, //"USB of RAW footage",
    second_photographer: false,
    category: "videography",
    level: 3,
  },
];

const v_photos = [Martino, Lake, Head];

function PricingPage() {
  const [guides, setGuides] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await api.get(PRICING_URL);
        setGuides(res.data);
        // console.log(res.data);
      } catch (err) {
        console.error("Error fecthing pricing guides: ", err);
        setError(true);
        setGuides(VidPackages);
      }
    };

    fetchPrices();
  }, []);


  if (error) {
    return (
      <div>
        <PhotoBanner imageUrl={Banner} altText={"Wedding photo"}>
          <Header />
        </PhotoBanner>
        <div className="package-dynamic">
          <PricingPackage packages={VidPackages} photos={v_photos} />
        </div>
        <p>Most pricing guides failed to load. Please try again later.</p>;
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <PhotoBanner imageUrl={Banner} altText={"Wedding photo"}>
        <Header />
      </PhotoBanner>
      <div className="showcase-title">
        <h2>Check out our packages</h2>
      </div>

      <div className="package-dynamic">
        {/* <PricingPackage packages={VidPackages} photos={v_photos} /> */}
        {guides.map(guide => (
          <div>
            <PricingPackage packages={guide.packages} photos={v_photos} />
          </div>
        ))}
      </div>

      <TeamBanner />
      <BookSession />
      <Footer />
    </div>
  );
}

export default PricingPage;

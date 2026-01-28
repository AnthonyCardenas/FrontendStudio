import { React, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import {Box, Container} from "@mui/material";
// import TopBar from "@/parts/TopBar";
import ScrollOnPage from "../hooks/ScrollOnPage.js";

import { HashLink } from "react-router-hash-link";
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

import Banner from "../images/Richard+Tracey-64.jpg";

import Martino from "../images/Martino-Family-67.jpg";
import Lake from "../images/Brittany-Sam-61.jpg";
import Head from "../images/James-Headshot-21.jpg";
import PriceAccordian from "../components/PriceAccordian.js";

import TiffanyMario from "../images/Tiffany+Mario_sneakpeek-1.jpg";
import pv_gold_list from "../organizers/PhotoVideoGold.js";
import pv_silver_list from "../organizers/PhotoVideoSilver.js";

import photo_gold_list from "../organizers/PhotoGoldList.js";
import photo_silver_list from "../organizers/PhotoSilverList.js";
import photo_bronze_list from "../organizers/PhotoBronzeList.js";
import video_bronze_list from "../organizers/VideoBronzeList.js";
import video_silver_list from "../organizers/VideoSilverList.js";
import video_gold_list from "../organizers/VideoGoldList.js";

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

const pv_gold_description =
  "For couples who want the full story beginning to end told through photo and video";

const pv_silver_description =
  "Great way to capture the highlights of your wedding in photo and video";

const photo_gold_desc = "Capture your wedding day in an album of photos";

const photo_silver_desc = "Get your wedding highlights in an album of photos";

const photo_bronze_desc =
  "Get a basic photo session, intended for individual or family photo shoots";

const video_gold_desc = "Capture your wedding day in a lively video";

const video_silver_desc =
  "Capture the most important moments of your wedding day in a video";

const video_bronze_desc = "Get a simple wedding or event video";

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
        <div className="showcase-title">
          <h2>Check out our packages</h2>
          <HashLink to="/pricing#video-photo">
            <p>Video and Photography Package</p>
          </HashLink>
          <HashLink to="/pricing#photo-solo">
            <p>Photography Package</p>
          </HashLink>
          <HashLink to="/pricing#video-solo">
            <p>Videography Package</p>
          </HashLink>
        </div>
        <div id="video-photo" className="package-title">
          <h2>Video and Photography Bundle</h2>
        </div>
        <PriceAccordian
          imageSrc={TiffanyMario}
          packname="Gold Package"
          price="3000"
          items={pv_gold_list}
          description={pv_gold_description}
        />
        <PriceAccordian
          imageSrc={TiffanyMario}
          packname="Silver Package"
          price="2000"
          items={pv_silver_list}
          description={pv_silver_description}
        />
        <div id="photo-solo" className="package-title">
          <h2>Photography Packages</h2>
        </div>
        <PriceAccordian
          imageSrc={TiffanyMario}
          packname="Gold Package"
          price="1800"
          items={photo_gold_list}
          description={photo_gold_desc}
        />
        <PriceAccordian
          imageSrc={TiffanyMario}
          packname="Silver Package"
          price="1400"
          items={photo_silver_list}
          description={photo_silver_desc}
        />
        <PriceAccordian
          imageSrc={TiffanyMario}
          packname="Bronze Package"
          price="300"
          items={photo_bronze_list}
          description={photo_bronze_desc}
        />
        <div id="video-solo" className="package-title">
          <h2>Videography Packages</h2>
        </div>
        <PriceAccordian
          imageSrc={TiffanyMario}
          packname="Gold Package"
          price="2000"
          items={video_gold_list}
          description={video_gold_desc}
        />
        <PriceAccordian
          imageSrc={TiffanyMario}
          packname="Silver Package"
          price="1400"
          items={video_silver_list}
          description={video_silver_desc}
        />
        <PriceAccordian
          imageSrc={TiffanyMario}
          packname="Bronze Package"
          price="800"
          items={video_bronze_list}
          description={video_bronze_desc}
        />
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
        {guides.map((guide) => (
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

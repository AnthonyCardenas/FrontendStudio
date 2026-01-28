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

// Component and Banner List
import Header from "../components/Header";
import PhotoBanner from "../components/PhotoBanner";
import Footer from "../components/Footer";
import TeamBanner from "../components/TeamBanner.js";
import BookSession from "../components/BookSession.js";
import PricingPackage from "../components/PricePackage.js";
import PriceAccordian from "../components/PriceAccordian.js";

/// Photo List
import HoldingBaby from "../images/Richard+Tracey-64.jpg";
import Martino from "../images/Martino-Family-67.jpg";
import Lake from "../images/Brittany-Sam-61.jpg";
import Head from "../images/James-Headshot-21.jpg";
import TiffanyMarioFlowers from "../images/Tiffany+Mario_Temple-86.jpg";
import MomDadPicnic from "../images/Mom+Dad-66.jpg";

import TiffanyMario from "../images/Tiffany+Mario_sneakpeek-1.jpg";
import TiffanyMarioExit from "../images/Tiffany+Mario_Temple-01.jpg";
import BrittanySamLift from "../images/Brittany+Sam-59.jpg";



import AbbyUmbrella from "../images/Abby-Hinge-5.jpg";
import NatalieBraden from "../images/Natalie+Braden-14.jpg";
import TimmyStairs from "../images/Timmy-headshot-sneakpeek-3.jpg";

import BetsyGio from "../images/Gio+Betsy-45.jpg";
import Kate from "../images/Kate-Graduation-27.jpg";
import Emily from "../images/Emily_Fall-24.jpg";
import MichelleRen from "../images/Michelle+Renato-8.jpg";

// import TiffanyMarioSpire from "../images/Tiffany+Mario_Temple-69.jpg";
// import MomDadLean from "../images/Mom+Dad-24.jpg";
// import MomDadWalk from "../images/Mom+Dad-52.jpg";

// const v_photos = [Martino, Lake, Head];

/// Price Package List
import pv_gold_list from "../organizers/PhotoVideoGold.js";
import pv_silver_list from "../organizers/PhotoVideoSilver.js";

import photo_gold_list from "../organizers/PhotoGoldList.js";
import photo_silver_list from "../organizers/PhotoSilverList.js";
import photo_bronze_list from "../organizers/PhotoBronzeList.js";

import video_bronze_list from "../organizers/VideoBronzeList.js";
import video_silver_list from "../organizers/VideoSilverList.js";
import video_gold_list from "../organizers/VideoGoldList.js";

// Package Description
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

function PricingPage() {
  return (
    <div>
      <PhotoBanner imageUrl={MomDadPicnic} altText={"Wedding photo"}>
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
        imageSrc={TiffanyMarioExit}
        packname="Gold Package"
        price="3000"
        items={pv_gold_list}
        description={pv_gold_description}
      />
      <PriceAccordian
        imageSrc={BrittanySamLift}
        packname="Silver Package"
        price="2000"
        items={pv_silver_list}
        description={pv_silver_description}
      />
      <div id="photo-solo" className="package-title">
        <h2>Photography Packages</h2>
      </div>
      <PriceAccordian
        
        imageSrc={Kate}
        packname="Gold Package"
        price="1800"
        items={photo_gold_list}
        description={photo_gold_desc}
      />
      <PriceAccordian
        imageSrc={NatalieBraden}
        packname="Silver Package"
        price="1400"
        items={photo_silver_list}
        description={photo_silver_desc}
      />
      <PriceAccordian
        imageSrc={TimmyStairs}
        packname="Bronze Package"
        price="300"
        items={photo_bronze_list}
        description={photo_bronze_desc}
      />
      <div id="video-solo" className="package-title">
        <h2>Videography Packages</h2>
      </div>
      <PriceAccordian
        imageSrc={BetsyGio}
        packname="Gold Package"
        price="2000"
        items={video_gold_list}
        description={video_gold_desc}
      />
      <PriceAccordian
        imageSrc={AbbyUmbrella}
        packname="Silver Package"
        price="1400"
        items={video_silver_list}
        description={video_silver_desc}
      />
      <PriceAccordian
        imageSrc={MichelleRen}
        packname="Bronze Package"
        price="800"
        items={video_bronze_list}
        description={video_bronze_desc}
      />
      <Footer />
    </div>
  );
}

export default PricingPage;

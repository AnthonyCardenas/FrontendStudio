// import React from "react";

import "./PricePackage.css";

import Martino from "../images/Martino-Family-67.jpg";
import Lake from "../images/Brittany-Sam-61.jpg";
// import Goofy from "../images/James-Headshot-26.jpg";
import Head from "../images/James-Headshot-21.jpg";

// const VidPackages = [
//   {
//     title: "Elopement Package",
//     price: 800,
//     on_site_time: "1 hour of coverage",
//     deliverable: "1-3 minute highlight video",
//   },
//   {
//     title: "Silver Package",
//     price: 1400,
//     on_site_time: "5 hours of coverage",
//     deliverable: "3-5 minute highlight video",
//     vid_preview: "Next day 30 sec preview",
//     drone: "Drone footage",
//   },
//   {
//     title: "Gold Package",
//     price: 2000,
//     on_site_time: "8 hours of coverage",
//     deliverable: "5-8 minute highlight video",
//     vid_preview: "Next day 30 sec preview",
//     drone: "Drone footage",
//     raw: "USB of RAW footage",
//   },
// ];

// more add-on: addt. hours, second photographer, photo-preview

const v_photos = [Martino, Lake, Head];

function PricingPackage({ packages, photos }) {
  return (
    <div className="pricing-wrapper">
      <div className="shadow-wrapper">
        <div className="v-photo-grid">
          {photos.length !== 0 ? (
            <div>
              {photos.map((photo) => (
                <div className="photo-item">
                  <img className="photo-size" src={photo} loading="lazy"></img>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {v_photos.map((photo) => (
                <div className="photo-item">
                  <img className="photo-size" src={photo} loading="lazy"></img>
                </div>
              ))}
            </div>
          )}
          {/* {photos.map((photo) => (
            <div className="photo-item">
              <img className="photo-size" src={photo} loading="lazy"></img>
            </div>
          ))} */}
        </div>

        <div className="package-grid">
          <div className="package-title">
            Brooklynn Rose <br /> Wedding Videography
          </div>

          {packages.map((pack) => (
            <div className="package-item">
              <h1>{pack.title}</h1>
              <h2>${pack.price}</h2>
              <ul>
                <li>{pack.on_site_time}</li>
                <li>{pack.deliverable}</li>
                {pack.vid_preview ? (
                  <li>Next day 30 sec preview</li>
                ) : (
                  <div></div>
                )}
                {pack.photo_preview ? (
                  <li>Next day 5 photo preview</li>
                ) : (
                  <div></div>
                )}
                {pack.drone ? <li>Drone footage</li> : <div></div>}
                {pack.raw ? <li>USB of RAW footage</li> : <div></div>}
                {pack.second_photography ? (
                  <li>Second photographer</li>
                ) : (
                  <div></div>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingPackage;

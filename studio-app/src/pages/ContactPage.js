// Put in an email box ; Find widget

import Header from "../components/Header";
import PhotoBanner from "../components/PhotoBanner";
import Footer from "../components/Footer";
import "./ContactPage.css";

import WeddingCake from "../icons/wedding-cake.svg";
import Banner from "../images/Brittany-Sam-water.jpg";

import TeamBanner from "../components/TeamBanner.js";
import ContactForm from "../components/ContactForm.js";

import InstaIcon from "../icons/instagram.svg";
import LinkedIcon from "../icons/linkedin.svg";

function ContactPage() {
  // return (
  //   <div>
  //     <PhotoBanner imageUrl={Banner} altText={"Wedding photo"}>
  //       <Header />
  //     </PhotoBanner>
  //     <div className="contact-title">
  //       <h2>Contact Me:</h2>
  //     </div>
  //     <div className="contact-body">
  //       <ContactForm />
  //     </div>
  //     <TeamBanner />
  //     <Footer />
  //   </div>
  // );
  return (
    <div>
      <PhotoBanner imageUrl={Banner} altText={"Wedding photo"}>
        <Header />
      </PhotoBanner>
      <div className="contact-title">
        <h2>Contact me through social media:</h2>
      </div>
      <div className="contact-icons">
        {/* Put in icons for social apps */}
        <a className="contact-icon-container" href="https://www.instagram.com/brooklynnrosestudio/">
          {/* <p className="icon">Instagram:</p> */}
          <img className="contact-icon-1" src={InstaIcon} alt="Instagram" />
        </a>
        <a className="contact-icon-container" href="https://www.linkedin.com/in/brooklynn-cardenas/">
          {/* <p className="icon">LinkedIn</p> */}
          <img className="contact-icon-2" src={LinkedIcon} alt="LinkedIn" />
        </a>
      </div>
      <TeamBanner />
      <Footer />
    </div>
  );
}
export default ContactPage;

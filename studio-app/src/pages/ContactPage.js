// Put in an email box ; Find widget

import Header from "../components/Header";
import PhotoBanner from "../components/PhotoBanner";
import Footer from "../components/Footer";
import "./ContactPage.css";

import WeddingCake from "../icons/wedding-cake.svg";
import Banner from "../images/Brittany-Sam-water.jpg";

import TeamBanner from "../components/TeamBanner.js";
import ContactForm from "../components/ContactForm.js";


function ContactPage() {
  return (
    <div>
      <PhotoBanner imageUrl={Banner} altText={"Wedding photo"}>
        <Header />
      </PhotoBanner>
      <div className="contact-title">
        <h2>Contact Me:</h2>
      </div>
      <div className="contact-body">
        <ContactForm />
      </div>
      <TeamBanner />
      <Footer />
    </div>
  );
}
export default ContactPage;

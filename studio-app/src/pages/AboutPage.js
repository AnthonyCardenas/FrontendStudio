// Put in an email box ; Find widget

import Header from "../components/Header";
import PhotoBanner from "../components/PhotoBanner";
import Footer from "../components/Footer";
// import "./AboutPage.css";

import WeddingCake from "../icons/wedding-cake.svg";
import Banner from "../images/LabPhoto.jpg";
import Grad from "../images/Grad-Together-Column.JPG"
import BookSession from "../components/BookSession";
import AboutBanner from "../components/AboutBanner";
import TeamBanner from "../components/TeamBanner";


function AboutPage() {
  return (
    <div>
      <PhotoBanner imageUrl={Grad} altText={"Grad photo"}>
        <Header />
      </PhotoBanner>
      <AboutBanner />
      <TeamBanner />
      <BookSession />
      <Footer />
    </div>
  );
}
export default AboutPage;
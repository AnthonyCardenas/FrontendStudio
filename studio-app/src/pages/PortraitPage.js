import "./ShowcasePage.css";

import Header from "../components/Header";
import PhotoBanner from "../components/PhotoBanner";
import Footer from "../components/Footer";

import FilteredGallery from "../components/FilteredGallery";
import FilteredReviews from "../components/FilteredReviews";

// import WeddingCake from "../icons/wedding-cake.svg";
import Banner from "../images/Timmy-headshot-4.jpg";


function PortraitPage() {
  return (
    <div>
      <PhotoBanner imageUrl={Banner} altText={"Tree photo"}>
        <Header />
      </PhotoBanner>
      <div className="showcase-title">
        <h2>Portrait Photography</h2>
      </div>
      <FilteredGallery filterCategory={"Portrait"} />
      <FilteredReviews filterCategory={"Portrait"}/>
      <Footer />
    </div>
  );
}
export default PortraitPage;

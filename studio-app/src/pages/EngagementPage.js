import "./ShowcasePage.css";

import Header from "../components/Header";
import PhotoBanner from "../components/PhotoBanner";
import Footer from "../components/Footer";

import FilteredGallery from "../components/FilteredGallery";
import FilteredReviews from "../components/FilteredReviews";

// import WeddingCake from "../icons/wedding-cake.svg";
import Banner from "../images/Gio+Betsy-63.jpg";



function EngagementPage() {
  return (
    <div>
      <PhotoBanner imageUrl={Banner} altText={"Engagement photo"}>
        <Header />
      </PhotoBanner>
      <div className="showcase-title">
        <h2>Engagement Photography</h2>
      </div>
      <FilteredGallery filterCategory={"Engagement"} />
      <FilteredReviews filterCategory={"Engagement"}/>
      <Footer />
    </div>
  );
}
export default EngagementPage;

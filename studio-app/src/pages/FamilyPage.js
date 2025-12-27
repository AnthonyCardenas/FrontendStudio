import "./ShowcasePage.css";

import Header from "../components/Header";
import PhotoBanner from "../components/PhotoBanner";
import Footer from "../components/Footer";

import FilteredGallery from "../components/FilteredGallery";
import FilteredReviews from "../components/FilteredReviews";

// import WeddingCake from "../icons/wedding-cake.svg";
import Banner from "../images/Cassleman-Family-51.jpg";


function FamilyPage() {
  return (
    <div>
      <PhotoBanner imageUrl={Banner} altText={"Tree photo"}>
        <Header />
      </PhotoBanner>
      <div className="showcase-title">
        <h2>Family Photography</h2>
      </div>
      <FilteredGallery filterCategory={"Family"} />
      <FilteredReviews filterCategory={"Family"}/>
      <Footer />
    </div>
  );
}
export default FamilyPage;

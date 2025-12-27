import "./ShowcasePage.css";

import Header from "../components/Header";
import PhotoBanner from "../components/PhotoBanner";
import Footer from "../components/Footer";

import FilteredGallery from "../components/FilteredGallery";
import FilteredReviews from "../components/FilteredReviews";

// import WeddingCake from "../icons/wedding-cake.svg";
import Banner from "../images/Ashley-newborn-17.jpg";

// reposition header photo


function NewbornPage() {
  return (
    <div>
      <PhotoBanner imageUrl={Banner} altText={"Baby photo"}>
        <Header />
      </PhotoBanner>
      <div className="showcase-title">
        <h2>Newborn Photography</h2>
      </div>
      <FilteredGallery filterCategory={"Newborn"} />
      <FilteredReviews filterCategory={"Newborn"}/>
      <Footer />
    </div>
  );
}
export default NewbornPage;

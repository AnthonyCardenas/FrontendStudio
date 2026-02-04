import "./ShowcasePage.css";

import Header from "../components/Header";
import PhotoBanner from "../components/PhotoBanner";
import Footer from "../components/Footer";

import GalleryList from "../components/GalleryList";
import ReviewList from "../components/ReviewList";
// import FilteredGallery from "../components/FilteredGallery";
// import FilteredReviews from "../components/FilteredReviews";

import FamilyReviewList from "../organizers/FamilyReviewList";
import FamilyPhotoList from "../organizers/FamilyPhotoList";

import FamilyBanner from "../images/Harmer-Family-93.jpg";
// import WeddingCake from "../icons/wedding-cake.svg";
// import Banner from "../images/Cassleman-Family-51.jpg";


function FamilyPage() {

  return (
    <div>
      <PhotoBanner imageUrl={FamilyBanner} altText={"Family photo"}>
        <Header />
      </PhotoBanner>
      <div className="showcase-title">
        <h2>Family Photography</h2>
      </div>
      <h1 className="review-title" >Family Shoot Reviews</h1>
      <ReviewList reviews={FamilyReviewList} />
      <h1 className="photo-title">Family Shoot Photos</h1>
      <GalleryList photos={FamilyPhotoList} />
      {/* <FilteredGallery filterCategory={"Family"} /> */}
      {/* <FilteredReviews filterCategory={"Family"} /> */}
      <Footer />
    </div>
  );

}
export default FamilyPage;

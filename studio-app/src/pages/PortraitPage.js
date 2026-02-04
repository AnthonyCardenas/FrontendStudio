import "./ShowcasePage.css";

import Header from "../components/Header";
import PhotoBanner from "../components/PhotoBanner";
import Footer from "../components/Footer";
import GalleryList from "../components/GalleryList";
// import FilteredGallery from "../components/FilteredGallery";
// import FilteredReviews from "../components/FilteredReviews";

import HeadshotPhotoList from "../organizers/HeadshotPhotoList";

import Banner from "../images/Timmy-headshot-4.jpg";
// import WeddingCake from "../icons/wedding-cake.svg";


function PortraitPage() {
  return (
    <div>
      <PhotoBanner imageUrl={Banner} altText={"Tree photo"}>
        <Header />
      </PhotoBanner>
      <div className="showcase-title">
        <h2>Portrait Photography</h2>
      </div>
      {/* <h1 className="review-title" >Individual Shoot Reviews</h1> */}
      {/* <ReviewList reviews={PortraitReviewList} /> */}
      {/* <FilteredReviews filterCategory={"Portrait"}/> */}

      {/* <h1 className="photo-title" >Individual Shoot Photos</h1> */}
      <GalleryList photos={HeadshotPhotoList} />
      {/* <FilteredGallery filterCategory={"Portrait"} /> */}
      <Footer />
    </div>
  );
}
export default PortraitPage;

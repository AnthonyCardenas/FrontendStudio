import "./ShowcasePage.css";

import Header from "../components/Header";
import PhotoBanner from "../components/PhotoBanner";
import Footer from "../components/Footer";
// import FilteredGallery from "../components/FilteredGallery";
// import FilteredReviews from "../components/FilteredReviews";

import ReviewList from "../components/ReviewList";
import VideoBanner from "../components/VideoBanner";
import GalleryList from "../components/GalleryList";

import EngagementReviewList from "../organizers/EngagementReviewList";
import EngagementVideoList from "../organizers/EngagementVideoList";
import EngagementPhotoList from "../organizers/EngagementPhotoList";

import GibbetsBanner from "../images/Gio+Betsy-63.jpg";
// import WeddingCake from "../icons/wedding-cake.svg";

function EngagementPage() {
  return (
    <div>
      <PhotoBanner imageUrl={GibbetsBanner} altText={"Engagement photo"}>
        <Header />
      </PhotoBanner>
      <div className="showcase-title">
        <h2>Engagement Photography</h2>
      </div>
      <h1 className="review-title" >Engagement Shoot Reviews</h1>
      <ReviewList reviews={EngagementReviewList} />
      <h1 className="video-title" >First Look Videos</h1>
      <VideoBanner videoList={EngagementVideoList} />
      <h1 className="photo-title" >Engagement Shoot Photos</h1>
      <GalleryList photos={EngagementPhotoList} />
      {/* <FilteredGallery filterCategory={"Engagement"} /> */}
      {/* <FilteredReviews filterCategory={"Engagement"} /> */}
      <Footer />
    </div>
  );
}
export default EngagementPage;

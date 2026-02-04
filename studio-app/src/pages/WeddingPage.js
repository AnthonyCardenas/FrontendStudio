import "./ShowcasePage.css";

import Header from "../components/Header";
import PhotoBanner from "../components/PhotoBanner";
import Footer from "../components/Footer";

import ReviewList from "../components/ReviewList";
import VideoBanner from "../components/VideoBanner";
import GalleryList from "../components/GalleryList";
// import FilteredGallery from "../components/FilteredGallery";
// import FilteredReviews from "../components/FilteredReviews";
// import VideoPlayer from "../components/VideoPlayer";
// import YoutubeEmbed from "../components/YoutubeEmbed";

import WeddingReviewList from "../organizers/WeddingReviewList";
import CompleteVideoList from "../organizers/CompleteVideoList";
import WeddingPhotoList from "../organizers/WeddingPhotoList";

import TiffanyMario from "../images/Tiffany+Mario_sneakpeek-6.jpg";
// import Banner from "../images/LabPhoto.jpg";
// import WeddingCake from "../icons/wedding-cake.svg";


function WeddingPage() {
  return (
    <div>
      <PhotoBanner imageUrl={TiffanyMario} altText={"Wedding photo"}>
        <Header />
      </PhotoBanner>
      <div className="showcase-title">
        <h2>Wedding Photography and Videography</h2>
      </div>
      <h1 className="review-title" >Wedding Shoot Reviews</h1>
      <ReviewList reviews={WeddingReviewList} />
      <h1 className="video-title" >Wedding Shoot Videos</h1>
      <VideoBanner videoList={CompleteVideoList} />
      <h1 className="photo-title" >Wedding Shoot Photos</h1>
      <GalleryList photos={WeddingPhotoList}/>
      <Footer />
    </div>
  );
}
export default WeddingPage;

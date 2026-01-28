import "./ShowcasePage.css";

import Header from "../components/Header";
import PhotoBanner from "../components/PhotoBanner";
import Footer from "../components/Footer";

import FilteredGallery from "../components/FilteredGallery";
import FilteredReviews from "../components/FilteredReviews";

// import WeddingCake from "../icons/wedding-cake.svg";
// import Banner from "../images/LabPhoto.jpg";
import VideoPlayer from "../components/VideoPlayer";
import WeddingReviewList from "../organizers/WeddingReviewList";
import ReviewList from "../components/ReviewList";
// import YoutubeEmbed from "../components/YoutubeEmbed";
import VideoBanner from "../components/VideoBanner";
import CompleteVideoList from "../organizers/CompleteVideoList";
import GalleryList from "../components/GalleryList";

import TiffanyMario from "../images/Tiffany+Mario_sneakpeek-6.jpg";

function WeddingPage() {
  return (
    <div>
      <PhotoBanner imageUrl={TiffanyMario} altText={"Wedding photo"}>
        <Header />
      </PhotoBanner>
      {/* <Header /> */}
      <div className="showcase-title">
        <h2>Wedding Photography and Videography</h2>
      </div>
      <VideoBanner videoList={CompleteVideoList} />
      {/* <YoutubeEmbed
        video="https://www.youtube.com/watch?v=w3Whs8bE-tM"
        title="Dash Test"
      ></YoutubeEmbed> */}
      {/* <FilteredGallery filterCategory={"Wedding"} /> */}
      {/* <FilteredReviews filterCategory={"Wedding"}/> */}
      <ReviewList reviews={WeddingReviewList} />
      <GalleryList photos={null}/>
      {/* <VideoPlayer title={"Curr Video"} video={"video_url"}/> */}
      <Footer />
    </div>
  );
}
export default WeddingPage;

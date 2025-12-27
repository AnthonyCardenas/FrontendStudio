import "./ShowcasePage.css";

import Header from "../components/Header";
import PhotoBanner from "../components/PhotoBanner";
import Footer from "../components/Footer";

import FilteredGallery from "../components/FilteredGallery";
import FilteredReviews from "../components/FilteredReviews";

// import WeddingCake from "../icons/wedding-cake.svg";
// import Banner from "../images/LabPhoto.jpg";
import VideoPlayer from "../components/VideoPlayer";


function WeddingPage() {
  return (
    <div>
      {/* <PhotoBanner imageUrl={Banner} altText={"Wedding photo"}>
        <Header />
      </PhotoBanner> */}
      <Header />
      <div className="showcase-title">
        <h2>Wedding Photography</h2>
      </div>
      <FilteredGallery filterCategory={"Wedding"} />
      <FilteredReviews filterCategory={"Wedding"}/>
      {/* <VideoPlayer title={"Curr Video"} video={"video_url"}/> */}
      <Footer />
    </div>
  );
}
export default WeddingPage;

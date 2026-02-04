import "./ShowcasePage.css";

import Header from "../components/Header";
import PhotoBanner from "../components/PhotoBanner";
import Footer from "../components/Footer";
// import FilteredGallery from "../components/FilteredGallery";
// import FilteredReviews from "../components/FilteredReviews";

import ReviewList from "../components/ReviewList";
import VideoBanner from "../components/VideoBanner";
import GalleryList from "../components/GalleryList";

// import CommercialReviewList from "../organizers/CommercialReviewList";
// import CommercialVideoList from "../organizers/CommercialVideoList";
import CommercialPhotoList from "../organizers/CommercialPhotoList";

// import PromoBanner from "../images/Columbine_promo-184.jpg";
import PromoBanner from "../images/Columbine_promo-32.jpg";
// import WeddingCake from "../icons/wedding-cake.svg";


function CommercialPage() {
  return (
    <div>
      <PhotoBanner imageUrl={PromoBanner} altText={"Theatre photo"}>
        <Header />
      </PhotoBanner>
      <div className="showcase-title">
        <h2>Commercial Photography</h2>
      </div>
      {/* <VideoBanner videoList={CommercialVideoList} /> */}
      {/* <ReviewList reviews={CommercialReviewList} /> */}
      <GalleryList photos={CommercialPhotoList} />
      {/* <FilteredGallery filterCategory={"Engagement"} /> */}
      {/* <FilteredReviews filterCategory={"Engagement"} /> */}
      <Footer />
    </div>
  );
}
export default CommercialPage;

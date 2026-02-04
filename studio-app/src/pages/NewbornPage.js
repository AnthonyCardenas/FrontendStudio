import "./ShowcasePage.css";

import Header from "../components/Header";
import PhotoBanner from "../components/PhotoBanner";
import Footer from "../components/Footer";

import GalleryList from "../components/GalleryList";
// import FilteredGallery from "../components/FilteredGallery"; // For Django
// import FilteredReviews from "../components/FilteredReviews";

import NewbornPhotoList from "../organizers/NewbornPhotoList";

import Banner from "../images/Ashley-newborn-17.jpg";


function NewbornPage() {
  return (
    <div>
      <PhotoBanner imageUrl={Banner} altText={"Baby photo"}>
        <Header />
      </PhotoBanner>
      <div className="showcase-title">
        <h2>Newborn Photography</h2>
      </div>
      {/* <h1 className="review-title" >Newborn Shoot Reviews</h1> */}
      {/* <ReviewList reviews={NewbornReviewList} /> */}
      {/* <h1 className="photo-title" >Newborn Shoot Photos</h1> */}
      <GalleryList photos={NewbornPhotoList}/>
      {/* For DJango */}
      {/* <FilteredGallery filterCategory={"Newborn"} />  */}
      {/* <FilteredReviews filterCategory={"Newborn"}/> */}
      <Footer />
    </div>
  );
}
export default NewbornPage;

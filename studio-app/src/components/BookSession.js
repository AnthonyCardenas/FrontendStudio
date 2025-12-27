// import React from "react";

import "./BookSession.css";

function BookSession() {
  return (
    <div className="book-wrapper">
      <div className="book-overlay"></div>

      <div className="book-content">
        <h1 className="book-title">
          Ready to Book
          <br />
          Your Session?
        </h1>

        <div className="book-buttons">
          <a href="/PricingPage">
            <button className="btn btn-light">Check out our prices</button>
          </a>

          <a href="/GalleryPage">
            <button className="btn btn-gold">View Gallery</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default BookSession;

// import React from "react";

import "./BookSession.css";
import { Link } from "react-router-dom";

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
        <h1 className="book-title-mobile">
          Ready to Book Your Session?
        </h1>

        <div className="book-buttons">
          <Link to="/pricing">
            <button className="btn btn-light">Check out my prices</button>
            <button className="btn btn-light-mobile">Prices</button>
          </Link>
          
          <Link to="/gallery">
            <button className="btn btn-gold">View the gallery</button>
            <button className="btn btn-gold-mobile">Gallery</button>
          </Link>
         
        </div>
      </div>
    </div>
  );
}
export default BookSession;

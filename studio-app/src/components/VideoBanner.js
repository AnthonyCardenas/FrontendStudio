// import React from "react";
import "./VideoBanner.css";

// For Django later:
// const videos = data.map(v => `https://www.youtube.com/embed/${v.youtube_id}`);

function VideoBanner({ videoList }) {
  return (
    <div className="video-grid-container">
      {videoList.map((url, index) => (
        <div className="video-box" key={index}>
          <iframe
            src={url}
            title={`youtube-video-${index}`}
            frameborder="0"
            allow="accelerometer;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picure;
            web-share"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  );
}
export default VideoBanner;

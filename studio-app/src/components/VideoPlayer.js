// import React from "react";

const VideoPlayer = ({ title, myVideo }) => {
  return (
    <div>
      <h2>{title}</h2>
      <video width="400" height="225" controls muted autoPlay loop>
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default VideoPlayer;

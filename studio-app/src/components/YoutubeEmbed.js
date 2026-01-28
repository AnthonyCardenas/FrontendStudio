function YoutubeEmbed(video, title) {
  // const options = []
  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src={video}
        title={title}
        frameborder="0"
        allow="accelerometer;
        clipboard-write;
        encrypted-media
        gyroscope
        picture-in-picure
        web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
export default YoutubeEmbed;

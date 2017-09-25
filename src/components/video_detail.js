import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-12">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div><h3>{video.snippet.title}</h3></div>
        <br />
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
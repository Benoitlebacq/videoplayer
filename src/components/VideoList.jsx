import React from "react";
import Video from "./Video";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map(video => {
    return <Video key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />;
  });

  return <div className="ui divided relaxed list">{renderList}</div>;
};

export default VideoList;

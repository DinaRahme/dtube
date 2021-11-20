import React from 'react';
import "./MainVideo.css"

function MainVideo() {
  return (
    <div className="mainvideo">
      <iframe
        width="900"
        height="500"
        src="https://www.youtube.com/embed/wMFbBct-p7c"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="mainvideo__desc">
        1 Minute Timer with Music for Kids! One Minute Calming Meditation
        Relaxing Music!
      </div>
    </div>
  );
}

export default MainVideo;
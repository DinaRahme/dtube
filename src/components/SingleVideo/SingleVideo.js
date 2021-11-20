import React from "react";
import "./SingleVideo.css";

const SingleVideo = () => {
  return (
    <ul className="videos__list video-list">
      <li className="video-list__element">
        <iframe
          className="frame"
          width="168"
          height="94"
          src="https://www.youtube.com/embed/wMFbBct-p7c"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className="desc">
          1 Minute Timer with Music for Kids! One Minute Calming Meditation
          Relaxing Music!
        </div>
      </li>
    </ul>
  );
};

export default SingleVideo;

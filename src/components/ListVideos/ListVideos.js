import React from "react";
import "./ListVideos.css";
import SingleVideo from "../SingleVideo/SingleVideo";

function ListVideos() {
    const arr =Array.from(Array(10).keys());
    const list = arr.map((_,index) =><SingleVideo key={index}/>)
  return (
    <div>
      <ul className="videos__list video-list">
       {list}
      </ul>
    </div>
  );
}

export default ListVideos;

import React from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import ListVideos from "./components/ListVideos/ListVideos";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="videos">
       <MainVideo/>
        <div>
         <ListVideos/>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import ylogo from "./assets/youtube.png";
import slogo from "./assets/magnifying-glass.png";
import avalogo from "./assets/man.png";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-wrapper">
          <img src={ylogo} alt="logo" />
        </div>

        <div className="dsearch">
          <input className="tosearch" placeholder="search" type="text"></input>
          <a href="google.com" className="sbtn">
            <img src={slogo} alt="logo" />
          </a>
        </div>

        <div className="youravatar">
          <img src={avalogo} alt="" />
        </div>
      </header>
      <div className="videos">
        <div className="mainvideo">
          <iframe
            width="900"
            height="500"
            src="https://www.youtube.com/embed/wMFbBct-p7c"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="mainvideo__desc">
            1 Minute Timer with Music for Kids! One Minute Calming Meditation
            Relaxing Music!
          </div>
        </div>
        <div>
          <ul className="videos__list video-list">
              <li className="video-list__element">
                <iframe className="frame"
                  width="168"
                  height="94"
                  src="https://www.youtube.com/embed/wMFbBct-p7c"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="desc">
                  1 Minute Timer with Music for Kids! One Minute Calming
                  Meditation Relaxing Music!
                </div>
              </li>
            <li className="video-list__element">
              <iframe className="frame"
                width="168"
                height="94"
                src="https://www.youtube.com/embed/wMFbBct-p7c"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="desc">
                1 Minute Timer with Music for Kids! One Minute Calming
                Meditation Relaxing Music!
              </div>
            </li>

            <li className="video-list__element">
              <iframe className="frame"
                width="168"
                height="94"
                src="https://www.youtube.com/embed/wMFbBct-p7c"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="desc">
                1 Minute Timer with Music for Kids! One Minute Calming
                Meditation Relaxing Music!
              </div>
            </li>

            <div>
              <li className="video-list__element">
                <iframe className="frame"
                  width="168"
                  height="94"
                  src="https://www.youtube.com/embed/wMFbBct-p7c"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="desc">
                  1 Minute Timer with Music for Kids! One Minute Calming
                  Meditation Relaxing Music!
                </div>
              </li>
            </div>

            <div>
              <li className="video-list__element">
                <iframe className="frame"
                  width="168"
                  height="94"
                  src="https://www.youtube.com/embed/wMFbBct-p7c"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="desc">
                  1 Minute Timer with Music for Kids! One Minute Calming
                  Meditation Relaxing Music!
                </div>
              </li>
            </div>
            <div>
              <li className="video-list__element">
                <iframe className="frame"
                  width="168"
                  height="94"
                  src="https://www.youtube.com/embed/wMFbBct-p7c"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="desc">
                  1 Minute Timer with Music for Kids! One Minute Calming
                  Meditation Relaxing Music!
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

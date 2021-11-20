import React from 'react';
import ylogo from "../../assets/youtube.png";
import slogo from "../../assets/magnifying-glass.png";
import avalogo from "../../assets/man.png";
import "./Header.css"

function Header() {
  return (
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
  );
}

export default Header;

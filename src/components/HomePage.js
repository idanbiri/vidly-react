import React from "react";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <>
      <h1 className="main-title">$treamy</h1>
      <div className="slidershow middle">
        <div className="slides">
          <input type="radio" name="r" id="r1" checked readOnly />
          <input type="radio" name="r" id="r2" />
          <input type="radio" name="r" id="r3" />
          <input type="radio" name="r" id="r4" />
          <input type="radio" name="r" id="r5" />
          <div className="slide s1">
            <img src="https://wallpaperaccess.com/thumb/172154.jpg" />
          </div>
          <div className="slide">
            <img src="https://wallpaperaccess.com/thumb/197277.jpg" />
          </div>
          <div className="slide">
            <img src="https://wallpaperaccess.com/thumb/320.jpg" />
          </div>
          <div className="slide">
            <img src="https://wallpaperaccess.com/thumb/234772.jpg" />
          </div>
          <div className="slide">
            <img src="https://wallpaperaccess.com/thumb/293977.jpg" />
          </div>
        </div>
        <div className="navigation">
          <label htmlFor="r1" className="bar"></label>
          <label htmlFor="r2" className="bar"></label>
          <label htmlFor="r3" className="bar"></label>
          <label htmlFor="r4" className="bar"></label>
          <label htmlFor="r5" className="bar"></label>
        </div>
      </div>
    </>
  );
};

export default HomePage;

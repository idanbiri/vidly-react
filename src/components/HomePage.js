import React from "react";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="container">
        <div id="content-slider">
          <div id="slider">
            <div id="mask">
              <ul>
                <li id="first" className="firstanimation">
                  <a href="#">
                    {" "}
                    <img
                      src="https://wallpaperaccess.com/thumb/977057.jpg"
                      alt="Cougar"
                    />{" "}
                  </a>
                  <div className="tooltip">
                    {" "}
                    <h1>Cougar</h1>{" "}
                  </div>
                </li>

                <li id="second" className="secondanimation">
                  <a href="#">
                    {" "}
                    <img
                      src="https://wallpaperaccess.com/thumb/97430.jpg"
                      alt="Lions"
                    />{" "}
                  </a>
                  <div className="tooltip">
                    {" "}
                    <h1>Lions</h1>{" "}
                  </div>
                </li>

                <li id="third" className="thirdanimation">
                  <a href="#">
                    {" "}
                    <img
                      src="https://wallpaperaccess.com/thumb/82941.jpg"
                      alt="Snowalker"
                    />{" "}
                  </a>
                  <div className="tooltip">
                    {" "}
                    <h1>Snowalker</h1>{" "}
                  </div>
                </li>

                <li id="fourth" className="fourthanimation">
                  <a href="#">
                    {" "}
                    <img
                      src="https://wallpaperaccess.com/thumb/234772.jpg"
                      alt="Howling"
                    />{" "}
                  </a>
                  <div className="tooltip">
                    {" "}
                    <h1>Howling</h1>{" "}
                  </div>
                </li>

                <li id="fifth" className="fifthanimation">
                  <a href="#">
                    {" "}
                    <img
                      src="https://wallpaperaccess.com/thumb/464866.jpg"
                      alt="Sunbathing"
                    />{" "}
                  </a>
                  <div className="tooltip">
                    {" "}
                    <h1>Sunbathing</h1>{" "}
                  </div>
                </li>
              </ul>
            </div>
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

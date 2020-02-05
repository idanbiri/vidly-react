import React from "react";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <>
      <div class="container">
        <div id="content-slider">
          <div id="slider">
            <div id="mask">
              <ul>
                <li id="first" class="firstanimation">
                  <a href="#">
                    {" "}
                    <img
                      src="https://wallpaperaccess.com/thumb/977057.jpg"
                      alt="Cougar"
                    />{" "}
                  </a>
                  <div class="tooltip">
                    {" "}
                    <h1>Cougar</h1>{" "}
                  </div>
                </li>

                <li id="second" class="secondanimation">
                  <a href="#">
                    {" "}
                    <img
                      src="https://wallpaperaccess.com/thumb/97430.jpg"
                      alt="Lions"
                    />{" "}
                  </a>
                  <div class="tooltip">
                    {" "}
                    <h1>Lions</h1>{" "}
                  </div>
                </li>

                <li id="third" class="thirdanimation">
                  <a href="#">
                    {" "}
                    <img
                      src="https://wallpaperaccess.com/thumb/82941.jpg"
                      alt="Snowalker"
                    />{" "}
                  </a>
                  <div class="tooltip">
                    {" "}
                    <h1>Snowalker</h1>{" "}
                  </div>
                </li>

                <li id="fourth" class="fourthanimation">
                  <a href="#">
                    {" "}
                    <img
                      src="https://wallpaperaccess.com/thumb/234772.jpg"
                      alt="Howling"
                    />{" "}
                  </a>
                  <div class="tooltip">
                    {" "}
                    <h1>Howling</h1>{" "}
                  </div>
                </li>

                <li id="fifth" class="fifthanimation">
                  <a href="#">
                    {" "}
                    <img
                      src="https://wallpaperaccess.com/thumb/464866.jpg"
                      alt="Sunbathing"
                    />{" "}
                  </a>
                  <div class="tooltip">
                    {" "}
                    <h1>Sunbathing</h1>{" "}
                  </div>
                </li>
              </ul>
            </div>
            <div class="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

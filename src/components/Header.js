import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header id="nav">
      <img
        className="logo"
        src="https://image.flaticon.com/icons/png/512/1680/1680371.png"
        height="60"
        width="60"
      />
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Tvshows</a>
          </li>
          <li>
            <a href="#">Transactions</a>
          </li>
        </ul>
      </nav>
      <a className="login-button" href="#">
        <button>Login</button>
      </a>
      <a className="login-button" href="#">
        <button>Signup</button>
      </a>
    </header>
  );
};

export default Header;

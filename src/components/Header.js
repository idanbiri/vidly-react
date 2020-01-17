import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import "../styles/Header.css";

const Header = () => {
  return (
    <header id="nav">
      <Link to="/" className="logo">
        <img
          src="https://image.flaticon.com/icons/png/512/1680/1680371.png"
          height="60"
          width="60"
          alt="batman logo"
        />
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <a>Movies</a>
          </li>
          <li>
            <a>Tvshows</a>
          </li>
          <li>
            <a>Transactions</a>
          </li>
        </ul>
      </nav>
      <LoginButton />
      <a className="login-button" href="#">
        <button>Signup</button>
      </a>
    </header>
  );
};

export default Header;

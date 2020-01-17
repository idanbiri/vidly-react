import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header id="nav">
      <Link to="/" className="logo">
        <img
          src="https://image.flaticon.com/icons/png/512/1680/1680371.png"
          height="60"
          width="60"
        />
      </Link>
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
      <Link to="/login" className="login-button" href="#">
        <button>Login</button>
      </Link>
      <a className="login-button" href="#">
        <button>Signup</button>
      </a>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import TransactionBtn from "./TransactionBtn";
import "../styles/Header.css";

const Header = () => {
  return (
    <header id="nav">
      <Link to="/" className="logo">
        <img
          src="https://image.flaticon.com/icons/svg/863/863133.svg"
          height="60"
          width="60"
          alt="batman logo"
        />
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/tv-shows">Tvshows</Link>
          </li>
          <li>
            <TransactionBtn />
          </li>
        </ul>
      </nav>
      <LoginButton />
      <Link to="/sign-up" className="login-button">
        <button>Sign-up</button>
      </Link>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import TransactionBtn from "./TransactionBtn";
import AdminBtn from "./admin/AdminBtn";
import SubMenu from "./SubMenu";
import SearchBar from "./SearchBar";
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
      <SearchBar />
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/movies">Movies</Link>
            <SubMenu category={"movies"} />
          </li>
          <li>
            <Link to="/tv-shows">Tvshows</Link>
            <SubMenu category={"tv-shows"} />
          </li>
          <li>
            <TransactionBtn />
          </li>
          <li>
            <AdminBtn />
          </li>
        </ul>
      </nav>
      <LoginButton />
      <Link to="/sign-up" className="login-button sign-up-btn">
        <button>Sign-up</button>
      </Link>
    </header>
  );
};

export default Header;

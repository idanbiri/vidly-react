import React from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ category }) => {
  return (
    <ul>
      <li>
        <Link to={`/${category}?genre=Action`}>Action</Link>
      </li>
      <li>
        <Link to={`/${category}?genre=Comedy`}>Comedy</Link>
      </li>
      <li>
        <Link to={`/${category}?genre=Drama`}>Drama</Link>
      </li>
      <li>
        <Link to={`/${category}?genre=Horror`}>Horror</Link>
      </li>
    </ul>
  );
};

export default SubMenu;

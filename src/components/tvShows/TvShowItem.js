import React from "react";
import { Link } from "react-router-dom";
import "../../styles/movies/MovieItem.css";

const TvShowItem = ({ tvShow }) => {
  return (
    <li className="movie-item">
      <h4 className="movie-title">{tvShow.title}</h4>
      <Link to={`/tv-show/${tvShow._id}`}>
        <img className="movie-img" src={tvShow.image} alt="photo of a movie" />
      </Link>
    </li>
  );
};

export default TvShowItem;

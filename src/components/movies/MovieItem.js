import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/movies/MovieItem.css";

const MovieItem = ({ movie }) => {
  return (
    <li className="movie-item">
      <h4 className="movie-title">{movie.title}</h4>
      <Link to={`/movie/${movie._id}`}>
        <img className="movie-img" src={movie.image} alt="photo of a movie" />
      </Link>
    </li>
  );
};

export default MovieItem;

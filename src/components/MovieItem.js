import React, { useEffect, useState } from "react";
import "../styles/MovieItem.css";

const MovieItem = ({ movie }) => {
  return (
    <li className="movie-item">
      <h4 className="movie-title">{movie.title}</h4>
      <img className="movie-img" src={movie.image} alt="photo of a movie" />
    </li>
  );
};

export default MovieItem;

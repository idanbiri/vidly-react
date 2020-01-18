import React, { useEffect, useState } from "react";
import vidly from "../apis/index";
import MovieItem from "./MovieItem";
import "../styles/Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const { data } = await vidly.get("/movies");
    setMovies(data);
  };

  const renderMovies = () => {
    return movies.map(movie => {
      return <MovieItem movie={movie} key={movie._id} />;
    });
  };

  return <ul className="movies-container">{renderMovies()}</ul>;
};

export default Movies;

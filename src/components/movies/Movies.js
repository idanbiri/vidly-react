import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import vidly from "../../apis/index";
import MovieItem from "./MovieItem";
import "../../styles/movies/Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { search } = useLocation();
  const queryParams = queryString.parse(search);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    if (!queryParams.genre) {
      const { data } = await vidly.get("/movies");
      setMovies(data);
    } else {
      const stringified = queryString.stringify(queryParams);
      const { data } = await vidly.get(`/movies?${stringified}`);
      setMovies(data);
    }
  };

  const renderMovies = () => {
    return movies.map(movie => {
      return <MovieItem movie={movie} key={movie._id} />;
    });
  };

  return (
    <>
      <h2 className="movies-header">Movies</h2>
      <ul className="movies-container">{renderMovies()}</ul>
    </>
  );
};

export default Movies;

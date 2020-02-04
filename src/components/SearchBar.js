import React, { useRef } from "react";
import _ from "lodash";
import vidly from "../apis/index";
import history from "../history";

const SearchBar = () => {
  const searchTerm = useRef();

  const onFormSubmit = async e => {
    e.preventDefault();
    const { data: movie } = await vidly.get(
      `/movies?title=${searchTerm.current.value}`
    );
    const { data: tvShow } = await vidly.get(
      `/tvShows?title=${searchTerm.current.value}`
    );
    if (_.isNil(_.head(movie)) && _.isNil(_.head(tvShow))) {
      return null;
    } else if (!_.isNil(_.head(movie))) {
      history.push(`/movie/${_.head(movie)._id}`);
    } else {
      history.push(`/tv-show/${_.head(tvShow)._id}`);
    }
  };

  return (
    <form onSubmit={onFormSubmit} className="search-bar-form">
      <input id="search-bar" type="text" ref={searchTerm} />
      <button className="search-btn">🔎</button>
    </form>
  );
};

export default SearchBar;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import vidly from "../../apis/index";
import TvShowItem from "./TvShowItem";
import "../../styles/movies/Movies.css";

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const { search } = useLocation();
  const queryParams = queryString.parse(search);

  useEffect(() => {
    fetchTvShows();
  }, [queryParams]);

  const fetchTvShows = async () => {
    try {
      if (!queryParams.genre) {
        const { data } = await vidly.get("/tvShows");
        setTvShows(data);
      } else {
        const stringified = queryString.stringify(queryParams);
        const { data } = await vidly.get(`/tvShows?${stringified}`);
        setTvShows(data);
      }
    } catch (ex) {
      throw new Error(ex);
    }
  };

  const renderTvShows = () => {
    return tvShows.map(tvShow => {
      return <TvShowItem tvShow={tvShow} key={tvShow._id} />;
    });
  };

  return (
    <>
      <ul className="movies-container">{renderTvShows()}</ul>
    </>
  );
};

export default TvShows;

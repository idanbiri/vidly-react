import React, { useEffect, useState } from "react";
import vidly from "../../apis/index";
import TvShowItem from "./TvShowItem";
import "../../styles/movies/Movies.css";

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);
  useEffect(() => {
    fetchTvShows();
  }, []);

  const fetchTvShows = async () => {
    const { data } = await vidly.get("/tvShows");
    setTvShows(data);
  };

  const renderTvShows = () => {
    return tvShows.map(tvShow => {
      return <TvShowItem tvShow={tvShow} key={tvShow._id} />;
    });
  };

  return (
    <>
      <h2 className="movies-header">Tv-Shows</h2>
      <ul className="movies-container">{renderTvShows()}</ul>
    </>
  );
};

export default TvShows;

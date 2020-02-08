import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import Likes from "./Likes";
import AddCommentBtn from "./AddCommentBtn";
import TvShowRatings from "./TvShowRatings";
import BuyTvShow from "./BuyTvShow";
import vidly from "../../apis/index";
import "../../styles/movies/MovieDetail.css";

const TvShowDetail = props => {
  const [tvShow, setTvShow] = useState({});
  useEffect(() => {
    fetchTvShow();
  }, [props.match.params.tvShowId]);

  const fetchTvShow = async () => {
    try {
      const { data } = await vidly.get(
        `/tvShows/${props.match.params.tvShowId}`
      );
      setTvShow(data);
    } catch (ex) {
      throw new Error(ex);
    }
  };

  const renderGenreName = () => {
    if (!tvShow.genre) {
      return null;
    }
    return tvShow.genre.name;
  };

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-header">
        <h1>
          {tvShow.title}
          <span>{` (${renderGenreName()})`}</span>
        </h1>
      </div>
      <div className="movie-detail-img">
        <img src={tvShow.image} alt="movie img" />
      </div>
      <div className="movie-detail-comments">
        <Comments tvShowId={props.match.params.tvShowId} />
      </div>
      <div className="movie-detail-likes">
        <Likes tvShowId={props.match.params.tvShowId} />
      </div>
      <div className="movie-detail-btns">
        <AddCommentBtn />
        <BuyTvShow tvShowId={props.match.params.tvShowId} />
      </div>
      <TvShowRatings ratings={tvShow.ratings} plot={tvShow.plot} />
    </div>
  );
};

export default TvShowDetail;

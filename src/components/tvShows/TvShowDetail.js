import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import Likes from "./Likes";
import AddCommentBtn from "./AddCommentBtn";
import BuyTvShow from "./BuyTvShow";
import vidly from "../../apis/index";
import "../../styles/movies/MovieDetail.css";

const TvShowDetail = props => {
  const [tvShow, setTvShow] = useState({});
  useEffect(() => {
    fetchTvShow();
  }, [props.match.params.tvShowId]);

  const fetchTvShow = async () => {
    const { data } = await vidly.get(`/tvShows/${props.match.params.tvShowId}`);
    setTvShow(data);
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
        <h3>Title: {tvShow.title}</h3>
        <h4>Genre: {renderGenreName()}</h4>
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
    </div>
  );
};

export default TvShowDetail;

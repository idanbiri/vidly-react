import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import Likes from "./Likes";
import AddCommentBtn from "./AddCommentBtn";
import vidly from "../apis/index";
import "../styles/MovieDetail.css";

const MovieDetail = props => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const { data } = await vidly.get(`/movies/${props.match.params.movieId}`);
    setMovie(data);
  };

  const renderGenreName = () => {
    if (!movie.genre) {
      return null;
    }
    return movie.genre.name;
  };

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-header">
        <h3>Title: {movie.title}</h3>
        <h4>Genre: {renderGenreName()}</h4>
      </div>
      <div className="movie-detail-img">
        <img src={movie.image} alt="movie img" />
      </div>
      <div className="movie-detail-comments">
        <Comments movieId={props.match.params.movieId} />
      </div>
      <div className="movie-detail-likes">
        <Likes movieId={props.match.params.movieId} />
      </div>
      <div className="movie-detail-btns">
        <AddCommentBtn />
      </div>
    </div>
  );
};

export default MovieDetail;

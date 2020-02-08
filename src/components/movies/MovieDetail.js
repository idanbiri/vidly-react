import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import Likes from "./Likes";
import AddCommentBtn from "./AddCommentBtn";
import BuyMovie from "./BuyMovie";
import MovieRating from "./MovieRatings";
import vidly from "../../apis/index";
import "../../styles/movies/MovieDetail.css";

const MovieDetail = props => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetchMovie();
  }, [props.match.params.movieId]);

  const fetchMovie = async () => {
    try {
      const { data } = await vidly.get(`/movies/${props.match.params.movieId}`);
      setMovie(data);
    } catch (ex) {
      throw new Error(ex);
    }
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
        <h1>
          {movie.title}
          <span>{` (${renderGenreName()})`}</span>
        </h1>
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
        <BuyMovie movieId={props.match.params.movieId} />
      </div>
      <MovieRating ratings={movie.ratings} plot={movie.plot} />
    </div>
  );
};

export default MovieDetail;

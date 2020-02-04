import React from "react";

const MovieRating = ({ ratings, plot }) => {
  const renderMovieRatings = () => {
    if (!ratings) return null;
    return ratings.map((rating, index) => {
      return (
        <p key={index} className="rating-container">
          <span>{rating.Source}: </span>
          {rating.Value}
        </p>
      );
    });
  };
  return (
    <div className="movie-rating-plot-container">
      {renderMovieRatings()}
      <p>{plot}</p>
    </div>
  );
};

export default MovieRating;

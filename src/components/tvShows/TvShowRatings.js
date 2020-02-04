import React from "react";

const TvShowRatings = ({ ratings, plot }) => {
  const renderTvShowRatings = () => {
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
      {renderTvShowRatings()}
      <p>{plot}</p>
    </div>
  );
};

export default TvShowRatings;

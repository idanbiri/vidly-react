import React, { useContext, useState } from "react";
import UserStatusContext from "../../contexts/UserStatus";
import vidly from "../../apis/index";
import history from "../../history";
import "../../styles/movies/BuyMovie.css";

const BuyMovie = ({ movieId }) => {
  const { userStatus } = useContext(UserStatusContext);

  const renderBuyBtn = () => {
    if (userStatus) {
      return (
        <button className="buy-movie-btn" onClick={onClickBuyBtn}>
          Buy
        </button>
      );
    } else {
      return (
        <button className="buy-movie-btn disabled" disabled>
          Buy
        </button>
      );
    }
  };

  const onClickBuyBtn = async () => {
    await vidly.post("/transactions", {
      movieId
    });
    history.push("/transactions");
  };
  return <>{renderBuyBtn()}</>;
};

export default BuyMovie;

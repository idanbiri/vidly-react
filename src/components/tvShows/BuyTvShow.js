import React, { useContext, useState } from "react";
import UserStatusContext from "../../contexts/UserStatus";
import vidly from "../../apis/index";
import history from "../../history";
import "../../styles/movies/BuyMovie.css";

const BuyTvShow = ({ tvShowId }) => {
  const { userStatus } = useContext(UserStatusContext);

  const renderBuyBtn = () => {
    if (userStatus) {
      return (
        <button className="buy-movie-btn" onClick={onClickBuyBtn}>
          Buy
        </button>
      );
    } else {
      return <button className="buy-movie-btn">Buy</button>;
    }
  };

  const onClickBuyBtn = async () => {
    await vidly.post("/transactions", {
      tvShowId
    });
    history.push("/transactions");
  };
  return <>{renderBuyBtn()}</>;
};

export default BuyTvShow;

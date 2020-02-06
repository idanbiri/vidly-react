import React, { useContext } from "react";
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
      return <button className="buy-movie-btn disabled">Buy</button>;
    }
  };

  const onClickBuyBtn = async () => {
    try {
      await vidly.post("/transactions", {
        tvShowId
      });
      history.push("/transactions");
    } catch (ex) {
      console.log(ex);
    }
  };
  return <>{renderBuyBtn()}</>;
};

export default BuyTvShow;

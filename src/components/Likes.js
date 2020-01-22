import React, { useEffect, useState, useContext } from "react";
import _ from "lodash";
import UserInfoContext from "../contexts/UserInfo";
import UserStatusContext from "../contexts/UserStatus";
import vidly from "../apis/index";
import "../styles/Likes.css";

const Likes = ({ movieId }) => {
  const { userInfo } = useContext(UserInfoContext);
  const { userStatus } = useContext(UserStatusContext);
  const [likes, setLikes] = useState([]);
  let [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    fetchLikes();
  }, [likeCount]);

  const renderButtons = () => {
    if (userStatus) {
      return (
        <>
          <img
            onClick={onDislikeBtnClick}
            src="https://image.flaticon.com/icons/svg/1455/1455915.svg"
            className="dislike-img"
          />
          <img
            onClick={onLikeBtnClick}
            className="like-img"
            src="https://image.flaticon.com/icons/svg/456/456115.svg"
          />
        </>
      );
    }
    return null;
  };

  const onDislikeBtnClick = async () => {
    if (_.includes(likes, userInfo._id)) {
      await vidly.delete(`/likes/${movieId}`);
      setLikeCount(likeCount--);
    }
  };

  const onLikeBtnClick = async () => {
    if (!_.includes(likes, userInfo._id)) {
      await vidly.post(`/likes/${movieId}`);
      setLikeCount(likeCount++);
    }
  };

  const fetchLikes = async () => {
    const { data } = await vidly.get(`/movies/${movieId}`);
    setLikes(data.likes);
    setLikeCount(data.likeCount);
  };

  return (
    <>
      {renderButtons()}
      <span className="like-count">
        <span className="like-number">{likeCount} </span>
        Likes
      </span>
    </>
  );
};

export default Likes;

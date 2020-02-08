import React, { useEffect, useState, useContext } from "react";
import _ from "lodash";
import UserInfoContext from "../../contexts/UserInfo";
import UserStatusContext from "../../contexts/UserStatus";
import vidly from "../../apis/index";
import "../../styles/movies/Likes.css";

const Likes = ({ movieId }) => {
  const { userInfo } = useContext(UserInfoContext);
  const { userStatus } = useContext(UserStatusContext);
  const [likes, setLikes] = useState([]);
  let [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    fetchLikes();
  }, [likeCount]);

  const renderButtons = () => {
    if (userStatus && !_.includes(likes, userInfo._id)) {
      return (
        <>
          <img
            onClick={onDislikeBtnClick}
            src="https://image.flaticon.com/icons/svg/889/889220.svg"
            className="dislike-img disabled"
          />
          <img
            onClick={onLikeBtnClick}
            className="like-img"
            src="https://image.flaticon.com/icons/svg/889/889221.svg"
          />
        </>
      );
    } else if (userStatus && _.includes(likes, userInfo._id)) {
      return (
        <>
          <img
            onClick={onDislikeBtnClick}
            src="https://image.flaticon.com/icons/svg/889/889220.svg"
            className="dislike-img"
          />
          <img
            onClick={onLikeBtnClick}
            className="like-img disabled"
            src="https://image.flaticon.com/icons/svg/889/889221.svg"
          />
        </>
      );
    } else {
      return (
        <>
          <img
            src="https://image.flaticon.com/icons/svg/889/889220.svg"
            className="dislike-img disabled"
          />
          <img
            className="like-img disabled"
            src="https://image.flaticon.com/icons/svg/889/889221.svg"
          />
        </>
      );
    }
  };

  const onDislikeBtnClick = async () => {
    try {
      if (_.includes(likes, userInfo._id)) {
        await vidly.delete(`/likes/${movieId}`);
        setLikeCount(likeCount--);
      }
    } catch (ex) {
      throw new Error(ex);
    }
  };

  const onLikeBtnClick = async () => {
    try {
      if (!_.includes(likes, userInfo._id)) {
        await vidly.post(`/likes/${movieId}`);
        setLikeCount(likeCount++);
      }
    } catch (ex) {
      throw new Error(ex);
    }
  };

  const fetchLikes = async () => {
    try {
      const { data } = await vidly.get(`/movies/${movieId}`);
      setLikes(data.likes);
      setLikeCount(data.likeCount);
    } catch (ex) {
      throw new Error(ex);
    }
  };

  return (
    <>
      {renderButtons()}
      <span className="like-count">
        <span className="like-number">{likeCount}</span>
        Likes
      </span>
    </>
  );
};

export default Likes;

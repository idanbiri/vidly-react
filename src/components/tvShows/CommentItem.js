import React, { useContext } from "react";
import UserInfoContext from "../../contexts/UserInfo";
import vidly from "../../apis/index";
import "../../styles/movies/CommentItem.css";

const CommentItem = ({ comment, commentDelete }) => {
  const { userInfo } = useContext(UserInfoContext);
  const renderDeleteButton = () => {
    if (userInfo._id === comment.user._id) {
      return <button onClick={onClickDeleteBtn}>Delete</button>;
    }
    return null;
  };
  const onClickDeleteBtn = async () => {
    await vidly.delete(`/comments/${comment._id}`);
    commentDelete(comment._id);
  };

  return (
    <div className="comment-container">
      <span className="comment-user-name">{comment.user.name}:</span>
      <p className="comment-body">{comment.body}</p>
      {renderDeleteButton()}
    </div>
  );
};

export default CommentItem;

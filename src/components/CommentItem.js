import React from "react";
import "../styles/CommentItem.css";
const CommentItem = ({ comment }) => {
  return (
    <div className="comment-container">
      <span className="comment-user-name">{comment.user.name}:</span>
      <p className="comment-body">{comment.body}</p>
    </div>
  );
};

export default CommentItem;

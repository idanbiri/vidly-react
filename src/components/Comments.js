import React from "react";
import CommentItem from "./CommentItem";
import "../styles/Comments.css";

const Comments = ({ comments }) => {
  const renderComments = () => {
    if (!comments) {
      return null;
    }
    return comments.map(comment => {
      return <CommentItem comment={comment} key={comment._id} />;
    });
  };
  return (
    <>
      <h5 className="comments-title">Comments</h5>
      {renderComments()}
    </>
  );
};

export default Comments;

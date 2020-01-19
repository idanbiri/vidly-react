import React, { useEffect, useState } from "react";
import _ from "lodash";
import CommentItem from "./CommentItem";
import vidly from "../apis/index";
import "../styles/Comments.css";

const Comments = ({ movieId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const { data } = await vidly.get(`/movies/${movieId}`);
    setComments(data.comments);
  };

  const commentDelete = commentId => {
    const newComments = _.reject(comments, { _id: commentId });
    setComments(newComments);
  };
  const renderComments = () => {
    if (!comments) {
      return null;
    }
    return comments.map(comment => {
      return (
        <CommentItem
          comment={comment}
          key={comment._id}
          commentDelete={commentDelete}
        />
      );
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

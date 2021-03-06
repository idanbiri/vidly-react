import React, { useEffect, useState } from "react";
import _ from "lodash";
import CommentItem from "./CommentItem";
import AddCommentForm from "./AddCommentForm";
import vidly from "../../apis/index";
import "../../styles/movies/Comments.css";

const Comments = ({ tvShowId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const { data } = await vidly.get(`/tvShows/${tvShowId}`);
      setComments(data.comments);
    } catch (ex) {
      throw new Error(ex);
    }
  };

  const commentDelete = commentId => {
    const newComments = _.reject(comments, { _id: commentId });
    setComments(newComments);
  };

  const addNewComment = newComment => {
    setComments(_.concat(comments, newComment));
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
      {renderComments()}
      <AddCommentForm tvShowId={tvShowId} addNewComment={addNewComment} />
    </>
  );
};

export default Comments;

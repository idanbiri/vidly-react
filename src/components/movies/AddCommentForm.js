import React, { useContext, useState } from "react";
import _ from "lodash";
import AddCommentFormContext from "../../contexts/ShowAddCommentForm";
import vidly from "../../apis/index";
import "../../styles/AddCommentForm.css";

const AddCommentForm = ({ movieId, addNewComment }) => {
  const [comment, setComment] = useState("");
  const { displayForm, onChangeDisplayForm } = useContext(
    AddCommentFormContext
  );
  const onFormSubmit = async e => {
    e.preventDefault();
    const newComment = {
      movieId,
      content: comment
    };
    const { data } = await vidly.post("/comments", newComment);
    const { comments } = data;
    addNewComment(_.last(comments));
    onChangeDisplayForm("none");
  };
  return (
    <form onSubmit={onFormSubmit} style={{ display: displayForm }}>
      <textarea
        className="comment-textarea"
        onChange={e => {
          setComment(e.target.value);
        }}
        rows="5"
        cols="33"
        placeholder="add a comment"
      />
      <button className="submit-comment-btn">Sumbit comment</button>
    </form>
  );
};

export default AddCommentForm;
